"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("next/dist/compiled/compression"));
const fs_1 = __importDefault(require("fs"));
const chalk_1 = __importDefault(require("next/dist/compiled/chalk"));
const http_proxy_1 = __importDefault(require("next/dist/compiled/http-proxy"));
const path_1 = require("path");
const querystring_1 = require("querystring");
const url_1 = require("url");
const check_custom_routes_1 = require("../../lib/check-custom-routes");
const coalesced_function_1 = require("../../lib/coalesced-function");
const constants_1 = require("../lib/constants");
const utils_1 = require("../lib/router/utils");
const envConfig = __importStar(require("../lib/runtime-config"));
const utils_2 = require("../lib/utils");
const api_utils_1 = require("./api-utils");
const config_1 = __importStar(require("./config"));
const path_match_1 = __importDefault(require("./lib/path-match"));
const recursive_readdir_sync_1 = require("./lib/recursive-readdir-sync");
const load_components_1 = require("./load-components");
const normalize_page_path_1 = require("./normalize-page-path");
const render_1 = require("./render");
const require_1 = require("./require");
const router_1 = __importStar(require("./router"));
const send_html_1 = require("./send-html");
const send_payload_1 = require("./send-payload");
const serve_static_1 = require("./serve-static");
const spr_cache_1 = require("./spr-cache");
const utils_3 = require("../lib/utils");
const utils_4 = require("./utils");
const path_to_regexp_1 = require("next/dist/compiled/path-to-regexp");
const load_env_config_1 = require("../../lib/load-env-config");
const node_fetch_1 = __importDefault(require("next/dist/compiled/node-fetch"));
// @ts-ignore fetch exists globally
if (!global.fetch) {
    // Polyfill fetch() in the Node.js environment
    // @ts-ignore fetch exists globally
    global.fetch = node_fetch_1.default;
}
const getCustomRouteMatcher = path_match_1.default(true);
class Server {
    constructor({ dir = '.', staticMarkup = false, quiet = false, conf = null, dev = false, customServer = true, } = {}) {
        var _a;
        this.customErrorNo404Warn = utils_3.execOnce(() => {
            console.warn(chalk_1.default.bold.yellow(`Warning: `) +
                chalk_1.default.yellow(`You have added a custom /_error page without a custom /404 page. This prevents the 404 page from being auto statically optimized.\nSee here for info: https://err.sh/next.js/custom-error-no-custom-404`));
        });
        this._validFilesystemPathSet = null;
        this.dir = path_1.resolve(dir);
        this.quiet = quiet;
        const phase = this.currentPhase();
        load_env_config_1.loadEnvConfig(this.dir, dev);
        this.nextConfig = config_1.default(phase, this.dir, conf);
        this.distDir = path_1.join(this.dir, this.nextConfig.distDir);
        this.publicDir = path_1.join(this.dir, constants_1.CLIENT_PUBLIC_FILES_PATH);
        this.hasStaticDir = fs_1.default.existsSync(path_1.join(this.dir, 'static'));
        // Only serverRuntimeConfig needs the default
        // publicRuntimeConfig gets it's default in client/index.js
        const { serverRuntimeConfig = {}, publicRuntimeConfig, assetPrefix, generateEtags, compress, } = this.nextConfig;
        this.buildId = this.readBuildId();
        this.renderOpts = {
            poweredByHeader: this.nextConfig.poweredByHeader,
            canonicalBase: this.nextConfig.amp.canonicalBase,
            staticMarkup,
            buildId: this.buildId,
            generateEtags,
            previewProps: this.getPreviewProps(),
            customServer: customServer === true ? true : undefined,
            ampOptimizerConfig: (_a = this.nextConfig.experimental.amp) === null || _a === void 0 ? void 0 : _a.optimizer,
            basePath: this.nextConfig.experimental.basePath,
        };
        // Only the `publicRuntimeConfig` key is exposed to the client side
        // It'll be rendered as part of __NEXT_DATA__ on the client side
        if (Object.keys(publicRuntimeConfig).length > 0) {
            this.renderOpts.runtimeConfig = publicRuntimeConfig;
        }
        if (compress && this.nextConfig.target === 'server') {
            this.compression = compression_1.default();
        }
        // Initialize next/config with the environment configuration
        envConfig.setConfig({
            serverRuntimeConfig,
            publicRuntimeConfig,
        });
        this.serverBuildDir = path_1.join(this.distDir, this._isLikeServerless ? constants_1.SERVERLESS_DIRECTORY : constants_1.SERVER_DIRECTORY);
        const pagesManifestPath = path_1.join(this.serverBuildDir, constants_1.PAGES_MANIFEST);
        if (!dev) {
            this.pagesManifest = require(pagesManifestPath);
        }
        this.router = new router_1.default(this.generateRoutes());
        this.setAssetPrefix(assetPrefix);
        // call init-server middleware, this is also handled
        // individually in serverless bundles when deployed
        if (!dev && this.nextConfig.experimental.plugins) {
            const initServer = require(path_1.join(this.serverBuildDir, 'init-server.js'))
                .default;
            this.onErrorMiddleware = require(path_1.join(this.serverBuildDir, 'on-error-server.js')).default;
            initServer();
        }
        spr_cache_1.initializeSprCache({
            dev,
            distDir: this.distDir,
            pagesDir: path_1.join(this.distDir, this._isLikeServerless
                ? constants_1.SERVERLESS_DIRECTORY
                : `${constants_1.SERVER_DIRECTORY}/static/${this.buildId}`, 'pages'),
            flushToDisk: this.nextConfig.experimental.sprFlushToDisk,
        });
    }
    currentPhase() {
        return constants_1.PHASE_PRODUCTION_SERVER;
    }
    logError(err) {
        if (this.onErrorMiddleware) {
            this.onErrorMiddleware({ err });
        }
        if (this.quiet)
            return;
        // tslint:disable-next-line
        console.error(err);
    }
    async handleRequest(req, res, parsedUrl) {
        // Parse url if parsedUrl not provided
        if (!parsedUrl || typeof parsedUrl !== 'object') {
            const url = req.url;
            parsedUrl = url_1.parse(url, true);
        }
        // Parse the querystring ourselves if the user doesn't handle querystring parsing
        if (typeof parsedUrl.query === 'string') {
            parsedUrl.query = querystring_1.parse(parsedUrl.query);
        }
        const { basePath } = this.nextConfig.experimental;
        // if basePath is set require it be present
        if (basePath && !req.url.startsWith(basePath)) {
            return this.render404(req, res, parsedUrl);
        }
        else {
            // If replace ends up replacing the full url it'll be `undefined`, meaning we have to default it to `/`
            parsedUrl.pathname = parsedUrl.pathname.replace(basePath, '') || '/';
            req.url = req.url.replace(basePath, '');
        }
        res.statusCode = 200;
        try {
            return await this.run(req, res, parsedUrl);
        }
        catch (err) {
            this.logError(err);
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    }
    getRequestHandler() {
        return this.handleRequest.bind(this);
    }
    setAssetPrefix(prefix) {
        this.renderOpts.assetPrefix = prefix ? prefix.replace(/\/$/, '') : '';
    }
    // Backwards compatibility
    async prepare() { }
    // Backwards compatibility
    async close() { }
    setImmutableAssetCacheControl(res) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    getCustomRoutes() {
        return require(path_1.join(this.distDir, constants_1.ROUTES_MANIFEST));
    }
    getPrerenderManifest() {
        if (this._cachedPreviewManifest) {
            return this._cachedPreviewManifest;
        }
        const manifest = require(path_1.join(this.distDir, constants_1.PRERENDER_MANIFEST));
        return (this._cachedPreviewManifest = manifest);
    }
    getPreviewProps() {
        return this.getPrerenderManifest().preview;
    }
    generateRoutes() {
        this.customRoutes = this.getCustomRoutes();
        const publicRoutes = fs_1.default.existsSync(this.publicDir)
            ? this.generatePublicRoutes()
            : [];
        const staticFilesRoute = this.hasStaticDir
            ? [
                {
                    // It's very important to keep this route's param optional.
                    // (but it should support as many params as needed, separated by '/')
                    // Otherwise this will lead to a pretty simple DOS attack.
                    // See more: https://github.com/zeit/next.js/issues/2617
                    match: router_1.route('/static/:path*'),
                    name: 'static catchall',
                    fn: async (req, res, params, parsedUrl) => {
                        const p = path_1.join(this.dir, 'static', ...(params.path || []).map(encodeURIComponent));
                        await this.serveStatic(req, res, p, parsedUrl);
                        return {
                            finished: true,
                        };
                    },
                },
            ]
            : [];
        let headers = [];
        let rewrites = [];
        let redirects = [];
        const fsRoutes = [
            {
                match: router_1.route('/_next/static/:path*'),
                type: 'route',
                name: '_next/static catchall',
                fn: async (req, res, params, parsedUrl) => {
                    // The commons folder holds commonschunk files
                    // The chunks folder holds dynamic entries
                    // The buildId folder holds pages and potentially other assets. As buildId changes per build it can be long-term cached.
                    // make sure to 404 for /_next/static itself
                    if (!params.path) {
                        await this.render404(req, res, parsedUrl);
                        return {
                            finished: true,
                        };
                    }
                    if (params.path[0] === constants_1.CLIENT_STATIC_FILES_RUNTIME ||
                        params.path[0] === 'chunks' ||
                        params.path[0] === 'css' ||
                        params.path[0] === 'media' ||
                        params.path[0] === this.buildId) {
                        this.setImmutableAssetCacheControl(res);
                    }
                    const p = path_1.join(this.distDir, constants_1.CLIENT_STATIC_FILES_PATH, ...(params.path || []));
                    await this.serveStatic(req, res, p, parsedUrl);
                    return {
                        finished: true,
                    };
                },
            },
            {
                match: router_1.route('/_next/data/:path*'),
                type: 'route',
                name: '_next/data catchall',
                fn: async (req, res, params, _parsedUrl) => {
                    // Make sure to 404 for /_next/data/ itself and
                    // we also want to 404 if the buildId isn't correct
                    if (!params.path || params.path[0] !== this.buildId) {
                        await this.render404(req, res, _parsedUrl);
                        return {
                            finished: true,
                        };
                    }
                    // remove buildId from URL
                    params.path.shift();
                    // show 404 if it doesn't end with .json
                    if (!params.path[params.path.length - 1].endsWith('.json')) {
                        await this.render404(req, res, _parsedUrl);
                        return {
                            finished: true,
                        };
                    }
                    // re-create page's pathname
                    const pathname = `/${params.path.join('/')}`
                        .replace(/\.json$/, '')
                        .replace(/\/index$/, '/');
                    const parsedUrl = url_1.parse(pathname, true);
                    await this.render(req, res, pathname, Object.assign(Object.assign({}, _parsedUrl.query), { _nextDataReq: '1' }), parsedUrl);
                    return {
                        finished: true,
                    };
                },
            },
            {
                match: router_1.route('/_next/:path*'),
                type: 'route',
                name: '_next catchall',
                // This path is needed because `render()` does a check for `/_next` and the calls the routing again
                fn: async (req, res, _params, parsedUrl) => {
                    await this.render404(req, res, parsedUrl);
                    return {
                        finished: true,
                    };
                },
            },
            ...publicRoutes,
            ...staticFilesRoute,
        ];
        if (this.customRoutes) {
            const getCustomRoute = (r, type) => (Object.assign(Object.assign({}, r), { type, match: getCustomRouteMatcher(r.source), name: type, fn: async (req, res, params, parsedUrl) => ({ finished: false }) }));
            const updateHeaderValue = (value, params) => {
                if (!value.includes(':')) {
                    return value;
                }
                const { parsedDestination } = router_1.prepareDestination(value, params, {});
                if (!parsedDestination.pathname ||
                    !parsedDestination.pathname.startsWith('/')) {
                    return path_to_regexp_1.compile(value, { validate: false })(params);
                }
                return url_1.format(parsedDestination);
            };
            // Headers come very first
            headers = this.customRoutes.headers.map(r => {
                const route = getCustomRoute(r, 'header');
                return {
                    match: route.match,
                    type: route.type,
                    name: `${route.type} ${route.source} header route`,
                    fn: async (_req, res, params, _parsedUrl) => {
                        const hasParams = Object.keys(params).length > 0;
                        for (const header of route.headers) {
                            let { key, value } = header;
                            if (hasParams) {
                                key = updateHeaderValue(key, params);
                                value = updateHeaderValue(value, params);
                            }
                            res.setHeader(key, value);
                        }
                        return { finished: false };
                    },
                };
            });
            redirects = this.customRoutes.redirects.map(redirect => {
                const route = getCustomRoute(redirect, 'redirect');
                return {
                    type: route.type,
                    match: route.match,
                    statusCode: route.statusCode,
                    name: `Redirect route`,
                    fn: async (_req, res, params, parsedUrl) => {
                        const { parsedDestination } = router_1.prepareDestination(route.destination, params, parsedUrl.query);
                        const updatedDestination = url_1.format(parsedDestination);
                        res.setHeader('Location', updatedDestination);
                        res.statusCode = check_custom_routes_1.getRedirectStatus(route);
                        // Since IE11 doesn't support the 308 header add backwards
                        // compatibility using refresh header
                        if (res.statusCode === 308) {
                            res.setHeader('Refresh', `0;url=${updatedDestination}`);
                        }
                        res.end();
                        return {
                            finished: true,
                        };
                    },
                };
            });
            rewrites = this.customRoutes.rewrites.map(rewrite => {
                const route = getCustomRoute(rewrite, 'rewrite');
                return {
                    check: true,
                    type: route.type,
                    name: `Rewrite route`,
                    match: route.match,
                    fn: async (req, res, params, parsedUrl) => {
                        const { newUrl, parsedDestination } = router_1.prepareDestination(route.destination, params, parsedUrl.query, true);
                        // external rewrite, proxy it
                        if (parsedDestination.protocol) {
                            const target = url_1.format(parsedDestination);
                            const proxy = new http_proxy_1.default({
                                target,
                                changeOrigin: true,
                                ignorePath: true,
                            });
                            proxy.web(req, res);
                            proxy.on('error', (err) => {
                                console.error(`Error occurred proxying ${target}`, err);
                            });
                            return {
                                finished: true,
                            };
                        }
                        ;
                        req._nextDidRewrite = true;
                        return {
                            finished: false,
                            pathname: newUrl,
                            query: parsedDestination.query,
                        };
                    },
                };
            });
        }
        const catchAllRoute = {
            match: router_1.route('/:path*'),
            type: 'route',
            name: 'Catchall render',
            fn: async (req, res, params, parsedUrl) => {
                var _a;
                const { pathname, query } = parsedUrl;
                if (!pathname) {
                    throw new Error('pathname is undefined');
                }
                if (((_a = params === null || params === void 0 ? void 0 : params.path) === null || _a === void 0 ? void 0 : _a[0]) === 'api') {
                    const handled = await this.handleApiRequest(req, res, pathname, query);
                    if (handled) {
                        return { finished: true };
                    }
                }
                await this.render(req, res, pathname, query, parsedUrl);
                return {
                    finished: true,
                };
            },
        };
        const { useFileSystemPublicRoutes } = this.nextConfig;
        if (useFileSystemPublicRoutes) {
            this.dynamicRoutes = this.getDynamicRoutes();
        }
        return {
            headers,
            fsRoutes,
            rewrites,
            redirects,
            catchAllRoute,
            useFileSystemPublicRoutes,
            dynamicRoutes: this.dynamicRoutes,
            pageChecker: this.hasPage.bind(this),
        };
    }
    async getPagePath(pathname) {
        return require_1.getPagePath(pathname, this.distDir, this._isLikeServerless, this.renderOpts.dev);
    }
    async hasPage(pathname) {
        let found = false;
        try {
            found = !!(await this.getPagePath(pathname));
        }
        catch (_) { }
        return found;
    }
    async _beforeCatchAllRender(_req, _res, _params, _parsedUrl) {
        return false;
    }
    // Used to build API page in development
    async ensureApiPage(pathname) { }
    /**
     * Resolves `API` request, in development builds on demand
     * @param req http request
     * @param res http response
     * @param pathname path of request
     */
    async handleApiRequest(req, res, pathname, query) {
        let page = pathname;
        let params = false;
        let pageFound = await this.hasPage(page);
        if (!pageFound && this.dynamicRoutes) {
            for (const dynamicRoute of this.dynamicRoutes) {
                params = dynamicRoute.match(pathname);
                if (dynamicRoute.page.startsWith('/api') && params) {
                    page = dynamicRoute.page;
                    pageFound = true;
                    break;
                }
            }
        }
        if (!pageFound) {
            return false;
        }
        // Make sure the page is built before getting the path
        // or else it won't be in the manifest yet
        await this.ensureApiPage(page);
        const builtPagePath = await this.getPagePath(page);
        const pageModule = require(builtPagePath);
        query = Object.assign(Object.assign({}, query), params);
        if (!this.renderOpts.dev && this._isLikeServerless) {
            if (typeof pageModule.default === 'function') {
                prepareServerlessUrl(req, query);
                await pageModule.default(req, res);
                return true;
            }
        }
        await api_utils_1.apiResolver(req, res, query, pageModule, this.renderOpts.previewProps, this.onErrorMiddleware);
        return true;
    }
    generatePublicRoutes() {
        const publicFiles = new Set(recursive_readdir_sync_1.recursiveReadDirSync(this.publicDir).map(p => p.replace(/\\/g, '/')));
        return [
            {
                match: router_1.route('/:path*'),
                name: 'public folder catchall',
                fn: async (req, res, params, parsedUrl) => {
                    const pathParts = params.path || [];
                    const path = `/${pathParts.join('/')}`;
                    if (publicFiles.has(path)) {
                        await this.serveStatic(req, res, 
                        // we need to re-encode it since send decodes it
                        path_1.join(this.publicDir, ...pathParts.map(encodeURIComponent)), parsedUrl);
                        return {
                            finished: true,
                        };
                    }
                    return {
                        finished: false,
                    };
                },
            },
        ];
    }
    getDynamicRoutes() {
        const dynamicRoutedPages = Object.keys(this.pagesManifest).filter(utils_1.isDynamicRoute);
        return utils_1.getSortedRoutes(dynamicRoutedPages).map(page => ({
            page,
            match: utils_1.getRouteMatcher(utils_1.getRouteRegex(page)),
        }));
    }
    handleCompression(req, res) {
        if (this.compression) {
            this.compression(req, res, () => { });
        }
    }
    async run(req, res, parsedUrl) {
        this.handleCompression(req, res);
        try {
            const matched = await this.router.execute(req, res, parsedUrl);
            if (matched) {
                return;
            }
        }
        catch (err) {
            if (err.code === 'DECODE_FAILED') {
                res.statusCode = 400;
                return this.renderError(null, req, res, '/_error', {});
            }
            throw err;
        }
        await this.render404(req, res, parsedUrl);
    }
    async sendHTML(req, res, html) {
        const { generateEtags, poweredByHeader } = this.renderOpts;
        return send_html_1.sendHTML(req, res, html, { generateEtags, poweredByHeader });
    }
    async render(req, res, pathname, query = {}, parsedUrl) {
        if (!pathname.startsWith('/')) {
            console.warn(`Cannot render page with path "${pathname}", did you mean "/${pathname}"?. See more info here: https://err.sh/next.js/render-no-starting-slash`);
        }
        const url = req.url;
        // we allow custom servers to call render for all URLs
        // so check if we need to serve a static _next file or not.
        // we don't modify the URL for _next/data request but still
        // call render so we special case this to prevent an infinite loop
        if (!query._nextDataReq &&
            (url.match(/^\/_next\//) ||
                (this.hasStaticDir && url.match(/^\/static\//)))) {
            return this.handleRequest(req, res, parsedUrl);
        }
        if (utils_4.isBlockedPage(pathname)) {
            return this.render404(req, res, parsedUrl);
        }
        const html = await this.renderToHTML(req, res, pathname, query);
        // Request was ended by the user
        if (html === null) {
            return;
        }
        return this.sendHTML(req, res, html);
    }
    async findPageComponents(pathname, query = {}, params = null) {
        const paths = [
            // try serving a static AMP version first
            query.amp ? normalize_page_path_1.normalizePagePath(pathname) + '.amp' : null,
            pathname,
        ].filter(Boolean);
        for (const pagePath of paths) {
            try {
                const components = await load_components_1.loadComponents(this.distDir, this.buildId, pagePath, !this.renderOpts.dev && this._isLikeServerless);
                return {
                    components,
                    query: Object.assign(Object.assign({}, (components.getStaticProps
                        ? { _nextDataReq: query._nextDataReq, amp: query.amp }
                        : query)), (params || {})),
                };
            }
            catch (err) {
                if (err.code !== 'ENOENT')
                    throw err;
            }
        }
        return null;
    }
    async getStaticPaths(pathname) {
        // we lazy load the staticPaths to prevent the user
        // from waiting on them for the page to load in dev mode
        let staticPaths;
        let hasStaticFallback = false;
        if (!this.renderOpts.dev) {
            // `staticPaths` is intentionally set to `undefined` as it should've
            // been caught when checking disk data.
            staticPaths = undefined;
            // Read whether or not fallback should exist from the manifest.
            hasStaticFallback =
                typeof this.getPrerenderManifest().dynamicRoutes[pathname].fallback ===
                    'string';
        }
        else {
            const __getStaticPaths = async () => {
                const paths = await this.staticPathsWorker.loadStaticPaths(this.distDir, this.buildId, pathname, !this.renderOpts.dev && this._isLikeServerless);
                return paths;
            };
            ({ paths: staticPaths, fallback: hasStaticFallback } = (await coalesced_function_1.withCoalescedInvoke(__getStaticPaths)(`staticPaths-${pathname}`, [])).value);
        }
        return { staticPaths, hasStaticFallback };
    }
    async renderToHTMLWithComponents(req, res, pathname, { components, query }, opts) {
        var _a;
        // we need to ensure the status code if /404 is visited directly
        if (pathname === '/404') {
            res.statusCode = 404;
        }
        // handle static page
        if (typeof components.Component === 'string') {
            return components.Component;
        }
        // check request state
        const isLikeServerless = typeof components.Component === 'object' &&
            typeof components.Component.renderReqToHTML === 'function';
        const isSSG = !!components.getStaticProps;
        const isServerProps = !!components.getServerSideProps;
        const hasStaticPaths = !!components.getStaticPaths;
        if (!query.amp) {
            delete query.amp;
        }
        // Toggle whether or not this is a Data request
        const isDataReq = !!query._nextDataReq;
        delete query._nextDataReq;
        let previewData;
        let isPreviewMode = false;
        if (isServerProps || isSSG) {
            previewData = api_utils_1.tryGetPreviewData(req, res, this.renderOpts.previewProps);
            isPreviewMode = previewData !== false;
        }
        // non-spr requests should render like normal
        if (!isSSG) {
            // handle serverless
            if (isLikeServerless) {
                if (isDataReq) {
                    const renderResult = await components.Component.renderReqToHTML(req, res, 'passthrough');
                    send_payload_1.sendPayload(res, JSON.stringify((_a = renderResult === null || renderResult === void 0 ? void 0 : renderResult.renderOpts) === null || _a === void 0 ? void 0 : _a.pageData), 'json', !this.renderOpts.dev
                        ? {
                            private: isPreviewMode,
                            stateful: true,
                        }
                        : undefined);
                    return null;
                }
                prepareServerlessUrl(req, query);
                return components.Component.renderReqToHTML(req, res);
            }
            if (isDataReq && isServerProps) {
                const props = await render_1.renderToHTML(req, res, pathname, query, Object.assign(Object.assign(Object.assign({}, components), opts), { isDataReq }));
                send_payload_1.sendPayload(res, JSON.stringify(props), 'json', !this.renderOpts.dev
                    ? {
                        private: isPreviewMode,
                        stateful: true,
                    }
                    : undefined);
                return null;
            }
            const html = await render_1.renderToHTML(req, res, pathname, query, Object.assign(Object.assign({}, components), opts));
            if (html && isServerProps) {
                send_payload_1.sendPayload(res, html, 'html', {
                    private: isPreviewMode,
                    stateful: true,
                });
                return null;
            }
            return html;
        }
        // Compute the iSSG cache key
        let urlPathname = `${url_1.parse(req.url || '').pathname}${query.amp ? '.amp' : ''}`;
        // remove /_next/data prefix from urlPathname so it matches
        // for direct page visit and /_next/data visit
        if (isDataReq && urlPathname.includes(this.buildId)) {
            urlPathname = (urlPathname.split(this.buildId).pop() || '/')
                .replace(/\.json$/, '')
                .replace(/\/index$/, '/');
        }
        const ssgCacheKey = isPreviewMode
            ? undefined // Preview mode bypasses the cache
            : urlPathname;
        // Complete the response with cached data if its present
        const cachedData = ssgCacheKey ? await spr_cache_1.getSprCache(ssgCacheKey) : undefined;
        if (cachedData) {
            const data = isDataReq
                ? JSON.stringify(cachedData.pageData)
                : cachedData.html;
            send_payload_1.sendPayload(res, data, isDataReq ? 'json' : 'html', !this.renderOpts.dev
                ? {
                    private: isPreviewMode,
                    stateful: false,
                    revalidate: cachedData.curRevalidate !== undefined
                        ? cachedData.curRevalidate
                        : /* default to minimum revalidate (this should be an invariant) */ 1,
                }
                : undefined);
            // Stop the request chain here if the data we sent was up-to-date
            if (!cachedData.isStale) {
                return null;
            }
        }
        // If we're here, that means data is missing or it's stale.
        const maybeCoalesceInvoke = ssgCacheKey
            ? (fn) => coalesced_function_1.withCoalescedInvoke(fn).bind(null, ssgCacheKey, [])
            : (fn) => async () => {
                const value = await fn();
                return { isOrigin: true, value };
            };
        const doRender = maybeCoalesceInvoke(async function () {
            let pageData;
            let html;
            let sprRevalidate;
            let renderResult;
            // handle serverless
            if (isLikeServerless) {
                renderResult = await components.Component.renderReqToHTML(req, res, 'passthrough');
                html = renderResult.html;
                pageData = renderResult.renderOpts.pageData;
                sprRevalidate = renderResult.renderOpts.revalidate;
            }
            else {
                const renderOpts = Object.assign(Object.assign({}, components), opts);
                renderResult = await render_1.renderToHTML(req, res, pathname, query, renderOpts);
                html = renderResult;
                // TODO: change this to a different passing mechanism
                pageData = renderOpts.pageData;
                sprRevalidate = renderOpts.revalidate;
            }
            return { html, pageData, sprRevalidate };
        });
        const isProduction = !this.renderOpts.dev;
        const isDynamicPathname = utils_1.isDynamicRoute(pathname);
        const didRespond = utils_2.isResSent(res);
        const { staticPaths, hasStaticFallback } = hasStaticPaths
            ? await this.getStaticPaths(pathname)
            : { staticPaths: undefined, hasStaticFallback: false };
        // const isForcedBlocking =
        //   req.headers['X-Prerender-Bypass-Mode'] !== 'Blocking'
        // When we did not respond from cache, we need to choose to block on
        // rendering or return a skeleton.
        //
        // * Data requests always block.
        //
        // * Preview mode toggles all pages to be resolved in a blocking manner.
        //
        // * Non-dynamic pages should block (though this is an impossible
        //   case in production).
        //
        // * Dynamic pages should return their skeleton if not defined in
        //   getStaticPaths, then finish the data request on the client-side.
        //
        if (!didRespond &&
            !isDataReq &&
            !isPreviewMode &&
            isDynamicPathname &&
            // Development should trigger fallback when the path is not in
            // `getStaticPaths`
            (isProduction || !staticPaths || !staticPaths.includes(urlPathname))) {
            if (
            // In development, fall through to render to handle missing
            // getStaticPaths.
            (isProduction || staticPaths) &&
                // When fallback isn't present, abort this render so we 404
                !hasStaticFallback) {
                throw new NoFallbackError();
            }
            let html;
            // Production already emitted the fallback as static HTML.
            if (isProduction) {
                html = await spr_cache_1.getFallback(pathname);
            }
            // We need to generate the fallback on-demand for development.
            else {
                query.__nextFallback = 'true';
                if (isLikeServerless) {
                    prepareServerlessUrl(req, query);
                    const renderResult = await components.Component.renderReqToHTML(req, res, 'passthrough');
                    html = renderResult.html;
                }
                else {
                    html = (await render_1.renderToHTML(req, res, pathname, query, Object.assign(Object.assign({}, components), opts)));
                }
            }
            send_payload_1.sendPayload(res, html, 'html');
        }
        const { isOrigin, value: { html, pageData, sprRevalidate }, } = await doRender();
        if (!utils_2.isResSent(res)) {
            send_payload_1.sendPayload(res, isDataReq ? JSON.stringify(pageData) : html, isDataReq ? 'json' : 'html', !this.renderOpts.dev
                ? {
                    private: isPreviewMode,
                    stateful: false,
                    revalidate: sprRevalidate,
                }
                : undefined);
        }
        // Update the SPR cache if the head request and cacheable
        if (isOrigin && ssgCacheKey) {
            await spr_cache_1.setSprCache(ssgCacheKey, { html: html, pageData }, sprRevalidate);
        }
        return null;
    }
    async renderToHTML(req, res, pathname, query = {}) {
        try {
            const result = await this.findPageComponents(pathname, query);
            if (result) {
                try {
                    return await this.renderToHTMLWithComponents(req, res, pathname, result, Object.assign({}, this.renderOpts));
                }
                catch (err) {
                    if (!(err instanceof NoFallbackError)) {
                        throw err;
                    }
                }
            }
            if (this.dynamicRoutes) {
                for (const dynamicRoute of this.dynamicRoutes) {
                    const params = dynamicRoute.match(pathname);
                    if (!params) {
                        continue;
                    }
                    const result = await this.findPageComponents(dynamicRoute.page, query, params);
                    if (result) {
                        try {
                            return await this.renderToHTMLWithComponents(req, res, dynamicRoute.page, result, Object.assign(Object.assign({}, this.renderOpts), { params }));
                        }
                        catch (err) {
                            if (!(err instanceof NoFallbackError)) {
                                throw err;
                            }
                        }
                    }
                }
            }
        }
        catch (err) {
            this.logError(err);
            res.statusCode = 500;
            return await this.renderErrorToHTML(err, req, res, pathname, query);
        }
        res.statusCode = 404;
        return await this.renderErrorToHTML(null, req, res, pathname, query);
    }
    async renderError(err, req, res, pathname, query = {}) {
        res.setHeader('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
        const html = await this.renderErrorToHTML(err, req, res, pathname, query);
        if (html === null) {
            return;
        }
        return this.sendHTML(req, res, html);
    }
    async renderErrorToHTML(err, req, res, _pathname, query = {}) {
        let result = null;
        const is404 = res.statusCode === 404;
        let using404Page = false;
        // use static 404 page if available and is 404 response
        if (is404) {
            result = await this.findPageComponents('/404');
            using404Page = result !== null;
        }
        if (!result) {
            result = await this.findPageComponents('/_error', query);
        }
        if (process.env.NODE_ENV !== 'production' &&
            !using404Page &&
            (await this.hasPage('/_error')) &&
            !(await this.hasPage('/404'))) {
            this.customErrorNo404Warn();
        }
        let html;
        try {
            try {
                html = await this.renderToHTMLWithComponents(req, res, using404Page ? '/404' : '/_error', result, Object.assign(Object.assign({}, this.renderOpts), { err }));
            }
            catch (err) {
                if (err instanceof NoFallbackError) {
                    throw new Error('invariant: failed to render error page');
                }
                throw err;
            }
        }
        catch (err) {
            console.error(err);
            res.statusCode = 500;
            html = 'Internal Server Error';
        }
        return html;
    }
    async render404(req, res, parsedUrl) {
        const url = req.url;
        const { pathname, query } = parsedUrl ? parsedUrl : url_1.parse(url, true);
        res.statusCode = 404;
        return this.renderError(null, req, res, pathname, query);
    }
    async serveStatic(req, res, path, parsedUrl) {
        if (!this.isServeableUrl(path)) {
            return this.render404(req, res, parsedUrl);
        }
        if (!(req.method === 'GET' || req.method === 'HEAD')) {
            res.statusCode = 405;
            res.setHeader('Allow', ['GET', 'HEAD']);
            return this.renderError(null, req, res, path);
        }
        try {
            await serve_static_1.serveStatic(req, res, path);
        }
        catch (err) {
            if (err.code === 'ENOENT' || err.statusCode === 404) {
                this.render404(req, res, parsedUrl);
            }
            else if (err.statusCode === 412) {
                res.statusCode = 412;
                return this.renderError(err, req, res, path);
            }
            else {
                throw err;
            }
        }
    }
    getFilesystemPaths() {
        if (this._validFilesystemPathSet) {
            return this._validFilesystemPathSet;
        }
        const pathUserFilesStatic = path_1.join(this.dir, 'static');
        let userFilesStatic = [];
        if (this.hasStaticDir && fs_1.default.existsSync(pathUserFilesStatic)) {
            userFilesStatic = recursive_readdir_sync_1.recursiveReadDirSync(pathUserFilesStatic).map(f => path_1.join('.', 'static', f));
        }
        let userFilesPublic = [];
        if (this.publicDir && fs_1.default.existsSync(this.publicDir)) {
            userFilesPublic = recursive_readdir_sync_1.recursiveReadDirSync(this.publicDir).map(f => path_1.join('.', 'public', f));
        }
        let nextFilesStatic = [];
        nextFilesStatic = recursive_readdir_sync_1.recursiveReadDirSync(path_1.join(this.distDir, 'static')).map(f => path_1.join('.', path_1.relative(this.dir, this.distDir), 'static', f));
        return (this._validFilesystemPathSet = new Set([
            ...nextFilesStatic,
            ...userFilesPublic,
            ...userFilesStatic,
        ]));
    }
    isServeableUrl(untrustedFileUrl) {
        // This method mimics what the version of `send` we use does:
        // 1. decodeURIComponent:
        //    https://github.com/pillarjs/send/blob/0.17.1/index.js#L989
        //    https://github.com/pillarjs/send/blob/0.17.1/index.js#L518-L522
        // 2. resolve:
        //    https://github.com/pillarjs/send/blob/de073ed3237ade9ff71c61673a34474b30e5d45b/index.js#L561
        let decodedUntrustedFilePath;
        try {
            // (1) Decode the URL so we have the proper file name
            decodedUntrustedFilePath = decodeURIComponent(untrustedFileUrl);
        }
        catch (_a) {
            return false;
        }
        // (2) Resolve "up paths" to determine real request
        const untrustedFilePath = path_1.resolve(decodedUntrustedFilePath);
        // don't allow null bytes anywhere in the file path
        if (untrustedFilePath.indexOf('\0') !== -1) {
            return false;
        }
        // Check if .next/static, static and public are in the path.
        // If not the path is not available.
        if ((untrustedFilePath.startsWith(path_1.join(this.distDir, 'static') + path_1.sep) ||
            untrustedFilePath.startsWith(path_1.join(this.dir, 'static') + path_1.sep) ||
            untrustedFilePath.startsWith(path_1.join(this.dir, 'public') + path_1.sep)) === false) {
            return false;
        }
        // Check against the real filesystem paths
        const filesystemUrls = this.getFilesystemPaths();
        const resolved = path_1.relative(this.dir, untrustedFilePath);
        return filesystemUrls.has(resolved);
    }
    readBuildId() {
        const buildIdFile = path_1.join(this.distDir, constants_1.BUILD_ID_FILE);
        try {
            return fs_1.default.readFileSync(buildIdFile, 'utf8').trim();
        }
        catch (err) {
            if (!fs_1.default.existsSync(buildIdFile)) {
                throw new Error(`Could not find a valid build in the '${this.distDir}' directory! Try building your app with 'next build' before starting the server.`);
            }
            throw err;
        }
    }
    get _isLikeServerless() {
        return config_1.isTargetLikeServerless(this.nextConfig.target);
    }
}
exports.default = Server;
function prepareServerlessUrl(req, query) {
    const curUrl = url_1.parse(req.url, true);
    req.url = url_1.format(Object.assign(Object.assign({}, curUrl), { search: undefined, query: Object.assign(Object.assign({}, curUrl.query), query) }));
}
class NoFallbackError extends Error {
}
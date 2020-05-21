"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const lru_cache_1 = __importDefault(require("next/dist/compiled/lru-cache"));
const path_1 = __importDefault(require("path"));
const constants_1 = require("../lib/constants");
const normalize_page_path_1 = require("./normalize-page-path");
function toRoute(pathname) {
    return pathname.replace(/\/$/, '').replace(/\/index$/, '') || '/';
}
let cache;
let prerenderManifest;
let sprOptions = {};
const getSeedPath = (pathname, ext) => {
    return path_1.default.join(sprOptions.pagesDir, `${pathname}.${ext}`);
};
exports.calculateRevalidate = (pathname) => {
    pathname = toRoute(pathname);
    // in development we don't have a prerender-manifest
    // and default to always revalidating to allow easier debugging
    const curTime = new Date().getTime();
    if (sprOptions.dev)
        return curTime - 1000;
    const { initialRevalidateSeconds } = prerenderManifest.routes[pathname] || {
        initialRevalidateSeconds: 1,
    };
    const revalidateAfter = typeof initialRevalidateSeconds === 'number'
        ? initialRevalidateSeconds * 1000 + curTime
        : initialRevalidateSeconds;
    return revalidateAfter;
};
// initialize the SPR cache
function initializeSprCache({ max, dev, distDir, pagesDir, flushToDisk, }) {
    sprOptions = {
        dev,
        distDir,
        pagesDir,
        flushToDisk: !dev && (typeof flushToDisk !== 'undefined' ? flushToDisk : true),
    };
    if (dev) {
        prerenderManifest = {
            version: -1,
            routes: {},
            dynamicRoutes: {},
            preview: null,
        };
    }
    else {
        prerenderManifest = JSON.parse(fs_1.readFileSync(path_1.default.join(distDir, constants_1.PRERENDER_MANIFEST), 'utf8'));
    }
    cache = new lru_cache_1.default({
        // default to 50MB limit
        max: max || 50 * 1024 * 1024,
        length(val) {
            // rough estimate of size of cache value
            return val.html.length + JSON.stringify(val.pageData).length;
        },
    });
}
exports.initializeSprCache = initializeSprCache;
async function getFallback(page) {
    page = normalize_page_path_1.normalizePagePath(page);
    return fs_1.promises.readFile(getSeedPath(page, 'html'), 'utf8');
}
exports.getFallback = getFallback;
// get data from SPR cache if available
async function getSprCache(pathname) {
    if (sprOptions.dev)
        return;
    pathname = normalize_page_path_1.normalizePagePath(pathname);
    let data = cache.get(pathname);
    // let's check the disk for seed data
    if (!data) {
        try {
            const html = await fs_1.promises.readFile(getSeedPath(pathname, 'html'), 'utf8');
            const pageData = JSON.parse(await fs_1.promises.readFile(getSeedPath(pathname, 'json'), 'utf8'));
            data = {
                html,
                pageData,
                revalidateAfter: exports.calculateRevalidate(pathname),
            };
            cache.set(pathname, data);
        }
        catch (_) {
            // unable to get data from disk
        }
    }
    if (data &&
        data.revalidateAfter !== false &&
        data.revalidateAfter < new Date().getTime()) {
        data.isStale = true;
    }
    const manifestEntry = prerenderManifest.routes[pathname];
    if (data && manifestEntry) {
        data.curRevalidate = manifestEntry.initialRevalidateSeconds;
    }
    return data;
}
exports.getSprCache = getSprCache;
// populate the SPR cache with new data
async function setSprCache(pathname, data, revalidateSeconds) {
    if (sprOptions.dev)
        return;
    if (typeof revalidateSeconds !== 'undefined') {
        // TODO: Update this to not mutate the manifest from the
        // build.
        prerenderManifest.routes[pathname] = {
            dataRoute: path_1.default.posix.join('/_next/data', `${normalize_page_path_1.normalizePagePath(pathname)}.json`),
            srcRoute: null,
            initialRevalidateSeconds: revalidateSeconds,
        };
    }
    pathname = normalize_page_path_1.normalizePagePath(pathname);
    cache.set(pathname, Object.assign(Object.assign({}, data), { revalidateAfter: exports.calculateRevalidate(pathname) }));
    // TODO: This option needs to cease to exist unless it stops mutating the
    // `next build` output's manifest.
    if (sprOptions.flushToDisk) {
        try {
            const seedPath = getSeedPath(pathname, 'html');
            await fs_1.promises.mkdir(path_1.default.dirname(seedPath), { recursive: true });
            await fs_1.promises.writeFile(seedPath, data.html, 'utf8');
            await fs_1.promises.writeFile(getSeedPath(pathname, 'json'), JSON.stringify(data.pageData), 'utf8');
        }
        catch (error) {
            // failed to flush to disk
            console.warn('Failed to update prerender files for', pathname, error);
        }
    }
}
exports.setSprCache = setSprCache;
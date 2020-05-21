"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../lib/constants");
const path_1 = require("path");
const require_1 = require("./require");
function interopDefault(mod) {
    return mod.default || mod;
}
exports.interopDefault = interopDefault;
async function loadComponents(distDir, buildId, pathname, serverless) {
    if (serverless) {
        const Component = await require_1.requirePage(pathname, distDir, serverless);
        const { getStaticProps, getStaticPaths, getServerSideProps } = Component;
        return {
            Component,
            pageConfig: Component.config || {},
            getStaticProps,
            getStaticPaths,
            getServerSideProps,
        };
    }
    const documentPath = path_1.join(distDir, constants_1.SERVER_DIRECTORY, constants_1.CLIENT_STATIC_FILES_PATH, buildId, 'pages', '_document');
    const appPath = path_1.join(distDir, constants_1.SERVER_DIRECTORY, constants_1.CLIENT_STATIC_FILES_PATH, buildId, 'pages', '_app');
    const DocumentMod = require(documentPath);
    const AppMod = require(appPath);
    const ComponentMod = require_1.requirePage(pathname, distDir, serverless);
    const [buildManifest, reactLoadableManifest, Component, Document, App,] = await Promise.all([
        require(path_1.join(distDir, constants_1.BUILD_MANIFEST)),
        require(path_1.join(distDir, constants_1.REACT_LOADABLE_MANIFEST)),
        interopDefault(ComponentMod),
        interopDefault(DocumentMod),
        interopDefault(AppMod),
    ]);
    const { getServerSideProps, getStaticProps, getStaticPaths } = ComponentMod;
    return {
        App,
        Document,
        Component,
        buildManifest,
        reactLoadableManifest,
        pageConfig: ComponentMod.config || {},
        getServerSideProps,
        getStaticProps,
        getStaticPaths,
    };
}
exports.loadComponents = loadComponents;

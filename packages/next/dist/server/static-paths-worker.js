"use strict";exports.__esModule=true;exports.loadStaticPaths=loadStaticPaths;var _utils=require("../build/utils");var _loadComponents=require("../next-server/server/load-components");var _nodeFetch=_interopRequireDefault(require("next/dist/compiled/node-fetch"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// @ts-ignore fetch exists globally
if(!global.fetch){// Polyfill fetch() in the Node.js environment
// @ts-ignore fetch exists globally
global.fetch=_nodeFetch.default;}let workerWasUsed=false;// we call getStaticPaths in a separate process to ensure
// side-effects aren't relied on in dev that will break
// during a production build
async function loadStaticPaths(distDir,buildId,pathname,serverless){// we only want to use each worker once to prevent any invalid
// caches
if(workerWasUsed){process.exit(1);}const components=await(0,_loadComponents.loadComponents)(distDir,buildId,pathname,serverless);if(!components.getStaticPaths){// we shouldn't get to this point since the worker should
// only be called for SSG pages with getStaticPaths
throw new Error(`Invariant: failed to load page with getStaticPaths for ${pathname}`);}workerWasUsed=true;return(0,_utils.buildStaticPaths)(pathname,components.getStaticPaths);}
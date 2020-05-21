"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");exports.__esModule=true;exports.useRouter=useRouter;exports.makePublicRouterInstance=makePublicRouterInstance;exports.createRouter=exports.withRouter=exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _router2=_interopRequireWildcard(require("../next-server/lib/router/router"));exports.Router=_router2.default;exports.NextRouter=_router2.NextRouter;var _routerContext=require("../next-server/lib/router-context");var _withRouter=_interopRequireDefault(require("./with-router"));exports.withRouter=_withRouter.default;/* global window */var singletonRouter={router:null,// holds the actual router instance
readyCallbacks:[],ready(cb){if(this.router)return cb();if(typeof window!=='undefined'){this.readyCallbacks.push(cb);}}};// Create public properties and methods of the router in the singletonRouter
var urlPropertyFields=['pathname','route','query','asPath','components','isFallback','basePath'];var routerEvents=['routeChangeStart','beforeHistoryChange','routeChangeComplete','routeChangeError','hashChangeStart','hashChangeComplete'];var coreMethodFields=['push','replace','reload','back','prefetch','beforePopState'];// Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter,'events',{get(){return _router2.default.events;}});urlPropertyFields.forEach(field=>{// Here we need to use Object.defineProperty because, we need to return
// the property assigned to the actual router
// The value might get changed as we change routes and this is the
// proper way to access it
Object.defineProperty(singletonRouter,field,{get(){var router=getRouter();return router[field];}});});coreMethodFields.forEach(field=>{// We don't really know the types here, so we add them later instead
;singletonRouter[field]=function(){var router=getRouter();return router[field](...arguments);};});routerEvents.forEach(event=>{singletonRouter.ready(()=>{_router2.default.events.on(event,function(){var eventField="on"+event.charAt(0).toUpperCase()+event.substring(1);var _singletonRouter=singletonRouter;if(_singletonRouter[eventField]){try{_singletonRouter[eventField](...arguments);}catch(err){// tslint:disable-next-line:no-console
console.error("Error when running the Router event: "+eventField);// tslint:disable-next-line:no-console
console.error(err.message+"\n"+err.stack);}}});});});function getRouter(){if(!singletonRouter.router){var message='No router instance found.\n'+'You should only use "next/router" inside the client side of your app.\n';throw new Error(message);}return singletonRouter.router;}// Export the singletonRouter and this is the public API.
var _default=singletonRouter;// Reexport the withRoute HOC
exports.default=_default;function useRouter(){return _react.default.useContext(_routerContext.RouterContext);}// INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
var createRouter=function createRouter(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}singletonRouter.router=new _router2.default(...args);singletonRouter.readyCallbacks.forEach(cb=>cb());singletonRouter.readyCallbacks=[];return singletonRouter.router;};// This function is used to create the `withRouter` router instance
exports.createRouter=createRouter;function makePublicRouterInstance(router){var _router=router;var instance={};for(var property of urlPropertyFields){if(typeof _router[property]==='object'){instance[property]=Object.assign({},_router[property]);// makes sure query is not stateful
continue;}instance[property]=_router[property];}// Events is a static property on the router, the router doesn't have to be initialized to use it
instance.events=_router2.default.events;coreMethodFields.forEach(field=>{instance[field]=function(){return _router[field](...arguments);};});return instance;}
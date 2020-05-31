module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/RefsPage/RefsPage.js":
/*!*****************************************!*\
  !*** ./components/RefsPage/RefsPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RefsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Widgets_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Widgets/Page */ "./components/Widgets/Page.js");
/* harmony import */ var _Widgets_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Widgets/Button */ "./components/Widgets/Button.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/useLiveQuery */ "./lib/useLiveQuery.js");
var _jsxFileName="/app/next/components/RefsPage/RefsPage.js";var __jsx=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;const GET_MESSAGES={"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"text"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":70,"source":{"body":"\n  {\n    message(order_by: {id: asc}) {\n      id\n      text\n    }\n  }\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}};const DELETE_MESSAGE={"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_message_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":81,"source":{"body":"\n  mutation ($id: Int!) {\n    delete_message_by_pk(id: $id) {\n      id\n    }\n  }\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}};const SEND_MESSAGE={"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_message_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"text"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":101,"source":{"body":"\n  mutation ($text: String){\n    insert_message_one(object: {text: $text}) {\n      id text\n    }\n  }\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}};function MessagesInput(){const[sendMessage]=Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(SEND_MESSAGE);function onSubmit(event){if(event.key!=='Enter')return;const text=event.target.value;event.target.value='';sendMessage({variables:{text},refetchQueries:[{query:GET_MESSAGES}]});}return __jsx("input",{type:"text",onKeyDown:onSubmit,__self:this,__source:{fileName:_jsxFileName,lineNumber:49,columnNumber:10}});}function DeleteButton({id}){const[deleteMessage]=Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(DELETE_MESSAGE);function onClick(){deleteMessage({variables:{id},refetchQueries:[{query:GET_MESSAGES}]});}return __jsx(_Widgets_Button__WEBPACK_IMPORTED_MODULE_2__["default"],{onClick:onClick,__self:this,__source:{fileName:_jsxFileName,lineNumber:63,columnNumber:10}},"Delete ",id);}function MessagesList(){const{loading,error,data}=Object(_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_4__["default"])(GET_MESSAGES);if(loading)return __jsx("div",{__self:this,__source:{fileName:_jsxFileName,lineNumber:69,columnNumber:23}},"Loading...");if(error)return __jsx("div",{__self:this,__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:21}},"Error ",error.message,"...");return __jsx("ul",{__self:this,__source:{fileName:_jsxFileName,lineNumber:72,columnNumber:10}},data.message.map(message=>__jsx("li",{key:message.id,__self:this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:7}},__jsx(DeleteButton,{id:message.id,__self:this,__source:{fileName:_jsxFileName,lineNumber:75,columnNumber:9}}),__jsx("span",{__self:this,__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:9}},message.text))));}// const CURRENT_USER = gql`
//   {
//     current_user {
//       id
//       name
//     }
//   }
// `
const CURRENT_USER={"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"IntValue","value":"7"}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":67,"source":{"body":"\n  query {\n    me(args:{user_id:7}){\n      id\n      name\n    }\n  }\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}}}};function CurrentUser(){const{loading,error,data}=Object(_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_4__["default"])(CURRENT_USER);if(loading)return'Loading...';if(error)return`Error... ${error.message}`;// const user = data['me'][0]
// console.log('user', user)
return __jsx("div",{style:{fontSize:30},__self:this,__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:10}});}function RefsPage(){return __jsx(_Widgets_Page__WEBPACK_IMPORTED_MODULE_1__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:117,columnNumber:10}},__jsx("div",{__self:this,__source:{fileName:_jsxFileName,lineNumber:118,columnNumber:5}},__jsx("div",{__self:this,__source:{fileName:_jsxFileName,lineNumber:119,columnNumber:7}},__jsx(CurrentUser,{__self:this,__source:{fileName:_jsxFileName,lineNumber:120,columnNumber:9}})),__jsx(MessagesInput,{__self:this,__source:{fileName:_jsxFileName,lineNumber:122,columnNumber:7}}),__jsx(MessagesList,{__self:this,__source:{fileName:_jsxFileName,lineNumber:123,columnNumber:7}})));}

/***/ }),

/***/ "./components/Widgets/Button.js":
/*!**************************************!*\
  !*** ./components/Widgets/Button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName="/app/next/components/Widgets/Button.js";var __jsx=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function Button({onClick,icon,children},ref){return __jsx("div",{ref:ref,onClick:onClick,className:`jsx-${style.__hash}`+" "+'button',__self:this,__source:{fileName:_jsxFileName,lineNumber:7,columnNumber:12}},__jsx("span",{className:`jsx-${style.__hash}`+" "+"text",__self:this,__source:{fileName:_jsxFileName,lineNumber:11,columnNumber:7}},children),icon&&__jsx("img",{src:icon,className:`jsx-${style.__hash}`+" "+'icon',__self:this,__source:{fileName:_jsxFileName,lineNumber:12,columnNumber:17}}),__jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a,{id:style.__hash,__self:this},style));}));// language=Stylus
const style=new String("@-moz-keyframes gradient{0%.jsx-2790931410{background-position:0 50%;}50%.jsx-2790931410{background-position:100% 50%;}100%.jsx-2790931410{background-position:0 50%;}}@-webkit-keyframes gradient{0%.jsx-2790931410{background-position:0 50%;}50%.jsx-2790931410{background-position:100% 50%;}100%.jsx-2790931410{background-position:0 50%;}}@-o-keyframes gradient{0%.jsx-2790931410{background-position:0 50%;}50%.jsx-2790931410{background-position:100% 50%;}100%.jsx-2790931410{background-position:0 50%;}}@-webkit-keyframes gradient-jsx-2790931410{0%{background-position:0 50%;}50%{background-position:100% 50%;}100%{background-position:0 50%;}}@keyframes gradient-jsx-2790931410{0%{background-position:0 50%;}50%{background-position:100% 50%;}100%{background-position:0 50%;}}.button.jsx-2790931410{padding:0.7em 1em;border-radius:0.5em;cursor:pointer;border:0.15em solid #63aa7f;background-color:rgba(99,169,127,0.2);outline:none;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-transform:uppercase;-webkit-transition:box-shadow 0.2s,background-color 0.2s;transition:box-shadow 0.2s,background-color 0.2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.button.jsx-2790931410:hover{background-color:rgba(54,193,109,0.3);box-shadow:0 0.5em 1.5em rgba(38,172,91,0.3);}.button.jsx-2790931410 .text.jsx-2790931410{font-size:0.9em;}.button.jsx-2790931410 .icon.jsx-2790931410{margin-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvbmV4dC9jb21wb25lbnRzL1dpZGdldHMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCaUIsQUFHK0IsQUFHRyxBQUdILEFBS0EsQUFHRyxBQUdILEFBS0EsQUFHRyxBQUdILEFBS0EsQUFHRyxBQUdILEFBSVYsQUFjb0IsQUFJdEIsQUFHQSxnQkFGbEIsQUFHQSxFQXJCc0IsUUEzQ3BCLEFBTUEsQUFLQSxBQU1BLEFBS0EsQUFNQSxBQUtBLEFBTUEsR0FwQ0EsQUFXQSxBQVdBLEFBV0EsU0FRZSxBQWE4QixlQVpqQiw0QkFDVSxFQVl4QyxvQ0FYZSxhQUNPLHNHQUNELHFFQUNBLDZGQUNNLHlCQUN5QiwwR0FDakMscUZBQ25CIiwiZmlsZSI6Ii9hcHAvbmV4dC9jb21wb25lbnRzL1dpZGdldHMvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKFxyXG4gIGZ1bmN0aW9uIEJ1dHRvbih7b25DbGljaywgaWNvbiwgY2hpbGRyZW59LCByZWYpIHtcclxuXHJcbiAgICByZXR1cm4gPGRpdlxyXG4gICAgICByZWY9eyByZWYgfVxyXG4gICAgICBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17IG9uQ2xpY2sgfT5cclxuXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj57IGNoaWxkcmVuIH08L3NwYW4+XHJcbiAgICAgIHsgaWNvbiAmJiA8aW1nIGNsYXNzTmFtZT0naWNvbicgc3JjPXsgaWNvbiB9Lz4gfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57IHN0eWxlIH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIH1cclxuKVxyXG5cclxuXHJcbi8vIGxhbmd1YWdlPVN0eWx1c1xyXG5jb25zdCBzdHlsZSA9IGNzc2BcclxuICAuYnV0dG9uIHtcclxuICAgIHBhZGRpbmcgMC43ZW0gMWVtXHJcbiAgICBib3JkZXItcmFkaXVzIDAuNWVtXHJcbiAgICBjdXJzb3IgcG9pbnRlclxyXG4gICAgYm9yZGVyIDAuMTVlbSBzb2xpZCAjNjNBQTdGXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIHJnYmEoIzYzQTk3RiwgMC4yKVxyXG4gICAgb3V0bGluZSBub25lXHJcbiAgICBkaXNwbGF5IGlubGluZS1mbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbiByb3dcclxuICAgIGFsaWduLWl0ZW1zIGNlbnRlclxyXG4gICAgdGV4dC10cmFuc2Zvcm0gdXBwZXJjYXNlXHJcbiAgICB0cmFuc2l0aW9uIGJveC1zaGFkb3cgMC4ycywgYmFja2dyb3VuZC1jb2xvciAwLjJzXHJcbiAgICB1c2VyLXNlbGVjdCBub25lXHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3IgcmdiYSgjMzZjMTZkLCAwLjMpXHJcbiAgICAgIGJveC1zaGFkb3cgMCAwLjVlbSAxLjVlbSByZ2JhKCMyNmFjNWIsIDAuMylcclxuICAgIH1cclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZSAwLjllbVxyXG4gICAgfVxyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgbWFyZ2luLWxlZnQgMWVtXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbiJdfQ== */\n/*@ sourceURL=/app/next/components/Widgets/Button.js */");style.__hash="2790931410";

/***/ }),

/***/ "./components/Widgets/Page.js":
/*!************************************!*\
  !*** ./components/Widgets/Page.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/classes */ "./lib/classes.js");
var _jsxFileName="/app/next/components/Widgets/Page.js";var __jsx=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;function Page({children,className}){return __jsx("div",{className:`jsx-${style.__hash}`+" "+('page '+className||false||false),__self:this,__source:{fileName:_jsxFileName,lineNumber:7,columnNumber:10}},children,__jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a,{id:style.__hash,__self:this},style));}// language=Stylus
const style=new String("@-moz-keyframes gradient{0%.jsx-4001947693{background-position:0 50%;}50%.jsx-4001947693{background-position:100% 50%;}100%.jsx-4001947693{background-position:0 50%;}}@-webkit-keyframes gradient{0%.jsx-4001947693{background-position:0 50%;}50%.jsx-4001947693{background-position:100% 50%;}100%.jsx-4001947693{background-position:0 50%;}}@-o-keyframes gradient{0%.jsx-4001947693{background-position:0 50%;}50%.jsx-4001947693{background-position:100% 50%;}100%.jsx-4001947693{background-position:0 50%;}}@-webkit-keyframes gradient-jsx-4001947693{0%{background-position:0 50%;}50%{background-position:100% 50%;}100%{background-position:0 50%;}}@keyframes gradient-jsx-4001947693{0%{background-position:0 50%;}50%{background-position:100% 50%;}100%{background-position:0 50%;}}.page.jsx-4001947693{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;border-radius:0 0.5em 0 0;margin-right:2em;overflow:hidden;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;background-image:linear-gradient(#232749,#2a2e58);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvbmV4dC9jb21wb25lbnRzL1dpZGdldHMvUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlaUIsQUFHK0IsQUFHRyxBQUdILEFBS0EsQUFHRyxBQUdILEFBS0EsQUFHRyxBQUdILEFBS0EsQUFHRyxBQUdILEFBSWhCLDBCQTFDWixBQU1BLEFBS0EsQUFNQSxBQUtBLEFBTUEsQUFLQSxBQU1BLEdBcENBLEFBV0EsQUFXQSxBQVdBLDBDQU9hLDBFQUNNLHFFQUNJLG1HQUNILGlHQUNNLDBCQUNULGlCQUNELGdCQUNDLHFGQUNrQyxrREFDckQiLCJmaWxlIjoiL2FwcC9uZXh0L2NvbXBvbmVudHMvV2lkZ2V0cy9QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uLy4uL2xpYi9jbGFzc2VzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7Y2hpbGRyZW4sIGNsYXNzTmFtZX0pIHtcclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsgJ3BhZ2UgJyArIGNsYXNzTmFtZSB8fCAnJyB9PlxyXG4gICAgeyBjaGlsZHJlbiB9XHJcblxyXG4gICAgPHN0eWxlIGpzeD57IHN0eWxlIH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5cclxuLy8gbGFuZ3VhZ2U9U3R5bHVzXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gIC5wYWdlIHtcclxuICAgIGZsZXgtZ3JvdyAxXHJcbiAgICBkaXNwbGF5IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uIHJvd1xyXG4gICAganVzdGlmeS1jb250ZW50IGNlbnRlclxyXG4gICAgYWxpZ24taXRlbXMgc3RyZXRjaFxyXG4gICAgYm9yZGVyLXJhZGl1cyAwIDAuNWVtIDAgMFxyXG4gICAgbWFyZ2luLXJpZ2h0IDJlbVxyXG4gICAgb3ZlcmZsb3cgaGlkZGVuXHJcbiAgICB1c2VyLXNlbGVjdCB0ZXh0XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlIGxpbmVhci1ncmFkaWVudCgjMjMyNzQ5LCAjMkEyRTU4KVxyXG4gIH1cclxuYFxyXG5cclxuXHJcbiJdfQ== */\n/*@ sourceURL=/app/next/components/Widgets/Page.js */");style.__hash="4001947693";

/***/ }),

/***/ "./lib/classes.js":
/*!************************!*\
  !*** ./lib/classes.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return classes; });
function classes(...args){let foundClasses=[];for(const item of args){if(typeof item==='string'){foundClasses.push(item);continue;}for(const key in item)if(item.hasOwnProperty(key)){if(item[key]){foundClasses.push(key);}}}return foundClasses.join(' ');}

/***/ }),

/***/ "./lib/useLiveQuery.js":
/*!*****************************!*\
  !*** ./lib/useLiveQuery.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLiveQuery; });
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__);
function useLiveQuery(query,options={}){if(true){return Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(query,options);}return useLiveQueryBrowser(query,options);}const subscriptionsMap=new WeakMap();function useLiveQueryBrowser(query,options){if(!subscriptionsMap.has(query)){subscriptionsMap.set(query,createSubscription(query));}const subscription=subscriptionsMap.get(query);const queryResult=Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(query,options);Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__["useSubscription"])(subscription,{onSubscriptionData({client,subscriptionData:{data}}){client.writeQuery({query,data,variables:options.variables});}});return queryResult;}function createSubscription(query){let subscription=JSON.parse(JSON.stringify(query));subscription.definitions[0].operation='subscription';return subscription;}

/***/ }),

/***/ "./pages/referrals.js":
/*!****************************!*\
  !*** ./pages/referrals.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_RefsPage_RefsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/RefsPage/RefsPage */ "./components/RefsPage/RefsPage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_RefsPage_RefsPage__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/referrals.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/next/pages/referrals.js */"./pages/referrals.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWZzUGFnZS9SZWZzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dpZGdldHMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2lkZ2V0cy9QYWdlLmpzIiwid2VicGFjazovLy8uL2xpYi9jbGFzc2VzLmpzIiwid2VicGFjazovLy8uL2xpYi91c2VMaXZlUXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVmZXJyYWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJHRVRfTUVTU0FHRVMiLCJERUxFVEVfTUVTU0FHRSIsIlNFTkRfTUVTU0FHRSIsIk1lc3NhZ2VzSW5wdXQiLCJzZW5kTWVzc2FnZSIsInVzZU11dGF0aW9uIiwib25TdWJtaXQiLCJldmVudCIsImtleSIsInRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJEZWxldGVCdXR0b24iLCJpZCIsImRlbGV0ZU1lc3NhZ2UiLCJvbkNsaWNrIiwiTWVzc2FnZXNMaXN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInVzZUxpdmVRdWVyeSIsIm1lc3NhZ2UiLCJtYXAiLCJDVVJSRU5UX1VTRVIiLCJDdXJyZW50VXNlciIsImZvbnRTaXplIiwiUmVmc1BhZ2UiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJCdXR0b24iLCJpY29uIiwiY2hpbGRyZW4iLCJyZWYiLCJzdHlsZSIsIlBhZ2UiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwiYXJncyIsImZvdW5kQ2xhc3NlcyIsIml0ZW0iLCJwdXNoIiwiaGFzT3duUHJvcGVydHkiLCJqb2luIiwib3B0aW9ucyIsInVzZVF1ZXJ5IiwidXNlTGl2ZVF1ZXJ5QnJvd3NlciIsInN1YnNjcmlwdGlvbnNNYXAiLCJXZWFrTWFwIiwiaGFzIiwic2V0IiwiY3JlYXRlU3Vic2NyaXB0aW9uIiwic3Vic2NyaXB0aW9uIiwiZ2V0IiwicXVlcnlSZXN1bHQiLCJ1c2VTdWJzY3JpcHRpb24iLCJvblN1YnNjcmlwdGlvbkRhdGEiLCJjbGllbnQiLCJzdWJzY3JpcHRpb25EYXRhIiwid3JpdGVRdWVyeSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImRlZmluaXRpb25zIiwib3BlcmF0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tJQy9FQSxLQUFNQSxhQUFZLHkzQkFBbEIsQ0FVQSxLQUFNQyxlQUFjLHM3QkFBcEIsQ0FRQSxLQUFNQyxhQUFZ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QUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9yZWZlcnJhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vV2lkZ2V0cy9QYWdlXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9XaWRnZXRzL0J1dHRvblwiXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHVzZUxpdmVRdWVyeSBmcm9tIFwiLi4vLi4vbGliL3VzZUxpdmVRdWVyeVwiXHJcblxyXG5cclxuY29uc3QgR0VUX01FU1NBR0VTID0gZ3FsYFxyXG4gIHtcclxuICAgIG1lc3NhZ2Uob3JkZXJfYnk6IHtpZDogYXNjfSkge1xyXG4gICAgICBpZFxyXG4gICAgICB0ZXh0XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5cclxuY29uc3QgREVMRVRFX01FU1NBR0UgPSBncWxgXHJcbiAgbXV0YXRpb24gKCRpZDogSW50ISkge1xyXG4gICAgZGVsZXRlX21lc3NhZ2VfYnlfcGsoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU0VORF9NRVNTQUdFID0gZ3FsYFxyXG4gIG11dGF0aW9uICgkdGV4dDogU3RyaW5nKXtcclxuICAgIGluc2VydF9tZXNzYWdlX29uZShvYmplY3Q6IHt0ZXh0OiAkdGV4dH0pIHtcclxuICAgICAgaWQgdGV4dFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZXNJbnB1dCgpIHtcclxuICBjb25zdCBbc2VuZE1lc3NhZ2VdID0gdXNlTXV0YXRpb24oU0VORF9NRVNTQUdFKVxyXG5cclxuICBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSAhPT0gJ0VudGVyJykgcmV0dXJuXHJcbiAgICBjb25zdCB0ZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJ1xyXG4gICAgc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICB2YXJpYWJsZXM6IHt0ZXh0fSxcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7cXVlcnk6IEdFVF9NRVNTQUdFU31dXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uS2V5RG93bj17IG9uU3VibWl0IH0vPlxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gRGVsZXRlQnV0dG9uKHtpZH0pIHtcclxuICBjb25zdCBbZGVsZXRlTWVzc2FnZV0gPSB1c2VNdXRhdGlvbihERUxFVEVfTUVTU0FHRSlcclxuXHJcbiAgZnVuY3Rpb24gb25DbGljaygpIHtcclxuICAgIGRlbGV0ZU1lc3NhZ2Uoe1xyXG4gICAgICB2YXJpYWJsZXM6IHtpZH0sXHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbe3F1ZXJ5OiBHRVRfTUVTU0FHRVN9XVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiA8QnV0dG9uIG9uQ2xpY2s9eyBvbkNsaWNrIH0+RGVsZXRlIHsgaWQgfTwvQnV0dG9uPlxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZXNMaXN0KCkge1xyXG4gIGNvbnN0IHtsb2FkaW5nLCBlcnJvciwgZGF0YX0gPSB1c2VMaXZlUXVlcnkoR0VUX01FU1NBR0VTKVxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciB7IGVycm9yLm1lc3NhZ2UgfS4uLjwvZGl2PlxyXG5cclxuICByZXR1cm4gPHVsPlxyXG4gICAgeyBkYXRhLm1lc3NhZ2UubWFwKG1lc3NhZ2UgPT5cclxuICAgICAgPGxpIGtleT17IG1lc3NhZ2UuaWQgfT5cclxuICAgICAgICA8RGVsZXRlQnV0dG9uIGlkPXsgbWVzc2FnZS5pZCB9Lz5cclxuICAgICAgICA8c3Bhbj57IG1lc3NhZ2UudGV4dCB9PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSB9XHJcbiAgPC91bD5cclxufVxyXG5cclxuXHJcbi8vIGNvbnN0IENVUlJFTlRfVVNFUiA9IGdxbGBcclxuLy8gICB7XHJcbi8vICAgICBjdXJyZW50X3VzZXIge1xyXG4vLyAgICAgICBpZFxyXG4vLyAgICAgICBuYW1lXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyBgXHJcbmNvbnN0IENVUlJFTlRfVVNFUiA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBtZShhcmdzOnt1c2VyX2lkOjd9KXtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZnVuY3Rpb24gQ3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3Qge2xvYWRpbmcsIGVycm9yLCBkYXRhfSA9IHVzZUxpdmVRdWVyeShDVVJSRU5UX1VTRVIpXHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gJ0xvYWRpbmcuLi4nXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gYEVycm9yLi4uICR7IGVycm9yLm1lc3NhZ2UgfWBcclxuXHJcbiAgLy8gY29uc3QgdXNlciA9IGRhdGFbJ21lJ11bMF1cclxuICAvLyBjb25zb2xlLmxvZygndXNlcicsIHVzZXIpXHJcblxyXG4gIHJldHVybiA8ZGl2IHN0eWxlPXsge2ZvbnRTaXplOiAzMH0gfT5cclxuICAgIHsvKmlkIHsgdXNlci5pZCB9LCBuYW1lIHsgdXNlci5uYW1lIH0qLyB9XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWZzUGFnZSgpIHtcclxuXHJcbiAgcmV0dXJuIDxQYWdlPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q3VycmVudFVzZXIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1lc3NhZ2VzSW5wdXQvPlxyXG4gICAgICA8TWVzc2FnZXNMaXN0Lz5cclxuICAgIDwvZGl2PlxyXG4gIDwvUGFnZT5cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZihcclxuICBmdW5jdGlvbiBCdXR0b24oe29uQ2xpY2ssIGljb24sIGNoaWxkcmVufSwgcmVmKSB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXZcclxuICAgICAgcmVmPXsgcmVmIH1cclxuICAgICAgY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eyBvbkNsaWNrIH0+XHJcblxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+eyBjaGlsZHJlbiB9PC9zcGFuPlxyXG4gICAgICB7IGljb24gJiYgPGltZyBjbGFzc05hbWU9J2ljb24nIHNyYz17IGljb24gfS8+IH1cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+eyBzdHlsZSB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICB9XHJcbilcclxuXHJcblxyXG4vLyBsYW5ndWFnZT1TdHlsdXNcclxuY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nIDAuN2VtIDFlbVxyXG4gICAgYm9yZGVyLXJhZGl1cyAwLjVlbVxyXG4gICAgY3Vyc29yIHBvaW50ZXJcclxuICAgIGJvcmRlciAwLjE1ZW0gc29saWQgIzYzQUE3RlxyXG4gICAgYmFja2dyb3VuZC1jb2xvciByZ2JhKCM2M0E5N0YsIDAuMilcclxuICAgIG91dGxpbmUgbm9uZVxyXG4gICAgZGlzcGxheSBpbmxpbmUtZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb24gcm93XHJcbiAgICBhbGlnbi1pdGVtcyBjZW50ZXJcclxuICAgIHRleHQtdHJhbnNmb3JtIHVwcGVyY2FzZVxyXG4gICAgdHJhbnNpdGlvbiBib3gtc2hhZG93IDAuMnMsIGJhY2tncm91bmQtY29sb3IgMC4yc1xyXG4gICAgdXNlci1zZWxlY3Qgbm9uZVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yIHJnYmEoIzM2YzE2ZCwgMC4zKVxyXG4gICAgICBib3gtc2hhZG93IDAgMC41ZW0gMS41ZW0gcmdiYSgjMjZhYzViLCAwLjMpXHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBmb250LXNpemUgMC45ZW1cclxuICAgIH1cclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0IDFlbVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG4iLCJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vLi4vbGliL2NsYXNzZXNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHtjaGlsZHJlbiwgY2xhc3NOYW1lfSkge1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9eyAncGFnZSAnICsgY2xhc3NOYW1lIHx8ICcnIH0+XHJcbiAgICB7IGNoaWxkcmVuIH1cclxuXHJcbiAgICA8c3R5bGUganN4Pnsgc3R5bGUgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcblxyXG4vLyBsYW5ndWFnZT1TdHlsdXNcclxuY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgLnBhZ2Uge1xyXG4gICAgZmxleC1ncm93IDFcclxuICAgIGRpc3BsYXkgZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb24gcm93XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXHJcbiAgICBhbGlnbi1pdGVtcyBzdHJldGNoXHJcbiAgICBib3JkZXItcmFkaXVzIDAgMC41ZW0gMCAwXHJcbiAgICBtYXJnaW4tcmlnaHQgMmVtXHJcbiAgICBvdmVyZmxvdyBoaWRkZW5cclxuICAgIHVzZXItc2VsZWN0IHRleHRcclxuICAgIGJhY2tncm91bmQtaW1hZ2UgbGluZWFyLWdyYWRpZW50KCMyMzI3NDksICMyQTJFNTgpXHJcbiAgfVxyXG5gXHJcblxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xhc3NlcyguLi5hcmdzKSB7XHJcbiAgbGV0IGZvdW5kQ2xhc3NlcyA9IFtdXHJcblxyXG4gIGZvciAoY29uc3QgaXRlbSBvZiBhcmdzKSB7XHJcbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGZvdW5kQ2xhc3Nlcy5wdXNoKGl0ZW0pXHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gaXRlbSkgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICBpZiAoaXRlbVtrZXldKSB7XHJcbiAgICAgICAgZm91bmRDbGFzc2VzLnB1c2goa2V5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZm91bmRDbGFzc2VzLmpvaW4oJyAnKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyB1c2VRdWVyeSwgdXNlU3Vic2NyaXB0aW9uIH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIlxyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTGl2ZVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zID0ge30pIHtcclxuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgcmV0dXJuIHVzZVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVzZUxpdmVRdWVyeUJyb3dzZXIocXVlcnksIG9wdGlvbnMpXHJcbn1cclxuXHJcblxyXG5jb25zdCBzdWJzY3JpcHRpb25zTWFwID0gbmV3IFdlYWtNYXAoKVxyXG5cclxuZnVuY3Rpb24gdXNlTGl2ZVF1ZXJ5QnJvd3NlcihxdWVyeSwgb3B0aW9ucykge1xyXG4gIGlmICghc3Vic2NyaXB0aW9uc01hcC5oYXMocXVlcnkpKSB7XHJcbiAgICBzdWJzY3JpcHRpb25zTWFwLnNldChxdWVyeSwgY3JlYXRlU3Vic2NyaXB0aW9uKHF1ZXJ5KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHN1YnNjcmlwdGlvbnNNYXAuZ2V0KHF1ZXJ5KVxyXG5cclxuICBjb25zdCBxdWVyeVJlc3VsdCA9IHVzZVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zKVxyXG5cclxuICB1c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uLCB7XHJcbiAgICBvblN1YnNjcmlwdGlvbkRhdGEoe2NsaWVudCwgc3Vic2NyaXB0aW9uRGF0YToge2RhdGF9fSkge1xyXG4gICAgICBjbGllbnQud3JpdGVRdWVyeSh7XHJcbiAgICAgICAgcXVlcnksIGRhdGEsXHJcbiAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlc1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBxdWVyeVJlc3VsdFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3Vic2NyaXB0aW9uKHF1ZXJ5KSB7XHJcbiAgbGV0IHN1YnNjcmlwdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocXVlcnkpKVxyXG4gIHN1YnNjcmlwdGlvbi5kZWZpbml0aW9uc1swXS5vcGVyYXRpb24gPSAnc3Vic2NyaXB0aW9uJ1xyXG4gIHJldHVybiBzdWJzY3JpcHRpb25cclxufVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVmc1BhZ2UvUmVmc1BhZ2VcIlxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
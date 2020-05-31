webpackHotUpdate("static/development/pages/referrals.js",{

/***/ "./components/RefsPage/RefsPage.js":
/*!*****************************************!*\
  !*** ./components/RefsPage/RefsPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RefsPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Widgets_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Widgets/Page */ \"./components/Widgets/Page.js\");\n/* harmony import */ var _Widgets_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Widgets/Button */ \"./components/Widgets/Button.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ \"../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useLiveQuery */ \"./lib/useLiveQuery.js\");\nvar _jsxFileName=\"/app/next/components/RefsPage/RefsPage.js\",_s=$RefreshSig$(),_s2=$RefreshSig$(),_s3=$RefreshSig$(),_s4=$RefreshSig$();var __jsx=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;var GET_MESSAGES={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"message\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"order_by\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"EnumValue\",\"value\":\"asc\"}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":70,\"source\":{\"body\":\"\\n  {\\n    message(order_by: {id: asc}) {\\n      id\\n      text\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};var DELETE_MESSAGE={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"mutation\",\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"delete_message_by_pk\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"}}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":81,\"source\":{\"body\":\"\\n  mutation ($id: Int!) {\\n    delete_message_by_pk(id: $id) {\\n      id\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};var SEND_MESSAGE={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"mutation\",\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"insert_message_one\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"object\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"}}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":101,\"source\":{\"body\":\"\\n  mutation ($text: String){\\n    insert_message_one(object: {text: $text}) {\\n      id text\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};function MessagesInput(){_s();var _useMutation=Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"])(SEND_MESSAGE),_useMutation2=Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation,1),sendMessage=_useMutation2[0];function onSubmit(event){if(event.key!=='Enter')return;var text=event.target.value;event.target.value='';sendMessage({variables:{text:text},refetchQueries:[{query:GET_MESSAGES}]});}return __jsx(\"input\",{type:\"text\",onKeyDown:onSubmit,__self:this,__source:{fileName:_jsxFileName,lineNumber:49,columnNumber:10}});}_s(MessagesInput,\"SytSCgrYS5McdOfvNo1dAncd7c8=\",false,function(){return[_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"]];});_c=MessagesInput;function DeleteButton(_ref){_s2();var id=_ref.id;var _useMutation3=Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"])(DELETE_MESSAGE),_useMutation4=Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation3,1),deleteMessage=_useMutation4[0];function onClick(){deleteMessage({variables:{id:id},refetchQueries:[{query:GET_MESSAGES}]});}return __jsx(_Widgets_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{onClick:onClick,__self:this,__source:{fileName:_jsxFileName,lineNumber:63,columnNumber:10}},\"Delete \",id);}_s2(DeleteButton,\"hkGi7a7i6lVp2j/5cv1HRdRZz9A=\",false,function(){return[_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"]];});_c2=DeleteButton;function MessagesList(){_s3();var _this=this;var _useLiveQuery=Object(_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(GET_MESSAGES),loading=_useLiveQuery.loading,error=_useLiveQuery.error,data=_useLiveQuery.data;if(loading)return __jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:69,columnNumber:23}},\"Loading...\");if(error)return __jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:21}},\"Error \",error.message,\"...\");return __jsx(\"ul\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:72,columnNumber:10}},data.message.map(function(message){return __jsx(\"li\",{key:message.id,__self:_this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:7}},__jsx(DeleteButton,{id:message.id,__self:_this,__source:{fileName:_jsxFileName,lineNumber:75,columnNumber:9}}),__jsx(\"span\",{__self:_this,__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:9}},message.text));}));}_s3(MessagesList,\"INmSfUBQDKiFRQgArj7RI2EsIYs=\",false,function(){return[_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];});_c3=MessagesList;var CURRENT_USER={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"current_user\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":45,\"source\":{\"body\":\"\\n  {\\n    current_user {\\n      name\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};function CurrentUser(){_s4();var _useLiveQuery2=Object(_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(CURRENT_USER),loading=_useLiveQuery2.loading,error=_useLiveQuery2.error,data=_useLiveQuery2.data;if(loading)return'Loading...';if(error)return\"Error... \".concat(error.message);console.log(data);return __jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:98,columnNumber:10}},\"d\");}_s4(CurrentUser,\"INmSfUBQDKiFRQgArj7RI2EsIYs=\",false,function(){return[_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];});_c4=CurrentUser;function RefsPage(){return __jsx(_Widgets_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:106,columnNumber:10}},__jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:5}},__jsx(CurrentUser,{__self:this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:7}}),__jsx(MessagesInput,{__self:this,__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:7}}),__jsx(MessagesList,{__self:this,__source:{fileName:_jsxFileName,lineNumber:110,columnNumber:7}})));}_c5=RefsPage;var _c,_c2,_c3,_c4,_c5;$RefreshReg$(_c,\"MessagesInput\");$RefreshReg$(_c2,\"DeleteButton\");$RefreshReg$(_c3,\"MessagesList\");$RefreshReg$(_c4,\"CurrentUser\");$RefreshReg$(_c5,\"RefsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlZnNQYWdlL1JlZnNQYWdlLmpzPzM2ZWIiXSwibmFtZXMiOlsiR0VUX01FU1NBR0VTIiwiREVMRVRFX01FU1NBR0UiLCJTRU5EX01FU1NBR0UiLCJNZXNzYWdlc0lucHV0IiwidXNlTXV0YXRpb24iLCJzZW5kTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJrZXkiLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiRGVsZXRlQnV0dG9uIiwiaWQiLCJkZWxldGVNZXNzYWdlIiwib25DbGljayIsIk1lc3NhZ2VzTGlzdCIsInVzZUxpdmVRdWVyeSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwibWFwIiwiQ1VSUkVOVF9VU0VSIiwiQ3VycmVudFVzZXIiLCJjb25zb2xlIiwibG9nIiwiUmVmc1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs2TUFTQSxHQUFNQSxhQUFZLHkzQkFBbEIsQ0FVQSxHQUFNQyxlQUFjLHM3QkFBcEIsQ0FRQSxHQUFNQyxhQUFZLG1uQ0FBbEIsQ0FRQSxRQUFTQyxjQUFULEVBQXlCLHVCQUNEQyx1RUFBVyxDQUFDRixZQUFELENBRFYsd0hBQ2hCRyxXQURnQixrQkFHdkIsUUFBU0MsU0FBVCxDQUFrQkMsS0FBbEIsQ0FBeUIsQ0FDdkIsR0FBSUEsS0FBSyxDQUFDQyxHQUFOLEdBQWMsT0FBbEIsQ0FBMkIsT0FDM0IsR0FBTUMsS0FBSSxDQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsS0FBMUIsQ0FDQUosS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQWIsQ0FBcUIsRUFBckIsQ0FDQU4sV0FBVyxDQUFDLENBQ1ZPLFNBQVMsQ0FBRSxDQUFDSCxJQUFJLENBQUpBLElBQUQsQ0FERCxDQUVWSSxjQUFjLENBQUUsQ0FBQyxDQUFDQyxLQUFLLENBQUVkLFlBQVIsQ0FBRCxDQUZOLENBQUQsQ0FBWCxDQUlELENBRUQsTUFBTyxnQkFBTyxJQUFJLENBQUMsTUFBWixDQUFtQixTQUFTLENBQUdNLFFBQS9CLDZFQUFQLENBQ0QsQyxHQWRRSCxhLHdEQUNlQywrRCxRQURmRCxhLENBaUJULFFBQVNZLGFBQVQsTUFBNEIsVUFBTEMsR0FBSyxNQUFMQSxFQUFLLG1CQUNGWix1RUFBVyxDQUFDSCxjQUFELENBRFQseUhBQ25CZ0IsYUFEbUIsa0JBRzFCLFFBQVNDLFFBQVQsRUFBbUIsQ0FDakJELGFBQWEsQ0FBQyxDQUNaTCxTQUFTLENBQUUsQ0FBQ0ksRUFBRSxDQUFGQSxFQUFELENBREMsQ0FFWkgsY0FBYyxDQUFFLENBQUMsQ0FBQ0MsS0FBSyxDQUFFZCxZQUFSLENBQUQsQ0FGSixDQUFELENBQWIsQ0FJRCxDQUVELE1BQU8sT0FBQyx1REFBRCxFQUFRLE9BQU8sQ0FBR2tCLE9BQWxCLHVGQUFxQ0YsRUFBckMsQ0FBUCxDQUNELEMsSUFYUUQsWSx3REFDaUJYLCtELFNBRGpCVyxZLENBY1QsUUFBU0ksYUFBVCxFQUF3Qix3Q0FDU0MsaUVBQVksQ0FBQ3BCLFlBQUQsQ0FEckIsQ0FDZnFCLE9BRGUsZUFDZkEsT0FEZSxDQUNOQyxLQURNLGVBQ05BLEtBRE0sQ0FDQ0MsSUFERCxlQUNDQSxJQURELENBRXRCLEdBQUlGLE9BQUosQ0FBYSxNQUFPLHVHQUFQLENBQ2IsR0FBSUMsS0FBSixDQUFXLE1BQU8sbUdBQWFBLEtBQUssQ0FBQ0UsT0FBbkIsT0FBUCxDQUVYLE1BQU8seUZBQ0hELElBQUksQ0FBQ0MsT0FBTCxDQUFhQyxHQUFiLENBQWlCLFNBQUFELE9BQU8sUUFDeEIsYUFBSSxHQUFHLENBQUdBLE9BQU8sQ0FBQ1IsRUFBbEIsNkVBQ0UsTUFBQyxZQUFELEVBQWMsRUFBRSxDQUFHUSxPQUFPLENBQUNSLEVBQTNCLDZFQURGLENBRUUsMEZBQVFRLE9BQU8sQ0FBQ2YsSUFBaEIsQ0FGRixDQUR3QixFQUF4QixDQURHLENBQVAsQ0FRRCxDLElBYlFVLFksd0RBQ3dCQyx5RCxTQUR4QkQsWSxDQWdCVCxHQUFNTyxhQUFZLG1rQkFBbEIsQ0FRQSxRQUFTQyxZQUFULEVBQXVCLDBCQUNVUCxpRUFBWSxDQUFDTSxZQUFELENBRHRCLENBQ2RMLE9BRGMsZ0JBQ2RBLE9BRGMsQ0FDTEMsS0FESyxnQkFDTEEsS0FESyxDQUNFQyxJQURGLGdCQUNFQSxJQURGLENBR3JCLEdBQUlGLE9BQUosQ0FBYSxNQUFPLFlBQVAsQ0FDYixHQUFJQyxLQUFKLENBQVcseUJBQW9CQSxLQUFLLENBQUNFLE9BQTFCLEVBQ1hJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaLEVBRUEsTUFBTyw4RkFBUCxDQUdELEMsSUFWUUksVyx3REFDd0JQLHlELFNBRHhCTyxXLENBYU0sUUFBU0csU0FBVCxFQUFvQixDQUVqQyxNQUFPLE9BQUMscURBQUQsK0VBQ0wseUZBQ0UsTUFBQyxXQUFELDhFQURGLENBRUUsTUFBQyxhQUFELDhFQUZGLENBR0UsTUFBQyxZQUFELDhFQUhGLENBREssQ0FBUCxDQU9ELEMsSUFUdUJBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlZnNQYWdlL1JlZnNQYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL1dpZGdldHMvUGFnZVwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vV2lkZ2V0cy9CdXR0b25cIlxyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB1c2VMaXZlUXVlcnkgZnJvbSBcIi4uLy4uL2xpYi91c2VMaXZlUXVlcnlcIlxyXG5cclxuXHJcbmNvbnN0IEdFVF9NRVNTQUdFUyA9IGdxbGBcclxuICB7XHJcbiAgICBtZXNzYWdlKG9yZGVyX2J5OiB7aWQ6IGFzY30pIHtcclxuICAgICAgaWRcclxuICAgICAgdGV4dFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuXHJcbmNvbnN0IERFTEVURV9NRVNTQUdFID0gZ3FsYFxyXG4gIG11dGF0aW9uICgkaWQ6IEludCEpIHtcclxuICAgIGRlbGV0ZV9tZXNzYWdlX2J5X3BrKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFNFTkRfTUVTU0FHRSA9IGdxbGBcclxuICBtdXRhdGlvbiAoJHRleHQ6IFN0cmluZyl7XHJcbiAgICBpbnNlcnRfbWVzc2FnZV9vbmUob2JqZWN0OiB7dGV4dDogJHRleHR9KSB7XHJcbiAgICAgIGlkIHRleHRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VzSW5wdXQoKSB7XHJcbiAgY29uc3QgW3NlbmRNZXNzYWdlXSA9IHVzZU11dGF0aW9uKFNFTkRfTUVTU0FHRSlcclxuXHJcbiAgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgIT09ICdFbnRlcicpIHJldHVyblxyXG4gICAgY29uc3QgdGV4dCA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJydcclxuICAgIHNlbmRNZXNzYWdlKHtcclxuICAgICAgdmFyaWFibGVzOiB7dGV4dH0sXHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbe3F1ZXJ5OiBHRVRfTUVTU0FHRVN9XVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbktleURvd249eyBvblN1Ym1pdCB9Lz5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIERlbGV0ZUJ1dHRvbih7aWR9KSB7XHJcbiAgY29uc3QgW2RlbGV0ZU1lc3NhZ2VdID0gdXNlTXV0YXRpb24oREVMRVRFX01FU1NBR0UpXHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2soKSB7XHJcbiAgICBkZWxldGVNZXNzYWdlKHtcclxuICAgICAgdmFyaWFibGVzOiB7aWR9LFxyXG4gICAgICByZWZldGNoUXVlcmllczogW3txdWVyeTogR0VUX01FU1NBR0VTfV1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gPEJ1dHRvbiBvbkNsaWNrPXsgb25DbGljayB9PkRlbGV0ZSB7IGlkIH08L0J1dHRvbj5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VzTGlzdCgpIHtcclxuICBjb25zdCB7bG9hZGluZywgZXJyb3IsIGRhdGF9ID0gdXNlTGl2ZVF1ZXJ5KEdFVF9NRVNTQUdFUylcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RXJyb3IgeyBlcnJvci5tZXNzYWdlIH0uLi48L2Rpdj5cclxuXHJcbiAgcmV0dXJuIDx1bD5cclxuICAgIHsgZGF0YS5tZXNzYWdlLm1hcChtZXNzYWdlID0+XHJcbiAgICAgIDxsaSBrZXk9eyBtZXNzYWdlLmlkIH0+XHJcbiAgICAgICAgPERlbGV0ZUJ1dHRvbiBpZD17IG1lc3NhZ2UuaWQgfS8+XHJcbiAgICAgICAgPHNwYW4+eyBtZXNzYWdlLnRleHQgfTwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgICkgfVxyXG4gIDwvdWw+XHJcbn1cclxuXHJcblxyXG5jb25zdCBDVVJSRU5UX1VTRVIgPSBncWxgXHJcbiAge1xyXG4gICAgY3VycmVudF91c2VyIHtcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZnVuY3Rpb24gQ3VycmVudFVzZXIoKSB7XHJcbiAgY29uc3Qge2xvYWRpbmcsIGVycm9yLCBkYXRhfSA9IHVzZUxpdmVRdWVyeShDVVJSRU5UX1VTRVIpXHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gJ0xvYWRpbmcuLi4nXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gYEVycm9yLi4uICR7IGVycm9yLm1lc3NhZ2UgfWBcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIGRcclxuICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZnNQYWdlKCkge1xyXG5cclxuICByZXR1cm4gPFBhZ2U+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q3VycmVudFVzZXIvPlxyXG4gICAgICA8TWVzc2FnZXNJbnB1dC8+XHJcbiAgICAgIDxNZXNzYWdlc0xpc3QvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9QYWdlPlxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RefsPage/RefsPage.js\n");

/***/ })

})
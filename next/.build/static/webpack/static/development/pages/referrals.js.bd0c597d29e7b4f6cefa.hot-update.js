webpackHotUpdate("static/development/pages/referrals.js",{

/***/ "./components/RefsPage/RefsPage.js":
/*!*****************************************!*\
  !*** ./components/RefsPage/RefsPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RefsPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Widgets_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Widgets/Page */ \"./components/Widgets/Page.js\");\n/* harmony import */ var _Widgets_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Widgets/Button */ \"./components/Widgets/Button.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ \"../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useLiveQuery */ \"./lib/useLiveQuery.js\");\nvar _jsxFileName=\"/app/next/components/RefsPage/RefsPage.js\",_s=$RefreshSig$(),_s2=$RefreshSig$(),_s3=$RefreshSig$(),_s4=$RefreshSig$();var __jsx=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;var GET_MESSAGES={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"message\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"order_by\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"EnumValue\",\"value\":\"asc\"}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":70,\"source\":{\"body\":\"\\n  {\\n    message(order_by: {id: asc}) {\\n      id\\n      text\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};var DELETE_MESSAGE={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"mutation\",\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"delete_message_by_pk\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"}}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":81,\"source\":{\"body\":\"\\n  mutation ($id: Int!) {\\n    delete_message_by_pk(id: $id) {\\n      id\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};var SEND_MESSAGE={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"mutation\",\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"insert_message_one\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"object\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"}}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":101,\"source\":{\"body\":\"\\n  mutation ($text: String){\\n    insert_message_one(object: {text: $text}) {\\n      id text\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};function MessagesInput(){_s();var _useMutation=Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"])(SEND_MESSAGE),_useMutation2=Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation,1),sendMessage=_useMutation2[0];function onSubmit(event){if(event.key!=='Enter')return;var text=event.target.value;event.target.value='';sendMessage({variables:{text:text},refetchQueries:[{query:GET_MESSAGES}]});}return __jsx(\"input\",{type:\"text\",onKeyDown:onSubmit,__self:this,__source:{fileName:_jsxFileName,lineNumber:49,columnNumber:10}});}_s(MessagesInput,\"SytSCgrYS5McdOfvNo1dAncd7c8=\",false,function(){return[_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"]];});_c=MessagesInput;function DeleteButton(_ref){_s2();var id=_ref.id;var _useMutation3=Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"])(DELETE_MESSAGE),_useMutation4=Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation3,1),deleteMessage=_useMutation4[0];function onClick(){deleteMessage({variables:{id:id},refetchQueries:[{query:GET_MESSAGES}]});}return __jsx(_Widgets_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{onClick:onClick,__self:this,__source:{fileName:_jsxFileName,lineNumber:63,columnNumber:10}},\"Delete \",id);}_s2(DeleteButton,\"hkGi7a7i6lVp2j/5cv1HRdRZz9A=\",false,function(){return[_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"]];});_c2=DeleteButton;function MessagesList(){_s3();var _this=this;var _useLiveQuery=Object(_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(GET_MESSAGES),loading=_useLiveQuery.loading,error=_useLiveQuery.error,data=_useLiveQuery.data;if(loading)return __jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:69,columnNumber:23}},\"Loading...\");if(error)return __jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:21}},\"Error \",error.message,\"...\");return __jsx(\"ul\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:72,columnNumber:10}},data.message.map(function(message){return __jsx(\"li\",{key:message.id,__self:_this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:7}},__jsx(DeleteButton,{id:message.id,__self:_this,__source:{fileName:_jsxFileName,lineNumber:75,columnNumber:9}}),__jsx(\"span\",{__self:_this,__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:9}},message.text));}));}_s3(MessagesList,\"INmSfUBQDKiFRQgArj7RI2EsIYs=\",false,function(){return[_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];});_c3=MessagesList;var CURRENT_USER={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"current_user\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":45,\"source\":{\"body\":\"\\n  {\\n    current_user {\\n      name\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};function CurrentUser(){_s4();var _useLiveQuery2=Object(_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(CURRENT_USER),loading=_useLiveQuery2.loading,error=_useLiveQuery2.error,data=_useLiveQuery2.data;// if (loading) return <div>'Loading...'</div>\n// if (error) return <div>`Error... ${ error.message }`</div>\nconsole.log(data);return __jsx(\"div\",{style:{marginLeft:'1em'},__self:this,__source:{fileName:_jsxFileName,lineNumber:100,columnNumber:10}},\"d\");}_s4(CurrentUser,\"INmSfUBQDKiFRQgArj7RI2EsIYs=\",false,function(){return[_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];});_c4=CurrentUser;function RefsPage(){return __jsx(_Widgets_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:10}},__jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:5}},__jsx(MessagesInput,{__self:this,__source:{fileName:_jsxFileName,lineNumber:110,columnNumber:7}}),__jsx(MessagesList,{__self:this,__source:{fileName:_jsxFileName,lineNumber:111,columnNumber:7}})));}_c5=RefsPage;var _c,_c2,_c3,_c4,_c5;$RefreshReg$(_c,\"MessagesInput\");$RefreshReg$(_c2,\"DeleteButton\");$RefreshReg$(_c3,\"MessagesList\");$RefreshReg$(_c4,\"CurrentUser\");$RefreshReg$(_c5,\"RefsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlZnNQYWdlL1JlZnNQYWdlLmpzPzM2ZWIiXSwibmFtZXMiOlsiR0VUX01FU1NBR0VTIiwiREVMRVRFX01FU1NBR0UiLCJTRU5EX01FU1NBR0UiLCJNZXNzYWdlc0lucHV0IiwidXNlTXV0YXRpb24iLCJzZW5kTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJrZXkiLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiRGVsZXRlQnV0dG9uIiwiaWQiLCJkZWxldGVNZXNzYWdlIiwib25DbGljayIsIk1lc3NhZ2VzTGlzdCIsInVzZUxpdmVRdWVyeSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwibWFwIiwiQ1VSUkVOVF9VU0VSIiwiQ3VycmVudFVzZXIiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luTGVmdCIsIlJlZnNQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Nk1BU0EsR0FBTUEsYUFBWSx5M0JBQWxCLENBVUEsR0FBTUMsZUFBYyxzN0JBQXBCLENBUUEsR0FBTUMsYUFBWSxtbkNBQWxCLENBUUEsUUFBU0MsY0FBVCxFQUF5Qix1QkFDREMsdUVBQVcsQ0FBQ0YsWUFBRCxDQURWLHdIQUNoQkcsV0FEZ0Isa0JBR3ZCLFFBQVNDLFNBQVQsQ0FBa0JDLEtBQWxCLENBQXlCLENBQ3ZCLEdBQUlBLEtBQUssQ0FBQ0MsR0FBTixHQUFjLE9BQWxCLENBQTJCLE9BQzNCLEdBQU1DLEtBQUksQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQTFCLENBQ0FKLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUFiLENBQXFCLEVBQXJCLENBQ0FOLFdBQVcsQ0FBQyxDQUNWTyxTQUFTLENBQUUsQ0FBQ0gsSUFBSSxDQUFKQSxJQUFELENBREQsQ0FFVkksY0FBYyxDQUFFLENBQUMsQ0FBQ0MsS0FBSyxDQUFFZCxZQUFSLENBQUQsQ0FGTixDQUFELENBQVgsQ0FJRCxDQUVELE1BQU8sZ0JBQU8sSUFBSSxDQUFDLE1BQVosQ0FBbUIsU0FBUyxDQUFHTSxRQUEvQiw2RUFBUCxDQUNELEMsR0FkUUgsYSx3REFDZUMsK0QsUUFEZkQsYSxDQWlCVCxRQUFTWSxhQUFULE1BQTRCLFVBQUxDLEdBQUssTUFBTEEsRUFBSyxtQkFDRlosdUVBQVcsQ0FBQ0gsY0FBRCxDQURULHlIQUNuQmdCLGFBRG1CLGtCQUcxQixRQUFTQyxRQUFULEVBQW1CLENBQ2pCRCxhQUFhLENBQUMsQ0FDWkwsU0FBUyxDQUFFLENBQUNJLEVBQUUsQ0FBRkEsRUFBRCxDQURDLENBRVpILGNBQWMsQ0FBRSxDQUFDLENBQUNDLEtBQUssQ0FBRWQsWUFBUixDQUFELENBRkosQ0FBRCxDQUFiLENBSUQsQ0FFRCxNQUFPLE9BQUMsdURBQUQsRUFBUSxPQUFPLENBQUdrQixPQUFsQix1RkFBcUNGLEVBQXJDLENBQVAsQ0FDRCxDLElBWFFELFksd0RBQ2lCWCwrRCxTQURqQlcsWSxDQWNULFFBQVNJLGFBQVQsRUFBd0Isd0NBQ1NDLGlFQUFZLENBQUNwQixZQUFELENBRHJCLENBQ2ZxQixPQURlLGVBQ2ZBLE9BRGUsQ0FDTkMsS0FETSxlQUNOQSxLQURNLENBQ0NDLElBREQsZUFDQ0EsSUFERCxDQUV0QixHQUFJRixPQUFKLENBQWEsTUFBTyx1R0FBUCxDQUNiLEdBQUlDLEtBQUosQ0FBVyxNQUFPLG1HQUFhQSxLQUFLLENBQUNFLE9BQW5CLE9BQVAsQ0FFWCxNQUFPLHlGQUNIRCxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsR0FBYixDQUFpQixTQUFBRCxPQUFPLFFBQ3hCLGFBQUksR0FBRyxDQUFHQSxPQUFPLENBQUNSLEVBQWxCLDZFQUNFLE1BQUMsWUFBRCxFQUFjLEVBQUUsQ0FBR1EsT0FBTyxDQUFDUixFQUEzQiw2RUFERixDQUVFLDBGQUFRUSxPQUFPLENBQUNmLElBQWhCLENBRkYsQ0FEd0IsRUFBeEIsQ0FERyxDQUFQLENBUUQsQyxJQWJRVSxZLHdEQUN3QkMseUQsU0FEeEJELFksQ0FnQlQsR0FBTU8sYUFBWSxta0JBQWxCLENBUUEsUUFBU0MsWUFBVCxFQUF1QiwwQkFFVVAsaUVBQVksQ0FBQ00sWUFBRCxDQUZ0QixDQUVkTCxPQUZjLGdCQUVkQSxPQUZjLENBRUxDLEtBRkssZ0JBRUxBLEtBRkssQ0FFRUMsSUFGRixnQkFFRUEsSUFGRixDQUlyQjtBQUNBO0FBRUFLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaLEVBRUEsTUFBTyxjQUFLLEtBQUssQ0FBRyxDQUFDTyxVQUFVLENBQUUsS0FBYixDQUFiLGtGQUFQLENBR0QsQyxJQVpRSCxXLHdEQUV3QlAseUQsU0FGeEJPLFcsQ0FlTSxRQUFTSSxTQUFULEVBQW9CLENBRWpDLE1BQU8sT0FBQyxxREFBRCwrRUFDTCx5RkFDRSxNQUFDLGFBQUQsOEVBREYsQ0FFRSxNQUFDLFlBQUQsOEVBRkYsQ0FESyxDQUFQLENBT0QsQyxJQVR1QkEsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVmc1BhZ2UvUmVmc1BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vV2lkZ2V0cy9QYWdlXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9XaWRnZXRzL0J1dHRvblwiXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHVzZUxpdmVRdWVyeSBmcm9tIFwiLi4vLi4vbGliL3VzZUxpdmVRdWVyeVwiXHJcblxyXG5cclxuY29uc3QgR0VUX01FU1NBR0VTID0gZ3FsYFxyXG4gIHtcclxuICAgIG1lc3NhZ2Uob3JkZXJfYnk6IHtpZDogYXNjfSkge1xyXG4gICAgICBpZFxyXG4gICAgICB0ZXh0XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5cclxuY29uc3QgREVMRVRFX01FU1NBR0UgPSBncWxgXHJcbiAgbXV0YXRpb24gKCRpZDogSW50ISkge1xyXG4gICAgZGVsZXRlX21lc3NhZ2VfYnlfcGsoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU0VORF9NRVNTQUdFID0gZ3FsYFxyXG4gIG11dGF0aW9uICgkdGV4dDogU3RyaW5nKXtcclxuICAgIGluc2VydF9tZXNzYWdlX29uZShvYmplY3Q6IHt0ZXh0OiAkdGV4dH0pIHtcclxuICAgICAgaWQgdGV4dFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZXNJbnB1dCgpIHtcclxuICBjb25zdCBbc2VuZE1lc3NhZ2VdID0gdXNlTXV0YXRpb24oU0VORF9NRVNTQUdFKVxyXG5cclxuICBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSAhPT0gJ0VudGVyJykgcmV0dXJuXHJcbiAgICBjb25zdCB0ZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJ1xyXG4gICAgc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICB2YXJpYWJsZXM6IHt0ZXh0fSxcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7cXVlcnk6IEdFVF9NRVNTQUdFU31dXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uS2V5RG93bj17IG9uU3VibWl0IH0vPlxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gRGVsZXRlQnV0dG9uKHtpZH0pIHtcclxuICBjb25zdCBbZGVsZXRlTWVzc2FnZV0gPSB1c2VNdXRhdGlvbihERUxFVEVfTUVTU0FHRSlcclxuXHJcbiAgZnVuY3Rpb24gb25DbGljaygpIHtcclxuICAgIGRlbGV0ZU1lc3NhZ2Uoe1xyXG4gICAgICB2YXJpYWJsZXM6IHtpZH0sXHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbe3F1ZXJ5OiBHRVRfTUVTU0FHRVN9XVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiA8QnV0dG9uIG9uQ2xpY2s9eyBvbkNsaWNrIH0+RGVsZXRlIHsgaWQgfTwvQnV0dG9uPlxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZXNMaXN0KCkge1xyXG4gIGNvbnN0IHtsb2FkaW5nLCBlcnJvciwgZGF0YX0gPSB1c2VMaXZlUXVlcnkoR0VUX01FU1NBR0VTKVxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciB7IGVycm9yLm1lc3NhZ2UgfS4uLjwvZGl2PlxyXG5cclxuICByZXR1cm4gPHVsPlxyXG4gICAgeyBkYXRhLm1lc3NhZ2UubWFwKG1lc3NhZ2UgPT5cclxuICAgICAgPGxpIGtleT17IG1lc3NhZ2UuaWQgfT5cclxuICAgICAgICA8RGVsZXRlQnV0dG9uIGlkPXsgbWVzc2FnZS5pZCB9Lz5cclxuICAgICAgICA8c3Bhbj57IG1lc3NhZ2UudGV4dCB9PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSB9XHJcbiAgPC91bD5cclxufVxyXG5cclxuXHJcbmNvbnN0IENVUlJFTlRfVVNFUiA9IGdxbGBcclxuICB7XHJcbiAgICBjdXJyZW50X3VzZXIge1xyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5mdW5jdGlvbiBDdXJyZW50VXNlcigpIHtcclxuXHJcbiAgY29uc3Qge2xvYWRpbmcsIGVycm9yLCBkYXRhfSA9IHVzZUxpdmVRdWVyeShDVVJSRU5UX1VTRVIpXHJcblxyXG4gIC8vIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj4nTG9hZGluZy4uLic8L2Rpdj5cclxuICAvLyBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmBFcnJvci4uLiAkeyBlcnJvci5tZXNzYWdlIH1gPC9kaXY+XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gIHJldHVybiA8ZGl2IHN0eWxlPXsge21hcmdpbkxlZnQ6ICcxZW0nfSB9PlxyXG4gICAgZFxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVmc1BhZ2UoKSB7XHJcblxyXG4gIHJldHVybiA8UGFnZT5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxNZXNzYWdlc0lucHV0Lz5cclxuICAgICAgPE1lc3NhZ2VzTGlzdC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9QYWdlPlxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RefsPage/RefsPage.js\n");

/***/ })

})
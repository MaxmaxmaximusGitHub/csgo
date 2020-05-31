webpackHotUpdate("static/development/pages/referrals.js",{

/***/ "./components/RefsPage/RefsPage.js":
/*!*****************************************!*\
  !*** ./components/RefsPage/RefsPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RefsPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Widgets_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Widgets/Page */ \"./components/Widgets/Page.js\");\n/* harmony import */ var _Widgets_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Widgets/Button */ \"./components/Widgets/Button.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ \"../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/useLiveQuery */ \"./lib/useLiveQuery.js\");\nvar _jsxFileName=\"/app/next/components/RefsPage/RefsPage.js\",_s=$RefreshSig$(),_s2=$RefreshSig$(),_s3=$RefreshSig$(),_s4=$RefreshSig$();var __jsx=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;var GET_MESSAGES={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"message\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"order_by\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"EnumValue\",\"value\":\"asc\"}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":70,\"source\":{\"body\":\"\\n  {\\n    message(order_by: {id: asc}) {\\n      id\\n      text\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};var DELETE_MESSAGE={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"mutation\",\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"}},\"type\":{\"kind\":\"NonNullType\",\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"delete_message_by_pk\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"}}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":81,\"source\":{\"body\":\"\\n  mutation ($id: Int!) {\\n    delete_message_by_pk(id: $id) {\\n      id\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};var SEND_MESSAGE={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"mutation\",\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"String\"}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"insert_message_one\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"object\"},\"value\":{\"kind\":\"ObjectValue\",\"fields\":[{\"kind\":\"ObjectField\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"}}}]}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"text\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":101,\"source\":{\"body\":\"\\n  mutation ($text: String){\\n    insert_message_one(object: {text: $text}) {\\n      id text\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};function MessagesInput(){_s();var _useMutation=Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"])(SEND_MESSAGE),_useMutation2=Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation,1),sendMessage=_useMutation2[0];function onSubmit(event){if(event.key!=='Enter')return;var text=event.target.value;event.target.value='';sendMessage({variables:{text:text},refetchQueries:[{query:GET_MESSAGES}]});}return __jsx(\"input\",{type:\"text\",onKeyDown:onSubmit,__self:this,__source:{fileName:_jsxFileName,lineNumber:49,columnNumber:10}});}_s(MessagesInput,\"SytSCgrYS5McdOfvNo1dAncd7c8=\",false,function(){return[_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"]];});_c=MessagesInput;function DeleteButton(_ref){_s2();var id=_ref.id;var _useMutation3=Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"])(DELETE_MESSAGE),_useMutation4=Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation3,1),deleteMessage=_useMutation4[0];function onClick(){deleteMessage({variables:{id:id},refetchQueries:[{query:GET_MESSAGES}]});}return __jsx(_Widgets_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{onClick:onClick,__self:this,__source:{fileName:_jsxFileName,lineNumber:63,columnNumber:10}},\"Delete \",id);}_s2(DeleteButton,\"hkGi7a7i6lVp2j/5cv1HRdRZz9A=\",false,function(){return[_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useMutation\"]];});_c2=DeleteButton;function MessagesList(){_s3();var _this=this;var _useLiveQuery=Object(_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(GET_MESSAGES),loading=_useLiveQuery.loading,error=_useLiveQuery.error,data=_useLiveQuery.data;if(loading)return __jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:69,columnNumber:23}},\"Loading...\");if(error)return __jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:21}},\"Error \",error.message,\"...\");return __jsx(\"ul\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:72,columnNumber:10}},data.message.map(function(message){return __jsx(\"li\",{key:message.id,__self:_this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:7}},__jsx(DeleteButton,{id:message.id,__self:_this,__source:{fileName:_jsxFileName,lineNumber:75,columnNumber:9}}),__jsx(\"span\",{__self:_this,__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:9}},message.text));}));}_s3(MessagesList,\"INmSfUBQDKiFRQgArj7RI2EsIYs=\",false,function(){return[_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];});_c3=MessagesList;var CURRENT_USER={\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"current_user\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":45,\"source\":{\"body\":\"\\n  {\\n    current_user {\\n      name\\n    }\\n  }\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}}}};function CurrentUser(){_s4();var _useLiveQuery2=Object(_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(CURRENT_USER),loading=_useLiveQuery2.loading,error=_useLiveQuery2.error,data=_useLiveQuery2.data;// if (loading) return <div>'Loading...'</div>\n// if (error) return <div>`Error... ${ error.message }`</div>\n// console.log(data)\nreturn __jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:10}},\"d\");}_s4(CurrentUser,\"INmSfUBQDKiFRQgArj7RI2EsIYs=\",false,function(){return[_lib_useLiveQuery__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];});_c4=CurrentUser;function RefsPage(){return __jsx(_Widgets_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:10}},__jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:5}},__jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:109,columnNumber:7}},__jsx(MessagesInput,{__self:this,__source:{fileName:_jsxFileName,lineNumber:110,columnNumber:9}}),__jsx(MessagesList,{__self:this,__source:{fileName:_jsxFileName,lineNumber:111,columnNumber:9}})),__jsx(\"div\",{__self:this,__source:{fileName:_jsxFileName,lineNumber:113,columnNumber:7}},__jsx(CurrentUser,{__self:this,__source:{fileName:_jsxFileName,lineNumber:114,columnNumber:9}}))));}_c5=RefsPage;var _c,_c2,_c3,_c4,_c5;$RefreshReg$(_c,\"MessagesInput\");$RefreshReg$(_c2,\"DeleteButton\");$RefreshReg$(_c3,\"MessagesList\");$RefreshReg$(_c4,\"CurrentUser\");$RefreshReg$(_c5,\"RefsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlZnNQYWdlL1JlZnNQYWdlLmpzPzM2ZWIiXSwibmFtZXMiOlsiR0VUX01FU1NBR0VTIiwiREVMRVRFX01FU1NBR0UiLCJTRU5EX01FU1NBR0UiLCJNZXNzYWdlc0lucHV0IiwidXNlTXV0YXRpb24iLCJzZW5kTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJrZXkiLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiRGVsZXRlQnV0dG9uIiwiaWQiLCJkZWxldGVNZXNzYWdlIiwib25DbGljayIsIk1lc3NhZ2VzTGlzdCIsInVzZUxpdmVRdWVyeSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwibWFwIiwiQ1VSUkVOVF9VU0VSIiwiQ3VycmVudFVzZXIiLCJSZWZzUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzZNQVNBLEdBQU1BLGFBQVkseTNCQUFsQixDQVVBLEdBQU1DLGVBQWMsczdCQUFwQixDQVFBLEdBQU1DLGFBQVksbW5DQUFsQixDQVFBLFFBQVNDLGNBQVQsRUFBeUIsdUJBQ0RDLHVFQUFXLENBQUNGLFlBQUQsQ0FEVix3SEFDaEJHLFdBRGdCLGtCQUd2QixRQUFTQyxTQUFULENBQWtCQyxLQUFsQixDQUF5QixDQUN2QixHQUFJQSxLQUFLLENBQUNDLEdBQU4sR0FBYyxPQUFsQixDQUEyQixPQUMzQixHQUFNQyxLQUFJLENBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUExQixDQUNBSixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsS0FBYixDQUFxQixFQUFyQixDQUNBTixXQUFXLENBQUMsQ0FDVk8sU0FBUyxDQUFFLENBQUNILElBQUksQ0FBSkEsSUFBRCxDQURELENBRVZJLGNBQWMsQ0FBRSxDQUFDLENBQUNDLEtBQUssQ0FBRWQsWUFBUixDQUFELENBRk4sQ0FBRCxDQUFYLENBSUQsQ0FFRCxNQUFPLGdCQUFPLElBQUksQ0FBQyxNQUFaLENBQW1CLFNBQVMsQ0FBR00sUUFBL0IsNkVBQVAsQ0FDRCxDLEdBZFFILGEsd0RBQ2VDLCtELFFBRGZELGEsQ0FpQlQsUUFBU1ksYUFBVCxNQUE0QixVQUFMQyxHQUFLLE1BQUxBLEVBQUssbUJBQ0ZaLHVFQUFXLENBQUNILGNBQUQsQ0FEVCx5SEFDbkJnQixhQURtQixrQkFHMUIsUUFBU0MsUUFBVCxFQUFtQixDQUNqQkQsYUFBYSxDQUFDLENBQ1pMLFNBQVMsQ0FBRSxDQUFDSSxFQUFFLENBQUZBLEVBQUQsQ0FEQyxDQUVaSCxjQUFjLENBQUUsQ0FBQyxDQUFDQyxLQUFLLENBQUVkLFlBQVIsQ0FBRCxDQUZKLENBQUQsQ0FBYixDQUlELENBRUQsTUFBTyxPQUFDLHVEQUFELEVBQVEsT0FBTyxDQUFHa0IsT0FBbEIsdUZBQXFDRixFQUFyQyxDQUFQLENBQ0QsQyxJQVhRRCxZLHdEQUNpQlgsK0QsU0FEakJXLFksQ0FjVCxRQUFTSSxhQUFULEVBQXdCLHdDQUNTQyxpRUFBWSxDQUFDcEIsWUFBRCxDQURyQixDQUNmcUIsT0FEZSxlQUNmQSxPQURlLENBQ05DLEtBRE0sZUFDTkEsS0FETSxDQUNDQyxJQURELGVBQ0NBLElBREQsQ0FFdEIsR0FBSUYsT0FBSixDQUFhLE1BQU8sdUdBQVAsQ0FDYixHQUFJQyxLQUFKLENBQVcsTUFBTyxtR0FBYUEsS0FBSyxDQUFDRSxPQUFuQixPQUFQLENBRVgsTUFBTyx5RkFDSEQsSUFBSSxDQUFDQyxPQUFMLENBQWFDLEdBQWIsQ0FBaUIsU0FBQUQsT0FBTyxRQUN4QixhQUFJLEdBQUcsQ0FBR0EsT0FBTyxDQUFDUixFQUFsQiw2RUFDRSxNQUFDLFlBQUQsRUFBYyxFQUFFLENBQUdRLE9BQU8sQ0FBQ1IsRUFBM0IsNkVBREYsQ0FFRSwwRkFBUVEsT0FBTyxDQUFDZixJQUFoQixDQUZGLENBRHdCLEVBQXhCLENBREcsQ0FBUCxDQVFELEMsSUFiUVUsWSx3REFDd0JDLHlELFNBRHhCRCxZLENBZ0JULEdBQU1PLGFBQVksbWtCQUFsQixDQVFBLFFBQVNDLFlBQVQsRUFBdUIsMEJBRVVQLGlFQUFZLENBQUNNLFlBQUQsQ0FGdEIsQ0FFZEwsT0FGYyxnQkFFZEEsT0FGYyxDQUVMQyxLQUZLLGdCQUVMQSxLQUZLLENBRUVDLElBRkYsZ0JBRUVBLElBRkYsQ0FJckI7QUFDQTtBQUNBO0FBRUEsTUFBTyw4RkFBUCxDQUdELEMsSUFYUUksVyx3REFFd0JQLHlELFNBRnhCTyxXLENBY00sUUFBU0MsU0FBVCxFQUFvQixDQUVqQyxNQUFPLE9BQUMscURBQUQsK0VBQ0wseUZBQ0UseUZBQ0UsTUFBQyxhQUFELDhFQURGLENBRUUsTUFBQyxZQUFELDhFQUZGLENBREYsQ0FLRSx5RkFDRSxNQUFDLFdBQUQsOEVBREYsQ0FMRixDQURLLENBQVAsQ0FXRCxDLElBYnVCQSxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZWZzUGFnZS9SZWZzUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcbmltcG9ydCBQYWdlIGZyb20gXCIuLi9XaWRnZXRzL1BhZ2VcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL1dpZGdldHMvQnV0dG9uXCJcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgdXNlTGl2ZVF1ZXJ5IGZyb20gXCIuLi8uLi9saWIvdXNlTGl2ZVF1ZXJ5XCJcclxuXHJcblxyXG5jb25zdCBHRVRfTUVTU0FHRVMgPSBncWxgXHJcbiAge1xyXG4gICAgbWVzc2FnZShvcmRlcl9ieToge2lkOiBhc2N9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRleHRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcblxyXG5jb25zdCBERUxFVEVfTUVTU0FHRSA9IGdxbGBcclxuICBtdXRhdGlvbiAoJGlkOiBJbnQhKSB7XHJcbiAgICBkZWxldGVfbWVzc2FnZV9ieV9wayhpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTRU5EX01FU1NBR0UgPSBncWxgXHJcbiAgbXV0YXRpb24gKCR0ZXh0OiBTdHJpbmcpe1xyXG4gICAgaW5zZXJ0X21lc3NhZ2Vfb25lKG9iamVjdDoge3RleHQ6ICR0ZXh0fSkge1xyXG4gICAgICBpZCB0ZXh0XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlc0lucHV0KCkge1xyXG4gIGNvbnN0IFtzZW5kTWVzc2FnZV0gPSB1c2VNdXRhdGlvbihTRU5EX01FU1NBR0UpXHJcblxyXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ICE9PSAnRW50ZXInKSByZXR1cm5cclxuICAgIGNvbnN0IHRleHQgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnXHJcbiAgICBzZW5kTWVzc2FnZSh7XHJcbiAgICAgIHZhcmlhYmxlczoge3RleHR9LFxyXG4gICAgICByZWZldGNoUXVlcmllczogW3txdWVyeTogR0VUX01FU1NBR0VTfV1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25LZXlEb3duPXsgb25TdWJtaXQgfS8+XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBEZWxldGVCdXR0b24oe2lkfSkge1xyXG4gIGNvbnN0IFtkZWxldGVNZXNzYWdlXSA9IHVzZU11dGF0aW9uKERFTEVURV9NRVNTQUdFKVxyXG5cclxuICBmdW5jdGlvbiBvbkNsaWNrKCkge1xyXG4gICAgZGVsZXRlTWVzc2FnZSh7XHJcbiAgICAgIHZhcmlhYmxlczoge2lkfSxcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7cXVlcnk6IEdFVF9NRVNTQUdFU31dXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxCdXR0b24gb25DbGljaz17IG9uQ2xpY2sgfT5EZWxldGUgeyBpZCB9PC9CdXR0b24+XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlc0xpc3QoKSB7XHJcbiAgY29uc3Qge2xvYWRpbmcsIGVycm9yLCBkYXRhfSA9IHVzZUxpdmVRdWVyeShHRVRfTUVTU0FHRVMpXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yIHsgZXJyb3IubWVzc2FnZSB9Li4uPC9kaXY+XHJcblxyXG4gIHJldHVybiA8dWw+XHJcbiAgICB7IGRhdGEubWVzc2FnZS5tYXAobWVzc2FnZSA9PlxyXG4gICAgICA8bGkga2V5PXsgbWVzc2FnZS5pZCB9PlxyXG4gICAgICAgIDxEZWxldGVCdXR0b24gaWQ9eyBtZXNzYWdlLmlkIH0vPlxyXG4gICAgICAgIDxzcGFuPnsgbWVzc2FnZS50ZXh0IH08L3NwYW4+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApIH1cclxuICA8L3VsPlxyXG59XHJcblxyXG5cclxuY29uc3QgQ1VSUkVOVF9VU0VSID0gZ3FsYFxyXG4gIHtcclxuICAgIGN1cnJlbnRfdXNlciB7XHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmZ1bmN0aW9uIEN1cnJlbnRVc2VyKCkge1xyXG5cclxuICBjb25zdCB7bG9hZGluZywgZXJyb3IsIGRhdGF9ID0gdXNlTGl2ZVF1ZXJ5KENVUlJFTlRfVVNFUilcclxuXHJcbiAgLy8gaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PidMb2FkaW5nLi4uJzwvZGl2PlxyXG4gIC8vIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+YEVycm9yLi4uICR7IGVycm9yLm1lc3NhZ2UgfWA8L2Rpdj5cclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIGRcclxuICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZnNQYWdlKCkge1xyXG5cclxuICByZXR1cm4gPFBhZ2U+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxNZXNzYWdlc0lucHV0Lz5cclxuICAgICAgICA8TWVzc2FnZXNMaXN0Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEN1cnJlbnRVc2VyLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L1BhZ2U+XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RefsPage/RefsPage.js\n");

/***/ })

})
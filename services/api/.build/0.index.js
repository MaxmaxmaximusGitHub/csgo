exports.ids = [0];
exports.modules = {

/***/ "./actions/sendMessage.js":
/*!********************************!*\
  !*** ./actions/sendMessage.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./app.js");


_app__WEBPACK_IMPORTED_MODULE_0__["default"].post('/sendMessage', (req, res) => {

  console.log('ACTION sendMessage:')
  console.log(req.headers)
  console.log(req.body)


  res.json({
    text: 'MY TEXT 33',
  })
})

console.log(11)


/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hasuraAuthMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hasuraAuthMiddleware */ "./hasuraAuthMiddleware.js");





const PORT = process.env.PORT
const app = express__WEBPACK_IMPORTED_MODULE_0___default()()

app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_1___default()())
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json())
// app.use()


app.listen(PORT, (error) => {
  if (error) return console.error(error)
  console.log(`Api server started on http://localhost:${ PORT }`)
})


/* harmony default export */ __webpack_exports__["default"] = (app);



/***/ }),

/***/ "./hasuraAuthMiddleware.js":
/*!*********************************!*\
  !*** ./hasuraAuthMiddleware.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasuraAuthMiddleware; });
function hasuraAuthMiddleware(req, res, next) {
  const requiredSecret = req.headers['x-hasura-action-secret']
  const providedSecret = process.env.HASURA_GRAPHQL_ACTION_SECRET
  if (requiredSecret === providedSecret) next();
  else res.sendStatus(403);
}


/***/ })

};;
//# sourceMappingURL=0.index.js.map
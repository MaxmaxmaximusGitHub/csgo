/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./auth.js":
/*!*****************!*\
  !*** ./auth.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var passport_steam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! passport-steam */ "passport-steam");
/* harmony import */ var passport_steam__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(passport_steam__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _createUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createUser */ "./createUser.js");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! connect-redis */ "connect-redis");
/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(connect_redis__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redis */ "redis");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_8__);











const redisUrl = `redis://${ process.env.REDIS_PASS }@redis:6379`
const redisClient = redis__WEBPACK_IMPORTED_MODULE_8___default.a.createClient(redisUrl)
const RedisStore = connect_redis__WEBPACK_IMPORTED_MODULE_7___default()(express_session__WEBPACK_IMPORTED_MODULE_6___default.a)
const PORT = process.env.PORT
const app = express__WEBPACK_IMPORTED_MODULE_0___default()()


app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()())


app.use(express_session__WEBPACK_IMPORTED_MODULE_6___default()({
  store: new RedisStore({client: redisClient}),
  secret: process.env.AUTH_SESSIONS_SECRET_KEY
}))


app.use(passport__WEBPACK_IMPORTED_MODULE_1___default.a.initialize())
app.use(passport__WEBPACK_IMPORTED_MODULE_1___default.a.session())

app.get('/hook/hasurahook', (req, res) => {

  console.log('hasura hook user', req.user)

  res.json({
    "X-Hasura-User-Id": "2",
    "X-Hasura-Role": "admin",
    "X-Hasura-Is-Owner": "true",
    "X-Hasura-Custom": "custom value"
  })
  // res.status(401).end()
})


////////////////////////////////////////////////
// auth
////////////////////////////////////////////////
passport__WEBPACK_IMPORTED_MODULE_1___default.a.use(new passport_steam__WEBPACK_IMPORTED_MODULE_4___default.a({
    returnURL: 'http://localhost/auth/steam/return',
    realm: 'http://localhost/',
    apiKey: process.env.AUTH_STEAM_API_KEY
  },
  function (identifier, profile, done) {
    console.log('DATA FROM STEAM', identifier, profile, done)

    done(null, {fakeUser: "ololo"})

    // User.findByOpenID({ openId: identifier }, function (err, user) {
    //   return done(err, user);
    // });
  }
));

passport__WEBPACK_IMPORTED_MODULE_1___default.a.serializeUser(function (user, done) {
  // console.log('serializeUser', user)
  done(null, user)
});

passport__WEBPACK_IMPORTED_MODULE_1___default.a.deserializeUser(function (obj, done) {
  // console.log('deserializeUser', obj)
  done(null, obj)
});


app.get('/auth/steam', passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('steam'))


app.get('/auth/logout', (req, res) => {
  req.logout()
  res.redirect('/')
  console.log('logout')
})


app.get(
  '/auth/steam/return',
  passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('steam', {failureRedirect: '/login'}),
  (req, res) => res.redirect('/')
)


app.listen(PORT, (error) => {
  if (error) return console.error(error)
  console.log(`Auth server started on http://localhost:${ PORT }`)
})






/***/ }),

/***/ "./createUser.js":
/*!***********************!*\
  !*** ./createUser.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createUser; });
/* harmony import */ var _csshot_gql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @csshot/gql */ "@csshot/gql");
/* harmony import */ var _csshot_gql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_csshot_gql__WEBPACK_IMPORTED_MODULE_0__);


const fetch = __webpack_require__(/*! node-fetch */ "node-fetch")

const HASURA_OPERATION = _csshot_gql__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createUser($steam_id: String, $nickname: String, $avatar: String) {
    insert_user_one(object: {steam_id: $steam_id, nickname: $nickname, avatar: $avatar}) {
      id
    }
  }`;


const execute = async (variables) => {
  const fetchResponse = await fetch(
    "http://hasura:8080/v1/graphql",
    {
      method: 'POST',
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      })
    }
  );

  return await fetchResponse.json()
};


// Request Handler
async function createUser({steam_id, nickname, avatar}) {

  const {data, errors} = await execute({steam_id, nickname, avatar});

  if (errors) {
    // return res.status(400).json(errors[0])
  }

  // success
  return data
}



/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js */ "core-js");
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _csshot_catch_exceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @csshot/catch-exceptions */ "@csshot/catch-exceptions");
/* harmony import */ var _csshot_catch_exceptions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_csshot_catch_exceptions__WEBPACK_IMPORTED_MODULE_1__);



setImmediate(() => {
  __webpack_require__(/*! ./auth */ "./auth.js")
})





/***/ }),

/***/ "@csshot/catch-exceptions":
/*!*******************************************!*\
  !*** external "@csshot/catch-exceptions" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@csshot/catch-exceptions");

/***/ }),

/***/ "@csshot/gql":
/*!******************************!*\
  !*** external "@csshot/gql" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@csshot/gql");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "connect-redis":
/*!********************************!*\
  !*** external "connect-redis" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connect-redis");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "core-js":
/*!**************************!*\
  !*** external "core-js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-steam":
/*!*********************************!*\
  !*** external "passport-steam" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-steam");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
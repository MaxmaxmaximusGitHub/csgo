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

/***/ "./actions/actions.js":
/*!****************************!*\
  !*** ./actions/actions.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/actions */ "./lib/actions.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var sql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sql-tag */ "sql-tag");
/* harmony import */ var sql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sql_tag__WEBPACK_IMPORTED_MODULE_2__);





_lib_actions__WEBPACK_IMPORTED_MODULE_0__["default"].add('moneyPlus', async (data, user) => {

  const {rows} = await _lib_db__WEBPACK_IMPORTED_MODULE_1__["default"].query(sql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    UPDATE "user"
    SET money = money + 2
    WHERE id = ${data.id}
    RETURNING money
  `)

  return {
    money: rows[0].money
  }
})


_lib_actions__WEBPACK_IMPORTED_MODULE_0__["default"].add('moneyMinus', async (data, user) => {

  const {rows} = await _lib_db__WEBPACK_IMPORTED_MODULE_1__["default"].query(sql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    UPDATE "user"
    SET money = money - 2
    RETURNING money
  `)

  return {
    money: rows[0].money
  }
})


_lib_actions__WEBPACK_IMPORTED_MODULE_0__["default"].add('sendChatMessage', async (data, user) => {

  const {rows} = await _lib_db__WEBPACK_IMPORTED_MODULE_1__["default"].query(sql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    INSERT INTO "chat_message" (author_id, text)
    VALUES (${user.id}, ${data.text})
    RETURNING id
  `)

  return {
    id: rows[0].id
  }
})





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
  __webpack_require__(/*! ./lib/auth */ "./lib/auth.js")
  __webpack_require__(/*! ./actions/actions */ "./actions/actions.js")
})





/***/ }),

/***/ "./lib/actions.js":
/*!************************!*\
  !*** ./lib/actions.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_expressApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/expressApp */ "./lib/expressApp.js");



class Actions {


  constructor() {
    this.actions = new Map()
    this.initUrlHandler()
  }


  initUrlHandler() {
    _lib_expressApp__WEBPACK_IMPORTED_MODULE_0__["default"].use('/action', (req, res) => {
      this.onRequest(req, res)
    })
  }


  async onRequest(req, res) {
    const {action, input, session_variables} = req.body
    const actionHandler = this.actions.get(action.name)
    const user = JSON.parse(session_variables['x-hasura-user'])

    try {
      var result = await actionHandler(input, user)
      this.sendResult(result, res)
    } catch (error) {
      this.sendError(error, res)
    }
  }


  sendResult(result, res) {
    res.json(result)
  }


  sendError(error, res) {
    res.status(403).send({
      message: error.message,
      code: error.code,
    })
  }


  add(name, handler) {
    this.actions.set(name, handler)
  }

}


/* harmony default export */ __webpack_exports__["default"] = (new Actions());




/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport_steam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-steam */ "passport-steam");
/* harmony import */ var passport_steam__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_steam__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _lib_expressApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/expressApp */ "./lib/expressApp.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var sql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sql-tag */ "sql-tag");
/* harmony import */ var sql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sql_tag__WEBPACK_IMPORTED_MODULE_5__);








const OWNER_ROLES_STEAM_IDS = ['76561198823843713']

const ROLES = {
  owner: 'owner',
  user: 'user',
  anonymous: 'anonymous',
}


_lib_expressApp__WEBPACK_IMPORTED_MODULE_3__["default"].get('/hook/hasurahook', async function (req, res) {

  if (!req.user) {
    res.json({
      "X-Hasura-User-Id": '-1',
      "X-Hasura-Role": 'anonymous',
      "X-Hasura-User": JSON.stringify(null)
    })

  } else {
    res.json({
      "X-Hasura-User-Id": req.user.id,
      "X-Hasura-Role": req.user.role,
      "X-Hasura-User": JSON.stringify(req.user),
    })
  }

})


passport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_steam__WEBPACK_IMPORTED_MODULE_1___default.a({
    returnURL: `${process.env.API_STEAM_REALM}/auth/steam/return`,
    realm: process.env.API_STEAM_REALM,
    apiKey: process.env.API_STEAM_API_KEY
  },

  async (identifier, profile, done) => {
    const json = profile._json
    const steam_id = json['steamid']

    var user = await Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__["getUserBySteamId"])(steam_id)

    var role = OWNER_ROLES_STEAM_IDS.includes(steam_id)
      ? ROLES.owner : ROLES.user

    if (!user) {
      user = await Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__["createUser"])({
        steam_id: steam_id,
        avatar: json['avatarfull'],
        nickname: json['personaname'],
        steam_profile: json['profileurl'],
        lang: json['loccountrycode'].toLowerCase(),
        role: role
      })
    }

    done(null, user)
  }
))


_lib_expressApp__WEBPACK_IMPORTED_MODULE_3__["default"].get('/auth/*', (req, res, next) => {
  if (req.headers.referer) {
    req.session.returnTo = req.headers.referer
  }
  next(null)
})


_lib_expressApp__WEBPACK_IMPORTED_MODULE_3__["default"].get('/auth/steam', passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate('steam'))


_lib_expressApp__WEBPACK_IMPORTED_MODULE_3__["default"].get('/auth/logout', (req, res) => {
  req.logout()
  res.redirect(req.session.returnTo)
})


_lib_expressApp__WEBPACK_IMPORTED_MODULE_3__["default"].get('/auth/steam/return',
  passport__WEBPACK_IMPORTED_MODULE_0___default.a.authenticate('steam', {failureRedirect: '/'}),
  (req, res) => res.redirect(req.session.returnTo)
)





/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ "pg");
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);



const db = new pg__WEBPACK_IMPORTED_MODULE_0__["Pool"]({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB_NAME,
  port: process.env.PG_PORT,
})


db.connect(async function (err) {
  if (err) throw err
})


/* harmony default export */ __webpack_exports__["default"] = (db);



/***/ }),

/***/ "./lib/expressApp.js":
/*!***************************!*\
  !*** ./lib/expressApp.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connect-redis */ "connect-redis");
/* harmony import */ var connect_redis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connect_redis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./lib/helpers.js");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redis */ "redis");
/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_7__);










const redisUrl = `redis://${
  process.env.REDIS_PASS
}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`


const redisClient = redis__WEBPACK_IMPORTED_MODULE_7___default.a.createClient(redisUrl)
const RedisStore = connect_redis__WEBPACK_IMPORTED_MODULE_1___default()(express_session__WEBPACK_IMPORTED_MODULE_3___default.a)
const app = express__WEBPACK_IMPORTED_MODULE_6___default()()


app.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json())
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_0___default()())

app.use(express_session__WEBPACK_IMPORTED_MODULE_3___default()({
  store: new RedisStore({client: redisClient}),
  secret: process.env.API_SESSIONS_SECRET_KEY,
  resave: false,
}))


app.use(passport__WEBPACK_IMPORTED_MODULE_5___default.a.initialize())
app.use(passport__WEBPACK_IMPORTED_MODULE_5___default.a.session())


passport__WEBPACK_IMPORTED_MODULE_5___default.a.serializeUser((user, done) => {
  done(null, user.id)
})


passport__WEBPACK_IMPORTED_MODULE_5___default.a.deserializeUser(async (id, done) => {
  const user = await Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getUserById"])(id)
  done(null, user)
})


app.listen(process.env.PORT, (error) => {
  if (error) return console.error(error)
  console.log(`Auth server started on http://localhost:${process.env.PORT}`)
})


/* harmony default export */ __webpack_exports__["default"] = (app);



/***/ }),

/***/ "./lib/helpers.js":
/*!************************!*\
  !*** ./lib/helpers.js ***!
  \************************/
/*! exports provided: getUserBySteamId, getUserById, createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserBySteamId", function() { return getUserBySteamId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserById", function() { return getUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony import */ var sql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sql-tag */ "sql-tag");
/* harmony import */ var sql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "./lib/db.js");




async function getUserBySteamId(steam_id) {
  const {rows} = await _db__WEBPACK_IMPORTED_MODULE_1__["default"].query(sql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    SELECT * FROM "user"
    WHERE steam_id = ${steam_id}
  `)

  if (!rows.length) {
    return null
  }

  return rows[0]
}


async function getUserById(id) {
  const {rows} = await _db__WEBPACK_IMPORTED_MODULE_1__["default"].query(sql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    SELECT * FROM "user"
    WHERE id = ${id}
  `)

  if (!rows.length) {
    return null
  }

  return rows[0]
}


async function createUser(data) {
  const {steam_id, nickname, avatar, steam_profile, lang, role} = data

  const {rows} = await _db__WEBPACK_IMPORTED_MODULE_1__["default"].query(sql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    INSERT INTO "user"
      (steam_id, nickname, avatar, steam_profile, lang, role)
    VALUES 
      (${steam_id}, ${nickname}, ${avatar}, ${steam_profile}, ${lang}, ${role})
    RETURNING *
  `)

  return rows[0]
}






/***/ }),

/***/ "@csshot/catch-exceptions":
/*!*******************************************!*\
  !*** external "@csshot/catch-exceptions" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@csshot/catch-exceptions");

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

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),

/***/ "sql-tag":
/*!**************************!*\
  !*** external "sql-tag" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sql-tag");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
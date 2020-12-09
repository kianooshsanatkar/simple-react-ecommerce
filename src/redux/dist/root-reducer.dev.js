"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _user = _interopRequireDefault(require("./user/user.reducer"));

var _navitemreducer = require("./navitemreducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  user: _user["default"],
  nav: _navitemreducer.navItemsReducer
});

exports["default"] = _default;
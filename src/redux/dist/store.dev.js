"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _rootReducer = _interopRequireDefault(require("./root-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.createStore)(_rootReducer["default"], (0, _redux.applyMiddleware)(_reduxLogger["default"]));
var _default = store;
exports["default"] = _default;
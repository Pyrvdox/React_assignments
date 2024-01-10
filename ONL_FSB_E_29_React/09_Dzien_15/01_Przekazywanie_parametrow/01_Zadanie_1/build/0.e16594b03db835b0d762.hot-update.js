"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Bulb = function Bulb() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    bulbState = _useState2[0],
    setBulbState = _useState2[1];
  var bulbSwitchHandler = function bulbSwitchHandler() {
    console.log(e);
    setBulbState(function (prevState) {
      return prevState === true ? false : true;
    });
  };
  var style = {
    width: 100,
    height: 100,
    backgroundColor: bulbState ? "yellow" : "grey"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: style
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return bulbSwitchHandler();
    }
  }, bulbState ? "ON" : "OFF"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bulb);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3d61e12e9e5654c31c28")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMTY1OTRiMDNkYjgzNWIwZDc2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQ2YsSUFBQUMsU0FBQSxHQUFrQ0YsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBMUNHLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFFOUIsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQSxFQUFTO0lBQzVCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQyxDQUFDO0lBQ2RKLFlBQVksQ0FBQyxVQUFDSyxTQUFTO01BQUEsT0FDbkJBLFNBQVMsS0FBSyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUk7SUFBQSxDQUVyQyxDQUFDO0VBQ0wsQ0FBQztFQUVELElBQU1DLEtBQUssR0FBRztJQUNWQyxLQUFLLEVBQUUsR0FBRztJQUNWQyxNQUFNLEVBQUMsR0FBRztJQUNWQyxlQUFlLEVBQUVWLFNBQVMsR0FBRyxRQUFRLEdBQUc7RUFDNUMsQ0FBQztFQUNELG9CQUNJTiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUE7SUFBS2EsS0FBSyxFQUFFQTtFQUFNLENBQU0sQ0FBQyxlQUN6QmIsMERBQUE7SUFBUW1CLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTVgsaUJBQWlCLENBQUMsQ0FBQztJQUFBO0VBQUMsR0FBRUYsU0FBUyxHQUFHLElBQUksR0FBRyxLQUFjLENBRWhGLENBQUM7QUFFWCxDQUFDO0FBRUQsaUVBQWVKLElBQUk7Ozs7Ozs7O1VDM0JuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAxX1ByemVrYXp5d2FuaWVfcGFyYW1ldHJvdy8wMV9aYWRhbmllXzEvanMvQnVsYi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEJ1bGIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYnVsYlN0YXRlLCBzZXRCdWxiU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgYnVsYlN3aXRjaEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICBzZXRCdWxiU3RhdGUoKHByZXZTdGF0ZSkgPT4gXHJcbiAgICAgICAgICAgIHByZXZTdGF0ZSA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICBoZWlnaHQ6MTAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYnVsYlN0YXRlID8gXCJ5ZWxsb3dcIiA6IFwiZ3JleVwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCAgICAgXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PjwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGJ1bGJTd2l0Y2hIYW5kbGVyKCl9PntidWxiU3RhdGUgPyBcIk9OXCIgOiBcIk9GRlwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVsYjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZDYxZTEyZTllNTY1NGMzMWMyOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnVsYiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImJ1bGJTdGF0ZSIsInNldEJ1bGJTdGF0ZSIsImJ1bGJTd2l0Y2hIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2U3RhdGUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=
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
  var bulbSwitchHandler = function bulbSwitchHandler(e) {
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
/******/ 	__webpack_require__.h = () => ("3098f3ae794f95cd51bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40NTQ1ZTQzZTFjOWZkNzVjNzg3ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQ2YsSUFBQUMsU0FBQSxHQUFrQ0YsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBMUNHLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFFOUIsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzdCRixZQUFZLENBQUMsVUFBQ0csU0FBUztNQUFBLE9BQ25CQSxTQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJO0lBQUEsQ0FDckMsQ0FBQztFQUNMLENBQUM7RUFFRCxJQUFNQyxLQUFLLEdBQUc7SUFDVkMsS0FBSyxFQUFFLEdBQUc7SUFDVkMsTUFBTSxFQUFDLEdBQUc7SUFDVkMsZUFBZSxFQUFFUixTQUFTLEdBQUcsUUFBUSxHQUFHO0VBQzVDLENBQUM7RUFDRCxvQkFDSU4sMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQUtXLEtBQUssRUFBRUE7RUFBTSxDQUFNLENBQUMsZUFDekJYLDBEQUFBO0lBQVFpQixPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1ULGlCQUFpQixDQUFDLENBQUM7SUFBQTtFQUFDLEdBQUVGLFNBQVMsR0FBRyxJQUFJLEdBQUcsS0FBYyxDQUNoRixDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlSixJQUFJOzs7Ozs7OztVQ3hCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMV9Qcnpla2F6eXdhbmllX3BhcmFtZXRyb3cvMDFfWmFkYW5pZV8xL2pzL0J1bGIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBCdWxiID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2J1bGJTdGF0ZSwgc2V0QnVsYlN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGJ1bGJTd2l0Y2hIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBzZXRCdWxiU3RhdGUoKHByZXZTdGF0ZSkgPT4gXHJcbiAgICAgICAgICAgIHByZXZTdGF0ZSA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIGhlaWdodDoxMDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBidWxiU3RhdGUgPyBcInllbGxvd1wiIDogXCJncmV5XCJcclxuICAgIH1cclxuICAgIHJldHVybiAoICAgICBcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYnVsYlN3aXRjaEhhbmRsZXIoKX0+e2J1bGJTdGF0ZSA/IFwiT05cIiA6IFwiT0ZGXCJ9PC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzA5OGYzYWU3OTRmOTVjZDUxYmRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1bGIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJidWxiU3RhdGUiLCJzZXRCdWxiU3RhdGUiLCJidWxiU3dpdGNoSGFuZGxlciIsImUiLCJwcmV2U3RhdGUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=
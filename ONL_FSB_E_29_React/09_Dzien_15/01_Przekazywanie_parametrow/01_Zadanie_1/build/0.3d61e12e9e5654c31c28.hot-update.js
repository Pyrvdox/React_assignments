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
    setBulbState(function (prevState) {
      return prevState === true ? false : true;
    });
    console.log(e);
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
/******/ 	__webpack_require__.h = () => ("4a254ce895f3a27cf263")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZDYxZTEyZTllNTY1NGMzMWMyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQ2YsSUFBQUMsU0FBQSxHQUFrQ0YsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBMUNHLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFFOUIsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQSxFQUFTO0lBRTVCRCxZQUFZLENBQUMsVUFBQ0UsU0FBUztNQUFBLE9BQ25CQSxTQUFTLEtBQUssSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJO0lBQUEsQ0FFckMsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQyxDQUFDO0VBQ2xCLENBQUM7RUFFRCxJQUFNQyxLQUFLLEdBQUc7SUFDVkMsS0FBSyxFQUFFLEdBQUc7SUFDVkMsTUFBTSxFQUFDLEdBQUc7SUFDVkMsZUFBZSxFQUFFVixTQUFTLEdBQUcsUUFBUSxHQUFHO0VBQzVDLENBQUM7RUFDRCxvQkFDSU4sMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQUthLEtBQUssRUFBRUE7RUFBTSxDQUFNLENBQUMsZUFDekJiLDBEQUFBO0lBQVFtQixPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1YLGlCQUFpQixDQUFDLENBQUM7SUFBQTtFQUFDLEdBQUVGLFNBQVMsR0FBRyxJQUFJLEdBQUcsS0FBYyxDQUVoRixDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlSixJQUFJOzs7Ozs7OztVQzVCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMV9Qcnpla2F6eXdhbmllX3BhcmFtZXRyb3cvMDFfWmFkYW5pZV8xL2pzL0J1bGIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBCdWxiID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2J1bGJTdGF0ZSwgc2V0QnVsYlN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGJ1bGJTd2l0Y2hIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldEJ1bGJTdGF0ZSgocHJldlN0YXRlKSA9PiBcclxuICAgICAgICAgICAgcHJldlN0YXRlID09PSB0cnVlID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgaGVpZ2h0OjEwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJ1bGJTdGF0ZSA/IFwieWVsbG93XCIgOiBcImdyZXlcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuICggICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT48L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBidWxiU3dpdGNoSGFuZGxlcigpfT57YnVsYlN0YXRlID8gXCJPTlwiIDogXCJPRkZcIn08L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGEyNTRjZTg5NWYzYTI3Y2YyNjNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1bGIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJidWxiU3RhdGUiLCJzZXRCdWxiU3RhdGUiLCJidWxiU3dpdGNoSGFuZGxlciIsInByZXZTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9
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
    var someLogs = console.log(e);
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
    onClick: function onClick(e) {
      return bulbSwitchHandler(e);
    }
  }, bulbState ? "ON" : "OFF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "ConsoleLog ", someLogs));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bulb);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ad913dfc325d6e78695")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OTA0Y2EyMTlhNjU2M2RhOTY2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQ2YsSUFBQUMsU0FBQSxHQUFrQ0YsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBMUNHLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFFOUIsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQSxFQUFTO0lBQzVCLElBQU1DLFFBQVEsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLENBQUMsQ0FBQztJQUMvQkwsWUFBWSxDQUFDLFVBQUNNLFNBQVM7TUFBQSxPQUNuQkEsU0FBUyxLQUFLLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSTtJQUFBLENBRXJDLENBQUM7RUFDTCxDQUFDO0VBRUQsSUFBTUMsS0FBSyxHQUFHO0lBQ1ZDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLE1BQU0sRUFBQyxHQUFHO0lBQ1ZDLGVBQWUsRUFBRVgsU0FBUyxHQUFHLFFBQVEsR0FBRztFQUM1QyxDQUFDO0VBQ0Qsb0JBQ0lOLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFLYyxLQUFLLEVBQUVBO0VBQU0sQ0FBTSxDQUFDLGVBQ3pCZCwwREFBQTtJQUFRb0IsT0FBTyxFQUFFLFNBQUFBLFFBQUNSLENBQUM7TUFBQSxPQUFLSixpQkFBaUIsQ0FBQ0ksQ0FBQyxDQUFDO0lBQUE7RUFBQyxHQUFFTixTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQWMsQ0FBQyxlQUNqRk4sMERBQUEsWUFBRyxhQUFXLEVBQUNTLFFBQVksQ0FDN0IsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZVAsSUFBSTs7Ozs7Ozs7VUMzQm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDFfUHJ6ZWthenl3YW5pZV9wYXJhbWV0cm93LzAxX1phZGFuaWVfMS9qcy9CdWxiLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQnVsYiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtidWxiU3RhdGUsIHNldEJ1bGJTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBidWxiU3dpdGNoSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzb21lTG9ncyA9IGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgc2V0QnVsYlN0YXRlKChwcmV2U3RhdGUpID0+IFxyXG4gICAgICAgICAgICBwcmV2U3RhdGUgPT09IHRydWUgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgaGVpZ2h0OjEwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJ1bGJTdGF0ZSA/IFwieWVsbG93XCIgOiBcImdyZXlcIlxyXG4gICAgfVxyXG4gICAgcmV0dXJuICggICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT48L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gYnVsYlN3aXRjaEhhbmRsZXIoZSl9PntidWxiU3RhdGUgPyBcIk9OXCIgOiBcIk9GRlwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8cD5Db25zb2xlTG9nIHtzb21lTG9nc308L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWFkOTEzZGZjMzI1ZDZlNzg2OTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1bGIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJidWxiU3RhdGUiLCJzZXRCdWxiU3RhdGUiLCJidWxiU3dpdGNoSGFuZGxlciIsInNvbWVMb2dzIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2U3RhdGUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=
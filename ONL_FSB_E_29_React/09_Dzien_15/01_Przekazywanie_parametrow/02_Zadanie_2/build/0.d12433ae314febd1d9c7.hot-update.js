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

var Box = function Box() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("grey"),
    _useState2 = _slicedToArray(_useState, 2),
    boxColor = _useState2[0],
    setBoxColor = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(100),
    _useState4 = _slicedToArray(_useState3, 2),
    boxW = _useState4[0],
    setBoxW = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(100),
    _useState6 = _slicedToArray(_useState5, 2),
    boxH = _useState6[0],
    setBoxH = _useState6[1];
  var boxColorChangeHandler = function boxColorChangeHandler(color, w, h) {
    setBoxColor(function (prevState) {
      return prevState = color;
    });
    setBoxW(function (prevState) {
      return prevState = w;
    });
    setBoxH(function (prevState) {
      return prevState = h;
    });
  };
  var style = {
    width: boxW,
    height: boxH,
    backgroundColor: boxColor
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: boxColorChangeHandler("orange", 200, 300)
  }, "kolor pomara\u0144czowy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(color, w, h) {
      return boxColorChangeHandler("blue", 700, 100);
    }
  }, "kolor niebieski"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(color, w, h) {
      return boxColorChangeHandler("green", 500, 200);
    }
  }, "kolor zielony"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: style
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("719e6406e6f1b4e9cd03")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMTI0MzNhZTMxNGZlYmQxZDljNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2QsSUFBQUMsU0FBQSxHQUFnQ0YsK0NBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBekNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUF3QlAsK0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFBQVEsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBOUJFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUF3QlgsK0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFBQVksVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBOUJFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFFcEIsSUFBTUcscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBSUMsS0FBSyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBSztJQUN6Q1osV0FBVyxDQUFDLFVBQUNhLFNBQVM7TUFBQSxPQUNsQkEsU0FBUyxHQUFHSCxLQUFLO0lBQUEsRUFBQztJQUN0Qk4sT0FBTyxDQUFDLFVBQUNTLFNBQVM7TUFBQSxPQUNkQSxTQUFTLEdBQUdGLENBQUM7SUFBQSxFQUFDO0lBQ2xCSCxPQUFPLENBQUMsVUFBQ0ssU0FBUztNQUFBLE9BQ2RBLFNBQVMsR0FBR0QsQ0FBQztJQUFBLEVBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1FLEtBQUssR0FBRztJQUNWQyxLQUFLLEVBQUVaLElBQUk7SUFDWGEsTUFBTSxFQUFFVCxJQUFJO0lBQ1pVLGVBQWUsRUFBRWxCO0VBQ3JCLENBQUM7RUFFRCxvQkFDSU4sMERBQUEsQ0FBQUEsdURBQUEscUJBRUlBLDBEQUFBO0lBQVEyQixPQUFPLEVBQUVYLHFCQUFxQixDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsR0FBRztFQUFFLEdBQUMseUJBQTBCLENBQUMsZUFDckZoQiwwREFBQTtJQUFRMkIsT0FBTyxFQUFFLFNBQUFBLFFBQUNWLEtBQUssRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO01BQUEsT0FBS0gscUJBQXFCLENBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7SUFBQTtFQUFDLEdBQUMsaUJBQXVCLENBQUMsZUFDL0ZoQiwwREFBQTtJQUFRMkIsT0FBTyxFQUFFLFNBQUFBLFFBQUNWLEtBQUssRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO01BQUEsT0FBS0gscUJBQXFCLENBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7SUFBQTtFQUFDLEdBQUMsZUFBcUIsQ0FBQyxlQUM5RmhCLDBEQUFBO0lBQUtxQixLQUFLLEVBQUVBO0VBQU0sQ0FBTSxDQUMxQixDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlbkIsR0FBRzs7Ozs7Ozs7VUNqQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDFfUHJ6ZWthenl3YW5pZV9wYXJhbWV0cm93LzAyX1phZGFuaWVfMi9qcy9Cb3guanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBCb3ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYm94Q29sb3IsIHNldEJveENvbG9yXSA9IHVzZVN0YXRlKFwiZ3JleVwiKVxyXG4gICAgY29uc3QgW2JveFcsIHNldEJveFddID0gdXNlU3RhdGUoMTAwKVxyXG4gICAgY29uc3QgW2JveEgsIHNldEJveEhdID0gdXNlU3RhdGUoMTAwKVxyXG5cclxuICAgIGNvbnN0IGJveENvbG9yQ2hhbmdlSGFuZGxlciA9IChjb2xvcix3LGgpID0+IHtcclxuICAgICAgICBzZXRCb3hDb2xvcigocHJldlN0YXRlKSA9PlxyXG4gICAgICAgICAgICBwcmV2U3RhdGUgPSBjb2xvcilcclxuICAgICAgICBzZXRCb3hXKChwcmV2U3RhdGUpID0+XHJcbiAgICAgICAgICAgIHByZXZTdGF0ZSA9IHcpICBcclxuICAgICAgICBzZXRCb3hIKChwcmV2U3RhdGUpID0+XHJcbiAgICAgICAgICAgIHByZXZTdGF0ZSA9IGgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgd2lkdGg6IGJveFcsXHJcbiAgICAgICAgaGVpZ2h0OiBib3hILFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYm94Q29sb3JcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtib3hDb2xvckNoYW5nZUhhbmRsZXIoXCJvcmFuZ2VcIiwyMDAsMzAwKX0+a29sb3IgcG9tYXJhxYRjem93eTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhjb2xvcix3LGgpID0+IGJveENvbG9yQ2hhbmdlSGFuZGxlcihcImJsdWVcIiw3MDAsMTAwKX0+a29sb3IgbmllYmllc2tpPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGNvbG9yLHcsaCkgPT4gYm94Q29sb3JDaGFuZ2VIYW5kbGVyKFwiZ3JlZW5cIiw1MDAsMjAwKX0+a29sb3IgemllbG9ueTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+PC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MTllNjQwNmU2ZjFiNGU5Y2QwM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm94IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYm94Q29sb3IiLCJzZXRCb3hDb2xvciIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiYm94VyIsInNldEJveFciLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImJveEgiLCJzZXRCb3hIIiwiYm94Q29sb3JDaGFuZ2VIYW5kbGVyIiwiY29sb3IiLCJ3IiwiaCIsInByZXZTdGF0ZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==
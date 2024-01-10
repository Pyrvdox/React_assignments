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
    onClick: function onClick(color, w, h) {
      return boxColorChangeHandler("orange", 200, 300);
    }
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
/******/ 	__webpack_require__.h = () => ("f68f907f2e8526cdec7c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MTllNjQwNmU2ZjFiNGU5Y2QwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2QsSUFBQUMsU0FBQSxHQUFnQ0YsK0NBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBekNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUF3QlAsK0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFBQVEsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBOUJFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFDcEIsSUFBQUcsVUFBQSxHQUF3QlgsK0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFBQVksVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBOUJFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFFcEIsSUFBTUcscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBSUMsS0FBSyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBSztJQUN6Q1osV0FBVyxDQUFDLFVBQUNhLFNBQVM7TUFBQSxPQUNsQkEsU0FBUyxHQUFHSCxLQUFLO0lBQUEsRUFBQztJQUN0Qk4sT0FBTyxDQUFDLFVBQUNTLFNBQVM7TUFBQSxPQUNkQSxTQUFTLEdBQUdGLENBQUM7SUFBQSxFQUFDO0lBQ2xCSCxPQUFPLENBQUMsVUFBQ0ssU0FBUztNQUFBLE9BQ2RBLFNBQVMsR0FBR0QsQ0FBQztJQUFBLEVBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1FLEtBQUssR0FBRztJQUNWQyxLQUFLLEVBQUVaLElBQUk7SUFDWGEsTUFBTSxFQUFFVCxJQUFJO0lBQ1pVLGVBQWUsRUFBRWxCO0VBQ3JCLENBQUM7RUFFRCxvQkFDSU4sMERBQUEsQ0FBQUEsdURBQUEscUJBRUlBLDBEQUFBO0lBQVEyQixPQUFPLEVBQUUsU0FBQUEsUUFBQ1YsS0FBSyxFQUFDQyxDQUFDLEVBQUNDLENBQUM7TUFBQSxPQUFLSCxxQkFBcUIsQ0FBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztJQUFBO0VBQUMsR0FBQyx5QkFBMEIsQ0FBQyxlQUNwR2hCLDBEQUFBO0lBQVEyQixPQUFPLEVBQUUsU0FBQUEsUUFBQ1YsS0FBSyxFQUFDQyxDQUFDLEVBQUNDLENBQUM7TUFBQSxPQUFLSCxxQkFBcUIsQ0FBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztJQUFBO0VBQUMsR0FBQyxpQkFBdUIsQ0FBQyxlQUMvRmhCLDBEQUFBO0lBQVEyQixPQUFPLEVBQUUsU0FBQUEsUUFBQ1YsS0FBSyxFQUFDQyxDQUFDLEVBQUNDLENBQUM7TUFBQSxPQUFLSCxxQkFBcUIsQ0FBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztJQUFBO0VBQUMsR0FBQyxlQUFxQixDQUFDLGVBQzlGaEIsMERBQUE7SUFBS3FCLEtBQUssRUFBRUE7RUFBTSxDQUFNLENBQzFCLENBQUM7QUFFWCxDQUFDO0FBRUQsaUVBQWVuQixHQUFHOzs7Ozs7OztVQ2pDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMV9Qcnpla2F6eXdhbmllX3BhcmFtZXRyb3cvMDJfWmFkYW5pZV8yL2pzL0JveC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEJveCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtib3hDb2xvciwgc2V0Qm94Q29sb3JdID0gdXNlU3RhdGUoXCJncmV5XCIpXHJcbiAgICBjb25zdCBbYm94Vywgc2V0Qm94V10gPSB1c2VTdGF0ZSgxMDApXHJcbiAgICBjb25zdCBbYm94SCwgc2V0Qm94SF0gPSB1c2VTdGF0ZSgxMDApXHJcblxyXG4gICAgY29uc3QgYm94Q29sb3JDaGFuZ2VIYW5kbGVyID0gKGNvbG9yLHcsaCkgPT4ge1xyXG4gICAgICAgIHNldEJveENvbG9yKChwcmV2U3RhdGUpID0+XHJcbiAgICAgICAgICAgIHByZXZTdGF0ZSA9IGNvbG9yKVxyXG4gICAgICAgIHNldEJveFcoKHByZXZTdGF0ZSkgPT5cclxuICAgICAgICAgICAgcHJldlN0YXRlID0gdykgIFxyXG4gICAgICAgIHNldEJveEgoKHByZXZTdGF0ZSkgPT5cclxuICAgICAgICAgICAgcHJldlN0YXRlID0gaClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICB3aWR0aDogYm94VyxcclxuICAgICAgICBoZWlnaHQ6IGJveEgsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBib3hDb2xvclxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhjb2xvcix3LGgpID0+IGJveENvbG9yQ2hhbmdlSGFuZGxlcihcIm9yYW5nZVwiLDIwMCwzMDApfT5rb2xvciBwb21hcmHFhGN6b3d5PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGNvbG9yLHcsaCkgPT4gYm94Q29sb3JDaGFuZ2VIYW5kbGVyKFwiYmx1ZVwiLDcwMCwxMDApfT5rb2xvciBuaWViaWVza2k8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoY29sb3IsdyxoKSA9PiBib3hDb2xvckNoYW5nZUhhbmRsZXIoXCJncmVlblwiLDUwMCwyMDApfT5rb2xvciB6aWVsb255PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT48L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY2OGY5MDdmMmU4NTI2Y2RlYzdjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb3giLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJib3hDb2xvciIsInNldEJveENvbG9yIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJib3hXIiwic2V0Qm94VyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiYm94SCIsInNldEJveEgiLCJib3hDb2xvckNoYW5nZUhhbmRsZXIiLCJjb2xvciIsInciLCJoIiwicHJldlN0YXRlIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9
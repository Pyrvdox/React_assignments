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

var Numbers = function Numbers() {
  var basicListOfNumbers = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(basicListOfNumbers),
    _useState2 = _slicedToArray(_useState, 2),
    listOfNumbers = _useState2[0],
    setNumbers = _useState2[1];
  var renderNumberList = function renderNumberList() {
    var testList = [];
    for (var listNumber = 0; listNumber < listOfNumbers.length; listNumber++) {
      var delistNumber = listOfNumbers[listNumber];
      testList.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: delistNumber
      }, delistNumber));
    }
    return testList;
  };
  var showOnlyParzyste = function showOnlyParzyste() {
    setNumbers(function (prevState) {
      return prevState.filter(function (singlePart) {
        return singlePart % 2 === 0;
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showOnlyParzyste
  }, "Poka parzyste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Poka nie parzyste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Poka wszysko"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, renderNumberList()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Numbers);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d16f4c46f5d57b218af5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNGQ1ZTdjMzU0ZjljNGVhN2EzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ2xCLElBQU1DLGtCQUFrQixHQUFFLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7RUFFdEUsSUFBQUMsU0FBQSxHQUFvQ0gsK0NBQVEsQ0FBQ0Usa0JBQWtCLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBekRHLGFBQWEsR0FBQUYsVUFBQTtJQUFFRyxVQUFVLEdBQUFILFVBQUE7RUFFaEMsSUFBTUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0lBRTNCLElBQU1DLFFBQVEsR0FBRyxFQUFFO0lBQ25CLEtBQUksSUFBSUMsVUFBVSxHQUFHLENBQUMsRUFBRUEsVUFBVSxHQUFHSixhQUFhLENBQUNLLE1BQU0sRUFBRUQsVUFBVSxFQUFHLEVBQUU7TUFDdEUsSUFBSUUsWUFBWSxHQUFHTixhQUFhLENBQUNJLFVBQVUsQ0FBQztNQUM1Q0QsUUFBUSxDQUFDSSxJQUFJLGVBQUNkLDBEQUFBO1FBQUlnQixHQUFHLEVBQUVIO01BQWEsR0FBRUEsWUFBaUIsQ0FBQyxDQUFDO0lBQzdEO0lBQ0EsT0FBT0gsUUFBUTtFQUNuQixDQUFDO0VBRUQsSUFBTU8sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0lBQzNCVCxVQUFVLENBQUMsVUFBQ1UsU0FBUztNQUFBLE9BQ2pCQSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFBQyxVQUFVO1FBQUEsT0FBSUEsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDO01BQUEsRUFBQztJQUFBLENBQ3hELENBQUM7RUFDTCxDQUFDO0VBRUQsb0JBQ0lwQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUE7SUFBUXNCLE9BQU8sRUFBRUw7RUFBaUIsR0FBQyxlQUFxQixDQUFDLGVBQ3pEakIsMERBQUEsaUJBQVEsbUJBQXlCLENBQUMsZUFDbENBLDBEQUFBLGlCQUFRLGNBQW9CLENBQUMsZUFDN0JBLDBEQUFBLGFBQ0tTLGdCQUFnQixDQUFDLENBQ2xCLENBQ04sQ0FBQztBQUlYLENBQUM7QUFFRCxpRUFBZVAsT0FBTzs7Ozs7Ozs7VUNyQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wNV9aYWRhbmllXzUvanMvTnVtYmVycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE51bWJlcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBiYXNpY0xpc3RPZk51bWJlcnMgPVs1NCw3NiwyNCw2Myw0LDU0LDgyLDM2LDEzLDgwLDEwLDY5LDQsMjMsNDBdXHJcblxyXG4gICAgY29uc3QgW2xpc3RPZk51bWJlcnMsIHNldE51bWJlcnNdID0gdXNlU3RhdGUoYmFzaWNMaXN0T2ZOdW1iZXJzKTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJOdW1iZXJMaXN0ID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB0ZXN0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgbGlzdE51bWJlciA9IDA7IGxpc3ROdW1iZXIgPCBsaXN0T2ZOdW1iZXJzLmxlbmd0aDsgbGlzdE51bWJlciArKykge1xyXG4gICAgICAgICAgICBsZXQgZGVsaXN0TnVtYmVyID0gbGlzdE9mTnVtYmVyc1tsaXN0TnVtYmVyXVxyXG4gICAgICAgICAgICB0ZXN0TGlzdC5wdXNoKDxsaSBrZXk9e2RlbGlzdE51bWJlcn0+e2RlbGlzdE51bWJlcn08L2xpPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXN0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93T25seVBhcnp5c3RlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE51bWJlcnMoKHByZXZTdGF0ZSkgPT4gXHJcbiAgICAgICAgICAgIHByZXZTdGF0ZS5maWx0ZXIoc2luZ2xlUGFydCA9PiBzaW5nbGVQYXJ0ICUgMiA9PT0gMClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dPbmx5UGFyenlzdGV9PlBva2EgcGFyenlzdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5Qb2thIG5pZSBwYXJ6eXN0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uPlBva2Egd3N6eXNrbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyTnVtYmVyTGlzdCgpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51bWJlcnMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMTZmNGM0NmY1ZDU3YjIxOGFmNVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTnVtYmVycyIsImJhc2ljTGlzdE9mTnVtYmVycyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxpc3RPZk51bWJlcnMiLCJzZXROdW1iZXJzIiwicmVuZGVyTnVtYmVyTGlzdCIsInRlc3RMaXN0IiwibGlzdE51bWJlciIsImxlbmd0aCIsImRlbGlzdE51bWJlciIsInB1c2giLCJjcmVhdGVFbGVtZW50Iiwia2V5Iiwic2hvd09ubHlQYXJ6eXN0ZSIsInByZXZTdGF0ZSIsImZpbHRlciIsInNpbmdsZVBhcnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9
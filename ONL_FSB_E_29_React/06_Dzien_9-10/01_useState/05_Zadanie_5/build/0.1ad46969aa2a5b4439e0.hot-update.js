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
      testList.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, delistNumber));
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
  var showOnlyNieParzyste = function showOnlyNieParzyste() {
    setNumbers(function (prevState) {
      return prevState.filter(function (singlePart) {
        return singlePart % 2 != 0;
      });
    });
  };
  var showAll = function showAll() {
    setNumbers(function (prevState) {
      return prevState === basicListOfNumbers;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showOnlyParzyste
  }, "Poka parzyste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showOnlyNieParzyste
  }, "Poka nie parzyste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Poka wszysko"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, renderNumberList()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Numbers);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _Numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Numbers__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4e17623070d3b5f9c928")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wNV9aYWRhbmllXzUvanMvTnVtYmVycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX3VzZVN0YXRlLzA1X1phZGFuaWVfNS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBOdW1iZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYmFzaWNMaXN0T2ZOdW1iZXJzID1bNTQsNzYsMjQsNjMsNCw1NCw4MiwzNiwxMyw4MCwxMCw2OSw0LDIzLDQwXVxyXG5cclxuICAgIGNvbnN0IFtsaXN0T2ZOdW1iZXJzLCBzZXROdW1iZXJzXSA9IHVzZVN0YXRlKGJhc2ljTGlzdE9mTnVtYmVycyk7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyTnVtYmVyTGlzdCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdGVzdExpc3QgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGxpc3ROdW1iZXIgPSAwOyBsaXN0TnVtYmVyIDwgbGlzdE9mTnVtYmVycy5sZW5ndGg7IGxpc3ROdW1iZXIgKyspIHtcclxuICAgICAgICAgICAgbGV0IGRlbGlzdE51bWJlciA9IGxpc3RPZk51bWJlcnNbbGlzdE51bWJlcl1cclxuICAgICAgICAgICAgdGVzdExpc3QucHVzaCg8bGk+e2RlbGlzdE51bWJlcn08L2xpPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXN0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93T25seVBhcnp5c3RlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE51bWJlcnMoKHByZXZTdGF0ZSkgPT4gXHJcbiAgICAgICAgICAgIHByZXZTdGF0ZS5maWx0ZXIoc2luZ2xlUGFydCA9PiBzaW5nbGVQYXJ0ICUgMiA9PT0gMClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd09ubHlOaWVQYXJ6eXN0ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXROdW1iZXJzKChwcmV2U3RhdGUpID0+IFxyXG4gICAgICAgICAgICBwcmV2U3RhdGUuZmlsdGVyKHNpbmdsZVBhcnQgPT4gc2luZ2xlUGFydCAlIDIgIT0gMClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgICBzZXROdW1iZXJzKChwcmV2U3RhdGUpID0+IFxyXG4gICAgICAgICAgICBwcmV2U3RhdGUgPT09IGJhc2ljTGlzdE9mTnVtYmVycylcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd09ubHlQYXJ6eXN0ZX0+UG9rYSBwYXJ6eXN0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dPbmx5TmllUGFyenlzdGV9PlBva2EgbmllIHBhcnp5c3RlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24+UG9rYSB3c3p5c2tvPC9idXR0b24+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJOdW1iZXJMaXN0KCl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtYmVycyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBOdW1iZXJzIGZyb20gXCIuL051bWJlcnNcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiA8TnVtYmVycyAvPlxyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRlMTc2MjMwNzBkM2I1ZjljOTI4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOdW1iZXJzIiwiYmFzaWNMaXN0T2ZOdW1iZXJzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibGlzdE9mTnVtYmVycyIsInNldE51bWJlcnMiLCJyZW5kZXJOdW1iZXJMaXN0IiwidGVzdExpc3QiLCJsaXN0TnVtYmVyIiwibGVuZ3RoIiwiZGVsaXN0TnVtYmVyIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJzaG93T25seVBhcnp5c3RlIiwicHJldlN0YXRlIiwiZmlsdGVyIiwic2luZ2xlUGFydCIsInNob3dPbmx5TmllUGFyenlzdGUiLCJzaG93QWxsIiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwiY3JlYXRlUm9vdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
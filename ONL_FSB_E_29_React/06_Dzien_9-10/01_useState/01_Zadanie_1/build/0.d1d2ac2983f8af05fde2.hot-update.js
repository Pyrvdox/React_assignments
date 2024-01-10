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

var Counter = function Counter() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(10),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    counter = _React$useState2[0],
    setCounter = _React$useState2[1];
  var handleValueIncreaseButton = function handleValueIncreaseButton() {
    setCounter(function (prevState) {
      return prevState + 1;
    });
  };
  var handleValueDecreaseButton = function handleValueDecreaseButton() {
    setCounter(function (prevState) {
      return prevState - 1;
    });
  };
  var handleValueResetButton = function handleValueResetButton() {
    setCounter(10);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Liczba klikni\u0119\u0107 ", counter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleValueIncreaseButton
  }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleValueDecreaseButton
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleValueResetButton
  }, "Reset"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a0789d649671e07debc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMWQyYWMyOTgzZjhhZjA1ZmRlMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ2xCLElBQUFDLGVBQUEsR0FBOEJGLHFEQUFjLENBQUMsRUFBRSxDQUFDO0lBQUFJLGdCQUFBLEdBQUFDLGNBQUEsQ0FBQUgsZUFBQTtJQUF6Q0ksT0FBTyxHQUFBRixnQkFBQTtJQUFFRyxVQUFVLEdBQUFILGdCQUFBO0VBRTFCLElBQU1JLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBeUJBLENBQUEsRUFBUztJQUNwQ0QsVUFBVSxDQUFDLFVBQUNFLFNBQVM7TUFBQSxPQUFLQSxTQUFTLEdBQUUsQ0FBQztJQUFBLEVBQUM7RUFDM0MsQ0FBQztFQUNELElBQU1DLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBeUJBLENBQUEsRUFBUztJQUNwQ0gsVUFBVSxDQUFDLFVBQUNFLFNBQVM7TUFBQSxPQUFLQSxTQUFTLEdBQUUsQ0FBQztJQUFBLEVBQUM7RUFDM0MsQ0FBQztFQUNELElBQU1FLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUEsRUFBUztJQUNqQ0osVUFBVSxDQUFDLEVBQUUsQ0FBQztFQUNsQixDQUFDO0VBRUQsb0JBQ0lQLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxhQUFJLDRCQUFnQixFQUFDTSxPQUFZLENBQUMsZUFDbENOLDBEQUFBO0lBQVFjLE9BQU8sRUFBRU47RUFBMEIsR0FBQyxHQUFTLENBQUMsZUFDdERSLDBEQUFBO0lBQVFjLE9BQU8sRUFBRUo7RUFBMEIsR0FBQyxHQUFTLENBQUMsZUFDdERWLDBEQUFBO0lBQVFjLE9BQU8sRUFBRUg7RUFBdUIsR0FBQyxPQUFhLENBQ3hELENBQUM7QUFHWCxDQUFDO0FBRUQsaUVBQWVWLE9BQU87Ozs7Ozs7Ozs7OztBQzFCSTtBQUNvQjtBQUNkO0FBRWhDLElBQU1lLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDZCxvQkFDSWhCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDQyxnREFBTyxNQUFFLENBQ1osQ0FBQztBQUVYLENBQUM7QUFFRCxJQUFNZ0IsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHTCw0REFBVSxDQUFDRSxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDckIsMERBQUEsQ0FBQ2dCLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDZHBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wMV9aYWRhbmllXzEvanMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX3VzZVN0YXRlLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb3VudGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gUmVhY3QudXNlU3RhdGUoMTApXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVmFsdWVJbmNyZWFzZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRDb3VudGVyKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArMSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVZhbHVlRGVjcmVhc2VCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q291bnRlcigocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgLTEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVWYWx1ZVJlc2V0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldENvdW50ZXIoMTApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDI+TGljemJhIGtsaWtuacSZxIcge2NvdW50ZXJ9PC9oMj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVWYWx1ZUluY3JlYXNlQnV0dG9ufT4rPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVmFsdWVEZWNyZWFzZUJ1dHRvbn0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVZhbHVlUmVzZXRCdXR0b259PlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuL0NvdW50ZXJcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvdW50ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNhMDc4OWQ2NDk2NzFlMDdkZWJjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ291bnRlciIsIl9SZWFjdCR1c2VTdGF0ZSIsInVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY291bnRlciIsInNldENvdW50ZXIiLCJoYW5kbGVWYWx1ZUluY3JlYXNlQnV0dG9uIiwicHJldlN0YXRlIiwiaGFuZGxlVmFsdWVEZWNyZWFzZUJ1dHRvbiIsImhhbmRsZVZhbHVlUmVzZXRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwiY3JlYXRlUm9vdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
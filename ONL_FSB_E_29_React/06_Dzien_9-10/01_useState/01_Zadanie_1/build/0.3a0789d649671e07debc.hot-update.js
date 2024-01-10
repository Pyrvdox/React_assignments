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
  var basicCounterValue = 10;
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("47ec70c34494072fe3e1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYTA3ODlkNjQ5NjcxZTA3ZGViYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUcxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBRWxCLElBQU1DLGlCQUFpQixHQUFHLEVBQUU7RUFFNUIsSUFBQUMsZUFBQSxHQUE4QkgscURBQWMsQ0FBQyxFQUFFLENBQUM7SUFBQUssZ0JBQUEsR0FBQUMsY0FBQSxDQUFBSCxlQUFBO0lBQXpDSSxPQUFPLEdBQUFGLGdCQUFBO0lBQUVHLFVBQVUsR0FBQUgsZ0JBQUE7RUFFMUIsSUFBTUkseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUF5QkEsQ0FBQSxFQUFTO0lBQ3BDRCxVQUFVLENBQUMsVUFBQ0UsU0FBUztNQUFBLE9BQUtBLFNBQVMsR0FBRSxDQUFDO0lBQUEsRUFBQztFQUMzQyxDQUFDO0VBQ0QsSUFBTUMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUF5QkEsQ0FBQSxFQUFTO0lBQ3BDSCxVQUFVLENBQUMsVUFBQ0UsU0FBUztNQUFBLE9BQUtBLFNBQVMsR0FBRSxDQUFDO0lBQUEsRUFBQztFQUMzQyxDQUFDO0VBQ0QsSUFBTUUsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUFzQkEsQ0FBQSxFQUFTO0lBQ2pDSixVQUFVLENBQUMsRUFBRSxDQUFDO0VBQ2xCLENBQUM7RUFFRCxvQkFDSVIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLGFBQUksNEJBQWdCLEVBQUNPLE9BQVksQ0FBQyxlQUNsQ1AsMERBQUE7SUFBUWUsT0FBTyxFQUFFTjtFQUEwQixHQUFDLEdBQVMsQ0FBQyxlQUN0RFQsMERBQUE7SUFBUWUsT0FBTyxFQUFFSjtFQUEwQixHQUFDLEdBQVMsQ0FBQyxlQUN0RFgsMERBQUE7SUFBUWUsT0FBTyxFQUFFSDtFQUF1QixHQUFDLE9BQWEsQ0FDeEQsQ0FBQztBQUdYLENBQUM7QUFFRCxpRUFBZVgsT0FBTzs7Ozs7Ozs7VUM5QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wMV9aYWRhbmllXzEvanMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBDb3VudGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGJhc2ljQ291bnRlclZhbHVlID0gMTA7XHJcblxyXG4gICAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gUmVhY3QudXNlU3RhdGUoMTApXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVmFsdWVJbmNyZWFzZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRDb3VudGVyKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArMSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVZhbHVlRGVjcmVhc2VCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q291bnRlcigocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgLTEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVWYWx1ZVJlc2V0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldENvdW50ZXIoMTApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDI+TGljemJhIGtsaWtuacSZxIcge2NvdW50ZXJ9PC9oMj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVWYWx1ZUluY3JlYXNlQnV0dG9ufT4rPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVmFsdWVEZWNyZWFzZUJ1dHRvbn0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVZhbHVlUmVzZXRCdXR0b259PlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ3ZWM3MGMzNDQ5NDA3MmZlM2UxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ291bnRlciIsImJhc2ljQ291bnRlclZhbHVlIiwiX1JlYWN0JHVzZVN0YXRlIiwidXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjb3VudGVyIiwic2V0Q291bnRlciIsImhhbmRsZVZhbHVlSW5jcmVhc2VCdXR0b24iLCJwcmV2U3RhdGUiLCJoYW5kbGVWYWx1ZURlY3JlYXNlQnV0dG9uIiwiaGFuZGxlVmFsdWVSZXNldEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9
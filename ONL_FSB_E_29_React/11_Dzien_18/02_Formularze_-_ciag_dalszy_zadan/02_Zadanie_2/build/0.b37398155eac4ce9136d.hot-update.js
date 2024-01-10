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
/* harmony import */ var _AdultStuffBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var AdultStuff = function AdultStuff() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    age = _useState2[0],
    setAge = _useState2[1];
  var isAdultCheckHandler = function isAdultCheckHandler(e) {
    setAge(e.target.value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: age,
    onChange: isAdultCheckHandler
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AdultStuffBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    age: age
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdultStuff);

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var AdultStuffBox = function AdultStuffBox(props) {
  console.log("AdultStuffBox", props);
  var age = props.age;
  var showInfo = function showInfo(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "I N F O : "), showInfo(age) ? "Lorem ipsum, treść dla pełnoletnich." : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdultStuffBox);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5a46bd567f2531a32246")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMzczOTgxNTVlYWM0Y2U5MTM2ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBRXJCLElBQUFDLFNBQUEsR0FBc0JILCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFJLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTFCRyxHQUFHLEdBQUFGLFVBQUE7SUFBRUcsTUFBTSxHQUFBSCxVQUFBO0VBRWxCLElBQU1JLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUlDLENBQUMsRUFBSztJQUMvQkYsTUFBTSxDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQzFCLENBQUM7RUFFRCxvQkFDSVosMERBQUEsQ0FBQUEsdURBQUEscUJBQ0FBLDBEQUFBLDRCQUNJQSwwREFBQTtJQUFPZSxJQUFJLEVBQUMsUUFBUTtJQUFDSCxLQUFLLEVBQUVMLEdBQUk7SUFBQ1MsUUFBUSxFQUFFUDtFQUFvQixDQUFDLENBQzlELENBQUMsZUFDUFQsMERBQUEsQ0FBQ0Usc0RBQWE7SUFBQ0ssR0FBRyxFQUFFQTtFQUFJLENBQUMsQ0FDdkIsQ0FBQztBQUlYLENBQUM7QUFFRCxpRUFBZUosVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZCQztBQUUxQixJQUFNRCxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUllLEtBQUssRUFBSztFQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFRixLQUFLLENBQUM7RUFDbkMsSUFBT1YsR0FBRyxHQUFJVSxLQUFLLENBQVpWLEdBQUc7RUFFVixJQUFNYSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSWIsR0FBRyxFQUFLO0lBQ3RCLElBQUdBLEdBQUcsSUFBSSxFQUFFLEVBQUM7TUFDVCxPQUFPLElBQUk7SUFDZixDQUFDLE1BQU07TUFDSCxPQUFPLEtBQUs7SUFDaEI7RUFDSixDQUFDO0VBRUQsb0JBQ0lQLDBEQUFBLDJCQUNBQSwwREFBQSxZQUFHLFlBQWEsQ0FBQyxFQUNab0IsUUFBUSxDQUFDYixHQUFHLENBQUMsR0FBRyxzQ0FBc0MsR0FBRyxJQUN6RCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlTCxhQUFhOzs7Ozs7OztVQ3RCNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDJfWmFkYW5pZV8yL2pzL0FkdWx0U3R1ZmYuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgvMDJfRm9ybXVsYXJ6ZV8tX2NpYWdfZGFsc3p5X3phZGFuLzAyX1phZGFuaWVfMi9qcy9BZHVsdFN0dWZmQm94LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWR1bHRTdHVmZkJveCBmcm9tIFwiLi9BZHVsdFN0dWZmQm94XCI7XHJcblxyXG5jb25zdCBBZHVsdFN0dWZmID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBpc0FkdWx0Q2hlY2tIYW5kbGVyID0gKGUpID0+IHsgXHJcbiAgICAgICAgc2V0QWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIHZhbHVlPXthZ2V9IG9uQ2hhbmdlPXtpc0FkdWx0Q2hlY2tIYW5kbGVyfS8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxBZHVsdFN0dWZmQm94IGFnZT17YWdlfS8+XHJcbiAgICAgICAgPC8+XHJcblxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWR1bHRTdHVmZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBZHVsdFN0dWZmQm94ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFkdWx0U3R1ZmZCb3hcIiwgcHJvcHMpXHJcbiAgICBjb25zdCB7YWdlfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICBjb25zdCBzaG93SW5mbyA9IChhZ2UpID0+IHtcclxuICAgICAgICBpZihhZ2UgPj0gMTgpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8cD5JIE4gRiBPIDogPC9wPlxyXG4gICAgICAgICAgICB7c2hvd0luZm8oYWdlKSA/IFwiTG9yZW0gaXBzdW0sIHRyZcWbxIcgZGxhIHBlxYJub2xldG5pY2guXCIgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHVsdFN0dWZmQm94OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVhNDZiZDU2N2YyNTMxYTMyMjQ2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBZHVsdFN0dWZmQm94IiwiQWR1bHRTdHVmZiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFnZSIsInNldEFnZSIsImlzQWR1bHRDaGVja0hhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzaG93SW5mbyJdLCJzb3VyY2VSb290IjoiIn0=
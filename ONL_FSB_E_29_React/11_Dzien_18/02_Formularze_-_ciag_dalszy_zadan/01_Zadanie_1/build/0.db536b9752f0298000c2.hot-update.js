"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var PESELInput = function PESELInput() {
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    pesel = _useState2[0],
    setPesel = _useState2[1];
  var handleInputChange = function handleInputChange(e) {
    var value = e.target.value;
  };
  if (pesel.lenght != 11 && parseInt(pesel)) {
    setPesel(value);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    value: pesel,
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null));
};
var App = function App() {
  /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PESELInput, null);
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9194520751a7eff0a43f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kYjUzNmI5NzUyZjAyOTgwMDBjMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTjtBQUVqQyxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3ZCLElBQUFDLFNBQUEsR0FBMEJDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBL0JJLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFFdEIsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQy9CLElBQU9DLEtBQUssR0FBSUQsQ0FBQyxDQUFDRSxNQUFNLENBQWpCRCxLQUFLO0VBQ2QsQ0FBQztFQUVELElBQUlKLEtBQUssQ0FBQ00sTUFBTSxJQUFJLEVBQUUsSUFBSUMsUUFBUSxDQUFDUCxLQUFLLENBQUMsRUFBQztJQUN4Q0MsUUFBUSxDQUFDRyxLQUFLLENBQUM7RUFDakI7RUFHQSxvQkFDRVosMERBQUEsNEJBQ0VBLDBEQUFBO0lBQU9pQixJQUFJLEVBQUMsUUFBUTtJQUFDTCxLQUFLLEVBQUVKLEtBQU07SUFBQ1UsUUFBUSxFQUFFUjtFQUFrQixDQUFFLENBQUMsZUFFbEVWLDBEQUFBLFlBQVUsQ0FDTixDQUFDO0FBRVgsQ0FBQztBQUVELElBQU1tQixHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2hCLGFBQUFuQiwwREFBQSxDQUFDRyxVQUFVLE1BQUUsQ0FBQztBQUNoQixDQUFDO0FBRURELDZDQUFlLGVBQ2JGLDBEQUFBLENBQUNtQixHQUFHLE1BQUUsQ0FBQyxFQUNQRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQy9CLENBQUM7Ozs7Ozs7O1VDL0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgvMDJfRm9ybXVsYXJ6ZV8tX2NpYWdfZGFsc3p5X3phZGFuLzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgUEVTRUxJbnB1dCA9ICgpID0+IHtcclxuICBjb25zdCBbcGVzZWwsIHNldFBlc2VsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7dmFsdWV9ID0gZS50YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBpZiAocGVzZWwubGVuZ2h0ICE9IDExICYmIHBhcnNlSW50KHBlc2VsKSl7XHJcbiAgICBzZXRQZXNlbCh2YWx1ZSlcclxuICB9XHJcbiAgICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtPlxyXG4gICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyB2YWx1ZT17cGVzZWx9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgXHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgPFBFU0VMSW5wdXQgLz5cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxBcHAgLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcclxuKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTE5NDUyMDc1MWE3ZWZmMGE0M2ZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsIlBFU0VMSW5wdXQiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInBlc2VsIiwic2V0UGVzZWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImxlbmdodCIsInBhcnNlSW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJvbkNoYW5nZSIsIkFwcCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9
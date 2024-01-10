"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddCar = function AddCar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    brand = _useState4[0],
    setBrand = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    type = _useState6[0],
    setType = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    hp = _useState8[0],
    setHp = _useState8[1];
  var inputHandler = function inputHandler(e, inputType) {
    var inputValue = e.target.value;
    switch (inputType) {
      case 'name':
        setName(inputValue);
      case 'brand':
        setBrand(inputValue);
      case 'type':
        setType(inputValue);
      case 'hp':
        setHp(inputValue);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    onChange: function onChange(e, inputType) {
      return inputHandler(e, 'name');
    },
    value: name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Marka"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    onChange: function onChange(e, inputType) {
      return inputHandler(e, 'brand');
    },
    value: brand
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Typ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    onChange: function onChange(e, inputType) {
      return inputHandler(e, 'type');
    },
    value: type
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Moc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    onChange: function onChange(e, inputType) {
      return inputHandler(e, 'hp');
    },
    value: hp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit"
  }, "ADD CAR")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCar);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cac60c377f6c4ac2f8db")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43YjlmMDc1NDc1OGM2YzUwZjcyNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQSxFQUFTO0VBRWpCLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTdCRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBQ3BCLElBQUFJLFVBQUEsR0FBMEJQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQS9CRSxLQUFLLEdBQUFELFVBQUE7SUFBRUUsUUFBUSxHQUFBRixVQUFBO0VBQ3RCLElBQUFHLFVBQUEsR0FBd0JYLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFZLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQTdCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBb0JmLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFnQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUF6QkUsRUFBRSxHQUFBRCxVQUFBO0lBQUVFLEtBQUssR0FBQUYsVUFBQTtFQUVoQixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFFQyxTQUFTLEVBQUs7SUFDbkMsSUFBTUMsVUFBVSxHQUFHRixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSztJQUVqQyxRQUFPSCxTQUFTO01BQ1osS0FBSyxNQUFNO1FBQUVmLE9BQU8sQ0FBQ2dCLFVBQVUsQ0FBQztNQUNoQyxLQUFLLE9BQU87UUFBRVosUUFBUSxDQUFDWSxVQUFVLENBQUM7TUFDbEMsS0FBSyxNQUFNO1FBQUVSLE9BQU8sQ0FBQ1EsVUFBVSxDQUFDO01BQ2hDLEtBQUssSUFBSTtRQUFFSixLQUFLLENBQUNJLFVBQVUsQ0FBQztJQUNoQztFQUVKLENBQUM7RUFHRCxvQkFDSXZCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSw0QkFDQUEsMERBQUEsZ0JBQU8sT0FFQSxDQUFDLGVBQ0pBLDBEQUFBO0lBQU9jLElBQUksRUFBQyxNQUFNO0lBQUNjLFFBQVEsRUFBRSxTQUFBQSxTQUFDUCxDQUFDLEVBQUVDLFNBQVM7TUFBQSxPQUFLRixZQUFZLENBQUNDLENBQUMsRUFBQyxNQUFNLENBQUM7SUFBQSxDQUFDO0lBQUNJLEtBQUssRUFBRW5CO0VBQUssQ0FBUSxDQUFDLGVBQ2hHTiwwREFBQSxnQkFBTyxPQUVBLENBQUMsZUFDSkEsMERBQUE7SUFBT2MsSUFBSSxFQUFDLE1BQU07SUFBQ2MsUUFBUSxFQUFFLFNBQUFBLFNBQUNQLENBQUMsRUFBRUMsU0FBUztNQUFBLE9BQUtGLFlBQVksQ0FBQ0MsQ0FBQyxFQUFDLE9BQU8sQ0FBQztJQUFBLENBQUM7SUFBQ0ksS0FBSyxFQUFFZjtFQUFNLENBQVEsQ0FBQyxlQUNsR1YsMERBQUEsZ0JBQU8sS0FFQSxDQUFDLGVBQ0pBLDBEQUFBO0lBQU9jLElBQUksRUFBQyxNQUFNO0lBQUNjLFFBQVEsRUFBRSxTQUFBQSxTQUFDUCxDQUFDLEVBQUVDLFNBQVM7TUFBQSxPQUFLRixZQUFZLENBQUNDLENBQUMsRUFBQyxNQUFNLENBQUM7SUFBQSxDQUFDO0lBQUNJLEtBQUssRUFBRVg7RUFBSyxDQUFRLENBQUMsZUFDaEdkLDBEQUFBLGdCQUFPLEtBRUEsQ0FBQyxlQUNKQSwwREFBQTtJQUFPYyxJQUFJLEVBQUMsTUFBTTtJQUFDYyxRQUFRLEVBQUUsU0FBQUEsU0FBQ1AsQ0FBQyxFQUFFQyxTQUFTO01BQUEsT0FBS0YsWUFBWSxDQUFDQyxDQUFDLEVBQUMsSUFBSSxDQUFDO0lBQUEsQ0FBQztJQUFDSSxLQUFLLEVBQUVQO0VBQUcsQ0FBUSxDQUFDLGVBQ3hGbEIsMERBQUE7SUFBT2MsSUFBSSxFQUFDO0VBQVEsR0FBQyxTQUFjLENBQ2pDLENBRVIsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZVosTUFBTTs7Ozs7Ozs7VUNoRHJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTNfRHppZW5fMjIvMDJfSlNPTl9TZXJ2ZXIvMDFfWmFkYW5pZS9qcy9BZGRDYXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFkZENhciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFticmFuZCwgc2V0QnJhbmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtocCwgc2V0SHBdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGUsIGlucHV0VHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZVxyXG5cclxuICAgICAgICBzd2l0Y2goaW5wdXRUeXBlKXtcclxuICAgICAgICAgICAgY2FzZSAnbmFtZSc6IHNldE5hbWUoaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JyYW5kJzogc2V0QnJhbmQoaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3R5cGUnOiBzZXRUeXBlKGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICBjYXNlICdocCc6IHNldEhwKGlucHV0VmFsdWUpO1xyXG4gICAgICAgIH0gICBcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIE5hendhXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUsIGlucHV0VHlwZSkgPT4gaW5wdXRIYW5kbGVyKGUsJ25hbWUnKX0gdmFsdWU9e25hbWV9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIE1hcmthXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUsIGlucHV0VHlwZSkgPT4gaW5wdXRIYW5kbGVyKGUsJ2JyYW5kJyl9IHZhbHVlPXticmFuZH0+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgVHlwXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUsIGlucHV0VHlwZSkgPT4gaW5wdXRIYW5kbGVyKGUsJ3R5cGUnKX0gdmFsdWU9e3R5cGV9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIE1vY1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlLCBpbnB1dFR5cGUpID0+IGlucHV0SGFuZGxlcihlLCdocCcpfSB2YWx1ZT17aHB9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiPkFERCBDQVI8L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRDYXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2FjNjBjMzc3ZjZjNGFjMmY4ZGJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkZENhciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJicmFuZCIsInNldEJyYW5kIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJ0eXBlIiwic2V0VHlwZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiaHAiLCJzZXRIcCIsImlucHV0SGFuZGxlciIsImUiLCJpbnB1dFR5cGUiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=
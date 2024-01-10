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
        break;
      case 'brand':
        setBrand(inputValue);
        break;
      case 'type':
        setType(inputValue);
        break;
      case 'hp':
        setHp(inputValue);
        break;
    }
  };
  var submitHandler = function submitHandler(e) {
    e.preventDefault();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: submitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
    type: "submit",
    value: "AddCar"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCar);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("19215d39ea37d0bd3380")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MjkxMmQ1OTEzODNjNmFiM2IzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQSxFQUFTO0VBRWpCLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTdCRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBQ3BCLElBQUFJLFVBQUEsR0FBMEJQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQS9CRSxLQUFLLEdBQUFELFVBQUE7SUFBRUUsUUFBUSxHQUFBRixVQUFBO0VBQ3RCLElBQUFHLFVBQUEsR0FBd0JYLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFZLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQTdCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBb0JmLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFnQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUF6QkUsRUFBRSxHQUFBRCxVQUFBO0lBQUVFLEtBQUssR0FBQUYsVUFBQTtFQUVoQixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFFQyxTQUFTLEVBQUs7SUFDbkMsSUFBTUMsVUFBVSxHQUFHRixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSztJQUVqQyxRQUFPSCxTQUFTO01BQ1osS0FBSyxNQUFNO1FBQUVmLE9BQU8sQ0FBQ2dCLFVBQVUsQ0FBQztRQUNoQztNQUNBLEtBQUssT0FBTztRQUFFWixRQUFRLENBQUNZLFVBQVUsQ0FBQztRQUNsQztNQUNBLEtBQUssTUFBTTtRQUFFUixPQUFPLENBQUNRLFVBQVUsQ0FBQztRQUNoQztNQUNBLEtBQUssSUFBSTtRQUFFSixLQUFLLENBQUNJLFVBQVUsQ0FBQztRQUM1QjtJQUNKO0VBRUosQ0FBQztFQUVELElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUwsQ0FBQyxFQUFLO0lBRXpCQSxDQUFDLENBQUNNLGNBQWMsQ0FBQyxDQUFDO0VBQ3RCLENBQUM7RUFHRCxvQkFDSTNCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFNOEIsUUFBUSxFQUFFSjtFQUFjLGdCQUM5QjFCLDBEQUFBLGdCQUFPLE9BRUEsQ0FBQyxlQUNKQSwwREFBQTtJQUFPYyxJQUFJLEVBQUMsTUFBTTtJQUFDaUIsUUFBUSxFQUFFLFNBQUFBLFNBQUNWLENBQUMsRUFBRUMsU0FBUztNQUFBLE9BQUtGLFlBQVksQ0FBQ0MsQ0FBQyxFQUFDLE1BQU0sQ0FBQztJQUFBLENBQUM7SUFBQ0ksS0FBSyxFQUFFbkI7RUFBSyxDQUFRLENBQUMsZUFDaEdOLDBEQUFBLGdCQUFPLE9BRUEsQ0FBQyxlQUNKQSwwREFBQTtJQUFPYyxJQUFJLEVBQUMsTUFBTTtJQUFDaUIsUUFBUSxFQUFFLFNBQUFBLFNBQUNWLENBQUMsRUFBRUMsU0FBUztNQUFBLE9BQUtGLFlBQVksQ0FBQ0MsQ0FBQyxFQUFDLE9BQU8sQ0FBQztJQUFBLENBQUM7SUFBQ0ksS0FBSyxFQUFFZjtFQUFNLENBQVEsQ0FBQyxlQUNsR1YsMERBQUEsZ0JBQU8sS0FFQSxDQUFDLGVBQ0pBLDBEQUFBO0lBQU9jLElBQUksRUFBQyxNQUFNO0lBQUNpQixRQUFRLEVBQUUsU0FBQUEsU0FBQ1YsQ0FBQyxFQUFFQyxTQUFTO01BQUEsT0FBS0YsWUFBWSxDQUFDQyxDQUFDLEVBQUMsTUFBTSxDQUFDO0lBQUEsQ0FBQztJQUFDSSxLQUFLLEVBQUVYO0VBQUssQ0FBUSxDQUFDLGVBQ2hHZCwwREFBQSxnQkFBTyxLQUVBLENBQUMsZUFDSkEsMERBQUE7SUFBT2MsSUFBSSxFQUFDLE1BQU07SUFBQ2lCLFFBQVEsRUFBRSxTQUFBQSxTQUFDVixDQUFDLEVBQUVDLFNBQVM7TUFBQSxPQUFLRixZQUFZLENBQUNDLENBQUMsRUFBQyxJQUFJLENBQUM7SUFBQSxDQUFDO0lBQUNJLEtBQUssRUFBRVA7RUFBRyxDQUFRLENBQUMsZUFDeEZsQiwwREFBQTtJQUFPYyxJQUFJLEVBQUMsUUFBUTtJQUFDVyxLQUFLLEVBQUM7RUFBUSxDQUFTLENBQzFDLENBRVIsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZXZCLE1BQU07Ozs7Ozs7O1VDekRyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEzX0R6aWVuXzIyLzAyX0pTT05fU2VydmVyLzAxX1phZGFuaWUvanMvQWRkQ2FyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBZGRDYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbYnJhbmQsIHNldEJyYW5kXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaHAsIHNldEhwXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0SGFuZGxlciA9IChlLCBpbnB1dFR5cGUpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuXHJcbiAgICAgICAgc3dpdGNoKGlucHV0VHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgJ25hbWUnOiBzZXROYW1lKGlucHV0VmFsdWUpIDtcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAnYnJhbmQnOiBzZXRCcmFuZChpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAndHlwZSc6IHNldFR5cGUoaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ2hwJzogc2V0SHAoaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfSAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgTmF6d2FcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSwgaW5wdXRUeXBlKSA9PiBpbnB1dEhhbmRsZXIoZSwnbmFtZScpfSB2YWx1ZT17bmFtZX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgTWFya2FcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSwgaW5wdXRUeXBlKSA9PiBpbnB1dEhhbmRsZXIoZSwnYnJhbmQnKX0gdmFsdWU9e2JyYW5kfT48L2lucHV0PlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICBUeXBcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSwgaW5wdXRUeXBlKSA9PiBpbnB1dEhhbmRsZXIoZSwndHlwZScpfSB2YWx1ZT17dHlwZX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgTW9jXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUsIGlucHV0VHlwZSkgPT4gaW5wdXRIYW5kbGVyKGUsJ2hwJyl9IHZhbHVlPXtocH0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPVwiQWRkQ2FyXCIgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZENhcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxOTIxNWQzOWVhMzdkMGJkMzM4MFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWRkQ2FyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibmFtZSIsInNldE5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImJyYW5kIiwic2V0QnJhbmQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInR5cGUiLCJzZXRUeXBlIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJocCIsInNldEhwIiwiaW5wdXRIYW5kbGVyIiwiZSIsImlucHV0VHlwZSIsImlucHV0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uU3VibWl0Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9
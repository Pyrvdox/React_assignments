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
    console.log("Nasze e to jest:" + e, e.target.name);
    var formInfo = {
      "id": 16,
      "name": e.target.name,
      "brand": e.target.brand,
      "engine": {
        "type": e.target.type,
        "hp": 760
      }
    };
    setName("");
    setBrand("");
    setType("");
    setHp("");
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
/******/ 	__webpack_require__.h = () => ("f4cab45416fe8a9aa1a5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsRUFBRSxTQUFBQSxTQUFDYixDQUFDLEVBQUVDLFNBQVM7TUFBQSxPQUFLRixZQUFZLENBQUNDLENBQUMsRUFBQyxPQUFPLENBQUM7SUFBQSxDQUFDO0lBQUNJLEtBQUssRUFBRWY7RUFBTSxDQUFRLENBQUMsZUFDbEdWLDBEQUFBLGdCQUFPLEtBRUEsQ0FBQyxlQUNKQSwwREFBQTtJQUFPYyxJQUFJLEVBQUMsTUFBTTtJQUFDb0IsUUFBUSxFQUFFLFNBQUFBLFNBQUNiLENBQUMsRUFBRUMsU0FBUztNQUFBLE9BQUtGLFlBQVksQ0FBQ0MsQ0FBQyxFQUFDLE1BQU0sQ0FBQztJQUFBLENBQUM7SUFBQ0ksS0FBSyxFQUFFWDtFQUFLLENBQVEsQ0FBQyxlQUNoR2QsMERBQUEsZ0JBQU8sS0FFQSxDQUFDLGVBQ0pBLDBEQUFBO0lBQU9jLElBQUksRUFBQyxNQUFNO0lBQUNvQixRQUFRLEVBQUUsU0FBQUEsU0FBQ2IsQ0FBQyxFQUFFQyxTQUFTO01BQUEsT0FBS0YsWUFBWSxDQUFDQyxDQUFDLEVBQUMsSUFBSSxDQUFDO0lBQUEsQ0FBQztJQUFDSSxLQUFLLEVBQUVQO0VBQUcsQ0FBUSxDQUFDLGVBQ3hGbEIsMERBQUE7SUFBT2MsSUFBSSxFQUFDLFFBQVE7SUFBQ1csS0FBSyxFQUFDO0VBQVEsQ0FBUyxDQUMxQyxDQUVSLENBQUM7QUFFWCxDQUFDO0FBRUQsaUVBQWV2QixNQUFNOzs7Ozs7OztVQzNFckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xM19Eemllbl8yMi8wMl9KU09OX1NlcnZlci8wMV9aYWRhbmllL2pzL0FkZENhci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQWRkQ2FyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2JyYW5kLCBzZXRCcmFuZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2hwLCBzZXRIcF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZSwgaW5wdXRUeXBlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgICAgIHN3aXRjaChpbnB1dFR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlICduYW1lJzogc2V0TmFtZShpbnB1dFZhbHVlKSA7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ2JyYW5kJzogc2V0QnJhbmQoaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ3R5cGUnOiBzZXRUeXBlKGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdocCc6IHNldEhwKGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH0gICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmFzemUgZSB0byBqZXN0OlwiICsgZSwgZS50YXJnZXQubmFtZSlcclxuICAgICAgICBjb25zdCBmb3JtSW5mbyA9IHtcclxuICAgICAgICAgICAgXCJpZFwiOiAxNixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IGUudGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgIFwiYnJhbmRcIjogZS50YXJnZXQuYnJhbmQsXHJcbiAgICAgICAgICAgIFwiZW5naW5lXCI6IHtcclxuICAgICAgICAgICAgICBcInR5cGVcIjogZS50YXJnZXQudHlwZSxcclxuICAgICAgICAgICAgICBcImhwXCI6IDc2MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE5hbWUoXCJcIilcclxuICAgICAgICBzZXRCcmFuZChcIlwiKVxyXG4gICAgICAgIHNldFR5cGUoXCJcIilcclxuICAgICAgICBzZXRIcChcIlwiKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIE5hendhXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUsIGlucHV0VHlwZSkgPT4gaW5wdXRIYW5kbGVyKGUsJ25hbWUnKX0gdmFsdWU9e25hbWV9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIE1hcmthXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUsIGlucHV0VHlwZSkgPT4gaW5wdXRIYW5kbGVyKGUsJ2JyYW5kJyl9IHZhbHVlPXticmFuZH0+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgVHlwXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUsIGlucHV0VHlwZSkgPT4gaW5wdXRIYW5kbGVyKGUsJ3R5cGUnKX0gdmFsdWU9e3R5cGV9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIE1vY1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlLCBpbnB1dFR5cGUpID0+IGlucHV0SGFuZGxlcihlLCdocCcpfSB2YWx1ZT17aHB9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT1cIkFkZENhclwiID48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRDYXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjRjYWI0NTQxNmZlOGE5YWExYTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkZENhciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJicmFuZCIsInNldEJyYW5kIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJ0eXBlIiwic2V0VHlwZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiaHAiLCJzZXRIcCIsImlucHV0SGFuZGxlciIsImUiLCJpbnB1dFR5cGUiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXRIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZm9ybUluZm8iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ColorfulBoxes = function ColorfulBoxes() {
  var boxListBasicValue = [];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(boxListBasicValue),
    _useState2 = _slicedToArray(_useState, 2),
    boxes = _useState2[0],
    setBoxes = _useState2[1];
  var CreateBox = function CreateBox() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var boxStyle = {
      width: "200",
      height: "200",
      backgroundColor: randomColor
    };
    setBoxes(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [boxStyle]);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: CreateBox
  }, "Dodaj Boxa!"), console.log(boxes));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorfulBoxes);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e941d758fb0bd8e1f859")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMGMzOTRkN2I0ODM2NjhlODI3Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7RUFDeEIsSUFBTUMsaUJBQWlCLEdBQUcsRUFBRTtFQUU1QixJQUFBQyxTQUFBLEdBQTBCSCwrQ0FBUSxDQUFDRSxpQkFBaUIsQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE5Q0csS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUV0QixJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3BCLElBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUNuRSxJQUFNQyxRQUFRLEdBQUc7TUFDYkMsS0FBSyxFQUFFLEtBQUs7TUFDWkMsTUFBTSxFQUFFLEtBQUs7TUFDYkMsZUFBZSxFQUFFUjtJQUNyQixDQUFDO0lBQ0RGLFFBQVEsQ0FBQyxVQUFDVyxTQUFTO01BQUEsVUFBQUMsTUFBQSxDQUFBQyxrQkFBQSxDQUFTRixTQUFTLElBQUNKLFFBQVE7SUFBQSxDQUFDLENBQUM7RUFDcEQsQ0FBQztFQUlELG9CQUNJZiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUE7SUFBUXdCLE9BQU8sRUFBRWY7RUFBVSxHQUFDLGFBQW1CLENBQUMsRUFDL0NnQixPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLEtBQUssQ0FDcEIsQ0FBQztBQUdYLENBQUM7QUFFRCxpRUFBZUwsYUFBYTs7Ozs7Ozs7VUM1QjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wMl9aYWRhbmllXzIvanMvQ29sb3JmdWxCb3hlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENvbG9yZnVsQm94ZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib3hMaXN0QmFzaWNWYWx1ZSA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdCBbYm94ZXMsIHNldEJveGVzXSA9IHVzZVN0YXRlKGJveExpc3RCYXNpY1ZhbHVlKTtcclxuXHJcbiAgICBjb25zdCBDcmVhdGVCb3ggPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tQ29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICBjb25zdCBib3hTdHlsZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMjAwXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIyMDBcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByYW5kb21Db2xvclxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0Qm94ZXMoKHByZXZTdGF0ZSkgPT4gWy4uLnByZXZTdGF0ZSxib3hTdHlsZV0pXHJcbiAgICB9O1xyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtDcmVhdGVCb3h9PkRvZGFqIEJveGEhPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhib3hlcyl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sb3JmdWxCb3hlczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlOTQxZDc1OGZiMGJkOGUxZjg1OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29sb3JmdWxCb3hlcyIsImJveExpc3RCYXNpY1ZhbHVlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYm94ZXMiLCJzZXRCb3hlcyIsIkNyZWF0ZUJveCIsInJhbmRvbUNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJib3hTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicHJldlN0YXRlIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9
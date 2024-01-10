self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdultStuffBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _AdultStuffBox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AdultStuffBox__WEBPACK_IMPORTED_MODULE_1__);
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_AdultStuffBox__WEBPACK_IMPORTED_MODULE_1___default()), {
    age: age
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdultStuff);

/***/ }),

/***/ 35:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\REACT\\ONL_FSB_E_29_React\\11_Dzien_18\\02_Formularze_-_ciag_dalszy_zadan\\02_Zadanie_2\\js\\AdultStuffBox.js: Missing semicolon. (10:14)\n\n\u001b[0m \u001b[90m  8 |\u001b[39m         \u001b[36mif\u001b[39m(age \u001b[33m>=\u001b[39m \u001b[35m18\u001b[39m){\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m             \u001b[36mreturn\u001b[39m \u001b[36mtrue\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 10 |\u001b[39m         } esle {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 |\u001b[39m             \u001b[36mreturn\u001b[39m \u001b[36mfalse\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 |\u001b[39m         }\u001b[0m\n\u001b[0m \u001b[90m 13 |\u001b[39m     }\u001b[0m\n    at constructor (C:\\REACT\\ONL_FSB_E_29_React\\node_modules\\@babel\\parser\\lib\\index.js:356:19)\n    at JSXParserMixin.raise (C:\\REACT\\ONL_FSB_E_29_React\\node_modules\\@babel\\parser\\lib\\index.js:3223:19)\n    at JSXParserMixin.semicolon (C:\\REACT\\ONL_FSB_E_29_React\\node_modules\\@babel\\parser\\lib\\index.js:3580:10)\n    at JSXParserMixin.parseExpressionStatement (C:\\REACT\\ONL_FSB_E_29_React\\node_modules\\@babel\\parser\\lib\\index.js:13158:10)\n    at JSXParserMixin.parseStatementContent (C:\\REACT\\ONL_FSB_E_29_React\\node_modules\\@babel\\parser\\lib\\index.js:12741:19)\n    at JSXParserMixin.parseStatementLike (C:\\REACT\\ONL_FSB_E_29_React\\node_modules\\@babel\\parser\\lib\\index.js:12588:17)\n    at JSXParserMixin.parseStatementListItem (C:\\REACT\\ONL_FSB_E_29_React\\node_modules\\@babel\\parser\\lib\\index.js:12568:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (C:\\REACT\\ONL_FSB_E_29_React\\node_modules\\@babel\\parser\\lib\\index.js:13189:61)\n    at JSXParserMixin.parseBlockBody (C:\\REACT\\ONL_FSB_E_29_React\\node_modules\\@babel\\parser\\lib\\index.js:13182:10)\n    at JSXParserMixin.parseBlock (C:\\REACT\\ONL_FSB_E_29_React\\node_modules\\@babel\\parser\\lib\\index.js:13170:10)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b37398155eac4ce9136d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hODA1OGUxNzhiOTQ1Njk5YjNhNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFFNUMsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztFQUVyQixJQUFBQyxTQUFBLEdBQXNCSCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExQkcsR0FBRyxHQUFBRixVQUFBO0lBQUVHLE1BQU0sR0FBQUgsVUFBQTtFQUVsQixJQUFNSSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJQyxDQUFDLEVBQUs7SUFDL0JGLE1BQU0sQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUMxQixDQUFDO0VBRUQsb0JBQ0laLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNBQSwwREFBQSw0QkFDSUEsMERBQUE7SUFBT2UsSUFBSSxFQUFDLFFBQVE7SUFBQ0gsS0FBSyxFQUFFTCxHQUFJO0lBQUNTLFFBQVEsRUFBRVA7RUFBb0IsQ0FBQyxDQUM5RCxDQUFDLGVBQ1BULDBEQUFBLENBQUNFLHVEQUFhO0lBQUNLLEdBQUcsRUFBRUE7RUFBSSxDQUFDLENBQ3ZCLENBQUM7QUFJWCxDQUFDO0FBRUQsaUVBQWVKLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDJfWmFkYW5pZV8yL2pzL0FkdWx0U3R1ZmYuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZHVsdFN0dWZmQm94IGZyb20gXCIuL0FkdWx0U3R1ZmZCb3hcIjtcclxuXHJcbmNvbnN0IEFkdWx0U3R1ZmYgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2FnZSwgc2V0QWdlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGlzQWR1bHRDaGVja0hhbmRsZXIgPSAoZSkgPT4geyBcclxuICAgICAgICBzZXRBZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgdmFsdWU9e2FnZX0gb25DaGFuZ2U9e2lzQWR1bHRDaGVja0hhbmRsZXJ9Lz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPEFkdWx0U3R1ZmZCb3ggYWdlPXthZ2V9Lz5cclxuICAgICAgICA8Lz5cclxuXHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHVsdFN0dWZmOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIzNzM5ODE1NWVhYzRjZTkxMzZkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBZHVsdFN0dWZmQm94IiwiQWR1bHRTdHVmZiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFnZSIsInNldEFnZSIsImlzQWR1bHRDaGVja0hhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9
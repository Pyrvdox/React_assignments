"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var PESELInput = function PESELInput() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    pesel = _useState2[0],
    setPesel = _useState2[1];
  var handleInputChange = function handleInputChange(e) {
    setPesel(e.target.value);
    if (value.length === 11 && pesel == parseInt(pesel)) {
      setPesel(value);
    } else {
      setPesel('');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: pesel,
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, pesel.length === 11 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    value: "Prze\u015Blij"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Niepoprawny numer PESEL")));
};
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PESELInput, null);
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cfbbb03a4341ff997f11")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYzg1NDA1ZGQ4NmE2YmJkZDBhMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDUTtBQUU5QyxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3ZCLElBQUFDLFNBQUEsR0FBMEJILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFJLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQS9CRyxLQUFLLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBRXRCLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlDLENBQUMsRUFBSztJQUMvQkYsUUFBUSxDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBRXhCLElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxLQUFLLEVBQUUsSUFBSU4sS0FBSyxJQUFJTyxRQUFRLENBQUNQLEtBQUssQ0FBQyxFQUFFO01BQ25EQyxRQUFRLENBQUNJLEtBQUssQ0FBQztJQUNqQixDQUFDLE1BQU07TUFDTEosUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUNkO0VBQ0YsQ0FBQztFQUVELG9CQUNFUiwwREFBQSw0QkFDRUEsMERBQUE7SUFBT2dCLElBQUksRUFBQyxNQUFNO0lBQUNKLEtBQUssRUFBRUwsS0FBTTtJQUFDVSxRQUFRLEVBQUVSO0VBQWtCLENBQUUsQ0FBQyxlQUNoRVQsMERBQUEsY0FDR08sS0FBSyxDQUFDTSxNQUFNLEtBQUssRUFBRSxnQkFDbEJiLDBEQUFBO0lBQU9nQixJQUFJLEVBQUMsUUFBUTtJQUFDSixLQUFLLEVBQUM7RUFBVSxDQUFFLENBQUMsZ0JBRXhDWiwwREFBQSxZQUFHLHlCQUEwQixDQUU1QixDQUNELENBQUM7QUFFWCxDQUFDO0FBRUQsSUFBTWtCLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDaEIsb0JBQU9sQiwwREFBQSxDQUFDRyxVQUFVLE1BQUUsQ0FBQztBQUN2QixDQUFDO0FBRUQsSUFBTWdCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3BCLDREQUFVLENBQUNpQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDdkIsMERBQUEsQ0FBQ2tCLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDcENwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LzAyX0Zvcm11bGFyemVfLV9jaWFnX2RhbHN6eV96YWRhbi8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IFBFU0VMSW5wdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Blc2VsLCBzZXRQZXNlbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFBlc2VsKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxMSAmJiBwZXNlbCA9PSBwYXJzZUludChwZXNlbCkpIHtcclxuICAgICAgc2V0UGVzZWwodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UGVzZWwoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtwZXNlbH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtwZXNlbC5sZW5ndGggPT09IDExID8gKFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlByemXFm2xpalwiIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwPk5pZXBvcHJhd255IG51bWVyIFBFU0VMPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxQRVNFTElucHV0IC8+XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwIC8+KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2ZiYmIwM2E0MzQxZmY5OTdmMTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJQRVNFTElucHV0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicGVzZWwiLCJzZXRQZXNlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsIm9uQ2hhbmdlIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9
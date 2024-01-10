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

    // Sprawdzenie, czy wprowadzony PESEL ma 11 cyfr
    if (value.length === 11 && /^\d+$/.test(value)) {
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
  /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PESELInput, null);
};
var container = document.getElementById("app");
var root = createRoot(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4623b5c49ffa7de00b99")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZjkyYWEyMGJhMTI0NThmM2I5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTjtBQUVqQyxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3ZCLElBQUFDLFNBQUEsR0FBMEJDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBL0JJLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFFdEIsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQy9CLElBQVFDLEtBQUssR0FBS0QsQ0FBQyxDQUFDRSxNQUFNLENBQWxCRCxLQUFLOztJQUViO0lBQ0EsSUFBSUEsS0FBSyxDQUFDRSxNQUFNLEtBQUssRUFBRSxJQUFJLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDSCxLQUFLLENBQUMsRUFBRTtNQUM5Q0gsUUFBUSxDQUFDRyxLQUFLLENBQUM7SUFDakIsQ0FBQyxNQUFNO01BQ0xILFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDZDtFQUNGLENBQUM7RUFFRCxvQkFDRVQsMERBQUEsNEJBQ0VBLDBEQUFBO0lBQU9pQixJQUFJLEVBQUMsTUFBTTtJQUFDTCxLQUFLLEVBQUVKLEtBQU07SUFBQ1UsUUFBUSxFQUFFUjtFQUFrQixDQUFFLENBQUMsZUFDaEVWLDBEQUFBLGNBQ0dRLEtBQUssQ0FBQ00sTUFBTSxLQUFLLEVBQUUsZ0JBQ2xCZCwwREFBQTtJQUFPaUIsSUFBSSxFQUFDLFFBQVE7SUFBQ0wsS0FBSyxFQUFDO0VBQVUsQ0FBRSxDQUFDLGdCQUV4Q1osMERBQUEsWUFBRyx5QkFBMEIsQ0FFNUIsQ0FDRCxDQUFDO0FBRVgsQ0FBQztBQUVELElBQU1tQixHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2hCLGFBQUFuQiwwREFBQSxDQUFDRyxVQUFVLE1BQUUsQ0FBQztBQUNoQixDQUFDO0FBRUQsSUFBTWlCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR0MsVUFBVSxDQUFDSixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0UsTUFBTSxlQUFDekIsMERBQUEsQ0FBQ21CLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O1VDckNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LzAyX0Zvcm11bGFyemVfLV9jaWFnX2RhbHN6eV96YWRhbi8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcbmNvbnN0IFBFU0VMSW5wdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Blc2VsLCBzZXRQZXNlbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIC8vIFNwcmF3ZHplbmllLCBjenkgd3Byb3dhZHpvbnkgUEVTRUwgbWEgMTEgY3lmclxyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMTEgJiYgL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgc2V0UGVzZWwodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UGVzZWwoJycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybT5cclxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtwZXNlbH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtwZXNlbC5sZW5ndGggPT09IDExID8gKFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlByemXFm2xpalwiIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwPk5pZXBvcHJhd255IG51bWVyIFBFU0VMPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgPFBFU0VMSW5wdXQgLz5cclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NjIzYjVjNDlmZmE3ZGUwMGI5OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiUEVTRUxJbnB1dCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicGVzZWwiLCJzZXRQZXNlbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwibGVuZ3RoIiwidGVzdCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwib25DaGFuZ2UiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9
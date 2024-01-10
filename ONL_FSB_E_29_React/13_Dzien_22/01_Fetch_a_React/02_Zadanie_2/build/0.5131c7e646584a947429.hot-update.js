"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    pokemons = _useState2[0],
    setPokemons = _useState2[1];
  var fetchPokemons = function fetchPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon').then(function (res) {
      if (res.ok) {
        var resParsed = res.json();
        return resParsed;
      }
    }).then(function (data) {
      return setPokemons(data);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchPokemons();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, pokemons.results ? pokemons.results.map(function (pokemon, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: idx
    }, pokemon.name);
  }) : null);
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f7ed9391b512a6ef3c8d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MTMxYzdlNjQ2NTg0YTk0NzQyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUU5QyxJQUFNSSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBRWQsSUFBQUMsU0FBQSxHQUFnQ0gsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBeENHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFNUIsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO01BQ3JELElBQUdBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFDO1FBQ1YsSUFBTUMsU0FBUyxHQUFHRixHQUFHLENBQUNHLElBQUksQ0FBQyxDQUFDO1FBQzVCLE9BQU9ELFNBQVM7TUFBQztJQUNyQixDQUFDLENBQUMsQ0FDREgsSUFBSSxDQUFDLFVBQUNLLElBQUk7TUFBQSxPQUFLUixXQUFXLENBQUNRLElBQUksQ0FBQztJQUFBLEVBQUM7RUFDdEMsQ0FBQztFQUVEaEIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pTLGFBQWEsQ0FBQyxDQUFDO0VBRW5CLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFBT1YsMERBQUEsYUFBS1EsUUFBUSxDQUFDVyxPQUFPLEdBQUdYLFFBQVEsQ0FBQ1csT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxHQUFHO0lBQUEsb0JBQUt0QiwwREFBQTtNQUFJdUIsR0FBRyxFQUFFRDtJQUFJLEdBQUVELE9BQU8sQ0FBQ0csSUFBUyxDQUFDO0VBQUEsRUFBQyxHQUFHLElBQVMsQ0FBQztBQUN6SCxDQUFDO0FBRUQsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHekIsNERBQVUsQ0FBQ3NCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUM3QiwwREFBQSxDQUFDSSxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQzFCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xM19Eemllbl8yMi8wMV9GZXRjaF9hX1JlYWN0LzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcG9rZW1vbnMsIHNldFBva2Vtb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaFBva2Vtb25zID0gKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24nKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLm9rKXtcclxuICAgICAgICAgICAgY29uc3QgcmVzUGFyc2VkID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc1BhcnNlZDt9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0UG9rZW1vbnMoZGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hQb2tlbW9ucygpXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiA8dWw+e3Bva2Vtb25zLnJlc3VsdHMgPyBwb2tlbW9ucy5yZXN1bHRzLm1hcCgocG9rZW1vbiwgaWR4KSA9PiA8bGkga2V5PXtpZHh9Pntwb2tlbW9uLm5hbWV9PC9saT4pIDogbnVsbH08L3VsPiAgIFxyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY3ZWQ5MzkxYjUxMmE2ZWYzYzhkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicG9rZW1vbnMiLCJzZXRQb2tlbW9ucyIsImZldGNoUG9rZW1vbnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsInJlc1BhcnNlZCIsImpzb24iLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsInJlc3VsdHMiLCJtYXAiLCJwb2tlbW9uIiwiaWR4Iiwia2V5IiwibmFtZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
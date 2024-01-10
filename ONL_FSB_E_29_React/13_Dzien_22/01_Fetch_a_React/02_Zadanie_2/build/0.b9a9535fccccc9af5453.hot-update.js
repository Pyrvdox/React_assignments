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
        var resParsed = resParsed.json();
        return resParsed;
      }
    }).then(function (data) {
      return setPokemons(data);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchPokemons();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null);
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5aad3147b0a0e0a864d3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iOWE5NTM1ZmNjY2NjOWFmNTQ1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUU5QyxJQUFNSSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2QsSUFBQUMsU0FBQSxHQUFnQ0gsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBeENHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO01BQ3JELElBQUdBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFDO1FBQ1YsSUFBTUMsU0FBUyxHQUFHQSxTQUFTLENBQUNDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE9BQU9ELFNBQVM7TUFBQztJQUNyQixDQUFDLENBQUMsQ0FDREgsSUFBSSxDQUFDLFVBQUNLLElBQUk7TUFBQSxPQUFLUixXQUFXLENBQUNRLElBQUksQ0FBQztJQUFBLEVBQUM7RUFDdEMsQ0FBQztFQUNEaEIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pTLGFBQWEsQ0FBQyxDQUFDO0VBRW5CLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFBT1YsMERBQUEsV0FBUSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxJQUFNbUIsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHbkIsNERBQVUsQ0FBQ2dCLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUN2QiwwREFBQSxDQUFDSSxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztVQ3ZCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xM19Eemllbl8yMi8wMV9GZXRjaF9hX1JlYWN0LzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwb2tlbW9ucywgc2V0UG9rZW1vbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZmV0Y2hQb2tlbW9ucyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uJykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5vayl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc1BhcnNlZCA9IHJlc1BhcnNlZC5qc29uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNQYXJzZWQ7fVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFBva2Vtb25zKGRhdGEpKTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hQb2tlbW9ucygpXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiA8dWw+PC91bD5cclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1YWFkMzE0N2IwYTBlMGE4NjRkM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkFwcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInBva2Vtb25zIiwic2V0UG9rZW1vbnMiLCJmZXRjaFBva2Vtb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJyZXNQYXJzZWQiLCJqc29uIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=
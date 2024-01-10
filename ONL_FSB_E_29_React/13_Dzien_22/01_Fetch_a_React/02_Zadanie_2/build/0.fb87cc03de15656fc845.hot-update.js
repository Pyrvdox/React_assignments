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
    }, pokemon);
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
/******/ 	__webpack_require__.h = () => ("5131c7e646584a947429")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mYjg3Y2MwM2RlMTU2NTZmYzg0NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTDtBQUU5QyxJQUFNSSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBRWQsSUFBQUMsU0FBQSxHQUFnQ0gsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBeENHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFNUIsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO01BQ3JELElBQUdBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFDO1FBQ1YsSUFBTUMsU0FBUyxHQUFHRixHQUFHLENBQUNHLElBQUksQ0FBQyxDQUFDO1FBQzVCLE9BQU9ELFNBQVM7TUFBQztJQUNyQixDQUFDLENBQUMsQ0FDREgsSUFBSSxDQUFDLFVBQUNLLElBQUk7TUFBQSxPQUFLUixXQUFXLENBQUNRLElBQUksQ0FBQztJQUFBLEVBQUM7RUFDdEMsQ0FBQztFQUVEaEIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pTLGFBQWEsQ0FBQyxDQUFDO0VBRW5CLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFBT1YsMERBQUEsYUFBS1EsUUFBUSxDQUFDVyxPQUFPLEdBQUdYLFFBQVEsQ0FBQ1csT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxHQUFHO0lBQUEsb0JBQUt0QiwwREFBQTtNQUFJdUIsR0FBRyxFQUFFRDtJQUFJLEdBQUVELE9BQVksQ0FBQztFQUFBLEVBQUMsR0FBRyxJQUFTLENBQUM7QUFDcEgsQ0FBQztBQUVELElBQU1HLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3hCLDREQUFVLENBQUNxQixTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDNUIsMERBQUEsQ0FBQ0ksR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUMxQnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTNfRHppZW5fMjIvMDFfRmV0Y2hfYV9SZWFjdC8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Bva2Vtb25zLCBzZXRQb2tlbW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hQb2tlbW9ucyA9ICgpID0+IHtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uJykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5vayl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc1BhcnNlZCA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNQYXJzZWQ7fVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFBva2Vtb25zKGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoUG9rZW1vbnMoKVxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gPHVsPntwb2tlbW9ucy5yZXN1bHRzID8gcG9rZW1vbnMucmVzdWx0cy5tYXAoKHBva2Vtb24sIGlkeCkgPT4gPGxpIGtleT17aWR4fT57cG9rZW1vbn08L2xpPikgOiBudWxsfTwvdWw+ICAgXHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwIC8+KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTEzMWM3ZTY0NjU4NGE5NDc0MjlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJwb2tlbW9ucyIsInNldFBva2Vtb25zIiwiZmV0Y2hQb2tlbW9ucyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwicmVzUGFyc2VkIiwianNvbiIsImRhdGEiLCJjcmVhdGVFbGVtZW50IiwicmVzdWx0cyIsIm1hcCIsInBva2Vtb24iLCJpZHgiLCJrZXkiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=
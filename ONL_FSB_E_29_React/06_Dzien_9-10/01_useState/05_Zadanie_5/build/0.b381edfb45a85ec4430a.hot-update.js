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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Numbers = function Numbers() {
  var basicListOfNumbers = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(basicListOfNumbers),
    _useState2 = _slicedToArray(_useState, 2),
    listOfNumbers = _useState2[0],
    setNumbers = _useState2[1];
  var renderNumberList = function renderNumberList() {
    var testList = [];
    for (var listNumber = 0; listNumber < listOfNumbers.length; listNumber++) {
      var delistNumber = listOfNumbers[listNumber];
      testList.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, delistNumber));
    }
    return testList;
  };
  var showOnlyParzyste = function showOnlyParzyste() {
    setNumbers(function (prevState) {
      return prevState.filter(function (singlePart) {
        return singlePart % 2 === 0;
      });
    });
  };
  var showOnlyNieParzyste = function showOnlyNieParzyste() {
    setNumbers(function (prevState) {
      return prevState.filter(function (singlePart) {
        return singlePart % 2 != 0;
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showOnlyParzyste
  }, "Poka parzyste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showOnlyNieParzyste
  }, "Poka nie parzyste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Poka wszysko"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, renderNumberList()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Numbers);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a532c0e9dfc9ba385995")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMzgxZWRmYjQ1YTg1ZWM0NDMwYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ2xCLElBQU1DLGtCQUFrQixHQUFFLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7RUFFdEUsSUFBQUMsU0FBQSxHQUFvQ0gsK0NBQVEsQ0FBQ0Usa0JBQWtCLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBekRHLGFBQWEsR0FBQUYsVUFBQTtJQUFFRyxVQUFVLEdBQUFILFVBQUE7RUFFaEMsSUFBTUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0lBRTNCLElBQU1DLFFBQVEsR0FBRyxFQUFFO0lBQ25CLEtBQUksSUFBSUMsVUFBVSxHQUFHLENBQUMsRUFBRUEsVUFBVSxHQUFHSixhQUFhLENBQUNLLE1BQU0sRUFBRUQsVUFBVSxFQUFHLEVBQUU7TUFDdEUsSUFBSUUsWUFBWSxHQUFHTixhQUFhLENBQUNJLFVBQVUsQ0FBQztNQUM1Q0QsUUFBUSxDQUFDSSxJQUFJLGVBQUNkLDBEQUFBLGFBQUthLFlBQWlCLENBQUMsQ0FBQztJQUMxQztJQUNBLE9BQU9ILFFBQVE7RUFDbkIsQ0FBQztFQUVELElBQU1NLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztJQUMzQlIsVUFBVSxDQUFDLFVBQUNTLFNBQVM7TUFBQSxPQUNqQkEsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBQUMsVUFBVTtRQUFBLE9BQUlBLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQztNQUFBLEVBQUM7SUFBQSxDQUN4RCxDQUFDO0VBQ0wsQ0FBQztFQUVELElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUEsRUFBUztJQUM5QlosVUFBVSxDQUFDLFVBQUNTLFNBQVM7TUFBQSxPQUNqQkEsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBQUMsVUFBVTtRQUFBLE9BQUlBLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQztNQUFBLEVBQUM7SUFBQSxDQUN2RCxDQUFDO0VBQ0wsQ0FBQztFQUVELG9CQUNJbkIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQVFzQixPQUFPLEVBQUVOO0VBQWlCLEdBQUMsZUFBcUIsQ0FBQyxlQUN6RGhCLDBEQUFBO0lBQVFzQixPQUFPLEVBQUVGO0VBQW9CLEdBQUMsbUJBQXlCLENBQUMsZUFDaEVwQiwwREFBQSxpQkFBUSxjQUFvQixDQUFDLGVBQzdCQSwwREFBQSxhQUNLUyxnQkFBZ0IsQ0FBQyxDQUNsQixDQUNOLENBQUM7QUFJWCxDQUFDO0FBRUQsaUVBQWVQLE9BQU87Ozs7Ozs7O1VDM0N0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfdXNlU3RhdGUvMDVfWmFkYW5pZV81L2pzL051bWJlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBOdW1iZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYmFzaWNMaXN0T2ZOdW1iZXJzID1bNTQsNzYsMjQsNjMsNCw1NCw4MiwzNiwxMyw4MCwxMCw2OSw0LDIzLDQwXVxyXG5cclxuICAgIGNvbnN0IFtsaXN0T2ZOdW1iZXJzLCBzZXROdW1iZXJzXSA9IHVzZVN0YXRlKGJhc2ljTGlzdE9mTnVtYmVycyk7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyTnVtYmVyTGlzdCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdGVzdExpc3QgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGxpc3ROdW1iZXIgPSAwOyBsaXN0TnVtYmVyIDwgbGlzdE9mTnVtYmVycy5sZW5ndGg7IGxpc3ROdW1iZXIgKyspIHtcclxuICAgICAgICAgICAgbGV0IGRlbGlzdE51bWJlciA9IGxpc3RPZk51bWJlcnNbbGlzdE51bWJlcl1cclxuICAgICAgICAgICAgdGVzdExpc3QucHVzaCg8bGk+e2RlbGlzdE51bWJlcn08L2xpPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXN0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93T25seVBhcnp5c3RlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE51bWJlcnMoKHByZXZTdGF0ZSkgPT4gXHJcbiAgICAgICAgICAgIHByZXZTdGF0ZS5maWx0ZXIoc2luZ2xlUGFydCA9PiBzaW5nbGVQYXJ0ICUgMiA9PT0gMClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd09ubHlOaWVQYXJ6eXN0ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXROdW1iZXJzKChwcmV2U3RhdGUpID0+IFxyXG4gICAgICAgICAgICBwcmV2U3RhdGUuZmlsdGVyKHNpbmdsZVBhcnQgPT4gc2luZ2xlUGFydCAlIDIgIT0gMClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dPbmx5UGFyenlzdGV9PlBva2EgcGFyenlzdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93T25seU5pZVBhcnp5c3RlfT5Qb2thIG5pZSBwYXJ6eXN0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uPlBva2Egd3N6eXNrbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyTnVtYmVyTGlzdCgpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51bWJlcnMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNTMyYzBlOWRmYzliYTM4NTk5NVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTnVtYmVycyIsImJhc2ljTGlzdE9mTnVtYmVycyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxpc3RPZk51bWJlcnMiLCJzZXROdW1iZXJzIiwicmVuZGVyTnVtYmVyTGlzdCIsInRlc3RMaXN0IiwibGlzdE51bWJlciIsImxlbmd0aCIsImRlbGlzdE51bWJlciIsInB1c2giLCJjcmVhdGVFbGVtZW50Iiwic2hvd09ubHlQYXJ6eXN0ZSIsInByZXZTdGF0ZSIsImZpbHRlciIsInNpbmdsZVBhcnQiLCJzaG93T25seU5pZVBhcnp5c3RlIiwiRnJhZ21lbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==
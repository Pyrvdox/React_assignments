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
  var showAll = function showAll() {
    setNumbers(function (prevState) {
      return prevState = basicListOfNumbers;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showOnlyParzyste
  }, "Poka parzyste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showOnlyNieParzyste
  }, "Poka nie parzyste"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showAll
  }, "Poka wszysko"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, renderNumberList()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Numbers);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a6f014c0c8e9e3aca669")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYTcxM2MzMTNmZDk3MDk4MGY0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ2xCLElBQU1DLGtCQUFrQixHQUFFLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUM7RUFFdEUsSUFBQUMsU0FBQSxHQUFvQ0gsK0NBQVEsQ0FBQ0Usa0JBQWtCLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBekRHLGFBQWEsR0FBQUYsVUFBQTtJQUFFRyxVQUFVLEdBQUFILFVBQUE7RUFFaEMsSUFBTUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0lBRTNCLElBQU1DLFFBQVEsR0FBRyxFQUFFO0lBQ25CLEtBQUksSUFBSUMsVUFBVSxHQUFHLENBQUMsRUFBRUEsVUFBVSxHQUFHSixhQUFhLENBQUNLLE1BQU0sRUFBRUQsVUFBVSxFQUFHLEVBQUU7TUFDdEUsSUFBSUUsWUFBWSxHQUFHTixhQUFhLENBQUNJLFVBQVUsQ0FBQztNQUM1Q0QsUUFBUSxDQUFDSSxJQUFJLGVBQUNkLDBEQUFBLGFBQUthLFlBQWlCLENBQUMsQ0FBQztJQUMxQztJQUNBLE9BQU9ILFFBQVE7RUFDbkIsQ0FBQztFQUVELElBQU1NLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztJQUMzQlIsVUFBVSxDQUFDLFVBQUNTLFNBQVM7TUFBQSxPQUNqQkEsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBQUMsVUFBVTtRQUFBLE9BQUlBLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQztNQUFBLEVBQUM7SUFBQSxDQUN4RCxDQUFDO0VBQ0wsQ0FBQztFQUVELElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUEsRUFBUztJQUM5QlosVUFBVSxDQUFDLFVBQUNTLFNBQVM7TUFBQSxPQUNqQkEsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBQUMsVUFBVTtRQUFBLE9BQUlBLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQztNQUFBLEVBQUM7SUFBQSxDQUN2RCxDQUFDO0VBQ0wsQ0FBQztFQUVELElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7SUFDbEJiLFVBQVUsQ0FBQyxVQUFDUyxTQUFTO01BQUEsT0FDakJBLFNBQVMsR0FBR2Qsa0JBQWtCO0lBQUEsRUFBQztFQUV2QyxDQUFDO0VBRUQsb0JBQ0lILDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQTtJQUFRdUIsT0FBTyxFQUFFUDtFQUFpQixHQUFDLGVBQXFCLENBQUMsZUFDekRoQiwwREFBQTtJQUFRdUIsT0FBTyxFQUFFSDtFQUFvQixHQUFDLG1CQUF5QixDQUFDLGVBQ2hFcEIsMERBQUE7SUFBUXVCLE9BQU8sRUFBRUY7RUFBUSxHQUFDLGNBQW9CLENBQUMsZUFDL0NyQiwwREFBQSxhQUNLUyxnQkFBZ0IsQ0FBQyxDQUNsQixDQUNOLENBQUM7QUFJWCxDQUFDO0FBRUQsaUVBQWVQLE9BQU87Ozs7Ozs7O1VDakR0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfdXNlU3RhdGUvMDVfWmFkYW5pZV81L2pzL051bWJlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBOdW1iZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYmFzaWNMaXN0T2ZOdW1iZXJzID1bNTQsNzYsMjQsNjMsNCw1NCw4MiwzNiwxMyw4MCwxMCw2OSw0LDIzLDQwXVxyXG5cclxuICAgIGNvbnN0IFtsaXN0T2ZOdW1iZXJzLCBzZXROdW1iZXJzXSA9IHVzZVN0YXRlKGJhc2ljTGlzdE9mTnVtYmVycyk7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyTnVtYmVyTGlzdCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdGVzdExpc3QgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGxpc3ROdW1iZXIgPSAwOyBsaXN0TnVtYmVyIDwgbGlzdE9mTnVtYmVycy5sZW5ndGg7IGxpc3ROdW1iZXIgKyspIHtcclxuICAgICAgICAgICAgbGV0IGRlbGlzdE51bWJlciA9IGxpc3RPZk51bWJlcnNbbGlzdE51bWJlcl1cclxuICAgICAgICAgICAgdGVzdExpc3QucHVzaCg8bGk+e2RlbGlzdE51bWJlcn08L2xpPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXN0TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93T25seVBhcnp5c3RlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE51bWJlcnMoKHByZXZTdGF0ZSkgPT4gXHJcbiAgICAgICAgICAgIHByZXZTdGF0ZS5maWx0ZXIoc2luZ2xlUGFydCA9PiBzaW5nbGVQYXJ0ICUgMiA9PT0gMClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd09ubHlOaWVQYXJ6eXN0ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXROdW1iZXJzKChwcmV2U3RhdGUpID0+IFxyXG4gICAgICAgICAgICBwcmV2U3RhdGUuZmlsdGVyKHNpbmdsZVBhcnQgPT4gc2luZ2xlUGFydCAlIDIgIT0gMClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgICBzZXROdW1iZXJzKChwcmV2U3RhdGUpID0+IFxyXG4gICAgICAgICAgICBwcmV2U3RhdGUgPSBiYXNpY0xpc3RPZk51bWJlcnMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93T25seVBhcnp5c3RlfT5Qb2thIHBhcnp5c3RlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd09ubHlOaWVQYXJ6eXN0ZX0+UG9rYSBuaWUgcGFyenlzdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93QWxsfT5Qb2thIHdzenlza288L2J1dHRvbj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlck51bWJlckxpc3QoKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJzIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTZmMDE0YzBjOGU5ZTNhY2E2NjlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk51bWJlcnMiLCJiYXNpY0xpc3RPZk51bWJlcnMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsaXN0T2ZOdW1iZXJzIiwic2V0TnVtYmVycyIsInJlbmRlck51bWJlckxpc3QiLCJ0ZXN0TGlzdCIsImxpc3ROdW1iZXIiLCJsZW5ndGgiLCJkZWxpc3ROdW1iZXIiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsInNob3dPbmx5UGFyenlzdGUiLCJwcmV2U3RhdGUiLCJmaWx0ZXIiLCJzaW5nbGVQYXJ0Iiwic2hvd09ubHlOaWVQYXJ6eXN0ZSIsInNob3dBbGwiLCJGcmFnbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9
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
      width: "200px",
      height: "200px",
      backgroundColor: "#" + randomColor
    };
    +setBoxes(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [boxStyle]);
    });
    console.log(boxes);
  };
  var BoxSpit = function BoxSpit(boxes) {
    return boxes.map(function (box, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: box,
        key: index
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: CreateBox
  }, "Dodaj Boxa!"), BoxSpit(boxes));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorfulBoxes);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ac0f3f7790cde80be0ec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNzBmMzM0ODliYWZmNDFmY2UzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7RUFDeEIsSUFBTUMsaUJBQWlCLEdBQUcsRUFBRTtFQUU1QixJQUFBQyxTQUFBLEdBQTBCSCwrQ0FBUSxDQUFDRSxpQkFBaUIsQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE5Q0csS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUV0QixJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3BCLElBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUNuRSxJQUFNQyxRQUFRLEdBQUc7TUFDYkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsTUFBTSxFQUFFLE9BQU87TUFDZkMsZUFBZSxFQUFFLEdBQUcsR0FBQ1I7SUFDekIsQ0FBQztJQUNULENBR1FGLFFBQVEsQ0FBQyxVQUFDVyxTQUFTO01BQUEsVUFBQUMsTUFBQSxDQUFBQyxrQkFBQSxDQUFTRixTQUFTLElBQUNKLFFBQVE7SUFBQSxDQUFDLENBQUM7SUFDaERPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEIsS0FBSyxDQUFDO0VBQ3RCLENBQUM7RUFFRCxJQUFNaUIsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlqQixLQUFLLEVBQUs7SUFFdkIsT0FBT0EsS0FBSyxDQUFDa0IsR0FBRyxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsS0FBSztNQUFBLG9CQUN4QjNCLDBEQUFBO1FBQUs2QixLQUFLLEVBQUVILEdBQUk7UUFBQ0ksR0FBRyxFQUFFSDtNQUFNLENBQUMsQ0FBQztJQUFBLENBQ2xDLENBQUM7RUFFTCxDQUFDO0VBRUQsb0JBQ0kzQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUE7SUFBUWdDLE9BQU8sRUFBRXZCO0VBQVUsR0FBQyxhQUFtQixDQUFDLEVBQy9DZSxPQUFPLENBQUNqQixLQUFLLENBQ2hCLENBQUM7QUFHWCxDQUFDO0FBRUQsaUVBQWVMLGFBQWE7Ozs7Ozs7O1VDdEM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfdXNlU3RhdGUvMDJfWmFkYW5pZV8yL2pzL0NvbG9yZnVsQm94ZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb2xvcmZ1bEJveGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm94TGlzdEJhc2ljVmFsdWUgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3QgW2JveGVzLCBzZXRCb3hlc10gPSB1c2VTdGF0ZShib3hMaXN0QmFzaWNWYWx1ZSk7XHJcblxyXG4gICAgY29uc3QgQ3JlYXRlQm94ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjE2Nzc3MjE1KS50b1N0cmluZygxNik7XHJcbiAgICAgICAgY29uc3QgYm94U3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI1wiK3JhbmRvbUNvbG9yXHJcbiAgICAgICAgfTtcclxuK1xyXG5cclxuXHJcbiAgICAgICAgc2V0Qm94ZXMoKHByZXZTdGF0ZSkgPT4gWy4uLnByZXZTdGF0ZSxib3hTdHlsZV0pXHJcbiAgICAgICAgY29uc29sZS5sb2coYm94ZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBCb3hTcGl0ID0gKGJveGVzKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiBib3hlcy5tYXAoKGJveCwgaW5kZXgpID0+IFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtib3h9IGtleT17aW5kZXh9Lz4gICAgICAgICAgIFxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0NyZWF0ZUJveH0+RG9kYWogQm94YSE8L2J1dHRvbj5cclxuICAgICAgICAgICAge0JveFNwaXQoYm94ZXMpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yZnVsQm94ZXM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWMwZjNmNzc5MGNkZTgwYmUwZWNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbG9yZnVsQm94ZXMiLCJib3hMaXN0QmFzaWNWYWx1ZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImJveGVzIiwic2V0Qm94ZXMiLCJDcmVhdGVCb3giLCJyYW5kb21Db2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiYm94U3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInByZXZTdGF0ZSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJCb3hTcGl0IiwibWFwIiwiYm94IiwiaW5kZXgiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJrZXkiLCJGcmFnbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9
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
      backgroundColor: "#" + randomColor
    };
    setBoxes(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [boxStyle]);
    });
    console.log(boxes);
  };
  var BoxSpit = function BoxSpit(boxes) {
    return boxes.map(function (box, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: box,
        key: key
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
/******/ 	__webpack_require__.h = () => ("54050dc91c3922167ce9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMjUxZTUwODI3NTg1NWI4MzJhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7RUFDeEIsSUFBTUMsaUJBQWlCLEdBQUcsRUFBRTtFQUU1QixJQUFBQyxTQUFBLEdBQTBCSCwrQ0FBUSxDQUFDRSxpQkFBaUIsQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE5Q0csS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUV0QixJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3BCLElBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUNuRSxJQUFNQyxRQUFRLEdBQUc7TUFDYkMsS0FBSyxFQUFFLEtBQUs7TUFDWkMsTUFBTSxFQUFFLEtBQUs7TUFDYkMsZUFBZSxFQUFFLEdBQUcsR0FBQ1I7SUFDekIsQ0FBQztJQUdERixRQUFRLENBQUMsVUFBQ1csU0FBUztNQUFBLFVBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBU0YsU0FBUyxJQUFDSixRQUFRO0lBQUEsQ0FBQyxDQUFDO0lBQ2hETyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLEtBQUssQ0FBQztFQUN0QixDQUFDO0VBRUQsSUFBTWlCLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJakIsS0FBSyxFQUFLO0lBRXZCLE9BQU9BLEtBQUssQ0FBQ2tCLEdBQUcsQ0FBQyxVQUFDQyxHQUFHLEVBQUVDLEdBQUc7TUFBQSxvQkFDdEIzQiwwREFBQTtRQUFLNkIsS0FBSyxFQUFFSCxHQUFJO1FBQUNDLEdBQUcsRUFBRUE7TUFBSSxDQUFDLENBQUM7SUFBQSxDQUNoQyxDQUFDO0VBRUwsQ0FBQztFQUVELG9CQUNJM0IsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQVErQixPQUFPLEVBQUV0QjtFQUFVLEdBQUMsYUFBbUIsQ0FBQyxFQUMvQ2UsT0FBTyxDQUFDakIsS0FBSyxDQUNoQixDQUFDO0FBR1gsQ0FBQztBQUVELGlFQUFlTCxhQUFhOzs7Ozs7OztVQ3JDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX3VzZVN0YXRlLzAyX1phZGFuaWVfMi9qcy9Db2xvcmZ1bEJveGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ29sb3JmdWxCb3hlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJveExpc3RCYXNpY1ZhbHVlID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IFtib3hlcywgc2V0Qm94ZXNdID0gdXNlU3RhdGUoYm94TGlzdEJhc2ljVmFsdWUpO1xyXG5cclxuICAgIGNvbnN0IENyZWF0ZUJveCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByYW5kb21Db2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGNvbnN0IGJveFN0eWxlID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIyMDBcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjIwMFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI1wiK3JhbmRvbUNvbG9yXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHNldEJveGVzKChwcmV2U3RhdGUpID0+IFsuLi5wcmV2U3RhdGUsYm94U3R5bGVdKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGJveGVzKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgQm94U3BpdCA9IChib3hlcykgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gYm94ZXMubWFwKChib3gsIGtleSkgPT4gXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2JveH0ga2V5PXtrZXl9Lz4gICAgICAgICAgIFxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0NyZWF0ZUJveH0+RG9kYWogQm94YSE8L2J1dHRvbj5cclxuICAgICAgICAgICAge0JveFNwaXQoYm94ZXMpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbG9yZnVsQm94ZXM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTQwNTBkYzkxYzM5MjIxNjdjZTlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbG9yZnVsQm94ZXMiLCJib3hMaXN0QmFzaWNWYWx1ZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImJveGVzIiwic2V0Qm94ZXMiLCJDcmVhdGVCb3giLCJyYW5kb21Db2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiYm94U3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInByZXZTdGF0ZSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJCb3hTcGl0IiwibWFwIiwiYm94Iiwia2V5IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiRnJhZ21lbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var StrobeLight = /*#__PURE__*/function (_Component) {
  _inherits(StrobeLight, _Component);
  var _super = _createSuper(StrobeLight);
  function StrobeLight(props) {
    var _this;
    _classCallCheck(this, StrobeLight);
    _this = _super.call(this, props);
    _this.state = {
      currentColor: "grey"
    };
    return _this;
  }
  _createClass(StrobeLight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.intervalDiv = setInterval(function (xD) {
        _this2.setState(function (prevState) {
          return {
            currentColor: prevState.currentColor === _this2.props.color ? "grey" : _this2.props.color
          };
        });
      }, this.props.frequency);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.intervalDiv);
    }
  }, {
    key: "render",
    value: function render() {
      var divStyle = {
        width: 50,
        height: 50,
        backgroundColor: this.state.currentColor
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: divStyle
      });
    }
  }]);
  return StrobeLight;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StrobeLight);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d62eac507a956e2db26c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMTk1NGI3NGEwMzY0ZmExZmI3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFBQSxJQUVuQ0UsV0FBVywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFdBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixXQUFBO0VBQ2IsU0FBQUEsWUFBWUssS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFQLFdBQUE7SUFDZk0sS0FBQSxHQUFBSCxNQUFBLENBQUFLLElBQUEsT0FBTUgsS0FBSztJQUVYQyxLQUFBLENBQUtHLEtBQUssR0FBRztNQUNUQyxZQUFZLEVBQUU7SUFDbEIsQ0FBQztJQUFDLE9BQUFKLEtBQUE7RUFDTjtFQUFDSyxZQUFBLENBQUFYLFdBQUE7SUFBQVksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUMsa0JBQUEsRUFBb0I7TUFBQSxJQUFBQyxNQUFBO01BQ2hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQyxXQUFXLENBQUMsVUFBQUMsRUFBRSxFQUFJO1FBQ2pDSCxNQUFJLENBQUNJLFFBQVEsQ0FBQyxVQUFBQyxTQUFTO1VBQUEsT0FBSztZQUN4QlYsWUFBWSxFQUFFVSxTQUFTLENBQUNWLFlBQVksS0FBS0ssTUFBSSxDQUFDVixLQUFLLENBQUNnQixLQUFLLEdBQUcsTUFBTSxHQUFHTixNQUFJLENBQUNWLEtBQUssQ0FBQ2dCO1VBQ3BGLENBQUM7UUFBQSxDQUFDLENBQUM7TUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDaEIsS0FBSyxDQUFDaUIsU0FBUyxDQUFDO0lBQzVCO0VBQUM7SUFBQVYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQVUscUJBQUEsRUFBdUI7TUFDbkJDLGFBQWEsQ0FBQyxJQUFJLENBQUNSLFdBQVcsQ0FBQztJQUNuQztFQUFDO0lBQUFKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFZLE9BQUEsRUFBUztNQUNMLElBQU1DLFFBQVEsR0FBRztRQUNiQyxLQUFLLEVBQUUsRUFBRTtRQUNUQyxNQUFNLEVBQUUsRUFBRTtRQUNWQyxlQUFlLEVBQUUsSUFBSSxDQUFDcEIsS0FBSyxDQUFDQztNQUNoQyxDQUFDO01BQ0Qsb0JBQU9aLDBEQUFBO1FBQUtpQyxLQUFLLEVBQUVMO01BQVMsQ0FBRSxDQUFDO0lBQ25DO0VBQUM7RUFBQSxPQUFBMUIsV0FBQTtBQUFBLEVBNUJxQkQsNENBQVM7QUErQm5DLGlFQUFlQyxXQUFXOzs7Ozs7OztVQ2pDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wN19Eemllbl8xMS8wMV9NZXRvZHlfY3lrbHVfenljaWFfa29tcG9uZW50dS8wNV9aYWRhbmllXzUvanMvU3Ryb2JlTGlnaHQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBTdHJvYmVMaWdodCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY3VycmVudENvbG9yOiBcImdyZXlcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbERpdiA9IHNldEludGVydmFsKHhEID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb2xvcjogcHJldlN0YXRlLmN1cnJlbnRDb2xvciA9PT0gdGhpcy5wcm9wcy5jb2xvciA/IFwiZ3JleVwiIDogdGhpcy5wcm9wcy5jb2xvclxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5mcmVxdWVuY3kpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbERpdik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdlN0eWxlID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5jdXJyZW50Q29sb3JcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXtkaXZTdHlsZX0gLz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cm9iZUxpZ2h0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ2MmVhYzUwN2E5NTZlMmRiMjZjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU3Ryb2JlTGlnaHQiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJzdGF0ZSIsImN1cnJlbnRDb2xvciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdGhpczIiLCJpbnRlcnZhbERpdiIsInNldEludGVydmFsIiwieEQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsImNvbG9yIiwiZnJlcXVlbmN5IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhckludGVydmFsIiwicmVuZGVyIiwiZGl2U3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=
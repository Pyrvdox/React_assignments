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
      this.intervalDiv = setInterval(function () {
        _this2.setState(function (_ref) {
          var currentColor = _ref.currentColor;
          currentColor === _this2.props.color ? _this2.props.color : "grey";
        });
      }, this.props.frequency);
    }
  }, {
    key: "render",
    value: function render() {
      var divStyle = {
        width: 50,
        height: 50,
        backgroundColor: "grey"
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
/******/ 	__webpack_require__.h = () => ("21d50759a9ff4f10488d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wZTRlN2JlM2Q2NmRiZGZmNWQ0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFBQSxJQUVqQ0UsV0FBVywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFdBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixXQUFBO0VBQ2IsU0FBQUEsWUFBWUssS0FBSyxFQUFDO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFQLFdBQUE7SUFDZE0sS0FBQSxHQUFBSCxNQUFBLENBQUFLLElBQUEsT0FBTUgsS0FBSztJQUVYQyxLQUFBLENBQUtHLEtBQUssR0FBRztNQUNUQyxZQUFZLEVBQUU7SUFDbEIsQ0FBQztJQUFBLE9BQUFKLEtBQUE7RUFDTDtFQUFDSyxZQUFBLENBQUFYLFdBQUE7SUFBQVksR0FBQTtJQUFBQyxLQUFBLEVBR0QsU0FBQUMsa0JBQUEsRUFBbUI7TUFBQSxJQUFBQyxNQUFBO01BQ2YsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1FBQ2pDRixNQUFJLENBQUNHLFFBQVEsQ0FBQyxVQUFBQyxJQUFBLEVBQ2Q7VUFBQSxJQURnQlQsWUFBWSxHQUFBUyxJQUFBLENBQVpULFlBQVk7VUFDM0JBLFlBQVksS0FBS0ssTUFBSSxDQUFDVixLQUFLLENBQUNlLEtBQUssR0FBR0wsTUFBSSxDQUFDVixLQUFLLENBQUNlLEtBQUssR0FBRyxNQUFNO1FBQUEsQ0FBQyxDQUFDO01BQ3BFLENBQUMsRUFBQyxJQUFJLENBQUNmLEtBQUssQ0FBQ2dCLFNBQVMsQ0FBQztJQUMzQjtFQUFDO0lBQUFULEdBQUE7SUFBQUMsS0FBQSxFQUtELFNBQUFTLE9BQUEsRUFBUTtNQUNKLElBQU1DLFFBQVEsR0FBRztRQUNiQyxLQUFLLEVBQUUsRUFBRTtRQUNUQyxNQUFNLEVBQUUsRUFBRTtRQUNWQyxlQUFlLEVBQUU7TUFDckIsQ0FBQztNQUNELG9CQUFRNUIsMERBQUE7UUFBSzhCLEtBQUssRUFBRUw7TUFBUyxDQUFFLENBQUM7SUFDcEM7RUFBQztFQUFBLE9BQUF2QixXQUFBO0FBQUEsRUEzQnFCRCw0Q0FBUztBQThCbkMsaUVBQWVDLFdBQVc7Ozs7Ozs7O1VDaEMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA3X0R6aWVuXzExLzAxX01ldG9keV9jeWtsdV96eWNpYV9rb21wb25lbnR1LzA1X1phZGFuaWVfNS9qcy9TdHJvYmVMaWdodC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBTdHJvYmVMaWdodCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY3VycmVudENvbG9yOiBcImdyZXlcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbERpdiA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoe2N1cnJlbnRDb2xvcn0pPT4gXHJcbiAgICAgICAgICAgIHtjdXJyZW50Q29sb3IgPT09IHRoaXMucHJvcHMuY29sb3IgPyB0aGlzLnByb3BzLmNvbG9yIDogXCJncmV5XCJ9KSBcclxuICAgICAgICB9LHRoaXMucHJvcHMuZnJlcXVlbmN5KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IGRpdlN0eWxlID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmV5XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICA8ZGl2IHN0eWxlPXtkaXZTdHlsZX0gLz4gICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cm9iZUxpZ2h0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIxZDUwNzU5YTlmZjRmMTA0ODhkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU3Ryb2JlTGlnaHQiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJzdGF0ZSIsImN1cnJlbnRDb2xvciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdGhpczIiLCJpbnRlcnZhbERpdiIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJfcmVmIiwiY29sb3IiLCJmcmVxdWVuY3kiLCJyZW5kZXIiLCJkaXZTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==
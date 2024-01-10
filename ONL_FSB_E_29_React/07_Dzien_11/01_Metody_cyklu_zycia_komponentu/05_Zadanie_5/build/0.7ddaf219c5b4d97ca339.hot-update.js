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
      divBoxColor: "grey"
    };
    return _this;
  }
  _createClass(StrobeLight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.intervalDiv = setInterval(function () {
        _this2.setState(function (_ref) {
          var divBoxColor = _ref.divBoxColor;
          return divBoxColor === _this2.props.color ? "white" : _this2.props.color;
        });
      }, this.props.frequency);
    }
  }, {
    key: "render",
    value: function render() {
      var divStyle = {
        width: 50,
        height: 50,
        backgroundColor: this.state.divBoxColor
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
/******/ 	__webpack_require__.h = () => ("c82716403a2cf8fc41ab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZGRhZjIxOWM1YjRkOTdjYTMzOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFBQSxJQUVqQ0UsV0FBVywwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFdBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixXQUFBO0VBQ2IsU0FBQUEsWUFBWUssS0FBSyxFQUFDO0lBQUEsSUFBQUMsS0FBQTtJQUFBQyxlQUFBLE9BQUFQLFdBQUE7SUFDZE0sS0FBQSxHQUFBSCxNQUFBLENBQUFLLElBQUEsT0FBTUgsS0FBSztJQUVYQyxLQUFBLENBQUtHLEtBQUssR0FBRztNQUNUQyxXQUFXLEVBQUU7SUFDakIsQ0FBQztJQUFBLE9BQUFKLEtBQUE7RUFDTDtFQUFDSyxZQUFBLENBQUFYLFdBQUE7SUFBQVksR0FBQTtJQUFBQyxLQUFBLEVBR0QsU0FBQUMsa0JBQUEsRUFBbUI7TUFBQSxJQUFBQyxNQUFBO01BQ2YsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1FBQ2pDRixNQUFJLENBQUNHLFFBQVEsQ0FBQyxVQUFBQyxJQUFBO1VBQUEsSUFBRVQsV0FBVyxHQUFBUyxJQUFBLENBQVhULFdBQVc7VUFBQSxPQUMzQkEsV0FBVyxLQUFLSyxNQUFJLENBQUNWLEtBQUssQ0FBQ2UsS0FBSyxHQUFHLE9BQU8sR0FBR0wsTUFBSSxDQUFDVixLQUFLLENBQUNlLEtBQUs7UUFBQSxFQUFDO01BQ2xFLENBQUMsRUFBQyxJQUFJLENBQUNmLEtBQUssQ0FBQ2dCLFNBQVMsQ0FBQztJQUMzQjtFQUFDO0lBQUFULEdBQUE7SUFBQUMsS0FBQSxFQUtELFNBQUFTLE9BQUEsRUFBUTtNQUNKLElBQU1DLFFBQVEsR0FBRztRQUNiQyxLQUFLLEVBQUUsRUFBRTtRQUNUQyxNQUFNLEVBQUUsRUFBRTtRQUNWQyxlQUFlLEVBQUUsSUFBSSxDQUFDakIsS0FBSyxDQUFDQztNQUNoQyxDQUFDO01BQ0Qsb0JBQVFaLDBEQUFBO1FBQUs4QixLQUFLLEVBQUVMO01BQVMsQ0FBRSxDQUFDO0lBQ3BDO0VBQUM7RUFBQSxPQUFBdkIsV0FBQTtBQUFBLEVBM0JxQkQsNENBQVM7QUE4Qm5DLGlFQUFlQyxXQUFXOzs7Ozs7OztVQ2hDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wN19Eemllbl8xMS8wMV9NZXRvZHlfY3lrbHVfenljaWFfa29tcG9uZW50dS8wNV9aYWRhbmllXzUvanMvU3Ryb2JlTGlnaHQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgU3Ryb2JlTGlnaHQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRpdkJveENvbG9yOiBcImdyZXlcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbERpdiA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoe2RpdkJveENvbG9yfSk9PiBcclxuICAgICAgICAgICAgZGl2Qm94Q29sb3IgPT09IHRoaXMucHJvcHMuY29sb3IgPyBcIndoaXRlXCIgOiB0aGlzLnByb3BzLmNvbG9yKSBcclxuICAgICAgICB9LHRoaXMucHJvcHMuZnJlcXVlbmN5KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IGRpdlN0eWxlID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5kaXZCb3hDb2xvclxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gIDxkaXYgc3R5bGU9e2RpdlN0eWxlfSAvPiAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Ryb2JlTGlnaHQ7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzgyNzE2NDAzYTJjZjhmYzQxYWJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTdHJvYmVMaWdodCIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsInN0YXRlIiwiZGl2Qm94Q29sb3IiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiX3RoaXMyIiwiaW50ZXJ2YWxEaXYiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwiX3JlZiIsImNvbG9yIiwiZnJlcXVlbmN5IiwicmVuZGVyIiwiZGl2U3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=
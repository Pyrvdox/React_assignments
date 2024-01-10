"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
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


var Bulb = /*#__PURE__*/function (_Component) {
  _inherits(Bulb, _Component);
  var _super = _createSuper(Bulb);
  function Bulb() {
    var _this;
    _classCallCheck(this, Bulb);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      bulbOn: false
    };
    _this.handleTurnOffClick = function () {
      _this.setState({
        bulbOn: false
      });
    };
    _this.handleTurnOnClick = function () {
      _this.setState({
        bulbOn: true
      });
    };
    return _this;
  }
  _createClass(Bulb, [{
    key: "render",
    value: function render() {
      var bulb;
      if (this.state.bulbOn === true) {
        bulb = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulbOn, {
          onClick: this.handleTurnOffClick
        });
      } else {
        bulb = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulbOff, {
          onClick: this.handleTurnOnClick
        });
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "\u017Bar\xF3wka"), bulb);
    }
  }]);
  return Bulb;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var BulbOff = /*#__PURE__*/function (_Component2) {
  _inherits(BulbOff, _Component2);
  var _super2 = _createSuper(BulbOff);
  function BulbOff() {
    _classCallCheck(this, BulbOff);
    return _super2.apply(this, arguments);
  }
  _createClass(BulbOff, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u017Bar\xF3wka zgaszona"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.props.onClick
      }, "W\u0142\u0105cz"));
    }
  }]);
  return BulbOff;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var BulbOn = /*#__PURE__*/function (_Component3) {
  _inherits(BulbOn, _Component3);
  var _super3 = _createSuper(BulbOn);
  function BulbOn() {
    _classCallCheck(this, BulbOn);
    return _super3.apply(this, arguments);
  }
  _createClass(BulbOn, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "\u017Bar\xF3wka \u015Bwieci"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.props.onClick
      }, "Wy\u0142\u0105cz"));
    }
  }]);
  return BulbOn;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Bulb, null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b8716f9f4df622ccf202")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBQVEsT0FBQSxDQUFBckIsS0FBQSxPQUFBTixTQUFBO0VBQUE7RUFBQWEsWUFBQSxDQUFBTSxNQUFBO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUNWLFNBQUFDLE9BQUEsRUFBUztNQUNQLG9CQUNFM0IsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBLGlCQUFRLDZCQUFzQixDQUFDLGVBQy9CQSwwREFBQTtRQUFRK0IsT0FBTyxFQUFFLElBQUksQ0FBQ0ssS0FBSyxDQUFDTDtNQUFRLEdBQUMsa0JBQWMsQ0FDbkQsQ0FBQztJQUVQO0VBQUM7RUFBQSxPQUFBRCxNQUFBO0FBQUEsRUFSa0I3Qiw0Q0FBUztBQVc5QixTQUFTc0MsR0FBR0EsQ0FBQSxFQUFHO0VBQ2Isb0JBQU92QywwREFBQSxDQUFDRyxJQUFJLE1BQUUsQ0FBQztBQUNqQjtBQUVBLElBQU1xQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd6Qyw0REFBVSxDQUFDc0MsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNoQixNQUFNLGVBQUMzQiwwREFBQSxDQUFDdUMsR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUNoRXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDNfRHppZW5fNC8wMV9Qb2RzdGF3eS8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNsYXNzIEJ1bGIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgYnVsYk9uOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBoYW5kbGVUdXJuT2ZmQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYnVsYk9uOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVR1cm5PbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGJ1bGJPbjogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBidWxiO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYnVsYk9uID09PSB0cnVlKSB7XHJcbiAgICAgIGJ1bGIgPSA8QnVsYk9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVHVybk9mZkNsaWNrfSAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1bGIgPSA8QnVsYk9mZiBvbkNsaWNrPXt0aGlzLmhhbmRsZVR1cm5PbkNsaWNrfSAvPjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPsW7YXLDs3drYTwvaDE+XHJcbiAgICAgICAge2J1bGJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJ1bGJPZmYgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPHNwYW4+xbthcsOzd2thIHpnYXN6b25hPC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5XxYLEhWN6PC9idXR0b24+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEJ1bGJPbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8c3Ryb25nPsW7YXLDs3drYSDFm3dpZWNpPC9zdHJvbmc+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9Pld5xYLEhWN6PC9idXR0b24+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICByZXR1cm4gPEJ1bGIgLz47XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwIC8+KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjg3MTZmOWY0ZGY2MjJjY2YyMDJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiQnVsYiIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJidWxiT24iLCJoYW5kbGVUdXJuT2ZmQ2xpY2siLCJzZXRTdGF0ZSIsImhhbmRsZVR1cm5PbkNsaWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJidWxiIiwiY3JlYXRlRWxlbWVudCIsIkJ1bGJPbiIsIm9uQ2xpY2siLCJCdWxiT2ZmIiwiX0NvbXBvbmVudDIiLCJfc3VwZXIyIiwiRnJhZ21lbnQiLCJwcm9wcyIsIl9Db21wb25lbnQzIiwiX3N1cGVyMyIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290Il0sInNvdXJjZVJvb3QiOiIifQ==
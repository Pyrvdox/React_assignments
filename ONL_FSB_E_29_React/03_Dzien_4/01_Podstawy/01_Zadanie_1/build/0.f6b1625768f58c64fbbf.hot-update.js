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
/******/ 	__webpack_require__.h = () => ("73e442ff6bd06ce354a3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBQVEsT0FBQSxDQUFBckIsS0FBQSxPQUFBTixTQUFBO0VBQUE7RUFBQWEsWUFBQSxDQUFBTSxNQUFBO0lBQUFMLEdBQUE7SUFBQUMsS0FBQSxFQUNWLFNBQUFDLE9BQUEsRUFBUztNQUNQLG9CQUNFM0IsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBLGlCQUFRLDZCQUFzQixDQUFDLGVBQy9CQSwwREFBQTtRQUFRK0IsT0FBTyxFQUFFLElBQUksQ0FBQ0ssS0FBSyxDQUFDTDtNQUFRLEdBQUMsa0JBQWMsQ0FDbkQsQ0FBQztJQUVQO0VBQUM7RUFBQSxPQUFBRCxNQUFBO0FBQUEsRUFSa0I3Qiw0Q0FBUztBQVc5QixTQUFTc0MsR0FBR0EsQ0FBQSxFQUFHO0VBQ2Isb0JBQU92QywwREFBQSxDQUFDRyxJQUFJLE1BQUUsQ0FBQztBQUNqQjtBQUVBLElBQU1xQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd6Qyw0REFBVSxDQUFDc0MsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNoQixNQUFNLGVBQUMzQiwwREFBQSxDQUFDdUMsR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7VUNoRXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDNfRHppZW5fNC8wMV9Qb2RzdGF3eS8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuXHJcbmNsYXNzIEJ1bGIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgYnVsYk9uOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBoYW5kbGVUdXJuT2ZmQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYnVsYk9uOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVR1cm5PbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGJ1bGJPbjogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBidWxiO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYnVsYk9uID09PXRydWUpIHtcclxuICAgICAgYnVsYiA9IDxCdWxiT24gb25DbGljaz17dGhpcy5oYW5kbGVUdXJuT2ZmQ2xpY2t9IC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnVsYiA9IDxCdWxiT2ZmIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVHVybk9uQ2xpY2t9IC8+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+xbthcsOzd2thPC9oMT5cclxuICAgICAgICB7YnVsYn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQnVsYk9mZiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8c3Bhbj7Fu2Fyw7N3a2Egemdhc3pvbmE8L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlfFgsSFY3o8L2J1dHRvbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQnVsYk9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxzdHJvbmc+xbthcsOzd2thIMWbd2llY2k8L3N0cm9uZz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+V3nFgsSFY3o8L2J1dHRvbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiA8QnVsYiAvPjtcclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3M2U0NDJmZjZiZDA2Y2UzNTRhM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJCdWxiIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsImJ1bGJPbiIsImhhbmRsZVR1cm5PZmZDbGljayIsInNldFN0YXRlIiwiaGFuZGxlVHVybk9uQ2xpY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImJ1bGIiLCJjcmVhdGVFbGVtZW50IiwiQnVsYk9uIiwib25DbGljayIsIkJ1bGJPZmYiLCJfQ29tcG9uZW50MiIsIl9zdXBlcjIiLCJGcmFnbWVudCIsInByb3BzIiwiX0NvbXBvbmVudDMiLCJfc3VwZXIzIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiXSwic291cmNlUm9vdCI6IiJ9
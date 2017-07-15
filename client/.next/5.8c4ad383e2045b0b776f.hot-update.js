webpackHotUpdate(5,{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _withAuth = __webpack_require__(557);

var _withAuth2 = _interopRequireDefault(_withAuth);

var _reactstrap = __webpack_require__(563);

var _EditModal = __webpack_require__(574);

var _EditModal2 = _interopRequireDefault(_EditModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewtirrell/Projects/visionair/client/pages/admin-edit.js?entry';


var Dashboard = function (_Component) {
    (0, _inherits3.default)(Dashboard, _Component);

    function Dashboard(props) {
        (0, _classCallCheck3.default)(this, Dashboard);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).call(this, props));

        _this.state = {
            response: ''
        };
        _this.logout = _this.logout.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Dashboard, [{
        key: 'logout',
        value: function logout() {
            this.props.auth.logout();
            this.props.url.replace('/admin-login');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.auth.fetch(this.props.auth.domain + '/admin/edit-shop', { method: 'GET' }).then(function (res) {
                console.log('api res', res);
                _this2.setState({ response: res.message });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('profile', this.props.auth.getProfile());
            var user = this.props.auth.getProfile();
            var message = this.state.response;
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'This is the admin page'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Current user: ', user), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Authenticated message: ', message), _react2.default.createElement(_EditModal2.default, { buttonLabel: 'Item 1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'This will contain the CRUD'), _react2.default.createElement(_reactstrap.Button, { color: 'primary', onClick: this.logout, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Logout'));
        }
    }]);

    return Dashboard;
}(_react.Component);

exports.default = (0, _withAuth2.default)(Dashboard);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matthewtirrell/Projects/visionair/client/pages/admin-edit.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matthewtirrell/Projects/visionair/client/pages/admin-edit.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/admin-edit")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44YzRhZDM4M2UyMDQ1YjBiNzc2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4tZWRpdC5qcz80ODQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uL3V0aWxzL3dpdGhBdXRoLmpzJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBFZGl0TW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9FZGl0TW9kYWwuanMnO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZXNwb25zZTogJydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCl7XG4gICAgICAgIHRoaXMucHJvcHMuYXV0aC5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy51cmwucmVwbGFjZSgnL2FkbWluLWxvZ2luJylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnByb3BzLmF1dGguZmV0Y2goYCR7dGhpcy5wcm9wcy5hdXRoLmRvbWFpbn0vYWRtaW4vZWRpdC1zaG9wYCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXBpIHJlcycsIHJlcylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZXNwb25zZTogcmVzLm1lc3NhZ2V9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2ZpbGUnLCB0aGlzLnByb3BzLmF1dGguZ2V0UHJvZmlsZSgpKSAgICAgICAgXG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLmF1dGguZ2V0UHJvZmlsZSgpXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnN0YXRlLnJlc3BvbnNlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5UaGlzIGlzIHRoZSBhZG1pbiBwYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5DdXJyZW50IHVzZXI6IHt1c2VyfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5BdXRoZW50aWNhdGVkIG1lc3NhZ2U6IHttZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8RWRpdE1vZGFsIGJ1dHRvbkxhYmVsPVwiSXRlbSAxXCI+VGhpcyB3aWxsIGNvbnRhaW4gdGhlIENSVUQ8L0VkaXRNb2RhbD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMubG9nb3V0fT5Mb2dvdXQ8L0J1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKERhc2hib2FyZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hZG1pbi1lZGl0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
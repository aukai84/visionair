
          window.__NEXT_REGISTER_PAGE('/admin-login', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(37);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(541);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthService = function () {
    function AuthService(domain) {
        (0, _classCallCheck3.default)(this, AuthService);

        this.domain = domain || 'http://localhost:8080';
        this.fetch = this.fetch.bind(this);
        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    (0, _createClass3.default)(AuthService, [{
        key: 'login',
        value: function login(username, password) {
            var _this = this;

            //Get a token
            return this.fetch(this.domain + '/admin/signin', {
                method: 'POST',
                body: (0, _stringify2.default)({
                    username: username,
                    password: password
                })
            }).then(function (res) {
                //set token on client local storage
                _this.setToken(res.token);
                return _this.fetch(_this.domain + '/admin', {
                    method: 'GET'
                });
            }).then(function (res) {
                //set profile to admin(dickbutt) on local storage
                console.log('profile res', res);
                _this.setProfile(res);
                return _promise2.default.resolve(res);
            });
        }
    }, {
        key: 'loggedIn',
        value: function loggedIn() {
            //checks if there is a saved token and if it is still valid
            var token = this.getToken();
            return !!token; //handwaiving
        }
    }, {
        key: 'setProfile',
        value: function setProfile(profile) {
            //saves profile data to localStorage
            localStorage.setItem('profile', (0, _stringify2.default)({ profile: profile }));
        }
    }, {
        key: 'getProfile',
        value: function getProfile() {
            //retrives current profile data from localStorage
            var profile = localStorage.getItem('profile');
            return profile ? JSON.parse(localStorage.profile) : {};
        }
    }, {
        key: 'setToken',
        value: function setToken(token) {
            //saves admin token to localStorage
            localStorage.setItem('token', token);
        }
    }, {
        key: 'getToken',
        value: function getToken() {
            //retrieve token from localStorage
            return localStorage.getItem('token');
        }
    }, {
        key: 'logout',
        value: function logout() {
            //clear user token and profile from localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("profile");
            console.log('logged out...');
        }
    }, {
        key: '_checkStatus',
        value: function _checkStatus(response) {
            //raises error if response is not successful
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }
    }, {
        key: 'fetch',
        value: function (_fetch) {
            function fetch(_x, _x2) {
                return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
                return _fetch.toString();
            };

            return fetch;
        }(function (url, options) {
            //perform api call sending required auth headers
            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            if (this.loggedIn()) {
                headers.authorization = this.getToken();
            }

            return fetch(url, (0, _extends3.default)({
                headers: headers
            }, options)).then(this._checkStatus).then(function (response) {
                return response.json();
            });
        })
    }]);

    return AuthService;
}();

exports.default = AuthService;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matthewtirrell/Projects/visionair/client/utils/AuthService.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matthewtirrell/Projects/visionair/client/utils/AuthService.js"); } } })();

/***/ }),

/***/ 572:
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

var _AuthService = __webpack_require__(543);

var _AuthService2 = _interopRequireDefault(_AuthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewtirrell/Projects/visionair/client/pages/admin-login.js?entry';


var auth = new _AuthService2.default('http://localhost:8080');

var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login(props) {
        (0, _classCallCheck3.default)(this, Login);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Login, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (auth.loggedIn()) {
                this.props.url.replaceTo('/admin-edit'); //redirect if you are logged in
            }
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            console.log(auth, "auth sevice");
            auth.login(this.refs.username.value, this.refs.password.value).then(function (res) {
                console.log(res);
                _this2.props.url.replaceTo('/admin-edit');
            }).catch(function (e) {
                return console.log(e);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'Login', _react2.default.createElement('form', { onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('input', { type: 'text', ref: 'username', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement('input', { type: 'password', ref: 'password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('input', { type: 'submit', value: 'Login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            })));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matthewtirrell/Projects/visionair/client/pages/admin-login.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matthewtirrell/Projects/visionair/client/pages/admin-login.js"); } } })();
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
    })(module.exports.default || module.exports, "/admin-login")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(572);


/***/ })

},[573]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hZG1pbi1sb2dpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL0F1dGhTZXJ2aWNlLmpzP2I0Zjc5Y2UiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4tbG9naW4uanM/YjRmNzljZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoZG9tYWluKXtcbiAgICAgICAgdGhpcy5kb21haW4gPSBkb21haW4gfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCdcbiAgICAgICAgdGhpcy5mZXRjaCA9IHRoaXMuZmV0Y2guYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZ2V0UHJvZmlsZSA9IHRoaXMuZ2V0UHJvZmlsZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIC8vR2V0IGEgdG9rZW5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2goYCR7dGhpcy5kb21haW59L2FkbWluL3NpZ25pbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAvL3NldCB0b2tlbiBvbiBjbGllbnQgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4ocmVzLnRva2VuKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoKGAke3RoaXMuZG9tYWlufS9hZG1pbmAse1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAvL3NldCBwcm9maWxlIHRvIGFkbWluKGRpY2tidXR0KSBvbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2ZpbGUgcmVzJywgcmVzKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvZmlsZShyZXMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGxvZ2dlZEluKCl7XG4gICAgICAgIC8vY2hlY2tzIGlmIHRoZXJlIGlzIGEgc2F2ZWQgdG9rZW4gYW5kIGlmIGl0IGlzIHN0aWxsIHZhbGlkXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICByZXR1cm4gISF0b2tlbiAvL2hhbmR3YWl2aW5nXG4gICAgfVxuXG4gICAgc2V0UHJvZmlsZShwcm9maWxlKXtcbiAgICAgICAgLy9zYXZlcyBwcm9maWxlIGRhdGEgdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkoe3Byb2ZpbGV9KSlcbiAgICB9XG5cbiAgICBnZXRQcm9maWxlKCl7XG4gICAgICAgIC8vcmV0cml2ZXMgY3VycmVudCBwcm9maWxlIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJylcbiAgICAgICAgcmV0dXJuIHByb2ZpbGUgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9maWxlKSA6IHt9XG4gICAgfVxuXG4gICAgc2V0VG9rZW4odG9rZW4pe1xuICAgICAgICAvL3NhdmVzIGFkbWluIHRva2VuIHRvIGxvY2FsU3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcbiAgICB9XG5cbiAgICBnZXRUb2tlbigpe1xuICAgICAgICAvL3JldHJpZXZlIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIH1cblxuICAgIGxvZ291dCgpe1xuICAgICAgICAvL2NsZWFyIHVzZXIgdG9rZW4gYW5kIHByb2ZpbGUgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJwcm9maWxlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VkIG91dC4uLicpXG4gICAgfVxuXG4gICAgX2NoZWNrU3RhdHVzKHJlc3BvbnNlKXtcbiAgICAgICAgLy9yYWlzZXMgZXJyb3IgaWYgcmVzcG9uc2UgaXMgbm90IHN1Y2Nlc3NmdWxcbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlXG4gICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2godXJsLCBvcHRpb25zKXtcbiAgICAgICAgLy9wZXJmb3JtIGFwaSBjYWxsIHNlbmRpbmcgcmVxdWlyZWQgYXV0aCBoZWFkZXJzXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5sb2dnZWRJbigpKXtcbiAgICAgICAgICAgIGhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IHRoaXMuZ2V0VG9rZW4oKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHRoaXMuX2NoZWNrU3RhdHVzKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL0F1dGhTZXJ2aWNlLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnLi4vdXRpbHMvQXV0aFNlcnZpY2UuanMnO1xuXG5jb25zdCBhdXRoID0gbmV3IEF1dGhTZXJ2aWNlKCdodHRwOi8vbG9jYWxob3N0OjgwODAnKTtcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGlmKGF1dGgubG9nZ2VkSW4oKSl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVybC5yZXBsYWNlVG8oJy9hZG1pbi1lZGl0JykgLy9yZWRpcmVjdCBpZiB5b3UgYXJlIGxvZ2dlZCBpblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2coYXV0aCwgXCJhdXRoIHNldmljZVwiKSBcbiAgICAgICAgYXV0aC5sb2dpbih0aGlzLnJlZnMudXNlcm5hbWUudmFsdWUsIHRoaXMucmVmcy5wYXNzd29yZC52YWx1ZSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXJsLnJlcGxhY2VUbygnL2FkbWluLWVkaXQnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCAoZSA9PiBjb25zb2xlLmxvZyhlKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJ1c2VybmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlZj1cInBhc3N3b3JkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9naW5cIi8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hZG1pbi1sb2dpbi5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBRUE7QUFGQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBQ0E7QUFHQTtBQUZBO0FBWEE7QUFlQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQUE7QUFDQTs7OztBQUdBO0FBRUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUdBO0FBRUE7QUFBQTtBQUVBO0FBRkE7QUFHQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFDQTs7Ozs7OztBQTdGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7Ozs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        
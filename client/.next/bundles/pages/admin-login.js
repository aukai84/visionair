
          window.__NEXT_REGISTER_PAGE('/admin-login', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(37);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(545);

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
        this.logout = this.logout.bind(this);
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
                _this.setProfile(res.profile);
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
            localStorage.setItem('profile', (0, _stringify2.default)(profile));
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

var _AuthService = __webpack_require__(569);

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
                this.props.url.replace('/admin-edit'); //redirect if you are logged in
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
                _this2.props.url.replace('/admin-edit');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hZG1pbi1sb2dpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL0F1dGhTZXJ2aWNlLmpzP2ZiODIwZjkiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4tbG9naW4uanM/ZmI4MjBmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoZG9tYWluKXtcbiAgICAgICAgdGhpcy5kb21haW4gPSBkb21haW4gfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCdcbiAgICAgICAgdGhpcy5mZXRjaCA9IHRoaXMuZmV0Y2guYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZ2V0UHJvZmlsZSA9IHRoaXMuZ2V0UHJvZmlsZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICAvL0dldCBhIHRva2VuXG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoKGAke3RoaXMuZG9tYWlufS9hZG1pbi9zaWduaW5gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgLy9zZXQgdG9rZW4gb24gY2xpZW50IGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRva2VuKHJlcy50b2tlbilcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaChgJHt0aGlzLmRvbWFpbn0vYWRtaW5gLHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgLy9zZXQgcHJvZmlsZSB0byBhZG1pbihkaWNrYnV0dCkgb24gbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9maWxlIHJlcycsIHJlcylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb2ZpbGUocmVzLnByb2ZpbGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGxvZ2dlZEluKCl7XG4gICAgICAgIC8vY2hlY2tzIGlmIHRoZXJlIGlzIGEgc2F2ZWQgdG9rZW4gYW5kIGlmIGl0IGlzIHN0aWxsIHZhbGlkXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICByZXR1cm4gISF0b2tlbiAvL2hhbmR3YWl2aW5nXG4gICAgfVxuXG4gICAgc2V0UHJvZmlsZShwcm9maWxlKXtcbiAgICAgICAgLy9zYXZlcyBwcm9maWxlIGRhdGEgdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpXG4gICAgfVxuXG4gICAgZ2V0UHJvZmlsZSgpe1xuICAgICAgICAvL3JldHJpdmVzIGN1cnJlbnQgcHJvZmlsZSBkYXRhIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpXG4gICAgICAgIHJldHVybiBwcm9maWxlID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJvZmlsZSkgOiB7fVxuICAgIH1cblxuICAgIHNldFRva2VuKHRva2VuKXtcbiAgICAgICAgLy9zYXZlcyBhZG1pbiB0b2tlbiB0byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgfVxuXG4gICAgZ2V0VG9rZW4oKXtcbiAgICAgICAgLy9yZXRyaWV2ZSB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICB9XG5cbiAgICBsb2dvdXQoKXtcbiAgICAgICAgLy9jbGVhciB1c2VyIHRva2VuIGFuZCBwcm9maWxlIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicHJvZmlsZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBvdXQuLi4nKVxuICAgIH1cblxuICAgIF9jaGVja1N0YXR1cyhyZXNwb25zZSl7XG4gICAgICAgIC8vcmFpc2VzIGVycm9yIGlmIHJlc3BvbnNlIGlzIG5vdCBzdWNjZXNzZnVsXG4gICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoKHVybCwgb3B0aW9ucyl7XG4gICAgICAgIC8vcGVyZm9ybSBhcGkgY2FsbCBzZW5kaW5nIHJlcXVpcmVkIGF1dGggaGVhZGVyc1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMubG9nZ2VkSW4oKSl7XG4gICAgICAgICAgICBoZWFkZXJzLmF1dGhvcml6YXRpb24gPSB0aGlzLmdldFRva2VuKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbih0aGlzLl9jaGVja1N0YXR1cylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9BdXRoU2VydmljZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL0F1dGhTZXJ2aWNlLmpzJztcblxuY29uc3QgYXV0aCA9IG5ldyBBdXRoU2VydmljZSgnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyk7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBpZihhdXRoLmxvZ2dlZEluKCkpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cmwucmVwbGFjZSgnL2FkbWluLWVkaXQnKSAvL3JlZGlyZWN0IGlmIHlvdSBhcmUgbG9nZ2VkIGluXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zb2xlLmxvZyhhdXRoLCBcImF1dGggc2V2aWNlXCIpIFxuICAgICAgICBhdXRoLmxvZ2luKHRoaXMucmVmcy51c2VybmFtZS52YWx1ZSwgdGhpcy5yZWZzLnBhc3N3b3JkLnZhbHVlKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51cmwucmVwbGFjZSgnL2FkbWluLWVkaXQnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCAoZSA9PiBjb25zb2xlLmxvZyhlKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJ1c2VybmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlZj1cInBhc3N3b3JkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9naW5cIi8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hZG1pbi1sb2dpbi5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTs7QUFFQTtBQUZBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFDQTtBQUdBO0FBRkE7QUFYQTtBQWVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFBQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUVBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUdBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFBQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7O0FBOUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7O0FBR0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTs7Ozs7O0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        
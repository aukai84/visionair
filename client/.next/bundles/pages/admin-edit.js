
          window.__NEXT_REGISTER_PAGE('/admin-edit', function() {
            var comp = module.exports =
webpackJsonp([8],{

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

var _stringify = __webpack_require__(544);

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
                _this.setProfile(res.profile);
                return _promise2.default.resolve(res);
            });
        }
    }, {
        key: 'loggedIn',
        value: function loggedIn() {
            //checks if there is a saved token and if it is still valid
            var token = this.getToken();
            return !!token;
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

/***/ 571:
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

var _withAuth = __webpack_require__(574);

var _withAuth2 = _interopRequireDefault(_withAuth);

var _reactstrap = __webpack_require__(563);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewtirrell/Projects/visionair/client/pages/admin-edit.js?entry';


var Dashboard = function (_Component) {
    (0, _inherits3.default)(Dashboard, _Component);

    function Dashboard(props) {
        (0, _classCallCheck3.default)(this, Dashboard);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).call(this, props));

        _this.logout = function () {
            _this.props.auth.logout();
            _this.props.url.replace('/admin-login');
        };

        _this.state = {
            response: ''
        };
        return _this;
    }

    (0, _createClass3.default)(Dashboard, [{
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
                    lineNumber: 31
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'This is the admin page'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'Current user: ', user), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Authenticated message: ', message), _react2.default.createElement(_reactstrap.Button, { color: 'primary', onClick: this.logout, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
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

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = withAuth;

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

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

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewtirrell/Projects/visionair/client/utils/withAuth.js';
function withAuth(AuthComponent) {
    var Auth = new _AuthService2.default('http://localhost:8080');
    return function (_Component) {
        (0, _inherits3.default)(Authenticated, _Component);

        function Authenticated(props) {
            (0, _classCallCheck3.default)(this, Authenticated);

            var _this = (0, _possibleConstructorReturn3.default)(this, (Authenticated.__proto__ || (0, _getPrototypeOf2.default)(Authenticated)).call(this, props));

            _this.state = {
                isLoading: true
            };
            return _this;
        }

        (0, _createClass3.default)(Authenticated, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                //check if admin is logged in
                if (Auth.loggedIn()) {
                    this.setState({ isLoading: false });
                } else {
                    //route back to home if not logged in
                    this.props.url.replace('/');
                }
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }, _react2.default.createElement(_head2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                }, _react2.default.createElement('title', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                }, 'PairHub'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                })), this.state.isLoading ? _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                }, 'LOADING...') : _react2.default.createElement(AuthComponent, (0, _extends3.default)({}, this.props, { auth: Auth, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                })));
            }
        }]);

        return Authenticated;
    }(_react.Component);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matthewtirrell/Projects/visionair/client/utils/withAuth.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matthewtirrell/Projects/visionair/client/utils/withAuth.js"); } } })();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(571);


/***/ })

},[575]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hZG1pbi1lZGl0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvQXV0aFNlcnZpY2UuanM/YWFiM2YzZCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi1lZGl0LmpzP2FhYjNmM2QiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvd2l0aEF1dGguanM/YWFiM2YzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoZG9tYWluKXtcbiAgICAgICAgdGhpcy5kb21haW4gPSBkb21haW4gfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCdcbiAgICAgICAgdGhpcy5mZXRjaCA9IHRoaXMuZmV0Y2guYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuZ2V0UHJvZmlsZSA9IHRoaXMuZ2V0UHJvZmlsZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICAvL0dldCBhIHRva2VuXG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoKGAke3RoaXMuZG9tYWlufS9hZG1pbi9zaWduaW5gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgLy9zZXQgdG9rZW4gb24gY2xpZW50IGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRva2VuKHJlcy50b2tlbilcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mZXRjaChgJHt0aGlzLmRvbWFpbn0vYWRtaW5gLHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgLy9zZXQgcHJvZmlsZSB0byBhZG1pbihkaWNrYnV0dCkgb24gbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvZmlsZShyZXMucHJvZmlsZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcylcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgbG9nZ2VkSW4oKXtcbiAgICAgICAgLy9jaGVja3MgaWYgdGhlcmUgaXMgYSBzYXZlZCB0b2tlbiBhbmQgaWYgaXQgaXMgc3RpbGwgdmFsaWRcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmdldFRva2VuKCk7XG4gICAgICAgIHJldHVybiAhIXRva2VuICBcbiAgICB9XG5cbiAgICBzZXRQcm9maWxlKHByb2ZpbGUpe1xuICAgICAgICAvL3NhdmVzIHByb2ZpbGUgZGF0YSB0byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2ZpbGUnLCBKU09OLnN0cmluZ2lmeShwcm9maWxlKSlcbiAgICB9XG5cbiAgICBnZXRQcm9maWxlKCl7XG4gICAgICAgIC8vcmV0cml2ZXMgY3VycmVudCBwcm9maWxlIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJylcbiAgICAgICAgcmV0dXJuIHByb2ZpbGUgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9maWxlKSA6IHt9XG4gICAgfVxuXG4gICAgc2V0VG9rZW4odG9rZW4pe1xuICAgICAgICAvL3NhdmVzIGFkbWluIHRva2VuIHRvIGxvY2FsU3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcbiAgICB9XG5cbiAgICBnZXRUb2tlbigpe1xuICAgICAgICAvL3JldHJpZXZlIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIH1cblxuICAgIGxvZ291dCgpe1xuICAgICAgICAvL2NsZWFyIHVzZXIgdG9rZW4gYW5kIHByb2ZpbGUgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJwcm9maWxlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VkIG91dC4uLicpXG4gICAgfVxuXG4gICAgX2NoZWNrU3RhdHVzKHJlc3BvbnNlKXtcbiAgICAgICAgLy9yYWlzZXMgZXJyb3IgaWYgcmVzcG9uc2UgaXMgbm90IHN1Y2Nlc3NmdWxcbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlXG4gICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2godXJsLCBvcHRpb25zKXtcbiAgICAgICAgLy9wZXJmb3JtIGFwaSBjYWxsIHNlbmRpbmcgcmVxdWlyZWQgYXV0aCBoZWFkZXJzXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5sb2dnZWRJbigpKXtcbiAgICAgICAgICAgIGhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IHRoaXMuZ2V0VG9rZW4oKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHRoaXMuX2NoZWNrU3RhdHVzKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL0F1dGhTZXJ2aWNlLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vdXRpbHMvd2l0aEF1dGguanMnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZXNwb25zZTogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5hdXRoLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnByb3BzLnVybC5yZXBsYWNlKCcvYWRtaW4tbG9naW4nKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMucHJvcHMuYXV0aC5mZXRjaChgJHt0aGlzLnByb3BzLmF1dGguZG9tYWlufS9hZG1pbi9lZGl0LXNob3BgLCB7bWV0aG9kOiAnR0VUJ30pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcGkgcmVzJywgcmVzKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Jlc3BvbnNlOiByZXMubWVzc2FnZX0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zb2xlLmxvZygncHJvZmlsZScsIHRoaXMucHJvcHMuYXV0aC5nZXRQcm9maWxlKCkpICAgICAgICBcbiAgICAgICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMuYXV0aC5nZXRQcm9maWxlKClcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuc3RhdGUucmVzcG9uc2VcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPlRoaXMgaXMgdGhlIGFkbWluIHBhZ2U8L2gxPlxuICAgICAgICAgICAgICAgIDxwPkN1cnJlbnQgdXNlcjoge3VzZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDxwPkF1dGhlbnRpY2F0ZWQgbWVzc2FnZToge21lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5sb2dvdXR9PkxvZ291dDwvQnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoRGFzaGJvYXJkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2FkbWluLWVkaXQuanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuL0F1dGhTZXJ2aWNlLmpzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhBdXRoKEF1dGhDb21wb25lbnQpIHtcbiAgICBjb25zdCBBdXRoID0gbmV3IEF1dGhTZXJ2aWNlKCdodHRwOi8vbG9jYWxob3N0OjgwODAnKTtcbiAgICByZXR1cm4gY2xhc3MgQXV0aGVudGljYXRlZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgYWRtaW4gaXMgbG9nZ2VkIGluXG4gICAgICAgICAgICBpZihBdXRoLmxvZ2dlZEluKCkpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogZmFsc2V9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3JvdXRlIGJhY2sgdG8gaG9tZSBpZiBub3QgbG9nZ2VkIGluXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51cmwucmVwbGFjZSgnLycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICByZW5kZXIoKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPlBhaXJIdWI8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAtYWxwaGEuNi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0xvYWRpbmc/ICg8ZGl2PkxPQURJTkcuLi48L2Rpdj4pIDogKFxuICAgICAgICAgICAgICAgICAgICA8QXV0aENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gYXV0aD17QXV0aH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3dpdGhBdXRoLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBOztBQUVBO0FBRkE7QUFDQTtBQUZBO0FBUUE7QUFBQTtBQUNBO0FBR0E7QUFGQTtBQVhBO0FBZUE7QUFBQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTs7OztBQUdBO0FBRUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUdBO0FBRUE7QUFBQTtBQUVBO0FBRkE7QUFHQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFDQTs7Ozs7OztBQTdGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQU5BO0FBQ0E7O0FBREE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUVBO0FBaEJBO0FBQUE7QUFBQTtBQW1CQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFKQTtBQUFBO0FBM0JBO0FBQUE7QUFDQTtBQURBO0FBaUNBOzs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        
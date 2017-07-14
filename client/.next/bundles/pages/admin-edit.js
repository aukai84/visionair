
          window.__NEXT_REGISTER_PAGE('/admin-edit', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 568:
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

var _withAuth = __webpack_require__(570);

var _withAuth2 = _interopRequireDefault(_withAuth);

var _reactstrap = __webpack_require__(565);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewtirrell/Projects/visionair/client/pages/admin-edit.js?entry';


var Dashboard = function (_Component) {
    (0, _inherits3.default)(Dashboard, _Component);

    function Dashboard(props) {
        (0, _classCallCheck3.default)(this, Dashboard);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).call(this, props));

        _this.logout = function () {
            console.log('component logging out');
            console.log('auth props', _this.props);
            _this.props.auth.logout();
            _this.props.url.replace('/admin-login');
        };

        return _this;
    }

    (0, _createClass3.default)(Dashboard, [{
        key: 'render',
        value: function render() {

            var user = this.props.auth.getProfile();
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, 'This is the admin page'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'Current user: ', user), _react2.default.createElement(_reactstrap.Button, { color: 'primary', onClick: this.logout, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
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

/***/ 570:
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
                if (!Auth.loggedIn()) {
                    this.props.url.replace('/admin-edit');
                }
                this.setState({ isLoading: false });
            }
        }, {
            key: 'render',
            value: function render() {
                console.log('withauth props', this.props);
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, _react2.default.createElement(_head2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, _react2.default.createElement('title', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }, 'PairHub'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                })), this.state.isLoading ? _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                }, 'LOADING...') : _react2.default.createElement(AuthComponent, (0, _extends3.default)({}, this.props, { auth: Auth, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                })));
            }
        }]);

        return Authenticated;
    }(_react.Component);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matthewtirrell/Projects/visionair/client/utils/withAuth.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matthewtirrell/Projects/visionair/client/utils/withAuth.js"); } } })();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(568);


/***/ })

},[571]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hZG1pbi1lZGl0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4tZWRpdC5qcz82ZjAxMzczIiwid2VicGFjazovLy8uL3V0aWxzL0F1dGhTZXJ2aWNlLmpzPzZmMDEzNzMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvd2l0aEF1dGguanM/NmYwMTM3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi91dGlscy93aXRoQXV0aC5qcyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBsb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQgbG9nZ2luZyBvdXQnKVxuICAgICAgICBjb25zb2xlLmxvZygnYXV0aCBwcm9wcycsIHRoaXMucHJvcHMpXG4gICAgICAgIHRoaXMucHJvcHMuYXV0aC5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy51cmwucmVwbGFjZSgnL2FkbWluLWxvZ2luJylcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLmF1dGguZ2V0UHJvZmlsZSgpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5UaGlzIGlzIHRoZSBhZG1pbiBwYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5DdXJyZW50IHVzZXI6IHt1c2VyfTwvcD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMubG9nb3V0fT5Mb2dvdXQ8L0J1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKERhc2hib2FyZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hZG1pbi1lZGl0LmpzP2VudHJ5IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGRvbWFpbil7XG4gICAgICAgIHRoaXMuZG9tYWluID0gZG9tYWluIHx8ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG4gICAgICAgIHRoaXMuZmV0Y2ggPSB0aGlzLmZldGNoLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmdldFByb2ZpbGUgPSB0aGlzLmdldFByb2ZpbGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgLy9HZXQgYSB0b2tlblxuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaChgJHt0aGlzLmRvbWFpbn0vYWRtaW4vc2lnbmluYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vc2V0IHRva2VuIG9uIGNsaWVudCBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbihyZXMudG9rZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2goYCR7dGhpcy5kb21haW59L2FkbWluYCx7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vc2V0IHByb2ZpbGUgdG8gYWRtaW4oZGlja2J1dHQpIG9uIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHJvZmlsZSByZXMnLCByZXMpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9maWxlKHJlcy5wcm9maWxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsb2dnZWRJbigpe1xuICAgICAgICAvL2NoZWNrcyBpZiB0aGVyZSBpcyBhIHNhdmVkIHRva2VuIGFuZCBpZiBpdCBpcyBzdGlsbCB2YWxpZFxuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcbiAgICAgICAgcmV0dXJuICEhdG9rZW4gLy9oYW5kd2FpdmluZ1xuICAgIH1cblxuICAgIHNldFByb2ZpbGUocHJvZmlsZSl7XG4gICAgICAgIC8vc2F2ZXMgcHJvZmlsZSBkYXRhIHRvIGxvY2FsU3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKVxuICAgIH1cblxuICAgIGdldFByb2ZpbGUoKXtcbiAgICAgICAgLy9yZXRyaXZlcyBjdXJyZW50IHByb2ZpbGUgZGF0YSBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgICBjb25zdCBwcm9maWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKVxuICAgICAgICByZXR1cm4gcHJvZmlsZSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2ZpbGUpIDoge31cbiAgICB9XG5cbiAgICBzZXRUb2tlbih0b2tlbil7XG4gICAgICAgIC8vc2F2ZXMgYWRtaW4gdG9rZW4gdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxuICAgIH1cblxuICAgIGdldFRva2VuKCl7XG4gICAgICAgIC8vcmV0cmlldmUgdG9rZW4gZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgfVxuXG4gICAgbG9nb3V0KCl7XG4gICAgICAgIC8vY2xlYXIgdXNlciB0b2tlbiBhbmQgcHJvZmlsZSBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInByb2ZpbGVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dnZWQgb3V0Li4uJylcbiAgICB9XG5cbiAgICBfY2hlY2tTdGF0dXMocmVzcG9uc2Upe1xuICAgICAgICAvL3JhaXNlcyBlcnJvciBpZiByZXNwb25zZSBpcyBub3Qgc3VjY2Vzc2Z1bFxuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaCh1cmwsIG9wdGlvbnMpe1xuICAgICAgICAvL3BlcmZvcm0gYXBpIGNhbGwgc2VuZGluZyByZXF1aXJlZCBhdXRoIGhlYWRlcnNcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmxvZ2dlZEluKCkpe1xuICAgICAgICAgICAgaGVhZGVycy5hdXRob3JpemF0aW9uID0gdGhpcy5nZXRUb2tlbigpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4odGhpcy5fY2hlY2tTdGF0dXMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvQXV0aFNlcnZpY2UuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuL0F1dGhTZXJ2aWNlLmpzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhBdXRoKEF1dGhDb21wb25lbnQpIHtcbiAgICBjb25zdCBBdXRoID0gbmV3IEF1dGhTZXJ2aWNlKCdodHRwOi8vbG9jYWxob3N0OjgwODAnKTtcbiAgICByZXR1cm4gY2xhc3MgQXV0aGVudGljYXRlZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgICAgIGlmKCFBdXRoLmxvZ2dlZEluKCkpe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXJsLnJlcGxhY2UoJy9hZG1pbi1lZGl0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzpmYWxzZX0pXG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICByZW5kZXIoKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aXRoYXV0aCBwcm9wcycsIHRoaXMucHJvcHMpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5QYWlySHViPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWFscGhhLjYvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNMb2FkaW5nPyAoPGRpdj5MT0FESU5HLi4uPC9kaXY+KSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEF1dGhDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IGF1dGg9e0F1dGh9IC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy93aXRoQXV0aC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQUNBOzs7OztBQVdBO0FBQ0E7QUFEQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTs7QUFFQTtBQUZBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFDQTtBQUdBO0FBRkE7QUFYQTtBQWVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFBQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUVBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUdBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFBQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7O0FBOUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBTkE7QUFDQTs7QUFEQTtBQVNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFaQTtBQUFBO0FBQUE7QUFnQkE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFKQTtBQUFBO0FBekJBO0FBQUE7QUFDQTtBQURBO0FBK0JBOzs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        
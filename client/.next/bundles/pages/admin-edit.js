
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
            _this.props.auth.logout();
            _this.props.url.replace('/admin-login');
        };

        return _this;
    }

    (0, _createClass3.default)(Dashboard, [{
        key: 'render',
        value: function render() {
            console.log('profile', this.props.auth.getProfile());
            var user = this.props.auth.getProfile();
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'This is the admin page'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, 'Current user: ', user), _react2.default.createElement(_reactstrap.Button, { color: 'primary', onClick: this.logout, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
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

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(568);


/***/ })

},[571]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hZG1pbi1lZGl0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4tZWRpdC5qcz8wMDhkMDU1Iiwid2VicGFjazovLy8uL3V0aWxzL0F1dGhTZXJ2aWNlLmpzPzAwOGQwNTUiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvd2l0aEF1dGguanM/MDA4ZDA1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi91dGlscy93aXRoQXV0aC5qcyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBsb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuYXV0aC5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy51cmwucmVwbGFjZSgnL2FkbWluLWxvZ2luJylcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2ZpbGUnLCB0aGlzLnByb3BzLmF1dGguZ2V0UHJvZmlsZSgpKSAgICAgICAgXG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLmF1dGguZ2V0UHJvZmlsZSgpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5UaGlzIGlzIHRoZSBhZG1pbiBwYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5DdXJyZW50IHVzZXI6IHt1c2VyfTwvcD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMubG9nb3V0fT5Mb2dvdXQ8L0J1dHRvbj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9ICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKERhc2hib2FyZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hZG1pbi1lZGl0LmpzP2VudHJ5IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGRvbWFpbil7XG4gICAgICAgIHRoaXMuZG9tYWluID0gZG9tYWluIHx8ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG4gICAgICAgIHRoaXMuZmV0Y2ggPSB0aGlzLmZldGNoLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmdldFByb2ZpbGUgPSB0aGlzLmdldFByb2ZpbGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgLy9HZXQgYSB0b2tlblxuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaChgJHt0aGlzLmRvbWFpbn0vYWRtaW4vc2lnbmluYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vc2V0IHRva2VuIG9uIGNsaWVudCBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbihyZXMudG9rZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2goYCR7dGhpcy5kb21haW59L2FkbWluYCx7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vc2V0IHByb2ZpbGUgdG8gYWRtaW4oZGlja2J1dHQpIG9uIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb2ZpbGUocmVzLnByb2ZpbGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGxvZ2dlZEluKCl7XG4gICAgICAgIC8vY2hlY2tzIGlmIHRoZXJlIGlzIGEgc2F2ZWQgdG9rZW4gYW5kIGlmIGl0IGlzIHN0aWxsIHZhbGlkXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICByZXR1cm4gISF0b2tlbiAvL2hhbmR3YWl2aW5nXG4gICAgfVxuXG4gICAgc2V0UHJvZmlsZShwcm9maWxlKXtcbiAgICAgICAgLy9zYXZlcyBwcm9maWxlIGRhdGEgdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpXG4gICAgfVxuXG4gICAgZ2V0UHJvZmlsZSgpe1xuICAgICAgICAvL3JldHJpdmVzIGN1cnJlbnQgcHJvZmlsZSBkYXRhIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpXG4gICAgICAgIHJldHVybiBwcm9maWxlID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJvZmlsZSkgOiB7fVxuICAgIH1cblxuICAgIHNldFRva2VuKHRva2VuKXtcbiAgICAgICAgLy9zYXZlcyBhZG1pbiB0b2tlbiB0byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgfVxuXG4gICAgZ2V0VG9rZW4oKXtcbiAgICAgICAgLy9yZXRyaWV2ZSB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICB9XG5cbiAgICBsb2dvdXQoKXtcbiAgICAgICAgLy9jbGVhciB1c2VyIHRva2VuIGFuZCBwcm9maWxlIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicHJvZmlsZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBvdXQuLi4nKVxuICAgIH1cblxuICAgIF9jaGVja1N0YXR1cyhyZXNwb25zZSl7XG4gICAgICAgIC8vcmFpc2VzIGVycm9yIGlmIHJlc3BvbnNlIGlzIG5vdCBzdWNjZXNzZnVsXG4gICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoKHVybCwgb3B0aW9ucyl7XG4gICAgICAgIC8vcGVyZm9ybSBhcGkgY2FsbCBzZW5kaW5nIHJlcXVpcmVkIGF1dGggaGVhZGVyc1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMubG9nZ2VkSW4oKSl7XG4gICAgICAgICAgICBoZWFkZXJzLmF1dGhvcml6YXRpb24gPSB0aGlzLmdldFRva2VuKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbih0aGlzLl9jaGVja1N0YXR1cylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9BdXRoU2VydmljZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJy4vQXV0aFNlcnZpY2UuanMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEF1dGgoQXV0aENvbXBvbmVudCkge1xuICAgIGNvbnN0IEF1dGggPSBuZXcgQXV0aFNlcnZpY2UoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuICAgIHJldHVybiBjbGFzcyBBdXRoZW50aWNhdGVkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBhZG1pbiBpcyBsb2dnZWQgaW5cbiAgICAgICAgICAgIGlmKEF1dGgubG9nZ2VkSW4oKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vcm91dGUgYmFjayB0byBob21lIGlmIG5vdCBsb2dnZWQgaW5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVybC5yZXBsYWNlKCcvJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIHJlbmRlcigpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+UGFpckh1YjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC1hbHBoYS42L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZz8gKDxkaXY+TE9BRElORy4uLjwvZGl2PikgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxBdXRoQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSBhdXRoPXtBdXRofSAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvd2l0aEF1dGguanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQUNBOzs7OztBQVFBO0FBQUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTs7QUFFQTtBQUZBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFDQTtBQUdBO0FBRkE7QUFYQTtBQWVBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBQUE7QUFDQTs7OztBQUdBO0FBRUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUdBO0FBRUE7QUFBQTtBQUVBO0FBRkE7QUFHQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBSUE7QUFDQTs7Ozs7OztBQTdGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQU5BO0FBQ0E7O0FBREE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUVBO0FBaEJBO0FBQUE7QUFBQTtBQW1CQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFKQTtBQUFBO0FBM0JBO0FBQUE7QUFDQTtBQURBO0FBaUNBOzs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        
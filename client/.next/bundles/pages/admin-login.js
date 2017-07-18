
          window.__NEXT_REGISTER_PAGE('/admin-login', function() {
            var comp = module.exports =
webpackJsonp([7],{

<<<<<<< HEAD
/***/ 568:
=======
/***/ 573:
>>>>>>> 9c927c5a3c0548b9db738168a968f765a3bb0f62
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

<<<<<<< HEAD
var _AuthService = __webpack_require__(569);
=======
var _AuthService = __webpack_require__(574);
>>>>>>> 9c927c5a3c0548b9db738168a968f765a3bb0f62

var _AuthService2 = _interopRequireDefault(_AuthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
var _jsxFileName = '/Users/matthewtirrell/Projects/visionair/client/pages/admin-login.js?entry';
=======
var _jsxFileName = '/Users/keegangladstone/Desktop/visionair/client/pages/admin-login.js?entry';
>>>>>>> 9c927c5a3c0548b9db738168a968f765a3bb0f62


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
                console.log("response from fetch", res);
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

<<<<<<< HEAD
 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matthewtirrell/Projects/visionair/client/pages/admin-login.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matthewtirrell/Projects/visionair/client/pages/admin-login.js"); } } })();
=======
 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/keegangladstone/Desktop/visionair/client/pages/admin-login.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/keegangladstone/Desktop/visionair/client/pages/admin-login.js"); } } })();
>>>>>>> 9c927c5a3c0548b9db738168a968f765a3bb0f62
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

<<<<<<< HEAD
/***/ 569:
=======
/***/ 574:
>>>>>>> 9c927c5a3c0548b9db738168a968f765a3bb0f62
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

<<<<<<< HEAD
 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matthewtirrell/Projects/visionair/client/utils/AuthService.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matthewtirrell/Projects/visionair/client/utils/AuthService.js"); } } })();

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(568);
=======
 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/keegangladstone/Desktop/visionair/client/utils/AuthService.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/keegangladstone/Desktop/visionair/client/utils/AuthService.js"); } } })();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(573);
>>>>>>> 9c927c5a3c0548b9db738168a968f765a3bb0f62


/***/ })

<<<<<<< HEAD
},[570]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hZG1pbi1sb2dpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FkbWluLWxvZ2luLmpzPzRmYWZmNGYiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvQXV0aFNlcnZpY2UuanM/NGZhZmY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuLi91dGlscy9BdXRoU2VydmljZS5qcyc7XG5cbmNvbnN0IGF1dGggPSBuZXcgQXV0aFNlcnZpY2UoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgaWYoYXV0aC5sb2dnZWRJbigpKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXJsLnJlcGxhY2UoJy9hZG1pbi1lZGl0JykgLy9yZWRpcmVjdCBpZiB5b3UgYXJlIGxvZ2dlZCBpblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2coYXV0aCwgXCJhdXRoIHNldmljZVwiKSBcbiAgICAgICAgYXV0aC5sb2dpbih0aGlzLnJlZnMudXNlcm5hbWUudmFsdWUsIHRoaXMucmVmcy5wYXNzd29yZC52YWx1ZSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSBmcm9tIGZldGNoXCIsIHJlcylcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVybC5yZXBsYWNlKCcvYWRtaW4tZWRpdCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoIChlID0+IGNvbnNvbGUubG9nKGUpKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInVzZXJuYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcmVmPVwicGFzc3dvcmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2FkbWluLWxvZ2luLmpzP2VudHJ5IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGRvbWFpbil7XG4gICAgICAgIHRoaXMuZG9tYWluID0gZG9tYWluIHx8ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG4gICAgICAgIHRoaXMuZmV0Y2ggPSB0aGlzLmZldGNoLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmdldFByb2ZpbGUgPSB0aGlzLmdldFByb2ZpbGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgLy9HZXQgYSB0b2tlblxuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaChgJHt0aGlzLmRvbWFpbn0vYWRtaW4vc2lnbmluYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vc2V0IHRva2VuIG9uIGNsaWVudCBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbihyZXMudG9rZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2goYCR7dGhpcy5kb21haW59L2FkbWluYCx7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vc2V0IHByb2ZpbGUgdG8gYWRtaW4oZGlja2J1dHQpIG9uIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb2ZpbGUocmVzLnByb2ZpbGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGxvZ2dlZEluKCl7XG4gICAgICAgIC8vY2hlY2tzIGlmIHRoZXJlIGlzIGEgc2F2ZWQgdG9rZW4gYW5kIGlmIGl0IGlzIHN0aWxsIHZhbGlkXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICByZXR1cm4gISF0b2tlbiAgXG4gICAgfVxuXG4gICAgc2V0UHJvZmlsZShwcm9maWxlKXtcbiAgICAgICAgLy9zYXZlcyBwcm9maWxlIGRhdGEgdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpXG4gICAgfVxuXG4gICAgZ2V0UHJvZmlsZSgpe1xuICAgICAgICAvL3JldHJpdmVzIGN1cnJlbnQgcHJvZmlsZSBkYXRhIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpXG4gICAgICAgIHJldHVybiBwcm9maWxlID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJvZmlsZSkgOiB7fVxuICAgIH1cblxuICAgIHNldFRva2VuKHRva2VuKXtcbiAgICAgICAgLy9zYXZlcyBhZG1pbiB0b2tlbiB0byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgfVxuXG4gICAgZ2V0VG9rZW4oKXtcbiAgICAgICAgLy9yZXRyaWV2ZSB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICB9XG5cbiAgICBsb2dvdXQoKXtcbiAgICAgICAgLy9jbGVhciB1c2VyIHRva2VuIGFuZCBwcm9maWxlIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicHJvZmlsZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBvdXQuLi4nKVxuICAgIH1cblxuICAgIF9jaGVja1N0YXR1cyhyZXNwb25zZSl7XG4gICAgICAgIC8vcmFpc2VzIGVycm9yIGlmIHJlc3BvbnNlIGlzIG5vdCBzdWNjZXNzZnVsXG4gICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoKHVybCwgb3B0aW9ucyl7XG4gICAgICAgIC8vcGVyZm9ybSBhcGkgY2FsbCBzZW5kaW5nIHJlcXVpcmVkIGF1dGggaGVhZGVyc1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMubG9nZ2VkSW4oKSl7XG4gICAgICAgICAgICBoZWFkZXJzLmF1dGhvcml6YXRpb24gPSB0aGlzLmdldFRva2VuKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbih0aGlzLl9jaGVja1N0YXR1cylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9BdXRoU2VydmljZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7Ozs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBRUE7QUFGQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBQ0E7QUFHQTtBQUZBO0FBWEE7QUFlQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUVBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUdBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFBQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7O0FBN0ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
=======
},[575]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hZG1pbi1sb2dpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FkbWluLWxvZ2luLmpzP2M3OTRhZTEiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvQXV0aFNlcnZpY2UuanM/Yzc5NGFlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICcuLi91dGlscy9BdXRoU2VydmljZS5qcyc7XG5cbmNvbnN0IGF1dGggPSBuZXcgQXV0aFNlcnZpY2UoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgaWYoYXV0aC5sb2dnZWRJbigpKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXJsLnJlcGxhY2UoJy9hZG1pbi1lZGl0JykgLy9yZWRpcmVjdCBpZiB5b3UgYXJlIGxvZ2dlZCBpblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2coYXV0aCwgXCJhdXRoIHNldmljZVwiKSBcbiAgICAgICAgYXV0aC5sb2dpbih0aGlzLnJlZnMudXNlcm5hbWUudmFsdWUsIHRoaXMucmVmcy5wYXNzd29yZC52YWx1ZSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZSBmcm9tIGZldGNoXCIsIHJlcylcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVybC5yZXBsYWNlKCcvYWRtaW4tZWRpdCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoIChlID0+IGNvbnNvbGUubG9nKGUpKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cInVzZXJuYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcmVmPVwicGFzc3dvcmRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2FkbWluLWxvZ2luLmpzP2VudHJ5IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGRvbWFpbil7XG4gICAgICAgIHRoaXMuZG9tYWluID0gZG9tYWluIHx8ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXG4gICAgICAgIHRoaXMuZmV0Y2ggPSB0aGlzLmZldGNoLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5sb2dpbiA9IHRoaXMubG9naW4uYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmdldFByb2ZpbGUgPSB0aGlzLmdldFByb2ZpbGUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgLy9HZXQgYSB0b2tlblxuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaChgJHt0aGlzLmRvbWFpbn0vYWRtaW4vc2lnbmluYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vc2V0IHRva2VuIG9uIGNsaWVudCBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbihyZXMudG9rZW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2goYCR7dGhpcy5kb21haW59L2FkbWluYCx7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vc2V0IHByb2ZpbGUgdG8gYWRtaW4oZGlja2J1dHQpIG9uIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb2ZpbGUocmVzLnByb2ZpbGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGxvZ2dlZEluKCl7XG4gICAgICAgIC8vY2hlY2tzIGlmIHRoZXJlIGlzIGEgc2F2ZWQgdG9rZW4gYW5kIGlmIGl0IGlzIHN0aWxsIHZhbGlkXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICByZXR1cm4gISF0b2tlbiAgXG4gICAgfVxuXG4gICAgc2V0UHJvZmlsZShwcm9maWxlKXtcbiAgICAgICAgLy9zYXZlcyBwcm9maWxlIGRhdGEgdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpXG4gICAgfVxuXG4gICAgZ2V0UHJvZmlsZSgpe1xuICAgICAgICAvL3JldHJpdmVzIGN1cnJlbnQgcHJvZmlsZSBkYXRhIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpXG4gICAgICAgIHJldHVybiBwcm9maWxlID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJvZmlsZSkgOiB7fVxuICAgIH1cblxuICAgIHNldFRva2VuKHRva2VuKXtcbiAgICAgICAgLy9zYXZlcyBhZG1pbiB0b2tlbiB0byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgfVxuXG4gICAgZ2V0VG9rZW4oKXtcbiAgICAgICAgLy9yZXRyaWV2ZSB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICB9XG5cbiAgICBsb2dvdXQoKXtcbiAgICAgICAgLy9jbGVhciB1c2VyIHRva2VuIGFuZCBwcm9maWxlIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicHJvZmlsZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2dlZCBvdXQuLi4nKVxuICAgIH1cblxuICAgIF9jaGVja1N0YXR1cyhyZXNwb25zZSl7XG4gICAgICAgIC8vcmFpc2VzIGVycm9yIGlmIHJlc3BvbnNlIGlzIG5vdCBzdWNjZXNzZnVsXG4gICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoKHVybCwgb3B0aW9ucyl7XG4gICAgICAgIC8vcGVyZm9ybSBhcGkgY2FsbCBzZW5kaW5nIHJlcXVpcmVkIGF1dGggaGVhZGVyc1xuICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMubG9nZ2VkSW4oKSl7XG4gICAgICAgICAgICBoZWFkZXJzLmF1dGhvcml6YXRpb24gPSB0aGlzLmdldFRva2VuKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbih0aGlzLl9jaGVja1N0YXR1cylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9BdXRoU2VydmljZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7Ozs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBRUE7QUFGQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBQ0E7QUFHQTtBQUZBO0FBWEE7QUFlQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUVBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUdBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFBQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7O0FBN0ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> 9c927c5a3c0548b9db738168a968f765a3bb0f62
            return { page: comp.default }
          })
        
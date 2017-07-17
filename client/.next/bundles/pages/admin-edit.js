
          window.__NEXT_REGISTER_PAGE('/admin-edit', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 568:
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

/***/ 569:
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

var _withAuth = __webpack_require__(572);

var _withAuth2 = _interopRequireDefault(_withAuth);

var _reactstrap = __webpack_require__(565);

var _EditModal = __webpack_require__(571);

var _EditModal2 = _interopRequireDefault(_EditModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewtirrell/Projects/visionair/client/pages/admin-edit.js?entry';


var Dashboard = function (_Component) {
    (0, _inherits3.default)(Dashboard, _Component);

    function Dashboard(props) {
        (0, _classCallCheck3.default)(this, Dashboard);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).call(this, props));

        _this.state = {
            response: '',
            items: []
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
            this.props.auth.fetch(this.props.auth.domain + '/shop', { method: 'GET' }).then(function (res) {
                console.log('db items', res);
                _this2.setState({
                    items: res
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('db items', this.state.items);
            var user = this.props.auth.getProfile();
            var message = this.state.response;
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'This is the admin page'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Current user: ', user), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Authenticated message: ', message), this.state.items.map(function (item) {
                return _react2.default.createElement(_EditModal2.default, { buttonLabel: item.title, link: item.imagePath, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }, item.title);
            }), _react2.default.createElement(_reactstrap.Button, { color: 'primary', onClick: this.logout, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
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

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _reactstrap = __webpack_require__(565);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewtirrell/Projects/visionair/client/components/EditModal.js';


var EditModal = function (_Component) {
    (0, _inherits3.default)(EditModal, _Component);

    function EditModal(props) {
        (0, _classCallCheck3.default)(this, EditModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (EditModal.__proto__ || (0, _getPrototypeOf2.default)(EditModal)).call(this, props));

        _this.state = {
            modal: false,
            backdrop: true
        };
        _this.toggle = _this.toggle.bind(_this);
        _this.changeBackdrop = _this.changeBackdrop.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(EditModal, [{
        key: 'toggle',
        value: function toggle() {
            this.setState({
                modal: !this.state.modal
            });
        }
    }, {
        key: 'changeBackdrop',
        value: function changeBackdrop(e) {
            var value = e.target.value;
            if (value !== 'static') {
                value = JSON.parse(value);
            }
            this.setState({ backdrop: value });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('img', { src: this.props.link, color: 'danger', onClick: this.toggle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement(_reactstrap.Modal, { isOpen: this.state.modal, toggle: this.toggle, className: this.props.className, backdrop: this.state.backdrop, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_reactstrap.ModalHeader, { toggle: this.toggle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'Modal title'), _react2.default.createElement(_reactstrap.ModalBody, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, this.props.children), _react2.default.createElement(_reactstrap.ModalFooter, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_reactstrap.Button, { color: 'primary', onClick: this.toggle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Do Something'), ' ', _react2.default.createElement(_reactstrap.Button, { color: 'secondary', onClick: this.toggle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Cancel'))));
        }
    }]);

    return EditModal;
}(_react.Component);

exports.default = EditModal;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matthewtirrell/Projects/visionair/client/components/EditModal.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matthewtirrell/Projects/visionair/client/components/EditModal.js"); } } })();

/***/ }),

/***/ 572:
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

var _AuthService = __webpack_require__(568);

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

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(569);


/***/ })

},[573]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hZG1pbi1lZGl0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvQXV0aFNlcnZpY2UuanM/NjE3ODJmOSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi1lZGl0LmpzPzYxNzgyZjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0TW9kYWwuanM/NjE3ODJmOSIsIndlYnBhY2s6Ly8vLi91dGlscy93aXRoQXV0aC5qcz82MTc4MmY5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihkb21haW4pe1xuICAgICAgICB0aGlzLmRvbWFpbiA9IGRvbWFpbiB8fCAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJ1xuICAgICAgICB0aGlzLmZldGNoID0gdGhpcy5mZXRjaC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5nZXRQcm9maWxlID0gdGhpcy5nZXRQcm9maWxlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIC8vR2V0IGEgdG9rZW5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2goYCR7dGhpcy5kb21haW59L2FkbWluL3NpZ25pbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAvL3NldCB0b2tlbiBvbiBjbGllbnQgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4ocmVzLnRva2VuKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoKGAke3RoaXMuZG9tYWlufS9hZG1pbmAse1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAvL3NldCBwcm9maWxlIHRvIGFkbWluKGRpY2tidXR0KSBvbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9maWxlKHJlcy5wcm9maWxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsb2dnZWRJbigpe1xuICAgICAgICAvL2NoZWNrcyBpZiB0aGVyZSBpcyBhIHNhdmVkIHRva2VuIGFuZCBpZiBpdCBpcyBzdGlsbCB2YWxpZFxuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcbiAgICAgICAgcmV0dXJuICEhdG9rZW4gIFxuICAgIH1cblxuICAgIHNldFByb2ZpbGUocHJvZmlsZSl7XG4gICAgICAgIC8vc2F2ZXMgcHJvZmlsZSBkYXRhIHRvIGxvY2FsU3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKVxuICAgIH1cblxuICAgIGdldFByb2ZpbGUoKXtcbiAgICAgICAgLy9yZXRyaXZlcyBjdXJyZW50IHByb2ZpbGUgZGF0YSBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgICBjb25zdCBwcm9maWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKVxuICAgICAgICByZXR1cm4gcHJvZmlsZSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2ZpbGUpIDoge31cbiAgICB9XG5cbiAgICBzZXRUb2tlbih0b2tlbil7XG4gICAgICAgIC8vc2F2ZXMgYWRtaW4gdG9rZW4gdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxuICAgIH1cblxuICAgIGdldFRva2VuKCl7XG4gICAgICAgIC8vcmV0cmlldmUgdG9rZW4gZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgfVxuXG4gICAgbG9nb3V0KCl7XG4gICAgICAgIC8vY2xlYXIgdXNlciB0b2tlbiBhbmQgcHJvZmlsZSBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInByb2ZpbGVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2dnZWQgb3V0Li4uJylcbiAgICB9XG5cbiAgICBfY2hlY2tTdGF0dXMocmVzcG9uc2Upe1xuICAgICAgICAvL3JhaXNlcyBlcnJvciBpZiByZXNwb25zZSBpcyBub3Qgc3VjY2Vzc2Z1bFxuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaCh1cmwsIG9wdGlvbnMpe1xuICAgICAgICAvL3BlcmZvcm0gYXBpIGNhbGwgc2VuZGluZyByZXF1aXJlZCBhdXRoIGhlYWRlcnNcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmxvZ2dlZEluKCkpe1xuICAgICAgICAgICAgaGVhZGVycy5hdXRob3JpemF0aW9uID0gdGhpcy5nZXRUb2tlbigpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4odGhpcy5fY2hlY2tTdGF0dXMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvQXV0aFNlcnZpY2UuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi91dGlscy93aXRoQXV0aC5qcyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgRWRpdE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvRWRpdE1vZGFsLmpzJztcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVzcG9uc2U6ICcnLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGxvZ291dCgpe1xuICAgICAgICB0aGlzLnByb3BzLmF1dGgubG9nb3V0KCk7XG4gICAgICAgIHRoaXMucHJvcHMudXJsLnJlcGxhY2UoJy9hZG1pbi1sb2dpbicpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5hdXRoLmZldGNoKGAke3RoaXMucHJvcHMuYXV0aC5kb21haW59L2FkbWluL2VkaXQtc2hvcGAsIHttZXRob2Q6ICdHRVQnfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FwaSByZXMnLCByZXMpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzcG9uc2U6IHJlcy5tZXNzYWdlfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvcHMuYXV0aC5mZXRjaChgJHt0aGlzLnByb3BzLmF1dGguZG9tYWlufS9zaG9wYCwge21ldGhvZDogJ0dFVCd9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGIgaXRlbXMnLCByZXMpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiByZXNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zb2xlLmxvZygnZGIgaXRlbXMnLCB0aGlzLnN0YXRlLml0ZW1zKVxuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy5hdXRoLmdldFByb2ZpbGUoKVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5zdGF0ZS5yZXNwb25zZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+VGhpcyBpcyB0aGUgYWRtaW4gcGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+Q3VycmVudCB1c2VyOiB7dXNlcn08L3A+XG4gICAgICAgICAgICAgICAgPHA+QXV0aGVudGljYXRlZCBtZXNzYWdlOiB7bWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RWRpdE1vZGFsIGJ1dHRvbkxhYmVsPXtpdGVtLnRpdGxlfSBsaW5rPXtpdGVtLmltYWdlUGF0aH0+e2l0ZW0udGl0bGV9PC9FZGl0TW9kYWw+XG4gICAgICAgICAgICAgICAgKSl9IFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5sb2dvdXR9PkxvZ291dDwvQnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoRGFzaGJvYXJkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2FkbWluLWVkaXQuanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBJbnB1dCwgTGFiZWwsIEZvcm0sIEZvcm1Hcm91cCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5jbGFzcyBFZGl0TW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgYmFja2Ryb3A6dHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlQmFja2Ryb3AgPSB0aGlzLmNoYW5nZUJhY2tkcm9wLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW9kYWw6ICF0aGlzLnN0YXRlLm1vZGFsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2hhbmdlQmFja2Ryb3AoZSl7XG4gICAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZih2YWx1ZSAhPT0gJ3N0YXRpYycpe1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtiYWNrZHJvcDogdmFsdWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5saW5rfSBjb2xvcj1cImRhbmdlclwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfS8+XG4gICAgICAgIDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUubW9kYWx9IHRvZ2dsZT17dGhpcy50b2dnbGV9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IGJhY2tkcm9wPXt0aGlzLnN0YXRlLmJhY2tkcm9wfT5cbiAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnRvZ2dsZX0+TW9kYWwgdGl0bGU8L01vZGFsSGVhZGVyPlxuICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy50b2dnbGV9PkRvIFNvbWV0aGluZzwvQnV0dG9uPnsnICd9XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy50b2dnbGV9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0TW9kYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0VkaXRNb2RhbC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJy4vQXV0aFNlcnZpY2UuanMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEF1dGgoQXV0aENvbXBvbmVudCkge1xuICAgIGNvbnN0IEF1dGggPSBuZXcgQXV0aFNlcnZpY2UoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuICAgIHJldHVybiBjbGFzcyBBdXRoZW50aWNhdGVkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICAgICAgLy9jaGVjayBpZiBhZG1pbiBpcyBsb2dnZWQgaW5cbiAgICAgICAgICAgIGlmKEF1dGgubG9nZ2VkSW4oKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vcm91dGUgYmFjayB0byBob21lIGlmIG5vdCBsb2dnZWQgaW5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVybC5yZXBsYWNlKCcvJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIHJlbmRlcigpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+UGFpckh1YjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC1hbHBoYS42L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZz8gKDxkaXY+TE9BRElORy4uLjwvZGl2PikgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxBdXRoQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSBhdXRoPXtBdXRofSAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvd2l0aEF1dGguanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBRUE7QUFGQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBQ0E7QUFHQTtBQUZBO0FBWEE7QUFlQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUVBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7O0FBR0E7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUdBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFBQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7O0FBN0ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUhBO0FBR0E7QUFDQTs7Ozs7QUFHQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBSEE7QUFJQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUhBO0FBR0E7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQU5BO0FBQ0E7O0FBREE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUVBO0FBaEJBO0FBQUE7QUFBQTtBQW1CQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFKQTtBQUFBO0FBM0JBO0FBQUE7QUFDQTtBQURBO0FBaUNBOzs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        
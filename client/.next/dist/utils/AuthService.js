'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

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
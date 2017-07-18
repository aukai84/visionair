'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AuthService = require('../utils/AuthService.js');

var _AuthService2 = _interopRequireDefault(_AuthService);

var _reactstrap = require('reactstrap');

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

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
            console.log('refs', this);
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
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_reactstrap.Form, { onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_reactstrap.FormGroup, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_reactstrap.Input, { type: 'text', ref: 'username', placeholder: 'Username', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            })), ' ', _react2.default.createElement(_reactstrap.FormGroup, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_reactstrap.Input, { type: 'password', ref: 'password', placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            })), ' ', _react2.default.createElement(_reactstrap.Input, { type: 'submit', value: 'Login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            })));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
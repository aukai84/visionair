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

var _withAuth = require('../utils/withAuth.js');

var _withAuth2 = _interopRequireDefault(_withAuth);

var _reactstrap = require('reactstrap');

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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _EditModal = require('../components/EditModal.js');

var _EditModal2 = _interopRequireDefault(_EditModal);

var _CrudComponent = require('../components/CrudComponent.js');

var _CrudComponent2 = _interopRequireDefault(_CrudComponent);

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
        _this.loadItems = _this.loadItems.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Dashboard, [{
        key: 'logout',
        value: function logout() {
            this.props.auth.logout();
            this.props.url.replace('/admin-login');
        }
    }, {
        key: 'loadItems',
        value: function loadItems() {
            var _this2 = this;

            this.props.auth.fetch(this.props.auth.domain + '/shop', { method: 'GET' }).then(function (res) {
                _this2.setState({
                    items: res
                });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.props.auth.fetch(this.props.auth.domain + '/admin/edit-shop', { method: 'GET' }).then(function (res) {
                console.log('api res', res);
                _this3.setState({ response: res.message });
            });
            this.props.auth.fetch(this.props.auth.domain + '/shop', { method: 'GET' }).then(function (res) {
                console.log('db items', res);
                _this3.setState({
                    items: res
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            console.log('db items', this.state.items);
            var user = this.props.auth.getProfile();
            var message = this.state.response;
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'This is the admin page'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Current user: ', user), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Authenticated message: ', message), this.state.items.map(function (item) {
                return _react2.default.createElement(_EditModal2.default, (0, _extends3.default)({ loadItems: _this4.loadItems }, _this4.props, { buttonLabel: item.title, itemId: item._id, link: item.imagePath, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                }), _react2.default.createElement(_CrudComponent2.default, { item: item, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }));
            }), _react2.default.createElement(_reactstrap.Button, { color: 'primary', onClick: this.logout, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Logout'));
        }
    }]);

    return Dashboard;
}(_react.Component);

exports.default = (0, _withAuth2.default)(Dashboard);
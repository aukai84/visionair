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

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewtirrell/Projects/visionair/client/components/CrudComponent.js';


var CrudComponent = function (_Component) {
    (0, _inherits3.default)(CrudComponent, _Component);

    function CrudComponent(props) {
        (0, _classCallCheck3.default)(this, CrudComponent);

        return (0, _possibleConstructorReturn3.default)(this, (CrudComponent.__proto__ || (0, _getPrototypeOf2.default)(CrudComponent)).call(this, props));
    }

    (0, _createClass3.default)(CrudComponent, [{
        key: 'render',
        value: function render() {
            console.log('crud props', this.props);
            return _react2.default.createElement(_reactstrap.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, 'Title', _react2.default.createElement(_reactstrap.Input, { placeholder: this.props.item.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            })), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, 'Location', _react2.default.createElement(_reactstrap.Input, { placeholder: this.props.item.location, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            })), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'Inventory', _react2.default.createElement(_reactstrap.Input, { placeholder: this.props.item.inventory, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            })), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'Location', _react2.default.createElement(_reactstrap.Input, { placeholder: this.props.item.location, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            })), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, 'Price', _react2.default.createElement(_reactstrap.Input, { placeholder: this.props.item.price, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            })), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'Image', _react2.default.createElement(_reactstrap.Input, { type: 'file', name: 'file', id: 'imageFile', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            })));
        }
    }]);

    return CrudComponent;
}(_react.Component);

exports.default = CrudComponent;
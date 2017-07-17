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
            }, this.props.buttonLabel), _react2.default.createElement(_reactstrap.ModalBody, {
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
            }, 'Submit'), ' ', _react2.default.createElement(_reactstrap.Button, { color: 'secondary', onClick: this.toggle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Cancel'))));
        }
    }]);

    return EditModal;
}(_react.Component);

exports.default = EditModal;
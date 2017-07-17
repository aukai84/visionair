webpackHotUpdate(6,{

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matthewtirrell/Projects/visionair/client/components/EditModal.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matthewtirrell/Projects/visionair/client/components/EditModal.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5jMWUyN2MyNDliNzlkNTc3MDQ2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0TW9kYWwuanM/MTg5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBJbnB1dCwgTGFiZWwsIEZvcm0sIEZvcm1Hcm91cCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5jbGFzcyBFZGl0TW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgYmFja2Ryb3A6dHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlQmFja2Ryb3AgPSB0aGlzLmNoYW5nZUJhY2tkcm9wLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW9kYWw6ICF0aGlzLnN0YXRlLm1vZGFsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2hhbmdlQmFja2Ryb3AoZSl7XG4gICAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZih2YWx1ZSAhPT0gJ3N0YXRpYycpe1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtiYWNrZHJvcDogdmFsdWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5saW5rfSBjb2xvcj1cImRhbmdlclwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfS8+XG4gICAgICAgIDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUubW9kYWx9IHRvZ2dsZT17dGhpcy50b2dnbGV9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IGJhY2tkcm9wPXt0aGlzLnN0YXRlLmJhY2tkcm9wfT5cbiAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnRvZ2dsZX0+e3RoaXMucHJvcHMuYnV0dG9uTGFiZWx9PC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5TdWJtaXQ8L0J1dHRvbj57JyAnfVxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdE1vZGFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9FZGl0TW9kYWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUhBO0FBR0E7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
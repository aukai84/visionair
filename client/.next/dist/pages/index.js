'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewtirrell/Projects/visionair/client/pages/index.js?entry';


var Index = function Index(props) {
    console.log(props);
    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, 'This is the Home Page'), _react2.default.createElement('ul', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, props.items.map(function (item) {
        return _react2.default.createElement('li', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }, _react2.default.createElement('p', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 12
            }
        }, 'Title: ', item.title), _react2.default.createElement('p', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            }
        }, 'Location: ', item.location), _react2.default.createElement('p', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            }
        }, 'Inventory: ', item.inventory), _react2.default.createElement('img', { src: item.imagePath, __source: {
                fileName: _jsxFileName,
                lineNumber: 15
            }
        }));
    })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _isomorphicUnfetch2.default)('http://localhost:8080/shop');

                case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.json();

                case 5:
                    data = _context.sent;

                    console.log('Showing data from api.. ' + data.length);

                    return _context.abrupt('return', {
                        items: data
                    });

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

exports.default = Index;
'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _affix = require('../../affix');

var _affix2 = _interopRequireDefault(_affix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function*/
var StickHeader = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(StickHeader, _React$Component);

    function StickHeader() {
        (0, _classCallCheck3.default)(this, StickHeader);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    StickHeader.prototype.render = function render() {
        var _context = this.context,
            Header = _context.Header,
            offsetTop = _context.offsetTop,
            affixProps = _context.affixProps;

        return _react2.default.createElement(
            _affix2.default,
            (0, _extends3.default)({}, affixProps, { offsetTop: offsetTop }),
            _react2.default.createElement(Header, this.props)
        );
    };

    return StickHeader;
}(_react2.default.Component), _class.contextTypes = {
    Header: _propTypes2.default.any,
    offsetTop: _propTypes2.default.number,
    affixProps: _propTypes2.default.object
}, _temp);
StickHeader.displayName = 'StickHeader';
exports.default = StickHeader;
module.exports = exports['default'];
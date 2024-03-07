'use strict';

exports.__esModule = true;
exports.default = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prefer-stateless-function */
var FixedWrapper = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(FixedWrapper, _React$Component);

    function FixedWrapper() {
        (0, _classCallCheck3.default)(this, FixedWrapper);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    FixedWrapper.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            wrapperContent = _props.wrapperContent,
            prefix = _props.prefix;

        return _react2.default.createElement(
            'div',
            { className: prefix + 'table-inner' },
            children,
            wrapperContent
        );
    };

    return FixedWrapper;
}(_react2.default.Component), _class.propTypes = {
    children: _propTypes2.default.any,
    prefix: _propTypes2.default.string,
    colGroup: _propTypes2.default.any,
    wrapperContent: _propTypes2.default.any
}, _temp);
FixedWrapper.displayName = 'FixedWrapper';
exports.default = FixedWrapper;
module.exports = exports.default;
module.exports.default = exports.default;
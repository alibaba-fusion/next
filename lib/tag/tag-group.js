'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Group, _Component);

    function Group() {
        (0, _classCallCheck3.default)(this, Group);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Group.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            prefix = _props.prefix,
            children = _props.children,
            rtl = _props.rtl,
            others = (0, _objectWithoutProperties3.default)(_props, ['className', 'prefix', 'children', 'rtl']);

        var clazz = (0, _classnames2.default)((prefix || 'next-') + 'tag-group', className);

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({ className: clazz, dir: rtl ? 'rtl' : undefined }, others),
            children
        );
    };

    return Group;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.any,
    children: _propTypes2.default.node,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    rtl: false
}, _temp);
Group.displayName = 'Group';
exports.default = Group;
module.exports = exports['default'];
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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pickOthers = _util.obj.pickOthers;
var Inner = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Inner, _Component);

    function Inner() {
        (0, _classCallCheck3.default)(this, Inner);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Inner.prototype.render = function render() {
        var _cx;

        var _props = this.props,
            prefix = _props.prefix,
            className = _props.className,
            closeable = _props.closeable,
            placement = _props.placement,
            children = _props.children,
            role = _props.role,
            rtl = _props.rtl;


        var others = pickOthers(Object.keys(Inner.propTypes), this.props);
        var newClassName = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'drawer'] = true, _cx[prefix + 'drawer-' + placement] = true, _cx[prefix + 'closeable'] = closeable, _cx[className] = !!className, _cx));

        var ariaProps = {
            role: role,
            'aria-modal': 'true'
        };

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, ariaProps, {
                className: newClassName
            }, others, {
                dir: rtl ? 'rtl' : undefined
            }),
            children
        );
    };

    return Inner;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    className: _propTypes2.default.string,
    closeable: _propTypes2.default.bool,
    role: _propTypes2.default.string,
    placement: _propTypes2.default.oneOfType(['top', 'right', 'bottom', 'left']),
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    prefix: 'next-',
    closeable: true,
    role: 'dialog'
}, _temp);
Inner.displayName = 'Inner';
exports.default = Inner;
module.exports = exports['default'];
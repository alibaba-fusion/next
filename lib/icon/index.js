'use strict';

exports.__esModule = true;

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

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _iconFont = require('./icon-font');

var _iconFont2 = _interopRequireDefault(_iconFont);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Icon
 */
var Icon = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Icon, _Component);

    function Icon() {
        (0, _classCallCheck3.default)(this, Icon);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Icon.prototype.render = function render() {
        var _cx;

        /* eslint-disable no-unused-vars*/
        var _props = this.props,
            prefix = _props.prefix,
            type = _props.type,
            size = _props.size,
            className = _props.className,
            rtl = _props.rtl,
            style = _props.style,
            children = _props.children;

        var others = _util.obj.pickOthers((0, _extends3.default)({}, Icon.propTypes), this.props);

        var classes = (0, _classnames2.default)((_cx = {}, _cx[prefix + 'icon'] = true, _cx[prefix + 'icon-' + type] = !!type, _cx['' + prefix + size] = !!size && typeof size === 'string', _cx[className] = !!className, _cx));

        if (rtl && ['arrow-left', 'arrow-right', 'arrow-double-left', 'arrow-double-right', 'switch', 'sorting', 'descending', 'ascending'].indexOf(type) !== -1) {
            others.dir = 'rtl';
        }

        var sizeStyle = typeof size === 'number' ? {
            width: size,
            height: size,
            lineHeight: size + 'px',
            fontSize: size
        } : {};

        return _react2.default.createElement(
            'i',
            (0, _extends3.default)({}, others, {
                style: (0, _extends3.default)({}, sizeStyle, style),
                className: classes
            }),
            children
        );
    };

    return Icon;
}(_react.Component), _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    /**
     * 指定显示哪种图标
     */
    type: _propTypes2.default.string,
    children: _propTypes2.default.node,
    /**
     * 指定图标大小
     * <br/>**可选值**<br/> xxs, xs, small, medium, large, xl, xxl, xxxl, inherit
     */
    size: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl', 'inherit']), _propTypes2.default.number]),
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
}), _class.defaultProps = {
    prefix: 'next-',
    size: 'medium'
}, _class._typeMark = 'icon', _temp);
Icon.displayName = 'Icon';


Icon.createFromIconfontCN = _iconFont2.default;
exports.default = _configProvider2.default.config(Icon);
module.exports = exports['default'];
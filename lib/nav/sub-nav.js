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

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Nav.SubNav
 * @description 继承自 `Menu.SubMenu` 的能力请查看 `Menu.SubMenu` 文档
 */
var SubNav = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(SubNav, _Component);

    function SubNav() {
        (0, _classCallCheck3.default)(this, SubNav);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    SubNav.prototype.render = function render() {
        var _classNames;

        var _context = this.context,
            prefix = _context.prefix,
            iconOnly = _context.iconOnly,
            hasArrow = _context.hasArrow,
            mode = _context.mode;
        var _props = this.props,
            className = _props.className,
            icon = _props.icon,
            label = _props.label,
            children = _props.children,
            level = _props.level,
            others = (0, _objectWithoutProperties3.default)(_props, ['className', 'icon', 'label', 'children', 'level']);

        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'nav-sub-nav-item'] = true, _classNames[className] = !!className, _classNames));
        var iconEl = typeof icon === 'string' ? _react2.default.createElement(_icon2.default, { className: prefix + 'nav-icon', type: icon }) : icon;
        // 这里是为 iconOnly 模式下，添加默认的展开按钮
        // 只有在 inline 模式下 或 popup模式的第一层级，才需要添加默认的按钮
        if (iconOnly && hasArrow && (mode === 'inline' || level === 1 && mode === 'popup')) {
            iconEl = _react2.default.createElement(_icon2.default, {
                className: prefix + 'nav-icon-only-arrow',
                type: mode === 'popup' ? 'arrow-right' : 'arrow-down'
            });
        }
        var newLabel = [iconEl ? (0, _react.cloneElement)(iconEl, { key: 'icon' }) : null, _react2.default.createElement(
            'span',
            { key: 'label' },
            label
        )];

        return _react2.default.createElement(
            _menu2.default.SubMenu,
            (0, _extends3.default)({
                className: cls,
                label: newLabel,
                level: level
            }, others),
            children
        );
    };

    return SubNav;
}(_react.Component), _class.menuChildType = 'submenu', _class.propTypes = {
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="your type" />`
     */
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    /**
     * 标签内容
     */
    label: _propTypes2.default.node,
    /**
     * 是否可选
     */
    selectable: _propTypes2.default.bool,
    /**
     * 导航项和子导航
     */
    children: _propTypes2.default.node
}, _class.defaultProps = {
    selectable: false
}, _class.contextTypes = {
    prefix: _propTypes2.default.string,
    mode: _propTypes2.default.string,
    iconOnly: _propTypes2.default.bool,
    hasArrow: _propTypes2.default.bool
}, _temp);
SubNav.displayName = 'SubNav';
exports.default = SubNav;
module.exports = exports['default'];
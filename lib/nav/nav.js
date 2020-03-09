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

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Nav
 * @description 继承自 `Menu` 的能力请查看 `Menu` 文档
 */
var Nav = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Nav, _Component);

    function Nav(props) {
        (0, _classCallCheck3.default)(this, Nav);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

        _this.getMenuRef = _this.getMenuRef.bind(_this);
        return _this;
    }

    Nav.prototype.getChildContext = function getChildContext() {
        var _props = this.props,
            prefix = _props.prefix,
            direction = _props.direction,
            mode = _props.mode,
            iconOnly = _props.iconOnly,
            hasTooltip = _props.hasTooltip,
            hasArrow = _props.hasArrow;
        var isCollapse = this.context.isCollapse;


        return {
            prefix: prefix,
            mode: direction === 'hoz' ? 'popup' : mode,
            iconOnly: 'iconOnly' in this.props ? iconOnly : isCollapse,
            hasTooltip: hasTooltip,
            hasArrow: hasArrow
        };
    };

    Nav.prototype.getMenuRef = function getMenuRef(ref) {
        this.menu = ref;
    };

    Nav.prototype.render = function render() {
        var _classNames, _classNames2;

        // eslint-disable-next-line
        var _props2 = this.props,
            prefix = _props2.prefix,
            className = _props2.className,
            style = _props2.style,
            children = _props2.children,
            type = _props2.type,
            direction = _props2.direction,
            activeDirection = _props2.activeDirection,
            mode = _props2.mode,
            triggerType = _props2.triggerType,
            inlineIndent = _props2.inlineIndent,
            openMode = _props2.openMode,
            popupAlign = _props2.popupAlign,
            popupClassName = _props2.popupClassName,
            iconOnly = _props2.iconOnly,
            hasArrow = _props2.hasArrow,
            hasTooltip = _props2.hasTooltip,
            embeddable = _props2.embeddable,
            _popupProps = _props2.popupProps,
            rtl = _props2.rtl,
            others = (0, _objectWithoutProperties3.default)(_props2, ['prefix', 'className', 'style', 'children', 'type', 'direction', 'activeDirection', 'mode', 'triggerType', 'inlineIndent', 'openMode', 'popupAlign', 'popupClassName', 'iconOnly', 'hasArrow', 'hasTooltip', 'embeddable', 'popupProps', 'rtl']);
        var isCollapse = this.context.isCollapse;


        var newIconOnly = 'iconOnly' in this.props ? iconOnly : isCollapse;

        var realActiveDirection = activeDirection;
        if (realActiveDirection && (direction === 'hoz' && (realActiveDirection === 'left' || realActiveDirection === 'right') || direction === 'ver' && (realActiveDirection === 'top' || realActiveDirection === 'bottom'))) {
            realActiveDirection = null;
        }

        if (!newIconOnly && realActiveDirection === undefined) {
            realActiveDirection = direction === 'hoz' ? 'bottom' : type === 'line' ? 'right' : 'left';
        }

        var cls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'nav'] = true, _classNames['' + prefix + type] = type, _classNames[prefix + 'active'] = realActiveDirection, _classNames['' + prefix + realActiveDirection] = realActiveDirection, _classNames[prefix + 'icon-only'] = newIconOnly, _classNames[prefix + 'no-arrow'] = !hasArrow, _classNames[prefix + 'nav-embeddable'] = embeddable, _classNames[className] = !!className, _classNames));
        var newStyle = newIconOnly ? (0, _extends3.default)({}, style, { width: '58px' }) : style;

        var props = {
            prefix: prefix,
            direction: direction,
            openMode: openMode,
            triggerType: triggerType,
            mode: direction === 'hoz' ? 'popup' : mode,
            popupAlign: direction === 'hoz' ? 'follow' : popupAlign,
            inlineIndent: newIconOnly ? 0 : inlineIndent,
            hasSelectedIcon: false,
            popupAutoWidth: true,
            selectMode: 'single',
            itemClassName: prefix + 'nav-item',
            popupClassName: (0, _classnames2.default)((_classNames2 = {}, _classNames2[cls.replace(prefix + 'icon-only', '').replace(prefix + 'nav-embeddable', '')] = mode === 'popup', _classNames2[prefix + 'icon-only'] = newIconOnly && mode === 'inline', _classNames2[popupClassName] = !!popupClassName, _classNames2)),
            popupProps: function popupProps(popupItemProps) {
                return (0, _extends3.default)({
                    offset: direction === 'hoz' && popupItemProps.level === 1 ? [0, 2] : [-2, 0]
                }, _popupProps);
            }
        };

        return _react2.default.createElement(
            _menu2.default,
            (0, _extends3.default)({
                className: cls,
                style: newStyle
            }, props, others, {
                ref: this.getMenuRef
            }),
            children
        );
    };

    return Nav;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    pure: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    /**
     * 导航项和子导航
     */
    children: _propTypes2.default.node,
    /**
     * 导航类型
     * @enumdesc 普通, 主要, 次要, 线形
     */
    type: _propTypes2.default.oneOf(['normal', 'primary', 'secondary', 'line']),
    /**
     * 导航布局
     * @enumdesc 水平, 垂直
     */
    direction: _propTypes2.default.oneOf(['hoz', 'ver']),
    /**
     * 横向导航条 items 和 footer 的对齐方向，在 direction 设置为 'hoz' 并且 header 存在时生效
     */
    hozAlign: _propTypes2.default.oneOf(['left', 'right']),
    /**
     * 设置组件选中状态的 active 边方向
     * @enumdesc 无, 上, 下, 左, 右
     * @default 当 direction 为 'hoz' 时，默认值为 'bottom'，当 direction 为 'ver' 时，默认值为 'left'
     */
    activeDirection: _propTypes2.default.oneOf([null, 'top', 'bottom', 'left', 'right']),
    /**
     * 子导航打开的模式（水平导航只支持弹出）
     * @eumdesc 行内, 弹出
     */
    mode: _propTypes2.default.oneOf(['inline', 'popup']),
    /**
     * 子导航打开的触发方式
     */
    triggerType: _propTypes2.default.oneOf(['click', 'hover']),
    /**
     * 内联子导航缩进距离
     */
    inlineIndent: _propTypes2.default.number,
    /**
     * 初始展开所有的子导航，只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效
     */
    defaultOpenAll: _propTypes2.default.bool,
    /**
     * 内联子导航的展开模式，同时可以展开一个同级子导航还是多个同级子导航，该属性仅在 mode 为 inline 时生效
     * @eumdesc 一个, 多个
     */
    openMode: _propTypes2.default.oneOf(['single', 'multiple']),
    /**
     * 当前选中导航项的 key 值
     */
    selectedKeys: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 初始选中导航项的 key 值
     */
    defaultSelectedKeys: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 选中或取消选中导航项触发的回调函数
     * @param {Array} selectedKeys 选中的所有导航项的 key
     * @param {Object} item 选中或取消选中的导航项
     * @param {Object} extra 额外参数
     * @param {Boolean} extra.select 是否是选中
     * @param {Array} extra.key 导航项的 key
     * @param {Object} extra.label 导航项的文本
     * @param {Array} extra.keyPath 导航项 key 的路径
     */
    onSelect: _propTypes2.default.func,
    /**
     * 弹出子导航的对齐方式（水平导航只支持 follow ）
     * @eumdesc Item 顶端对齐, Nav 顶端对齐
     */
    popupAlign: _propTypes2.default.oneOf(['follow', 'outside']),
    /**
     * 弹出子导航的自定义类名
     */
    popupClassName: _propTypes2.default.string,
    /**
     * 是否只显示图标
     */
    iconOnly: _propTypes2.default.bool,
    /**
     * 是否显示右侧的箭头（仅在 iconOnly=true 时生效）
     */
    hasArrow: _propTypes2.default.bool,
    /**
     * 是否有 ToolTips （仅在 iconOnly=true 时生效）
     */
    hasTooltip: _propTypes2.default.bool,
    /**
     * 自定义导航头部
     */
    header: _propTypes2.default.node,
    /**
     * 自定义导航尾部
     */
    footer: _propTypes2.default.node,
    /**
     * 是否开启嵌入式模式，一般用于Layout的布局中，开启后没有默认背景、外层border、box-shadow，可以配合`<Nav style={{lineHeight: '100px'}}>` 自定义高度
     */
    embeddable: _propTypes2.default.bool,
    popupProps: _propTypes2.default.object
}, _class.defaultProps = {
    prefix: 'next-',
    pure: false,
    type: 'normal',
    direction: 'ver',
    hozAlign: 'left',
    mode: 'inline',
    triggerType: 'click',
    inlineIndent: 20,
    defaultOpenAll: false,
    openMode: 'multiple',
    defaultSelectedKeys: [],
    popupAlign: 'follow',
    hasTooltip: false,
    embeddable: false,
    hasArrow: true,
    popupProps: {}
}, _class.childContextTypes = {
    prefix: _propTypes2.default.string,
    mode: _propTypes2.default.string,
    iconOnly: _propTypes2.default.bool,
    hasTooltip: _propTypes2.default.bool,
    hasArrow: _propTypes2.default.bool
}, _class.contextTypes = {
    isCollapse: _propTypes2.default.bool
}, _temp);
Nav.displayName = 'Nav';
exports.default = _configProvider2.default.config(Nav);
module.exports = exports['default'];
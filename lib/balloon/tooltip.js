'use strict';

exports.__esModule = true;
exports.default = undefined;

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

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _inner = require('./inner');

var _inner2 = _interopRequireDefault(_inner);

var _alignMap = require('./alignMap');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = _overlay2.default.Popup;


var alignMap = _alignMap.normalMap;
/** Balloon.Tooltip */
var Tooltip = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Tooltip, _React$Component);

    function Tooltip() {
        (0, _classCallCheck3.default)(this, Tooltip);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Tooltip.prototype.render = function render() {
        var _props = this.props,
            id = _props.id,
            className = _props.className,
            align = _props.align,
            style = _props.style,
            prefix = _props.prefix,
            trigger = _props.trigger,
            children = _props.children,
            popupContainer = _props.popupContainer,
            popupProps = _props.popupProps,
            popupClassName = _props.popupClassName,
            popupStyle = _props.popupStyle,
            followTrigger = _props.followTrigger,
            triggerType = _props.triggerType,
            autoFocus = _props.autoFocus,
            alignEdge = _props.alignEdge,
            rtl = _props.rtl,
            others = (0, _objectWithoutProperties3.default)(_props, ['id', 'className', 'align', 'style', 'prefix', 'trigger', 'children', 'popupContainer', 'popupProps', 'popupClassName', 'popupStyle', 'followTrigger', 'triggerType', 'autoFocus', 'alignEdge', 'rtl']);


        var trOrigin = 'trOrigin';
        if (rtl) {
            others.rtl = true;
            trOrigin = 'rtlTrOrigin';
        }

        alignMap = alignEdge ? _alignMap.edgeMap : _alignMap.normalMap;

        var transformOrigin = alignMap[align][trOrigin];
        var _offset = alignMap[align].offset;
        var _style = (0, _extends3.default)({ transformOrigin: transformOrigin }, style);

        var content = _react2.default.createElement(
            _inner2.default,
            (0, _extends3.default)({}, others, {
                id: id,
                prefix: prefix,
                closable: false,
                isTooltip: true,
                className: className,
                style: _style,
                align: align,
                rtl: rtl,
                alignEdge: alignEdge
            }),
            children
        );

        var triggerProps = {};
        triggerProps['aria-describedby'] = id;
        triggerProps.tabIndex = '0';

        var newTriggerType = triggerType;

        if (triggerType === 'hover' && id) {
            newTriggerType = ['focus', 'hover'];
        }

        var ariaTrigger = id ? _react2.default.cloneElement(trigger, triggerProps) : trigger;

        var newTrigger = (0, _util.getDisabledCompatibleTrigger)(_react2.default.isValidElement(ariaTrigger) ? ariaTrigger : _react2.default.createElement(
            'span',
            null,
            ariaTrigger
        ));

        return _react2.default.createElement(
            Popup,
            (0, _extends3.default)({
                role: 'tooltip',
                container: popupContainer,
                followTrigger: followTrigger,
                trigger: newTrigger,
                triggerType: newTriggerType,
                align: alignMap[align].align,
                offset: _offset,
                delay: 0,
                className: popupClassName,
                style: popupStyle,
                rtl: rtl,
                autoFocus: triggerType === 'focus' ? false : autoFocus,
                shouldUpdatePosition: true,
                needAdjust: false
            }, popupProps),
            content
        );
    };

    return Tooltip;
}(_react2.default.Component), _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内联样式
     */
    style: _propTypes2.default.object,
    /**
     * tooltip的内容
     */
    children: _propTypes2.default.any,
    /**
     * 弹出层位置
     * @enumdesc 上, 右, 下, 左, 上左, 上右, 下左, 下右, 左上, 左下, 右上, 右下 及其 两两组合
     */
    align: _propTypes2.default.oneOf(['t', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br', 'lt', 'lb', 'rt', 'rb']),
    /**
     * 触发元素
     */
    trigger: _propTypes2.default.any,
    /**
     * 触发行为
     * 鼠标悬浮,  鼠标点击('hover', 'click')或者它们组成的数组，如 ['hover', 'click'], 强烈不建议使用'focus'，若有复杂交互，推荐使用triggerType为click的Balloon组件
     */
    triggerType: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * 弹层组件style，透传给Popup
     */
    popupStyle: _propTypes2.default.object,
    /**
     * 弹层组件className，透传给Popup
     */
    popupClassName: _propTypes2.default.string,
    /**
     * 弹层组件属性，透传给Popup
     */
    popupProps: _propTypes2.default.object,
    /**
     * 是否pure render
     */
    pure: _propTypes2.default.bool,
    /**
     * 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数。
     */
    popupContainer: _propTypes2.default.any,
    /**
     * 是否跟随滚动
     */
    followTrigger: _propTypes2.default.bool,
    /**
     * 弹层id, 传入值才会支持无障碍
     */
    id: _propTypes2.default.string
}, _class.defaultProps = {
    triggerType: 'hover',
    prefix: 'next-',
    align: 'b',
    trigger: _react2.default.createElement('span', null)
}, _temp);
Tooltip.displayName = 'Tooltip';
exports.default = Tooltip;
module.exports = exports['default'];
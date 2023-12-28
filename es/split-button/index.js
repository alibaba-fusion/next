import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import Icon from '../icon';
import Button from '../button';
import Overlay from '../overlay';
import Menu from '../menu';
import ConfigProvider from '../config-provider';
import { dom, obj, func } from '../util';
var Popup = Overlay.Popup;
/**
 * SplitButton
 */
var SplitButton = /** @class */ (function (_super) {
    __extends(SplitButton, _super);
    function SplitButton(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.selectMenuItem = function (keys) {
            var _a;
            var others = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                others[_i - 1] = arguments[_i];
            }
            if (!('selectedKeys' in _this.props)) {
                _this.setState({
                    selectedKeys: keys,
                });
            }
            (_a = _this.props).onSelect.apply(_a, __spreadArray([keys], __read(others), false));
        };
        _this.clickMenuItem = function (key) {
            var _a;
            var others = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                others[_i - 1] = arguments[_i];
            }
            (_a = _this.props).onItemClick.apply(_a, __spreadArray([key], __read(others), false));
            _this.onVisibleChange(false, 'menuSelect');
        };
        _this.onPopupOpen = function () {
            if (_this.props.autoWidth && _this.wrapper && _this.menu) {
                dom.setStyle(_this.menu, {
                    width: _this.wrapper.offsetWidth,
                });
            }
        };
        _this.onVisibleChange = function (visible, reason) {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: visible,
                });
            }
            _this.props.onVisibleChange(visible, reason);
        };
        _this._menuRefHandler = function (ref) {
            _this.menu = findDOMNode(ref);
            var refFn = _this.props.menuProps.ref;
            if (typeof refFn === 'function') {
                refFn(ref);
            }
        };
        _this._wrapperRefHandler = function (ref) {
            _this.wrapper = findDOMNode(ref);
        };
        _this.state = {
            selectedKeys: props.defaultSelectedKeys,
            visible: props.defaultVisible,
        };
        return _this;
    }
    SplitButton.getDerivedStateFromProps = function (props) {
        var st = {};
        if ('visible' in props) {
            st.visible = props.visible;
        }
        if ('selectedKeys' in props) {
            st.selectedKeys = props.selectedKeys;
        }
        return st;
    };
    SplitButton.prototype.componentDidMount = function () {
        // 由于定位目标是 wrapper，如果弹层默认展开，wrapper 还未渲染，didMount 后强制再渲染一次，弹层重新定位
        if (this.state.visible) {
            this.forceUpdate();
        }
    };
    SplitButton.prototype.render = function () {
        var _a, _b, _c;
        var _this = this;
        var _d = this.props, prefix = _d.prefix, label = _d.label, size = _d.size, type = _d.type, component = _d.component, ghost = _d.ghost, className = _d.className, style = _d.style, children = _d.children, triggerProps = _d.triggerProps, popupAlign = _d.popupAlign, popupTriggerType = _d.popupTriggerType, popupStyle = _d.popupStyle, popupClassName = _d.popupClassName, popupProps = _d.popupProps, popupContainer = _d.popupContainer, followTrigger = _d.followTrigger, selectMode = _d.selectMode, menuProps = _d.menuProps, leftButtonProps = _d.leftButtonProps, disabled = _d.disabled, others = __rest(_d, ["prefix", "label", "size", "type", "component", "ghost", "className", "style", "children", "triggerProps", "popupAlign", "popupTriggerType", "popupStyle", "popupClassName", "popupProps", "popupContainer", "followTrigger", "selectMode", "menuProps", "leftButtonProps", "disabled"]);
        var state = this.state;
        var classNames = classnames((_a = {},
            _a["".concat(prefix, "split-btn")] = true,
            _a), className);
        var sharedBtnProps = {
            type: type,
            size: size,
            component: component,
            ghost: ghost,
            disabled: disabled,
        };
        var triggerClassNames = classnames((_b = {},
            _b["".concat(prefix, "split-btn-trigger")] = true,
            _b["".concat(prefix, "expand")] = state.visible,
            _b.opened = state.visible,
            _b));
        var iconCls = classnames((_c = {},
            _c["".concat(prefix, "split-btn-symbol-fold")] = true,
            _c));
        var trigger = (React.createElement(Button, __assign({}, sharedBtnProps, triggerProps, { className: triggerClassNames }),
            React.createElement(Icon, { type: "arrow-down", className: iconCls })));
        return (React.createElement(Button.Group, __assign({}, obj.pickOthers(SplitButton.propTypes, others), { className: classNames, style: style, size: size, ref: this._wrapperRefHandler }),
            React.createElement(Button, __assign({}, sharedBtnProps, leftButtonProps), label),
            React.createElement(Popup, __assign({}, popupProps, { followTrigger: followTrigger, visible: state.visible, onVisibleChange: this.onVisibleChange, trigger: trigger, triggerType: popupTriggerType, align: popupAlign, container: popupContainer, target: function () { return _this.wrapper; }, style: popupStyle, shouldUpdatePosition: true, className: popupClassName, onOpen: this.onPopupOpen }),
                React.createElement("div", { className: "".concat(prefix, "split-btn-spacing-tb") },
                    React.createElement(Menu, __assign({}, menuProps, { selectMode: selectMode, selectedKeys: state.selectedKeys, onSelect: this.selectMenuItem, onItemClick: this.clickMenuItem, ref: this._menuRefHandler }), children)))));
    };
    SplitButton.propTypes = {
        prefix: PropTypes.string,
        style: PropTypes.object,
        /**
         * 按钮的类型
         */
        type: PropTypes.oneOf(['normal', 'primary', 'secondary']),
        /**
         * 按钮组的尺寸
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * 主按钮的文案
         */
        label: PropTypes.node,
        /**
         * 设置标签类型
         */
        component: PropTypes.oneOf(['button', 'a']),
        /**
         * 是否为幽灵按钮
         */
        ghost: PropTypes.oneOf(['light', 'dark', false, true]),
        /**
         * 默认激活的菜单项（用法同 Menu 非受控）
         */
        defaultSelectedKeys: PropTypes.array,
        /**
         * 激活的菜单项（用法同 Menu 受控）
         */
        selectedKeys: PropTypes.array,
        /**
         * 菜单的选择模式
         */
        selectMode: PropTypes.oneOf(['single', 'multiple']),
        /**
         * 选择菜单项时的回调，参考 Menu
         */
        onSelect: PropTypes.func,
        /**
         * 点击菜单项时的回调，参考 Menu
         */
        onItemClick: PropTypes.func,
        /**
         * 触发按钮的属性（支持 Button 的所有属性透传）
         */
        triggerProps: PropTypes.object,
        /**
         * 弹层菜单的宽度是否与按钮组一致
         */
        autoWidth: PropTypes.bool,
        /**
         * 弹层是否显示
         */
        visible: PropTypes.bool,
        /**
         * 弹层默认是否显示
         */
        defaultVisible: PropTypes.bool,
        /**
         * 弹层显示状态变化时的回调函数
         * @param {Boolean} visible 弹层显示状态
         * @param {String} type 触发弹层显示或隐藏的来源 menuSelect 表示由menu触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: PropTypes.func,
        /**
         * 弹层的触发方式
         */
        popupTriggerType: PropTypes.oneOf(['click', 'hover']),
        /**
         * 弹层对齐方式, 详情见Overlay align
         */
        popupAlign: PropTypes.string,
        /**
         * 弹层自定义样式
         */
        popupStyle: PropTypes.object,
        /**
         * 弹层自定义样式类
         */
        popupClassName: PropTypes.string,
        /**
         * 透传给弹层的属性
         */
        popupProps: PropTypes.object,
        /**
         * 弹层容器
         */
        popupContainer: PropTypes.any,
        /**
         * 是否跟随滚动
         */
        followTrigger: PropTypes.bool,
        /**
         * 透传给 Menu 的属性
         */
        menuProps: PropTypes.object,
        /**
         * 透传给 左侧按钮 的属性
         */
        leftButtonProps: PropTypes.object,
        className: PropTypes.string,
        children: PropTypes.any,
    };
    SplitButton.defaultProps = {
        prefix: 'next-',
        type: 'normal',
        size: 'medium',
        autoWidth: true,
        popupTriggerType: 'click',
        onVisibleChange: func.noop,
        onItemClick: func.noop,
        onSelect: func.noop,
        defaultSelectedKeys: [],
        menuProps: {},
        leftButtonProps: {},
    };
    return SplitButton;
}(React.Component));
SplitButton.Item = Menu.Item;
SplitButton.Divider = Menu.Divider;
SplitButton.Group = Menu.Group;
export default ConfigProvider.config(polyfill(SplitButton));

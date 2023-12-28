import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import Button from '../button';
import Icon from '../icon';
import Menu from '../menu';
import Overlay from '../overlay';
import ConfigProvider from '../config-provider';
import { obj, func } from '../util';
var Popup = Overlay.Popup;
/**
 * MenuButton
 */
var MenuButton = /** @class */ (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.clickMenuItem = function (key) {
            var _a;
            var others = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                others[_i - 1] = arguments[_i];
            }
            var selectMode = _this.props.selectMode;
            (_a = _this.props).onItemClick.apply(_a, __spreadArray([key], __read(others), false));
            if (selectMode === 'multiple') {
                return;
            }
            _this.onPopupVisibleChange(false, 'menuSelect');
        };
        _this.selectMenu = function (keys) {
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
        _this.onPopupOpen = function () {
            var button = findDOMNode(_this);
            if (_this.props.autoWidth && button && _this.menu) {
                _this.menu.style.width = "".concat(button.offsetWidth, "px");
            }
        };
        _this.onPopupVisibleChange = function (visible, type) {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: visible,
                });
            }
            _this.props.onVisibleChange(visible, type);
        };
        _this._menuRefHandler = function (ref) {
            _this.menu = findDOMNode(ref);
            var refFn = _this.props.menuProps.ref;
            if (typeof refFn === 'function') {
                refFn(ref);
            }
        };
        _this.state = {
            selectedKeys: props.defaultSelectedKeys,
            visible: props.defaultVisible,
        };
        return _this;
    }
    MenuButton.getDerivedStateFromProps = function (props) {
        var st = {};
        if ('visible' in props) {
            st.visible = props.visible;
        }
        if ('selectedKeys' in props) {
            st.selectedKeys = props.selectedKeys;
        }
        return st;
    };
    MenuButton.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, style = _c.style, className = _c.className, label = _c.label, popupTriggerType = _c.popupTriggerType, popupContainer = _c.popupContainer, popupStyle = _c.popupStyle, popupClassName = _c.popupClassName, popupProps = _c.popupProps, followTrigger = _c.followTrigger, selectMode = _c.selectMode, menuProps = _c.menuProps, children = _c.children, others = __rest(_c, ["prefix", "style", "className", "label", "popupTriggerType", "popupContainer", "popupStyle", "popupClassName", "popupProps", "followTrigger", "selectMode", "menuProps", "children"]);
        var state = this.state;
        var classNames = classnames((_a = {},
            _a["".concat(prefix, "menu-btn")] = true,
            _a["".concat(prefix, "expand")] = state.visible,
            _a.opened = state.visible,
            _a), className);
        var popupClassNames = classnames((_b = {},
            _b["".concat(prefix, "menu-btn-popup")] = true,
            _b), popupClassName);
        var trigger = (React.createElement(Button, __assign({ style: style, className: classNames }, obj.pickOthers(MenuButton.propTypes, others)),
            label,
            " ",
            React.createElement(Icon, { type: "arrow-down", className: "".concat(prefix, "menu-btn-arrow") })));
        return (React.createElement(Popup, __assign({}, popupProps, { followTrigger: followTrigger, visible: state.visible, onVisibleChange: this.onPopupVisibleChange, trigger: trigger, triggerType: popupTriggerType, container: popupContainer, onOpen: this.onPopupOpen, style: popupStyle, className: popupClassNames }),
            React.createElement("div", { className: "".concat(prefix, "menu-btn-spacing-tb") },
                React.createElement(Menu, __assign({}, menuProps, { ref: this._menuRefHandler, selectedKeys: state.selectedKeys, selectMode: selectMode, onSelect: this.selectMenu, onItemClick: this.clickMenuItem }), children))));
    };
    MenuButton.propTypes = {
        prefix: PropTypes.string,
        /**
         * 按钮上的文本内容
         */
        label: PropTypes.node,
        /**
         * 弹层是否与按钮宽度相同
         */
        autoWidth: PropTypes.bool,
        /**
         * 弹层触发方式
         */
        popupTriggerType: PropTypes.oneOf(['click', 'hover']),
        /**
         * 弹层容器
         */
        popupContainer: PropTypes.any,
        /**
         * 弹层展开状态
         */
        visible: PropTypes.bool,
        /**
         * 弹层默认是否展开
         */
        defaultVisible: PropTypes.bool,
        /**
         * 弹层在显示和隐藏触发的事件
         */
        onVisibleChange: PropTypes.func,
        /**
         * 弹层自定义样式
         */
        popupStyle: PropTypes.object,
        /**
         * 弹层自定义样式类
         */
        popupClassName: PropTypes.string,
        /**
         * 弹层属性透传
         */
        popupProps: PropTypes.object,
        /**
         * 是否跟随滚动
         */
        followTrigger: PropTypes.bool,
        /**
         * 默认激活的菜单项（用法同 Menu 非受控）
         */
        defaultSelectedKeys: PropTypes.array,
        /**
         * 激活的菜单项（用法同 Menu 受控）
         */
        selectedKeys: PropTypes.array,
        /**
         * 菜单的选择模式，同 Menu
         */
        selectMode: PropTypes.oneOf(['single', 'multiple']),
        /**
         * 点击菜单项后的回调，同 Menu
         */
        onItemClick: PropTypes.func,
        /**
         * 选择菜单后的回调，同 Menu
         */
        onSelect: PropTypes.func,
        /**
         * 菜单属性透传
         */
        menuProps: PropTypes.object,
        style: PropTypes.object,
        className: PropTypes.string,
        children: PropTypes.any,
    };
    MenuButton.defaultProps = {
        prefix: 'next-',
        autoWidth: true,
        popupTriggerType: 'click',
        onVisibleChange: func.noop,
        onItemClick: func.noop,
        onSelect: func.noop,
        defaultSelectedKeys: [],
        menuProps: {},
    };
    return MenuButton;
}(React.Component));
MenuButton.Item = Menu.Item;
MenuButton.Group = Menu.Group;
MenuButton.Divider = Menu.Divider;
export default ConfigProvider.config(polyfill(MenuButton), {
    componentName: 'MenuButton',
});

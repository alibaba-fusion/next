import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import Icon from '../icon';
import Button from '../button';
import Overlay from '../overlay';
import ConfigProvider from '../config-provider';
import { dom, obj, func } from '../util';
import Menu from '../menu';
var Popup = Overlay.Popup;
var SplitButton = /** @class */ (function (_super) {
    __extends(SplitButton, _super);
    function SplitButton() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.state = {
            selectedKeys: _this.props.defaultSelectedKeys,
            visible: _this.props.defaultVisible,
        };
        _this.wrapper = null;
        _this.menu = null;
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
        return _this;
    }
    SplitButton.getDerivedStateFromProps = function (nextProps) {
        var st = {};
        if ('visible' in nextProps) {
            st.visible = nextProps.visible;
        }
        if ('selectedKeys' in nextProps) {
            st.selectedKeys = nextProps.selectedKeys;
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
        type: PropTypes.oneOf(['normal', 'primary', 'secondary']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        label: PropTypes.node,
        component: PropTypes.oneOf(['button', 'a']),
        ghost: PropTypes.oneOf(['light', 'dark', false, true]),
        defaultSelectedKeys: PropTypes.array,
        selectedKeys: PropTypes.array,
        selectMode: PropTypes.oneOf(['single', 'multiple']),
        onSelect: PropTypes.func,
        onItemClick: PropTypes.func,
        triggerProps: PropTypes.object,
        autoWidth: PropTypes.bool,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        popupTriggerType: PropTypes.oneOf(['click', 'hover']),
        popupAlign: PropTypes.string,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupProps: PropTypes.object,
        popupContainer: PropTypes.any,
        followTrigger: PropTypes.bool,
        menuProps: PropTypes.object,
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
    SplitButton.Item = Menu.Item;
    SplitButton.Divider = Menu.Divider;
    SplitButton.Group = Menu.Group;
    return SplitButton;
}(React.Component));
export default ConfigProvider.config(polyfill(SplitButton));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = require("classnames");
var icon_1 = require("../icon");
var button_1 = require("../button");
var overlay_1 = require("../overlay");
var menu_1 = require("../menu");
var config_provider_1 = require("../config-provider");
var util_1 = require("../util");
var Popup = overlay_1.default.Popup;
/**
 * SplitButton
 */
var SplitButton = /** @class */ (function (_super) {
    tslib_1.__extends(SplitButton, _super);
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
            (_a = _this.props).onSelect.apply(_a, tslib_1.__spreadArray([keys], tslib_1.__read(others), false));
        };
        _this.clickMenuItem = function (key) {
            var _a;
            var others = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                others[_i - 1] = arguments[_i];
            }
            (_a = _this.props).onItemClick.apply(_a, tslib_1.__spreadArray([key], tslib_1.__read(others), false));
            _this.onVisibleChange(false, 'menuSelect');
        };
        _this.onPopupOpen = function () {
            if (_this.props.autoWidth && _this.wrapper && _this.menu) {
                util_1.dom.setStyle(_this.menu, {
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
            _this.menu = (0, react_dom_1.findDOMNode)(ref);
            var refFn = _this.props.menuProps.ref;
            if (typeof refFn === 'function') {
                refFn(ref);
            }
        };
        _this._wrapperRefHandler = function (ref) {
            _this.wrapper = (0, react_dom_1.findDOMNode)(ref);
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
        var _d = this.props, prefix = _d.prefix, label = _d.label, size = _d.size, type = _d.type, component = _d.component, ghost = _d.ghost, className = _d.className, style = _d.style, children = _d.children, triggerProps = _d.triggerProps, popupAlign = _d.popupAlign, popupTriggerType = _d.popupTriggerType, popupStyle = _d.popupStyle, popupClassName = _d.popupClassName, popupProps = _d.popupProps, popupContainer = _d.popupContainer, followTrigger = _d.followTrigger, selectMode = _d.selectMode, menuProps = _d.menuProps, leftButtonProps = _d.leftButtonProps, disabled = _d.disabled, others = tslib_1.__rest(_d, ["prefix", "label", "size", "type", "component", "ghost", "className", "style", "children", "triggerProps", "popupAlign", "popupTriggerType", "popupStyle", "popupClassName", "popupProps", "popupContainer", "followTrigger", "selectMode", "menuProps", "leftButtonProps", "disabled"]);
        var state = this.state;
        var classNames = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "split-btn")] = true,
            _a), className);
        var sharedBtnProps = {
            type: type,
            size: size,
            component: component,
            ghost: ghost,
            disabled: disabled,
        };
        var triggerClassNames = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "split-btn-trigger")] = true,
            _b["".concat(prefix, "expand")] = state.visible,
            _b.opened = state.visible,
            _b));
        var iconCls = (0, classnames_1.default)((_c = {},
            _c["".concat(prefix, "split-btn-symbol-fold")] = true,
            _c));
        var trigger = (react_1.default.createElement(button_1.default, tslib_1.__assign({}, sharedBtnProps, triggerProps, { className: triggerClassNames }),
            react_1.default.createElement(icon_1.default, { type: "arrow-down", className: iconCls })));
        return (react_1.default.createElement(button_1.default.Group, tslib_1.__assign({}, util_1.obj.pickOthers(SplitButton.propTypes, others), { className: classNames, style: style, size: size, ref: this._wrapperRefHandler }),
            react_1.default.createElement(button_1.default, tslib_1.__assign({}, sharedBtnProps, leftButtonProps), label),
            react_1.default.createElement(Popup, tslib_1.__assign({}, popupProps, { followTrigger: followTrigger, visible: state.visible, onVisibleChange: this.onVisibleChange, trigger: trigger, triggerType: popupTriggerType, align: popupAlign, container: popupContainer, target: function () { return _this.wrapper; }, style: popupStyle, shouldUpdatePosition: true, className: popupClassName, onOpen: this.onPopupOpen }),
                react_1.default.createElement("div", { className: "".concat(prefix, "split-btn-spacing-tb") },
                    react_1.default.createElement(menu_1.default, tslib_1.__assign({}, menuProps, { selectMode: selectMode, selectedKeys: state.selectedKeys, onSelect: this.selectMenuItem, onItemClick: this.clickMenuItem, ref: this._menuRefHandler }), children)))));
    };
    SplitButton.propTypes = {
        prefix: prop_types_1.default.string,
        style: prop_types_1.default.object,
        /**
         * 按钮的类型
         */
        type: prop_types_1.default.oneOf(['normal', 'primary', 'secondary']),
        /**
         * 按钮组的尺寸
         */
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
        /**
         * 主按钮的文案
         */
        label: prop_types_1.default.node,
        /**
         * 设置标签类型
         */
        component: prop_types_1.default.oneOf(['button', 'a']),
        /**
         * 是否为幽灵按钮
         */
        ghost: prop_types_1.default.oneOf(['light', 'dark', false, true]),
        /**
         * 默认激活的菜单项（用法同 Menu 非受控）
         */
        defaultSelectedKeys: prop_types_1.default.array,
        /**
         * 激活的菜单项（用法同 Menu 受控）
         */
        selectedKeys: prop_types_1.default.array,
        /**
         * 菜单的选择模式
         */
        selectMode: prop_types_1.default.oneOf(['single', 'multiple']),
        /**
         * 选择菜单项时的回调，参考 Menu
         */
        onSelect: prop_types_1.default.func,
        /**
         * 点击菜单项时的回调，参考 Menu
         */
        onItemClick: prop_types_1.default.func,
        /**
         * 触发按钮的属性（支持 Button 的所有属性透传）
         */
        triggerProps: prop_types_1.default.object,
        /**
         * 弹层菜单的宽度是否与按钮组一致
         */
        autoWidth: prop_types_1.default.bool,
        /**
         * 弹层是否显示
         */
        visible: prop_types_1.default.bool,
        /**
         * 弹层默认是否显示
         */
        defaultVisible: prop_types_1.default.bool,
        /**
         * 弹层显示状态变化时的回调函数
         * @param {Boolean} visible 弹层显示状态
         * @param {String} type 触发弹层显示或隐藏的来源 menuSelect 表示由menu触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: prop_types_1.default.func,
        /**
         * 弹层的触发方式
         */
        popupTriggerType: prop_types_1.default.oneOf(['click', 'hover']),
        /**
         * 弹层对齐方式, 详情见Overlay align
         */
        popupAlign: prop_types_1.default.string,
        /**
         * 弹层自定义样式
         */
        popupStyle: prop_types_1.default.object,
        /**
         * 弹层自定义样式类
         */
        popupClassName: prop_types_1.default.string,
        /**
         * 透传给弹层的属性
         */
        popupProps: prop_types_1.default.object,
        /**
         * 弹层容器
         */
        popupContainer: prop_types_1.default.any,
        /**
         * 是否跟随滚动
         */
        followTrigger: prop_types_1.default.bool,
        /**
         * 透传给 Menu 的属性
         */
        menuProps: prop_types_1.default.object,
        /**
         * 透传给 左侧按钮 的属性
         */
        leftButtonProps: prop_types_1.default.object,
        className: prop_types_1.default.string,
        children: prop_types_1.default.any,
    };
    SplitButton.defaultProps = {
        prefix: 'next-',
        type: 'normal',
        size: 'medium',
        autoWidth: true,
        popupTriggerType: 'click',
        onVisibleChange: util_1.func.noop,
        onItemClick: util_1.func.noop,
        onSelect: util_1.func.noop,
        defaultSelectedKeys: [],
        menuProps: {},
        leftButtonProps: {},
    };
    return SplitButton;
}(react_1.default.Component));
SplitButton.Item = menu_1.default.Item;
SplitButton.Divider = menu_1.default.Divider;
SplitButton.Group = menu_1.default.Group;
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(SplitButton));

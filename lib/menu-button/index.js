"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = require("prop-types");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = require("classnames");
var button_1 = require("../button");
var icon_1 = require("../icon");
var menu_1 = require("../menu");
var overlay_1 = require("../overlay");
var config_provider_1 = require("../config-provider");
var util_1 = require("../util");
var Popup = overlay_1.default.Popup;
/**
 * MenuButton
 */
var MenuButton = /** @class */ (function (_super) {
    tslib_1.__extends(MenuButton, _super);
    function MenuButton(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.clickMenuItem = function (key) {
            var _a;
            var others = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                others[_i - 1] = arguments[_i];
            }
            var selectMode = _this.props.selectMode;
            (_a = _this.props).onItemClick.apply(_a, tslib_1.__spreadArray([key], tslib_1.__read(others), false));
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
            (_a = _this.props).onSelect.apply(_a, tslib_1.__spreadArray([keys], tslib_1.__read(others), false));
        };
        _this.onPopupOpen = function () {
            var button = (0, react_dom_1.findDOMNode)(_this);
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
            _this.menu = (0, react_dom_1.findDOMNode)(ref);
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
        var _c = this.props, prefix = _c.prefix, style = _c.style, className = _c.className, label = _c.label, popupTriggerType = _c.popupTriggerType, popupContainer = _c.popupContainer, popupStyle = _c.popupStyle, popupClassName = _c.popupClassName, popupProps = _c.popupProps, followTrigger = _c.followTrigger, selectMode = _c.selectMode, menuProps = _c.menuProps, children = _c.children, others = tslib_1.__rest(_c, ["prefix", "style", "className", "label", "popupTriggerType", "popupContainer", "popupStyle", "popupClassName", "popupProps", "followTrigger", "selectMode", "menuProps", "children"]);
        var state = this.state;
        var classNames = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "menu-btn")] = true,
            _a["".concat(prefix, "expand")] = state.visible,
            _a.opened = state.visible,
            _a), className);
        var popupClassNames = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "menu-btn-popup")] = true,
            _b), popupClassName);
        var trigger = (react_1.default.createElement(button_1.default, tslib_1.__assign({ style: style, className: classNames }, util_1.obj.pickOthers(MenuButton.propTypes, others)),
            label,
            " ",
            react_1.default.createElement(icon_1.default, { type: "arrow-down", className: "".concat(prefix, "menu-btn-arrow") })));
        return (react_1.default.createElement(Popup, tslib_1.__assign({}, popupProps, { followTrigger: followTrigger, visible: state.visible, onVisibleChange: this.onPopupVisibleChange, trigger: trigger, triggerType: popupTriggerType, container: popupContainer, onOpen: this.onPopupOpen, style: popupStyle, className: popupClassNames }),
            react_1.default.createElement("div", { className: "".concat(prefix, "menu-btn-spacing-tb") },
                react_1.default.createElement(menu_1.default, tslib_1.__assign({}, menuProps, { ref: this._menuRefHandler, selectedKeys: state.selectedKeys, selectMode: selectMode, onSelect: this.selectMenu, onItemClick: this.clickMenuItem }), children))));
    };
    MenuButton.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 按钮上的文本内容
         */
        label: prop_types_1.default.node,
        /**
         * 弹层是否与按钮宽度相同
         */
        autoWidth: prop_types_1.default.bool,
        /**
         * 弹层触发方式
         */
        popupTriggerType: prop_types_1.default.oneOf(['click', 'hover']),
        /**
         * 弹层容器
         */
        popupContainer: prop_types_1.default.any,
        /**
         * 弹层展开状态
         */
        visible: prop_types_1.default.bool,
        /**
         * 弹层默认是否展开
         */
        defaultVisible: prop_types_1.default.bool,
        /**
         * 弹层在显示和隐藏触发的事件
         */
        onVisibleChange: prop_types_1.default.func,
        /**
         * 弹层自定义样式
         */
        popupStyle: prop_types_1.default.object,
        /**
         * 弹层自定义样式类
         */
        popupClassName: prop_types_1.default.string,
        /**
         * 弹层属性透传
         */
        popupProps: prop_types_1.default.object,
        /**
         * 是否跟随滚动
         */
        followTrigger: prop_types_1.default.bool,
        /**
         * 默认激活的菜单项（用法同 Menu 非受控）
         */
        defaultSelectedKeys: prop_types_1.default.array,
        /**
         * 激活的菜单项（用法同 Menu 受控）
         */
        selectedKeys: prop_types_1.default.array,
        /**
         * 菜单的选择模式，同 Menu
         */
        selectMode: prop_types_1.default.oneOf(['single', 'multiple']),
        /**
         * 点击菜单项后的回调，同 Menu
         */
        onItemClick: prop_types_1.default.func,
        /**
         * 选择菜单后的回调，同 Menu
         */
        onSelect: prop_types_1.default.func,
        /**
         * 菜单属性透传
         */
        menuProps: prop_types_1.default.object,
        style: prop_types_1.default.object,
        className: prop_types_1.default.string,
        children: prop_types_1.default.any,
    };
    MenuButton.defaultProps = {
        prefix: 'next-',
        autoWidth: true,
        popupTriggerType: 'click',
        onVisibleChange: util_1.func.noop,
        onItemClick: util_1.func.noop,
        onSelect: util_1.func.noop,
        defaultSelectedKeys: [],
        menuProps: {},
    };
    return MenuButton;
}(react_1.default.Component));
MenuButton.Item = menu_1.default.Item;
MenuButton.Group = menu_1.default.Group;
MenuButton.Divider = menu_1.default.Divider;
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(MenuButton), {
    componentName: 'MenuButton',
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var PropTypes = tslib_1.__importStar(require("prop-types"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var button_1 = tslib_1.__importDefault(require("../button"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var menu_1 = tslib_1.__importDefault(require("../menu"));
var overlay_1 = tslib_1.__importDefault(require("../overlay"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
var Popup = overlay_1.default.Popup;
/**
 * MenuButton
 */
var MenuButton = /** @class */ (function (_super) {
    tslib_1.__extends(MenuButton, _super);
    function MenuButton(props) {
        var _this = _super.call(this, props) || this;
        _this.clickMenuItem = function (key, item, event) {
            var selectMode = _this.props.selectMode;
            _this.props.onItemClick(key, item, event);
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
            var _a;
            _this.menu = (0, react_dom_1.findDOMNode)(ref);
            var refFn = (_a = _this.props.menuProps) === null || _a === void 0 ? void 0 : _a.ref;
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
        var trigger = (React.createElement(button_1.default, tslib_1.__assign({ style: style, className: classNames }, util_1.obj.pickOthers(MenuButton.propTypes, others)),
            label,
            " ",
            React.createElement(icon_1.default, { type: "arrow-down", className: "".concat(prefix, "menu-btn-arrow") })));
        return (React.createElement(Popup, tslib_1.__assign({}, popupProps, { followTrigger: followTrigger, visible: state.visible, onVisibleChange: this.onPopupVisibleChange, trigger: trigger, triggerType: popupTriggerType, container: popupContainer, onOpen: this.onPopupOpen, style: popupStyle, className: popupClassNames }),
            React.createElement("div", { className: "".concat(prefix, "menu-btn-spacing-tb") },
                React.createElement(menu_1.default, tslib_1.__assign({}, menuProps, { ref: this._menuRefHandler, selectedKeys: state.selectedKeys, selectMode: selectMode, onSelect: this.selectMenu, onItemClick: this.clickMenuItem }), children))));
    };
    MenuButton.Item = menu_1.default.Item;
    MenuButton.Group = menu_1.default.Group;
    MenuButton.Divider = menu_1.default.Divider;
    MenuButton.displayName = 'MenuButton';
    MenuButton.propTypes = {
        prefix: PropTypes.string,
        label: PropTypes.node,
        autoWidth: PropTypes.bool,
        popupTriggerType: PropTypes.oneOf(['click', 'hover']),
        popupContainer: PropTypes.any,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        onVisibleChange: PropTypes.func,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        defaultSelectedKeys: PropTypes.array,
        selectedKeys: PropTypes.array,
        selectMode: PropTypes.oneOf(['single', 'multiple']),
        onItemClick: PropTypes.func,
        onSelect: PropTypes.func,
        menuProps: PropTypes.object,
        style: PropTypes.object,
        className: PropTypes.string,
        children: PropTypes.any,
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
}(React.Component));
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(MenuButton), {
    componentName: 'MenuButton',
});

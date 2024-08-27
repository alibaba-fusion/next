import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import * as React from 'react';
import { findDOMNode } from 'react-dom';
import * as PropTypes from 'prop-types';
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
            var _a;
            _this.menu = findDOMNode(ref);
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
    MenuButton.Item = Menu.Item;
    MenuButton.Group = Menu.Group;
    MenuButton.Divider = Menu.Divider;
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
        onVisibleChange: func.noop,
        onItemClick: func.noop,
        onSelect: func.noop,
        defaultSelectedKeys: [],
        menuProps: {},
    };
    return MenuButton;
}(React.Component));
export default ConfigProvider.config(polyfill(MenuButton), {
    componentName: 'MenuButton',
});

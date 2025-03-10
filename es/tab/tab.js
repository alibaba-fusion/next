import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { KEYCODE, obj } from '../util';
import TabNav from './tabs/nav';
import TabContent from './tabs/content';
import { toArray } from './tabs/utils';
import zhCN from '../locale/zh-cn';
var noop = function () { };
/** Tab */
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTriggerEvent = function (eventType, key) {
            var _a = _this.props, triggerType = _a.triggerType, onClick = _a.onClick, onChange = _a.onChange;
            if (triggerType === eventType) {
                onClick(key);
                _this.setActiveKey(key);
                if (_this.state.activeKey !== key) {
                    onChange(key);
                }
            }
        };
        _this.onNavKeyDown = function (e) {
            var keyCode = e.keyCode;
            var disableKeyboard = _this.props.disableKeyboard;
            if (disableKeyboard) {
                return;
            }
            if (keyCode >= KEYCODE.LEFT && keyCode <= KEYCODE.DOWN) {
                e.preventDefault();
            }
            var newKey;
            if (keyCode === KEYCODE.RIGHT || keyCode === KEYCODE.DOWN) {
                newKey = _this.getNextActiveKey(true);
                // @ts-expect-error newKey 不可能为数字 0，此处是用于 getNextActiveKey 里的逻辑不够严谨导致
                _this.handleTriggerEvent(_this.props.triggerType, newKey);
            }
            else if (keyCode === KEYCODE.LEFT || keyCode === KEYCODE.UP) {
                newKey = _this.getNextActiveKey(false);
                // @ts-expect-error newKey 不可能为数字 0，此处是用于 getNextActiveKey 里的逻辑不够严谨导致
                _this.handleTriggerEvent(_this.props.triggerType, newKey);
            }
        };
        _this.state = {
            activeKey: _this.getDefaultActiveKey(props),
        };
        return _this;
    }
    Tab.getDerivedStateFromProps = function (props, state) {
        if (props.activeKey !== undefined && state.activeKey !== "".concat(props.activeKey)) {
            return {
                activeKey: "".concat(props.activeKey),
            };
        }
        return {};
    };
    Tab.prototype.componentDidUpdate = function (prevProps) {
        // @ts-expect-error 未考虑 children 小于等于 1 个的场景
        var preChildLen = (prevProps.children && prevProps.children.length) || 0;
        var curChildLen = 
        // @ts-expect-error 未考虑 children 小于等于 1 个的场景
        (this.props.children && this.props.children.length) || 0;
        if (preChildLen !== 0 &&
            curChildLen !== 0 &&
            !('activeKey' in this.props) &&
            !this.isActiveKeyExist(this.state.activeKey)) {
            var activeKey = this.getDefaultActiveKey(this.props);
            if (activeKey) {
                this.setState({
                    activeKey: activeKey,
                });
            }
        }
    };
    Tab.prototype.getDefaultActiveKey = function (props) {
        var activeKey = props.activeKey === undefined ? props.defaultActiveKey : props.activeKey;
        if (activeKey === undefined) {
            React.Children.forEach(props.children, function (child, index) {
                if (activeKey !== undefined)
                    return;
                if (React.isValidElement(child)) {
                    if (!child.props.disabled) {
                        // @ts-expect-error index 应转为 string
                        activeKey = child.key || index;
                    }
                }
            });
        }
        return activeKey !== undefined ? "".concat(activeKey) : undefined;
    };
    Tab.prototype.getNextActiveKey = function (isNext) {
        var _this = this;
        var children = [];
        React.Children.forEach(this.props.children, function (child) {
            if (React.isValidElement(child)) {
                if (!child.props.disabled) {
                    if (isNext) {
                        children.push(child);
                    }
                    else {
                        children.unshift(child);
                    }
                }
            }
        });
        var length = children.length;
        var key = length && children[0].key;
        children.forEach(function (child, i) {
            if (child.key === _this.state.activeKey) {
                if (i === length - 1) {
                    key = children[0].key;
                }
                else {
                    key = children[i + 1].key;
                }
            }
        });
        return key;
    };
    Tab.prototype.isActiveKeyExist = function (activeKey) {
        var exist = false;
        React.Children.forEach(this.props.children, function (child, index) {
            if (exist)
                return;
            if (React.isValidElement(child)) {
                if (!child.props.disabled) {
                    var key = child.key || index;
                    if (activeKey === "".concat(key)) {
                        exist = true;
                    }
                }
            }
        });
        return exist;
    };
    Tab.prototype.setActiveKey = function (key) {
        var activeKey = this.state.activeKey;
        // 如果 key 没变，或者受控状态下，则跳过
        if (key === activeKey || 'activeKey' in this.props) {
            return;
        }
        this.setState({
            activeKey: key,
        });
    };
    Tab.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, animation = _b.animation, shape = _b.shape, size = _b.size, extra = _b.extra, excessMode = _b.excessMode, tabPosition = _b.tabPosition, tabRender = _b.tabRender, triggerType = _b.triggerType, lazyLoad = _b.lazyLoad, unmountInactiveTabs = _b.unmountInactiveTabs, popupProps = _b.popupProps, navStyle = _b.navStyle, navClassName = _b.navClassName, contentStyle = _b.contentStyle, contentClassName = _b.contentClassName, className = _b.className, onClose = _b.onClose, children = _b.children, rtl = _b.rtl, device = _b.device, locale = _b.locale, icons = _b.icons, showAdd = _b.showAdd, onAdd = _b.onAdd, addIcon = _b.addIcon, others = __rest(_b, ["prefix", "animation", "shape", "size", "extra", "excessMode", "tabPosition", "tabRender", "triggerType", "lazyLoad", "unmountInactiveTabs", "popupProps", "navStyle", "navClassName", "contentStyle", "contentClassName", "className", "onClose", "children", "rtl", "device", "locale", "icons", "showAdd", "onAdd", "addIcon"]);
        var activeKey = this.state.activeKey;
        var tabs = toArray(children);
        var newPosition = tabPosition;
        if (rtl && ['left', 'right'].indexOf(tabPosition) >= 0) {
            newPosition = tabPosition === 'left' ? 'right' : 'left';
        }
        var classNames = classnames((_a = {},
            _a["".concat(prefix, "tabs")] = true,
            _a["".concat(prefix, "tabs-").concat(shape)] = shape,
            _a["".concat(prefix, "tabs-vertical")] = shape === 'wrapped' && ['left', 'right'].indexOf(tabPosition) >= 0,
            _a["".concat(prefix, "tabs-scrollable")] = true,
            _a["".concat(prefix, "tabs-").concat(newPosition)] = shape === 'wrapped',
            _a["".concat(prefix + size)] = size,
            _a), className);
        var navProps = {
            prefix: prefix,
            rtl: rtl,
            animation: animation,
            activeKey: activeKey,
            excessMode: excessMode,
            extra: extra,
            tabs: tabs,
            tabPosition: tabPosition,
            tabRender: tabRender,
            triggerType: triggerType,
            popupProps: popupProps,
            onClose: onClose,
            onTriggerEvent: this.handleTriggerEvent,
            onKeyDown: this.onNavKeyDown,
            style: navStyle,
            className: navClassName,
            locale: locale,
            icons: icons,
            showAdd: showAdd,
            addIcon: addIcon,
            onAdd: onAdd,
        };
        var contentProps = {
            prefix: prefix,
            activeKey: activeKey,
            lazyLoad: lazyLoad,
            unmountInactiveTabs: unmountInactiveTabs,
            style: contentStyle,
            className: contentClassName,
        };
        var tabChildren = [
            React.createElement(TabNav, __assign({ key: "tab-nav" }, navProps)),
            React.createElement(TabContent, __assign({ key: "tab-content" }, contentProps), tabs),
        ];
        if (tabPosition === 'bottom') {
            tabChildren.reverse();
        }
        return (React.createElement("div", __assign({ dir: rtl ? 'rtl' : undefined, className: classNames }, obj.pickOthers(Tab.propTypes, others)), tabChildren));
    };
    Tab.displayName = 'Tab';
    Tab.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        device: PropTypes.oneOf(['tablet', 'desktop', 'phone']),
        activeKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        defaultActiveKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        shape: PropTypes.oneOf(['pure', 'wrapped', 'text', 'capsule']),
        animation: PropTypes.bool,
        excessMode: PropTypes.oneOf(['slide', 'dropdown']),
        tabPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
        size: PropTypes.oneOf(['small', 'medium']),
        triggerType: PropTypes.oneOf(['hover', 'click']),
        lazyLoad: PropTypes.bool,
        unmountInactiveTabs: PropTypes.bool,
        navStyle: PropTypes.object,
        navClassName: PropTypes.string,
        contentStyle: PropTypes.object,
        contentClassName: PropTypes.string,
        extra: PropTypes.node,
        disableKeyboard: PropTypes.bool,
        onClick: PropTypes.func,
        onChange: PropTypes.func,
        onClose: PropTypes.func,
        tabRender: PropTypes.func,
        popupProps: PropTypes.object,
        children: PropTypes.any,
        className: PropTypes.string,
        locale: PropTypes.object,
        icons: PropTypes.shape({
            prev: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            next: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            dropdown: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
        }),
        showAdd: PropTypes.bool,
        onAdd: PropTypes.func,
        addIcon: PropTypes.node,
    };
    Tab.defaultProps = {
        prefix: 'next-',
        shape: 'pure',
        size: 'medium',
        animation: true,
        tabPosition: 'top',
        excessMode: 'slide',
        triggerType: 'click',
        lazyLoad: true,
        unmountInactiveTabs: false,
        disableKeyboard: false,
        onClick: noop,
        onChange: noop,
        onClose: noop,
        locale: zhCN.Tab,
        icons: {},
    };
    return Tab;
}(Component));
export default polyfill(Tab);

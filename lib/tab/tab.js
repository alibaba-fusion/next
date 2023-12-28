"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var util_1 = require("../util");
var nav_1 = require("./tabs/nav");
var content_1 = require("./tabs/content");
var utils_1 = require("./tabs/utils");
var zh_cn_1 = require("../locale/zh-cn");
var noop = function () { };
/** Tab */
var Tab = /** @class */ (function (_super) {
    tslib_1.__extends(Tab, _super);
    function Tab(props, context) {
        var _this = _super.call(this, props, context) || this;
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
            if (keyCode >= util_1.KEYCODE.LEFT && keyCode <= util_1.KEYCODE.DOWN) {
                e.preventDefault();
            }
            var newKey;
            if (keyCode === util_1.KEYCODE.RIGHT || keyCode === util_1.KEYCODE.DOWN) {
                newKey = _this.getNextActiveKey(true);
                _this.handleTriggerEvent(_this.props.triggerType, newKey);
            }
            else if (keyCode === util_1.KEYCODE.LEFT || keyCode === util_1.KEYCODE.UP) {
                newKey = _this.getNextActiveKey(false);
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
        var preChildLen = (prevProps.children && prevProps.children.length) || 0;
        var curChildLen = (this.props.children && this.props.children.length) || 0;
        if (preChildLen !== 0 &&
            curChildLen !== 0 &&
            !('activeKey' in this.props) & !this.isActiveKeyExist(this.state.activeKey)) {
            var activeKey = this.getDefaultActiveKey(this.props);
            if (activeKey) {
                // eslint-disable-next-line react/no-did-update-set-state
                this.setState({
                    activeKey: activeKey,
                });
            }
        }
    };
    Tab.prototype.getDefaultActiveKey = function (props) {
        var activeKey = props.activeKey === undefined ? props.defaultActiveKey : props.activeKey;
        if (activeKey === undefined) {
            react_1.default.Children.forEach(props.children, function (child, index) {
                if (activeKey !== undefined)
                    return;
                if (react_1.default.isValidElement(child)) {
                    if (!child.props.disabled) {
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
        react_1.default.Children.forEach(this.props.children, function (child) {
            if (react_1.default.isValidElement(child)) {
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
        react_1.default.Children.forEach(this.props.children, function (child, index) {
            if (exist)
                return;
            if (react_1.default.isValidElement(child)) {
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
        var _b = this.props, prefix = _b.prefix, animation = _b.animation, shape = _b.shape, size = _b.size, extra = _b.extra, excessMode = _b.excessMode, tabPosition = _b.tabPosition, tabRender = _b.tabRender, triggerType = _b.triggerType, lazyLoad = _b.lazyLoad, unmountInactiveTabs = _b.unmountInactiveTabs, popupProps = _b.popupProps, navStyle = _b.navStyle, navClassName = _b.navClassName, contentStyle = _b.contentStyle, contentClassName = _b.contentClassName, className = _b.className, onClose = _b.onClose, children = _b.children, rtl = _b.rtl, device = _b.device, locale = _b.locale, icons = _b.icons, showAdd = _b.showAdd, onAdd = _b.onAdd, addIcon = _b.addIcon, others = tslib_1.__rest(_b, ["prefix", "animation", "shape", "size", "extra", "excessMode", "tabPosition", "tabRender", "triggerType", "lazyLoad", "unmountInactiveTabs", "popupProps", "navStyle", "navClassName", "contentStyle", "contentClassName", "className", "onClose", "children", "rtl", "device", "locale", "icons", "showAdd", "onAdd", "addIcon"]);
        var activeKey = this.state.activeKey;
        var tabs = (0, utils_1.toArray)(children);
        var newPosition = tabPosition;
        if (rtl && ['left', 'right'].indexOf(tabPosition) >= 0) {
            newPosition = tabPosition === 'left' ? 'right' : 'left';
        }
        var classNames = (0, classnames_1.default)((_a = {},
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
            react_1.default.createElement(nav_1.default, tslib_1.__assign({ key: "tab-nav" }, navProps)),
            react_1.default.createElement(content_1.default, tslib_1.__assign({ key: "tab-content" }, contentProps), tabs),
        ];
        if (tabPosition === 'bottom') {
            tabChildren.reverse();
        }
        return (react_1.default.createElement("div", tslib_1.__assign({ dir: rtl ? 'rtl' : undefined, className: classNames }, util_1.obj.pickOthers(Tab.propTypes, others)), tabChildren));
    };
    Tab.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        device: prop_types_1.default.oneOf(['tablet', 'desktop', 'phone']),
        /**
         * 被激活的选项卡的 key, 赋值则tab为受控组件, 用户无法切换
         */
        activeKey: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        /**
         * 初始化时被激活的选项卡的 key
         */
        defaultActiveKey: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        /**
         * 外观形态
         */
        shape: prop_types_1.default.oneOf(['pure', 'wrapped', 'text', 'capsule']),
        /**
         * 是否开启动效
         */
        animation: prop_types_1.default.bool,
        /**
         * 选项卡过多时的滑动模式
         */
        excessMode: prop_types_1.default.oneOf(['slide', 'dropdown']),
        /**
         * 导航选项卡的位置，只适用于包裹型（wrapped）选项卡
         */
        tabPosition: prop_types_1.default.oneOf(['top', 'bottom', 'left', 'right']),
        /**
         * 尺寸
         */
        size: prop_types_1.default.oneOf(['small', 'medium']),
        /**
         * 激活选项卡的触发方式
         */
        triggerType: prop_types_1.default.oneOf(['hover', 'click']),
        /**
         * 是否延迟加载 TabItem 的内容, 默认开启, 即不提前渲染
         */
        lazyLoad: prop_types_1.default.bool,
        /**
         * 是否自动卸载未处于激活状态的选项卡
         */
        unmountInactiveTabs: prop_types_1.default.bool,
        /**
         * 导航条的自定义样式
         */
        navStyle: prop_types_1.default.object,
        /**
         * 导航条的自定义样式类
         */
        navClassName: prop_types_1.default.string,
        /**
         * 内容区容器的自定义样式
         */
        contentStyle: prop_types_1.default.object,
        /**
         * 内容区容器的自定义样式类
         */
        contentClassName: prop_types_1.default.string,
        /**
         * 导航栏附加内容
         */
        extra: prop_types_1.default.node,
        /**
         * 禁止键盘事件，设置后无法通过键盘的上下左右按键，切换当前选中的tab
         */
        disableKeyboard: prop_types_1.default.bool,
        /**
         * 点击单个选项卡时触发的回调
         */
        onClick: prop_types_1.default.func,
        /**
         * 选项卡发生切换时的事件回调
         * @param {String|Number} key 改变后的 key
         */
        onChange: prop_types_1.default.func,
        /**
         * 选项卡被关闭时的事件回调
         * @param {String|Number} key   关闭的选项卡的 key
         */
        onClose: prop_types_1.default.func,
        /**
         * 自定义选项卡模板渲染函数
         * @param {String} key 当前 Tab.Item 的 key 值
         * @param {Object} props 传给 Tab.Item 的所有属性键值对
         * @return {ReactNode} 返回自定义组件
         */
        tabRender: prop_types_1.default.func,
        /**
         * 弹层属性透传, 只有当 excessMode 为 dropdown 时生效
         */
        popupProps: prop_types_1.default.object,
        children: prop_types_1.default.any,
        className: prop_types_1.default.string,
        locale: prop_types_1.default.object,
        /**
         * 自定义组件内 icon
         */
        icons: prop_types_1.default.shape({
            prev: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
            next: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
            dropdown: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
        }),
        /**
         * 新增按钮
         */
        showAdd: prop_types_1.default.bool,
        /**
         * 新增的事件回调
         */
        onAdd: prop_types_1.default.func,
        /**
         * 自定义添加按钮
         */
        addIcon: prop_types_1.default.node,
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
        locale: zh_cn_1.default.Tab,
        icons: {},
    };
    return Tab;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Tab);

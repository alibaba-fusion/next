import { __assign, __extends } from "tslib";
import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../icon';
import Overlay from '../../overlay';
import Menu from '../../menu';
import Animate from '../../animate';
import { events, KEYCODE, dom, obj } from '../../util';
import { triggerEvents, getOffsetLT, getOffsetWH, tabsArrayShallowEqual } from './utils';
var floatLeft = { float: 'left', zIndex: 1 };
var floatRight = { float: 'right', zIndex: 1 };
var iconTypeMap = {
    dropdown: 'arrow-down',
    prev: 'arrow-left',
    next: 'arrow-right',
};
var Popup = Overlay.Popup;
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav(props) {
        var _this = _super.call(this, props) || this;
        _this.removeTab = function (key, e) {
            e && e.stopPropagation(); // stop bubble, so that it won't trigger upstream listener
            _this.props.onClose(key);
        };
        _this.debounceSetSideBtn = function () {
            clearTimeout(_this.slideTimer);
            _this.slideTimer = window.setTimeout(function () {
                _this.setSlideBtn();
            }, 100);
        };
        _this.onScroll = function () {
            // 每次滚动时更新 btn 状态
            _this.debounceSetSideBtn();
        };
        _this.onCloseKeyDown = function (key, e) {
            if (e.keyCode === KEYCODE.ENTER) {
                e.stopPropagation();
                e.preventDefault();
                _this.props.onClose(key);
            }
        };
        _this.defaultTabTemplateRender = function (key, _a) {
            var title = _a.title, closeable = _a.closeable;
            var _b = _this.props, locale = _b.locale, prefix = _b.prefix;
            var tail = closeable ? (React.createElement(Icon, { "aria-label": locale.closeAriaLabel, type: "close", tabIndex: 0, onKeyDown: function (e) { return _this.onCloseKeyDown(key, e); }, onClick: function (e) { return _this.removeTab(key, e); }, className: "".concat(prefix, "tabs-tab-close") })) : null;
            return (React.createElement("div", { className: "".concat(prefix, "tabs-tab-inner") },
                title,
                tail));
        };
        _this.scrollToActiveTab = function () {
            if (_this.activeTab &&
                _this.props.excessMode &&
                ['slide', 'dropdown'].includes(_this.props.excessMode)) {
                var activeTabWH = getOffsetWH(_this.activeTab);
                var wrapperWH = getOffsetWH(_this.wrapper);
                var activeTabOffset = getOffsetLT(_this.activeTab);
                var wrapperOffset = getOffsetLT(_this.wrapper);
                var target = _this.offset;
                if (activeTabOffset + activeTabWH > wrapperOffset + wrapperWH + 1 ||
                    activeTabOffset < wrapperOffset) {
                    _this.setOffset(_this.offset + wrapperOffset - activeTabOffset, true, true);
                    return;
                }
                _this.setOffset(target, true, true);
            }
        };
        _this.onPrevClick = function () {
            var wrapperWH = getOffsetWH(_this.wrapper);
            _this.setOffset(_this.offset + wrapperWH, true, false);
        };
        _this.onNextClick = function () {
            var wrapperWH = getOffsetWH(_this.wrapper);
            _this.setOffset(_this.offset - wrapperWH, true, false);
        };
        _this.onSelectMenuItem = function (keys) {
            var _a = _this.props, onTriggerEvent = _a.onTriggerEvent, triggerType = _a.triggerType;
            if (triggerType) {
                onTriggerEvent(triggerType, keys[0]);
            }
        };
        _this.onWindowResized = function () {
            if (_this.updateTimer) {
                clearTimeout(_this.updateTimer);
            }
            _this.updateTimer = window.setTimeout(function () {
                _this.setSlideBtn();
                _this.getDropdownItems(_this.props);
            }, 100);
        };
        _this.navRefHandler = function (ref) {
            var domNode = findDOMNode(ref);
            if (domNode instanceof HTMLUListElement) {
                _this.nav = domNode;
            }
        };
        _this.wrapperRefHandler = function (ref) {
            _this.wrapper = ref;
        };
        _this.scrollerRefHandler = function (ref) {
            _this.scroller = ref;
        };
        _this.navbarRefHandler = function (ref) {
            _this.navbar = ref;
        };
        _this.activeTabRefHandler = function (ref) {
            _this.activeTab = ref;
        };
        _this.prevBtnHandler = function (ref) {
            var domNode = findDOMNode(ref);
            if (domNode instanceof HTMLButtonElement) {
                _this.prevBtn = domNode;
            }
        };
        _this.nextBtnHandler = function (ref) {
            var domNode = findDOMNode(ref);
            if (domNode instanceof HTMLButtonElement) {
                _this.nextBtn = domNode;
            }
        };
        _this.state = {
            showBtn: false,
            dropdownTabs: [],
        };
        return _this;
    }
    Nav.prototype.componentDidMount = function () {
        if (!this.props.animation) {
            this.initialSettings();
        }
        this.computeExtraWidth();
        events.on(window, 'resize', this.onWindowResized);
    };
    Nav.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        // 此处通过延时处理，屏蔽动画带来的定位不准确问题（由于要支持 ie9，因此无法使用 transitionend）
        clearTimeout(this.scrollTimer);
        this.scrollTimer = window.setTimeout(function () {
            _this.scrollToActiveTab();
            _this.setSlideBtn();
        }, 410); // transition-duration is set to be .4s, wait for the transition finishes before re-calc
        // 更改 tabs 后如果有 dropdown 属性，应该重新执行 getDropdownItems 函数更新 dropdown 数据
        if (this.props.excessMode === 'dropdown') {
            if (!tabsArrayShallowEqual(this.props.tabs, prevProps.tabs)) {
                this.getDropdownItems(this.props);
            }
        }
        this.computeExtraWidth();
    };
    Nav.prototype.componentWillUnmount = function () {
        events.off(window, 'resize', this.onWindowResized);
    };
    Object.defineProperty(Nav.prototype, "offset", {
        /**
         * 实时获取滚动位置
         */
        get: function () {
            var scroller = this.scroller;
            if (!scroller) {
                return 0;
            }
            var scrollLeft = scroller.scrollLeft;
            return scrollLeft > 0 ? -scrollLeft : scrollLeft;
        },
        enumerable: false,
        configurable: true
    });
    Nav.prototype.initialSettings = function () {
        this.setSlideBtn();
        this.getDropdownItems(this.props);
    };
    /**
     * The key method about move
     * @param target - Position to slide to
     * @param checkSlideBtn - Need to check the slide button status or not
     * @param setActive - Need to check the active status or not
     */
    Nav.prototype.setOffset = function (target, checkSlideBtn, setActive) {
        if (checkSlideBtn === void 0) { checkSlideBtn = true; }
        if (setActive === void 0) { setActive = true; }
        var _a = this.props, tabPosition = _a.tabPosition, rtl = _a.rtl;
        var navWH = getOffsetWH(this.nav, tabPosition);
        var wrapperWH = getOffsetWH(this.wrapper);
        // target should not be great than 0, i.e. should not over slide to left-most
        target = target >= 0 ? 0 : target;
        // when need to slide, should not slide to exceed right-most
        target = target <= wrapperWH - navWH && wrapperWH - navWH < 0 ? wrapperWH - navWH : target;
        var relativeOffset = target - this.offset;
        if (this.activeTab && this.props.excessMode === 'slide' && setActive) {
            var activeTabWH = getOffsetWH(this.activeTab);
            var activeTabOffset = getOffsetLT(this.activeTab) + relativeOffset;
            var wrapperOffset = getOffsetLT(this.wrapper);
            target = this._adjustTarget({
                wrapperOffset: wrapperOffset,
                wrapperWH: wrapperWH,
                activeTabWH: activeTabWH,
                activeTabOffset: activeTabOffset,
                rtl: rtl,
                target: target,
            });
        }
        var scaleRate = 1;
        if (this.nav && this.nav.offsetWidth) {
            scaleRate = getOffsetWH(this.nav) / this.nav.offsetWidth;
        }
        var _ov = target / scaleRate;
        var offsetValue = isNaN(_ov) ? target : _ov;
        if (this.offset !== target && this.nav) {
            var divScroll = this.nav.parentElement;
            if (tabPosition === 'left' || tabPosition === 'right') {
                divScroll.scrollTo({ top: -offsetValue, left: 0, behavior: 'smooth' });
            }
            else if (!this.props.rtl) {
                divScroll.scrollTo({ top: 0, left: -offsetValue, behavior: 'smooth' });
            }
            else {
                divScroll.scrollTo({ top: 0, left: offsetValue, behavior: 'smooth' });
            }
            if (checkSlideBtn) {
                this.setSlideBtn();
            }
        }
    };
    Nav.prototype._adjustTarget = function (_a) {
        var wrapperOffset = _a.wrapperOffset, wrapperWH = _a.wrapperWH, activeTabWH = _a.activeTabWH, activeTabOffset = _a.activeTabOffset, rtl = _a.rtl, target = _a.target;
        if (
        // active tab covers wrapper right edge
        wrapperOffset + wrapperWH < activeTabOffset + activeTabWH &&
            activeTabOffset < wrapperOffset + wrapperWH) {
            if (rtl) {
                target += activeTabOffset + activeTabWH - (wrapperOffset + wrapperWH); // Move more to make active tab totally in visible zone
            }
            else {
                target -= activeTabOffset + activeTabWH - (wrapperOffset + wrapperWH) + 1;
            }
            return target;
        }
        if (
        // active tab covers wrapper left edge
        wrapperOffset < activeTabOffset + activeTabWH &&
            activeTabOffset < wrapperOffset) {
            if (rtl) {
                target -= wrapperOffset - activeTabOffset + 1;
            }
            else {
                target += wrapperOffset - activeTabOffset;
            }
            return target;
        }
        return target;
    };
    Nav.prototype._setBtnStyle = function (prev, next) {
        if (this.prevBtn && this.nextBtn) {
            var cls = 'disabled';
            this.prevBtn.disabled = !prev;
            this.nextBtn.disabled = !next;
            if (prev) {
                dom.removeClass(this.prevBtn, cls);
            }
            else {
                dom.addClass(this.prevBtn, cls);
            }
            if (next) {
                dom.removeClass(this.nextBtn, cls);
            }
            else {
                dom.addClass(this.nextBtn, cls);
            }
        }
    };
    Nav.prototype.setSlideBtn = function () {
        var tabPosition = this.props.tabPosition;
        // TEMP: 这里会受 Animate 影响，re-render 过程中 this.nav 实际上指向的是上次的 tabList 元素，建议暂时关闭 animation 解决
        var navWH = getOffsetWH(this.nav, tabPosition);
        var wrapperWH = getOffsetWH(this.wrapper, tabPosition);
        // 这里统一向下取整再做比较，否则会因为小数点精度问题导致无法对齐
        var minOffset = Math.floor(wrapperWH - navWH);
        var offset = Math.floor(this.offset);
        var next;
        var prev;
        if (minOffset >= 0 || navWH <= wrapperWH) {
            next = false;
            prev = false;
            this.setOffset(0, false); // no need to check slide again since this call is invoked from inside setSlideBtn
        }
        else if (offset < 0 && offset <= minOffset) {
            prev = true;
            next = false;
        }
        else if (offset >= 0) {
            prev = false;
            next = true;
        }
        else {
            prev = true;
            next = true;
        }
        if ((prev || next) !== this.state.showBtn) {
            this.setState({
                showBtn: prev || next,
            });
        }
        else {
            this._setBtnStyle(prev, next);
        }
    };
    Nav.prototype.getDropdownItems = function (_a) {
        var excessMode = _a.excessMode, tabs = _a.tabs;
        if (excessMode !== 'dropdown') {
            return;
        }
        var wrapperWidth = this.wrapper.offsetWidth;
        var childNodes = this.nav.childNodes;
        var index;
        var tabsWidth = 0;
        for (index = 0; index < tabs.length; index++) {
            tabsWidth += childNodes[index].offsetWidth;
            if (tabsWidth > wrapperWidth) {
                break;
            }
        }
        if (index === tabs.length) {
            this.setState({
                dropdownTabs: [],
            });
        }
        else {
            this.setState({
                dropdownTabs: tabs,
            });
        }
    };
    Nav.prototype.renderTabList = function (props, hideAdd) {
        var _this = this;
        var prefix = props.prefix, tabs = props.tabs, activeKey = props.activeKey, tabRender = props.tabRender, showAdd = props.showAdd, onAdd = props.onAdd, addIcon = props.addIcon;
        var tabTemplateFn = tabRender || this.defaultTabTemplateRender;
        var rst = [];
        React.Children.forEach(tabs, function (child) {
            var _a;
            var _b = child.props, disabled = _b.disabled, className = _b.className, onClick = _b.onClick, onMouseEnter = _b.onMouseEnter, onMouseLeave = _b.onMouseLeave, style = _b.style;
            var active = activeKey === child.key;
            var cls = classnames((_a = {},
                _a["".concat(prefix, "tabs-tab")] = true,
                _a.disabled = disabled,
                _a.active = active,
                _a), className);
            var events = {};
            if (!disabled) {
                events = {
                    onClick: _this.onNavItemClick.bind(_this, child.key, onClick),
                    onMouseEnter: _this.onNavItemMouseEnter.bind(_this, child.key, onMouseEnter),
                    onMouseLeave: _this.onNavItemMouseLeave.bind(_this, child.key, onMouseLeave),
                };
            }
            var dataProps = obj.pickAttrsWith(child.props, 'data-');
            rst.push(React.createElement("li", __assign({}, dataProps, { role: "tab", key: child.key, ref: active ? _this.activeTabRefHandler : null, "aria-hidden": disabled ? 'true' : 'false', "aria-selected": active ? 'true' : 'false', tabIndex: active ? 0 : -1, className: cls, style: style }, events), tabTemplateFn(child.key, child.props)));
        });
        if (!hideAdd && showAdd) {
            rst.push(React.createElement("li", { role: "button", className: "".concat(prefix, "tabs-tab ").concat(prefix, "tabs-add"), onClick: onAdd, key: "add" },
                React.createElement("div", { className: "".concat(prefix, "tabs-tab-inner") }, addIcon ? addIcon : React.createElement(Icon, { type: "add" }))));
        }
        return rst;
    };
    Nav.prototype.computeExtraWidth = function () {
        if (this.navbar && this.navbar.childNodes.length === 2) {
            this.navbar.childNodes[1].style.marginRight = window.getComputedStyle(this.navbar.childNodes[0]).width;
        }
    };
    Nav.prototype.onNavItemClick = function (key, callback, e) {
        this.props.onTriggerEvent(triggerEvents.CLICK, key);
        if (callback) {
            return callback(key, e);
        }
    };
    Nav.prototype.onNavItemMouseEnter = function (key, callback, e) {
        this.props.onTriggerEvent(triggerEvents.HOVER, key);
        if (callback) {
            return callback(key, e);
        }
    };
    Nav.prototype.onNavItemMouseLeave = function (key, callback, e) {
        if (callback) {
            return callback(key, e);
        }
    };
    Nav.prototype.getIcon = function (type) {
        var _a = this.props, prefix = _a.prefix, icons = _a.icons, rtl = _a.rtl;
        var iconType = iconTypeMap[type];
        var icon = React.createElement(Icon, { type: iconType, rtl: rtl, className: "".concat(prefix, "tab-icon-").concat(type) });
        if (icons && icons[type]) {
            var customIcon = icons[type];
            if (typeof customIcon === 'string') {
                icon = React.createElement(Icon, { rtl: rtl, type: customIcon });
            }
            else if (React.isValidElement(customIcon)) {
                icon = customIcon;
            }
        }
        return icon;
    };
    Nav.prototype.renderDropdownTabs = function (tabs) {
        var _this = this;
        if (tabs === void 0) { tabs = []; }
        if (!tabs.length) {
            return null;
        }
        var _a = this.props, prefix = _a.prefix, activeKey = _a.activeKey, triggerType = _a.triggerType, popupProps = _a.popupProps, rtl = _a.rtl;
        var dropdownIcon = this.getIcon('dropdown');
        var trigger = React.createElement("button", { className: "".concat(prefix, "tabs-btn-down") }, dropdownIcon);
        return (React.createElement(Popup, __assign({ key: "down", rtl: rtl, triggerType: triggerType, trigger: trigger, container: function (target) { return target.parentNode; }, className: "".concat(prefix, "tabs-bar-popup") }, popupProps),
            React.createElement(Menu, { rtl: rtl, selectedKeys: [activeKey], onSelect: this.onSelectMenuItem, selectMode: "single" }, tabs.map(function (tab) {
                var _a = tab.props, disabled = _a.disabled, onClick = _a.onClick, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave;
                var events = {};
                if (!disabled) {
                    events = {
                        onClick: _this.onNavItemClick.bind(_this, tab.key, onClick),
                        onMouseEnter: _this.onNavItemMouseEnter.bind(_this, tab.key, onMouseEnter),
                        onMouseLeave: _this.onNavItemMouseLeave.bind(_this, tab.key, onMouseLeave),
                    };
                }
                return (React.createElement(Menu.Item, __assign({ key: tab.key }, events), tab.props.title));
            }))));
    };
    Nav.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, tabPosition = _b.tabPosition, excessMode = _b.excessMode, extra = _b.extra, onKeyDown = _b.onKeyDown, animation = _b.animation, style = _b.style, className = _b.className, showAdd = _b.showAdd, onAdd = _b.onAdd, addIcon = _b.addIcon, rtl = _b.rtl;
        var state = this.state;
        var nextButton;
        var prevButton;
        var restButton;
        var showNextPrev = state.showBtn;
        if (excessMode === 'dropdown' && showNextPrev && state.dropdownTabs.length) {
            restButton = this.renderDropdownTabs(state.dropdownTabs);
            prevButton = null;
            nextButton = null;
        }
        else if (showNextPrev) {
            var prevIcon = this.getIcon('prev');
            prevButton = (React.createElement("button", { onClick: this.onPrevClick, className: "".concat(prefix, "tabs-btn-prev"), ref: this.prevBtnHandler, type: "button", key: "prev" }, prevIcon));
            var nextIcon = this.getIcon('next');
            nextButton = (React.createElement("button", { onClick: this.onNextClick, className: "".concat(prefix, "tabs-btn-next"), ref: this.nextBtnHandler, type: "button", key: "next" }, nextIcon));
            restButton = null;
        }
        else {
            nextButton = null;
            prevButton = null;
            restButton = null;
        }
        var containerCls = classnames((_a = {},
            _a["".concat(prefix, "tabs-nav-container")] = true,
            _a["".concat(prefix, "tabs-nav-container-scrolling")] = showNextPrev,
            _a["".concat(prefix, "tabs-show-add")] = showAdd,
            _a));
        var hasExtra = !!restButton || !!prevButton || !!nextButton; //  !! 将**转换为 boolean 类型
        var navCls = "".concat(prefix, "tabs-nav");
        var tabList = this.renderTabList(this.props, hasExtra);
        var container = (React.createElement("div", { className: containerCls, onKeyDown: onKeyDown, key: "nav-container" },
            React.createElement("div", { className: "".concat(prefix, "tabs-nav-wrap"), ref: this.wrapperRefHandler },
                React.createElement("div", { className: "".concat(prefix, "tabs-nav-scroll"), ref: this.scrollerRefHandler, onScroll: this.onScroll }, animation ? (React.createElement(Animate, { role: "tablist", "aria-multiselectable": false, component: "ul", className: navCls, animation: navCls, singleMode: false, ref: this.navRefHandler, afterAppear: this.initialSettings.bind(this) }, tabList)) : (React.createElement("ul", { role: "tablist", className: "".concat(navCls, " ").concat(prefix, "disable-animation"), ref: this.navRefHandler }, tabList)))),
            showAdd && hasExtra ? (React.createElement("div", { className: "".concat(navCls, "-operations") },
                prevButton,
                nextButton,
                restButton,
                React.createElement("li", { className: "".concat(prefix, "tabs-tab ").concat(prefix, "tabs-add"), onClick: onAdd, key: "add" },
                    React.createElement("div", { className: "".concat(prefix, "tabs-tab-inner") }, addIcon ? addIcon : React.createElement(Icon, { type: "add" }))))) : ([prevButton, nextButton, restButton])));
        var navChildren = [container];
        if (extra) {
            var extraProps = {
                className: "".concat(prefix, "tabs-nav-extra"),
                key: 'nav-extra',
            };
            if (tabPosition === 'top' || tabPosition === 'bottom') {
                var style_1 = rtl ? floatLeft : floatRight;
                navChildren.unshift(React.createElement("div", __assign({}, extraProps, { style: style_1 }), extra));
            }
            else {
                navChildren.push(React.createElement("div", __assign({}, extraProps), extra));
            }
        }
        var navbarCls = classnames("".concat(prefix, "tabs-bar"), className);
        return (React.createElement("div", { className: navbarCls, style: style, ref: this.navbarRefHandler }, navChildren));
    };
    Nav.displayName = 'Nav';
    Nav.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        animation: PropTypes.bool,
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        excessMode: PropTypes.string,
        extra: PropTypes.any,
        tabs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        tabPosition: PropTypes.string,
        tabRender: PropTypes.func,
        triggerType: PropTypes.string,
        popupProps: PropTypes.object,
        onTriggerEvent: PropTypes.func,
        onKeyDown: PropTypes.func,
        onClose: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        locale: PropTypes.object,
        icons: PropTypes.object,
    };
    return Nav;
}(React.Component));
export default Nav;

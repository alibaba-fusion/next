import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../icon';
import Overlay from '../../overlay';
import Menu from '../../menu';
import Animate from '../../animate';
import { events, KEYCODE } from '../../util';
import { triggerEvents, getOffsetLT, getOffsetWH, isTransformSupported } from './utils';

var noop = function noop() {};
var floatRight = { float: 'right', zIndex: 1 };
var floatLeft = { float: 'left', zIndex: 1 };
var Popup = Overlay.Popup;
var Nav = (_temp = _class = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props, context) {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.removeTab = function (key, e) {
            e && e.stopPropagation(); // stop bubble, so that it won't trigger upstream listener
            _this.props.onClose(key);
        };

        _this.onCloseKeyDown = function (key, e) {
            if (e.keyCode === KEYCODE.ENTER) {
                e.stopPropagation();
                e.preventDefault();
                _this.props.onClose(key);
            }
        };

        _this.defaultTabTemplateRender = function (key, _ref) {
            var prefix = _ref.prefix,
                title = _ref.title,
                closeable = _ref.closeable;

            var tail = closeable ? React.createElement(Icon, { type: 'close', tabIndex: '0', onKeyDown: function onKeyDown(e) {
                    return _this.onCloseKeyDown(key, e);
                }, onClick: function onClick(e) {
                    return _this.removeTab(key, e);
                }, className: prefix + 'tabs-tab-close' }) : null;
            return React.createElement(
                'div',
                { className: _this.props.prefix + 'tabs-tab-inner' },
                title,
                tail
            );
        };

        _this.scrollToActiveTab = function () {
            if (!_this.activeTab || _this.props.excessMode !== 'slide') {
                return;
            }

            var activeTabWH = getOffsetWH(_this.activeTab);
            var wrapperWH = getOffsetWH(_this.wrapper);
            var activeTabOffset = getOffsetLT(_this.activeTab);
            var wrapperOffset = getOffsetLT(_this.wrapper);

            var target = _this.offset;
            if (activeTabOffset >= wrapperOffset + wrapperWH || activeTabOffset + activeTabWH <= wrapperOffset) {
                return;
            }
            // if (activeTabOffset < wrapperOffset) {
            //     target += wrapperOffset - activeTabOffset;
            //     this.setOffset(target);
            // }
            if (wrapperOffset + wrapperWH < activeTabOffset + activeTabWH) {
                target -= activeTabOffset + activeTabWH - (wrapperOffset + wrapperWH);
                _this.setOffset(target, true, false);
            }
        };

        _this.onPrevClick = function () {
            var wrapperWH = getOffsetWH(_this.wrapper);
            _this.setOffset(_this.offset + wrapperWH);
        };

        _this.onNextClick = function () {
            var wrapperWH = getOffsetWH(_this.wrapper);
            _this.setOffset(_this.offset - wrapperWH);
        };

        _this.onSelectMenuItem = function (keys) {
            var _this$props = _this.props,
                onTriggerEvent = _this$props.onTriggerEvent,
                triggerType = _this$props.triggerType;

            onTriggerEvent(triggerType, keys[0]);
        };

        _this.onWindowResized = function () {
            if (_this.updateTimer) {
                clearTimeout(_this.updateTimer);
            }

            _this.updateTimer = setTimeout(function () {
                _this.setSlideBtn();
                _this.getDropdownItems(_this.props);
            }, 100);
        };

        _this.navRefHandler = function (ref) {
            _this.nav = findDOMNode(ref);
        };

        _this.wrapperRefHandler = function (ref) {
            _this.wrapper = ref;
        };

        _this.navbarRefHandler = function (ref) {
            _this.navbar = ref;
        };

        _this.activeTabRefHandler = function (ref) {
            _this.activeTab = ref;
        };

        _this.state = {
            next: false,
            prev: false,
            dropdownTabs: []
        };
        _this.offset = 0;
        return _this;
    }

    Nav.prototype.componentDidMount = function componentDidMount() {
        this.setSlideBtn();
        this.getDropdownItems(this.props);

        events.on(window, 'resize', this.onWindowResized);
    };

    Nav.prototype.componentDidUpdate = function componentDidUpdate() {
        var ctx = this;

        // 此处通过延时处理，屏蔽动画带来的定位不准确问题（由于要支持ie9，因此无法使用transitionend）
        clearTimeout(ctx.scrollTimer);
        ctx.scrollTimer = setTimeout(function () {
            ctx.scrollToActiveTab();
        }, 400);

        clearTimeout(ctx.slideTimer);
        ctx.slideTimer = setTimeout(function () {
            ctx.setSlideBtn();
        }, 200);
        if (this.activeTab && findDOMNode(this).contains(document.activeElement)) {
            this.activeTab.focus();
        }
    };

    Nav.prototype.componentWillUnmount = function componentWillUnmount() {
        events.off(window, 'resize', this.onWindowResized);
    };

    /**
     * The key method about move
     * @param {number} target position to slide to
     * @param {bool} checkSlideBtn need to check the slide button status or not
     * @param {bool} setActive need to check the active status or not
     */


    Nav.prototype.setOffset = function setOffset(target) {
        var checkSlideBtn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var setActive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var tabPosition = this.props.tabPosition;

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

            if (wrapperOffset + wrapperWH < activeTabOffset + activeTabWH && activeTabOffset < wrapperOffset + wrapperWH) {
                target -= activeTabOffset + activeTabWH - (wrapperOffset + wrapperWH);
            }
        }

        if (this.offset !== target) {
            this.offset = target;

            var navOffset = {};
            var navStyle = this.nav.style;

            var canTransform = isTransformSupported(navStyle);
            if (tabPosition === 'left' || tabPosition === 'right') {
                navOffset = canTransform ? {
                    value: 'translate3d(0, ' + target + 'px, 0)'
                } : {
                    name: 'top',
                    value: target + 'px'
                };
            } else {
                navOffset = canTransform ? {
                    value: 'translate3d(' + target + 'px, 0, 0)'
                } : {
                    name: 'left',
                    value: target + 'px'
                };
            }

            if (canTransform) {
                _extends(navStyle, {
                    transform: navOffset.value,
                    webkitTransform: navOffset.value,
                    mozTransform: navOffset.value
                });
            } else {
                navStyle[navOffset.name] = navOffset.value;
            }

            if (checkSlideBtn) {
                this.setSlideBtn();
            }
        }
    };

    Nav.prototype.setSlideBtn = function setSlideBtn() {
        var tabPosition = this.props.tabPosition;

        // TEMP: 这里会受 Animate 影响，re-render 过程中 this.nav 实际上指向的是上次的 tabList 元素，建议暂时关闭 animation 解决

        var navWH = getOffsetWH(this.nav, tabPosition);
        var wrapperWH = getOffsetWH(this.wrapper, tabPosition);
        var navbarWH = getOffsetWH(this.navbar, tabPosition);
        var minOffset = wrapperWH - navWH;

        var next = void 0;
        var prev = void 0;
        if (minOffset >= 0 || navWH <= navbarWH) {
            next = false;
            prev = false;
            this.setOffset(0, false); // no need to check slide again since this call is invoked from inside setSlideBtn
        } else if (this.offset < 0 && this.offset <= minOffset) {
            prev = true;
            next = false;
        } else if (this.offset >= 0) {
            prev = false;
            next = true;
        } else {
            prev = true;
            next = true;
        }

        if (next !== this.state.next || prev !== this.state.prev) {
            this.setState({
                next: next,
                prev: prev
            });
        }
    };

    Nav.prototype.getDropdownItems = function getDropdownItems(_ref2) {
        var excessMode = _ref2.excessMode,
            tabs = _ref2.tabs;

        if (excessMode !== 'dropdown') {
            return;
        }

        var wrapperWidth = this.wrapper.offsetWidth;
        var childNodes = this.nav.childNodes;

        var index = void 0;
        var tabsWidth = 0;
        for (index = 0; index < tabs.length; index++) {
            tabsWidth += childNodes[index].offsetWidth;
            if (tabsWidth > wrapperWidth) {
                break;
            }
        }

        if (index > 1) {
            index = index - 1;
            this.setState({
                dropdownTabs: tabs.slice(index)
            });
        }
    };

    Nav.prototype.renderTabList = function renderTabList(props) {
        var _this2 = this;

        var prefix = props.prefix,
            tabs = props.tabs,
            activeKey = props.activeKey,
            tabRender = props.tabRender;

        var tabTemplateFn = tabRender || this.defaultTabTemplateRender;

        var rst = [];
        React.Children.forEach(tabs, function (child) {
            var _classnames;

            var _child$props = child.props,
                disabled = _child$props.disabled,
                className = _child$props.className,
                onClick = _child$props.onClick,
                onMouseEnter = _child$props.onMouseEnter,
                onMouseLeave = _child$props.onMouseLeave,
                style = _child$props.style;
            /*eslint-disable eqeqeq*/

            var active = activeKey == child.key;
            var cls = classnames((_classnames = {}, _classnames[prefix + 'tabs-tab'] = true, _classnames.disabled = disabled, _classnames.active = active, _classnames), className);

            var events = {};

            if (!disabled) {
                events = {
                    onClick: _this2.onNavItemClick.bind(_this2, child.key, onClick),
                    onMouseEnter: _this2.onNavItemMouseEnter.bind(_this2, child.key, onMouseEnter),
                    onMouseLeave: _this2.onNavItemMouseLeave.bind(_this2, child.key, onMouseLeave)
                };
            }

            rst.push(React.createElement(
                'li',
                _extends({
                    role: 'tab',
                    key: child.key,
                    ref: active ? _this2.activeTabRefHandler : null,
                    'aria-hidden': disabled ? 'true' : 'false',
                    'aria-selected': active ? 'true' : 'false',
                    tabIndex: active ? 0 : -1,
                    className: cls,
                    style: style
                }, events),
                tabTemplateFn(child.key, child.props)
            ));
        });
        return rst;
    };

    Nav.prototype.onNavItemClick = function onNavItemClick(key, callback, e) {
        this.props.onTriggerEvent(triggerEvents.CLICK, key);
        if (callback) {
            return callback(key, e);
        }
    };

    Nav.prototype.onNavItemMouseEnter = function onNavItemMouseEnter(key, callback, e) {
        this.props.onTriggerEvent(triggerEvents.HOVER, key);
        if (callback) {
            return callback(key, e);
        }
    };

    Nav.prototype.onNavItemMouseLeave = function onNavItemMouseLeave(key, callback, e) {
        if (callback) {
            return callback(key, e);
        }
    };

    Nav.prototype.renderDropdownTabs = function renderDropdownTabs() {
        var _this3 = this;

        var tabs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (!tabs.length) {
            return null;
        }

        var _props = this.props,
            prefix = _props.prefix,
            activeKey = _props.activeKey,
            triggerType = _props.triggerType,
            popupProps = _props.popupProps;

        var trigger = React.createElement(
            'button',
            { className: prefix + 'tabs-btn-down' },
            React.createElement(Icon, { type: 'arrow-down' })
        );

        return React.createElement(
            Popup,
            _extends({ triggerType: triggerType, trigger: trigger, container: function container(target) {
                    return target.parentNode;
                } }, popupProps),
            React.createElement(
                Menu,
                { selectedKeys: [activeKey], onSelect: this.onSelectMenuItem, selectMode: 'single' },
                tabs.map(function (tab) {
                    var _tab$props = tab.props,
                        disabled = _tab$props.disabled,
                        onClick = _tab$props.onClick,
                        onMouseEnter = _tab$props.onMouseEnter,
                        onMouseLeave = _tab$props.onMouseLeave;

                    var events = {};
                    if (!disabled) {
                        events = {
                            onClick: _this3.onNavItemClick.bind(_this3, tab.key, onClick),
                            onMouseEnter: _this3.onNavItemMouseEnter.bind(_this3, tab.key, onMouseEnter),
                            onMouseLeave: _this3.onNavItemMouseLeave.bind(_this3, tab.key, onMouseLeave)
                        };
                    }
                    return React.createElement(
                        Menu.Item,
                        _extends({ key: tab.key }, events),
                        tab.props.title
                    );
                })
            )
        );
    };

    Nav.prototype.render = function render() {
        var _classnames4, _classnames5;

        var _props2 = this.props,
            prefix = _props2.prefix,
            tabPosition = _props2.tabPosition,
            excessMode = _props2.excessMode,
            extra = _props2.extra,
            onKeyDown = _props2.onKeyDown,
            animation = _props2.animation,
            style = _props2.style,
            className = _props2.className,
            rtl = _props2.rtl;

        var state = this.state;

        var nextButton = void 0;
        var prevButton = void 0;
        var restButton = void 0;

        var showNextPrev = state.prev || state.next;

        if (excessMode === 'dropdown' && state.next && state.dropdownTabs.length) {
            restButton = this.renderDropdownTabs(state.dropdownTabs);
            prevButton = null;
            nextButton = null;
        } else if (showNextPrev) {
            var _classnames2, _classnames3;

            var prevBtnCls = classnames((_classnames2 = {}, _classnames2[prefix + 'tabs-btn-prev'] = 1, _classnames2.disabled = !state.prev, _classnames2));
            var nextBtnCls = classnames((_classnames3 = {}, _classnames3[prefix + 'tabs-btn-next'] = 1, _classnames3.disabled = !state.next, _classnames3));

            prevButton = React.createElement(
                'button',
                {
                    onClick: state.prev ? this.onPrevClick : noop,
                    className: prevBtnCls },
                React.createElement(Icon, { type: 'arrow-left' })
            );

            nextButton = React.createElement(
                'button',
                {
                    onClick: state.next ? this.onNextClick : noop,
                    className: nextBtnCls },
                React.createElement(Icon, { type: 'arrow-right' })
            );
            restButton = null;
        } else {
            nextButton = null;
            prevButton = null;
            restButton = null;
        }

        var containerCls = classnames((_classnames4 = {}, _classnames4[prefix + 'tabs-nav-container'] = true, _classnames4[prefix + 'tabs-nav-container-scrolling'] = showNextPrev, _classnames4));

        var navCls = prefix + 'tabs-nav';
        var tabList = this.renderTabList(this.props);

        var container = React.createElement(
            'div',
            { className: containerCls, key: 'nav-container' },
            React.createElement(
                'div',
                { className: prefix + 'tabs-nav-wrap', ref: this.wrapperRefHandler },
                React.createElement(
                    'div',
                    { className: prefix + 'tabs-nav-scroll' },
                    animation ? React.createElement(
                        Animate,
                        { role: 'tablist', 'aria-multiselectable': false, component: 'ul', className: navCls, animation: navCls, singleMode: false, ref: this.navRefHandler },
                        tabList
                    ) : React.createElement(
                        'ul',
                        { className: navCls, ref: this.navRefHandler },
                        tabList
                    )
                )
            ),
            prevButton,
            nextButton,
            restButton
        );

        var navChildren = [container];

        if (extra) {
            var extraProps = {
                className: prefix + 'tabs-nav-extra',
                key: 'nav-extra'
            };
            if (tabPosition === 'top' || tabPosition === 'bottom') {
                var _style = rtl ? floatLeft : floatRight;
                navChildren.unshift(React.createElement(
                    'div',
                    _extends({}, extraProps, { style: _style }),
                    extra
                ));
            } else {
                navChildren.push(React.createElement(
                    'div',
                    extraProps,
                    extra
                ));
            }
        }

        var navbarCls = classnames((_classnames5 = {}, _classnames5[prefix + 'tabs-bar'] = true, _classnames5), className);

        return React.createElement(
            'div',
            { className: navbarCls, style: style, onKeyDown: onKeyDown, ref: this.navbarRefHandler },
            navChildren
        );
    };

    return Nav;
}(React.Component), _class.propTypes = {
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
    className: PropTypes.string
}, _temp);
Nav.displayName = 'Nav';


export default Nav;
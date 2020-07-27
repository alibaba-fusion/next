'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _overlay = require('../../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _menu = require('../../menu');

var _menu2 = _interopRequireDefault(_menu);

var _animate = require('../../animate');

var _animate2 = _interopRequireDefault(_animate);

var _util = require('../../util');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var floatRight = { float: 'right', zIndex: 1 };
var floatLeft = { float: 'left', zIndex: 1 };
var iconTypeMap = {
    dropdown: 'arrow-down',
    prev: 'arrow-left',
    next: 'arrow-right'
};
var Popup = _overlay2.default.Popup;
var Nav = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Nav, _React$Component);

    function Nav(props, context) {
        (0, _classCallCheck3.default)(this, Nav);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

        _this.removeTab = function (key, e) {
            e && e.stopPropagation(); // stop bubble, so that it won't trigger upstream listener
            _this.props.onClose(key);
        };

        _this.onCloseKeyDown = function (key, e) {
            if (e.keyCode === _util.KEYCODE.ENTER) {
                e.stopPropagation();
                e.preventDefault();
                _this.props.onClose(key);
            }
        };

        _this.defaultTabTemplateRender = function (key, _ref) {
            var prefix = _ref.prefix,
                title = _ref.title,
                closeable = _ref.closeable;
            var locale = _this.props.locale;

            var tail = closeable ? _react2.default.createElement(_icon2.default, {
                'aria-label': locale.closeAriaLabel,
                type: 'close',
                tabIndex: '0',
                onKeyDown: function onKeyDown(e) {
                    return _this.onCloseKeyDown(key, e);
                },
                onClick: function onClick(e) {
                    return _this.removeTab(key, e);
                },
                className: prefix + 'tabs-tab-close'
            }) : null;
            return _react2.default.createElement(
                'div',
                { className: _this.props.prefix + 'tabs-tab-inner' },
                title,
                tail
            );
        };

        _this.scrollToActiveTab = function () {
            if (_this.activeTab && ['slide', 'dropdown'].includes(_this.props.excessMode)) {
                var activeTabWH = (0, _utils.getOffsetWH)(_this.activeTab);
                var wrapperWH = (0, _utils.getOffsetWH)(_this.wrapper);
                var activeTabOffset = (0, _utils.getOffsetLT)(_this.activeTab);
                var wrapperOffset = (0, _utils.getOffsetLT)(_this.wrapper);
                var target = _this.offset;
                if (activeTabOffset >= wrapperOffset + wrapperWH || activeTabOffset + activeTabWH <= wrapperOffset) {
                    _this.setOffset(_this.offset + wrapperOffset - activeTabOffset, true, true);
                    return;
                }
                _this.setOffset(target, true, true);
            }
        };

        _this.onPrevClick = function () {
            var wrapperWH = (0, _utils.getOffsetWH)(_this.wrapper);
            _this.setOffset(_this.offset + wrapperWH, true, false);
        };

        _this.onNextClick = function () {
            var wrapperWH = (0, _utils.getOffsetWH)(_this.wrapper);
            _this.setOffset(_this.offset - wrapperWH, true, false);
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
            _this.nav = (0, _reactDom.findDOMNode)(ref);
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

        _this.prevBtnHandler = function (ref) {
            _this.prevBtn = (0, _reactDom.findDOMNode)(ref);
        };

        _this.nextBtnHandler = function (ref) {
            _this.nextBtn = (0, _reactDom.findDOMNode)(ref);
        };

        _this.state = {
            showBtn: false,
            dropdownTabs: []
        };
        _this.offset = 0;
        return _this;
    }

    Nav.prototype.componentDidMount = function componentDidMount() {
        if (!this.props.animation) {
            this.initialSettings();
        }

        _util.events.on(window, 'resize', this.onWindowResized);
    };

    Nav.prototype.componentDidUpdate = function componentDidUpdate() {
        var _this2 = this;

        // 此处通过延时处理，屏蔽动画带来的定位不准确问题（由于要支持ie9，因此无法使用transitionend）
        clearTimeout(this.scrollTimer);
        this.scrollTimer = setTimeout(function () {
            _this2.scrollToActiveTab();
        }, 410); // transition-duration is set to be .4s, wait for the transition finishes before re-calc

        clearTimeout(this.slideTimer);
        this.slideTimer = setTimeout(function () {
            _this2.setSlideBtn();
        }, 410);
    };

    Nav.prototype.componentWillUnmount = function componentWillUnmount() {
        _util.events.off(window, 'resize', this.onWindowResized);
    };

    Nav.prototype.initialSettings = function initialSettings() {
        this.setSlideBtn();
        this.getDropdownItems(this.props);
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
        var _props = this.props,
            tabPosition = _props.tabPosition,
            rtl = _props.rtl;

        var navWH = (0, _utils.getOffsetWH)(this.nav, tabPosition);
        var wrapperWH = (0, _utils.getOffsetWH)(this.wrapper);

        // target should not be great than 0, i.e. should not over slide to left-most
        target = target >= 0 ? 0 : target;
        // when need to slide, should not slide to exceed right-most
        target = target <= wrapperWH - navWH && wrapperWH - navWH < 0 ? wrapperWH - navWH : target;

        var relativeOffset = target - this.offset;
        if (this.activeTab && this.props.excessMode === 'slide' && setActive) {
            var activeTabWH = (0, _utils.getOffsetWH)(this.activeTab);
            var activeTabOffset = (0, _utils.getOffsetLT)(this.activeTab) + relativeOffset;
            var wrapperOffset = (0, _utils.getOffsetLT)(this.wrapper);
            target = this._adjustTarget({
                wrapperOffset: wrapperOffset,
                wrapperWH: wrapperWH,
                activeTabWH: activeTabWH,
                activeTabOffset: activeTabOffset,
                rtl: rtl,
                target: target
            });
        }

        if (this.offset !== target) {
            // needs move
            this.offset = target;
            var navOffset = {};
            var navStyle = this.nav.style;

            var canTransform = (0, _utils.isTransformSupported)(navStyle);
            if (tabPosition === 'left' || tabPosition === 'right') {
                navOffset = canTransform ? {
                    value: 'translate3d(0, ' + target + 'px, 0)'
                } : {
                    name: 'top',
                    value: target + 'px'
                };
            } else if (!this.props.rtl) {
                navOffset = canTransform ? {
                    value: 'translate3d(' + target + 'px, 0, 0)'
                } : {
                    name: 'left',
                    value: target + 'px'
                };
            } else {
                navOffset = canTransform ? {
                    value: 'translate3d(' + -target + 'px, 0, 0)'
                } : {
                    name: 'right',
                    value: target + 'px'
                };
            }

            if (canTransform) {
                (0, _extends3.default)(navStyle, {
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

    Nav.prototype._adjustTarget = function _adjustTarget(_ref2) {
        var wrapperOffset = _ref2.wrapperOffset,
            wrapperWH = _ref2.wrapperWH,
            activeTabWH = _ref2.activeTabWH,
            activeTabOffset = _ref2.activeTabOffset,
            rtl = _ref2.rtl,
            target = _ref2.target;

        if (
        // active tab covers wrapper right edge
        wrapperOffset + wrapperWH < activeTabOffset + activeTabWH && activeTabOffset < wrapperOffset + wrapperWH) {
            if (rtl) {
                target += // Move more to make active tab totally in visible zone
                activeTabOffset + activeTabWH - (wrapperOffset + wrapperWH);
            } else {
                target -= activeTabOffset + activeTabWH - (wrapperOffset + wrapperWH) + 1;
            }

            return target;
        }
        if (
        // active tab covers wrapper left edge
        wrapperOffset < activeTabOffset + activeTabWH && activeTabOffset < wrapperOffset) {
            if (rtl) {
                target -= wrapperOffset - activeTabOffset + 1;
            } else {
                target += wrapperOffset - activeTabOffset;
            }
            return target;
        }
        return target;
    };

    Nav.prototype._setBtnStyle = function _setBtnStyle(prev, next) {
        if (this.prevBtn && this.nextBtn) {
            var cls = 'disabled';
            this.prevBtn.disabled = !prev;
            this.nextBtn.disabled = !next;
            if (prev) {
                _util.dom.removeClass(this.prevBtn, cls);
            } else {
                _util.dom.addClass(this.prevBtn, cls);
            }
            if (next) {
                _util.dom.removeClass(this.nextBtn, cls);
            } else {
                _util.dom.addClass(this.nextBtn, cls);
            }
        }
    };

    Nav.prototype.setSlideBtn = function setSlideBtn() {
        var tabPosition = this.props.tabPosition;

        // TEMP: 这里会受 Animate 影响，re-render 过程中 this.nav 实际上指向的是上次的 tabList 元素，建议暂时关闭 animation 解决

        var navWH = (0, _utils.getOffsetWH)(this.nav, tabPosition);
        var wrapperWH = (0, _utils.getOffsetWH)(this.wrapper, tabPosition);
        var minOffset = wrapperWH - navWH;

        var next = void 0;
        var prev = void 0;
        if (minOffset >= 0 || navWH <= wrapperWH) {
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

        if ((prev || next) !== this.state.showBtn) {
            this.setState({
                showBtn: prev || next
            });
        } else {
            this._setBtnStyle(prev, next);
        }
    };

    Nav.prototype.getDropdownItems = function getDropdownItems(_ref3) {
        var excessMode = _ref3.excessMode,
            tabs = _ref3.tabs;

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

        if (index === tabs.length) {
            this.setState({
                dropdownTabs: []
            });
        } else {
            this.setState({
                dropdownTabs: tabs
            });
        }
    };

    Nav.prototype.renderTabList = function renderTabList(props) {
        var _this3 = this;

        var prefix = props.prefix,
            tabs = props.tabs,
            activeKey = props.activeKey,
            tabRender = props.tabRender;

        var tabTemplateFn = tabRender || this.defaultTabTemplateRender;

        var rst = [];
        _react2.default.Children.forEach(tabs, function (child) {
            var _classnames;

            var _child$props = child.props,
                disabled = _child$props.disabled,
                className = _child$props.className,
                onClick = _child$props.onClick,
                onMouseEnter = _child$props.onMouseEnter,
                onMouseLeave = _child$props.onMouseLeave,
                style = _child$props.style;


            var active = activeKey === child.key;
            var cls = (0, _classnames4.default)((_classnames = {}, _classnames[prefix + 'tabs-tab'] = true, _classnames.disabled = disabled, _classnames.active = active, _classnames), className);

            var events = {};

            if (!disabled) {
                events = {
                    onClick: _this3.onNavItemClick.bind(_this3, child.key, onClick),
                    onMouseEnter: _this3.onNavItemMouseEnter.bind(_this3, child.key, onMouseEnter),
                    onMouseLeave: _this3.onNavItemMouseLeave.bind(_this3, child.key, onMouseLeave)
                };
            }

            rst.push(_react2.default.createElement(
                'li',
                (0, _extends3.default)({
                    role: 'tab',
                    key: child.key,
                    ref: active ? _this3.activeTabRefHandler : null,
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
        this.props.onTriggerEvent(_utils.triggerEvents.CLICK, key);
        if (callback) {
            return callback(key, e);
        }
    };

    Nav.prototype.onNavItemMouseEnter = function onNavItemMouseEnter(key, callback, e) {
        this.props.onTriggerEvent(_utils.triggerEvents.HOVER, key);
        if (callback) {
            return callback(key, e);
        }
    };

    Nav.prototype.onNavItemMouseLeave = function onNavItemMouseLeave(key, callback, e) {
        if (callback) {
            return callback(key, e);
        }
    };

    Nav.prototype.getIcon = function getIcon(type) {
        var _props2 = this.props,
            prefix = _props2.prefix,
            icons = _props2.icons,
            rtl = _props2.rtl;

        var iconType = iconTypeMap[type];
        var icon = _react2.default.createElement(_icon2.default, {
            type: iconType,
            rtl: rtl,
            className: prefix + 'tab-icon-' + type
        });
        if (icons[type]) {
            icon = typeof icons[type] === 'string' ? _react2.default.createElement(_icon2.default, { rtl: rtl, type: icons[type] }) : icons[type];
        }

        return icon;
    };

    Nav.prototype.renderDropdownTabs = function renderDropdownTabs() {
        var _this4 = this;

        var tabs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        if (!tabs.length) {
            return null;
        }

        var _props3 = this.props,
            prefix = _props3.prefix,
            activeKey = _props3.activeKey,
            triggerType = _props3.triggerType,
            popupProps = _props3.popupProps,
            rtl = _props3.rtl;

        var dropdownIcon = this.getIcon('dropdown');

        var trigger = _react2.default.createElement(
            'button',
            { className: prefix + 'tabs-btn-down' },
            dropdownIcon
        );

        return _react2.default.createElement(
            Popup,
            (0, _extends3.default)({
                rtl: rtl,
                triggerType: triggerType,
                trigger: trigger,
                container: function container(target) {
                    return target.parentNode;
                },
                className: prefix + 'tabs-bar-popup'
            }, popupProps),
            _react2.default.createElement(
                _menu2.default,
                {
                    rtl: rtl,
                    selectedKeys: [activeKey],
                    onSelect: this.onSelectMenuItem,
                    selectMode: 'single'
                },
                tabs.map(function (tab) {
                    var _tab$props = tab.props,
                        disabled = _tab$props.disabled,
                        onClick = _tab$props.onClick,
                        onMouseEnter = _tab$props.onMouseEnter,
                        onMouseLeave = _tab$props.onMouseLeave;

                    var events = {};
                    if (!disabled) {
                        events = {
                            onClick: _this4.onNavItemClick.bind(_this4, tab.key, onClick),
                            onMouseEnter: _this4.onNavItemMouseEnter.bind(_this4, tab.key, onMouseEnter),
                            onMouseLeave: _this4.onNavItemMouseLeave.bind(_this4, tab.key, onMouseLeave)
                        };
                    }
                    return _react2.default.createElement(
                        _menu2.default.Item,
                        (0, _extends3.default)({ key: tab.key }, events),
                        tab.props.title
                    );
                })
            )
        );
    };

    Nav.prototype.render = function render() {
        var _classnames2;

        var _props4 = this.props,
            prefix = _props4.prefix,
            tabPosition = _props4.tabPosition,
            excessMode = _props4.excessMode,
            extra = _props4.extra,
            onKeyDown = _props4.onKeyDown,
            animation = _props4.animation,
            style = _props4.style,
            className = _props4.className,
            rtl = _props4.rtl;

        var state = this.state;

        var nextButton = void 0;
        var prevButton = void 0;
        var restButton = void 0;

        var showNextPrev = state.showBtn;

        if (excessMode === 'dropdown' && showNextPrev && state.dropdownTabs.length) {
            restButton = this.renderDropdownTabs(state.dropdownTabs);
            prevButton = null;
            nextButton = null;
        } else if (showNextPrev) {
            var prevIcon = this.getIcon('prev');
            prevButton = _react2.default.createElement(
                'button',
                {
                    onClick: this.onPrevClick,
                    className: prefix + 'tabs-btn-prev',
                    ref: this.prevBtnHandler
                },
                prevIcon
            );

            var nextIcon = this.getIcon('next');
            nextButton = _react2.default.createElement(
                'button',
                {
                    onClick: this.onNextClick,
                    className: prefix + 'tabs-btn-next',
                    ref: this.nextBtnHandler
                },
                nextIcon
            );
            restButton = null;
        } else {
            nextButton = null;
            prevButton = null;
            restButton = null;
        }

        var containerCls = (0, _classnames4.default)((_classnames2 = {}, _classnames2[prefix + 'tabs-nav-container'] = true, _classnames2[prefix + 'tabs-nav-container-scrolling'] = showNextPrev, _classnames2));

        var navCls = prefix + 'tabs-nav';
        var tabList = this.renderTabList(this.props);

        var container = _react2.default.createElement(
            'div',
            {
                className: containerCls,
                onKeyDown: onKeyDown,
                key: 'nav-container'
            },
            _react2.default.createElement(
                'div',
                {
                    className: prefix + 'tabs-nav-wrap',
                    ref: this.wrapperRefHandler
                },
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'tabs-nav-scroll' },
                    animation ? _react2.default.createElement(
                        _animate2.default,
                        {
                            role: 'tablist',
                            'aria-multiselectable': false,
                            component: 'ul',
                            className: navCls,
                            animation: navCls,
                            singleMode: false,
                            ref: this.navRefHandler,
                            afterAppear: this.initialSettings.bind(this)
                        },
                        tabList
                    ) : _react2.default.createElement(
                        'ul',
                        {
                            role: 'tablist',
                            className: navCls,
                            ref: this.navRefHandler
                        },
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
                navChildren.unshift(_react2.default.createElement(
                    'div',
                    (0, _extends3.default)({}, extraProps, { style: _style }),
                    extra
                ));
            } else {
                navChildren.push(_react2.default.createElement(
                    'div',
                    extraProps,
                    extra
                ));
            }
        }

        var navbarCls = (0, _classnames4.default)(prefix + 'tabs-bar', className);

        return _react2.default.createElement(
            'div',
            {
                className: navbarCls,
                style: style,
                ref: this.navbarRefHandler
            },
            navChildren
        );
    };

    return Nav;
}(_react2.default.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    animation: _propTypes2.default.bool,
    activeKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    excessMode: _propTypes2.default.string,
    extra: _propTypes2.default.any,
    tabs: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    tabPosition: _propTypes2.default.string,
    tabRender: _propTypes2.default.func,
    triggerType: _propTypes2.default.string,
    popupProps: _propTypes2.default.object,
    onTriggerEvent: _propTypes2.default.func,
    onKeyDown: _propTypes2.default.func,
    onClose: _propTypes2.default.func,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    locale: _propTypes2.default.object,
    icons: _propTypes2.default.object
}, _temp);
Nav.displayName = 'Nav';
exports.default = Nav;
module.exports = exports['default'];
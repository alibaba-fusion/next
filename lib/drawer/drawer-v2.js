'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _overlay = require('@alifd/overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _inner = require('./inner');

var _inner2 = _interopRequireDefault(_inner);

var _animate = require('../animate');

var _animate2 = _interopRequireDefault(_animate);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _scrollLocker = require('../dialog/scroll-locker');

var _scrollLocker2 = _interopRequireDefault(_scrollLocker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverlayContext = _overlay2.default.OverlayContext; /* istanbul ignore file */

var noop = _util.func.noop;

var getAnimation = function getAnimation(placement) {
    var animation = void 0;
    switch (placement) {
        case 'top':
            animation = {
                in: 'slideInDown',
                out: 'slideOutUp'
            };
            break;
        case 'bottom':
            animation = {
                in: 'slideInUp',
                out: 'slideOutDown'
            };
            break;
        case 'left':
            animation = {
                in: 'slideInLeft',
                out: 'slideOutLeft'
            };
            break;
        case 'right':
        default:
            animation = {
                in: 'slideInRight',
                out: 'slideOutRight'
            };
            break;
    }

    return animation;
};

var Drawer = function Drawer(props) {
    var _classNames, _classNames2, _classNames3;

    if (!_react.useState || !_react.useRef || !_react.useEffect) {
        _util.log.warning('need react version > 16.8.0');
        return null;
    }

    var _props$prefix = props.prefix,
        prefix = _props$prefix === undefined ? 'next-' : _props$prefix,
        _props$hasMask = props.hasMask,
        hasMask = _props$hasMask === undefined ? true : _props$hasMask,
        _props$autoFocus = props.autoFocus,
        autoFocus = _props$autoFocus === undefined ? false : _props$autoFocus,
        className = props.className,
        title = props.title,
        children = props.children,
        cache = props.cache,
        _props$closeMode = props.closeMode,
        closeMode = _props$closeMode === undefined ? ['close', 'mask', 'esc'] : _props$closeMode,
        width = props.width,
        height = props.height,
        onClose = props.onClose,
        _props$placement = props.placement,
        placement = _props$placement === undefined ? 'right' : _props$placement,
        headerStyle = props.headerStyle,
        bodyStyle = props.bodyStyle,
        pvisible = props.visible,
        _props$afterClose = props.afterClose,
        afterClose = _props$afterClose === undefined ? noop : _props$afterClose,
        _props$locale = props.locale,
        locale = _props$locale === undefined ? _zhCn2.default.Drawer : _props$locale,
        rtl = props.rtl,
        animation = props.animation,
        wrapperStyle = props.wrapperStyle,
        _props$popupContainer = props.popupContainer,
        popupContainer = _props$popupContainer === undefined ? document.body : _props$popupContainer,
        style = props.style,
        others = (0, _objectWithoutProperties3.default)(props, ['prefix', 'hasMask', 'autoFocus', 'className', 'title', 'children', 'cache', 'closeMode', 'width', 'height', 'onClose', 'placement', 'headerStyle', 'bodyStyle', 'visible', 'afterClose', 'locale', 'rtl', 'animation', 'wrapperStyle', 'popupContainer', 'style']);

    var _useState = (0, _react.useState)(pvisible || false),
        firstVisible = _useState[0],
        setFirst = _useState[1];

    var _useState2 = (0, _react.useState)(pvisible),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var getContainer = typeof popupContainer === 'string' ? function () {
        return document.getElementById(popupContainer);
    } : typeof popupContainer !== 'function' ? function () {
        return popupContainer;
    } : popupContainer;

    var _useState3 = (0, _react.useState)(getContainer()),
        container = _useState3[0],
        setContainer = _useState3[1];

    var drawerRef = (0, _react.useRef)(null);
    var wrapperRef = (0, _react.useRef)(null);
    var lastFocus = (0, _react.useRef)(null);
    var locker = (0, _react.useRef)(null);

    var _useState4 = (0, _react.useState)((0, _util.guid)()),
        uuid = _useState4[0];

    var _useContext = (0, _react.useContext)(OverlayContext),
        setVisibleOverlayToParent = _useContext.setVisibleOverlayToParent,
        otherContext = (0, _objectWithoutProperties3.default)(_useContext, ['setVisibleOverlayToParent']);

    var childIDMap = (0, _react.useRef)(new Map());
    var isAnimationEnd = (0, _react.useRef)(false); // 动效是否结束, 因为时机非常快用 state 太慢

    var _useState5 = (0, _react.useState)(),
        forceUpdate = _useState5[1];

    // 动效结束，强制重新渲染


    var markAnimationEnd = function markAnimationEnd(state) {
        isAnimationEnd.current = state;
        forceUpdate({});
    };

    var canCloseByEsc = false;
    var canCloseByMask = false;
    var closeable = false;

    var closeModeArray = Array.isArray(closeMode) ? closeMode : [closeMode];
    closeModeArray.forEach(function (mode) {
        switch (mode) {
            case 'esc':
                canCloseByEsc = true;
                break;
            case 'mask':
                canCloseByMask = true;
                break;
            case 'close':
                closeable = true;
                break;
        }
    });

    // visible 受控
    (0, _react.useEffect)(function () {
        if ('visible' in props) {
            setVisible(pvisible);
        }
    }, [pvisible]);

    // 打开遮罩后 document.body 滚动处理
    (0, _react.useEffect)(function () {
        if (visible && hasMask) {
            var _style = {
                overflow: 'hidden'
            };

            if (_util.dom.hasScroll(document.body)) {
                var scrollWidth = _util.dom.scrollbar().width;
                if (scrollWidth) {
                    _style.paddingRight = _util.dom.getStyle(document.body, 'paddingRight') + _util.dom.scrollbar().width + 'px';
                }
            }
            locker.current = _scrollLocker2.default.lock(document.body, _style);
        }
    }, [visible && hasMask]);

    var handleClose = function handleClose(targetType, e) {
        setVisibleOverlayToParent(uuid, null);
        typeof onClose === 'function' && onClose(targetType, e);
    };

    var keydownEvent = function keydownEvent(e) {
        if (e.keyCode === 27 && canCloseByEsc && !childIDMap.current.size) {
            handleClose('esc', e);
        }
    };

    // esc 键盘事件处理
    (0, _react.useEffect)(function () {
        if (visible && canCloseByEsc) {
            document.body.addEventListener('keydown', keydownEvent, false);
            return function () {
                document.body.removeEventListener('keydown', keydownEvent, false);
            };
        }
    }, [visible && canCloseByEsc]);

    // 优化: 第一次加载并且 visible=false 的情况不挂载弹窗
    (0, _react.useEffect)(function () {
        !firstVisible && visible && setFirst(true);
    }, [visible]);

    // container 异步加载情况
    (0, _react.useEffect)(function () {
        if (!container) {
            setTimeout(function () {
                setContainer(getContainer());
            });
        }
    }, [container]);

    // Drawer 关闭时候的处理。1. 结束的时候不管动效是不是已经结束都要隐藏弹窗；2. 需要把focus态还原到触发节点
    var handleExited = function handleExited() {
        if (!isAnimationEnd.current) {
            markAnimationEnd(true);
            _util.dom.setStyle(wrapperRef.current, 'display', 'none');
            _scrollLocker2.default.unlock(document.body, locker.current);

            if (autoFocus && lastFocus.current) {
                try {
                    lastFocus.current.focus();
                } finally {
                    // ignore ...
                }
                lastFocus.current = null;
            }
            afterClose();
        }
    };

    // visible? <Drawer/>: null; 这种写法会触发卸载
    (0, _react.useEffect)(function () {
        return function () {
            handleExited();
        };
    }, []);

    if (firstVisible === false || !container) {
        return null;
    }

    if (!visible && !cache && isAnimationEnd.current) {
        return null;
    }

    var handleMaskClick = function handleMaskClick(e) {
        if (!canCloseByMask) {
            return;
        }

        handleClose('maskClick', e);
    };

    var handleEnter = function handleEnter() {
        markAnimationEnd(false);
        _util.dom.setStyle(wrapperRef.current, 'display', '');
    };
    var handleEntered = function handleEntered() {
        if (autoFocus && drawerRef.current && drawerRef.current.bodyNode) {
            var focusableNodes = _util.focus.getFocusNodeList(drawerRef.current.bodyNode);
            if (focusableNodes.length > 0 && focusableNodes[0]) {
                lastFocus.current = document.activeElement;
                focusableNodes[0].focus();
            }
        }
        setVisibleOverlayToParent(uuid, drawerRef.current);
    };

    var wrapperCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'overlay-wrapper'] = true, _classNames.opened = visible, _classNames));
    var innerWrapperCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'overlay-inner'] = true, _classNames2[prefix + 'drawer-wrapper'] = true, _classNames2[prefix + 'drawer-' + placement] = true, _classNames2[className] = !!className, _classNames2));
    var drawerCls = (0, _classnames2.default)((_classNames3 = {}, _classNames3[prefix + 'drawer-v2'] = true, _classNames3[className] = !!className, _classNames3));

    var newAnimation = animation === null || animation === false ? null : animation ? animation : getAnimation(placement);

    var timeout = {
        appear: 300,
        enter: 300,
        exit: 250
    };

    var getVisibleOverlayFromChild = function getVisibleOverlayFromChild(id, node) {
        if (node) {
            childIDMap.current.set(id, node);
        } else {
            childIDMap.current.delete(id);
        }
        // 让父级也感知
        setVisibleOverlayToParent(id, node);
    };

    var nstyle = (0, _extends3.default)({
        width: width,
        height: height
    }, style);

    return _react2.default.createElement(
        OverlayContext.Provider,
        {
            value: (0, _extends3.default)({}, otherContext, {
                setVisibleOverlayToParent: getVisibleOverlayFromChild
            })
        },
        _reactDom2.default.createPortal(_react2.default.createElement(
            'div',
            { className: wrapperCls, style: wrapperStyle, ref: wrapperRef },
            hasMask ? _react2.default.createElement(
                _animate2.default.OverlayAnimate,
                {
                    visible: visible,
                    animation: newAnimation ? { in: 'fadeIn', out: 'fadeOut' } : false,
                    timeout: timeout,
                    unmountOnExit: true
                },
                _react2.default.createElement('div', { className: prefix + 'overlay-backdrop', onClick: handleMaskClick })
            ) : null,
            _react2.default.createElement(
                'div',
                { className: innerWrapperCls, style: nstyle, ref: drawerRef },
                _react2.default.createElement(
                    _animate2.default.OverlayAnimate,
                    {
                        visible: visible,
                        animation: newAnimation,
                        timeout: timeout,
                        onEnter: handleEnter,
                        onEntered: handleEntered,
                        onExited: handleExited
                    },
                    _react2.default.createElement(
                        _inner2.default,
                        (0, _extends3.default)({}, others, {
                            v2: true,
                            prefix: prefix,
                            title: title,
                            className: drawerCls,
                            locale: locale,
                            closeable: closeable,
                            rtl: rtl,
                            headerStyle: headerStyle,
                            bodyStyle: bodyStyle,
                            onClose: function onClose() {
                                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                                    args[_key] = arguments[_key];
                                }

                                return handleClose.apply(undefined, ['closeClick'].concat(args));
                            }
                        }),
                        children
                    )
                )
            )
        ), container)
    );
};

exports.default = Drawer;
module.exports = exports['default'];
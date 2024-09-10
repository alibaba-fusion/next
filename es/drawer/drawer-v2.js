import { __assign, __read, __rest, __spreadArray } from "tslib";
/* istanbul ignore file */
import React, { useState, useRef, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Overlay from '@alifd/overlay';
import Inner from './inner';
import Animate from '../animate';
import zhCN from '../locale/zh-cn';
import { log, func, dom, focus, guid } from '../util';
import scrollLocker from '../dialog/scroll-locker';
var OverlayContext = Overlay.OverlayContext;
var noop = func.noop;
var getAnimation = function (placement) {
    var animation;
    switch (placement) {
        case 'top':
            animation = {
                in: 'slideInDown',
                out: 'slideOutUp',
            };
            break;
        case 'bottom':
            animation = {
                in: 'slideInUp',
                out: 'slideOutDown',
            };
            break;
        case 'left':
            animation = {
                in: 'slideInLeft',
                out: 'slideOutLeft',
            };
            break;
        case 'right':
        default:
            animation = {
                in: 'slideInRight',
                out: 'slideOutRight',
            };
            break;
    }
    return animation;
};
var Drawer = function (props) {
    var _a, _b, _c;
    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }
    var _d = props.prefix, prefix = _d === void 0 ? 'next-' : _d, _e = props.hasMask, hasMask = _e === void 0 ? true : _e, _f = props.autoFocus, autoFocus = _f === void 0 ? false : _f, className = props.className, title = props.title, children = props.children, cache = props.cache, _g = props.closeMode, closeMode = _g === void 0 ? ['close', 'mask', 'esc'] : _g, width = props.width, height = props.height, onClose = props.onClose, _h = props.placement, placement = _h === void 0 ? 'right' : _h, headerStyle = props.headerStyle, bodyStyle = props.bodyStyle, pvisible = props.visible, _j = props.afterClose, afterClose = _j === void 0 ? noop : _j, _k = props.locale, locale = _k === void 0 ? zhCN.Drawer : _k, rtl = props.rtl, animation = props.animation, wrapperStyle = props.wrapperStyle, _l = props.popupContainer, popupContainer = _l === void 0 ? document.body : _l, style = props.style, others = __rest(props, ["prefix", "hasMask", "autoFocus", "className", "title", "children", "cache", "closeMode", "width", "height", "onClose", "placement", "headerStyle", "bodyStyle", "visible", "afterClose", "locale", "rtl", "animation", "wrapperStyle", "popupContainer", "style"]);
    var _m = __read(useState(pvisible || false), 2), firstVisible = _m[0], setFirst = _m[1];
    var _o = __read(useState(pvisible), 2), visible = _o[0], setVisible = _o[1];
    var getContainer = typeof popupContainer === 'string'
        ? function () { return document.getElementById(popupContainer); }
        : typeof popupContainer !== 'function'
            ? function () { return popupContainer; }
            : popupContainer;
    var _p = __read(useState(getContainer()), 2), container = _p[0], setContainer = _p[1];
    var drawerRef = useRef(null);
    var wrapperRef = useRef(null);
    var lastFocus = useRef(null);
    var locker = useRef(null);
    var _q = __read(useState(guid()), 1), uuid = _q[0];
    var _r = useContext(OverlayContext), setVisibleOverlayToParent = _r.setVisibleOverlayToParent, otherContext = __rest(_r, ["setVisibleOverlayToParent"]);
    var childIDMap = useRef(new Map());
    var isAnimationEnd = useRef(false); // 动效是否结束, 因为时机非常快用 state 太慢
    var _s = __read(useState(), 2), forceUpdate = _s[1];
    // 动效结束，强制重新渲染
    var markAnimationEnd = function (state) {
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
    useEffect(function () {
        if ('visible' in props) {
            setVisible(pvisible);
        }
    }, [pvisible]);
    // 打开遮罩后 document.body 滚动处理
    useEffect(function () {
        if (visible && hasMask) {
            var style_1 = {
                overflow: 'hidden',
            };
            if (dom.hasScroll(document.body)) {
                var scrollWidth = dom.scrollbar().width;
                if (scrollWidth) {
                    style_1.paddingRight = "".concat(dom.getStyle(document.body, 'paddingRight').toString() +
                        dom.scrollbar().width, "px");
                }
            }
            locker.current = scrollLocker.lock(document.body, style_1);
        }
    }, [visible && hasMask]);
    var handleClose = function (targetType, e) {
        setVisibleOverlayToParent(uuid, null);
        typeof onClose === 'function' && onClose(targetType, e);
    };
    var keydownEvent = function (e) {
        if (e.keyCode === 27 && canCloseByEsc && !childIDMap.current.size) {
            handleClose('esc', e);
        }
    };
    // esc 键盘事件处理
    useEffect(function () {
        if (visible && canCloseByEsc) {
            document.body.addEventListener('keydown', keydownEvent, false);
            return function () {
                document.body.removeEventListener('keydown', keydownEvent, false);
            };
        }
    }, [visible && canCloseByEsc]);
    // 优化: 第一次加载并且 visible=false 的情况不挂载弹窗
    useEffect(function () {
        !firstVisible && visible && setFirst(true);
    }, [visible]);
    // container 异步加载情况
    useEffect(function () {
        if (!container) {
            setTimeout(function () {
                setContainer(getContainer());
            });
        }
    }, [container]);
    // Drawer 关闭时候的处理。1. 结束的时候不管动效是不是已经结束都要隐藏弹窗；2. 需要把focus态还原到触发节点
    var handleExited = function () {
        if (!isAnimationEnd.current) {
            markAnimationEnd(true);
            dom.setStyle(wrapperRef.current, 'display', 'none');
            scrollLocker.unlock(document.body, locker.current);
            if (autoFocus && lastFocus.current) {
                try {
                    lastFocus.current.focus();
                }
                finally {
                    // ignore ...
                }
                lastFocus.current = null;
            }
            afterClose();
        }
    };
    // visible? <Drawer/>: null; 这种写法会触发卸载
    useEffect(function () {
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
    var handleMaskClick = function (e) {
        if (!canCloseByMask) {
            return;
        }
        handleClose('maskClick', e);
    };
    var handleEnter = function () {
        markAnimationEnd(false);
        dom.setStyle(wrapperRef.current, 'display', '');
    };
    var handleEntered = function () {
        if (autoFocus && drawerRef.current && drawerRef.current.bodyNode) {
            var focusableNodes = focus.getFocusNodeList(drawerRef.current.bodyNode);
            if (focusableNodes.length > 0 && focusableNodes[0]) {
                lastFocus.current = document.activeElement;
                var firstFocusableNode = focusableNodes[0];
                firstFocusableNode.focus();
            }
        }
        setVisibleOverlayToParent(uuid, drawerRef.current);
    };
    var wrapperCls = classNames((_a = {},
        _a["".concat(prefix, "overlay-wrapper")] = true,
        _a.opened = visible,
        _a));
    var innerWrapperCls = classNames((_b = {},
        _b["".concat(prefix, "overlay-inner")] = true,
        _b["".concat(prefix, "drawer-wrapper")] = true,
        _b["".concat(prefix, "drawer-").concat(placement)] = true,
        _b[className] = !!className,
        _b));
    var drawerCls = classNames((_c = {},
        _c["".concat(prefix, "drawer-v2")] = true,
        _c[className] = !!className,
        _c));
    var newAnimation = animation === null || animation === false
        ? undefined
        : animation
            ? animation
            : getAnimation(placement);
    var timeout = {
        appear: 300,
        enter: 300,
        exit: 250,
    };
    var getVisibleOverlayFromChild = function (id, node) {
        if (node) {
            childIDMap.current.set(id, node);
        }
        else {
            childIDMap.current.delete(id);
        }
        // 让父级也感知
        setVisibleOverlayToParent(id, node);
    };
    var nstyle = __assign({ width: width, height: height }, style);
    return (React.createElement(OverlayContext.Provider, { value: __assign(__assign({}, otherContext), { setVisibleOverlayToParent: getVisibleOverlayFromChild }) }, ReactDOM.createPortal(React.createElement("div", { className: wrapperCls, style: wrapperStyle, ref: wrapperRef },
        hasMask ? (React.createElement(Animate.OverlayAnimate, { visible: visible, animation: newAnimation ? { in: 'fadeIn', out: 'fadeOut' } : false, timeout: timeout, unmountOnExit: true },
            React.createElement("div", { className: "".concat(prefix, "overlay-backdrop"), onClick: handleMaskClick }))) : null,
        React.createElement("div", { className: innerWrapperCls, style: nstyle, ref: drawerRef },
            React.createElement(Animate.OverlayAnimate, { visible: visible, animation: newAnimation, timeout: timeout, onEnter: handleEnter, onEntered: handleEntered, onExited: handleExited },
                React.createElement(Inner, __assign({}, others, { v2: true, prefix: prefix, title: title, className: drawerCls, locale: locale, closeable: closeable, rtl: rtl, headerStyle: headerStyle, bodyStyle: bodyStyle, onClose: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return handleClose.apply(void 0, __spreadArray(['closeClick'], __read(args), false));
                    } }), children)))), container)));
};
Drawer.displayName = 'Drawer';
export default Drawer;

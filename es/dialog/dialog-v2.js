import { __assign, __read, __rest, __spreadArray } from "tslib";
/* istanbul ignore file */
import React, { useState, useRef, useEffect, useContext, } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Overlay from '@alifd/overlay';
import Inner from './inner';
import Animate from '../animate';
import zhCN from '../locale/zh-cn';
import { log, func, dom, focus, guid } from '../util';
import scrollLocker from './scroll-locker';
var OverlayContext = Overlay.OverlayContext;
var noop = func.noop;
var Dialog = function (props) {
    var _a, _b, _c;
    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }
    var _d = props.prefix, prefix = _d === void 0 ? 'next-' : _d, _e = props.afterClose, afterClose = _e === void 0 ? noop : _e, _f = props.hasMask, hasMask = _f === void 0 ? true : _f, _g = props.autoFocus, autoFocus = _g === void 0 ? false : _g, className = props.className, title = props.title, children = props.children, footer = props.footer, footerAlign = props.footerAlign, footerActions = props.footerActions, _h = props.onOk, onOk = _h === void 0 ? noop : _h, onCancel = props.onCancel, okProps = props.okProps, cancelProps = props.cancelProps, _j = props.locale, locale = _j === void 0 ? zhCN.Dialog : _j, rtl = props.rtl, pvisible = props.visible, _k = props.closeMode, closeMode = _k === void 0 ? ['close', 'esc'] : _k, closeIcon = props.closeIcon, _l = props.animation, animation = _l === void 0 ? { in: 'fadeInUp', out: 'fadeOutUp' } : _l, cache = props.cache, wrapperStyle = props.wrapperStyle, _m = props.popupContainer, popupContainer = _m === void 0 ? typeof document !== 'undefined' ? document.body : null : _m, dialogRender = props.dialogRender, centered = props.centered, _o = props.top, top = _o === void 0 ? centered ? 40 : 100 : _o, _p = props.bottom, bottom = _p === void 0 ? 40 : _p, _q = props.width, width = _q === void 0 ? 520 : _q, height = props.height, isFullScreen = props.isFullScreen, _r = props.overflowScroll, overflowScroll = _r === void 0 ? !isFullScreen : _r, minMargin = props.minMargin, onClose = props.onClose, style = props.style, wrapperClassName = props.wrapperClassName, others = __rest(props, ["prefix", "afterClose", "hasMask", "autoFocus", "className", "title", "children", "footer", "footerAlign", "footerActions", "onOk", "onCancel", "okProps", "cancelProps", "locale", "rtl", "visible", "closeMode", "closeIcon", "animation", "cache", "wrapperStyle", "popupContainer", "dialogRender", "centered", "top", "bottom", "width", "height", "isFullScreen", "overflowScroll", "minMargin", "onClose", "style", "wrapperClassName"]);
    if ('isFullScreen' in props) {
        log.deprecated('isFullScreen', 'overflowScroll', 'Dialog v2');
    }
    if ('minMargin' in props) {
        log.deprecated('minMargin', 'top/bottom', 'Dialog v2');
    }
    var _s = __read(useState(pvisible || false), 2), firstVisible = _s[0], setFirst = _s[1];
    var _t = __read(useState(pvisible), 2), visible = _t[0], setVisible = _t[1];
    var getContainer = typeof popupContainer === 'string'
        ? function () { return document.getElementById(popupContainer); }
        : typeof popupContainer !== 'function'
            ? function () { return popupContainer; }
            : popupContainer;
    var _u = __read(useState(getContainer()), 2), container = _u[0], setContainer = _u[1];
    var dialogRef = useRef(null);
    var wrapperRef = useRef(null);
    var lastFocus = useRef();
    var locker = useRef(null);
    var _v = __read(useState(guid()), 1), uuid = _v[0];
    var _w = useContext(OverlayContext), setVisibleOverlayToParent = _w.setVisibleOverlayToParent, otherContext = __rest(_w, ["setVisibleOverlayToParent"]);
    var childIDMap = useRef(new Map());
    var isAnimationEnd = useRef(false);
    var _x = __read(useState(), 2), forceUpdate = _x[1];
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
                    style_1.paddingRight = "".concat(dom.getStyle(document.body, 'paddingRight') +
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
                lastFocus.current = undefined;
            }
            afterClose();
        }
    };
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
    var handleCancel = function (e) {
        if (typeof onCancel === 'function') {
            onCancel(e);
        }
        else {
            handleClose('cancelBtn', e);
        }
    };
    var handleMaskClick = function (e) {
        if (!canCloseByMask) {
            return;
        }
        if (e.type === 'click' && dialogRef.current) {
            var dialogNode = ReactDOM.findDOMNode(dialogRef.current);
            if (dialogNode && dialogNode.contains(e.target)) {
                return;
            }
        }
        handleClose('maskClick', e);
    };
    var handleEnter = function () {
        markAnimationEnd(false);
        dom.setStyle(wrapperRef.current, 'display', '');
    };
    var handleEntered = function () {
        if (autoFocus && dialogRef.current && dialogRef.current.bodyNode) {
            var focusableNodes = focus.getFocusNodeList(dialogRef.current.bodyNode);
            if (focusableNodes.length > 0 && focusableNodes[0]) {
                lastFocus.current = document.activeElement;
                focusableNodes[0].focus();
            }
        }
        setVisibleOverlayToParent(uuid, wrapperRef.current);
    };
    var wrapperCls = classNames((_a = {},
        _a["".concat(prefix, "overlay-wrapper")] = true,
        _a[wrapperClassName] = !!wrapperClassName,
        _a.opened = visible,
        _a));
    var dialogCls = classNames((_b = {},
        _b["".concat(prefix, "dialog-v2")] = true,
        _b[className] = !!className,
        _b));
    var topStyle = {};
    if (centered) {
        // 兼容 minMargin
        if (!top && !bottom && minMargin) {
            topStyle.marginTop = minMargin;
            topStyle.marginBottom = minMargin;
        }
        else {
            top && (topStyle.marginTop = top);
            bottom && (topStyle.marginBottom = bottom);
        }
    }
    else {
        top && (topStyle.top = top);
        bottom && (topStyle.paddingBottom = bottom);
    }
    var innerStyle = style || {};
    if (overflowScroll && !innerStyle.maxHeight) {
        innerStyle.maxHeight = "calc(100vh - ".concat(top + bottom, "px)");
    }
    var timeout = {
        appear: 300,
        enter: 300,
        exit: 250,
    };
    var inner = (React.createElement(Animate.OverlayAnimate, { visible: visible, animation: animation, timeout: timeout, onEnter: handleEnter, onEntered: handleEntered, onExited: handleExited },
        React.createElement(Inner, __assign({}, others, { style: centered ? __assign(__assign({}, topStyle), innerStyle) : innerStyle, v2: true, ref: dialogRef, prefix: prefix, className: dialogCls, title: title, footer: footer, footerAlign: footerAlign, footerActions: footerActions, onOk: visible ? onOk : noop, onCancel: visible ? handleCancel : noop, okProps: okProps, cancelProps: cancelProps, locale: locale, closeable: closeable, rtl: rtl, onClose: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return handleClose.apply(void 0, __spreadArray(['closeClick'], __read(args), false));
            }, closeIcon: closeIcon, height: height, width: width }), children)));
    if (typeof dialogRender === 'function') {
        inner = dialogRender(inner);
    }
    var innerWrapperCls = classNames((_c = {},
        _c["".concat(prefix, "overlay-inner")] = true,
        _c["".concat(prefix, "dialog-wrapper")] = true,
        _c["".concat(prefix, "dialog-centered")] = centered,
        _c));
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
    return (React.createElement(OverlayContext.Provider, { value: __assign(__assign({}, otherContext), { setVisibleOverlayToParent: getVisibleOverlayFromChild }) }, ReactDOM.createPortal(React.createElement("div", { className: wrapperCls, style: wrapperStyle, ref: wrapperRef },
        hasMask ? (React.createElement(Animate.OverlayAnimate, { visible: visible, animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false, timeout: timeout, unmountOnExit: true },
            React.createElement("div", { className: "".concat(prefix, "overlay-backdrop") }))) : null,
        React.createElement("div", { className: innerWrapperCls, onClick: handleMaskClick }, centered ? (inner) : (React.createElement("div", { style: topStyle, className: "".concat(prefix, "dialog-inner-wrapper") }, inner)))), container)));
};
Dialog.displayName = 'Dialog';
export default Dialog;

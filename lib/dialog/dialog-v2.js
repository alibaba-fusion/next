"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* istanbul ignore file */
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var overlay_1 = tslib_1.__importDefault(require("@alifd/overlay"));
var inner_1 = tslib_1.__importDefault(require("./inner"));
var animate_1 = tslib_1.__importDefault(require("../animate"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var scroll_locker_1 = tslib_1.__importDefault(require("./scroll-locker"));
var OverlayContext = overlay_1.default.OverlayContext;
var noop = util_1.func.noop;
var Dialog = function (props) {
    var _a, _b, _c;
    if (!react_1.useState || !react_1.useRef || !react_1.useEffect) {
        util_1.log.warning('need react version > 16.8.0');
        return null;
    }
    var _d = props.prefix, prefix = _d === void 0 ? 'next-' : _d, _e = props.afterClose, afterClose = _e === void 0 ? noop : _e, _f = props.hasMask, hasMask = _f === void 0 ? true : _f, _g = props.autoFocus, autoFocus = _g === void 0 ? false : _g, className = props.className, title = props.title, children = props.children, footer = props.footer, footerAlign = props.footerAlign, footerActions = props.footerActions, _h = props.onOk, onOk = _h === void 0 ? noop : _h, onCancel = props.onCancel, okProps = props.okProps, cancelProps = props.cancelProps, _j = props.locale, locale = _j === void 0 ? zh_cn_1.default.Dialog : _j, rtl = props.rtl, pvisible = props.visible, _k = props.closeMode, closeMode = _k === void 0 ? ['close', 'esc'] : _k, closeIcon = props.closeIcon, _l = props.animation, animation = _l === void 0 ? { in: 'fadeInUp', out: 'fadeOutUp' } : _l, cache = props.cache, wrapperStyle = props.wrapperStyle, _m = props.popupContainer, popupContainer = _m === void 0 ? typeof document !== 'undefined' ? document.body : null : _m, dialogRender = props.dialogRender, centered = props.centered, _o = props.top, top = _o === void 0 ? centered ? 40 : 100 : _o, _p = props.bottom, bottom = _p === void 0 ? 40 : _p, _q = props.width, width = _q === void 0 ? 520 : _q, height = props.height, isFullScreen = props.isFullScreen, _r = props.overflowScroll, overflowScroll = _r === void 0 ? !isFullScreen : _r, minMargin = props.minMargin, onClose = props.onClose, style = props.style, wrapperClassName = props.wrapperClassName, others = tslib_1.__rest(props, ["prefix", "afterClose", "hasMask", "autoFocus", "className", "title", "children", "footer", "footerAlign", "footerActions", "onOk", "onCancel", "okProps", "cancelProps", "locale", "rtl", "visible", "closeMode", "closeIcon", "animation", "cache", "wrapperStyle", "popupContainer", "dialogRender", "centered", "top", "bottom", "width", "height", "isFullScreen", "overflowScroll", "minMargin", "onClose", "style", "wrapperClassName"]);
    if ('isFullScreen' in props) {
        util_1.log.deprecated('isFullScreen', 'overflowScroll', 'Dialog v2');
    }
    if ('minMargin' in props) {
        util_1.log.deprecated('minMargin', 'top/bottom', 'Dialog v2');
    }
    var _s = tslib_1.__read((0, react_1.useState)(pvisible || false), 2), firstVisible = _s[0], setFirst = _s[1];
    var _t = tslib_1.__read((0, react_1.useState)(pvisible), 2), visible = _t[0], setVisible = _t[1];
    var getContainer = typeof popupContainer === 'string'
        ? function () { return document.getElementById(popupContainer); }
        : typeof popupContainer !== 'function'
            ? function () { return popupContainer; }
            : popupContainer;
    var _u = tslib_1.__read((0, react_1.useState)(getContainer()), 2), container = _u[0], setContainer = _u[1];
    var dialogRef = (0, react_1.useRef)(null);
    var wrapperRef = (0, react_1.useRef)(null);
    var lastFocus = (0, react_1.useRef)();
    var locker = (0, react_1.useRef)(null);
    var _v = tslib_1.__read((0, react_1.useState)((0, util_1.guid)()), 1), uuid = _v[0];
    var _w = (0, react_1.useContext)(OverlayContext), setVisibleOverlayToParent = _w.setVisibleOverlayToParent, otherContext = tslib_1.__rest(_w, ["setVisibleOverlayToParent"]);
    var childIDMap = (0, react_1.useRef)(new Map());
    var isAnimationEnd = (0, react_1.useRef)(false);
    var _x = tslib_1.__read((0, react_1.useState)(), 2), forceUpdate = _x[1];
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
    (0, react_1.useEffect)(function () {
        if ('visible' in props) {
            setVisible(pvisible);
        }
    }, [pvisible]);
    // 打开遮罩后 document.body 滚动处理
    (0, react_1.useEffect)(function () {
        if (visible && hasMask) {
            var style_1 = {
                overflow: 'hidden',
            };
            if (util_1.dom.hasScroll(document.body)) {
                var scrollWidth = util_1.dom.scrollbar().width;
                if (scrollWidth) {
                    style_1.paddingRight = "".concat(util_1.dom.getStyle(document.body, 'paddingRight') +
                        util_1.dom.scrollbar().width, "px");
                }
            }
            locker.current = scroll_locker_1.default.lock(document.body, style_1);
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
    (0, react_1.useEffect)(function () {
        if (visible && canCloseByEsc) {
            document.body.addEventListener('keydown', keydownEvent, false);
            return function () {
                document.body.removeEventListener('keydown', keydownEvent, false);
            };
        }
    }, [visible && canCloseByEsc]);
    // 优化: 第一次加载并且 visible=false 的情况不挂载弹窗
    (0, react_1.useEffect)(function () {
        !firstVisible && visible && setFirst(true);
    }, [visible]);
    // container 异步加载情况
    (0, react_1.useEffect)(function () {
        if (!container) {
            setTimeout(function () {
                setContainer(getContainer());
            });
        }
    }, [container]);
    var handleExited = function () {
        if (!isAnimationEnd.current) {
            markAnimationEnd(true);
            util_1.dom.setStyle(wrapperRef.current, 'display', 'none');
            scroll_locker_1.default.unlock(document.body, locker.current);
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
    (0, react_1.useEffect)(function () {
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
            var dialogNode = react_dom_1.default.findDOMNode(dialogRef.current);
            if (dialogNode && dialogNode.contains(e.target)) {
                return;
            }
        }
        handleClose('maskClick', e);
    };
    var handleEnter = function () {
        markAnimationEnd(false);
        util_1.dom.setStyle(wrapperRef.current, 'display', '');
    };
    var handleEntered = function () {
        if (autoFocus && dialogRef.current && dialogRef.current.bodyNode) {
            var focusableNodes = util_1.focus.getFocusNodeList(dialogRef.current.bodyNode);
            if (focusableNodes.length > 0 && focusableNodes[0]) {
                lastFocus.current = document.activeElement;
                focusableNodes[0].focus();
            }
        }
        setVisibleOverlayToParent(uuid, wrapperRef.current);
    };
    var wrapperCls = (0, classnames_1.default)((_a = {},
        _a["".concat(prefix, "overlay-wrapper")] = true,
        _a[wrapperClassName] = !!wrapperClassName,
        _a.opened = visible,
        _a));
    var dialogCls = (0, classnames_1.default)((_b = {},
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
    var inner = (react_1.default.createElement(animate_1.default.OverlayAnimate, { visible: visible, animation: animation, timeout: timeout, onEnter: handleEnter, onEntered: handleEntered, onExited: handleExited },
        react_1.default.createElement(inner_1.default, tslib_1.__assign({}, others, { style: centered ? tslib_1.__assign(tslib_1.__assign({}, topStyle), innerStyle) : innerStyle, v2: true, ref: dialogRef, prefix: prefix, className: dialogCls, title: title, footer: footer, footerAlign: footerAlign, footerActions: footerActions, onOk: visible ? onOk : noop, onCancel: visible ? handleCancel : noop, okProps: okProps, cancelProps: cancelProps, locale: locale, closeable: closeable, rtl: rtl, onClose: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return handleClose.apply(void 0, tslib_1.__spreadArray(['closeClick'], tslib_1.__read(args), false));
            }, closeIcon: closeIcon, height: height, width: width }), children)));
    if (typeof dialogRender === 'function') {
        inner = dialogRender(inner);
    }
    var innerWrapperCls = (0, classnames_1.default)((_c = {},
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
    return (react_1.default.createElement(OverlayContext.Provider, { value: tslib_1.__assign(tslib_1.__assign({}, otherContext), { setVisibleOverlayToParent: getVisibleOverlayFromChild }) }, react_dom_1.default.createPortal(react_1.default.createElement("div", { className: wrapperCls, style: wrapperStyle, ref: wrapperRef },
        hasMask ? (react_1.default.createElement(animate_1.default.OverlayAnimate, { visible: visible, animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false, timeout: timeout, unmountOnExit: true },
            react_1.default.createElement("div", { className: "".concat(prefix, "overlay-backdrop") }))) : null,
        react_1.default.createElement("div", { className: innerWrapperCls, onClick: handleMaskClick }, centered ? (inner) : (react_1.default.createElement("div", { style: topStyle, className: "".concat(prefix, "dialog-inner-wrapper") }, inner)))), container)));
};
Dialog.displayName = 'Dialog';
exports.default = Dialog;

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
var scroll_locker_1 = tslib_1.__importDefault(require("../dialog/scroll-locker"));
var OverlayContext = overlay_1.default.OverlayContext;
var noop = util_1.func.noop;
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
    if (!react_1.useState || !react_1.useRef || !react_1.useEffect) {
        util_1.log.warning('need react version > 16.8.0');
        return null;
    }
    var _d = props.prefix, prefix = _d === void 0 ? 'next-' : _d, _e = props.hasMask, hasMask = _e === void 0 ? true : _e, _f = props.autoFocus, autoFocus = _f === void 0 ? false : _f, className = props.className, title = props.title, children = props.children, cache = props.cache, _g = props.closeMode, closeMode = _g === void 0 ? ['close', 'mask', 'esc'] : _g, width = props.width, height = props.height, onClose = props.onClose, _h = props.placement, placement = _h === void 0 ? 'right' : _h, headerStyle = props.headerStyle, bodyStyle = props.bodyStyle, pvisible = props.visible, _j = props.afterClose, afterClose = _j === void 0 ? noop : _j, _k = props.locale, locale = _k === void 0 ? zh_cn_1.default.Drawer : _k, rtl = props.rtl, animation = props.animation, wrapperStyle = props.wrapperStyle, _l = props.popupContainer, popupContainer = _l === void 0 ? document.body : _l, style = props.style, others = tslib_1.__rest(props, ["prefix", "hasMask", "autoFocus", "className", "title", "children", "cache", "closeMode", "width", "height", "onClose", "placement", "headerStyle", "bodyStyle", "visible", "afterClose", "locale", "rtl", "animation", "wrapperStyle", "popupContainer", "style"]);
    var _m = tslib_1.__read((0, react_1.useState)(pvisible || false), 2), firstVisible = _m[0], setFirst = _m[1];
    var _o = tslib_1.__read((0, react_1.useState)(pvisible), 2), visible = _o[0], setVisible = _o[1];
    var getContainer = typeof popupContainer === 'string'
        ? function () { return document.getElementById(popupContainer); }
        : typeof popupContainer !== 'function'
            ? function () { return popupContainer; }
            : popupContainer;
    var _p = tslib_1.__read((0, react_1.useState)(getContainer()), 2), container = _p[0], setContainer = _p[1];
    var drawerRef = (0, react_1.useRef)(null);
    var wrapperRef = (0, react_1.useRef)(null);
    var lastFocus = (0, react_1.useRef)(null);
    var locker = (0, react_1.useRef)(null);
    var _q = tslib_1.__read((0, react_1.useState)((0, util_1.guid)()), 1), uuid = _q[0];
    var _r = (0, react_1.useContext)(OverlayContext), setVisibleOverlayToParent = _r.setVisibleOverlayToParent, otherContext = tslib_1.__rest(_r, ["setVisibleOverlayToParent"]);
    var childIDMap = (0, react_1.useRef)(new Map());
    var isAnimationEnd = (0, react_1.useRef)(false); // 动效是否结束, 因为时机非常快用 state 太慢
    var _s = tslib_1.__read((0, react_1.useState)(), 2), forceUpdate = _s[1];
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
                    style_1.paddingRight = "".concat(util_1.dom.getStyle(document.body, 'paddingRight').toString() +
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
    // Drawer 关闭时候的处理。1. 结束的时候不管动效是不是已经结束都要隐藏弹窗；2. 需要把focus态还原到触发节点
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
                lastFocus.current = null;
            }
            afterClose();
        }
    };
    // visible? <Drawer/>: null; 这种写法会触发卸载
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
    var handleMaskClick = function (e) {
        if (!canCloseByMask) {
            return;
        }
        handleClose('maskClick', e);
    };
    var handleEnter = function () {
        markAnimationEnd(false);
        util_1.dom.setStyle(wrapperRef.current, 'display', '');
    };
    var handleEntered = function () {
        if (autoFocus && drawerRef.current && drawerRef.current.bodyNode) {
            var focusableNodes = util_1.focus.getFocusNodeList(drawerRef.current.bodyNode);
            if (focusableNodes.length > 0 && focusableNodes[0]) {
                lastFocus.current = document.activeElement;
                var firstFocusableNode = focusableNodes[0];
                firstFocusableNode.focus();
            }
        }
        setVisibleOverlayToParent(uuid, drawerRef.current);
    };
    var wrapperCls = (0, classnames_1.default)((_a = {},
        _a["".concat(prefix, "overlay-wrapper")] = true,
        _a.opened = visible,
        _a));
    var innerWrapperCls = (0, classnames_1.default)((_b = {},
        _b["".concat(prefix, "overlay-inner")] = true,
        _b["".concat(prefix, "drawer-wrapper")] = true,
        _b["".concat(prefix, "drawer-").concat(placement)] = true,
        _b[className] = !!className,
        _b));
    var drawerCls = (0, classnames_1.default)((_c = {},
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
    var nstyle = tslib_1.__assign({ width: width, height: height }, style);
    return (react_1.default.createElement(OverlayContext.Provider, { value: tslib_1.__assign(tslib_1.__assign({}, otherContext), { setVisibleOverlayToParent: getVisibleOverlayFromChild }) }, react_dom_1.default.createPortal(react_1.default.createElement("div", { className: wrapperCls, style: wrapperStyle, ref: wrapperRef },
        hasMask ? (react_1.default.createElement(animate_1.default.OverlayAnimate, { visible: visible, animation: newAnimation ? { in: 'fadeIn', out: 'fadeOut' } : false, timeout: timeout, unmountOnExit: true },
            react_1.default.createElement("div", { className: "".concat(prefix, "overlay-backdrop"), onClick: handleMaskClick }))) : null,
        react_1.default.createElement("div", { className: innerWrapperCls, style: nstyle, ref: drawerRef },
            react_1.default.createElement(animate_1.default.OverlayAnimate, { visible: visible, animation: newAnimation, timeout: timeout, onEnter: handleEnter, onEntered: handleEntered, onExited: handleExited },
                react_1.default.createElement(inner_1.default, tslib_1.__assign({}, others, { v2: true, prefix: prefix, title: title, className: drawerCls, locale: locale, closeable: closeable, rtl: rtl, headerStyle: headerStyle, bodyStyle: bodyStyle, onClose: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return handleClose.apply(void 0, tslib_1.__spreadArray(['closeClick'], tslib_1.__read(args), false));
                    } }), children)))), container)));
};
Drawer.displayName = 'Drawer';
exports.default = Drawer;

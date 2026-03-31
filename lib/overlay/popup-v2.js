"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var overlay_1 = tslib_1.__importDefault(require("@alifd/overlay"));
var animate_1 = tslib_1.__importDefault(require("../animate"));
var util_1 = require("../util");
var Popup = function (props) {
    var _a;
    if (!react_1.useState || !react_1.useRef || !react_1.useEffect) {
        util_1.log.warning('need react version > 16.8.0');
        return null;
    }
    var _b = props.prefix, prefix = _b === void 0 ? 'next-' : _b, _c = props.animation, panimation = _c === void 0 ? { in: 'expandInDown', out: 'expandOutUp' } : _c, defaultVisible = props.defaultVisible, _d = props.onVisibleChange, onVisibleChange = _d === void 0 ? function () { } : _d, trigger = props.trigger, _e = props.triggerType, triggerType = _e === void 0 ? 'hover' : _e, overlay = props.overlay, onPosition = props.onPosition, children = props.children, className = props.className, style = props.style, wrapperClassName = props.wrapperClassName, triggerClickKeycode = props.triggerClickKeycode, align = props.align, beforeOpen = props.beforeOpen, onOpen = props.onOpen, afterOpen = props.afterOpen, beforeClose = props.beforeClose, onClose = props.onClose, afterClose = props.afterClose, others = tslib_1.__rest(props, ["prefix", "animation", "defaultVisible", "onVisibleChange", "trigger", "triggerType", "overlay", "onPosition", "children", "className", "style", "wrapperClassName", "triggerClickKeycode", "align", "beforeOpen", "onOpen", "afterOpen", "beforeClose", "onClose", "afterClose"]);
    var _f = tslib_1.__read((0, react_1.useState)(defaultVisible), 2), visible = _f[0], setVisible = _f[1];
    var _g = tslib_1.__read((0, react_1.useState)(panimation), 2), animation = _g[0], setAnimation = _g[1];
    var _h = tslib_1.__read((0, react_1.useState)(true), 2), isAnimationEnd = _h[0], markAnimationEnd = _h[1];
    var overlayRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if ('visible' in props) {
            setVisible(props.visible);
        }
    }, [props.visible]);
    (0, react_1.useEffect)(function () {
        if ('animation' in props && animation !== panimation) {
            setAnimation(panimation);
        }
    }, [panimation]);
    var handleVisibleChange = function (visible) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!('visible' in props)) {
            setVisible(visible);
        }
        onVisibleChange.apply(void 0, tslib_1.__spreadArray([visible], tslib_1.__read(args), false));
    };
    var triggerNode = overlay ? children : trigger;
    var overlayNode = overlay ? overlay : children;
    var handleEnter = function () {
        markAnimationEnd(false);
        typeof beforeOpen === 'function' && beforeOpen(overlayRef.current);
    };
    var handleEntering = function () {
        typeof onOpen === 'function' && onOpen(overlayRef.current);
    };
    var handleEntered = function () {
        typeof afterOpen === 'function' && afterOpen(overlayRef.current);
    };
    var handleExit = function () {
        typeof beforeClose === 'function' && beforeClose(overlayRef.current);
    };
    var handleExiting = function () {
        typeof onClose === 'function' && onClose(overlayRef.current);
    };
    var handleExited = function () {
        markAnimationEnd(true);
        typeof afterClose === 'function' && afterClose(overlayRef.current);
    };
    overlayNode = (react_1.default.createElement(animate_1.default.OverlayAnimate, { visible: visible, animation: animation, timeout: 200, onEnter: handleEnter, onEntering: handleEntering, onEntered: handleEntered, onExit: handleExit, onExiting: handleExiting, onExited: handleExited, style: style }, overlayNode ? ((0, react_1.cloneElement)(overlayNode, {
        className: (0, classnames_1.default)([
            "".concat(prefix, "overlay-inner"),
            className,
            overlayNode && overlayNode.props && overlayNode.props.className,
        ]),
    })) : (react_1.default.createElement("span", null))));
    var handlePosition = function (result) {
        // 兼容 1.x, 2.x 可去除这段逻辑
        Object.assign(result, { align: result.config.points });
        var placement = result.config.placement;
        if (placement && typeof placement === 'string') {
            if (animation.in === 'expandInDown' &&
                animation.out === 'expandOutUp' &&
                placement.match(/t/)) {
                setAnimation({
                    in: 'expandInUp',
                    out: 'expandOutDown',
                });
            }
            else if (animation.in === 'expandInUp' &&
                animation.out === 'expandOutDown' &&
                placement.match(/b/)) {
                setAnimation({
                    in: 'expandInDown',
                    out: 'expandOutUp',
                });
            }
        }
        typeof onPosition === 'function' && onPosition(result);
    };
    var wraperCls = (0, classnames_1.default)((_a = {},
        _a["".concat(prefix, "overlay-wrapper v2")] = true,
        _a[wrapperClassName] = wrapperClassName,
        _a.opened = visible,
        _a));
    // 兼容
    var v1Props = { points: ['tr', 'tl'] };
    if (align) {
        v1Props.points = align.split(' ');
    }
    var maskRender = function (node) { return (react_1.default.createElement(animate_1.default.OverlayAnimate, { visible: visible, animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false, timeout: 200, unmountOnExit: true }, node)); };
    return (react_1.default.createElement(overlay_1.default.Popup, tslib_1.__assign({}, others, v1Props, { wrapperClassName: wraperCls, overlay: overlayNode, visible: visible, isAnimationEnd: isAnimationEnd, triggerType: triggerType, onVisibleChange: handleVisibleChange, onPosition: handlePosition, triggerClickKeyCode: triggerClickKeycode, maskRender: maskRender, ref: overlayRef }), triggerNode));
};
Popup.displayName = 'Popup';
exports.default = Popup;

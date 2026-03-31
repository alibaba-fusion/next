"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var overlay_1 = tslib_1.__importDefault(require("@alifd/overlay"));
var animate_1 = tslib_1.__importDefault(require("../animate"));
var util_1 = require("../util");
var Overlay2 = function (props) {
    var _a;
    if (!react_1.useState || !react_1.useRef || !react_1.useEffect) {
        util_1.log.warning('need react version > 16.8.0');
        return null;
    }
    var _b = props.prefix, prefix = _b === void 0 ? 'next-' : _b, _c = props.animation, animation = _c === void 0 ? { in: 'expandInDown', out: 'expandOutUp' } : _c, visible = props.visible, hasMask = props.hasMask, // 仅兼容，Dialog/Drawer 后续会自己提供mask
    align = props.align, _d = props.points, points = _d === void 0 ? align ? align.split(' ') : undefined : _d, onPosition = props.onPosition, children = props.children, className = props.className, style = props.style, wrapperClassName = props.wrapperClassName, beforeOpen = props.beforeOpen, onOpen = props.onOpen, afterOpen = props.afterOpen, beforeClose = props.beforeClose, onClose = props.onClose, afterClose = props.afterClose, others = tslib_1.__rest(props, ["prefix", "animation", "visible", "hasMask", "align", "points", "onPosition", "children", "className", "style", "wrapperClassName", "beforeOpen", "onOpen", "afterOpen", "beforeClose", "onClose", "afterClose"]);
    var _e = tslib_1.__read((0, react_1.useState)(true), 2), isAnimationEnd = _e[0], markAnimationEnd = _e[1];
    var overlayRef = (0, react_1.useRef)(null);
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
    var childrenNode = (react_1.default.createElement(animate_1.default.OverlayAnimate, { visible: visible, animation: animation, onEnter: handleEnter, onEntering: handleEntering, onEntered: handleEntered, onExit: handleExit, onExiting: handleExiting, onExited: handleExited, timeout: 300, style: style }, children ? ((0, react_1.cloneElement)(children, {
        className: (0, classnames_1.default)([
            "".concat(prefix, "overlay-inner"),
            className,
            children && children.props && children.props.className,
        ]),
    })) : (react_1.default.createElement("span", null))));
    var wraperCls = (0, classnames_1.default)((_a = {},
        _a["".concat(prefix, "overlay-wrapper v2")] = true,
        _a[wrapperClassName] = wrapperClassName,
        _a.opened = visible,
        _a));
    var handlePosition = function (result) {
        // 兼容 1.x, 2.x 可去除这段逻辑
        Object.assign(result, { align: result.config.points });
        typeof onPosition === 'function' && onPosition(result);
    };
    var maskRender = function (node) { return (react_1.default.createElement(animate_1.default.OverlayAnimate, { visible: visible, animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false, timeout: 300, unmountOnExit: true }, node)); };
    return (
    // @ts-expect-error overlay类型导出不是overlay实例， 导致 JSX 元素类型“Overlay”不具有任何构造签名或调用签名。
    react_1.default.createElement(overlay_1.default, tslib_1.__assign({}, others, { visible: visible, isAnimationEnd: isAnimationEnd, hasMask: hasMask, wrapperClassName: wraperCls, maskClassName: "".concat(prefix, "overlay-backdrop"), maskRender: maskRender, points: points, onPosition: handlePosition, ref: overlayRef }), childrenNode));
};
Overlay2.displayName = 'Overlay';
exports.default = Overlay2;

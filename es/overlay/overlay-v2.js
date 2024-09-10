import { __assign, __read, __rest } from "tslib";
import React, { useState, useRef, useEffect, cloneElement } from 'react';
import classNames from 'classnames';
import Overlay from '@alifd/overlay';
import Animate from '../animate';
import { log } from '../util';
var Overlay2 = function (props) {
    var _a;
    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }
    var _b = props.prefix, prefix = _b === void 0 ? 'next-' : _b, _c = props.animation, animation = _c === void 0 ? { in: 'expandInDown', out: 'expandOutUp' } : _c, visible = props.visible, hasMask = props.hasMask, // 仅兼容，Dialog/Drawer 后续会自己提供mask
    align = props.align, _d = props.points, points = _d === void 0 ? align ? align.split(' ') : undefined : _d, onPosition = props.onPosition, children = props.children, className = props.className, style = props.style, wrapperClassName = props.wrapperClassName, beforeOpen = props.beforeOpen, onOpen = props.onOpen, afterOpen = props.afterOpen, beforeClose = props.beforeClose, onClose = props.onClose, afterClose = props.afterClose, others = __rest(props, ["prefix", "animation", "visible", "hasMask", "align", "points", "onPosition", "children", "className", "style", "wrapperClassName", "beforeOpen", "onOpen", "afterOpen", "beforeClose", "onClose", "afterClose"]);
    var _e = __read(useState(true), 2), isAnimationEnd = _e[0], markAnimationEnd = _e[1];
    var overlayRef = useRef(null);
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
    var childrenNode = (React.createElement(Animate.OverlayAnimate, { visible: visible, animation: animation, onEnter: handleEnter, onEntering: handleEntering, onEntered: handleEntered, onExit: handleExit, onExiting: handleExiting, onExited: handleExited, timeout: 300, style: style }, children ? (cloneElement(children, {
        className: classNames([
            "".concat(prefix, "overlay-inner"),
            className,
            children && children.props && children.props.className,
        ]),
    })) : (React.createElement("span", null))));
    var wraperCls = classNames((_a = {},
        _a["".concat(prefix, "overlay-wrapper v2")] = true,
        _a[wrapperClassName] = wrapperClassName,
        _a.opened = visible,
        _a));
    var handlePosition = function (result) {
        // 兼容 1.x, 2.x 可去除这段逻辑
        Object.assign(result, { align: result.config.points });
        typeof onPosition === 'function' && onPosition(result);
    };
    var maskRender = function (node) { return (React.createElement(Animate.OverlayAnimate, { visible: visible, animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false, timeout: 300, unmountOnExit: true }, node)); };
    return (
    // @ts-expect-error overlay类型导出不是overlay实例， 导致 JSX 元素类型“Overlay”不具有任何构造签名或调用签名。
    React.createElement(Overlay, __assign({}, others, { visible: visible, isAnimationEnd: isAnimationEnd, hasMask: hasMask, wrapperClassName: wraperCls, maskClassName: "".concat(prefix, "overlay-backdrop"), maskRender: maskRender, points: points, onPosition: handlePosition, ref: overlayRef }), childrenNode));
};
Overlay2.displayName = 'Overlay';
export default Overlay2;

import { __assign, __read, __rest, __spreadArray } from "tslib";
import React, { useState, useRef, useEffect, cloneElement } from 'react';
import classNames from 'classnames';
import Overlay from '@alifd/overlay';
import Animate from '../animate';
import { log } from '../util';
var Popup = function (props) {
    var _a;
    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }
    var _b = props.prefix, prefix = _b === void 0 ? 'next-' : _b, _c = props.animation, panimation = _c === void 0 ? { in: 'expandInDown', out: 'expandOutUp' } : _c, defaultVisible = props.defaultVisible, _d = props.onVisibleChange, onVisibleChange = _d === void 0 ? function () { } : _d, trigger = props.trigger, _e = props.triggerType, triggerType = _e === void 0 ? 'hover' : _e, overlay = props.overlay, onPosition = props.onPosition, children = props.children, className = props.className, style = props.style, wrapperClassName = props.wrapperClassName, triggerClickKeycode = props.triggerClickKeycode, align = props.align, beforeOpen = props.beforeOpen, onOpen = props.onOpen, afterOpen = props.afterOpen, beforeClose = props.beforeClose, onClose = props.onClose, afterClose = props.afterClose, others = __rest(props, ["prefix", "animation", "defaultVisible", "onVisibleChange", "trigger", "triggerType", "overlay", "onPosition", "children", "className", "style", "wrapperClassName", "triggerClickKeycode", "align", "beforeOpen", "onOpen", "afterOpen", "beforeClose", "onClose", "afterClose"]);
    var _f = __read(useState(defaultVisible), 2), visible = _f[0], setVisible = _f[1];
    var _g = __read(useState(panimation), 2), animation = _g[0], setAnimation = _g[1];
    var _h = __read(useState(true), 2), isAnimationEnd = _h[0], markAnimationEnd = _h[1];
    var overlayRef = useRef(null);
    useEffect(function () {
        if ('visible' in props) {
            setVisible(props.visible);
        }
    }, [props.visible]);
    useEffect(function () {
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
        onVisibleChange.apply(void 0, __spreadArray([visible], __read(args), false));
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
    overlayNode = (React.createElement(Animate.OverlayAnimate, { visible: visible, animation: animation, timeout: 200, onEnter: handleEnter, onEntering: handleEntering, onEntered: handleEntered, onExit: handleExit, onExiting: handleExiting, onExited: handleExited, style: style }, overlayNode ? (cloneElement(overlayNode, {
        className: classNames([
            "".concat(prefix, "overlay-inner"),
            className,
            overlayNode && overlayNode.props && overlayNode.props.className,
        ]),
    })) : (React.createElement("span", null))));
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
    var wraperCls = classNames((_a = {},
        _a["".concat(prefix, "overlay-wrapper v2")] = true,
        _a[wrapperClassName] = wrapperClassName,
        _a.opened = visible,
        _a));
    // 兼容
    var v1Props = { points: ['tr', 'tl'] };
    if (align) {
        v1Props.points = align.split(' ');
    }
    var maskRender = function (node) { return (React.createElement(Animate.OverlayAnimate, { visible: visible, animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false, timeout: 200, unmountOnExit: true }, node)); };
    return (React.createElement(Overlay.Popup, __assign({}, others, v1Props, { wrapperClassName: wraperCls, overlay: overlayNode, visible: visible, isAnimationEnd: isAnimationEnd, triggerType: triggerType, onVisibleChange: handleVisibleChange, onPosition: handlePosition, triggerClickKeyCode: triggerClickKeycode, maskRender: maskRender, ref: overlayRef }), triggerNode));
};
Popup.displayName = 'Popup';
export default Popup;

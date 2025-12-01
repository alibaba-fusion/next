import { __assign, __rest } from "tslib";
import React from 'react';
import { Transition } from 'react-transition-group';
import classNames from 'classnames';
var OverlayAnimate = function (props) {
    var animation = props.animation, visible = props.visible, children = props.children, _a = props.timeout, timeout = _a === void 0 ? 300 : _a, style = props.style, mountOnEnter = props.mountOnEnter, unmountOnExit = props.unmountOnExit, appear = props.appear, enter = props.enter, exit = props.exit, onEnter = props.onEnter, onEntering = props.onEntering, onEntered = props.onEntered, onExit = props.onExit, onExiting = props.onExiting, onExited = props.onExited, others = __rest(props, ["animation", "visible", "children", "timeout", "style", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]);
    var animateProps = {
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        appear: appear,
        enter: enter,
        exit: exit,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
    };
    Object.keys(animateProps).forEach(function (k) {
        if (!(k in props) || typeof props[k] === 'undefined') {
            delete animateProps[k];
        }
    });
    var animationMap = typeof animation === 'string' ? { in: animation, out: animation } : animation;
    var animateClsMap = animationMap
        ? {
            entering: animationMap.in,
            exiting: animationMap.out,
        }
        : {};
    if (animation === false) {
        animateClsMap.entering = '';
        animateClsMap.exiting = '';
    }
    return (React.createElement(Transition, __assign({}, animateProps, { in: visible, timeout: animation ? timeout : 0, appear: true }), function (state) {
        var _a;
        var cls = classNames((_a = {},
            _a[children.props.className] = !!children.props.className,
            _a[animateClsMap[state]] = state in animateClsMap && animateClsMap[state],
            _a));
        var childProps = __assign(__assign({}, others), { className: cls });
        if (style && children.props && children.props.style) {
            childProps.style = Object.assign({}, children.props.style, style);
        }
        return React.cloneElement(children, childProps);
    }));
};
export default OverlayAnimate;

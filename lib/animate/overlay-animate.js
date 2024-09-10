"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var OverlayAnimate = function (props) {
    var animation = props.animation, visible = props.visible, children = props.children, _a = props.timeout, timeout = _a === void 0 ? 300 : _a, style = props.style, mountOnEnter = props.mountOnEnter, unmountOnExit = props.unmountOnExit, appear = props.appear, enter = props.enter, exit = props.exit, onEnter = props.onEnter, onEntering = props.onEntering, onEntered = props.onEntered, onExit = props.onExit, onExiting = props.onExiting, onExited = props.onExited, others = tslib_1.__rest(props, ["animation", "visible", "children", "timeout", "style", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"]);
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
    return (react_1.default.createElement(react_transition_group_1.Transition, tslib_1.__assign({}, animateProps, { in: visible, timeout: animation ? timeout : 0, appear: true }), function (state) {
        var _a;
        var cls = (0, classnames_1.default)((_a = {},
            _a[children.props.className] = !!children.props.className,
            _a[animateClsMap[state]] = state in animateClsMap && animateClsMap[state],
            _a));
        var childProps = tslib_1.__assign(tslib_1.__assign({}, others), { className: cls });
        if (style && children.props && children.props.style) {
            childProps.style = Object.assign({}, children.props.style, style);
        }
        return react_1.default.cloneElement(children, childProps);
    }));
};
exports.default = OverlayAnimate;

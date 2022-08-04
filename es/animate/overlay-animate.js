import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
/* istanbul ignore file */
import React, { useCallback, useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import classNames from 'classnames';

var OverlayAnimate = function OverlayAnimate(props) {
    var animation = props.animation,
        visible = props.visible,
        children = props.children,
        _props$timeout = props.timeout,
        timeout = _props$timeout === undefined ? 300 : _props$timeout,
        style = props.style,
        mountOnEnter = props.mountOnEnter,
        unmountOnExit = props.unmountOnExit,
        appear = props.appear,
        enter = props.enter,
        exit = props.exit,
        onEnter = props.onEnter,
        onEntering = props.onEntering,
        onEntered = props.onEntered,
        onExit = props.onExit,
        onExiting = props.onExiting,
        onExited = props.onExited,
        others = _objectWithoutProperties(props, ['animation', 'visible', 'children', 'timeout', 'style', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited']);

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
        onExited: onExited
    };

    Object.keys(animateProps).forEach(function (k) {
        if (!(k in props) || typeof props[k] === 'undefined') {
            delete animateProps[k];
        }
    });

    var animationMap = typeof animation === 'string' ? { in: animation, out: animation } : animation;

    var animateClsMap = animation ? {
        entering: animationMap.in,
        exiting: animationMap.out
    } : {};

    if (animation === false) {
        animateClsMap.entering = '';
        animateClsMap.exiting = '';
    }

    return React.createElement(
        Transition,
        _extends({}, animateProps, { 'in': visible, timeout: animation ? timeout : 0, appear: true }),
        function (state) {
            var _classNames;

            var cls = classNames((_classNames = {}, _classNames[children.props.className] = !!children.props.className, _classNames[animateClsMap[state]] = state in animateClsMap && animateClsMap[state], _classNames));

            var childProps = _extends({}, others, {
                className: cls
            });

            if (style && children.props && children.props.style) {
                childProps.style = _extends({}, children.props.style, style);
            }

            return React.cloneElement(children, childProps);
        }
    );
};

export default OverlayAnimate;
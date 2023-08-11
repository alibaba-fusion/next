import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
/* istanbul ignore file */
import React, { useState, useRef, useEffect, cloneElement } from 'react';
import classNames from 'classnames';
import Overlay from '@alifd/overlay';

import Animate from '../animate';

import { log } from '../util';

var Overlay2 = function Overlay2(props) {
    var _classNames;

    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }

    var _props$prefix = props.prefix,
        prefix = _props$prefix === undefined ? 'next-' : _props$prefix,
        _props$animation = props.animation,
        animation = _props$animation === undefined ? { in: 'expandInDown', out: 'expandOutUp' } : _props$animation,
        visible = props.visible,
        hasMask = props.hasMask,
        align = props.align,
        _props$points = props.points,
        points = _props$points === undefined ? align ? align.split(' ') : undefined : _props$points,
        onPosition = props.onPosition,
        children = props.children,
        className = props.className,
        style = props.style,
        wrapperClassName = props.wrapperClassName,
        beforeOpen = props.beforeOpen,
        onOpen = props.onOpen,
        afterOpen = props.afterOpen,
        beforeClose = props.beforeClose,
        onClose = props.onClose,
        afterClose = props.afterClose,
        others = _objectWithoutProperties(props, ['prefix', 'animation', 'visible', 'hasMask', 'align', 'points', 'onPosition', 'children', 'className', 'style', 'wrapperClassName', 'beforeOpen', 'onOpen', 'afterOpen', 'beforeClose', 'onClose', 'afterClose']);

    var _useState = useState(true),
        isAnimationEnd = _useState[0],
        markAnimationEnd = _useState[1];

    var overlayRef = useRef(null);

    var handleEnter = function handleEnter() {
        markAnimationEnd(false);
        typeof beforeOpen === 'function' && beforeOpen(overlayRef.current);
    };
    var handleEntering = function handleEntering() {
        typeof onOpen === 'function' && onOpen(overlayRef.current);
    };
    var handleEntered = function handleEntered() {
        typeof afterOpen === 'function' && afterOpen(overlayRef.current);
    };
    var handleExit = function handleExit() {
        typeof beforeClose === 'function' && beforeClose(overlayRef.current);
    };
    var handleExiting = function handleExiting() {
        typeof onClose === 'function' && onClose(overlayRef.current);
    };
    var handleExited = function handleExited() {
        markAnimationEnd(true);
        typeof afterClose === 'function' && afterClose(overlayRef.current);
    };

    var childrenNode = React.createElement(
        Animate.OverlayAnimate,
        {
            visible: visible,
            animation: animation,
            onEnter: handleEnter,
            onEntering: handleEntering,
            onEntered: handleEntered,
            onExit: handleExit,
            onExiting: handleExiting,
            onExited: handleExited,
            timeout: 300,
            style: style
        },
        children ? cloneElement(children, {
            className: classNames([prefix + 'overlay-inner', className, children && children.props && children.props.className])
        }) : React.createElement('span', null)
    );

    var wraperCls = classNames((_classNames = {}, _classNames[prefix + 'overlay-wrapper v2'] = true, _classNames[wrapperClassName] = wrapperClassName, _classNames.opened = visible, _classNames));

    var handlePosition = function handlePosition(result) {
        // 兼容 1.x, 2.x 可去除这段逻辑
        _extends(result, { align: result.config.points });

        typeof onPosition === 'function' && onPosition(result);
    };

    var maskRender = function maskRender(node) {
        return React.createElement(
            Animate.OverlayAnimate,
            {
                visible: visible,
                animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false,
                timeout: 300,
                unmountOnExit: true
            },
            node
        );
    };

    return React.createElement(
        Overlay,
        _extends({}, others, {
            visible: visible,
            isAnimationEnd: isAnimationEnd,
            hasMask: hasMask,
            wrapperClassName: wraperCls,
            maskClassName: prefix + 'overlay-backdrop',
            maskRender: maskRender,
            points: points,
            onPosition: handlePosition,
            ref: overlayRef
        }),
        childrenNode
    );
};

export default Overlay2;
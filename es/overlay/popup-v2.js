import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
/* istanbul ignore file */
import React, { useState, useRef, useEffect, cloneElement } from 'react';
import classNames from 'classnames';
import Overlay from '@alifd/overlay';

import Animate from '../animate';

import { log } from '../util';

var Popup = function Popup(props) {
    var _classNames;

    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }

    var _props$prefix = props.prefix,
        prefix = _props$prefix === undefined ? 'next-' : _props$prefix,
        _props$animation = props.animation,
        animation = _props$animation === undefined ? { in: 'expandInDown', out: 'expandOutUp' } : _props$animation,
        defaultVisible = props.defaultVisible,
        _props$onVisibleChang = props.onVisibleChange,
        onVisibleChange = _props$onVisibleChang === undefined ? function () {} : _props$onVisibleChang,
        trigger = props.trigger,
        _props$triggerType = props.triggerType,
        triggerType = _props$triggerType === undefined ? 'hover' : _props$triggerType,
        overlay = props.overlay,
        onPosition = props.onPosition,
        children = props.children,
        className = props.className,
        style = props.style,
        wrapperClassName = props.wrapperClassName,
        triggerClickKeycode = props.triggerClickKeycode,
        align = props.align,
        beforeOpen = props.beforeOpen,
        onOpen = props.onOpen,
        afterOpen = props.afterOpen,
        beforeClose = props.beforeClose,
        onClose = props.onClose,
        afterClose = props.afterClose,
        others = _objectWithoutProperties(props, ['prefix', 'animation', 'defaultVisible', 'onVisibleChange', 'trigger', 'triggerType', 'overlay', 'onPosition', 'children', 'className', 'style', 'wrapperClassName', 'triggerClickKeycode', 'align', 'beforeOpen', 'onOpen', 'afterOpen', 'beforeClose', 'onClose', 'afterClose']);

    var _useState = useState(defaultVisible),
        visible = _useState[0],
        setVisible = _useState[1];

    var _useState2 = useState(true),
        isAnimationEnd = _useState2[0],
        markAnimationEnd = _useState2[1];

    var overlayRef = useRef(null);

    useEffect(function () {
        if ('visible' in props) {
            setVisible(props.visible);
        }
    }, [props.visible]);

    var handleVisibleChange = function handleVisibleChange(visible) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (!('visible' in props)) {
            setVisible(visible);
        }

        onVisibleChange.apply(undefined, [visible].concat(args));
    };

    var triggerNode = overlay ? children : trigger;
    var overlayNode = overlay ? overlay : children;

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

    overlayNode = React.createElement(
        Animate.OverlayAnimate,
        {
            visible: visible,
            animation: animation,
            timeout: 200,
            onEnter: handleEnter,
            onEntering: handleEntering,
            onEntered: handleEntered,
            onExit: handleExit,
            onExiting: handleExiting,
            onExited: handleExited,
            ref: overlayRef,
            style: style
        },
        overlayNode ? cloneElement(overlayNode, {
            className: classNames([prefix + 'overlay-inner', className, overlayNode && overlayNode.props && overlayNode.props.className])
        }) : React.createElement('span', null)
    );

    var handlePosition = function handlePosition(result) {
        // 兼容 1.x, 2.x 可去除这段逻辑
        _extends(result, { align: result.config.points });

        typeof onPosition === 'function' && onPosition(result);
    };

    var wraperCls = classNames((_classNames = {}, _classNames[prefix + 'overlay-wrapper v2'] = true, _classNames[wrapperClassName] = wrapperClassName, _classNames.opened = visible, _classNames));

    // 兼容
    var v1Props = {};
    if (align) {
        v1Props.points = align.split(' ');
    }

    var maskRender = function maskRender(node) {
        return React.createElement(
            Animate.OverlayAnimate,
            {
                visible: visible,
                animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false,
                timeout: 200,
                unmountOnExit: true
            },
            node
        );
    };

    return React.createElement(
        Overlay.Popup,
        _extends({}, others, v1Props, {
            wrapperClassName: wraperCls,
            overlay: overlayNode,
            visible: visible,
            isAnimationEnd: isAnimationEnd,
            triggerType: triggerType,
            onVisibleChange: handleVisibleChange,
            onPosition: handlePosition,
            triggerClickKeyCode: triggerClickKeycode,
            maskRender: maskRender
        }),
        triggerNode
    );
};

export default Popup;
/* istanbul ignore file */
import React, { useState, useRef, useEffect, cloneElement } from 'react';
import classNames from 'classnames';
import Overlay from '@alifd/overlay';

import Animate from '../animate';

import { log } from '../util';

const Popup = props => {
    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }

    const {
        prefix = 'next-',
        animation = { in: 'expandInDown', out: 'expandOutUp' },
        defaultVisible,
        onVisibleChange = () => {},
        trigger,
        triggerType = 'hover',
        overlay,
        onPosition,
        children,
        className,
        style,
        wrapperClassName,
        triggerClickKeycode,
        align,

        beforeOpen,
        onOpen,
        afterOpen,
        beforeClose,
        onClose,
        afterClose,

        ...others
    } = props;

    const [visible, setVisible] = useState(defaultVisible);
    const [isAnimationEnd, markAnimationEnd] = useState(true);
    const overlayRef = useRef(null);

    useEffect(() => {
        if ('visible' in props) {
            setVisible(props.visible);
        }
    }, [props.visible]);

    const handleVisibleChange = (visible, ...args) => {
        if (!('visible' in props)) {
            setVisible(visible);
        }

        onVisibleChange(visible, ...args);
    };

    const triggerNode = overlay ? children : trigger;
    let overlayNode = overlay ? overlay : children;

    const handleEnter = () => {
        markAnimationEnd(false);
        typeof beforeOpen === 'function' && beforeOpen(overlayRef.current);
    };
    const handleEntering = () => {
        typeof onOpen === 'function' && onOpen(overlayRef.current);
    };
    const handleEntered = () => {
        typeof afterOpen === 'function' && afterOpen(overlayRef.current);
    };
    const handleExit = () => {
        typeof beforeClose === 'function' && beforeClose(overlayRef.current);
    };
    const handleExiting = () => {
        typeof onClose === 'function' && onClose(overlayRef.current);
    };
    const handleExited = () => {
        markAnimationEnd(true);
        typeof afterClose === 'function' && afterClose(overlayRef.current);
    };

    overlayNode = (
        <Animate.OverlayAnimate
            visible={visible}
            animation={animation}
            timeout={200}
            onEnter={handleEnter}
            onEntering={handleEntering}
            onEntered={handleEntered}
            onExit={handleExit}
            onExiting={handleExiting}
            onExited={handleExited}
            style={style}
        >
            {overlayNode ? (
                cloneElement(overlayNode, {
                    className: classNames([
                        `${prefix}overlay-inner`,
                        className,
                        overlayNode && overlayNode.props && overlayNode.props.className,
                    ]),
                })
            ) : (
                <span />
            )}
        </Animate.OverlayAnimate>
    );

    const handlePosition = result => {
        // 兼容 1.x, 2.x 可去除这段逻辑
        Object.assign(result, { align: result.config.points });

        typeof onPosition === 'function' && onPosition(result);
    };

    const wraperCls = classNames({
        [`${prefix}overlay-wrapper v2`]: true,
        [wrapperClassName]: wrapperClassName,
        opened: visible,
    });

    // 兼容
    const v1Props = {};
    if (align) {
        v1Props.points = align.split(' ');
    }

    const maskRender = node => (
        <Animate.OverlayAnimate
            visible={visible}
            animation={animation ? { in: 'fadeIn', out: 'fadeOut' } : false}
            timeout={200}
            unmountOnExit
        >
            {node}
        </Animate.OverlayAnimate>
    );

    return (
        <Overlay.Popup
            {...others}
            {...v1Props}
            wrapperClassName={wraperCls}
            overlay={overlayNode}
            visible={visible}
            isAnimationEnd={isAnimationEnd}
            triggerType={triggerType}
            onVisibleChange={handleVisibleChange}
            onPosition={handlePosition}
            triggerClickKeyCode={triggerClickKeycode}
            maskRender={maskRender}
            ref={overlayRef}
        >
            {triggerNode}
        </Overlay.Popup>
    );
};

export default Popup;

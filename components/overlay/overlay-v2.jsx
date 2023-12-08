/* istanbul ignore file */
import React, { useState, useRef, useEffect, cloneElement } from 'react';
import classNames from 'classnames';
import Overlay from '@alifd/overlay';

import Animate from '../animate';

import { log } from '../util';

const Overlay2 = props => {
    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }

    const {
        prefix = 'next-',
        animation = { in: 'expandInDown', out: 'expandOutUp' },
        visible,
        hasMask, // 仅兼容，Dialog/Drawer 后续会自己提供mask
        align,
        points = align ? align.split(' ') : undefined,
        onPosition,
        children,
        className,
        style,
        wrapperClassName,

        beforeOpen,
        onOpen,
        afterOpen,
        beforeClose,
        onClose,
        afterClose,

        ...others
    } = props;

    const [isAnimationEnd, markAnimationEnd] = useState(true);
    const overlayRef = useRef(null);

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

    const childrenNode = (
        <Animate.OverlayAnimate
            visible={visible}
            animation={animation}
            onEnter={handleEnter}
            onEntering={handleEntering}
            onEntered={handleEntered}
            onExit={handleExit}
            onExiting={handleExiting}
            onExited={handleExited}
            timeout={300}
            style={style}
        >
            {children ? (
                cloneElement(children, {
                    className: classNames([
                        `${prefix}overlay-inner`,
                        className,
                        children && children.props && children.props.className,
                    ]),
                })
            ) : (
                <span />
            )}
        </Animate.OverlayAnimate>
    );

    const wraperCls = classNames({
        [`${prefix}overlay-wrapper v2`]: true,
        [wrapperClassName]: wrapperClassName,
        opened: visible,
    });

    const handlePosition = result => {
        // 兼容 1.x, 2.x 可去除这段逻辑
        Object.assign(result, { align: result.config.points });

        typeof onPosition === 'function' && onPosition(result);
    };

    const maskRender = node => (
        <Animate.OverlayAnimate
            visible={visible}
            animation={animation ? { in: 'fadeIn', out: 'fadeOut' } : false}
            timeout={300}
            unmountOnExit
        >
            {node}
        </Animate.OverlayAnimate>
    );

    return (
        <Overlay
            {...others}
            visible={visible}
            isAnimationEnd={isAnimationEnd}
            hasMask={hasMask}
            wrapperClassName={wraperCls}
            maskClassName={`${prefix}overlay-backdrop`}
            maskRender={maskRender}
            points={points}
            onPosition={handlePosition}
            ref={overlayRef}
        >
            {childrenNode}
        </Overlay>
    );
};

export default Overlay2;

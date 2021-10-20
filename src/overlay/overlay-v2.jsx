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
        wrapperClassName,

        // 兼容 1.x 而已，其实这几个api没啥用
        beforeOpen,
        onOpen,
        beforeClose,
        onClose,

        ...others
    } = props;

    const handleEnter = () => {
        typeof beforeOpen === 'function' && beforeOpen();
    };
    const handleEntering = () => {
        typeof onOpen === 'function' && onOpen();
    };
    const handleExit = () => {
        typeof beforeClose === 'function' && beforeClose();
    };
    const handleExited = () => {
        typeof onClose === 'function' && onClose();
    };

    const childrenNode = (
        <Animate.OverlayAnimate
            visible={visible}
            animation={animation}
            onEnter={handleEnter}
            onEntering={handleEntering}
            onExit={handleExit}
            onExited={handleExited}
            timeout={{
                appear: 500,
                enter: 300,
                exit: 500,
            }}
        >
            {children ? (
                cloneElement(children, {
                    className: classNames([
                        `${prefix}overlay-inner`,
                        children && children.props && children.props.className,
                    ]),
                })
            ) : (
                <span />
            )}
        </Animate.OverlayAnimate>
    );

    const wraperCls = classNames({
        [`${prefix}overlay-wrapper`]: true,
        [wrapperClassName]: wrapperClassName,
        opened: visible,
    });

    const handlePosition = result => {
        // 兼容 1.x, 2.x 可去除这段逻辑
        const points = result.config.points;
        Object.assign(result, { align: points.join(' ') });

        typeof onPosition === 'function' && onPosition(result);
    };

    return (
        <Overlay
            {...others}
            visible={visible}
            hasMask={hasMask}
            wrapperClassName={wraperCls}
            maskClassName={`${prefix}overlay-backdrop`}
            points={points}
            onPosition={handlePosition}
        >
            {childrenNode}
        </Overlay>
    );
};

export default Overlay2;

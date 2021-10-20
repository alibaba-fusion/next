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
        wrapperClassName,
        triggerClickKeycode,
        align,

        // 兼容 1.x 而已，其实这几个api没啥用
        beforeOpen,
        onOpen,
        beforeClose,
        onClose,

        ...others
    } = props;

    const [visible, setVisible] = useState(defaultVisible);

    useEffect(() => {
        if ('visible' in props) {
            setVisible(props.visible);
        }
    }, [props.visible]);

    const handleVisibleChange = (visible, e) => {
        if (!('visible' in props)) {
            setVisible(visible);
        }

        onVisibleChange(visible, e);
    };

    const triggerNode = overlay ? children : trigger;
    let overlayNode = overlay ? overlay : children;

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

    overlayNode = (
        <Animate.OverlayAnimate
            visible={visible}
            animation={animation}
            timeout={{
                appear: 500,
                enter: 300,
                exit: 500,
            }}
            onEnter={handleEnter}
            onEntering={handleEntering}
            onExit={handleExit}
            onExited={handleExited}
        >
            {overlayNode ? (
                cloneElement(overlayNode, {
                    className: classNames([
                        `${prefix}overlay-inner`,
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
        const points = result.config.points;
        Object.assign(result, { align: points.join(' ') });

        typeof onPosition === 'function' && onPosition(result);
    };

    const wraperCls = classNames({
        [`${prefix}overlay-wrapper`]: true,
        [wrapperClassName]: wrapperClassName,
        opened: visible,
    });

    // 兼容
    const v1Props = {};
    if (align) {
        v1Props.points = align.split(' ');
    }

    return (
        <Overlay.Popup
            {...others}
            {...v1Props}
            wrapperClassName={wraperCls}
            overlay={overlayNode}
            visible={visible}
            triggerType={triggerType}
            onVisibleChange={handleVisibleChange}
            onPosition={handlePosition}
            triggerClickKeyCode={triggerClickKeycode}
        >
            {triggerNode}
        </Overlay.Popup>
    );
};

export default Popup;

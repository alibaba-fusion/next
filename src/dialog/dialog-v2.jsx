import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import Inner from './inner';
import Animate from '../animate';
import zhCN from '../locale/zh-cn';
import { log, func, dom } from '../util';

const noop = func.noop;

const Dialog = props => {
    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }

    const {
        prefix = 'next-',
        afterClose = noop,
        hasMask = true,
        autoFocus = false,
        className,
        title,
        children,
        footer,
        footerAlign,
        footerActions,
        onOk = noop,
        onCancel = noop,
        okProps,
        cancelProps,
        locale = zhCN.Dialog,
        rtl,
        width = 520,
        height,
        visible: pvisible,
        closeMode = ['close', 'esc'],
        animation = { in: 'fadeInUp', out: 'fadeOutUp' },
        cache,
        wrapperStyle,
        popupContainer = document.body,
        dialogRender,
        ...others
    } = props;

    const [firstVisible, setFirst] = useState(pvisible);
    const [visible, setVisible] = useState(pvisible);
    const [isAnimationEnd, markAnimationEnd] = useState(false);

    const getContainer =
        typeof popupContainer === 'string'
            ? () => document.getElementById(popupContainer)
            : typeof popupContainer !== 'function'
            ? () => popupContainer
            : popupContainer;
    const [container, setContainer] = useState(getContainer());
    const dialogRef = useRef(null);
    const wrapperRef = useRef(null);
    const originStyle = useRef('');

    let canCloseByEsc = false;
    let canCloseByMask = false;
    let closeable = false;

    closeMode.forEach(mode => {
        switch (mode) {
            case 'esc':
                canCloseByEsc = true;
                break;
            case 'mask':
                canCloseByMask = true;
                break;
            case 'close':
                closeable = true;
                break;
        }
    });

    // visible 受控
    useEffect(() => {
        if ('visible' in props) {
            setVisible(pvisible);
        }
    }, [pvisible]);

    // 打开遮罩后 document.body 滚动处理
    useEffect(() => {
        if (visible && hasMask) {
            originStyle.current = document.body.getAttribute('style');
            dom.setStyle(document.body, 'overflow', 'hidden');

            if (dom.hasScroll(document.body)) {
                const scrollWidth = dom.scrollbar().width;
                if (scrollWidth) {
                    dom.setStyle(
                        document.body,
                        'paddingRight',
                        `${dom.getStyle(document.body, 'paddingRight') + dom.scrollbar().width}px`
                    );
                }
            }
        }
    }, [visible && hasMask]);

    const keydownEvent = e => {
        if (e.keyCode === 27 && canCloseByEsc) {
            onCancel(e);
        }
    };

    // esc 键盘事件处理
    useEffect(() => {
        if (visible && canCloseByEsc) {
            document.body.addEventListener('keydown', keydownEvent, false);
            return () => {
                document.body.removeEventListener('keydown', keydownEvent, false);
            };
        }
    }, [visible && canCloseByEsc]);

    // 优化: 第一次加载并且 visible=false 的情况不挂载弹窗
    useEffect(() => {
        !firstVisible && visible && setFirst(true);
    }, [visible]);

    // container 异步加载情况
    useEffect(() => {
        if (!container) {
            setTimeout(() => {
                setContainer(getContainer());
            });
        }
    }, [container]);

    if (firstVisible === false || !container) {
        return null;
    }

    if (!visible && !cache && isAnimationEnd) {
        return null;
    }

    const handleCancel = e => {
        if (!e.triggerType && e.type === 'kendown') {
            e.triggerType = 'esc';
        }

        onCancel(e);
    };

    const handleClose = (triggerType, e) => {
        // typeof onClose === 'function' && onClose(triggerType, e);

        e.triggerType = triggerType;
        handleCancel(e);
    };

    const handleMaskClick = e => {
        if (!canCloseByMask) {
            return;
        }

        if (e.type === 'click' && dialogRef.current) {
            const dialogNode = ReactDOM.findDOMNode(dialogRef.current);
            if (dialogNode && dialogNode.contains(e.target)) {
                return;
            }
        }

        e.triggerType = 'mask';
        handleCancel(e);
    };

    const handleEnter = e => {
        markAnimationEnd(false);
        dom.setStyle(wrapperRef.current, 'display', '');
    };

    const handleExited = () => {
        markAnimationEnd(true);
        dom.setStyle(wrapperRef.current, 'display', 'none');
        document.body.setAttribute('style', originStyle.current || '');
        afterClose();
    };

    const wrapperCls = classNames({
        [`${prefix}overlay-wrapper`]: true,
        opened: visible,
    });
    const dialogCls = classNames({
        [`${prefix}dialog-v2`]: true,
        [className]: !!className,
    });

    let inner = (
        <Animate.OverlayAnimate
            visible={visible}
            animation={animation}
            timeout={{
                appear: 500,
                enter: 300,
                exit: 500,
            }}
            onEnter={handleEnter}
            onExited={handleExited}
        >
            <Inner
                {...others}
                v2
                ref={dialogRef}
                prefix={prefix}
                className={dialogCls}
                title={title}
                footer={footer}
                footerAlign={footerAlign}
                footerActions={footerActions}
                onOk={visible ? onOk : noop}
                onCancel={visible ? onCancel : noop}
                okProps={okProps}
                cancelProps={cancelProps}
                locale={locale}
                closeable={closeable}
                rtl={rtl}
                onClose={(...args) => handleClose('closeClick', ...args)}
                height={height}
                width={width}
            >
                {children}
            </Inner>
        </Animate.OverlayAnimate>
    );

    if (typeof dialogRender === 'function') {
        inner = dialogRender(inner);
    }

    return ReactDOM.createPortal(
        <div className={wrapperCls} style={wrapperStyle} ref={wrapperRef}>
            <Animate.OverlayAnimate
                visible={visible}
                animation={animation ? { in: 'fadeIn', out: 'fadeOut' } : false}
                timeout={300}
                unmountOnExit
            >
                <div className={`${prefix}overlay-backdrop`} />
            </Animate.OverlayAnimate>
            <div className={`${prefix}overlay-inner ${prefix}dialog-wrapper`} onClick={handleMaskClick}>
                <div className={`${prefix}dialog-inner-wrapper`}>{inner}</div>
            </div>
        </div>,
        container
    );
};

export default Dialog;

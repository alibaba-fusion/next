/* istanbul ignore file */
import React, { useState, useRef, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Overlay from '@alifd/overlay';

import Inner from './inner';
import Animate from '../animate';
import zhCN from '../locale/zh-cn';
import { log, func, dom, focus, guid } from '../util';
import scrollLocker from './scroll-locker';

const { OverlayContext } = Overlay;
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
        onCancel,
        okProps,
        cancelProps,
        locale = zhCN.Dialog,
        rtl,
        visible: pvisible,
        closeMode = ['close', 'esc'],
        closeIcon,
        animation = { in: 'fadeInUp', out: 'fadeOutUp' },
        cache,
        wrapperStyle,
        popupContainer = document.body,
        dialogRender,
        centered,
        top = centered ? 40 : 100,
        bottom = 40,
        width = 520,
        height,
        isFullScreen,
        overflowScroll = !isFullScreen,
        minMargin,
        onClose,
        style,
        wrapperClassName,
        ...others
    } = props;

    if ('isFullScreen' in props) {
        log.deprecated('isFullScreen', 'overflowScroll', 'Dialog v2');
    }
    if ('minMargin' in props) {
        log.deprecated('minMargin', 'top/bottom', 'Dialog v2');
    }

    const [firstVisible, setFirst] = useState(pvisible || false);
    const [visible, setVisible] = useState(pvisible);
    const getContainer =
        typeof popupContainer === 'string'
            ? () => document.getElementById(popupContainer)
            : typeof popupContainer !== 'function'
              ? () => popupContainer
              : popupContainer;
    const [container, setContainer] = useState(getContainer());
    const dialogRef = useRef(null);
    const wrapperRef = useRef(null);
    const lastFocus = useRef(null);
    const locker = useRef(null);
    const [uuid] = useState(guid());
    const { setVisibleOverlayToParent, ...otherContext } = useContext(OverlayContext);
    const childIDMap = useRef(new Map());
    const isAnimationEnd = useRef(false);
    const [, forceUpdate] = useState();

    const markAnimationEnd = state => {
        isAnimationEnd.current = state;
        forceUpdate({});
    };

    let canCloseByEsc = false;
    let canCloseByMask = false;
    let closeable = false;

    const closeModeArray = Array.isArray(closeMode) ? closeMode : [closeMode];
    closeModeArray.forEach(mode => {
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
            const style = {
                overflow: 'hidden',
            };

            if (dom.hasScroll(document.body)) {
                const scrollWidth = dom.scrollbar().width;
                if (scrollWidth) {
                    style.paddingRight = `${dom.getStyle(document.body, 'paddingRight') + dom.scrollbar().width}px`;
                }
            }
            locker.current = scrollLocker.lock(document.body, style);
        }
    }, [visible && hasMask]);

    const handleClose = (targetType, e) => {
        setVisibleOverlayToParent(uuid, null);
        typeof onClose === 'function' && onClose(targetType, e);
    };

    const keydownEvent = e => {
        if (e.keyCode === 27 && canCloseByEsc && !childIDMap.current.size) {
            handleClose('esc', e);
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

    const handleExited = () => {
        if (!isAnimationEnd.current) {
            markAnimationEnd(true);
            dom.setStyle(wrapperRef.current, 'display', 'none');
            scrollLocker.unlock(document.body, locker.current);

            if (autoFocus && lastFocus.current) {
                try {
                    lastFocus.current.focus();
                } finally {
                    // ignore ...
                }
                lastFocus.current = null;
            }
            afterClose();
        }
    };

    useEffect(() => {
        return () => {
            handleExited();
        };
    }, []);

    if (firstVisible === false || !container) {
        return null;
    }

    if (!visible && !cache && isAnimationEnd.current) {
        return null;
    }

    const handleCancel = e => {
        if (typeof onCancel === 'function') {
            onCancel(e);
        } else {
            handleClose('cancelBtn', e);
        }
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

        handleClose('maskClick', e);
    };

    const handleEnter = () => {
        markAnimationEnd(false);
        dom.setStyle(wrapperRef.current, 'display', '');
    };
    const handleEntered = () => {
        if (autoFocus && dialogRef.current && dialogRef.current.bodyNode) {
            const focusableNodes = focus.getFocusNodeList(dialogRef.current.bodyNode);
            if (focusableNodes.length > 0 && focusableNodes[0]) {
                lastFocus.current = document.activeElement;
                focusableNodes[0].focus();
            }
        }
        setVisibleOverlayToParent(uuid, wrapperRef.current);
    };

    const wrapperCls = classNames({
        [`${prefix}overlay-wrapper`]: true,
        [wrapperClassName]: !!wrapperClassName,
        opened: visible,
    });
    const dialogCls = classNames({
        [`${prefix}dialog-v2`]: true,
        [className]: !!className,
    });

    const topStyle = {};
    if (centered) {
        // 兼容 minMargin
        if (!top && !bottom && minMargin) {
            topStyle.marginTop = minMargin;
            topStyle.marginBottom = minMargin;
        } else {
            top && (topStyle.marginTop = top);
            bottom && (topStyle.marginBottom = bottom);
        }
    } else {
        top && (topStyle.top = top);
        bottom && (topStyle.paddingBottom = bottom);
    }

    const innerStyle = style || {};
    if (overflowScroll && !innerStyle.maxHeight) {
        innerStyle.maxHeight = `calc(100vh - ${top + bottom}px)`;
    }

    const timeout = {
        appear: 300,
        enter: 300,
        exit: 250,
    };

    let inner = (
        <Animate.OverlayAnimate
            visible={visible}
            animation={animation}
            timeout={timeout}
            onEnter={handleEnter}
            onEntered={handleEntered}
            onExited={handleExited}
        >
            <Inner
                {...others}
                style={centered ? { ...topStyle, ...innerStyle } : innerStyle}
                v2
                ref={dialogRef}
                prefix={prefix}
                className={dialogCls}
                title={title}
                footer={footer}
                footerAlign={footerAlign}
                footerActions={footerActions}
                onOk={visible ? onOk : noop}
                onCancel={visible ? handleCancel : noop}
                okProps={okProps}
                cancelProps={cancelProps}
                locale={locale}
                closeable={closeable}
                rtl={rtl}
                onClose={(...args) => handleClose('closeClick', ...args)}
                closeIcon={closeIcon}
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

    const innerWrapperCls = classNames({
        [`${prefix}overlay-inner`]: true,
        [`${prefix}dialog-wrapper`]: true,
        [`${prefix}dialog-centered`]: centered,
    });

    const getVisibleOverlayFromChild = (id, node) => {
        if (node) {
            childIDMap.current.set(id, node);
        } else {
            childIDMap.current.delete(id);
        }
        // 让父级也感知
        setVisibleOverlayToParent(id, node);
    };

    return (
        <OverlayContext.Provider
            value={{
                ...otherContext,
                setVisibleOverlayToParent: getVisibleOverlayFromChild,
            }}
        >
            {ReactDOM.createPortal(
                <div className={wrapperCls} style={wrapperStyle} ref={wrapperRef}>
                    {hasMask ? (
                        <Animate.OverlayAnimate
                            visible={visible}
                            animation={animation ? { in: 'fadeIn', out: 'fadeOut' } : false}
                            timeout={timeout}
                            unmountOnExit
                        >
                            <div className={`${prefix}overlay-backdrop`} />
                        </Animate.OverlayAnimate>
                    ) : null}

                    <div className={innerWrapperCls} onClick={handleMaskClick}>
                        {centered ? (
                            inner
                        ) : (
                            <div style={topStyle} className={`${prefix}dialog-inner-wrapper`}>
                                {inner}
                            </div>
                        )}
                    </div>
                </div>,
                container
            )}
        </OverlayContext.Provider>
    );
};

export default Dialog;

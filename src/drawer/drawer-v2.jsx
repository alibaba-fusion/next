/* istanbul ignore file */
import React, { useState, useRef, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Overlay from '@alifd/overlay';

import Inner from './inner';
import Animate from '../animate';
import zhCN from '../locale/zh-cn';
import { log, func, dom, focus, guid } from '../util';
import scrollLocker from '../dialog/scroll-locker';

const { OverlayContext } = Overlay;
const noop = func.noop;

const getAnimation = placement => {
    let animation;
    switch (placement) {
        case 'top':
            animation = {
                in: 'slideInDown',
                out: 'slideOutUp',
            };
            break;
        case 'bottom':
            animation = {
                in: 'slideInUp',
                out: 'slideOutDown',
            };
            break;
        case 'left':
            animation = {
                in: 'slideInLeft',
                out: 'slideOutLeft',
            };
            break;
        case 'right':
        default:
            animation = {
                in: 'slideInRight',
                out: 'slideOutRight',
            };
            break;
    }

    return animation;
};

const Drawer = props => {
    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }

    const {
        prefix = 'next-',
        hasMask = true,
        className,
        title,
        children,
        cache,
        closeMode = ['close', 'mask', 'esc'],
        width,
        height,
        onClose,
        placement = 'right',
        headerStyle,
        bodyStyle,
        visible: pvisible,
        afterClose = noop,
        locale = zhCN.Drawer,
        rtl,
        animation,
        wrapperStyle,
        popupContainer = document.body,
        style,
        ...others
    } = props;

    const [firstVisible, setFirst] = useState(pvisible || false);
    const [visible, setVisible] = useState(pvisible);
    const [isAnimationEnd, markAnimationEnd] = useState(false);
    const getContainer =
        typeof popupContainer === 'string'
            ? () => document.getElementById(popupContainer)
            : typeof popupContainer !== 'function'
            ? () => popupContainer
            : popupContainer;
    const [container, setContainer] = useState(getContainer());
    const drawerRef = useRef(null);
    const wrapperRef = useRef(null);
    const locker = useRef(null);
    const [uuid] = useState(guid());
    const { setVisibleOverlayToParent, ...otherContext } = useContext(OverlayContext);
    const childIDMap = useRef(new Map());

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

    if (firstVisible === false || !container) {
        return null;
    }

    if (!visible && !cache && isAnimationEnd) {
        return null;
    }

    const handleMaskClick = e => {
        if (!canCloseByMask) {
            return;
        }

        handleClose('maskClick', e);
    };

    const handleEnter = () => {
        markAnimationEnd(false);
        dom.setStyle(wrapperRef.current, 'display', '');
    };
    const handleEntered = () => {
        setVisibleOverlayToParent(uuid, drawerRef.current);
    };

    const handleExited = () => {
        markAnimationEnd(true);
        dom.setStyle(wrapperRef.current, 'display', 'none');
        scrollLocker.unlock(document.body, locker.current);
        afterClose();
    };

    const wrapperCls = classNames({
        [`${prefix}overlay-wrapper`]: true,
        opened: visible,
    });
    const innerWrapperCls = classNames({
        [`${prefix}overlay-inner`]: true,
        [`${prefix}drawer-wrapper`]: true,
        [`${prefix}drawer-${placement}`]: true,
        [className]: !!className,
    });
    const drawerCls = classNames({
        [`${prefix}drawer-v2`]: true,
        [className]: !!className,
    });

    const newAnimation =
        animation === null || animation === false ? null : animation ? animation : getAnimation(placement);

    const timeout = {
        appear: 300,
        enter: 300,
        exit: 250,
    };

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
                            animation={newAnimation ? { in: 'fadeIn', out: 'fadeOut' } : false}
                            timeout={timeout}
                            unmountOnExit
                        >
                            <div className={`${prefix}overlay-backdrop`} onClick={handleMaskClick} />
                        </Animate.OverlayAnimate>
                    ) : null}

                    <div className={innerWrapperCls} style={{ width, height }} ref={drawerRef}>
                        <Animate.OverlayAnimate
                            visible={visible}
                            animation={newAnimation}
                            timeout={timeout}
                            onEnter={handleEnter}
                            onEntered={handleEntered}
                            onExited={handleExited}
                        >
                            <Inner
                                {...others}
                                v2
                                prefix={prefix}
                                title={title}
                                className={drawerCls}
                                locale={locale}
                                closeable={closeable}
                                rtl={rtl}
                                headerStyle={headerStyle}
                                bodyStyle={bodyStyle}
                                onClose={(...args) => handleClose('closeClick', ...args)}
                            >
                                {children}
                            </Inner>
                        </Animate.OverlayAnimate>
                    </div>
                </div>,
                container
            )}
        </OverlayContext.Provider>
    );
};

export default Drawer;

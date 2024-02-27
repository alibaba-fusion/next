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
import type { DrawerV2Props } from './types';

const { OverlayContext } = Overlay;
const noop = func.noop;

interface CustomDrawerElement extends HTMLDivElement {
    bodyNode?: HTMLElement;
}

const getAnimation = (placement: string) => {
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

const Drawer = (props: DrawerV2Props) => {
    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }

    const {
        prefix = 'next-',
        hasMask = true,
        autoFocus = false,
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
    const getContainer =
        typeof popupContainer === 'string'
            ? () => document.getElementById(popupContainer)
            : typeof popupContainer !== 'function'
              ? () => popupContainer
              : popupContainer;
    const [container, setContainer] = useState(getContainer());
    const drawerRef = useRef<CustomDrawerElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const lastFocus = useRef<HTMLElement | null>(null);
    const locker = useRef<ReturnType<typeof scrollLocker.lock> | null>(null);
    const [uuid] = useState(guid());
    const { setVisibleOverlayToParent, ...otherContext } = useContext(OverlayContext);
    const childIDMap = useRef(new Map());
    const isAnimationEnd = useRef(false); // 动效是否结束, 因为时机非常快用 state 太慢
    const [, forceUpdate] = useState<object | undefined>();

    // 动效结束，强制重新渲染
    const markAnimationEnd = (state: boolean) => {
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
            const style: { paddingRight?: string; overflow: string } = {
                overflow: 'hidden',
            };

            if (dom.hasScroll(document.body)) {
                const scrollWidth = dom.scrollbar().width;
                if (scrollWidth) {
                    style.paddingRight = `${
                        dom.getStyle(document.body, 'paddingRight').toString() +
                        dom.scrollbar().width
                    }px`;
                }
            }
            locker.current = scrollLocker.lock(document.body, style);
        }
    }, [visible && hasMask]);

    const handleClose = (
        targetType: string,
        e: React.MouseEvent<Element, MouseEvent> | KeyboardEvent
    ) => {
        setVisibleOverlayToParent(uuid, null);
        typeof onClose === 'function' && onClose(targetType, e);
    };

    const keydownEvent = (e: KeyboardEvent) => {
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

    // Drawer 关闭时候的处理。1. 结束的时候不管动效是不是已经结束都要隐藏弹窗；2. 需要把focus态还原到触发节点
    const handleExited = () => {
        if (!isAnimationEnd.current) {
            markAnimationEnd(true);
            dom.setStyle(wrapperRef.current!, 'display', 'none');
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

    // visible? <Drawer/>: null; 这种写法会触发卸载
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

    const handleMaskClick = (e: React.MouseEvent<Element, MouseEvent> | KeyboardEvent) => {
        if (!canCloseByMask) {
            return;
        }

        handleClose('maskClick', e);
    };

    const handleEnter = () => {
        markAnimationEnd(false);
        dom.setStyle(wrapperRef.current!, 'display', '');
    };
    const handleEntered = () => {
        if (autoFocus && drawerRef.current && drawerRef.current.bodyNode) {
            const focusableNodes = focus.getFocusNodeList(drawerRef.current.bodyNode);
            if (focusableNodes.length > 0 && focusableNodes[0]) {
                lastFocus.current = document.activeElement as HTMLElement;
                const firstFocusableNode = focusableNodes[0] as HTMLElement;
                firstFocusableNode.focus();
            }
        }
        setVisibleOverlayToParent(uuid, drawerRef.current);
    };

    const wrapperCls = classNames({
        [`${prefix}overlay-wrapper`]: true,
        opened: visible,
    });
    const innerWrapperCls = classNames({
        [`${prefix}overlay-inner`]: true,
        [`${prefix}drawer-wrapper`]: true,
        [`${prefix}drawer-${placement}`]: true,
        [className!]: !!className,
    });
    const drawerCls = classNames({
        [`${prefix}drawer-v2`]: true,
        [className!]: !!className,
    });

    const newAnimation: DrawerV2Props['animation'] =
        animation === null || animation === false
            ? undefined
            : animation
              ? animation
              : getAnimation(placement);

    const timeout = {
        appear: 300,
        enter: 300,
        exit: 250,
    };

    const getVisibleOverlayFromChild = (id: string, node: HTMLElement) => {
        if (node) {
            childIDMap.current.set(id, node);
        } else {
            childIDMap.current.delete(id);
        }
        // 让父级也感知
        setVisibleOverlayToParent(id, node);
    };

    const nstyle = {
        width,
        height,
        ...style,
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
                            <div
                                className={`${prefix}overlay-backdrop`}
                                onClick={handleMaskClick}
                            />
                        </Animate.OverlayAnimate>
                    ) : null}

                    <div className={innerWrapperCls} style={nstyle} ref={drawerRef}>
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

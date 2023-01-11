import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
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

var OverlayContext = Overlay.OverlayContext;

var noop = func.noop;

var getAnimation = function getAnimation(placement) {
    var animation = void 0;
    switch (placement) {
        case 'top':
            animation = {
                in: 'slideInDown',
                out: 'slideOutUp'
            };
            break;
        case 'bottom':
            animation = {
                in: 'slideInUp',
                out: 'slideOutDown'
            };
            break;
        case 'left':
            animation = {
                in: 'slideInLeft',
                out: 'slideOutLeft'
            };
            break;
        case 'right':
        default:
            animation = {
                in: 'slideInRight',
                out: 'slideOutRight'
            };
            break;
    }

    return animation;
};

var Drawer = function Drawer(props) {
    var _classNames, _classNames2, _classNames3;

    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }

    var _props$prefix = props.prefix,
        prefix = _props$prefix === undefined ? 'next-' : _props$prefix,
        _props$hasMask = props.hasMask,
        hasMask = _props$hasMask === undefined ? true : _props$hasMask,
        _props$autoFocus = props.autoFocus,
        autoFocus = _props$autoFocus === undefined ? false : _props$autoFocus,
        className = props.className,
        title = props.title,
        children = props.children,
        cache = props.cache,
        _props$closeMode = props.closeMode,
        closeMode = _props$closeMode === undefined ? ['close', 'mask', 'esc'] : _props$closeMode,
        width = props.width,
        height = props.height,
        onClose = props.onClose,
        _props$placement = props.placement,
        placement = _props$placement === undefined ? 'right' : _props$placement,
        headerStyle = props.headerStyle,
        bodyStyle = props.bodyStyle,
        pvisible = props.visible,
        _props$afterClose = props.afterClose,
        afterClose = _props$afterClose === undefined ? noop : _props$afterClose,
        _props$locale = props.locale,
        locale = _props$locale === undefined ? zhCN.Drawer : _props$locale,
        rtl = props.rtl,
        animation = props.animation,
        wrapperStyle = props.wrapperStyle,
        _props$popupContainer = props.popupContainer,
        popupContainer = _props$popupContainer === undefined ? document.body : _props$popupContainer,
        style = props.style,
        others = _objectWithoutProperties(props, ['prefix', 'hasMask', 'autoFocus', 'className', 'title', 'children', 'cache', 'closeMode', 'width', 'height', 'onClose', 'placement', 'headerStyle', 'bodyStyle', 'visible', 'afterClose', 'locale', 'rtl', 'animation', 'wrapperStyle', 'popupContainer', 'style']);

    var _useState = useState(pvisible || false),
        firstVisible = _useState[0],
        setFirst = _useState[1];

    var _useState2 = useState(pvisible),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var getContainer = typeof popupContainer === 'string' ? function () {
        return document.getElementById(popupContainer);
    } : typeof popupContainer !== 'function' ? function () {
        return popupContainer;
    } : popupContainer;

    var _useState3 = useState(getContainer()),
        container = _useState3[0],
        setContainer = _useState3[1];

    var drawerRef = useRef(null);
    var wrapperRef = useRef(null);
    var lastFocus = useRef(null);
    var locker = useRef(null);

    var _useState4 = useState(guid()),
        uuid = _useState4[0];

    var _useContext = useContext(OverlayContext),
        setVisibleOverlayToParent = _useContext.setVisibleOverlayToParent,
        otherContext = _objectWithoutProperties(_useContext, ['setVisibleOverlayToParent']);

    var childIDMap = useRef(new Map());
    var isAnimationEnd = useRef(false); // 动效是否结束, 因为时机非常快用 state 太慢

    var _useState5 = useState(),
        forceUpdate = _useState5[1];

    // 动效结束，强制重新渲染


    var markAnimationEnd = function markAnimationEnd(state) {
        isAnimationEnd.current = state;
        forceUpdate({});
    };

    var canCloseByEsc = false;
    var canCloseByMask = false;
    var closeable = false;

    var closeModeArray = Array.isArray(closeMode) ? closeMode : [closeMode];
    closeModeArray.forEach(function (mode) {
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
    useEffect(function () {
        if ('visible' in props) {
            setVisible(pvisible);
        }
    }, [pvisible]);

    // 打开遮罩后 document.body 滚动处理
    useEffect(function () {
        if (visible && hasMask) {
            var _style = {
                overflow: 'hidden'
            };

            if (dom.hasScroll(document.body)) {
                var scrollWidth = dom.scrollbar().width;
                if (scrollWidth) {
                    _style.paddingRight = dom.getStyle(document.body, 'paddingRight') + dom.scrollbar().width + 'px';
                }
            }
            locker.current = scrollLocker.lock(document.body, _style);
        }
    }, [visible && hasMask]);

    var handleClose = function handleClose(targetType, e) {
        setVisibleOverlayToParent(uuid, null);
        typeof onClose === 'function' && onClose(targetType, e);
    };

    var keydownEvent = function keydownEvent(e) {
        if (e.keyCode === 27 && canCloseByEsc && !childIDMap.current.size) {
            handleClose('esc', e);
        }
    };

    // esc 键盘事件处理
    useEffect(function () {
        if (visible && canCloseByEsc) {
            document.body.addEventListener('keydown', keydownEvent, false);
            return function () {
                document.body.removeEventListener('keydown', keydownEvent, false);
            };
        }
    }, [visible && canCloseByEsc]);

    // 优化: 第一次加载并且 visible=false 的情况不挂载弹窗
    useEffect(function () {
        !firstVisible && visible && setFirst(true);
    }, [visible]);

    // container 异步加载情况
    useEffect(function () {
        if (!container) {
            setTimeout(function () {
                setContainer(getContainer());
            });
        }
    }, [container]);

    // Drawer 关闭时候的处理。1. 结束的时候不管动效是不是已经结束都要隐藏弹窗；2. 需要把focus态还原到触发节点
    var handleExited = function handleExited() {
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

    // visible? <Drawer/>: null; 这种写法会触发卸载
    useEffect(function () {
        return function () {
            handleExited();
        };
    }, []);

    if (firstVisible === false || !container) {
        return null;
    }

    if (!visible && !cache && isAnimationEnd.current) {
        return null;
    }

    var handleMaskClick = function handleMaskClick(e) {
        if (!canCloseByMask) {
            return;
        }

        handleClose('maskClick', e);
    };

    var handleEnter = function handleEnter() {
        markAnimationEnd(false);
        dom.setStyle(wrapperRef.current, 'display', '');
    };
    var handleEntered = function handleEntered() {
        if (autoFocus && drawerRef.current && drawerRef.current.bodyNode) {
            var focusableNodes = focus.getFocusNodeList(drawerRef.current.bodyNode);
            if (focusableNodes.length > 0 && focusableNodes[0]) {
                lastFocus.current = document.activeElement;
                focusableNodes[0].focus();
            }
        }
        setVisibleOverlayToParent(uuid, drawerRef.current);
    };

    var wrapperCls = classNames((_classNames = {}, _classNames[prefix + 'overlay-wrapper'] = true, _classNames.opened = visible, _classNames));
    var innerWrapperCls = classNames((_classNames2 = {}, _classNames2[prefix + 'overlay-inner'] = true, _classNames2[prefix + 'drawer-wrapper'] = true, _classNames2[prefix + 'drawer-' + placement] = true, _classNames2[className] = !!className, _classNames2));
    var drawerCls = classNames((_classNames3 = {}, _classNames3[prefix + 'drawer-v2'] = true, _classNames3[className] = !!className, _classNames3));

    var newAnimation = animation === null || animation === false ? null : animation ? animation : getAnimation(placement);

    var timeout = {
        appear: 300,
        enter: 300,
        exit: 250
    };

    var getVisibleOverlayFromChild = function getVisibleOverlayFromChild(id, node) {
        if (node) {
            childIDMap.current.set(id, node);
        } else {
            childIDMap.current.delete(id);
        }
        // 让父级也感知
        setVisibleOverlayToParent(id, node);
    };

    var nstyle = _extends({
        width: width,
        height: height
    }, style);

    return React.createElement(
        OverlayContext.Provider,
        {
            value: _extends({}, otherContext, {
                setVisibleOverlayToParent: getVisibleOverlayFromChild
            })
        },
        ReactDOM.createPortal(React.createElement(
            'div',
            { className: wrapperCls, style: wrapperStyle, ref: wrapperRef },
            hasMask ? React.createElement(
                Animate.OverlayAnimate,
                {
                    visible: visible,
                    animation: newAnimation ? { in: 'fadeIn', out: 'fadeOut' } : false,
                    timeout: timeout,
                    unmountOnExit: true
                },
                React.createElement('div', { className: prefix + 'overlay-backdrop', onClick: handleMaskClick })
            ) : null,
            React.createElement(
                'div',
                { className: innerWrapperCls, style: nstyle, ref: drawerRef },
                React.createElement(
                    Animate.OverlayAnimate,
                    {
                        visible: visible,
                        animation: newAnimation,
                        timeout: timeout,
                        onEnter: handleEnter,
                        onEntered: handleEntered,
                        onExited: handleExited
                    },
                    React.createElement(
                        Inner,
                        _extends({}, others, {
                            v2: true,
                            prefix: prefix,
                            title: title,
                            className: drawerCls,
                            locale: locale,
                            closeable: closeable,
                            rtl: rtl,
                            headerStyle: headerStyle,
                            bodyStyle: bodyStyle,
                            onClose: function onClose() {
                                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                                    args[_key] = arguments[_key];
                                }

                                return handleClose.apply(undefined, ['closeClick'].concat(args));
                            }
                        }),
                        children
                    )
                )
            )
        ), container)
    );
};

export default Drawer;
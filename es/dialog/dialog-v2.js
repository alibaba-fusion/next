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
import scrollLocker from './scroll-locker';

var OverlayContext = Overlay.OverlayContext;

var noop = func.noop;

var Dialog = function Dialog(props) {
    var _classNames, _classNames2, _classNames3;

    if (!useState || !useRef || !useEffect) {
        log.warning('need react version > 16.8.0');
        return null;
    }

    var _props$prefix = props.prefix,
        prefix = _props$prefix === undefined ? 'next-' : _props$prefix,
        _props$afterClose = props.afterClose,
        afterClose = _props$afterClose === undefined ? noop : _props$afterClose,
        _props$hasMask = props.hasMask,
        hasMask = _props$hasMask === undefined ? true : _props$hasMask,
        _props$autoFocus = props.autoFocus,
        autoFocus = _props$autoFocus === undefined ? false : _props$autoFocus,
        className = props.className,
        title = props.title,
        children = props.children,
        footer = props.footer,
        footerAlign = props.footerAlign,
        footerActions = props.footerActions,
        _props$onOk = props.onOk,
        onOk = _props$onOk === undefined ? noop : _props$onOk,
        onCancel = props.onCancel,
        okProps = props.okProps,
        cancelProps = props.cancelProps,
        _props$locale = props.locale,
        locale = _props$locale === undefined ? zhCN.Dialog : _props$locale,
        rtl = props.rtl,
        pvisible = props.visible,
        _props$closeMode = props.closeMode,
        closeMode = _props$closeMode === undefined ? ['close', 'esc'] : _props$closeMode,
        closeIcon = props.closeIcon,
        _props$animation = props.animation,
        animation = _props$animation === undefined ? { in: 'fadeInUp', out: 'fadeOutUp' } : _props$animation,
        cache = props.cache,
        wrapperStyle = props.wrapperStyle,
        _props$popupContainer = props.popupContainer,
        popupContainer = _props$popupContainer === undefined ? document.body : _props$popupContainer,
        dialogRender = props.dialogRender,
        centered = props.centered,
        _props$top = props.top,
        top = _props$top === undefined ? centered ? 40 : 100 : _props$top,
        _props$bottom = props.bottom,
        bottom = _props$bottom === undefined ? 40 : _props$bottom,
        _props$width = props.width,
        width = _props$width === undefined ? 520 : _props$width,
        height = props.height,
        isFullScreen = props.isFullScreen,
        _props$overflowScroll = props.overflowScroll,
        overflowScroll = _props$overflowScroll === undefined ? !isFullScreen : _props$overflowScroll,
        minMargin = props.minMargin,
        onClose = props.onClose,
        style = props.style,
        others = _objectWithoutProperties(props, ['prefix', 'afterClose', 'hasMask', 'autoFocus', 'className', 'title', 'children', 'footer', 'footerAlign', 'footerActions', 'onOk', 'onCancel', 'okProps', 'cancelProps', 'locale', 'rtl', 'visible', 'closeMode', 'closeIcon', 'animation', 'cache', 'wrapperStyle', 'popupContainer', 'dialogRender', 'centered', 'top', 'bottom', 'width', 'height', 'isFullScreen', 'overflowScroll', 'minMargin', 'onClose', 'style']);

    if ('isFullScreen' in props) {
        log.deprecated('isFullScreen', 'overflowScroll', 'Dialog v2');
    }
    if ('minMargin' in props) {
        log.deprecated('minMargin', 'top/bottom', 'Dialog v2');
    }

    var _useState = useState(pvisible || false),
        firstVisible = _useState[0],
        setFirst = _useState[1];

    var _useState2 = useState(pvisible),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var _useState3 = useState(false),
        isAnimationEnd = _useState3[0],
        markAnimationEnd = _useState3[1];

    var getContainer = typeof popupContainer === 'string' ? function () {
        return document.getElementById(popupContainer);
    } : typeof popupContainer !== 'function' ? function () {
        return popupContainer;
    } : popupContainer;

    var _useState4 = useState(getContainer()),
        container = _useState4[0],
        setContainer = _useState4[1];

    var dialogRef = useRef(null);
    var wrapperRef = useRef(null);
    var lastFocus = useRef(null);
    var locker = useRef(null);

    var _useState5 = useState(guid()),
        uuid = _useState5[0];

    var _useContext = useContext(OverlayContext),
        setVisibleOverlayToParent = _useContext.setVisibleOverlayToParent,
        otherContext = _objectWithoutProperties(_useContext, ['setVisibleOverlayToParent']);

    var childIDMap = useRef(new Map());

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

    if (firstVisible === false || !container) {
        return null;
    }

    if (!visible && !cache && isAnimationEnd) {
        return null;
    }

    var handleCancel = function handleCancel(e) {
        if (typeof onCancel === 'function') {
            onCancel(e);
        } else {
            handleClose('cancelBtn', e);
        }
    };

    var handleMaskClick = function handleMaskClick(e) {
        if (!canCloseByMask) {
            return;
        }

        if (e.type === 'click' && dialogRef.current) {
            var dialogNode = ReactDOM.findDOMNode(dialogRef.current);
            if (dialogNode && dialogNode.contains(e.target)) {
                return;
            }
        }

        handleClose('maskClick', e);
    };

    var handleEnter = function handleEnter() {
        markAnimationEnd(false);
        dom.setStyle(wrapperRef.current, 'display', '');
    };
    var handleEntered = function handleEntered() {
        if (autoFocus && dialogRef.current && dialogRef.current.bodyNode) {
            var focusableNodes = focus.getFocusNodeList(dialogRef.current.bodyNode);
            if (focusableNodes.length > 0 && focusableNodes[0]) {
                lastFocus.current = document.activeElement;
                focusableNodes[0].focus();
            }
        }
        setVisibleOverlayToParent(uuid, wrapperRef.current);
    };

    var handleExited = function handleExited() {
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
    };

    var wrapperCls = classNames((_classNames = {}, _classNames[prefix + 'overlay-wrapper'] = true, _classNames.opened = visible, _classNames));
    var dialogCls = classNames((_classNames2 = {}, _classNames2[prefix + 'dialog-v2'] = true, _classNames2[className] = !!className, _classNames2));

    var topStyle = {};
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

    var maxHeight = void 0;
    if (overflowScroll) {
        maxHeight = 'calc(100vh - ' + (top + bottom) + 'px)';
    }

    var timeout = {
        appear: 300,
        enter: 300,
        exit: 250
    };

    var inner = React.createElement(
        Animate.OverlayAnimate,
        {
            visible: visible,
            animation: animation,
            timeout: timeout,
            onEnter: handleEnter,
            onEntered: handleEntered,
            onExited: handleExited
        },
        React.createElement(
            Inner,
            _extends({}, others, {
                style: centered ? _extends({}, topStyle, style) : style,
                v2: true,
                ref: dialogRef,
                prefix: prefix,
                className: dialogCls,
                title: title,
                footer: footer,
                footerAlign: footerAlign,
                footerActions: footerActions,
                onOk: visible ? onOk : noop,
                onCancel: visible ? handleCancel : noop,
                okProps: okProps,
                cancelProps: cancelProps,
                locale: locale,
                closeable: closeable,
                rtl: rtl,
                onClose: function onClose() {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    return handleClose.apply(undefined, ['closeClick'].concat(args));
                },
                closeIcon: closeIcon,
                height: height,
                maxHeight: maxHeight,
                width: width
            }),
            children
        )
    );

    if (typeof dialogRender === 'function') {
        inner = dialogRender(inner);
    }

    var innerWrapperCls = classNames((_classNames3 = {}, _classNames3[prefix + 'overlay-inner'] = true, _classNames3[prefix + 'dialog-wrapper'] = true, _classNames3[prefix + 'dialog-centered'] = centered, _classNames3));

    var getVisibleOverlayFromChild = function getVisibleOverlayFromChild(id, node) {
        if (node) {
            childIDMap.current.set(id, node);
        } else {
            childIDMap.current.delete(id);
        }
        // 让父级也感知
        setVisibleOverlayToParent(id, node);
    };

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
                    animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false,
                    timeout: timeout,
                    unmountOnExit: true
                },
                React.createElement('div', { className: prefix + 'overlay-backdrop' })
            ) : null,
            React.createElement(
                'div',
                { className: innerWrapperCls, onClick: handleMaskClick },
                centered ? inner : React.createElement(
                    'div',
                    { style: topStyle, className: prefix + 'dialog-inner-wrapper' },
                    inner
                )
            )
        ), container)
    );
};

export default Dialog;
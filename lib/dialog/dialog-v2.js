'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _inner = require('./inner');

var _inner2 = _interopRequireDefault(_inner);

var _animate = require('../animate');

var _animate2 = _interopRequireDefault(_animate);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop; /* istanbul ignore file */


var Dialog = function Dialog(props) {
    var _classNames, _classNames2, _classNames3;

    if (!_react.useState || !_react.useRef || !_react.useEffect) {
        _util.log.warning('need react version > 16.8.0');
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
        locale = _props$locale === undefined ? _zhCn2.default.Dialog : _props$locale,
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
        others = (0, _objectWithoutProperties3.default)(props, ['prefix', 'afterClose', 'hasMask', 'autoFocus', 'className', 'title', 'children', 'footer', 'footerAlign', 'footerActions', 'onOk', 'onCancel', 'okProps', 'cancelProps', 'locale', 'rtl', 'visible', 'closeMode', 'closeIcon', 'animation', 'cache', 'wrapperStyle', 'popupContainer', 'dialogRender', 'centered', 'top', 'bottom', 'width', 'height', 'isFullScreen', 'overflowScroll', 'minMargin', 'onClose', 'style']);


    if ('isFullScreen' in props) {
        _util.log.deprecated('isFullScreen', 'overflowScroll', 'Dialog v2');
    }
    if ('minMargin' in props) {
        _util.log.deprecated('minMargin', 'top/bottom', 'Dialog v2');
    }

    var _useState = (0, _react.useState)(pvisible || false),
        firstVisible = _useState[0],
        setFirst = _useState[1];

    var _useState2 = (0, _react.useState)(pvisible),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        isAnimationEnd = _useState3[0],
        markAnimationEnd = _useState3[1];

    var getContainer = typeof popupContainer === 'string' ? function () {
        return document.getElementById(popupContainer);
    } : typeof popupContainer !== 'function' ? function () {
        return popupContainer;
    } : popupContainer;

    var _useState4 = (0, _react.useState)(getContainer()),
        container = _useState4[0],
        setContainer = _useState4[1];

    var dialogRef = (0, _react.useRef)(null);
    var wrapperRef = (0, _react.useRef)(null);
    var originStyle = (0, _react.useRef)('');
    var lastFocus = (0, _react.useRef)(null);

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
    (0, _react.useEffect)(function () {
        if ('visible' in props) {
            setVisible(pvisible);
        }
    }, [pvisible]);

    // 打开遮罩后 document.body 滚动处理
    (0, _react.useEffect)(function () {
        if (visible && hasMask) {
            originStyle.current = document.body.getAttribute('style');
            _util.dom.setStyle(document.body, 'overflow', 'hidden');

            if (_util.dom.hasScroll(document.body)) {
                var scrollWidth = _util.dom.scrollbar().width;
                if (scrollWidth) {
                    _util.dom.setStyle(document.body, 'paddingRight', _util.dom.getStyle(document.body, 'paddingRight') + _util.dom.scrollbar().width + 'px');
                }
            }
        }
    }, [visible && hasMask]);

    var handleClose = function handleClose(targetType, e) {
        typeof onClose === 'function' && onClose(targetType, e);
    };

    var keydownEvent = function keydownEvent(e) {
        if (e.keyCode === 27 && canCloseByEsc) {
            handleClose('esc', e);
        }
    };

    // esc 键盘事件处理
    (0, _react.useEffect)(function () {
        if (visible && canCloseByEsc) {
            document.body.addEventListener('keydown', keydownEvent, false);
            return function () {
                document.body.removeEventListener('keydown', keydownEvent, false);
            };
        }
    }, [visible && canCloseByEsc]);

    // 优化: 第一次加载并且 visible=false 的情况不挂载弹窗
    (0, _react.useEffect)(function () {
        !firstVisible && visible && setFirst(true);
    }, [visible]);

    // container 异步加载情况
    (0, _react.useEffect)(function () {
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
            var dialogNode = _reactDom2.default.findDOMNode(dialogRef.current);
            if (dialogNode && dialogNode.contains(e.target)) {
                return;
            }
        }

        handleClose('maskClick', e);
    };

    var handleEnter = function handleEnter() {
        markAnimationEnd(false);
        _util.dom.setStyle(wrapperRef.current, 'display', '');
    };
    var handleEntered = function handleEntered() {
        if (autoFocus && dialogRef.current && dialogRef.current.bodyNode) {
            var focusableNodes = _util.focus.getFocusNodeList(dialogRef.current.bodyNode);
            if (focusableNodes.length > 0 && focusableNodes[0]) {
                lastFocus.current = document.activeElement;
                focusableNodes[0].focus();
            }
        }
    };

    var handleExited = function handleExited() {
        markAnimationEnd(true);
        _util.dom.setStyle(wrapperRef.current, 'display', 'none');
        document.body.setAttribute('style', originStyle.current || '');

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

    var wrapperCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'overlay-wrapper'] = true, _classNames.opened = visible, _classNames));
    var dialogCls = (0, _classnames2.default)((_classNames2 = {}, _classNames2[prefix + 'dialog-v2'] = true, _classNames2[className] = !!className, _classNames2));

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

    var inner = _react2.default.createElement(
        _animate2.default.OverlayAnimate,
        {
            visible: visible,
            animation: animation,
            timeout: timeout,
            onEnter: handleEnter,
            onEntered: handleEntered,
            onExited: handleExited
        },
        _react2.default.createElement(
            _inner2.default,
            (0, _extends3.default)({}, others, {
                style: centered ? (0, _extends3.default)({}, topStyle, style) : style,
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

    var innerWrapperCls = (0, _classnames2.default)((_classNames3 = {}, _classNames3[prefix + 'overlay-inner'] = true, _classNames3[prefix + 'dialog-wrapper'] = true, _classNames3[prefix + 'dialog-centered'] = centered, _classNames3));

    return _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: wrapperCls, style: wrapperStyle, ref: wrapperRef },
        _react2.default.createElement(
            _animate2.default.OverlayAnimate,
            {
                visible: visible,
                animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false,
                timeout: timeout,
                unmountOnExit: true
            },
            _react2.default.createElement('div', { className: prefix + 'overlay-backdrop' })
        ),
        _react2.default.createElement(
            'div',
            { className: innerWrapperCls, onClick: handleMaskClick },
            centered ? inner : _react2.default.createElement(
                'div',
                { style: topStyle, className: prefix + 'dialog-inner-wrapper' },
                inner
            )
        )
    ), container);
};

exports.default = Dialog;
module.exports = exports['default'];
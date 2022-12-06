'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _overlay = require('@alifd/overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _animate = require('../animate');

var _animate2 = _interopRequireDefault(_animate);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = function Popup(props) {
    var _classNames;

    if (!_react.useState || !_react.useRef || !_react.useEffect) {
        _util.log.warning('need react version > 16.8.0');
        return null;
    }

    var _props$prefix = props.prefix,
        prefix = _props$prefix === undefined ? 'next-' : _props$prefix,
        _props$animation = props.animation,
        panimation = _props$animation === undefined ? { in: 'expandInDown', out: 'expandOutUp' } : _props$animation,
        defaultVisible = props.defaultVisible,
        _props$onVisibleChang = props.onVisibleChange,
        onVisibleChange = _props$onVisibleChang === undefined ? function () {} : _props$onVisibleChang,
        trigger = props.trigger,
        _props$triggerType = props.triggerType,
        triggerType = _props$triggerType === undefined ? 'hover' : _props$triggerType,
        overlay = props.overlay,
        onPosition = props.onPosition,
        children = props.children,
        className = props.className,
        style = props.style,
        wrapperClassName = props.wrapperClassName,
        triggerClickKeycode = props.triggerClickKeycode,
        align = props.align,
        beforeOpen = props.beforeOpen,
        onOpen = props.onOpen,
        afterOpen = props.afterOpen,
        beforeClose = props.beforeClose,
        onClose = props.onClose,
        afterClose = props.afterClose,
        others = (0, _objectWithoutProperties3.default)(props, ['prefix', 'animation', 'defaultVisible', 'onVisibleChange', 'trigger', 'triggerType', 'overlay', 'onPosition', 'children', 'className', 'style', 'wrapperClassName', 'triggerClickKeycode', 'align', 'beforeOpen', 'onOpen', 'afterOpen', 'beforeClose', 'onClose', 'afterClose']);

    var _useState = (0, _react.useState)(defaultVisible),
        visible = _useState[0],
        setVisible = _useState[1];

    var _useState2 = (0, _react.useState)(panimation),
        animation = _useState2[0],
        setAnimation = _useState2[1];

    var _useState3 = (0, _react.useState)(true),
        isAnimationEnd = _useState3[0],
        markAnimationEnd = _useState3[1];

    var overlayRef = (0, _react.useRef)(null);

    (0, _react.useEffect)(function () {
        if ('visible' in props) {
            setVisible(props.visible);
        }
    }, [props.visible]);

    (0, _react.useEffect)(function () {
        if ('animation' in props && animation !== panimation) {
            setAnimation(panimation);
        }
    }, [panimation]);

    var handleVisibleChange = function handleVisibleChange(visible) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (!('visible' in props)) {
            setVisible(visible);
        }

        onVisibleChange.apply(undefined, [visible].concat(args));
    };

    var triggerNode = overlay ? children : trigger;
    var overlayNode = overlay ? overlay : children;

    var handleEnter = function handleEnter() {
        markAnimationEnd(false);
        typeof beforeOpen === 'function' && beforeOpen(overlayRef.current);
    };
    var handleEntering = function handleEntering() {
        typeof onOpen === 'function' && onOpen(overlayRef.current);
    };
    var handleEntered = function handleEntered() {
        typeof afterOpen === 'function' && afterOpen(overlayRef.current);
    };
    var handleExit = function handleExit() {
        typeof beforeClose === 'function' && beforeClose(overlayRef.current);
    };
    var handleExiting = function handleExiting() {
        typeof onClose === 'function' && onClose(overlayRef.current);
    };
    var handleExited = function handleExited() {
        markAnimationEnd(true);
        typeof afterClose === 'function' && afterClose(overlayRef.current);
    };

    overlayNode = _react2.default.createElement(
        _animate2.default.OverlayAnimate,
        {
            visible: visible,
            animation: animation,
            timeout: 200,
            onEnter: handleEnter,
            onEntering: handleEntering,
            onEntered: handleEntered,
            onExit: handleExit,
            onExiting: handleExiting,
            onExited: handleExited,
            style: style
        },
        overlayNode ? (0, _react.cloneElement)(overlayNode, {
            className: (0, _classnames2.default)([prefix + 'overlay-inner', className, overlayNode && overlayNode.props && overlayNode.props.className])
        }) : _react2.default.createElement('span', null)
    );

    var handlePosition = function handlePosition(result) {
        // 兼容 1.x, 2.x 可去除这段逻辑
        (0, _extends3.default)(result, { align: result.config.points });

        var placement = result.config.placement;
        if (placement && typeof placement === 'string') {
            if (animation.in === 'expandInDown' && animation.out === 'expandOutUp' && placement.match(/t/)) {
                setAnimation({
                    in: 'expandInUp',
                    out: 'expandOutDown'
                });
            } else if (animation.in === 'expandInUp' && animation.out === 'expandOutDown' && placement.match(/b/)) {
                setAnimation({
                    in: 'expandInDown',
                    out: 'expandOutUp'
                });
            }
        }

        typeof onPosition === 'function' && onPosition(result);
    };

    var wraperCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'overlay-wrapper v2'] = true, _classNames[wrapperClassName] = wrapperClassName, _classNames.opened = visible, _classNames));

    // 兼容
    var v1Props = {};
    if (align) {
        v1Props.points = align.split(' ');
    }

    var maskRender = function maskRender(node) {
        return _react2.default.createElement(
            _animate2.default.OverlayAnimate,
            {
                visible: visible,
                animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false,
                timeout: 200,
                unmountOnExit: true
            },
            node
        );
    };

    return _react2.default.createElement(
        _overlay2.default.Popup,
        (0, _extends3.default)({}, others, v1Props, {
            wrapperClassName: wraperCls,
            overlay: overlayNode,
            visible: visible,
            isAnimationEnd: isAnimationEnd,
            triggerType: triggerType,
            onVisibleChange: handleVisibleChange,
            onPosition: handlePosition,
            triggerClickKeyCode: triggerClickKeycode,
            maskRender: maskRender,
            ref: overlayRef
        }),
        triggerNode
    );
}; /* istanbul ignore file */
exports.default = Popup;
module.exports = exports['default'];
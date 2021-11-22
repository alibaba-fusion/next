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

var Overlay2 = function Overlay2(props) {
    var _classNames;

    if (!_react.useState || !_react.useRef || !_react.useEffect) {
        _util.log.warning('need react version > 16.8.0');
        return null;
    }

    var _props$prefix = props.prefix,
        prefix = _props$prefix === undefined ? 'next-' : _props$prefix,
        _props$animation = props.animation,
        animation = _props$animation === undefined ? { in: 'expandInDown', out: 'expandOutUp' } : _props$animation,
        visible = props.visible,
        hasMask = props.hasMask,
        align = props.align,
        _props$points = props.points,
        points = _props$points === undefined ? align ? align.split(' ') : undefined : _props$points,
        onPosition = props.onPosition,
        children = props.children,
        className = props.className,
        style = props.style,
        wrapperClassName = props.wrapperClassName,
        beforeOpen = props.beforeOpen,
        onOpen = props.onOpen,
        afterOpen = props.afterOpen,
        beforeClose = props.beforeClose,
        onClose = props.onClose,
        afterClose = props.afterClose,
        others = (0, _objectWithoutProperties3.default)(props, ['prefix', 'animation', 'visible', 'hasMask', 'align', 'points', 'onPosition', 'children', 'className', 'style', 'wrapperClassName', 'beforeOpen', 'onOpen', 'afterOpen', 'beforeClose', 'onClose', 'afterClose']);

    var _useState = (0, _react.useState)(true),
        isAnimationEnd = _useState[0],
        markAnimationEnd = _useState[1];

    var overlayRef = (0, _react.useRef)(null);

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

    var childrenNode = _react2.default.createElement(
        _animate2.default.OverlayAnimate,
        {
            visible: visible,
            animation: animation,
            onEnter: handleEnter,
            onEntering: handleEntering,
            onEntered: handleEntered,
            onExit: handleExit,
            onExiting: handleExiting,
            onExited: handleExited,
            timeout: 300,
            ref: overlayRef,
            style: style
        },
        children ? (0, _react.cloneElement)(children, {
            className: (0, _classnames2.default)([prefix + 'overlay-inner', className, children && children.props && children.props.className])
        }) : _react2.default.createElement('span', null)
    );

    var wraperCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'overlay-wrapper v2'] = true, _classNames[wrapperClassName] = wrapperClassName, _classNames.opened = visible, _classNames));

    var handlePosition = function handlePosition(result) {
        // 兼容 1.x, 2.x 可去除这段逻辑
        (0, _extends3.default)(result, { align: result.config.points });

        typeof onPosition === 'function' && onPosition(result);
    };

    var maskRender = function maskRender(node) {
        return _react2.default.createElement(
            _animate2.default.OverlayAnimate,
            {
                visible: visible,
                animation: animation ? { in: 'fadeIn', out: 'fadeOut' } : false,
                timeout: 300,
                unmountOnExit: true
            },
            node
        );
    };

    return _react2.default.createElement(
        _overlay2.default,
        (0, _extends3.default)({}, others, {
            visible: visible,
            isAnimationEnd: isAnimationEnd,
            hasMask: hasMask,
            wrapperClassName: wraperCls,
            maskClassName: prefix + 'overlay-backdrop',
            maskRender: maskRender,
            points: points,
            onPosition: handlePosition
        }),
        childrenNode
    );
}; /* istanbul ignore file */
exports.default = Overlay2;
module.exports = exports['default'];
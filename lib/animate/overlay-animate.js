'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = require('react-transition-group');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverlayAnimate = function OverlayAnimate(props) {
    var animation = props.animation,
        visible = props.visible,
        children = props.children,
        _props$timeout = props.timeout,
        timeout = _props$timeout === undefined ? 300 : _props$timeout,
        style = props.style,
        mountOnEnter = props.mountOnEnter,
        unmountOnExit = props.unmountOnExit,
        appear = props.appear,
        enter = props.enter,
        exit = props.exit,
        onEnter = props.onEnter,
        onEntering = props.onEntering,
        onEntered = props.onEntered,
        onExit = props.onExit,
        onExiting = props.onExiting,
        onExited = props.onExited,
        others = (0, _objectWithoutProperties3.default)(props, ['animation', 'visible', 'children', 'timeout', 'style', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited']);


    var animateProps = {
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        appear: appear,
        enter: enter,
        exit: exit,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited
    };

    Object.keys(animateProps).forEach(function (k) {
        if (!(k in props) || typeof props[k] === 'undefined') {
            delete animateProps[k];
        }
    });

    var animationMap = typeof animation === 'string' ? { in: animation, out: animation } : animation;

    var animateClsMap = animation ? {
        entering: animationMap.in,
        exiting: animationMap.out
    } : {};

    if (animation === false) {
        animateClsMap.entering = '';
        animateClsMap.exiting = '';
    }

    return _react2.default.createElement(
        _reactTransitionGroup.Transition,
        (0, _extends3.default)({}, animateProps, { 'in': visible, timeout: animation ? timeout : 0, appear: true }),
        function (state) {
            var _classNames;

            var cls = (0, _classnames2.default)((_classNames = {}, _classNames[children.props.className] = !!children.props.className, _classNames[animateClsMap[state]] = state in animateClsMap && animateClsMap[state], _classNames));

            var childProps = (0, _extends3.default)({}, others, {
                className: cls
            });

            if (style && children.props && children.props.style) {
                childProps.style = (0, _extends3.default)({}, children.props.style, style);
            }

            return _react2.default.cloneElement(children, childProps);
        }
    );
}; /* istanbul ignore file */
exports.default = OverlayAnimate;
module.exports = exports['default'];
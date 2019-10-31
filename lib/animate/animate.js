'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _child = require('./child');

var _child2 = _interopRequireDefault(_child);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};
var FirstChild = function FirstChild(props) {
    var childrenArray = _react2.default.Children.toArray(props.children);
    return childrenArray[0] || null;
};

/**
 * Animate
 */
var Animate = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Animate, _Component);

    function Animate() {
        (0, _classCallCheck3.default)(this, Animate);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Animate.prototype.normalizeNames = function normalizeNames(names) {
        if (typeof names === 'string') {
            return {
                appear: names + '-appear',
                appearActive: names + '-appear-active',
                enter: names + '-enter',
                enterActive: names + '-enter-active',
                leave: names + '-leave',
                leaveActive: names + '-leave-active'
            };
        }
        if ((typeof names === 'undefined' ? 'undefined' : (0, _typeof3.default)(names)) === 'object') {
            return {
                appear: names.appear,
                appearActive: names.appear + '-active',
                enter: '' + names.enter,
                enterActive: names.enter + '-active',
                leave: '' + names.leave,
                leaveActive: names.leave + '-active'
            };
        }
    };

    Animate.prototype.render = function render() {
        var _this2 = this;

        /* eslint-disable no-unused-vars */
        var _props = this.props,
            animation = _props.animation,
            children = _props.children,
            animationAppear = _props.animationAppear,
            singleMode = _props.singleMode,
            component = _props.component,
            beforeAppear = _props.beforeAppear,
            onAppear = _props.onAppear,
            afterAppear = _props.afterAppear,
            beforeEnter = _props.beforeEnter,
            onEnter = _props.onEnter,
            afterEnter = _props.afterEnter,
            beforeLeave = _props.beforeLeave,
            onLeave = _props.onLeave,
            afterLeave = _props.afterLeave,
            others = (0, _objectWithoutProperties3.default)(_props, ['animation', 'children', 'animationAppear', 'singleMode', 'component', 'beforeAppear', 'onAppear', 'afterAppear', 'beforeEnter', 'onEnter', 'afterEnter', 'beforeLeave', 'onLeave', 'afterLeave']);
        /* eslint-enable no-unused-vars */

        var animateChildren = _react.Children.map(children, function (child) {
            return _react2.default.createElement(
                _child2.default,
                {
                    key: child.key,
                    names: _this2.normalizeNames(animation),
                    onAppear: beforeAppear,
                    onAppearing: onAppear,
                    onAppeared: afterAppear,
                    onEnter: beforeEnter,
                    onEntering: onEnter,
                    onEntered: afterEnter,
                    onExit: beforeLeave,
                    onExiting: onLeave,
                    onExited: afterLeave
                },
                child
            );
        });

        return _react2.default.createElement(
            _reactTransitionGroup.TransitionGroup,
            (0, _extends3.default)({
                appear: animationAppear,
                component: singleMode ? FirstChild : component
            }, others),
            animateChildren
        );
    };

    return Animate;
}(_react.Component), _class.propTypes = {
    /**
     * 动画 className
     */
    animation: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    /**
     * 子元素第一次挂载时是否执行动画
     */
    animationAppear: _propTypes2.default.bool,
    /**
     * 包裹子元素的标签
     */
    component: _propTypes2.default.any,
    /**
     * 是否只有单个子元素，如果有多个子元素，请设置为 false
     */
    singleMode: _propTypes2.default.bool,
    /**
     * 子元素
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
    /**
     * 执行第一次挂载动画前触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    beforeAppear: _propTypes2.default.func,
    /**
     * 执行第一次挂载动画，添加 xxx-appear-active 类名后触发的回调函数
     *  @param {HTMLElement} node 执行动画的 dom 元素
     */
    onAppear: _propTypes2.default.func,
    /**
     * 执行完第一次挂载动画后触发的函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    afterAppear: _propTypes2.default.func,
    /**
     * 执行进场动画前触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    beforeEnter: _propTypes2.default.func,
    /**
     * 执行进场动画，添加 xxx-enter-active 类名后触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    onEnter: _propTypes2.default.func,
    /**
     * 执行完进场动画后触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    afterEnter: _propTypes2.default.func,
    /**
     * 执行离场动画前触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    beforeLeave: _propTypes2.default.func,
    /**
     * 执行离场动画，添加 xxx-leave-active 类名后触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    onLeave: _propTypes2.default.func,
    /**
     * 执行完离场动画后触发的回调函数
     * @param {HTMLElement} node 执行动画的 dom 元素
     */
    afterLeave: _propTypes2.default.func
}, _class.defaultProps = {
    animationAppear: true,
    component: 'div',
    singleMode: true,
    beforeAppear: noop,
    onAppear: noop,
    afterAppear: noop,
    beforeEnter: noop,
    onEnter: noop,
    afterEnter: noop,
    beforeLeave: noop,
    onLeave: noop,
    afterLeave: noop
}, _temp);
Animate.displayName = 'Animate';
exports.default = Animate;
module.exports = exports['default'];
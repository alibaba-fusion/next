import { __assign, __extends, __rest } from "tslib";
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import AnimateChild from './child';
var noop = function () { };
var FirstChild = function (props) {
    var childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};
/**
 * Animate
 */
var Animate = /** @class */ (function (_super) {
    __extends(Animate, _super);
    function Animate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animate.prototype.normalizeNames = function (names) {
        if (typeof names === 'string') {
            return {
                appear: "".concat(names, "-appear"),
                appearActive: "".concat(names, "-appear-active"),
                enter: "".concat(names, "-enter"),
                enterActive: "".concat(names, "-enter-active"),
                leave: "".concat(names, "-leave"),
                leaveActive: "".concat(names, "-leave-active"),
            };
        }
        if (typeof names === 'object') {
            return {
                appear: names.appear,
                appearActive: "".concat(names.appear, "-active"),
                enter: "".concat(names.enter),
                enterActive: "".concat(names.enter, "-active"),
                leave: "".concat(names.leave),
                leaveActive: "".concat(names.leave, "-active"),
            };
        }
    };
    Animate.prototype.render = function () {
        var _this = this;
        /* eslint-disable no-unused-vars */
        var _a = this.props, animation = _a.animation, children = _a.children, animationAppear = _a.animationAppear, singleMode = _a.singleMode, component = _a.component, beforeAppear = _a.beforeAppear, onAppear = _a.onAppear, afterAppear = _a.afterAppear, beforeEnter = _a.beforeEnter, onEnter = _a.onEnter, afterEnter = _a.afterEnter, beforeLeave = _a.beforeLeave, onLeave = _a.onLeave, afterLeave = _a.afterLeave, others = __rest(_a, ["animation", "children", "animationAppear", "singleMode", "component", "beforeAppear", "onAppear", "afterAppear", "beforeEnter", "onEnter", "afterEnter", "beforeLeave", "onLeave", "afterLeave"]);
        /* eslint-enable no-unused-vars */
        var animateChildren = Children.map(children, function (child) {
            return (React.createElement(AnimateChild, { key: child.key, names: _this.normalizeNames(animation), onAppear: beforeAppear, onAppearing: onAppear, onAppeared: afterAppear, onEnter: beforeEnter, onEntering: onEnter, onEntered: afterEnter, onExit: beforeLeave, onExiting: onLeave, onExited: afterLeave }, child));
        });
        return (React.createElement(TransitionGroup, __assign({ appear: animationAppear, component: singleMode ? FirstChild : component }, others), animateChildren));
    };
    Animate.propTypes = {
        /**
         * 动画 className
         */
        animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        /**
         * 子元素第一次挂载时是否执行动画
         */
        animationAppear: PropTypes.bool,
        /**
         * 包裹子元素的标签
         */
        component: PropTypes.any,
        /**
         * 是否只有单个子元素，如果有多个子元素，请设置为 false
         */
        singleMode: PropTypes.bool,
        /**
         * 子元素
         */
        children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
        /**
         * 执行第一次挂载动画前触发的回调函数
         * @param {HTMLElement} node 执行动画的 dom 元素
         */
        beforeAppear: PropTypes.func,
        /**
         * 执行第一次挂载动画，添加 xxx-appear-active 类名后触发的回调函数
         *  @param {HTMLElement} node 执行动画的 dom 元素
         */
        onAppear: PropTypes.func,
        /**
         * 执行完第一次挂载动画后触发的函数
         * @param {HTMLElement} node 执行动画的 dom 元素
         */
        afterAppear: PropTypes.func,
        /**
         * 执行进场动画前触发的回调函数
         * @param {HTMLElement} node 执行动画的 dom 元素
         */
        beforeEnter: PropTypes.func,
        /**
         * 执行进场动画，添加 xxx-enter-active 类名后触发的回调函数
         * @param {HTMLElement} node 执行动画的 dom 元素
         */
        onEnter: PropTypes.func,
        /**
         * 执行完进场动画后触发的回调函数
         * @param {HTMLElement} node 执行动画的 dom 元素
         */
        afterEnter: PropTypes.func,
        /**
         * 执行离场动画前触发的回调函数
         * @param {HTMLElement} node 执行动画的 dom 元素
         */
        beforeLeave: PropTypes.func,
        /**
         * 执行离场动画，添加 xxx-leave-active 类名后触发的回调函数
         * @param {HTMLElement} node 执行动画的 dom 元素
         */
        onLeave: PropTypes.func,
        /**
         * 执行完离场动画后触发的回调函数
         * @param {HTMLElement} node 执行动画的 dom 元素
         */
        afterLeave: PropTypes.func,
    };
    Animate.defaultProps = {
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
        afterLeave: noop,
    };
    return Animate;
}(Component));
export default Animate;

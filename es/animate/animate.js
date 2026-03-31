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
        var _a = this.props, animation = _a.animation, children = _a.children, animationAppear = _a.animationAppear, singleMode = _a.singleMode, component = _a.component, beforeAppear = _a.beforeAppear, onAppear = _a.onAppear, afterAppear = _a.afterAppear, beforeEnter = _a.beforeEnter, onEnter = _a.onEnter, afterEnter = _a.afterEnter, beforeLeave = _a.beforeLeave, onLeave = _a.onLeave, afterLeave = _a.afterLeave, others = __rest(_a, ["animation", "children", "animationAppear", "singleMode", "component", "beforeAppear", "onAppear", "afterAppear", "beforeEnter", "onEnter", "afterEnter", "beforeLeave", "onLeave", "afterLeave"]);
        var animateChildren = Children.map(children, function (child) {
            return (React.createElement(AnimateChild, { key: child === null || child === void 0 ? void 0 : child.key, names: _this.normalizeNames(animation), onAppear: beforeAppear, onAppearing: onAppear, onAppeared: afterAppear, onEnter: beforeEnter, onEntering: onEnter, onEntered: afterEnter, onExit: beforeLeave, onExiting: onLeave, onExited: afterLeave }, child));
        });
        return (React.createElement(TransitionGroup, __assign({ appear: animationAppear, component: singleMode ? FirstChild : component }, others), animateChildren));
    };
    Animate.displayName = 'Animate';
    Animate.propTypes = {
        animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        animationAppear: PropTypes.bool,
        component: PropTypes.any,
        singleMode: PropTypes.bool,
        children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
        beforeAppear: PropTypes.func,
        onAppear: PropTypes.func,
        afterAppear: PropTypes.func,
        beforeEnter: PropTypes.func,
        onEnter: PropTypes.func,
        afterEnter: PropTypes.func,
        beforeLeave: PropTypes.func,
        onLeave: PropTypes.func,
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

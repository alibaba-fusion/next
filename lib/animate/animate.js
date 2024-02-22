"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_transition_group_1 = require("react-transition-group");
var child_1 = tslib_1.__importDefault(require("./child"));
var noop = function () { };
var FirstChild = function (props) {
    var childrenArray = react_1.default.Children.toArray(props.children);
    return childrenArray[0] || null;
};
/**
 * Animate
 */
var Animate = /** @class */ (function (_super) {
    tslib_1.__extends(Animate, _super);
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
        var _a = this.props, animation = _a.animation, children = _a.children, animationAppear = _a.animationAppear, singleMode = _a.singleMode, component = _a.component, beforeAppear = _a.beforeAppear, onAppear = _a.onAppear, afterAppear = _a.afterAppear, beforeEnter = _a.beforeEnter, onEnter = _a.onEnter, afterEnter = _a.afterEnter, beforeLeave = _a.beforeLeave, onLeave = _a.onLeave, afterLeave = _a.afterLeave, others = tslib_1.__rest(_a, ["animation", "children", "animationAppear", "singleMode", "component", "beforeAppear", "onAppear", "afterAppear", "beforeEnter", "onEnter", "afterEnter", "beforeLeave", "onLeave", "afterLeave"]);
        var animateChildren = react_1.Children.map(children, function (child) {
            return (react_1.default.createElement(child_1.default, { key: child === null || child === void 0 ? void 0 : child.key, names: _this.normalizeNames(animation), onAppear: beforeAppear, onAppearing: onAppear, onAppeared: afterAppear, onEnter: beforeEnter, onEntering: onEnter, onEntered: afterEnter, onExit: beforeLeave, onExiting: onLeave, onExited: afterLeave }, child));
        });
        return (react_1.default.createElement(react_transition_group_1.TransitionGroup, tslib_1.__assign({ appear: animationAppear, component: singleMode ? FirstChild : component }, others), animateChildren));
    };
    Animate.displayName = 'Animate';
    Animate.propTypes = {
        animation: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
        animationAppear: prop_types_1.default.bool,
        component: prop_types_1.default.any,
        singleMode: prop_types_1.default.bool,
        children: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.arrayOf(prop_types_1.default.element)]),
        beforeAppear: prop_types_1.default.func,
        onAppear: prop_types_1.default.func,
        afterAppear: prop_types_1.default.func,
        beforeEnter: prop_types_1.default.func,
        onEnter: prop_types_1.default.func,
        afterEnter: prop_types_1.default.func,
        beforeLeave: prop_types_1.default.func,
        onLeave: prop_types_1.default.func,
        afterLeave: prop_types_1.default.func,
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
}(react_1.Component));
exports.default = Animate;

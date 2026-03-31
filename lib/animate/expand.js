"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var util_1 = require("../util");
var animate_1 = tslib_1.__importDefault(require("./animate"));
var noop = function () { };
var getStyle = util_1.dom.getStyle;
var Expand = /** @class */ (function (_super) {
    tslib_1.__extends(Expand, _super);
    function Expand(props) {
        var _this = _super.call(this, props) || this;
        util_1.func.bindCtx(_this, [
            'beforeEnter',
            'onEnter',
            'afterEnter',
            'beforeLeave',
            'onLeave',
            'afterLeave',
        ]);
        return _this;
    }
    Expand.prototype.beforeEnter = function (node) {
        if (this.leaving) {
            this.afterLeave(node);
        }
        this.cacheCurrentStyle(node);
        this.cacheComputedStyle(node);
        this.setCurrentStyleToZero(node);
        this.props.beforeEnter(node);
    };
    Expand.prototype.onEnter = function (node) {
        this.setCurrentStyleToComputedStyle(node);
        this.props.onEnter(node);
    };
    Expand.prototype.afterEnter = function (node) {
        this.restoreCurrentStyle(node);
        this.props.afterEnter(node);
    };
    Expand.prototype.beforeLeave = function (node) {
        this.leaving = true;
        this.cacheCurrentStyle(node);
        this.cacheComputedStyle(node);
        this.setCurrentStyleToComputedStyle(node);
        this.props.beforeLeave(node);
    };
    Expand.prototype.onLeave = function (node) {
        this.setCurrentStyleToZero(node);
        this.props.onLeave(node);
    };
    Expand.prototype.afterLeave = function (node) {
        this.leaving = false;
        this.restoreCurrentStyle(node);
        this.props.afterLeave(node);
    };
    Expand.prototype.cacheCurrentStyle = function (node) {
        this.styleBorderTopWidth = node.style.borderTopWidth;
        this.stylePaddingTop = node.style.paddingTop;
        this.styleHeight = node.style.height;
        this.stylePaddingBottom = node.style.paddingBottom;
        this.styleBorderBottomWidth = node.style.borderBottomWidth;
    };
    Expand.prototype.cacheComputedStyle = function (node) {
        this.borderTopWidth = getStyle(node, 'borderTopWidth');
        this.paddingTop = getStyle(node, 'paddingTop');
        this.height = node.offsetHeight;
        this.paddingBottom = getStyle(node, 'paddingBottom');
        this.borderBottomWidth = getStyle(node, 'borderBottomWidth');
    };
    Expand.prototype.setCurrentStyleToZero = function (node) {
        node.style.borderTopWidth = '0px';
        node.style.paddingTop = '0px';
        node.style.height = '0px';
        node.style.paddingBottom = '0px';
        node.style.borderBottomWidth = '0px';
    };
    Expand.prototype.setCurrentStyleToComputedStyle = function (node) {
        node.style.borderTopWidth = "".concat(this.borderTopWidth, "px");
        node.style.paddingTop = "".concat(this.paddingTop, "px");
        node.style.height = "".concat(this.height, "px");
        node.style.paddingBottom = "".concat(this.paddingBottom, "px");
        node.style.borderBottomWidth = "".concat(this.borderBottomWidth, "px");
    };
    Expand.prototype.restoreCurrentStyle = function (node) {
        node.style.borderTopWidth = this.styleBorderTopWidth;
        node.style.paddingTop = this.stylePaddingTop;
        node.style.height = this.styleHeight;
        node.style.paddingBottom = this.stylePaddingBottom;
        node.style.borderBottomWidth = this.styleBorderBottomWidth;
    };
    Expand.prototype.render = function () {
        var _a = this.props, animation = _a.animation, others = tslib_1.__rest(_a, ["animation"]);
        var newAnimation = animation || 'expand';
        return (react_1.default.createElement(animate_1.default, tslib_1.__assign({}, others, { animation: newAnimation, beforeEnter: this.beforeEnter, onEnter: this.onEnter, afterEnter: this.afterEnter, beforeLeave: this.beforeLeave, onLeave: this.onLeave, afterLeave: this.afterLeave })));
    };
    Expand.displayName = 'Expand';
    Expand.propTypes = {
        animation: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
        beforeEnter: prop_types_1.default.func,
        onEnter: prop_types_1.default.func,
        afterEnter: prop_types_1.default.func,
        beforeLeave: prop_types_1.default.func,
        onLeave: prop_types_1.default.func,
        afterLeave: prop_types_1.default.func,
    };
    Expand.defaultProps = {
        beforeEnter: noop,
        onEnter: noop,
        afterEnter: noop,
        beforeLeave: noop,
        onLeave: noop,
        afterLeave: noop,
    };
    return Expand;
}(react_1.Component));
exports.default = Expand;

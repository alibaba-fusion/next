"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
/**
 * Typography.Text
 */
var Text = /** @class */ (function (_super) {
    tslib_1.__extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.wrapChildren = function (children, wrapper) {
        return react_1.default.createElement(wrapper, {}, children);
    };
    Text.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, component = _a.component, strong = _a.strong, underline = _a.underline, deleteProp = _a.delete, code = _a.code, mark = _a.mark, rtl = _a.rtl, children = _a.children, others = tslib_1.__rest(_a, ["prefix", "className", "component", "strong", "underline", "delete", "code", "mark", "rtl", "children"]);
        var Component = component;
        var formattedChildren = children;
        if (strong) {
            formattedChildren = this.wrapChildren(formattedChildren, 'strong');
        }
        if (underline) {
            formattedChildren = this.wrapChildren(formattedChildren, 'u');
        }
        if (deleteProp) {
            formattedChildren = this.wrapChildren(formattedChildren, 'del');
        }
        if (code) {
            formattedChildren = this.wrapChildren(formattedChildren, 'code');
        }
        if (mark) {
            formattedChildren = this.wrapChildren(formattedChildren, 'mark');
        }
        if (rtl) {
            others.dir = 'rtl';
        }
        var cls = (0, classnames_1.default)("".concat(prefix, "typography"), className);
        return (react_1.default.createElement(Component, tslib_1.__assign({}, others, { className: cls }), formattedChildren));
    };
    Text.propTypes = {
        prefix: prop_types_1.default.string,
        delete: prop_types_1.default.bool,
        mark: prop_types_1.default.bool,
        underline: prop_types_1.default.bool,
        strong: prop_types_1.default.bool,
        code: prop_types_1.default.bool,
        component: prop_types_1.default.elementType,
        children: prop_types_1.default.node,
        rtl: prop_types_1.default.bool,
    };
    Text.defaultProps = {
        prefix: 'next-',
        delete: false,
        mark: false,
        underline: false,
        strong: false,
        code: false,
        component: 'span',
        rtl: false,
    };
    return Text;
}(react_1.default.Component));
exports.default = config_provider_1.default.config(Text);

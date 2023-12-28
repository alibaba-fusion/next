"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var Group = /** @class */ (function (_super) {
    tslib_1.__extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Group.prototype.render = function () {
        var _a = this.props, className = _a.className, prefix = _a.prefix, children = _a.children, rtl = _a.rtl, others = tslib_1.__rest(_a, ["className", "prefix", "children", "rtl"]);
        var clazz = (0, classnames_1.default)("".concat(prefix || 'next-', "tag-group"), className);
        return (react_1.default.createElement("div", tslib_1.__assign({ className: clazz, dir: rtl ? 'rtl' : undefined }, others), children));
    };
    Group.propTypes = {
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.any,
        children: prop_types_1.default.node,
        rtl: prop_types_1.default.bool,
    };
    Group.defaultProps = {
        prefix: 'next-',
        rtl: false,
    };
    return Group;
}(react_1.Component));
exports.default = Group;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var config_provider_1 = require("../config-provider");
/**
 * Input.Group
 */
var Group = /** @class */ (function (_super) {
    tslib_1.__extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Group.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, className = _d.className, style = _d.style, children = _d.children, prefix = _d.prefix, addonBefore = _d.addonBefore, addonAfter = _d.addonAfter, addonBeforeClassName = _d.addonBeforeClassName, addonAfterClassName = _d.addonAfterClassName, rtl = _d.rtl, disabled = _d.disabled, others = tslib_1.__rest(_d, ["className", "style", "children", "prefix", "addonBefore", "addonAfter", "addonBeforeClassName", "addonAfterClassName", "rtl", "disabled"]);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "input-group")] = true,
            _a["".concat(prefix, "disabled")] = disabled,
            _a[className] = !!className,
            _a));
        var addonCls = "".concat(prefix, "input-group-addon");
        var beforeCls = (0, classnames_1.default)(addonCls, (_b = {},
            _b["".concat(prefix, "before")] = true,
            _b[addonBeforeClassName] = addonBeforeClassName,
            _b));
        var afterCls = (0, classnames_1.default)(addonCls, (_c = {},
            _c["".concat(prefix, "after")] = true,
            _c[addonAfterClassName] = addonAfterClassName,
            _c));
        var before = addonBefore ? react_1.default.createElement("span", { className: beforeCls }, addonBefore) : null;
        var after = addonAfter ? react_1.default.createElement("span", { className: afterCls }, addonAfter) : null;
        return (react_1.default.createElement("span", tslib_1.__assign({}, others, { disabled: disabled, dir: rtl ? 'rtl' : undefined, className: cls, style: style }),
            before,
            children,
            after));
    };
    Group.displayName = 'Group';
    Group.propTypes = {
        /**
         * 样式前缀
         */
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.string,
        style: prop_types_1.default.object,
        children: prop_types_1.default.node,
        /**
         * 输入框前附加内容
         */
        addonBefore: prop_types_1.default.node,
        /**
         * 输入框前附加内容css
         */
        addonBeforeClassName: prop_types_1.default.string,
        /**
         * 输入框后附加内容
         */
        addonAfter: prop_types_1.default.node,
        /**
         * 输入框后额外css
         */
        addonAfterClassName: prop_types_1.default.string,
        /**
         * rtl
         */
        rtl: prop_types_1.default.bool,
    };
    Group.defaultProps = {
        prefix: 'next-',
    };
    return Group;
}(react_1.default.Component));
exports.default = config_provider_1.default.config(Group);

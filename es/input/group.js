import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
/**
 * Input.Group
 */
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Group.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, className = _d.className, style = _d.style, children = _d.children, prefix = _d.prefix, addonBefore = _d.addonBefore, addonAfter = _d.addonAfter, addonBeforeClassName = _d.addonBeforeClassName, addonAfterClassName = _d.addonAfterClassName, rtl = _d.rtl, disabled = _d.disabled, others = __rest(_d, ["className", "style", "children", "prefix", "addonBefore", "addonAfter", "addonBeforeClassName", "addonAfterClassName", "rtl", "disabled"]);
        var cls = classNames((_a = {},
            _a["".concat(prefix, "input-group")] = true,
            _a["".concat(prefix, "disabled")] = disabled,
            _a[className] = !!className,
            _a));
        var addonCls = "".concat(prefix, "input-group-addon");
        var beforeCls = classNames(addonCls, (_b = {},
            _b["".concat(prefix, "before")] = true,
            _b[addonBeforeClassName] = addonBeforeClassName,
            _b));
        var afterCls = classNames(addonCls, (_c = {},
            _c["".concat(prefix, "after")] = true,
            _c[addonAfterClassName] = addonAfterClassName,
            _c));
        var before = addonBefore ? React.createElement("span", { className: beforeCls }, addonBefore) : null;
        var after = addonAfter ? React.createElement("span", { className: afterCls }, addonAfter) : null;
        return (React.createElement("span", __assign({}, others, { 
            // @ts-expect-error span 上没有 disabled
            disabled: disabled, dir: rtl ? 'rtl' : undefined, className: cls, style: style }),
            before,
            children,
            after));
    };
    Group.displayName = 'Group';
    Group.propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.node,
        addonBefore: PropTypes.node,
        addonBeforeClassName: PropTypes.string,
        addonAfter: PropTypes.node,
        addonAfterClassName: PropTypes.string,
        rtl: PropTypes.bool,
    };
    Group.defaultProps = {
        prefix: 'next-',
    };
    return Group;
}(React.Component));
export default ConfigProvider.config(Group);

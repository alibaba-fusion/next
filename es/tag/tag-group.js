import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import classNames from 'classnames';
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Group.prototype.render = function () {
        var _a = this.props, className = _a.className, prefix = _a.prefix, children = _a.children, rtl = _a.rtl, others = __rest(_a, ["className", "prefix", "children", "rtl"]);
        var clazz = classNames("".concat(prefix || 'next-', "tag-group"), className);
        return (React.createElement("div", __assign({ className: clazz, dir: rtl ? 'rtl' : undefined }, others), children));
    };
    Group.defaultProps = {
        prefix: 'next-',
        rtl: false,
    };
    return Group;
}(Component));
export default Group;

import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from '../menu';
/**
 * Nav.Group
 * @remarks 继承自 `Menu.Group` 的能力请查看 `Menu.Group` 文档
 */
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Group.prototype.render = function () {
        var _a;
        var _b = this.context, prefix = _b.prefix, iconOnly = _b.iconOnly;
        var _c = this.props, className = _c.className, children = _c.children, label = _c.label, others = __rest(_c, ["className", "children", "label"]);
        var newLabel = label;
        if (iconOnly) {
            // TODO: add a group icon ?
            newLabel = [React.createElement("span", { key: "label" }, label)];
        }
        var cls = classNames((_a = {},
            _a["".concat(prefix, "nav-group-label")] = true,
            _a[className] = !!className,
            _a));
        return (React.createElement(Menu.Group, __assign({ className: cls, label: newLabel }, others), children));
    };
    Group.menuChildType = 'group';
    Group.propTypes = {
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * 标签内容
         */
        label: PropTypes.node,
        /**
         * 导航项和子导航
         */
        children: PropTypes.node,
    };
    Group.contextTypes = {
        prefix: PropTypes.string,
        iconOnly: PropTypes.bool,
    };
    return Group;
}(Component));
export default Group;

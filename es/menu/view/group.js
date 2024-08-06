import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Item from './item';
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Group.prototype.render = function () {
        var _a;
        var _b = this
            .props, root = _b.root, className = _b.className, label = _b.label, children = _b.children, parentMode = _b.parentMode, others = __rest(_b, ["root", "className", "label", "children", "parentMode"]);
        var prefix = root.props.prefix;
        var newClassName = cx((_a = {},
            _a["".concat(prefix, "menu-group-label")] = true,
            _a), className);
        var newChildren = children.map(function (child) {
            var _a;
            // to fix https://github.com/alibaba-fusion/next/issues/952
            if (typeof child !== 'function' && typeof child !== 'object') {
                return child;
            }
            var className = child.props.className;
            var newChildClassName = cx((_a = {},
                _a["".concat(prefix, "menu-group-item")] = true,
                _a[className] = !!className,
                _a));
            return cloneElement(child, {
                parentMode: parentMode,
                className: newChildClassName,
            });
        });
        return __spreadArray([
            React.createElement(Item, __assign({ key: "menu-group-label", className: newClassName, replaceClassName: true, root: root, parentMode: parentMode }, others), label)
        ], __read(newChildren), false);
    };
    Group.menuChildType = 'group';
    Group.propTypes = {
        root: PropTypes.object,
        className: PropTypes.string,
        label: PropTypes.node,
        children: PropTypes.node,
        parentMode: PropTypes.oneOf(['inline', 'popup']),
    };
    return Group;
}(Component));
export default Group;

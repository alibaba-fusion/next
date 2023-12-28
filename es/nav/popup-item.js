import { __assign, __extends, __rest } from "tslib";
import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from '../menu';
import Icon from '../icon';
/**
 * Nav.PopupItem
 * @description 继承自 `Menu.PopupItem` 的能力请查看 `Menu.PopupItem` 文档
 */
var PopupItem = /** @class */ (function (_super) {
    __extends(PopupItem, _super);
    function PopupItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopupItem.prototype.render = function () {
        var _a;
        var _b = this.context, prefix = _b.prefix, iconOnly = _b.iconOnly, iconOnlyWidth = _b.iconOnlyWidth, hasArrow = _b.hasArrow;
        var _c = this.props, className = _c.className, icon = _c.icon, label = _c.label, children = _c.children, others = __rest(_c, ["className", "icon", "label", "children"]);
        var cls = classNames((_a = {},
            _a["".concat(prefix, "nav-popup-item")] = true,
            _a[className] = !!className,
            _a));
        var iconEl = typeof icon === 'string' ? React.createElement(Icon, { className: "".concat(prefix, "nav-icon"), type: icon }) : icon;
        if (iconOnly) {
            if (hasArrow) {
                iconEl = React.createElement(Icon, { className: "".concat(prefix, "nav-icon-only-arrow"), type: "arrow-right" });
            }
        }
        var newLabel = [iconEl ? cloneElement(iconEl, { key: 'icon' }) : null];
        var showLabel = !iconOnly || (iconOnly && !iconOnlyWidth);
        if (showLabel) {
            newLabel.push(React.createElement("span", { key: "label" }, label));
        }
        return (React.createElement(Menu.PopupItem, __assign({ className: cls, label: newLabel }, others), children));
    };
    PopupItem.menuChildType = 'submenu';
    PopupItem.propTypes = {
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * 自定义图标，可以使用 Icon 的 type, 也可以使用组件 `<Icon type="icon type" />`
         */
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        /**
         * 标签内容
         */
        label: PropTypes.node,
        /**
         * 弹出内容
         */
        children: PropTypes.node,
    };
    PopupItem.contextTypes = {
        prefix: PropTypes.string,
        iconOnly: PropTypes.bool,
        iconOnlyWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        hasArrow: PropTypes.bool,
    };
    return PopupItem;
}(Component));
export default PopupItem;

import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from '../menu';
import Icon from '../icon';
import Balloon from '../balloon';
var Tooltip = Balloon.Tooltip;
/**
 * Nav.Item
 * @remarks 继承自 `Menu.Item` 的能力请查看 `Menu.Item` 文档
 */
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.prototype.render = function () {
        var _a;
        var _b = this.context, prefix = _b.prefix, iconOnly = _b.iconOnly, iconOnlyWidth = _b.iconOnlyWidth, hasTooltip = _b.hasTooltip, iconTextOnly = _b.iconTextOnly;
        var _c = this.props, icon = _c.icon, children = _c.children, className = _c.className, others = __rest(_c, ["icon", "children", "className"]);
        var iconEl = typeof icon === 'string' ? React.createElement(Icon, { className: "".concat(prefix, "nav-icon"), type: icon }) : icon;
        var title;
        if (typeof children === 'string') {
            title = children;
        }
        var showChildren = !iconOnly || (iconOnly && !iconOnlyWidth) || iconTextOnly;
        var cls = classNames((_a = {},
            _a["".concat(prefix, "nav-with-title")] = iconOnly && iconTextOnly,
            _a[className] = !!className,
            _a));
        var newChildren = showChildren ? (iconTextOnly ? (React.createElement("span", { className: "".concat(prefix, "nav-text") }, children)) : (children)) : null;
        var item = (React.createElement(Menu.Item, __assign({ title: title, className: cls }, others),
            iconEl,
            newChildren));
        if (iconOnly && hasTooltip && others.parentMode !== 'popup') {
            return (React.createElement(Tooltip, { align: "r", trigger: item }, children));
        }
        return item;
    };
    Item.menuChildType = 'item';
    Item.propTypes = {
        /**
         * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
         */
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        /**
         * 导航内容
         */
        children: PropTypes.node,
        parentMode: PropTypes.oneOf(['inline', 'popup']),
    };
    Item.contextTypes = {
        prefix: PropTypes.string,
        iconOnly: PropTypes.bool,
        iconOnlyWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        iconTextOnly: PropTypes.bool,
        hasTooltip: PropTypes.bool,
    };
    return Item;
}(Component));
export default Item;

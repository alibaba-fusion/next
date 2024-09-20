import { __assign, __extends, __rest } from "tslib";
import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from '../menu';
import Icon from '../icon';
/**
 * Nav.SubNav
 * @remarks 继承自 `Menu.SubMenu` 的能力请查看 `Menu.SubMenu` 文档
 */
var SubNav = /** @class */ (function (_super) {
    __extends(SubNav, _super);
    function SubNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubNav.prototype.render = function () {
        var _a;
        var _b = this.context, prefix = _b.prefix, iconOnly = _b.iconOnly, iconOnlyWidth = _b.iconOnlyWidth, hasArrow = _b.hasArrow, noIcon = _b.noIcon, mode = _b.mode;
        var _c = this.props, className = _c.className, icon = _c.icon, label = _c.label, children = _c.children, level = _c.level, others = __rest(_c, ["className", "icon", "label", "children", "level"]);
        var cls = classNames((_a = {},
            _a["".concat(prefix, "nav-sub-nav-item")] = true,
            _a["".concat(prefix, "nav-popup")] = mode === 'popup',
            _a[className] = !!className,
            _a));
        var iconEl = typeof icon === 'string' ? React.createElement(Icon, { className: "".concat(prefix, "nav-icon"), type: icon }) : icon;
        // 这里是为 iconOnly 模式下，添加默认的展开按钮
        // 只有在 inline 模式下 或 popup模式的第一层级，才需要添加默认的按钮
        if (iconOnly && hasArrow && (mode === 'inline' || (level === 1 && mode === 'popup'))) {
            iconEl = (React.createElement(Icon, { className: "".concat(prefix, "nav-icon-only-arrow"), type: mode === 'popup' ? 'arrow-right' : 'arrow-down' }));
        }
        var newLabel = [
            iconEl ? cloneElement(iconEl, { key: 'icon' }) : null,
        ];
        var showLabel = !iconOnly || (iconOnly && !iconOnlyWidth);
        if (showLabel) {
            newLabel.push(React.createElement("span", { key: "label" }, label));
        }
        var title;
        if (typeof label === 'string') {
            title = label;
        }
        return (React.createElement(Menu.SubMenu, __assign({ className: cls, label: newLabel, level: level, title: title, noIcon: noIcon }, others), children));
    };
    SubNav.menuChildType = 'submenu';
    SubNav.propTypes = {
        className: PropTypes.string,
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        label: PropTypes.node,
        selectable: PropTypes.bool,
        children: PropTypes.node,
        noIcon: PropTypes.bool,
    };
    SubNav.defaultProps = {
        selectable: false,
    };
    SubNav.contextTypes = {
        prefix: PropTypes.string,
        mode: PropTypes.string,
        iconOnly: PropTypes.bool,
        iconOnlyWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        hasArrow: PropTypes.bool,
    };
    return SubNav;
}(Component));
export default SubNav;

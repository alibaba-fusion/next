"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var menu_1 = require("../menu");
var icon_1 = require("../icon");
/**
 * Nav.SubNav
 * @description 继承自 `Menu.SubMenu` 的能力请查看 `Menu.SubMenu` 文档
 */
var SubNav = /** @class */ (function (_super) {
    tslib_1.__extends(SubNav, _super);
    function SubNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubNav.prototype.render = function () {
        var _a;
        var _b = this.context, prefix = _b.prefix, iconOnly = _b.iconOnly, iconOnlyWidth = _b.iconOnlyWidth, hasArrow = _b.hasArrow, noIcon = _b.noIcon, mode = _b.mode;
        var _c = this.props, className = _c.className, icon = _c.icon, label = _c.label, children = _c.children, level = _c.level, others = tslib_1.__rest(_c, ["className", "icon", "label", "children", "level"]);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "nav-sub-nav-item")] = true,
            _a["".concat(prefix, "nav-popup")] = mode === 'popup',
            _a[className] = !!className,
            _a));
        var iconEl = typeof icon === 'string' ? react_1.default.createElement(icon_1.default, { className: "".concat(prefix, "nav-icon"), type: icon }) : icon;
        // 这里是为 iconOnly 模式下，添加默认的展开按钮
        // 只有在 inline 模式下 或 popup模式的第一层级，才需要添加默认的按钮
        if (iconOnly && hasArrow && (mode === 'inline' || (level === 1 && mode === 'popup'))) {
            iconEl = (react_1.default.createElement(icon_1.default, { className: "".concat(prefix, "nav-icon-only-arrow"), type: mode === 'popup' ? 'arrow-right' : 'arrow-down' }));
        }
        var newLabel = [iconEl ? (0, react_1.cloneElement)(iconEl, { key: 'icon' }) : null];
        var showLabel = !iconOnly || (iconOnly && !iconOnlyWidth);
        if (showLabel) {
            newLabel.push(react_1.default.createElement("span", { key: "label" }, label));
        }
        var title;
        if (typeof label === 'string') {
            title = label;
        }
        return (react_1.default.createElement(menu_1.default.SubMenu, tslib_1.__assign({ className: cls, label: newLabel, level: level, title: title, noIcon: noIcon }, others), children));
    };
    SubNav.menuChildType = 'submenu';
    SubNav.propTypes = {
        /**
         * 自定义类名
         */
        className: prop_types_1.default.string,
        /**
         * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="your type" />`
         */
        icon: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.node]),
        /**
         * 标签内容
         */
        label: prop_types_1.default.node,
        /**
         * 是否可选
         */
        selectable: prop_types_1.default.bool,
        /**
         * 导航项和子导航
         */
        children: prop_types_1.default.node,
        /**
         * 是否需要提示当前项可展开的 icon，默认是有的
         */
        noIcon: prop_types_1.default.bool,
    };
    SubNav.defaultProps = {
        selectable: false,
    };
    SubNav.contextTypes = {
        prefix: prop_types_1.default.string,
        mode: prop_types_1.default.string,
        iconOnly: prop_types_1.default.bool,
        iconOnlyWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        hasArrow: prop_types_1.default.bool,
    };
    return SubNav;
}(react_1.Component));
exports.default = SubNav;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var menu_1 = tslib_1.__importDefault(require("../menu"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var balloon_1 = tslib_1.__importDefault(require("../balloon"));
var Tooltip = balloon_1.default.Tooltip;
/**
 * Nav.Item
 * @remarks 继承自 `Menu.Item` 的能力请查看 `Menu.Item` 文档
 */
var Item = /** @class */ (function (_super) {
    tslib_1.__extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.prototype.render = function () {
        var _a;
        var _b = this.context, prefix = _b.prefix, iconOnly = _b.iconOnly, iconOnlyWidth = _b.iconOnlyWidth, hasTooltip = _b.hasTooltip, iconTextOnly = _b.iconTextOnly;
        var _c = this.props, icon = _c.icon, children = _c.children, className = _c.className, others = tslib_1.__rest(_c, ["icon", "children", "className"]);
        var iconEl = typeof icon === 'string' ? react_1.default.createElement(icon_1.default, { className: "".concat(prefix, "nav-icon"), type: icon }) : icon;
        var title;
        if (typeof children === 'string') {
            title = children;
        }
        var showChildren = !iconOnly || (iconOnly && !iconOnlyWidth) || iconTextOnly;
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "nav-with-title")] = iconOnly && iconTextOnly,
            _a[className] = !!className,
            _a));
        var newChildren = showChildren ? (iconTextOnly ? (react_1.default.createElement("span", { className: "".concat(prefix, "nav-text") }, children)) : (children)) : null;
        var item = (react_1.default.createElement(menu_1.default.Item, tslib_1.__assign({ title: title, className: cls }, others),
            iconEl,
            newChildren));
        if (iconOnly && hasTooltip && others.parentMode !== 'popup') {
            return (react_1.default.createElement(Tooltip, { align: "r", trigger: item }, children));
        }
        return item;
    };
    Item.menuChildType = 'item';
    Item.propTypes = {
        /**
         * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
         */
        icon: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.node]),
        /**
         * 导航内容
         */
        children: prop_types_1.default.node,
        parentMode: prop_types_1.default.oneOf(['inline', 'popup']),
    };
    Item.contextTypes = {
        prefix: prop_types_1.default.string,
        iconOnly: prop_types_1.default.bool,
        iconOnlyWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        iconTextOnly: prop_types_1.default.bool,
        hasTooltip: prop_types_1.default.bool,
    };
    return Item;
}(react_1.Component));
exports.default = Item;

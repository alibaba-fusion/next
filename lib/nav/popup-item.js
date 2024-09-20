"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var menu_1 = tslib_1.__importDefault(require("../menu"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * Nav.PopupItem
 * @remarks 继承自 `Menu.PopupItem` 的能力请查看 `Menu.PopupItem` 文档
 */
var PopupItem = /** @class */ (function (_super) {
    tslib_1.__extends(PopupItem, _super);
    function PopupItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopupItem.prototype.render = function () {
        var _a;
        var _b = this.context, prefix = _b.prefix, iconOnly = _b.iconOnly, iconOnlyWidth = _b.iconOnlyWidth, hasArrow = _b.hasArrow;
        var _c = this.props, className = _c.className, icon = _c.icon, label = _c.label, children = _c.children, others = tslib_1.__rest(_c, ["className", "icon", "label", "children"]);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "nav-popup-item")] = true,
            _a[className] = !!className,
            _a));
        var iconEl = typeof icon === 'string' ? react_1.default.createElement(icon_1.default, { className: "".concat(prefix, "nav-icon"), type: icon }) : icon;
        if (iconOnly) {
            if (hasArrow) {
                iconEl = react_1.default.createElement(icon_1.default, { className: "".concat(prefix, "nav-icon-only-arrow"), type: "arrow-right" });
            }
        }
        var newLabel = [
            iconEl ? (0, react_1.cloneElement)(iconEl, { key: 'icon' }) : null,
        ];
        var showLabel = !iconOnly || (iconOnly && !iconOnlyWidth);
        if (showLabel) {
            newLabel.push(react_1.default.createElement("span", { key: "label" }, label));
        }
        return (react_1.default.createElement(menu_1.default.PopupItem, tslib_1.__assign({ className: cls, label: newLabel }, others), children));
    };
    PopupItem.menuChildType = 'submenu';
    PopupItem.propTypes = {
        className: prop_types_1.default.string,
        icon: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.node]),
        label: prop_types_1.default.node,
        children: prop_types_1.default.node,
    };
    PopupItem.contextTypes = {
        prefix: prop_types_1.default.string,
        iconOnly: prop_types_1.default.bool,
        iconOnlyWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
        hasArrow: prop_types_1.default.bool,
    };
    return PopupItem;
}(react_1.Component));
exports.default = PopupItem;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var menu_1 = tslib_1.__importDefault(require("../menu"));
/**
 * Nav.Group
 * @remarks 继承自 `Menu.Group` 的能力请查看 `Menu.Group` 文档
 */
var Group = /** @class */ (function (_super) {
    tslib_1.__extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Group.prototype.render = function () {
        var _a;
        var _b = this.context, prefix = _b.prefix, iconOnly = _b.iconOnly;
        var _c = this.props, className = _c.className, children = _c.children, label = _c.label, others = tslib_1.__rest(_c, ["className", "children", "label"]);
        var newLabel = label;
        if (iconOnly) {
            // TODO: add a group icon ?
            newLabel = [react_1.default.createElement("span", { key: "label" }, label)];
        }
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "nav-group-label")] = true,
            _a[className] = !!className,
            _a));
        return (react_1.default.createElement(menu_1.default.Group, tslib_1.__assign({ className: cls, label: newLabel }, others), children));
    };
    Group.menuChildType = 'group';
    Group.propTypes = {
        /**
         * 自定义类名
         */
        className: prop_types_1.default.string,
        /**
         * 标签内容
         */
        label: prop_types_1.default.node,
        /**
         * 导航项和子导航
         */
        children: prop_types_1.default.node,
    };
    Group.contextTypes = {
        prefix: prop_types_1.default.string,
        iconOnly: prop_types_1.default.bool,
    };
    return Group;
}(react_1.Component));
exports.default = Group;

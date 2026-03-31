"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var item_1 = tslib_1.__importDefault(require("./item"));
var Group = /** @class */ (function (_super) {
    tslib_1.__extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Group.prototype.render = function () {
        var _a;
        var _b = this
            .props, root = _b.root, className = _b.className, label = _b.label, children = _b.children, parentMode = _b.parentMode, others = tslib_1.__rest(_b, ["root", "className", "label", "children", "parentMode"]);
        var prefix = root.props.prefix;
        var newClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "menu-group-label")] = true,
            _a), className);
        var newChildren = children.map(function (child) {
            var _a;
            // to fix https://github.com/alibaba-fusion/next/issues/952
            if (typeof child !== 'function' && typeof child !== 'object') {
                return child;
            }
            var className = child.props.className;
            var newChildClassName = (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "menu-group-item")] = true,
                _a[className] = !!className,
                _a));
            return (0, react_1.cloneElement)(child, {
                parentMode: parentMode,
                className: newChildClassName,
            });
        });
        return tslib_1.__spreadArray([
            react_1.default.createElement(item_1.default, tslib_1.__assign({ key: "menu-group-label", className: newClassName, replaceClassName: true, root: root, parentMode: parentMode }, others), label)
        ], tslib_1.__read(newChildren), false);
    };
    Group.menuChildType = 'group';
    Group.propTypes = {
        root: prop_types_1.default.object,
        className: prop_types_1.default.string,
        label: prop_types_1.default.node,
        children: prop_types_1.default.node,
        parentMode: prop_types_1.default.oneOf(['inline', 'popup']),
    };
    return Group;
}(react_1.Component));
exports.default = Group;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
/**
 * Menu.Divider
 * @order 6
 */
var Divider = /** @class */ (function (_super) {
    tslib_1.__extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var _a;
        var _b = this.props, root = _b.root, className = _b.className, parentMode = _b.parentMode, parent = _b.parent, others = tslib_1.__rest(_b, ["root", "className", "parentMode", "parent"]);
        var prefix = root.props.prefix;
        var newClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "menu-divider")] = true,
            _a[className] = !!className,
            _a));
        return react_1.default.createElement("li", tslib_1.__assign({ role: "separator", className: newClassName }, others));
    };
    Divider.menuChildType = 'divider';
    Divider.propTypes = {
        root: prop_types_1.default.object,
        className: prop_types_1.default.string,
    };
    return Divider;
}(react_1.Component));
exports.default = Divider;

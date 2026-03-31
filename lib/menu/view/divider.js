"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var Divider = /** @class */ (function (_super) {
    tslib_1.__extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var _a = this
            .props, root = _a.root, className = _a.className, parentMode = _a.parentMode, parent = _a.parent, others = tslib_1.__rest(_a, ["root", "className", "parentMode", "parent"]);
        var prefix = root.props.prefix;
        var newClassName = (0, classnames_1.default)("".concat(prefix, "menu-divider"), className);
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

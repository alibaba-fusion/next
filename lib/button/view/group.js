"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../../config-provider"));
/**
 * Button.Group
 */
var ButtonGroup = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, size = _b.size, children = _b.children, rtl = _b.rtl, others = tslib_1.__rest(_b, ["prefix", "className", "size", "children", "rtl"]);
        var groupCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "btn-group")] = true,
            _a[className] = className,
            _a));
        var cloneChildren = react_1.Children.map(children, function (child) {
            if (child) {
                // fixme: child may not be cloned
                return react_1.default.cloneElement(child, {
                    size: size,
                });
            }
        });
        if (rtl) {
            others.dir = 'rtl';
        }
        return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: groupCls }), cloneChildren));
    };
    ButtonGroup.displayName = 'ButtonGroup';
    ButtonGroup.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { rtl: prop_types_1.default.bool, prefix: prop_types_1.default.string, size: prop_types_1.default.string, className: prop_types_1.default.string, children: prop_types_1.default.node });
    ButtonGroup.defaultProps = {
        prefix: 'next-',
        size: 'medium',
    };
    return ButtonGroup;
}(react_1.Component));
exports.default = config_provider_1.default.config(ButtonGroup);

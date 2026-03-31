"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var util_1 = require("../util");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
/**
 * Divider
 */
var Divider = /** @class */ (function (_super) {
    tslib_1.__extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, dashed = _b.dashed, direction = _b.direction, orientation = _b.orientation, children = _b.children;
        var others = util_1.obj.pickOthers(Divider.propTypes, this.props);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "divider")] = true,
            _a["".concat(prefix, "divider-dashed")] = !!dashed,
            _a["".concat(prefix, "divider-").concat(direction)] = !!direction,
            _a["".concat(prefix, "divider-with-text-").concat(orientation)] = !!orientation && children,
            _a), className);
        return (react_1.default.createElement("div", tslib_1.__assign({ role: "separator", className: cls }, others), children && react_1.default.createElement("span", { className: "".concat(prefix, "divider-inner-text") }, children)));
    };
    Divider.propTypes = {
        prefix: prop_types_1.default.string,
        children: prop_types_1.default.any,
        className: prop_types_1.default.string,
        dashed: prop_types_1.default.bool,
        direction: prop_types_1.default.oneOf(['hoz', 'ver']),
        orientation: prop_types_1.default.oneOf(['left', 'right', 'center']),
    };
    Divider.defaultProps = {
        prefix: 'next-',
        direction: 'hoz',
        orientation: 'center',
        dashed: false,
    };
    return Divider;
}(react_1.Component));
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(Divider));

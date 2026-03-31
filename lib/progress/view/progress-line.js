"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var Line = /** @class */ (function (_super) {
    tslib_1.__extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, size = _c.size, state = _c.state, color = _c.color, percent = _c.percent, progressive = _c.progressive, hasBorder = _c.hasBorder, textRender = _c.textRender, className = _c.className, rtl = _c.rtl, backgroundColor = _c.backgroundColor, others = tslib_1.__rest(_c, ["prefix", "size", "state", "color", "percent", "progressive", "hasBorder", "textRender", "className", "rtl", "backgroundColor"]);
        var suffixText = textRender(percent, { rtl: rtl });
        var wrapCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "progress-line")] = true,
            _a["".concat(prefix, "progress-line-show-info")] = suffixText,
            _a["".concat(prefix, "progress-line-show-border")] = hasBorder,
            _a["".concat(prefix + size)] = size,
            _a[className] = className,
            _a));
        var lineCls = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "progress-line-overlay")] = true,
            _b["".concat(prefix, "progress-line-overlay-").concat(state)] = !color && !progressive && state,
            _b["".concat(prefix, "progress-line-overlay-started")] = !color && progressive && percent <= 30,
            _b["".concat(prefix, "progress-line-overlay-middle")] = !color && progressive && percent > 30 && percent < 80,
            _b["".concat(prefix, "progress-line-overlay-finishing")] = !color && progressive && percent >= 80,
            _b));
        var lineStyle = {
            width: "".concat(percent > 100 ? 100 : percent < 0 ? 0 : percent, "%"),
            backgroundColor: color,
        };
        var underlayStyle = { backgroundColor: backgroundColor };
        return (react_1.default.createElement("div", tslib_1.__assign({ dir: rtl ? 'rtl' : undefined, role: "progressbar", "aria-valuenow": percent, "aria-valuemin": 0, "aria-valuemax": 100, className: wrapCls }, others),
            react_1.default.createElement("div", { className: "".concat(prefix, "progress-line-container") },
                react_1.default.createElement("div", { className: "".concat(prefix, "progress-line-underlay"), style: underlayStyle },
                    react_1.default.createElement("div", { className: lineCls, style: lineStyle }))),
            suffixText ? (react_1.default.createElement("div", { className: "".concat(prefix, "progress-line-text") }, suffixText)) : null));
    };
    Line.propTypes = {
        size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
        percent: prop_types_1.default.number,
        state: prop_types_1.default.oneOf(['normal', 'success', 'error']),
        progressive: prop_types_1.default.bool,
        hasBorder: prop_types_1.default.bool,
        textRender: prop_types_1.default.func,
        color: prop_types_1.default.string,
        backgroundColor: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    };
    return Line;
}(react_1.default.PureComponent));
exports.default = Line;

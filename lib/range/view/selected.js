"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var utils_1 = require("../utils");
var Selected = /** @class */ (function (_super) {
    tslib_1.__extends(Selected, _super);
    function Selected() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Selected.prototype._getStyle = function () {
        var _a = this.props, min = _a.min, max = _a.max, reverse = _a.reverse, rtl = _a.rtl;
        var value = this.props.value;
        if (!Array.isArray(value)) {
            value = [min, value];
        }
        var width = ((value[1] - value[0]) * 100) / (max - min);
        var style;
        if (!rtl && !reverse) {
            // normal select
            style = {
                width: "".concat(width, "%"),
                left: "".concat((0, utils_1.getPercent)(min, max, value[0]), "%"),
            };
        }
        else if (rtl && !reverse) {
            // select in rtl mode
            style = {
                width: "".concat(width, "%"),
                left: "".concat((0, utils_1.getPercent)(min, max, max + min - value[1]), "%"),
            };
        }
        else if (!rtl && reverse) {
            // select in reverse mode
            style = {
                width: "".concat(100 - width, "%"),
                left: "".concat((0, utils_1.getPercent)(min, max, value[0]) + width, "%"),
            };
        }
        else {
            // select in rtl & reverse mode
            style = {
                width: "".concat(100 - width, "%"),
                left: "".concat((0, utils_1.getPercent)(min, max, value[0]), "%"),
            };
        }
        return style;
    };
    Selected.prototype._getStyleLeft = function () {
        var _a = this.props, min = _a.min, max = _a.max, rtl = _a.rtl;
        var value = this.props.value;
        if (!Array.isArray(value)) {
            value = [min, value];
        }
        var style = {
            width: "".concat((0, utils_1.getPercent)(min, max, value[0]), "%"),
            left: 0,
        };
        if (rtl) {
            style.width = "".concat(100 - (0, utils_1.getPercent)(min, max, value[1]), "%");
        }
        return style;
    };
    Selected.prototype._getStyleRight = function () {
        var _a = this.props, min = _a.min, max = _a.max, rtl = _a.rtl;
        var value = this.props.value;
        if (!Array.isArray(value)) {
            value = [min, value];
        }
        var width = ((value[1] - value[0]) * 100) / (max - min);
        var style = {
            width: "".concat(100 - (0, utils_1.getPercent)(min, max, value[0]) - width, "%"),
            left: "".concat((0, utils_1.getPercent)(min, max, value[0]) + width, "%"),
        };
        if (rtl) {
            style = {
                width: "".concat((0, utils_1.getPercent)(min, max, value[0]), "%"),
                left: "".concat(100 - (0, utils_1.getPercent)(min, max, value[0]), "%"),
            };
        }
        return style;
    };
    Selected.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, slider = _b.slider, reverse = _b.reverse;
        var classes = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "range-selected")] = true,
            _a));
        var SeletedComps = react_1.default.createElement("div", { className: classes, style: this._getStyle() });
        if (slider === 'double' && reverse) {
            SeletedComps = (react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: classes, style: this._getStyleLeft() }),
                react_1.default.createElement("div", { className: classes, style: this._getStyleRight() })));
        }
        return SeletedComps;
    };
    Selected.displayName = 'Selected';
    Selected.propTypes = {
        min: prop_types_1.default.number,
        max: prop_types_1.default.number,
        slider: prop_types_1.default.string,
        value: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.arrayOf(prop_types_1.default.number)]),
        prefix: prop_types_1.default.string,
        reverse: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
    };
    Selected.defaultProps = {
        prefix: 'next-',
        slider: 'single',
        min: 0,
        max: 100,
        value: 0,
        reverse: false,
        rtl: false,
    };
    return Selected;
}(react_1.default.Component));
exports.default = Selected;

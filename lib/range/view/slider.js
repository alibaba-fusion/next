"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var utils_1 = require("../utils");
function _getProps(min, max, value, rtl) {
    return {
        style: {
            left: rtl ? "".concat(100 - (0, utils_1.getPercent)(min, max, value), "%") : "".concat((0, utils_1.getPercent)(min, max, value), "%"),
            zIndex: 100,
        },
        'aria-valuenow': value,
        // @ts-expect-error aria-valuetext 应该是一个 string 类型
        'aria-valuetext': value,
        'aria-valuemin': min,
        'aria-valuemax': max,
    };
}
function Slider(_a) {
    var _b;
    var prefix = _a.prefix, hasMovingClass = _a.hasMovingClass, min = _a.min, max = _a.max, value = _a.value, onKeyDown = _a.onKeyDown, rtl = _a.rtl;
    var classes = (0, classnames_1.default)((_b = {},
        _b["".concat(prefix, "range-slider")] = true,
        _b["".concat(prefix, "range-slider-moving")] = hasMovingClass,
        _b));
    return (react_1.default.createElement("div", tslib_1.__assign({ className: classes, onKeyDown: onKeyDown, role: "slider", tabIndex: 0 }, _getProps(min, max, value, rtl)),
        react_1.default.createElement("div", { className: "".concat(prefix, "range-slider-inner") })));
}
Slider.propTypes = {
    min: prop_types_1.default.number,
    max: prop_types_1.default.number,
    value: prop_types_1.default.number,
    prefix: prop_types_1.default.string,
    hasMovingClass: prop_types_1.default.bool,
    rtl: prop_types_1.default.bool,
};
Slider.defaultProps = {
    prefix: 'next-',
    min: 0,
    max: 100,
    value: 0,
    hasMovingClass: false,
    rtl: false,
};
Slider.displayName = 'Slider';
exports.default = Slider;

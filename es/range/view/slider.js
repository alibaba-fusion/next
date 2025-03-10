import { __assign } from "tslib";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getPercent } from '../utils';
function _getProps(min, max, value, rtl) {
    return {
        style: {
            left: rtl ? "".concat(100 - getPercent(min, max, value), "%") : "".concat(getPercent(min, max, value), "%"),
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
    var classes = classNames((_b = {},
        _b["".concat(prefix, "range-slider")] = true,
        _b["".concat(prefix, "range-slider-moving")] = hasMovingClass,
        _b));
    return (React.createElement("div", __assign({ className: classes, onKeyDown: onKeyDown, role: "slider", tabIndex: 0 }, _getProps(min, max, value, rtl)),
        React.createElement("div", { className: "".concat(prefix, "range-slider-inner") })));
}
Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    prefix: PropTypes.string,
    hasMovingClass: PropTypes.bool,
    rtl: PropTypes.bool,
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
export default Slider;

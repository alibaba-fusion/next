import { __extends } from "tslib";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { getPercent } from '../utils';
var Selected = /** @class */ (function (_super) {
    __extends(Selected, _super);
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
                left: "".concat(getPercent(min, max, value[0]), "%"),
            };
        }
        else if (rtl && !reverse) {
            // select in rtl mode
            style = {
                width: "".concat(width, "%"),
                left: "".concat(getPercent(min, max, max + min - value[1]), "%"),
            };
        }
        else if (!rtl && reverse) {
            // select in reverse mode
            style = {
                width: "".concat(100 - width, "%"),
                left: "".concat(getPercent(min, max, value[0]) + width, "%"),
            };
        }
        else {
            // select in rtl & reverse mode
            style = {
                width: "".concat(100 - width, "%"),
                left: "".concat(getPercent(min, max, value[0]), "%"),
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
            width: "".concat(getPercent(min, max, value[0]), "%"),
            left: 0,
        };
        if (rtl) {
            style.width = "".concat(100 - getPercent(min, max, value[1]), "%");
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
            width: "".concat(100 - getPercent(min, max, value[0]) - width, "%"),
            left: "".concat(getPercent(min, max, value[0]) + width, "%"),
        };
        if (rtl) {
            style = {
                width: "".concat(getPercent(min, max, value[0]), "%"),
                left: "".concat(100 - getPercent(min, max, value[0]), "%"),
            };
        }
        return style;
    };
    Selected.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, slider = _b.slider, reverse = _b.reverse;
        var classes = classNames((_a = {},
            _a["".concat(prefix, "range-selected")] = true,
            _a));
        var SeletedComps = React.createElement("div", { className: classes, style: this._getStyle() });
        if (slider === 'double' && reverse) {
            SeletedComps = (React.createElement("div", null,
                React.createElement("div", { className: classes, style: this._getStyleLeft() }),
                React.createElement("div", { className: classes, style: this._getStyleRight() })));
        }
        return SeletedComps;
    };
    Selected.displayName = 'Selected';
    Selected.propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
        slider: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        prefix: PropTypes.string,
        reverse: PropTypes.bool,
        rtl: PropTypes.bool,
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
}(React.Component));
export default Selected;

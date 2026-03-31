import { __extends } from "tslib";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { inRange, getPercent } from '../utils';
var Scale = /** @class */ (function (_super) {
    __extends(Scale, _super);
    function Scale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scale.prototype._renderItems = function () {
        var _a = this.props, min = _a.min, max = _a.max, value = _a.value, prefix = _a.prefix, scales = _a.scales, rtl = _a.rtl;
        var items = [];
        scales.forEach(function (scale, i) {
            var _a;
            var classes = classNames((_a = {},
                _a["".concat(prefix, "range-scale-item")] = true,
                _a.activated = inRange(scale, value, min),
                _a));
            var style;
            if (rtl) {
                style = {
                    right: "".concat(getPercent(min, max, scale), "%"),
                    left: 'auto',
                };
            }
            else {
                style = {
                    left: "".concat(getPercent(min, max, scale), "%"),
                    right: 'auto',
                };
            }
            items.push(
            // "key" is for https://fb.me/react-warning-keys
            React.createElement("span", { className: classes, style: style, key: i }));
        });
        return items;
    };
    Scale.prototype.render = function () {
        var _a;
        var prefix = this.props.prefix;
        var classes = classNames((_a = {},
            _a["".concat(prefix, "range-scale")] = true,
            _a));
        var items = this._renderItems();
        return React.createElement("div", { className: classes }, items);
    };
    Scale.displayName = 'Scale';
    Scale.propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        prefix: PropTypes.string,
        scales: PropTypes.arrayOf(PropTypes.number),
        rtl: PropTypes.bool,
    };
    Scale.defaultProps = {
        prefix: 'next-',
        min: 0,
        max: 100,
        value: 0,
        rtl: false,
    };
    return Scale;
}(React.Component));
export default Scale;

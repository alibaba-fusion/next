"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var utils_1 = require("../utils");
var Scale = /** @class */ (function (_super) {
    tslib_1.__extends(Scale, _super);
    function Scale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scale.prototype._renderItems = function () {
        var _a = this.props, min = _a.min, max = _a.max, value = _a.value, prefix = _a.prefix, scales = _a.scales, rtl = _a.rtl;
        var items = [];
        scales.forEach(function (scale, i) {
            var _a;
            var classes = (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "range-scale-item")] = true,
                _a.activated = (0, utils_1.inRange)(scale, value, min),
                _a));
            var style;
            if (rtl) {
                style = {
                    right: "".concat((0, utils_1.getPercent)(min, max, scale), "%"),
                    left: 'auto',
                };
            }
            else {
                style = {
                    left: "".concat((0, utils_1.getPercent)(min, max, scale), "%"),
                    right: 'auto',
                };
            }
            items.push(
            // "key" is for https://fb.me/react-warning-keys
            react_1.default.createElement("span", { className: classes, style: style, key: i }));
        });
        return items;
    };
    Scale.prototype.render = function () {
        var _a;
        var prefix = this.props.prefix;
        var classes = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "range-scale")] = true,
            _a));
        var items = this._renderItems();
        return react_1.default.createElement("div", { className: classes }, items);
    };
    Scale.displayName = 'Scale';
    Scale.propTypes = {
        min: prop_types_1.default.number,
        max: prop_types_1.default.number,
        value: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.arrayOf(prop_types_1.default.number)]),
        prefix: prop_types_1.default.string,
        scales: prop_types_1.default.arrayOf(prop_types_1.default.number),
        rtl: prop_types_1.default.bool,
    };
    Scale.defaultProps = {
        prefix: 'next-',
        min: 0,
        max: 100,
        value: 0,
        rtl: false,
    };
    return Scale;
}(react_1.default.Component));
exports.default = Scale;

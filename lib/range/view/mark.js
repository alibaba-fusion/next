"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = require("classnames");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var utils_1 = require("../utils");
var Mark = /** @class */ (function (_super) {
    tslib_1.__extends(Mark, _super);
    function Mark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mark.prototype._renderItems = function () {
        var _a = this.props, min = _a.min, max = _a.max, value = _a.value, prefix = _a.prefix, marks = _a.marks, rtl = _a.rtl;
        var items = [];
        Object.keys(marks).forEach(function (mark, i) {
            var _a;
            var classes = (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "range-mark-text")] = true,
                _a.activated = (0, utils_1.inRange)(mark, value, min),
                _a));
            var style;
            if (rtl) {
                style = {
                    right: "".concat((0, utils_1.getPercent)(min, max, mark), "%"),
                    left: 'auto',
                };
            }
            else {
                style = {
                    left: "".concat((0, utils_1.getPercent)(min, max, mark), "%"),
                    right: 'auto',
                };
            }
            items.push(
            // "key" is for https://fb.me/react-warning-keys
            react_1.default.createElement("span", { className: classes, style: style, key: i }, marks[mark]));
        });
        return items;
    };
    Mark.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, marksPosition = _b.marksPosition;
        var className = marksPosition === 'above' ? "".concat(prefix, "range-mark-above") : "".concat(prefix, "range-mark-below");
        var classes = (0, classnames_1.default)(className, (_a = {},
            _a["".concat(prefix, "range-mark")] = true,
            _a));
        var items = this._renderItems();
        return react_1.default.createElement("div", { className: classes }, items);
    };
    Mark.propTypes = {
        min: prop_types_1.default.number,
        max: prop_types_1.default.number,
        value: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.arrayOf(prop_types_1.default.number)]),
        prefix: prop_types_1.default.string,
        marks: prop_types_1.default.object,
        marksPosition: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
    };
    Mark.defaultProps = {
        prefix: 'next-',
        min: 0,
        max: 100,
        value: 0,
        marksPosition: '',
        rtl: false,
    };
    return Mark;
}(react_1.default.Component));
exports.default = Mark;

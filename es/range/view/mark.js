import { __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { inRange, getPercent } from '../utils';
var Mark = /** @class */ (function (_super) {
    __extends(Mark, _super);
    function Mark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mark.prototype._renderItems = function () {
        var _a = this.props, min = _a.min, max = _a.max, value = _a.value, prefix = _a.prefix, marks = _a.marks, rtl = _a.rtl;
        var items = [];
        Object.keys(marks).forEach(function (mark, i) {
            var _a;
            var classes = classNames((_a = {},
                _a["".concat(prefix, "range-mark-text")] = true,
                // @ts-expect-error mark 为 string 类型，应该转换为 number
                _a.activated = inRange(mark, value, min),
                _a));
            var style;
            if (rtl) {
                style = {
                    // @ts-expect-error mark 为 string 类型，应该转换为 number
                    right: "".concat(getPercent(min, max, mark), "%"),
                    left: 'auto',
                };
            }
            else {
                style = {
                    // @ts-expect-error mark 为 string 类型，应该转换为 number
                    left: "".concat(getPercent(min, max, mark), "%"),
                    right: 'auto',
                };
            }
            items.push(
            // "key" is for https://fb.me/react-warning-keys
            React.createElement("span", { className: classes, style: style, key: i }, marks[mark]));
        });
        return items;
    };
    Mark.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, marksPosition = _b.marksPosition;
        var className = marksPosition === 'above' ? "".concat(prefix, "range-mark-above") : "".concat(prefix, "range-mark-below");
        var classes = classNames(className, (_a = {},
            _a["".concat(prefix, "range-mark")] = true,
            _a));
        var items = this._renderItems();
        return React.createElement("div", { className: classes }, items);
    };
    Mark.displayName = 'Mark';
    Mark.propTypes = {
        min: PropTypes.number,
        max: PropTypes.number,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        prefix: PropTypes.string,
        marks: PropTypes.object,
        marksPosition: PropTypes.string,
        rtl: PropTypes.bool,
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
}(React.Component));
export default Mark;

import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, size = _c.size, state = _c.state, color = _c.color, percent = _c.percent, progressive = _c.progressive, hasBorder = _c.hasBorder, textRender = _c.textRender, className = _c.className, rtl = _c.rtl, backgroundColor = _c.backgroundColor, others = __rest(_c, ["prefix", "size", "state", "color", "percent", "progressive", "hasBorder", "textRender", "className", "rtl", "backgroundColor"]);
        var suffixText = textRender(percent, { rtl: rtl });
        var wrapCls = classNames((_a = {},
            _a["".concat(prefix, "progress-line")] = true,
            _a["".concat(prefix, "progress-line-show-info")] = suffixText,
            _a["".concat(prefix, "progress-line-show-border")] = hasBorder,
            _a["".concat(prefix + size)] = size,
            _a[className] = className,
            _a));
        var lineCls = classNames((_b = {},
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
        return (React.createElement("div", __assign({ dir: rtl ? 'rtl' : undefined, role: "progressbar", "aria-valuenow": percent, "aria-valuemin": 0, "aria-valuemax": 100, className: wrapCls }, others),
            React.createElement("div", { className: "".concat(prefix, "progress-line-container") },
                React.createElement("div", { className: "".concat(prefix, "progress-line-underlay"), style: underlayStyle },
                    React.createElement("div", { className: lineCls, style: lineStyle }))),
            suffixText ? (React.createElement("div", { className: "".concat(prefix, "progress-line-text") }, suffixText)) : null));
    };
    Line.propTypes = {
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        percent: PropTypes.number,
        state: PropTypes.oneOf(['normal', 'success', 'error']),
        progressive: PropTypes.bool,
        hasBorder: PropTypes.bool,
        textRender: PropTypes.func,
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        rtl: PropTypes.bool,
        prefix: PropTypes.string,
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    };
    return Line;
}(React.PureComponent));
export default Line;

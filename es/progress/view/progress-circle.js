import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var VIEWBOX_WIDTH = 100; // width of viewBox
var HALF_VIEWBOX_WIDTH = VIEWBOX_WIDTH / 2;
var DEFAULT_STROKE_WIDTH = 8;
var viewBox = "0 0 ".concat(VIEWBOX_WIDTH, " ").concat(VIEWBOX_WIDTH);
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(props) {
        var _this = _super.call(this, props) || this;
        _this._underlayRefHandler = function (ref) {
            _this.underlay = ref;
        };
        _this._overlayRefHandler = function (ref) {
            _this.overlay = ref;
        };
        _this.state = {
            underlayStrokeWidth: DEFAULT_STROKE_WIDTH,
            overlayStrokeWidth: DEFAULT_STROKE_WIDTH,
        };
        return _this;
    }
    Circle.prototype.componentDidMount = function () {
        if (this.underlay && this.overlay) {
            // eslint-disable-next-line
            this.setState({
                underlayStrokeWidth: this._getCssValue(this.underlay, 'stroke-width') || DEFAULT_STROKE_WIDTH,
                overlayStrokeWidth: this._getCssValue(this.overlay, 'stroke-width') || DEFAULT_STROKE_WIDTH,
            });
        }
    };
    Circle.prototype._getCssValue = function (dom, name) {
        var css = window.getComputedStyle(dom).getPropertyValue(name);
        var regExp = /(\d*)px/g;
        var result = regExp.exec(css);
        return Array.isArray(result) ? Number(result[1]) : 0;
    };
    Circle.prototype._computeOverlayStrokeDashOffset = function () {
        var _a = this.state, underlayStrokeWidth = _a.underlayStrokeWidth, overlayStrokeWidth = _a.overlayStrokeWidth;
        var overlayRadius = HALF_VIEWBOX_WIDTH -
            overlayStrokeWidth / 2 -
            (underlayStrokeWidth - overlayStrokeWidth) / 2;
        var overlayLen = Math.PI * 2 * overlayRadius;
        return ((VIEWBOX_WIDTH - this.props.percent) / VIEWBOX_WIDTH) * overlayLen;
    };
    Circle.prototype._getPath = function (radius) {
        return "M ".concat(HALF_VIEWBOX_WIDTH, ",").concat(HALF_VIEWBOX_WIDTH, " m 0,-").concat(radius, " a ").concat(radius, ",").concat(radius, " 0 1 1 0,").concat(2 * radius, " a ").concat(radius, ",").concat(radius, " 0 1 1 0,-").concat(2 * radius);
    };
    Circle.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, size = _c.size, state = _c.state, percent = _c.percent, className = _c.className, textRender = _c.textRender, progressive = _c.progressive, color = _c.color, backgroundColor = _c.backgroundColor, rtl = _c.rtl, others = __rest(_c, ["prefix", "size", "state", "percent", "className", "textRender", "progressive", "color", "backgroundColor", "rtl"]);
        var _d = this.state, underlayStrokeWidth = _d.underlayStrokeWidth, overlayStrokeWidth = _d.overlayStrokeWidth;
        // underlay path
        var underlayRadius = HALF_VIEWBOX_WIDTH - underlayStrokeWidth / 2;
        var underlayPath = this._getPath(underlayRadius);
        // overlay path (为居中，减去相对于underlay的宽度)
        var overlayRadius = HALF_VIEWBOX_WIDTH -
            overlayStrokeWidth / 2 -
            (underlayStrokeWidth - overlayStrokeWidth) / 2;
        var overlayPath = this._getPath(overlayRadius);
        var overlayLen = Math.PI * 2 * overlayRadius;
        var overlayStrokeDasharray = "".concat(overlayLen, "px ").concat(overlayLen, "px");
        var overlayStrokeDashoffset = "".concat(this._computeOverlayStrokeDashOffset(), "px");
        var suffixText = textRender(percent, { rtl: rtl });
        var wrapCls = classNames((_a = {},
            _a["".concat(prefix, "progress-circle")] = true,
            _a["".concat(prefix, "progress-circle-show-info")] = suffixText,
            _a["".concat(prefix + size)] = size,
            _a[className] = className,
            _a));
        var pathCls = classNames((_b = {},
            _b["".concat(prefix, "progress-circle-overlay")] = true,
            _b["".concat(prefix, "progress-circle-overlay-").concat(state)] = !color && !progressive && state,
            _b["".concat(prefix, "progress-circle-overlay-started")] = !color && progressive && percent <= 30,
            _b["".concat(prefix, "progress-circle-overlay-middle")] = !color && progressive && percent > 30 && percent < 80,
            _b["".concat(prefix, "progress-circle-overlay-finishing")] = !color && progressive && percent >= 80,
            _b));
        var underlayStyle = { stroke: backgroundColor };
        return (React.createElement("div", __assign({ className: wrapCls, dir: rtl ? 'rtl' : undefined, role: "progressbar", "aria-valuenow": percent, "aria-valuemin": 0, "aria-valuemax": 100 }, others),
            React.createElement("svg", { className: "".concat(prefix, "progress-circle-container"), viewBox: viewBox },
                React.createElement("path", { className: "".concat(prefix, "progress-circle-underlay"), d: underlayPath, fillOpacity: "0", ref: this._underlayRefHandler, style: underlayStyle }),
                React.createElement("path", { className: pathCls, d: overlayPath, fillOpacity: "0", strokeDasharray: overlayStrokeDasharray, strokeDashoffset: overlayStrokeDashoffset, ref: this._overlayRefHandler, stroke: color })),
            suffixText ? (React.createElement("div", { className: "".concat(prefix, "progress-circle-text") }, suffixText)) : null));
    };
    Circle.propTypes = {
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        percent: PropTypes.number,
        state: PropTypes.oneOf(['normal', 'success', 'error']),
        progressive: PropTypes.bool,
        textRender: PropTypes.func,
        prefix: PropTypes.string,
        className: PropTypes.string,
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        rtl: PropTypes.bool,
    };
    return Circle;
}(Component));
export default Circle;

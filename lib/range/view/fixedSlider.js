"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var util_1 = require("../../util");
var balloon_1 = tslib_1.__importDefault(require("../../balloon"));
var utils_1 = require("../utils");
var Tooltip = balloon_1.default.Tooltip;
var noop = util_1.func.noop;
function _getStyle(min, max, value, rtl) {
    if (rtl) {
        return {
            left: "".concat((0, utils_1.getPercent)(min, max, max + min - value[1]), "%"),
            right: "".concat((0, utils_1.getPercent)(min, max, value[0]), "%"),
        };
    }
    return {
        left: "".concat((0, utils_1.getPercent)(min, max, value[0]), "%"),
        right: "".concat(100 - (0, utils_1.getPercent)(min, max, value[1]), "%"),
    };
}
function sliderFrag(props) {
    var prefix = props.prefix, min = props.min, max = props.max, value = props.value, disabled = props.disabled, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onMouseDown = props.onMouseDown, rtl = props.rtl;
    var activeClass = !disabled && props.hasMovingClass ? "".concat(prefix, "range-active") : '';
    return (react_1.default.createElement("div", { className: "".concat(prefix, "range-frag ").concat(activeClass), style: _getStyle(min, max, value, rtl), onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onMouseDown: onMouseDown },
        react_1.default.createElement("div", { className: "".concat(prefix, "range-selected") }),
        react_1.default.createElement("div", { className: "".concat(prefix, "range-slider") },
            react_1.default.createElement("div", { className: "".concat(prefix, "range-slider-inner") })),
        react_1.default.createElement("div", { className: "".concat(prefix, "range-slider") },
            react_1.default.createElement("div", { className: "".concat(prefix, "range-slider-inner") }))));
}
sliderFrag.propTypes = {
    prefix: prop_types_1.default.string,
    min: prop_types_1.default.number,
    max: prop_types_1.default.number,
    hasMovingClass: prop_types_1.default.bool,
    onMouseEnter: prop_types_1.default.func,
    onMouseLeave: prop_types_1.default.func,
    onMouseDown: prop_types_1.default.func,
    value: prop_types_1.default.arrayOf(prop_types_1.default.number),
    disabled: prop_types_1.default.bool,
    rtl: prop_types_1.default.bool,
};
var FixedSlider = /** @class */ (function (_super) {
    tslib_1.__extends(FixedSlider, _super);
    function FixedSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasMovingClass: false,
            onTooltipVisibleChange: false,
            tooltipAnimation: true,
        };
        return _this;
    }
    FixedSlider.prototype._onMouseEnter = function () {
        if (!(this.keyState === 'down')) {
            this.keyState = 'enter';
        }
        this.setState({
            hasMovingClass: true,
        });
    };
    FixedSlider.prototype._onMouseLeave = function () {
        if (this.keyState === 'enter') {
            this.setState({
                hasMovingClass: false,
            });
        }
    };
    FixedSlider.prototype._onMouseDown = function () {
        this.keyState = 'down';
        this.setState({
            hasMovingClass: true,
        });
        this._addDocumentEvents();
    };
    FixedSlider.prototype._onMouseUp = function () {
        if (this.keyState === 'down') {
            this.keyState = '';
            this._removeDocumentEvents();
            this.setState({
                hasMovingClass: false,
            });
        }
    };
    FixedSlider.prototype._addDocumentEvents = function () {
        this._onMouseUpListener = util_1.events.on(document, 'mouseup', this._onMouseUp.bind(this));
    };
    FixedSlider.prototype._removeDocumentEvents = function () {
        if (this._onMouseUpListener) {
            this._onMouseUpListener.off();
            this._onMouseUpListener = null;
        }
    };
    FixedSlider.prototype.render = function () {
        var _a = this.props, hasTip = _a.hasTip, value = _a.value, tipRender = _a.tipRender, tooltipVisible = _a.tooltipVisible, hasMovingClass = _a.hasMovingClass;
        var addedProps = {
            hasMovingClass: hasMovingClass || this.state.hasMovingClass,
            onMouseEnter: this._onMouseEnter.bind(this),
            onMouseLeave: this._onMouseLeave.bind(this),
            onMouseDown: this._onMouseDown.bind(this),
        };
        return hasTip ? (react_1.default.createElement(Tooltip, { popupContainer: function (target) { return target.parentNode; }, popupProps: {
                visible: tooltipVisible || hasMovingClass,
                animation: this.state.tooltipAnimation
                    ? { in: 'expandInUp', out: 'expandOutDown' }
                    : false,
            }, trigger: sliderFrag(tslib_1.__assign(tslib_1.__assign({}, this.props), addedProps)), align: "t" }, tipRender("".concat(value[0], "-").concat(value[1])))) : (sliderFrag(tslib_1.__assign(tslib_1.__assign({}, this.props), addedProps)));
    };
    FixedSlider.displayName = 'FixedSlider';
    FixedSlider.propTypes = {
        hasTip: prop_types_1.default.bool,
        tooltipVisible: prop_types_1.default.bool,
        onTooltipVisibleChange: prop_types_1.default.func,
        tooltipAnimation: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.object]),
        value: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.arrayOf(prop_types_1.default.number)]),
        tipRender: prop_types_1.default.func,
        disabled: prop_types_1.default.bool,
        hasMovingClass: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
    };
    FixedSlider.defaultProps = {
        disabled: false,
        hasTip: true,
        onChange: noop,
        onProcess: noop,
        tipRender: function (value) { return value; },
        reverse: false,
        rtl: false,
    };
    return FixedSlider;
}(react_1.default.Component));
exports.default = FixedSlider;

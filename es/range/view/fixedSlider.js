import { __assign, __extends } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import { events, func } from '../../util';
import Balloon from '../../balloon';
import { getPercent } from '../utils';
var Tooltip = Balloon.Tooltip;
var noop = func.noop;
function _getStyle(min, max, value, rtl) {
    if (rtl) {
        return {
            left: "".concat(getPercent(min, max, max + min - value[1]), "%"),
            right: "".concat(getPercent(min, max, value[0]), "%"),
        };
    }
    return {
        left: "".concat(getPercent(min, max, value[0]), "%"),
        right: "".concat(100 - getPercent(min, max, value[1]), "%"),
    };
}
function sliderFrag(props) {
    var prefix = props.prefix, min = props.min, max = props.max, value = props.value, disabled = props.disabled, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onMouseDown = props.onMouseDown, rtl = props.rtl;
    var activeClass = !disabled && props.hasMovingClass ? "".concat(prefix, "range-active") : '';
    return (React.createElement("div", { className: "".concat(prefix, "range-frag ").concat(activeClass), style: _getStyle(min, max, value, rtl), onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onMouseDown: onMouseDown },
        React.createElement("div", { className: "".concat(prefix, "range-selected") }),
        React.createElement("div", { className: "".concat(prefix, "range-slider") },
            React.createElement("div", { className: "".concat(prefix, "range-slider-inner") })),
        React.createElement("div", { className: "".concat(prefix, "range-slider") },
            React.createElement("div", { className: "".concat(prefix, "range-slider-inner") }))));
}
sliderFrag.propTypes = {
    prefix: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    hasMovingClass: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseDown: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.number),
    disabled: PropTypes.bool,
    rtl: PropTypes.bool,
};
var FixedSlider = /** @class */ (function (_super) {
    __extends(FixedSlider, _super);
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
        this._onMouseUpListener = events.on(document, 'mouseup', this._onMouseUp.bind(this));
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
        return hasTip ? (React.createElement(Tooltip, { popupContainer: function (target) { return target.parentNode; }, popupProps: {
                visible: tooltipVisible || hasMovingClass,
                animation: this.state.tooltipAnimation
                    ? { in: 'expandInUp', out: 'expandOutDown' }
                    : false,
            }, trigger: sliderFrag(__assign(__assign({}, this.props), addedProps)), align: "t" }, tipRender("".concat(value[0], "-").concat(value[1])))) : (sliderFrag(__assign(__assign({}, this.props), addedProps)));
    };
    FixedSlider.displayName = 'FixedSlider';
    FixedSlider.propTypes = {
        hasTip: PropTypes.bool,
        tooltipVisible: PropTypes.bool,
        onTooltipVisibleChange: PropTypes.func,
        tooltipAnimation: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        tipRender: PropTypes.func,
        disabled: PropTypes.bool,
        hasMovingClass: PropTypes.bool,
        rtl: PropTypes.bool,
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
}(React.Component));
export default FixedSlider;

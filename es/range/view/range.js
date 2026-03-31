import { __assign, __extends } from "tslib";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import { events, func, KEYCODE, dom, obj } from '../../util';
import Balloon from '../../balloon';
import { getPercent, getPrecision, isEqual, getDragging } from '../utils';
import Scale from './scale';
import Track from './track';
import Selected from './selected';
import Mark from './mark';
import Slider from './slider';
import FixedSlider from './fixedSlider';
var Tooltip = Balloon.Tooltip;
var noop = func.noop, bindCtx = func.bindCtx;
var pickOthers = obj.pickOthers;
function _isMultiple(slider, isFixedWidth) {
    return isFixedWidth || slider === 'double';
}
function LowerSlider(props) {
    var hasTip = props.hasTip, value = props.value, tipRender = props.tipRender, slider = props.slider, tooltipVisible = props.tooltipVisible, onTooltipVisibleChange = props.onTooltipVisibleChange, tooltipAnimation = props.tooltipAnimation;
    if (_isMultiple(slider)) {
        // FIXME 对 value 增加类型守卫
        var arrayValue = value;
        return hasTip ? (React.createElement(Tooltip, { popupContainer: function (target) { return target.parentNode; }, popupProps: {
                visible: tooltipVisible,
                onVisibleChange: onTooltipVisibleChange,
                animation: tooltipAnimation,
                needAdjust: false,
            }, trigger: Slider(__assign(__assign({}, props), { value: arrayValue[0] })), align: "t" }, tipRender("".concat(arrayValue[0])))) : (Slider(__assign(__assign({}, props), { value: arrayValue[0] })));
    }
    return null;
}
LowerSlider.propTypes = {
    hasTip: PropTypes.bool,
    tooltipVisible: PropTypes.bool,
    onTooltipVisibleChange: PropTypes.func,
    tooltipAnimation: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    tipRender: PropTypes.func,
    slider: PropTypes.oneOf(['single', 'double']),
};
function UpperSlider(props) {
    var newprop = Object.assign({}, props);
    var hasTip = newprop.hasTip, value = newprop.value, tipRender = newprop.tipRender, slider = newprop.slider, tooltipVisible = newprop.tooltipVisible, onTooltipVisibleChange = newprop.onTooltipVisibleChange, tooltipAnimation = newprop.tooltipAnimation;
    if (_isMultiple(slider)) {
        // FIXME 对 value 增加类型守卫
        var arrayValue = value;
        delete newprop.onKeyDown;
        return hasTip ? (React.createElement(Tooltip, { popupContainer: function (target) { return target.parentNode; }, popupProps: {
                visible: tooltipVisible,
                onVisibleChange: onTooltipVisibleChange,
                animation: tooltipAnimation,
                needAdjust: false,
            }, trigger: Slider(__assign(__assign({}, newprop), { value: arrayValue[1] })), align: "t" }, tipRender(arrayValue[1]))) : (Slider(__assign(__assign({}, newprop), { value: arrayValue[1] })));
    }
    return hasTip ? (React.createElement(Tooltip, { popupContainer: function (target) { return target.parentNode; }, popupProps: {
            visible: tooltipVisible,
            onVisibleChange: onTooltipVisibleChange,
            animation: tooltipAnimation,
            needAdjust: false,
        }, 
        // @ts-expect-error Tooltip 组件不存在 animation 属性
        animation: {
            in: 'fadeInUp',
            out: 'fadeOutDown',
        }, trigger: Slider(newprop), align: "t" }, tipRender(value))) : (Slider(newprop));
}
UpperSlider.propTypes = {
    hasTip: PropTypes.bool,
    tooltipVisible: PropTypes.bool,
    onTooltipVisibleChange: PropTypes.func,
    tooltipAnimation: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    tipRender: PropTypes.func,
    slider: PropTypes.oneOf(['single', 'double']),
};
UpperSlider.displayName = 'UpperSlider';
function pauseEvent(e) {
    e.stopPropagation();
    e.preventDefault();
}
var Range = /** @class */ (function (_super) {
    __extends(Range, _super);
    function Range(props) {
        var _this = _super.call(this, props) || this;
        var min = props.min;
        var initialValue = _isMultiple(props.slider) ? [min, min] : min;
        var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
        var value = props.value !== undefined ? props.value : defaultValue;
        _this.state = {
            value: value,
            tempValue: value,
            hasMovingClass: false,
            lowerTooltipVisible: false,
            upperTooltipVisible: false,
            tooltipAnimation: true,
        };
        bindCtx(_this, [
            'handleLowerTooltipVisibleChange',
            'handleUpperTooltipVisibleChange',
            'onKeyDown',
        ]);
        return _this;
    }
    Range.getDerivedStateFromProps = function (props, state) {
        if ('value' in props) {
            var min = props.min, slider = props.slider, value = props.value;
            var hasMovingClass = state.hasMovingClass;
            var newState = {
                value: value,
            };
            if (value === undefined) {
                newState.value = _isMultiple(slider) ? [min, min] : min;
            }
            if (!hasMovingClass) {
                newState.tempValue = newState.value;
            }
            return newState;
        }
        return null;
    };
    Range.prototype._marksToScales = function (marks) {
        var result = [];
        if (Object.prototype.toString.call(marks) === '[object Object]') {
            for (var key in marks) {
                if (Object.hasOwnProperty.call(marks, key)) {
                    result.push(parseInt(key));
                }
            }
        }
        else {
            // @ts-expect-error 需要对 marks 增加类型守卫
            result = marks;
        }
        return result;
    };
    Range.prototype._calcScales = function () {
        var _a = this.props, min = _a.min, max = _a.max, marks = _a.marks;
        var scales = this._marksToScales(marks);
        if (scales !== false) {
            if (Array.isArray(scales)) {
                return scales;
            }
            else {
                var pace = (max - min) / scales;
                var result = [];
                result.push(min);
                for (var i = 1; i < scales; i++) {
                    result.push(min + i * pace);
                }
                result.push(max);
                return result;
            }
        }
        else {
            return [];
        }
    };
    Range.prototype._calcMarks = function () {
        var _a = this.props, min = _a.min, max = _a.max, marks = _a.marks;
        var result = {};
        if (Array.isArray(marks)) {
            marks.forEach(function (m) {
                result[m] = m.toString();
            });
        }
        else if (typeof marks === 'number') {
            var pace = (max - min) / marks;
            // @ts-expect-error result 对象的 value 为 string 类型
            result[min] = min;
            for (var i = 1; i < marks; i++) {
                var mark = min + i * pace;
                var precision = getPrecision(mark);
                if (precision > 2) {
                    precision = 2;
                }
                mark = mark.toFixed(precision);
                // @ts-expect-error result 对象的 key 为 number 类型
                result[mark] = mark;
            }
            // @ts-expect-error result 对象的 value 为 string 类型
            result[max] = max;
        }
        else {
            result = marks;
        }
        return result;
    };
    Range.prototype._onMouseDown = function (e) {
        if (e.button === 0) {
            this._start(e.pageX);
            this._addDocumentMouseEvents();
            pauseEvent(e);
        }
    };
    Range.prototype._onTouchStart = function (e) {
        this._start(e.targetTouches[0].pageX);
        this._addDocumentTouchEvents();
        e.stopPropagation(); // preventDefault() will be ignored: https://www.chromestatus.com/features/5093566007214080
    };
    Range.prototype.onKeyDown = function (e) {
        if (this.props.disabled)
            return;
        if (e.keyCode === KEYCODE.LEFT_ARROW || e.keyCode === KEYCODE.RIGHT_ARROW) {
            e.stopPropagation();
            e.preventDefault();
            var newValue = void 0;
            if (e.keyCode === KEYCODE.LEFT_ARROW) {
                newValue = this.state.value - this.props.step;
            }
            else {
                newValue = this.state.value + this.props.step;
            }
            if (newValue > this.props.max) {
                newValue = this.props.max;
            }
            if (newValue < this.props.min) {
                newValue = this.props.min;
            }
            if (newValue !== this.state.value) {
                this.setState({
                    value: newValue,
                });
                this.props.onChange(newValue);
            }
        }
    };
    Range.prototype._onContextMenu = function (e) {
        pauseEvent(e);
    };
    Range.prototype._start = function (position) {
        this.setState({
            hasMovingClass: true,
        });
        var tempValue = this.state.tempValue;
        var range = this.dom;
        var start = dom.getOffset(range).left;
        // used in unit test
        var width = range.clientWidth;
        if (!width) {
            if (range.style.width) {
                var index = range.style.width.indexOf('px');
                if (index !== -1) {
                    width = Number(range.style.width.slice(0, index));
                }
            }
        }
        this._moving = {
            start: start,
            end: start + width,
            startValue: tempValue,
        };
        // change on start
        this._onProcess(position, true);
    };
    Range.prototype._end = function () {
        var startValue = this._moving.startValue;
        var _a = this.state, tempValue = _a.tempValue, value = _a.value;
        this._moving = null;
        this._removeDocumentEvents();
        this.setState({
            hasMovingClass: false,
            lowerTooltipVisible: false,
            upperTooltipVisible: false,
            tooltipAnimation: true,
        });
        if (!isEqual(tempValue, startValue)) {
            // Not Controlled
            if (!('value' in this.props)) {
                this.setState({
                    value: tempValue,
                });
            }
            else {
                this.setState({
                    // tooltipVisible: false,
                    tempValue: value,
                    value: value,
                });
            }
            this.props.onChange(tempValue);
        }
    };
    Range.prototype._move = function (e) {
        var position = e.type === 'mousemove'
            ? e.pageX
            : e.targetTouches[0].pageX;
        this._onProcess(position);
    };
    Range.prototype._onProcess = function (position, start) {
        var tempValue = this.state.tempValue;
        var current = this._positionToCurrent(position); //current 为当前click的value
        if (this.isFixedWidth) {
            if (start) {
                this.lastPosition = current;
            }
        }
        else if (start) {
            this.lastPosition = current;
            if (_isMultiple(this.props.slider)) {
                this._moving.dragging = getDragging(current, tempValue);
            }
            else {
                this._moving.dragging = 'upper';
            }
            this.setState({
                lowerTooltipVisible: this._moving.dragging === 'lower',
                upperTooltipVisible: this._moving.dragging === 'upper',
                tooltipAnimation: false,
            });
        }
        else if (this.oldDragging === 'lower' && this._moving.dragging === 'upper') {
            this.setState({
                upperTooltipVisible: true,
                lowerTooltipVisible: false,
            });
        }
        else if (this.oldDragging === 'upper' && this._moving.dragging === 'lower') {
            this.setState({
                upperTooltipVisible: false,
                lowerTooltipVisible: true,
            });
        }
        this.oldDragging = this._moving.dragging;
        var nextValue = this._currentToValue(current, tempValue, this.lastPosition, this.isFixedWidth); //计算range的新value,可能是数组,可能是单个值
        this.lastPosition = current;
        if (!isEqual(nextValue, tempValue)) {
            this.setState({
                tempValue: nextValue,
            });
            this.props.onProcess(nextValue);
        }
    };
    Range.prototype._addDocumentMouseEvents = function () {
        this._onMouseMoveListener = events.on(document, 'mousemove', this._move.bind(this));
        this._onMouseUpListener = events.on(document, 'mouseup', this._end.bind(this));
        this._onContextMenuListener = events.on(document, 'contextmenu', this._onContextMenu.bind(this));
    };
    Range.prototype._addDocumentTouchEvents = function () {
        this._onTouchMoveListener = events.on(document, 'touchmove', this._move.bind(this));
        this._onTouchEndListener = events.on(document, 'touchend', this._end.bind(this));
    };
    Range.prototype._removeDocumentEvents = function () {
        if (this._onMouseMoveListener) {
            this._onMouseMoveListener.off();
            this._onMouseMoveListener = null;
        }
        if (this._onMouseUpListener) {
            this._onMouseUpListener.off();
            this._onMouseUpListener = null;
        }
        if (this._onTouchMoveListener) {
            this._onTouchMoveListener.off();
            this._onTouchMoveListener = null;
        }
        if (this._onTouchEndListener) {
            this._onTouchEndListener.off();
            this._onTouchEndListener = null;
        }
        if (this._onContextMenuListener) {
            this._onContextMenuListener.off();
            this._onContextMenuListener = null;
        }
    };
    // position => current (value type)
    Range.prototype._positionToCurrent = function (position) {
        var _a = this._moving, start = _a.start, end = _a.end;
        var _b = this.props, step = _b.step, min = _b.min, max = _b.max, rtl = _b.rtl;
        if (position < start) {
            position = start;
        }
        else if (position > end) {
            position = end;
        }
        var percent = getPercent(start, end, position);
        percent = rtl ? 100 - percent : percent;
        // reset by step
        var newValue = parseFloat((Math.round(((percent / 100) * (max - min)) / step) * step).toFixed(getPrecision(step)));
        var currentValue = (min + newValue).toFixed(getPrecision(step));
        return Number(currentValue);
    };
    Range.prototype._currentToValue = function (current, preValue, lastPosition, isFixedWidth) {
        var dragging = this._moving.dragging;
        var _a = this.props, min = _a.min, max = _a.max;
        if (!_isMultiple(this.props.slider, isFixedWidth)) {
            return current;
        }
        else {
            var result = void 0;
            // FIXME 对 preValue 增加类型守卫
            var arrayPreValue = preValue;
            var precision = getPrecision(this.props.step);
            var diff = current - lastPosition;
            var newLeft = +(+arrayPreValue[0] + diff).toFixed(precision);
            var newRight = +(+arrayPreValue[1] + diff).toFixed(precision);
            var newMaxLeft = +(max - arrayPreValue[1] + arrayPreValue[0]).toFixed(precision);
            var newMinRight = +(min + arrayPreValue[1] - arrayPreValue[0]).toFixed(precision);
            if (isFixedWidth) {
                if (newLeft < min) {
                    result = [min, newMinRight];
                }
                else if (newRight > max) {
                    result = [newMaxLeft, max];
                }
                else {
                    result = [newLeft, newRight];
                }
            }
            else if (dragging === 'lower') {
                if (current > arrayPreValue[1]) {
                    result = [arrayPreValue[1], current];
                    this._moving.dragging = 'upper';
                }
                else {
                    result = [current, arrayPreValue[1]];
                }
            }
            else if (dragging === 'upper') {
                if (current < arrayPreValue[0]) {
                    result = [current, arrayPreValue[0]];
                    this._moving.dragging = 'lower';
                }
                else {
                    result = [arrayPreValue[0], current];
                }
            }
            return result;
        }
    };
    Range.prototype.handleLowerTooltipVisibleChange = function (visible) {
        if (this.state.hasMovingClass) {
            return;
        }
        this.setState({
            lowerTooltipVisible: visible,
        });
    };
    Range.prototype.handleUpperTooltipVisibleChange = function (visible) {
        if (this.state.hasMovingClass) {
            return;
        }
        this.setState({
            upperTooltipVisible: visible,
        });
    };
    Range.prototype.render = function () {
        var _a;
        var _this = this;
        var value = this._moving ? this.state.tempValue : this.state.value;
        var _b = this.props, prefix = _b.prefix, min = _b.min, max = _b.max, disabled = _b.disabled, style = _b.style, id = _b.id, slider = _b.slider, reverse = _b.reverse, className = _b.className, marks = _b.marks, marksPosition = _b.marksPosition, hasTip = _b.hasTip, tipRender = _b.tipRender, fixedWidth = _b.fixedWidth, defaultValue = _b.defaultValue, tooltipVisible = _b.tooltipVisible, rtl = _b.rtl, isPreview = _b.isPreview, renderPreview = _b.renderPreview;
        var others = pickOthers(Object.keys(Range.propTypes), this.props);
        var classes = classNames((_a = {},
            _a["".concat(prefix, "range")] = true,
            _a.disabled = disabled,
            _a[className] = className,
            _a));
        if (Array.isArray(value)) {
            value.forEach(function (item, index) {
                if (item > max) {
                    value[index] = max;
                }
            });
            // @ts-expect-error value 存在 undefined 情况
        }
        else if (value > max) {
            value = max;
        }
        var commonProps = {
            prefix: prefix,
            min: min,
            max: max,
            value: value,
            reverse: reverse,
            slider: slider,
            hasTip: hasTip,
            tipRender: tipRender,
            marksPosition: marksPosition,
            tooltipVisible: tooltipVisible,
            hasMovingClass: this.state.hasMovingClass,
            disabled: disabled,
            rtl: rtl,
        };
        this.isFixedWidth =
            fixedWidth &&
                (value ? Array.isArray(value) : defaultValue ? Array.isArray(defaultValue) : false);
        if (isPreview) {
            var previewCls = classNames(className, "".concat(prefix, "form-preview"));
            if ('renderPreview' in this.props) {
                return (React.createElement("div", __assign({ id: id, dir: rtl ? 'rtl' : 'ltr' }, others, { className: previewCls }), renderPreview(value, this.props)));
            }
            return (React.createElement("p", __assign({ id: id, dir: rtl ? 'rtl' : 'ltr' }, others, { className: previewCls }), Array.isArray(value) ? value.join('~') : value));
        }
        return (React.createElement("div", __assign({ ref: function (dom) {
                _this.dom = dom;
            } }, others, { style: style, className: classes, id: id, dir: rtl ? 'rtl' : 'ltr', onMouseDown: disabled ? noop : this._onMouseDown.bind(this), onTouchStart: disabled ? noop : this._onTouchStart.bind(this) }),
            marks !== false && marksPosition === 'above' ? (React.createElement(Mark, __assign({}, commonProps, { marks: this._calcMarks() }))) : null,
            React.createElement("div", { className: "".concat(prefix, "range-inner") },
                React.createElement(Scale, __assign({}, commonProps, { scales: this._calcScales() })),
                React.createElement(Track, __assign({}, commonProps)),
                this.isFixedWidth ? (
                // @ts-expect-error value 存在 undefined 情况
                React.createElement(FixedSlider, __assign({}, commonProps))) : (React.createElement("div", null,
                    React.createElement(Selected, __assign({}, commonProps)),
                    React.createElement(LowerSlider, __assign({}, commonProps, { hasMovingClass: this.state.hasMovingClass &&
                            this._moving &&
                            this._moving.dragging === 'lower', tooltipVisible: tooltipVisible || this.state.lowerTooltipVisible, onTooltipVisibleChange: this.handleLowerTooltipVisibleChange, tooltipAnimation: this.state.tooltipAnimation
                            ? {
                                in: 'expandInUp',
                                out: 'expandOutDown',
                            }
                            : false })),
                    React.createElement(UpperSlider, __assign({}, commonProps, { onKeyDown: this.onKeyDown, hasMovingClass: this.state.hasMovingClass &&
                            this._moving &&
                            this._moving.dragging === 'upper', tooltipVisible: tooltipVisible || this.state.upperTooltipVisible, onTooltipVisibleChange: this.handleUpperTooltipVisibleChange, tooltipAnimation: this.state.tooltipAnimation
                            ? {
                                in: 'expandInUp',
                                out: 'expandOutDown',
                            }
                            : false }))))),
            marks !== false && marksPosition === 'below' ? (React.createElement(Mark, __assign({}, commonProps, { marks: this._calcMarks() }))) : null));
    };
    Range.displayName = 'Range';
    Range.contextTypes = {
        prefix: PropTypes.string,
    };
    Range.propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        slider: PropTypes.oneOf(['single', 'double']),
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        tempValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
        marks: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number,
            PropTypes.arrayOf(PropTypes.number),
            PropTypes.object,
        ]),
        marksPosition: PropTypes.oneOf(['above', 'below']),
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        onProcess: PropTypes.func,
        hasTip: PropTypes.bool,
        tipRender: PropTypes.func,
        id: PropTypes.string,
        reverse: PropTypes.bool,
        pure: PropTypes.bool,
        fixedWidth: PropTypes.bool,
        tooltipVisible: PropTypes.bool,
        rtl: PropTypes.bool,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
    };
    Range.defaultProps = {
        prefix: 'next-',
        slider: 'single',
        min: 0,
        max: 100,
        step: 1,
        marks: false,
        disabled: false,
        fixedWidth: false,
        tooltipVisible: false,
        hasTip: true,
        onChange: noop,
        onProcess: noop,
        tipRender: function (value) { return value; },
        reverse: false,
        pure: false,
        marksPosition: 'above',
        rtl: false,
        isPreview: false,
    };
    return Range;
}(React.Component));
export default polyfill(Range);

import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';
import SharedPT from '../prop-types';
import { func, datejs, obj } from '../../util';
import { setTime, switchInputType, mode2unit } from '../util';
import { DATE_INPUT_TYPE } from '../constant';
import { DATE_PANEL_MODE, CALENDAR_CELL_STATE } from '../../calendar2/constant';
import Calendar from '../../calendar2';
import TimePanel from './time-panel';
var DATE = DATE_PANEL_MODE.DATE, WEEK = DATE_PANEL_MODE.WEEK, MONTH = DATE_PANEL_MODE.MONTH, QUARTER = DATE_PANEL_MODE.QUARTER, YEAR = DATE_PANEL_MODE.YEAR;
var UN_SELECTED = CALENDAR_CELL_STATE.UN_SELECTED, SELECTED = CALENDAR_CELL_STATE.SELECTED, SELECTED_BEGIN = CALENDAR_CELL_STATE.SELECTED_BEGIN, SELECTED_END = CALENDAR_CELL_STATE.SELECTED_END;
var BEGIN = DATE_INPUT_TYPE.BEGIN, END = DATE_INPUT_TYPE.END;
var operate = function (mode, value, operator) {
    var newVal = value.clone();
    switch (mode) {
        case DATE:
        case WEEK:
            return newVal[operator](1, 'month');
        case QUARTER:
        case MONTH:
            return newVal[operator](1, 'year');
        case YEAR:
            return newVal[operator](10, 'year');
    }
};
var isSamePanel = function (a, b, mode) {
    switch (mode) {
        case DATE:
        case WEEK:
            return a.isSame(b, 'month');
        case QUARTER:
        case MONTH:
            return a.isSame(b, 'year');
        case YEAR: {
            var begin = a.year() - (a.year() % 20);
            var byear = b.year();
            return byear >= begin && byear < begin + 20;
        }
    }
};
// 计算 面板日期
var getPanelValue = function (_a, defaultValue) {
    var mode = _a.mode, value = _a.value, inputType = _a.inputType, showTime = _a.showTime;
    var _b = __read(value, 2), begin = _b[0], end = _b[1];
    var otherType = inputType === BEGIN ? END : BEGIN;
    var _inputType = inputType;
    if (!value[inputType] && value[otherType]) {
        _inputType = otherType;
    }
    var panelValue = value[_inputType] || datejs(defaultValue);
    // https://github.com/alibaba-fusion/next/issues/3186
    if (!showTime && _inputType === END && end && ((begin && !isSamePanel(begin, end, mode)) || !begin)) {
        panelValue = operate(mode, panelValue, 'subtract');
    }
    return panelValue && panelValue.isValid() ? panelValue : datejs();
};
var RangePanel = /** @class */ (function (_super) {
    __extends(RangePanel, _super);
    function RangePanel(props) {
        var _this = _super.call(this, props) || this;
        _this.disabledDate = function (v) {
            var _a = _this.props, mode = _a.mode, inputType = _a.inputType, disabledDate = _a.disabledDate, _b = __read(_a.value, 2), begin = _b[0], end = _b[1];
            var unit = mode2unit(mode);
            return (disabledDate(v, mode) ||
                (inputType === END && begin && begin.isAfter(v, unit)) ||
                (inputType === BEGIN && end && end.isBefore(v, unit)));
        };
        _this.onTimeSelect = function (v) {
            var _a = _this.props, value = _a.value, inputType = _a.inputType;
            var _b = __read(value, 2), begin = _b[0], end = _b[1];
            var curDateVal = value[inputType];
            if (!curDateVal) {
                curDateVal =
                    inputType === BEGIN && end
                        ? end.subtract(1, 'day')
                        : inputType === END && begin
                            ? begin.add(1, 'day')
                            : datejs();
            }
            curDateVal = setTime(curDateVal, v);
            _this.handleSelect(curDateVal, true);
        };
        _this.handleSelect = function (v, fromTimeChange) {
            var _a = _this.props, value = _a.value, inputType = _a.inputType, resetTime = _a.resetTime, onCalendarChange = _a.onCalendarChange;
            var otherType = switchInputType(inputType);
            var newValue = __spreadArray([], __read(value), false);
            var defaultTime = _this.state.defaultTime[inputType];
            var timeVal = null;
            // 如果不是选择时间面板触发的时间改变或不需要重置时间
            // 则需要设置时间值，优先级如下：
            // - 目前这个日期时间
            // - 默认时间
            // - 另一日期时间
            // - 当前时间
            if (!fromTimeChange && !resetTime) {
                timeVal = value[inputType] || defaultTime || value[otherType] || datejs();
            }
            newValue[inputType === BEGIN ? 0 : 1] = setTime(v, timeVal);
            onCalendarChange(newValue);
            func.invoke(_this.props, 'onSelect', [newValue]);
        };
        _this.handlePanelChange = function (v, mode, idx) {
            _this.setState({
                mode: mode,
                panelValue: v,
                calendarIdx: idx,
            });
            func.invoke(_this.props, 'onPanelChange', [v, mode]);
        };
        _this.handleMouseEnter = function (value) {
            _this.currentRaf && window.cancelAnimationFrame(_this.currentRaf);
            _this.currentRaf = window.requestAnimationFrame(function () {
                _this.setState({
                    curHoverValue: value,
                });
            });
        };
        _this.handleMouseLeave = function () {
            _this.currentRaf && window.cancelAnimationFrame(_this.currentRaf);
            _this.setState({
                curHoverValue: null,
            });
        };
        _this.handleEdgeState = function (value, mode) {
            var unit = _this.getUnitByMode(mode);
            switch (mode) {
                case DATE: {
                    var endDate = value.endOf('month');
                    var beginDate = value.startOf('month');
                    return beginDate.isSame(value, unit) ? 1 : endDate.isSame(value, unit) ? 2 : 0;
                }
                case YEAR: {
                    var year = value.year();
                    var beginYear = value.year() - (value.year() % 10);
                    var endYear = beginYear + 9;
                    return year === beginYear ? 1 : year === endYear ? 2 : 0;
                }
                default:
                    return 0;
            }
        };
        _this.getCellClassName = function (value) {
            var _a, _b, _c, _d;
            var _e = _this.props, prefix = _e.prefix, inputType = _e.inputType, mode = _e.mode;
            var curHoverValue = _this.state.curHoverValue;
            var _f = __read(_this.props.value, 2), begin = _f[0], end = _f[1];
            var unit = _this.getUnitByMode(mode);
            var state = _this.handleCellState(value, _this.props.value);
            var prefixCls = "".concat(prefix, "calendar2-cell");
            var hoverClassName;
            if (curHoverValue) {
                var hoverValue = __spreadArray([], __read(_this.props.value), false);
                hoverValue[inputType] = curHoverValue;
                var _g = __read(hoverValue, 2), hoverBegin = _g[0], hoverEnd = _g[1];
                if (hoverBegin && hoverEnd && hoverBegin.isBefore(hoverEnd, unit)) {
                    var hoverState = _this.handleCellState(value, hoverValue);
                    hoverClassName = (_a = {},
                        _a["".concat(prefixCls, "-hover")] = hoverState >= SELECTED,
                        _a["".concat(prefixCls, "-hover-begin")] = hoverState === SELECTED_BEGIN,
                        _a["".concat(prefixCls, "-hover-end")] = hoverState === SELECTED_END,
                        _a["".concat(prefixCls, "-hover-end")] = hoverState === SELECTED_END,
                        _a);
                }
            }
            var rangeClassName;
            if (!_this.hasModeChanged) {
                var edgeState = _this.handleEdgeState(value, mode);
                var isIllegal = end && begin && begin.isAfter(end);
                rangeClassName =
                    mode === WEEK
                        ? (_b = {},
                            _b["".concat(prefixCls, "-week-range-begin")] = state === SELECTED_BEGIN,
                            _b["".concat(prefixCls, "-week-range-end")] = state === SELECTED_END,
                            _b) : (_c = {},
                        _c["".concat(prefixCls, "-range-begin")] = state === SELECTED_BEGIN,
                        _c["".concat(prefixCls, "-range-end")] = state === SELECTED_END,
                        _c["".concat(prefixCls, "-range-begin-single")] = state >= SELECTED && (!end || end.isSame(begin, unit) || isIllegal),
                        _c["".concat(prefixCls, "-range-end-single")] = state >= SELECTED && (!begin || begin.isSame(end, unit) || isIllegal),
                        _c["".concat(prefixCls, "-edge-begin")] = edgeState === 1,
                        _c["".concat(prefixCls, "-edge-end")] = edgeState === 2,
                        _c);
            }
            return __assign(__assign((_d = {}, _d["".concat(prefixCls, "-selected")] = state >= SELECTED, _d), rangeClassName), hoverClassName);
        };
        // 头部面板日期切换点击事件
        _this.handleCanlendarClick = function (_, _a) {
            var unit = _a.unit, num = _a.num;
            _this.setState({
                panelValue: _this.state.panelValue.clone().add(num, unit),
            });
        };
        _this.renderRangeTime = function (sharedProps) {
            var _a;
            var _b = _this.props, value = _b.value, prefix = _b.prefix, showTime = _b.showTime, inputType = _b.inputType, _c = _b.timePanelProps, timePanelProps = _c === void 0 ? {} : _c, disabledTime = _b.disabledTime;
            var className = classnames("".concat(prefix, "range-picker2-panel"), (_a = {},
                _a["".concat(prefix, "range-picker2-panel-single")] = _this.hasModeChanged,
                _a));
            // 禁用时间
            var _disabledTime;
            if (showTime && !_this.hasModeChanged && disabledTime) {
                _disabledTime = typeof disabledTime === 'function' ? disabledTime(value, inputType) : disabledTime;
            }
            return (React.createElement("div", { key: "range-time-panel", className: className },
                React.createElement(Calendar, __assign({ panelValue: _this.state.panelValue }, sharedProps, { value: value[inputType], onPanelChange: _this.handlePanelChange })),
                showTime && !_this.hasModeChanged ? (React.createElement(TimePanel, { prefix: prefix, inputType: inputType, value: value[inputType] || _this.state.defaultTime[inputType], onSelect: _this.onTimeSelect, disabledTime: disabledTime, timePanelProps: __assign(__assign({}, _disabledTime), timePanelProps) })) : null));
        };
        var mode = props.mode, defaultPanelValue = props.defaultPanelValue, _a = props.timePanelProps, timePanelProps = _a === void 0 ? {} : _a;
        // 默认时间
        var defaultTime = timePanelProps.defaultValue || [];
        if (!Array.isArray(defaultTime)) {
            defaultTime = [defaultTime, defaultTime];
        }
        defaultTime = defaultTime.map(function (t) { return datejs(t, timePanelProps.format || 'HH:mm:ss'); });
        _this.state = {
            mode: mode,
            panelValue: getPanelValue(props, defaultPanelValue),
            inputType: props.inputType,
            curHoverValue: null,
            defaultTime: defaultTime,
        };
        return _this;
    }
    RangePanel.getDerivedStateFromProps = function (props, state) {
        if (props.inputType !== state.inputType) {
            return {
                inputType: props.inputType,
                panelValue: getPanelValue(props, state.panelValue),
            };
        }
        return null;
    };
    RangePanel.prototype.componentWillUnmount = function () {
        this.currentRaf && window.cancelAnimationFrame(this.currentRaf);
    };
    // 日期面板显示的日期区间
    RangePanel.prototype.getRanges = function () {
        var mode = this.props.mode;
        var v = this.state.panelValue;
        var begin = v.clone();
        var end = operate(mode, v, 'add');
        return [begin, end];
    };
    // 日期cell状态
    RangePanel.prototype.handleCellState = function (v, value) {
        var mode = this.props.mode;
        var _a = __read(value, 2), begin = _a[0], end = _a[1];
        var unit = this.getUnitByMode(mode);
        return begin && begin.isSame(v, unit)
            ? SELECTED_BEGIN
            : end && end.isSame(v, unit)
                ? SELECTED_END
                : begin && end && v.isAfter(begin, unit) && v.isBefore(end, unit)
                    ? SELECTED
                    : UN_SELECTED;
    };
    RangePanel.prototype.getUnitByMode = function (mode) {
        return mode === DATE ? 'day' : mode;
    };
    RangePanel.prototype.renderRange = function (sharedProps) {
        var _a;
        var _b = this, handlePanelChange = _b.handlePanelChange, handleCanlendarClick = _b.handleCanlendarClick, hasModeChanged = _b.hasModeChanged;
        var _c = this.props, value = _c.value, prefix = _c.prefix;
        var ranges = this.getRanges();
        var calendarProps = function (idx) {
            return __assign(__assign({}, sharedProps), { value: value[idx], panelValue: ranges[idx], onPanelChange: function (v, m) { return handlePanelChange(v, m, idx); } });
        };
        var calendarNodes = [
            React.createElement(Calendar, __assign({}, calendarProps(0), { className: "".concat(prefix, "range-picker-left"), key: "range-panel-calendar-left" })),
            React.createElement(Calendar, __assign({}, calendarProps(1), { className: "".concat(prefix, "range-picker-right"), key: "range-panel-calendar-right", onNext: handleCanlendarClick, onSuperNext: handleCanlendarClick })),
        ];
        var className = classnames("".concat(prefix, "range-picker2-panel"), (_a = {},
            _a["".concat(prefix, "range-picker2-panel-single")] = hasModeChanged,
            _a));
        return (React.createElement("div", { key: "range-panel", className: className }, !this.hasModeChanged ? calendarNodes : calendarNodes[this.state.calendarIdx]));
    };
    RangePanel.prototype.render = function () {
        var _a = this, handleSelect = _a.handleSelect, getCellClassName = _a.getCellClassName, handleMouseEnter = _a.handleMouseEnter, handleMouseLeave = _a.handleMouseLeave;
        var _b = this.props, mode = _b.mode, justBeginInput = _b.justBeginInput, dateCellRender = _b.dateCellRender, restProps = __rest(_b, ["mode", "justBeginInput", "dateCellRender"]);
        // 切换面板mode
        this.hasModeChanged = this.state.mode !== this.props.mode;
        var sharedProps = __assign(__assign({}, obj.pickProps(Calendar.propTypes, restProps)), { shape: 'panel', panelMode: mode, dateCellRender: dateCellRender });
        sharedProps.disabledDate = justBeginInput ? this.props.disabledDate : this.disabledDate;
        // 日期面板固定列数 保证对齐
        if ([DATE, WEEK].includes(mode)) {
            sharedProps.colNum = 6;
        }
        if (!this.hasModeChanged) {
            sharedProps = __assign(__assign({}, sharedProps), { onSelect: handleSelect, cellClassName: getCellClassName, cellProps: {
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                } });
        }
        return this.props.showTime ? this.renderRangeTime(sharedProps) : this.renderRange(sharedProps);
    };
    RangePanel.propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: SharedPT.mode,
        value: PT.arrayOf(SharedPT.date),
        inputType: SharedPT.inputType,
        handleCellState: PT.func,
        disabledDate: PT.func,
        justBeginInput: PT.bool,
        resetTime: PT.bool,
        showTime: PT.bool,
        timePanelProps: PT.object,
        disabledTime: PT.object,
        dateCellRender: PT.func,
        onCalendarChange: PT.func,
    };
    RangePanel.defaultProps = {
        disabledDate: function () { return false; },
        justBeginInput: true,
    };
    return RangePanel;
}(React.Component));
export default polyfill(RangePanel);

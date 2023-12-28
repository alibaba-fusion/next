import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import moment from 'moment';
import ConfigProvider from '../config-provider';
import Overlay from '../overlay';
import Input from '../input';
import Icon from '../icon';
import Calendar from '../calendar';
import RangeCalendar from '../calendar/range-calendar';
import TimePickerPanel from '../time-picker/panel';
import nextLocale from '../locale/zh-cn';
import { func, obj } from '../util';
import { PANEL, resetValueTime, formatDateValue, getDateTimeFormat, isFunction, onDateKeydown, onTimeKeydown, } from './util';
import PanelFooter from './module/panel-footer';
var Popup = Overlay.Popup;
function mapInputStateName(name) {
    return {
        startValue: 'startDateInputStr',
        endValue: 'endDateInputStr',
        startTime: 'startTimeInputStr',
        endTime: 'endTimeInputStr',
    }[name];
}
function mapTimeToValue(name) {
    return {
        startTime: 'startValue',
        endTime: 'endValue',
    }[name];
}
function getFormatValues(values, format) {
    if (!Array.isArray(values)) {
        return [null, null];
    }
    return [formatDateValue(values[0], format), formatDateValue(values[1], format)];
}
/**
 * DatePicker.RangePicker
 */
var RangePicker = /** @class */ (function (_super) {
    __extends(RangePicker, _super);
    function RangePicker(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.onValueChange = function (values, handler) {
            if (handler === void 0) { handler = 'onChange'; }
            var ret;
            if (!values.length || !_this.state.inputAsString) {
                ret = values;
            }
            else {
                ret = [
                    values[0] ? values[0].format(_this.state.dateTimeFormat) : null,
                    values[1] ? values[1].format(_this.state.dateTimeFormat) : null,
                ];
            }
            _this.props[handler](ret);
        };
        _this.onSelectCalendarPanel = function (value, active) {
            var _a = _this.props, showTime = _a.showTime, resetTime = _a.resetTime;
            var _b = _this.state, prevActiveDateInput = _b.activeDateInput, prevStartValue = _b.startValue, prevEndValue = _b.endValue, timeFormat = _b.timeFormat;
            var newState = {
                activeDateInput: active || prevActiveDateInput,
                inputing: false,
            };
            var newValue = value;
            switch (active || prevActiveDateInput) {
                case 'startValue': {
                    if (!prevEndValue || value.valueOf() <= prevEndValue.valueOf()) {
                        newState.activeDateInput = 'endValue';
                    }
                    if (showTime) {
                        if (!prevStartValue) {
                            // 第一次选择，如果设置了时间默认值，则使用该默认时间
                            if (showTime.defaultValue) {
                                var defaultTimeValue = formatDateValue(Array.isArray(showTime.defaultValue) ? showTime.defaultValue[0] : showTime.defaultValue, timeFormat);
                                newValue = resetValueTime(value, defaultTimeValue);
                            }
                        }
                        else if (!resetTime) {
                            // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                            newValue = resetValueTime(value, prevStartValue);
                        }
                    }
                    newState.startValue = newValue;
                    // 如果起始日期大于结束日期
                    if (prevEndValue && newValue.valueOf() > prevEndValue.valueOf()) {
                        // 将结束日期设置为起始日期 如果需要的话保留时间
                        newState.endValue = resetTime ? newValue : resetValueTime(value, prevEndValue);
                        // 如果结束日期不大于起始日期则将结束日期设置为等于开始日期
                        if (newState.endValue.valueOf() < newState.startValue.valueOf()) {
                            newState.endValue = moment(newState.startValue);
                        }
                        newState.activeDateInput = 'endValue';
                    }
                    break;
                }
                case 'endValue':
                    if (!prevStartValue) {
                        newState.activeDateInput = 'startValue';
                    }
                    if (showTime) {
                        if (!prevEndValue) {
                            // 第一次选择，如果设置了时间默认值，则使用该默认时间
                            if (showTime.defaultValue) {
                                var defaultTimeValue = formatDateValue(Array.isArray(showTime.defaultValue)
                                    ? showTime.defaultValue[1] || showTime.defaultValue[0]
                                    : showTime.defaultValue, timeFormat);
                                newValue = resetValueTime(value, defaultTimeValue);
                            }
                        }
                        else if (!resetTime) {
                            // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                            newValue = resetValueTime(value, prevEndValue);
                        }
                    }
                    newState.endValue = newValue;
                    // 选择了一个比开始日期更小的结束日期，此时表示用户重新选择了
                    if (prevStartValue && newValue.valueOf() <= prevStartValue.valueOf()) {
                        newState.startValue = resetTime ? value : resetValueTime(value, prevStartValue);
                        newState.endValue = resetTime ? value : resetValueTime(value, prevEndValue);
                        // 如果结束日期不大于起始日期则将结束日期设置为等于开始日期
                        if (newState.endValue.valueOf() < newState.startValue.valueOf()) {
                            newState.endValue = moment(newState.startValue);
                        }
                    }
                    break;
            }
            var newStartValue = 'startValue' in newState ? newState.startValue : prevStartValue;
            var newEndValue = 'endValue' in newState ? newState.endValue : prevEndValue;
            // 受控状态选择不更新值
            if ('value' in _this.props) {
                delete newState.startValue;
                delete newState.endValue;
            }
            _this.setState(newState);
            _this.onValueChange([newStartValue, newEndValue]);
        };
        _this.clearRange = function () {
            _this.setState({
                startDateInputStr: '',
                endDateInputStr: '',
                startTimeInputStr: '',
                endTimeInputStr: '',
            });
            if (!('value' in _this.props)) {
                _this.setState({
                    startValue: null,
                    endValue: null,
                });
            }
            _this.onValueChange([]);
        };
        _this.onDateInputChange = function (inputStr, e, eventType) {
            var _a;
            if (eventType === 'clear' || !inputStr) {
                e.stopPropagation();
                _this.clearRange();
            }
            else {
                var stateName = mapInputStateName(_this.state.activeDateInput);
                _this.setState((_a = {},
                    _a[stateName] = inputStr,
                    _a.inputing = _this.state.activeDateInput,
                    _a));
            }
        };
        _this.onDateInputBlur = function () {
            var _a;
            var resetTime = _this.props.resetTime;
            var activeDateInput = _this.state.activeDateInput;
            var stateName = mapInputStateName(activeDateInput);
            var dateInputStr = _this.state[stateName];
            if (dateInputStr) {
                var _b = _this.props, format = _b.format, disabledDate = _b.disabledDate;
                var parsed = moment(dateInputStr, format, true);
                _this.setState((_a = {},
                    _a[stateName] = '',
                    _a.inputing = false,
                    _a));
                if (parsed.isValid() && !disabledDate(parsed, 'date')) {
                    var valueName = activeDateInput;
                    var newValue = resetTime ? parsed : resetValueTime(parsed, _this.state[activeDateInput]);
                    _this.handleChange(valueName, newValue);
                }
            }
        };
        _this.onDateInputKeyDown = function (e) {
            var type = _this.props.type;
            var _a = _this.state, activeDateInput = _a.activeDateInput, format = _a.format;
            var stateName = mapInputStateName(activeDateInput);
            var dateInputStr = _this.state[stateName];
            var dateStr = onDateKeydown(e, {
                format: format,
                value: _this.state[activeDateInput],
                dateInputStr: dateInputStr,
            }, type === 'date' ? 'day' : type);
            if (!dateStr)
                return;
            return _this.onDateInputChange(dateStr);
        };
        _this.onFocusDateInput = function (type) {
            if (type !== _this.state.activeDateInput) {
                _this.setState({
                    activeDateInput: type,
                });
            }
            if (_this.state.panel !== PANEL.DATE) {
                _this.setState({
                    panel: PANEL.DATE,
                });
            }
        };
        _this.onFocusTimeInput = function (type) {
            if (type !== _this.state.activeDateInput) {
                _this.setState({
                    activeDateInput: type,
                });
            }
            if (_this.state.panel !== PANEL.TIME) {
                _this.setState({
                    panel: PANEL.TIME,
                });
            }
        };
        _this.onSelectStartTime = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({
                    startValue: value,
                    inputing: false,
                    activeDateInput: 'startTime',
                });
            }
            if (value.valueOf() !== _this.state.startValue.valueOf()) {
                _this.onValueChange([value, _this.state.endValue]);
            }
        };
        _this.onSelectEndTime = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({
                    endValue: value,
                    inputing: false,
                    activeDateInput: 'endTime',
                });
            }
            if (value.valueOf() !== _this.state.endValue.valueOf()) {
                _this.onValueChange([_this.state.startValue, value]);
            }
        };
        _this.onTimeInputChange = function (inputStr) {
            var _a;
            var stateName = mapInputStateName(_this.state.activeDateInput);
            _this.setState((_a = {},
                _a[stateName] = inputStr,
                _a.inputing = _this.state.activeDateInput,
                _a));
        };
        _this.onTimeInputBlur = function () {
            var _a;
            var stateName = mapInputStateName(_this.state.activeDateInput);
            var timeInputStr = _this.state[stateName];
            var parsed = moment(timeInputStr, _this.state.timeFormat, true);
            _this.setState((_a = {},
                _a[stateName] = '',
                _a.inputing = false,
                _a));
            if (parsed.isValid()) {
                var hour = parsed.hour();
                var minute = parsed.minute();
                var second = parsed.second();
                var valueName = mapTimeToValue(_this.state.activeDateInput);
                var newValue = _this.state[valueName]
                    .clone()
                    .hour(hour)
                    .minute(minute)
                    .second(second);
                _this.handleChange(valueName, newValue);
            }
        };
        _this.onTimeInputKeyDown = function (e) {
            var showTime = _this.props.showTime;
            var _a = _this.state, activeDateInput = _a.activeDateInput, timeFormat = _a.timeFormat;
            var stateName = mapInputStateName(activeDateInput);
            var timeInputStr = _this.state[stateName];
            var _b = typeof showTime === 'object' ? showTime : {}, disabledMinutes = _b.disabledMinutes, disabledSeconds = _b.disabledSeconds, _c = _b.hourStep, hourStep = _c === void 0 ? 1 : _c, _d = _b.minuteStep, minuteStep = _d === void 0 ? 1 : _d, _e = _b.secondStep, secondStep = _e === void 0 ? 1 : _e;
            var unit = 'second';
            if (disabledSeconds) {
                unit = disabledMinutes ? 'hour' : 'minute';
            }
            var timeStr = onTimeKeydown(e, {
                format: timeFormat,
                timeInputStr: timeInputStr,
                value: _this.state[activeDateInput.indexOf('start') ? 'startValue' : 'endValue'],
                steps: {
                    hour: hourStep,
                    minute: minuteStep,
                    second: secondStep,
                },
            }, unit);
            if (!timeStr)
                return;
            _this.onTimeInputChange(timeStr);
        };
        _this.handleChange = function (valueName, newValue) {
            var _a;
            var values = ['startValue', 'endValue'].map(function (name) { return (valueName === name ? newValue : _this.state[name]); });
            // 判断起始时间是否大于结束时间
            if (values[0] && values[1] && values[0].valueOf() > values[1].valueOf()) {
                return;
            }
            if (!('value' in _this.props)) {
                _this.setState((_a = {},
                    _a[valueName] = newValue,
                    _a));
            }
            _this.onValueChange(values);
        };
        _this.onVisibleChange = function (visible, type) {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: visible,
                });
            }
            _this.props.onVisibleChange(visible, type);
        };
        _this.changePanel = function (panel) {
            var _a = _this.state, startValue = _a.startValue, endValue = _a.endValue;
            _this.setState({
                panel: panel,
                activeDateInput: panel === PANEL.DATE ? (!!startValue && !endValue ? 'endValue' : 'startValue') : 'startTime',
            });
        };
        _this.onOk = function (value) {
            _this.onVisibleChange(false, 'okBtnClick');
            _this.onValueChange(value || [_this.state.startValue, _this.state.endValue], 'onOk');
        };
        // 如果用户没有给定时间禁用逻辑，则给默认到禁用逻辑
        _this.getDisabledTime = function (_a) {
            var startValue = _a.startValue, endValue = _a.endValue;
            var _b = _this.props.showTime || {}, disabledHours = _b.disabledHours, disabledMinutes = _b.disabledMinutes, disabledSeconds = _b.disabledSeconds;
            var disabledTime = {};
            if (startValue && endValue) {
                var isSameDay_1 = startValue.format('L') === endValue.format('L');
                var newDisabledHours = isFunction(disabledHours)
                    ? disabledHours
                    : function (index) {
                        if (isSameDay_1 && index < startValue.hour()) {
                            return true;
                        }
                    };
                var newDisabledMinutes = isFunction(disabledMinutes)
                    ? disabledMinutes
                    : function (index) {
                        if (isSameDay_1 && startValue.hour() === endValue.hour() && index < startValue.minute()) {
                            return true;
                        }
                    };
                var newDisabledSeconds = isFunction(disabledSeconds)
                    ? disabledSeconds
                    : function (index) {
                        if (isSameDay_1 &&
                            startValue.hour() === endValue.hour() &&
                            startValue.minute() === endValue.minute() &&
                            index < startValue.second()) {
                            return true;
                        }
                    };
                disabledTime = {
                    disabledHours: newDisabledHours,
                    disabledMinutes: newDisabledMinutes,
                    disabledSeconds: newDisabledSeconds,
                };
            }
            return disabledTime;
        };
        var _a = getDateTimeFormat(props.format, props.showTime, props.type), format = _a.format, timeFormat = _a.timeFormat, dateTimeFormat = _a.dateTimeFormat;
        var val = props.value || props.defaultValue;
        var values = getFormatValues(val, dateTimeFormat);
        _this.state = {
            visible: props.visible || props.defaultVisible,
            startValue: values[0],
            endValue: values[1],
            startDateInputStr: '',
            endDateInputStr: '',
            activeDateInput: 'startValue',
            startTimeInputStr: '',
            endTimeInputStr: '',
            inputing: false, // 当前是否处于输入状态
            panel: PANEL.DATE,
            format: format,
            timeFormat: timeFormat,
            dateTimeFormat: dateTimeFormat,
            inputAsString: val && (typeof val[0] === 'string' || typeof val[1] === 'string'),
        };
        return _this;
    }
    RangePicker.getDerivedStateFromProps = function (props) {
        var formatStates = getDateTimeFormat(props.format, props.showTime, props.type);
        var states = {};
        if ('value' in props) {
            var values = getFormatValues(props.value, formatStates.dateTimeFormat);
            states.startValue = values[0];
            states.endValue = values[1];
            states.inputAsString =
                props.value && (typeof props.value[0] === 'string' || typeof props.value[1] === 'string');
        }
        if ('visible' in props) {
            states.visible = props.visible;
        }
        return __assign(__assign({}, states), formatStates);
    };
    RangePicker.prototype.renderPreview = function (_a, others) {
        var _b = __read(_a, 2), startValue = _b[0], endValue = _b[1];
        var _c = this.props, prefix = _c.prefix, className = _c.className, renderPreview = _c.renderPreview;
        var dateTimeFormat = this.state.dateTimeFormat;
        var previewCls = classnames(className, "".concat(prefix, "form-preview"));
        var startLabel = startValue ? startValue.format(dateTimeFormat) : '';
        var endLabel = endValue ? endValue.format(dateTimeFormat) : '';
        if (typeof renderPreview === 'function') {
            return (React.createElement("div", __assign({}, others, { className: previewCls }), renderPreview([startValue, endValue], this.props)));
        }
        return (React.createElement("p", __assign({}, others, { className: previewCls }),
            startLabel,
            " - ",
            endLabel));
    };
    RangePicker.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var _this = this;
        var _j = this.props, prefix = _j.prefix, rtl = _j.rtl, type = _j.type, defaultVisibleMonth = _j.defaultVisibleMonth, onVisibleMonthChange = _j.onVisibleMonthChange, showTime = _j.showTime, disabledDate = _j.disabledDate, footerRender = _j.footerRender, label = _j.label, _k = _j.ranges, ranges = _k === void 0 ? {} : _k, // 兼容0.x ranges 属性
        inputState = _j.state, size = _j.size, disabled = _j.disabled, hasClear = _j.hasClear, popupTriggerType = _j.popupTriggerType, popupAlign = _j.popupAlign, popupContainer = _j.popupContainer, popupStyle = _j.popupStyle, popupClassName = _j.popupClassName, popupProps = _j.popupProps, popupComponent = _j.popupComponent, popupContent = _j.popupContent, followTrigger = _j.followTrigger, className = _j.className, locale = _j.locale, inputProps = _j.inputProps, dateCellRender = _j.dateCellRender, monthCellRender = _j.monthCellRender, yearCellRender = _j.yearCellRender, startDateInputAriaLabel = _j.startDateInputAriaLabel, startTimeInputAriaLabel = _j.startTimeInputAriaLabel, endDateInputAriaLabel = _j.endDateInputAriaLabel, endTimeInputAriaLabel = _j.endTimeInputAriaLabel, isPreview = _j.isPreview, disableChangeMode = _j.disableChangeMode, yearRange = _j.yearRange, placeholder = _j.placeholder, others = __rest(_j, ["prefix", "rtl", "type", "defaultVisibleMonth", "onVisibleMonthChange", "showTime", "disabledDate", "footerRender", "label", "ranges", "state", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "locale", "inputProps", "dateCellRender", "monthCellRender", "yearCellRender", "startDateInputAriaLabel", "startTimeInputAriaLabel", "endDateInputAriaLabel", "endTimeInputAriaLabel", "isPreview", "disableChangeMode", "yearRange", "placeholder"]);
        var state = this.state;
        var classNames = classnames((_a = {},
            _a["".concat(prefix, "range-picker")] = true,
            _a["".concat(prefix).concat(size)] = size,
            _a["".concat(prefix, "disabled")] = disabled,
            _a), className);
        var panelBodyClassName = classnames((_b = {},
            _b["".concat(prefix, "range-picker-body")] = true,
            _b["".concat(prefix, "range-picker-body-show-time")] = showTime,
            _b));
        var triggerCls = classnames((_c = {},
            _c["".concat(prefix, "range-picker-trigger")] = true,
            _c["".concat(prefix, "error")] = inputState === 'error',
            _c));
        var startDateInputCls = classnames((_d = {},
            _d["".concat(prefix, "range-picker-panel-input-start-date")] = true,
            _d["".concat(prefix, "focus")] = state.activeDateInput === 'startValue',
            _d));
        var endDateInputCls = classnames((_e = {},
            _e["".concat(prefix, "range-picker-panel-input-end-date")] = true,
            _e["".concat(prefix, "focus")] = state.activeDateInput === 'endValue',
            _e));
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview) {
            return this.renderPreview([state.startValue, state.endValue], obj.pickOthers(others, RangePicker.PropTypes));
        }
        var startDateInputValue = state.inputing === 'startValue'
            ? state.startDateInputStr
            : (state.startValue && state.startValue.format(state.format)) || '';
        var endDateInputValue = state.inputing === 'endValue'
            ? state.endDateInputStr
            : (state.endValue && state.endValue.format(state.format)) || '';
        var startTriggerValue = startDateInputValue;
        var endTriggerValue = endDateInputValue;
        var sharedInputProps = __assign(__assign({}, inputProps), { size: size, disabled: disabled, onChange: this.onDateInputChange, onBlur: this.onDateInputBlur, onPressEnter: this.onDateInputBlur, onKeyDown: this.onDateInputKeyDown });
        var startDateInput = (React.createElement(Input, __assign({}, sharedInputProps, { "aria-label": startDateInputAriaLabel, placeholder: state.format, value: startDateInputValue, onFocus: function () { return _this.onFocusDateInput('startValue'); }, className: startDateInputCls })));
        var endDateInput = (React.createElement(Input, __assign({}, sharedInputProps, { "aria-label": endDateInputAriaLabel, placeholder: state.format, value: endDateInputValue, onFocus: function () { return _this.onFocusDateInput('endValue'); }, className: endDateInputCls })));
        var shareCalendarProps = {
            showOtherMonth: true,
            dateCellRender: dateCellRender,
            monthCellRender: monthCellRender,
            yearCellRender: yearCellRender,
            format: state.format,
            defaultVisibleMonth: defaultVisibleMonth,
            onVisibleMonthChange: onVisibleMonthChange,
        };
        var datePanel = type === 'date' ? (React.createElement(RangeCalendar, __assign({}, shareCalendarProps, { yearRange: yearRange, disableChangeMode: disableChangeMode, disabledDate: disabledDate, onSelect: this.onSelectCalendarPanel, startValue: state.startValue, endValue: state.endValue }))) : (React.createElement("div", { className: "".concat(prefix, "range-picker-panel-body") },
            React.createElement(Calendar, __assign({ shape: "panel", modes: type === 'month' ? ['month', 'year'] : ['year'] }, shareCalendarProps, { disabledDate: function (date) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return ((state.endValue && date.isAfter(state.endValue, type)) ||
                        (disabledDate && disabledDate.apply(void 0, __spreadArray([date], __read(args), false))));
                }, onSelect: function (value) {
                    var selectedValue = value
                        .clone()
                        .date(1)
                        .hour(0)
                        .minute(0)
                        .second(0);
                    if (type === 'year') {
                        selectedValue.month(0);
                    }
                    _this.onSelectCalendarPanel(selectedValue, 'startValue');
                }, value: state.startValue })),
            React.createElement(Calendar, __assign({ shape: "panel", modes: type === 'month' ? ['month', 'year'] : ['year'] }, shareCalendarProps, { disabledDate: function (date) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return ((state.startValue && date.isBefore(state.startValue, type)) ||
                        (disabledDate && disabledDate.apply(void 0, __spreadArray([date], __read(args), false))));
                }, onSelect: function (value) {
                    var selectedValue = value
                        .clone()
                        .hour(23)
                        .minute(59)
                        .second(59);
                    if (type === 'year') {
                        selectedValue.month(11).date(31);
                    }
                    else {
                        selectedValue.date(selectedValue.daysInMonth());
                    }
                    _this.onSelectCalendarPanel(selectedValue, 'endValue');
                }, value: state.endValue }))));
        var startTimeInput = null;
        var endTimeInput = null;
        var timePanel = null;
        var panelFooter = footerRender();
        if (showTime) {
            var startTimeInputValue = state.inputing === 'startTime'
                ? state.startTimeInputStr
                : (state.startValue && state.startValue.format(state.timeFormat)) || '';
            var endTimeInputValue = state.inputing === 'endTime'
                ? state.endTimeInputStr
                : (state.endValue && state.endValue.format(state.timeFormat)) || '';
            startTriggerValue = (state.startValue && state.startValue.format(state.dateTimeFormat)) || '';
            endTriggerValue = (state.endValue && state.endValue.format(state.dateTimeFormat)) || '';
            var sharedTimeInputProps = {
                size: size,
                placeholder: state.timeFormat,
                onFocus: this.onFocusTimeInput,
                onBlur: this.onTimeInputBlur,
                onPressEnter: this.onTimeInputBlur,
                onChange: this.onTimeInputChange,
                onKeyDown: this.onTimeInputKeyDown,
            };
            var startTimeInputCls = classnames((_f = {},
                _f["".concat(prefix, "range-picker-panel-input-start-time")] = true,
                _f["".concat(prefix, "focus")] = state.activeDateInput === 'startTime',
                _f));
            startTimeInput = (React.createElement(Input, __assign({}, sharedTimeInputProps, { value: startTimeInputValue, "aria-label": startTimeInputAriaLabel, disabled: disabled || !state.startValue, onFocus: function () { return _this.onFocusTimeInput('startTime'); }, className: startTimeInputCls })));
            var endTimeInputCls = classnames((_g = {},
                _g["".concat(prefix, "range-picker-panel-input-end-time")] = true,
                _g["".concat(prefix, "focus")] = state.activeDateInput === 'endTime',
                _g));
            endTimeInput = (React.createElement(Input, __assign({}, sharedTimeInputProps, { value: endTimeInputValue, "aria-label": endTimeInputAriaLabel, disabled: disabled || !state.endValue, onFocus: function () { return _this.onFocusTimeInput('endTime'); }, className: endTimeInputCls })));
            var showSecond = state.timeFormat.indexOf('s') > -1;
            var showMinute = state.timeFormat.indexOf('m') > -1;
            var sharedTimePickerProps = __assign(__assign({}, showTime), { prefix: prefix, locale: locale, disabled: disabled, showSecond: showSecond, showMinute: showMinute });
            var disabledTime = this.getDisabledTime(state);
            timePanel = (React.createElement("div", { className: "".concat(prefix, "range-picker-panel-time") },
                React.createElement(TimePickerPanel, __assign({}, sharedTimePickerProps, { disabled: disabled || !state.startValue, className: "".concat(prefix, "range-picker-panel-time-start"), value: state.startValue, onSelect: this.onSelectStartTime })),
                React.createElement(TimePickerPanel, __assign({}, sharedTimePickerProps, disabledTime, { disabled: disabled || !state.endValue, className: "".concat(prefix, "range-picker-panel-time-end"), value: state.endValue, onSelect: this.onSelectEndTime }))));
        }
        panelFooter = panelFooter || (React.createElement(PanelFooter, { prefix: prefix, value: state.startValue || state.endValue, ranges: Object.keys(ranges).map(function (key) { return ({
                label: key,
                value: ranges[key],
                onChange: function (values) {
                    _this.setState({
                        startValue: values[0],
                        endValue: values[1],
                    });
                    _this.onValueChange(values);
                },
            }); }), disabledOk: !state.startValue || !state.endValue || state.startValue.valueOf() > state.endValue.valueOf(), locale: locale, panel: state.panel, onPanelChange: showTime ? this.changePanel : null, onOk: this.onOk }));
        var panelBody = (_h = {},
            _h[PANEL.DATE] = datePanel,
            _h[PANEL.TIME] = timePanel,
            _h)[state.panel];
        var allowClear = state.startValue && state.endValue && hasClear;
        var _l = __read(placeholder || [], 2), startPlaceholder = _l[0], endPlaceholder = _l[1];
        if (typeof placeholder === 'string') {
            startPlaceholder = placeholder;
            endPlaceholder = placeholder;
        }
        var trigger = (React.createElement("div", { className: triggerCls },
            React.createElement(Input, __assign({}, sharedInputProps, { readOnly: true, role: "combobox", "aria-expanded": state.visible, label: label, placeholder: startPlaceholder || locale.startPlaceholder, value: startTriggerValue, hasBorder: false, className: "".concat(prefix, "range-picker-trigger-input"), onFocus: function () { return _this.onFocusDateInput('startValue'); } })),
            React.createElement("span", { className: "".concat(prefix, "range-picker-trigger-separator") }, "-"),
            React.createElement(Input, __assign({}, sharedInputProps, { readOnly: true, role: "combobox", "aria-expanded": state.visible, placeholder: endPlaceholder || locale.endPlaceholder, value: endTriggerValue, hasBorder: false, className: "".concat(prefix, "range-picker-trigger-input"), onFocus: function () { return _this.onFocusDateInput('endValue'); }, hasClear: allowClear, hint: React.createElement(Icon, { type: "calendar", className: "".concat(prefix, "date-picker-symbol-calendar-icon") }) }))));
        var PopupComponent = popupComponent ? popupComponent : Popup;
        return (React.createElement("div", __assign({}, obj.pickOthers(RangePicker.propTypes, others), { className: classNames }),
            React.createElement(PopupComponent, __assign({ autoFocus: true, align: popupAlign }, popupProps, { followTrigger: followTrigger, disabled: disabled, visible: state.visible, onVisibleChange: this.onVisibleChange, triggerType: popupTriggerType, container: popupContainer, style: popupStyle, className: popupClassName, trigger: trigger }), popupContent ? (popupContent) : (React.createElement("div", { dir: others.dir, className: panelBodyClassName },
                React.createElement("div", { className: "".concat(prefix, "range-picker-panel-header") },
                    React.createElement("div", { className: "".concat(prefix, "range-picker-panel-input") },
                        startDateInput,
                        startTimeInput,
                        React.createElement("span", { className: "".concat(prefix, "range-picker-panel-input-separator") }, "-"),
                        endDateInput,
                        endTimeInput)),
                panelBody,
                panelFooter)))));
    };
    RangePicker.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, 
        /**
         * 日期范围类型
         */
        type: PropTypes.oneOf(['date', 'month', 'year']), 
        /**
         * 默认展示的起始月份
         * @return {MomentObject} 返回包含指定月份的 moment 对象实例
         */
        defaultVisibleMonth: PropTypes.func, onVisibleMonthChange: PropTypes.func, 
        /**
         * 日期范围值数组 [moment, moment]
         */
        value: PropTypes.array, 
        /**
         * 初始的日期范围值数组 [moment, moment]
         */
        defaultValue: PropTypes.array, 
        /**
         * 日期格式
         */
        format: PropTypes.string, 
        /**
         * 是否使用时间控件，支持传入 TimePicker 的属性
         */
        showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]), 
        /**
         * 每次选择是否重置时间（仅在 showTime 开启时有效）
         */
        resetTime: PropTypes.bool, 
        /**
         * 禁用日期函数
         * @param {MomentObject} 日期值
         * @param {String} view 当前视图类型，year: 年， month: 月, date: 日
         * @return {Boolean} 是否禁用
         */
        disabledDate: PropTypes.func, 
        /**
         * 自定义面板页脚
         * @return {Node} 自定义的面板页脚组件
         */
        footerRender: PropTypes.func, 
        /**
         * 日期范围值改变时的回调 [ MomentObject|String, MomentObject|String ]
         * @param {Array<MomentObject|String>} value 日期值
         */
        onChange: PropTypes.func, 
        /**
         * 点击确认按钮时的回调 返回开始时间和结束时间`[ MomentObject|String, MomentObject|String ]`
         * @return {Array} 日期范围
         */
        onOk: PropTypes.func, 
        /**
         * 输入框内置标签
         */
        label: PropTypes.node, 
        /**
         * 输入框状态
         */
        state: PropTypes.oneOf(['error', 'loading', 'success']), 
        /**
         * 输入框尺寸
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']), 
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool, 
        /**
         * 是否显示清空按钮
         */
        hasClear: PropTypes.bool, 
        /**
         * 弹层显示状态
         */
        visible: PropTypes.bool, 
        /**
         * 弹层默认是否显示
         */
        defaultVisible: PropTypes.bool, 
        /**
         * 弹层展示状态变化时的回调
         * @param {Boolean} visible 弹层是否显示
         * @param {String} type 触发弹层显示和隐藏的来源 okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: PropTypes.func, 
        /**
         * 弹层触发方式
         */
        popupTriggerType: PropTypes.oneOf(['click', 'hover']), 
        /**
         * 弹层对齐方式, 具体含义见 OverLay文档
         */
        popupAlign: PropTypes.string, 
        /**
         * 弹层容器
         * @param {Element} target 目标元素
         * @return {Element} 弹层的容器元素
         */
        popupContainer: PropTypes.any, 
        /**
         * 弹层自定义样式
         */
        popupStyle: PropTypes.object, 
        /**
         * 弹层自定义样式类
         */
        popupClassName: PropTypes.string, 
        /**
         * 弹层其他属性
         */
        popupProps: PropTypes.object, 
        /**
         * 是否跟随滚动
         */
        followTrigger: PropTypes.bool, 
        /**
         * 输入框其他属性
         */
        inputProps: PropTypes.object, 
        /**
         * 自定义日期单元格渲染
         */
        dateCellRender: PropTypes.func, 
        /**
         * 自定义月份渲染函数
         * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
         * @returns {ReactNode}
         */
        monthCellRender: PropTypes.func, yearCellRender: PropTypes.func, 
        /**
         * 开始日期输入框的 aria-label 属性
         */
        startDateInputAriaLabel: PropTypes.string, 
        /**
         * 开始时间输入框的 aria-label 属性
         */
        startTimeInputAriaLabel: PropTypes.string, 
        /**
         * 结束日期输入框的 aria-label 属性
         */
        endDateInputAriaLabel: PropTypes.string, 
        /**
         * 结束时间输入框的 aria-label 属性
         */
        endTimeInputAriaLabel: PropTypes.string, 
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool, 
        /**
         * 预览态模式下渲染的内容
         * @param {Array<MomentObject, MomentObject>} value 日期区间
         */
        renderPreview: PropTypes.func, disableChangeMode: PropTypes.bool, yearRange: PropTypes.arrayOf(PropTypes.number), ranges: PropTypes.object, locale: PropTypes.object, className: PropTypes.string, name: PropTypes.string, popupComponent: PropTypes.elementType, popupContent: PropTypes.node, placeholder: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]) });
    RangePicker.defaultProps = {
        prefix: 'next-',
        rtl: false,
        type: 'date',
        size: 'medium',
        showTime: false,
        resetTime: false,
        disabledDate: function () { return false; },
        footerRender: function () { return null; },
        hasClear: true,
        defaultVisible: false,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        locale: nextLocale.DatePicker,
        disableChangeMode: false,
        onChange: func.noop,
        onOk: func.noop,
        onVisibleChange: func.noop,
    };
    return RangePicker;
}(Component));
export default polyfill(RangePicker);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var moment_1 = tslib_1.__importDefault(require("moment"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var overlay_1 = tslib_1.__importDefault(require("../overlay"));
var input_1 = tslib_1.__importDefault(require("../input"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var calendar_1 = tslib_1.__importDefault(require("../calendar"));
var range_calendar_1 = tslib_1.__importDefault(require("../calendar/range-calendar"));
var panel_1 = tslib_1.__importDefault(require("../time-picker/panel"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var util_2 = require("./util");
var panel_footer_1 = tslib_1.__importDefault(require("./module/panel-footer"));
var Popup = overlay_1.default.Popup;
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
    return [(0, util_2.formatDateValue)(values[0], format), (0, util_2.formatDateValue)(values[1], format)];
}
/**
 * DatePicker.RangePicker
 */
var RangePicker = /** @class */ (function (_super) {
    tslib_1.__extends(RangePicker, _super);
    function RangePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.startDateInputRef = (0, react_1.createRef)();
        _this.endDateInputRef = (0, react_1.createRef)();
        _this.autoSwitchDateInput = false;
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
                    if (!prevEndValue || _this.autoSwitchDateInput) {
                        newState.activeDateInput = 'endValue';
                    }
                    if (showTime) {
                        if (!prevStartValue) {
                            // 第一次选择，如果设置了时间默认值，则使用该默认时间
                            if (typeof showTime === 'object' && showTime.defaultValue) {
                                var defaultTimeValue = (0, util_2.formatDateValue)(Array.isArray(showTime.defaultValue)
                                    ? showTime.defaultValue[0]
                                    : showTime.defaultValue, timeFormat);
                                newValue = (0, util_2.resetValueTime)(value, defaultTimeValue);
                            }
                        }
                        else if (!resetTime) {
                            // 非第一次选择，如果开启了 resetTime，则记住之前选择的时间值
                            newValue = (0, util_2.resetValueTime)(value, prevStartValue);
                        }
                    }
                    newState.startValue = newValue;
                    // 如果起始日期大于结束日期
                    if (prevEndValue && newValue.valueOf() > prevEndValue.valueOf()) {
                        // 将结束日期设置为起始日期 如果需要的话保留时间
                        newState.endValue = resetTime ? newValue : (0, util_2.resetValueTime)(value, prevEndValue);
                        // 如果结束日期不大于起始日期则将结束日期设置为等于开始日期
                        if (newState.endValue.valueOf() < newState.startValue.valueOf()) {
                            newState.endValue = (0, moment_1.default)(newState.startValue);
                        }
                        newState.activeDateInput = 'endValue';
                    }
                    break;
                }
                case 'endValue':
                    if (!prevStartValue || _this.autoSwitchDateInput) {
                        newState.activeDateInput = 'startValue';
                    }
                    if (showTime) {
                        if (!prevEndValue) {
                            // 第一次选择，如果设置了时间默认值，则使用该默认时间
                            if (typeof showTime === 'object' && showTime.defaultValue) {
                                var defaultTimeValue = (0, util_2.formatDateValue)(Array.isArray(showTime.defaultValue)
                                    ? showTime.defaultValue[1] || showTime.defaultValue[0]
                                    : showTime.defaultValue, timeFormat);
                                newValue = (0, util_2.resetValueTime)(value, defaultTimeValue);
                            }
                        }
                        else if (!resetTime) {
                            // 非第一次选择，如果开启了 resetTime ，则记住之前选择的时间值
                            newValue = (0, util_2.resetValueTime)(value, prevEndValue);
                        }
                    }
                    newState.endValue = newValue;
                    // 选择了一个比开始日期更小的结束日期，此时表示用户重新选择了
                    if (prevStartValue && newValue.valueOf() <= prevStartValue.valueOf()) {
                        newState.startValue = resetTime ? value : (0, util_2.resetValueTime)(value, prevStartValue);
                        newState.endValue = resetTime ? value : (0, util_2.resetValueTime)(value, prevEndValue);
                        // 如果结束日期不大于起始日期则将结束日期设置为等于开始日期
                        if (newState.endValue.valueOf() < newState.startValue.valueOf()) {
                            newState.endValue = (0, moment_1.default)(newState.startValue);
                        }
                    }
                    break;
            }
            var newStartValue = 'startValue' in newState ? newState.startValue : prevStartValue;
            var newEndValue = 'endValue' in newState ? newState.endValue : prevEndValue;
            // 每当 input 发生了自动切换，则关闭自动切换
            if (newState.activeDateInput !== prevActiveDateInput) {
                _this.autoSwitchDateInput = false;
            }
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
                var parsed = (0, moment_1.default)(dateInputStr, format, true);
                _this.setState((_a = {},
                    _a[stateName] = '',
                    _a.inputing = false,
                    _a));
                if (parsed.isValid() && !disabledDate(parsed, 'date')) {
                    var valueName = activeDateInput;
                    var newValue = resetTime
                        ? parsed
                        : (0, util_2.resetValueTime)(parsed, _this.state[activeDateInput]);
                    _this.handleChange(valueName, newValue);
                }
            }
        };
        _this.onDateInputKeyDown = function (e) {
            var type = _this.props.type;
            var _a = _this.state, activeDateInput = _a.activeDateInput, format = _a.format;
            var stateName = mapInputStateName(activeDateInput);
            var dateInputStr = _this.state[stateName];
            var dateStr = (0, util_2.onDateKeydown)(e, {
                format: format,
                value: _this.state[activeDateInput],
                dateInputStr: dateInputStr,
            }, type === 'date' ? 'day' : type);
            if (!dateStr)
                return;
            // @ts-expect-error 应该传入 e
            return _this.onDateInputChange(dateStr);
        };
        _this.onFocusDateInput = function (type) {
            if (type !== _this.state.activeDateInput) {
                _this.setState({
                    activeDateInput: type,
                });
            }
            if (_this.state.panel !== util_2.PANEL.DATE) {
                _this.setState({
                    panel: util_2.PANEL.DATE,
                });
            }
        };
        _this.onFocusTimeInput = function (type) {
            if (type !== _this.state.activeDateInput) {
                _this.setState({
                    activeDateInput: type,
                });
            }
            if (_this.state.panel !== util_2.PANEL.TIME) {
                _this.setState({
                    panel: util_2.PANEL.TIME,
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
            // @ts-expect-error 未考虑 startValue 为 null 的情况
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
            // @ts-expect-error 未考虑 endValue 为 null 的情况
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
            var parsed = (0, moment_1.default)(timeInputStr, _this.state.timeFormat, true);
            _this.setState((_a = {},
                _a[stateName] = '',
                _a.inputing = false,
                _a));
            if (parsed.isValid()) {
                var hour = parsed.hour();
                var minute = parsed.minute();
                var second = parsed.second();
                var valueName = mapTimeToValue(_this.state.activeDateInput);
                // @ts-expect-error 未考虑 startValue 为 null 的情况
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
            var timeStr = (0, util_2.onTimeKeydown)(e, {
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
            var values = ['startValue', 'endValue'].map(function (name) {
                return valueName === name ? newValue : _this.state[name];
            });
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
                activeDateInput: panel === util_2.PANEL.DATE
                    ? !!startValue && !endValue
                        ? 'endValue'
                        : 'startValue'
                    : 'startTime',
            });
        };
        _this.onOk = function (value) {
            _this.onVisibleChange(false, 'okBtnClick');
            _this.onValueChange(value || [_this.state.startValue, _this.state.endValue], 'onOk');
        };
        // 如果用户没有给定时间禁用逻辑，则给默认到禁用逻辑
        _this.getDisabledTime = function (_a) {
            var startValue = _a.startValue, endValue = _a.endValue;
            var _b = (_this.props.showTime ||
                {}), disabledHours = _b.disabledHours, disabledMinutes = _b.disabledMinutes, disabledSeconds = _b.disabledSeconds;
            var disabledTime = {};
            if (startValue && endValue) {
                var isSameDay_1 = startValue.format('L') === endValue.format('L');
                var newDisabledHours = (0, util_2.isFunction)(disabledHours)
                    ? disabledHours
                    : function (index) {
                        if (isSameDay_1 && index < startValue.hour()) {
                            return true;
                        }
                    };
                var newDisabledMinutes = (0, util_2.isFunction)(disabledMinutes)
                    ? disabledMinutes
                    : function (index) {
                        if (isSameDay_1 &&
                            startValue.hour() === endValue.hour() &&
                            index < startValue.minute()) {
                            return true;
                        }
                    };
                var newDisabledSeconds = (0, util_2.isFunction)(disabledSeconds)
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
        _this.enableAutoSwitchDateInput = function () {
            _this.autoSwitchDateInput = true;
        };
        _this.afterOpen = function () {
            // autoFocus 逻辑手动处理
            switch (_this.state.activeDateInput) {
                case 'startValue': {
                    if (_this.startDateInputRef.current) {
                        _this.startDateInputRef.current.getInstance().focus();
                    }
                    break;
                }
                case 'endValue': {
                    if (_this.endDateInputRef.current) {
                        _this.endDateInputRef.current.getInstance().focus();
                    }
                    break;
                }
            }
        };
        var _a = (0, util_2.getDateTimeFormat)(props.format, props.showTime, props.type), format = _a.format, timeFormat = _a.timeFormat, dateTimeFormat = _a.dateTimeFormat;
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
            panel: util_2.PANEL.DATE,
            format: format,
            timeFormat: timeFormat,
            dateTimeFormat: dateTimeFormat,
            inputAsString: val && (typeof val[0] === 'string' || typeof val[1] === 'string'),
        };
        return _this;
    }
    RangePicker.getDerivedStateFromProps = function (props) {
        var formatStates = (0, util_2.getDateTimeFormat)(props.format, props.showTime, props.type);
        var states = {};
        if ('value' in props) {
            var values = getFormatValues(props.value, formatStates.dateTimeFormat);
            states.startValue = values[0];
            states.endValue = values[1];
            if (props.value &&
                (typeof props.value[0] === 'string' || typeof props.value[1] === 'string')) {
                states.inputAsString = true;
            }
            if (props.value &&
                (moment_1.default.isMoment(props.value[0]) || moment_1.default.isMoment(props.value[1]))) {
                states.inputAsString = false;
            }
        }
        if ('visible' in props) {
            states.visible = props.visible;
        }
        return tslib_1.__assign(tslib_1.__assign({}, states), formatStates);
    };
    RangePicker.prototype.renderPreview = function (_a, others) {
        var _b = tslib_1.__read(_a, 2), startValue = _b[0], endValue = _b[1];
        var _c = this.props, prefix = _c.prefix, className = _c.className, renderPreview = _c.renderPreview;
        var dateTimeFormat = this.state.dateTimeFormat;
        var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
        var startLabel = startValue ? startValue.format(dateTimeFormat) : '';
        var endLabel = endValue ? endValue.format(dateTimeFormat) : '';
        if (typeof renderPreview === 'function') {
            return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }), renderPreview([startValue, endValue], this.props)));
        }
        return (react_1.default.createElement("p", tslib_1.__assign({}, others, { className: previewCls }),
            startLabel,
            " - ",
            endLabel));
    };
    RangePicker.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var _this = this;
        var _j = this.props, prefix = _j.prefix, rtl = _j.rtl, type = _j.type, defaultVisibleMonth = _j.defaultVisibleMonth, onVisibleMonthChange = _j.onVisibleMonthChange, showTime = _j.showTime, disabledDate = _j.disabledDate, footerRender = _j.footerRender, label = _j.label, _k = _j.ranges, ranges = _k === void 0 ? {} : _k, // 兼容 0.x ranges 属性
        inputState = _j.state, size = _j.size, disabled = _j.disabled, hasClear = _j.hasClear, popupTriggerType = _j.popupTriggerType, popupAlign = _j.popupAlign, popupContainer = _j.popupContainer, popupStyle = _j.popupStyle, popupClassName = _j.popupClassName, popupProps = _j.popupProps, popupComponent = _j.popupComponent, popupContent = _j.popupContent, followTrigger = _j.followTrigger, className = _j.className, locale = _j.locale, inputProps = _j.inputProps, dateCellRender = _j.dateCellRender, monthCellRender = _j.monthCellRender, yearCellRender = _j.yearCellRender, startDateInputAriaLabel = _j.startDateInputAriaLabel, startTimeInputAriaLabel = _j.startTimeInputAriaLabel, endDateInputAriaLabel = _j.endDateInputAriaLabel, endTimeInputAriaLabel = _j.endTimeInputAriaLabel, isPreview = _j.isPreview, disableChangeMode = _j.disableChangeMode, yearRange = _j.yearRange, placeholder = _j.placeholder, others = tslib_1.__rest(_j, ["prefix", "rtl", "type", "defaultVisibleMonth", "onVisibleMonthChange", "showTime", "disabledDate", "footerRender", "label", "ranges", "state", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "locale", "inputProps", "dateCellRender", "monthCellRender", "yearCellRender", "startDateInputAriaLabel", "startTimeInputAriaLabel", "endDateInputAriaLabel", "endTimeInputAriaLabel", "isPreview", "disableChangeMode", "yearRange", "placeholder"]);
        var state = this.state;
        var classNames = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "range-picker")] = true,
            _a["".concat(prefix).concat(size)] = size,
            _a["".concat(prefix, "disabled")] = disabled,
            _a), className);
        var panelBodyClassName = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "range-picker-body")] = true,
            _b["".concat(prefix, "range-picker-body-show-time")] = showTime,
            _b));
        var triggerCls = (0, classnames_1.default)((_c = {},
            _c["".concat(prefix, "range-picker-trigger")] = true,
            _c["".concat(prefix, "error")] = inputState === 'error',
            _c));
        var startDateInputCls = (0, classnames_1.default)((_d = {},
            _d["".concat(prefix, "range-picker-panel-input-start-date")] = true,
            _d["".concat(prefix, "focus")] = state.activeDateInput === 'startValue',
            _d));
        var endDateInputCls = (0, classnames_1.default)((_e = {},
            _e["".concat(prefix, "range-picker-panel-input-end-date")] = true,
            _e["".concat(prefix, "focus")] = state.activeDateInput === 'endValue',
            _e));
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview) {
            return this.renderPreview([state.startValue, state.endValue], 
            // @ts-expect-error 应为 propTypes
            util_1.obj.pickOthers(others, RangePicker.PropTypes));
        }
        var startDateInputValue = state.inputing === 'startValue'
            ? state.startDateInputStr
            : (state.startValue && state.startValue.format(state.format)) || '';
        var endDateInputValue = state.inputing === 'endValue'
            ? state.endDateInputStr
            : (state.endValue && state.endValue.format(state.format)) || '';
        var startTriggerValue = startDateInputValue;
        var endTriggerValue = endDateInputValue;
        var sharedInputProps = tslib_1.__assign(tslib_1.__assign({}, inputProps), { size: size, disabled: disabled, onChange: this.onDateInputChange, onBlur: this.onDateInputBlur, onPressEnter: this.onDateInputBlur, onKeyDown: this.onDateInputKeyDown });
        var startDateInput = (react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedInputProps, { "aria-label": startDateInputAriaLabel, placeholder: state.format, value: startDateInputValue, onFocus: function () { return _this.onFocusDateInput('startValue'); }, className: startDateInputCls, ref: this.startDateInputRef, onClick: util_1.func.makeChain(this.enableAutoSwitchDateInput, sharedInputProps.onClick) })));
        var endDateInput = (react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedInputProps, { "aria-label": endDateInputAriaLabel, placeholder: state.format, value: endDateInputValue, onFocus: function () { return _this.onFocusDateInput('endValue'); }, className: endDateInputCls, ref: this.endDateInputRef, onClick: util_1.func.makeChain(this.enableAutoSwitchDateInput, sharedInputProps.onClick) })));
        var shareCalendarProps = {
            showOtherMonth: true,
            dateCellRender: dateCellRender,
            monthCellRender: monthCellRender,
            yearCellRender: yearCellRender,
            format: state.format,
            defaultVisibleMonth: defaultVisibleMonth,
            onVisibleMonthChange: onVisibleMonthChange,
        };
        var datePanel = type === 'date' ? (react_1.default.createElement(range_calendar_1.default, tslib_1.__assign({}, shareCalendarProps, { yearRange: yearRange, disableChangeMode: disableChangeMode, disabledDate: disabledDate, onSelect: this.onSelectCalendarPanel, startValue: state.startValue, endValue: state.endValue }))) : (react_1.default.createElement("div", { className: "".concat(prefix, "range-picker-panel-body") },
            react_1.default.createElement(calendar_1.default, tslib_1.__assign({ shape: "panel", modes: type === 'month' ? ['month', 'year'] : ['year'] }, shareCalendarProps, { disabledDate: function (date) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return ((state.endValue && date.isAfter(state.endValue, type)) ||
                        (disabledDate && disabledDate.apply(void 0, tslib_1.__spreadArray([date], tslib_1.__read(args), false))));
                }, onSelect: function (value) {
                    var selectedValue = value.clone().date(1).hour(0).minute(0).second(0);
                    if (type === 'year') {
                        selectedValue.month(0);
                    }
                    _this.onSelectCalendarPanel(selectedValue, 'startValue');
                }, value: state.startValue })),
            react_1.default.createElement(calendar_1.default, tslib_1.__assign({ shape: "panel", modes: type === 'month' ? ['month', 'year'] : ['year'] }, shareCalendarProps, { disabledDate: function (date) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return ((state.startValue && date.isBefore(state.startValue, type)) ||
                        (disabledDate && disabledDate.apply(void 0, tslib_1.__spreadArray([date], tslib_1.__read(args), false))));
                }, onSelect: function (value) {
                    var selectedValue = value.clone().hour(23).minute(59).second(59);
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
            startTriggerValue =
                (state.startValue && state.startValue.format(state.dateTimeFormat)) || '';
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
            var startTimeInputCls = (0, classnames_1.default)((_f = {},
                _f["".concat(prefix, "range-picker-panel-input-start-time")] = true,
                _f["".concat(prefix, "focus")] = state.activeDateInput === 'startTime',
                _f));
            startTimeInput = (react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedTimeInputProps, { value: startTimeInputValue, "aria-label": startTimeInputAriaLabel, disabled: disabled || !state.startValue, onFocus: function () { return _this.onFocusTimeInput('startTime'); }, className: startTimeInputCls })));
            var endTimeInputCls = (0, classnames_1.default)((_g = {},
                _g["".concat(prefix, "range-picker-panel-input-end-time")] = true,
                _g["".concat(prefix, "focus")] = state.activeDateInput === 'endTime',
                _g));
            endTimeInput = (react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedTimeInputProps, { value: endTimeInputValue, "aria-label": endTimeInputAriaLabel, disabled: disabled || !state.endValue, onFocus: function () { return _this.onFocusTimeInput('endTime'); }, className: endTimeInputCls })));
            var showSecond = state.timeFormat.indexOf('s') > -1;
            var showMinute = state.timeFormat.indexOf('m') > -1;
            var sharedTimePickerProps = tslib_1.__assign(tslib_1.__assign({}, showTime), { prefix: prefix, locale: locale, disabled: disabled, showSecond: showSecond, showMinute: showMinute });
            var disabledTime = this.getDisabledTime(state);
            timePanel = (react_1.default.createElement("div", { className: "".concat(prefix, "range-picker-panel-time") },
                react_1.default.createElement(panel_1.default, tslib_1.__assign({}, sharedTimePickerProps, { disabled: disabled || !state.startValue, className: "".concat(prefix, "range-picker-panel-time-start"), value: state.startValue, onSelect: this.onSelectStartTime })),
                react_1.default.createElement(panel_1.default, tslib_1.__assign({}, sharedTimePickerProps, disabledTime, { disabled: disabled || !state.endValue, className: "".concat(prefix, "range-picker-panel-time-end"), value: state.endValue, onSelect: this.onSelectEndTime }))));
        }
        panelFooter = panelFooter || (react_1.default.createElement(panel_footer_1.default, { prefix: prefix, value: state.startValue || state.endValue, ranges: Object.keys(ranges).map(function (key) { return ({
                label: key,
                value: ranges[key],
                onChange: function (values) {
                    _this.setState({
                        startValue: values[0],
                        endValue: values[1],
                    });
                    _this.onValueChange(values);
                },
            }); }), disabledOk: !state.startValue ||
                !state.endValue ||
                state.startValue.valueOf() > state.endValue.valueOf(), locale: locale, panel: state.panel, onPanelChange: showTime ? this.changePanel : null, onOk: this.onOk }));
        var panelBody = (_h = {},
            _h[util_2.PANEL.DATE] = datePanel,
            _h[util_2.PANEL.TIME] = timePanel,
            _h)[state.panel];
        var allowClear = (state.startValue || state.endValue) && hasClear;
        var _l = tslib_1.__read(placeholder || [], 2), startPlaceholder = _l[0], endPlaceholder = _l[1];
        if (typeof placeholder === 'string') {
            startPlaceholder = placeholder;
            endPlaceholder = placeholder;
        }
        var trigger = (react_1.default.createElement("div", { className: triggerCls },
            react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedInputProps, { readOnly: true, role: "combobox", "aria-expanded": state.visible, label: label, placeholder: startPlaceholder || locale.startPlaceholder, value: startTriggerValue, hasBorder: false, className: "".concat(prefix, "range-picker-trigger-input"), onFocus: function () { return _this.onFocusDateInput('startValue'); } })),
            react_1.default.createElement("span", { className: "".concat(prefix, "range-picker-trigger-separator") }, "-"),
            react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedInputProps, { readOnly: true, role: "combobox", "aria-expanded": state.visible, placeholder: endPlaceholder || locale.endPlaceholder, value: endTriggerValue, hasBorder: false, className: "".concat(prefix, "range-picker-trigger-input"), onFocus: function () { return _this.onFocusDateInput('endValue'); }, 
                // @ts-expect-error allowClear 应先进行 boolean 转换
                hasClear: allowClear, hint: react_1.default.createElement(icon_1.default, { type: "calendar", className: "".concat(prefix, "date-picker-symbol-calendar-icon") }) }))));
        var PopupComponent = popupComponent ? popupComponent : Popup;
        return (react_1.default.createElement("div", tslib_1.__assign({}, util_1.obj.pickOthers(RangePicker.propTypes, others), { className: classNames }),
            react_1.default.createElement(PopupComponent, tslib_1.__assign({ align: popupAlign }, popupProps, { followTrigger: followTrigger, disabled: disabled, visible: state.visible, onVisibleChange: this.onVisibleChange, beforeOpen: util_1.func.makeChain(this.enableAutoSwitchDateInput, popupProps && popupProps.beforeOpen), afterOpen: util_1.func.makeChain(this.afterOpen, popupProps && popupProps.afterOpen), triggerType: popupTriggerType, container: popupContainer, style: popupStyle, className: popupClassName, trigger: trigger }), popupContent ? (popupContent) : (react_1.default.createElement("div", { dir: others.dir, className: panelBodyClassName },
                react_1.default.createElement("div", { className: "".concat(prefix, "range-picker-panel-header") },
                    react_1.default.createElement("div", { className: "".concat(prefix, "range-picker-panel-input") },
                        startDateInput,
                        startTimeInput,
                        react_1.default.createElement("span", { className: "".concat(prefix, "range-picker-panel-input-separator") }, "-"),
                        endDateInput,
                        endTimeInput)),
                panelBody,
                panelFooter)))));
    };
    RangePicker.displayName = 'RangePicker';
    RangePicker.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, type: prop_types_1.default.oneOf(['date', 'month', 'year']), defaultVisibleMonth: prop_types_1.default.func, onVisibleMonthChange: prop_types_1.default.func, value: prop_types_1.default.array, defaultValue: prop_types_1.default.array, format: prop_types_1.default.string, showTime: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.bool]), resetTime: prop_types_1.default.bool, disabledDate: prop_types_1.default.func, footerRender: prop_types_1.default.func, onChange: prop_types_1.default.func, onOk: prop_types_1.default.func, label: prop_types_1.default.node, state: prop_types_1.default.oneOf(['error', 'loading', 'success']), size: prop_types_1.default.oneOf(['small', 'medium', 'large']), disabled: prop_types_1.default.bool, hasClear: prop_types_1.default.bool, visible: prop_types_1.default.bool, defaultVisible: prop_types_1.default.bool, onVisibleChange: prop_types_1.default.func, popupTriggerType: prop_types_1.default.oneOf(['click', 'hover']), popupAlign: prop_types_1.default.string, popupContainer: prop_types_1.default.any, popupStyle: prop_types_1.default.object, popupClassName: prop_types_1.default.string, popupProps: prop_types_1.default.object, followTrigger: prop_types_1.default.bool, inputProps: prop_types_1.default.object, dateCellRender: prop_types_1.default.func, monthCellRender: prop_types_1.default.func, yearCellRender: prop_types_1.default.func, startDateInputAriaLabel: prop_types_1.default.string, startTimeInputAriaLabel: prop_types_1.default.string, endDateInputAriaLabel: prop_types_1.default.string, endTimeInputAriaLabel: prop_types_1.default.string, isPreview: prop_types_1.default.bool, renderPreview: prop_types_1.default.func, disableChangeMode: prop_types_1.default.bool, yearRange: prop_types_1.default.arrayOf(prop_types_1.default.number), ranges: prop_types_1.default.object, locale: prop_types_1.default.object, className: prop_types_1.default.string, name: prop_types_1.default.string, popupComponent: prop_types_1.default.elementType, popupContent: prop_types_1.default.node, placeholder: prop_types_1.default.oneOfType([prop_types_1.default.arrayOf(prop_types_1.default.string), prop_types_1.default.string]) });
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
        locale: zh_cn_1.default.DatePicker,
        disableChangeMode: false,
        onChange: util_1.func.noop,
        onOk: util_1.func.noop,
        onVisibleChange: util_1.func.noop,
    };
    return RangePicker;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(RangePicker);

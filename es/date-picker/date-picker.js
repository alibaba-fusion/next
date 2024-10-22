import { __assign, __extends, __rest } from "tslib";
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
import TimePickerPanel from '../time-picker/panel';
import nextLocale from '../locale/zh-cn';
import { func, obj } from '../util';
import { PANEL, resetValueTime, checkDateValue, formatDateValue, getDateTimeFormat, onDateKeydown, onTimeKeydown, } from './util';
import PanelFooter from './module/panel-footer';
var Popup = Overlay.Popup;
/**
 * DatePicker
 */
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.onValueChange = function (newValue, handler) {
            if (handler === void 0) { handler = 'onChange'; }
            var ret = _this.state.inputAsString && newValue
                ? newValue.format(_this.state.dateTimeFormat)
                : newValue;
            _this.props[handler](ret);
        };
        _this.onSelectCalendarPanel = function (value) {
            var _a = _this.props, showTime = _a.showTime, resetTime = _a.resetTime;
            var prevValue = _this.state.value;
            var newValue = value;
            if (showTime) {
                if (!prevValue) {
                    // 第一次选择日期值时，如果设置了默认时间，则使用该默认时间
                    if (showTime.defaultValue) {
                        var defaultTimeValue = formatDateValue(showTime.defaultValue, _this.state.timeFormat);
                        newValue = resetValueTime(value, defaultTimeValue);
                    }
                }
                else if (!resetTime) {
                    // 非第一选择日期，如果开启了 resetTime 属性，则记住之前选择的时间值
                    newValue = resetValueTime(value, prevValue);
                }
            }
            _this.handleChange(newValue, prevValue, { inputing: false });
            if (!showTime) {
                _this.onVisibleChange(false, 'calendarSelect');
            }
        };
        _this.onSelectTimePanel = function (value) {
            _this.handleChange(value, _this.state.value, { inputing: false });
        };
        _this.clearValue = function () {
            _this.setState({
                dateInputStr: '',
                timeInputStr: '',
            });
            _this.handleChange(null, _this.state.value, { inputing: false });
        };
        _this.onDateInputChange = function (inputStr, e, eventType) {
            if (eventType === 'clear' || !inputStr) {
                e.stopPropagation();
                _this.clearValue();
            }
            else {
                _this.setState({
                    dateInputStr: inputStr,
                    inputing: 'date',
                });
            }
        };
        _this.onTimeInputChange = function (inputStr) {
            _this.setState({
                timeInputStr: inputStr,
                inputing: 'time',
            });
        };
        _this.onDateInputBlur = function () {
            var _a = _this.state, dateInputStr = _a.dateInputStr, value = _a.value, format = _a.format;
            var resetTime = _this.props.resetTime;
            if (dateInputStr) {
                var disabledDate = _this.props.disabledDate;
                var parsed = moment(dateInputStr, format, true);
                _this.setState({
                    dateInputStr: '',
                    inputing: false,
                });
                if (parsed.isValid() && !disabledDate(parsed, 'date')) {
                    parsed = resetTime ? parsed : resetValueTime(parsed, value);
                    _this.handleChange(parsed, value);
                }
            }
        };
        _this.onTimeInputBlur = function () {
            var _a = _this.state, value = _a.value, timeInputStr = _a.timeInputStr, timeFormat = _a.timeFormat;
            if (timeInputStr) {
                var parsed = moment(timeInputStr, timeFormat, true);
                _this.setState({
                    timeInputStr: '',
                    inputing: false,
                });
                if (parsed.isValid()) {
                    var hour = parsed.hour();
                    var minute = parsed.minute();
                    var second = parsed.second();
                    // @ts-expect-error 没有考虑 value 为 null 的情况
                    var newValue = value.clone().hour(hour).minute(minute).second(second);
                    _this.handleChange(newValue, _this.state.value);
                }
            }
        };
        _this.onKeyDown = function (e) {
            var format = _this.props.format;
            var _a = _this.state, dateInputStr = _a.dateInputStr, value = _a.value;
            var dateStr = onDateKeydown(e, { format: format, dateInputStr: dateInputStr, value: value }, 'day');
            if (!dateStr)
                return;
            _this.onDateInputChange(dateStr, e);
        };
        _this.onTimeKeyDown = function (e) {
            var showTime = _this.props.showTime;
            var _a = _this.state, timeInputStr = _a.timeInputStr, timeFormat = _a.timeFormat, value = _a.value;
            var _b = typeof showTime === 'object' ? showTime : {}, disabledMinutes = _b.disabledMinutes, disabledSeconds = _b.disabledSeconds, _c = _b.hourStep, hourStep = _c === void 0 ? 1 : _c, _d = _b.minuteStep, minuteStep = _d === void 0 ? 1 : _d, _e = _b.secondStep, secondStep = _e === void 0 ? 1 : _e;
            var unit = 'second';
            if (disabledSeconds) {
                unit = disabledMinutes ? 'hour' : 'minute';
            }
            var timeStr = onTimeKeydown(e, {
                format: timeFormat,
                timeInputStr: timeInputStr,
                value: value,
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
        _this.handleChange = function (newValue, prevValue, others) {
            if (others === void 0) { others = {}; }
            if (!('value' in _this.props)) {
                _this.setState(__assign({ value: newValue }, others));
            }
            else {
                _this.setState(__assign({}, others));
            }
            var newValueOf = newValue ? newValue.valueOf() : null;
            var preValueOf = prevValue ? prevValue.valueOf() : null;
            if (newValueOf !== preValueOf) {
                _this.onValueChange(newValue);
            }
        };
        _this.onFoucsDateInput = function () {
            if (_this.state.panel !== PANEL.DATE) {
                _this.setState({
                    panel: PANEL.DATE,
                });
            }
        };
        _this.onFoucsTimeInput = function () {
            if (_this.state.panel !== PANEL.TIME) {
                _this.setState({
                    panel: PANEL.TIME,
                });
            }
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
            _this.setState({
                panel: panel,
            });
        };
        _this.onOk = function (value) {
            _this.onVisibleChange(false, 'okBtnClick');
            _this.onValueChange(value || _this.state.value, 'onOk');
        };
        var _a = getDateTimeFormat(props.format, props.showTime), format = _a.format, timeFormat = _a.timeFormat, dateTimeFormat = _a.dateTimeFormat;
        _this.state = {
            value: formatDateValue(props.defaultValue, dateTimeFormat),
            dateInputStr: '',
            timeInputStr: '',
            inputing: false, // 当前是否处于输入状态
            visible: props.defaultVisible,
            inputAsString: typeof props.defaultValue === 'string',
            panel: PANEL.DATE,
            format: format,
            timeFormat: timeFormat,
            dateTimeFormat: dateTimeFormat,
        };
        return _this;
    }
    DatePicker.getDerivedStateFromProps = function (props) {
        var formatStates = getDateTimeFormat(props.format, props.showTime);
        var states = {};
        if ('value' in props) {
            states.value = formatDateValue(props.value, formatStates.dateTimeFormat);
            if (typeof props.value === 'string') {
                states.inputAsString = true;
            }
            if (moment.isMoment(props.value)) {
                states.inputAsString = false;
            }
        }
        if ('visible' in props) {
            states.visible = props.visible;
        }
        return __assign(__assign({}, states), formatStates);
    };
    DatePicker.prototype.renderPreview = function (others) {
        var _a = this.props, prefix = _a.prefix, className = _a.className, renderPreview = _a.renderPreview;
        var _b = this.state, value = _b.value, dateTimeFormat = _b.dateTimeFormat;
        var previewCls = classnames(className, "".concat(prefix, "form-preview"));
        var label = value ? value.format(dateTimeFormat) : '';
        if (typeof renderPreview === 'function') {
            return (React.createElement("div", __assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
        }
        return (React.createElement("p", __assign({}, others, { className: previewCls }), label));
    };
    DatePicker.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f;
        var _g = this.props, prefix = _g.prefix, rtl = _g.rtl, locale = _g.locale, label = _g.label, state = _g.state, defaultVisibleMonth = _g.defaultVisibleMonth, onVisibleMonthChange = _g.onVisibleMonthChange, showTime = _g.showTime, disabledDate = _g.disabledDate, footerRender = _g.footerRender, placeholder = _g.placeholder, size = _g.size, disabled = _g.disabled, hasClear = _g.hasClear, popupTriggerType = _g.popupTriggerType, popupAlign = _g.popupAlign, popupContainer = _g.popupContainer, popupStyle = _g.popupStyle, popupClassName = _g.popupClassName, popupProps = _g.popupProps, popupComponent = _g.popupComponent, popupContent = _g.popupContent, followTrigger = _g.followTrigger, className = _g.className, inputProps = _g.inputProps, dateCellRender = _g.dateCellRender, monthCellRender = _g.monthCellRender, yearCellRender = _g.yearCellRender, dateInputAriaLabel = _g.dateInputAriaLabel, timeInputAriaLabel = _g.timeInputAriaLabel, isPreview = _g.isPreview, disableChangeMode = _g.disableChangeMode, yearRange = _g.yearRange, others = __rest(_g, ["prefix", "rtl", "locale", "label", "state", "defaultVisibleMonth", "onVisibleMonthChange", "showTime", "disabledDate", "footerRender", "placeholder", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "inputProps", "dateCellRender", "monthCellRender", "yearCellRender", "dateInputAriaLabel", "timeInputAriaLabel", "isPreview", "disableChangeMode", "yearRange"]);
        var _h = this.state, visible = _h.visible, value = _h.value, dateInputStr = _h.dateInputStr, timeInputStr = _h.timeInputStr, panel = _h.panel, inputing = _h.inputing, format = _h.format, timeFormat = _h.timeFormat, dateTimeFormat = _h.dateTimeFormat;
        var datePickerCls = classnames((_a = {},
            _a["".concat(prefix, "date-picker")] = true,
            _a), className);
        var triggerInputCls = classnames((_b = {},
            _b["".concat(prefix, "date-picker-input")] = true,
            _b["".concat(prefix, "error")] = false,
            _b));
        var panelBodyClassName = classnames((_c = {},
            _c["".concat(prefix, "date-picker-body")] = true,
            _c["".concat(prefix, "date-picker-body-show-time")] = showTime,
            _c));
        var panelDateInputCls = classnames((_d = {},
            _d["".concat(prefix, "date-picker-panel-input")] = true,
            _d["".concat(prefix, "focus")] = panel === PANEL.DATE,
            _d));
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview) {
            // @ts-expect-error 应该使用 propTypes
            return this.renderPreview(obj.pickOthers(others, DatePicker.PropTypes));
        }
        var sharedInputProps = __assign(__assign({}, inputProps), { size: size, disabled: disabled, onChange: this.onDateInputChange, onBlur: this.onDateInputBlur, onPressEnter: this.onDateInputBlur, onKeyDown: this.onKeyDown });
        var dateInputValue = inputing === 'date' ? dateInputStr : (value && value.format(format)) || '';
        var triggerInputValue = dateInputValue;
        var dateInput = (React.createElement(Input, __assign({}, sharedInputProps, { "aria-label": dateInputAriaLabel, value: dateInputValue, onFocus: this.onFoucsDateInput, placeholder: format, className: panelDateInputCls })));
        var datePanel = (React.createElement(Calendar, { shape: "panel", value: value, format: format, dateCellRender: dateCellRender, monthCellRender: monthCellRender, yearCellRender: yearCellRender, onSelect: this.onSelectCalendarPanel, defaultVisibleMonth: defaultVisibleMonth, onVisibleMonthChange: onVisibleMonthChange, disabledDate: disabledDate, disableChangeMode: disableChangeMode, yearRange: yearRange }));
        var panelFooter = footerRender();
        var timeInput = null;
        var timePanel = null;
        if (showTime) {
            var timeInputValue = inputing === 'time' ? timeInputStr : (value && value.format(timeFormat)) || '';
            triggerInputValue = (value && value.format(dateTimeFormat)) || '';
            var timePanelProps = typeof showTime === 'object' ? showTime : {};
            var showSecond = timeFormat.indexOf('s') > -1;
            var showMinute = timeFormat.indexOf('m') > -1;
            var panelTimeInputCls = classnames((_e = {},
                _e["".concat(prefix, "date-picker-panel-input")] = true,
                _e["".concat(prefix, "focus")] = panel === PANEL.TIME,
                _e));
            timeInput = (React.createElement(Input, { placeholder: timeFormat, value: timeInputValue, size: size, "aria-label": timeInputAriaLabel, disabled: disabled || !value, onChange: this.onTimeInputChange, onFocus: this.onFoucsTimeInput, onBlur: this.onTimeInputBlur, onPressEnter: this.onTimeInputBlur, onKeyDown: this.onTimeKeyDown, className: panelTimeInputCls }));
            timePanel = (React.createElement(TimePickerPanel, __assign({}, timePanelProps, { locale: locale, className: "".concat(prefix, "date-picker-panel-time"), showSecond: showSecond, showMinute: showMinute, disabled: disabled, prefix: prefix, value: value, onSelect: this.onSelectTimePanel })));
            panelFooter = panelFooter || (React.createElement(PanelFooter, { prefix: prefix, locale: locale, value: value, panel: panel, onPanelChange: this.changePanel, onOk: this.onOk }));
        }
        var panelBody = (_f = {},
            _f[PANEL.DATE] = datePanel,
            _f[PANEL.TIME] = timePanel,
            _f)[panel];
        var allowClear = value && hasClear;
        var trigger = (React.createElement("div", { className: "".concat(prefix, "date-picker-trigger") },
            React.createElement(Input, __assign({}, sharedInputProps, { label: label, state: state, value: triggerInputValue, role: "combobox", "aria-expanded": visible, readOnly: true, placeholder: placeholder || (showTime ? locale.datetimePlaceholder : locale.placeholder), hint: React.createElement(Icon, { type: "calendar", className: "".concat(prefix, "date-picker-symbol-calendar-icon") }), 
                // @ts-expect-error allowClear 应该先做 boolean 化处理
                hasClear: allowClear, className: triggerInputCls }))));
        var PopupComponent = popupComponent ? popupComponent : Popup;
        return (React.createElement("div", __assign({}, obj.pickOthers(DatePicker.propTypes, others), { className: datePickerCls }),
            React.createElement(PopupComponent, __assign({ autoFocus: true, align: popupAlign }, popupProps, { followTrigger: followTrigger, disabled: disabled, visible: visible, onVisibleChange: this.onVisibleChange, triggerType: popupTriggerType, container: popupContainer, style: popupStyle, className: popupClassName, trigger: trigger }), popupContent ? (popupContent) : (React.createElement("div", { dir: others.dir, className: panelBodyClassName },
                React.createElement("div", { className: "".concat(prefix, "date-picker-panel-header") },
                    dateInput,
                    timeInput),
                panelBody,
                panelFooter)))));
    };
    DatePicker.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, label: PropTypes.node, state: PropTypes.oneOf(['success', 'loading', 'error']), placeholder: PropTypes.string, defaultVisibleMonth: PropTypes.func, onVisibleMonthChange: PropTypes.func, value: checkDateValue, defaultValue: checkDateValue, format: PropTypes.string, showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]), resetTime: PropTypes.bool, disabledDate: PropTypes.func, footerRender: PropTypes.func, onChange: PropTypes.func, onOk: PropTypes.func, size: PropTypes.oneOf(['small', 'medium', 'large']), disabled: PropTypes.bool, hasClear: PropTypes.bool, visible: PropTypes.bool, defaultVisible: PropTypes.bool, onVisibleChange: PropTypes.func, popupTriggerType: PropTypes.oneOf(['click', 'hover']), popupAlign: PropTypes.string, popupContainer: PropTypes.any, popupStyle: PropTypes.object, popupClassName: PropTypes.string, popupProps: PropTypes.object, followTrigger: PropTypes.bool, inputProps: PropTypes.object, dateCellRender: PropTypes.func, monthCellRender: PropTypes.func, yearCellRender: PropTypes.func, dateInputAriaLabel: PropTypes.string, timeInputAriaLabel: PropTypes.string, isPreview: PropTypes.bool, renderPreview: PropTypes.func, locale: PropTypes.object, className: PropTypes.string, name: PropTypes.string, popupComponent: PropTypes.elementType, popupContent: PropTypes.node, disableChangeMode: PropTypes.bool, yearRange: PropTypes.arrayOf(PropTypes.number) });
    DatePicker.defaultProps = {
        prefix: 'next-',
        rtl: false,
        format: 'YYYY-MM-DD',
        size: 'medium',
        showTime: false,
        resetTime: false,
        disabledDate: function () { return false; },
        footerRender: function () { return null; },
        hasClear: true,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        locale: nextLocale.DatePicker,
        defaultVisible: false,
        onChange: func.noop,
        onVisibleChange: func.noop,
        onOk: func.noop,
    };
    DatePicker.displayName = 'DatePicker';
    return DatePicker;
}(Component));
export default polyfill(DatePicker);

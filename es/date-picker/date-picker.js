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
    function DatePicker(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.onValueChange = function (newValue, handler) {
            if (handler === void 0) { handler = 'onChange'; }
            var ret = _this.state.inputAsString && newValue ? newValue.format(_this.state.dateTimeFormat) : newValue;
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
                    var newValue = value
                        .clone()
                        .hour(hour)
                        .minute(minute)
                        .second(second);
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
            _this.onDateInputChange(dateStr);
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
            states.inputAsString = typeof props.value === 'string';
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
            React.createElement(Input, __assign({}, sharedInputProps, { label: label, state: state, value: triggerInputValue, role: "combobox", "aria-expanded": visible, readOnly: true, placeholder: placeholder || (showTime ? locale.datetimePlaceholder : locale.placeholder), hint: React.createElement(Icon, { type: "calendar", className: "".concat(prefix, "date-picker-symbol-calendar-icon") }), hasClear: allowClear, className: triggerInputCls }))));
        var PopupComponent = popupComponent ? popupComponent : Popup;
        return (React.createElement("div", __assign({}, obj.pickOthers(DatePicker.propTypes, others), { className: datePickerCls }),
            React.createElement(PopupComponent, __assign({ autoFocus: true, align: popupAlign }, popupProps, { followTrigger: followTrigger, disabled: disabled, visible: visible, onVisibleChange: this.onVisibleChange, triggerType: popupTriggerType, container: popupContainer, style: popupStyle, className: popupClassName, trigger: trigger }), popupContent ? (popupContent) : (React.createElement("div", { dir: others.dir, className: panelBodyClassName },
                React.createElement("div", { className: "".concat(prefix, "date-picker-panel-header") },
                    dateInput,
                    timeInput),
                panelBody,
                panelFooter)))));
    };
    DatePicker.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, 
        /**
         * 输入框内置标签
         */
        label: PropTypes.node, 
        /**
         * 输入框状态
         */
        state: PropTypes.oneOf(['success', 'loading', 'error']), 
        /**
         * 输入提示
         */
        placeholder: PropTypes.string, 
        /**
         * 默认展现的月
         * @return {MomentObject} 返回包含指定月份的 moment 对象实例
         */
        defaultVisibleMonth: PropTypes.func, onVisibleMonthChange: PropTypes.func, 
        /**
         * 日期值（受控）moment 对象
         */
        value: checkDateValue, 
        /**
         * 初始日期值，moment 对象
         */
        defaultValue: checkDateValue, 
        /**
         * 日期值的格式（用于限定用户输入和展示）
         */
        format: PropTypes.string, 
        /**
         * 是否使用时间控件，传入 TimePicker 的属性 { defaultValue, format, ... }
         */
        showTime: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]), 
        /**
         * 每次选择日期时是否重置时间（仅在 showTime 开启时有效）
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
         * 日期值改变时的回调
         * @param {MomentObject|String} value 日期值
         */
        onChange: PropTypes.func, 
        /**
         * 点击确认按钮时的回调
         * @param {MomentObject|String} value 日期值
         */
        onOk: PropTypes.func, 
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
         * @param {String} type 触发弹层显示和隐藏的来源 calendarSelect 表示由日期表盘的选择触发； okBtnClick 表示由确认按钮触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
         */
        onVisibleChange: PropTypes.func, 
        /**
         * 弹层触发方式
         */
        popupTriggerType: PropTypes.oneOf(['click', 'hover']), 
        /**
         * 弹层对齐方式,具体含义见 OverLay文档
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
         * 自定义日期渲染函数
         * @param {Moment} calendarDate 日期值（moment对象）
         * @returns {ReactNode}
         */
        dateCellRender: PropTypes.func, 
        /**
         * 自定义月份渲染函数
         * @param {Moment} calendarDate 对应 Calendar 返回的自定义日期对象
         * @returns {ReactNode}
         */
        monthCellRender: PropTypes.func, 
        /**
         * 自定义年份渲染函数
         * @param {Moment} calendarDate 对应 Calendar 返回的自定义日期对象
         * @returns {ReactNode}
         */
        yearCellRender: PropTypes.func, 
        /**
         * 日期输入框的 aria-label 属性
         */
        dateInputAriaLabel: PropTypes.string, 
        /**
         * 时间输入框的 aria-label 属性
         */
        timeInputAriaLabel: PropTypes.string, 
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool, 
        /**
         * 预览态模式下渲染的内容
         * @param {MomentObject} value 日期
         */
        renderPreview: PropTypes.func, locale: PropTypes.object, className: PropTypes.string, name: PropTypes.string, 
        /**
         * 自定义弹层组件
         */
        popupComponent: PropTypes.elementType, 
        /**
         * 自定义弹层内容
         */
        popupContent: PropTypes.node, 
        /**
         * 禁用日期选择器的日期模式切换
         */
        disableChangeMode: PropTypes.bool, yearRange: PropTypes.arrayOf(PropTypes.number) });
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
    return DatePicker;
}(Component));
export default polyfill(DatePicker);

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
var panel_1 = tslib_1.__importDefault(require("../time-picker/panel"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var util_2 = require("./util");
var panel_footer_1 = tslib_1.__importDefault(require("./module/panel-footer"));
var Popup = overlay_1.default.Popup;
/**
 * DatePicker
 */
var DatePicker = /** @class */ (function (_super) {
    tslib_1.__extends(DatePicker, _super);
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
                        var defaultTimeValue = (0, util_2.formatDateValue)(showTime.defaultValue, _this.state.timeFormat);
                        newValue = (0, util_2.resetValueTime)(value, defaultTimeValue);
                    }
                }
                else if (!resetTime) {
                    // 非第一选择日期，如果开启了 resetTime 属性，则记住之前选择的时间值
                    newValue = (0, util_2.resetValueTime)(value, prevValue);
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
                var parsed = (0, moment_1.default)(dateInputStr, format, true);
                _this.setState({
                    dateInputStr: '',
                    inputing: false,
                });
                if (parsed.isValid() && !disabledDate(parsed, 'date')) {
                    parsed = resetTime ? parsed : (0, util_2.resetValueTime)(parsed, value);
                    _this.handleChange(parsed, value);
                }
            }
        };
        _this.onTimeInputBlur = function () {
            var _a = _this.state, value = _a.value, timeInputStr = _a.timeInputStr, timeFormat = _a.timeFormat;
            if (timeInputStr) {
                var parsed = (0, moment_1.default)(timeInputStr, timeFormat, true);
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
            var dateStr = (0, util_2.onDateKeydown)(e, { format: format, dateInputStr: dateInputStr, value: value }, 'day');
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
            var timeStr = (0, util_2.onTimeKeydown)(e, {
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
                _this.setState(tslib_1.__assign({ value: newValue }, others));
            }
            else {
                _this.setState(tslib_1.__assign({}, others));
            }
            var newValueOf = newValue ? newValue.valueOf() : null;
            var preValueOf = prevValue ? prevValue.valueOf() : null;
            if (newValueOf !== preValueOf) {
                _this.onValueChange(newValue);
            }
        };
        _this.onFoucsDateInput = function () {
            if (_this.state.panel !== util_2.PANEL.DATE) {
                _this.setState({
                    panel: util_2.PANEL.DATE,
                });
            }
        };
        _this.onFoucsTimeInput = function () {
            if (_this.state.panel !== util_2.PANEL.TIME) {
                _this.setState({
                    panel: util_2.PANEL.TIME,
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
        var _a = (0, util_2.getDateTimeFormat)(props.format, props.showTime), format = _a.format, timeFormat = _a.timeFormat, dateTimeFormat = _a.dateTimeFormat;
        _this.state = {
            value: (0, util_2.formatDateValue)(props.defaultValue, dateTimeFormat),
            dateInputStr: '',
            timeInputStr: '',
            inputing: false, // 当前是否处于输入状态
            visible: props.defaultVisible,
            inputAsString: typeof props.defaultValue === 'string',
            panel: util_2.PANEL.DATE,
            format: format,
            timeFormat: timeFormat,
            dateTimeFormat: dateTimeFormat,
        };
        return _this;
    }
    DatePicker.getDerivedStateFromProps = function (props) {
        var formatStates = (0, util_2.getDateTimeFormat)(props.format, props.showTime);
        var states = {};
        if ('value' in props) {
            states.value = (0, util_2.formatDateValue)(props.value, formatStates.dateTimeFormat);
            if (typeof props.value === 'string') {
                states.inputAsString = true;
            }
            if (moment_1.default.isMoment(props.value)) {
                states.inputAsString = false;
            }
        }
        if ('visible' in props) {
            states.visible = props.visible;
        }
        return tslib_1.__assign(tslib_1.__assign({}, states), formatStates);
    };
    DatePicker.prototype.renderPreview = function (others) {
        var _a = this.props, prefix = _a.prefix, className = _a.className, renderPreview = _a.renderPreview;
        var _b = this.state, value = _b.value, dateTimeFormat = _b.dateTimeFormat;
        var previewCls = (0, classnames_1.default)(className, "".concat(prefix, "form-preview"));
        var label = value ? value.format(dateTimeFormat) : '';
        if (typeof renderPreview === 'function') {
            return (react_1.default.createElement("div", tslib_1.__assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
        }
        return (react_1.default.createElement("p", tslib_1.__assign({}, others, { className: previewCls }), label));
    };
    DatePicker.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f;
        var _g = this.props, prefix = _g.prefix, rtl = _g.rtl, locale = _g.locale, label = _g.label, state = _g.state, defaultVisibleMonth = _g.defaultVisibleMonth, onVisibleMonthChange = _g.onVisibleMonthChange, showTime = _g.showTime, disabledDate = _g.disabledDate, footerRender = _g.footerRender, placeholder = _g.placeholder, size = _g.size, disabled = _g.disabled, hasClear = _g.hasClear, popupTriggerType = _g.popupTriggerType, popupAlign = _g.popupAlign, popupContainer = _g.popupContainer, popupStyle = _g.popupStyle, popupClassName = _g.popupClassName, popupProps = _g.popupProps, popupComponent = _g.popupComponent, popupContent = _g.popupContent, followTrigger = _g.followTrigger, className = _g.className, inputProps = _g.inputProps, dateCellRender = _g.dateCellRender, monthCellRender = _g.monthCellRender, yearCellRender = _g.yearCellRender, dateInputAriaLabel = _g.dateInputAriaLabel, timeInputAriaLabel = _g.timeInputAriaLabel, isPreview = _g.isPreview, disableChangeMode = _g.disableChangeMode, yearRange = _g.yearRange, others = tslib_1.__rest(_g, ["prefix", "rtl", "locale", "label", "state", "defaultVisibleMonth", "onVisibleMonthChange", "showTime", "disabledDate", "footerRender", "placeholder", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "inputProps", "dateCellRender", "monthCellRender", "yearCellRender", "dateInputAriaLabel", "timeInputAriaLabel", "isPreview", "disableChangeMode", "yearRange"]);
        var _h = this.state, visible = _h.visible, value = _h.value, dateInputStr = _h.dateInputStr, timeInputStr = _h.timeInputStr, panel = _h.panel, inputing = _h.inputing, format = _h.format, timeFormat = _h.timeFormat, dateTimeFormat = _h.dateTimeFormat;
        var datePickerCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "date-picker")] = true,
            _a), className);
        var triggerInputCls = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "date-picker-input")] = true,
            _b["".concat(prefix, "error")] = false,
            _b));
        var panelBodyClassName = (0, classnames_1.default)((_c = {},
            _c["".concat(prefix, "date-picker-body")] = true,
            _c["".concat(prefix, "date-picker-body-show-time")] = showTime,
            _c));
        var panelDateInputCls = (0, classnames_1.default)((_d = {},
            _d["".concat(prefix, "date-picker-panel-input")] = true,
            _d["".concat(prefix, "focus")] = panel === util_2.PANEL.DATE,
            _d));
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview) {
            // @ts-expect-error 应该使用 propTypes
            return this.renderPreview(util_1.obj.pickOthers(others, DatePicker.PropTypes));
        }
        var sharedInputProps = tslib_1.__assign(tslib_1.__assign({}, inputProps), { size: size, disabled: disabled, onChange: this.onDateInputChange, onBlur: this.onDateInputBlur, onPressEnter: this.onDateInputBlur, onKeyDown: this.onKeyDown });
        var dateInputValue = inputing === 'date' ? dateInputStr : (value && value.format(format)) || '';
        var triggerInputValue = dateInputValue;
        var dateInput = (react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedInputProps, { "aria-label": dateInputAriaLabel, value: dateInputValue, onFocus: this.onFoucsDateInput, placeholder: format, className: panelDateInputCls })));
        var datePanel = (react_1.default.createElement(calendar_1.default, { shape: "panel", value: value, format: format, dateCellRender: dateCellRender, monthCellRender: monthCellRender, yearCellRender: yearCellRender, onSelect: this.onSelectCalendarPanel, defaultVisibleMonth: defaultVisibleMonth, onVisibleMonthChange: onVisibleMonthChange, disabledDate: disabledDate, disableChangeMode: disableChangeMode, yearRange: yearRange }));
        var panelFooter = footerRender();
        var timeInput = null;
        var timePanel = null;
        if (showTime) {
            var timeInputValue = inputing === 'time' ? timeInputStr : (value && value.format(timeFormat)) || '';
            triggerInputValue = (value && value.format(dateTimeFormat)) || '';
            var timePanelProps = typeof showTime === 'object' ? showTime : {};
            var showSecond = timeFormat.indexOf('s') > -1;
            var showMinute = timeFormat.indexOf('m') > -1;
            var panelTimeInputCls = (0, classnames_1.default)((_e = {},
                _e["".concat(prefix, "date-picker-panel-input")] = true,
                _e["".concat(prefix, "focus")] = panel === util_2.PANEL.TIME,
                _e));
            timeInput = (react_1.default.createElement(input_1.default, { placeholder: timeFormat, value: timeInputValue, size: size, "aria-label": timeInputAriaLabel, disabled: disabled || !value, onChange: this.onTimeInputChange, onFocus: this.onFoucsTimeInput, onBlur: this.onTimeInputBlur, onPressEnter: this.onTimeInputBlur, onKeyDown: this.onTimeKeyDown, className: panelTimeInputCls }));
            timePanel = (react_1.default.createElement(panel_1.default, tslib_1.__assign({}, timePanelProps, { locale: locale, className: "".concat(prefix, "date-picker-panel-time"), showSecond: showSecond, showMinute: showMinute, disabled: disabled, prefix: prefix, value: value, onSelect: this.onSelectTimePanel })));
            panelFooter = panelFooter || (react_1.default.createElement(panel_footer_1.default, { prefix: prefix, locale: locale, value: value, panel: panel, onPanelChange: this.changePanel, onOk: this.onOk }));
        }
        var panelBody = (_f = {},
            _f[util_2.PANEL.DATE] = datePanel,
            _f[util_2.PANEL.TIME] = timePanel,
            _f)[panel];
        var allowClear = value && hasClear;
        var trigger = (react_1.default.createElement("div", { className: "".concat(prefix, "date-picker-trigger") },
            react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedInputProps, { label: label, state: state, value: triggerInputValue, role: "combobox", "aria-expanded": visible, readOnly: true, placeholder: placeholder || (showTime ? locale.datetimePlaceholder : locale.placeholder), hint: react_1.default.createElement(icon_1.default, { type: "calendar", className: "".concat(prefix, "date-picker-symbol-calendar-icon") }), 
                // @ts-expect-error allowClear 应该先做 boolean 化处理
                hasClear: allowClear, className: triggerInputCls }))));
        var PopupComponent = popupComponent ? popupComponent : Popup;
        return (react_1.default.createElement("div", tslib_1.__assign({}, util_1.obj.pickOthers(DatePicker.propTypes, others), { className: datePickerCls }),
            react_1.default.createElement(PopupComponent, tslib_1.__assign({ autoFocus: true, align: popupAlign }, popupProps, { followTrigger: followTrigger, disabled: disabled, visible: visible, onVisibleChange: this.onVisibleChange, triggerType: popupTriggerType, container: popupContainer, style: popupStyle, className: popupClassName, trigger: trigger }), popupContent ? (popupContent) : (react_1.default.createElement("div", { dir: others.dir, className: panelBodyClassName },
                react_1.default.createElement("div", { className: "".concat(prefix, "date-picker-panel-header") },
                    dateInput,
                    timeInput),
                panelBody,
                panelFooter)))));
    };
    DatePicker.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, label: prop_types_1.default.node, state: prop_types_1.default.oneOf(['success', 'loading', 'error']), placeholder: prop_types_1.default.string, defaultVisibleMonth: prop_types_1.default.func, onVisibleMonthChange: prop_types_1.default.func, value: util_2.checkDateValue, defaultValue: util_2.checkDateValue, format: prop_types_1.default.string, showTime: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.bool]), resetTime: prop_types_1.default.bool, disabledDate: prop_types_1.default.func, footerRender: prop_types_1.default.func, onChange: prop_types_1.default.func, onOk: prop_types_1.default.func, size: prop_types_1.default.oneOf(['small', 'medium', 'large']), disabled: prop_types_1.default.bool, hasClear: prop_types_1.default.bool, visible: prop_types_1.default.bool, defaultVisible: prop_types_1.default.bool, onVisibleChange: prop_types_1.default.func, popupTriggerType: prop_types_1.default.oneOf(['click', 'hover']), popupAlign: prop_types_1.default.string, popupContainer: prop_types_1.default.any, popupStyle: prop_types_1.default.object, popupClassName: prop_types_1.default.string, popupProps: prop_types_1.default.object, followTrigger: prop_types_1.default.bool, inputProps: prop_types_1.default.object, dateCellRender: prop_types_1.default.func, monthCellRender: prop_types_1.default.func, yearCellRender: prop_types_1.default.func, dateInputAriaLabel: prop_types_1.default.string, timeInputAriaLabel: prop_types_1.default.string, isPreview: prop_types_1.default.bool, renderPreview: prop_types_1.default.func, locale: prop_types_1.default.object, className: prop_types_1.default.string, name: prop_types_1.default.string, popupComponent: prop_types_1.default.elementType, popupContent: prop_types_1.default.node, disableChangeMode: prop_types_1.default.bool, yearRange: prop_types_1.default.arrayOf(prop_types_1.default.number) });
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
        locale: zh_cn_1.default.DatePicker,
        defaultVisible: false,
        onChange: util_1.func.noop,
        onVisibleChange: util_1.func.noop,
        onOk: util_1.func.noop,
    };
    DatePicker.displayName = 'DatePicker';
    return DatePicker;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(DatePicker);

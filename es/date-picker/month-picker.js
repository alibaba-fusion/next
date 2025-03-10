import { __assign, __extends, __rest } from "tslib";
import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import moment from 'moment';
import ConfigProvider from '../config-provider';
import Overlay from '../overlay';
import Input from '../input';
import Icon from '../icon';
import Calendar from '../calendar';
import nextLocale from '../locale/zh-cn';
import { func, obj } from '../util';
import { checkDateValue, formatDateValue, onDateKeydown } from './util';
var Popup = Overlay.Popup;
/**
 * DatePicker.MonthPicker
 */
var MonthPicker = /** @class */ (function (_super) {
    __extends(MonthPicker, _super);
    function MonthPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.onValueChange = function (newValue) {
            var ret = _this.state.inputAsString && newValue ? newValue.format(_this.props.format) : newValue;
            _this.props.onChange(ret);
        };
        _this.onSelectCalendarPanel = function (value) {
            var prevSelectedMonth = _this.state.value;
            var selectedMonth = value.clone().date(1).hour(0).minute(0).second(0);
            _this.handleChange(selectedMonth, prevSelectedMonth, { inputing: false }, function () {
                _this.onVisibleChange(false, 'calendarSelect');
            });
        };
        _this.clearValue = function () {
            _this.setState({
                dateInputStr: '',
            });
            _this.handleChange(null, _this.state.value);
        };
        _this.onDateInputChange = function (inputStr, e, eventType) {
            if (eventType === 'clear' || !inputStr) {
                e.stopPropagation();
                _this.clearValue();
            }
            else {
                _this.setState({
                    dateInputStr: inputStr,
                    inputing: true,
                });
            }
        };
        _this.onDateInputBlur = function () {
            var dateInputStr = _this.state.dateInputStr;
            if (dateInputStr) {
                var _a = _this.props, disabledDate = _a.disabledDate, format = _a.format;
                var parsed = moment(dateInputStr, format, true);
                _this.setState({
                    dateInputStr: '',
                    inputing: false,
                });
                if (parsed.isValid() && !disabledDate(parsed, 'month')) {
                    _this.handleChange(parsed, _this.state.value);
                }
            }
        };
        _this.onKeyDown = function (e) {
            var format = _this.props.format;
            var _a = _this.state, dateInputStr = _a.dateInputStr, value = _a.value;
            var dateStr = onDateKeydown(e, { format: format, dateInputStr: dateInputStr, value: value }, 'month');
            if (!dateStr)
                return;
            // @ts-expect-error 应传入 e
            _this.onDateInputChange(dateStr);
        };
        _this.handleChange = function (newValue, prevValue, others, callback) {
            if (others === void 0) { others = {}; }
            if (!('value' in _this.props)) {
                _this.setState(__assign({ value: newValue }, others));
            }
            else {
                _this.setState(__assign({}, others));
            }
            var format = _this.props.format;
            var newValueOf = newValue ? newValue.format(format) : null;
            var preValueOf = prevValue ? prevValue.format(format) : null;
            if (newValueOf !== preValueOf) {
                _this.onValueChange(newValue);
                if (typeof callback === 'function') {
                    return callback();
                }
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
        _this.state = {
            value: formatDateValue(props.defaultValue, props.format),
            dateInputStr: '',
            inputing: false,
            visible: props.defaultVisible,
            inputAsString: typeof props.defaultValue === 'string',
        };
        return _this;
    }
    MonthPicker.getDerivedStateFromProps = function (props) {
        var states = {};
        if ('value' in props) {
            states.value = formatDateValue(props.value, props.format);
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
        return states;
    };
    MonthPicker.prototype.renderPreview = function (others) {
        var _a = this.props, prefix = _a.prefix, format = _a.format, className = _a.className, renderPreview = _a.renderPreview;
        var value = this.state.value;
        var previewCls = classnames(className, "".concat(prefix, "form-preview"));
        var label = value ? value.format(format) : '';
        if (typeof renderPreview === 'function') {
            return (React.createElement("div", __assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
        }
        return (React.createElement("p", __assign({}, others, { className: previewCls }), label));
    };
    MonthPicker.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, prefix = _d.prefix, rtl = _d.rtl, locale = _d.locale, label = _d.label, state = _d.state, format = _d.format, defaultVisibleYear = _d.defaultVisibleYear, disabledDate = _d.disabledDate, footerRender = _d.footerRender, placeholder = _d.placeholder, size = _d.size, disabled = _d.disabled, hasClear = _d.hasClear, popupTriggerType = _d.popupTriggerType, popupAlign = _d.popupAlign, popupContainer = _d.popupContainer, popupStyle = _d.popupStyle, popupClassName = _d.popupClassName, popupProps = _d.popupProps, popupComponent = _d.popupComponent, popupContent = _d.popupContent, followTrigger = _d.followTrigger, className = _d.className, inputProps = _d.inputProps, monthCellRender = _d.monthCellRender, yearCellRender = _d.yearCellRender, dateInputAriaLabel = _d.dateInputAriaLabel, isPreview = _d.isPreview, others = __rest(_d, ["prefix", "rtl", "locale", "label", "state", "format", "defaultVisibleYear", "disabledDate", "footerRender", "placeholder", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "inputProps", "monthCellRender", "yearCellRender", "dateInputAriaLabel", "isPreview"]);
        var _e = this.state, visible = _e.visible, value = _e.value, dateInputStr = _e.dateInputStr, inputing = _e.inputing;
        var monthPickerCls = classnames((_a = {},
            _a["".concat(prefix, "month-picker")] = true,
            _a), className);
        var triggerInputCls = classnames((_b = {},
            _b["".concat(prefix, "month-picker-input")] = true,
            _b["".concat(prefix, "error")] = false,
            _b));
        var panelBodyClassName = classnames((_c = {},
            _c["".concat(prefix, "month-picker-body")] = true,
            _c));
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview) {
            // @ts-expect-error 应是 propTypes
            return this.renderPreview(obj.pickOthers(others, MonthPicker.PropTypes));
        }
        var panelInputCls = "".concat(prefix, "month-picker-panel-input");
        var sharedInputProps = __assign(__assign({}, inputProps), { size: size, disabled: disabled, onChange: this.onDateInputChange, onBlur: this.onDateInputBlur, onPressEnter: this.onDateInputBlur, onKeyDown: this.onKeyDown });
        var dateInputValue = inputing ? dateInputStr : (value && value.format(format)) || '';
        var triggerInputValue = dateInputValue;
        var dateInput = (React.createElement(Input, __assign({}, sharedInputProps, { value: dateInputValue, "aria-label": dateInputAriaLabel, 
            // @ts-expect-error 没有 this.onFoucsDateInput
            onFocus: this.onFoucsDateInput, placeholder: format, className: panelInputCls })));
        var datePanel = (React.createElement(Calendar, { shape: "panel", modes: ['month', 'year'], monthCellRender: monthCellRender, yearCellRender: yearCellRender, value: value, onSelect: this.onSelectCalendarPanel, defaultVisibleMonth: defaultVisibleYear, disabledDate: disabledDate }));
        var panelBody = datePanel;
        var panelFooter = footerRender();
        var allowClear = value && hasClear;
        var trigger = (React.createElement("div", { className: "".concat(prefix, "month-picker-trigger") },
            React.createElement(Input, __assign({}, sharedInputProps, { label: label, state: state, readOnly: true, value: triggerInputValue, placeholder: placeholder || locale.monthPlaceholder, hint: React.createElement(Icon, { type: "calendar", className: "".concat(prefix, "date-picker-symbol-calendar-icon") }), 
                // @ts-expect-error allowClear 应该先做 boolean 化处理
                hasClear: allowClear, className: triggerInputCls }))));
        var PopupComponent = popupComponent ? popupComponent : Popup;
        return (React.createElement("div", __assign({}, obj.pickOthers(MonthPicker.propTypes, others), { className: monthPickerCls }),
            React.createElement(PopupComponent, __assign({ autoFocus: true, align: popupAlign }, popupProps, { followTrigger: followTrigger, role: "combobox", "aria-expanded": visible, disabled: disabled, visible: visible, onVisibleChange: this.onVisibleChange, triggerType: popupTriggerType, container: popupContainer, style: popupStyle, className: popupClassName, trigger: trigger }), popupContent ? (popupContent) : (React.createElement("div", { className: panelBodyClassName, dir: others.dir },
                React.createElement("div", { className: "".concat(prefix, "month-picker-panel-header") }, dateInput),
                panelBody,
                panelFooter)))));
    };
    MonthPicker.displayName = 'MonthPicker';
    MonthPicker.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, label: PropTypes.node, state: PropTypes.oneOf(['success', 'loading', 'error']), placeholder: PropTypes.string, defaultVisibleYear: PropTypes.func, value: checkDateValue, defaultValue: checkDateValue, format: PropTypes.string, disabledDate: PropTypes.func, footerRender: PropTypes.func, onChange: PropTypes.func, size: PropTypes.oneOf(['small', 'medium', 'large']), disabled: PropTypes.bool, hasClear: PropTypes.bool, visible: PropTypes.bool, defaultVisible: PropTypes.bool, onVisibleChange: PropTypes.func, popupTriggerType: PropTypes.oneOf(['click', 'hover']), popupAlign: PropTypes.string, popupContainer: PropTypes.any, popupStyle: PropTypes.object, popupClassName: PropTypes.string, popupProps: PropTypes.object, followTrigger: PropTypes.bool, inputProps: PropTypes.object, monthCellRender: PropTypes.func, yearCellRender: PropTypes.func, dateInputAriaLabel: PropTypes.string, isPreview: PropTypes.bool, renderPreview: PropTypes.func, locale: PropTypes.object, className: PropTypes.string, name: PropTypes.string, popupComponent: PropTypes.elementType, popupContent: PropTypes.node });
    MonthPicker.defaultProps = {
        prefix: 'next-',
        rtl: false,
        format: 'YYYY-MM',
        size: 'medium',
        disabledDate: function () { return false; },
        footerRender: function () { return null; },
        hasClear: true,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        locale: nextLocale.DatePicker,
        onChange: func.noop,
        onVisibleChange: func.noop,
    };
    return MonthPicker;
}(Component));
export default polyfill(MonthPicker);

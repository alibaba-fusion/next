import { __assign, __extends, __rest } from "tslib";
import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import { polyfill } from 'react-lifecycles-compat';
import Overlay from '../overlay';
import Input from '../input';
import Icon from '../icon';
import Calendar from '../calendar';
import ConfigProvider from '../config-provider';
import nextLocale from '../locale/zh-cn';
import { func, obj, KEYCODE } from '../util';
import { checkDateValue, formatDateValue } from './util';
var Popup = Overlay.Popup;
/**
 * DatePicker.WeekPicker
 */
var WeekPicker = /** @class */ (function (_super) {
    __extends(WeekPicker, _super);
    function WeekPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (newValue, prevValue) {
            if (!('value' in _this.props)) {
                _this.setState({
                    value: newValue,
                });
            }
            var newValueOf = newValue ? newValue.valueOf() : null;
            var preValueOf = prevValue ? prevValue.valueOf() : null;
            if (newValueOf !== preValueOf) {
                _this.props.onChange(newValue);
            }
        };
        _this.onDateInputChange = function (value, e, eventType) {
            if (eventType === 'clear' || !value) {
                e.stopPropagation();
                _this.handleChange(null, _this.state.value);
            }
        };
        _this.onKeyDown = function (e) {
            if ([KEYCODE.UP, KEYCODE.DOWN, KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) {
                return;
            }
            if ((e.altKey && [KEYCODE.PAGE_UP, KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) ||
                e.ctrlKey ||
                e.shiftKey) {
                return;
            }
            var date = _this.state.value;
            if (date && date.isValid()) {
                var stepUnit = e.altKey ? 'year' : 'month';
                switch (e.keyCode) {
                    case KEYCODE.UP:
                        date.subtract(1, 'w');
                        break;
                    case KEYCODE.DOWN:
                        date.add(1, 'w');
                        break;
                    case KEYCODE.PAGE_UP:
                        date.subtract(1, stepUnit);
                        break;
                    case KEYCODE.PAGE_DOWN:
                        date.add(1, stepUnit);
                        break;
                }
            }
            else {
                date = moment();
            }
            e.preventDefault();
            _this.handleChange(date, _this.state.value);
        };
        _this.onVisibleChange = function (visible, type) {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: visible,
                });
            }
            _this.props.onVisibleChange(visible, type);
        };
        _this.onSelectCalendarPanel = function (value) {
            _this.handleChange(value, _this.state.value);
            _this.onVisibleChange(false, 'calendarSelect');
        };
        _this.dateRender = function (value) {
            var _a;
            var _b = _this.props, prefix = _b.prefix, dateCellRender = _b.dateCellRender;
            var selectedValue = _this.state.value;
            var content = dateCellRender && typeof dateCellRender === 'function'
                ? dateCellRender(value)
                : value.dates();
            if (selectedValue &&
                selectedValue.years() === value.years() &&
                selectedValue.weeks() === value.weeks()) {
                var firstDay = moment.localeData().firstDayOfWeek();
                var endDay = firstDay - 1 < 0 ? 6 : firstDay - 1;
                return (React.createElement("div", { className: classnames("".concat(prefix, "calendar-week-active-date"), (_a = {},
                        _a["".concat(prefix, "calendar-week-active-start")] = value.days() === moment.localeData().firstDayOfWeek(),
                        _a["".concat(prefix, "calendar-week-active-end")] = value.days() === endDay,
                        _a)) },
                    React.createElement("span", null, content)));
            }
            return content;
        };
        var value = formatDateValue(props.value || props.defaultValue, props.format);
        _this.state = {
            value: value,
            visible: props.visible || props.defaultVisible,
        };
        return _this;
    }
    WeekPicker.getDerivedStateFromProps = function (props) {
        var st = {};
        if ('value' in props) {
            st.value = formatDateValue(props.value, props.format);
        }
        if ('visible' in props) {
            st.visible = props.visible;
        }
        return st;
    };
    WeekPicker.prototype.renderPreview = function (others) {
        var _a = this.props, prefix = _a.prefix, format = _a.format, className = _a.className, renderPreview = _a.renderPreview;
        var value = this.state.value;
        var previewCls = classnames(className, "".concat(prefix, "form-preview"));
        var label = value ? value.format(format) : '';
        if (typeof renderPreview === 'function') {
            return (React.createElement("div", __assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
        }
        return (React.createElement("p", __assign({}, others, { className: previewCls }), label));
    };
    WeekPicker.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, rtl = _a.rtl, locale = _a.locale, label = _a.label, state = _a.state, format = _a.format, defaultVisibleMonth = _a.defaultVisibleMonth, onVisibleMonthChange = _a.onVisibleMonthChange, disabledDate = _a.disabledDate, footerRender = _a.footerRender, placeholder = _a.placeholder, size = _a.size, disabled = _a.disabled, hasClear = _a.hasClear, popupTriggerType = _a.popupTriggerType, popupAlign = _a.popupAlign, popupContainer = _a.popupContainer, popupStyle = _a.popupStyle, popupClassName = _a.popupClassName, popupProps = _a.popupProps, popupComponent = _a.popupComponent, popupContent = _a.popupContent, followTrigger = _a.followTrigger, className = _a.className, inputProps = _a.inputProps, monthCellRender = _a.monthCellRender, yearCellRender = _a.yearCellRender, isPreview = _a.isPreview, others = __rest(_a, ["prefix", "rtl", "locale", "label", "state", "format", "defaultVisibleMonth", "onVisibleMonthChange", "disabledDate", "footerRender", "placeholder", "size", "disabled", "hasClear", "popupTriggerType", "popupAlign", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "className", "inputProps", "monthCellRender", "yearCellRender", "isPreview"]);
        var _b = this.state, visible = _b.visible, value = _b.value;
        var sharedInputProps = __assign(__assign({}, inputProps), { size: size, disabled: disabled, onChange: this.onDateInputChange, onKeyDown: this.onKeyDown });
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview) {
            // @ts-expect-error 应是 propTypes
            return this.renderPreview(obj.pickOthers(others, WeekPicker.PropTypes));
        }
        var trigger = (React.createElement("div", { className: "".concat(prefix, "week-picker-trigger") },
            React.createElement(Input, __assign({}, sharedInputProps, { label: label, state: state, value: value ? value.format(format) : '', role: "combobox", "aria-expanded": visible, readOnly: true, placeholder: placeholder || locale.weekPlaceholder, hint: React.createElement(Icon, { type: "calendar", className: "".concat(prefix, "date-picker-symbol-calendar-icon") }), 
                // @ts-expect-error allowClear 应该先做 boolean 化处理
                hasClear: value && hasClear, className: "".concat(prefix, "week-picker-input") }))));
        var PopupComponent = popupComponent ? popupComponent : Popup;
        return (React.createElement("div", __assign({}, obj.pickOthers(WeekPicker.propTypes, others), { className: classnames("".concat(prefix, "week-picker"), className) }),
            React.createElement(PopupComponent, __assign({ align: popupAlign }, popupProps, { followTrigger: followTrigger, disabled: disabled, visible: visible, onVisibleChange: this.onVisibleChange, triggerType: popupTriggerType, container: popupContainer, style: popupStyle, className: popupClassName, trigger: trigger }), popupContent ? (popupContent) : (React.createElement("div", { dir: others.dir, className: "".concat(prefix, "week-picker-body") },
                React.createElement(Calendar, { shape: "panel", value: value, format: format, className: "".concat(prefix, "calendar-week"), dateCellRender: this.dateRender, monthCellRender: monthCellRender, yearCellRender: yearCellRender, onSelect: this.onSelectCalendarPanel, defaultVisibleMonth: defaultVisibleMonth, onVisibleMonthChange: onVisibleMonthChange, disabledDate: disabledDate }),
                footerRender())))));
    };
    WeekPicker.displayName = 'WeekPicker';
    WeekPicker.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, label: PropTypes.node, state: PropTypes.oneOf(['success', 'loading', 'error']), placeholder: PropTypes.string, defaultVisibleMonth: PropTypes.func, onVisibleMonthChange: PropTypes.func, value: checkDateValue, defaultValue: checkDateValue, format: PropTypes.string, disabledDate: PropTypes.func, footerRender: PropTypes.func, onChange: PropTypes.func, size: PropTypes.oneOf(['small', 'medium', 'large']), disabled: PropTypes.bool, hasClear: PropTypes.bool, visible: PropTypes.bool, defaultVisible: PropTypes.bool, onVisibleChange: PropTypes.func, popupTriggerType: PropTypes.oneOf(['click', 'hover']), popupAlign: PropTypes.string, popupContainer: PropTypes.any, popupStyle: PropTypes.object, popupClassName: PropTypes.string, popupProps: PropTypes.object, followTrigger: PropTypes.bool, inputProps: PropTypes.object, dateCellRender: PropTypes.func, monthCellRender: PropTypes.func, isPreview: PropTypes.bool, renderPreview: PropTypes.func, yearCellRender: PropTypes.func, locale: PropTypes.object, className: PropTypes.string, name: PropTypes.string, popupComponent: PropTypes.elementType, popupContent: PropTypes.node });
    WeekPicker.defaultProps = {
        prefix: 'next-',
        rtl: false,
        format: 'GGGG-Wo',
        size: 'medium',
        disabledDate: function () { return false; },
        footerRender: function () { return null; },
        hasClear: true,
        popupTriggerType: 'click',
        popupAlign: 'tl tl',
        locale: nextLocale.DatePicker,
        defaultVisible: false,
        onChange: func.noop,
        onVisibleChange: func.noop,
    };
    return WeekPicker;
}(Component));
export default polyfill(WeekPicker);

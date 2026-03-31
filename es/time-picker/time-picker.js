import { __assign, __extends, __rest } from "tslib";
import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import moment from 'moment';
import ConfigProvider from '../config-provider';
import Input from '../input';
import Icon from '../icon';
import Overlay from '../overlay';
import nextLocale from '../locale/zh-cn';
import { func, obj } from '../util';
import TimePickerPanel from './panel';
import { checkDateValue, formatDateValue } from './utils';
import { onTimeKeydown } from '../date-picker/util';
var Popup = Overlay.Popup;
var noop = func.noop;
var timePickerLocale = nextLocale.TimePicker;
/**
 * TimePicker
 */
var TimePicker = /** @class */ (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.onClearValue = function () {
            _this.setState({
                value: null,
            });
            if (_this.state.value) {
                _this.onValueChange(null);
            }
        };
        _this.onInputChange = function (inputValue, e, eventType) {
            if (!('value' in _this.props)) {
                if (eventType === 'clear' || !inputValue) {
                    e.stopPropagation();
                    _this.onClearValue();
                }
                _this.setState({
                    inputStr: inputValue,
                    inputing: true,
                });
            }
            else if (eventType === 'clear') {
                // 受控状态下用户点击 clear
                e.stopPropagation();
                _this.onValueChange(null);
            }
        };
        _this.onInputBlur = function () {
            var inputStr = _this.state.inputStr;
            if (inputStr) {
                var format = _this.props.format;
                var parsed = moment(inputStr, format, true);
                if (parsed.isValid()) {
                    _this.setState({
                        value: parsed,
                        inputStr: '',
                    });
                    _this.onValueChange(parsed);
                }
                _this.setState({
                    inputing: false,
                });
            }
        };
        _this.onKeyown = function (e) {
            var _a = _this.state, value = _a.value, inputStr = _a.inputStr;
            var _b = _this.props, format = _b.format, _c = _b.hourStep, hourStep = _c === void 0 ? 1 : _c, _d = _b.minuteStep, minuteStep = _d === void 0 ? 1 : _d, _e = _b.secondStep, secondStep = _e === void 0 ? 1 : _e, disabledMinutes = _b.disabledMinutes, disabledSeconds = _b.disabledSeconds;
            var unit = 'second';
            if (disabledSeconds) {
                unit = disabledMinutes ? 'hour' : 'minute';
            }
            var timeStr = onTimeKeydown(e, {
                format: format,
                timeInputStr: inputStr,
                steps: {
                    hour: hourStep,
                    minute: minuteStep,
                    second: secondStep,
                },
                value: value,
            }, unit);
            if (!timeStr)
                return;
            _this.onInputChange(timeStr);
        };
        _this.onTimePanelSelect = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({
                    value: value,
                    inputing: false,
                });
            }
            if (!_this.state.value || value.valueOf() !== _this.state.value.valueOf()) {
                _this.onValueChange(value);
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
        var value = formatDateValue(props.value || props.defaultValue, props.format);
        _this.inputAsString = typeof (props.value || props.defaultValue) === 'string';
        _this.state = {
            value: value,
            inputStr: '',
            inputing: false,
            visible: props.visible || props.defaultVisible,
        };
        return _this;
    }
    TimePicker.getDerivedStateFromProps = function (props) {
        var state = {};
        if ('value' in props) {
            state.value = formatDateValue(props.value, props.format);
        }
        if ('visible' in props) {
            state.visible = props.visible;
        }
        return state;
    };
    TimePicker.prototype.onValueChange = function (newValue) {
        var ret = this.inputAsString && newValue ? newValue.format(this.props.format) : newValue;
        this.props.onChange(ret);
    };
    TimePicker.prototype.renderPreview = function (others) {
        var _a = this.props, prefix = _a.prefix, format = _a.format, className = _a.className, renderPreview = _a.renderPreview;
        var value = this.state.value;
        var previewCls = classnames(className, "".concat(prefix, "form-preview"));
        var label = value ? value.format(format) : '';
        if (typeof renderPreview === 'function') {
            return (React.createElement("div", __assign({}, others, { className: previewCls }), renderPreview(value, this.props)));
        }
        return (React.createElement("p", __assign({}, others, { className: previewCls }), label));
    };
    TimePicker.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, label = _c.label, state = _c.state, placeholder = _c.placeholder, size = _c.size, format = _c.format, hasClear = _c.hasClear, hourStep = _c.hourStep, minuteStep = _c.minuteStep, secondStep = _c.secondStep, disabledHours = _c.disabledHours, disabledMinutes = _c.disabledMinutes, disabledSeconds = _c.disabledSeconds, renderTimeMenuItems = _c.renderTimeMenuItems, inputProps = _c.inputProps, popupAlign = _c.popupAlign, popupTriggerType = _c.popupTriggerType, popupContainer = _c.popupContainer, popupStyle = _c.popupStyle, popupClassName = _c.popupClassName, popupProps = _c.popupProps, popupComponent = _c.popupComponent, popupContent = _c.popupContent, followTrigger = _c.followTrigger, disabled = _c.disabled, className = _c.className, locale = _c.locale, rtl = _c.rtl, isPreview = _c.isPreview, others = __rest(_c, ["prefix", "label", "state", "placeholder", "size", "format", "hasClear", "hourStep", "minuteStep", "secondStep", "disabledHours", "disabledMinutes", "disabledSeconds", "renderTimeMenuItems", "inputProps", "popupAlign", "popupTriggerType", "popupContainer", "popupStyle", "popupClassName", "popupProps", "popupComponent", "popupContent", "followTrigger", "disabled", "className", "locale", "rtl", "isPreview"]);
        var _d = this.state, value = _d.value, inputStr = _d.inputStr, inputing = _d.inputing, visible = _d.visible;
        var triggerCls = classnames((_a = {},
            _a["".concat(prefix, "time-picker-trigger")] = true,
            _a));
        if (rtl) {
            others.dir = 'rtl';
        }
        if (isPreview) {
            // @ts-expect-error TimePicker 上没有 PropTypes，应该是 propTypes
            return this.renderPreview(obj.pickOthers(others, TimePicker.PropTypes));
        }
        var inputValue = inputing ? inputStr : (value && value.format(format)) || '';
        var sharedInputProps = __assign(__assign({}, inputProps), { size: size, disabled: disabled, value: inputValue, 
            // @ts-expect-error value 应该先做 bool 转化
            hasClear: value && hasClear, onChange: this.onInputChange, onBlur: this.onInputBlur, onPressEnter: this.onInputBlur, onKeyDown: this.onKeyown, hint: React.createElement(Icon, { type: "clock", className: "".concat(prefix, "time-picker-symbol-clock-icon") }) });
        var triggerInput = (React.createElement("div", { className: triggerCls },
            React.createElement(Input, __assign({}, sharedInputProps, { label: label, state: state, placeholder: placeholder || locale.placeholder, className: "".concat(prefix, "time-picker-input") }))));
        var panelProps = {
            prefix: prefix,
            locale: locale,
            value: value,
            disabled: disabled,
            showHour: format.indexOf('H') > -1,
            showSecond: format.indexOf('s') > -1,
            showMinute: format.indexOf('m') > -1,
            hourStep: hourStep,
            minuteStep: minuteStep,
            secondStep: secondStep,
            disabledHours: disabledHours,
            disabledMinutes: disabledMinutes,
            disabledSeconds: disabledSeconds,
            renderTimeMenuItems: renderTimeMenuItems,
            onSelect: this.onTimePanelSelect,
        };
        var classNames = classnames((_b = {},
            _b["".concat(prefix, "time-picker")] = true,
            _b["".concat(prefix, "time-picker-").concat(size)] = size,
            _b["".concat(prefix, "disabled")] = disabled,
            _b), className);
        var PopupComponent = popupComponent ? popupComponent : Popup;
        return (React.createElement("div", __assign({}, obj.pickOthers(TimePicker.propTypes, others), { className: classNames }),
            React.createElement(PopupComponent, __assign({ autoFocus: true, align: popupAlign }, popupProps, { followTrigger: followTrigger, visible: visible, onVisibleChange: this.onVisibleChange, trigger: triggerInput, container: popupContainer, disabled: disabled, triggerType: popupTriggerType, style: popupStyle, className: popupClassName }), popupContent ? (popupContent) : (React.createElement("div", { dir: others.dir, className: "".concat(prefix, "time-picker-body") },
                React.createElement("div", { className: "".concat(prefix, "time-picker-panel-header") },
                    React.createElement(Input, __assign({}, sharedInputProps, { placeholder: format, className: "".concat(prefix, "time-picker-panel-input") }))),
                React.createElement(TimePickerPanel, __assign({}, panelProps)))))));
    };
    TimePicker.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, label: PropTypes.node, state: PropTypes.oneOf(['error', 'success']), placeholder: PropTypes.string, value: checkDateValue, defaultValue: checkDateValue, size: PropTypes.oneOf(['small', 'medium', 'large']), hasClear: PropTypes.bool, format: PropTypes.string, hourStep: PropTypes.number, minuteStep: PropTypes.number, secondStep: PropTypes.number, disabledHours: PropTypes.func, disabledMinutes: PropTypes.func, disabledSeconds: PropTypes.func, renderTimeMenuItems: PropTypes.func, visible: PropTypes.bool, defaultVisible: PropTypes.bool, popupContainer: PropTypes.any, popupAlign: PropTypes.string, popupTriggerType: PropTypes.oneOf(['click', 'hover']), onVisibleChange: PropTypes.func, popupStyle: PropTypes.object, popupClassName: PropTypes.string, popupProps: PropTypes.object, followTrigger: PropTypes.bool, disabled: PropTypes.bool, isPreview: PropTypes.bool, renderPreview: PropTypes.func, onChange: PropTypes.func, className: PropTypes.string, name: PropTypes.string, inputProps: PropTypes.object, popupComponent: PropTypes.elementType, popupContent: PropTypes.node });
    TimePicker.defaultProps = {
        prefix: 'next-',
        rtl: false,
        locale: timePickerLocale,
        size: 'medium',
        format: 'HH:mm:ss',
        hasClear: true,
        disabled: false,
        popupAlign: 'tl tl',
        popupTriggerType: 'click',
        onChange: noop,
        onVisibleChange: noop,
    };
    TimePicker.displayName = 'TimePicker';
    return TimePicker;
}(Component));
export default polyfill(TimePicker);

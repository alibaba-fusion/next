import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import SharedPT from '../prop-types';
import { DATE_INPUT_TYPE, DATE_PICKER_MODE } from '../constant';
import { func, datejs, obj } from '../../util';
import { fmtValue } from '../util';
import Input from '../../input';
import Icon from '../../icon';
var DATE = DATE_PICKER_MODE.DATE, WEEK = DATE_PICKER_MODE.WEEK, MONTH = DATE_PICKER_MODE.MONTH, QUARTER = DATE_PICKER_MODE.QUARTER, YEAR = DATE_PICKER_MODE.YEAR;
var DateInput = /** @class */ (function (_super) {
    __extends(DateInput, _super);
    function DateInput(props) {
        var _this = _super.call(this, props) || this;
        _this.setInputRef = function (el, index) {
            if (_this.props.isRange) {
                if (!_this.input) {
                    _this.input = [];
                }
                _this.input[index] = el;
            }
            else {
                _this.input = el;
            }
        };
        _this.setValue = function (v) {
            var _a = _this.props, isRange = _a.isRange, inputType = _a.inputType, value = _a.value;
            var newVal = v;
            if (isRange) {
                newVal = __spreadArray([], __read(value), false);
                newVal[inputType] = v;
            }
            return newVal;
        };
        _this.formatter = function (v) {
            var format = _this.props.format;
            return typeof format === 'function' ? format(v) : v.format(format);
        };
        _this.onInput = function (v, e, eventType) {
            v = _this.setValue(v);
            if (eventType === 'clear') {
                v = null;
                e.stopPropagation();
            }
            func.invoke(_this.props, 'onInput', [v, eventType]);
        };
        _this.handleTypeChange = function (inputType) {
            if (inputType !== _this.props.inputType) {
                func.invoke(_this.props, 'onInputTypeChange', [inputType]);
            }
        };
        _this.getPlaceholder = function () {
            var _a;
            var _b = _this.props, locale = _b.locale, isRange = _b.isRange, mode = _b.mode;
            var placeholder = locale.placeholder, selectDate = locale.selectDate, monthPlaceholder = locale.monthPlaceholder, weekPlaceholder = locale.weekPlaceholder, yearPlaceholder = locale.yearPlaceholder, startPlaceholder = locale.startPlaceholder, quarterPlaceholder = locale.quarterPlaceholder, endPlaceholder = locale.endPlaceholder;
            var mode2placeholder = (_a = {},
                _a[DATE] = selectDate,
                _a[WEEK] = weekPlaceholder,
                _a[MONTH] = monthPlaceholder,
                _a[QUARTER] = quarterPlaceholder,
                _a[YEAR] = yearPlaceholder,
                _a);
            var holder = _this.props.placeholder;
            holder = holder || (isRange ? [startPlaceholder, endPlaceholder] : mode2placeholder[mode] || placeholder);
            if (isRange && !Array.isArray(holder)) {
                holder = Array(2).fill(holder);
            }
            return holder;
        };
        /**
         * 根据 format 计算输入框 htmlSize
         */
        _this.getHtmlSize = function () {
            var _a = _this.props, isRange = _a.isRange, format = _a.format, hasBorder = _a.hasBorder;
            var value = '2020-12-12 12:12:12';
            var size = 0;
            if (isRange) {
                var fmtStr = fmtValue([value, value].map(datejs), format);
                size = Math.max.apply(Math, __spreadArray([], __read(fmtStr.map(function (s) { return (s && s.length) || 0; })), false));
            }
            else {
                var fmtStr = fmtValue(datejs(value), format);
                fmtValue(datejs(value), format);
                size = (fmtStr && fmtStr.length) || 0;
            }
            return String(Math.max(size, hasBorder ? 12 : 8));
        };
        _this.prefixCls = "".concat(props.prefix, "date-picker2-input");
        return _this;
    }
    DateInput.prototype.render = function () {
        var _a;
        var _b = this, onInput = _b.onInput, setInputRef = _b.setInputRef, handleTypeChange = _b.handleTypeChange, prefixCls = _b.prefixCls;
        var _c = this.props, autoFocus = _c.autoFocus, readOnly = _c.readOnly, isRange = _c.isRange, value = _c.value, prefix = _c.prefix, hasClear = _c.hasClear, inputType = _c.inputType, size = _c.size, focus = _c.focus, hasBorder = _c.hasBorder, separator = _c.separator, disabled = _c.disabled, inputProps = _c.inputProps, dateInputAriaLabel = _c.dateInputAriaLabel, state = _c.state, label = _c.label, restProps = __rest(_c, ["autoFocus", "readOnly", "isRange", "value", "prefix", "hasClear", "inputType", "size", "focus", "hasBorder", "separator", "disabled", "inputProps", "dateInputAriaLabel", "state", "label"]);
        var placeholder = this.getPlaceholder();
        var htmlSize = this.getHtmlSize();
        var sharedProps = __assign(__assign(__assign({}, obj.pickProps(restProps, Input)), inputProps), { size: size, htmlSize: htmlSize, readOnly: readOnly, hasBorder: false, onChange: onInput });
        var rangeProps;
        if (isRange) {
            rangeProps = [DATE_INPUT_TYPE.BEGIN, DATE_INPUT_TYPE.END].map(function (idx) {
                var _a;
                var _disabled = Array.isArray(disabled) ? disabled[idx] : disabled;
                return __assign(__assign({}, sharedProps), { autoFocus: autoFocus, placeholder: placeholder[idx], value: value[idx] || '', 'aria-label': Array.isArray(dateInputAriaLabel) ? dateInputAriaLabel[idx] : dateInputAriaLabel, disabled: _disabled, ref: function (ref) { return setInputRef(ref, idx); }, onFocus: _disabled ? undefined : function () { return handleTypeChange(idx); }, className: classnames((_a = {},
                        _a["".concat(prefixCls, "-active")] = inputType === idx,
                        _a)) });
            });
        }
        var className = classnames([prefixCls, "".concat(prefixCls, "-").concat(size), "".concat(prefixCls, "-").concat(isRange ? 'range' : 'date')], (_a = {},
            _a["".concat(prefixCls, "-focus")] = focus,
            _a["".concat(prefixCls, "-noborder")] = !hasBorder,
            _a["".concat(prefixCls, "-disabled")] = isRange && Array.isArray(disabled) ? disabled.every(function (v) { return v; }) : disabled,
            _a["".concat(prefixCls, "-error")] = state === 'error',
            _a));
        var calendarIcon = React.createElement(Icon, { type: "calendar", className: "".concat(prefix, "date-picker2-symbol-calendar-icon") });
        return (React.createElement("div", { className: className }, isRange ? (React.createElement(React.Fragment, null,
            React.createElement(Input, __assign({}, rangeProps[0], { label: label, autoFocus: autoFocus })),
            React.createElement("div", { className: "".concat(prefixCls, "-separator") }, separator),
            React.createElement(Input, __assign({}, rangeProps[1], { state: state, hasClear: !state && hasClear, hint: state ? null : calendarIcon })))) : (React.createElement(Input, __assign({}, sharedProps, { label: label, state: state, disabled: disabled, hasClear: !state && hasClear, placeholder: placeholder, autoFocus: autoFocus, ref: setInputRef, "aria-label": dateInputAriaLabel, value: value || '', hint: state ? null : calendarIcon })))));
    };
    DateInput.propTypes = {
        prefix: PT.string,
        rtl: PT.bool,
        locale: PT.object,
        value: SharedPT.inputValue,
        inputType: SharedPT.inputType,
        format: SharedPT.format,
        isRange: PT.bool,
        hasClear: PT.bool,
        onInputTypeChange: PT.func,
        autoFocus: PT.bool,
        readOnly: SharedPT.readOnly,
        placeholder: SharedPT.placeholder,
        size: SharedPT.size,
        focus: PT.bool,
        hasBorder: PT.bool,
        separator: PT.node,
        disabled: SharedPT.disabled,
        inputProps: PT.object,
        dateInputAriaLabel: SharedPT.ariaLabel,
        label: PT.node,
        state: PT.string,
    };
    DateInput.defaultProps = {
        autoFocus: false,
        readOnly: false,
        hasClear: true,
        separator: '-',
        hasBorder: true,
        size: 'medium',
    };
    return DateInput;
}(React.Component));
export default polyfill(DateInput);

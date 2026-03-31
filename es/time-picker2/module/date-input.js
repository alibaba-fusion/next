import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import classnames from 'classnames';
import SharedPT from '../prop-types';
import { TIME_INPUT_TYPE } from '../constant';
import { func, datejs, obj } from '../../util';
import { fmtValue } from '../../date-picker2/util';
import Input from '../../input';
import Icon from '../../icon';
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
            // @ts-expect-error v 的类型是 string | number，this.setValue(v) 返回类型是 string | number | null，此处不应该重新赋值，应该定一个新的变量处理
            v = _this.setValue(v);
            if (eventType === 'clear') {
                // @ts-expect-error v 的类型是 string | number，this.setValue(v) 返回类型是 string | number | null，此处不应该重新赋值，应该定一个新的变量处理
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
            var isRange = _this.props.isRange;
            var holder = _this.props.placeholder;
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
            var value = '12:12:12';
            var size = 0;
            if (isRange) {
                var fmtStr = fmtValue([value, value].map(datejs), format);
                size = Math.max.apply(Math, __spreadArray([], __read(fmtStr.map(function (s) { return (s && s.length) || 0; })), false));
            }
            else {
                var fmtStr = fmtValue(datejs(value), format);
                size = (fmtStr && fmtStr.length) || 0;
            }
            return String(Math.max(size, hasBorder ? 12 : 8));
        };
        _this.prefixCls = "".concat(props.prefix, "time-picker2-input");
        return _this;
    }
    DateInput.prototype.render = function () {
        var _a;
        var _b = this, onInput = _b.onInput, setInputRef = _b.setInputRef, handleTypeChange = _b.handleTypeChange, prefixCls = _b.prefixCls;
        var _c = this.props, autoFocus = _c.autoFocus, readOnly = _c.readOnly, isRange = _c.isRange, value = _c.value, onBlur = _c.onBlur, hasClear = _c.hasClear, inputType = _c.inputType, size = _c.size, focus = _c.focus, prefix = _c.prefix, hasBorder = _c.hasBorder, separator = _c.separator, disabled = _c.disabled, inputProps = _c.inputProps, state = _c.state, label = _c.label, onClick = _c.onClick, onKeyDown = _c.onKeyDown, restProps = __rest(_c, ["autoFocus", "readOnly", "isRange", "value", "onBlur", "hasClear", "inputType", "size", "focus", "prefix", "hasBorder", "separator", "disabled", "inputProps", "state", "label", "onClick", "onKeyDown"]);
        var placeholder = this.getPlaceholder();
        var htmlSize = this.getHtmlSize();
        // @ts-expect-error 下面 pickProps 使用错误，导致报错
        var sharedProps = __assign(__assign(__assign({}, obj.pickProps(restProps, Input)), inputProps), { size: size, prefix: prefix, htmlSize: htmlSize, readOnly: readOnly, hasBorder: hasBorder, onBlur: onBlur, onChange: onInput, onClick: onClick, onKeyDown: onKeyDown });
        var rangeProps;
        if (isRange) {
            rangeProps = [TIME_INPUT_TYPE.BEGIN, TIME_INPUT_TYPE.END].map(function (idx) {
                var _a;
                var _disabled = Array.isArray(disabled) ? disabled[idx] : disabled;
                return __assign(__assign({}, sharedProps), { autoFocus: autoFocus, placeholder: placeholder[idx], value: value[idx] || '', disabled: _disabled, ref: function (ref) { return setInputRef(ref, idx); }, onFocus: _disabled ? undefined : function () { return handleTypeChange(idx); }, className: classnames((_a = {},
                        _a["".concat(prefixCls, "-active")] = inputType === idx,
                        _a)) });
            });
        }
        var className = classnames([prefixCls, "".concat(prefixCls, "-").concat(size), "".concat(prefixCls, "-").concat(isRange ? 'range' : 'time')], (_a = {},
            _a["".concat(prefixCls, "-focus")] = focus,
            _a["".concat(prefixCls, "-noborder")] = !hasBorder,
            _a["".concat(prefixCls, "-disabled")] = isRange && Array.isArray(disabled) ? disabled.every(function (v) { return v; }) : disabled,
            _a["".concat(prefixCls, "-error")] = state === 'error',
            _a));
        var calendarIcon = (React.createElement(Icon, { type: "clock", className: "".concat(this.prefixCls, "-symbol-clock-icon") }));
        return (React.createElement("div", { className: className }, isRange ? (React.createElement(React.Fragment, null,
            React.createElement(Input, __assign({}, rangeProps[0], { label: label, hasBorder: false, autoFocus: autoFocus })),
            React.createElement("div", { className: "".concat(prefixCls, "-separator") }, separator),
            React.createElement(Input, __assign({}, rangeProps[1], { state: state, hasBorder: false, hasClear: !state && hasClear, hint: state ? null : calendarIcon })))) : (React.createElement(Input, __assign({}, sharedProps, { label: label, state: state, disabled: disabled, hasClear: !state && hasClear, placeholder: placeholder, autoFocus: autoFocus, ref: setInputRef, value: value || '', hint: state ? null : calendarIcon })))));
    };
    DateInput.propTypes = {
        prefix: PT.string,
        rtl: PT.bool,
        locale: PT.object,
        value: PT.oneOfType([PT.arrayOf(PT.string), PT.string]),
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
        onKeyDown: PT.func,
        onClick: PT.func,
        separator: PT.node,
        disabled: SharedPT.disabled,
        inputProps: PT.object,
        label: PT.node,
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

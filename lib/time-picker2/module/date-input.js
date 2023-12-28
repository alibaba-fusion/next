"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var PT = require("prop-types");
var classnames_1 = require("classnames");
var prop_types_1 = require("../prop-types");
var constant_1 = require("../constant");
var util_1 = require("../../util");
var util_2 = require("../../date-picker2/util");
var input_1 = require("../../input");
var icon_1 = require("../../icon");
var DateInput = /** @class */ (function (_super) {
    tslib_1.__extends(DateInput, _super);
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
                newVal = tslib_1.__spreadArray([], tslib_1.__read(value), false);
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
            util_1.func.invoke(_this.props, 'onInput', [v, eventType]);
        };
        _this.handleTypeChange = function (inputType) {
            if (inputType !== _this.props.inputType) {
                util_1.func.invoke(_this.props, 'onInputTypeChange', [inputType]);
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
                var fmtStr = (0, util_2.fmtValue)([value, value].map(util_1.datejs), format);
                size = Math.max.apply(Math, tslib_1.__spreadArray([], tslib_1.__read(fmtStr.map(function (s) { return (s && s.length) || 0; })), false));
            }
            else {
                var fmtStr = (0, util_2.fmtValue)((0, util_1.datejs)(value), format);
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
        var _c = this.props, autoFocus = _c.autoFocus, readOnly = _c.readOnly, isRange = _c.isRange, value = _c.value, onBlur = _c.onBlur, hasClear = _c.hasClear, inputType = _c.inputType, size = _c.size, focus = _c.focus, prefix = _c.prefix, hasBorder = _c.hasBorder, separator = _c.separator, disabled = _c.disabled, inputProps = _c.inputProps, state = _c.state, label = _c.label, onClick = _c.onClick, onKeyDown = _c.onKeyDown, restProps = tslib_1.__rest(_c, ["autoFocus", "readOnly", "isRange", "value", "onBlur", "hasClear", "inputType", "size", "focus", "prefix", "hasBorder", "separator", "disabled", "inputProps", "state", "label", "onClick", "onKeyDown"]);
        var placeholder = this.getPlaceholder();
        var htmlSize = this.getHtmlSize();
        var sharedProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, util_1.obj.pickProps(restProps, input_1.default)), inputProps), { size: size, prefix: prefix, htmlSize: htmlSize, readOnly: readOnly, hasBorder: hasBorder, onBlur: onBlur, onChange: onInput, onClick: onClick, onKeyDown: onKeyDown });
        var rangeProps;
        if (isRange) {
            rangeProps = [constant_1.TIME_INPUT_TYPE.BEGIN, constant_1.TIME_INPUT_TYPE.END].map(function (idx) {
                var _a;
                var _disabled = Array.isArray(disabled) ? disabled[idx] : disabled;
                return tslib_1.__assign(tslib_1.__assign({}, sharedProps), { autoFocus: autoFocus, placeholder: placeholder[idx], value: value[idx] || '', disabled: _disabled, ref: function (ref) { return setInputRef(ref, idx); }, onFocus: _disabled ? undefined : function () { return handleTypeChange(idx); }, className: (0, classnames_1.default)((_a = {},
                        _a["".concat(prefixCls, "-active")] = inputType === idx,
                        _a)) });
            });
        }
        var className = (0, classnames_1.default)([prefixCls, "".concat(prefixCls, "-").concat(size), "".concat(prefixCls, "-").concat(isRange ? 'range' : 'time')], (_a = {},
            _a["".concat(prefixCls, "-focus")] = focus,
            _a["".concat(prefixCls, "-noborder")] = !hasBorder,
            _a["".concat(prefixCls, "-disabled")] = isRange && Array.isArray(disabled) ? disabled.every(function (v) { return v; }) : disabled,
            _a["".concat(prefixCls, "-error")] = state === 'error',
            _a));
        var calendarIcon = react_1.default.createElement(icon_1.default, { type: "clock", className: "".concat(this.prefixCls, "-symbol-clock-icon") });
        return (react_1.default.createElement("div", { className: className }, isRange ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(input_1.default, tslib_1.__assign({}, rangeProps[0], { label: label, hasBorder: false, autoFocus: autoFocus })),
            react_1.default.createElement("div", { className: "".concat(prefixCls, "-separator") }, separator),
            react_1.default.createElement(input_1.default, tslib_1.__assign({}, rangeProps[1], { state: state, hasBorder: false, hasClear: !state && hasClear, hint: state ? null : calendarIcon })))) : (react_1.default.createElement(input_1.default, tslib_1.__assign({}, sharedProps, { label: label, state: state, disabled: disabled, hasClear: !state && hasClear, placeholder: placeholder, autoFocus: autoFocus, ref: setInputRef, value: value || '', hint: state ? null : calendarIcon })))));
    };
    DateInput.propTypes = {
        prefix: PT.string,
        rtl: PT.bool,
        locale: PT.object,
        value: PT.oneOfType([PT.arrayOf(PT.string), PT.string]),
        inputType: prop_types_1.default.inputType,
        format: prop_types_1.default.format,
        isRange: PT.bool,
        hasClear: PT.bool,
        onInputTypeChange: PT.func,
        autoFocus: PT.bool,
        readOnly: prop_types_1.default.readOnly,
        placeholder: prop_types_1.default.placeholder,
        size: prop_types_1.default.size,
        focus: PT.bool,
        hasBorder: PT.bool,
        onKeyDown: PT.func,
        onClick: PT.func,
        separator: PT.node,
        disabled: prop_types_1.default.disabled,
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
}(react_1.default.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(DateInput);

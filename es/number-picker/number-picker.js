import { __assign, __extends, __read, __spreadArray } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Big from 'big.js';
import { polyfill } from 'react-lifecycles-compat';
import Icon from '../icon';
import Button from '../button';
import Input from '../input';
import { func, obj } from '../util';
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -Math.pow(2, 53) + 1;
var isNil = obj.isNil;
/** NumberPicker */
var NumberPicker = /** @class */ (function (_super) {
    __extends(NumberPicker, _super);
    function NumberPicker(props) {
        var _this = _super.call(this, props) || this;
        var defaultValue = props.defaultValue, stringMode = props.stringMode;
        var value;
        if ('value' in props) {
            value = props.value;
        }
        else {
            value = defaultValue;
        }
        value = value === undefined || value === null ? '' : stringMode ? "".concat(value) : value;
        _this.state = {
            value: value,
            hasFocused: false,
            onlyDisplay: false,
            displayValue: value,
            max: stringMode ? Infinity : MAX_SAFE_INTEGER,
            min: stringMode ? -Infinity : MIN_SAFE_INTEGER,
        };
        return _this;
    }
    NumberPicker.getDerivedStateFromProps = function (nextProps, prevState) {
        // 用户键入非法值后render逻辑，未触发onChange，业务组件无感知，不强制受控value
        if (prevState.onlyDisplay) {
            return {
                value: prevState.value,
                displayValue: prevState.displayValue,
                onlyDisplay: false,
            };
        }
        var state = {};
        var value = nextProps.value, stringMode = nextProps.stringMode;
        // 一般受控render逻辑
        if ('value' in nextProps && "".concat(nextProps.value) !== "".concat(prevState.value)) {
            var newValue = value === undefined || value === null ? '' : stringMode ? "".concat(value) : value;
            state.value = newValue;
            // 因为 Number('') === 0，所以会导致value=0赋值不生效
            if (prevState.displayValue === '' || Number(prevState.displayValue) !== nextProps.value) {
                state.displayValue = newValue;
            }
        }
        // 如果是undefined或null，应该不限制最大最小值
        var min = nextProps.min, max = nextProps.max;
        if ('min' in nextProps && min !== prevState.min) {
            state.min = !isNil(min) ? min : stringMode ? -Infinity : MIN_SAFE_INTEGER;
        }
        if ('max' in nextProps && max !== prevState.max) {
            state.max = !isNil(max) ? max : stringMode ? Infinity : MAX_SAFE_INTEGER;
        }
        if (Object.keys(state).length) {
            return state;
        }
        return null;
    };
    NumberPicker.prototype.isGreaterThan = function (v1, v2) {
        var stringMode = this.props.stringMode;
        if (stringMode) {
            try {
                return Big(v1).gt(v2);
            }
            catch (e) {
                // big.js 遇到 Infinity 和 NaN 异常回退到 Number
                return Number(v1) > Number(v2);
            }
        }
        return Number(v1) > Number(v2);
    };
    NumberPicker.prototype.correctBoundary = function (value) {
        var _a = this.state, max = _a.max, min = _a.min;
        return this.isGreaterThan(min, value) ? min : this.isGreaterThan(value, max) ? max : value;
    };
    NumberPicker.prototype.setFocus = function (status) {
        var format = this.props.format;
        // Only trigger `setState` if `format` is settled to avoid unnecessary rendering
        if (typeof format === 'function') {
            this.setState({
                hasFocused: status,
            });
        }
    };
    NumberPicker.prototype.onFocus = function (e) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var onFocus = this.props.onFocus;
        this.setFocus(true);
        onFocus && onFocus.apply(void 0, __spreadArray([e], __read(args), false));
    };
    NumberPicker.prototype.onBlur = function (e) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a = this.props, editable = _a.editable, stringMode = _a.stringMode;
        var displayValue = "".concat(this.state.displayValue);
        // 展示值合法但超出边界时，额外在Blur时触发onChange
        // 展示值非法时，回退前一个有效值
        if (editable === true && !isNaN(displayValue) && !this.withinMinMax(displayValue)) {
            var valueCorrected = this.correctValue(displayValue);
            valueCorrected = stringMode ? Big(valueCorrected).toFixed(this.getPrecision()) : valueCorrected;
            if (this.state.value !== valueCorrected) {
                this.setValue({ value: valueCorrected, e: e });
            }
            this.setDisplayValue({ displayValue: valueCorrected });
        }
        else {
            this.setDisplayValue({ displayValue: this.state.value });
        }
        this.setFocus(false);
        var onBlur = this.props.onBlur;
        onBlur && onBlur.apply(void 0, __spreadArray([e], __read(args), false));
    };
    NumberPicker.prototype.withinMinMax = function (value) {
        var _a = this.state, max = _a.max, min = _a.min;
        if (isNaN(value) || this.isGreaterThan(value, max) || this.isGreaterThan(min, value))
            return false;
        return true;
    };
    NumberPicker.prototype.withinMin = function (value) {
        var min = this.state.min;
        if (isNaN(value) || this.isGreaterThan(min, value))
            return false;
        return true;
    };
    NumberPicker.prototype.setDisplayValue = function (_a) {
        var displayValue = _a.displayValue, _b = _a.onlyDisplay, onlyDisplay = _b === void 0 ? false : _b;
        this.setState({ displayValue: displayValue, onlyDisplay: onlyDisplay });
    };
    NumberPicker.prototype.getDisplayValue = function () {
        var _a = this.state, displayValue = _a.displayValue, hasFocused = _a.hasFocused;
        var format = this.props.format;
        return typeof format === 'function' && !hasFocused
            ? format(displayValue)
            : // 避免原生input将number类型的-0，渲染为0
                typeof displayValue === 'number' && 1 / displayValue === -Infinity
                    ? '-0'
                    : displayValue;
    };
    /**
     * 输入时判断是否要触发onChange
     * 正常触发: 合法数字 (eg: -0 -0. 0.1)；超出最大值
     * 不触发: 1. 非数字（eg: - ）, 2. 小于最小值(输入需要过程由小变大)
     */
    NumberPicker.prototype.shouldFireOnChange = function (value) {
        if (isNaN(value) || !this.withinMin(value)) {
            return false;
        }
        return true;
    };
    NumberPicker.prototype.onChange = function (value, e) {
        // ignore space & Compatible Chinese Input Method
        value = value.replace('。', '.').trim();
        // 过滤非数字
        value = value.replace(/[^-.\d]/g, '');
        var onlyDisplay = false;
        if (this.props.editable === true && this.shouldFireOnChange(value)) {
            var valueCorrected = this.correctValue(value);
            if (this.state.value !== valueCorrected) {
                this.setValue({ value: valueCorrected, e: e });
            }
            if (typeof this.props.max !== 'undefined' && this.isGreaterThan(value, this.state.max)) {
                value = String(valueCorrected);
            }
        }
        else {
            onlyDisplay = true;
        }
        // 【不应支持】如果输入为满足精度要求的纯数字，底层input.value设置为数字类型而非string
        // if (`${valueCorrected}` === value) value = valueCorrected;
        this.setDisplayValue({ displayValue: value, onlyDisplay: onlyDisplay });
    };
    NumberPicker.prototype.correctValue = function (value) {
        var val = value;
        // take care of isNaN('')=false
        if (val !== '') {
            // 精度订正：直接cut，不四舍五入
            var precisionSet = this.getPrecision();
            var precisionCurrent = value.length - value.indexOf('.') - 1;
            var dotIndex = value.indexOf('.');
            // precision === 0 should cut '.' for stringMode
            var cutPosition = precisionSet !== 0 ? dotIndex + 1 + precisionSet : dotIndex + precisionSet;
            if (dotIndex > -1 && precisionCurrent > precisionSet)
                val = val.substr(0, cutPosition);
            // 边界订正：
            val = this.correctBoundary(val);
            val = this.props.stringMode ? Big(val).toFixed() : Number(val);
        }
        if (isNaN(val))
            val = this.state.value;
        if ("".concat(val) !== "".concat(value)) {
            // .0* 到 .x0* 不该触发onCorrect
            if (!/\.[0-9]*0+$/g.test(value)) {
                this.props.onCorrect({
                    currentValue: val,
                    oldValue: value,
                });
            }
        }
        return val;
    };
    NumberPicker.prototype.setValue = function (_a) {
        var value = _a.value, e = _a.e, triggerType = _a.triggerType;
        if (!('value' in this.props) || value === this.props.value) {
            this.setState({
                value: value,
            });
        }
        this.props.onChange(isNaN(value) || value === '' ? undefined : value, __assign(__assign({}, e), { triggerType: triggerType }));
    };
    NumberPicker.prototype.getPrecision = function () {
        var stepString = this.props.step.toString();
        if (stepString.indexOf('e-') >= 0) {
            return parseInt(stepString.slice(stepString.indexOf('e-')), 10);
        }
        var precision = 0;
        if (stepString.indexOf('.') >= 0) {
            precision = stepString.length - stepString.indexOf('.') - 1;
        }
        return Math.max(precision, this.props.precision);
    };
    NumberPicker.prototype.getPrecisionFactor = function () {
        var precision = this.getPrecision();
        return Math.pow(10, precision);
    };
    NumberPicker.prototype.onKeyDown = function (e) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (e.keyCode === 38) {
            this.up(false, e);
        }
        else if (e.keyCode === 40) {
            this.down(false, e);
        }
        (_a = this.props).onKeyDown.apply(_a, __spreadArray([e], __read(args), false));
    };
    NumberPicker.prototype.up = function (disabled, e) {
        this.step('up', disabled, e);
    };
    NumberPicker.prototype.down = function (disabled, e) {
        this.step('down', disabled, e);
    };
    NumberPicker.prototype.step = function (type, disabled, e) {
        if (e) {
            e.preventDefault();
        }
        var onDisabled = this.props.onDisabled;
        if (disabled) {
            return onDisabled(e);
        }
        var value = this.state.value;
        // 受控下，可能强制回填非法值
        if (isNaN(value)) {
            return;
        }
        if (value === '' && !this.props.stringMode) {
            value = 0;
        }
        var val = this["".concat(type, "Step")](value);
        val = this.correctBoundary(val);
        // 受控下，显示的值应为受控value
        if (!('value' in this.props)) {
            this.setDisplayValue({ displayValue: val });
        }
        this.setValue({ value: val, e: e, triggerType: type });
    };
    NumberPicker.prototype.upStep = function (val) {
        var _a = this.props, step = _a.step, stringMode = _a.stringMode;
        var precisionFactor = this.getPrecisionFactor();
        if (typeof val === 'number' && !stringMode) {
            var result = (precisionFactor * val + precisionFactor * step) / precisionFactor;
            return this.hackChrome(result);
        }
        return Big(val || '0')
            .plus(step)
            .toFixed(this.getPrecision());
    };
    NumberPicker.prototype.downStep = function (val) {
        var _a = this.props, step = _a.step, stringMode = _a.stringMode;
        var precisionFactor = this.getPrecisionFactor();
        if (typeof val === 'number' && !stringMode) {
            var result = (precisionFactor * val - precisionFactor * step) / precisionFactor;
            return this.hackChrome(result);
        }
        return Big(val || '0')
            .minus(step)
            .toFixed(this.getPrecision());
    };
    /**
     * fix bug in chrome browser
     * 0.28 + 0.01 = 0.29000000000000004
     * 0.29 - 0.01 = 0.27999999999999997
     * @param {Number} value value
     */
    NumberPicker.prototype.hackChrome = function (value) {
        var precision = this.getPrecision();
        if (precision > 0) {
            return Number(Number(value).toFixed(precision));
        }
        return value;
    };
    NumberPicker.prototype.focus = function () {
        this.inputRef.getInstance().focus();
    };
    NumberPicker.prototype.saveInputRef = function (ref) {
        this.inputRef = ref;
    };
    NumberPicker.prototype.getInputNode = function () {
        return this.inputRef;
    };
    NumberPicker.prototype.handleMouseDown = function (e) {
        e.preventDefault();
    };
    NumberPicker.prototype.render = function () {
        var _a, _b;
        var _c = this.props, device = _c.device, prefix = _c.prefix, rtl = _c.rtl, disabled = _c.disabled, style = _c.style, className = _c.className, size = _c.size, autoFocus = _c.autoFocus, editable = _c.editable, state = _c.state, label = _c.label, _d = _c.upBtnProps, upBtnProps = _d === void 0 ? {} : _d, _e = _c.downBtnProps, downBtnProps = _e === void 0 ? {} : _e, innerAfter = _c.innerAfter, isPreview = _c.isPreview, renderPreview = _c.renderPreview, hasTrigger = _c.hasTrigger, alwaysShowTrigger = _c.alwaysShowTrigger;
        var _f = this.state, max = _f.max, min = _f.min;
        var type = device === 'phone' || this.props.type === 'inline' ? 'inline' : 'normal';
        var prefixCls = "".concat(prefix, "number-picker");
        var cls = classNames((_a = {},
            _a[prefixCls] = true,
            _a["".concat(prefixCls, "-").concat(type)] = type,
            _a["".concat(prefix).concat(size)] = true,
            _a["".concat(prefixCls, "-show-trigger")] = alwaysShowTrigger,
            _a["".concat(prefixCls, "-no-trigger")] = !hasTrigger,
            _a["".concat(prefix, "disabled")] = disabled,
            _a[className] = className,
            _a));
        var upDisabled = false;
        var downDisabled = false;
        var value = this.state.value;
        if (!isNaN(value)) {
            if (!this.isGreaterThan(max, value)) {
                upDisabled = true;
            }
            if (this.isGreaterThan(min, value) || min === value) {
                downDisabled = true;
            }
        }
        var extra = null, innerAfterClassName = null, addonBefore = null, addonAfter = null;
        if (type === 'normal') {
            extra = (React.createElement("span", { className: "".concat(prefixCls, "-handler") },
                React.createElement(Button, __assign({}, upBtnProps, { onMouseDown: this.handleMouseDown, disabled: disabled, className: "".concat(upBtnProps.className || '', " ").concat(upDisabled ? 'disabled' : ''), onClick: this.up.bind(this, upDisabled), tabIndex: -1 }),
                    React.createElement(Icon, { type: "arrow-up", className: "".concat(prefixCls, "-up-icon") })),
                React.createElement(Button, __assign({}, downBtnProps, { onMouseDown: this.handleMouseDown, disabled: disabled, className: "".concat(downBtnProps.className || '', " ").concat(downDisabled ? 'disabled' : ''), onClick: this.down.bind(this, downDisabled), tabIndex: -1 }),
                    React.createElement(Icon, { type: "arrow-down", className: "".concat(prefixCls, "-down-icon") }))));
        }
        else {
            addonBefore = (React.createElement(Button, __assign({}, downBtnProps, { size: size, disabled: disabled, className: "".concat(downBtnProps.className || '', " ").concat(downDisabled ? 'disabled' : ''), onClick: this.down.bind(this, downDisabled), tabIndex: -1 }),
                React.createElement(Icon, { type: "minus", className: "".concat(prefixCls, "-minus-icon") })));
            addonAfter = (React.createElement(Button, __assign({}, upBtnProps, { size: size, disabled: disabled, className: "".concat(upBtnProps.className || '', " ").concat(upDisabled ? 'disabled' : ''), onClick: this.up.bind(this, upDisabled), tabIndex: -1 }),
                React.createElement(Icon, { type: "add", className: "".concat(prefixCls, "-add-icon") })));
        }
        var others = obj.pickOthers(NumberPicker.propTypes, this.props);
        var dataAttrs = obj.pickAttrsWith(this.props, 'data-');
        var previewCls = classNames((_b = {},
            _b["".concat(prefix, "form-preview")] = true,
            _b[className] = !!className,
            _b));
        if (isPreview) {
            if (typeof renderPreview === 'function') {
                return (React.createElement("div", __assign({}, others, { style: style, className: previewCls }), renderPreview(this.getDisplayValue(), this.props)));
            }
            return (React.createElement("p", __assign({}, others, { style: { style: style }, className: previewCls }),
                this.getDisplayValue(),
                "\u00A0",
                innerAfter));
        }
        return (React.createElement("span", __assign({ className: cls, style: style, dir: rtl ? 'rtl' : undefined }, dataAttrs),
            React.createElement(Input, __assign({}, others, { hasClear: false, "aria-valuemax": max, "aria-valuemin": min, state: state === 'error' ? 'error' : null, onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), onKeyDown: this.onKeyDown.bind(this), autoFocus: autoFocus, readOnly: !editable, value: this.getDisplayValue(), disabled: disabled, size: size, onChange: this.onChange.bind(this), ref: this.saveInputRef.bind(this), label: label, innerAfter: innerAfter, extra: hasTrigger ? extra : null, addonBefore: addonBefore, addonAfter: addonAfter, composition: true }))));
    };
    NumberPicker.propTypes = {
        /**
         * 样式前缀
         */
        prefix: PropTypes.string,
        /**
         * 设置类型(当 device 为 phone 时，NumberPicker 的类型强制为 normal，不可通过 type 修改)
         * @enumdesc 普通, 内联
         */
        type: PropTypes.oneOf(['normal', 'inline']),
        /**
         * 大小
         */
        size: PropTypes.oneOf(['large', 'medium', 'small']),
        /**
         * 当前值
         */
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 默认值
         */
        defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool,
        /**
         * 步长
         */
        step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 保留小数点后位数
         */
        precision: PropTypes.number,
        /**
         * 用户是否可以输入
         */
        editable: PropTypes.bool,
        /**
         * 自动焦点
         */
        autoFocus: PropTypes.bool,
        /**
         * 数值被改变的事件
         * @param {Number|String} value 数据
         * @param {Event} e DOM事件对象
         */
        onChange: PropTypes.func,
        /**
         * 键盘按下
         * @param {Event} e DOM事件对象
         */
        onKeyDown: PropTypes.func,
        /**
         * 焦点获得
         * @param {Event} e DOM事件对象
         */
        onFocus: PropTypes.func,
        /**
         * 焦点失去
         * @param {Event} e DOM事件对象
         */
        onBlur: PropTypes.func,
        /**
         * 数值订正后的回调
         * @param {Object} obj {currentValue,oldValue:String}
         */
        onCorrect: PropTypes.func,
        onDisabled: PropTypes.func, // 兼容0.x onDisabled
        /**
         * 最大值
         */
        max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 最小值
         */
        min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * 自定义class
         */
        className: PropTypes.string,
        /**
         * 自定义内联样式
         */
        style: PropTypes.object,
        state: PropTypes.oneOf(['error']),
        /**
         * 格式化当前值
         * @param {Number} value
         * @return {String|Number}
         */
        format: PropTypes.func,
        /**
         * 增加按钮的props
         */
        upBtnProps: PropTypes.object,
        /**
         * 减少按钮的props
         */
        downBtnProps: PropTypes.object,
        /**
         * 内联 左侧label
         */
        label: PropTypes.node,
        /**
         * 内联 右侧附加内容
         */
        innerAfter: PropTypes.node,
        rtl: PropTypes.bool,
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {Number|String} value 当前值
         * @param {Object} props 传入的组件参数
         * @returns {reactNode} Element 渲染内容
         */
        renderPreview: PropTypes.func,
        /**
         * 预设屏幕宽度
         */
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        /**
         * 是否展示点击按钮
         */
        hasTrigger: PropTypes.bool,
        /**
         * 是否一直显示点击按钮(无须hover)
         */
        alwaysShowTrigger: PropTypes.bool,
        /**
         * 开启大数支持，输入输出均为string类型
         * @version 1.24
         */
        stringMode: PropTypes.bool,
    };
    NumberPicker.defaultProps = {
        prefix: 'next-',
        // max: MAX_SAFE_INTEGER,
        // min: MIN_SAFE_INTEGER,
        type: 'normal',
        size: 'medium',
        step: 1,
        style: {},
        precision: 0,
        editable: true,
        onChange: func.noop,
        onKeyDown: func.noop,
        onBlur: func.noop,
        onCorrect: func.noop,
        onDisabled: func.noop,
        hasTrigger: true,
        alwaysShowTrigger: false,
        stringMode: false,
    };
    return NumberPicker;
}(React.Component));
export default polyfill(NumberPicker);

import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BigNumber from 'bignumber.js';
import { polyfill } from 'react-lifecycles-compat';

import Icon from '../icon';
import Button from '../button';
import Input from '../input';
import { func, obj } from '../util';

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -Math.pow(2, 53) + 1;

/** NumberPicker */
var NumberPicker = (_temp = _class = function (_React$Component) {
    _inherits(NumberPicker, _React$Component);

    function NumberPicker(props) {
        _classCallCheck(this, NumberPicker);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        var defaultValue = props.defaultValue,
            stringMode = props.stringMode;


        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else {
            value = defaultValue;
        }
        value = value === undefined || value === null ? '' : stringMode ? '' + value : value;
        _this.state = {
            value: value,
            hasFocused: false,
            onlyDisplay: false,
            displayValue: value,
            max: stringMode ? Infinity : MAX_SAFE_INTEGER,
            min: stringMode ? -Infinity : MIN_SAFE_INTEGER
        };
        return _this;
    }

    NumberPicker.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        // 用户键入非法值后render逻辑，未触发onChange，业务组件无感知，不强制受控value
        if (prevState.onlyDisplay) {
            return {
                value: prevState.value,
                displayValue: prevState.displayValue,
                onlyDisplay: false
            };
        }

        var state = {};
        // 一般受控render逻辑
        if ('value' in nextProps && '' + nextProps.value !== '' + prevState.value) {
            var value = nextProps.value,
                stringMode = nextProps.stringMode;

            var newValue = value === undefined || value === null ? '' : stringMode ? '' + value : value;
            state.value = newValue;
            state.displayValue = newValue;
        }
        var min = nextProps.min,
            max = nextProps.max;

        if ('min' in nextProps && min !== prevState.min) {
            state.min = min;
        }

        if ('max' in nextProps && max !== prevState.max) {
            state.max = max;
        }

        if (Object.keys(state).length) {
            return state;
        }

        return null;
    };

    NumberPicker.prototype.isGreaterThan = function isGreaterThan(v1, v2) {
        var stringMode = this.props.stringMode;

        if (stringMode) return BigNumber(v1).isGreaterThan(BigNumber(v2));
        return Number(v1) > Number(v2);
    };

    NumberPicker.prototype.correctBoundary = function correctBoundary(value) {
        var _state = this.state,
            max = _state.max,
            min = _state.min;

        return this.isGreaterThan(min, value) ? min : this.isGreaterThan(value, max) ? max : value;
    };

    NumberPicker.prototype.setFocus = function setFocus(status) {
        var format = this.props.format;
        // Only trigger `setState` if `format` is settled to avoid unnecessary rendering

        if (typeof format === 'function') {
            this.setState({
                hasFocused: status
            });
        }
    };

    NumberPicker.prototype.onFocus = function onFocus(e) {
        var onFocus = this.props.onFocus;

        this.setFocus(true);

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        onFocus && onFocus.apply(undefined, [e].concat(args));
    };

    NumberPicker.prototype.onBlur = function onBlur(e) {
        var _props = this.props,
            editable = _props.editable,
            stringMode = _props.stringMode;

        var displayValue = '' + this.state.displayValue;
        // 展示值合法但超出边界时，额外在Blur时触发onChange
        // 展示值非法时，回退前一个有效值
        if (editable === true && !isNaN(displayValue) && !this.shouldFireOnChange(displayValue) && !this.withinMinMax(displayValue)) {
            var valueCorrected = this.correctValue(displayValue);
            valueCorrected = stringMode ? BigNumber(valueCorrected).toFixed(this.getPrecision()) : valueCorrected;
            if (this.state.value !== valueCorrected) {
                this.setValue({ value: valueCorrected, e: e });
            }
            this.setDisplayValue({ displayValue: valueCorrected });
        } else {
            this.setDisplayValue({ displayValue: this.state.value });
        }
        this.setFocus(false);
        var onBlur = this.props.onBlur;

        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        onBlur && onBlur.apply(undefined, [e].concat(args));
    };

    NumberPicker.prototype.withinMinMax = function withinMinMax(value) {
        var _state2 = this.state,
            max = _state2.max,
            min = _state2.min;

        if (isNaN(value) || this.isGreaterThan(value, max) || this.isGreaterThan(min, value)) return false;
        return true;
    };

    NumberPicker.prototype.setDisplayValue = function setDisplayValue(_ref) {
        var displayValue = _ref.displayValue,
            _ref$onlyDisplay = _ref.onlyDisplay,
            onlyDisplay = _ref$onlyDisplay === undefined ? false : _ref$onlyDisplay;

        this.setState({ displayValue: displayValue, onlyDisplay: onlyDisplay });
    };

    NumberPicker.prototype.getDisplayValue = function getDisplayValue() {
        var _state3 = this.state,
            displayValue = _state3.displayValue,
            hasFocused = _state3.hasFocused;
        var format = this.props.format;


        return typeof format === 'function' && !hasFocused ? format(displayValue) : // 避免原生input将number类型的-0，渲染为0
        typeof displayValue === 'number' && 1 / displayValue === -Infinity ? '-0' : displayValue;
    };

    NumberPicker.prototype.shouldFireOnChange = function shouldFireOnChange(value) {
        // 不触发onChange：a.非数字  b.超出边界的数字输入
        if (isNaN(value) || !this.withinMinMax(value)) {
            return false;
        }
        return true;
    };

    NumberPicker.prototype.onChange = function onChange(value, e) {
        // ignore space & Compatible Chinese Input Method
        value = value.replace('。', '.').trim();
        var onlyDisplay = false;
        if (this.props.editable === true && this.shouldFireOnChange(value)) {
            var valueCorrected = this.correctValue(value);
            if (this.state.value !== valueCorrected) {
                this.setValue({ value: valueCorrected, e: e });
            }
        } else {
            onlyDisplay = true;
        }

        // 【不应支持】如果输入为满足精度要求的纯数字，底层input.value设置为数字类型而非string
        // if (`${valueCorrected}` === value) value = valueCorrected;

        this.setDisplayValue({ displayValue: value, onlyDisplay: onlyDisplay });
    };

    NumberPicker.prototype.correctValue = function correctValue(value) {
        var val = value;

        // take care of isNaN('')=false
        if (val !== '') {
            // 精度订正：直接cut，不四舍五入
            var precisionSet = this.getPrecision();
            var precisionCurrent = value.length - value.indexOf('.') - 1;
            var dotIndex = value.indexOf('.');
            // precision === 0 should cut '.' for stringMode
            var cutPosition = precisionSet !== 0 ? dotIndex + 1 + precisionSet : dotIndex + precisionSet;
            if (dotIndex > -1 && precisionCurrent > precisionSet) val = val.substr(0, cutPosition);

            // 边界订正：
            val = this.correctBoundary(val);
            val = this.props.stringMode ? BigNumber(val).toFixed() : Number(val);
        }

        if (isNaN(val)) val = this.state.value;

        if ('' + val !== '' + value) {
            // .0* 到 .x0* 不该触发onCorrect
            if (!/\.[0-9]*0+$/g.test(value)) {
                this.props.onCorrect({
                    currentValue: val,
                    oldValue: value
                });
            }
        }

        return val;
    };

    NumberPicker.prototype.setValue = function setValue(_ref2) {
        var value = _ref2.value,
            e = _ref2.e,
            triggerType = _ref2.triggerType;

        if (!('value' in this.props) || value === this.props.value) {
            this.setState({
                value: value
            });
        }

        this.props.onChange(isNaN(value) || value === '' ? undefined : value, _extends({}, e, {
            triggerType: triggerType
        }));
    };

    NumberPicker.prototype.getPrecision = function getPrecision() {
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

    NumberPicker.prototype.getPrecisionFactor = function getPrecisionFactor() {
        var precision = this.getPrecision();
        return Math.pow(10, precision);
    };

    NumberPicker.prototype.onKeyDown = function onKeyDown(e) {
        var _props2;

        if (e.keyCode === 38) {
            this.up(false, e);
        } else if (e.keyCode === 40) {
            this.down(false, e);
        }

        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
        }

        (_props2 = this.props).onKeyDown.apply(_props2, [e].concat(args));
    };

    NumberPicker.prototype.up = function up(disabled, e) {
        this.step('up', disabled, e);
    };

    NumberPicker.prototype.down = function down(disabled, e) {
        this.step('down', disabled, e);
    };

    NumberPicker.prototype.step = function step(type, disabled, e) {
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

        var val = this[type + 'Step'](value);
        val = this.correctBoundary(val);
        this.setDisplayValue({ displayValue: val });
        this.setValue({ value: val, e: e, triggerType: type });
    };

    NumberPicker.prototype.upStep = function upStep(val) {
        var _props3 = this.props,
            step = _props3.step,
            stringMode = _props3.stringMode;

        var precisionFactor = this.getPrecisionFactor();
        if (typeof val === 'number' && !stringMode) {
            var result = (precisionFactor * val + precisionFactor * step) / precisionFactor;
            return this.hackChrome(result);
        }
        return BigNumber(val || '0').plus(step).toFixed(this.getPrecision());
    };

    NumberPicker.prototype.downStep = function downStep(val) {
        var _props4 = this.props,
            step = _props4.step,
            stringMode = _props4.stringMode;

        var precisionFactor = this.getPrecisionFactor();
        if (typeof val === 'number' && !stringMode) {
            var result = (precisionFactor * val - precisionFactor * step) / precisionFactor;
            return this.hackChrome(result);
        }
        return BigNumber(val || '0').minus(step).toFixed(this.getPrecision());
    };

    /**
     * fix bug in chrome browser
     * 0.28 + 0.01 = 0.29000000000000004
     * 0.29 - 0.01 = 0.27999999999999997
     * @param {Number} value value
     */


    NumberPicker.prototype.hackChrome = function hackChrome(value) {
        var precision = this.getPrecision();
        if (precision > 0) {
            return Number(Number(value).toFixed(precision));
        }
        return value;
    };

    NumberPicker.prototype.focus = function focus() {
        this.inputRef.getInstance().focus();
    };

    NumberPicker.prototype.saveInputRef = function saveInputRef(ref) {
        this.inputRef = ref;
    };

    NumberPicker.prototype.getInputNode = function getInputNode() {
        return this.inputRef;
    };

    NumberPicker.prototype.handleMouseDown = function handleMouseDown(e) {
        e.preventDefault();
    };

    NumberPicker.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props5 = this.props,
            device = _props5.device,
            prefix = _props5.prefix,
            rtl = _props5.rtl,
            disabled = _props5.disabled,
            style = _props5.style,
            className = _props5.className,
            size = _props5.size,
            autoFocus = _props5.autoFocus,
            editable = _props5.editable,
            state = _props5.state,
            label = _props5.label,
            _props5$upBtnProps = _props5.upBtnProps,
            upBtnProps = _props5$upBtnProps === undefined ? {} : _props5$upBtnProps,
            _props5$downBtnProps = _props5.downBtnProps,
            downBtnProps = _props5$downBtnProps === undefined ? {} : _props5$downBtnProps,
            innerAfter = _props5.innerAfter,
            isPreview = _props5.isPreview,
            renderPreview = _props5.renderPreview,
            hasTrigger = _props5.hasTrigger,
            alwaysShowTrigger = _props5.alwaysShowTrigger;
        var _state4 = this.state,
            max = _state4.max,
            min = _state4.min;

        var type = device === 'phone' || this.props.type === 'inline' ? 'inline' : 'normal';

        var prefixCls = prefix + 'number-picker';

        var cls = classNames((_classNames = {}, _classNames[prefixCls] = true, _classNames[prefixCls + '-' + type] = type, _classNames['' + prefix + size] = true, _classNames[prefixCls + '-show-trigger'] = alwaysShowTrigger, _classNames[prefixCls + '-no-trigger'] = !hasTrigger, _classNames[prefix + 'disabled'] = disabled, _classNames[className] = className, _classNames));

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

        var extra = null,
            innerAfterClassName = null,
            addonBefore = null,
            addonAfter = null;
        if (type === 'normal') {
            extra = React.createElement(
                'span',
                { className: prefixCls + '-handler' },
                React.createElement(
                    Button,
                    _extends({}, upBtnProps, {
                        onMouseDown: this.handleMouseDown,
                        disabled: disabled,
                        className: (upBtnProps.className || '') + ' ' + (upDisabled ? 'disabled' : ''),
                        onClick: this.up.bind(this, upDisabled),
                        tabIndex: -1
                    }),
                    React.createElement(Icon, { type: 'arrow-up', className: prefixCls + '-up-icon' })
                ),
                React.createElement(
                    Button,
                    _extends({}, downBtnProps, {
                        onMouseDown: this.handleMouseDown,
                        disabled: disabled,
                        className: (downBtnProps.className || '') + ' ' + (downDisabled ? 'disabled' : ''),
                        onClick: this.down.bind(this, downDisabled),
                        tabIndex: -1
                    }),
                    React.createElement(Icon, { type: 'arrow-down', className: prefixCls + '-down-icon' })
                )
            );
        } else {
            addonBefore = React.createElement(
                Button,
                _extends({}, downBtnProps, {
                    size: size,
                    disabled: disabled,
                    className: (downBtnProps.className || '') + ' ' + (downDisabled ? 'disabled' : ''),
                    onClick: this.down.bind(this, downDisabled),
                    tabIndex: -1
                }),
                React.createElement(Icon, { type: 'minus', className: prefixCls + '-minus-icon' })
            );
            addonAfter = React.createElement(
                Button,
                _extends({}, upBtnProps, {
                    size: size,
                    disabled: disabled,
                    className: (upBtnProps.className || '') + ' ' + (upDisabled ? 'disabled' : ''),
                    onClick: this.up.bind(this, upDisabled),
                    tabIndex: -1
                }),
                React.createElement(Icon, { type: 'add', className: prefixCls + '-add-icon' })
            );
        }

        var others = obj.pickOthers(NumberPicker.propTypes, this.props);
        var dataAttrs = obj.pickAttrsWith(this.props, 'data-');

        var previewCls = classNames((_classNames2 = {}, _classNames2[prefix + 'form-preview'] = true, _classNames2[className] = !!className, _classNames2));

        if (isPreview) {
            if (typeof renderPreview === 'function') {
                return React.createElement(
                    'div',
                    _extends({}, others, { style: style, className: previewCls }),
                    renderPreview(this.getDisplayValue(), this.props)
                );
            }
            return React.createElement(
                'p',
                _extends({}, others, { style: { style: style }, className: previewCls }),
                this.getDisplayValue()
            );
        }

        return React.createElement(
            'span',
            _extends({ className: cls, style: style, dir: rtl ? 'rtl' : undefined }, dataAttrs),
            React.createElement(Input, _extends({}, others, {
                hasClear: false,
                'aria-valuemax': max,
                'aria-valuemin': min,
                state: state === 'error' ? 'error' : null,
                onBlur: this.onBlur.bind(this),
                onFocus: this.onFocus.bind(this),
                onKeyDown: this.onKeyDown.bind(this),
                autoFocus: autoFocus,
                readOnly: !editable,
                value: this.getDisplayValue(),
                disabled: disabled,
                size: size,
                onChange: this.onChange.bind(this),
                ref: this.saveInputRef.bind(this),
                label: label,
                innerAfter: innerAfter,
                extra: hasTrigger ? extra : null,
                addonBefore: addonBefore,
                addonAfter: addonAfter,
                composition: true
            }))
        );
    };

    return NumberPicker;
}(React.Component), _class.propTypes = {
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
    stringMode: PropTypes.bool
}, _class.defaultProps = {
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
    stringMode: false
}, _temp);
NumberPicker.displayName = 'NumberPicker';


export default polyfill(NumberPicker);
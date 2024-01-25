import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Big from 'big.js';
import { polyfill } from 'react-lifecycles-compat';

import Icon from '../icon';
import Button from '../button';
import Input from '../input';
import { func, obj } from '../util';

const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -Math.pow(2, 53) + 1;

const { isNil } = obj;
/** NumberPicker */
class NumberPicker extends React.Component {
    static propTypes = {
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

    static defaultProps = {
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

    constructor(props) {
        super(props);
        const { defaultValue, stringMode } = props;

        let value;
        if ('value' in props) {
            value = props.value;
        } else {
            value = defaultValue;
        }
        value = value === undefined || value === null ? '' : stringMode ? `${value}` : value;
        this.state = {
            value,
            hasFocused: false,
            onlyDisplay: false,
            displayValue: value,
            max: stringMode ? Infinity : MAX_SAFE_INTEGER,
            min: stringMode ? -Infinity : MIN_SAFE_INTEGER,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // 用户键入非法值后render逻辑，未触发onChange，业务组件无感知，不强制受控value
        if (prevState.onlyDisplay) {
            return {
                value: prevState.value,
                displayValue: prevState.displayValue,
                onlyDisplay: false,
            };
        }

        const state = {};
        const { value, stringMode } = nextProps;
        // 一般受控render逻辑
        if ('value' in nextProps && `${nextProps.value}` !== `${prevState.value}`) {
            const newValue =
                value === undefined || value === null ? '' : stringMode ? `${value}` : value;
            state.value = newValue;
            // 因为 Number('') === 0，所以会导致value=0赋值不生效
            if (
                prevState.displayValue === '' ||
                Number(prevState.displayValue) !== nextProps.value
            ) {
                state.displayValue = newValue;
            }
        }

        // 如果是undefined或null，应该不限制最大最小值
        const { min, max } = nextProps;
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
    }

    isGreaterThan(v1, v2) {
        const { stringMode } = this.props;
        if (stringMode) {
            try {
                return Big(v1).gt(v2);
            } catch (e) {
                // big.js 遇到 Infinity 和 NaN 异常回退到 Number
                return Number(v1) > Number(v2);
            }
        }
        return Number(v1) > Number(v2);
    }

    correctBoundary(value) {
        const { max, min } = this.state;
        return this.isGreaterThan(min, value) ? min : this.isGreaterThan(value, max) ? max : value;
    }

    setFocus(status) {
        const { format } = this.props;
        // Only trigger `setState` if `format` is settled to avoid unnecessary rendering
        if (typeof format === 'function') {
            this.setState({
                hasFocused: status,
            });
        }
    }

    onFocus(e, ...args) {
        const { onFocus } = this.props;
        this.setFocus(true);
        onFocus && onFocus(e, ...args);
    }

    onBlur(e, ...args) {
        const { editable, stringMode } = this.props;
        const displayValue = `${this.state.displayValue}`;
        // 展示值合法但超出边界时，额外在Blur时触发onChange
        // 展示值非法时，回退前一个有效值
        if (editable === true && !isNaN(displayValue) && !this.withinMinMax(displayValue)) {
            let valueCorrected = this.correctValue(displayValue);
            valueCorrected = stringMode
                ? Big(valueCorrected).toFixed(this.getPrecision())
                : valueCorrected;
            if (this.state.value !== valueCorrected) {
                this.setValue({ value: valueCorrected, e });
            }
            this.setDisplayValue({ displayValue: valueCorrected });
        } else {
            this.setDisplayValue({ displayValue: this.state.value });
        }

        this.setFocus(false);
        const { onBlur } = this.props;
        onBlur && onBlur(e, ...args);
    }

    withinMinMax(value) {
        const { max, min } = this.state;
        if (isNaN(value) || this.isGreaterThan(value, max) || this.isGreaterThan(min, value))
            return false;
        return true;
    }

    withinMin(value) {
        const { min } = this.state;
        if (isNaN(value) || this.isGreaterThan(min, value)) return false;
        return true;
    }

    setDisplayValue({ displayValue, onlyDisplay = false }) {
        this.setState({ displayValue, onlyDisplay });
    }

    getDisplayValue() {
        const { displayValue, hasFocused } = this.state;
        const { format } = this.props;

        return typeof format === 'function' && !hasFocused
            ? format(displayValue)
            : // 避免原生input将number类型的-0，渲染为0
              typeof displayValue === 'number' && 1 / displayValue === -Infinity
              ? '-0'
              : displayValue;
    }

    /**
     * 输入时判断是否要触发onChange
     * 正常触发: 合法数字 (eg: -0 -0. 0.1)；超出最大值
     * 不触发: 1. 非数字（eg: - ）, 2. 小于最小值(输入需要过程由小变大)
     */
    shouldFireOnChange(value) {
        if (isNaN(value) || !this.withinMin(value)) {
            return false;
        }
        return true;
    }

    onChange(value, e) {
        // ignore space & Compatible Chinese Input Method
        value = value.replace('。', '.').trim();
        // 过滤非数字
        value = value.replace(/[^-.\d]/g, '');

        let onlyDisplay = false;
        if (this.props.editable === true && this.shouldFireOnChange(value)) {
            const valueCorrected = this.correctValue(value);
            if (this.state.value !== valueCorrected) {
                this.setValue({ value: valueCorrected, e });
            }
            if (
                typeof this.props.max !== 'undefined' &&
                this.isGreaterThan(value, this.state.max)
            ) {
                value = String(valueCorrected);
            }
        } else {
            onlyDisplay = true;
        }

        // 【不应支持】如果输入为满足精度要求的纯数字，底层input.value设置为数字类型而非string
        // if (`${valueCorrected}` === value) value = valueCorrected;

        this.setDisplayValue({ displayValue: value, onlyDisplay });
    }

    correctValue(value) {
        let val = value;

        // take care of isNaN('')=false
        if (val !== '') {
            // 精度订正：直接cut，不四舍五入
            const precisionSet = this.getPrecision();
            const precisionCurrent = value.length - value.indexOf('.') - 1;
            const dotIndex = value.indexOf('.');
            // precision === 0 should cut '.' for stringMode
            const cutPosition =
                precisionSet !== 0 ? dotIndex + 1 + precisionSet : dotIndex + precisionSet;
            if (dotIndex > -1 && precisionCurrent > precisionSet) val = val.substr(0, cutPosition);

            // 边界订正：
            val = this.correctBoundary(val);
            val = this.props.stringMode ? Big(val).toFixed() : Number(val);
        }

        if (isNaN(val)) val = this.state.value;

        if (`${val}` !== `${value}`) {
            // .0* 到 .x0* 不该触发onCorrect
            if (!/\.[0-9]*0+$/g.test(value)) {
                this.props.onCorrect({
                    currentValue: val,
                    oldValue: value,
                });
            }
        }

        return val;
    }

    setValue({ value, e, triggerType }) {
        if (!('value' in this.props) || value === this.props.value) {
            this.setState({
                value,
            });
        }

        this.props.onChange(isNaN(value) || value === '' ? undefined : value, {
            ...e,
            triggerType,
        });
    }

    getPrecision() {
        const stepString = this.props.step.toString();
        if (stepString.indexOf('e-') >= 0) {
            return parseInt(stepString.slice(stepString.indexOf('e-')), 10);
        }
        let precision = 0;
        if (stepString.indexOf('.') >= 0) {
            precision = stepString.length - stepString.indexOf('.') - 1;
        }

        return Math.max(precision, this.props.precision);
    }

    getPrecisionFactor() {
        const precision = this.getPrecision();
        return Math.pow(10, precision);
    }

    onKeyDown(e, ...args) {
        if (e.keyCode === 38) {
            this.up(false, e);
        } else if (e.keyCode === 40) {
            this.down(false, e);
        }
        this.props.onKeyDown(e, ...args);
    }

    up(disabled, e) {
        this.step('up', disabled, e);
    }

    down(disabled, e) {
        this.step('down', disabled, e);
    }

    step(type, disabled, e) {
        if (e) {
            e.preventDefault();
        }

        const { onDisabled } = this.props;
        if (disabled) {
            return onDisabled(e);
        }

        let value = this.state.value;
        // 受控下，可能强制回填非法值
        if (isNaN(value)) {
            return;
        }

        if (value === '' && !this.props.stringMode) {
            value = 0;
        }

        let val = this[`${type}Step`](value);
        val = this.correctBoundary(val);
        // 受控下，显示的值应为受控value
        if (!('value' in this.props)) {
            this.setDisplayValue({ displayValue: val });
        }

        this.setValue({ value: val, e, triggerType: type });
    }

    upStep(val) {
        const { step, stringMode } = this.props;
        const precisionFactor = this.getPrecisionFactor();
        if (typeof val === 'number' && !stringMode) {
            const result = (precisionFactor * val + precisionFactor * step) / precisionFactor;
            return this.hackChrome(result);
        }
        return Big(val || '0')
            .plus(step)
            .toFixed(this.getPrecision());
    }

    downStep(val) {
        const { step, stringMode } = this.props;
        const precisionFactor = this.getPrecisionFactor();
        if (typeof val === 'number' && !stringMode) {
            const result = (precisionFactor * val - precisionFactor * step) / precisionFactor;
            return this.hackChrome(result);
        }
        return Big(val || '0')
            .minus(step)
            .toFixed(this.getPrecision());
    }

    /**
     * fix bug in chrome browser
     * 0.28 + 0.01 = 0.29000000000000004
     * 0.29 - 0.01 = 0.27999999999999997
     * @param {Number} value value
     */
    hackChrome(value) {
        const precision = this.getPrecision();
        if (precision > 0) {
            return Number(Number(value).toFixed(precision));
        }
        return value;
    }

    focus() {
        this.inputRef.getInstance().focus();
    }

    saveInputRef(ref) {
        this.inputRef = ref;
    }

    getInputNode() {
        return this.inputRef;
    }

    handleMouseDown(e) {
        e.preventDefault();
    }

    render() {
        const {
            device,
            prefix,
            rtl,
            disabled,
            style,
            className,
            size,
            autoFocus,
            editable,
            state,
            label,
            upBtnProps = {},
            downBtnProps = {},
            innerAfter,
            isPreview,
            renderPreview,
            hasTrigger,
            alwaysShowTrigger,
        } = this.props;
        const { max, min } = this.state;
        const type = device === 'phone' || device === 'tablet' || this.props.type === 'inline' ? 'inline' : 'normal';

        const prefixCls = `${prefix}number-picker`;

        const cls = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${type}`]: type,
            [`${prefix}${size}`]: true,
            [`${prefixCls}-show-trigger`]: alwaysShowTrigger,
            [`${prefixCls}-no-trigger`]: !hasTrigger,
            [`${prefix}disabled`]: disabled,
            [className]: className,
        });

        let upDisabled = false;
        let downDisabled = false;
        const value = this.state.value;
        if (!isNaN(value)) {
            if (!this.isGreaterThan(max, value)) {
                upDisabled = true;
            }
            if (this.isGreaterThan(min, value) || min === value) {
                downDisabled = true;
            }
        }

        let extra = null,
            innerAfterClassName = null,
            addonBefore = null,
            addonAfter = null;
        if (type === 'normal') {
            extra = (
                <span className={`${prefixCls}-handler`}>
                    <Button
                        {...upBtnProps}
                        onMouseDown={this.handleMouseDown}
                        disabled={disabled}
                        className={`${upBtnProps.className || ''} ${upDisabled ? 'disabled' : ''}`}
                        onClick={this.up.bind(this, upDisabled)}
                        tabIndex={-1}
                    >
                        <Icon type="arrow-up" className={`${prefixCls}-up-icon`} />
                    </Button>
                    <Button
                        {...downBtnProps}
                        onMouseDown={this.handleMouseDown}
                        disabled={disabled}
                        className={`${downBtnProps.className || ''} ${downDisabled ? 'disabled' : ''}`}
                        onClick={this.down.bind(this, downDisabled)}
                        tabIndex={-1}
                    >
                        <Icon type="arrow-down" className={`${prefixCls}-down-icon`} />
                    </Button>
                </span>
            );
        } else {
            addonBefore = (
                <Button
                    {...downBtnProps}
                    size={size}
                    disabled={disabled}
                    className={`${downBtnProps.className || ''} ${downDisabled ? 'disabled' : ''}`}
                    onClick={this.down.bind(this, downDisabled)}
                    tabIndex={-1}
                >
                    <Icon type="minus" className={`${prefixCls}-minus-icon`} />
                </Button>
            );
            addonAfter = (
                <Button
                    {...upBtnProps}
                    size={size}
                    disabled={disabled}
                    className={`${upBtnProps.className || ''} ${upDisabled ? 'disabled' : ''}`}
                    onClick={this.up.bind(this, upDisabled)}
                    tabIndex={-1}
                >
                    <Icon type="add" className={`${prefixCls}-add-icon`} />
                </Button>
            );
        }

        const others = obj.pickOthers(NumberPicker.propTypes, this.props);
        const dataAttrs = obj.pickAttrsWith(this.props, 'data-');

        const previewCls = classNames({
            [`${prefix}form-preview`]: true,
            [className]: !!className,
        });

        if (isPreview) {
            if (typeof renderPreview === 'function') {
                return (
                    <div {...others} style={style} className={previewCls}>
                        {renderPreview(this.getDisplayValue(), this.props)}
                    </div>
                );
            }
            return (
                <p {...others} style={{ style }} className={previewCls}>
                    {this.getDisplayValue()}
                    &nbsp;{innerAfter}
                </p>
            );
        }

        return (
            <span className={cls} style={style} dir={rtl ? 'rtl' : undefined} {...dataAttrs}>
                <Input
                    {...others}
                    hasClear={false}
                    aria-valuemax={max}
                    aria-valuemin={min}
                    state={state === 'error' ? 'error' : null}
                    onBlur={this.onBlur.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
                    autoFocus={autoFocus}
                    readOnly={!editable}
                    value={this.getDisplayValue()}
                    disabled={disabled}
                    size={size}
                    onChange={this.onChange.bind(this)}
                    ref={this.saveInputRef.bind(this)}
                    label={label}
                    innerAfter={innerAfter}
                    extra={hasTrigger ? extra : null}
                    addonBefore={addonBefore}
                    addonAfter={addonAfter}
                    composition
                />
            </span>
        );
    }
}

export default polyfill(NumberPicker);

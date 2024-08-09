import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Big from 'big.js';
import { polyfill } from 'react-lifecycles-compat';

import Icon from '../icon';
import Button from '../button';
import Input from '../input';
import { func, obj } from '../util';
import type { NumberPickerProps, NumberPickerState } from './types';

const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -Math.pow(2, 53) + 1;

const { isNil } = obj;
/** NumberPicker */
class NumberPicker extends React.Component<NumberPickerProps, NumberPickerState> {
    static propTypes = {
        prefix: PropTypes.string,
        type: PropTypes.oneOf(['normal', 'inline']),
        size: PropTypes.oneOf(['large', 'medium', 'small']),
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        disabled: PropTypes.bool,
        step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        precision: PropTypes.number,
        editable: PropTypes.bool,
        autoFocus: PropTypes.bool,
        onChange: PropTypes.func,
        onKeyDown: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onCorrect: PropTypes.func,
        onDisabled: PropTypes.func,
        max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        className: PropTypes.string,
        style: PropTypes.object,
        state: PropTypes.oneOf(['error']),
        format: PropTypes.func,
        upBtnProps: PropTypes.object,
        downBtnProps: PropTypes.object,
        label: PropTypes.node,
        innerAfter: PropTypes.node,
        rtl: PropTypes.bool,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        hasTrigger: PropTypes.bool,
        alwaysShowTrigger: PropTypes.bool,
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

    static displayName = 'NumberPicker';

    inputRef: React.ComponentRef<typeof Input> | null;

    constructor(props: NumberPickerProps) {
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

    static getDerivedStateFromProps(nextProps: NumberPickerProps, prevState: NumberPickerState) {
        // 用户键入非法值后render逻辑，未触发onChange，业务组件无感知，不强制受控value
        if (prevState.onlyDisplay) {
            return {
                value: prevState.value,
                displayValue: prevState.displayValue,
                onlyDisplay: false,
            };
        }

        const state: Partial<NumberPickerState> = {};
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

    isGreaterThan(v1: string | number, v2: string | number) {
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

    correctBoundary(value: string | number) {
        const { max, min } = this.state;
        return this.isGreaterThan(min, value) ? min : this.isGreaterThan(value, max) ? max : value;
    }

    setFocus(status: boolean) {
        const { format } = this.props;
        // Only trigger `setState` if `format` is settled to avoid unnecessary rendering
        if (typeof format === 'function') {
            this.setState({
                hasFocused: status,
            });
        }
    }

    onFocus: NumberPickerProps['onFocus'] = (e, ...args) => {
        const { onFocus } = this.props;
        this.setFocus(true);
        onFocus && onFocus(e, ...args);
    };

    onBlur: NumberPickerProps['onBlur'] = (e, ...args) => {
        const { editable, stringMode, onBlur } = this.props;
        const displayValue = `${this.state.displayValue}`;
        // 展示值合法但超出边界时，额外在Blur时触发onChange
        // 展示值非法时，回退前一个有效值
        if (
            editable === true &&
            // @ts-expect-error 使用 isNaN 检查字符串形式的数字在类型上可能不是最佳实践
            !isNaN(displayValue) &&
            !this.withinMinMax(displayValue)
        ) {
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
        onBlur && onBlur(e, ...args);
    };

    withinMinMax(value: number | string) {
        const { max, min } = this.state;
        if (
            // @ts-expect-error 使用 isNaN 检查字符串形式的数字在类型上可能不是最佳实践
            isNaN(value) ||
            this.isGreaterThan(value, max) ||
            this.isGreaterThan(min, value)
        )
            return false;
        return true;
    }

    withinMin(value: number | string) {
        const { min } = this.state;
        // @ts-expect-error 使用 isNaN 检查字符串形式的数字在类型上可能不是最佳实践
        if (isNaN(value) || this.isGreaterThan(min, value)) return false;
        return true;
    }

    setDisplayValue({
        displayValue,
        onlyDisplay = false,
    }: {
        displayValue: string | number;
        onlyDisplay?: boolean;
    }) {
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
    shouldFireOnChange(value: string) {
        // @ts-expect-error 使用 isNaN 检查字符串形式的数字在类型上可能不是最佳实践
        if (isNaN(value) || !this.withinMin(value)) {
            return false;
        }
        return true;
    }

    onChange(
        value: string,
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.CompositionEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLInputElement>
    ) {
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

    correctValue(value: string) {
        let val: string | number = value;

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

        // @ts-expect-error 使用 isNaN 检查字符串形式的数字在类型上可能不是最佳实践
        if (isNaN(val)) val = this.state.value;

        if (`${val}` !== `${value}`) {
            // .0* 到 .x0* 不该触发onCorrect
            if (!/\.[0-9]*0+$/g.test(value)) {
                this.props.onCorrect!({
                    currentValue: val,
                    oldValue: value,
                });
            }
        }

        return val;
    }

    setValue({
        value,
        e,
        triggerType,
    }: {
        value: string | number;
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.CompositionEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLInputElement>;
        triggerType?: 'up' | 'down';
    }) {
        if (!('value' in this.props) || value === this.props.value) {
            this.setState({
                value,
            });
        }

        // @ts-expect-error 使用 isNaN 检查字符串形式的数字在类型上可能不是最佳实践
        this.props.onChange!(isNaN(value) || value === '' ? undefined : value, {
            ...e,
            triggerType,
        });
    }

    getPrecision() {
        const stepString = this.props.step!.toString();
        if (stepString.indexOf('e-') >= 0) {
            return parseInt(stepString.slice(stepString.indexOf('e-')), 10);
        }
        let precision = 0;
        if (stepString.indexOf('.') >= 0) {
            precision = stepString.length - stepString.indexOf('.') - 1;
        }

        return Math.max(precision, this.props.precision!);
    }

    getPrecisionFactor() {
        const precision = this.getPrecision();
        return Math.pow(10, precision);
    }

    onKeyDown: NumberPickerProps['onKeyDown'] = (e, ...args) => {
        if (e.keyCode === 38) {
            this.up(false, e);
        } else if (e.keyCode === 40) {
            this.down(false, e);
        }
        const { onKeyDown } = this.props;
        onKeyDown && onKeyDown(e, ...args);
    };

    up(disabled: boolean, e: React.KeyboardEvent<HTMLInputElement>) {
        this.step('up', disabled, e);
    }

    down(disabled: boolean, e: React.KeyboardEvent<HTMLInputElement>) {
        this.step('down', disabled, e);
    }

    step(type: 'up' | 'down', disabled: boolean, e: React.KeyboardEvent<HTMLInputElement>) {
        if (e) {
            e.preventDefault();
        }

        const { onDisabled } = this.props;
        if (disabled) {
            return onDisabled && onDisabled(e);
        }

        let value = this.state.value;
        // 受控下，可能强制回填非法值
        // @ts-expect-error 使用 isNaN 检查字符串形式的数字在类型上可能不是最佳实践
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

    upStep(val: number | string) {
        const { step, stringMode } = this.props;
        const precisionFactor = this.getPrecisionFactor();
        if (typeof val === 'number' && !stringMode) {
            const result =
                (precisionFactor * val + precisionFactor * (step as number)) / precisionFactor;
            return this.hackChrome(result);
        }
        return Big(val || '0')
            .plus(step!)
            .toFixed(this.getPrecision());
    }

    downStep(val: number | string) {
        const { step, stringMode } = this.props;
        const precisionFactor = this.getPrecisionFactor();
        if (typeof val === 'number' && !stringMode) {
            const result =
                (precisionFactor * val - precisionFactor * (step as number)) / precisionFactor;
            return this.hackChrome(result);
        }
        return Big(val || '0')
            .minus(step!)
            .toFixed(this.getPrecision());
    }

    /**
     * fix bug in chrome browser
     * 0.28 + 0.01 = 0.29000000000000004
     * 0.29 - 0.01 = 0.27999999999999997
     * @param value - The numeric value to be corrected
     */
    hackChrome(value: number) {
        const precision = this.getPrecision();
        if (precision > 0) {
            return Number(Number(value).toFixed(precision));
        }
        return value;
    }

    focus() {
        this.inputRef && this.inputRef.getInstance().focus();
    }

    saveInputRef(ref: React.ComponentRef<typeof Input> | null) {
        this.inputRef = ref;
    }

    getInputNode() {
        return this.inputRef;
    }

    handleMouseDown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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
        const type =
            device === 'phone' || device === 'tablet' || this.props.type === 'inline'
                ? 'inline'
                : 'normal';

        const prefixCls = `${prefix}number-picker`;

        const cls = classNames(
            {
                [prefixCls]: true,
                [`${prefixCls}-${type}`]: type,
                [`${prefix}${size}`]: true,
                [`${prefixCls}-show-trigger`]: alwaysShowTrigger,
                [`${prefixCls}-no-trigger`]: !hasTrigger,
                [`${prefix}disabled`]: disabled,
            },
            className
        );

        let upDisabled = false;
        let downDisabled = false;
        const value = this.state.value;
        // @ts-expect-error 使用 isNaN 检查字符串形式的数字在类型上可能不是最佳实践
        if (!isNaN(value)) {
            if (!this.isGreaterThan(max, value)) {
                upDisabled = true;
            }
            if (this.isGreaterThan(min, value) || min === value) {
                downDisabled = true;
            }
        }

        let extra = null,
            // innerAfterClassName = null,
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
                        aria-label="icon-up"
                    >
                        <Icon type="arrow-up" className={`${prefixCls}-up-icon`} />
                    </Button>
                    <Button
                        {...downBtnProps}
                        onMouseDown={this.handleMouseDown}
                        disabled={disabled}
                        className={`${downBtnProps.className || ''} ${
                            downDisabled ? 'disabled' : ''
                        }`}
                        onClick={this.down.bind(this, downDisabled)}
                        tabIndex={-1}
                        aria-label="icon-down"
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
                    aria-label="icon-minus"
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
                    aria-label="icon-add"
                >
                    <Icon type="add" className={`${prefixCls}-add-icon`} />
                </Button>
            );
        }

        const others = obj.pickOthers(NumberPicker.propTypes, this.props);
        const dataAttrs: object = obj.pickAttrsWith(this.props, 'data-');

        const previewCls = classNames(
            {
                [`${prefix}form-preview`]: true,
            },
            className
        );

        if (isPreview) {
            if (typeof renderPreview === 'function') {
                return (
                    <div {...others} style={style} className={previewCls}>
                        {renderPreview(this.getDisplayValue(), this.props)}
                    </div>
                );
            }
            return (
                <p {...others} style={style} className={previewCls}>
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
                    max={max as number}
                    min={min as number}
                    aria-label={'number picker'}
                    state={state === 'error' ? 'error' : undefined}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    onKeyDown={this.onKeyDown}
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

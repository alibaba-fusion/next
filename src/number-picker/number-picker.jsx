import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';

import Icon from '../icon';
import Button from '../button';
import Input from '../input';
import ConfigProvider from '../config-provider';
import { func, obj } from '../util';

const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -Math.pow(2, 53) + 1;

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
        value: PropTypes.number,
        /**
         * 默认值
         */
        defaultValue: PropTypes.number,
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
         * @param {Number} value 数据
         * @param {Event} e DOM事件对象
         */
        onChange: PropTypes.func,
        /**
         * 键盘按下
         */
        onKeyDown: PropTypes.func,
        /**
         * 焦点获得
         */
        onFocus: PropTypes.func,
        /**
         * 焦点失去
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
        max: PropTypes.number,
        /**
         * 最小值
         */
        min: PropTypes.number,
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
         * 内联 label
         */
        label: PropTypes.node,
        /**
         * inner after
         */
        innerAfter: PropTypes.node,
        rtl: PropTypes.bool,
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {number} value 评分值
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
    };

    static defaultProps = {
        prefix: 'next-',
        max: MAX_SAFE_INTEGER,
        min: MIN_SAFE_INTEGER,
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
    };

    constructor(props) {
        super(props);

        let value;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        this.state = {
            value: value === undefined || value === null ? '' : value,
            hasFocused: false,
            reRender: true,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if ('value' in nextProps && nextProps.value !== prevState.value && prevState.reRender) {
            const value = nextProps.value;
            return {
                value: value === undefined || value === null ? '' : value,
            };
        }

        return null;
    }

    onChange(value, e) {
        if (this.props.editable === true) {
            value = value.trim();
            // Compatible Chinese Input Method
            value = value.replace('。', '.');
            // ignore space
            if (this.state.value === value) {
                return;
            }

            // in case of autoCorrect ('0.'=>0, '0.0'=>0) , we have these steps
            if (value) {
                const precisionCurrent = value.length - value.indexOf('.') - 1;
                const precisionSet = this.getPrecision();
                const dotNum = value.match(/\./g);
                const dotIndex = value.indexOf('.');

                // ignore more than one . or -, cut at second . or -
                if (dotNum && dotNum.length > 1) value = value.substr(0, value.split('.', 2).join('.').length);
                const minusNum = value.match(/-/g);
                if (minusNum && minusNum.length > 1) value = value.substr(0, value.split('-', 2).join('.').length);

                // ignore . when precision set 0
                // leave out digits larger than precision set
                if (dotIndex > -1) {
                    if (precisionSet === 0) value = value.substr(0, dotIndex);
                    else if (precisionCurrent > precisionSet) value = value.substr(0, dotIndex + 1 + precisionSet);
                }

                // ignore when input start form '-'
                if (value === '-') {
                    if (this.props.min >= 0) {
                        // trigger onCorrect when input - on min >= 0
                        // trigger onChange when the result of correction is not state.value
                        this.setInputValue(value, e);
                        return;
                    }
                    this.setState({
                        value,
                        reRender: false,
                    });
                    return;
                }

                // ignore
                // (1) input 0./0.0/0.00 to 0.001
                // (2) input *.*0
                // (3) input -. or /^./
                // but take care of Number('')=0;
                if (value.match(/\.0*$/) || value.match(/\.[0-9]*0$/) || value.match(/^-?\./)) {
                    this.setState({
                        value,
                        reRender: false,
                    });
                    return;
                }
                // ignore when value < min (because number is inputted one by one)
                if (!isNaN(value) && Number(value) > 0 && Number(value) < this.props.min) {
                    this.setState({
                        value,
                        reRender: false,
                    });
                    return;
                }
            }

            this.setInputValue(value, e);
        }
    }

    /**
     * 触发时机：
     * (1)不合法输入立即触发
     * (2)在[min, max]之外立即触发
     * (3)输入.或-时不触发onChange、onCorrect、render，用户取到的value为输入前的值
     * (4)产生-.x时不触发onChange、onCorrect、render，用户取到的value为改变发生前的值
     * (5)输入.后blur会触发onCorrect、onChang、render，因为合法值被Number()取掉了 . ，三者都触发，用户取到的value为新值
     * (6)输入-后blur不会触发onCorrect、onChang、render，因为不是合法值，用户取到的value为输入前的值
     * (7)产生-.x后blur触发onChange、onCorrect、render，用户取到的为-0.x
     * @param {Float} currentValue correct value
     * @param {String} oldValue input value
     */
    onCorrect(currentValue, oldValue) {
        this.props.onCorrect({
            currentValue,
            oldValue,
        });
    }

    onKeyDown(e, ...args) {
        if (e.keyCode === 38) {
            this.up(false, e);
        } else if (e.keyCode === 40) {
            this.down(false, e);
        }
        this.props.onKeyDown(e, ...args);
    }

    onFocus(e, ...args) {
        const { onFocus } = this.props;
        this.setFocus(true);
        onFocus && onFocus(e, ...args);
    }

    onBlur(e, ...args) {
        // blur 时将 -.2 展示值特例修正为 -0.2，触发onCorrect、onChange
        // 保留 onBlur 时 - 与 -. 等 非 number 类型不触发 onChange，此为当前线上逻辑，会导致target.value取出非数字，转为另一issue待修
        let value = this.getCurrentValidValue(e.target.value.trim());
        if (value !== '' && !isNaN(value)) value = Number(value);
        if (this.state.value !== value) {
            this.setValue(value, e);
        }
        this.setFocus(false);
        const { onBlur } = this.props;
        onBlur && onBlur(e, ...args);
    }

    getCurrentValidValue(value) {
        let val = value;
        const props = this.props;
        if (val === '') {
            val = '';
        } else if (!isNaN(val)) {
            val = Number(val);
            if (val < props.min) {
                val = props.min;
            }
            if (val > props.max) {
                val = props.max;
            }
        } else if (val === '-' && props.min >= 0) {
            val = props.min;
        } else {
            val = this.state.value;
        }

        if (`${val}` !== `${value}`) {
            // under controled, set back to props.value
            if ('value' in this.props && `${this.props.value}` !== `${this.state.value}`) {
                this.setState({
                    value: this.props.value,
                });
            }
            this.onCorrect(val, value);
        }

        return val;
    }

    setValue(v, e, triggerType) {
        if (!('value' in this.props)) {
            this.setState({
                value: v,
            });
        }

        this.setState({
            reRender: true,
        });

        this.props.onChange(isNaN(v) || v === '' ? undefined : v, {
            ...e,
            triggerType,
        });
    }

    // 设置展示值，展示值可为-0此种特例
    setInputValue(v, e) {
        const value = this.getCurrentValidValue(v);
        if (this.state.value !== value) {
            this.setValue(value, e);
        }
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

    getPrecision() {
        const props = this.props;
        const stepString = props.step.toString();
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

    upStep(val) {
        const { step, min } = this.props;
        const precisionFactor = this.getPrecisionFactor();
        let result;
        if (typeof val === 'number') {
            result = (precisionFactor * val + precisionFactor * step) / precisionFactor;

            result = this.hackChrome(result);
        } else {
            // use old value to calculate
            result = (precisionFactor * this.state.value + precisionFactor * step) / precisionFactor;

            result = this.hackChrome(result);
        }
        return result;
    }

    downStep(val) {
        const { step, min } = this.props;
        const precisionFactor = this.getPrecisionFactor();
        let result;
        if (typeof val === 'number') {
            result = (precisionFactor * val - precisionFactor * step) / precisionFactor;

            result = this.hackChrome(result);
        } else {
            // use old value to calculate
            result = (precisionFactor * this.state.value - precisionFactor * step) / precisionFactor;

            result = this.hackChrome(result);
        }
        return result;
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

    step(type, disabled, e) {
        if (e) {
            e.preventDefault();
        }

        const { onDisabled, min, max } = this.props;
        if (disabled) {
            return onDisabled(e);
        }

        const value = this.state.value;
        if (isNaN(value)) {
            return;
        }

        let val = this[`${type}Step`](value);
        if (val > max) {
            val = max;
        }
        if (val < min) {
            val = min;
        }
        this.setValue(val, e, type);
    }

    down(disabled, e) {
        this.step('down', disabled, e);
    }

    up(disabled, e) {
        this.step('up', disabled, e);
    }

    renderValue() {
        const { value, hasFocused } = this.state;
        const { format } = this.props;
        // 避免原生input将number类型的-0，渲染为0
        return typeof format === 'function' && !hasFocused
            ? format(value)
            : value !== '-0.' && 1 / value === -Infinity
            ? '-0'
            : value;
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
            max,
            min,
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
        const type = device === 'phone' || this.props.type === 'inline' ? 'inline' : 'normal';

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
            const val = Number(value);
            if (val >= max) {
                upDisabled = true;
            }
            if (val <= min) {
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
                        {renderPreview(this.renderValue(), this.props)}
                    </div>
                );
            }
            return (
                <p {...others} style={{ style }} className={previewCls}>
                    {this.renderValue()}
                </p>
            );
        }

        return (
            <span className={cls} style={style} dir={rtl ? 'rtl' : undefined} {...dataAttrs}>
                <Input
                    {...others}
                    hasClear={false}
                    aria-valuemax={max !== MAX_SAFE_INTEGER ? max : MAX_SAFE_INTEGER}
                    aria-valuemin={min !== MIN_SAFE_INTEGER ? min : MIN_SAFE_INTEGER}
                    state={state === 'error' ? 'error' : null}
                    onBlur={this.onBlur.bind(this)}
                    onFocus={this.onFocus.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
                    autoFocus={autoFocus}
                    readOnly={!editable}
                    value={this.renderValue()}
                    disabled={disabled}
                    size={size}
                    onChange={this.onChange.bind(this)}
                    ref={this.saveInputRef.bind(this)}
                    label={label}
                    innerAfter={innerAfter}
                    extra={hasTrigger ? extra : null}
                    addonBefore={addonBefore}
                    addonAfter={addonAfter}
                />
            </span>
        );
    }
}

export default polyfill(NumberPicker);

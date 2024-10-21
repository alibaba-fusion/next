import React, { Component, type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import type { Dayjs } from 'dayjs';

import ConfigProvider from '../config-provider';
import Input from '../input';
import Button from '../button';
import Overlay from '../overlay';
import nextLocale from '../locale/zh-cn';
import { func, obj, datejs, KEYCODE } from '../util';
import TimePickerPanel from './panel';
import { checkDateValue, onTimeKeydown } from './utils';
import SharedPT from './prop-types';
import { switchInputType, fmtValue, isValueChanged } from '../date-picker2/util';
import FooterPanel from '../date-picker2/panels/footer-panel';
import DateInput from './module/date-input';
import { TIME_PICKER_TYPE, TIME_INPUT_TYPE } from './constant';
import type {
    DateInputProps,
    TimePickerProps,
    TimePickerState,
    ValueType,
    InputType,
} from './types';

const { Popup } = Overlay;
const { noop, checkDate, checkRangeDate } = func;
const timePickerLocale = nextLocale.TimePicker;

const presetPropType = PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.func, checkDateValue]),
    ...Button.propTypes,
});

type SharedInputProps = DateInputProps & {
    ref: (el: InstanceType<typeof DateInput>) => void;
};
class TimePicker2 extends Component<TimePickerProps, TimePickerState> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        label: PropTypes.node,
        state: PropTypes.oneOf(['error', 'success']),
        placeholder: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
        value: SharedPT.value,
        defaultValue: SharedPT.value,
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        hasClear: PropTypes.bool,
        format: PropTypes.string,
        hourStep: PropTypes.number,
        minuteStep: PropTypes.number,
        secondStep: PropTypes.number,
        disabledHours: PropTypes.func,
        disabledMinutes: PropTypes.func,
        disabledSeconds: PropTypes.func,
        renderTimeMenuItems: PropTypes.func,
        visible: PropTypes.bool,
        defaultVisible: PropTypes.bool,
        popupContainer: PropTypes.any,
        popupAlign: PropTypes.string,
        popupTriggerType: PropTypes.oneOf(['click', 'hover']),
        onVisibleChange: PropTypes.func,
        popupStyle: PropTypes.object,
        popupClassName: PropTypes.string,
        popupProps: PropTypes.object,
        followTrigger: PropTypes.bool,
        disabled: PropTypes.bool,
        hasBorder: PropTypes.bool,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        onChange: PropTypes.func,
        className: PropTypes.string,
        name: PropTypes.string,
        preset: PropTypes.oneOfType([PropTypes.arrayOf(presetPropType), presetPropType]),
        inputProps: PropTypes.shape(Input.propTypes!),
        popupComponent: PropTypes.elementType,
        type: PropTypes.oneOf(['time', 'range']),
    };

    static defaultProps = {
        prefix: 'next-',
        rtl: false,
        locale: timePickerLocale,
        size: 'medium',
        format: 'HH:mm:ss',
        hasClear: true,
        disabled: false,
        hasBorder: true,
        type: 'time',
        popupAlign: 'tl bl',
        popupTriggerType: 'click',
        onChange: noop,
        onVisibleChange: noop,
    };

    prefixCls: string;
    dateInput: InstanceType<typeof DateInput>;
    clearTimeoutId: number;

    constructor(props: TimePickerProps) {
        super(props);
        const isRange = props.type === TIME_PICKER_TYPE.RANGE;

        this.state = {};
        if (isRange) {
            const { inputType, justBeginInput } = this.getInitRangeInputState();
            this.state = {
                inputType,
                justBeginInput,
            };
        }

        const { format, visible, defaultVisible, prefix } = this.props;

        const value = this.getInitValue();

        // const value = formatInputTimeValue(props.value || props.defaultValue, props.format, isRange);
        this.state = {
            ...this.state,
            isRange,
            inputStr: '', // 输入框的输入值，string 类型
            value, // 确定值 dayjs 类型
            curValue: value, // 临时值 dayjs 类型
            preValue: value, // 上个值 dayjs 类型
            inputValue: fmtValue(value, format),
            inputing: false,
            visible: 'visible' in this.props ? visible : defaultVisible,
        };
        this.prefixCls = `${prefix}time-picker2`;
    }

    static getDerivedStateFromProps(props: TimePickerProps, prevState: TimePickerState) {
        const { disabled, type, format, value: propsValue } = props;
        const isRange = type === TIME_PICKER_TYPE.RANGE;
        let state: TimePickerState = {
            isRange,
        };

        if ('value' in props) {
            // checkDate function doesn't support hh:mm:ss format, convert to valid dayjs value in advance
            const formatter = (v: string | Dayjs | null) =>
                typeof v === 'string' ? datejs(v, format) : v;
            const formattedValue: ValueType = Array.isArray(propsValue)
                ? propsValue.map(v => formatter(v))
                : formatter(propsValue!);
            const value = isRange
                ? checkRangeDate(formattedValue, state.inputType!, disabled)
                : checkDate(formattedValue as Dayjs | null);
            if (isValueChanged(value, state.preValue)) {
                state = {
                    ...state,
                    value,
                    preValue: value,
                };
                if (isRange && !prevState.selecting) {
                    state.inputValue = fmtValue(value, format);
                    state.curValue = formattedValue || [];
                }
            }
        }

        if ('visible' in props) {
            state.visible = props.visible;
        }

        return state;
    }

    /**
     * 获取初始值
     */
    getInitValue = () => {
        const { props } = this;
        const { type, value, defaultValue } = props;

        let val: TimePickerProps['value'] = type === TIME_PICKER_TYPE.RANGE ? [null, null] : null;

        val = 'value' in props ? value! : 'defaultValue' in props ? defaultValue! : val;

        return this.checkValue(val);
    };

    /**
     * 获取 RangePicker 输入框初始输入状态
     * @returns inputState - Object
     * @returns inputState.justBeginInput 是否初始输入 - boolean
     * @returns inputState.inputType 当前输入框 - number
     */
    getInitRangeInputState = () => {
        return {
            justBeginInput: this.isEnabled(),
            inputType: (this.isEnabled(0)
                ? TIME_INPUT_TYPE.BEGIN
                : TIME_INPUT_TYPE.END) as InputType,
        };
    };

    onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e!.keyCode === KEYCODE.ENTER) {
            const { inputValue } = this.state;
            this.handleChange(inputValue!, 'KEYDOWN_ENTER');
            this.onClick();
            return;
        }

        const { value, inputStr, inputType, isRange } = this.state;
        const {
            format,
            hourStep = 1,
            minuteStep = 1,
            secondStep = 1,
            disabledMinutes,
            disabledSeconds,
        } = this.props;

        let unit: 'hour' | 'minute' | 'second' = 'second';

        if (disabledSeconds) {
            unit = disabledMinutes ? 'hour' : 'minute';
        }

        const timeStr = onTimeKeydown(
            e,
            {
                format: format!,
                timeInputStr: isRange ? inputStr![inputType!] : (inputStr as string),
                steps: {
                    hour: hourStep,
                    minute: minuteStep,
                    second: secondStep,
                },
                // @ts-expect-error 此处的 value 没有考虑到数组的情况
                value,
            },
            unit
        );

        if (!timeStr) return;
        let newInputStr: string | string[] | undefined = timeStr;
        if (isRange) {
            newInputStr = inputStr as string[];
            newInputStr[inputType!] = timeStr;
        }

        this.handleChange(newInputStr!, 'KEYDOWN_CODE');
    };

    onVisibleChange = (visible: boolean, type?: string) => {
        if (!('visible' in this.props)) {
            this.setState({
                visible,
            });
        }
        this.props.onVisibleChange!(visible, type);
    };

    onClick = () => {
        const { visible, inputType } = this.state;

        if (!visible) {
            this.onVisibleChange(true);
            this.handleInputFocus(inputType!);
        }
    };
    /**
     * 处理点击文档区域导致的弹层收起逻辑
     * @param visible - 是否可见
     * @param type - 事件类型
     */
    handleVisibleChange = (visible: boolean, targetType: string) => {
        if (targetType === 'docClick') {
            // 弹层收起 触发 Change 逻辑
            if (!visible) {
                this.handleChange(this.state.curValue!, 'VISIBLE_CHANGE');
            }
            this.onVisibleChange(visible);
        }
    };

    handleInputFocus = (inputType: number) => {
        let inputEl = this.dateInput && this.dateInput.input;

        if (this.state.isRange) {
            inputEl = inputEl && (inputEl as InstanceType<typeof Input>[])[inputType];
        }

        inputEl && (inputEl as InstanceType<typeof Input>).focus();
    };

    onOk = () => {
        const { curValue } = this.state;
        const checkedValue = this.checkValue(curValue!);

        func.invoke(this.props, 'onOk', this.getOutputArgs(checkedValue));

        this.setState({ value: checkedValue });
        this.handleChange(checkedValue, 'CLICK_OK');
    };

    onInputTypeChange = (idx: InputType) => {
        const { inputType, visible } = this.state;

        if (idx !== inputType) {
            this.setState({
                inputType: idx,
                justBeginInput: !(idx !== null && visible),
            });
        }
    };

    checkValue: (value: TimePickerProps['value'], strictly?: boolean) => ValueType = (
        value,
        strictly
    ) => {
        const { inputType } = this.state;
        const { format, type, disabled } = this.props;
        const formatter = (v: Dayjs | null | string) =>
            typeof v === 'string' ? datejs(v, format) : v;
        const formattedValue: ValueType = Array.isArray(value)
            ? value.map(v => formatter(v))
            : formatter(value!);

        return type === TIME_PICKER_TYPE.RANGE
            ? checkRangeDate(formattedValue, inputType!, disabled, strictly)
            : checkDate(formattedValue as Dayjs | string | null);
    };

    /**
     * 获取 `onChange` 和 `onOk` 方法的输出参数
     * @param value - Dayjs
     * @returns 默认返回 `Dayjs` 实例和 `format` 格式化的值
     *          如果传了了 `outputFormat` 属性则返回 `outputFormat` 格式化的值
     */
    getOutputArgs = (value: ValueType) => {
        const { format } = this.props;
        return [value, fmtValue(value, format)];
    };

    onChange = (v: ValueType) => {
        const { state, props } = this;
        const { format } = props;

        const nextValue = v === undefined ? state.value : v;
        const value = this.checkValue(nextValue!);

        this.setState({
            curValue: value,
            preValue: value,
            inputStr: fmtValue(value, format),
            inputValue: fmtValue(value, format),
        });

        func.invoke(this.props, 'onChange', this.getOutputArgs(nextValue!));
    };

    shouldSwitchInput = (value: (Dayjs | null)[]) => {
        const { inputType, justBeginInput } = this.state;
        const idx = justBeginInput ? switchInputType(inputType) : value.indexOf(null);

        if (idx !== -1 && this.isEnabled(idx)) {
            this.onInputTypeChange(idx as InputType);
            this.handleInputFocus(idx);
            return true;
        }

        return false;
    };

    handleChange = (v: ValueType | string | null | string[], eventType?: string) => {
        const { format } = this.props;
        const { isRange, value, preValue } = this.state;
        const forceEvents = [
            'KEYDOWN_ENTER',
            'CLICK_PRESET',
            'CLICK_OK',
            'INPUT_CLEAR',
            'VISIBLE_CHANGE',
        ];
        const isTemporary = isRange && !forceEvents.includes(eventType!);

        // 面板收起时候，将值设置为确认值
        v = eventType === 'VISIBLE_CHANGE' ? value! : this.checkValue(v, !isTemporary);

        const stringV = fmtValue(v, format);

        this.setState({
            curValue: v as ValueType | null,
            inputStr: stringV,
            inputValue: stringV,
            inputing: false,
            selecting: eventType === 'start' || eventType === 'end',
        });

        if (!isTemporary) {
            this.setState(
                {
                    value: v,
                },
                () => {
                    // 判断当前选择结束，收起面板：
                    // 1. 非 Range 选择
                    // 2. 非 选择预设时间、面板收起、清空输入 操作
                    // 3. 不需要切换输入框
                    const shouldHidePanel =
                        [
                            'CLICK_PRESET',
                            'VISIBLE_CHANGE',
                            'KEYDOWN_ENTER',
                            'INPUT_CLEAR',
                            'CLICK_OK',
                        ].includes(eventType!) ||
                        (isRange && !this.shouldSwitchInput(v as (Dayjs | null)[]));
                    if (shouldHidePanel) {
                        this.onVisibleChange(false);
                    }

                    if (isValueChanged(v, preValue)) {
                        this.onChange(v as ValueType);
                    }
                }
            );
        }
    };

    /**
     * 获取输入框的禁用状态
     */
    isEnabled = (idx?: number) => {
        const { disabled } = this.props;

        return Array.isArray(disabled)
            ? idx === undefined
                ? !disabled[0] && !disabled[1]
                : !disabled[idx]
            : !disabled;
    };

    handleClear = () => {
        /**
         * 清空输入之后 input 组件内部会让第二个输入框获得焦点
         * 所以这里需要设置 setTimeout 才能让第一个 input 获得焦点
         */
        this.clearTimeoutId = window.setTimeout(() => {
            this.handleInputFocus(0);
        });

        this.setState({
            inputType: TIME_INPUT_TYPE.BEGIN as InputType,
            justBeginInput: this.isEnabled(),
        });
    };

    handleInput = (v: string, eventType?: string) => {
        const { isRange } = this.state;
        if (eventType === 'clear') {
            this.handleChange(v, 'INPUT_CLEAR');

            if (isRange) {
                this.handleClear();
            }
        } else {
            this.setState({
                inputStr: v,
                inputValue: v,
                curValue: this.checkValue(v),
                inputing: true,
                visible: true,
            });
        }
    };

    renderPreview(others: Omit<TimePickerProps, 'defaultValue' | 'onChange'>) {
        const { prefix, format, className, renderPreview } = this.props;
        const { value } = this.state;
        const previewCls = classnames(className, `${prefix}form-preview`);

        let label = '';
        if (value) {
            const valueArr = Array.isArray(value) ? value : [value];
            label = valueArr.map(v => (v ? v.format(format) : '')).join('-');
        }
        if (typeof renderPreview === 'function') {
            return (
                <div {...others} className={previewCls}>
                    {renderPreview(value!, this.props)}
                </div>
            );
        }

        return (
            <p {...others} className={previewCls}>
                {label}
            </p>
        );
    }

    render() {
        const {
            prefix,
            label,
            state,
            placeholder,
            size,
            format,
            hasClear,
            hourStep,
            minuteStep,
            secondStep,
            disabledHours,
            disabledMinutes,
            disabledSeconds,
            renderTimeMenuItems,
            inputProps,
            popupAlign,
            popupTriggerType,
            popupContainer,
            popupStyle,
            popupClassName,
            popupProps,
            popupComponent,
            followTrigger,
            disabled,
            hasBorder,
            className,
            locale,
            rtl,
            isPreview,
            preset,
            ...others
        } = this.props;

        const { value, inputStr, inputValue, curValue, inputing, visible, isRange, inputType } =
            this.state;
        const triggerCls = classnames({
            [`${this.prefixCls}-trigger`]: true,
        });

        if (rtl) {
            others.dir = 'rtl';
        }

        if (isPreview) {
            // @ts-expect-error TimePicker2 上不存在 PropTypes 属性，应该是 propTypes
            return this.renderPreview(obj.pickOthers(others, TimePicker2.PropTypes));
        }

        const sharedInputProps: SharedInputProps = {
            prefix,
            locale,
            label,
            state,
            placeholder,
            ...inputProps,
            size,
            disabled,
            // RangePicker 有临时输入态在 inputValue 里面
            value: inputing ? inputStr : isRange ? inputValue : fmtValue(value, format) || '',
            hasClear: value && hasClear,
            inputType,
            isRange,
            focus: visible,
            onInputTypeChange: this.onInputTypeChange,
            onInput: this.handleInput,
            onKeyDown: this.onKeyDown,
            ref: (el: InstanceType<typeof DateInput>) => (this.dateInput = el),
        };

        const triggerInput = (
            <div className={triggerCls}>
                <DateInput
                    {...sharedInputProps}
                    label={label}
                    state={state}
                    onClick={this.onClick}
                    hasBorder={hasBorder}
                    placeholder={placeholder || locale!.placeholder}
                    className={classnames(`${this.prefixCls}-input`)}
                />
            </div>
        );

        const panelProps = {
            prefix,
            locale,
            value: inputing ? this.checkValue(inputStr!) : curValue,
            // value: curValue,
            isRange,
            disabled,
            showHour: format!.indexOf('H') > -1,
            showSecond: format!.indexOf('s') > -1,
            showMinute: format!.indexOf('m') > -1,
            hourStep,
            minuteStep,
            secondStep,
            disabledHours,
            disabledMinutes,
            disabledSeconds,
            renderTimeMenuItems,
            onSelect: this.handleChange,
        };

        const classNames = classnames(
            {
                [`${this.prefixCls}`]: true,
                [`${this.prefixCls}-${size}`]: size,
                [`${prefix}disabled`]: disabled,
            },
            className
        );

        const PopupComponent = popupComponent ? popupComponent : Popup;
        const oKable = !!(isRange ? inputValue && inputValue[inputType!] : inputValue);

        return (
            <div {...obj.pickOthers(TimePicker2.propTypes, others)} className={classNames}>
                <PopupComponent
                    align={popupAlign}
                    {...popupProps}
                    followTrigger={followTrigger}
                    visible={visible}
                    onVisibleChange={this.handleVisibleChange}
                    trigger={triggerInput}
                    container={popupContainer}
                    // @ts-expect-error disabled 为 boolean | boolean[]，此处没有考虑到 boolean[] 这种情况
                    disabled={disabled}
                    triggerType={popupTriggerType}
                    style={popupStyle}
                    className={popupClassName}
                >
                    <div dir={others.dir} className={`${this.prefixCls}-wrapper`}>
                        <div className={`${this.prefixCls}-body`}>
                            {/* @ts-expect-error disabled 为 boolean | boolean[]，TimePickerPanel 没有考虑到 boolean[] 这种情况 */}
                            <TimePickerPanel {...panelProps} />
                            {preset || isRange ? (
                                <FooterPanel
                                    prefix={prefix}
                                    className={`${this.prefixCls}-footer`}
                                    showTime
                                    locale={locale}
                                    oKable={oKable}
                                    showOk={isRange}
                                    onOk={this.onOk}
                                    onChange={this.handleChange}
                                    preset={preset}
                                />
                            ) : null}
                        </div>
                    </div>
                </PopupComponent>
            </div>
        );
    }
}

export default polyfill(TimePicker2);

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import classnames from 'classnames';
import { type Dayjs } from 'dayjs';
import SharedPT from '../prop-types';
import { DATE_INPUT_TYPE, DATE_PICKER_MODE } from '../constant';
import { func, datejs, obj } from '../../util';
import { fmtValue } from '../util';

import Input, { type InputProps } from '../../input';
import Icon from '../../icon';
import type { DateInputProps } from '../types';

const { DATE, WEEK, MONTH, QUARTER, YEAR } = DATE_PICKER_MODE;

class DateInput extends React.Component<DateInputProps> {
    static displayName = 'DateInput';
    static propTypes = {
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

    static defaultProps = {
        autoFocus: false,
        readOnly: false,
        hasClear: true,
        separator: '-',
        hasBorder: true,
        size: 'medium',
    };

    prefixCls: string;
    input?: InstanceType<typeof Input> | InstanceType<typeof Input>[];

    constructor(props: DateInputProps) {
        super(props);

        this.prefixCls = `${props.prefix}date-picker2-input`;
    }

    setInputRef = (el: InstanceType<typeof Input>, index?: number) => {
        if (this.props.isRange) {
            if (!this.input) {
                this.input = [];
            }
            (this.input as (InstanceType<typeof Input> | undefined)[])[index!] = el;
        } else {
            this.input = el;
        }
    };

    setValue = (v: string | number | null) => {
        const { isRange, inputType, value } = this.props;
        let newVal: string | number | null | Array<string | number | null> = v;

        if (isRange) {
            newVal = [...value!];
            newVal[inputType!] = v;
        }

        return newVal;
    };

    formatter = (v: Dayjs) => {
        const { format } = this.props;
        return typeof format === 'function' ? format(v) : v.format(format);
    };

    onInput: InputProps['onChange'] = (v, e, eventType) => {
        // @ts-expect-error v 的类型是 string | number，this.setValue(v) 返回类型是 string | number | null，此处不应该重新赋值，应该定一个新的变量处理
        v = this.setValue(v);

        if (eventType === 'clear') {
            // @ts-expect-error v 的类型是 string | number，this.setValue(v) 返回类型是 string | number | null，此处不应该重新赋值，应该定一个新的变量处理
            v = null;
            e.stopPropagation();
        }

        func.invoke(this.props, 'onInput', [v, eventType]);
    };

    handleTypeChange = (inputType: number) => {
        if (inputType !== this.props.inputType) {
            func.invoke(this.props, 'onInputTypeChange', [inputType]);
        }
    };

    getPlaceholder = () => {
        const { locale, isRange, mode } = this.props;
        const {
            placeholder,
            selectDate,
            monthPlaceholder,
            weekPlaceholder,
            yearPlaceholder,
            startPlaceholder,
            quarterPlaceholder,
            endPlaceholder,
        } = locale!;
        const mode2placeholder = {
            [DATE]: selectDate,
            [WEEK]: weekPlaceholder,
            [MONTH]: monthPlaceholder,
            [QUARTER]: quarterPlaceholder,
            [YEAR]: yearPlaceholder,
        };

        let holder: string | string[] | undefined = this.props.placeholder;

        holder =
            holder ||
            (isRange
                ? [startPlaceholder!, endPlaceholder!]
                : mode2placeholder[mode!] || placeholder!);

        if (isRange && !Array.isArray(holder)) {
            holder = Array(2).fill(holder);
        }

        return holder;
    };

    /**
     * 根据 format 计算输入框 htmlSize
     */
    getHtmlSize = () => {
        const { isRange, format, hasBorder } = this.props;
        const value = '2020-12-12 12:12:12';
        let size = 0;

        if (isRange) {
            const fmtStr = fmtValue([value, value].map(datejs), format) as string[];
            size = Math.max(...fmtStr.map(s => (s && s.length) || 0));
        } else {
            const fmtStr = fmtValue(datejs(value), format);
            fmtValue(datejs(value), format);
            size = (fmtStr && fmtStr.length) || 0;
        }

        return String(Math.max(size, hasBorder ? 12 : 8));
    };

    render() {
        const { onInput, setInputRef, handleTypeChange, prefixCls } = this;
        const {
            autoFocus,
            readOnly,
            isRange,
            value,
            prefix,
            hasClear,
            inputType,
            size,
            focus,
            hasBorder,
            separator,
            disabled,
            inputProps,
            dateInputAriaLabel,
            state,
            label,
            ...restProps
        } = this.props;

        const placeholder = this.getPlaceholder();
        const htmlSize = this.getHtmlSize();

        // @ts-expect-error 下面 pickProps 使用错误，导致报错
        const sharedProps: InputProps = {
            // @ts-expect-error 正确写法应该是 obj.pickProps(Input.propTypes, restProps)
            ...obj.pickProps(restProps, Input),
            ...inputProps,
            size,
            htmlSize,
            readOnly,
            hasBorder: false,
            onChange: onInput,
        };

        let rangeProps;
        if (isRange) {
            rangeProps = [DATE_INPUT_TYPE.BEGIN, DATE_INPUT_TYPE.END].map(idx => {
                const _disabled = Array.isArray(disabled) ? disabled[idx] : disabled;

                return {
                    ...sharedProps,
                    autoFocus,
                    placeholder: placeholder![idx],
                    value: value![idx] || '',
                    'aria-label': Array.isArray(dateInputAriaLabel)
                        ? dateInputAriaLabel[idx]
                        : dateInputAriaLabel,
                    disabled: _disabled,
                    ref: (ref: InstanceType<typeof Input>) => setInputRef(ref, idx),
                    onFocus: _disabled ? undefined : () => handleTypeChange(idx),
                    className: classnames({
                        [`${prefixCls}-active`]: inputType === idx,
                    }),
                };
            });
        }

        const className = classnames(
            [prefixCls, `${prefixCls}-${size}`, `${prefixCls}-${isRange ? 'range' : 'date'}`],
            {
                [`${prefixCls}-focus`]: focus,
                [`${prefixCls}-noborder`]: !hasBorder,
                [`${prefixCls}-disabled`]:
                    isRange && Array.isArray(disabled) ? disabled.every(v => v) : disabled,
                [`${prefixCls}-error`]: state === 'error',
            }
        );

        const calendarIcon = (
            <Icon type="calendar" className={`${prefix}date-picker2-symbol-calendar-icon`} />
        );

        return (
            <div className={className}>
                {isRange ? (
                    <React.Fragment>
                        <Input
                            {...rangeProps![0]}
                            label={label}
                            autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
                        />
                        <div className={`${prefixCls}-separator`}>{separator}</div>
                        <Input
                            {...rangeProps![1]}
                            state={state}
                            hasClear={!state && hasClear!}
                            hint={state ? null : calendarIcon}
                        />
                    </React.Fragment>
                ) : (
                    <Input
                        {...sharedProps}
                        label={label}
                        state={state}
                        disabled={disabled as boolean}
                        hasClear={!state && hasClear!}
                        placeholder={placeholder as string}
                        autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
                        ref={setInputRef}
                        aria-label={dateInputAriaLabel}
                        value={(value as string) || ''}
                        hint={state ? null : calendarIcon}
                    />
                )}
            </div>
        );
    }
}

export default polyfill(DateInput);

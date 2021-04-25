import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import SharedPT from '../prop-types';
import { DATE_INPUT_TYPE, DATE_PICKER_MODE } from '../constant';
import { func, datejs, obj } from '../../util';

import Input from '../../input';
import Icon from '../../icon';

const { DATE, WEEK, MONTH, QUARTER, YEAR } = DATE_PICKER_MODE;

class DateInput extends React.Component {
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
    };

    static defaultProps = {
        autoFocus: false,
        readOnly: false,
        hasClear: true,
        separator: '-',
        hasBorder: true,
        size: 'medium',
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}date-picker2-input`;
    }

    setInputRef = (el, index) => {
        if (this.props.isRange) {
            if (!this.input) {
                this.input = [];
            }
            this.input[index] = el;
        } else {
            this.input = el;
        }
    };

    setValue = v => {
        const { isRange, inputType, value } = this.props;
        let newVal = v;

        if (isRange) {
            newVal = [...value];
            newVal[inputType] = v;
        }

        return newVal;
    };

    formatter = v => {
        const { format } = this.props;
        return typeof format === 'function' ? format(v) : v.format(format);
    };

    onInput = (v, e, eventType) => {
        v = this.setValue(v);

        if (eventType === 'clear') {
            v = null;
            e.stopPropagation();
        }

        func.invoke(this.props, 'onInput', [v, eventType]);
    };

    handleTypeChange = inputType => {
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
        } = locale;
        const mode2placeholder = {
            [DATE]: selectDate,
            [WEEK]: weekPlaceholder,
            [MONTH]: monthPlaceholder,
            [QUARTER]: quarterPlaceholder,
            [YEAR]: yearPlaceholder,
        };

        let holder = this.props.placeholder;

        holder = holder || (isRange ? [startPlaceholder, endPlaceholder] : mode2placeholder[mode] || placeholder);

        if (isRange && !Array.isArray(holder)) {
            holder = Array(2).fill(holder);
        }

        return holder;
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
        const htmlSize = String(Math.max(this.formatter(datejs('2020-12-12 24:00:00')).length, hasBorder ? 12 : 8));

        const sharedProps = {
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
                return {
                    ...sharedProps,
                    autoFocus,
                    placeholder: placeholder[idx],
                    value: value[idx] || '',
                    'aria-label': Array.isArray(dateInputAriaLabel) ? dateInputAriaLabel[idx] : dateInputAriaLabel,
                    disabled: Array.isArray(disabled) ? disabled[idx] : disabled,
                    ref: ref => setInputRef(ref, idx),
                    onFocus: () => handleTypeChange(idx),
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
                [`${prefixCls}-disabled`]: isRange && Array.isArray(disabled) ? disabled.every(v => v) : disabled,
            }
        );

        const calendarIcon = <Icon type="calendar" className={`${prefix}date-picker2-symbol-calendar-icon`} />;

        return (
            <div className={className}>
                {isRange ? (
                    <React.Fragment>
                        <Input
                            {...rangeProps[0]}
                            label={label}
                            autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
                        />
                        <div className={`${prefixCls}-separator`}>{separator}</div>
                        <Input
                            {...rangeProps[1]}
                            state={state}
                            hasClear={!state && hasClear}
                            hint={state ? null : calendarIcon}
                        />
                    </React.Fragment>
                ) : (
                    <Input
                        {...sharedProps}
                        label={label}
                        state={state}
                        disabled={disabled}
                        hasClear={!state && hasClear}
                        placeholder={placeholder}
                        autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
                        ref={setInputRef}
                        aria-label={dateInputAriaLabel}
                        value={value || ''}
                        hint={state ? null : calendarIcon}
                    />
                )}
            </div>
        );
    }
}

export default polyfill(DateInput);

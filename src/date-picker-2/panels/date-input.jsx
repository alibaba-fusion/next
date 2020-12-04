import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import SharedPT from '../prop-types';
import { DATE_INPUT_TYPE, DATE_PICKER_MODE } from '../constant';
import { func, KEYCODE, datejs } from '../../util';

import Input from '../../input';
import Icon from '../../icon';

const { isFunction } = func;
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
    };

    static defaultProps = {
        autoFocus: false,
        readOnly: false,
        hasClear: true,
        separator: <Icon size="xxs" type="minus" />,
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}picker2-input`;
    }

    toArrayIfNeeded = v => {
        if (this.props.isRange && !Array.isArray(v)) {
            v = Array(2).fill(v);
        }
        return v;
    };

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
        return isFunction(format) ? format(v) : v.format(format);
    };

    onInput = (v, e, eventType) => {
        v = this.setValue(v);

        if (eventType === 'clear') {
            v = null;
            e.stopPropagation();
        }

        func.call(this.props, 'onInput', [v, eventType]);
    };

    onChange = () => {
        func.call(this.props, 'onChange', [this.props.value]);
    };

    handleTypeChange = inputType => {
        if (inputType !== this.props.inputType) {
            func.call(this.props, 'onInputTypeChange', [inputType]);
        }
    };

    onKeyDown = e => {
        switch (e.keyCode) {
            case KEYCODE.ENTER:
                func.call(this.props, 'onClick');
                this.onChange();
                break;
            default:
                return;
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
        const { onKeyDown, onInput, setInputRef, handleTypeChange, prefixCls } = this;
        const {
            autoFocus,
            readOnly,
            isRange,
            value,
            onClick,
            prefix,
            hasClear,
            inputType,
            size,
            focus,
            hasBorder,
            separator,
        } = this.props;

        const placeholder = this.getPlaceholder();
        const htmlSize = String(Math.max(this.formatter(datejs('2020-12-12 24:00:00')).length, hasBorder ? 12 : 8));
        const disabled = this.toArrayIfNeeded(this.props.disabled);

        const sharedInputProps = {
            size,
            htmlSize,
            readOnly,
            hasBorder: false,
            onBlur: () => handleTypeChange(null),
            onChange: onInput,
            onKeyDown,
        };

        let rangeInputProps;
        if (isRange) {
            rangeInputProps = [DATE_INPUT_TYPE.BEGIN, DATE_INPUT_TYPE.END].map(idx => {
                return {
                    ...sharedInputProps,
                    autoFocus,
                    placeholder: placeholder[idx],
                    value: value[idx] || '',
                    disabled: disabled && disabled[idx],
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
            }
        );

        return (
            <div className={className} role="button" tabIndex="0" onKeyDown={onKeyDown} onClick={onClick}>
                {isRange ? (
                    <React.Fragment>
                        <Input
                            {...rangeInputProps[0]}
                            autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
                        />
                        <div className={`${prefixCls}-separator`}>{separator}</div>
                        <Input
                            {...rangeInputProps[1]}
                            hasClear={hasClear}
                            hint={<Icon type="calendar" className={`${prefix}date-picker2-symbol-calendar-icon`} />}
                        />
                    </React.Fragment>
                ) : (
                    <Input
                        {...sharedInputProps}
                        disabled={disabled}
                        hasClear={hasClear}
                        placeholder={placeholder}
                        autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
                        ref={setInputRef}
                        value={value || ''}
                        hint="calendar"
                    />
                )}
            </div>
        );
    }
}

export default polyfill(DateInput);

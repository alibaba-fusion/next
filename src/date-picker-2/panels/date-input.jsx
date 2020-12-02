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
        focused: PT.bool,
        hasBorder: PT.bool,
    };

    static defaultProps = {
        autoFocus: false,
        readOnly: false,
        hasClear: true,
    };

    constructor(props) {
        super(props);
        this.prefixCls = `${props.prefix}picker-input`;
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

    onFocus = inputType => {
        if (inputType !== this.props.inputType) {
            func.call(this.props, 'onInputTypeChange', [inputType]);
        }
    };

    onBlur = () => {
        func.call(this.props, 'onInputTypeChange', [null]);
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
        const {
            locale: {
                placeholder,
                selectDate,
                monthPlaceholder,
                weekPlaceholder,
                yearPlaceholder,
                startPlaceholder,
                quarterPlaceholder,
                endPlaceholder,
            },
            isRange,
            mode,
        } = this.props;
        let holder = this.props.placeholder;

        if (!holder) {
            if (isRange) {
                return [startPlaceholder, endPlaceholder];
            } else {
                const mode2placeholder = {
                    [DATE]: selectDate,
                    [WEEK]: weekPlaceholder,
                    [MONTH]: monthPlaceholder,
                    [QUARTER]: quarterPlaceholder,
                    [YEAR]: yearPlaceholder,
                };
                holder = mode2placeholder[mode];
            }
        }

        holder = holder || placeholder;

        return holder;
    };

    render() {
        const { onKeyDown, onInput, setInputRef, onFocus, onBlur, prefixCls } = this;
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
            focused,
            hasBorder,
        } = this.props;

        const placeholder = this.getPlaceholder();
        const htmlSize = String(Math.max(this.formatter(datejs('2020-12-12 24:00:00')).length, 12));

        const sharedInputProps = {
            onChange: onInput,
            onKeyDown,
            htmlSize,
            readOnly,
            hasBorder: false,
            onBlur: onBlur,
        };

        const className = classnames(
            [prefixCls, `${prefixCls}-${size}`, `${prefixCls}-${isRange ? 'range' : 'date'}`],
            {
                [`${prefixCls}-focused`]: focused,
                [`${prefixCls}-noborder`]: !hasBorder,
            }
        );

        return (
            <div className={className} role="button" tabIndex="0" onKeyDown={onKeyDown} onClick={onClick}>
                {isRange ? (
                    <React.Fragment>
                        <Input
                            {...sharedInputProps}
                            autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
                            placeholder={placeholder[0]}
                            value={value[0] || ''}
                            ref={ref => setInputRef(ref, 0)}
                            onFocus={() => onFocus(DATE_INPUT_TYPE.BEGIN)}
                            className={classnames({
                                [`${prefixCls}-input-active`]: inputType === DATE_INPUT_TYPE.BEGIN,
                            })}
                        />
                        <Icon className={`${prefix}range-picker-input-separator`} size="xxs" type="minus" />
                        <Input
                            {...sharedInputProps}
                            hasClear={hasClear}
                            placeholder={placeholder[1]}
                            value={value[1] || ''}
                            ref={ref => setInputRef(ref, 1)}
                            onFocus={() => onFocus(DATE_INPUT_TYPE.END)}
                            className={classnames({
                                [`${prefixCls}-input-active`]: inputType === DATE_INPUT_TYPE.END,
                            })}
                            hint={<Icon type="calendar" className={`${prefix}date-picker2-symbol-calendar-icon`} />}
                        />
                    </React.Fragment>
                ) : (
                    <Input
                        {...sharedInputProps}
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

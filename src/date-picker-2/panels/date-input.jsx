import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import SharedPT from '../prop-types';
import { DATE_INPUT_TYPE, DATE_PICKER_MODE } from '../constant';
import { func, KEYCODE } from '../../util';

import Input from '../../input';
import Icon from '../../icon';

const { bindCtx, isFunction } = func;
const { DATE, WEEK, MONTH, QUARTER, YEAR } = DATE_PICKER_MODE;

function normalizeToArray(v) {
    if (!Array.isArray(v)) {
        v = [v];
    }
    return v;
}

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
        readOnly: SharedPT.inputReadOnly,
        placeholder: SharedPT.placeholder,
    };

    static defaultProps = {
        autoFocus: false,
        readOnly: false,
        hasClear: true,
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}picker-input`;

        bindCtx(this, [
            'onInput',
            'onFocus',
            'onChange',
            'onKeyDown',
            'format',
            'setValue',
            'setInputRef',
            'getPlaceholder',
        ]);
    }

    setInputRef(el, index) {
        if (this.props.isRange) {
            if (!this.input) {
                this.input = [];
            }
            this.input[index] = el;
        } else {
            this.input = el;
        }
    }

    setValue(v) {
        const { isRange, inputType, value } = this.props;
        let newVal;

        if (isRange) {
            const index = inputType === DATE_INPUT_TYPE.BEGIN ? 0 : 1;

            newVal = [...value];
            newVal[index] = v;
        } else {
            newVal = v;
        }
        return newVal;
    }

    format(v) {
        const { format } = this;

        if (isFunction(format)) {
            return format(v);
        } else {
            return v.format(format);
        }
    }

    onInput(v, e, eventType) {
        v = this.setValue(v);

        if (eventType === 'clear') {
            v = null;
            e.stopPropagation();
        }

        func.call(this.props, 'onInput', [v, eventType]);
    }

    onChange() {
        func.call(this.props, 'onChange', [this.props.value]);
    }

    onFocus(inputType) {
        if (inputType !== this.props.inputType) {
            func.call(this.props, 'onInputTypeChange', [inputType]);
        }
    }

    onKeyDown(e) {
        switch (e.keyCode) {
            case KEYCODE.ENTER:
                func.call(this.props, 'onClick');
                this.onChange();
                break;
            default:
                return;
        }
    }

    getPlaceholder() {
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
        let _placeholder = this.props.placeholder;

        if (!_placeholder) {
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
                _placeholder = mode2placeholder[mode];
            }
        }
        if (!_placeholder) {
            _placeholder = placeholder;
        }

        return _placeholder;
    }

    render() {
        const { onKeyDown, onInput, setInputRef, onFocus, prefixCls } = this;
        const {
            autoFocus,
            readOnly,
            isRange,
            value,
            onClick,
            format,
            prefix,
            hasClear,
        } = this.props;

        const placeholder = this.getPlaceholder();
        const htmlSize = String(Math.max(format.length ? format.length : 0, 12));

        const sharedInputProps = {
            onChange: onInput,
            onKeyDown,
            htmlSize,
            readOnly,
            hasBorder: false,
        };

        const className = classnames([prefixCls, `${prefixCls}-${isRange ? 'range' : 'date'}`]);

        return (
            <div
                className={className}
                role="button"
                tabIndex="0"
                onKeyDown={onKeyDown}
                onClick={onClick}
            >
                {isRange ? (
                    <React.Fragment>
                        <Input
                            {...sharedInputProps}
                            autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
                            placeholder={placeholder[0]}
                            value={value[0] || ''}
                            ref={el => setInputRef(el, 0)}
                            onFocus={() => onFocus(DATE_INPUT_TYPE.BEGIN)}
                        />
                        <Icon
                            className={`${prefix}range-picker-input-separator`}
                            size="xxs"
                            type="minus"
                        />
                        <Input
                            {...sharedInputProps}
                            hasClear={hasClear}
                            placeholder={placeholder[1]}
                            value={value[1] || ''}
                            ref={el => setInputRef(el, 1)}
                            onFocus={() => onFocus(DATE_INPUT_TYPE.END)}
                            hint={
                                <Icon
                                    type="calendar"
                                    className={`${prefix}date-picker-symbol-calendar-icon`}
                                />
                            }
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

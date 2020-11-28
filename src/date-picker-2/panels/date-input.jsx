import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import SharedPT from '../prop-types';
import { DATE_INPUT_TYPE } from '../constant';
import { func, KEYCODE } from '../../util';

import Input from '../../input';
import Icon from '../../icon';

const { bindCtx, isFunction } = func;

class DateInput extends React.Component {
    static propTypes = {
        prefix: PT.string,
        rtl: PT.bool,
        locale: PT.object,
        value: PT.oneOfType([PT.arrayOf(SharedPT.date), SharedPT.date]),
        isRange: PT.bool,
        inputType: SharedPT.inputType,
        format: PT.oneOfType([PT.string, PT.func]),
        onInputTypeChange: PT.func,
        autoFocus: PT.bool,
        readOnly: PT.bool,
    };

    static defaultProps = {
        autoFocus: false,
        readOnly: false,
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

    onInput(v) {
        func.call(this.props, 'onInput', [this.setValue(v)]);
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

    render() {
        const { onKeyDown, onInput, setInputRef, onFocus, prefixCls } = this;
        const { autoFocus, readOnly, isRange, value, onClick, format, prefix } = this.props;

        const htmlSize = format.length ? String(format.length + 2) : undefined;

        const sharedInputProps = {
            onChange: onInput,
            onKeyDown,
            htmlSize,
            readOnly,
            placeholder: format,
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
                            value={value[0] || ''}
                            ref={el => setInputRef(el, 0)}
                            onFocus={() => onFocus(DATE_INPUT_TYPE.BEGIN)}
                        />
                        <span className={`${prefix}range-picker2-input-separator`}>-</span>
                        <Input
                            {...sharedInputProps}
                            value={value[1] || ''}
                            ref={el => setInputRef(el, 1)}
                            onFocus={() => onFocus(DATE_INPUT_TYPE.END)}
                            hint={
                                <Icon
                                    type="calendar"
                                    className={`${prefix}date-picker2-symbol-calendar-icon`}
                                />
                            }
                        />
                    </React.Fragment>
                ) : (
                    <Input
                        {...sharedInputProps}
                        autoFocus={autoFocus} // eslint-disable-line
                        ref={setInputRef}
                        value={value}
                        hint="calendar"
                    />
                )}
            </div>
        );
    }
}

export default polyfill(DateInput);

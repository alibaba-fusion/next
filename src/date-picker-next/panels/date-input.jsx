import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import SharedPT from '../shared-prop-types';
import { DATE_PICKER_TYPE, DATE_INPUT_TYPE } from '../constant';
import { func, KEYCODE, datejs } from '../../util';

const { bindCtx } = func;

class DateInput extends React.Component {
    static propTypes = {
        value(props, propName, componentName) {
            if (propName in props) {
                const value = props[propName];
                const isValid = v => !v || (typeof v === 'string' && datejs(v).isValid());

                if (
                    (props.isRange && (!Array.isArray(value) || !value.every(v => isValid(v)))) ||
                    !isValid()
                ) {
                    throw new Error(
                        `Invalid prop ${propName} supplied to ${componentName}. Validation failed.`
                    );
                }
            }
        },
        isRange: PT.bool,
        inputType: SharedPT.inputType,
        onInputTypeChange: PT.func,
        autoFocus: PT.bool,
    };

    static defaultProps = {
        type: DATE_PICKER_TYPE.DATE,
        autoFocus: false,
    };

    constructor(props) {
        super(props);
        bindCtx(this, ['onInput', 'onFocus', 'onChange', 'onKeyDown', 'setValue', 'setInputRef']);
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
        const { type, inputType, value } = this.props;
        let newVal;

        if (type === DATE_PICKER_TYPE.RANGE) {
            const index = inputType === DATE_INPUT_TYPE.BEGIN ? 0 : 1;

            newVal = [...value];
            newVal[index] = v;
        } else {
            newVal = v;
        }
        return newVal;
    }

    onInput(e) {
        func.call(this.props, 'onInput', [this.setValue(e.target.value)]);
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
        const { onKeyDown, onFocus, onInput, setInputRef } = this;
        const { autoFocus, isRange, value, onClick } = this.props;

        const sharedInputProps = {
            onChange: onInput,
            onKeyDown,
        };

        return (
            <div
                style={{ display: 'inline-block' }}
                role="button"
                tabIndex="0"
                onKeyDown={onKeyDown}
                onClick={onClick}
            >
                {isRange ? (
                    <div>
                        <input
                            {...sharedInputProps}
                            autoFocus={autoFocus} // eslint-disable-line
                            value={value[0] || ''}
                            ref={el => setInputRef(el, 0)}
                            onFocus={() => {
                                onFocus(DATE_INPUT_TYPE.BEGIN);
                            }}
                        />
                        <input
                            {...sharedInputProps}
                            value={value[1] || ''}
                            ref={el => setInputRef(el, 1)}
                            onFocus={() => {
                                onFocus(DATE_INPUT_TYPE.END);
                            }}
                        />
                    </div>
                ) : (
                    <input
                        {...sharedInputProps}
                        autoFocus={autoFocus} // eslint-disable-line
                        ref={setInputRef}
                        value={value}
                    />
                )}
            </div>
        );
    }
}

export default polyfill(DateInput);

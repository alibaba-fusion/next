import React from 'react';
import PropTypes from 'prop-types';
import type { RadioContext, RadioProps, WrappedRadio, Radio as RadioClass } from './types';

export default function withContext(Radio: typeof RadioClass) {
    class WrappedComp extends React.Component<RadioProps> implements WrappedRadio {
        static displayName = 'Radio';
        static contextTypes = {
            onChange: PropTypes.func,
            __group__: PropTypes.bool,
            isButton: PropTypes.bool,
            selectedValue: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.bool,
            ]),
            disabled: PropTypes.bool,
        };

        radioRef: RadioClass | null;

        constructor(props: RadioProps) {
            super(props);
            this.radioRef = null;
        }

        focus() {
            if (this.radioRef) {
                this.radioRef.focus();
            }
        }

        render() {
            return (
                <Radio
                    ref={el => {
                        this.radioRef = el;
                    }}
                    {...this.props}
                    context={this.context as RadioContext}
                />
            );
        }
    }

    return WrappedComp as typeof WrappedRadio;
}

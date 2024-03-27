import React, { type ComponentRef, type ComponentType } from 'react';
import PropTypes from 'prop-types';
import type { RadioContext, RadioProps, WrappedRadio } from './types';

export default function withContext<C extends ComponentType>(Radio: C) {
    type Ref = ComponentRef<C> & { focus: () => void };
    class WrappedComp extends React.Component<RadioProps> {
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

        radioRef: Ref | null;

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
                    ref={(el: Ref | null) => {
                        this.radioRef = el;
                    }}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    {...(this.props as any)}
                    context={this.context as RadioContext}
                />
            );
        }
    }

    return WrappedComp as unknown as typeof WrappedRadio;
}

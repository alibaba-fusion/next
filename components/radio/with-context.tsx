import React from 'react';
import PropTypes from 'prop-types';

export default function withContext(Radio) {
    return class WrappedComp extends React.Component {
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

        constructor(props) {
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
                    context={this.context}
                />
            );
        }
    };
}

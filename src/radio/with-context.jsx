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

        render() {
            return <Radio {...this.props} context={this.context} />;
        }
    };
}

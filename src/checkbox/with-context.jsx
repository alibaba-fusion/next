import React from 'react';
import PropTypes from 'prop-types';

export default function withContext(Checkbox) {
    return class WrappedComp extends React.Component {
        static displayName = 'Checkbox';
        static contextTypes = {
            onChange: PropTypes.func,
            __group__: PropTypes.bool,
            selectedValue: PropTypes.array,
            disabled: PropTypes.bool,
            prefix: PropTypes.string,
        };

        render() {
            return <Checkbox {...this.props} context={this.context} />;
        }
    };
}

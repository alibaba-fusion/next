import React from 'react';
import PropTypes from 'prop-types';
import type { OptionProps } from './types';

/**
 * Select.Option
 */
export default class Option extends React.Component<OptionProps> {
    static propTypes = {
        value: PropTypes.any.isRequired,
        disabled: PropTypes.bool,
        children: PropTypes.any,
    };

    static _typeMark = 'next_select_option';

    static displayName = 'Option';

    render() {
        return this.props.children;
    }
}

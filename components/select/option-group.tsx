import React from 'react';
import PropTypes from 'prop-types';
import type { OptionGroupProps } from './types';

/**
 * Select.OptionGroup
 */
export default class OptionGroup extends React.Component<OptionGroupProps> {
    static propTypes = {
        label: PropTypes.node,
        children: PropTypes.any,
    };

    static _typeMark = 'next_select_option_group';

    static displayName = 'OptionGroup';

    render() {
        return this.props.children;
    }
}

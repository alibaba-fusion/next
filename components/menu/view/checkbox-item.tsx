import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckableItem from './checkable-item';
import type { CheckboxItemProps } from '../types';

export default class CheckboxItem extends Component<CheckboxItemProps> {
    static menuChildType = 'item';

    static propTypes = {
        checked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        helper: PropTypes.node,
        children: PropTypes.node,
        checkboxDisabled: PropTypes.bool,
    };

    static defaultProps = {
        checked: false,
        indeterminate: false,
        disabled: false,
        onChange: () => {},
        checkboxDisabled: false,
    };

    render() {
        const { checkboxDisabled, ...others } = this.props;
        return (
            <CheckableItem
                role="menuitemcheckbox"
                checkType="checkbox"
                checkDisabled={checkboxDisabled}
                {...others}
            />
        );
    }
}

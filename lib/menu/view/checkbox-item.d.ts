import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { CheckboxItemProps } from '../types';
export default class CheckboxItem extends Component<CheckboxItemProps> {
    static menuChildType: string;
    static propTypes: {
        checked: PropTypes.Requireable<boolean>;
        indeterminate: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        helper: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        checkboxDisabled: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        checked: boolean;
        indeterminate: boolean;
        disabled: boolean;
        onChange: () => void;
        checkboxDisabled: boolean;
    };
    render(): React.JSX.Element;
}

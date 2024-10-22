import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { RadioItemProps } from '../types';
export default class RadioItem extends Component<RadioItemProps> {
    static menuChildType: string;
    static propTypes: {
        checked: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        helper: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        checked: boolean;
        disabled: boolean;
        onChange: () => void;
    };
    render(): React.JSX.Element;
}

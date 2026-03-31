import React, { Component } from 'react';
import PropTypes from 'prop-types';
export interface TreeNodeInputProps {
    prefix?: string;
    defaultValue: React.ReactNode;
    onBlur: (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export default class TreeNodeInput extends Component<TreeNodeInputProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
    };
    componentDidMount(): void;
    render(): React.JSX.Element;
}

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Input from '../../input';

export interface TreeNodeInputProps {
    prefix?: string;
    defaultValue: React.ReactNode;
    onBlur: (e: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export default class TreeNodeInput extends Component<TreeNodeInputProps> {
    static propTypes = {
        prefix: PropTypes.string,
    };

    componentDidMount() {
        const inputWrapperNode = findDOMNode(this) as Element;
        inputWrapperNode.querySelector('input')!.focus();
    }

    render() {
        const { prefix, defaultValue, ...others } = this.props;

        return (
            <Input
                size="small"
                className={`${prefix}tree-node-input`}
                defaultValue={defaultValue as string | number | undefined}
                {...others}
            />
        );
    }
}

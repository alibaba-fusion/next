import React, { Component } from 'react';
import type { TagGroupProps } from './types';
declare class Group extends Component<TagGroupProps> {
    static defaultProps: {
        prefix: string;
        rtl: boolean;
    };
    render(): React.JSX.Element;
}
export default Group;

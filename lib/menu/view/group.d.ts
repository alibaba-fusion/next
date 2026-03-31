import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { GroupProps } from '../types';
export default class Group extends Component<GroupProps> {
    static menuChildType: string;
    static propTypes: {
        root: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        parentMode: PropTypes.Requireable<string>;
    };
    render(): (React.ReactText | React.JSX.Element)[];
}

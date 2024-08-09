import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { DividerProps } from '../types';
export default class Divider extends Component<DividerProps> {
    static menuChildType: string;
    static propTypes: {
        root: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
    };
    render(): React.JSX.Element;
}

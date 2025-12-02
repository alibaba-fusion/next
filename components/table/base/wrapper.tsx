import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { WrapperProps } from '../types';
import { type ClassPropsWithDefault } from '../../util';

type InnerWrapperProps = ClassPropsWithDefault<WrapperProps, typeof Wrapper.defaultProps>;

export default class Wrapper extends Component<WrapperProps> {
    static propTypes = {
        tableWidth: PropTypes.number,
        children: PropTypes.any,
        prefix: PropTypes.string,
        colGroup: PropTypes.any,
        component: PropTypes.string,
    };

    static defaultProps = {
        component: 'table',
    };

    readonly props: InnerWrapperProps;

    render() {
        const { colGroup, children, tableWidth, component: Tag } = this.props;
        return (
            <Tag role="table" style={{ width: tableWidth }}>
                {colGroup}
                {children}
            </Tag>
        );
    }
}

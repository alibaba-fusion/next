import React from 'react';
import PropTypes from 'prop-types';
import type { FixedWrapperProps } from '../types';

export default class FixedWrapper extends React.Component<FixedWrapperProps> {
    static propTypes = {
        children: PropTypes.any,
        prefix: PropTypes.string,
        colGroup: PropTypes.any,
        wrapperContent: PropTypes.any,
    };
    render() {
        const { children, wrapperContent, prefix } = this.props;
        return (
            <div className={`${prefix}table-inner`}>
                {children}
                {wrapperContent}
            </div>
        );
    }
}

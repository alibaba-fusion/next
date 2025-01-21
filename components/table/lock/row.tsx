import React from 'react';
import PropTypes from 'prop-types';
import Row from '../base/row';
import type { LockRowProps, RowProps } from '../types';

export default class LockRow extends React.Component<LockRowProps> {
    static propTypes = {
        ...Row.propTypes,
    };

    static contextTypes = {
        onRowMouseEnter: PropTypes.func,
        onRowMouseLeave: PropTypes.func,
    };

    static defaultProps = {
        ...Row.defaultProps,
    };

    onMouseEnter: RowProps['onMouseEnter'] = (record, index, e) => {
        const { onRowMouseEnter } = this.context;
        const { onMouseEnter } = this.props;
        onRowMouseEnter && onRowMouseEnter(record, index, e);
        onMouseEnter(record, index, e);
    };

    onMouseLeave: RowProps['onMouseLeave'] = (record, index, e) => {
        const { onRowMouseLeave } = this.context;
        const { onMouseLeave } = this.props;
        onRowMouseLeave && onRowMouseLeave(record, index, e);
        onMouseLeave(record, index, e);
    };

    render() {
        return (
            <Row
                {...this.props}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            />
        );
    }
}

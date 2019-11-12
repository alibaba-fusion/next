import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Row from '../selection/row';

/* eslint-disable react/prefer-stateless-function */
export default class TreeRow extends React.Component {
    static propTypes = {
        ...Row.propTypes,
    };

    static defaultProps = {
        ...Row.defaultProps,
    };

    static contextTypes = {
        treeStatus: PropTypes.array,
        openRowKeys: PropTypes.array,
    };

    render() {
        /* eslint-disable no-unused-vars*/
        const { className, record, prefix, ...others } = this.props;
        const { treeStatus, openRowKeys } = this.context;
        const id = record.__primaryKeyValue;
        const cls = classnames({
            hidden: !(treeStatus.indexOf(id) > -1) && record.__level !== 0,
            [`${prefix}table-row-level-${record.__level}`]: true,
            opened: openRowKeys.indexOf(id) > -1,
            [className]: className,
        });
        return (
            <Row {...others} record={record} className={cls} prefix={prefix} />
        );
    }
}

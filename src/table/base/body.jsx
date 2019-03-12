import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RowComponent from './row';
import CellComponent from './cell';

const noop = () => {};

export default class Body extends React.Component {
    static propTypes = {
        loading: PropTypes.bool,
        emptyContent: PropTypes.any,
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        components: PropTypes.object,
        getCellProps: PropTypes.func,
        cellRef: PropTypes.func,
        primaryKey: PropTypes.string,
        getRowProps: PropTypes.func,
        rowRef: PropTypes.func,
        dataSource: PropTypes.array,
        children: PropTypes.any,
        className: PropTypes.string,
        component: PropTypes.string,
        colGroup: PropTypes.object,
        columns: PropTypes.array,
        onRowClick: PropTypes.func,
        onRowMouseEnter: PropTypes.func,
        onRowMouseLeave: PropTypes.func,
        locale: PropTypes.object,
    };
    static defaultProps = {
        loading: false,
        prefix: 'next-',
        components: {},
        getCellProps: noop,
        cellRef: noop,
        primaryKey: 'id',
        getRowProps: noop,
        rowRef: noop,
        dataSource: [],
        component: 'tbody',
        columns: [],
    };

    getRowRef = (i, row) => {
        this.props.rowRef(i, row);
    };

    onRowClick = (record, index, e) => {
        this.props.onRowClick(record, index, e);
    };

    onRowMouseEnter = (record, index, e) => {
        this.props.onRowMouseEnter(record, index, e);
    };

    onRowMouseLeave = (record, index, e) => {
        this.props.onRowMouseLeave(record, index, e);
    };

    render() {
        /*eslint-disable no-unused-vars */
        const {
            prefix,
            className,
            children,
            component: Tag,
            colGroup,
            loading,
            emptyContent,
            components,
            getCellProps,
            primaryKey,
            getRowProps,
            dataSource,
            cellRef,
            columns,
            rowRef,
            onRowClick,
            onRowMouseEnter,
            onRowMouseLeave,
            locale,
            pure,
            expandedIndexSimulate,
            rtl,
            ...others
        } = this.props;

        const { Row = RowComponent, Cell = CellComponent } = components;
        const empty = loading ? (
            <span>&nbsp;</span>
        ) : (
            emptyContent || locale.empty
        );
        let rows = (
            <tr>
                <td colSpan={columns.length}>
                    <div className={`${prefix}table-empty`}>{empty}</div>
                </td>
            </tr>
        );
        if (Tag === 'div') {
            rows = (
                <table role="table">
                    <tbody>{rows}</tbody>
                </table>
            );
        }
        if (dataSource.length) {
            rows = dataSource.map((record, index) => {
                let rowProps = {};

                if (expandedIndexSimulate) {
                    rowProps = record.__expanded
                        ? {}
                        : getRowProps(record, index / 2);
                } else {
                    rowProps = getRowProps(record, index);
                }

                rowProps = rowProps || {};

                const rowClass = rowProps.className;
                const className = classnames({
                    first: index === 0,
                    last: index === dataSource.length - 1,
                    [rowClass]: rowClass,
                });
                const expanded = record.__expanded ? 'expanded' : '';
                return (
                    <Row
                        key={`${record[primaryKey] || index}${expanded}`}
                        {...rowProps}
                        ref={this.getRowRef.bind(this, index)}
                        colGroup={colGroup}
                        rtl={rtl}
                        columns={columns}
                        primaryKey={primaryKey}
                        record={record}
                        rowIndex={index}
                        prefix={prefix}
                        pure={pure}
                        cellRef={cellRef}
                        getCellProps={getCellProps}
                        className={className}
                        Cell={Cell}
                        onClick={this.onRowClick}
                        locale={locale}
                        onMouseEnter={this.onRowMouseEnter}
                        onMouseLeave={this.onRowMouseLeave}
                    />
                );
            });
        }
        return (
            <Tag className={className} {...others}>
                {rows}
                {children}
            </Tag>
        );
    }
}

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RowComponent from './row';
import CellComponent from './cell';
import { dom, events } from '../../util';

const noop = () => {};

export default class Body extends React.Component {
    static propTypes = {
        loading: PropTypes.bool,
        emptyContent: PropTypes.any,
        tableEl: PropTypes.any,
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
        onBodyMouseOver: PropTypes.func,
        onBodyMouseOut: PropTypes.func,
        locale: PropTypes.object,
        crossline: PropTypes.bool,
        tableWidth: PropTypes.number,
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

    componentDidMount() {
        events.on(window, 'resize', this.setEmptyDomStyle);
    }

    componentDidUpdate() {
        this.setEmptyDomStyle();
    }

    componentWillUnmount() {
        events.off(window, 'resize', this.setEmptyDomStyle);
    }

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

    onBodyMouseOver = e => {
        this.props.onBodyMouseOver(e);
    };

    onBodyMouseOut = e => {
        this.props.onBodyMouseOut(e);
    };

    getEmptyNode = ref => {
        this.emptyNode = ref;
    };

    setEmptyDomStyle = () => {
        const { tableEl } = this.props;
        const totalWidth = +(tableEl && tableEl.clientWidth) - 2 || '100%';

        dom.setStyle(this.emptyNode, { width: totalWidth });
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
            onBodyMouseOver,
            onBodyMouseOut,
            locale,
            pure,
            expandedIndexSimulate,
            tableEl,
            rtl,
            crossline,
            tableWidth,
            ...others
        } = this.props;

        const totalWidth = +(tableEl && tableEl.clientWidth) - 2 || '100%';

        const { Row = RowComponent, Cell = CellComponent } = components;
        const empty = loading ? <span>&nbsp;</span> : emptyContent || locale.empty;
        let rows = (
            <tr>
                <td colSpan={columns.length}>
                    <div
                        ref={this.getEmptyNode}
                        className={`${prefix}table-empty`}
                        style={{ position: 'sticky', left: 0, overflow: 'hidden', width: totalWidth }}
                    >
                        {empty}
                    </div>
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
                // record may be a string
                const rowIndex = typeof record === 'object' && '__rowIndex' in record ? record.__rowIndex : index;

                if (expandedIndexSimulate) {
                    rowProps = record.__expanded ? {} : getRowProps(record, index / 2);
                } else {
                    rowProps = getRowProps(record, rowIndex);
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
                        key={`${record[primaryKey] || (record[primaryKey] === 0 ? 0 : rowIndex)}${expanded}`}
                        {...rowProps}
                        ref={this.getRowRef.bind(this, rowIndex)}
                        colGroup={colGroup}
                        rtl={rtl}
                        columns={columns}
                        primaryKey={primaryKey}
                        record={record}
                        rowIndex={rowIndex}
                        __rowIndex={rowIndex}
                        prefix={prefix}
                        pure={pure}
                        cellRef={cellRef}
                        getCellProps={getCellProps}
                        className={className}
                        Cell={Cell}
                        tableEl={tableEl}
                        onClick={this.onRowClick}
                        locale={locale}
                        onMouseEnter={this.onRowMouseEnter}
                        onMouseLeave={this.onRowMouseLeave}
                    />
                );
            });
        } else {
            // 异步设置空数据时的宽度
            this.setEmptyDomStyle();
        }
        const event = crossline
            ? {
                  onMouseOver: this.onBodyMouseOver,
                  onMouseOut: this.onBodyMouseOut,
              }
            : {};
        return (
            <Tag className={className} {...others} {...event}>
                {rows}
                {children}
            </Tag>
        );
    }
}

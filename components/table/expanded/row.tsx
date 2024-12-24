import React, { type CSSProperties, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import { log } from '../../util';
import Row from '../lock/row';
import type { ExpandedRowProps, RecordItem } from '../types';

export default class ExpandedRow extends React.Component<ExpandedRowProps> {
    static propTypes = {
        ...Row.propTypes,
    };

    static defaultProps = {
        ...Row.defaultProps,
    };

    static contextTypes = {
        openRowKeys: PropTypes.array,
        expandedRowRender: PropTypes.func,
        expandedRowIndent: PropTypes.array,
        expandedIndexSimulate: PropTypes.bool,
        expandedRowWidthEquals2Table: PropTypes.bool,
        lockType: PropTypes.oneOf(['left', 'right']),
        getExpandedRowRef: PropTypes.func,
    };

    readonly context: {
        openRowKeys: string[];
        expandedRowRender: (record: RecordItem, index: number) => ReactNode;
        expandedRowIndent: [number, number];
        expandedIndexSimulate: boolean;
        expandedRowWidthEquals2Table: boolean;
        lockType: 'left' | 'right';
        getExpandedRowRef: (parentKey: unknown, ref: HTMLDivElement | null) => void;
    };

    getExpandedRow = (parentKey: unknown, ref: HTMLDivElement | null) => {
        const { getExpandedRowRef } = this.context;
        getExpandedRowRef && getExpandedRowRef(parentKey, ref);
    };

    renderExpandedRow(record: RecordItem, rowIndex: number) {
        const {
            expandedRowRender,
            expandedRowIndent,
            openRowKeys,
            lockType,
            expandedIndexSimulate,
            expandedRowWidthEquals2Table,
        } = this.context;
        const expandedIndex = expandedIndexSimulate ? (rowIndex - 1) / 2 : rowIndex;

        const { columns, cellRef } = this.props;
        const colSpan = columns.length;
        const expandedCols = (columns[0] && columns[0].__colIndex) || 0;

        if (expandedRowRender) {
            const { primaryKey, prefix } = this.props,
                leftIndent = expandedRowIndent[0],
                rightIndent = expandedRowIndent[1],
                totalIndent = leftIndent + rightIndent,
                renderCols = (number: number, start = 0) => {
                    const ret = [];
                    for (let i = 0; i < number; i++) {
                        ret.push(
                            <td key={i} ref={cell => cellRef(rowIndex, i + start, cell)}>
                                &nbsp;
                            </td>
                        );
                    }
                    return ret;
                };
            let content;

            if (totalIndent > colSpan && !lockType) {
                log.warning(
                    "It's not allowed expandedRowIndent is more than the number of columns."
                );
            }
            if (leftIndent < columns.length && lockType === 'left') {
                log.warning('expandedRowIndent left is less than the number of left lock columns.');
            }
            if (rightIndent < columns.length && lockType === 'right') {
                log.warning(
                    'expandedRowIndent right is less than the number of right lock columns.'
                );
            }
            if (lockType) {
                return openRowKeys.indexOf(record[primaryKey!] as string) > -1 ? (
                    <tr className={`${prefix}table-expanded-row`} key={`expanded-${expandedIndex}`}>
                        <td colSpan={colSpan} ref={cell => cellRef(rowIndex, expandedCols, cell)}>
                            &nbsp;
                        </td>
                    </tr>
                ) : null;
            }

            const expandedRowStyle: CSSProperties = {
                position: 'sticky',
                left: 0,
            };
            // 暴露给用户的 index
            content = expandedRowRender(record, expandedIndex);
            if (!React.isValidElement(content)) {
                content = (
                    <div
                        className={`${prefix}table-cell-wrapper`}
                        ref={this.getExpandedRow.bind(this, record[primaryKey!])}
                        // @ts-expect-error expandedRowWidthEquals2Table 为 false 时不能传给 style，这里应该是个三元表达式比较妥当
                        style={expandedRowWidthEquals2Table && expandedRowStyle}
                    >
                        {content}
                    </div>
                );
            } else {
                content = expandedRowWidthEquals2Table ? (
                    <div
                        className={`${prefix}table-expanded-area`}
                        ref={this.getExpandedRow.bind(this, record[primaryKey!])}
                        style={expandedRowStyle}
                    >
                        {content}
                    </div>
                ) : (
                    content
                );
            }

            let rightStart = columns.length;
            columns.forEach(col => {
                col.lock === 'right' && rightStart--;
            });
            return openRowKeys.indexOf(record[primaryKey!] as string) > -1 ? (
                <tr
                    className={`${prefix}table-expanded-row`}
                    key={`expanded-${record[primaryKey!] || expandedIndex}`}
                >
                    {renderCols(leftIndent)}
                    <td colSpan={colSpan - totalIndent}>{content}</td>
                    {renderCols(rightIndent, rightStart)}
                </tr>
            ) : null;
        } else {
            return null;
        }
    }

    render() {
        const { record, rowIndex, columns, ...others } = this.props;
        const { expandedIndexSimulate } = this.context;

        if (record.__expanded) {
            return this.renderExpandedRow(record, rowIndex);
        }

        const newRowIndex = expandedIndexSimulate ? rowIndex / 2 : rowIndex;
        return (
            <Row
                {...others}
                record={record}
                columns={columns}
                __rowIndex={rowIndex}
                rowIndex={newRowIndex}
            />
        );
    }
}

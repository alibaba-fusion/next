import React from 'react';
import PropTypes from 'prop-types';
import { log } from '../../util';
import Row from '../lock/row';

export default class ExpandedRow extends React.Component {
    static propTypes = {
        ...Row.propTypes
    }

    static defaultProps = {
        ...Row.defaultProps,
    }

    static contextTypes = {
        openRowKeys: PropTypes.array,
        expandedRowRender: PropTypes.func,
        expandedRowIndent: PropTypes.array,
        lockType: PropTypes.oneOf(['left', 'right'])
    }

    renderExpandedRow(record, index, colSpan) {
        const { expandedRowRender, expandedRowIndent, openRowKeys, lockType } = this.context;
        const { columns, cellRef } = this.props;
        if (expandedRowRender) {
            const { primaryKey, prefix } = this.props,
                leftIndent = expandedRowIndent[0],
                rightIndent = expandedRowIndent[1],
                totalIndent = leftIndent + rightIndent,
                renderCols = (number) => {
                    const ret = [];
                    for (let i = 0; i < number; i++) {
                        ret.push(<td key={i} ref={(cell) => cellRef(index, i, cell)}>&nbsp;</td>);
                    }
                    return ret;
                };
            let content;

            if (totalIndent > colSpan && !lockType) {
                log.warning('It\'s not allowed expandedRowIndent is more than the number of columns.');
            }
            if (leftIndent < columns.length && lockType === 'left') {
                log.warning('expandedRowIndent left is less than the number of left lock columns.');
            }
            if (rightIndent < columns.length && lockType === 'right') {
                log.warning('expandedRowIndent right is less than the number of right lock columns.');
            }
            if (lockType) {
                return (
                    openRowKeys.indexOf(record[primaryKey]) > -1 ? <tr className={`${prefix}table-expanded-row`}  key={`expanded-${index}`}>
                        <td colSpan={colSpan} ref={(cell) => cellRef(index, 0, cell)}>&nbsp;</td>
                    </tr> : null
                );
            }
            content = expandedRowRender(record, index);
            if (!React.isValidElement(content)) {
                content = (
                    <div className={`${prefix}table-cell-wrapper`}>
                        {content}
                    </div>
                );
            }
            return (
                openRowKeys.indexOf(record[primaryKey]) > -1 ? <tr className={`${prefix}table-expanded-row`} key={`expanded-${record[primaryKey] || index}`}>
                    {renderCols(leftIndent)}
                    <td colSpan={colSpan - totalIndent}>
                        {content}
                    </td>
                    {renderCols(rightIndent)}
                </tr> : null
            );
        } else {
            return null;
        }
    }

    render() {
        /* eslint-disable no-unused-vars*/
        const { record, rowIndex, columns } = this.props;
        if (record.__expanded) {
            return this.renderExpandedRow(record, rowIndex, columns.length);
        }
        return (<Row {...this.props} />);
    }
}



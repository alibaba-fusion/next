import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { obj } from '../../util';

export default class Cell extends React.Component {
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        primaryKey: PropTypes.string,
        className: PropTypes.string,
        record: PropTypes.any,
        value: PropTypes.any,
        colIndex: PropTypes.number,
        rowIndex: PropTypes.number,
        title: PropTypes.any,
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        context: PropTypes.any,
        cell: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
        align: PropTypes.oneOf(['left', 'center', 'right']),
        component: PropTypes.oneOf(['td', 'th', 'div']),
        children: PropTypes.any,
        style: PropTypes.object,
        innerStyle: PropTypes.object,
        filterMode: PropTypes.oneOf(['single', 'multiple']),
        filters: PropTypes.array,
        sortable: PropTypes.bool,
        lock: PropTypes.any,
        type: PropTypes.oneOf(['header', 'body']),
        resizable: PropTypes.bool,
        __normalized: PropTypes.bool
    }

    static defaultProps = {
        component: 'td',
        type: 'body',
        cell: (value) => value,
        prefix: 'next-'
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.pure) {
            const isEqual = obj.shallowEqual(this.props, nextProps);
            return !isEqual;
        }
        return true;
    }

    render() {
        /* eslint-disable no-unused-vars */
        const {prefix, className, cell, value, resizable, colIndex, rowIndex, record, context, align, style = {}, component: Tag,
            children, title, width, innerStyle, primaryKey, __normalized, filterMode, filters, sortable, lock, pure, ...others} = this.props;
        const cellProps = {value, index: rowIndex, record, context};
        let content = cell;
        if (React.isValidElement(content)) {
            content = React.cloneElement(content, cellProps);
        } else if (typeof content === 'function') {
            content = content(value, rowIndex, record, context);
        }
        if (align) {
            style.textAlign = align;
        }
        const cls = classnames({
            [`${prefix}table-cell`]: true,
            [className]: className
        });

        return (<Tag {...others} className={cls} style={style} role="gridcell">
            <div className={`${prefix}table-cell-wrapper`} style={innerStyle}>
                {content}
                {children}
            </div>
        </Tag>);
    }
}

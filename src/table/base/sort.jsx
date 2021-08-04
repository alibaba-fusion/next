import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../icon';
import { KEYCODE } from '../../util';

/* eslint-disable react/prefer-stateless-function */
export default class Sort extends React.Component {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        sort: PropTypes.object,
        sortIcons: PropTypes.object,
        onSort: PropTypes.func,
        sortDirections: PropTypes.arrayOf(PropTypes.oneOf(['desc', 'asc', 'default'])),
        dataIndex: PropTypes.string,
        locale: PropTypes.object,
    };
    static defaultProps = {
        sort: {},
        sortDirections: ['desc', 'asc'],
    };
    // 渲染排序
    renderSort() {
        const { prefix, sort, sortIcons, className, dataIndex, locale, sortDirections, rtl } = this.props,
            sortStatus = sort[dataIndex],
            map = {
                desc: 'descending',
                asc: 'ascending',
            };

        const icons = sortDirections.map(sortOrder => {
            return sortOrder === 'default' ? null : (
                <a key={sortOrder} className={sortStatus === sortOrder ? 'current' : ''}>
                    {sortIcons ? sortIcons[sortOrder] : <Icon rtl={rtl} type={map[sortOrder]} size="xs" />}
                </a>
            );
        });

        const cls = classnames({
            [`${prefix}table-sort`]: true,
            [className]: className,
        });

        return (
            <span
                role="button"
                tabIndex="0"
                aria-label={locale[sortStatus]}
                className={cls}
                onClick={this.handleClick.bind(this)}
                onKeyDown={this.keydownHandler}
            >
                {icons}
            </span>
        );
    }

    handleClick = () => {
        const { sort, dataIndex, sortDirections } = this.props;

        let nextSortType = '';

        sortDirections.forEach((dir, i) => {
            if (sort[dataIndex] === dir) {
                nextSortType = sortDirections.length - 1 > i ? sortDirections[i + 1] : sortDirections[0];
            }
        });

        if (!sort[dataIndex]) {
            nextSortType = sortDirections[0];
        }

        this.onSort(dataIndex, nextSortType);
    };

    keydownHandler = e => {
        e.preventDefault();
        e.stopPropagation();

        if (e.keyCode === KEYCODE.ENTER) {
            this.handleClick();
        }
    };

    onSort = (dataIndex, order) => {
        const sort = {};
        sort[dataIndex] = order;

        this.props.onSort(dataIndex, order, sort);
    };

    render() {
        return this.renderSort();
    }
}

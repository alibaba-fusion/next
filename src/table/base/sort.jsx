import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../icon';
import { KEYCODE } from '../../util';

/* eslint-disable react/prefer-stateless-function */
export default class Sort extends React.Component {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        sort: PropTypes.object,
        onSort: PropTypes.func,
        dataIndex: PropTypes.string,
        locale: PropTypes.object,
    };
    static defaultProps = {
        sort: {},
    };
    // 渲染排序
    renderSort() {
        const { prefix, sort, dataIndex, locale, rtl } = this.props,
            sortStatus = sort[dataIndex],
            map = {
                desc: 'descending',
                asc: 'ascending',
            };

        const icons = ['asc', 'desc'].map(sortOrder => {
            return (
                <a
                    href="javascript:;"
                    key={sortOrder}
                    className={sortStatus === sortOrder ? 'current' : ''}
                >
                    <Icon rtl={rtl} type={map[sortOrder]} size="small" />
                </a>
            );
        });

        return (
            <span
                role="button"
                tabIndex="0"
                aria-label={locale[sortStatus]}
                className={`${prefix}table-sort`}
                onClick={this.handleClick.bind(this)}
                onKeyDown={this.keydownHandler}
            >
                {icons}
            </span>
        );
    }

    handleClick = () => {
        const { sort, dataIndex } = this.props;
        this.onSort(dataIndex, sort[dataIndex] === 'desc' ? 'asc' : 'desc');
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

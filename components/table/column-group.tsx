import React from 'react';
import PropTypes from 'prop-types';

export default class ColumnGroup extends React.Component {
    static propTypes = {
        /**
         * 表头显示的内容
         */
        title: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
    };

    static childContextTypes = {
        parent: PropTypes.any,
    };

    static defaultProps = {
        title: 'column-group',
    };

    static _typeMark = 'columnGroup';

    getChildContext() {
        return {
            parent: this,
        };
    }

    render() {
        return null;
    }
}
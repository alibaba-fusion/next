import React from 'react';
import PropTypes from 'prop-types';

/**
 * Table.GroupHeader
 * @order 2
 **/
export default class ListHeader extends React.Component {
    static propTypes = {
        /**
         * 行渲染的逻辑
         */
        cell: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.node,
            PropTypes.func,
        ]),
        /**
         * 是否在Children上面渲染selection
         */
        hasChildrenSelection: PropTypes.bool,
        /**
         * 是否在GroupHeader上面渲染selection
         */
        hasSelection: PropTypes.bool,
    };

    static defaultProps = {
        cell: () => '',
        hasSelection: true,
        hasChildrenSelection: false,
    };

    static _typeMark = 'listHeader';

    render() {
        return null;
    }
}

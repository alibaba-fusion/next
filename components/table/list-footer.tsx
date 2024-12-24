import React from 'react';
import PropTypes from 'prop-types';
import type { GroupFooterProps } from './types';

/**
 * Table.GroupFooter
 * @order 3
 **/
export default class ListFooter extends React.Component<GroupFooterProps> {
    static propTypes = {
        /**
         * 行渲染的逻辑
         */
        cell: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
    };

    static defaultProps = {
        cell: () => '',
    };

    static _typeMark = 'listFooter';

    render() {
        return null;
    }
}

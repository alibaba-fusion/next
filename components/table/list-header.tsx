import React from 'react';
import PropTypes from 'prop-types';
import type { GroupHeaderProps } from './types';

/**
 * Table.GroupHeader
 * @order 2
 **/
export default class ListHeader extends React.Component<GroupHeaderProps> {
    static propTypes = {
        /**
         * 行渲染的逻辑
         */
        cell: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
        /**
         * 是否在 Children 上面渲染 selection
         */
        hasChildrenSelection: PropTypes.bool,
        /**
         * 是否在 GroupHeader 上面渲染 selection
         */
        hasSelection: PropTypes.bool,
        /**
         * 当 dataSouce 里没有 children 时，是否使用内容作为数据
         */
        useFirstLevelDataWhenNoChildren: PropTypes.bool,
    };

    static defaultProps = {
        cell: () => '',
        hasSelection: true,
        hasChildrenSelection: false,
        useFirstLevelDataWhenNoChildren: false,
    };

    static _typeMark = 'listHeader';

    render() {
        return null;
    }
}

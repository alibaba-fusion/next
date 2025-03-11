import React from 'react';
import PropTypes from 'prop-types';
import type { GroupHeaderProps } from './types';

/**
 * Table.GroupHeader
 * @order 2
 **/
export default class ListHeader extends React.Component<GroupHeaderProps> {
    static propTypes = {
        cell: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
        hasChildrenSelection: PropTypes.bool,
        hasSelection: PropTypes.bool,
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

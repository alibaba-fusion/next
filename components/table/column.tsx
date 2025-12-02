import React from 'react';
import PropTypes from 'prop-types';
import type { ColumnProps, InnerColumnProps } from './types';

export default class Column extends React.Component<ColumnProps & InnerColumnProps> {
    static propTypes = {
        dataIndex: PropTypes.string,
        cell: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
        title: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
        htmlTitle: PropTypes.string,
        sortable: PropTypes.bool,
        sortDirections: PropTypes.arrayOf(PropTypes.oneOf(['desc', 'asc', 'default'])),
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        align: PropTypes.oneOf(['left', 'center', 'right']),
        alignHeader: PropTypes.oneOf(['left', 'center', 'right']),
        filters: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                value: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            })
        ),
        filterMode: PropTypes.oneOf(['single', 'multiple']),
        filterMenuProps: PropTypes.object,
        filterProps: PropTypes.object,
        lock: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        resizable: PropTypes.bool,
        asyncResizable: PropTypes.bool,
        colSpan: PropTypes.number,
        wordBreak: PropTypes.oneOf(['all', 'word']),
    };

    static contextTypes = {
        parent: PropTypes.any,
    };

    static defaultProps = {
        cell: (value: unknown) => value,
        filterMode: 'multiple',
        filterMenuProps: {
            subMenuSelectable: false,
        },
        filterProps: {},
        resizable: false,
        asyncResizable: false,
    };

    static _typeMark = 'column';

    render() {
        return null;
    }
}

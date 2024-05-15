import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConfigProvider from '../config-provider';
import { obj } from '../util';
import type { CellProps } from './types';

const { pickOthers } = obj;

/**
 * ResponsiveGrid.Cell
 */
class Cell extends Component<CellProps> {
    static _typeMark = 'responsive_grid_cell';
    static propTypes = {
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        colSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        rowSpan: PropTypes.number,
        component: PropTypes.elementType,
    };

    static defaultProps = {
        component: 'div',
        device: 'desktop',
    };

    render() {
        const { component, children } = this.props;
        const View = component!;

        const others = pickOthers(Object.keys(Cell.propTypes), this.props);

        return <View {...others}>{children}</View>;
    }
}

export default ConfigProvider.config(Cell);

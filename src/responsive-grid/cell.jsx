import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConfigProvider from '../config-provider';
import { obj } from '../util';

const { pickOthers } = obj;
/**
 * ResponsiveGrid.Cell
 */
class Cell extends Component {
    static _typeMark = 'responsive_grid_cell';
    static propTypes = {
        /**
         * 设备，用来做自适应，默认为PC
         * @enumdesc 手机, 平板, PC
         */
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        rowSpan: PropTypes.number,
        /**
         * 横向，占据几列
         */
        colSpan: PropTypes.number,
        /**
         * 横向，在平板下占据几列
         */
        tabletColSpan: PropTypes.number,
        /**
         * 横向，在手机下占据几列
         */
        phoneColSpan: PropTypes.number,
        component: PropTypes.string,
    };

    static defaultProps = {
        component: 'div',
        device: 'desktop',
    };

    render() {
        const { component: View, children } = this.props;

        const others = pickOthers(Object.keys(Cell.propTypes), this.props);

        return <View {...others}>{children}</View>;
    }
}

export default ConfigProvider.config(Cell);

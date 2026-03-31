import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { CellProps } from './types';
/**
 * ResponsiveGrid.Cell
 */
declare class Cell extends Component<CellProps> {
    static _typeMark: string;
    static propTypes: {
        device: PropTypes.Requireable<string>;
        colSpan: PropTypes.Requireable<NonNullable<number | object | null | undefined>>;
        rowSpan: PropTypes.Requireable<number>;
        component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    };
    static defaultProps: {
        component: string;
        device: string;
    };
    static displayName: string;
    render(): React.JSX.Element;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<CellProps & import("../config-provider/types").ComponentCommonProps, Cell, {}> & {
    _typeMark: string;
};
export default _default;

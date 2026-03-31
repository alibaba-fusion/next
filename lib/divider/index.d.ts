import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { DividerProps } from './types';
/**
 * Divider
 */
declare class Divider extends Component<DividerProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        dashed: PropTypes.Requireable<boolean>;
        direction: PropTypes.Requireable<string>;
        orientation: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        direction: string;
        orientation: string;
        dashed: boolean;
    };
    render(): React.JSX.Element;
}
export type { DividerProps };
declare const _default: import("../config-provider/types").ConfiguredComponentClass<DividerProps & import("../config-provider/types").ComponentCommonProps, Divider, {}>;
export default _default;

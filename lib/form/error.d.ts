import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { ErrorProps } from './types';
declare class Error extends Component<ErrorProps> {
    static displayName: string;
    static propTypes: {
        name: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        field: PropTypes.Requireable<object>;
        style: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<NonNullable<((...args: any[]) => any) | PropTypes.ReactNodeLike>>;
        prefix: PropTypes.Requireable<string>;
        preferMarginToDisplayHelp: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        preferMarginToDisplayHelp: boolean;
    };
    static contextTypes: {
        _formField: PropTypes.Requireable<object>;
    };
    static _typeMark: string;
    itemRender: (errors: unknown[]) => unknown[] | null;
    render(): React.JSX.Element | null;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<ErrorProps & import("../config-provider/types").ComponentCommonProps, Error, {}> & {
    _typeMark: string;
};
export default _default;

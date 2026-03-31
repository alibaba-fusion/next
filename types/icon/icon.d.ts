import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Component } from 'react';
import type { IconProps } from './types';
/**
 * Icon
 */
declare class Icon extends Component<IconProps> {
    static propTypes: {
        type: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        size: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        prefix: PropTypes.Requireable<string>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        size: string;
    };
    static displayName: string;
    static _typeMark: string;
    render(): React.JSX.Element;
}
export default Icon;

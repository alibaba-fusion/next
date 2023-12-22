import * as React from 'react';
import * as PropTypes from 'prop-types';
import type { LoadingProps } from './types';
/** Loading */
declare class Loading extends React.Component<LoadingProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        tip: PropTypes.Requireable<any>;
        tipAlign: PropTypes.Requireable<string>;
        visible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        size: PropTypes.Requireable<string>;
        indicator: PropTypes.Requireable<any>;
        color: PropTypes.Requireable<string>;
        fullScreen: PropTypes.Requireable<boolean>;
        disableScroll: PropTypes.Requireable<boolean>;
        safeNode: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
        inline: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        visible: boolean;
        onVisibleChange: () => void;
        animate: null;
        tipAlign: string;
        size: string;
        inline: boolean;
        disableScroll: boolean;
    };
    render(): React.JSX.Element | React.ReactNode[];
}
export type { LoadingProps };
declare const _default: {
    new (
        props: LoadingProps & import('../config-provider/types').ComponentCommonProps,
        context?: unknown
    ): import('../config-provider/types').ConfiguredComponent<
        LoadingProps & import('../config-provider/types').ComponentCommonProps,
        Loading
    >;
    contextType?: React.Context<any> | undefined;
} & {
    propTypes: {
        prefix: PropTypes.Requireable<string>;
        tip: PropTypes.Requireable<any>;
        tipAlign: PropTypes.Requireable<string>;
        visible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        size: PropTypes.Requireable<string>;
        indicator: PropTypes.Requireable<any>;
        color: PropTypes.Requireable<string>;
        fullScreen: PropTypes.Requireable<boolean>;
        disableScroll: PropTypes.Requireable<boolean>;
        safeNode: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
        inline: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    defaultProps: {
        prefix: string;
        visible: boolean;
        onVisibleChange: () => void;
        animate: null;
        tipAlign: string;
        size: string;
        inline: boolean;
        disableScroll: boolean;
    };
};
export default _default;

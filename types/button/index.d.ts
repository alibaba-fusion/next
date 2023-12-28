/// <reference types="react" />
import type { ButtonProps, GroupProps } from './types';
import Button from './view/button';
export type { ButtonProps, GroupProps };
declare const _default: {
    new (
        props: ButtonProps & import('../config-provider/types').ComponentCommonProps,
        context?: unknown
    ): import('../config-provider/types').ConfiguredComponent<
        ButtonProps & import('../config-provider/types').ComponentCommonProps,
        Button
    >;
    contextType?: import('react').Context<any> | undefined;
} & {
    propTypes: {
        prefix: import('prop-types').Requireable<string>;
        rtl: import('prop-types').Requireable<boolean>;
        type: import('prop-types').Requireable<string>;
        size: import('prop-types').Requireable<string>;
        icons: import('prop-types').Requireable<
            import('prop-types').InferProps<{
                loading: import('prop-types').Requireable<import('prop-types').ReactNodeLike>;
            }>
        >;
        iconSize: import('prop-types').Requireable<NonNullable<string | number | null | undefined>>;
        htmlType: import('prop-types').Requireable<string>;
        component: import('prop-types').Requireable<string>;
        loading: import('prop-types').Requireable<boolean>;
        ghost: import('prop-types').Requireable<string | boolean>;
        text: import('prop-types').Requireable<boolean>;
        warning: import('prop-types').Requireable<boolean>;
        disabled: import('prop-types').Requireable<boolean>;
        onClick: import('prop-types').Requireable<(...args: any[]) => any>;
        className: import('prop-types').Requireable<string>;
        onMouseUp: import('prop-types').Requireable<(...args: any[]) => any>;
        children: import('prop-types').Requireable<import('prop-types').ReactNodeLike>;
        locale: import('prop-types').Requireable<object>;
        defaultPropsConfig: import('prop-types').Requireable<object>;
        errorBoundary: import('prop-types').Requireable<
            NonNullable<boolean | object | null | undefined>
        >;
        pure: import('prop-types').Requireable<boolean>;
        device: import('prop-types').Requireable<string>;
        popupContainer: import('prop-types').Requireable<any>;
    };
    defaultProps: {
        prefix: string;
        type: string;
        size: string;
        icons: {};
        htmlType: string;
        component: string;
        loading: boolean;
        ghost: boolean;
        text: boolean;
        warning: boolean;
        disabled: boolean;
        onClick: () => void;
    };
    Group: {
        new (
            props: GroupProps & import('../config-provider/types').ComponentCommonProps,
            context?: unknown
        ): import('../config-provider/types').ConfiguredComponent<
            GroupProps & import('../config-provider/types').ComponentCommonProps,
            {
                render(): import('react').JSX.Element;
                context: any;
                setState<K extends never>(
                    state:
                        | {}
                        | ((
                              prevState: Readonly<{}>,
                              props: Readonly<GroupProps>
                          ) => {} | Pick<{}, K> | null)
                        | Pick<{}, K>
                        | null,
                    callback?: (() => void) | undefined
                ): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<GroupProps> &
                    Readonly<{
                        children?: import('react').ReactNode;
                    }>;
                state: Readonly<{}>;
                refs: {
                    [key: string]: import('react').ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(
                    nextProps: Readonly<GroupProps>,
                    nextState: Readonly<{}>,
                    nextContext: any
                ): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
                getSnapshotBeforeUpdate?(
                    prevProps: Readonly<GroupProps>,
                    prevState: Readonly<{}>
                ): any;
                componentDidUpdate?(
                    prevProps: Readonly<GroupProps>,
                    prevState: Readonly<{}>,
                    snapshot?: any
                ): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<GroupProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(
                    nextProps: Readonly<GroupProps>,
                    nextContext: any
                ): void;
                componentWillUpdate?(
                    nextProps: Readonly<GroupProps>,
                    nextState: Readonly<{}>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillUpdate?(
                    nextProps: Readonly<GroupProps>,
                    nextState: Readonly<{}>,
                    nextContext: any
                ): void;
            }
        >;
        contextType?: import('react').Context<any> | undefined;
    } & {
        propTypes: {
            rtl: import('prop-types').Requireable<boolean>;
            prefix: import('prop-types').Requireable<string>;
            size: import('prop-types').Requireable<string>;
            className: import('prop-types').Requireable<string>;
            children: import('prop-types').Requireable<import('prop-types').ReactNodeLike>;
            locale: import('prop-types').Requireable<object>;
            defaultPropsConfig: import('prop-types').Requireable<object>;
            errorBoundary: import('prop-types').Requireable<
                NonNullable<boolean | object | null | undefined>
            >;
            pure: import('prop-types').Requireable<boolean>;
            warning: import('prop-types').Requireable<boolean>;
            device: import('prop-types').Requireable<string>;
            popupContainer: import('prop-types').Requireable<any>;
        };
        defaultProps: {
            prefix: string;
            size: string;
        };
    };
};
export default _default;

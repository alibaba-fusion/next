import React, { type ReactNode, Component } from 'react';
import PropTypes from 'prop-types';
import type { BreadcrumbProps } from './types';
export type { BreadcrumbProps, ItemProps } from './types';
interface BreadcrumbState {
    maxNode: number;
    prevMaxNode?: BreadcrumbProps['maxNode'];
}
/**
 * Breadcrumb
 */
declare class Breadcrumb extends Component<BreadcrumbProps, BreadcrumbState> {
    static Item: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').ItemProps & import('../config-provider/types').ComponentCommonProps,
        {
            render(): React.JSX.Element;
            context: any;
            setState<K extends never>(
                state:
                    | {}
                    | ((
                          prevState: Readonly<{}>,
                          props: Readonly<import('./types').ItemProps>
                      ) => {} | Pick<{}, K> | null)
                    | Pick<{}, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('./types').ItemProps> &
                Readonly<{
                    children?: React.ReactNode;
                }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').ItemProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').ItemProps>,
                prevState: Readonly<{}>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('./types').ItemProps>,
                prevState: Readonly<{}>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').ItemProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').ItemProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').ItemProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').ItemProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
        },
        {}
    > & {
        _typeMark: string;
        Separator: ({
            prefix,
            children,
        }: {
            prefix?: string | undefined;
            children: React.ReactNode;
        }) => React.JSX.Element;
    };
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        children: (props: Record<string, unknown>, propName: string) => void;
        maxNode: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        showHiddenItems: PropTypes.Requireable<boolean>;
        popupContainer: PropTypes.Requireable<any>;
        followTrigger: PropTypes.Requireable<boolean>;
        popupProps: PropTypes.Requireable<object>;
        separator: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        component: PropTypes.Requireable<
            NonNullable<string | ((...args: any[]) => any) | null | undefined>
        >;
        className: PropTypes.Requireable<any>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        prefix: string;
        maxNode: number;
        showHiddenItems: boolean;
        component: string;
    };
    static displayName: string;
    breadcrumbEl: HTMLUListElement;
    constructor(props: BreadcrumbProps);
    static getDerivedStateFromProps(
        props: BreadcrumbProps,
        state: BreadcrumbState
    ):
        | {
              prevMaxNode?: undefined;
              maxNode?: undefined;
          }
        | {
              prevMaxNode: number | 'auto' | undefined;
              maxNode: number | undefined;
          };
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    computeMaxNode: () => void;
    saveBreadcrumbRef: (ref: HTMLUListElement) => void;
    renderEllipsisNodeWithMenu(children: ReactNode, breakpointer: number): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    BreadcrumbProps & import('../config-provider/types').ComponentCommonProps,
    Breadcrumb,
    {}
> & {
    Item: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').ItemProps & import('../config-provider/types').ComponentCommonProps,
        {
            render(): React.JSX.Element;
            context: any;
            setState<K extends never>(
                state:
                    | {}
                    | ((
                          prevState: Readonly<{}>,
                          props: Readonly<import('./types').ItemProps>
                      ) => {} | Pick<{}, K> | null)
                    | Pick<{}, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('./types').ItemProps> &
                Readonly<{
                    children?: React.ReactNode;
                }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').ItemProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').ItemProps>,
                prevState: Readonly<{}>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('./types').ItemProps>,
                prevState: Readonly<{}>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').ItemProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').ItemProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').ItemProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').ItemProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
        },
        {}
    > & {
        _typeMark: string;
        Separator: ({
            prefix,
            children,
        }: {
            prefix?: string | undefined;
            children: React.ReactNode;
        }) => React.JSX.Element;
    };
};
export default _default;

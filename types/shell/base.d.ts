import React from 'react';
import type { BaseProps } from './types';
export default function Base(props: {
    componentName?: string;
}): import('../config-provider/types').ConfiguredComponentClass<
    BaseProps & import('../config-provider/types').ComponentCommonProps,
    {
        getChildContext(): {
            isCollapse: boolean | undefined;
        };
        render(): React.ReactNode;
        context: any;
        setState<K extends never>(
            state:
                | {}
                | ((prevState: Readonly<{}>, props: Readonly<BaseProps>) => {} | Pick<{}, K> | null)
                | Pick<{}, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<BaseProps> &
            Readonly<{
                children?: React.ReactNode;
            }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<BaseProps>,
            nextState: Readonly<{}>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<BaseProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(
            prevProps: Readonly<BaseProps>,
            prevState: Readonly<{}>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<BaseProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<BaseProps>, nextContext: any): void;
        componentWillUpdate?(
            nextProps: Readonly<BaseProps>,
            nextState: Readonly<{}>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<BaseProps>,
            nextState: Readonly<{}>,
            nextContext: any
        ): void;
    },
    {}
> & {
    _typeMark: string;
};

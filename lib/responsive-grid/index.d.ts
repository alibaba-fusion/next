import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { ResponsiveGridProps, CellProps } from './types';
/**
 * ResponsiveGrid
 */
declare class ResponsiveGrid extends Component<ResponsiveGridProps> {
    static _typeMark: string;
    static Cell: import("../config-provider/types").ConfiguredComponentClass<CellProps & import("../config-provider/types").ComponentCommonProps, {
        render(): React.JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<CellProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<CellProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<CellProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<CellProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<CellProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<CellProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<CellProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<CellProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<CellProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<any>;
        device: PropTypes.Requireable<string>;
        rows: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        columns: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        gap: PropTypes.Requireable<NonNullable<number | (number | null | undefined)[] | null | undefined>>;
        component: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        dense: PropTypes.Requireable<boolean>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        prefix: string;
        component: string;
        device: string;
        dense: boolean;
    };
    static displayName: string;
    render(): React.JSX.Element;
}
export type { ResponsiveGridProps, CellProps };
declare const _default: import("../config-provider/types").ConfiguredComponentClass<ResponsiveGridProps & import("../config-provider/types").ComponentCommonProps, ResponsiveGrid, {}> & {
    _typeMark: string;
    Cell: import("../config-provider/types").ConfiguredComponentClass<CellProps & import("../config-provider/types").ComponentCommonProps, {
        render(): React.JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<CellProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<CellProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<CellProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<CellProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<CellProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<CellProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<CellProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<CellProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<CellProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        _typeMark: string;
    };
};
export default _default;

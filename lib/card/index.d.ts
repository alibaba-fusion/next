/// <reference types="react" />
import Card from './card';
export type { CardProps, CardMediaProps, CardHeaderProps, CardContentProps, CardDividerProps, CardActionsProps, CardBulletHeaderProps, CardCollaspeContentProps, CardCollapseContentProps, } from './types';
declare const _default: import("../config-provider/types").ConfiguredComponentClass<import("./types").CardProps & import("../config-provider/types").ComponentCommonProps, Card, {}> & {
    Divider: import("../config-provider/types").ConfiguredComponentClass<import("./types").CardDividerProps & import("../config-provider/types").ComponentCommonProps, {
        render(): import("react").JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").CardDividerProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").CardDividerProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").CardDividerProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").CardDividerProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").CardDividerProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").CardDividerProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").CardDividerProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").CardDividerProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").CardDividerProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}>;
    Header: import("../config-provider/types").ConfiguredComponentClass<import("./types").CardHeaderProps & import("../config-provider/types").ComponentCommonProps, {
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").CardHeaderProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").CardHeaderProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").CardHeaderProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").CardHeaderProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").CardHeaderProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").CardHeaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").CardHeaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").CardHeaderProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").CardHeaderProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}>;
    Media: import("../config-provider/types").ConfiguredComponentClass<import("./types").CardMediaProps & import("../config-provider/types").ComponentCommonProps, {
        render(): import("react").JSX.Element;
        context: any;
        setState<K_2 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").CardMediaProps>) => {} | Pick<{}, K_2> | null) | Pick<{}, K_2> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").CardMediaProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").CardMediaProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").CardMediaProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").CardMediaProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").CardMediaProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").CardMediaProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").CardMediaProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").CardMediaProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}>;
    Content: import("../config-provider/types").ConfiguredComponentClass<import("./types").CardContentProps & import("../config-provider/types").ComponentCommonProps, {
        render(): import("react").JSX.Element;
        context: any;
        setState<K_3 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").CardContentProps>) => {} | Pick<{}, K_3> | null) | Pick<{}, K_3> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").CardContentProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").CardContentProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").CardContentProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").CardContentProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").CardContentProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").CardContentProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").CardContentProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").CardContentProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}>;
    Actions: import("../config-provider/types").ConfiguredComponentClass<import("./types").CardActionsProps & import("../config-provider/types").ComponentCommonProps, {
        render(): import("react").JSX.Element;
        context: any;
        setState<K_4 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").CardActionsProps>) => {} | Pick<{}, K_4> | null) | Pick<{}, K_4> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").CardActionsProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").CardActionsProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").CardActionsProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").CardActionsProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").CardActionsProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").CardActionsProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").CardActionsProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").CardActionsProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}>;
    BulletHeader: import("../config-provider/types").ConfiguredComponentClass<import("./types").CardBulletHeaderProps & import("../config-provider/types").ComponentCommonProps, {
        render(): import("react").JSX.Element | null;
        context: any;
        setState<K_5 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").CardBulletHeaderProps>) => {} | Pick<{}, K_5> | null) | Pick<{}, K_5> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").CardBulletHeaderProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").CardBulletHeaderProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").CardBulletHeaderProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").CardBulletHeaderProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").CardBulletHeaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").CardBulletHeaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").CardBulletHeaderProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").CardBulletHeaderProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}>;
    CollaspeContent: import("../config-provider/types").ConfiguredComponentClass<import("./types").CardCollapseContentProps & import("../config-provider/types").ComponentCommonProps, {
        content: HTMLDivElement;
        footer: HTMLDivElement;
        componentDidMount(): void;
        componentDidUpdate(): void;
        handleToggle: () => void;
        _setNeedMore(): void;
        _setContentHeight(): void;
        _getNodeChildrenHeight(node?: HTMLDivElement | undefined): number;
        _contentRefHandler: (ref: HTMLDivElement) => void;
        saveFooter: (ref: HTMLDivElement) => void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_6 extends keyof import("./collapse-content").CardCollapseContentState>(state: import("./collapse-content").CardCollapseContentState | ((prevState: Readonly<import("./collapse-content").CardCollapseContentState>, props: Readonly<import("./types").CardCollapseContentProps>) => import("./collapse-content").CardCollapseContentState | Pick<import("./collapse-content").CardCollapseContentState, K_6> | null) | Pick<import("./collapse-content").CardCollapseContentState, K_6> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").CardCollapseContentProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("./collapse-content").CardCollapseContentState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("./types").CardCollapseContentProps>, nextState: Readonly<import("./collapse-content").CardCollapseContentState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").CardCollapseContentProps>, prevState: Readonly<import("./collapse-content").CardCollapseContentState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").CardCollapseContentProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").CardCollapseContentProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").CardCollapseContentProps>, nextState: Readonly<import("./collapse-content").CardCollapseContentState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").CardCollapseContentProps>, nextState: Readonly<import("./collapse-content").CardCollapseContentState>, nextContext: any): void;
    }, {}>;
    CollapseContent: import("../config-provider/types").ConfiguredComponentClass<import("./types").CardCollapseContentProps & import("../config-provider/types").ComponentCommonProps, {
        content: HTMLDivElement;
        footer: HTMLDivElement;
        componentDidMount(): void;
        componentDidUpdate(): void;
        handleToggle: () => void;
        _setNeedMore(): void;
        _setContentHeight(): void;
        _getNodeChildrenHeight(node?: HTMLDivElement | undefined): number;
        _contentRefHandler: (ref: HTMLDivElement) => void;
        saveFooter: (ref: HTMLDivElement) => void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_6 extends keyof import("./collapse-content").CardCollapseContentState>(state: import("./collapse-content").CardCollapseContentState | ((prevState: Readonly<import("./collapse-content").CardCollapseContentState>, props: Readonly<import("./types").CardCollapseContentProps>) => import("./collapse-content").CardCollapseContentState | Pick<import("./collapse-content").CardCollapseContentState, K_6> | null) | Pick<import("./collapse-content").CardCollapseContentState, K_6> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").CardCollapseContentProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("./collapse-content").CardCollapseContentState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("./types").CardCollapseContentProps>, nextState: Readonly<import("./collapse-content").CardCollapseContentState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").CardCollapseContentProps>, prevState: Readonly<import("./collapse-content").CardCollapseContentState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").CardCollapseContentProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").CardCollapseContentProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").CardCollapseContentProps>, nextState: Readonly<import("./collapse-content").CardCollapseContentState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").CardCollapseContentProps>, nextState: Readonly<import("./collapse-content").CardCollapseContentState>, nextContext: any): void;
    }, {}>;
};
export default _default;

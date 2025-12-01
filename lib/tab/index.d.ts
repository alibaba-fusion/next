/// <reference types="react" />
import type { TabProps } from '../tab/types';
export type { TabProps, ItemProps } from './types';
declare const _default: import("../config-provider/types").ConfiguredComponentClass<TabProps & import("../config-provider/types").ComponentCommonProps, {
    componentDidUpdate(prevProps: TabProps): void;
    getDefaultActiveKey(props: TabProps): string | undefined;
    getNextActiveKey(isNext: boolean): string | 0 | null;
    isActiveKeyExist(activeKey: string): boolean;
    setActiveKey(key: string): void;
    handleTriggerEvent: (eventType: string, key: string) => void;
    onNavKeyDown: (e: import("react").KeyboardEvent<HTMLElement>) => void;
    render(): import("react").JSX.Element;
    context: any;
    setState<K extends "activeKey">(state: import("./tab").TabState | ((prevState: Readonly<import("./tab").TabState>, props: Readonly<TabProps>) => import("./tab").TabState | Pick<import("./tab").TabState, K> | null) | Pick<import("./tab").TabState, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<TabProps> & Readonly<{
        children?: import("react").ReactNode;
    }>;
    state: Readonly<import("./tab").TabState>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<TabProps>, nextState: Readonly<import("./tab").TabState>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<TabProps>, prevState: Readonly<import("./tab").TabState>): any;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<TabProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TabProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<TabProps>, nextState: Readonly<import("./tab").TabState>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<TabProps>, nextState: Readonly<import("./tab").TabState>, nextContext: any): void;
}, {}> & {
    Item: {
        new (props: import("../tab/types").ItemProps | Readonly<import("../tab/types").ItemProps>): {
            _actived: boolean;
            readonly props: import("../tab/types").TabItemProps;
            render(): import("react").JSX.Element | null;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../tab/types").ItemProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../tab/types").ItemProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../tab/types").ItemProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<import("../tab/types").ItemProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../tab/types").ItemProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../tab/types").ItemProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../tab/types").ItemProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../tab/types").ItemProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: import("../tab/types").ItemProps, context: any): {
            _actived: boolean;
            readonly props: import("../tab/types").TabItemProps;
            render(): import("react").JSX.Element | null;
            context: any;
            setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../tab/types").ItemProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            state: Readonly<{}>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../tab/types").ItemProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../tab/types").ItemProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<import("../tab/types").ItemProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../tab/types").ItemProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../tab/types").ItemProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../tab/types").ItemProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../tab/types").ItemProps>, nextState: Readonly<{}>, nextContext: any): void;
        };
        displayName: string;
        propTypes: {
            prefix: import("prop-types").Requireable<string>;
            title: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
            closeable: import("prop-types").Requireable<boolean>;
            disabled: import("prop-types").Requireable<boolean>;
            active: import("prop-types").Requireable<boolean>;
            lazyLoad: import("prop-types").Requireable<boolean>;
            unmountInactiveTabs: import("prop-types").Requireable<boolean>;
            children: import("prop-types").Requireable<any>;
        };
        defaultProps: {
            prefix: string;
            closeable: boolean;
        };
        contextType?: import("react").Context<any> | undefined;
    };
    TabPane: import("../config-provider/types").ConfiguredComponentClass<import("../tab/types").ItemProps & import("../config-provider/types").ComponentCommonProps, {
        _actived: boolean;
        readonly props: import("../tab/types").TabItemProps;
        render(): import("react").JSX.Element | null;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../tab/types").ItemProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../tab/types").ItemProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../tab/types").ItemProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("../tab/types").ItemProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../tab/types").ItemProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../tab/types").ItemProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../tab/types").ItemProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../tab/types").ItemProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}>;
};
export default _default;

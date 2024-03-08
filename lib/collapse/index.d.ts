/// <reference types="react" />
import type { CollapseProps, PanelProps } from './types';
declare const CollapseWithPanel: import("../config-provider/types").ConfiguredComponentClass<CollapseProps & import("../config-provider/types").ComponentCommonProps, {
    onItemClick(key: import("./types").KeyType): void;
    genratePanelId(itemId: string | undefined, index: number): string | undefined;
    getProps(item: import("./types").DataItem, index: number, key: import("./types").KeyType): {
        key: import("./types").KeyType;
        title: import("react").ReactNode;
        isExpanded: boolean;
        disabled: boolean | undefined;
        id: string | undefined;
        onClick: (() => void) | null;
    };
    getItemsByDataSource(): import("react").JSX.Element[];
    getItemsByChildren(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[] | null | undefined;
    setExpandedKey(expandedKeys: import("./types").KeyType[]): void;
    render(): import("react").JSX.Element;
    context: any;
    setState<K extends "expandedKeys">(state: {
        expandedKeys: import("./types").KeyType[];
    } | ((prevState: Readonly<{
        expandedKeys: import("./types").KeyType[];
    }>, props: Readonly<CollapseProps>) => {
        expandedKeys: import("./types").KeyType[];
    } | Pick<{
        expandedKeys: import("./types").KeyType[];
    }, K> | null) | Pick<{
        expandedKeys: import("./types").KeyType[];
    }, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<CollapseProps> & Readonly<{
        children?: import("react").ReactNode;
    }>;
    state: Readonly<{
        expandedKeys: import("./types").KeyType[];
    }>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<CollapseProps>, nextState: Readonly<{
        expandedKeys: import("./types").KeyType[];
    }>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<CollapseProps>, prevState: Readonly<{
        expandedKeys: import("./types").KeyType[];
    }>): any;
    componentDidUpdate?(prevProps: Readonly<CollapseProps>, prevState: Readonly<{
        expandedKeys: import("./types").KeyType[];
    }>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<CollapseProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<CollapseProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<CollapseProps>, nextState: Readonly<{
        expandedKeys: import("./types").KeyType[];
    }>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<CollapseProps>, nextState: Readonly<{
        expandedKeys: import("./types").KeyType[];
    }>, nextContext: any): void;
}, {}> & {
    Panel: import("../config-provider/types").ConfiguredComponentClass<PanelProps & import("../config-provider/types").ComponentCommonProps, {
        onKeyDown: (e: import("react").KeyboardEvent<HTMLElement>) => void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<PanelProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<PanelProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<PanelProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<PanelProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<PanelProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<PanelProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<PanelProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<PanelProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<PanelProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}> & {
        isNextPanel: boolean;
    };
};
export default CollapseWithPanel;
export type { CollapseProps, PanelProps };

/// <reference types="react" />
declare const TimelineWithItem: import("../config-provider/types").ConfiguredComponentClass<import("./types").TimelineProps & import("../config-provider/types").ComponentCommonProps, {
    toggleFold(folderIndex: number, total: number): void;
    render(): import("react").JSX.Element;
    context: any;
    setState<K extends keyof import("./types").TimelineState>(state: import("./types").TimelineState | ((prevState: Readonly<import("./types").TimelineState>, props: Readonly<import("./types").TimelineProps>) => import("./types").TimelineState | Pick<import("./types").TimelineState, K> | null) | Pick<import("./types").TimelineState, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<import("./types").TimelineProps> & Readonly<{
        children?: import("react").ReactNode;
    }>;
    state: Readonly<import("./types").TimelineState>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<import("./types").TimelineProps>, nextState: Readonly<import("./types").TimelineState>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").TimelineProps>, prevState: Readonly<import("./types").TimelineState>): any;
    componentDidUpdate?(prevProps: Readonly<import("./types").TimelineProps>, prevState: Readonly<import("./types").TimelineState>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<import("./types").TimelineProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").TimelineProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<import("./types").TimelineProps>, nextState: Readonly<import("./types").TimelineState>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").TimelineProps>, nextState: Readonly<import("./types").TimelineState>, nextContext: any): void;
}, {}> & {
    Item: import("../config-provider/types").ConfiguredComponentClass<import("./types").ItemProps & import("../config-provider/types").ComponentCommonProps, {
        'timeline-item'?: HTMLDivElement | null | undefined;
        toggleFold(folderIndex: number): void;
        beforeEnter: () => void;
        beforeLeave: () => void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").ItemProps>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("./types").ItemProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./types").ItemProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").ItemProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("./types").ItemProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./types").ItemProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").ItemProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./types").ItemProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").ItemProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, {}>;
};
export type { TimelineProps, ItemProps } from './types';
export default TimelineWithItem;

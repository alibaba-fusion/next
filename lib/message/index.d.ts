/// <reference types="react" />
declare const MessageProvider: import("../config-provider/types").ConfiguredComponentClass<import("./types").MessageProps & import("../config-provider/types").ComponentCommonProps, import("../config-provider/types").ConfiguredComponent<import("./types").MessageProps & import("../config-provider/types").ComponentCommonProps, {
    state: {
        visible: boolean | undefined;
    };
    onClose: () => void;
    render(): import("react").JSX.Element | null;
    context: any;
    setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").MessageProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<import("./types").MessageProps> & Readonly<{
        children?: import("react").ReactNode;
    }>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<import("./types").MessageProps>, nextState: Readonly<{}>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").MessageProps>, prevState: Readonly<{}>): any;
    componentDidUpdate?(prevProps: Readonly<import("./types").MessageProps>, prevState: Readonly<{}>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<import("./types").MessageProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").MessageProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<import("./types").MessageProps>, nextState: Readonly<{}>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").MessageProps>, nextState: Readonly<{}>, nextContext: any): void;
}>, {}> & {
    help: (config: import("./types").OpenProps) => void;
    hide: () => void;
    show: (config: import("./types").OpenProps) => void;
    open: (config: import("./types").OpenProps) => {
        key: string;
        close: () => void;
    };
    close: (key?: string | undefined) => void;
    warning: (config: import("./types").OpenProps) => void;
    error: (config: import("./types").OpenProps) => void;
    config: (config: Partial<{
        top: number;
        maxCount: number;
        duration: number;
    }>) => void;
    loading: (config: import("./types").OpenProps) => void;
    success: (config: import("./types").OpenProps) => void;
    notice: (config: import("./types").OpenProps) => void;
    destory: () => void;
    withContext: <P extends import("./toast").WithContextMessageProps, C>(WrappedComponent: import("react").JSXElementConstructor<P> & C) => (props: JSX.LibraryManagedAttributes<C, Omit<P, "contextMessage">>) => import("react").JSX.Element;
};
export default MessageProvider;
export type { MessageProps, MessageQuickProps } from './types';
export type { ContextMessage } from './toast';

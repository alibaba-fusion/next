/// <reference types="react" />
declare const ListWithItem: import("../config-provider/types").ConfiguredComponentClass<import("./types").ListProps & import("../config-provider/types").ComponentCommonProps, {
    render(): import("react").JSX.Element;
    context: any;
    setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("./types").ListProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<import("./types").ListProps> & Readonly<{
        children?: import("react").ReactNode;
    }>;
    state: Readonly<{}>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<import("./types").ListProps>, nextState: Readonly<{}>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").ListProps>, prevState: Readonly<{}>): any;
    componentDidUpdate?(prevProps: Readonly<import("./types").ListProps>, prevState: Readonly<{}>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<import("./types").ListProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").ListProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<import("./types").ListProps>, nextState: Readonly<{}>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").ListProps>, nextState: Readonly<{}>, nextContext: any): void;
}, {}> & {
    Item: import("../config-provider/types").ConfiguredComponentClass<import("./types").ListItemProps & import("../config-provider/types").ComponentCommonProps, import("./item").ListItem, {}>;
};
export type { ListItemProps, ListProps } from './types';
export default ListWithItem;

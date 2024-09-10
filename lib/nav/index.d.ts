/// <reference types="react" />
import Item from './item';
import Group from './group';
import SubNav from './sub-nav';
import PopupItem from './popup-item';
import type { NavProps, SubNavProps, PopupItemProps, ItemProps, GroupProps } from './types';
declare const NavWithSubComponent: import("../config-provider/types").ConfiguredComponentClass<NavProps & import("../config-provider/types").ComponentCommonProps, {
    menu: import("../config-provider/types").ConfiguredComponent<import("../menu").MenuProps & import("../config-provider/types").ComponentCommonProps, import("../menu/view/menu").Menu> | null;
    getChildContext(): {
        prefix: string | undefined;
        mode: "inline" | "popup" | undefined;
        iconOnly: any;
        iconOnlyWidth: string | number | undefined;
        iconTextOnly: boolean | undefined;
        hasTooltip: boolean | undefined;
        hasArrow: boolean | undefined;
    };
    getMenuRef: import("react").LegacyRef<import("../config-provider/types").ConfiguredComponent<import("../menu").MenuProps & import("../config-provider/types").ComponentCommonProps, import("../menu/view/menu").Menu>>;
    render(): import("react").JSX.Element;
    context: any;
    setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<NavProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<NavProps> & Readonly<{
        children?: import("react").ReactNode;
    }>;
    state: Readonly<{}>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<NavProps>, nextState: Readonly<{}>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<NavProps>, prevState: Readonly<{}>): any;
    componentDidUpdate?(prevProps: Readonly<NavProps>, prevState: Readonly<{}>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<NavProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<NavProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<NavProps>, nextState: Readonly<{}>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<NavProps>, nextState: Readonly<{}>, nextContext: any): void;
}, {}> & {
    Item: typeof Item;
    Group: typeof Group;
    SubNav: typeof SubNav;
    PopupItem: typeof PopupItem;
    Divider: typeof import("../menu/view/divider").default;
};
export type { NavProps, SubNavProps, PopupItemProps, ItemProps, GroupProps };
export default NavWithSubComponent;

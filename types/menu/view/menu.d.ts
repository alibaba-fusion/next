import React, {
    Component,
    type ReactNode,
    type FocusEvent,
    type MouseEvent,
    type KeyboardEvent,
} from 'react';
import PropTypes from 'prop-types';
import { type ClassPropsWithDefault } from '../../util';
import type { ItemProps, K2N, MenuProps, P2N } from '../types';
import type MenuItem from './item';
import type SelectableItem from './selectable-item';
export interface MenuState {
    lastVisibleIndex: number | undefined;
    root: Menu;
    newChildren: ReactNode[];
    _k2n: K2N;
    _p2n: P2N;
    tabbableKey: string | undefined | null;
    openKeys: string[];
    selectedKeys: string[];
    focusedKey: string | null | undefined;
    lastMode?: MenuProps['mode'];
}
export type MenuPropsWithDefaults = ClassPropsWithDefault<MenuProps, typeof Menu.defaultProps>;
export declare class Menu extends Component<MenuProps, MenuState> {
    static isNextMenu: boolean;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onItemClick: PropTypes.Requireable<(...args: any[]) => any>;
        openKeys: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        defaultOpenKeys: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        defaultOpenAll: PropTypes.Requireable<boolean>;
        onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        mode: PropTypes.Requireable<string>;
        triggerType: PropTypes.Requireable<string>;
        openMode: PropTypes.Requireable<string>;
        inlineIndent: PropTypes.Requireable<number>;
        inlineArrowDirection: PropTypes.Requireable<string>;
        popupAutoWidth: PropTypes.Requireable<boolean>;
        popupAlign: PropTypes.Requireable<string>;
        popupProps: PropTypes.Requireable<object>;
        popupClassName: PropTypes.Requireable<string>;
        popupStyle: PropTypes.Requireable<object>;
        selectedKeys: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        defaultSelectedKeys: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        selectMode: PropTypes.Requireable<string>;
        shallowSelect: PropTypes.Requireable<boolean>;
        hasSelectedIcon: PropTypes.Requireable<boolean>;
        labelToggleChecked: PropTypes.Requireable<boolean>;
        isSelectIconRight: PropTypes.Requireable<boolean>;
        direction: PropTypes.Requireable<string>;
        hozAlign: PropTypes.Requireable<string>;
        hozInLine: PropTypes.Requireable<boolean>;
        renderMore: PropTypes.Requireable<(...args: any[]) => any>;
        header: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        footer: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        footerWrapperClassName: PropTypes.Requireable<string>;
        autoFocus: PropTypes.Requireable<boolean>;
        focusedKey: PropTypes.Requireable<NonNullable<string | number | object | null | undefined>>;
        focusable: PropTypes.Requireable<boolean>;
        onItemFocus: PropTypes.Requireable<(...args: any[]) => any>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        embeddable: PropTypes.Requireable<boolean>;
        onItemKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        expandAnimation: PropTypes.Requireable<boolean>;
        itemClassName: PropTypes.Requireable<string>;
        icons: PropTypes.Requireable<object>;
        flatenContent: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        defaultOpenKeys: never[];
        defaultOpenAll: boolean;
        onOpen: () => void;
        mode: string;
        triggerType: string;
        openMode: string;
        inlineIndent: number;
        inlineArrowDirection: string;
        popupAutoWidth: boolean;
        popupAlign: string;
        popupProps: {};
        defaultSelectedKeys: never[];
        onSelect: () => void;
        shallowSelect: boolean;
        hasSelectedIcon: boolean;
        isSelectIconRight: boolean;
        labelToggleChecked: boolean;
        direction: string;
        hozAlign: string;
        hozInLine: boolean;
        autoFocus: boolean;
        focusable: boolean;
        embeddable: boolean;
        onItemFocus: () => void;
        onItemKeyDown: () => void;
        onItemClick: () => void;
        expandAnimation: boolean;
        icons: {};
    };
    static displayName: string;
    static getDerivedStateFromProps(
        nextProps: MenuPropsWithDefaults,
        prevState: MenuState
    ): Partial<MenuState>;
    readonly props: MenuPropsWithDefaults;
    popupNodes: HTMLElement[];
    menuNode: HTMLUListElement;
    menuContent: HTMLUListElement | null;
    menuHeader: HTMLLIElement | null;
    menuFooter: HTMLLIElement | null;
    menuItemSizes: number[];
    constructor(props: MenuProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: MenuProps, prevState: MenuState): void;
    componentWillUnmount(): void;
    adjustChildrenWidth(): void;
    onBlur(e: FocusEvent<HTMLUListElement>): void;
    getInitOpenKeys(props: MenuPropsWithDefaults, _k2n: K2N): string[];
    getUpdateChildren: () => {
        newChildren: React.ReactNode[];
        _k2n: K2N;
        _p2n: P2N;
    };
    handleOpen(key: string, open: boolean, triggerType?: string, e?: Event): void;
    getPath(
        key: string,
        _k2n: K2N,
        _p2n: P2N
    ): {
        keyPath: string[];
        labelPath: ({} | null | undefined)[];
    };
    handleSelect(key: string, select: boolean, menuItem: SelectableItem): void;
    handleItemClick(key: string, item: MenuItem, e: MouseEvent | KeyboardEvent): void;
    getAvailableKey(pos: string, prev: boolean): string | null;
    getParentKey(pos: string): string;
    handleItemKeyDown(key: string, type: ItemProps['type'], item: MenuItem, e: KeyboardEvent): void;
    menuContentRef: (ref: HTMLUListElement | null) => void;
    menuHeaderRef: (ref: HTMLLIElement | null) => void;
    menuFooterRef: (ref: HTMLLIElement | null) => void;
    render(): React.JSX.Element;
}
declare const _default: typeof Menu;
export default _default;

import React, { Component, type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import type { TabProps } from './types';
export interface TabState {
    activeKey?: string;
}
/** Tab */
declare class Tab extends Component<TabProps, TabState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        activeKey: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        defaultActiveKey: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        shape: PropTypes.Requireable<string>;
        animation: PropTypes.Requireable<boolean>;
        excessMode: PropTypes.Requireable<string>;
        tabPosition: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        triggerType: PropTypes.Requireable<string>;
        lazyLoad: PropTypes.Requireable<boolean>;
        unmountInactiveTabs: PropTypes.Requireable<boolean>;
        navStyle: PropTypes.Requireable<object>;
        navClassName: PropTypes.Requireable<string>;
        contentStyle: PropTypes.Requireable<object>;
        contentClassName: PropTypes.Requireable<string>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        disableKeyboard: PropTypes.Requireable<boolean>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        tabRender: PropTypes.Requireable<(...args: any[]) => any>;
        popupProps: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        locale: PropTypes.Requireable<object>;
        icons: PropTypes.Requireable<PropTypes.InferProps<{
            prev: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
            next: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
            dropdown: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        }>>;
        showAdd: PropTypes.Requireable<boolean>;
        onAdd: PropTypes.Requireable<(...args: any[]) => any>;
        addIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        prefix: string;
        shape: string;
        size: string;
        animation: boolean;
        tabPosition: string;
        excessMode: string;
        triggerType: string;
        lazyLoad: boolean;
        unmountInactiveTabs: boolean;
        disableKeyboard: boolean;
        onClick: () => void;
        onChange: () => void;
        onClose: () => void;
        locale: Partial<{
            closeAriaLabel: string;
        }> & {
            momentLocale?: string | undefined;
        };
        icons: {};
    };
    constructor(props: TabProps);
    static getDerivedStateFromProps(props: TabProps, state: TabState): {
        activeKey: string;
    } | {
        activeKey?: undefined;
    };
    componentDidUpdate(prevProps: TabProps): void;
    getDefaultActiveKey(props: TabProps): string | undefined;
    getNextActiveKey(isNext: boolean): string | 0 | null;
    isActiveKeyExist(activeKey: string): boolean;
    setActiveKey(key: string): void;
    handleTriggerEvent: (eventType: string, key: string) => void;
    onNavKeyDown: (e: KeyboardEvent<HTMLElement>) => void;
    render(): React.JSX.Element;
}
declare const _default: typeof Tab;
export default _default;

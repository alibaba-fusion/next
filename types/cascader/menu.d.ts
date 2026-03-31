import React, { Component, type LegacyRef, type ReactNodeArray, type ComponentRef } from 'react';
import PropTypes from 'prop-types';
import Menu, { type MenuProps } from '../menu';
import VirtualList from '../virtual-list';
import type { CascaderMenuProps } from './types';
export default class CascaderMenu extends Component<CascaderMenuProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        useVirtual: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    virtualEl: InstanceType<typeof VirtualList> | null;
    menuEl: HTMLDivElement;
    componentDidMount(): void;
    scrollToSelectedItem(): void;
    renderMenu(
        items: ReactNodeArray,
        ref: LegacyRef<ComponentRef<typeof Menu>> | undefined,
        props: MenuProps
    ): React.JSX.Element;
    saveMenuRef: (ref: HTMLDivElement) => void;
    saveVirtualRef: (
        ref: import('../config-provider/types').ConfiguredComponent<
            import('../virtual-list').VirtualListProps &
                import('../config-provider/types').ComponentCommonProps,
            {
                cache: {
                    [key: number]: number;
                };
                cacheAdd: {
                    [key: number]: number;
                };
                cachedScroll: number | null;
                unstable: boolean;
                updateCounter: number;
                updateCounterTimeoutId?: number | undefined;
                el: HTMLElement | null;
                items: React.ReactInstance | null;
                defaultItemHeight: number;
                scrollParent: Window | HTMLElement;
                componentDidMount(): void;
                componentDidUpdate(prevProps: import('../virtual-list').VirtualListProps): void;
                componentWillUnmount(): void;
                maybeSetState(
                    b: import('../virtual-list/types').VirtualListState,
                    cb: () => void
                ): void;
                getEl(): {};
                getScrollParent(): (Window & typeof globalThis) | HTMLElement;
                getScroll(): number;
                setScroll(offset: number): void;
                getViewportSize(): number;
                getScrollSize(): number;
                getStartAndEnd(threshold?: number | undefined): {
                    start: number;
                    end: number;
                };
                updateFrameAndClearCache(cb: () => void): void;
                updateFrame(cb?: (() => void) | undefined): void;
                updateScrollParent(): void;
                updateVariableFrame(cb: () => void): void;
                getSpaceBefore(
                    index: number,
                    cache?: {
                        [key: number]: number;
                    }
                ): number;
                cacheSizes(): void;
                getSizeOf(index: number): number | void;
                scrollTo(index: number): void;
                renderMenuItems(): React.ReactNode;
                render(): React.JSX.Element;
                context: any;
                setState<K extends keyof import('../virtual-list/types').VirtualListState>(
                    state:
                        | import('../virtual-list/types').VirtualListState
                        | ((
                              prevState: Readonly<import('../virtual-list/types').VirtualListState>,
                              props: Readonly<import('../virtual-list').VirtualListProps>
                          ) =>
                              | import('../virtual-list/types').VirtualListState
                              | Pick<import('../virtual-list/types').VirtualListState, K>
                              | null)
                        | Pick<import('../virtual-list/types').VirtualListState, K>
                        | null,
                    callback?: (() => void) | undefined
                ): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import('../virtual-list').VirtualListProps> &
                    Readonly<{
                        children?: React.ReactNode;
                    }>;
                state: Readonly<import('../virtual-list/types').VirtualListState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(
                    nextProps: Readonly<import('../virtual-list').VirtualListProps>,
                    nextState: Readonly<import('../virtual-list/types').VirtualListState>,
                    nextContext: any
                ): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(
                    prevProps: Readonly<import('../virtual-list').VirtualListProps>,
                    prevState: Readonly<import('../virtual-list/types').VirtualListState>
                ): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(
                    nextProps: Readonly<import('../virtual-list').VirtualListProps>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillReceiveProps?(
                    nextProps: Readonly<import('../virtual-list').VirtualListProps>,
                    nextContext: any
                ): void;
                componentWillUpdate?(
                    nextProps: Readonly<import('../virtual-list').VirtualListProps>,
                    nextState: Readonly<import('../virtual-list/types').VirtualListState>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillUpdate?(
                    nextProps: Readonly<import('../virtual-list').VirtualListProps>,
                    nextState: Readonly<import('../virtual-list/types').VirtualListState>,
                    nextContext: any
                ): void;
            }
        >
    ) => void;
    render(): React.JSX.Element;
}

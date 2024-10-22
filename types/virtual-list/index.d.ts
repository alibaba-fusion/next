/// <reference types="react" />
import { type VirtualListProps } from './types';
export type { VirtualListProps };
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    VirtualListProps & import('../config-provider/types').ComponentCommonProps,
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
        items: import('react').ReactInstance | null;
        defaultItemHeight: number;
        scrollParent: Window | HTMLElement;
        componentDidMount(): void;
        componentDidUpdate(prevProps: VirtualListProps): void;
        componentWillUnmount(): void;
        maybeSetState(b: import('./types').VirtualListState, cb: () => void): void;
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
        renderMenuItems(): import('react').ReactNode;
        render(): import('react').JSX.Element;
        context: any;
        setState<K extends keyof import('./types').VirtualListState>(
            state:
                | import('./types').VirtualListState
                | ((
                      prevState: Readonly<import('./types').VirtualListState>,
                      props: Readonly<VirtualListProps>
                  ) =>
                      | import('./types').VirtualListState
                      | Pick<import('./types').VirtualListState, K>
                      | null)
                | Pick<import('./types').VirtualListState, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<VirtualListProps> &
            Readonly<{
                children?: import('react').ReactNode;
            }>;
        state: Readonly<import('./types').VirtualListState>;
        refs: {
            [key: string]: import('react').ReactInstance;
        };
        shouldComponentUpdate?(
            nextProps: Readonly<VirtualListProps>,
            nextState: Readonly<import('./types').VirtualListState>,
            nextContext: any
        ): boolean;
        componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<VirtualListProps>,
            prevState: Readonly<import('./types').VirtualListState>
        ): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<VirtualListProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<VirtualListProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<VirtualListProps>,
            nextState: Readonly<import('./types').VirtualListState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<VirtualListProps>,
            nextState: Readonly<import('./types').VirtualListState>,
            nextContext: any
        ): void;
    },
    {}
>;
export default _default;

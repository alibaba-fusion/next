import PropTypes from 'prop-types';
import React, { Component, type LegacyRef, type ReactInstance } from 'react';
import { type VirtualListProps, type VirtualListState } from './types';
/** VirtualList */
declare class VirtualList extends Component<VirtualListProps, VirtualListState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        minSize: PropTypes.Requireable<number>;
        pageSize: PropTypes.Requireable<number>;
        itemsRenderer: PropTypes.Requireable<(...args: any[]) => any>;
        threshold: PropTypes.Requireable<number>;
        itemSizeGetter: PropTypes.Requireable<(...args: any[]) => any>;
        jumpIndex: PropTypes.Requireable<number>;
        className: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        itemsRenderer: (items: ReactInstance, ref: LegacyRef<HTMLUListElement>) => React.JSX.Element;
        minSize: number;
        pageSize: number;
        jumpIndex: number;
        threshold: number;
    };
    cache: {
        [key: number]: number;
    };
    cacheAdd: {
        [key: number]: number;
    };
    cachedScroll: null | number;
    unstable: boolean;
    updateCounter: number;
    updateCounterTimeoutId?: number;
    el: HTMLElement | null;
    items: ReactInstance | null;
    defaultItemHeight: number;
    scrollParent: HTMLElement | Window;
    constructor(props: VirtualListProps);
    static getDerivedStateFromProps(nextProps: VirtualListProps, prevState: VirtualListState): {
        from: number;
        size: number;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: VirtualListProps): void;
    componentWillUnmount(): void;
    maybeSetState(b: VirtualListState, cb: () => void): void;
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
    updateFrame(cb?: () => void): void;
    updateScrollParent(): void;
    updateVariableFrame(cb: () => void): void;
    getSpaceBefore(index: number, cache?: {
        [key: number]: number;
    }): number;
    cacheSizes(): void;
    getSizeOf(index: number): number | void;
    scrollTo(index: number): void;
    renderMenuItems(): React.ReactNode;
    render(): React.JSX.Element;
}
declare const _default: typeof VirtualList;
export default _default;

/// <reference types="react" />
export type { CascaderProps, CascaderDataItem, CascaderDataItemWithPosInfo, Extra } from './types';
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    import('./types').CascaderProps & import('../config-provider/types').ComponentCommonProps,
    {
        lastExpandedValue: string[];
        cascader: HTMLDivElement;
        cascaderInner: HTMLDivElement;
        indeterminate: string[];
        componentDidMount(): void;
        componentDidUpdate(): void;
        getCascaderNode(ref: HTMLDivElement): void;
        getCascaderInnerNode(ref: HTMLDivElement): void;
        setCascaderInnerWidth(): void;
        flatValue(value: string[]): string[];
        getValue(pos: string): string | null;
        getPos(value: string): string | null;
        getData(value: string[]): import('./types').CascaderDataItemWithPosInfo[];
        processValue(value: string[], v: string, checked: boolean): void;
        handleSelect(v: string, canExpand: boolean): void;
        handleCheck(v: string, checked: boolean): void;
        handleExpand(
            value: string,
            level: number,
            canExpand: boolean,
            focusedFirstChild: boolean
        ): void | Promise<void>;
        handleMouseLeave(): void;
        setExpandValue(expandedValue: string[], isExpandedValueSetByAction?: boolean): void;
        getFirstFocusKeyByDataSource(dataSource: import('./types').CascaderDataItem[]): string;
        getFirstFocusKeyByFilteredPaths(
            filteredPaths: import('./types').CascaderDataItemWithPosInfo[][] | undefined
        ): string;
        getFirstFocusKey(): string;
        setFocusValue(): void;
        handleFocus(focusedValue: string): void;
        handleFold(): void;
        getIndeterminate(value: string[]): string[];
        onBlur(e: import('react').FocusEvent<HTMLElement, Element>): void;
        renderMenu(
            data: import('./types').CascaderDataItem[] | undefined,
            level: number
        ): import('react').JSX.Element;
        renderMenus(): import('react').JSX.Element[];
        renderFilteredItem(
            path: import('./types').CascaderDataItemWithPosInfo[]
        ): import('react').JSX.Element;
        renderFilteredList(): import('react').JSX.Element;
        render(): import('react').JSX.Element;
        context: any;
        setState<K extends keyof import('./types').CascaderState>(
            state:
                | import('./types').CascaderState
                | ((
                      prevState: Readonly<import('./types').CascaderState>,
                      props: Readonly<import('./types').CascaderProps>
                  ) =>
                      | import('./types').CascaderState
                      | Pick<import('./types').CascaderState, K>
                      | null)
                | Pick<import('./types').CascaderState, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import('./types').CascaderProps> &
            Readonly<{
                children?: import('react').ReactNode;
            }>;
        state: Readonly<import('./types').CascaderState>;
        refs: {
            [key: string]: import('react').ReactInstance;
        };
        shouldComponentUpdate?(
            nextProps: Readonly<import('./types').CascaderProps>,
            nextState: Readonly<import('./types').CascaderState>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<import('./types').CascaderProps>,
            prevState: Readonly<import('./types').CascaderState>
        ): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(
            nextProps: Readonly<import('./types').CascaderProps>,
            nextContext: any
        ): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<import('./types').CascaderProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<import('./types').CascaderProps>,
            nextState: Readonly<import('./types').CascaderState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<import('./types').CascaderProps>,
            nextState: Readonly<import('./types').CascaderState>,
            nextContext: any
        ): void;
    },
    Pick<
        {
            lastExpandedValue: string[];
            cascader: HTMLDivElement;
            cascaderInner: HTMLDivElement;
            indeterminate: string[];
            componentDidMount(): void;
            componentDidUpdate(): void;
            getCascaderNode(ref: HTMLDivElement): void;
            getCascaderInnerNode(ref: HTMLDivElement): void;
            setCascaderInnerWidth(): void;
            flatValue(value: string[]): string[];
            getValue(pos: string): string | null;
            getPos(value: string): string | null;
            getData(value: string[]): import('./types').CascaderDataItemWithPosInfo[];
            processValue(value: string[], v: string, checked: boolean): void;
            handleSelect(v: string, canExpand: boolean): void;
            handleCheck(v: string, checked: boolean): void;
            handleExpand(
                value: string,
                level: number,
                canExpand: boolean,
                focusedFirstChild: boolean
            ): void | Promise<void>;
            handleMouseLeave(): void;
            setExpandValue(expandedValue: string[], isExpandedValueSetByAction?: boolean): void;
            getFirstFocusKeyByDataSource(dataSource: import('./types').CascaderDataItem[]): string;
            getFirstFocusKeyByFilteredPaths(
                filteredPaths: import('./types').CascaderDataItemWithPosInfo[][] | undefined
            ): string;
            getFirstFocusKey(): string;
            setFocusValue(): void;
            handleFocus(focusedValue: string): void;
            handleFold(): void;
            getIndeterminate(value: string[]): string[];
            onBlur(e: import('react').FocusEvent<HTMLElement, Element>): void;
            renderMenu(
                data: import('./types').CascaderDataItem[] | undefined,
                level: number
            ): import('react').JSX.Element;
            renderMenus(): import('react').JSX.Element[];
            renderFilteredItem(
                path: import('./types').CascaderDataItemWithPosInfo[]
            ): import('react').JSX.Element;
            renderFilteredList(): import('react').JSX.Element;
            render(): import('react').JSX.Element;
            context: any;
            setState<K extends keyof import('./types').CascaderState>(
                state:
                    | import('./types').CascaderState
                    | ((
                          prevState: Readonly<import('./types').CascaderState>,
                          props: Readonly<import('./types').CascaderProps>
                      ) =>
                          | import('./types').CascaderState
                          | Pick<import('./types').CascaderState, K>
                          | null)
                    | Pick<import('./types').CascaderState, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('./types').CascaderProps> &
                Readonly<{
                    children?: import('react').ReactNode;
                }>;
            state: Readonly<import('./types').CascaderState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').CascaderProps>,
                nextState: Readonly<import('./types').CascaderState>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').CascaderProps>,
                prevState: Readonly<import('./types').CascaderState>
            ): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').CascaderProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').CascaderProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').CascaderProps>,
                nextState: Readonly<import('./types').CascaderState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').CascaderProps>,
                nextState: Readonly<import('./types').CascaderState>,
                nextContext: any
            ): void;
        },
        'setFocusValue'
    >
>;
export default _default;

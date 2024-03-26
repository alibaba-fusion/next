/// <reference types="react" />
export type { SearchProps } from './types';
declare const _default: import("../config-provider/types").ConfiguredComponentClass<import("./types").SearchProps & import("../config-provider/types").ComponentCommonProps, {
    highlightKey: unknown;
    inputRef: import("../select").AutoComplete | null;
    onChange: (value: any, actionType: string, item: any) => void;
    onPressEnter: () => void;
    onSearch: () => void;
    onFilterChange: (filterValue: string) => void;
    onToggleHighlightItem: (highlightKey: unknown, ...args: unknown[]) => void;
    onKeyDown: (e: import("react").KeyboardEvent<Element>) => void;
    saveInputRef: (ref: import("../select").AutoComplete) => void;
    focus: (e: import("react").FocusEvent<HTMLInputElement, Element>) => void;
    handleFocus(args_0: import("react").FocusEvent<HTMLInputElement, Element>): void;
    handleBlur(args_0: import("react").FocusEvent<HTMLInputElement, Element>): void;
    render(): import("react").JSX.Element;
    context: any;
    setState<K extends keyof import("./Search").SearchState>(state: import("./Search").SearchState | ((prevState: Readonly<import("./Search").SearchState>, props: Readonly<import("./types").SearchProps>) => import("./Search").SearchState | Pick<import("./Search").SearchState, K> | null) | Pick<import("./Search").SearchState, K> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<import("./types").SearchProps> & Readonly<{
        children?: import("react").ReactNode;
    }>;
    state: Readonly<import("./Search").SearchState>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<import("./types").SearchProps>, nextState: Readonly<import("./Search").SearchState>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").SearchProps>, prevState: Readonly<import("./Search").SearchState>): any;
    componentDidUpdate?(prevProps: Readonly<import("./types").SearchProps>, prevState: Readonly<import("./Search").SearchState>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<import("./types").SearchProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").SearchProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<import("./types").SearchProps>, nextState: Readonly<import("./Search").SearchState>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").SearchProps>, nextState: Readonly<import("./Search").SearchState>, nextContext: any): void;
}, {}>;
export default _default;

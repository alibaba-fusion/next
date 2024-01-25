/// <reference types="react" />
export type { SearchProps } from './types';
declare const _default: {
    new (
        props: import('./types').SearchProps &
            import('../config-provider/types').ComponentCommonProps,
        context?: unknown
    ): import('../config-provider/types').ConfiguredComponent<
        import('./types').SearchProps & import('../config-provider/types').ComponentCommonProps,
        {
            highlightKey: unknown;
            inputRef: import('../select').AutoComplete | null;
            onChange: (value: any, actionType: string, item: any) => void;
            onPressEnter: () => void;
            onSearch: () => void;
            onFilterChange: (filterValue: string) => void;
            onToggleHighlightItem: (highlightKey: unknown, ...args: unknown[]) => void;
            onKeyDown: (e: import('react').KeyboardEvent<Element>) => void;
            saveInputRef: (ref: import('../select').AutoComplete) => void;
            focus: (e: import('react').FocusEvent<HTMLInputElement, Element>) => void;
            handleFocus(args_0: import('react').FocusEvent<HTMLInputElement, Element>): void;
            handleBlur(args_0: import('react').FocusEvent<HTMLInputElement, Element>): void;
            render(): import('react').JSX.Element;
            context: any;
            setState<K extends keyof import('./Search').SearchState>(
                state:
                    | import('./Search').SearchState
                    | ((
                          prevState: Readonly<import('./Search').SearchState>,
                          props: Readonly<import('./types').SearchProps>
                      ) =>
                          | import('./Search').SearchState
                          | Pick<import('./Search').SearchState, K>
                          | null)
                    | Pick<import('./Search').SearchState, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('./types').SearchProps> &
                Readonly<{
                    children?: import('react').ReactNode;
                }>;
            state: Readonly<import('./Search').SearchState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').SearchProps>,
                nextState: Readonly<import('./Search').SearchState>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').SearchProps>,
                prevState: Readonly<import('./Search').SearchState>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('./types').SearchProps>,
                prevState: Readonly<import('./Search').SearchState>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').SearchProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').SearchProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').SearchProps>,
                nextState: Readonly<import('./Search').SearchState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').SearchProps>,
                nextState: Readonly<import('./Search').SearchState>,
                nextContext: any
            ): void;
        }
    >;
    contextType?: import('react').Context<any> | undefined;
} & {
    propTypes: {
        prefix: import('prop-types').Requireable<string>;
        shape: import('prop-types').Requireable<string>;
        type: import('prop-types').Requireable<string>;
        size: import('prop-types').Requireable<string>;
        defaultValue: import('prop-types').Requireable<string>;
        value: import('prop-types').Requireable<NonNullable<string | number | null | undefined>>;
        onChange: import('prop-types').Requireable<(...args: any[]) => any>;
        onSearch: import('prop-types').Requireable<(...args: any[]) => any>;
        defaultFilterValue: import('prop-types').Requireable<string>;
        fillProps: import('prop-types').Requireable<string>;
        filter: import('prop-types').Requireable<any[]>;
        filterValue: import('prop-types').Requireable<string>;
        onFilterChange: import('prop-types').Requireable<(...args: any[]) => any>;
        dataSource: import('prop-types').Requireable<any[]>;
        placeholder: import('prop-types').Requireable<string>;
        searchText: import('prop-types').Requireable<import('prop-types').ReactNodeLike>;
        style: import('prop-types').Requireable<object>;
        className: import('prop-types').Requireable<string>;
        filterProps: import('prop-types').Requireable<object>;
        buttonProps: import('prop-types').Requireable<object>;
        popupContent: import('prop-types').Requireable<import('prop-types').ReactNodeLike>;
        followTrigger: import('prop-types').Requireable<boolean>;
        visible: import('prop-types').Requireable<boolean>;
        hasClear: import('prop-types').Requireable<boolean>;
        hasIcon: import('prop-types').Requireable<boolean>;
        disabled: import('prop-types').Requireable<boolean>;
        locale: import('prop-types').Requireable<object>;
        rtl: import('prop-types').Requireable<boolean>;
        icons: import('prop-types').Requireable<object>;
        autoHighlightFirstItem: import('prop-types').Requireable<boolean>;
        onToggleHighlightItem: import('prop-types').Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        prefix: string;
        shape: string;
        type: string;
        size: string;
        hasIcon: boolean;
        filter: never[];
        locale: {
            buttonText: string;
        };
        buttonProps: {};
        onChange: () => void;
        onSearch: () => void;
        onFilterChange: () => void;
        onToggleHighlightItem: () => void;
        hasClear: boolean;
        disabled: boolean;
        icons: {};
        autoHighlightFirstItem: boolean;
    };
};
export default _default;

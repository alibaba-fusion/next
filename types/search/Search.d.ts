import React from 'react';
import PropTypes from 'prop-types';
import { type SearchProps } from './types';
import { type AutoCompleteProps } from '../select';
declare const AutoComplete: import('../config-provider/types').ConfiguredComponentClass<
    AutoCompleteProps & import('../config-provider/types').ComponentCommonProps,
    {
        isInputing: boolean;
        componentDidUpdate(prevProps: AutoCompleteProps): void;
        shouldControlPopup(
            props:
                | (Readonly<AutoCompleteProps> &
                      Readonly<{
                          children?: React.ReactNode;
                      }>)
                | undefined,
            type: import('../select').VisibleChangeType
        ): void;
        handleMenuSelect(keys: string[]): void;
        handleItemClick(): void;
        handleSelectEvent(
            key: string,
            item: import('../select').ObjectItem,
            triggerType: import('../select').VisibleChangeType
        ): void;
        handleChange: (
            value: string,
            proxy: import('../select').VisibleChangeType | React.ChangeEvent<HTMLElement>,
            item?: import('../select').ObjectItem | undefined
        ) => false | undefined;
        handleVisibleChange(visible: boolean, type: import('../select').VisibleChangeType): void;
        beforeClose(): void;
        handleTriggerKeyDown(e: React.KeyboardEvent<HTMLElement>): void;
        chooseHighlightItem(): false | undefined;
        hasClear(): boolean | '' | undefined;
        renderSelect(
            props?: Readonly<AutoCompleteProps> &
                Readonly<{
                    children?: React.ReactNode;
                }>
        ): React.JSX.Element;
        render(): React.JSX.Element;
        dataStore: import('../select/data-store').default;
        selectDOM: HTMLElement;
        width: string | number;
        popupRef: HTMLDivElement;
        resizeTimeout: number;
        highlightTimer: number | undefined;
        menuRef:
            | import('../config-provider/types').ConfiguredComponent<
                  import('../menu').MenuProps &
                      import('../config-provider/types').ComponentCommonProps,
                  import('../menu/view/menu').Menu
              >
            | null;
        isAutoComplete: boolean;
        inputRef: import('../input/input').default<import('../input').InputProps>;
        valueDataSource: {
            value?:
                | string
                | number
                | boolean
                | (string | number | boolean | null | undefined)[]
                | null
                | undefined;
            valueDS?: import('../select').ObjectItem | import('../select').ObjectItem[] | undefined;
            mapValueDS?: Record<string, import('../select').ObjectItem> | undefined;
        };
        componentDidMount(): void;
        componentWillUnmount(): void;
        syncWidth(): void;
        handleResize(): void;
        setDataSource(props: AutoCompleteProps): import('../select/types').NormalizedObjectItem[];
        setVisible(
            visible: boolean,
            type?: import('../select').VisibleChangeType | undefined
        ): void;
        setFirstHightLightKeyForMenu(searchValue?: unknown): void;
        handleMenuBodyClick(): void;
        toggleHighlightItem(
            dir: number
        ): false | import('../select/types').NormalizedObjectItem | undefined;
        scrollMenuIntoView(): void;
        renderMenuHeader(): React.ReactNode;
        handleSelect(): void;
        handleMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        useDetailValue(): boolean;
        renderMenu(): React.JSX.Element;
        renderMenuItem(
            dataSource: import('../select/types').NormalizedObjectItem[]
        ): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
        saveSelectRef: (ref: HTMLElement | null) => void;
        saveInputRef: (
            ref: import('../config-provider/types').ConfiguredComponent<
                import('../input').InputProps &
                    import('../config-provider/types').ComponentCommonProps,
                import('../input/input').default<import('../input').InputProps>
            > &
                Pick<
                    import('../input/input').default<import('../input').InputProps>,
                    'focus' | 'getInputNode'
                >
        ) => void;
        focusInput(): void;
        focus(start?: number | undefined, end?: number | undefined, preventScroll?: boolean): void;
        beforeOpen(): void;
        afterClose(): void;
        savePopupRef: (ref: HTMLDivElement) => void;
        shouldAutoWidth(): boolean | undefined;
        context: any;
        setState<K extends keyof import('../select/auto-complete').AutoCompleteState>(
            state:
                | import('../select/auto-complete').AutoCompleteState
                | ((
                      prevState: Readonly<import('../select/auto-complete').AutoCompleteState>,
                      props: Readonly<AutoCompleteProps>
                  ) =>
                      | import('../select/auto-complete').AutoCompleteState
                      | Pick<import('../select/auto-complete').AutoCompleteState, K>
                      | null)
                | Pick<import('../select/auto-complete').AutoCompleteState, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<AutoCompleteProps> &
            Readonly<{
                children?: React.ReactNode;
            }>;
        state: Readonly<import('../select/auto-complete').AutoCompleteState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(
            nextProps: Readonly<AutoCompleteProps>,
            nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
            nextContext: any
        ): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<AutoCompleteProps>,
            prevState: Readonly<import('../select/auto-complete').AutoCompleteState>
        ): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<AutoCompleteProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<AutoCompleteProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<AutoCompleteProps>,
            nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<AutoCompleteProps>,
            nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
            nextContext: any
        ): void;
    },
    {}
>;
export interface SearchState {
    value: string | number;
    filterValue: string | undefined;
    ifFocus: boolean;
}
/**
 * Search
 *  输入框部分继承 Select.AutoComplete 的能力，可以直接用 AutoComplete 的 api
 */
declare class Search extends React.Component<SearchProps, SearchState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        shape: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        defaultValue: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onSearch: PropTypes.Requireable<(...args: any[]) => any>;
        defaultFilterValue: PropTypes.Requireable<string>;
        fillProps: PropTypes.Requireable<string>;
        filter: PropTypes.Requireable<any[]>;
        filterValue: PropTypes.Requireable<string>;
        onFilterChange: PropTypes.Requireable<(...args: any[]) => any>;
        dataSource: PropTypes.Requireable<any[]>;
        placeholder: PropTypes.Requireable<string>;
        searchText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        style: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        filterProps: PropTypes.Requireable<object>;
        buttonProps: PropTypes.Requireable<object>;
        popupContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        followTrigger: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        hasClear: PropTypes.Requireable<boolean>;
        hasIcon: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        rtl: PropTypes.Requireable<boolean>;
        icons: PropTypes.Requireable<object>;
        autoHighlightFirstItem: PropTypes.Requireable<boolean>;
        onToggleHighlightItem: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        prefix: string;
        shape: string;
        type: string;
        size: string;
        hasIcon: boolean;
        filter: never[];
        locale: Partial<{
            buttonText: string;
        }> & {
            momentLocale?: string | undefined;
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
    static displayName: string;
    static getDerivedStateFromProps(
        nextProps: SearchProps,
        prevState: SearchState
    ): Partial<SearchState> | null;
    highlightKey: unknown;
    inputRef: ReturnType<InstanceType<typeof AutoComplete>['getInstance']> | null;
    constructor(props: SearchProps);
    onChange: NonNullable<AutoCompleteProps['onChange']>;
    onPressEnter: () => void;
    onSearch: () => void;
    onFilterChange: (filterValue: string) => void;
    onToggleHighlightItem: NonNullable<AutoCompleteProps['onToggleHighlightItem']>;
    onKeyDown: (e: React.KeyboardEvent) => void;
    saveInputRef: (
        ref: import('../config-provider/types').ConfiguredComponent<
            AutoCompleteProps & import('../config-provider/types').ComponentCommonProps,
            {
                isInputing: boolean;
                componentDidUpdate(prevProps: AutoCompleteProps): void;
                shouldControlPopup(
                    props:
                        | (Readonly<AutoCompleteProps> &
                              Readonly<{
                                  children?: React.ReactNode;
                              }>)
                        | undefined,
                    type: import('../select').VisibleChangeType
                ): void;
                handleMenuSelect(keys: string[]): void;
                handleItemClick(): void;
                handleSelectEvent(
                    key: string,
                    item: import('../select').ObjectItem,
                    triggerType: import('../select').VisibleChangeType
                ): void;
                handleChange: (
                    value: string,
                    proxy: import('../select').VisibleChangeType | React.ChangeEvent<HTMLElement>,
                    item?: import('../select').ObjectItem | undefined
                ) => false | undefined;
                handleVisibleChange(
                    visible: boolean,
                    type: import('../select').VisibleChangeType
                ): void;
                beforeClose(): void;
                handleTriggerKeyDown(e: React.KeyboardEvent<HTMLElement>): void;
                chooseHighlightItem(): false | undefined;
                hasClear(): boolean | '' | undefined;
                renderSelect(
                    props?: Readonly<AutoCompleteProps> &
                        Readonly<{
                            children?: React.ReactNode;
                        }>
                ): React.JSX.Element;
                render(): React.JSX.Element;
                dataStore: import('../select/data-store').default;
                selectDOM: HTMLElement;
                width: string | number;
                popupRef: HTMLDivElement;
                resizeTimeout: number;
                highlightTimer: number | undefined;
                menuRef:
                    | import('../config-provider/types').ConfiguredComponent<
                          import('../menu').MenuProps &
                              import('../config-provider/types').ComponentCommonProps,
                          import('../menu/view/menu').Menu
                      >
                    | null;
                isAutoComplete: boolean;
                inputRef: import('../input/input').default<import('../input').InputProps>;
                valueDataSource: {
                    value?:
                        | string
                        | number
                        | boolean
                        | (string | number | boolean | null | undefined)[]
                        | null
                        | undefined;
                    valueDS?:
                        | import('../select').ObjectItem
                        | import('../select').ObjectItem[]
                        | undefined;
                    mapValueDS?: Record<string, import('../select').ObjectItem> | undefined;
                };
                componentDidMount(): void;
                componentWillUnmount(): void;
                syncWidth(): void;
                handleResize(): void;
                setDataSource(
                    props: AutoCompleteProps
                ): import('../select/types').NormalizedObjectItem[];
                setVisible(
                    visible: boolean,
                    type?: import('../select').VisibleChangeType | undefined
                ): void;
                setFirstHightLightKeyForMenu(searchValue?: unknown): void;
                handleMenuBodyClick(): void;
                toggleHighlightItem(
                    dir: number
                ): false | import('../select/types').NormalizedObjectItem | undefined;
                scrollMenuIntoView(): void;
                renderMenuHeader(): React.ReactNode;
                handleSelect(): void;
                handleMouseDown: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
                useDetailValue(): boolean;
                renderMenu(): React.JSX.Element;
                renderMenuItem(
                    dataSource: import('../select/types').NormalizedObjectItem[]
                ): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
                saveSelectRef: (ref: HTMLElement | null) => void;
                saveInputRef: (
                    ref: import('../config-provider/types').ConfiguredComponent<
                        import('../input').InputProps &
                            import('../config-provider/types').ComponentCommonProps,
                        import('../input/input').default<import('../input').InputProps>
                    > &
                        Pick<
                            import('../input/input').default<import('../input').InputProps>,
                            'focus' | 'getInputNode'
                        >
                ) => void;
                focusInput(): void;
                focus(
                    start?: number | undefined,
                    end?: number | undefined,
                    preventScroll?: boolean
                ): void;
                beforeOpen(): void;
                afterClose(): void;
                savePopupRef: (ref: HTMLDivElement) => void;
                shouldAutoWidth(): boolean | undefined;
                context: any;
                setState<K extends keyof import('../select/auto-complete').AutoCompleteState>(
                    state:
                        | import('../select/auto-complete').AutoCompleteState
                        | ((
                              prevState: Readonly<
                                  import('../select/auto-complete').AutoCompleteState
                              >,
                              props: Readonly<AutoCompleteProps>
                          ) =>
                              | import('../select/auto-complete').AutoCompleteState
                              | Pick<import('../select/auto-complete').AutoCompleteState, K>
                              | null)
                        | Pick<import('../select/auto-complete').AutoCompleteState, K>
                        | null,
                    callback?: (() => void) | undefined
                ): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<AutoCompleteProps> &
                    Readonly<{
                        children?: React.ReactNode;
                    }>;
                state: Readonly<import('../select/auto-complete').AutoCompleteState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(
                    nextProps: Readonly<AutoCompleteProps>,
                    nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
                    nextContext: any
                ): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(
                    prevProps: Readonly<AutoCompleteProps>,
                    prevState: Readonly<import('../select/auto-complete').AutoCompleteState>
                ): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(
                    nextProps: Readonly<AutoCompleteProps>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillReceiveProps?(
                    nextProps: Readonly<AutoCompleteProps>,
                    nextContext: any
                ): void;
                componentWillUpdate?(
                    nextProps: Readonly<AutoCompleteProps>,
                    nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillUpdate?(
                    nextProps: Readonly<AutoCompleteProps>,
                    nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
                    nextContext: any
                ): void;
            }
        >
    ) => void;
    focus: (start?: number, end?: number, preventScroll?: boolean) => void;
    handleFocus(...args: [React.FocusEvent<HTMLInputElement>]): void;
    handleBlur(...args: [React.FocusEvent<HTMLInputElement>]): void;
    render(): React.JSX.Element;
}
declare const _default: typeof Search;
export default _default;

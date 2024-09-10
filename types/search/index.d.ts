/// <reference types="react" />
export type { SearchProps } from './types';
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    import('./types').SearchProps & import('../config-provider/types').ComponentCommonProps,
    {
        highlightKey: unknown;
        inputRef: {
            isInputing: boolean;
            componentDidUpdate(prevProps: import('../select').AutoCompleteProps): void;
            shouldControlPopup(
                props:
                    | (Readonly<import('../select').AutoCompleteProps> &
                          Readonly<{
                              children?: import('react').ReactNode;
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
                proxy:
                    | import('../select').VisibleChangeType
                    | import('react').ChangeEvent<HTMLElement>,
                item?: import('../select').ObjectItem | undefined
            ) => false | undefined;
            handleVisibleChange(
                visible: boolean,
                type: import('../select').VisibleChangeType
            ): void;
            beforeClose(): void;
            handleTriggerKeyDown(e: import('react').KeyboardEvent<HTMLElement>): void;
            chooseHighlightItem(): false | undefined;
            hasClear(): boolean | '' | undefined;
            renderSelect(
                props?: Readonly<import('../select').AutoCompleteProps> &
                    Readonly<{
                        children?: import('react').ReactNode;
                    }>
            ): import('react').JSX.Element;
            render(): import('react').JSX.Element;
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
                props: import('../select').AutoCompleteProps
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
            renderMenuHeader(): import('react').ReactNode;
            handleSelect(): void;
            handleMouseDown: (e: import('react').MouseEvent<HTMLElement, MouseEvent>) => void;
            useDetailValue(): boolean;
            renderMenu(): import('react').JSX.Element;
            renderMenuItem(
                dataSource: import('../select/types').NormalizedObjectItem[]
            ): import('react').ReactElement<
                any,
                string | import('react').JSXElementConstructor<any>
            >[];
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
                          prevState: Readonly<import('../select/auto-complete').AutoCompleteState>,
                          props: Readonly<import('../select').AutoCompleteProps>
                      ) =>
                          | import('../select/auto-complete').AutoCompleteState
                          | Pick<import('../select/auto-complete').AutoCompleteState, K>
                          | null)
                    | Pick<import('../select/auto-complete').AutoCompleteState, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('../select').AutoCompleteProps> &
                Readonly<{
                    children?: import('react').ReactNode;
                }>;
            state: Readonly<import('../select/auto-complete').AutoCompleteState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            shouldComponentUpdate?(
                nextProps: Readonly<import('../select').AutoCompleteProps>,
                nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
                nextContext: any
            ): boolean;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('../select').AutoCompleteProps>,
                prevState: Readonly<import('../select/auto-complete').AutoCompleteState>
            ): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('../select').AutoCompleteProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('../select').AutoCompleteProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('../select').AutoCompleteProps>,
                nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('../select').AutoCompleteProps>,
                nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
                nextContext: any
            ): void;
        } | null;
        onChange: (
            value: string,
            actionType: string,
            item?: import('../select').ObjectItem | undefined
        ) => void;
        onPressEnter: () => void;
        onSearch: () => void;
        onFilterChange: (filterValue: string) => void;
        onToggleHighlightItem: (
            highlightKey?:
                | string
                | boolean
                | import('../select/types').NormalizedObjectItem
                | null
                | undefined,
            type?: import('../select/types').HighlightChangeType | undefined
        ) => void;
        onKeyDown: (e: import('react').KeyboardEvent<Element>) => void;
        saveInputRef: (
            ref: import('../config-provider/types').ConfiguredComponent<
                import('../select').AutoCompleteProps &
                    import('../config-provider/types').ComponentCommonProps,
                {
                    isInputing: boolean;
                    componentDidUpdate(prevProps: import('../select').AutoCompleteProps): void;
                    shouldControlPopup(
                        props:
                            | (Readonly<import('../select').AutoCompleteProps> &
                                  Readonly<{
                                      children?: import('react').ReactNode;
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
                        proxy:
                            | import('../select').VisibleChangeType
                            | import('react').ChangeEvent<HTMLElement>,
                        item?: import('../select').ObjectItem | undefined
                    ) => false | undefined;
                    handleVisibleChange(
                        visible: boolean,
                        type: import('../select').VisibleChangeType
                    ): void;
                    beforeClose(): void;
                    handleTriggerKeyDown(e: import('react').KeyboardEvent<HTMLElement>): void;
                    chooseHighlightItem(): false | undefined;
                    hasClear(): boolean | '' | undefined;
                    renderSelect(
                        props?: Readonly<import('../select').AutoCompleteProps> &
                            Readonly<{
                                children?: import('react').ReactNode;
                            }>
                    ): import('react').JSX.Element;
                    render(): import('react').JSX.Element;
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
                        props: import('../select').AutoCompleteProps
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
                    renderMenuHeader(): import('react').ReactNode;
                    handleSelect(): void;
                    handleMouseDown: (
                        e: import('react').MouseEvent<HTMLElement, MouseEvent>
                    ) => void;
                    useDetailValue(): boolean;
                    renderMenu(): import('react').JSX.Element;
                    renderMenuItem(
                        dataSource: import('../select/types').NormalizedObjectItem[]
                    ): import('react').ReactElement<
                        any,
                        string | import('react').JSXElementConstructor<any>
                    >[];
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
                                  props: Readonly<import('../select').AutoCompleteProps>
                              ) =>
                                  | import('../select/auto-complete').AutoCompleteState
                                  | Pick<import('../select/auto-complete').AutoCompleteState, K>
                                  | null)
                            | Pick<import('../select/auto-complete').AutoCompleteState, K>
                            | null,
                        callback?: (() => void) | undefined
                    ): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import('../select').AutoCompleteProps> &
                        Readonly<{
                            children?: import('react').ReactNode;
                        }>;
                    state: Readonly<import('../select/auto-complete').AutoCompleteState>;
                    refs: {
                        [key: string]: import('react').ReactInstance;
                    };
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('../select').AutoCompleteProps>,
                        nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
                        nextContext: any
                    ): boolean;
                    componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
                    getSnapshotBeforeUpdate?(
                        prevProps: Readonly<import('../select').AutoCompleteProps>,
                        prevState: Readonly<import('../select/auto-complete').AutoCompleteState>
                    ): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(
                        nextProps: Readonly<import('../select').AutoCompleteProps>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillReceiveProps?(
                        nextProps: Readonly<import('../select').AutoCompleteProps>,
                        nextContext: any
                    ): void;
                    componentWillUpdate?(
                        nextProps: Readonly<import('../select').AutoCompleteProps>,
                        nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillUpdate?(
                        nextProps: Readonly<import('../select').AutoCompleteProps>,
                        nextState: Readonly<import('../select/auto-complete').AutoCompleteState>,
                        nextContext: any
                    ): void;
                }
            >
        ) => void;
        focus: (
            start?: number | undefined,
            end?: number | undefined,
            preventScroll?: boolean
        ) => void;
        handleFocus(args_0: import('react').FocusEvent<HTMLInputElement, Element>): void;
        handleBlur(args_0: import('react').FocusEvent<HTMLInputElement, Element>): void;
        render(): import('react').JSX.Element;
        context: any;
        setState<K_1 extends keyof import('./Search').SearchState>(
            state:
                | import('./Search').SearchState
                | ((
                      prevState: Readonly<import('./Search').SearchState>,
                      props: Readonly<import('./types').SearchProps>
                  ) =>
                      | import('./Search').SearchState
                      | Pick<import('./Search').SearchState, K_1>
                      | null)
                | Pick<import('./Search').SearchState, K_1>
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
    },
    {}
>;
export default _default;

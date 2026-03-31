/// <reference types="react" />
export type { TreeSelectProps } from './types';
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    import('./types').TreeSelectProps & import('../config-provider/types').ComponentCommonProps,
    {
        tree: import('../config-provider/types').ConfiguredComponent<
            import('../tree').TreeProps<
                import('../tree/types').FieldDataNode<
                    {
                        key: string;
                        label?: import('react').ReactNode;
                    },
                    'children'
                >
            > &
                import('../config-provider/types').ComponentCommonProps,
            import('../tree/view/tree').Tree
        > &
            Pick<import('../tree/view/tree').Tree, 'setFocusKey'>;
        select: import('../config-provider/types').ConfiguredComponent<
            import('../select').SelectProps &
                import('../config-provider/types').ComponentCommonProps,
            {
                selectAllYet: boolean;
                componentDidUpdate(
                    prevProps: import('../select').SelectProps,
                    prevState: import('../select/base').BaseState
                ): void;
                componentDidMount(): void;
                ie9Hack(): void;
                useDetailValue(): boolean;
                hasSearch(): boolean;
                getTagSize(): 'small' | 'medium' | 'large' | undefined;
                handleMenuSelect(
                    keys: string[],
                    item: {
                        props: {
                            _key: string;
                        };
                    }
                ): false | void;
                handleItemClick(key: string): void;
                handleSingleSelect(
                    key: string,
                    triggerType: import('../select').VisibleChangeType
                ): void;
                handleMultipleSelect(
                    keys: import('../select').DataSourceItem[] | undefined,
                    triggerType: import('../select').VisibleChangeType,
                    key?: string | null | undefined,
                    keepSearchValue?: boolean | undefined
                ): void;
                updateSelectAllYet(value?: unknown): void;
                handleSearchValue(value: string): void;
                handleSearch(value: string, e: import('react').ChangeEvent<HTMLInputElement>): void;
                handleSearchClear(triggerType?: string | undefined): void;
                handleSearchKeyDown(e: import('react').KeyboardEvent<HTMLElement>): void;
                chooseMultipleItem(key: string): void;
                chooseHighlightItem(
                    proxy: unknown,
                    e: import('react').UIEvent<HTMLElement, UIEvent>
                ): false | undefined;
                handleTagClose(item: import('../select').ObjectItem): boolean;
                handleDeleteTag(
                    e: import('react').UIEvent<HTMLElement, UIEvent>
                ): false | undefined;
                handleSelectAll(e: import('react').UIEvent<HTMLElement, UIEvent>): void;
                handleVisibleChange(
                    visible: boolean,
                    type: import('../select').VisibleChangeType
                ): void;
                afterClose(): void;
                maxTagPlaceholder(
                    selectedValues: import('../select').ObjectItem[],
                    totalValues: import('../select').ObjectItem[]
                ): string;
                renderValues(): import('react').ReactNode;
                handleWrapClick: (e: import('react').MouseEvent<HTMLElement, MouseEvent>) => void;
                handleArrowClick: (e: import('react').UIEvent<HTMLElement, UIEvent>) => void;
                handleClear: (e: import('react').UIEvent<HTMLElement, UIEvent>) => void;
                hasClear(): boolean | undefined;
                renderExtraNode(): import('react').ReactElement<
                    any,
                    string | import('react').JSXElementConstructor<any>
                >[];
                renderSelect(): import('react').JSX.Element;
                renderSearchInput(
                    valueNodes: import('react').ReactNode,
                    placeholder: string | undefined,
                    inputEl: import('react').ReactElement<
                        any,
                        string | import('react').JSXElementConstructor<any>
                    >
                ): import('react').JSX.Element;
                renderMenuHeader(): import('react').ReactNode;
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
                componentWillUnmount(): void;
                syncWidth(): void;
                handleResize(): void;
                setDataSource(
                    props: import('../select').SelectProps
                ): import('../select/types').NormalizedObjectItem[];
                setVisible(
                    visible: boolean,
                    type?: import('../select').VisibleChangeType | undefined
                ): void;
                setFirstHightLightKeyForMenu(searchValue?: unknown): void;
                handleChange(
                    value:
                        | import('../select').DataSourceItem
                        | import('../select').DataSourceItem[],
                    args_0: unknown,
                    args_1?:
                        | import('../select').ObjectItem
                        | import('../select').ObjectItem[]
                        | undefined
                ): void;
                handleMenuBodyClick(): void;
                toggleHighlightItem(
                    dir: number
                ): false | import('../select/types').NormalizedObjectItem | undefined;
                scrollMenuIntoView(): void;
                handleSelect(): void;
                handleMouseDown: (e: import('react').MouseEvent<HTMLElement, MouseEvent>) => void;
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
                beforeClose(): void;
                savePopupRef: (ref: HTMLDivElement) => void;
                shouldAutoWidth(): boolean | undefined;
                context: any;
                setState<K extends keyof import('../select/select').SelectState>(
                    state:
                        | import('../select/select').SelectState
                        | ((
                              prevState: Readonly<import('../select/select').SelectState>,
                              props: Readonly<import('../select').SelectProps>
                          ) =>
                              | import('../select/select').SelectState
                              | Pick<import('../select/select').SelectState, K>
                              | null)
                        | Pick<import('../select/select').SelectState, K>
                        | null,
                    callback?: (() => void) | undefined
                ): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import('../select').SelectProps> &
                    Readonly<{
                        children?: import('react').ReactNode;
                    }>;
                state: Readonly<import('../select/select').SelectState>;
                refs: {
                    [key: string]: import('react').ReactInstance;
                };
                shouldComponentUpdate?(
                    nextProps: Readonly<import('../select').SelectProps>,
                    nextState: Readonly<import('../select/select').SelectState>,
                    nextContext: any
                ): boolean;
                componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
                getSnapshotBeforeUpdate?(
                    prevProps: Readonly<import('../select').SelectProps>,
                    prevState: Readonly<import('../select/select').SelectState>
                ): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(
                    nextProps: Readonly<import('../select').SelectProps>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillReceiveProps?(
                    nextProps: Readonly<import('../select').SelectProps>,
                    nextContext: any
                ): void;
                componentWillUpdate?(
                    nextProps: Readonly<import('../select').SelectProps>,
                    nextState: Readonly<import('../select/select').SelectState>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillUpdate?(
                    nextProps: Readonly<import('../select').SelectProps>,
                    nextState: Readonly<import('../select/select').SelectState>,
                    nextContext: any
                ): void;
            }
        > &
            Pick<
                {
                    selectAllYet: boolean;
                    componentDidUpdate(
                        prevProps: import('../select').SelectProps,
                        prevState: import('../select/base').BaseState
                    ): void;
                    componentDidMount(): void;
                    ie9Hack(): void;
                    useDetailValue(): boolean;
                    hasSearch(): boolean;
                    getTagSize(): 'small' | 'medium' | 'large' | undefined;
                    handleMenuSelect(
                        keys: string[],
                        item: {
                            props: {
                                _key: string;
                            };
                        }
                    ): false | void;
                    handleItemClick(key: string): void;
                    handleSingleSelect(
                        key: string,
                        triggerType: import('../select').VisibleChangeType
                    ): void;
                    handleMultipleSelect(
                        keys: import('../select').DataSourceItem[] | undefined,
                        triggerType: import('../select').VisibleChangeType,
                        key?: string | null | undefined,
                        keepSearchValue?: boolean | undefined
                    ): void;
                    updateSelectAllYet(value?: unknown): void;
                    handleSearchValue(value: string): void;
                    handleSearch(
                        value: string,
                        e: import('react').ChangeEvent<HTMLInputElement>
                    ): void;
                    handleSearchClear(triggerType?: string | undefined): void;
                    handleSearchKeyDown(e: import('react').KeyboardEvent<HTMLElement>): void;
                    chooseMultipleItem(key: string): void;
                    chooseHighlightItem(
                        proxy: unknown,
                        e: import('react').UIEvent<HTMLElement, UIEvent>
                    ): false | undefined;
                    handleTagClose(item: import('../select').ObjectItem): boolean;
                    handleDeleteTag(
                        e: import('react').UIEvent<HTMLElement, UIEvent>
                    ): false | undefined;
                    handleSelectAll(e: import('react').UIEvent<HTMLElement, UIEvent>): void;
                    handleVisibleChange(
                        visible: boolean,
                        type: import('../select').VisibleChangeType
                    ): void;
                    afterClose(): void;
                    maxTagPlaceholder(
                        selectedValues: import('../select').ObjectItem[],
                        totalValues: import('../select').ObjectItem[]
                    ): string;
                    renderValues(): import('react').ReactNode;
                    handleWrapClick: (
                        e: import('react').MouseEvent<HTMLElement, MouseEvent>
                    ) => void;
                    handleArrowClick: (e: import('react').UIEvent<HTMLElement, UIEvent>) => void;
                    handleClear: (e: import('react').UIEvent<HTMLElement, UIEvent>) => void;
                    hasClear(): boolean | undefined;
                    renderExtraNode(): import('react').ReactElement<
                        any,
                        string | import('react').JSXElementConstructor<any>
                    >[];
                    renderSelect(): import('react').JSX.Element;
                    renderSearchInput(
                        valueNodes: import('react').ReactNode,
                        placeholder: string | undefined,
                        inputEl: import('react').ReactElement<
                            any,
                            string | import('react').JSXElementConstructor<any>
                        >
                    ): import('react').JSX.Element;
                    renderMenuHeader(): import('react').ReactNode;
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
                    componentWillUnmount(): void;
                    syncWidth(): void;
                    handleResize(): void;
                    setDataSource(
                        props: import('../select').SelectProps
                    ): import('../select/types').NormalizedObjectItem[];
                    setVisible(
                        visible: boolean,
                        type?: import('../select').VisibleChangeType | undefined
                    ): void;
                    setFirstHightLightKeyForMenu(searchValue?: unknown): void;
                    handleChange(
                        value:
                            | import('../select').DataSourceItem
                            | import('../select').DataSourceItem[],
                        args_0: unknown,
                        args_1?:
                            | import('../select').ObjectItem
                            | import('../select').ObjectItem[]
                            | undefined
                    ): void;
                    handleMenuBodyClick(): void;
                    toggleHighlightItem(
                        dir: number
                    ): false | import('../select/types').NormalizedObjectItem | undefined;
                    scrollMenuIntoView(): void;
                    handleSelect(): void;
                    handleMouseDown: (
                        e: import('react').MouseEvent<HTMLElement, MouseEvent>
                    ) => void;
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
                    beforeClose(): void;
                    savePopupRef: (ref: HTMLDivElement) => void;
                    shouldAutoWidth(): boolean | undefined;
                    context: any;
                    setState<K extends keyof import('../select/select').SelectState>(
                        state:
                            | import('../select/select').SelectState
                            | ((
                                  prevState: Readonly<import('../select/select').SelectState>,
                                  props: Readonly<import('../select').SelectProps>
                              ) =>
                                  | import('../select/select').SelectState
                                  | Pick<import('../select/select').SelectState, K>
                                  | null)
                            | Pick<import('../select/select').SelectState, K>
                            | null,
                        callback?: (() => void) | undefined
                    ): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import('../select').SelectProps> &
                        Readonly<{
                            children?: import('react').ReactNode;
                        }>;
                    state: Readonly<import('../select/select').SelectState>;
                    refs: {
                        [key: string]: import('react').ReactInstance;
                    };
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('../select').SelectProps>,
                        nextState: Readonly<import('../select/select').SelectState>,
                        nextContext: any
                    ): boolean;
                    componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
                    getSnapshotBeforeUpdate?(
                        prevProps: Readonly<import('../select').SelectProps>,
                        prevState: Readonly<import('../select/select').SelectState>
                    ): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(
                        nextProps: Readonly<import('../select').SelectProps>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillReceiveProps?(
                        nextProps: Readonly<import('../select').SelectProps>,
                        nextContext: any
                    ): void;
                    componentWillUpdate?(
                        nextProps: Readonly<import('../select').SelectProps>,
                        nextState: Readonly<import('../select/select').SelectState>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillUpdate?(
                        nextProps: Readonly<import('../select').SelectProps>,
                        nextState: Readonly<import('../select/select').SelectState>,
                        nextContext: any
                    ): void;
                },
                'focusInput' | 'handleSearchClear'
            >;
        getKeysByValue(value: (string | number | boolean | null | undefined)[]): string[];
        getValueByKeys(keys: string[]): (string | number | boolean | null | undefined)[];
        getFullItemPath(item: import('./types').DataNode): import('./types').DataNode[];
        getValueForSelect(value: (string | number | boolean | null | undefined)[]): any[];
        getData(
            value: (string | number | boolean | null | undefined)[],
            forSelect?: boolean | undefined
        ): import('../select').ObjectItem[];
        getNonExistentValues(): (string | number | boolean | null | undefined)[];
        getNonExistentValueKeys(): any[];
        saveTreeRef(
            ref: import('../config-provider/types').ConfiguredComponent<
                import('../tree').TreeProps<
                    import('../tree/types').FieldDataNode<
                        {
                            key: string;
                            label?: import('react').ReactNode;
                        },
                        'children'
                    >
                > &
                    import('../config-provider/types').ComponentCommonProps,
                import('../tree/view/tree').Tree
            > &
                Pick<import('../tree/view/tree').Tree, 'setFocusKey'>
        ): void;
        saveSelectRef(
            ref: import('../config-provider/types').ConfiguredComponent<
                import('../select').SelectProps &
                    import('../config-provider/types').ComponentCommonProps,
                {
                    selectAllYet: boolean;
                    componentDidUpdate(
                        prevProps: import('../select').SelectProps,
                        prevState: import('../select/base').BaseState
                    ): void;
                    componentDidMount(): void;
                    ie9Hack(): void;
                    useDetailValue(): boolean;
                    hasSearch(): boolean;
                    getTagSize(): 'small' | 'medium' | 'large' | undefined;
                    handleMenuSelect(
                        keys: string[],
                        item: {
                            props: {
                                _key: string;
                            };
                        }
                    ): false | void;
                    handleItemClick(key: string): void;
                    handleSingleSelect(
                        key: string,
                        triggerType: import('../select').VisibleChangeType
                    ): void;
                    handleMultipleSelect(
                        keys: import('../select').DataSourceItem[] | undefined,
                        triggerType: import('../select').VisibleChangeType,
                        key?: string | null | undefined,
                        keepSearchValue?: boolean | undefined
                    ): void;
                    updateSelectAllYet(value?: unknown): void;
                    handleSearchValue(value: string): void;
                    handleSearch(
                        value: string,
                        e: import('react').ChangeEvent<HTMLInputElement>
                    ): void;
                    handleSearchClear(triggerType?: string | undefined): void;
                    handleSearchKeyDown(e: import('react').KeyboardEvent<HTMLElement>): void;
                    chooseMultipleItem(key: string): void;
                    chooseHighlightItem(
                        proxy: unknown,
                        e: import('react').UIEvent<HTMLElement, UIEvent>
                    ): false | undefined;
                    handleTagClose(item: import('../select').ObjectItem): boolean;
                    handleDeleteTag(
                        e: import('react').UIEvent<HTMLElement, UIEvent>
                    ): false | undefined;
                    handleSelectAll(e: import('react').UIEvent<HTMLElement, UIEvent>): void;
                    handleVisibleChange(
                        visible: boolean,
                        type: import('../select').VisibleChangeType
                    ): void;
                    afterClose(): void;
                    maxTagPlaceholder(
                        selectedValues: import('../select').ObjectItem[],
                        totalValues: import('../select').ObjectItem[]
                    ): string;
                    renderValues(): import('react').ReactNode;
                    handleWrapClick: (
                        e: import('react').MouseEvent<HTMLElement, MouseEvent>
                    ) => void;
                    handleArrowClick: (e: import('react').UIEvent<HTMLElement, UIEvent>) => void;
                    handleClear: (e: import('react').UIEvent<HTMLElement, UIEvent>) => void;
                    hasClear(): boolean | undefined;
                    renderExtraNode(): import('react').ReactElement<
                        any,
                        string | import('react').JSXElementConstructor<any>
                    >[];
                    renderSelect(): import('react').JSX.Element;
                    renderSearchInput(
                        valueNodes: import('react').ReactNode,
                        placeholder: string | undefined,
                        inputEl: import('react').ReactElement<
                            any,
                            string | import('react').JSXElementConstructor<any>
                        >
                    ): import('react').JSX.Element;
                    renderMenuHeader(): import('react').ReactNode;
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
                    componentWillUnmount(): void;
                    syncWidth(): void;
                    handleResize(): void;
                    setDataSource(
                        props: import('../select').SelectProps
                    ): import('../select/types').NormalizedObjectItem[];
                    setVisible(
                        visible: boolean,
                        type?: import('../select').VisibleChangeType | undefined
                    ): void;
                    setFirstHightLightKeyForMenu(searchValue?: unknown): void;
                    handleChange(
                        value:
                            | import('../select').DataSourceItem
                            | import('../select').DataSourceItem[],
                        args_0: unknown,
                        args_1?:
                            | import('../select').ObjectItem
                            | import('../select').ObjectItem[]
                            | undefined
                    ): void;
                    handleMenuBodyClick(): void;
                    toggleHighlightItem(
                        dir: number
                    ): false | import('../select/types').NormalizedObjectItem | undefined;
                    scrollMenuIntoView(): void;
                    handleSelect(): void;
                    handleMouseDown: (
                        e: import('react').MouseEvent<HTMLElement, MouseEvent>
                    ) => void;
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
                    beforeClose(): void;
                    savePopupRef: (ref: HTMLDivElement) => void;
                    shouldAutoWidth(): boolean | undefined;
                    context: any;
                    setState<K extends keyof import('../select/select').SelectState>(
                        state:
                            | import('../select/select').SelectState
                            | ((
                                  prevState: Readonly<import('../select/select').SelectState>,
                                  props: Readonly<import('../select').SelectProps>
                              ) =>
                                  | import('../select/select').SelectState
                                  | Pick<import('../select/select').SelectState, K>
                                  | null)
                            | Pick<import('../select/select').SelectState, K>
                            | null,
                        callback?: (() => void) | undefined
                    ): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import('../select').SelectProps> &
                        Readonly<{
                            children?: import('react').ReactNode;
                        }>;
                    state: Readonly<import('../select/select').SelectState>;
                    refs: {
                        [key: string]: import('react').ReactInstance;
                    };
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('../select').SelectProps>,
                        nextState: Readonly<import('../select/select').SelectState>,
                        nextContext: any
                    ): boolean;
                    componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
                    getSnapshotBeforeUpdate?(
                        prevProps: Readonly<import('../select').SelectProps>,
                        prevState: Readonly<import('../select/select').SelectState>
                    ): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(
                        nextProps: Readonly<import('../select').SelectProps>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillReceiveProps?(
                        nextProps: Readonly<import('../select').SelectProps>,
                        nextContext: any
                    ): void;
                    componentWillUpdate?(
                        nextProps: Readonly<import('../select').SelectProps>,
                        nextState: Readonly<import('../select/select').SelectState>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillUpdate?(
                        nextProps: Readonly<import('../select').SelectProps>,
                        nextState: Readonly<import('../select/select').SelectState>,
                        nextContext: any
                    ): void;
                }
            > &
                Pick<
                    {
                        selectAllYet: boolean;
                        componentDidUpdate(
                            prevProps: import('../select').SelectProps,
                            prevState: import('../select/base').BaseState
                        ): void;
                        componentDidMount(): void;
                        ie9Hack(): void;
                        useDetailValue(): boolean;
                        hasSearch(): boolean;
                        getTagSize(): 'small' | 'medium' | 'large' | undefined;
                        handleMenuSelect(
                            keys: string[],
                            item: {
                                props: {
                                    _key: string;
                                };
                            }
                        ): false | void;
                        handleItemClick(key: string): void;
                        handleSingleSelect(
                            key: string,
                            triggerType: import('../select').VisibleChangeType
                        ): void;
                        handleMultipleSelect(
                            keys: import('../select').DataSourceItem[] | undefined,
                            triggerType: import('../select').VisibleChangeType,
                            key?: string | null | undefined,
                            keepSearchValue?: boolean | undefined
                        ): void;
                        updateSelectAllYet(value?: unknown): void;
                        handleSearchValue(value: string): void;
                        handleSearch(
                            value: string,
                            e: import('react').ChangeEvent<HTMLInputElement>
                        ): void;
                        handleSearchClear(triggerType?: string | undefined): void;
                        handleSearchKeyDown(e: import('react').KeyboardEvent<HTMLElement>): void;
                        chooseMultipleItem(key: string): void;
                        chooseHighlightItem(
                            proxy: unknown,
                            e: import('react').UIEvent<HTMLElement, UIEvent>
                        ): false | undefined;
                        handleTagClose(item: import('../select').ObjectItem): boolean;
                        handleDeleteTag(
                            e: import('react').UIEvent<HTMLElement, UIEvent>
                        ): false | undefined;
                        handleSelectAll(e: import('react').UIEvent<HTMLElement, UIEvent>): void;
                        handleVisibleChange(
                            visible: boolean,
                            type: import('../select').VisibleChangeType
                        ): void;
                        afterClose(): void;
                        maxTagPlaceholder(
                            selectedValues: import('../select').ObjectItem[],
                            totalValues: import('../select').ObjectItem[]
                        ): string;
                        renderValues(): import('react').ReactNode;
                        handleWrapClick: (
                            e: import('react').MouseEvent<HTMLElement, MouseEvent>
                        ) => void;
                        handleArrowClick: (
                            e: import('react').UIEvent<HTMLElement, UIEvent>
                        ) => void;
                        handleClear: (e: import('react').UIEvent<HTMLElement, UIEvent>) => void;
                        hasClear(): boolean | undefined;
                        renderExtraNode(): import('react').ReactElement<
                            any,
                            string | import('react').JSXElementConstructor<any>
                        >[];
                        renderSelect(): import('react').JSX.Element;
                        renderSearchInput(
                            valueNodes: import('react').ReactNode,
                            placeholder: string | undefined,
                            inputEl: import('react').ReactElement<
                                any,
                                string | import('react').JSXElementConstructor<any>
                            >
                        ): import('react').JSX.Element;
                        renderMenuHeader(): import('react').ReactNode;
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
                        componentWillUnmount(): void;
                        syncWidth(): void;
                        handleResize(): void;
                        setDataSource(
                            props: import('../select').SelectProps
                        ): import('../select/types').NormalizedObjectItem[];
                        setVisible(
                            visible: boolean,
                            type?: import('../select').VisibleChangeType | undefined
                        ): void;
                        setFirstHightLightKeyForMenu(searchValue?: unknown): void;
                        handleChange(
                            value:
                                | import('../select').DataSourceItem
                                | import('../select').DataSourceItem[],
                            args_0: unknown,
                            args_1?:
                                | import('../select').ObjectItem
                                | import('../select').ObjectItem[]
                                | undefined
                        ): void;
                        handleMenuBodyClick(): void;
                        toggleHighlightItem(
                            dir: number
                        ): false | import('../select/types').NormalizedObjectItem | undefined;
                        scrollMenuIntoView(): void;
                        handleSelect(): void;
                        handleMouseDown: (
                            e: import('react').MouseEvent<HTMLElement, MouseEvent>
                        ) => void;
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
                        beforeClose(): void;
                        savePopupRef: (ref: HTMLDivElement) => void;
                        shouldAutoWidth(): boolean | undefined;
                        context: any;
                        setState<K extends keyof import('../select/select').SelectState>(
                            state:
                                | import('../select/select').SelectState
                                | ((
                                      prevState: Readonly<import('../select/select').SelectState>,
                                      props: Readonly<import('../select').SelectProps>
                                  ) =>
                                      | import('../select/select').SelectState
                                      | Pick<import('../select/select').SelectState, K>
                                      | null)
                                | Pick<import('../select/select').SelectState, K>
                                | null,
                            callback?: (() => void) | undefined
                        ): void;
                        forceUpdate(callback?: (() => void) | undefined): void;
                        readonly props: Readonly<import('../select').SelectProps> &
                            Readonly<{
                                children?: import('react').ReactNode;
                            }>;
                        state: Readonly<import('../select/select').SelectState>;
                        refs: {
                            [key: string]: import('react').ReactInstance;
                        };
                        shouldComponentUpdate?(
                            nextProps: Readonly<import('../select').SelectProps>,
                            nextState: Readonly<import('../select/select').SelectState>,
                            nextContext: any
                        ): boolean;
                        componentDidCatch?(
                            error: Error,
                            errorInfo: import('react').ErrorInfo
                        ): void;
                        getSnapshotBeforeUpdate?(
                            prevProps: Readonly<import('../select').SelectProps>,
                            prevState: Readonly<import('../select/select').SelectState>
                        ): any;
                        componentWillMount?(): void;
                        UNSAFE_componentWillMount?(): void;
                        componentWillReceiveProps?(
                            nextProps: Readonly<import('../select').SelectProps>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillReceiveProps?(
                            nextProps: Readonly<import('../select').SelectProps>,
                            nextContext: any
                        ): void;
                        componentWillUpdate?(
                            nextProps: Readonly<import('../select').SelectProps>,
                            nextState: Readonly<import('../select/select').SelectState>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillUpdate?(
                            nextProps: Readonly<import('../select').SelectProps>,
                            nextState: Readonly<import('../select/select').SelectState>,
                            nextContext: any
                        ): void;
                    },
                    'focusInput' | 'handleSearchClear'
                >
        ): void;
        handleVisibleChange(visible: boolean, type?: string | undefined): void;
        triggerOnChange(
            value:
                | string
                | number
                | boolean
                | import('../select').DataSourceItem[]
                | import('../select').ObjectItem[]
                | null
                | undefined,
            data: import('../select').ObjectItem | import('../select').ObjectItem[] | null
        ): void;
        handleSelect(
            selectedKeys: string[],
            extra: {
                selected: boolean;
            }
        ): void;
        handleCheck(checkedKeys: string[]): void;
        handleRemove(removedItem: import('../select').ObjectItem): void;
        handleSearch(searchedValue: string): void;
        handleSearchClear(triggerType: string): void;
        handleExpand(expandedKeys: string[]): void;
        handleKeyDown(e: import('react').KeyboardEvent<HTMLElement>): void;
        handleChange(
            value: import('../select').DataSourceItem | import('../select').DataSourceItem[],
            triggerType: string
        ): void;
        searchNodes(children: import('react').ReactNode): import('../tree/types').NodeElement[];
        createNodesByData(
            data: import('./types').TreeSelectDataItem[] | undefined,
            searching?: boolean | undefined
        ): import('../tree/types').NodeElement[];
        renderPopupContent(): import('react').JSX.Element;
        renderPreview(
            data: import('../select').ObjectItem | import('../select').ObjectItem[],
            others: Omit<
                Readonly<import('./types').TreeSelectProps> &
                    Readonly<{
                        children?: import('react').ReactNode;
                    }>,
                | 'label'
                | 'visible'
                | 'size'
                | 'multiple'
                | 'disabled'
                | 'placeholder'
                | 'notFoundContent'
                | 'maxTagPlaceholder'
                | 'popupContainer'
                | 'prefix'
                | 'locale'
                | 'pure'
                | 'children'
                | 'className'
                | 'defaultValue'
                | 'onChange'
                | 'defaultVisible'
                | 'onVisibleChange'
                | 'followTrigger'
                | 'popupStyle'
                | 'popupClassName'
                | 'popupProps'
                | 'value'
                | 'autoWidth'
                | 'readOnly'
                | 'dataSource'
                | 'isPreview'
                | 'renderPreview'
                | 'hasBorder'
                | 'hasClear'
                | 'filterLocal'
                | 'useVirtual'
                | 'hasArrow'
                | 'showSearch'
                | 'onSearch'
                | 'onSearchClear'
                | 'useDetailValue'
                | 'valueRender'
                | 'tagInline'
                | 'immutable'
                | 'treeCheckable'
                | 'clickToCheck'
                | 'preserveNonExistentValue'
                | 'autoClearSearch'
                | 'treeCheckStrictly'
                | 'treeCheckedStrategy'
                | 'treeDefaultExpandAll'
                | 'treeDefaultExpandedKeys'
                | 'treeLoadData'
                | 'treeProps'
            >
        ): import('react').JSX.Element;
        renderMaxTagPlaceholder(
            value: import('../select').ObjectItem[],
            totalValue: import('../select').ObjectItem[]
        ): import('react').ReactNode;
        render(): import('react').JSX.Element;
        context: any;
        setState<K_1 extends keyof import('./types').TreeSelectState>(
            state:
                | import('./types').TreeSelectState
                | ((
                      prevState: Readonly<import('./types').TreeSelectState>,
                      props: Readonly<import('./types').TreeSelectProps>
                  ) =>
                      | import('./types').TreeSelectState
                      | Pick<import('./types').TreeSelectState, K_1>
                      | null)
                | Pick<import('./types').TreeSelectState, K_1>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import('./types').TreeSelectProps> &
            Readonly<{
                children?: import('react').ReactNode;
            }>;
        state: Readonly<import('./types').TreeSelectState>;
        refs: {
            [key: string]: import('react').ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<import('./types').TreeSelectProps>,
            nextState: Readonly<import('./types').TreeSelectState>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<import('./types').TreeSelectProps>,
            prevState: Readonly<import('./types').TreeSelectState>
        ): any;
        componentDidUpdate?(
            prevProps: Readonly<import('./types').TreeSelectProps>,
            prevState: Readonly<import('./types').TreeSelectState>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(
            nextProps: Readonly<import('./types').TreeSelectProps>,
            nextContext: any
        ): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<import('./types').TreeSelectProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<import('./types').TreeSelectProps>,
            nextState: Readonly<import('./types').TreeSelectState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<import('./types').TreeSelectProps>,
            nextState: Readonly<import('./types').TreeSelectState>,
            nextContext: any
        ): void;
    },
    {}
> & {
    Node: typeof import('../tree/view/tree-node').TreeNode;
};
export default _default;

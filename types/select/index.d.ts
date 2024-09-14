/// <reference types="react" />
import Option from './option';
import OptionGroup from './option-group';
import type { SelectProps } from './types';
export type {
    SelectProps,
    OptionProps,
    OptionGroupProps,
    AutoCompleteProps,
    DataSourceItem,
    ObjectItem,
    VisibleChangeType,
} from './types';
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    SelectProps & import('../config-provider/types').ComponentCommonProps,
    {
        selectAllYet: boolean;
        componentDidUpdate(prevProps: SelectProps, prevState: import('./base').BaseState): void;
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
        handleSingleSelect(key: string, triggerType: import('./types').VisibleChangeType): void;
        handleMultipleSelect(
            keys: import('./types').DataSourceItem[] | undefined,
            triggerType: import('./types').VisibleChangeType,
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
        handleTagClose(item: import('./types').ObjectItem): boolean;
        handleDeleteTag(e: import('react').UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleSelectAll(e: import('react').UIEvent<HTMLElement, UIEvent>): void;
        handleVisibleChange(visible: boolean, type: import('./types').VisibleChangeType): void;
        afterClose(): void;
        maxTagPlaceholder(
            selectedValues: import('./types').ObjectItem[],
            totalValues: import('./types').ObjectItem[]
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
        dataStore: import('./data-store').default;
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
            valueDS?: import('./types').ObjectItem | import('./types').ObjectItem[] | undefined;
            mapValueDS?: Record<string, import('./types').ObjectItem> | undefined;
        };
        componentWillUnmount(): void;
        syncWidth(): void;
        handleResize(): void;
        setDataSource(props: SelectProps): import('./types').NormalizedObjectItem[];
        setVisible(visible: boolean, type?: import('./types').VisibleChangeType | undefined): void;
        setFirstHightLightKeyForMenu(searchValue?: unknown): void;
        handleChange(
            value: import('./types').DataSourceItem | import('./types').DataSourceItem[],
            args_0: unknown,
            args_1?: import('./types').ObjectItem | import('./types').ObjectItem[] | undefined
        ): void;
        handleMenuBodyClick(): void;
        toggleHighlightItem(
            dir: number
        ): false | import('./types').NormalizedObjectItem | undefined;
        scrollMenuIntoView(): void;
        handleSelect(): void;
        handleMouseDown: (e: import('react').MouseEvent<HTMLElement, MouseEvent>) => void;
        renderMenu(): import('react').JSX.Element;
        renderMenuItem(
            dataSource: import('./types').NormalizedObjectItem[]
        ): import('react').ReactElement<any, string | import('react').JSXElementConstructor<any>>[];
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
        beforeClose(): void;
        savePopupRef: (ref: HTMLDivElement) => void;
        shouldAutoWidth(): boolean | undefined;
        context: any;
        setState<K extends keyof import('./select').SelectState>(
            state:
                | import('./select').SelectState
                | ((
                      prevState: Readonly<import('./select').SelectState>,
                      props: Readonly<SelectProps>
                  ) =>
                      | import('./select').SelectState
                      | Pick<import('./select').SelectState, K>
                      | null)
                | Pick<import('./select').SelectState, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<SelectProps> &
            Readonly<{
                children?: import('react').ReactNode;
            }>;
        state: Readonly<import('./select').SelectState>;
        refs: {
            [key: string]: import('react').ReactInstance;
        };
        shouldComponentUpdate?(
            nextProps: Readonly<SelectProps>,
            nextState: Readonly<import('./select').SelectState>,
            nextContext: any
        ): boolean;
        componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<SelectProps>,
            prevState: Readonly<import('./select').SelectState>
        ): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<SelectProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<SelectProps>, nextContext: any): void;
        componentWillUpdate?(
            nextProps: Readonly<SelectProps>,
            nextState: Readonly<import('./select').SelectState>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<SelectProps>,
            nextState: Readonly<import('./select').SelectState>,
            nextContext: any
        ): void;
    },
    Pick<
        {
            selectAllYet: boolean;
            componentDidUpdate(prevProps: SelectProps, prevState: import('./base').BaseState): void;
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
            handleSingleSelect(key: string, triggerType: import('./types').VisibleChangeType): void;
            handleMultipleSelect(
                keys: import('./types').DataSourceItem[] | undefined,
                triggerType: import('./types').VisibleChangeType,
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
            handleTagClose(item: import('./types').ObjectItem): boolean;
            handleDeleteTag(e: import('react').UIEvent<HTMLElement, UIEvent>): false | undefined;
            handleSelectAll(e: import('react').UIEvent<HTMLElement, UIEvent>): void;
            handleVisibleChange(visible: boolean, type: import('./types').VisibleChangeType): void;
            afterClose(): void;
            maxTagPlaceholder(
                selectedValues: import('./types').ObjectItem[],
                totalValues: import('./types').ObjectItem[]
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
            dataStore: import('./data-store').default;
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
                valueDS?: import('./types').ObjectItem | import('./types').ObjectItem[] | undefined;
                mapValueDS?: Record<string, import('./types').ObjectItem> | undefined;
            };
            componentWillUnmount(): void;
            syncWidth(): void;
            handleResize(): void;
            setDataSource(props: SelectProps): import('./types').NormalizedObjectItem[];
            setVisible(
                visible: boolean,
                type?: import('./types').VisibleChangeType | undefined
            ): void;
            setFirstHightLightKeyForMenu(searchValue?: unknown): void;
            handleChange(
                value: import('./types').DataSourceItem | import('./types').DataSourceItem[],
                args_0: unknown,
                args_1?: import('./types').ObjectItem | import('./types').ObjectItem[] | undefined
            ): void;
            handleMenuBodyClick(): void;
            toggleHighlightItem(
                dir: number
            ): false | import('./types').NormalizedObjectItem | undefined;
            scrollMenuIntoView(): void;
            handleSelect(): void;
            handleMouseDown: (e: import('react').MouseEvent<HTMLElement, MouseEvent>) => void;
            renderMenu(): import('react').JSX.Element;
            renderMenuItem(
                dataSource: import('./types').NormalizedObjectItem[]
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
            setState<K extends keyof import('./select').SelectState>(
                state:
                    | import('./select').SelectState
                    | ((
                          prevState: Readonly<import('./select').SelectState>,
                          props: Readonly<SelectProps>
                      ) =>
                          | import('./select').SelectState
                          | Pick<import('./select').SelectState, K>
                          | null)
                    | Pick<import('./select').SelectState, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<SelectProps> &
                Readonly<{
                    children?: import('react').ReactNode;
                }>;
            state: Readonly<import('./select').SelectState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            shouldComponentUpdate?(
                nextProps: Readonly<SelectProps>,
                nextState: Readonly<import('./select').SelectState>,
                nextContext: any
            ): boolean;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<SelectProps>,
                prevState: Readonly<import('./select').SelectState>
            ): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<SelectProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<SelectProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<SelectProps>,
                nextState: Readonly<import('./select').SelectState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<SelectProps>,
                nextState: Readonly<import('./select').SelectState>,
                nextContext: any
            ): void;
        },
        'focusInput' | 'handleSearchClear'
    >
> & {
    Option: typeof Option;
    OptionGroup: typeof OptionGroup;
    AutoComplete: import('../config-provider/types').ConfiguredComponentClass<
        import('./types').AutoCompleteProps &
            import('../config-provider/types').ComponentCommonProps,
        {
            isInputing: boolean;
            componentDidUpdate(prevProps: import('./types').AutoCompleteProps): void;
            shouldControlPopup(
                props:
                    | (Readonly<import('./types').AutoCompleteProps> &
                          Readonly<{
                              children?: import('react').ReactNode;
                          }>)
                    | undefined,
                type: import('./types').VisibleChangeType
            ): void;
            handleMenuSelect(keys: string[]): void;
            handleItemClick(): void;
            handleSelectEvent(
                key: string,
                item: import('./types').ObjectItem,
                triggerType: import('./types').VisibleChangeType
            ): void;
            handleChange: (
                value: string,
                proxy:
                    | import('./types').VisibleChangeType
                    | import('react').ChangeEvent<HTMLElement>,
                item?: import('./types').ObjectItem | undefined
            ) => false | undefined;
            handleVisibleChange(visible: boolean, type: import('./types').VisibleChangeType): void;
            beforeClose(): void;
            handleTriggerKeyDown(e: import('react').KeyboardEvent<HTMLElement>): void;
            chooseHighlightItem(): false | undefined;
            hasClear(): boolean | '' | undefined;
            renderSelect(
                props?: Readonly<import('./types').AutoCompleteProps> &
                    Readonly<{
                        children?: import('react').ReactNode;
                    }>
            ): import('react').JSX.Element;
            render(): import('react').JSX.Element;
            dataStore: import('./data-store').default;
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
                valueDS?: import('./types').ObjectItem | import('./types').ObjectItem[] | undefined;
                mapValueDS?: Record<string, import('./types').ObjectItem> | undefined;
            };
            componentDidMount(): void;
            componentWillUnmount(): void;
            syncWidth(): void;
            handleResize(): void;
            setDataSource(
                props: import('./types').AutoCompleteProps
            ): import('./types').NormalizedObjectItem[];
            setVisible(
                visible: boolean,
                type?: import('./types').VisibleChangeType | undefined
            ): void;
            setFirstHightLightKeyForMenu(searchValue?: unknown): void;
            handleMenuBodyClick(): void;
            toggleHighlightItem(
                dir: number
            ): false | import('./types').NormalizedObjectItem | undefined;
            scrollMenuIntoView(): void;
            renderMenuHeader(): import('react').ReactNode;
            handleSelect(): void;
            handleMouseDown: (e: import('react').MouseEvent<HTMLElement, MouseEvent>) => void;
            useDetailValue(): boolean;
            renderMenu(): import('react').JSX.Element;
            renderMenuItem(
                dataSource: import('./types').NormalizedObjectItem[]
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
            setState<K_1 extends keyof import('./auto-complete').AutoCompleteState>(
                state:
                    | import('./auto-complete').AutoCompleteState
                    | ((
                          prevState: Readonly<import('./auto-complete').AutoCompleteState>,
                          props: Readonly<import('./types').AutoCompleteProps>
                      ) =>
                          | import('./auto-complete').AutoCompleteState
                          | Pick<import('./auto-complete').AutoCompleteState, K_1>
                          | null)
                    | Pick<import('./auto-complete').AutoCompleteState, K_1>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('./types').AutoCompleteProps> &
                Readonly<{
                    children?: import('react').ReactNode;
                }>;
            state: Readonly<import('./auto-complete').AutoCompleteState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            shouldComponentUpdate?(
                nextProps: Readonly<import('./types').AutoCompleteProps>,
                nextState: Readonly<import('./auto-complete').AutoCompleteState>,
                nextContext: any
            ): boolean;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('./types').AutoCompleteProps>,
                prevState: Readonly<import('./auto-complete').AutoCompleteState>
            ): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('./types').AutoCompleteProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('./types').AutoCompleteProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('./types').AutoCompleteProps>,
                nextState: Readonly<import('./auto-complete').AutoCompleteState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('./types').AutoCompleteProps>,
                nextState: Readonly<import('./auto-complete').AutoCompleteState>,
                nextContext: any
            ): void;
        },
        {}
    >;
    Combobox: import('../config-provider/types').ConfiguredComponentClass<
        SelectProps & import('../config-provider/types').ComponentCommonProps,
        {
            selectAllYet: boolean;
            componentDidUpdate(prevProps: SelectProps, prevState: import('./base').BaseState): void;
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
            handleSingleSelect(key: string, triggerType: import('./types').VisibleChangeType): void;
            handleMultipleSelect(
                keys: import('./types').DataSourceItem[] | undefined,
                triggerType: import('./types').VisibleChangeType,
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
            handleTagClose(item: import('./types').ObjectItem): boolean;
            handleDeleteTag(e: import('react').UIEvent<HTMLElement, UIEvent>): false | undefined;
            handleSelectAll(e: import('react').UIEvent<HTMLElement, UIEvent>): void;
            handleVisibleChange(visible: boolean, type: import('./types').VisibleChangeType): void;
            afterClose(): void;
            maxTagPlaceholder(
                selectedValues: import('./types').ObjectItem[],
                totalValues: import('./types').ObjectItem[]
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
            dataStore: import('./data-store').default;
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
                valueDS?: import('./types').ObjectItem | import('./types').ObjectItem[] | undefined;
                mapValueDS?: Record<string, import('./types').ObjectItem> | undefined;
            };
            componentWillUnmount(): void;
            syncWidth(): void;
            handleResize(): void;
            setDataSource(props: SelectProps): import('./types').NormalizedObjectItem[];
            setVisible(
                visible: boolean,
                type?: import('./types').VisibleChangeType | undefined
            ): void;
            setFirstHightLightKeyForMenu(searchValue?: unknown): void;
            handleChange(
                value: import('./types').DataSourceItem | import('./types').DataSourceItem[],
                args_0: unknown,
                args_1?: import('./types').ObjectItem | import('./types').ObjectItem[] | undefined
            ): void;
            handleMenuBodyClick(): void;
            toggleHighlightItem(
                dir: number
            ): false | import('./types').NormalizedObjectItem | undefined;
            scrollMenuIntoView(): void;
            handleSelect(): void;
            handleMouseDown: (e: import('react').MouseEvent<HTMLElement, MouseEvent>) => void;
            renderMenu(): import('react').JSX.Element;
            renderMenuItem(
                dataSource: import('./types').NormalizedObjectItem[]
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
            setState<K extends keyof import('./select').SelectState>(
                state:
                    | import('./select').SelectState
                    | ((
                          prevState: Readonly<import('./select').SelectState>,
                          props: Readonly<SelectProps>
                      ) =>
                          | import('./select').SelectState
                          | Pick<import('./select').SelectState, K>
                          | null)
                    | Pick<import('./select').SelectState, K>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<SelectProps> &
                Readonly<{
                    children?: import('react').ReactNode;
                }>;
            state: Readonly<import('./select').SelectState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            shouldComponentUpdate?(
                nextProps: Readonly<SelectProps>,
                nextState: Readonly<import('./select').SelectState>,
                nextContext: any
            ): boolean;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<SelectProps>,
                prevState: Readonly<import('./select').SelectState>
            ): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<SelectProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<SelectProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<SelectProps>,
                nextState: Readonly<import('./select').SelectState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<SelectProps>,
                nextState: Readonly<import('./select').SelectState>,
                nextContext: any
            ): void;
        },
        {}
    >;
};
export default _default;

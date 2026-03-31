/// <reference types="react" />
export type { CascaderSelectProps, CascaderSelectDataItem } from './types';
declare const _default: import("../config-provider/types").ConfiguredComponentClass<import("./types").CascaderSelectProps & import("../config-provider/types").ComponentCommonProps, {
    readonly props: import("./cascader-select").CascaderSelectPropsWithDefault;
    _valueDataCache: Record<string, import("./types").CascaderSelectDataItem>;
    _v2n: Record<string, import("./types").CascaderSelectDataItem>;
    _p2n: Record<string, import("./types").CascaderSelectDataItem>;
    select: import("../config-provider/types").ConfiguredComponent<import("../select").SelectProps & import("../config-provider/types").ComponentCommonProps, {
        selectAllYet: boolean;
        componentDidUpdate(prevProps: import("../select").SelectProps, prevState: import("../select/base").BaseState): void;
        componentDidMount(): void;
        ie9Hack(): void;
        useDetailValue(): boolean;
        hasSearch(): boolean;
        getTagSize(): "small" | "medium" | "large" | undefined;
        handleMenuSelect(keys: string[], item: {
            props: {
                _key: string;
            };
        }): false | void;
        handleItemClick(key: string): void;
        handleSingleSelect(key: string, triggerType: import("../select").VisibleChangeType): void;
        handleMultipleSelect(keys: import("../select").DataSourceItem[] | undefined, triggerType: import("../select").VisibleChangeType, key?: string | null | undefined, keepSearchValue?: boolean | undefined): void;
        updateSelectAllYet(value?: unknown): void;
        handleSearchValue(value: string): void;
        handleSearch(value: string, e: import("react").ChangeEvent<HTMLInputElement>): void;
        handleSearchClear(triggerType?: string | undefined): void;
        handleSearchKeyDown(e: import("react").KeyboardEvent<HTMLElement>): void;
        chooseMultipleItem(key: string): void;
        chooseHighlightItem(proxy: unknown, e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleTagClose(item: import("../select").ObjectItem): boolean;
        handleDeleteTag(e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleSelectAll(e: import("react").UIEvent<HTMLElement, UIEvent>): void;
        handleVisibleChange(visible: boolean, type: import("../select").VisibleChangeType): void;
        afterClose(): void;
        maxTagPlaceholder(selectedValues: import("../select").ObjectItem[], totalValues: import("../select").ObjectItem[]): string;
        renderValues(): import("react").ReactNode;
        handleWrapClick: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        handleArrowClick: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        handleClear: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        hasClear(): boolean | undefined;
        renderExtraNode(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        renderSelect(): import("react").JSX.Element;
        renderSearchInput(valueNodes: import("react").ReactNode, placeholder: string | undefined, inputEl: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>): import("react").JSX.Element;
        renderMenuHeader(): import("react").ReactNode;
        render(): import("react").JSX.Element;
        dataStore: import("../select/data-store").default;
        selectDOM: HTMLElement;
        width: string | number;
        popupRef: HTMLDivElement;
        resizeTimeout: number;
        highlightTimer: number | undefined;
        menuRef: import("../config-provider/types").ConfiguredComponent<import("../menu").MenuProps & import("../config-provider/types").ComponentCommonProps, import("../menu/view/menu").Menu> | null;
        isAutoComplete: boolean;
        inputRef: import("../input/input").default<import("../input").InputProps>;
        valueDataSource: {
            value?: string | number | boolean | (string | number | boolean | null | undefined)[] | null | undefined;
            valueDS?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined;
            mapValueDS?: Record<string, import("../select").ObjectItem> | undefined;
        };
        componentWillUnmount(): void;
        syncWidth(): void;
        handleResize(): void;
        setDataSource(props: import("../select").SelectProps): import("../select/types").NormalizedObjectItem[];
        setVisible(visible: boolean, type?: import("../select").VisibleChangeType | undefined): void;
        setFirstHightLightKeyForMenu(searchValue?: unknown): void;
        handleChange(value: import("../select").DataSourceItem | import("../select").DataSourceItem[], args_0: unknown, args_1?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined): void;
        handleMenuBodyClick(): void;
        toggleHighlightItem(dir: number): false | import("../select/types").NormalizedObjectItem | undefined;
        scrollMenuIntoView(): void;
        handleSelect(): void;
        handleMouseDown: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        renderMenu(): import("react").JSX.Element;
        renderMenuItem(dataSource: import("../select/types").NormalizedObjectItem[]): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        saveSelectRef: (ref: HTMLElement | null) => void;
        saveInputRef: (ref: import("../config-provider/types").ConfiguredComponent<import("../input").InputProps & import("../config-provider/types").ComponentCommonProps, import("../input/input").default<import("../input").InputProps>> & Pick<import("../input/input").default<import("../input").InputProps>, "focus" | "getInputNode">) => void;
        focusInput(): void;
        focus(start?: number | undefined, end?: number | undefined, preventScroll?: boolean): void;
        beforeOpen(): void;
        beforeClose(): void;
        savePopupRef: (ref: HTMLDivElement) => void;
        shouldAutoWidth(): boolean | undefined;
        context: any;
        setState<K extends keyof import("../select/select").SelectState>(state: import("../select/select").SelectState | ((prevState: Readonly<import("../select/select").SelectState>, props: Readonly<import("../select").SelectProps>) => import("../select/select").SelectState | Pick<import("../select/select").SelectState, K> | null) | Pick<import("../select/select").SelectState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../select").SelectProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../select/select").SelectState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../select").SelectProps>, prevState: Readonly<import("../select/select").SelectState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
    }> & Pick<{
        selectAllYet: boolean;
        componentDidUpdate(prevProps: import("../select").SelectProps, prevState: import("../select/base").BaseState): void;
        componentDidMount(): void;
        ie9Hack(): void;
        useDetailValue(): boolean;
        hasSearch(): boolean;
        getTagSize(): "small" | "medium" | "large" | undefined;
        handleMenuSelect(keys: string[], item: {
            props: {
                _key: string;
            };
        }): false | void;
        handleItemClick(key: string): void;
        handleSingleSelect(key: string, triggerType: import("../select").VisibleChangeType): void;
        handleMultipleSelect(keys: import("../select").DataSourceItem[] | undefined, triggerType: import("../select").VisibleChangeType, key?: string | null | undefined, keepSearchValue?: boolean | undefined): void;
        updateSelectAllYet(value?: unknown): void;
        handleSearchValue(value: string): void;
        handleSearch(value: string, e: import("react").ChangeEvent<HTMLInputElement>): void;
        handleSearchClear(triggerType?: string | undefined): void;
        handleSearchKeyDown(e: import("react").KeyboardEvent<HTMLElement>): void;
        chooseMultipleItem(key: string): void;
        chooseHighlightItem(proxy: unknown, e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleTagClose(item: import("../select").ObjectItem): boolean;
        handleDeleteTag(e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleSelectAll(e: import("react").UIEvent<HTMLElement, UIEvent>): void;
        handleVisibleChange(visible: boolean, type: import("../select").VisibleChangeType): void;
        afterClose(): void;
        maxTagPlaceholder(selectedValues: import("../select").ObjectItem[], totalValues: import("../select").ObjectItem[]): string;
        renderValues(): import("react").ReactNode;
        handleWrapClick: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        handleArrowClick: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        handleClear: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        hasClear(): boolean | undefined;
        renderExtraNode(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        renderSelect(): import("react").JSX.Element;
        renderSearchInput(valueNodes: import("react").ReactNode, placeholder: string | undefined, inputEl: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>): import("react").JSX.Element;
        renderMenuHeader(): import("react").ReactNode;
        render(): import("react").JSX.Element;
        dataStore: import("../select/data-store").default;
        selectDOM: HTMLElement;
        width: string | number;
        popupRef: HTMLDivElement;
        resizeTimeout: number;
        highlightTimer: number | undefined;
        menuRef: import("../config-provider/types").ConfiguredComponent<import("../menu").MenuProps & import("../config-provider/types").ComponentCommonProps, import("../menu/view/menu").Menu> | null;
        isAutoComplete: boolean;
        inputRef: import("../input/input").default<import("../input").InputProps>;
        valueDataSource: {
            value?: string | number | boolean | (string | number | boolean | null | undefined)[] | null | undefined;
            valueDS?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined;
            mapValueDS?: Record<string, import("../select").ObjectItem> | undefined;
        };
        componentWillUnmount(): void;
        syncWidth(): void;
        handleResize(): void;
        setDataSource(props: import("../select").SelectProps): import("../select/types").NormalizedObjectItem[];
        setVisible(visible: boolean, type?: import("../select").VisibleChangeType | undefined): void;
        setFirstHightLightKeyForMenu(searchValue?: unknown): void;
        handleChange(value: import("../select").DataSourceItem | import("../select").DataSourceItem[], args_0: unknown, args_1?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined): void;
        handleMenuBodyClick(): void;
        toggleHighlightItem(dir: number): false | import("../select/types").NormalizedObjectItem | undefined;
        scrollMenuIntoView(): void;
        handleSelect(): void;
        handleMouseDown: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        renderMenu(): import("react").JSX.Element;
        renderMenuItem(dataSource: import("../select/types").NormalizedObjectItem[]): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        saveSelectRef: (ref: HTMLElement | null) => void;
        saveInputRef: (ref: import("../config-provider/types").ConfiguredComponent<import("../input").InputProps & import("../config-provider/types").ComponentCommonProps, import("../input/input").default<import("../input").InputProps>> & Pick<import("../input/input").default<import("../input").InputProps>, "focus" | "getInputNode">) => void;
        focusInput(): void;
        focus(start?: number | undefined, end?: number | undefined, preventScroll?: boolean): void;
        beforeOpen(): void;
        beforeClose(): void;
        savePopupRef: (ref: HTMLDivElement) => void;
        shouldAutoWidth(): boolean | undefined;
        context: any;
        setState<K extends keyof import("../select/select").SelectState>(state: import("../select/select").SelectState | ((prevState: Readonly<import("../select/select").SelectState>, props: Readonly<import("../select").SelectProps>) => import("../select/select").SelectState | Pick<import("../select/select").SelectState, K> | null) | Pick<import("../select/select").SelectState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../select").SelectProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../select/select").SelectState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../select").SelectProps>, prevState: Readonly<import("../select/select").SelectState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
    }, "focusInput" | "handleSearchClear">;
    cascader: import("../config-provider/types").ConfiguredComponent<import("../cascader").CascaderProps & import("../config-provider/types").ComponentCommonProps, {
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
        getData(value: string[]): import("../cascader").CascaderDataItemWithPosInfo[];
        processValue(value: string[], v: string, checked: boolean): void;
        handleSelect(v: string, canExpand: boolean): void;
        handleCheck(v: string, checked: boolean): void;
        handleExpand(value: string, level: number, canExpand: boolean, focusedFirstChild: boolean): void | Promise<void>;
        handleMouseLeave(): void;
        setExpandValue(expandedValue: string[], isExpandedValueSetByAction?: boolean): void;
        getFirstFocusKeyByDataSource(dataSource: import("../cascader").CascaderDataItem[]): string;
        getFirstFocusKeyByFilteredPaths(filteredPaths: import("../cascader").CascaderDataItemWithPosInfo[][] | undefined): string;
        getFirstFocusKey(): string;
        setFocusValue(): void;
        handleFocus(focusedValue: string): void;
        handleFold(): void;
        getIndeterminate(value: string[]): string[];
        onBlur(e: import("react").FocusEvent<HTMLElement, Element>): void;
        renderMenu(data: import("../cascader").CascaderDataItem[] | undefined, level: number): import("react").JSX.Element;
        renderMenus(): import("react").JSX.Element[];
        renderFilteredItem(path: import("../cascader").CascaderDataItemWithPosInfo[]): import("react").JSX.Element;
        renderFilteredList(): import("react").JSX.Element;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends keyof import("../cascader/types").CascaderState>(state: import("../cascader/types").CascaderState | ((prevState: Readonly<import("../cascader/types").CascaderState>, props: Readonly<import("../cascader").CascaderProps>) => import("../cascader/types").CascaderState | Pick<import("../cascader/types").CascaderState, K_1> | null) | Pick<import("../cascader/types").CascaderState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../cascader").CascaderProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../cascader/types").CascaderState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../cascader").CascaderProps>, prevState: Readonly<import("../cascader/types").CascaderState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
    }> & Pick<{
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
        getData(value: string[]): import("../cascader").CascaderDataItemWithPosInfo[];
        processValue(value: string[], v: string, checked: boolean): void;
        handleSelect(v: string, canExpand: boolean): void;
        handleCheck(v: string, checked: boolean): void;
        handleExpand(value: string, level: number, canExpand: boolean, focusedFirstChild: boolean): void | Promise<void>;
        handleMouseLeave(): void;
        setExpandValue(expandedValue: string[], isExpandedValueSetByAction?: boolean): void;
        getFirstFocusKeyByDataSource(dataSource: import("../cascader").CascaderDataItem[]): string;
        getFirstFocusKeyByFilteredPaths(filteredPaths: import("../cascader").CascaderDataItemWithPosInfo[][] | undefined): string;
        getFirstFocusKey(): string;
        setFocusValue(): void;
        handleFocus(focusedValue: string): void;
        handleFold(): void;
        getIndeterminate(value: string[]): string[];
        onBlur(e: import("react").FocusEvent<HTMLElement, Element>): void;
        renderMenu(data: import("../cascader").CascaderDataItem[] | undefined, level: number): import("react").JSX.Element;
        renderMenus(): import("react").JSX.Element[];
        renderFilteredItem(path: import("../cascader").CascaderDataItemWithPosInfo[]): import("react").JSX.Element;
        renderFilteredList(): import("react").JSX.Element;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends keyof import("../cascader/types").CascaderState>(state: import("../cascader/types").CascaderState | ((prevState: Readonly<import("../cascader/types").CascaderState>, props: Readonly<import("../cascader").CascaderProps>) => import("../cascader/types").CascaderState | Pick<import("../cascader/types").CascaderState, K_1> | null) | Pick<import("../cascader/types").CascaderState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../cascader").CascaderProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../cascader/types").CascaderState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../cascader").CascaderProps>, prevState: Readonly<import("../cascader/types").CascaderState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
    }, "setFocusValue">;
    popup: import("../config-provider/types").ConfiguredComponent<import("../overlay").PopupProps & import("../config-provider/types").ComponentCommonProps, {
        overlay: {
            lastAlign: string | boolean | undefined;
            timeoutMap: {
                [key: string]: number;
            };
            _isMounted: boolean;
            _isDestroyed: boolean;
            focusTimeout: number;
            _animation: {
                off: () => void;
            } | null;
            _containerNode: HTMLElement | undefined;
            _hasFocused: boolean;
            contentRef: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            gatewayRef: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null;
            _keydownEvents: {
                off: () => void;
            } | null;
            _clickEvents: {
                off: () => void;
            } | null;
            _touchEvents: {
                off: () => void;
            } | null;
            overlay: any | null;
            componentDidMount(): void;
            componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
            componentWillUnmount(): void;
            doAnimation(open: boolean, close: boolean): void;
            getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
            getAnimationByAlign(align: string | boolean | string[] | undefined): {
                in: string;
                out: string;
            };
            addAnimationEvents(): void;
            handlePosition(config: {
                align: string[];
            }): void;
            handleAnimateEnd(id: string): void;
            onEntering(): void;
            onLeaving(): void;
            onEntered(): void;
            onLeaved(): void;
            beforeOpen(): void;
            beforeClose(): void;
            setFocusNode(): void;
            getContent(): import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            getContentNode(): HTMLElement | null;
            getWrapperNode(): Element | null;
            addDocumentEvents(): void;
            removeDocumentEvents(): void;
            handleDocumentKeyDown(e: KeyboardEvent): void;
            isInShadowDOM(node: Element | Text): boolean;
            getEventPath(event: Event | {
                path: string;
            }): string | EventTarget[] | undefined;
            composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
            matchInShadowDOM(node: Element | Text, e: Event): boolean;
            handleDocumentClick(e: Event): void;
            handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
            saveContentRef: (ref: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            }) => void;
            saveGatewayRef: (ref: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null) => void;
            getInstance(): any;
            render(): import("react").JSX.Element;
            context: any;
            setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").OverlayState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
        } | null;
        saveRef(ref: {
            _mouseNotFirstOnMask: boolean;
            _isForwardContent: boolean | null;
            overlay: {
                lastAlign: string | boolean | undefined;
                timeoutMap: {
                    [key: string]: number;
                };
                _isMounted: boolean;
                _isDestroyed: boolean;
                focusTimeout: number;
                _animation: {
                    off: () => void;
                } | null;
                _containerNode: HTMLElement | undefined;
                _hasFocused: boolean;
                contentRef: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                gatewayRef: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null;
                _keydownEvents: {
                    off: () => void;
                } | null;
                _clickEvents: {
                    off: () => void;
                } | null;
                _touchEvents: {
                    off: () => void;
                } | null;
                overlay: any | null;
                componentDidMount(): void;
                componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
                componentWillUnmount(): void;
                doAnimation(open: boolean, close: boolean): void;
                getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
                getAnimationByAlign(align: string | boolean | string[] | undefined): {
                    in: string;
                    out: string;
                };
                addAnimationEvents(): void;
                handlePosition(config: {
                    align: string[];
                }): void;
                handleAnimateEnd(id: string): void;
                onEntering(): void;
                onLeaving(): void;
                onEntered(): void;
                onLeaved(): void;
                beforeOpen(): void;
                beforeClose(): void;
                setFocusNode(): void;
                getContent(): import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                getContentNode(): HTMLElement | null;
                getWrapperNode(): Element | null;
                addDocumentEvents(): void;
                removeDocumentEvents(): void;
                handleDocumentKeyDown(e: KeyboardEvent): void;
                isInShadowDOM(node: Element | Text): boolean;
                getEventPath(event: Event | {
                    path: string;
                }): string | EventTarget[] | undefined;
                composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                matchInShadowDOM(node: Element | Text, e: Event): boolean;
                handleDocumentClick(e: Event): void;
                handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (ref: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                }) => void;
                saveGatewayRef: (ref: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null) => void;
                getInstance(): any;
                render(): import("react").JSX.Element;
                context: any;
                setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").OverlayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            } | null;
            _timer: number | null;
            _hideTimer: number | null;
            _showTimer: number | null;
            componentWillUnmount(): void;
            handleVisibleChange(visible: boolean, type: string | object, e?: KeyboardEvent | MouseEvent | undefined): void;
            handleTriggerClick(e: KeyboardEvent | MouseEvent): void;
            handleTriggerKeyDown(e: KeyboardEvent): void;
            handleTriggerMouseEnter(e: MouseEvent): void;
            handleTriggerMouseLeave(e: MouseEvent, type: string | object): void;
            handleTriggerFocus(e: MouseEvent): void;
            handleTriggerBlur(e: MouseEvent): void;
            handleContentMouseDown(): void;
            handleContentMouseEnter(): void;
            handleContentMouseLeave(e: MouseEvent): void;
            handleMaskMouseEnter(): void;
            handleMaskMouseLeave(): void;
            handleRequestClose(type: string | object, e: MouseEvent): void;
            renderTrigger(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
            renderContent(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
            renderPortal(): import("react").JSX.Element;
            render(): (import("react").JSX.Element | undefined)[];
            context: any;
            setState<K_4 extends "visible">(state: import("../overlay/types").PopupState | ((prevState: Readonly<import("../overlay/types").PopupState>, props: Readonly<import("../overlay").PopupProps>) => import("../overlay/types").PopupState | Pick<import("../overlay/types").PopupState, K_4> | null) | Pick<import("../overlay/types").PopupState, K_4> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").PopupState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
        } | null): void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_5 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../overlay").PopupProps>) => {} | Pick<{}, K_5> | null) | Pick<{}, K_5> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
    }> & Pick<{
        overlay: {
            lastAlign: string | boolean | undefined;
            timeoutMap: {
                [key: string]: number;
            };
            _isMounted: boolean;
            _isDestroyed: boolean;
            focusTimeout: number;
            _animation: {
                off: () => void;
            } | null;
            _containerNode: HTMLElement | undefined;
            _hasFocused: boolean;
            contentRef: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            gatewayRef: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null;
            _keydownEvents: {
                off: () => void;
            } | null;
            _clickEvents: {
                off: () => void;
            } | null;
            _touchEvents: {
                off: () => void;
            } | null;
            overlay: any | null;
            componentDidMount(): void;
            componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
            componentWillUnmount(): void;
            doAnimation(open: boolean, close: boolean): void;
            getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
            getAnimationByAlign(align: string | boolean | string[] | undefined): {
                in: string;
                out: string;
            };
            addAnimationEvents(): void;
            handlePosition(config: {
                align: string[];
            }): void;
            handleAnimateEnd(id: string): void;
            onEntering(): void;
            onLeaving(): void;
            onEntered(): void;
            onLeaved(): void;
            beforeOpen(): void;
            beforeClose(): void;
            setFocusNode(): void;
            getContent(): import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            getContentNode(): HTMLElement | null;
            getWrapperNode(): Element | null;
            addDocumentEvents(): void;
            removeDocumentEvents(): void;
            handleDocumentKeyDown(e: KeyboardEvent): void;
            isInShadowDOM(node: Element | Text): boolean;
            getEventPath(event: Event | {
                path: string;
            }): string | EventTarget[] | undefined;
            composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
            matchInShadowDOM(node: Element | Text, e: Event): boolean;
            handleDocumentClick(e: Event): void;
            handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
            saveContentRef: (ref: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            }) => void;
            saveGatewayRef: (ref: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null) => void;
            getInstance(): any;
            render(): import("react").JSX.Element;
            context: any;
            setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").OverlayState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
        } | null;
        saveRef(ref: {
            _mouseNotFirstOnMask: boolean;
            _isForwardContent: boolean | null;
            overlay: {
                lastAlign: string | boolean | undefined;
                timeoutMap: {
                    [key: string]: number;
                };
                _isMounted: boolean;
                _isDestroyed: boolean;
                focusTimeout: number;
                _animation: {
                    off: () => void;
                } | null;
                _containerNode: HTMLElement | undefined;
                _hasFocused: boolean;
                contentRef: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                gatewayRef: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null;
                _keydownEvents: {
                    off: () => void;
                } | null;
                _clickEvents: {
                    off: () => void;
                } | null;
                _touchEvents: {
                    off: () => void;
                } | null;
                overlay: any | null;
                componentDidMount(): void;
                componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
                componentWillUnmount(): void;
                doAnimation(open: boolean, close: boolean): void;
                getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
                getAnimationByAlign(align: string | boolean | string[] | undefined): {
                    in: string;
                    out: string;
                };
                addAnimationEvents(): void;
                handlePosition(config: {
                    align: string[];
                }): void;
                handleAnimateEnd(id: string): void;
                onEntering(): void;
                onLeaving(): void;
                onEntered(): void;
                onLeaved(): void;
                beforeOpen(): void;
                beforeClose(): void;
                setFocusNode(): void;
                getContent(): import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                getContentNode(): HTMLElement | null;
                getWrapperNode(): Element | null;
                addDocumentEvents(): void;
                removeDocumentEvents(): void;
                handleDocumentKeyDown(e: KeyboardEvent): void;
                isInShadowDOM(node: Element | Text): boolean;
                getEventPath(event: Event | {
                    path: string;
                }): string | EventTarget[] | undefined;
                composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                matchInShadowDOM(node: Element | Text, e: Event): boolean;
                handleDocumentClick(e: Event): void;
                handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (ref: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                }) => void;
                saveGatewayRef: (ref: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null) => void;
                getInstance(): any;
                render(): import("react").JSX.Element;
                context: any;
                setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").OverlayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            } | null;
            _timer: number | null;
            _hideTimer: number | null;
            _showTimer: number | null;
            componentWillUnmount(): void;
            handleVisibleChange(visible: boolean, type: string | object, e?: KeyboardEvent | MouseEvent | undefined): void;
            handleTriggerClick(e: KeyboardEvent | MouseEvent): void;
            handleTriggerKeyDown(e: KeyboardEvent): void;
            handleTriggerMouseEnter(e: MouseEvent): void;
            handleTriggerMouseLeave(e: MouseEvent, type: string | object): void;
            handleTriggerFocus(e: MouseEvent): void;
            handleTriggerBlur(e: MouseEvent): void;
            handleContentMouseDown(): void;
            handleContentMouseEnter(): void;
            handleContentMouseLeave(e: MouseEvent): void;
            handleMaskMouseEnter(): void;
            handleMaskMouseLeave(): void;
            handleRequestClose(type: string | object, e: MouseEvent): void;
            renderTrigger(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
            renderContent(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
            renderPortal(): import("react").JSX.Element;
            render(): (import("react").JSX.Element | undefined)[];
            context: any;
            setState<K_4 extends "visible">(state: import("../overlay/types").PopupState | ((prevState: Readonly<import("../overlay/types").PopupState>, props: Readonly<import("../overlay").PopupProps>) => import("../overlay/types").PopupState | Pick<import("../overlay/types").PopupState, K_4> | null) | Pick<import("../overlay/types").PopupState, K_4> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").PopupState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
        } | null): void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_5 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../overlay").PopupProps>) => {} | Pick<{}, K_5> | null) | Pick<{}, K_5> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, "overlay">;
    cascaderHeight: string | number;
    focus(): void;
    updateCache(dataSource: import("../cascader").CascaderDataItem[]): void;
    flatValue(value: string[]): string[];
    isDescendantOrSelf(currentPos: string | null | undefined, targetPos: string | null | undefined): boolean;
    getValue(pos: string): string | null;
    getPos(value: string): string | null;
    getData(value: string[]): import("./types").CascaderSelectDataItem[];
    getLabelPath(data: import("./types").CascaderSelectDataItem): import("react").ReactNode[];
    getSingleData(value: string | string[]): import("./types").CascaderSelectDataItem | null;
    getMultipleData(value: string[]): import("./types").CascaderSelectDataItem[] | null;
    getIndeterminate(value: string[]): string[];
    saveSelectRef(ref: import("../config-provider/types").ConfiguredComponent<import("../select").SelectProps & import("../config-provider/types").ComponentCommonProps, {
        selectAllYet: boolean;
        componentDidUpdate(prevProps: import("../select").SelectProps, prevState: import("../select/base").BaseState): void;
        componentDidMount(): void;
        ie9Hack(): void;
        useDetailValue(): boolean;
        hasSearch(): boolean;
        getTagSize(): "small" | "medium" | "large" | undefined;
        handleMenuSelect(keys: string[], item: {
            props: {
                _key: string;
            };
        }): false | void;
        handleItemClick(key: string): void;
        handleSingleSelect(key: string, triggerType: import("../select").VisibleChangeType): void;
        handleMultipleSelect(keys: import("../select").DataSourceItem[] | undefined, triggerType: import("../select").VisibleChangeType, key?: string | null | undefined, keepSearchValue?: boolean | undefined): void;
        updateSelectAllYet(value?: unknown): void;
        handleSearchValue(value: string): void;
        handleSearch(value: string, e: import("react").ChangeEvent<HTMLInputElement>): void;
        handleSearchClear(triggerType?: string | undefined): void;
        handleSearchKeyDown(e: import("react").KeyboardEvent<HTMLElement>): void;
        chooseMultipleItem(key: string): void;
        chooseHighlightItem(proxy: unknown, e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleTagClose(item: import("../select").ObjectItem): boolean;
        handleDeleteTag(e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleSelectAll(e: import("react").UIEvent<HTMLElement, UIEvent>): void;
        handleVisibleChange(visible: boolean, type: import("../select").VisibleChangeType): void;
        afterClose(): void;
        maxTagPlaceholder(selectedValues: import("../select").ObjectItem[], totalValues: import("../select").ObjectItem[]): string;
        renderValues(): import("react").ReactNode;
        handleWrapClick: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        handleArrowClick: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        handleClear: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        hasClear(): boolean | undefined;
        renderExtraNode(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        renderSelect(): import("react").JSX.Element;
        renderSearchInput(valueNodes: import("react").ReactNode, placeholder: string | undefined, inputEl: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>): import("react").JSX.Element;
        renderMenuHeader(): import("react").ReactNode;
        render(): import("react").JSX.Element;
        dataStore: import("../select/data-store").default;
        selectDOM: HTMLElement;
        width: string | number;
        popupRef: HTMLDivElement;
        resizeTimeout: number;
        highlightTimer: number | undefined;
        menuRef: import("../config-provider/types").ConfiguredComponent<import("../menu").MenuProps & import("../config-provider/types").ComponentCommonProps, import("../menu/view/menu").Menu> | null;
        isAutoComplete: boolean;
        inputRef: import("../input/input").default<import("../input").InputProps>;
        valueDataSource: {
            value?: string | number | boolean | (string | number | boolean | null | undefined)[] | null | undefined;
            valueDS?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined;
            mapValueDS?: Record<string, import("../select").ObjectItem> | undefined;
        };
        componentWillUnmount(): void;
        syncWidth(): void;
        handleResize(): void;
        setDataSource(props: import("../select").SelectProps): import("../select/types").NormalizedObjectItem[];
        setVisible(visible: boolean, type?: import("../select").VisibleChangeType | undefined): void;
        setFirstHightLightKeyForMenu(searchValue?: unknown): void;
        handleChange(value: import("../select").DataSourceItem | import("../select").DataSourceItem[], args_0: unknown, args_1?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined): void;
        handleMenuBodyClick(): void;
        toggleHighlightItem(dir: number): false | import("../select/types").NormalizedObjectItem | undefined;
        scrollMenuIntoView(): void;
        handleSelect(): void;
        handleMouseDown: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        renderMenu(): import("react").JSX.Element;
        renderMenuItem(dataSource: import("../select/types").NormalizedObjectItem[]): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        saveSelectRef: (ref: HTMLElement | null) => void;
        saveInputRef: (ref: import("../config-provider/types").ConfiguredComponent<import("../input").InputProps & import("../config-provider/types").ComponentCommonProps, import("../input/input").default<import("../input").InputProps>> & Pick<import("../input/input").default<import("../input").InputProps>, "focus" | "getInputNode">) => void;
        focusInput(): void;
        focus(start?: number | undefined, end?: number | undefined, preventScroll?: boolean): void;
        beforeOpen(): void;
        beforeClose(): void;
        savePopupRef: (ref: HTMLDivElement) => void;
        shouldAutoWidth(): boolean | undefined;
        context: any;
        setState<K extends keyof import("../select/select").SelectState>(state: import("../select/select").SelectState | ((prevState: Readonly<import("../select/select").SelectState>, props: Readonly<import("../select").SelectProps>) => import("../select/select").SelectState | Pick<import("../select/select").SelectState, K> | null) | Pick<import("../select/select").SelectState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../select").SelectProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../select/select").SelectState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../select").SelectProps>, prevState: Readonly<import("../select/select").SelectState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
    }> & Pick<{
        selectAllYet: boolean;
        componentDidUpdate(prevProps: import("../select").SelectProps, prevState: import("../select/base").BaseState): void;
        componentDidMount(): void;
        ie9Hack(): void;
        useDetailValue(): boolean;
        hasSearch(): boolean;
        getTagSize(): "small" | "medium" | "large" | undefined;
        handleMenuSelect(keys: string[], item: {
            props: {
                _key: string;
            };
        }): false | void;
        handleItemClick(key: string): void;
        handleSingleSelect(key: string, triggerType: import("../select").VisibleChangeType): void;
        handleMultipleSelect(keys: import("../select").DataSourceItem[] | undefined, triggerType: import("../select").VisibleChangeType, key?: string | null | undefined, keepSearchValue?: boolean | undefined): void;
        updateSelectAllYet(value?: unknown): void;
        handleSearchValue(value: string): void;
        handleSearch(value: string, e: import("react").ChangeEvent<HTMLInputElement>): void;
        handleSearchClear(triggerType?: string | undefined): void;
        handleSearchKeyDown(e: import("react").KeyboardEvent<HTMLElement>): void;
        chooseMultipleItem(key: string): void;
        chooseHighlightItem(proxy: unknown, e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleTagClose(item: import("../select").ObjectItem): boolean;
        handleDeleteTag(e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleSelectAll(e: import("react").UIEvent<HTMLElement, UIEvent>): void;
        handleVisibleChange(visible: boolean, type: import("../select").VisibleChangeType): void;
        afterClose(): void;
        maxTagPlaceholder(selectedValues: import("../select").ObjectItem[], totalValues: import("../select").ObjectItem[]): string;
        renderValues(): import("react").ReactNode;
        handleWrapClick: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        handleArrowClick: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        handleClear: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        hasClear(): boolean | undefined;
        renderExtraNode(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        renderSelect(): import("react").JSX.Element;
        renderSearchInput(valueNodes: import("react").ReactNode, placeholder: string | undefined, inputEl: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>): import("react").JSX.Element;
        renderMenuHeader(): import("react").ReactNode;
        render(): import("react").JSX.Element;
        dataStore: import("../select/data-store").default;
        selectDOM: HTMLElement;
        width: string | number;
        popupRef: HTMLDivElement;
        resizeTimeout: number;
        highlightTimer: number | undefined;
        menuRef: import("../config-provider/types").ConfiguredComponent<import("../menu").MenuProps & import("../config-provider/types").ComponentCommonProps, import("../menu/view/menu").Menu> | null;
        isAutoComplete: boolean;
        inputRef: import("../input/input").default<import("../input").InputProps>;
        valueDataSource: {
            value?: string | number | boolean | (string | number | boolean | null | undefined)[] | null | undefined;
            valueDS?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined;
            mapValueDS?: Record<string, import("../select").ObjectItem> | undefined;
        };
        componentWillUnmount(): void;
        syncWidth(): void;
        handleResize(): void;
        setDataSource(props: import("../select").SelectProps): import("../select/types").NormalizedObjectItem[];
        setVisible(visible: boolean, type?: import("../select").VisibleChangeType | undefined): void;
        setFirstHightLightKeyForMenu(searchValue?: unknown): void;
        handleChange(value: import("../select").DataSourceItem | import("../select").DataSourceItem[], args_0: unknown, args_1?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined): void;
        handleMenuBodyClick(): void;
        toggleHighlightItem(dir: number): false | import("../select/types").NormalizedObjectItem | undefined;
        scrollMenuIntoView(): void;
        handleSelect(): void;
        handleMouseDown: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        renderMenu(): import("react").JSX.Element;
        renderMenuItem(dataSource: import("../select/types").NormalizedObjectItem[]): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        saveSelectRef: (ref: HTMLElement | null) => void;
        saveInputRef: (ref: import("../config-provider/types").ConfiguredComponent<import("../input").InputProps & import("../config-provider/types").ComponentCommonProps, import("../input/input").default<import("../input").InputProps>> & Pick<import("../input/input").default<import("../input").InputProps>, "focus" | "getInputNode">) => void;
        focusInput(): void;
        focus(start?: number | undefined, end?: number | undefined, preventScroll?: boolean): void;
        beforeOpen(): void;
        beforeClose(): void;
        savePopupRef: (ref: HTMLDivElement) => void;
        shouldAutoWidth(): boolean | undefined;
        context: any;
        setState<K extends keyof import("../select/select").SelectState>(state: import("../select/select").SelectState | ((prevState: Readonly<import("../select/select").SelectState>, props: Readonly<import("../select").SelectProps>) => import("../select/select").SelectState | Pick<import("../select/select").SelectState, K> | null) | Pick<import("../select/select").SelectState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../select").SelectProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../select/select").SelectState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../select").SelectProps>, prevState: Readonly<import("../select/select").SelectState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
    }, "focusInput" | "handleSearchClear">): void;
    saveCascaderRef(ref: import("../config-provider/types").ConfiguredComponent<import("../cascader").CascaderProps & import("../config-provider/types").ComponentCommonProps, {
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
        getData(value: string[]): import("../cascader").CascaderDataItemWithPosInfo[];
        processValue(value: string[], v: string, checked: boolean): void;
        handleSelect(v: string, canExpand: boolean): void;
        handleCheck(v: string, checked: boolean): void;
        handleExpand(value: string, level: number, canExpand: boolean, focusedFirstChild: boolean): void | Promise<void>;
        handleMouseLeave(): void;
        setExpandValue(expandedValue: string[], isExpandedValueSetByAction?: boolean): void;
        getFirstFocusKeyByDataSource(dataSource: import("../cascader").CascaderDataItem[]): string;
        getFirstFocusKeyByFilteredPaths(filteredPaths: import("../cascader").CascaderDataItemWithPosInfo[][] | undefined): string;
        getFirstFocusKey(): string;
        setFocusValue(): void;
        handleFocus(focusedValue: string): void;
        handleFold(): void;
        getIndeterminate(value: string[]): string[];
        onBlur(e: import("react").FocusEvent<HTMLElement, Element>): void;
        renderMenu(data: import("../cascader").CascaderDataItem[] | undefined, level: number): import("react").JSX.Element;
        renderMenus(): import("react").JSX.Element[];
        renderFilteredItem(path: import("../cascader").CascaderDataItemWithPosInfo[]): import("react").JSX.Element;
        renderFilteredList(): import("react").JSX.Element;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends keyof import("../cascader/types").CascaderState>(state: import("../cascader/types").CascaderState | ((prevState: Readonly<import("../cascader/types").CascaderState>, props: Readonly<import("../cascader").CascaderProps>) => import("../cascader/types").CascaderState | Pick<import("../cascader/types").CascaderState, K_1> | null) | Pick<import("../cascader/types").CascaderState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../cascader").CascaderProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../cascader/types").CascaderState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../cascader").CascaderProps>, prevState: Readonly<import("../cascader/types").CascaderState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
    }> & Pick<{
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
        getData(value: string[]): import("../cascader").CascaderDataItemWithPosInfo[];
        processValue(value: string[], v: string, checked: boolean): void;
        handleSelect(v: string, canExpand: boolean): void;
        handleCheck(v: string, checked: boolean): void;
        handleExpand(value: string, level: number, canExpand: boolean, focusedFirstChild: boolean): void | Promise<void>;
        handleMouseLeave(): void;
        setExpandValue(expandedValue: string[], isExpandedValueSetByAction?: boolean): void;
        getFirstFocusKeyByDataSource(dataSource: import("../cascader").CascaderDataItem[]): string;
        getFirstFocusKeyByFilteredPaths(filteredPaths: import("../cascader").CascaderDataItemWithPosInfo[][] | undefined): string;
        getFirstFocusKey(): string;
        setFocusValue(): void;
        handleFocus(focusedValue: string): void;
        handleFold(): void;
        getIndeterminate(value: string[]): string[];
        onBlur(e: import("react").FocusEvent<HTMLElement, Element>): void;
        renderMenu(data: import("../cascader").CascaderDataItem[] | undefined, level: number): import("react").JSX.Element;
        renderMenus(): import("react").JSX.Element[];
        renderFilteredItem(path: import("../cascader").CascaderDataItemWithPosInfo[]): import("react").JSX.Element;
        renderFilteredList(): import("react").JSX.Element;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends keyof import("../cascader/types").CascaderState>(state: import("../cascader/types").CascaderState | ((prevState: Readonly<import("../cascader/types").CascaderState>, props: Readonly<import("../cascader").CascaderProps>) => import("../cascader/types").CascaderState | Pick<import("../cascader/types").CascaderState, K_1> | null) | Pick<import("../cascader/types").CascaderState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../cascader").CascaderProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../cascader/types").CascaderState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../cascader").CascaderProps>, prevState: Readonly<import("../cascader/types").CascaderState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
    }, "setFocusValue">): void;
    completeValue(value: string[]): string[];
    isLeaf(data: import("./types").CascaderSelectDataItem): boolean;
    handleVisibleChange(visible: boolean, type?: import("./types").CascaderSelectVisibleChangeType | undefined): void;
    handleKeyDown(e: import("react").KeyboardEvent<HTMLElement>): void;
    getPopup(ref: import("../config-provider/types").ConfiguredComponent<import("../overlay").PopupProps & import("../config-provider/types").ComponentCommonProps, {
        overlay: {
            lastAlign: string | boolean | undefined;
            timeoutMap: {
                [key: string]: number;
            };
            _isMounted: boolean;
            _isDestroyed: boolean;
            focusTimeout: number;
            _animation: {
                off: () => void;
            } | null;
            _containerNode: HTMLElement | undefined;
            _hasFocused: boolean;
            contentRef: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            gatewayRef: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null;
            _keydownEvents: {
                off: () => void;
            } | null;
            _clickEvents: {
                off: () => void;
            } | null;
            _touchEvents: {
                off: () => void;
            } | null;
            overlay: any | null;
            componentDidMount(): void;
            componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
            componentWillUnmount(): void;
            doAnimation(open: boolean, close: boolean): void;
            getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
            getAnimationByAlign(align: string | boolean | string[] | undefined): {
                in: string;
                out: string;
            };
            addAnimationEvents(): void;
            handlePosition(config: {
                align: string[];
            }): void;
            handleAnimateEnd(id: string): void;
            onEntering(): void;
            onLeaving(): void;
            onEntered(): void;
            onLeaved(): void;
            beforeOpen(): void;
            beforeClose(): void;
            setFocusNode(): void;
            getContent(): import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            getContentNode(): HTMLElement | null;
            getWrapperNode(): Element | null;
            addDocumentEvents(): void;
            removeDocumentEvents(): void;
            handleDocumentKeyDown(e: KeyboardEvent): void;
            isInShadowDOM(node: Element | Text): boolean;
            getEventPath(event: Event | {
                path: string;
            }): string | EventTarget[] | undefined;
            composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
            matchInShadowDOM(node: Element | Text, e: Event): boolean;
            handleDocumentClick(e: Event): void;
            handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
            saveContentRef: (ref: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            }) => void;
            saveGatewayRef: (ref: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null) => void;
            getInstance(): any;
            render(): import("react").JSX.Element;
            context: any;
            setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").OverlayState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
        } | null;
        saveRef(ref: {
            _mouseNotFirstOnMask: boolean;
            _isForwardContent: boolean | null;
            overlay: {
                lastAlign: string | boolean | undefined;
                timeoutMap: {
                    [key: string]: number;
                };
                _isMounted: boolean;
                _isDestroyed: boolean;
                focusTimeout: number;
                _animation: {
                    off: () => void;
                } | null;
                _containerNode: HTMLElement | undefined;
                _hasFocused: boolean;
                contentRef: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                gatewayRef: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null;
                _keydownEvents: {
                    off: () => void;
                } | null;
                _clickEvents: {
                    off: () => void;
                } | null;
                _touchEvents: {
                    off: () => void;
                } | null;
                overlay: any | null;
                componentDidMount(): void;
                componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
                componentWillUnmount(): void;
                doAnimation(open: boolean, close: boolean): void;
                getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
                getAnimationByAlign(align: string | boolean | string[] | undefined): {
                    in: string;
                    out: string;
                };
                addAnimationEvents(): void;
                handlePosition(config: {
                    align: string[];
                }): void;
                handleAnimateEnd(id: string): void;
                onEntering(): void;
                onLeaving(): void;
                onEntered(): void;
                onLeaved(): void;
                beforeOpen(): void;
                beforeClose(): void;
                setFocusNode(): void;
                getContent(): import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                getContentNode(): HTMLElement | null;
                getWrapperNode(): Element | null;
                addDocumentEvents(): void;
                removeDocumentEvents(): void;
                handleDocumentKeyDown(e: KeyboardEvent): void;
                isInShadowDOM(node: Element | Text): boolean;
                getEventPath(event: Event | {
                    path: string;
                }): string | EventTarget[] | undefined;
                composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                matchInShadowDOM(node: Element | Text, e: Event): boolean;
                handleDocumentClick(e: Event): void;
                handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (ref: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                }) => void;
                saveGatewayRef: (ref: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null) => void;
                getInstance(): any;
                render(): import("react").JSX.Element;
                context: any;
                setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").OverlayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            } | null;
            _timer: number | null;
            _hideTimer: number | null;
            _showTimer: number | null;
            componentWillUnmount(): void;
            handleVisibleChange(visible: boolean, type: string | object, e?: KeyboardEvent | MouseEvent | undefined): void;
            handleTriggerClick(e: KeyboardEvent | MouseEvent): void;
            handleTriggerKeyDown(e: KeyboardEvent): void;
            handleTriggerMouseEnter(e: MouseEvent): void;
            handleTriggerMouseLeave(e: MouseEvent, type: string | object): void;
            handleTriggerFocus(e: MouseEvent): void;
            handleTriggerBlur(e: MouseEvent): void;
            handleContentMouseDown(): void;
            handleContentMouseEnter(): void;
            handleContentMouseLeave(e: MouseEvent): void;
            handleMaskMouseEnter(): void;
            handleMaskMouseLeave(): void;
            handleRequestClose(type: string | object, e: MouseEvent): void;
            renderTrigger(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
            renderContent(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
            renderPortal(): import("react").JSX.Element;
            render(): (import("react").JSX.Element | undefined)[];
            context: any;
            setState<K_4 extends "visible">(state: import("../overlay/types").PopupState | ((prevState: Readonly<import("../overlay/types").PopupState>, props: Readonly<import("../overlay").PopupProps>) => import("../overlay/types").PopupState | Pick<import("../overlay/types").PopupState, K_4> | null) | Pick<import("../overlay/types").PopupState, K_4> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").PopupState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
        } | null): void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_5 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../overlay").PopupProps>) => {} | Pick<{}, K_5> | null) | Pick<{}, K_5> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
    }> & Pick<{
        overlay: {
            lastAlign: string | boolean | undefined;
            timeoutMap: {
                [key: string]: number;
            };
            _isMounted: boolean;
            _isDestroyed: boolean;
            focusTimeout: number;
            _animation: {
                off: () => void;
            } | null;
            _containerNode: HTMLElement | undefined;
            _hasFocused: boolean;
            contentRef: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            gatewayRef: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null;
            _keydownEvents: {
                off: () => void;
            } | null;
            _clickEvents: {
                off: () => void;
            } | null;
            _touchEvents: {
                off: () => void;
            } | null;
            overlay: any | null;
            componentDidMount(): void;
            componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
            componentWillUnmount(): void;
            doAnimation(open: boolean, close: boolean): void;
            getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
            getAnimationByAlign(align: string | boolean | string[] | undefined): {
                in: string;
                out: string;
            };
            addAnimationEvents(): void;
            handlePosition(config: {
                align: string[];
            }): void;
            handleAnimateEnd(id: string): void;
            onEntering(): void;
            onLeaving(): void;
            onEntered(): void;
            onLeaved(): void;
            beforeOpen(): void;
            beforeClose(): void;
            setFocusNode(): void;
            getContent(): import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            getContentNode(): HTMLElement | null;
            getWrapperNode(): Element | null;
            addDocumentEvents(): void;
            removeDocumentEvents(): void;
            handleDocumentKeyDown(e: KeyboardEvent): void;
            isInShadowDOM(node: Element | Text): boolean;
            getEventPath(event: Event | {
                path: string;
            }): string | EventTarget[] | undefined;
            composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
            matchInShadowDOM(node: Element | Text, e: Event): boolean;
            handleDocumentClick(e: Event): void;
            handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
            saveContentRef: (ref: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            }) => void;
            saveGatewayRef: (ref: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null) => void;
            getInstance(): any;
            render(): import("react").JSX.Element;
            context: any;
            setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").OverlayState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
        } | null;
        saveRef(ref: {
            _mouseNotFirstOnMask: boolean;
            _isForwardContent: boolean | null;
            overlay: {
                lastAlign: string | boolean | undefined;
                timeoutMap: {
                    [key: string]: number;
                };
                _isMounted: boolean;
                _isDestroyed: boolean;
                focusTimeout: number;
                _animation: {
                    off: () => void;
                } | null;
                _containerNode: HTMLElement | undefined;
                _hasFocused: boolean;
                contentRef: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                gatewayRef: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null;
                _keydownEvents: {
                    off: () => void;
                } | null;
                _clickEvents: {
                    off: () => void;
                } | null;
                _touchEvents: {
                    off: () => void;
                } | null;
                overlay: any | null;
                componentDidMount(): void;
                componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
                componentWillUnmount(): void;
                doAnimation(open: boolean, close: boolean): void;
                getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
                getAnimationByAlign(align: string | boolean | string[] | undefined): {
                    in: string;
                    out: string;
                };
                addAnimationEvents(): void;
                handlePosition(config: {
                    align: string[];
                }): void;
                handleAnimateEnd(id: string): void;
                onEntering(): void;
                onLeaving(): void;
                onEntered(): void;
                onLeaved(): void;
                beforeOpen(): void;
                beforeClose(): void;
                setFocusNode(): void;
                getContent(): import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                getContentNode(): HTMLElement | null;
                getWrapperNode(): Element | null;
                addDocumentEvents(): void;
                removeDocumentEvents(): void;
                handleDocumentKeyDown(e: KeyboardEvent): void;
                isInShadowDOM(node: Element | Text): boolean;
                getEventPath(event: Event | {
                    path: string;
                }): string | EventTarget[] | undefined;
                composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                matchInShadowDOM(node: Element | Text, e: Event): boolean;
                handleDocumentClick(e: Event): void;
                handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (ref: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                }) => void;
                saveGatewayRef: (ref: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null) => void;
                getInstance(): any;
                render(): import("react").JSX.Element;
                context: any;
                setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").OverlayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            } | null;
            _timer: number | null;
            _hideTimer: number | null;
            _showTimer: number | null;
            componentWillUnmount(): void;
            handleVisibleChange(visible: boolean, type: string | object, e?: KeyboardEvent | MouseEvent | undefined): void;
            handleTriggerClick(e: KeyboardEvent | MouseEvent): void;
            handleTriggerKeyDown(e: KeyboardEvent): void;
            handleTriggerMouseEnter(e: MouseEvent): void;
            handleTriggerMouseLeave(e: MouseEvent, type: string | object): void;
            handleTriggerFocus(e: MouseEvent): void;
            handleTriggerBlur(e: MouseEvent): void;
            handleContentMouseDown(): void;
            handleContentMouseEnter(): void;
            handleContentMouseLeave(e: MouseEvent): void;
            handleMaskMouseEnter(): void;
            handleMaskMouseLeave(): void;
            handleRequestClose(type: string | object, e: MouseEvent): void;
            renderTrigger(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
            renderContent(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
            renderPortal(): import("react").JSX.Element;
            render(): (import("react").JSX.Element | undefined)[];
            context: any;
            setState<K_4 extends "visible">(state: import("../overlay/types").PopupState | ((prevState: Readonly<import("../overlay/types").PopupState>, props: Readonly<import("../overlay").PopupProps>) => import("../overlay/types").PopupState | Pick<import("../overlay/types").PopupState, K_4> | null) | Pick<import("../overlay/types").PopupState, K_4> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").PopupState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
        } | null): void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_5 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../overlay").PopupProps>) => {} | Pick<{}, K_5> | null) | Pick<{}, K_5> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, "overlay">): void;
    handleAfterOpen(): void;
    handleSelect(value: unknown, data: import("./types").CascaderSelectDataItem): void;
    refreshValueDataCache: (curValue: string | string[]) => void;
    handleChange(value: string[], data: import("./types").CascaderSelectDataItem[], extra: import("../cascader").Extra): void;
    handleClear(): void;
    handleRemove(currentData: import("./types").CascaderSelectDataItem): void;
    handleSearch(searchValue: string): void;
    getPath(pos: string): import("./types").CascaderSelectDataItem[];
    filterItems(): import("./types").CascaderSelectDataItem[][];
    renderNotFound(): import("react").JSX.Element;
    renderCascader(): import("react").JSX.Element;
    renderPopupContent(): import("react").JSX.Element;
    renderPreview(others: import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>): import("react").JSX.Element;
    render(): import("react").JSX.Element;
    context: any;
    setState<K_6 extends keyof import("./types").CascaderSelectState>(state: import("./types").CascaderSelectState | ((prevState: Readonly<import("./types").CascaderSelectState>, props: Readonly<import("./types").CascaderSelectProps>) => import("./types").CascaderSelectState | Pick<import("./types").CascaderSelectState, K_6> | null) | Pick<import("./types").CascaderSelectState, K_6> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    state: Readonly<import("./types").CascaderSelectState>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<import("./types").CascaderSelectProps>, nextState: Readonly<import("./types").CascaderSelectState>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").CascaderSelectProps>, prevState: Readonly<import("./types").CascaderSelectState>): any;
    componentDidUpdate?(prevProps: Readonly<import("./types").CascaderSelectProps>, prevState: Readonly<import("./types").CascaderSelectState>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<import("./types").CascaderSelectProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").CascaderSelectProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<import("./types").CascaderSelectProps>, nextState: Readonly<import("./types").CascaderSelectState>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").CascaderSelectProps>, nextState: Readonly<import("./types").CascaderSelectState>, nextContext: any): void;
}, Pick<{
    readonly props: import("./cascader-select").CascaderSelectPropsWithDefault;
    _valueDataCache: Record<string, import("./types").CascaderSelectDataItem>;
    _v2n: Record<string, import("./types").CascaderSelectDataItem>;
    _p2n: Record<string, import("./types").CascaderSelectDataItem>;
    select: import("../config-provider/types").ConfiguredComponent<import("../select").SelectProps & import("../config-provider/types").ComponentCommonProps, {
        selectAllYet: boolean;
        componentDidUpdate(prevProps: import("../select").SelectProps, prevState: import("../select/base").BaseState): void;
        componentDidMount(): void;
        ie9Hack(): void;
        useDetailValue(): boolean;
        hasSearch(): boolean;
        getTagSize(): "small" | "medium" | "large" | undefined;
        handleMenuSelect(keys: string[], item: {
            props: {
                _key: string;
            };
        }): false | void;
        handleItemClick(key: string): void;
        handleSingleSelect(key: string, triggerType: import("../select").VisibleChangeType): void;
        handleMultipleSelect(keys: import("../select").DataSourceItem[] | undefined, triggerType: import("../select").VisibleChangeType, key?: string | null | undefined, keepSearchValue?: boolean | undefined): void;
        updateSelectAllYet(value?: unknown): void;
        handleSearchValue(value: string): void;
        handleSearch(value: string, e: import("react").ChangeEvent<HTMLInputElement>): void;
        handleSearchClear(triggerType?: string | undefined): void;
        handleSearchKeyDown(e: import("react").KeyboardEvent<HTMLElement>): void;
        chooseMultipleItem(key: string): void;
        chooseHighlightItem(proxy: unknown, e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleTagClose(item: import("../select").ObjectItem): boolean;
        handleDeleteTag(e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleSelectAll(e: import("react").UIEvent<HTMLElement, UIEvent>): void;
        handleVisibleChange(visible: boolean, type: import("../select").VisibleChangeType): void;
        afterClose(): void;
        maxTagPlaceholder(selectedValues: import("../select").ObjectItem[], totalValues: import("../select").ObjectItem[]): string;
        renderValues(): import("react").ReactNode;
        handleWrapClick: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        handleArrowClick: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        handleClear: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        hasClear(): boolean | undefined;
        renderExtraNode(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        renderSelect(): import("react").JSX.Element;
        renderSearchInput(valueNodes: import("react").ReactNode, placeholder: string | undefined, inputEl: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>): import("react").JSX.Element;
        renderMenuHeader(): import("react").ReactNode;
        render(): import("react").JSX.Element;
        dataStore: import("../select/data-store").default;
        selectDOM: HTMLElement;
        width: string | number;
        popupRef: HTMLDivElement;
        resizeTimeout: number;
        highlightTimer: number | undefined;
        menuRef: import("../config-provider/types").ConfiguredComponent<import("../menu").MenuProps & import("../config-provider/types").ComponentCommonProps, import("../menu/view/menu").Menu> | null;
        isAutoComplete: boolean;
        inputRef: import("../input/input").default<import("../input").InputProps>;
        valueDataSource: {
            value?: string | number | boolean | (string | number | boolean | null | undefined)[] | null | undefined;
            valueDS?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined;
            mapValueDS?: Record<string, import("../select").ObjectItem> | undefined;
        };
        componentWillUnmount(): void;
        syncWidth(): void;
        handleResize(): void;
        setDataSource(props: import("../select").SelectProps): import("../select/types").NormalizedObjectItem[];
        setVisible(visible: boolean, type?: import("../select").VisibleChangeType | undefined): void;
        setFirstHightLightKeyForMenu(searchValue?: unknown): void;
        handleChange(value: import("../select").DataSourceItem | import("../select").DataSourceItem[], args_0: unknown, args_1?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined): void;
        handleMenuBodyClick(): void;
        toggleHighlightItem(dir: number): false | import("../select/types").NormalizedObjectItem | undefined;
        scrollMenuIntoView(): void;
        handleSelect(): void;
        handleMouseDown: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        renderMenu(): import("react").JSX.Element;
        renderMenuItem(dataSource: import("../select/types").NormalizedObjectItem[]): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        saveSelectRef: (ref: HTMLElement | null) => void;
        saveInputRef: (ref: import("../config-provider/types").ConfiguredComponent<import("../input").InputProps & import("../config-provider/types").ComponentCommonProps, import("../input/input").default<import("../input").InputProps>> & Pick<import("../input/input").default<import("../input").InputProps>, "focus" | "getInputNode">) => void;
        focusInput(): void;
        focus(start?: number | undefined, end?: number | undefined, preventScroll?: boolean): void;
        beforeOpen(): void;
        beforeClose(): void;
        savePopupRef: (ref: HTMLDivElement) => void;
        shouldAutoWidth(): boolean | undefined;
        context: any;
        setState<K extends keyof import("../select/select").SelectState>(state: import("../select/select").SelectState | ((prevState: Readonly<import("../select/select").SelectState>, props: Readonly<import("../select").SelectProps>) => import("../select/select").SelectState | Pick<import("../select/select").SelectState, K> | null) | Pick<import("../select/select").SelectState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../select").SelectProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../select/select").SelectState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../select").SelectProps>, prevState: Readonly<import("../select/select").SelectState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
    }> & Pick<{
        selectAllYet: boolean;
        componentDidUpdate(prevProps: import("../select").SelectProps, prevState: import("../select/base").BaseState): void;
        componentDidMount(): void;
        ie9Hack(): void;
        useDetailValue(): boolean;
        hasSearch(): boolean;
        getTagSize(): "small" | "medium" | "large" | undefined;
        handleMenuSelect(keys: string[], item: {
            props: {
                _key: string;
            };
        }): false | void;
        handleItemClick(key: string): void;
        handleSingleSelect(key: string, triggerType: import("../select").VisibleChangeType): void;
        handleMultipleSelect(keys: import("../select").DataSourceItem[] | undefined, triggerType: import("../select").VisibleChangeType, key?: string | null | undefined, keepSearchValue?: boolean | undefined): void;
        updateSelectAllYet(value?: unknown): void;
        handleSearchValue(value: string): void;
        handleSearch(value: string, e: import("react").ChangeEvent<HTMLInputElement>): void;
        handleSearchClear(triggerType?: string | undefined): void;
        handleSearchKeyDown(e: import("react").KeyboardEvent<HTMLElement>): void;
        chooseMultipleItem(key: string): void;
        chooseHighlightItem(proxy: unknown, e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleTagClose(item: import("../select").ObjectItem): boolean;
        handleDeleteTag(e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleSelectAll(e: import("react").UIEvent<HTMLElement, UIEvent>): void;
        handleVisibleChange(visible: boolean, type: import("../select").VisibleChangeType): void;
        afterClose(): void;
        maxTagPlaceholder(selectedValues: import("../select").ObjectItem[], totalValues: import("../select").ObjectItem[]): string;
        renderValues(): import("react").ReactNode;
        handleWrapClick: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        handleArrowClick: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        handleClear: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        hasClear(): boolean | undefined;
        renderExtraNode(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        renderSelect(): import("react").JSX.Element;
        renderSearchInput(valueNodes: import("react").ReactNode, placeholder: string | undefined, inputEl: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>): import("react").JSX.Element;
        renderMenuHeader(): import("react").ReactNode;
        render(): import("react").JSX.Element;
        dataStore: import("../select/data-store").default;
        selectDOM: HTMLElement;
        width: string | number;
        popupRef: HTMLDivElement;
        resizeTimeout: number;
        highlightTimer: number | undefined;
        menuRef: import("../config-provider/types").ConfiguredComponent<import("../menu").MenuProps & import("../config-provider/types").ComponentCommonProps, import("../menu/view/menu").Menu> | null;
        isAutoComplete: boolean;
        inputRef: import("../input/input").default<import("../input").InputProps>;
        valueDataSource: {
            value?: string | number | boolean | (string | number | boolean | null | undefined)[] | null | undefined;
            valueDS?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined;
            mapValueDS?: Record<string, import("../select").ObjectItem> | undefined;
        };
        componentWillUnmount(): void;
        syncWidth(): void;
        handleResize(): void;
        setDataSource(props: import("../select").SelectProps): import("../select/types").NormalizedObjectItem[];
        setVisible(visible: boolean, type?: import("../select").VisibleChangeType | undefined): void;
        setFirstHightLightKeyForMenu(searchValue?: unknown): void;
        handleChange(value: import("../select").DataSourceItem | import("../select").DataSourceItem[], args_0: unknown, args_1?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined): void;
        handleMenuBodyClick(): void;
        toggleHighlightItem(dir: number): false | import("../select/types").NormalizedObjectItem | undefined;
        scrollMenuIntoView(): void;
        handleSelect(): void;
        handleMouseDown: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        renderMenu(): import("react").JSX.Element;
        renderMenuItem(dataSource: import("../select/types").NormalizedObjectItem[]): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        saveSelectRef: (ref: HTMLElement | null) => void;
        saveInputRef: (ref: import("../config-provider/types").ConfiguredComponent<import("../input").InputProps & import("../config-provider/types").ComponentCommonProps, import("../input/input").default<import("../input").InputProps>> & Pick<import("../input/input").default<import("../input").InputProps>, "focus" | "getInputNode">) => void;
        focusInput(): void;
        focus(start?: number | undefined, end?: number | undefined, preventScroll?: boolean): void;
        beforeOpen(): void;
        beforeClose(): void;
        savePopupRef: (ref: HTMLDivElement) => void;
        shouldAutoWidth(): boolean | undefined;
        context: any;
        setState<K extends keyof import("../select/select").SelectState>(state: import("../select/select").SelectState | ((prevState: Readonly<import("../select/select").SelectState>, props: Readonly<import("../select").SelectProps>) => import("../select/select").SelectState | Pick<import("../select/select").SelectState, K> | null) | Pick<import("../select/select").SelectState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../select").SelectProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../select/select").SelectState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../select").SelectProps>, prevState: Readonly<import("../select/select").SelectState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
    }, "focusInput" | "handleSearchClear">;
    cascader: import("../config-provider/types").ConfiguredComponent<import("../cascader").CascaderProps & import("../config-provider/types").ComponentCommonProps, {
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
        getData(value: string[]): import("../cascader").CascaderDataItemWithPosInfo[];
        processValue(value: string[], v: string, checked: boolean): void;
        handleSelect(v: string, canExpand: boolean): void;
        handleCheck(v: string, checked: boolean): void;
        handleExpand(value: string, level: number, canExpand: boolean, focusedFirstChild: boolean): void | Promise<void>;
        handleMouseLeave(): void;
        setExpandValue(expandedValue: string[], isExpandedValueSetByAction?: boolean): void;
        getFirstFocusKeyByDataSource(dataSource: import("../cascader").CascaderDataItem[]): string;
        getFirstFocusKeyByFilteredPaths(filteredPaths: import("../cascader").CascaderDataItemWithPosInfo[][] | undefined): string;
        getFirstFocusKey(): string;
        setFocusValue(): void;
        handleFocus(focusedValue: string): void;
        handleFold(): void;
        getIndeterminate(value: string[]): string[];
        onBlur(e: import("react").FocusEvent<HTMLElement, Element>): void;
        renderMenu(data: import("../cascader").CascaderDataItem[] | undefined, level: number): import("react").JSX.Element;
        renderMenus(): import("react").JSX.Element[];
        renderFilteredItem(path: import("../cascader").CascaderDataItemWithPosInfo[]): import("react").JSX.Element;
        renderFilteredList(): import("react").JSX.Element;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends keyof import("../cascader/types").CascaderState>(state: import("../cascader/types").CascaderState | ((prevState: Readonly<import("../cascader/types").CascaderState>, props: Readonly<import("../cascader").CascaderProps>) => import("../cascader/types").CascaderState | Pick<import("../cascader/types").CascaderState, K_1> | null) | Pick<import("../cascader/types").CascaderState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../cascader").CascaderProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../cascader/types").CascaderState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../cascader").CascaderProps>, prevState: Readonly<import("../cascader/types").CascaderState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
    }> & Pick<{
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
        getData(value: string[]): import("../cascader").CascaderDataItemWithPosInfo[];
        processValue(value: string[], v: string, checked: boolean): void;
        handleSelect(v: string, canExpand: boolean): void;
        handleCheck(v: string, checked: boolean): void;
        handleExpand(value: string, level: number, canExpand: boolean, focusedFirstChild: boolean): void | Promise<void>;
        handleMouseLeave(): void;
        setExpandValue(expandedValue: string[], isExpandedValueSetByAction?: boolean): void;
        getFirstFocusKeyByDataSource(dataSource: import("../cascader").CascaderDataItem[]): string;
        getFirstFocusKeyByFilteredPaths(filteredPaths: import("../cascader").CascaderDataItemWithPosInfo[][] | undefined): string;
        getFirstFocusKey(): string;
        setFocusValue(): void;
        handleFocus(focusedValue: string): void;
        handleFold(): void;
        getIndeterminate(value: string[]): string[];
        onBlur(e: import("react").FocusEvent<HTMLElement, Element>): void;
        renderMenu(data: import("../cascader").CascaderDataItem[] | undefined, level: number): import("react").JSX.Element;
        renderMenus(): import("react").JSX.Element[];
        renderFilteredItem(path: import("../cascader").CascaderDataItemWithPosInfo[]): import("react").JSX.Element;
        renderFilteredList(): import("react").JSX.Element;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends keyof import("../cascader/types").CascaderState>(state: import("../cascader/types").CascaderState | ((prevState: Readonly<import("../cascader/types").CascaderState>, props: Readonly<import("../cascader").CascaderProps>) => import("../cascader/types").CascaderState | Pick<import("../cascader/types").CascaderState, K_1> | null) | Pick<import("../cascader/types").CascaderState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../cascader").CascaderProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../cascader/types").CascaderState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../cascader").CascaderProps>, prevState: Readonly<import("../cascader/types").CascaderState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
    }, "setFocusValue">;
    popup: import("../config-provider/types").ConfiguredComponent<import("../overlay").PopupProps & import("../config-provider/types").ComponentCommonProps, {
        overlay: {
            lastAlign: string | boolean | undefined;
            timeoutMap: {
                [key: string]: number;
            };
            _isMounted: boolean;
            _isDestroyed: boolean;
            focusTimeout: number;
            _animation: {
                off: () => void;
            } | null;
            _containerNode: HTMLElement | undefined;
            _hasFocused: boolean;
            contentRef: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            gatewayRef: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null;
            _keydownEvents: {
                off: () => void;
            } | null;
            _clickEvents: {
                off: () => void;
            } | null;
            _touchEvents: {
                off: () => void;
            } | null;
            overlay: any | null;
            componentDidMount(): void;
            componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
            componentWillUnmount(): void;
            doAnimation(open: boolean, close: boolean): void;
            getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
            getAnimationByAlign(align: string | boolean | string[] | undefined): {
                in: string;
                out: string;
            };
            addAnimationEvents(): void;
            handlePosition(config: {
                align: string[];
            }): void;
            handleAnimateEnd(id: string): void;
            onEntering(): void;
            onLeaving(): void;
            onEntered(): void;
            onLeaved(): void;
            beforeOpen(): void;
            beforeClose(): void;
            setFocusNode(): void;
            getContent(): import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            getContentNode(): HTMLElement | null;
            getWrapperNode(): Element | null;
            addDocumentEvents(): void;
            removeDocumentEvents(): void;
            handleDocumentKeyDown(e: KeyboardEvent): void;
            isInShadowDOM(node: Element | Text): boolean;
            getEventPath(event: Event | {
                path: string;
            }): string | EventTarget[] | undefined;
            composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
            matchInShadowDOM(node: Element | Text, e: Event): boolean;
            handleDocumentClick(e: Event): void;
            handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
            saveContentRef: (ref: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            }) => void;
            saveGatewayRef: (ref: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null) => void;
            getInstance(): any;
            render(): import("react").JSX.Element;
            context: any;
            setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").OverlayState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
        } | null;
        saveRef(ref: {
            _mouseNotFirstOnMask: boolean;
            _isForwardContent: boolean | null;
            overlay: {
                lastAlign: string | boolean | undefined;
                timeoutMap: {
                    [key: string]: number;
                };
                _isMounted: boolean;
                _isDestroyed: boolean;
                focusTimeout: number;
                _animation: {
                    off: () => void;
                } | null;
                _containerNode: HTMLElement | undefined;
                _hasFocused: boolean;
                contentRef: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                gatewayRef: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null;
                _keydownEvents: {
                    off: () => void;
                } | null;
                _clickEvents: {
                    off: () => void;
                } | null;
                _touchEvents: {
                    off: () => void;
                } | null;
                overlay: any | null;
                componentDidMount(): void;
                componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
                componentWillUnmount(): void;
                doAnimation(open: boolean, close: boolean): void;
                getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
                getAnimationByAlign(align: string | boolean | string[] | undefined): {
                    in: string;
                    out: string;
                };
                addAnimationEvents(): void;
                handlePosition(config: {
                    align: string[];
                }): void;
                handleAnimateEnd(id: string): void;
                onEntering(): void;
                onLeaving(): void;
                onEntered(): void;
                onLeaved(): void;
                beforeOpen(): void;
                beforeClose(): void;
                setFocusNode(): void;
                getContent(): import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                getContentNode(): HTMLElement | null;
                getWrapperNode(): Element | null;
                addDocumentEvents(): void;
                removeDocumentEvents(): void;
                handleDocumentKeyDown(e: KeyboardEvent): void;
                isInShadowDOM(node: Element | Text): boolean;
                getEventPath(event: Event | {
                    path: string;
                }): string | EventTarget[] | undefined;
                composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                matchInShadowDOM(node: Element | Text, e: Event): boolean;
                handleDocumentClick(e: Event): void;
                handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (ref: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                }) => void;
                saveGatewayRef: (ref: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null) => void;
                getInstance(): any;
                render(): import("react").JSX.Element;
                context: any;
                setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").OverlayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            } | null;
            _timer: number | null;
            _hideTimer: number | null;
            _showTimer: number | null;
            componentWillUnmount(): void;
            handleVisibleChange(visible: boolean, type: string | object, e?: KeyboardEvent | MouseEvent | undefined): void;
            handleTriggerClick(e: KeyboardEvent | MouseEvent): void;
            handleTriggerKeyDown(e: KeyboardEvent): void;
            handleTriggerMouseEnter(e: MouseEvent): void;
            handleTriggerMouseLeave(e: MouseEvent, type: string | object): void;
            handleTriggerFocus(e: MouseEvent): void;
            handleTriggerBlur(e: MouseEvent): void;
            handleContentMouseDown(): void;
            handleContentMouseEnter(): void;
            handleContentMouseLeave(e: MouseEvent): void;
            handleMaskMouseEnter(): void;
            handleMaskMouseLeave(): void;
            handleRequestClose(type: string | object, e: MouseEvent): void;
            renderTrigger(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
            renderContent(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
            renderPortal(): import("react").JSX.Element;
            render(): (import("react").JSX.Element | undefined)[];
            context: any;
            setState<K_4 extends "visible">(state: import("../overlay/types").PopupState | ((prevState: Readonly<import("../overlay/types").PopupState>, props: Readonly<import("../overlay").PopupProps>) => import("../overlay/types").PopupState | Pick<import("../overlay/types").PopupState, K_4> | null) | Pick<import("../overlay/types").PopupState, K_4> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").PopupState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
        } | null): void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_5 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../overlay").PopupProps>) => {} | Pick<{}, K_5> | null) | Pick<{}, K_5> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
    }> & Pick<{
        overlay: {
            lastAlign: string | boolean | undefined;
            timeoutMap: {
                [key: string]: number;
            };
            _isMounted: boolean;
            _isDestroyed: boolean;
            focusTimeout: number;
            _animation: {
                off: () => void;
            } | null;
            _containerNode: HTMLElement | undefined;
            _hasFocused: boolean;
            contentRef: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            gatewayRef: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null;
            _keydownEvents: {
                off: () => void;
            } | null;
            _clickEvents: {
                off: () => void;
            } | null;
            _touchEvents: {
                off: () => void;
            } | null;
            overlay: any | null;
            componentDidMount(): void;
            componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
            componentWillUnmount(): void;
            doAnimation(open: boolean, close: boolean): void;
            getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
            getAnimationByAlign(align: string | boolean | string[] | undefined): {
                in: string;
                out: string;
            };
            addAnimationEvents(): void;
            handlePosition(config: {
                align: string[];
            }): void;
            handleAnimateEnd(id: string): void;
            onEntering(): void;
            onLeaving(): void;
            onEntered(): void;
            onLeaved(): void;
            beforeOpen(): void;
            beforeClose(): void;
            setFocusNode(): void;
            getContent(): import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            getContentNode(): HTMLElement | null;
            getWrapperNode(): Element | null;
            addDocumentEvents(): void;
            removeDocumentEvents(): void;
            handleDocumentKeyDown(e: KeyboardEvent): void;
            isInShadowDOM(node: Element | Text): boolean;
            getEventPath(event: Event | {
                path: string;
            }): string | EventTarget[] | undefined;
            composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
            matchInShadowDOM(node: Element | Text, e: Event): boolean;
            handleDocumentClick(e: Event): void;
            handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
            saveContentRef: (ref: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            }) => void;
            saveGatewayRef: (ref: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null) => void;
            getInstance(): any;
            render(): import("react").JSX.Element;
            context: any;
            setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").OverlayState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
        } | null;
        saveRef(ref: {
            _mouseNotFirstOnMask: boolean;
            _isForwardContent: boolean | null;
            overlay: {
                lastAlign: string | boolean | undefined;
                timeoutMap: {
                    [key: string]: number;
                };
                _isMounted: boolean;
                _isDestroyed: boolean;
                focusTimeout: number;
                _animation: {
                    off: () => void;
                } | null;
                _containerNode: HTMLElement | undefined;
                _hasFocused: boolean;
                contentRef: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                gatewayRef: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null;
                _keydownEvents: {
                    off: () => void;
                } | null;
                _clickEvents: {
                    off: () => void;
                } | null;
                _touchEvents: {
                    off: () => void;
                } | null;
                overlay: any | null;
                componentDidMount(): void;
                componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
                componentWillUnmount(): void;
                doAnimation(open: boolean, close: boolean): void;
                getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
                getAnimationByAlign(align: string | boolean | string[] | undefined): {
                    in: string;
                    out: string;
                };
                addAnimationEvents(): void;
                handlePosition(config: {
                    align: string[];
                }): void;
                handleAnimateEnd(id: string): void;
                onEntering(): void;
                onLeaving(): void;
                onEntered(): void;
                onLeaved(): void;
                beforeOpen(): void;
                beforeClose(): void;
                setFocusNode(): void;
                getContent(): import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                getContentNode(): HTMLElement | null;
                getWrapperNode(): Element | null;
                addDocumentEvents(): void;
                removeDocumentEvents(): void;
                handleDocumentKeyDown(e: KeyboardEvent): void;
                isInShadowDOM(node: Element | Text): boolean;
                getEventPath(event: Event | {
                    path: string;
                }): string | EventTarget[] | undefined;
                composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                matchInShadowDOM(node: Element | Text, e: Event): boolean;
                handleDocumentClick(e: Event): void;
                handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (ref: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                }) => void;
                saveGatewayRef: (ref: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null) => void;
                getInstance(): any;
                render(): import("react").JSX.Element;
                context: any;
                setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").OverlayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            } | null;
            _timer: number | null;
            _hideTimer: number | null;
            _showTimer: number | null;
            componentWillUnmount(): void;
            handleVisibleChange(visible: boolean, type: string | object, e?: KeyboardEvent | MouseEvent | undefined): void;
            handleTriggerClick(e: KeyboardEvent | MouseEvent): void;
            handleTriggerKeyDown(e: KeyboardEvent): void;
            handleTriggerMouseEnter(e: MouseEvent): void;
            handleTriggerMouseLeave(e: MouseEvent, type: string | object): void;
            handleTriggerFocus(e: MouseEvent): void;
            handleTriggerBlur(e: MouseEvent): void;
            handleContentMouseDown(): void;
            handleContentMouseEnter(): void;
            handleContentMouseLeave(e: MouseEvent): void;
            handleMaskMouseEnter(): void;
            handleMaskMouseLeave(): void;
            handleRequestClose(type: string | object, e: MouseEvent): void;
            renderTrigger(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
            renderContent(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
            renderPortal(): import("react").JSX.Element;
            render(): (import("react").JSX.Element | undefined)[];
            context: any;
            setState<K_4 extends "visible">(state: import("../overlay/types").PopupState | ((prevState: Readonly<import("../overlay/types").PopupState>, props: Readonly<import("../overlay").PopupProps>) => import("../overlay/types").PopupState | Pick<import("../overlay/types").PopupState, K_4> | null) | Pick<import("../overlay/types").PopupState, K_4> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").PopupState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
        } | null): void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_5 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../overlay").PopupProps>) => {} | Pick<{}, K_5> | null) | Pick<{}, K_5> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, "overlay">;
    cascaderHeight: string | number;
    focus(): void;
    updateCache(dataSource: import("../cascader").CascaderDataItem[]): void;
    flatValue(value: string[]): string[];
    isDescendantOrSelf(currentPos: string | null | undefined, targetPos: string | null | undefined): boolean;
    getValue(pos: string): string | null;
    getPos(value: string): string | null;
    getData(value: string[]): import("./types").CascaderSelectDataItem[];
    getLabelPath(data: import("./types").CascaderSelectDataItem): import("react").ReactNode[];
    getSingleData(value: string | string[]): import("./types").CascaderSelectDataItem | null;
    getMultipleData(value: string[]): import("./types").CascaderSelectDataItem[] | null;
    getIndeterminate(value: string[]): string[];
    saveSelectRef(ref: import("../config-provider/types").ConfiguredComponent<import("../select").SelectProps & import("../config-provider/types").ComponentCommonProps, {
        selectAllYet: boolean;
        componentDidUpdate(prevProps: import("../select").SelectProps, prevState: import("../select/base").BaseState): void;
        componentDidMount(): void;
        ie9Hack(): void;
        useDetailValue(): boolean;
        hasSearch(): boolean;
        getTagSize(): "small" | "medium" | "large" | undefined;
        handleMenuSelect(keys: string[], item: {
            props: {
                _key: string;
            };
        }): false | void;
        handleItemClick(key: string): void;
        handleSingleSelect(key: string, triggerType: import("../select").VisibleChangeType): void;
        handleMultipleSelect(keys: import("../select").DataSourceItem[] | undefined, triggerType: import("../select").VisibleChangeType, key?: string | null | undefined, keepSearchValue?: boolean | undefined): void;
        updateSelectAllYet(value?: unknown): void;
        handleSearchValue(value: string): void;
        handleSearch(value: string, e: import("react").ChangeEvent<HTMLInputElement>): void;
        handleSearchClear(triggerType?: string | undefined): void;
        handleSearchKeyDown(e: import("react").KeyboardEvent<HTMLElement>): void;
        chooseMultipleItem(key: string): void;
        chooseHighlightItem(proxy: unknown, e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleTagClose(item: import("../select").ObjectItem): boolean;
        handleDeleteTag(e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleSelectAll(e: import("react").UIEvent<HTMLElement, UIEvent>): void;
        handleVisibleChange(visible: boolean, type: import("../select").VisibleChangeType): void;
        afterClose(): void;
        maxTagPlaceholder(selectedValues: import("../select").ObjectItem[], totalValues: import("../select").ObjectItem[]): string;
        renderValues(): import("react").ReactNode;
        handleWrapClick: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        handleArrowClick: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        handleClear: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        hasClear(): boolean | undefined;
        renderExtraNode(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        renderSelect(): import("react").JSX.Element;
        renderSearchInput(valueNodes: import("react").ReactNode, placeholder: string | undefined, inputEl: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>): import("react").JSX.Element;
        renderMenuHeader(): import("react").ReactNode;
        render(): import("react").JSX.Element;
        dataStore: import("../select/data-store").default;
        selectDOM: HTMLElement;
        width: string | number;
        popupRef: HTMLDivElement;
        resizeTimeout: number;
        highlightTimer: number | undefined;
        menuRef: import("../config-provider/types").ConfiguredComponent<import("../menu").MenuProps & import("../config-provider/types").ComponentCommonProps, import("../menu/view/menu").Menu> | null;
        isAutoComplete: boolean;
        inputRef: import("../input/input").default<import("../input").InputProps>;
        valueDataSource: {
            value?: string | number | boolean | (string | number | boolean | null | undefined)[] | null | undefined;
            valueDS?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined;
            mapValueDS?: Record<string, import("../select").ObjectItem> | undefined;
        };
        componentWillUnmount(): void;
        syncWidth(): void;
        handleResize(): void;
        setDataSource(props: import("../select").SelectProps): import("../select/types").NormalizedObjectItem[];
        setVisible(visible: boolean, type?: import("../select").VisibleChangeType | undefined): void;
        setFirstHightLightKeyForMenu(searchValue?: unknown): void;
        handleChange(value: import("../select").DataSourceItem | import("../select").DataSourceItem[], args_0: unknown, args_1?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined): void;
        handleMenuBodyClick(): void;
        toggleHighlightItem(dir: number): false | import("../select/types").NormalizedObjectItem | undefined;
        scrollMenuIntoView(): void;
        handleSelect(): void;
        handleMouseDown: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        renderMenu(): import("react").JSX.Element;
        renderMenuItem(dataSource: import("../select/types").NormalizedObjectItem[]): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        saveSelectRef: (ref: HTMLElement | null) => void;
        saveInputRef: (ref: import("../config-provider/types").ConfiguredComponent<import("../input").InputProps & import("../config-provider/types").ComponentCommonProps, import("../input/input").default<import("../input").InputProps>> & Pick<import("../input/input").default<import("../input").InputProps>, "focus" | "getInputNode">) => void;
        focusInput(): void;
        focus(start?: number | undefined, end?: number | undefined, preventScroll?: boolean): void;
        beforeOpen(): void;
        beforeClose(): void;
        savePopupRef: (ref: HTMLDivElement) => void;
        shouldAutoWidth(): boolean | undefined;
        context: any;
        setState<K extends keyof import("../select/select").SelectState>(state: import("../select/select").SelectState | ((prevState: Readonly<import("../select/select").SelectState>, props: Readonly<import("../select").SelectProps>) => import("../select/select").SelectState | Pick<import("../select/select").SelectState, K> | null) | Pick<import("../select/select").SelectState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../select").SelectProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../select/select").SelectState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../select").SelectProps>, prevState: Readonly<import("../select/select").SelectState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
    }> & Pick<{
        selectAllYet: boolean;
        componentDidUpdate(prevProps: import("../select").SelectProps, prevState: import("../select/base").BaseState): void;
        componentDidMount(): void;
        ie9Hack(): void;
        useDetailValue(): boolean;
        hasSearch(): boolean;
        getTagSize(): "small" | "medium" | "large" | undefined;
        handleMenuSelect(keys: string[], item: {
            props: {
                _key: string;
            };
        }): false | void;
        handleItemClick(key: string): void;
        handleSingleSelect(key: string, triggerType: import("../select").VisibleChangeType): void;
        handleMultipleSelect(keys: import("../select").DataSourceItem[] | undefined, triggerType: import("../select").VisibleChangeType, key?: string | null | undefined, keepSearchValue?: boolean | undefined): void;
        updateSelectAllYet(value?: unknown): void;
        handleSearchValue(value: string): void;
        handleSearch(value: string, e: import("react").ChangeEvent<HTMLInputElement>): void;
        handleSearchClear(triggerType?: string | undefined): void;
        handleSearchKeyDown(e: import("react").KeyboardEvent<HTMLElement>): void;
        chooseMultipleItem(key: string): void;
        chooseHighlightItem(proxy: unknown, e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleTagClose(item: import("../select").ObjectItem): boolean;
        handleDeleteTag(e: import("react").UIEvent<HTMLElement, UIEvent>): false | undefined;
        handleSelectAll(e: import("react").UIEvent<HTMLElement, UIEvent>): void;
        handleVisibleChange(visible: boolean, type: import("../select").VisibleChangeType): void;
        afterClose(): void;
        maxTagPlaceholder(selectedValues: import("../select").ObjectItem[], totalValues: import("../select").ObjectItem[]): string;
        renderValues(): import("react").ReactNode;
        handleWrapClick: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        handleArrowClick: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        handleClear: (e: import("react").UIEvent<HTMLElement, UIEvent>) => void;
        hasClear(): boolean | undefined;
        renderExtraNode(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        renderSelect(): import("react").JSX.Element;
        renderSearchInput(valueNodes: import("react").ReactNode, placeholder: string | undefined, inputEl: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>): import("react").JSX.Element;
        renderMenuHeader(): import("react").ReactNode;
        render(): import("react").JSX.Element;
        dataStore: import("../select/data-store").default;
        selectDOM: HTMLElement;
        width: string | number;
        popupRef: HTMLDivElement;
        resizeTimeout: number;
        highlightTimer: number | undefined;
        menuRef: import("../config-provider/types").ConfiguredComponent<import("../menu").MenuProps & import("../config-provider/types").ComponentCommonProps, import("../menu/view/menu").Menu> | null;
        isAutoComplete: boolean;
        inputRef: import("../input/input").default<import("../input").InputProps>;
        valueDataSource: {
            value?: string | number | boolean | (string | number | boolean | null | undefined)[] | null | undefined;
            valueDS?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined;
            mapValueDS?: Record<string, import("../select").ObjectItem> | undefined;
        };
        componentWillUnmount(): void;
        syncWidth(): void;
        handleResize(): void;
        setDataSource(props: import("../select").SelectProps): import("../select/types").NormalizedObjectItem[];
        setVisible(visible: boolean, type?: import("../select").VisibleChangeType | undefined): void;
        setFirstHightLightKeyForMenu(searchValue?: unknown): void;
        handleChange(value: import("../select").DataSourceItem | import("../select").DataSourceItem[], args_0: unknown, args_1?: import("../select").ObjectItem | import("../select").ObjectItem[] | undefined): void;
        handleMenuBodyClick(): void;
        toggleHighlightItem(dir: number): false | import("../select/types").NormalizedObjectItem | undefined;
        scrollMenuIntoView(): void;
        handleSelect(): void;
        handleMouseDown: (e: import("react").MouseEvent<HTMLElement, MouseEvent>) => void;
        renderMenu(): import("react").JSX.Element;
        renderMenuItem(dataSource: import("../select/types").NormalizedObjectItem[]): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
        saveSelectRef: (ref: HTMLElement | null) => void;
        saveInputRef: (ref: import("../config-provider/types").ConfiguredComponent<import("../input").InputProps & import("../config-provider/types").ComponentCommonProps, import("../input/input").default<import("../input").InputProps>> & Pick<import("../input/input").default<import("../input").InputProps>, "focus" | "getInputNode">) => void;
        focusInput(): void;
        focus(start?: number | undefined, end?: number | undefined, preventScroll?: boolean): void;
        beforeOpen(): void;
        beforeClose(): void;
        savePopupRef: (ref: HTMLDivElement) => void;
        shouldAutoWidth(): boolean | undefined;
        context: any;
        setState<K extends keyof import("../select/select").SelectState>(state: import("../select/select").SelectState | ((prevState: Readonly<import("../select/select").SelectState>, props: Readonly<import("../select").SelectProps>) => import("../select/select").SelectState | Pick<import("../select/select").SelectState, K> | null) | Pick<import("../select/select").SelectState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../select").SelectProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../select/select").SelectState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../select").SelectProps>, prevState: Readonly<import("../select/select").SelectState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../select").SelectProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../select").SelectProps>, nextState: Readonly<import("../select/select").SelectState>, nextContext: any): void;
    }, "focusInput" | "handleSearchClear">): void;
    saveCascaderRef(ref: import("../config-provider/types").ConfiguredComponent<import("../cascader").CascaderProps & import("../config-provider/types").ComponentCommonProps, {
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
        getData(value: string[]): import("../cascader").CascaderDataItemWithPosInfo[];
        processValue(value: string[], v: string, checked: boolean): void;
        handleSelect(v: string, canExpand: boolean): void;
        handleCheck(v: string, checked: boolean): void;
        handleExpand(value: string, level: number, canExpand: boolean, focusedFirstChild: boolean): void | Promise<void>;
        handleMouseLeave(): void;
        setExpandValue(expandedValue: string[], isExpandedValueSetByAction?: boolean): void;
        getFirstFocusKeyByDataSource(dataSource: import("../cascader").CascaderDataItem[]): string;
        getFirstFocusKeyByFilteredPaths(filteredPaths: import("../cascader").CascaderDataItemWithPosInfo[][] | undefined): string;
        getFirstFocusKey(): string;
        setFocusValue(): void;
        handleFocus(focusedValue: string): void;
        handleFold(): void;
        getIndeterminate(value: string[]): string[];
        onBlur(e: import("react").FocusEvent<HTMLElement, Element>): void;
        renderMenu(data: import("../cascader").CascaderDataItem[] | undefined, level: number): import("react").JSX.Element;
        renderMenus(): import("react").JSX.Element[];
        renderFilteredItem(path: import("../cascader").CascaderDataItemWithPosInfo[]): import("react").JSX.Element;
        renderFilteredList(): import("react").JSX.Element;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends keyof import("../cascader/types").CascaderState>(state: import("../cascader/types").CascaderState | ((prevState: Readonly<import("../cascader/types").CascaderState>, props: Readonly<import("../cascader").CascaderProps>) => import("../cascader/types").CascaderState | Pick<import("../cascader/types").CascaderState, K_1> | null) | Pick<import("../cascader/types").CascaderState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../cascader").CascaderProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../cascader/types").CascaderState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../cascader").CascaderProps>, prevState: Readonly<import("../cascader/types").CascaderState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
    }> & Pick<{
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
        getData(value: string[]): import("../cascader").CascaderDataItemWithPosInfo[];
        processValue(value: string[], v: string, checked: boolean): void;
        handleSelect(v: string, canExpand: boolean): void;
        handleCheck(v: string, checked: boolean): void;
        handleExpand(value: string, level: number, canExpand: boolean, focusedFirstChild: boolean): void | Promise<void>;
        handleMouseLeave(): void;
        setExpandValue(expandedValue: string[], isExpandedValueSetByAction?: boolean): void;
        getFirstFocusKeyByDataSource(dataSource: import("../cascader").CascaderDataItem[]): string;
        getFirstFocusKeyByFilteredPaths(filteredPaths: import("../cascader").CascaderDataItemWithPosInfo[][] | undefined): string;
        getFirstFocusKey(): string;
        setFocusValue(): void;
        handleFocus(focusedValue: string): void;
        handleFold(): void;
        getIndeterminate(value: string[]): string[];
        onBlur(e: import("react").FocusEvent<HTMLElement, Element>): void;
        renderMenu(data: import("../cascader").CascaderDataItem[] | undefined, level: number): import("react").JSX.Element;
        renderMenus(): import("react").JSX.Element[];
        renderFilteredItem(path: import("../cascader").CascaderDataItemWithPosInfo[]): import("react").JSX.Element;
        renderFilteredList(): import("react").JSX.Element;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_1 extends keyof import("../cascader/types").CascaderState>(state: import("../cascader/types").CascaderState | ((prevState: Readonly<import("../cascader/types").CascaderState>, props: Readonly<import("../cascader").CascaderProps>) => import("../cascader/types").CascaderState | Pick<import("../cascader/types").CascaderState, K_1> | null) | Pick<import("../cascader/types").CascaderState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../cascader").CascaderProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<import("../cascader/types").CascaderState>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../cascader").CascaderProps>, prevState: Readonly<import("../cascader/types").CascaderState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../cascader").CascaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../cascader").CascaderProps>, nextState: Readonly<import("../cascader/types").CascaderState>, nextContext: any): void;
    }, "setFocusValue">): void;
    completeValue(value: string[]): string[];
    isLeaf(data: import("./types").CascaderSelectDataItem): boolean;
    handleVisibleChange(visible: boolean, type?: import("./types").CascaderSelectVisibleChangeType | undefined): void;
    handleKeyDown(e: import("react").KeyboardEvent<HTMLElement>): void;
    getPopup(ref: import("../config-provider/types").ConfiguredComponent<import("../overlay").PopupProps & import("../config-provider/types").ComponentCommonProps, {
        overlay: {
            lastAlign: string | boolean | undefined;
            timeoutMap: {
                [key: string]: number;
            };
            _isMounted: boolean;
            _isDestroyed: boolean;
            focusTimeout: number;
            _animation: {
                off: () => void;
            } | null;
            _containerNode: HTMLElement | undefined;
            _hasFocused: boolean;
            contentRef: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            gatewayRef: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null;
            _keydownEvents: {
                off: () => void;
            } | null;
            _clickEvents: {
                off: () => void;
            } | null;
            _touchEvents: {
                off: () => void;
            } | null;
            overlay: any | null;
            componentDidMount(): void;
            componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
            componentWillUnmount(): void;
            doAnimation(open: boolean, close: boolean): void;
            getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
            getAnimationByAlign(align: string | boolean | string[] | undefined): {
                in: string;
                out: string;
            };
            addAnimationEvents(): void;
            handlePosition(config: {
                align: string[];
            }): void;
            handleAnimateEnd(id: string): void;
            onEntering(): void;
            onLeaving(): void;
            onEntered(): void;
            onLeaved(): void;
            beforeOpen(): void;
            beforeClose(): void;
            setFocusNode(): void;
            getContent(): import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            getContentNode(): HTMLElement | null;
            getWrapperNode(): Element | null;
            addDocumentEvents(): void;
            removeDocumentEvents(): void;
            handleDocumentKeyDown(e: KeyboardEvent): void;
            isInShadowDOM(node: Element | Text): boolean;
            getEventPath(event: Event | {
                path: string;
            }): string | EventTarget[] | undefined;
            composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
            matchInShadowDOM(node: Element | Text, e: Event): boolean;
            handleDocumentClick(e: Event): void;
            handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
            saveContentRef: (ref: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            }) => void;
            saveGatewayRef: (ref: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null) => void;
            getInstance(): any;
            render(): import("react").JSX.Element;
            context: any;
            setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").OverlayState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
        } | null;
        saveRef(ref: {
            _mouseNotFirstOnMask: boolean;
            _isForwardContent: boolean | null;
            overlay: {
                lastAlign: string | boolean | undefined;
                timeoutMap: {
                    [key: string]: number;
                };
                _isMounted: boolean;
                _isDestroyed: boolean;
                focusTimeout: number;
                _animation: {
                    off: () => void;
                } | null;
                _containerNode: HTMLElement | undefined;
                _hasFocused: boolean;
                contentRef: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                gatewayRef: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null;
                _keydownEvents: {
                    off: () => void;
                } | null;
                _clickEvents: {
                    off: () => void;
                } | null;
                _touchEvents: {
                    off: () => void;
                } | null;
                overlay: any | null;
                componentDidMount(): void;
                componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
                componentWillUnmount(): void;
                doAnimation(open: boolean, close: boolean): void;
                getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
                getAnimationByAlign(align: string | boolean | string[] | undefined): {
                    in: string;
                    out: string;
                };
                addAnimationEvents(): void;
                handlePosition(config: {
                    align: string[];
                }): void;
                handleAnimateEnd(id: string): void;
                onEntering(): void;
                onLeaving(): void;
                onEntered(): void;
                onLeaved(): void;
                beforeOpen(): void;
                beforeClose(): void;
                setFocusNode(): void;
                getContent(): import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                getContentNode(): HTMLElement | null;
                getWrapperNode(): Element | null;
                addDocumentEvents(): void;
                removeDocumentEvents(): void;
                handleDocumentKeyDown(e: KeyboardEvent): void;
                isInShadowDOM(node: Element | Text): boolean;
                getEventPath(event: Event | {
                    path: string;
                }): string | EventTarget[] | undefined;
                composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                matchInShadowDOM(node: Element | Text, e: Event): boolean;
                handleDocumentClick(e: Event): void;
                handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (ref: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                }) => void;
                saveGatewayRef: (ref: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null) => void;
                getInstance(): any;
                render(): import("react").JSX.Element;
                context: any;
                setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").OverlayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            } | null;
            _timer: number | null;
            _hideTimer: number | null;
            _showTimer: number | null;
            componentWillUnmount(): void;
            handleVisibleChange(visible: boolean, type: string | object, e?: KeyboardEvent | MouseEvent | undefined): void;
            handleTriggerClick(e: KeyboardEvent | MouseEvent): void;
            handleTriggerKeyDown(e: KeyboardEvent): void;
            handleTriggerMouseEnter(e: MouseEvent): void;
            handleTriggerMouseLeave(e: MouseEvent, type: string | object): void;
            handleTriggerFocus(e: MouseEvent): void;
            handleTriggerBlur(e: MouseEvent): void;
            handleContentMouseDown(): void;
            handleContentMouseEnter(): void;
            handleContentMouseLeave(e: MouseEvent): void;
            handleMaskMouseEnter(): void;
            handleMaskMouseLeave(): void;
            handleRequestClose(type: string | object, e: MouseEvent): void;
            renderTrigger(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
            renderContent(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
            renderPortal(): import("react").JSX.Element;
            render(): (import("react").JSX.Element | undefined)[];
            context: any;
            setState<K_4 extends "visible">(state: import("../overlay/types").PopupState | ((prevState: Readonly<import("../overlay/types").PopupState>, props: Readonly<import("../overlay").PopupProps>) => import("../overlay/types").PopupState | Pick<import("../overlay/types").PopupState, K_4> | null) | Pick<import("../overlay/types").PopupState, K_4> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").PopupState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
        } | null): void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_5 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../overlay").PopupProps>) => {} | Pick<{}, K_5> | null) | Pick<{}, K_5> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
    }> & Pick<{
        overlay: {
            lastAlign: string | boolean | undefined;
            timeoutMap: {
                [key: string]: number;
            };
            _isMounted: boolean;
            _isDestroyed: boolean;
            focusTimeout: number;
            _animation: {
                off: () => void;
            } | null;
            _containerNode: HTMLElement | undefined;
            _hasFocused: boolean;
            contentRef: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            gatewayRef: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null;
            _keydownEvents: {
                off: () => void;
            } | null;
            _clickEvents: {
                off: () => void;
            } | null;
            _touchEvents: {
                off: () => void;
            } | null;
            overlay: any | null;
            componentDidMount(): void;
            componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
            componentWillUnmount(): void;
            doAnimation(open: boolean, close: boolean): void;
            getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
            getAnimationByAlign(align: string | boolean | string[] | undefined): {
                in: string;
                out: string;
            };
            addAnimationEvents(): void;
            handlePosition(config: {
                align: string[];
            }): void;
            handleAnimateEnd(id: string): void;
            onEntering(): void;
            onLeaving(): void;
            onEntered(): void;
            onLeaved(): void;
            beforeOpen(): void;
            beforeClose(): void;
            setFocusNode(): void;
            getContent(): import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            getContentNode(): HTMLElement | null;
            getWrapperNode(): Element | null;
            addDocumentEvents(): void;
            removeDocumentEvents(): void;
            handleDocumentKeyDown(e: KeyboardEvent): void;
            isInShadowDOM(node: Element | Text): boolean;
            getEventPath(event: Event | {
                path: string;
            }): string | EventTarget[] | undefined;
            composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
            matchInShadowDOM(node: Element | Text, e: Event): boolean;
            handleDocumentClick(e: Event): void;
            handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
            saveContentRef: (ref: import("react").ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            }) => void;
            saveGatewayRef: (ref: {
                child: Element | null | undefined;
                componentDidMount(): void;
                componentDidUpdate(): void;
                updateContainer: () => void;
                getChildNode(): Element | Text | null;
                saveChildRef: (ref: HTMLDivElement) => void;
                render(): import("react").ReactPortal | null;
                context: any;
                setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").GatewayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
            } | null) => void;
            getInstance(): any;
            render(): import("react").JSX.Element;
            context: any;
            setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").OverlayState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
        } | null;
        saveRef(ref: {
            _mouseNotFirstOnMask: boolean;
            _isForwardContent: boolean | null;
            overlay: {
                lastAlign: string | boolean | undefined;
                timeoutMap: {
                    [key: string]: number;
                };
                _isMounted: boolean;
                _isDestroyed: boolean;
                focusTimeout: number;
                _animation: {
                    off: () => void;
                } | null;
                _containerNode: HTMLElement | undefined;
                _hasFocused: boolean;
                contentRef: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                gatewayRef: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null;
                _keydownEvents: {
                    off: () => void;
                } | null;
                _clickEvents: {
                    off: () => void;
                } | null;
                _touchEvents: {
                    off: () => void;
                } | null;
                overlay: any | null;
                componentDidMount(): void;
                componentDidUpdate(prevProps: import("../overlay/types").OverlayV1Props): void;
                componentWillUnmount(): void;
                doAnimation(open: boolean, close: boolean): void;
                getAnimation(props: import("../overlay/types").OverlayV1Props): string | boolean | import("../overlay/types").AnimationObjectType;
                getAnimationByAlign(align: string | boolean | string[] | undefined): {
                    in: string;
                    out: string;
                };
                addAnimationEvents(): void;
                handlePosition(config: {
                    align: string[];
                }): void;
                handleAnimateEnd(id: string): void;
                onEntering(): void;
                onLeaving(): void;
                onEntered(): void;
                onLeaved(): void;
                beforeOpen(): void;
                beforeClose(): void;
                setFocusNode(): void;
                getContent(): import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                getContentNode(): HTMLElement | null;
                getWrapperNode(): Element | null;
                addDocumentEvents(): void;
                removeDocumentEvents(): void;
                handleDocumentKeyDown(e: KeyboardEvent): void;
                isInShadowDOM(node: Element | Text): boolean;
                getEventPath(event: Event | {
                    path: string;
                }): string | EventTarget[] | undefined;
                composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                matchInShadowDOM(node: Element | Text, e: Event): boolean;
                handleDocumentClick(e: Event): void;
                handleMaskClick(e: import("react").MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (ref: import("react").ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                }) => void;
                saveGatewayRef: (ref: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): import("react").ReactPortal | null;
                    context: any;
                    setState<K_2 extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K_2> | null) | Pick<import("../overlay/types").GatewayState, K_2> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: import("react").ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: import("react").ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null) => void;
                getInstance(): any;
                render(): import("react").JSX.Element;
                context: any;
                setState<K_3 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_3> | null) | Pick<import("../overlay/types").OverlayState, K_3> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                    children?: import("react").ReactNode;
                }>;
                state: Readonly<import("../overlay/types").OverlayState>;
                refs: {
                    [key: string]: import("react").ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay/types").OverlayV1Props>, prevState: Readonly<import("../overlay/types").OverlayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): void;
            } | null;
            _timer: number | null;
            _hideTimer: number | null;
            _showTimer: number | null;
            componentWillUnmount(): void;
            handleVisibleChange(visible: boolean, type: string | object, e?: KeyboardEvent | MouseEvent | undefined): void;
            handleTriggerClick(e: KeyboardEvent | MouseEvent): void;
            handleTriggerKeyDown(e: KeyboardEvent): void;
            handleTriggerMouseEnter(e: MouseEvent): void;
            handleTriggerMouseLeave(e: MouseEvent, type: string | object): void;
            handleTriggerFocus(e: MouseEvent): void;
            handleTriggerBlur(e: MouseEvent): void;
            handleContentMouseDown(): void;
            handleContentMouseEnter(): void;
            handleContentMouseLeave(e: MouseEvent): void;
            handleMaskMouseEnter(): void;
            handleMaskMouseLeave(): void;
            handleRequestClose(type: string | object, e: MouseEvent): void;
            renderTrigger(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
            renderContent(): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
            renderPortal(): import("react").JSX.Element;
            render(): (import("react").JSX.Element | undefined)[];
            context: any;
            setState<K_4 extends "visible">(state: import("../overlay/types").PopupState | ((prevState: Readonly<import("../overlay/types").PopupState>, props: Readonly<import("../overlay").PopupProps>) => import("../overlay/types").PopupState | Pick<import("../overlay/types").PopupState, K_4> | null) | Pick<import("../overlay/types").PopupState, K_4> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                children?: import("react").ReactNode;
            }>;
            state: Readonly<import("../overlay/types").PopupState>;
            refs: {
                [key: string]: import("react").ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>): any;
            componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
        } | null): void;
        render(): import("react").JSX.Element;
        context: any;
        setState<K_5 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../overlay").PopupProps>) => {} | Pick<{}, K_5> | null) | Pick<{}, K_5> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
    }, "overlay">): void;
    handleAfterOpen(): void;
    handleSelect(value: unknown, data: import("./types").CascaderSelectDataItem): void;
    refreshValueDataCache: (curValue: string | string[]) => void;
    handleChange(value: string[], data: import("./types").CascaderSelectDataItem[], extra: import("../cascader").Extra): void;
    handleClear(): void;
    handleRemove(currentData: import("./types").CascaderSelectDataItem): void;
    handleSearch(searchValue: string): void;
    getPath(pos: string): import("./types").CascaderSelectDataItem[];
    filterItems(): import("./types").CascaderSelectDataItem[][];
    renderNotFound(): import("react").JSX.Element;
    renderCascader(): import("react").JSX.Element;
    renderPopupContent(): import("react").JSX.Element;
    renderPreview(others: import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>): import("react").JSX.Element;
    render(): import("react").JSX.Element;
    context: any;
    setState<K_6 extends keyof import("./types").CascaderSelectState>(state: import("./types").CascaderSelectState | ((prevState: Readonly<import("./types").CascaderSelectState>, props: Readonly<import("./types").CascaderSelectProps>) => import("./types").CascaderSelectState | Pick<import("./types").CascaderSelectState, K_6> | null) | Pick<import("./types").CascaderSelectState, K_6> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    state: Readonly<import("./types").CascaderSelectState>;
    refs: {
        [key: string]: import("react").ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<import("./types").CascaderSelectProps>, nextState: Readonly<import("./types").CascaderSelectState>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<import("./types").CascaderSelectProps>, prevState: Readonly<import("./types").CascaderSelectState>): any;
    componentDidUpdate?(prevProps: Readonly<import("./types").CascaderSelectProps>, prevState: Readonly<import("./types").CascaderSelectState>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<import("./types").CascaderSelectProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./types").CascaderSelectProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<import("./types").CascaderSelectProps>, nextState: Readonly<import("./types").CascaderSelectState>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./types").CascaderSelectProps>, nextState: Readonly<import("./types").CascaderSelectState>, nextContext: any): void;
}, "focus">>;
export default _default;

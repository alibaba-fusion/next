import React, { type ChangeEvent, type KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
import Base, { type BaseState } from './base';
import type { AutoCompleteProps, ObjectItem, VisibleChangeType } from './types';
export interface AutoCompleteState extends BaseState {
    value: string;
    highlightKey: string;
}
/**
 * Select.AutoComplete
 */
declare class AutoComplete extends Base<AutoCompleteProps, AutoCompleteState> {
    static propTypes: {
        value: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        defaultValue: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        dataSource: PropTypes.Requireable<(NonNullable<string | PropTypes.InferProps<{
            value: PropTypes.Requireable<string>;
            label: PropTypes.Requireable<any>;
            disabled: PropTypes.Requireable<boolean>;
            children: PropTypes.Requireable<any[]>;
        }> | null | undefined> | null | undefined)[]>;
        fillProps: PropTypes.Requireable<string>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        highlightHolder: PropTypes.Requireable<boolean>;
        style: PropTypes.Requireable<object>;
        prefix: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        autoWidth: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        hasClear: PropTypes.Requireable<boolean>;
        state: PropTypes.Requireable<string>;
        readOnly: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        defaultVisible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        popupContainer: PropTypes.Requireable<any>;
        popupClassName: PropTypes.Requireable<any>;
        popupStyle: PropTypes.Requireable<object>;
        popupProps: PropTypes.Requireable<object>;
        followTrigger: PropTypes.Requireable<boolean>;
        popupContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        menuProps: PropTypes.Requireable<object>;
        filterLocal: PropTypes.Requireable<boolean>;
        filter: PropTypes.Requireable<(...args: any[]) => any>;
        defaultHighlightKey: PropTypes.Requireable<string>;
        highlightKey: PropTypes.Requireable<string>;
        onToggleHighlightItem: PropTypes.Requireable<(...args: any[]) => any>;
        autoHighlightFirstItem: PropTypes.Requireable<boolean>;
        useVirtual: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
        mode: PropTypes.Requireable<string>;
        notFoundContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        locale: PropTypes.Requireable<object>;
        rtl: PropTypes.Requireable<boolean>;
        popupComponent: PropTypes.Requireable<any>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        showDataSourceChildren: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        onKeyDown: () => void;
        fillProps: string;
        canCloseByTrigger?: boolean | undefined;
        cache?: boolean | undefined;
        onChange?: ((...rest: any[]) => void) | undefined;
        renderPreview?: ((values: any, props?: import("../input").InputProps | import("./types").SelectProps | undefined) => React.ReactNode) | undefined;
        rtl?: boolean | undefined;
        prefix?: string | undefined;
        pure?: boolean | undefined;
        device?: import("../config-provider/types").DeviceType | undefined;
        errorBoundary?: import("../config-provider/types").ErrorBoundaryType | undefined;
        warning?: boolean | undefined;
        filter?: ((key: string | number, item: ObjectItem) => boolean) | undefined;
        label?: React.ReactNode;
        style?: React.CSSProperties | undefined;
        visible?: boolean | undefined;
        size?: "small" | "medium" | "large" | undefined;
        disabled?: boolean | undefined;
        notFoundContent?: React.ReactNode;
        popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement) | undefined;
        locale?: (Partial<{
            selectPlaceholder: string;
            autoCompletePlaceholder: string;
            notFoundContent: string;
            maxTagPlaceholder: string;
            selectAll: string;
            selectPlaceHolder?: string | undefined;
            autoCompletePlaceHolder?: string | undefined;
        }> & {
            momentLocale?: string | undefined;
        }) | undefined;
        children?: React.ReactNode;
        className?: string | undefined;
        defaultValue?: import("./types").DataSourceItem | import("./types").DataSourceItem[];
        defaultVisible?: boolean | undefined;
        onVisibleChange?: ((visible: boolean, type?: VisibleChangeType | undefined) => void) | undefined;
        followTrigger?: boolean | undefined;
        mode?: "multiple" | "single" | "tag" | undefined;
        popupStyle?: React.CSSProperties | undefined;
        popupClassName?: string | undefined;
        popupProps?: ((import("../overlay").PopupProps & import("../config-provider/types").ComponentCommonProps) & React.RefAttributes<import("../config-provider/types").ConfiguredComponent<import("../overlay").PopupProps & import("../config-provider/types").ComponentCommonProps, {
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
                contentRef: React.ReactInstance & {
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
                    render(): React.ReactPortal | null;
                    context: any;
                    setState<K extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K> | null) | Pick<import("../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: React.ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
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
                getContent(): React.ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                getContentNode(): HTMLElement | null;
                getWrapperNode(): Element | null;
                addDocumentEvents(): void;
                removeDocumentEvents(): void;
                handleDocumentKeyDown(e: globalThis.KeyboardEvent): void;
                isInShadowDOM(node: Element | Text): boolean;
                getEventPath(event: Event | {
                    path: string;
                }): string | EventTarget[] | undefined;
                composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                matchInShadowDOM(node: Element | Text, e: Event): boolean;
                handleDocumentClick(e: Event): void;
                handleMaskClick(e: React.MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (ref: React.ReactInstance & {
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
                    render(): React.ReactPortal | null;
                    context: any;
                    setState<K extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K> | null) | Pick<import("../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: React.ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null) => void;
                getInstance(): any;
                render(): React.JSX.Element;
                context: any;
                setState<K_1 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_1> | null) | Pick<import("../overlay/types").OverlayState, K_1> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                    children?: React.ReactNode;
                }>;
                state: Readonly<import("../overlay/types").OverlayState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
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
                    contentRef: React.ReactInstance & {
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
                        render(): React.ReactPortal | null;
                        context: any;
                        setState<K extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K> | null) | Pick<import("../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                        forceUpdate(callback?: (() => void) | undefined): void;
                        readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                            children?: React.ReactNode;
                        }>;
                        state: Readonly<import("../overlay/types").GatewayState>;
                        refs: {
                            [key: string]: React.ReactInstance;
                        };
                        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                        componentWillUnmount?(): void;
                        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
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
                    getContent(): React.ReactInstance & {
                        headerNode: HTMLElement;
                        bodyNode: HTMLElement;
                        footerNode: HTMLDivElement;
                    };
                    getContentNode(): HTMLElement | null;
                    getWrapperNode(): Element | null;
                    addDocumentEvents(): void;
                    removeDocumentEvents(): void;
                    handleDocumentKeyDown(e: globalThis.KeyboardEvent): void;
                    isInShadowDOM(node: Element | Text): boolean;
                    getEventPath(event: Event | {
                        path: string;
                    }): string | EventTarget[] | undefined;
                    composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                    matchInShadowDOM(node: Element | Text, e: Event): boolean;
                    handleDocumentClick(e: Event): void;
                    handleMaskClick(e: React.MouseEvent<Element, MouseEvent>): void;
                    saveContentRef: (ref: React.ReactInstance & {
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
                        render(): React.ReactPortal | null;
                        context: any;
                        setState<K extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K> | null) | Pick<import("../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                        forceUpdate(callback?: (() => void) | undefined): void;
                        readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                            children?: React.ReactNode;
                        }>;
                        state: Readonly<import("../overlay/types").GatewayState>;
                        refs: {
                            [key: string]: React.ReactInstance;
                        };
                        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                        componentWillUnmount?(): void;
                        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                        componentWillMount?(): void;
                        UNSAFE_componentWillMount?(): void;
                        componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                        componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    } | null) => void;
                    getInstance(): any;
                    render(): React.JSX.Element;
                    context: any;
                    setState<K_1 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_1> | null) | Pick<import("../overlay/types").OverlayState, K_1> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                        children?: React.ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").OverlayState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
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
                handleVisibleChange(visible: boolean, type: string | object, e?: globalThis.KeyboardEvent | MouseEvent | undefined): void;
                handleTriggerClick(e: globalThis.KeyboardEvent | MouseEvent): void;
                handleTriggerKeyDown(e: globalThis.KeyboardEvent): void;
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
                renderTrigger(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
                renderContent(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
                renderPortal(): React.JSX.Element;
                render(): (React.JSX.Element | undefined)[];
                context: any;
                setState<K_2 extends "visible">(state: import("../overlay/types").PopupState | ((prevState: Readonly<import("../overlay/types").PopupState>, props: Readonly<import("../overlay").PopupProps>) => import("../overlay/types").PopupState | Pick<import("../overlay/types").PopupState, K_2> | null) | Pick<import("../overlay/types").PopupState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                state: Readonly<import("../overlay/types").PopupState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>): any;
                componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
            } | null): void;
            render(): React.JSX.Element;
            context: any;
            setState<K_3 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../overlay").PopupProps>) => {} | Pick<{}, K_3> | null) | Pick<{}, K_3> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
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
                contentRef: React.ReactInstance & {
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
                    render(): React.ReactPortal | null;
                    context: any;
                    setState<K extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K> | null) | Pick<import("../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: React.ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
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
                getContent(): React.ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                getContentNode(): HTMLElement | null;
                getWrapperNode(): Element | null;
                addDocumentEvents(): void;
                removeDocumentEvents(): void;
                handleDocumentKeyDown(e: globalThis.KeyboardEvent): void;
                isInShadowDOM(node: Element | Text): boolean;
                getEventPath(event: Event | {
                    path: string;
                }): string | EventTarget[] | undefined;
                composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                matchInShadowDOM(node: Element | Text, e: Event): boolean;
                handleDocumentClick(e: Event): void;
                handleMaskClick(e: React.MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (ref: React.ReactInstance & {
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
                    render(): React.ReactPortal | null;
                    context: any;
                    setState<K extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K> | null) | Pick<import("../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                        children?: React.ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").GatewayState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                    getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                    componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                } | null) => void;
                getInstance(): any;
                render(): React.JSX.Element;
                context: any;
                setState<K_1 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_1> | null) | Pick<import("../overlay/types").OverlayState, K_1> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                    children?: React.ReactNode;
                }>;
                state: Readonly<import("../overlay/types").OverlayState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
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
                    contentRef: React.ReactInstance & {
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
                        render(): React.ReactPortal | null;
                        context: any;
                        setState<K extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K> | null) | Pick<import("../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                        forceUpdate(callback?: (() => void) | undefined): void;
                        readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                            children?: React.ReactNode;
                        }>;
                        state: Readonly<import("../overlay/types").GatewayState>;
                        refs: {
                            [key: string]: React.ReactInstance;
                        };
                        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                        componentWillUnmount?(): void;
                        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
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
                    getContent(): React.ReactInstance & {
                        headerNode: HTMLElement;
                        bodyNode: HTMLElement;
                        footerNode: HTMLDivElement;
                    };
                    getContentNode(): HTMLElement | null;
                    getWrapperNode(): Element | null;
                    addDocumentEvents(): void;
                    removeDocumentEvents(): void;
                    handleDocumentKeyDown(e: globalThis.KeyboardEvent): void;
                    isInShadowDOM(node: Element | Text): boolean;
                    getEventPath(event: Event | {
                        path: string;
                    }): string | EventTarget[] | undefined;
                    composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
                    matchInShadowDOM(node: Element | Text, e: Event): boolean;
                    handleDocumentClick(e: Event): void;
                    handleMaskClick(e: React.MouseEvent<Element, MouseEvent>): void;
                    saveContentRef: (ref: React.ReactInstance & {
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
                        render(): React.ReactPortal | null;
                        context: any;
                        setState<K extends "containerNode">(state: import("../overlay/types").GatewayState | ((prevState: Readonly<import("../overlay/types").GatewayState>, props: Readonly<import("../overlay").GatewayProps>) => import("../overlay/types").GatewayState | Pick<import("../overlay/types").GatewayState, K> | null) | Pick<import("../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                        forceUpdate(callback?: (() => void) | undefined): void;
                        readonly props: Readonly<import("../overlay").GatewayProps> & Readonly<{
                            children?: React.ReactNode;
                        }>;
                        state: Readonly<import("../overlay/types").GatewayState>;
                        refs: {
                            [key: string]: React.ReactInstance;
                        };
                        shouldComponentUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): boolean;
                        componentWillUnmount?(): void;
                        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").GatewayProps>, prevState: Readonly<import("../overlay/types").GatewayState>): any;
                        componentWillMount?(): void;
                        UNSAFE_componentWillMount?(): void;
                        componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").GatewayProps>, nextContext: any): void;
                        componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").GatewayProps>, nextState: Readonly<import("../overlay/types").GatewayState>, nextContext: any): void;
                    } | null) => void;
                    getInstance(): any;
                    render(): React.JSX.Element;
                    context: any;
                    setState<K_1 extends keyof import("../overlay/types").OverlayState>(state: import("../overlay/types").OverlayState | ((prevState: Readonly<import("../overlay/types").OverlayState>, props: Readonly<import("../overlay/types").OverlayV1Props>) => import("../overlay/types").OverlayState | Pick<import("../overlay/types").OverlayState, K_1> | null) | Pick<import("../overlay/types").OverlayState, K_1> | null, callback?: (() => void) | undefined): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import("../overlay/types").OverlayV1Props> & Readonly<{
                        children?: React.ReactNode;
                    }>;
                    state: Readonly<import("../overlay/types").OverlayState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    shouldComponentUpdate?(nextProps: Readonly<import("../overlay/types").OverlayV1Props>, nextState: Readonly<import("../overlay/types").OverlayState>, nextContext: any): boolean;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
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
                handleVisibleChange(visible: boolean, type: string | object, e?: globalThis.KeyboardEvent | MouseEvent | undefined): void;
                handleTriggerClick(e: globalThis.KeyboardEvent | MouseEvent): void;
                handleTriggerKeyDown(e: globalThis.KeyboardEvent): void;
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
                renderTrigger(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
                renderContent(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
                renderPortal(): React.JSX.Element;
                render(): (React.JSX.Element | undefined)[];
                context: any;
                setState<K_2 extends "visible">(state: import("../overlay/types").PopupState | ((prevState: Readonly<import("../overlay/types").PopupState>, props: Readonly<import("../overlay").PopupProps>) => import("../overlay/types").PopupState | Pick<import("../overlay/types").PopupState, K_2> | null) | Pick<import("../overlay/types").PopupState, K_2> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                state: Readonly<import("../overlay/types").PopupState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>): any;
                componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<import("../overlay/types").PopupState>, snapshot?: any): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<import("../overlay/types").PopupState>, nextContext: any): void;
            } | null): void;
            render(): React.JSX.Element;
            context: any;
            setState<K_3 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<import("../overlay").PopupProps>) => {} | Pick<{}, K_3> | null) | Pick<{}, K_3> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../overlay").PopupProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<import("../overlay").PopupProps>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../overlay").PopupProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../overlay").PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
        }, "overlay">>) | undefined;
        value?: import("./types").DataSourceItem | import("./types").DataSourceItem[];
        autoWidth?: boolean | undefined;
        dataSource?: import("./types").DataSourceItem[] | undefined;
        isPreview?: boolean | undefined;
        popupContent?: React.ReactNode;
        filterLocal?: boolean | undefined;
        onToggleHighlightItem?: ((highlightKey?: string | boolean | import("./types").NormalizedObjectItem | null | undefined, type?: import("./types").HighlightChangeType | undefined) => void) | undefined;
        useVirtual?: boolean | undefined;
        itemRender?: ((item: ObjectItem, searchValue: string | undefined) => React.ReactNode) | undefined;
        autoHighlightFirstItem?: boolean | undefined;
        highlightKey?: string | undefined;
        defaultHighlightKey?: string | null | undefined;
        menuProps?: import("../menu").MenuProps | undefined;
        valueRender?: ((item: ObjectItem, props?: import("./types").SelectProps | undefined) => React.ReactNode) | undefined;
        showDataSourceChildren?: boolean | undefined;
        popupAutoFocus?: boolean | undefined;
        popupComponent?: string | React.ComponentClass<{}, any> | React.FunctionComponent<{}> | undefined;
    };
    isInputing: boolean;
    constructor(props: AutoCompleteProps);
    static getDerivedStateFromProps(nextProps: AutoCompleteProps, prevState: AutoCompleteState): {} | null;
    componentDidUpdate(prevProps: AutoCompleteProps): void;
    shouldControlPopup(props: (Readonly<AutoCompleteProps> & Readonly<{
        children?: React.ReactNode;
    }>) | undefined, type: VisibleChangeType): void;
    handleMenuSelect(keys: string[]): void;
    handleItemClick(): void;
    handleSelectEvent(key: string, item: ObjectItem, triggerType: VisibleChangeType): void;
    handleChange: (value: string, proxy: ChangeEvent<HTMLElement> | VisibleChangeType, item?: ObjectItem) => false | undefined;
    handleVisibleChange(visible: boolean, type: VisibleChangeType): void;
    beforeClose(): void;
    /**
     * Handle trigger keydown event
     */
    handleTriggerKeyDown(e: KeyboardEvent<HTMLElement>): void;
    chooseHighlightItem(): false | undefined;
    hasClear(): boolean | "" | undefined;
    /**
     * 选择器
     * @override
     * @param props -
     */
    renderSelect(props?: Readonly<AutoCompleteProps> & Readonly<{
        children?: React.ReactNode;
    }>): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: typeof AutoComplete;
export default _default;

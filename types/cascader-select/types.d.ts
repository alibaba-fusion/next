import type React from 'react';
import type { CascaderProps, CascaderDataItem, Extra } from '../cascader';
import type { CommonProps } from '../util';
import type { SelectProps, VisibleChangeType } from '../select';
declare const Popup: import('../config-provider/types').ConfiguredComponentClass<
    import('../overlay').PopupProps & import('../config-provider/types').ComponentCommonProps,
    {
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
                setState<K extends 'containerNode'>(
                    state:
                        | import('../overlay/types').GatewayState
                        | ((
                              prevState: Readonly<import('../overlay/types').GatewayState>,
                              props: Readonly<import('../overlay').GatewayProps>
                          ) =>
                              | import('../overlay/types').GatewayState
                              | Pick<import('../overlay/types').GatewayState, K>
                              | null)
                        | Pick<import('../overlay/types').GatewayState, K>
                        | null,
                    callback?: (() => void) | undefined
                ): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import('../overlay').GatewayProps> &
                    Readonly<{
                        children?: React.ReactNode;
                    }>;
                state: Readonly<import('../overlay/types').GatewayState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(
                    nextProps: Readonly<import('../overlay').GatewayProps>,
                    nextState: Readonly<import('../overlay/types').GatewayState>,
                    nextContext: any
                ): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(
                    prevProps: Readonly<import('../overlay').GatewayProps>,
                    prevState: Readonly<import('../overlay/types').GatewayState>
                ): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(
                    nextProps: Readonly<import('../overlay').GatewayProps>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillReceiveProps?(
                    nextProps: Readonly<import('../overlay').GatewayProps>,
                    nextContext: any
                ): void;
                componentWillUpdate?(
                    nextProps: Readonly<import('../overlay').GatewayProps>,
                    nextState: Readonly<import('../overlay/types').GatewayState>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillUpdate?(
                    nextProps: Readonly<import('../overlay').GatewayProps>,
                    nextState: Readonly<import('../overlay/types').GatewayState>,
                    nextContext: any
                ): void;
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
            componentDidUpdate(prevProps: import('../overlay/types').OverlayV1Props): void;
            componentWillUnmount(): void;
            doAnimation(open: boolean, close: boolean): void;
            getAnimation(
                props: import('../overlay/types').OverlayV1Props
            ): string | boolean | import('../overlay/types').AnimationObjectType;
            getAnimationByAlign(align: string | boolean | string[] | undefined): {
                in: string;
                out: string;
            };
            addAnimationEvents(): void;
            handlePosition(config: { align: string[] }): void;
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
            handleDocumentKeyDown(e: KeyboardEvent): void;
            isInShadowDOM(node: Element | Text): boolean;
            getEventPath(
                event:
                    | Event
                    | {
                          path: string;
                      }
            ): string | EventTarget[] | undefined;
            composedPath(el: HTMLElement | null): (Document | Window | HTMLElement)[] | undefined;
            matchInShadowDOM(node: Element | Text, e: Event): boolean;
            handleDocumentClick(e: Event): void;
            handleMaskClick(e: React.MouseEvent<Element, MouseEvent>): void;
            saveContentRef: (
                ref: React.ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                }
            ) => void;
            saveGatewayRef: (
                ref: {
                    child: Element | null | undefined;
                    componentDidMount(): void;
                    componentDidUpdate(): void;
                    updateContainer: () => void;
                    getChildNode(): Element | Text | null;
                    saveChildRef: (ref: HTMLDivElement) => void;
                    render(): React.ReactPortal | null;
                    context: any;
                    setState<K extends 'containerNode'>(
                        state:
                            | import('../overlay/types').GatewayState
                            | ((
                                  prevState: Readonly<import('../overlay/types').GatewayState>,
                                  props: Readonly<import('../overlay').GatewayProps>
                              ) =>
                                  | import('../overlay/types').GatewayState
                                  | Pick<import('../overlay/types').GatewayState, K>
                                  | null)
                            | Pick<import('../overlay/types').GatewayState, K>
                            | null,
                        callback?: (() => void) | undefined
                    ): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import('../overlay').GatewayProps> &
                        Readonly<{
                            children?: React.ReactNode;
                        }>;
                    state: Readonly<import('../overlay/types').GatewayState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextState: Readonly<import('../overlay/types').GatewayState>,
                        nextContext: any
                    ): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                    getSnapshotBeforeUpdate?(
                        prevProps: Readonly<import('../overlay').GatewayProps>,
                        prevState: Readonly<import('../overlay/types').GatewayState>
                    ): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillReceiveProps?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextContext: any
                    ): void;
                    componentWillUpdate?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextState: Readonly<import('../overlay/types').GatewayState>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillUpdate?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextState: Readonly<import('../overlay/types').GatewayState>,
                        nextContext: any
                    ): void;
                } | null
            ) => void;
            getInstance(): any;
            render(): React.JSX.Element;
            context: any;
            setState<K_1 extends keyof import('../overlay/types').OverlayState>(
                state:
                    | import('../overlay/types').OverlayState
                    | ((
                          prevState: Readonly<import('../overlay/types').OverlayState>,
                          props: Readonly<import('../overlay/types').OverlayV1Props>
                      ) =>
                          | import('../overlay/types').OverlayState
                          | Pick<import('../overlay/types').OverlayState, K_1>
                          | null)
                    | Pick<import('../overlay/types').OverlayState, K_1>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('../overlay/types').OverlayV1Props> &
                Readonly<{
                    children?: React.ReactNode;
                }>;
            state: Readonly<import('../overlay/types').OverlayState>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(
                nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                nextState: Readonly<import('../overlay/types').OverlayState>,
                nextContext: any
            ): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('../overlay/types').OverlayV1Props>,
                prevState: Readonly<import('../overlay/types').OverlayState>
            ): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                nextState: Readonly<import('../overlay/types').OverlayState>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                nextState: Readonly<import('../overlay/types').OverlayState>,
                nextContext: any
            ): void;
        } | null;
        saveRef(
            ref: {
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
                        setState<K extends 'containerNode'>(
                            state:
                                | import('../overlay/types').GatewayState
                                | ((
                                      prevState: Readonly<import('../overlay/types').GatewayState>,
                                      props: Readonly<import('../overlay').GatewayProps>
                                  ) =>
                                      | import('../overlay/types').GatewayState
                                      | Pick<import('../overlay/types').GatewayState, K>
                                      | null)
                                | Pick<import('../overlay/types').GatewayState, K>
                                | null,
                            callback?: (() => void) | undefined
                        ): void;
                        forceUpdate(callback?: (() => void) | undefined): void;
                        readonly props: Readonly<import('../overlay').GatewayProps> &
                            Readonly<{
                                children?: React.ReactNode;
                            }>;
                        state: Readonly<import('../overlay/types').GatewayState>;
                        refs: {
                            [key: string]: React.ReactInstance;
                        };
                        shouldComponentUpdate?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextState: Readonly<import('../overlay/types').GatewayState>,
                            nextContext: any
                        ): boolean;
                        componentWillUnmount?(): void;
                        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                        getSnapshotBeforeUpdate?(
                            prevProps: Readonly<import('../overlay').GatewayProps>,
                            prevState: Readonly<import('../overlay/types').GatewayState>
                        ): any;
                        componentWillMount?(): void;
                        UNSAFE_componentWillMount?(): void;
                        componentWillReceiveProps?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillReceiveProps?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextContext: any
                        ): void;
                        componentWillUpdate?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextState: Readonly<import('../overlay/types').GatewayState>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillUpdate?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextState: Readonly<import('../overlay/types').GatewayState>,
                            nextContext: any
                        ): void;
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
                    componentDidUpdate(prevProps: import('../overlay/types').OverlayV1Props): void;
                    componentWillUnmount(): void;
                    doAnimation(open: boolean, close: boolean): void;
                    getAnimation(
                        props: import('../overlay/types').OverlayV1Props
                    ): string | boolean | import('../overlay/types').AnimationObjectType;
                    getAnimationByAlign(align: string | boolean | string[] | undefined): {
                        in: string;
                        out: string;
                    };
                    addAnimationEvents(): void;
                    handlePosition(config: { align: string[] }): void;
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
                    handleDocumentKeyDown(e: KeyboardEvent): void;
                    isInShadowDOM(node: Element | Text): boolean;
                    getEventPath(
                        event:
                            | Event
                            | {
                                  path: string;
                              }
                    ): string | EventTarget[] | undefined;
                    composedPath(
                        el: HTMLElement | null
                    ): (Document | Window | HTMLElement)[] | undefined;
                    matchInShadowDOM(node: Element | Text, e: Event): boolean;
                    handleDocumentClick(e: Event): void;
                    handleMaskClick(e: React.MouseEvent<Element, MouseEvent>): void;
                    saveContentRef: (
                        ref: React.ReactInstance & {
                            headerNode: HTMLElement;
                            bodyNode: HTMLElement;
                            footerNode: HTMLDivElement;
                        }
                    ) => void;
                    saveGatewayRef: (
                        ref: {
                            child: Element | null | undefined;
                            componentDidMount(): void;
                            componentDidUpdate(): void;
                            updateContainer: () => void;
                            getChildNode(): Element | Text | null;
                            saveChildRef: (ref: HTMLDivElement) => void;
                            render(): React.ReactPortal | null;
                            context: any;
                            setState<K extends 'containerNode'>(
                                state:
                                    | import('../overlay/types').GatewayState
                                    | ((
                                          prevState: Readonly<
                                              import('../overlay/types').GatewayState
                                          >,
                                          props: Readonly<import('../overlay').GatewayProps>
                                      ) =>
                                          | import('../overlay/types').GatewayState
                                          | Pick<import('../overlay/types').GatewayState, K>
                                          | null)
                                    | Pick<import('../overlay/types').GatewayState, K>
                                    | null,
                                callback?: (() => void) | undefined
                            ): void;
                            forceUpdate(callback?: (() => void) | undefined): void;
                            readonly props: Readonly<import('../overlay').GatewayProps> &
                                Readonly<{
                                    children?: React.ReactNode;
                                }>;
                            state: Readonly<import('../overlay/types').GatewayState>;
                            refs: {
                                [key: string]: React.ReactInstance;
                            };
                            shouldComponentUpdate?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextState: Readonly<import('../overlay/types').GatewayState>,
                                nextContext: any
                            ): boolean;
                            componentWillUnmount?(): void;
                            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                            getSnapshotBeforeUpdate?(
                                prevProps: Readonly<import('../overlay').GatewayProps>,
                                prevState: Readonly<import('../overlay/types').GatewayState>
                            ): any;
                            componentWillMount?(): void;
                            UNSAFE_componentWillMount?(): void;
                            componentWillReceiveProps?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextContext: any
                            ): void;
                            UNSAFE_componentWillReceiveProps?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextContext: any
                            ): void;
                            componentWillUpdate?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextState: Readonly<import('../overlay/types').GatewayState>,
                                nextContext: any
                            ): void;
                            UNSAFE_componentWillUpdate?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextState: Readonly<import('../overlay/types').GatewayState>,
                                nextContext: any
                            ): void;
                        } | null
                    ) => void;
                    getInstance(): any;
                    render(): React.JSX.Element;
                    context: any;
                    setState<K_1 extends keyof import('../overlay/types').OverlayState>(
                        state:
                            | import('../overlay/types').OverlayState
                            | ((
                                  prevState: Readonly<import('../overlay/types').OverlayState>,
                                  props: Readonly<import('../overlay/types').OverlayV1Props>
                              ) =>
                                  | import('../overlay/types').OverlayState
                                  | Pick<import('../overlay/types').OverlayState, K_1>
                                  | null)
                            | Pick<import('../overlay/types').OverlayState, K_1>
                            | null,
                        callback?: (() => void) | undefined
                    ): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import('../overlay/types').OverlayV1Props> &
                        Readonly<{
                            children?: React.ReactNode;
                        }>;
                    state: Readonly<import('../overlay/types').OverlayState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                        nextState: Readonly<import('../overlay/types').OverlayState>,
                        nextContext: any
                    ): boolean;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                    getSnapshotBeforeUpdate?(
                        prevProps: Readonly<import('../overlay/types').OverlayV1Props>,
                        prevState: Readonly<import('../overlay/types').OverlayState>
                    ): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(
                        nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillReceiveProps?(
                        nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                        nextContext: any
                    ): void;
                    componentWillUpdate?(
                        nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                        nextState: Readonly<import('../overlay/types').OverlayState>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillUpdate?(
                        nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                        nextState: Readonly<import('../overlay/types').OverlayState>,
                        nextContext: any
                    ): void;
                } | null;
                _timer: number | null;
                _hideTimer: number | null;
                _showTimer: number | null;
                componentWillUnmount(): void;
                handleVisibleChange(
                    visible: boolean,
                    type: string | object,
                    e?: KeyboardEvent | MouseEvent | undefined
                ): void;
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
                renderTrigger():
                    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                    | undefined;
                renderContent(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
                renderPortal(): React.JSX.Element;
                render(): (React.JSX.Element | undefined)[];
                context: any;
                setState<K_2 extends 'visible'>(
                    state:
                        | import('../overlay/types').PopupState
                        | ((
                              prevState: Readonly<import('../overlay/types').PopupState>,
                              props: Readonly<import('../overlay').PopupProps>
                          ) =>
                              | import('../overlay/types').PopupState
                              | Pick<import('../overlay/types').PopupState, K_2>
                              | null)
                        | Pick<import('../overlay/types').PopupState, K_2>
                        | null,
                    callback?: (() => void) | undefined
                ): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import('../overlay').PopupProps> &
                    Readonly<{
                        children?: React.ReactNode;
                    }>;
                state: Readonly<import('../overlay/types').PopupState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(
                    nextProps: Readonly<import('../overlay').PopupProps>,
                    nextState: Readonly<import('../overlay/types').PopupState>,
                    nextContext: any
                ): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(
                    prevProps: Readonly<import('../overlay').PopupProps>,
                    prevState: Readonly<import('../overlay/types').PopupState>
                ): any;
                componentDidUpdate?(
                    prevProps: Readonly<import('../overlay').PopupProps>,
                    prevState: Readonly<import('../overlay/types').PopupState>,
                    snapshot?: any
                ): void;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(
                    nextProps: Readonly<import('../overlay').PopupProps>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillReceiveProps?(
                    nextProps: Readonly<import('../overlay').PopupProps>,
                    nextContext: any
                ): void;
                componentWillUpdate?(
                    nextProps: Readonly<import('../overlay').PopupProps>,
                    nextState: Readonly<import('../overlay/types').PopupState>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillUpdate?(
                    nextProps: Readonly<import('../overlay').PopupProps>,
                    nextState: Readonly<import('../overlay/types').PopupState>,
                    nextContext: any
                ): void;
            } | null
        ): void;
        render(): React.JSX.Element;
        context: any;
        setState<K_3 extends never>(
            state:
                | {}
                | ((
                      prevState: Readonly<{}>,
                      props: Readonly<import('../overlay').PopupProps>
                  ) => {} | Pick<{}, K_3> | null)
                | Pick<{}, K_3>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import('../overlay').PopupProps> &
            Readonly<{
                children?: React.ReactNode;
            }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<import('../overlay').PopupProps>,
            nextState: Readonly<{}>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<import('../overlay').PopupProps>,
            prevState: Readonly<{}>
        ): any;
        componentDidUpdate?(
            prevProps: Readonly<import('../overlay').PopupProps>,
            prevState: Readonly<{}>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(
            nextProps: Readonly<import('../overlay').PopupProps>,
            nextContext: any
        ): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<import('../overlay').PopupProps>,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<import('../overlay').PopupProps>,
            nextState: Readonly<{}>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<import('../overlay').PopupProps>,
            nextState: Readonly<{}>,
            nextContext: any
        ): void;
    },
    Pick<
        {
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
                    setState<K extends 'containerNode'>(
                        state:
                            | import('../overlay/types').GatewayState
                            | ((
                                  prevState: Readonly<import('../overlay/types').GatewayState>,
                                  props: Readonly<import('../overlay').GatewayProps>
                              ) =>
                                  | import('../overlay/types').GatewayState
                                  | Pick<import('../overlay/types').GatewayState, K>
                                  | null)
                            | Pick<import('../overlay/types').GatewayState, K>
                            | null,
                        callback?: (() => void) | undefined
                    ): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import('../overlay').GatewayProps> &
                        Readonly<{
                            children?: React.ReactNode;
                        }>;
                    state: Readonly<import('../overlay/types').GatewayState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextState: Readonly<import('../overlay/types').GatewayState>,
                        nextContext: any
                    ): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                    getSnapshotBeforeUpdate?(
                        prevProps: Readonly<import('../overlay').GatewayProps>,
                        prevState: Readonly<import('../overlay/types').GatewayState>
                    ): any;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillReceiveProps?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextContext: any
                    ): void;
                    componentWillUpdate?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextState: Readonly<import('../overlay/types').GatewayState>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillUpdate?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextState: Readonly<import('../overlay/types').GatewayState>,
                        nextContext: any
                    ): void;
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
                componentDidUpdate(prevProps: import('../overlay/types').OverlayV1Props): void;
                componentWillUnmount(): void;
                doAnimation(open: boolean, close: boolean): void;
                getAnimation(
                    props: import('../overlay/types').OverlayV1Props
                ): string | boolean | import('../overlay/types').AnimationObjectType;
                getAnimationByAlign(align: string | boolean | string[] | undefined): {
                    in: string;
                    out: string;
                };
                addAnimationEvents(): void;
                handlePosition(config: { align: string[] }): void;
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
                handleDocumentKeyDown(e: KeyboardEvent): void;
                isInShadowDOM(node: Element | Text): boolean;
                getEventPath(
                    event:
                        | Event
                        | {
                              path: string;
                          }
                ): string | EventTarget[] | undefined;
                composedPath(
                    el: HTMLElement | null
                ): (Document | Window | HTMLElement)[] | undefined;
                matchInShadowDOM(node: Element | Text, e: Event): boolean;
                handleDocumentClick(e: Event): void;
                handleMaskClick(e: React.MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (
                    ref: React.ReactInstance & {
                        headerNode: HTMLElement;
                        bodyNode: HTMLElement;
                        footerNode: HTMLDivElement;
                    }
                ) => void;
                saveGatewayRef: (
                    ref: {
                        child: Element | null | undefined;
                        componentDidMount(): void;
                        componentDidUpdate(): void;
                        updateContainer: () => void;
                        getChildNode(): Element | Text | null;
                        saveChildRef: (ref: HTMLDivElement) => void;
                        render(): React.ReactPortal | null;
                        context: any;
                        setState<K extends 'containerNode'>(
                            state:
                                | import('../overlay/types').GatewayState
                                | ((
                                      prevState: Readonly<import('../overlay/types').GatewayState>,
                                      props: Readonly<import('../overlay').GatewayProps>
                                  ) =>
                                      | import('../overlay/types').GatewayState
                                      | Pick<import('../overlay/types').GatewayState, K>
                                      | null)
                                | Pick<import('../overlay/types').GatewayState, K>
                                | null,
                            callback?: (() => void) | undefined
                        ): void;
                        forceUpdate(callback?: (() => void) | undefined): void;
                        readonly props: Readonly<import('../overlay').GatewayProps> &
                            Readonly<{
                                children?: React.ReactNode;
                            }>;
                        state: Readonly<import('../overlay/types').GatewayState>;
                        refs: {
                            [key: string]: React.ReactInstance;
                        };
                        shouldComponentUpdate?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextState: Readonly<import('../overlay/types').GatewayState>,
                            nextContext: any
                        ): boolean;
                        componentWillUnmount?(): void;
                        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                        getSnapshotBeforeUpdate?(
                            prevProps: Readonly<import('../overlay').GatewayProps>,
                            prevState: Readonly<import('../overlay/types').GatewayState>
                        ): any;
                        componentWillMount?(): void;
                        UNSAFE_componentWillMount?(): void;
                        componentWillReceiveProps?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillReceiveProps?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextContext: any
                        ): void;
                        componentWillUpdate?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextState: Readonly<import('../overlay/types').GatewayState>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillUpdate?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextState: Readonly<import('../overlay/types').GatewayState>,
                            nextContext: any
                        ): void;
                    } | null
                ) => void;
                getInstance(): any;
                render(): React.JSX.Element;
                context: any;
                setState<K_1 extends keyof import('../overlay/types').OverlayState>(
                    state:
                        | import('../overlay/types').OverlayState
                        | ((
                              prevState: Readonly<import('../overlay/types').OverlayState>,
                              props: Readonly<import('../overlay/types').OverlayV1Props>
                          ) =>
                              | import('../overlay/types').OverlayState
                              | Pick<import('../overlay/types').OverlayState, K_1>
                              | null)
                        | Pick<import('../overlay/types').OverlayState, K_1>
                        | null,
                    callback?: (() => void) | undefined
                ): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import('../overlay/types').OverlayV1Props> &
                    Readonly<{
                        children?: React.ReactNode;
                    }>;
                state: Readonly<import('../overlay/types').OverlayState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(
                    nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                    nextState: Readonly<import('../overlay/types').OverlayState>,
                    nextContext: any
                ): boolean;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(
                    prevProps: Readonly<import('../overlay/types').OverlayV1Props>,
                    prevState: Readonly<import('../overlay/types').OverlayState>
                ): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(
                    nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillReceiveProps?(
                    nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                    nextContext: any
                ): void;
                componentWillUpdate?(
                    nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                    nextState: Readonly<import('../overlay/types').OverlayState>,
                    nextContext: any
                ): void;
                UNSAFE_componentWillUpdate?(
                    nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                    nextState: Readonly<import('../overlay/types').OverlayState>,
                    nextContext: any
                ): void;
            } | null;
            saveRef(
                ref: {
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
                            setState<K extends 'containerNode'>(
                                state:
                                    | import('../overlay/types').GatewayState
                                    | ((
                                          prevState: Readonly<
                                              import('../overlay/types').GatewayState
                                          >,
                                          props: Readonly<import('../overlay').GatewayProps>
                                      ) =>
                                          | import('../overlay/types').GatewayState
                                          | Pick<import('../overlay/types').GatewayState, K>
                                          | null)
                                    | Pick<import('../overlay/types').GatewayState, K>
                                    | null,
                                callback?: (() => void) | undefined
                            ): void;
                            forceUpdate(callback?: (() => void) | undefined): void;
                            readonly props: Readonly<import('../overlay').GatewayProps> &
                                Readonly<{
                                    children?: React.ReactNode;
                                }>;
                            state: Readonly<import('../overlay/types').GatewayState>;
                            refs: {
                                [key: string]: React.ReactInstance;
                            };
                            shouldComponentUpdate?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextState: Readonly<import('../overlay/types').GatewayState>,
                                nextContext: any
                            ): boolean;
                            componentWillUnmount?(): void;
                            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                            getSnapshotBeforeUpdate?(
                                prevProps: Readonly<import('../overlay').GatewayProps>,
                                prevState: Readonly<import('../overlay/types').GatewayState>
                            ): any;
                            componentWillMount?(): void;
                            UNSAFE_componentWillMount?(): void;
                            componentWillReceiveProps?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextContext: any
                            ): void;
                            UNSAFE_componentWillReceiveProps?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextContext: any
                            ): void;
                            componentWillUpdate?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextState: Readonly<import('../overlay/types').GatewayState>,
                                nextContext: any
                            ): void;
                            UNSAFE_componentWillUpdate?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextState: Readonly<import('../overlay/types').GatewayState>,
                                nextContext: any
                            ): void;
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
                        componentDidUpdate(
                            prevProps: import('../overlay/types').OverlayV1Props
                        ): void;
                        componentWillUnmount(): void;
                        doAnimation(open: boolean, close: boolean): void;
                        getAnimation(
                            props: import('../overlay/types').OverlayV1Props
                        ): string | boolean | import('../overlay/types').AnimationObjectType;
                        getAnimationByAlign(align: string | boolean | string[] | undefined): {
                            in: string;
                            out: string;
                        };
                        addAnimationEvents(): void;
                        handlePosition(config: { align: string[] }): void;
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
                        handleDocumentKeyDown(e: KeyboardEvent): void;
                        isInShadowDOM(node: Element | Text): boolean;
                        getEventPath(
                            event:
                                | Event
                                | {
                                      path: string;
                                  }
                        ): string | EventTarget[] | undefined;
                        composedPath(
                            el: HTMLElement | null
                        ): (Document | Window | HTMLElement)[] | undefined;
                        matchInShadowDOM(node: Element | Text, e: Event): boolean;
                        handleDocumentClick(e: Event): void;
                        handleMaskClick(e: React.MouseEvent<Element, MouseEvent>): void;
                        saveContentRef: (
                            ref: React.ReactInstance & {
                                headerNode: HTMLElement;
                                bodyNode: HTMLElement;
                                footerNode: HTMLDivElement;
                            }
                        ) => void;
                        saveGatewayRef: (
                            ref: {
                                child: Element | null | undefined;
                                componentDidMount(): void;
                                componentDidUpdate(): void;
                                updateContainer: () => void;
                                getChildNode(): Element | Text | null;
                                saveChildRef: (ref: HTMLDivElement) => void;
                                render(): React.ReactPortal | null;
                                context: any;
                                setState<K extends 'containerNode'>(
                                    state:
                                        | import('../overlay/types').GatewayState
                                        | ((
                                              prevState: Readonly<
                                                  import('../overlay/types').GatewayState
                                              >,
                                              props: Readonly<import('../overlay').GatewayProps>
                                          ) =>
                                              | import('../overlay/types').GatewayState
                                              | Pick<import('../overlay/types').GatewayState, K>
                                              | null)
                                        | Pick<import('../overlay/types').GatewayState, K>
                                        | null,
                                    callback?: (() => void) | undefined
                                ): void;
                                forceUpdate(callback?: (() => void) | undefined): void;
                                readonly props: Readonly<import('../overlay').GatewayProps> &
                                    Readonly<{
                                        children?: React.ReactNode;
                                    }>;
                                state: Readonly<import('../overlay/types').GatewayState>;
                                refs: {
                                    [key: string]: React.ReactInstance;
                                };
                                shouldComponentUpdate?(
                                    nextProps: Readonly<import('../overlay').GatewayProps>,
                                    nextState: Readonly<import('../overlay/types').GatewayState>,
                                    nextContext: any
                                ): boolean;
                                componentWillUnmount?(): void;
                                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                                getSnapshotBeforeUpdate?(
                                    prevProps: Readonly<import('../overlay').GatewayProps>,
                                    prevState: Readonly<import('../overlay/types').GatewayState>
                                ): any;
                                componentWillMount?(): void;
                                UNSAFE_componentWillMount?(): void;
                                componentWillReceiveProps?(
                                    nextProps: Readonly<import('../overlay').GatewayProps>,
                                    nextContext: any
                                ): void;
                                UNSAFE_componentWillReceiveProps?(
                                    nextProps: Readonly<import('../overlay').GatewayProps>,
                                    nextContext: any
                                ): void;
                                componentWillUpdate?(
                                    nextProps: Readonly<import('../overlay').GatewayProps>,
                                    nextState: Readonly<import('../overlay/types').GatewayState>,
                                    nextContext: any
                                ): void;
                                UNSAFE_componentWillUpdate?(
                                    nextProps: Readonly<import('../overlay').GatewayProps>,
                                    nextState: Readonly<import('../overlay/types').GatewayState>,
                                    nextContext: any
                                ): void;
                            } | null
                        ) => void;
                        getInstance(): any;
                        render(): React.JSX.Element;
                        context: any;
                        setState<K_1 extends keyof import('../overlay/types').OverlayState>(
                            state:
                                | import('../overlay/types').OverlayState
                                | ((
                                      prevState: Readonly<import('../overlay/types').OverlayState>,
                                      props: Readonly<import('../overlay/types').OverlayV1Props>
                                  ) =>
                                      | import('../overlay/types').OverlayState
                                      | Pick<import('../overlay/types').OverlayState, K_1>
                                      | null)
                                | Pick<import('../overlay/types').OverlayState, K_1>
                                | null,
                            callback?: (() => void) | undefined
                        ): void;
                        forceUpdate(callback?: (() => void) | undefined): void;
                        readonly props: Readonly<import('../overlay/types').OverlayV1Props> &
                            Readonly<{
                                children?: React.ReactNode;
                            }>;
                        state: Readonly<import('../overlay/types').OverlayState>;
                        refs: {
                            [key: string]: React.ReactInstance;
                        };
                        shouldComponentUpdate?(
                            nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                            nextState: Readonly<import('../overlay/types').OverlayState>,
                            nextContext: any
                        ): boolean;
                        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                        getSnapshotBeforeUpdate?(
                            prevProps: Readonly<import('../overlay/types').OverlayV1Props>,
                            prevState: Readonly<import('../overlay/types').OverlayState>
                        ): any;
                        componentWillMount?(): void;
                        UNSAFE_componentWillMount?(): void;
                        componentWillReceiveProps?(
                            nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillReceiveProps?(
                            nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                            nextContext: any
                        ): void;
                        componentWillUpdate?(
                            nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                            nextState: Readonly<import('../overlay/types').OverlayState>,
                            nextContext: any
                        ): void;
                        UNSAFE_componentWillUpdate?(
                            nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                            nextState: Readonly<import('../overlay/types').OverlayState>,
                            nextContext: any
                        ): void;
                    } | null;
                    _timer: number | null;
                    _hideTimer: number | null;
                    _showTimer: number | null;
                    componentWillUnmount(): void;
                    handleVisibleChange(
                        visible: boolean,
                        type: string | object,
                        e?: KeyboardEvent | MouseEvent | undefined
                    ): void;
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
                    renderTrigger():
                        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                        | undefined;
                    renderContent(): React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                    >;
                    renderPortal(): React.JSX.Element;
                    render(): (React.JSX.Element | undefined)[];
                    context: any;
                    setState<K_2 extends 'visible'>(
                        state:
                            | import('../overlay/types').PopupState
                            | ((
                                  prevState: Readonly<import('../overlay/types').PopupState>,
                                  props: Readonly<import('../overlay').PopupProps>
                              ) =>
                                  | import('../overlay/types').PopupState
                                  | Pick<import('../overlay/types').PopupState, K_2>
                                  | null)
                            | Pick<import('../overlay/types').PopupState, K_2>
                            | null,
                        callback?: (() => void) | undefined
                    ): void;
                    forceUpdate(callback?: (() => void) | undefined): void;
                    readonly props: Readonly<import('../overlay').PopupProps> &
                        Readonly<{
                            children?: React.ReactNode;
                        }>;
                    state: Readonly<import('../overlay/types').PopupState>;
                    refs: {
                        [key: string]: React.ReactInstance;
                    };
                    componentDidMount?(): void;
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('../overlay').PopupProps>,
                        nextState: Readonly<import('../overlay/types').PopupState>,
                        nextContext: any
                    ): boolean;
                    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                    getSnapshotBeforeUpdate?(
                        prevProps: Readonly<import('../overlay').PopupProps>,
                        prevState: Readonly<import('../overlay/types').PopupState>
                    ): any;
                    componentDidUpdate?(
                        prevProps: Readonly<import('../overlay').PopupProps>,
                        prevState: Readonly<import('../overlay/types').PopupState>,
                        snapshot?: any
                    ): void;
                    componentWillMount?(): void;
                    UNSAFE_componentWillMount?(): void;
                    componentWillReceiveProps?(
                        nextProps: Readonly<import('../overlay').PopupProps>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillReceiveProps?(
                        nextProps: Readonly<import('../overlay').PopupProps>,
                        nextContext: any
                    ): void;
                    componentWillUpdate?(
                        nextProps: Readonly<import('../overlay').PopupProps>,
                        nextState: Readonly<import('../overlay/types').PopupState>,
                        nextContext: any
                    ): void;
                    UNSAFE_componentWillUpdate?(
                        nextProps: Readonly<import('../overlay').PopupProps>,
                        nextState: Readonly<import('../overlay/types').PopupState>,
                        nextContext: any
                    ): void;
                } | null
            ): void;
            render(): React.JSX.Element;
            context: any;
            setState<K_3 extends never>(
                state:
                    | {}
                    | ((
                          prevState: Readonly<{}>,
                          props: Readonly<import('../overlay').PopupProps>
                      ) => {} | Pick<{}, K_3> | null)
                    | Pick<{}, K_3>
                    | null,
                callback?: (() => void) | undefined
            ): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import('../overlay').PopupProps> &
                Readonly<{
                    children?: React.ReactNode;
                }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('../overlay').PopupProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(
                prevProps: Readonly<import('../overlay').PopupProps>,
                prevState: Readonly<{}>
            ): any;
            componentDidUpdate?(
                prevProps: Readonly<import('../overlay').PopupProps>,
                prevState: Readonly<{}>,
                snapshot?: any
            ): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(
                nextProps: Readonly<import('../overlay').PopupProps>,
                nextContext: any
            ): void;
            UNSAFE_componentWillReceiveProps?(
                nextProps: Readonly<import('../overlay').PopupProps>,
                nextContext: any
            ): void;
            componentWillUpdate?(
                nextProps: Readonly<import('../overlay').PopupProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
            UNSAFE_componentWillUpdate?(
                nextProps: Readonly<import('../overlay').PopupProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): void;
        },
        'overlay'
    >
>;
interface HTMLAttributesWeak
    extends Omit<
        React.HTMLAttributes<HTMLElement>,
        'defaultValue' | 'onChange' | 'onSelect' | 'onFocus' | 'onBlur'
    > {}
export interface CascaderSelectDataItem extends CascaderDataItem {
    pos: string;
}
export type CascaderSelectVisibleChangeType = VisibleChangeType | 'keyboard' | 'fromCascader';
export interface DeprecatedProps {
    /**
     * @deprecated use `popupContainer` instead
     */
    container?: CascaderSelectProps['popupContainer'];
    /**
     * @deprecated use `hasBorder` instead
     */
    shape?: string;
    /**
     * @deprecated use `expandTriggerType` instead
     */
    expandTrigger?: CascaderSelectProps['expandTriggerType'];
}
type PickCascaderKeys =
    | 'dataSource'
    | 'useVirtual'
    | 'multiple'
    | 'canOnlyCheckLeaf'
    | 'checkStrictly'
    | 'resultRender'
    | 'expandedValue'
    | 'defaultExpandedValue'
    | 'expandTriggerType'
    | 'onExpand'
    | 'listStyle'
    | 'listClassName'
    | 'loadData'
    | 'itemRender'
    | 'immutable';
/**
 * @api CascaderSelect
 * @remarks
 * 继承 Cascader, Select 的部分属性，支持透传给 Cascader 的属性有 dataSource, useVirtual, multiple, canOnlyCheckLeaf,
 * checkStrictly, resultRender, expandedValue, defaultExpandedValue, expandTriggerType, onExpand, listStyle,
 * listClassName, loadData, itemRender, immutable。支持透传给 Select 的包括除上面传给 Cascader 和下方单独列出的属性以外的其他全部属性。
 * -
 * inherits partial props from Cascader, support passing props to Cascader: dataSource, useVirtual, multiple, canOnlyCheckLeaf,
 * checkStrictly, resultRender, expandedValue, defaultExpandedValue, expandTriggerType, onExpand, listStyle, listClassName, loadData, i
 * temRender, immutable. Support passing props to Select: other Select props except those listed above and those listed below.
 */
export interface CascaderSelectProps
    extends Pick<CascaderProps, PickCascaderKeys>,
        Omit<
            SelectProps,
            PickCascaderKeys | 'locale' | 'onChange' | 'renderPreview' | 'menuProps' | 'filter'
        >,
        HTMLAttributesWeak,
        CommonProps,
        DeprecatedProps {
    /**
     * 选择框大小
     * @en size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * @deprecated use Form.Item name instead
     * @skip
     */
    name?: string;
    /**
     * 是否禁用
     * @en disabled
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * 是否有下拉箭头
     * @en hasArrow
     * @defaultValue true
     */
    hasArrow?: boolean;
    /**
     * 是否有边框
     * @en hasBorder
     * @defaultValue true
     */
    hasBorder?: boolean;
    /**
     * 是否有清除按钮
     * @en hasClear
     * @defaultValue false
     */
    hasClear?: boolean;
    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     * @en readOnly, popup layer can be expanded but cannot be selected in read-only mode
     */
    readOnly?: boolean;
    /**
     *（非受控）默认值
     * @en default value(not controlled)
     */
    defaultValue?: string | Array<string>;
    /**
     *（受控）当前值
     * @en current value(controlled)
     */
    value?: string | Array<string>;
    /**
     * 选中值改变时触发的回调函数
     * @en callback when selected value changes
     */
    onChange?: (
        value: string | Array<string> | null,
        data: CascaderDataItem | Array<CascaderDataItem> | null,
        extra?: Extra
    ) => void;
    /**
     * 是否选中即发生改变，该属性仅在单选模式下有效
     * @en whether to call onChange as soon as selected, this property only works in single selection mode
     * @defaultValue false
     */
    changeOnSelect?: boolean;
    /**
     * 选择框单选时展示结果的自定义渲染函数
     * @en custom render function of selected result
     */
    displayRender?: (
        label: Array<React.ReactNode>,
        data: CascaderSelectDataItem
    ) => React.ReactNode;
    /**
     * 是否显示搜索框
     * @en show search box
     * @defaultValue false
     */
    showSearch?: boolean;
    /**
     * 自定义搜索函数
     * @en custom search function
     */
    filter?: (searchValue: string, path: CascaderSelectDataItem[]) => boolean;
    /**
     * 当搜索框值变化时回调
     * @en callback when search value changes
     * @version 1.23
     */
    onSearch?: (value: string) => void;
    /**
     * 搜索结果列表是否和选择框等宽
     * @en whether the search result list is the same width as the selection box
     * @defaultValue true
     */
    resultAutoWidth?: boolean;
    /**
     * 无数据时显示内容
     * @en content when no data
     */
    notFoundContent?: React.ReactNode;
    /**
     * 自定义下拉框头部
     * @en custom dropdown header
     */
    header?: React.ReactNode;
    /**
     * 自定义下拉框底部
     * @en custom dropdown footer
     */
    footer?: React.ReactNode;
    /**
     * 初始下拉框是否显示
     * @en visible by default
     * @defaultValue false
     */
    defaultVisible?: boolean;
    /**
     * 当前下拉框是否显示
     * @en current visible
     */
    visible?: boolean;
    /**
     * 下拉框显示或关闭时触发事件的回调函数
     */
    onVisibleChange?: (visible: boolean, type?: CascaderSelectVisibleChangeType) => void;
    /**
     * 透传到 Popup 的属性对象
     * @en props object passed to Popup
     */
    popupProps?: React.ComponentPropsWithRef<typeof Popup>;
    /**
     * 是否为预览态
     * @en whether it is in preview mode
     * @defaultValue false
     */
    isPreview?: boolean;
    /**
     * 自定义预览态
     * @en custom preview
     */
    renderPreview?: (
        value: CascaderSelectDataItem | CascaderSelectDataItem[],
        props: CascaderSelectProps
    ) => React.ReactNode;
    /**
     * 是否支持树形勾选
     * @en whether to support tree check
     * @skip
     */
    treeCheckable?: boolean;
    /**
     * 透传到 Cascader 的属性对象
     * @en props object passed to Cascader
     */
    menuProps?: Omit<CascaderProps, 'onSelect' | 'onChange'>;
    /**
     * 是否在选中项后清空搜索框，只在 multiple 为 true 时有效
     * @en Whether the current search will be cleared on selecting an item. Only applies when multiple is true
     * @defaultValue false
     */
    autoClearSearchValue?: boolean;
}
export interface CascaderSelectState {
    value: string[];
    searchValue: string;
    visible: boolean;
}
export {};

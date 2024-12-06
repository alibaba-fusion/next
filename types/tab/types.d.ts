import type {
    HTMLAttributes,
    ReactNode,
    CSSProperties,
    ReactElement,
    ComponentPropsWithRef,
} from 'react';
import type PropTypes from 'prop-types';
import type { CommonProps } from '../util';
import type { Locale } from '../locale/types';
declare const Popup: import('../config-provider/types').ConfiguredComponentClass<
    import('../overlay').PopupProps & import('../config-provider/types').ComponentCommonProps,
    {
        overlay: {
            lastAlign: string | boolean | undefined;
            timeoutMap: {
                [key: string]: number;
            };
            _isMounted: boolean;
            _isDestroyed: boolean /**
             * 选项卡标题
             * @en Title of tab.
             */;
            focusTimeout: number;
            _animation: {
                off: () => void;
            } | null;
            _containerNode: HTMLElement | undefined;
            _hasFocused: boolean;
            contentRef: import('react').ReactInstance & {
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
                render(): import('react').ReactPortal | null;
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
                        children?: ReactNode;
                    }>;
                state: Readonly<import('../overlay/types').GatewayState>;
                refs: {
                    [key: string]: import('react').ReactInstance;
                };
                shouldComponentUpdate?(
                    nextProps: Readonly<import('../overlay').GatewayProps>,
                    nextState: Readonly<import('../overlay/types').GatewayState>,
                    nextContext: any
                ): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
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
            getContent(): import('react').ReactInstance & {
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
            handleMaskClick(e: import('react').MouseEvent<Element, MouseEvent>): void;
            saveContentRef: (
                ref: import('react').ReactInstance & {
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
                    render(): import('react').ReactPortal | null;
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
                            children?: ReactNode;
                        }>;
                    state: Readonly<import('../overlay/types').GatewayState>;
                    refs: {
                        [key: string]: import('react').ReactInstance;
                    };
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextState: Readonly<import('../overlay/types').GatewayState>,
                        nextContext: any
                    ): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
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
            render(): import('react').JSX.Element;
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
                    children?: ReactNode;
                }>;
            state: Readonly<import('../overlay/types').OverlayState>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            shouldComponentUpdate?(
                nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                nextState: Readonly<import('../overlay/types').OverlayState>,
                nextContext: any
            ): boolean;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
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
                    _isDestroyed: boolean /**
                     * 选项卡标题
                     * @en Title of tab.
                     */;
                    focusTimeout: number;
                    _animation: {
                        off: () => void;
                    } | null;
                    _containerNode: HTMLElement | undefined;
                    _hasFocused: boolean;
                    contentRef: import('react').ReactInstance & {
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
                        render(): import('react').ReactPortal | null;
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
                                children?: ReactNode;
                            }>;
                        state: Readonly<import('../overlay/types').GatewayState>;
                        refs: {
                            [key: string]: import('react').ReactInstance;
                        };
                        shouldComponentUpdate?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextState: Readonly<import('../overlay/types').GatewayState>,
                            nextContext: any
                        ): boolean;
                        componentWillUnmount?(): void;
                        componentDidCatch?(
                            error: Error,
                            errorInfo: import('react').ErrorInfo
                        ): void;
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
                    getContent(): import('react').ReactInstance & {
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
                    handleMaskClick(e: import('react').MouseEvent<Element, MouseEvent>): void;
                    saveContentRef: (
                        ref: import('react').ReactInstance & {
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
                            render(): import('react').ReactPortal | null;
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
                                    children?: ReactNode;
                                }>;
                            state: Readonly<import('../overlay/types').GatewayState>;
                            refs: {
                                [key: string]: import('react').ReactInstance;
                            };
                            shouldComponentUpdate?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextState: Readonly<import('../overlay/types').GatewayState>,
                                nextContext: any
                            ): boolean;
                            componentWillUnmount?(): void;
                            componentDidCatch?(
                                error: Error,
                                errorInfo: import('react').ErrorInfo
                            ): void;
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
                    render(): import('react').JSX.Element;
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
                            children?: ReactNode;
                        }>;
                    state: Readonly<import('../overlay/types').OverlayState>;
                    refs: {
                        [key: string]: import('react').ReactInstance;
                    };
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                        nextState: Readonly<import('../overlay/types').OverlayState>,
                        nextContext: any
                    ): boolean;
                    componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
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
                    | ReactElement<any, string | import('react').JSXElementConstructor<any>>
                    | undefined;
                renderContent(): ReactElement<
                    any,
                    string | import('react').JSXElementConstructor<any>
                >;
                renderPortal(): import('react').JSX.Element;
                render(): (import('react').JSX.Element | undefined)[];
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
                        children?: ReactNode;
                    }>;
                state: Readonly<import('../overlay/types').PopupState>;
                refs: {
                    [key: string]: import('react').ReactInstance;
                };
                componentDidMount?(): void;
                shouldComponentUpdate?(
                    nextProps: Readonly<import('../overlay').PopupProps>,
                    nextState: Readonly<import('../overlay/types').PopupState>,
                    nextContext: any
                ): boolean;
                componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
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
        render(): import('react').JSX.Element;
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
                children?: ReactNode;
            }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import('react').ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<import('../overlay').PopupProps>,
            nextState: Readonly<{}>,
            nextContext: any
        ): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
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
                _isDestroyed: boolean /**
                 * 选项卡标题
                 * @en Title of tab.
                 */;
                focusTimeout: number;
                _animation: {
                    off: () => void;
                } | null;
                _containerNode: HTMLElement | undefined;
                _hasFocused: boolean;
                contentRef: import('react').ReactInstance & {
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
                    render(): import('react').ReactPortal | null;
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
                            children?: ReactNode;
                        }>;
                    state: Readonly<import('../overlay/types').GatewayState>;
                    refs: {
                        [key: string]: import('react').ReactInstance;
                    };
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('../overlay').GatewayProps>,
                        nextState: Readonly<import('../overlay/types').GatewayState>,
                        nextContext: any
                    ): boolean;
                    componentWillUnmount?(): void;
                    componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
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
                getContent(): import('react').ReactInstance & {
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
                handleMaskClick(e: import('react').MouseEvent<Element, MouseEvent>): void;
                saveContentRef: (
                    ref: import('react').ReactInstance & {
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
                        render(): import('react').ReactPortal | null;
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
                                children?: ReactNode;
                            }>;
                        state: Readonly<import('../overlay/types').GatewayState>;
                        refs: {
                            [key: string]: import('react').ReactInstance;
                        };
                        shouldComponentUpdate?(
                            nextProps: Readonly<import('../overlay').GatewayProps>,
                            nextState: Readonly<import('../overlay/types').GatewayState>,
                            nextContext: any
                        ): boolean;
                        componentWillUnmount?(): void;
                        componentDidCatch?(
                            error: Error,
                            errorInfo: import('react').ErrorInfo
                        ): void;
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
                render(): import('react').JSX.Element;
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
                        children?: ReactNode;
                    }>;
                state: Readonly<import('../overlay/types').OverlayState>;
                refs: {
                    [key: string]: import('react').ReactInstance;
                };
                shouldComponentUpdate?(
                    nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                    nextState: Readonly<import('../overlay/types').OverlayState>,
                    nextContext: any
                ): boolean;
                componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
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
                        _isDestroyed: boolean /**
                         * 选项卡标题
                         * @en Title of tab.
                         */;
                        focusTimeout: number;
                        _animation: {
                            off: () => void;
                        } | null;
                        _containerNode: HTMLElement | undefined;
                        _hasFocused: boolean;
                        contentRef: import('react').ReactInstance & {
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
                            render(): import('react').ReactPortal | null;
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
                                    children?: ReactNode;
                                }>;
                            state: Readonly<import('../overlay/types').GatewayState>;
                            refs: {
                                [key: string]: import('react').ReactInstance;
                            };
                            shouldComponentUpdate?(
                                nextProps: Readonly<import('../overlay').GatewayProps>,
                                nextState: Readonly<import('../overlay/types').GatewayState>,
                                nextContext: any
                            ): boolean;
                            componentWillUnmount?(): void;
                            componentDidCatch?(
                                error: Error,
                                errorInfo: import('react').ErrorInfo
                            ): void;
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
                        getContent(): import('react').ReactInstance & {
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
                        handleMaskClick(e: import('react').MouseEvent<Element, MouseEvent>): void;
                        saveContentRef: (
                            ref: import('react').ReactInstance & {
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
                                render(): import('react').ReactPortal | null;
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
                                        children?: ReactNode;
                                    }>;
                                state: Readonly<import('../overlay/types').GatewayState>;
                                refs: {
                                    [key: string]: import('react').ReactInstance;
                                };
                                shouldComponentUpdate?(
                                    nextProps: Readonly<import('../overlay').GatewayProps>,
                                    nextState: Readonly<import('../overlay/types').GatewayState>,
                                    nextContext: any
                                ): boolean;
                                componentWillUnmount?(): void;
                                componentDidCatch?(
                                    error: Error,
                                    errorInfo: import('react').ErrorInfo
                                ): void;
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
                        render(): import('react').JSX.Element;
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
                                children?: ReactNode;
                            }>;
                        state: Readonly<import('../overlay/types').OverlayState>;
                        refs: {
                            [key: string]: import('react').ReactInstance;
                        };
                        shouldComponentUpdate?(
                            nextProps: Readonly<import('../overlay/types').OverlayV1Props>,
                            nextState: Readonly<import('../overlay/types').OverlayState>,
                            nextContext: any
                        ): boolean;
                        componentDidCatch?(
                            error: Error,
                            errorInfo: import('react').ErrorInfo
                        ): void;
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
                        | ReactElement<any, string | import('react').JSXElementConstructor<any>>
                        | undefined;
                    renderContent(): ReactElement<
                        any,
                        string | import('react').JSXElementConstructor<any>
                    >;
                    renderPortal(): import('react').JSX.Element;
                    render(): (import('react').JSX.Element | undefined)[];
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
                            children?: ReactNode;
                        }>;
                    state: Readonly<import('../overlay/types').PopupState>;
                    refs: {
                        [key: string]: import('react').ReactInstance;
                    };
                    componentDidMount?(): void;
                    shouldComponentUpdate?(
                        nextProps: Readonly<import('../overlay').PopupProps>,
                        nextState: Readonly<import('../overlay/types').PopupState>,
                        nextContext: any
                    ): boolean;
                    componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
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
            render(): import('react').JSX.Element;
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
                    children?: ReactNode;
                }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: import('react').ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(
                nextProps: Readonly<import('../overlay').PopupProps>,
                nextState: Readonly<{}>,
                nextContext: any
            ): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
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
/**
 * @api Tab
 */
export interface TabProps
    extends Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'onChange' | 'title'>,
        CommonProps {
    /**
     * 被激活的选项卡的 key, 赋值则 tab 为受控组件，用户无法切换
     * @en Key of the current active tab. This prop will make tab a 'controlled component', end user will be unable to change tabs.
     */
    activeKey?: string;
    /**
     * 初始化时被激活的选项卡的 key
     * @en Key of default active tab.
     */
    defaultActiveKey?: string;
    /**
     * 外观形态
     * @en Shape of tab.
     * @defaultValue 'pure'
     */
    shape?: 'pure' | 'wrapped' | 'text' | 'capsule';
    /**
     * 是否开启动效
     * @en Enable animation.
     * @defaultValue true
     */
    animation?: boolean;
    /**
     * 选项卡过多时的滑动模式
     * @en Excess mode for extra tabs.
     * @defaultValue 'slide'
     */
    excessMode?: 'slide' | 'dropdown';
    /**
     * 导航选项卡的位置，只适用于包裹型（wrapped）选项卡
     * @en Position of tabs. Only effective when shape is 'wrapped'.
     * @defaultValue 'top'
     */
    tabPosition?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * 尺寸
     * @en Size of the tabs
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium';
    /**
     * 激活选项卡的触发方式
     * @en Trigger type to change active tab.
     * @defaultValue 'click'
     */
    triggerType?: 'hover' | 'click';
    /**
     * 是否延迟加载 TabPane 的内容，默认开启，即不提前渲染
     * @en Lazy mount tabs.
     * @defaultValue true
     */
    lazyLoad?: boolean;
    /**
     * 是否自动卸载未处于激活状态的选项卡
     * @en Auto unmount inactive tabs
     * @defaultValue false
     */
    unmountInactiveTabs?: boolean;
    /**
     * 导航条的自定义样式
     * @en Custom style of navigation.
     */
    navStyle?: CSSProperties;
    /**
     * 导航条的自定义样式类
     * @en Custom className of navigation.
     */
    navClassName?: string;
    /**
     * 内容区容器的自定义样式
     * @en Custom style of content.
     */
    contentStyle?: CSSProperties;
    /**
     * 内容区容器的自定义样式类
     * @en Custom className of content.
     */
    contentClassName?: string;
    /**
     * 导航栏附加内容
     * @en Extra content of tab, ensure the item won't excess when using this.
     */
    extra?: ReactNode;
    /**
     * 禁用键盘事件
     * @en Set and you cant switch tabs via keyboard arrow keys.
     * @defaultValue false
     */
    disableKeyboard?: boolean;
    /**
     * 点击单个选项卡时触发的回调
     * @en Callback when active tab changes.
     */
    onClick?: (key: string) => void;
    /**
     * 选项卡发生切换时的事件回调
     * @en Callback triggered when a tab is changed.
     * @param key - 改变后的 key - the active key
     */
    onChange?: (key: string) => void;
    /**
     * 选项卡被关闭时的事件回调
     * @en Callback triggered when a tab is closed.
     * @param key - 关闭的选项卡的 key - the closed key
     */
    onClose?: (key: string) => void;
    /**
     * 自定义选项卡模板渲染函数
     * @en Custom template render for tab.
     * @param key - 当前 Tab.Item 的 key 值 - Key of TabItem
     * @param props - 传给 Tab.Item 的所有属性键值对返回值 - Props of TabItem
     * @returns - 返回自定义组件 - The rendered tab item.
     */
    tabRender?: (key: string, props: Record<string, unknown>) => ReactNode;
    /**
     * 弹层属性透传，只有当 excessMode 为 dropdown 时生效
     * @en Properties pass down to Popup Menu in dropdown excess mode.
     */
    popupProps?: ComponentPropsWithRef<typeof Popup>;
    /**
     * 自定义 icon
     * @en Customize icons used in tab navigation.
     */
    icons?: {
        dropdown?: string | ReactNode;
        prev?: string | ReactNode;
        next?: string | ReactNode;
    };
    /**
     * 展示新增按钮
     * @en Show 'Add' button.
     */
    showAdd?: boolean;
    /**
     * 新增的事件回调
     * @en Callback triggered when clicking 'Add' button to add a new tab.
     */
    onAdd?: () => void;
    /**
     * 自定义添加按钮
     * @en Custom 'Add' button.
     */
    addIcon?: ReactNode;
    /**
     * @deprecated Use `shape` instead.
     * @skip
     */
    type?: 'pure' | 'wrapped' | 'text' | 'capsule';
}
/**
 * @api Tab.Item
 */
export interface ItemProps {
    /**
     * 选项卡标题
     * @en Title of tab.
     */
    title?: ReactNode;
    /**
     * 单个选项卡是否可关闭
     * @en If tab is closeable.
     * @defaultValue false
     */
    closeable?: boolean;
    /**
     * 选项卡是否被禁用
     * @en If tab is disabled.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * 导航栏单个选项卡样式
     * @en Style of tab in navigation.
     */
    style?: CSSProperties;
    /**
     * 导航栏单个选项卡样式类
     * @en ClassName of tab in navigation.
     */
    className?: string;
    /**
     * 导航栏单个选项卡点击时的回调
     * @en Callback when tab in navigation is clicked.
     */
    onClick?: (key: string, e: React.MouseEvent<HTMLElement>) => void;
    /**
     * 导航栏单个选项卡鼠标移入时的回调
     * @en Callback when mouse enter tab in navigation.
     */
    onMouseEnter?: (key: string, e: React.MouseEvent<HTMLElement>) => void;
    /**
     * 导航栏单个选项卡鼠标移出时的回调
     * @en Callback when mouse leave tab in navigation.
     */
    onMouseLeave?: (key: string, e: React.MouseEvent<HTMLElement>) => void;
    /**
     * 子元素
     * @en Child elements.
     */
    children?: React.ReactNode;
}
export interface TabContentProps extends CommonProps {
    prefix?: string;
    activeKey?: string;
    lazyLoad?: boolean;
    className?: string;
    unmountInactiveTabs?: boolean;
}
/**
 * 有些属性是父组件传给 TabItem 的，而非用户可以自定义的
 */
export interface TabItemProps extends ItemProps, Pick<CommonProps, 'prefix'> {
    active?: boolean;
    key?: number | string;
    title?: PropTypes.ReactNodeLike;
    lazyLoad?: boolean;
    unmountInactiveTabs?: boolean;
}
export interface NavProps extends CommonProps, TabProps {
    tabs: ReactElement[];
    locale?: Locale['Tab'];
    onTriggerEvent: (triggerType: string, key: string) => void;
}
export {};

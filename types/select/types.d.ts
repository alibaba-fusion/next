import type React from 'react';
import type { CommonProps } from '../util';
import type { MenuProps } from '../menu';
import type { InputProps } from '../input';
import type { TagProps } from '../tag';
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
            _isDestroyed: boolean;
            focusTimeout: number;
            _animation: {
                off: () => void /**
                 * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
                 * @en Use local filtering, when the data source is remote, you need to close this item
                 * @defaultValue true
                 */;
            } | null;
            _containerNode: HTMLElement | undefined;
            _hasFocused: boolean;
            contentRef: React.ReactInstance & {
                headerNode: HTMLElement;
                bodyNode: HTMLElement;
                footerNode: HTMLDivElement;
            };
            gatewayRef: {
                child: Element | null | undefined /**
                 * 选项背景色，可选值同 Tag
                 * @en Option background color, optional values are the same as Tag
                 */;
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
            /**
             * 多选模式下是否有全选功能
             * @en Whether there is a full selection function in multi-select mode
             */
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
                    child: Element | null | undefined /**
                     * 选项背景色，可选值同 Tag
                     * @en Option background color, optional values are the same as Tag
                     */;
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
                _mouseNotFirstOnMask: boolean /**
                 * 是否只读，只读模式下可以展开弹层但不能选
                 * @en Read-only
                 */;
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
                        off: () => void /**
                         * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
                         * @en Use local filtering, when the data source is remote, you need to close this item
                         * @defaultValue true
                         */;
                    } | null;
                    _containerNode: HTMLElement | undefined;
                    _hasFocused: boolean;
                    contentRef: React.ReactInstance & {
                        headerNode: HTMLElement;
                        bodyNode: HTMLElement;
                        footerNode: HTMLDivElement;
                    };
                    gatewayRef: {
                        child: Element | null | undefined /**
                         * 选项背景色，可选值同 Tag
                         * @en Option background color, optional values are the same as Tag
                         */;
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
                    /**
                     * 多选模式下是否有全选功能
                     * @en Whether there is a full selection function in multi-select mode
                     */
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
                            child: Element | null | undefined /**
                             * 选项背景色，可选值同 Tag
                             * @en Option background color, optional values are the same as Tag
                             */;
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
                } | null /**
                 * 是否禁用选择器
                 * @en Whether to disable the selector
                 */;
                _timer: number | null;
                _hideTimer: number | null;
                _showTimer: number | null;
                componentWillUnmount(): void /**
                 * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
                 * @en Use local filtering, when the data source is remote, you need to close this item
                 * @defaultValue true
                 */;
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
                    off: () => void /**
                     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
                     * @en Use local filtering, when the data source is remote, you need to close this item
                     * @defaultValue true
                     */;
                } | null;
                _containerNode: HTMLElement | undefined;
                _hasFocused: boolean;
                contentRef: React.ReactInstance & {
                    headerNode: HTMLElement;
                    bodyNode: HTMLElement;
                    footerNode: HTMLDivElement;
                };
                gatewayRef: {
                    child: Element | null | undefined /**
                     * 选项背景色，可选值同 Tag
                     * @en Option background color, optional values are the same as Tag
                     */;
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
                /**
                 * 多选模式下是否有全选功能
                 * @en Whether there is a full selection function in multi-select mode
                 */
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
                        child: Element | null | undefined /**
                         * 选项背景色，可选值同 Tag
                         * @en Option background color, optional values are the same as Tag
                         */;
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
                    _mouseNotFirstOnMask: boolean /**
                     * 是否只读，只读模式下可以展开弹层但不能选
                     * @en Read-only
                     */;
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
                            off: () => void /**
                             * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
                             * @en Use local filtering, when the data source is remote, you need to close this item
                             * @defaultValue true
                             */;
                        } | null;
                        _containerNode: HTMLElement | undefined;
                        _hasFocused: boolean;
                        contentRef: React.ReactInstance & {
                            headerNode: HTMLElement;
                            bodyNode: HTMLElement;
                            footerNode: HTMLDivElement;
                        };
                        gatewayRef: {
                            child: Element | null | undefined /**
                             * 选项背景色，可选值同 Tag
                             * @en Option background color, optional values are the same as Tag
                             */;
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
                        /**
                         * 多选模式下是否有全选功能
                         * @en Whether there is a full selection function in multi-select mode
                         */
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
                                child: Element | null | undefined /**
                                 * 选项背景色，可选值同 Tag
                                 * @en Option background color, optional values are the same as Tag
                                 */;
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
                    } | null /**
                     * 是否禁用选择器
                     * @en Whether to disable the selector
                     */;
                    _timer: number | null;
                    _hideTimer: number | null;
                    _showTimer: number | null;
                    componentWillUnmount(): void /**
                     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
                     * @en Use local filtering, when the data source is remote, you need to close this item
                     * @defaultValue true
                     */;
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
export type ReactElementWithTypeMark<P = unknown> = React.ReactElement<
    P,
    React.ReactElement['type'] & {
        _typeMark?: string;
    }
>;
interface HTMLAttributesWeak
    extends Omit<
        React.HTMLAttributes<HTMLElement>,
        'defaultValue' | 'onChange' | 'onBlur' | 'onFocus' | 'onKeyDown'
    > {}
/**
 * @api
 */
export interface ObjectItem {
    /**
     * 选项值
     * @en Option value
     */
    value?: string | number | boolean | null | undefined;
    /**
     * 选项标签
     * @en Option label
     */
    label?: React.ReactNode;
    /**
     * 选项背景色，可选值同 Tag
     * @en Option background color, optional values are the same as Tag
     */
    color?: TagProps['color'];
    /**
     * 选项是否禁用
     * @en Option is disabled
     */
    disabled?: boolean;
    /**
     * 子选项
     * @en Sub-options
     */
    children?: DataSourceItem[];
    /**
     * 选项标题
     * @en Option title
     */
    title?: string | null;
    /**
     * 是否是 addon
     * @skip
     */
    __isAddon?: boolean;
    [propName: string]: unknown;
}
export interface NormalizedObjectItem extends ObjectItem {
    children?: NormalizedObjectItem[];
    deep?: number;
}
/**
 * @deprecated use ObjectItem instead
 */
export type item = ObjectItem;
/**
 * @api
 */
export type DataSourceItem = ObjectItem | string | boolean | number | null | undefined;
/**
 * @api
 */
export type VisibleChangeType =
    | 'itemClick'
    | 'enter'
    | 'esc'
    | 'keyDown'
    | 'selectAll'
    | 'update'
    | 'change'
    | 'tag';
/**
 * @api
 */
export type HighlightChangeType = 'up' | 'down' | 'autoFirstItem' | 'highlightKeyToNull';
/**
 * @api Select.AutoComplete
 * @order 2
 */
export interface AutoCompleteProps
    extends HTMLAttributesWeak,
        Omit<InputProps, 'onChange' | 'value' | 'locale'>,
        CommonProps {
    /**
     * 选择器尺寸
     * @en size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 当前值，用于受控模式
     * @en Current value, for controlled mode
     */
    value?: string | number | null;
    /**
     * 初始化的默认值
     * @en Initial default value
     */
    defaultValue?: string | number;
    /**
     * 没有值的时候的占位符
     * @en Placeholder when no value
     */
    placeholder?: string;
    /**
     * 下拉菜单的宽度是否与选择器保持统一
     * @en Whether the width of the drop-down menu is unified with the selector
     * @defaultValue true
     */
    autoWidth?: boolean;
    /**
     * 自定义内联 label
     * @en Custom inline label
     */
    label?: React.ReactNode;
    /**
     * 是否有清除按钮（单选模式有效）
     * @en Whether to have a clear button (valid in single mode)
     */
    hasClear?: boolean;
    /**
     * 校验状态
     * @en Validation status
     */
    state?: 'error' | 'loading' | 'success' | 'warning';
    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     * @en Read-only
     */
    readOnly?: boolean;
    /**
     * 是否禁用选择器
     * @en Whether to disable the selector
     */
    disabled?: boolean;
    /**
     * 当前弹层是否显示
     * @en Whether the pop-up layer is displayed
     */
    visible?: boolean;
    /**
     * 弹层初始化是否显示
     * @en Whether the pop-up layer is displayed when initialized
     */
    defaultVisible?: boolean;
    /**
     * 弹层显示或隐藏时触发的回调
     * @en Callback when the pop-up layer is displayed or hidden
     */
    onVisibleChange?: (visible: boolean, type?: VisibleChangeType) => void;
    /**
     * 弹层挂载的容器节点
     * @en Popup mounting container
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);
    /**
     * 弹层的 className
     * @en Popup class name
     */
    popupClassName?: string;
    /**
     * 弹层的内联样式
     * @en Popup inline style
     */
    popupStyle?: React.CSSProperties;
    /**
     * 添加到弹层上的属性
     * @en Props added to the popup
     */
    popupProps?: React.ComponentPropsWithRef<typeof Popup>;
    /**
     * 自定义弹层的内容
     * @en Custom popup content
     */
    popupContent?: React.ReactNode;
    /**
     * 是否跟随 trigger 滚动
     * @en Whether to follow the trigger scroll
     */
    followTrigger?: boolean;
    /**
     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
     * @en Use local filtering, when the data source is remote, you need to close this item
     * @defaultValue true
     */
    filterLocal?: boolean;
    /**
     * 本地过滤方法，返回一个 Boolean 值确定是否保留
     * @en Local filtering method, return a Boolean value to determine whether to retain
     */
    filter?: (key: string | number, item: ObjectItem) => boolean;
    /**
     * 键盘上下键切换菜单高亮选项的回调
     * @en Callback when pressing keyboard up and down keys to switch the menu highlight option
     */
    onToggleHighlightItem?: (
        highlightKey?: string | boolean | NormalizedObjectItem | null,
        type?: HighlightChangeType
    ) => void;
    /**
     * 是否开启虚拟滚动模式
     * @en Whether to enable virtual scrolling mode
     */
    useVirtual?: boolean;
    /**
     * 传入的数据源，可以动态渲染子项
     * @en Data source, can dynamically render child items
     */
    dataSource?: Array<DataSourceItem>;
    /**
     * 渲染 MenuItem 内容的方法
     * @en Render MenuItem content
     */
    itemRender?: (item: ObjectItem) => React.ReactNode;
    /**
     * AutoComplete 发生改变时触发的回调
     * @en Callback when AutoComplete changes
     */
    onChange?: (value: string, actionType: string, item?: ObjectItem) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * 填充到选择框里的值的 key
     * @en The key to fill in the value of the selection box
     * @defaultValue 'value'
     */
    fillProps?: string;
    /**
     * 自动高亮第一个选项
     * @en Automatically highlight the first option
     * @defaultValue true
     */
    autoHighlightFirstItem?: boolean;
    /**
     * 高亮 key
     * @en Highlight key
     */
    highlightKey?: string;
    /**
     * 默认高亮 key
     * @en Default highlight key
     */
    defaultHighlightKey?: string;
    /**
     * AutoComplete 获得焦点时的回调
     * @en Callback when AutoComplete gets focus
     */
    onFocus?: InputProps['onFocus'];
    /**
     * 子元素，详细使用方法参考 demo
     * @en Child elements, reference the demo for details
     */
    children?: React.ReactNode;
    /**
     * 是否将当前高亮的选项作为 placeholder
     * @en Whether to display the current highlighted option as a placeholder
     */
    highlightHolder?: boolean;
    /**
     * 多语言文案
     * @en Language text
     * @skip
     */
    locale?: Locale['Select'];
}
/**
 * @api Select.OptionGroup
 * @order 3
 */
export interface OptionGroupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 设置分组的文案
     * @en Set the text of the group
     */
    label?: React.ReactNode;
}
/**
 * @api Select.Option
 * @order 4
 */
export interface OptionProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 选项值
     * @en Option value
     */
    value?: string | number | boolean | null | undefined;
    /**
     * 选项值，优先级低于 value
     * @en Option value, priority is lower than value
     */
    key?: React.Key;
    /**
     * 是否禁用
     * @en Whether to disable
     */
    disabled?: boolean;
    /**
     * 选项标签，优先级高于 children
     * @en Option label, priority is higher than children
     */
    label?: React.ReactNode;
    /**
     * 选项标签
     * @en Option label
     */
    children?: React.ReactNode;
}
/**
 * @api Select
 * @order 1
 */
export interface SelectProps
    extends HTMLAttributesWeak,
        Omit<InputProps, 'value' | 'defaultValue' | 'renderPreview' | 'onChange' | 'locale'>,
        CommonProps {
    /**
     * 选择器尺寸
     * @en size
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 子元素，详细使用方法参考 demo
     * @en Child elements, reference the demo for details
     */
    children?: React.ReactNode;
    /**
     * name
     * @en name
     */
    name?: string;
    /**
     * 当前值，用于受控模式
     * @en Current value, for controlled mode
     */
    value?: DataSourceItem | DataSourceItem[];
    /**
     * 初始的默认值
     * @en Initial default value
     */
    defaultValue?: DataSourceItem | DataSourceItem[];
    /**
     * 没有值的时候的占位符
     * @en Placeholder when no value
     */
    placeholder?: string;
    /**
     * 下拉菜单的宽度是否与选择器保持统一
     * @en Whether the width of the drop-down menu is unified with the selector
     * @defaultValue true
     */
    autoWidth?: boolean;
    /**
     * 自定义内联 label
     * @en Custom inline label
     */
    label?: React.ReactNode;
    /**
     * 是否有清除按钮（单选模式有效）
     * @en Whether to have a clear button (valid in single mode)
     */
    hasClear?: boolean;
    /**
     * 校验状态
     * @en Validation status
     */
    state?: 'error' | 'loading' | 'success' | 'warning';
    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     * @en Whether it is read-only, read-only mode can expand the pop-up layer but cannot select
     */
    readOnly?: boolean;
    /**
     * 是否禁用选择器
     * @en Whether to disable the selector
     */
    disabled?: boolean;
    /**
     * 当前弹层是否显示
     * @en Whether the pop-up layer is displayed
     */
    visible?: boolean;
    /**
     * 弹层初始化是否显示
     * @en Whether the pop-up layer is displayed when initialized
     */
    defaultVisible?: boolean;
    /**
     * 弹层显示或隐藏时触发的回调
     * @en Callback when the pop-up layer is displayed or hidden
     */
    onVisibleChange?: (visible: boolean, type?: VisibleChangeType) => void;
    /**
     * 弹层挂载的容器节点
     * @en Popup mounting container
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);
    /**
     * 弹层的 className
     * @en Popup class name
     */
    popupClassName?: string;
    /**
     * 弹层的内联样式
     * @en Popup inline style
     */
    popupStyle?: React.CSSProperties;
    /**
     * 添加到弹层上的属性
     * @en Props added to the popup
     */
    popupProps?: React.ComponentPropsWithRef<typeof Popup>;
    /**
     * 是否跟随 trigger 滚动
     * @en Whether to follow the trigger scroll
     */
    followTrigger?: boolean;
    /**
     * 自定义弹层的内容
     * @en Custom popup content
     */
    popupContent?: React.ReactNode;
    /**
     * 弹层菜单属性
     * @en Menu property
     * @version 1.18
     */
    menuProps?: MenuProps;
    /**
     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
     * @en Use local filtering, when the data source is remote, you need to close this item
     * @defaultValue true
     */
    filterLocal?: boolean;
    /**
     * 本地过滤方法，返回一个 Boolean 值确定是否保留
     * @en Local filtering method, return a Boolean value to determine whether to retain
     * @param key - 搜索关键字 - Search keyword
     * @param item - 渲染节点的 item - Render node item
     */
    filter?: (key: string | number, item: ObjectItem) => boolean;
    /**
     * 键盘上下键切换菜单高亮选项的回调
     * @en Callback when pressing keyboard up and down keys to switch the menu highlight option
     */
    onToggleHighlightItem?: (
        highlightKey?: string | boolean | NormalizedObjectItem | null,
        type?: HighlightChangeType
    ) => void;
    /**
     * 是否开启虚拟滚动模式
     * @en Whether to enable virtual scrolling mode
     */
    useVirtual?: boolean;
    /**
     * 传入的数据源，可以动态渲染子项
     * @en Data source, can dynamically render child items
     */
    dataSource?: Array<DataSourceItem>;
    /**
     * 渲染 MenuItem 内容的方法
     * @en Render MenuItem content method
     * @param item - 渲染节点的 item
     * @param searchValue - 搜索关键字（如果开启搜索）
     */
    itemRender?: (item: ObjectItem, searchValue: string | undefined) => React.ReactNode;
    /**
     * 选择器模式
     * @en Select mode
     * @defaultValue 'single'
     */
    mode?: 'single' | 'multiple' | 'tag';
    /**
     * 弹层内容为空的文案
     * @en Popup content is empty text
     */
    notFoundContent?: React.ReactNode;
    /**
     * Select 发生改变时触发的回调
     * @en Callback when Select changes
     * @param value - 选中的值
     * @param actionType - 触发的方式，'itemClick', 'enter', 'tag'
     * @param item - 选中的值的对象数据 (useDetailValue=false 有效)
     */
    onChange?: (
        value: DataSourceItem | DataSourceItem[],
        actionType: string,
        item?: ObjectItem | ObjectItem[]
    ) => void;
    /**
     * 是否有边框
     * @en Whether there is a border
     */
    hasBorder?: boolean;
    /**
     * 是否有下拉箭头
     * @en Whether there is a drop-down arrow
     * @defaultValue true
     */
    hasArrow?: boolean;
    /**
     * 展开后是否能搜索（tag 模式下固定为 true）
     * @en Whether it can be searched after expansion (fixed in tag mode)
     * @defaultValue false
     */
    showSearch?: boolean;
    /**
     * 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效
     * @en Whether to clear the search box after selecting the selected item, only in mode multiple or tags is valid
     * @defaultValue true
     */
    autoClearSearchValue?: boolean;
    /**
     * 当搜索框值变化时回调
     * @en Callback when the search box value changes
     */
    onSearch?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * 当搜索框值被清空时候的回调
     * @en Callback when the search box value is cleared
     */
    onSearchClear?: (actionType?: string) => void;
    /**
     * 多选模式下是否有全选功能
     * @en Whether there is a full selection function in multi-select mode
     */
    hasSelectAll?: boolean | string;
    /**
     * 填充到选择框里的值的 key
     * @en The key to fill in the value of the selection box
     */
    fillProps?: string;
    /**
     * onChange 返回的 value 使用 dataSource 的对象
     * @en onChange returns the value using the object of dataSource
     */
    useDetailValue?: boolean;
    /**
     * dataSource 变化的时是否保留已选的内容
     * @en Whether to retain the selected content when the dataSource changes
     * @defaultValue true
     */
    cacheValue?: boolean;
    /**
     * 自定义渲染 Select 选中值的效果
     * @en Custom rendering Select selected value effects
     * @defaultValue item =\> `item.label || item.value`
     */
    valueRender?: (item: ObjectItem, props?: SelectProps) => React.ReactNode;
    /**
     * 受控搜索值，一般不需要设置
     * @en Controlled search value, generally does not need to set
     */
    searchValue?: string;
    /**
     * 是否一行显示，仅在 mode 为 multiple 的时候生效
     * @en Whether it is displayed on one line, only in mode multiple
     * @defaultValue false
     */
    tagInline?: boolean;
    /**
     * 最多显示多少个 tag
     * @en Maximum number of tags to display
     */
    maxTagCount?: number;
    /**
     * tag 尺寸是否和 select 尺寸保持一致，仅在 multiple/tag 模式下有用
     * @en Whether the tag size is consistent with the select size, only in multiple/tag mode
     * @version 1.24
     * @defaultValue false
     */
    adjustTagSize?: boolean;
    /**
     * 隐藏多余 tag 时显示的内容，在 maxTagCount 生效时起作用
     * @en Content to display when hidden excess tags
     * @param selectedValues - 当前已选中的元素 - Selected Value
     * @param totalValues - 总待选元素 - Total Value
     */
    maxTagPlaceholder?: (
        selectedValues: ObjectItem[],
        totalValues: ObjectItem[]
    ) => React.ReactNode | HTMLElement;
    /**
     * 选择后是否立即隐藏菜单 (mode=multiple/tag 模式生效)
     * @en Whether to hide the menu immediately after selection (effective in mode multiple/tag)
     */
    hiddenSelected?: boolean;
    /**
     * 是否展示 dataSource 中 children
     * @en Whether to show children in dataSource
     * @defaultValue true
     */
    showDataSourceChildren?: boolean;
    /**
     * tag 删除回调
     * @en Callback when tag is deleted
     */
    onRemove?: (item: ObjectItem) => void;
    /**
     * Select 获得焦点时的回调
     * @en Callback when Select gets focus
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Select 失去焦点时的回调
     * @en Callback when Select loses focus
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Select 触发键盘事件时的回调
     * @en Callback when Select triggers keyboard events
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    /**
     * 是否为预览态
     * @en Whether it is a preview state
     */
    isPreview?: boolean;
    /**
     * 渲染预览态的内容
     * @en Render preview content
     * @param values - 选中的值 - Value
     * @param props - 当前的属性 - Props
     */
    renderPreview?: (
        values: DataSourceItem | DataSourceItem[],
        props?: SelectProps
    ) => React.ReactNode;
    /**
     * 自动高亮第一个选项
     * @en Automatically highlight the first option
     * @defaultValue true
     */
    autoHighlightFirstItem?: boolean;
    /**
     * 高亮 key
     * @en Highlight key
     */
    highlightKey?: string;
    /**
     * 默认高亮 key
     * @en Default highlight key
     */
    defaultHighlightKey?: string | null;
    /**
     * 展开下拉菜单时是否自动焦点到弹层
     * @en Whether to automatically focus to the popup when expanding the drop-down menu
     * @defaultValue false
     */
    popupAutoFocus?: boolean;
    /**
     * 渲染弹层使用的组件
     * @en Component used to render the popup
     */
    popupComponent?: React.FunctionComponent | React.ComponentClass | string;
    /**
     * 是否可以关闭 tag
     * @en Whether tag can be closed
     * @version 1.20
     * @defaultValue true
     */
    tagClosable?: boolean;
    /**
     * 多语言文案
     * @en Language text
     * @skip
     */
    locale?: Locale['Select'];
    /**
     * 输入框值变化时的回调
     * @en Callback when the value of the input box changes
     * @skip
     * @deprecated use onSearch & showSearch instead
     */
    onInputUpdate?: SelectProps['onSearch'];
    /**
     * @deprecated use hasBorder=false instead
     * @skip
     */
    shape?: string;
    /**
     * @deprecated use popupContainer instead
     * @skip
     */
    container?: SelectProps['popupContainer'];
    /**
     * @deprecated use filter instead
     * @skip
     */
    filterBy?: SelectProps['filter'];
    /**
     * @deprecated use popupContent instead
     * @skip
     */
    overlay?: SelectProps['popupContent'];
    /**
     * @deprecated use notFoundContent instead
     * @skip
     */
    noFoundContent?: SelectProps['notFoundContent'];
    /**
     * @deprecated use popupProps.safeNode instead
     * @skip
     */
    safeNode?: NonNullable<SelectProps['popupProps']>['safeNode'];
    /**
     * @deprecated use mode=multiple instead
     * @skip
     */
    multiple?: boolean;
}
export interface BaseProps
    extends Omit<CommonProps, 'locale'>,
        Pick<
            SelectProps,
            | 'size'
            | 'autoWidth'
            | 'onChange'
            | 'onVisibleChange'
            | 'onToggleHighlightItem'
            | 'popupProps'
            | 'filterLocal'
            | 'filter'
            | 'itemRender'
            | 'autoHighlightFirstItem'
            | 'showDataSourceChildren'
            | 'defaultHighlightKey'
            | 'highlightKey'
            | 'mode'
            | 'defaultValue'
            | 'defaultVisible'
            | 'value'
            | 'visible'
            | 'dataSource'
            | 'children'
            | 'label'
            | 'popupStyle'
            | 'disabled'
            | 'popupAutoFocus'
            | 'popupContent'
            | 'menuProps'
            | 'notFoundContent'
            | 'useVirtual'
            | 'popupComponent'
            | 'popupContainer'
            | 'popupClassName'
            | 'followTrigger'
            | 'isPreview'
            | 'style'
            | 'className'
            | 'valueRender'
            | 'fillProps'
            | 'locale'
            | `data-${string}`
        > {
    canCloseByTrigger?: boolean;
    cache?: boolean;
    onChange?: (...rest: any[]) => void;
    renderPreview?: (values: any, props?: SelectProps | InputProps) => React.ReactNode;
}
export interface DataStoreOptions {
    filter?: BaseProps['filter'];
    filterLocal?: BaseProps['filterLocal'];
    showDataSourceChildren?: BaseProps['showDataSourceChildren'];
    addonKey?: boolean;
    key?: string | number | null;
}
export {};

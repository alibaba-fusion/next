import React, { Component, type KeyboardEvent, type DetailedHTMLProps, type HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import Select from '../select';
import Cascader, { type CascaderDataItem, type Extra } from '../cascader';
import { type ClassPropsWithDefault } from '../util';
import type { CascaderSelectDataItem, CascaderSelectProps, CascaderSelectState, CascaderSelectVisibleChangeType } from './types';
declare const Popup: import("../config-provider/types").ConfiguredComponentClass<import("../overlay").PopupProps & import("../config-provider/types").ComponentCommonProps, {
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
            updateContainer: () => void; /**
             * CascaderSelect
             */
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
            updateContainer: () => void; /**
             * CascaderSelect
             */
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
                updateContainer: () => void; /**
                 * CascaderSelect
                 */
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
                updateContainer: () => void; /**
                 * CascaderSelect
                 */
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
}, Pick<{
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
            updateContainer: () => void; /**
             * CascaderSelect
             */
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
            updateContainer: () => void; /**
             * CascaderSelect
             */
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
                updateContainer: () => void; /**
                 * CascaderSelect
                 */
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
                updateContainer: () => void; /**
                 * CascaderSelect
                 */
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
}, "overlay">>;
export type CascaderSelectPropsWithDefault = ClassPropsWithDefault<CascaderSelectProps, typeof CascaderSelect.defaultProps>;
/**
 * CascaderSelect
 */
declare class CascaderSelect extends Component<CascaderSelectProps, CascaderSelectState> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        hasArrow: PropTypes.Requireable<boolean>;
        hasBorder: PropTypes.Requireable<boolean>;
        hasClear: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        readOnly: PropTypes.Requireable<boolean>;
        dataSource: PropTypes.Requireable<(object | null | undefined)[]>;
        defaultValue: PropTypes.Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
        value: PropTypes.Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        defaultExpandedValue: PropTypes.Requireable<(string | null | undefined)[]>;
        expandedValue: PropTypes.Requireable<(string | null | undefined)[]>;
        expandTriggerType: PropTypes.Requireable<string>;
        onExpand: PropTypes.Requireable<(...args: any[]) => any>;
        useVirtual: PropTypes.Requireable<boolean>;
        multiple: PropTypes.Requireable<boolean>;
        changeOnSelect: PropTypes.Requireable<boolean>;
        canOnlyCheckLeaf: PropTypes.Requireable<boolean>;
        checkStrictly: PropTypes.Requireable<boolean>;
        listStyle: PropTypes.Requireable<object>;
        listClassName: PropTypes.Requireable<string>;
        displayRender: PropTypes.Requireable<(...args: any[]) => any>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        showSearch: PropTypes.Requireable<boolean>;
        filter: PropTypes.Requireable<(...args: any[]) => any>;
        onSearch: PropTypes.Requireable<(...args: any[]) => any>;
        resultRender: PropTypes.Requireable<(...args: any[]) => any>;
        resultAutoWidth: PropTypes.Requireable<boolean>;
        notFoundContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        locale: PropTypes.Requireable<object>;
        loadData: PropTypes.Requireable<(...args: any[]) => any>;
        header: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        footer: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        defaultVisible: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        popupStyle: PropTypes.Requireable<object>;
        popupClassName: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
        popupProps: PropTypes.Requireable<object>;
        followTrigger: PropTypes.Requireable<boolean>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        immutable: PropTypes.Requireable<boolean>;
        /**
         * 查询选中后清除查询条件
         */
        autoClearSearchValue: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        size: string;
        disabled: boolean;
        hasArrow: boolean;
        hasBorder: boolean;
        hasClear: boolean;
        dataSource: never[];
        defaultValue: null;
        expandTriggerType: string;
        onExpand: () => void;
        useVirtual: boolean;
        multiple: boolean;
        changeOnSelect: boolean;
        canOnlyCheckLeaf: boolean;
        checkStrictly: boolean;
        showSearch: boolean;
        filter: (searchValue: string, path: Array<{
            label: string;
            value: string;
        }>) => boolean;
        resultRender: (searchValue: string, path: Array<{
            label: string;
            value: string;
        }>) => React.JSX.Element;
        resultAutoWidth: boolean;
        defaultVisible: boolean;
        onVisibleChange: () => void;
        popupProps: {};
        immutable: boolean;
        locale: Partial<{
            selectPlaceholder: string;
            autoCompletePlaceholder: string;
            notFoundContent: string;
            maxTagPlaceholder: string;
            selectAll: string;
            selectPlaceHolder?: string | undefined;
            autoCompletePlaceHolder?: string | undefined;
        }> & {
            momentLocale?: string | undefined;
        };
        autoClearSearchValue: boolean;
    };
    readonly props: CascaderSelectPropsWithDefault;
    _valueDataCache: Record<string, CascaderSelectDataItem>;
    _v2n: Record<string, CascaderSelectDataItem>;
    _p2n: Record<string, CascaderSelectDataItem>;
    select: InstanceType<typeof Select>;
    cascader: InstanceType<typeof Cascader>;
    popup: InstanceType<typeof Popup>;
    cascaderHeight: string | number;
    constructor(props: CascaderSelectProps);
    static getDerivedStateFromProps(props: CascaderSelectPropsWithDefault): Partial<CascaderSelectState>;
    /**
     * 使组件获得焦点
     * @public
     */
    focus(): void;
    updateCache(dataSource: CascaderDataItem[]): void;
    flatValue(value: string[]): string[];
    isDescendantOrSelf(currentPos: string | undefined | null, targetPos: string | undefined | null): boolean;
    getValue(pos: string): string | null;
    getPos(value: string): string | null;
    getData(value: string[]): CascaderSelectDataItem[];
    getLabelPath(data: CascaderSelectDataItem): React.ReactNode[];
    getSingleData(value: string | string[]): CascaderSelectDataItem | null;
    getMultipleData(value: string[]): CascaderSelectDataItem[] | null;
    getIndeterminate(value: string[]): string[];
    saveSelectRef(ref: InstanceType<typeof Select>): void;
    saveCascaderRef(ref: InstanceType<typeof Cascader>): void;
    completeValue(value: string[]): string[];
    isLeaf(data: CascaderSelectDataItem): boolean;
    handleVisibleChange(visible: boolean, type?: CascaderSelectVisibleChangeType): void;
    handleKeyDown(e: KeyboardEvent<HTMLElement>): void;
    getPopup(ref: InstanceType<typeof Popup>): void;
    handleAfterOpen(): void;
    handleSelect(value: unknown, data: CascaderSelectDataItem): void;
    /**
     * 刷新值数据缓存，删除无效值
     * @param curValue - 当前值
     */
    refreshValueDataCache: (curValue: string | string[]) => void;
    handleChange(value: string[], data: CascaderSelectDataItem[], extra: Extra): void;
    handleClear(): void;
    handleRemove(currentData: CascaderSelectDataItem): void;
    handleSearch(searchValue: string): void;
    getPath(pos: string): CascaderSelectDataItem[];
    filterItems(): CascaderSelectDataItem[][];
    renderNotFound(): React.JSX.Element;
    renderCascader(): React.JSX.Element;
    renderPopupContent(): React.JSX.Element;
    renderPreview(others: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: typeof CascaderSelect;
export default _default;

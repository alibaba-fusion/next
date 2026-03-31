import React, { Component, type ComponentRef, type ReactElement, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import { type PopupProps } from '../../overlay';
import { type ClassPropsWithDefault } from '../../util';
import type { ChildItemPropsInMenu, ItemProps, PopupItemProps } from '../types';
declare const Popup: import("../../config-provider/types").ConfiguredComponentClass<PopupProps & import("../../config-provider/types").ComponentCommonProps, {
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
            setState<K extends "containerNode">(state: import("../../overlay/types").GatewayState | ((prevState: Readonly<import("../../overlay/types").GatewayState>, props: Readonly<import("../../overlay").GatewayProps>) => import("../../overlay/types").GatewayState | Pick<import("../../overlay/types").GatewayState, K> | null) | Pick<import("../../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../../overlay").GatewayProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<import("../../overlay/types").GatewayState>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay").GatewayProps>, prevState: Readonly<import("../../overlay/types").GatewayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
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
        componentDidUpdate(prevProps: import("../../overlay/types").OverlayV1Props): void;
        componentWillUnmount(): void;
        doAnimation(open: boolean, close: boolean): void;
        getAnimation(props: import("../../overlay/types").OverlayV1Props): string | boolean | import("../../overlay/types").AnimationObjectType;
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
        handleDocumentKeyDown(e: KeyboardEvent): void;
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
            setState<K extends "containerNode">(state: import("../../overlay/types").GatewayState | ((prevState: Readonly<import("../../overlay/types").GatewayState>, props: Readonly<import("../../overlay").GatewayProps>) => import("../../overlay/types").GatewayState | Pick<import("../../overlay/types").GatewayState, K> | null) | Pick<import("../../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../../overlay").GatewayProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<import("../../overlay/types").GatewayState>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay").GatewayProps>, prevState: Readonly<import("../../overlay/types").GatewayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
        } | null) => void;
        getInstance(): any;
        render(): React.JSX.Element;
        context: any;
        setState<K_1 extends keyof import("../../overlay/types").OverlayState>(state: import("../../overlay/types").OverlayState | ((prevState: Readonly<import("../../overlay/types").OverlayState>, props: Readonly<import("../../overlay/types").OverlayV1Props>) => import("../../overlay/types").OverlayState | Pick<import("../../overlay/types").OverlayState, K_1> | null) | Pick<import("../../overlay/types").OverlayState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../../overlay/types").OverlayV1Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<import("../../overlay/types").OverlayState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay/types").OverlayV1Props>, prevState: Readonly<import("../../overlay/types").OverlayState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): void;
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
                setState<K extends "containerNode">(state: import("../../overlay/types").GatewayState | ((prevState: Readonly<import("../../overlay/types").GatewayState>, props: Readonly<import("../../overlay").GatewayProps>) => import("../../overlay/types").GatewayState | Pick<import("../../overlay/types").GatewayState, K> | null) | Pick<import("../../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../../overlay").GatewayProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                state: Readonly<import("../../overlay/types").GatewayState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay").GatewayProps>, prevState: Readonly<import("../../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
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
            componentDidUpdate(prevProps: import("../../overlay/types").OverlayV1Props): void;
            componentWillUnmount(): void;
            doAnimation(open: boolean, close: boolean): void;
            getAnimation(props: import("../../overlay/types").OverlayV1Props): string | boolean | import("../../overlay/types").AnimationObjectType;
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
            handleDocumentKeyDown(e: KeyboardEvent): void;
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
                setState<K extends "containerNode">(state: import("../../overlay/types").GatewayState | ((prevState: Readonly<import("../../overlay/types").GatewayState>, props: Readonly<import("../../overlay").GatewayProps>) => import("../../overlay/types").GatewayState | Pick<import("../../overlay/types").GatewayState, K> | null) | Pick<import("../../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../../overlay").GatewayProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                state: Readonly<import("../../overlay/types").GatewayState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay").GatewayProps>, prevState: Readonly<import("../../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
            } | null) => void;
            getInstance(): any;
            render(): React.JSX.Element;
            context: any;
            setState<K_1 extends keyof import("../../overlay/types").OverlayState>(state: import("../../overlay/types").OverlayState | ((prevState: Readonly<import("../../overlay/types").OverlayState>, props: Readonly<import("../../overlay/types").OverlayV1Props>) => import("../../overlay/types").OverlayState | Pick<import("../../overlay/types").OverlayState, K_1> | null) | Pick<import("../../overlay/types").OverlayState, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../../overlay/types").OverlayV1Props> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<import("../../overlay/types").OverlayState>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay/types").OverlayV1Props>, prevState: Readonly<import("../../overlay/types").OverlayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): void;
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
        renderTrigger(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
        renderContent(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        renderPortal(): React.JSX.Element;
        render(): (React.JSX.Element | undefined)[];
        context: any;
        setState<K_2 extends "visible">(state: import("../../overlay/types").PopupState | ((prevState: Readonly<import("../../overlay/types").PopupState>, props: Readonly<PopupProps>) => import("../../overlay/types").PopupState | Pick<import("../../overlay/types").PopupState, K_2> | null) | Pick<import("../../overlay/types").PopupState, K_2> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<PopupProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<import("../../overlay/types").PopupState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<import("../../overlay/types").PopupState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<PopupProps>, prevState: Readonly<import("../../overlay/types").PopupState>): any;
        componentDidUpdate?(prevProps: Readonly<PopupProps>, prevState: Readonly<import("../../overlay/types").PopupState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<PopupProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<PopupProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<import("../../overlay/types").PopupState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<import("../../overlay/types").PopupState>, nextContext: any): void;
    } | null): void;
    render(): React.JSX.Element;
    context: any;
    setState<K_3 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<PopupProps>) => {} | Pick<{}, K_3> | null) | Pick<{}, K_3> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<PopupProps> & Readonly<{
        children?: React.ReactNode;
    }>;
    state: Readonly<{}>;
    refs: {
        [key: string]: React.ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<PopupProps>, prevState: Readonly<{}>): any;
    componentDidUpdate?(prevProps: Readonly<PopupProps>, prevState: Readonly<{}>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<PopupProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<PopupProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
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
            updateContainer: () => void;
            getChildNode(): Element | Text | null;
            saveChildRef: (ref: HTMLDivElement) => void;
            render(): React.ReactPortal | null;
            context: any;
            setState<K extends "containerNode">(state: import("../../overlay/types").GatewayState | ((prevState: Readonly<import("../../overlay/types").GatewayState>, props: Readonly<import("../../overlay").GatewayProps>) => import("../../overlay/types").GatewayState | Pick<import("../../overlay/types").GatewayState, K> | null) | Pick<import("../../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../../overlay").GatewayProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<import("../../overlay/types").GatewayState>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay").GatewayProps>, prevState: Readonly<import("../../overlay/types").GatewayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
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
        componentDidUpdate(prevProps: import("../../overlay/types").OverlayV1Props): void;
        componentWillUnmount(): void;
        doAnimation(open: boolean, close: boolean): void;
        getAnimation(props: import("../../overlay/types").OverlayV1Props): string | boolean | import("../../overlay/types").AnimationObjectType;
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
        handleDocumentKeyDown(e: KeyboardEvent): void;
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
            setState<K extends "containerNode">(state: import("../../overlay/types").GatewayState | ((prevState: Readonly<import("../../overlay/types").GatewayState>, props: Readonly<import("../../overlay").GatewayProps>) => import("../../overlay/types").GatewayState | Pick<import("../../overlay/types").GatewayState, K> | null) | Pick<import("../../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../../overlay").GatewayProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<import("../../overlay/types").GatewayState>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay").GatewayProps>, prevState: Readonly<import("../../overlay/types").GatewayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
        } | null) => void;
        getInstance(): any;
        render(): React.JSX.Element;
        context: any;
        setState<K_1 extends keyof import("../../overlay/types").OverlayState>(state: import("../../overlay/types").OverlayState | ((prevState: Readonly<import("../../overlay/types").OverlayState>, props: Readonly<import("../../overlay/types").OverlayV1Props>) => import("../../overlay/types").OverlayState | Pick<import("../../overlay/types").OverlayState, K_1> | null) | Pick<import("../../overlay/types").OverlayState, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<import("../../overlay/types").OverlayV1Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<import("../../overlay/types").OverlayState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay/types").OverlayV1Props>, prevState: Readonly<import("../../overlay/types").OverlayState>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): void;
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
                setState<K extends "containerNode">(state: import("../../overlay/types").GatewayState | ((prevState: Readonly<import("../../overlay/types").GatewayState>, props: Readonly<import("../../overlay").GatewayProps>) => import("../../overlay/types").GatewayState | Pick<import("../../overlay/types").GatewayState, K> | null) | Pick<import("../../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../../overlay").GatewayProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                state: Readonly<import("../../overlay/types").GatewayState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay").GatewayProps>, prevState: Readonly<import("../../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
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
            componentDidUpdate(prevProps: import("../../overlay/types").OverlayV1Props): void;
            componentWillUnmount(): void;
            doAnimation(open: boolean, close: boolean): void;
            getAnimation(props: import("../../overlay/types").OverlayV1Props): string | boolean | import("../../overlay/types").AnimationObjectType;
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
            handleDocumentKeyDown(e: KeyboardEvent): void;
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
                setState<K extends "containerNode">(state: import("../../overlay/types").GatewayState | ((prevState: Readonly<import("../../overlay/types").GatewayState>, props: Readonly<import("../../overlay").GatewayProps>) => import("../../overlay/types").GatewayState | Pick<import("../../overlay/types").GatewayState, K> | null) | Pick<import("../../overlay/types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
                forceUpdate(callback?: (() => void) | undefined): void;
                readonly props: Readonly<import("../../overlay").GatewayProps> & Readonly<{
                    children?: React.ReactNode;
                }>;
                state: Readonly<import("../../overlay/types").GatewayState>;
                refs: {
                    [key: string]: React.ReactInstance;
                };
                shouldComponentUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): boolean;
                componentWillUnmount?(): void;
                componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
                getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay").GatewayProps>, prevState: Readonly<import("../../overlay/types").GatewayState>): any;
                componentWillMount?(): void;
                UNSAFE_componentWillMount?(): void;
                componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
                UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextContext: any): void;
                componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
                UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay").GatewayProps>, nextState: Readonly<import("../../overlay/types").GatewayState>, nextContext: any): void;
            } | null) => void;
            getInstance(): any;
            render(): React.JSX.Element;
            context: any;
            setState<K_1 extends keyof import("../../overlay/types").OverlayState>(state: import("../../overlay/types").OverlayState | ((prevState: Readonly<import("../../overlay/types").OverlayState>, props: Readonly<import("../../overlay/types").OverlayV1Props>) => import("../../overlay/types").OverlayState | Pick<import("../../overlay/types").OverlayState, K_1> | null) | Pick<import("../../overlay/types").OverlayState, K_1> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<import("../../overlay/types").OverlayV1Props> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<import("../../overlay/types").OverlayState>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): boolean;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<import("../../overlay/types").OverlayV1Props>, prevState: Readonly<import("../../overlay/types").OverlayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<import("../../overlay/types").OverlayV1Props>, nextState: Readonly<import("../../overlay/types").OverlayState>, nextContext: any): void;
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
        renderTrigger(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
        renderContent(): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        renderPortal(): React.JSX.Element;
        render(): (React.JSX.Element | undefined)[];
        context: any;
        setState<K_2 extends "visible">(state: import("../../overlay/types").PopupState | ((prevState: Readonly<import("../../overlay/types").PopupState>, props: Readonly<PopupProps>) => import("../../overlay/types").PopupState | Pick<import("../../overlay/types").PopupState, K_2> | null) | Pick<import("../../overlay/types").PopupState, K_2> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<PopupProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<import("../../overlay/types").PopupState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<import("../../overlay/types").PopupState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<PopupProps>, prevState: Readonly<import("../../overlay/types").PopupState>): any;
        componentDidUpdate?(prevProps: Readonly<PopupProps>, prevState: Readonly<import("../../overlay/types").PopupState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<PopupProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<PopupProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<import("../../overlay/types").PopupState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<import("../../overlay/types").PopupState>, nextContext: any): void;
    } | null): void;
    render(): React.JSX.Element;
    context: any;
    setState<K_3 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<PopupProps>) => {} | Pick<{}, K_3> | null) | Pick<{}, K_3> | null, callback?: (() => void) | undefined): void;
    forceUpdate(callback?: (() => void) | undefined): void;
    readonly props: Readonly<PopupProps> & Readonly<{
        children?: React.ReactNode;
    }>;
    state: Readonly<{}>;
    refs: {
        [key: string]: React.ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<{}>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<PopupProps>, prevState: Readonly<{}>): any;
    componentDidUpdate?(prevProps: Readonly<PopupProps>, prevState: Readonly<{}>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<PopupProps>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<PopupProps>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<PopupProps>, nextState: Readonly<{}>, nextContext: any): void;
}, "overlay">>;
export type PopupItemWithDefaultsProps = ClassPropsWithDefault<PopupItemProps, typeof PopupItem.defaultProps>;
export type PopupItemInMenuProps = ChildItemPropsInMenu<PopupItemWithDefaultsProps>;
export default class PopupItem extends Component<PopupItemProps> {
    static menuChildType: string;
    static propTypes: {
        _key: PropTypes.Requireable<string>;
        root: PropTypes.Requireable<object>;
        level: PropTypes.Requireable<number>;
        hasSubMenu: PropTypes.Requireable<boolean>;
        noIcon: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        selectable: PropTypes.Requireable<boolean>;
        /**
         * 标签内容
         */
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 自定义弹层内容
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        /**
         * 子菜单打开的触发行为
         */
        triggerType: PropTypes.Requireable<string>;
        align: PropTypes.Requireable<string>;
        autoWidth: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        selectable: boolean;
        noIcon: boolean;
    };
    popup: ComponentRef<typeof Popup> | null;
    popupProps: PopupProps;
    popupNode: HTMLElement;
    readonly props: PopupItemWithDefaultsProps;
    constructor(props: PopupItemProps);
    getPopup(ref: ComponentRef<typeof Popup> | null): void;
    getOpen(): boolean;
    getPopupProps(): PopupProps;
    handleOpen: NonNullable<PopupProps['onVisibleChange']>;
    handlePopupOpen(): null | undefined;
    handlePopupClose(): void;
    renderItem(selectable: boolean | undefined, children: ReactNode, others: ItemProps): React.JSX.Element;
    renderPopup(trigger: ReactElement, triggerType: PopupProps['triggerType'], positionProps: PopupProps, children: ReactNode): React.JSX.Element;
    render(): React.JSX.Element;
}
export {};

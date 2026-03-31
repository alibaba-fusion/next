import React, { Component, type UIEvent, type ReactInstance, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import Gateway from './gateway';
import type { OverlayV1Props, OverlayState, AnimationObjectType } from './types';
/**
 * Overlay
 */
declare class Overlay extends Component<OverlayV1Props, OverlayState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<any>;
        visible: PropTypes.Requireable<boolean>;
        onRequestClose: PropTypes.Requireable<(...args: any[]) => any>;
        target: PropTypes.Requireable<any>;
        align: PropTypes.Requireable<string>;
        offset: PropTypes.Requireable<any[]>;
        container: PropTypes.Requireable<any>;
        hasMask: PropTypes.Requireable<boolean>;
        canCloseByEsc: PropTypes.Requireable<boolean>;
        canCloseByOutSideClick: PropTypes.Requireable<boolean>;
        canCloseByMask: PropTypes.Requireable<boolean>;
        beforeOpen: PropTypes.Requireable<(...args: any[]) => any>;
        onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        afterOpen: PropTypes.Requireable<(...args: any[]) => any>;
        beforeClose: PropTypes.Requireable<(...args: any[]) => any>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        afterClose: PropTypes.Requireable<(...args: any[]) => any>;
        beforePosition: PropTypes.Requireable<(...args: any[]) => any>;
        onPosition: PropTypes.Requireable<(...args: any[]) => any>;
        shouldUpdatePosition: PropTypes.Requireable<boolean>;
        autoFocus: PropTypes.Requireable<boolean>;
        needAdjust: PropTypes.Requireable<boolean>;
        disableScroll: PropTypes.Requireable<boolean>;
        useCapture: PropTypes.Requireable<boolean>;
        cache: PropTypes.Requireable<boolean>;
        safeNode: PropTypes.Requireable<any>;
        wrapperClassName: PropTypes.Requireable<string>;
        wrapperStyle: PropTypes.Requireable<object>;
        animation: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        onMaskMouseEnter: PropTypes.Requireable<(...args: any[]) => any>;
        onMaskMouseLeave: PropTypes.Requireable<(...args: any[]) => any>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        maskClass: PropTypes.Requireable<string>;
        isChildrenInMask: PropTypes.Requireable<boolean>;
        pinFollowBaseElementWhenFixed: PropTypes.Requireable<boolean>;
        v2: PropTypes.Requireable<boolean>;
        points: PropTypes.Requireable<any[]>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        visible: boolean;
        onRequestClose: () => void;
        target: "viewport";
        align: string;
        offset: number[];
        hasMask: boolean;
        canCloseByEsc: boolean;
        canCloseByOutSideClick: boolean;
        canCloseByMask: boolean;
        beforeOpen: () => void;
        onOpen: () => void;
        afterOpen: () => void;
        beforeClose: () => void;
        onClose: () => void;
        afterClose: () => void;
        beforePosition: () => void;
        onPosition: () => void;
        onMaskMouseEnter: () => void;
        onMaskMouseLeave: () => void;
        shouldUpdatePosition: boolean;
        autoFocus: boolean;
        needAdjust: boolean;
        disableScroll: boolean;
        cache: boolean;
        isChildrenInMask: boolean;
        onTouchEnd: (event: UIEvent) => void;
        onClick: (event: UIEvent) => void;
        maskClass: string;
        useCapture: boolean;
    };
    static displayName: string;
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
    contentRef: ReactInstance & {
        headerNode: HTMLElement;
        bodyNode: HTMLElement;
        footerNode: HTMLDivElement;
    };
    gatewayRef: InstanceType<typeof Gateway> | null;
    _keydownEvents: {
        off: () => void;
    } | null;
    _clickEvents: {
        off: () => void;
    } | null;
    _touchEvents: {
        off: () => void;
    } | null;
    overlay: InstanceType<typeof Overlay> | null;
    constructor(props: OverlayV1Props);
    static getDerivedStateFromProps(nextProps: OverlayV1Props, prevState: OverlayState): Partial<OverlayState>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: OverlayV1Props): void;
    componentWillUnmount(): void;
    doAnimation(open: boolean, close: boolean): void;
    getAnimation(props: OverlayV1Props): string | boolean | AnimationObjectType;
    getAnimationByAlign(align: Array<string> | string | boolean | undefined): {
        in: string;
        out: string;
    };
    addAnimationEvents(): void;
    handlePosition(config: {
        align: Array<string>;
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
    /**
     * document global event
     */
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
    handleMaskClick(e: MouseEvent<Element>): void;
    saveContentRef: (ref: ReactInstance & {
        headerNode: HTMLElement;
        bodyNode: HTMLElement;
        footerNode: HTMLDivElement;
    }) => void;
    saveGatewayRef: (ref: InstanceType<typeof Gateway> | null) => void;
    getInstance(): this;
    render(): React.JSX.Element;
}
declare const _default: typeof Overlay;
export default _default;

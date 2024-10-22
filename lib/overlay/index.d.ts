import React, { Component } from 'react';
import Overlay1 from './overlay';
import Position from './position';
import Popup1 from './popup';
import type { GatewayProps, OverlayProps, PopupProps, PositionProps } from './types';
declare class Overlay extends Component<OverlayProps> {
    static displayName: string;
    overlayRef: InstanceType<typeof Overlay1> | null;
    constructor(props: OverlayProps);
    saveRef(ref: InstanceType<typeof Overlay1> | null): void;
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */
    getContent(): (React.ReactInstance & {
        headerNode: HTMLElement;
        bodyNode: HTMLElement;
        footerNode: HTMLDivElement;
    }) | null;
    /**
     * 兼容 1.x API, will be removed in 2.1.0
     */
    getContentNode(): HTMLElement | null;
    render(): React.JSX.Element;
}
declare class Popup extends Component<PopupProps> {
    static displayName: string;
    overlay: InstanceType<typeof Overlay1> | null;
    constructor(props: PopupProps);
    saveRef(ref: InstanceType<typeof Popup1> | null): void;
    render(): React.JSX.Element;
}
declare const _default: import("../config-provider/types").ConfiguredComponentClass<OverlayProps & import("../config-provider/types").ComponentCommonProps, Overlay, Pick<Overlay, "getContent" | "getContentNode">> & {
    Popup: import("../config-provider/types").ConfiguredComponentClass<PopupProps & import("../config-provider/types").ComponentCommonProps, Popup, Pick<Popup, "overlay">>;
    Gateway: {
        new (props: GatewayProps): {
            child: Element | null | undefined;
            componentDidMount(): void;
            componentDidUpdate(): void;
            updateContainer: () => void;
            getChildNode(): Element | Text | null;
            saveChildRef: (ref: HTMLDivElement) => void;
            render(): React.ReactPortal | null;
            context: any;
            setState<K extends "containerNode">(state: import("./types").GatewayState | ((prevState: Readonly<import("./types").GatewayState>, props: Readonly<GatewayProps>) => import("./types").GatewayState | Pick<import("./types").GatewayState, K> | null) | Pick<import("./types").GatewayState, K> | null, callback?: (() => void) | undefined): void;
            forceUpdate(callback?: (() => void) | undefined): void;
            readonly props: Readonly<GatewayProps> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<import("./types").GatewayState>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            shouldComponentUpdate?(nextProps: Readonly<GatewayProps>, nextState: Readonly<import("./types").GatewayState>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<GatewayProps>, prevState: Readonly<import("./types").GatewayState>): any;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<GatewayProps>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<GatewayProps>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<GatewayProps>, nextState: Readonly<import("./types").GatewayState>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<GatewayProps>, nextState: Readonly<import("./types").GatewayState>, nextContext: any): void;
        };
        displayName: string;
        propTypes: {
            children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
            container: import("prop-types").Requireable<any>;
            target: import("prop-types").Requireable<any>;
        };
        defaultProps: {
            container: () => HTMLElement;
        };
        contextType?: React.Context<any> | undefined;
    };
    Position: typeof Position;
};
export default _default;
export type { OverlayProps, PopupProps, GatewayProps, PositionProps };

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Overlay from '../overlay';
import type { DrawerProps, InnerProps } from './types';
interface CloseConfig {
    canCloseByEsc?: boolean;
    canCloseByCloseClick?: boolean;
    canCloseByMask?: boolean;
}
/**
 * Drawer
 * 继承 Overlay.Popup 的 API，除非特别说明
 * */
export default class Drawer extends Component<DrawerProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        trigger: PropTypes.Requireable<PropTypes.ReactElementLike>;
        triggerType: PropTypes.Requireable<NonNullable<string | any[] | null | undefined>>;
        width: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        height: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        closeable: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        cache: PropTypes.Requireable<boolean>;
        closeMode: PropTypes.Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        afterOpen: PropTypes.Requireable<(...args: any[]) => any>;
        placement: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        headerStyle: PropTypes.Requireable<object>;
        bodyStyle: PropTypes.Requireable<object>;
        visible: PropTypes.Requireable<boolean>;
        hasMask: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        animation: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        locale: PropTypes.Requireable<object>;
        popupContainer: PropTypes.Requireable<any>;
        v2: PropTypes.Requireable<boolean>;
        afterClose: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        prefix: string;
        triggerType: string;
        trigger: null;
        closeable: boolean;
        onClose: ((e: React.MouseEvent<Element, MouseEvent>) => void) | undefined;
        hasMask: boolean;
        placement: string;
        locale: {
            close: string;
        };
    };
    private overlay;
    getAlign: (placement: string | undefined) => string;
    getAnimation: (placement: string | undefined) => false | {
        in: string;
        out: string;
    } | undefined;
    getOverlayRef: (ref: Overlay | null) => void;
    mapcloseableToConfig: (closeable: boolean | string) => CloseConfig;
    handleVisibleChange: (visible: boolean, reason: string, e: React.MouseEvent) => void;
    renderInner(closeable: InnerProps['closeable']): React.JSX.Element;
    render(): React.JSX.Element;
}
export {};

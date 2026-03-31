import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../overlay';
import type { DialogV1Props } from './types';
/**
 * Dialog
 */
export default class Dialog extends Component<DialogV1Props> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        visible: PropTypes.Requireable<boolean>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        footer: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        footerAlign: PropTypes.Requireable<string>;
        footerActions: PropTypes.Requireable<any[]>;
        onOk: PropTypes.Requireable<(...args: any[]) => any>;
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        okProps: PropTypes.Requireable<object>;
        cancelProps: PropTypes.Requireable<object>;
        closeMode: PropTypes.Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
        cache: PropTypes.Requireable<boolean>;
        afterClose: PropTypes.Requireable<(...args: any[]) => any>;
        hasMask: PropTypes.Requireable<boolean>;
        animation: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        autoFocus: PropTypes.Requireable<boolean>;
        overlayProps: PropTypes.Requireable<object>;
        locale: PropTypes.Requireable<object>;
        popupContainer: PropTypes.Requireable<any>;
        height: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        v2: PropTypes.Requireable<boolean>;
        width: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        top: PropTypes.Requireable<number>;
        bottom: PropTypes.Requireable<number>;
        closeIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        centered: PropTypes.Requireable<boolean>;
        overflowScroll: PropTypes.Requireable<boolean>;
        wrapperClassName: PropTypes.Requireable<string>;
        closeable: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        align: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        isFullScreen: PropTypes.Requireable<boolean>;
        shouldUpdatePosition: PropTypes.Requireable<boolean>;
        minMargin: PropTypes.Requireable<number>;
        noPadding: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        visible: boolean;
        footerAlign: string;
        footerActions: string[];
        onOk: () => void;
        onCancel: () => void;
        cache: boolean;
        okProps: {};
        cancelProps: {};
        closeable: string;
        onClose: () => void;
        afterClose: () => void;
        centered: boolean;
        hasMask: boolean;
        animation: {
            in: string;
            out: string;
        };
        autoFocus: boolean;
        align: string;
        isFullScreen: boolean;
        overflowScroll: boolean;
        shouldUpdatePosition: boolean;
        minMargin: number;
        bottom: number;
        overlayProps: {};
        locale: Partial<Partial<{
            close: string;
            ok: string;
            cancel: string;
        }>> & {
            momentLocale?: string | undefined;
        };
        noPadding: boolean;
    };
    static displayName: string;
    overlay: InstanceType<typeof Overlay> | null;
    private _lastDialogHeight;
    dialogBodyStyleMaxHeight: string;
    dialogBodyStyleOverflowY: string;
    constructor(props: DialogV1Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    useCSSToPosition(): boolean | undefined;
    onKeyDown(e: KeyboardEvent): void;
    beforePosition(): void;
    adjustPosition(): void;
    adjustSize(inner: {
        headerNode: HTMLElement;
        bodyNode: HTMLElement;
        footerNode: HTMLDivElement;
    }, node: HTMLElement, expectHeight: number): void;
    revertSize(bodyNode: HTMLElement): void;
    mapcloseableToConfig(closeable: NonNullable<DialogV1Props['closeable']>): Record<string, boolean>;
    getOverlayRef(ref: InstanceType<typeof Overlay> | null): void;
    getInner(): (React.ReactInstance & {
        headerNode: HTMLElement;
        bodyNode: HTMLElement;
        footerNode: HTMLDivElement;
    }) | null;
    getInnerNode(): HTMLElement | null;
    renderInner(closeable: boolean): React.JSX.Element;
    render(): React.JSX.Element;
}

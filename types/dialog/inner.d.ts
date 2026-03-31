import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { InnerProps } from './types';
export default class Inner extends Component<InnerProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        footer: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        footerAlign: PropTypes.Requireable<string>;
        footerActions: PropTypes.Requireable<any[]>;
        onOk: PropTypes.Requireable<(...args: any[]) => any>;
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        okProps: PropTypes.Requireable<object>;
        cancelProps: PropTypes.Requireable<object>;
        closeable: PropTypes.Requireable<boolean>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
        role: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        width: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        height: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        maxHeight: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        v2: PropTypes.Requireable<boolean>;
        closeIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        pure: PropTypes.Requireable<boolean>;
        noPadding: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        footerAlign: string;
        footerActions: string[];
        onOk: () => void;
        onCancel: () => void;
        okProps: {};
        cancelProps: {};
        closeable: boolean;
        onClose: () => void;
        locale: Partial<
            Partial<{
                close: string;
                ok: string;
                cancel: string;
            }>
        > & {
            momentLocale?: string | undefined;
        };
        role: string;
    };
    bodyNode: HTMLElement;
    headerNode: HTMLElement;
    footerNode: HTMLElement;
    titleId: string;
    componentDidUpdate(): void;
    getNode(name: 'headerNode' | 'bodyNode' | 'footerNode', ref: HTMLDivElement): void;
    renderHeader(): React.JSX.Element | null;
    renderBody(): React.JSX.Element | null;
    renderFooter(): React.JSX.Element | null;
    renderCloseLink(): React.JSX.Element | null;
    render(): React.JSX.Element;
}

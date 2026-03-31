import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { InnerProps } from './types';
export default class Inner extends Component<InnerProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        closeable: PropTypes.Requireable<boolean>;
        role: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        placement: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
        headerStyle: PropTypes.Requireable<object>;
        bodyStyle: PropTypes.Requireable<object>;
        afterClose: PropTypes.Requireable<(...args: any[]) => any>;
        beforeOpen: PropTypes.Requireable<(...args: any[]) => any>;
        beforeClose: PropTypes.Requireable<(...args: any[]) => any>;
        cache: PropTypes.Requireable<boolean>;
        shouldUpdatePosition: PropTypes.Requireable<boolean>;
        v2: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        closeable: boolean;
        role: string;
        onClose: () => void;
        locale: Partial<{
            close: string;
        }> & {
            momentLocale?: string | undefined;
        };
    };
    renderHeader(): React.JSX.Element;
    renderBody(): React.JSX.Element | null;
    renderCloseLink(): React.JSX.Element | null;
    render(): React.JSX.Element;
}

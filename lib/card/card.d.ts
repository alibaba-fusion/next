import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { CardProps } from './types';
export default class Card extends Component<CardProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        media: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        subTitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        actions: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        showTitleBullet: PropTypes.Requireable<boolean>;
        showHeadDivider: PropTypes.Requireable<boolean>;
        contentHeight: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        extra: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        free: PropTypes.Requireable<boolean>;
        hasBorder: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        free: boolean;
        showTitleBullet: boolean;
        showHeadDivider: boolean;
        hasBorder: boolean;
        contentHeight: number;
    };
    render(): React.JSX.Element;
}

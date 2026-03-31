import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from '../types';
export default class Button extends Component<ButtonProps> {
    static displayName: string;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        type: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        icons: PropTypes.Requireable<PropTypes.InferProps<{
            loading: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        }>>;
        iconSize: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        htmlType: PropTypes.Requireable<string>;
        component: PropTypes.Requireable<string>;
        loading: PropTypes.Requireable<boolean>;
        ghost: PropTypes.Requireable<string | boolean>;
        text: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        onMouseUp: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        type: string;
        size: string;
        icons: {};
        htmlType: string;
        component: string;
        loading: boolean;
        ghost: boolean;
        text: boolean;
        warning: boolean;
        disabled: boolean;
        onClick: () => void;
    };
    button: HTMLButtonElement | HTMLAnchorElement | unknown;
    onMouseUp: (e: React.MouseEvent<HTMLElement>) => void;
    buttonRefHandler: (button: unknown) => void;
    render(): React.JSX.Element;
}

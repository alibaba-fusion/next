import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { type RowProps } from './types';
/**
 * Grid.Row
 * @order 1
 */
export default class Row extends Component<RowProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        /**
         * 行内容
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 列间隔
         */
        gutter: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        /**
         * 列在行中宽度溢出后是否换行
         */
        wrap: PropTypes.Requireable<boolean>;
        /**
         * 行在某一断点下宽度是否保持不变（默认行宽度随视口变化而变化）
         */
        fixed: PropTypes.Requireable<boolean>;
        fixedWidth: PropTypes.Requireable<string>;
        align: PropTypes.Requireable<string>;
        justify: PropTypes.Requireable<string>;
        hidden: PropTypes.Requireable<NonNullable<string | boolean | any[] | null | undefined>>;
        component: PropTypes.Requireable<NonNullable<string | ((...args: any[]) => any) | null | undefined>>;
        locale: PropTypes.Requireable<object>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        pure: boolean;
        fixed: boolean;
        gutter: number;
        wrap: boolean;
        component: string;
    };
    render(): React.JSX.Element;
}

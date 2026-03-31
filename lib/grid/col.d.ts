import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { type ColProps } from './types';
/**
 * Grid.Col
 * @order 2
 */
export default class Col extends Component<ColProps> {
    static isNextCol: boolean;
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        pure: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        /**
         * 列内容
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 列宽度<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
         */
        span: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        /**
         * 固定列宽度，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
         */
        fixedSpan: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        /**
         * （不支持IE9浏览器）列偏移<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
         */
        offset: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        /**
         * （不支持IE9浏览器）固定列偏移，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
         */
        fixedOffset: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        /**
         * （不支持IE9浏览器）多列垂直方向对齐方式，可覆盖Row的align属性
         */
        align: PropTypes.Requireable<string>;
        /**
         * 列在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
         */
        hidden: PropTypes.Requireable<NonNullable<string | boolean | any[] | null | undefined>>;
        xxs: PropTypes.Requireable<NonNullable<string | number | object | null | undefined>>;
        xs: PropTypes.Requireable<NonNullable<string | number | object | null | undefined>>;
        s: PropTypes.Requireable<NonNullable<string | number | object | null | undefined>>;
        m: PropTypes.Requireable<NonNullable<string | number | object | null | undefined>>;
        l: PropTypes.Requireable<NonNullable<string | number | object | null | undefined>>;
        xl: PropTypes.Requireable<NonNullable<string | number | object | null | undefined>>;
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
        component: string;
    };
    render(): React.JSX.Element;
}

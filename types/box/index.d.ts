import React from 'react';
import PropTypes from 'prop-types';
import type { BoxProps } from './types';
/**
 * Box
 */
declare class Box extends React.Component<BoxProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<any>;
        /**
         * 布局属性
         */
        flex: PropTypes.Requireable<
            NonNullable<
                | number
                | (NonNullable<string | number | null | undefined> | null | undefined)[]
                | null
                | undefined
            >
        >;
        /**
         * 布局方向，默认为 column ，一个元素占据一整行
         * @defaultValue column
         */
        direction: PropTypes.Requireable<string>;
        /**
         * 是否折行 支持IE11+
         */
        wrap: PropTypes.Requireable<boolean>;
        /**
         * 元素之间的间距 [bottom&top, right&left]
         */
        spacing: PropTypes.Requireable<
            NonNullable<number | (number | null | undefined)[] | null | undefined>
        >;
        /**
         * 设置 margin [bottom&top, right&left]
         */
        margin: PropTypes.Requireable<
            NonNullable<number | (number | null | undefined)[] | null | undefined>
        >;
        /**
         * 设置 padding [bottom&top, right&left]
         */
        padding: PropTypes.Requireable<
            NonNullable<number | (number | null | undefined)[] | null | undefined>
        >;
        /**
         * 沿着主轴方向，子元素们的排布关系 （兼容性同 justify-content ）
         */
        justify: PropTypes.Requireable<string>;
        /**
         * 垂直主轴方向，子元素们的排布关系 （兼容性同 align-items ）
         */
        align: PropTypes.Requireable<string>;
        device: PropTypes.Requireable<string>;
        /**
         * 定制标签名， 例如section等
         */
        component: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        direction: string;
        wrap: boolean;
        component: string;
    };
    render(): React.JSX.Element;
}
export type { BoxProps };
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    BoxProps & import('../config-provider/types').ComponentCommonProps,
    Box,
    {}
>;
export default _default;

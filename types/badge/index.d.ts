import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { BadgeProps } from './types';
export type { BadgeProps };
/**
 * Badge
 */
declare class Badge extends Component<BadgeProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        /**
         * 徽标依托的内容，一般显示在其右上方
         */
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 展示的数字，大于 `overflowCount` 时显示为 `${overflowCount}+`，为 `0` 时默认隐藏
         */
        count: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        /**
         * 当`count`为`0`时，是否显示 count
         * @version 1.16
         */
        showZero: PropTypes.Requireable<boolean>;
        /**
         * 自定义徽标中的内容
         */
        content: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        /**
         * 展示的封顶的数字
         */
        overflowCount: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        /**
         * 不展示数字，只展示一个小红点
         */
        dot: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefix: string;
        count: number;
        showZero: boolean;
        overflowCount: number;
        dot: boolean;
    };
    render(): React.JSX.Element;
}
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    BadgeProps & import('../config-provider/types').ComponentCommonProps,
    Badge,
    {}
>;
export default _default;

import React from 'react';
import type * as CSS from 'csstype';
import { CommonProps } from '../util';

/**
 * @api
 */
export type Spacing =
    | number
    | [topAndBottom: number, rightAndLeft: number]
    | [top: number, rightAndLeft: number, bottom: number]
    | [top: number, right: number, bottom: number, left: number];

/**
 * @api Box
 */
export interface BoxProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 同 CSS 属性 `flex`，支持数组方式设置
     * @en Same as css attribute `flex`, support array mode setting
     */
    flex?:
        | CSS.Property.Flex
        | [CSS.Property.FlexGrow, CSS.Property.FlexShrink, CSS.Property.FlexBasis];
    /**
     * 布局方向，同 CSS 属性 `flex-direction`
     * @en Layout direction, same as css attribute `flex-direction`
     * @defaultValue 'column'
     */
    direction?: CSS.Property.FlexDirection;
    /**
     * 是否折行
     * @en wrap or not
     * @defaultValue false
     */
    wrap?: boolean;
    /**
     * 元素之间的间距
     * @en Element spacing
     */
    spacing?: Spacing;
    /**
     * 容器外间距
     * @en Container outer spacing
     */
    margin?: Spacing;
    /**
     * 容器内间距
     * @en Container inner spacing
     */
    padding?: Spacing;
    /**
     * 沿着主轴方向，子元素们的排布关系，同 CSS 属性 `justify-content`
     * @en The alignment of items on the main axis, same as css attribute `justify-content`
     */
    justify?: CSS.Property.JustifyContent;
    /**
     * 沿交叉轴方向，子元素们的排布关系，同 CSS 属性 `align-items`
     * @en The alignment of items on the cross axis, same as css attribute `align-items`
     */
    align?: CSS.Property.AlignItems;
    /**
     * 定制 JSX 标签名
     * @en Custom JSX tag name
     * @defaultValue 'div'
     */
    component?: keyof React.JSX.IntrinsicElements;
}

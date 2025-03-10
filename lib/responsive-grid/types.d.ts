import type { HTMLAttributes } from 'react';
import type * as CSS from 'csstype';
import type { CommonProps } from '../util';
export type ObjectType = {
    [key: string]: unknown;
};
export type Spacing = number | [topAndRightAndBottomAndLeft: number] | [topAndBottom: number, rightAndLeft: number] | [top: number, rightAndLeft: number, bottom: number] | [top: number, right: number, bottom: number, left: number] | undefined | null;
/**
 * @api ResponsiveGrid
 * @order 0
 */
export interface ResponsiveGridProps extends HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 设备，用来做自适应，默认为 PC
     * @en device for responsive C
     * @defaultValue 'desktop'
     */
    device?: 'phone' | 'tablet' | 'desktop';
    /**
     * 分为几列， 默认是 12 列
     * @en how many columns in total, 12 by default
     * @defaultValue '12'
     */
    columns?: number | string;
    /**
     * 每个 cell 之间的间距， [bottom&top, right&left]
     * @en gap among each cell [bottom&top, right&left]
     */
    gap?: Spacing;
    /**
     * 设置标签类型
     * @en The html tag to be rendered
     * @defaultValue 'div'
     */
    component?: keyof React.JSX.IntrinsicElements;
    /**
     * 是否开启紧密模式，开启后尽可能能紧密填满，尽量不出现空格
     * @en Fill as closely as possible without spaces
     * @defaultValue 'false'
     */
    dense?: boolean;
    /**
     * @skip
     */
    rows?: number | string;
    /**
     * @skip
     */
    display?: CSS.Property.Display;
    /**
     * @skip
     * 布局方向，同 CSS 属性 `flex-direction`
     * @en Layout direction, same as css attribute `flex-direction`
     * @defaultValue 'column'
     */
    direction?: CSS.Property.Direction;
    /**
     * @skip
     */
    row?: number | string;
    /**
     * @skip
     */
    col?: number | string;
    /**
     * @skip
     * 纵向，占据几行
     * @en Vertical, occupying several lines
     */
    rowSpan?: number;
    /**
     * @skip
     * 横向，占据几列
     * @en Horizontal, occupying several columns
     */
    colSpan?: number | {
        desktop?: number;
        tablet?: number;
        phone?: number;
    };
    /**
     * @skip
     * 沿着主轴方向，子元素们的排布关系，同 CSS 属性 `justify-content`
     * @en The alignment of items on the main axis, same as css attribute `justify-content`
     */
    justify?: CSS.Property.JustifyContent;
    /**
     * @skip
     * 沿交叉轴方向，子元素们的排布关系，同 CSS 属性 `align-items`
     * @en The alignment of items on the cross axis, same as css attribute `align-items`
     */
    align?: CSS.Property.AlignItems;
    /**
     * @skip
     */
    alignSelf?: CSS.Property.AlignSelf;
    /**
     * @skip
     * 是否折行
     * @en wrap or not
     * @defaultValue false
     */
    wrap?: CSS.Property.FlexWrap;
    /**
     * @skip
     * 同 CSS 属性 `flex`，支持数组方式设置
     * @en Same as css attribute `flex`, support array mode setting
     */
    flex?: CSS.Property.Flex | [CSS.Property.FlexGrow, CSS.Property.FlexShrink, CSS.Property.FlexBasis];
    /**
     * @skip
     * 内间距
     * @en Inner Spacing
     */
    padding?: Spacing;
    /**
     * @skip
     * 外间距
     * @en Outer Spacing
     *
     */
    margin?: Spacing;
}
/**
 * @api ResponsiveGrid.Cell
 * @order 1
 */
export interface CellProps extends HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 横向，占据几列
     * @en in hoz, how many columns it takes
     */
    colSpan?: number | {
        desktop?: number;
        tablet?: number;
        phone?: number;
    };
    /**
     * 纵向，占据几行
     * @en in ver, how many rows it takes
     */
    rowSpan?: number;
    /**
     * 设置标签类型
     * @en The html tag to be rendered
     * @defaultValue 'div'
     */
    component?: keyof React.JSX.IntrinsicElements;
}

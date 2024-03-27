import { HTMLAttributes, ElementType } from 'react';
import type * as CSS from 'csstype';
import { CommonProps } from '../util';

export type Spacing =
    | number
    | [topAndRightAndBottomAndLeft: number]
    | [topAndBottom: number, rightAndLeft: number]
    | [top: number, rightAndLeft: number, bottom: number]
    | [top: number, right: number, bottom: number, left: number];

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
    component?: ElementType;
    /**
     * 是否开启紧密模式，开启后尽可能能紧密填满，尽量不出现空格
     * @en Fill as closely as possible without spaces
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
     */
    rowSpan?: number;
    /**
     * @skip
     */
    colSpan?:
        | number
        | {
              desktop?: number;
              tablet?: number;
              phone?: number;
          };
    /**
     * @skip
     */
    justify?: CSS.Property.JustifyContent;
    /**
     * @skip
     */
    align?: CSS.Property.AlignItems;
    /**
     * @skip
     */
    alignSelf?: CSS.Property.AlignSelf;
    /**
     * @skip
     */
    wrap?: CSS.Property.FlexWrap;
    /**
     * @skip
     */
    flex?:
        | CSS.Property.Flex
        | [CSS.Property.FlexGrow, CSS.Property.FlexShrink, CSS.Property.FlexBasis];
    /**
     * @skip
     */
    padding?: Spacing;
    /**
     * @skip
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
    colSpan?:
        | number
        | {
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
    component?: ElementType;
}

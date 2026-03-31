import type { ResponsiveGridProps, Spacing, ObjectType } from './types';
declare const getMargin: (
    size: Spacing,
    {
        isNegative,
        half,
    }?: {
        isNegative: boolean;
        half: boolean;
    }
) => {
    [key: string]: string | number;
};
declare const getChildMargin: (spacing: Spacing) => {
    [key: string]: string | number;
};
declare const getSpacingMargin: (spacing: Spacing) => {
    [key: string]: string | number;
};
declare const getSpacingHelperMargin: (spacing: Spacing) => {
    [key: string]: string | number;
};
declare const filterOuterStyle: (style: ObjectType) => ObjectType;
declare const filterHelperStyle: (style: ObjectType) => ObjectType;
declare const filterInnerStyle: (style: ObjectType) => ObjectType;
declare const getGridChildProps: (
    props: ResponsiveGridProps,
    device: ResponsiveGridProps['device'],
    gap?: ResponsiveGridProps['gap']
) => ObjectType;
declare const _default: ({
    device,
    display,
    gap,
    direction,
    dense,
    rowSpan,
    colSpan,
    row,
    col,
    rows,
    columns,
    justify,
    align,
    alignSelf,
    wrap,
    flex,
    padding,
    margin,
}: ResponsiveGridProps) => ObjectType;
export default _default;
export {
    getMargin,
    getChildMargin,
    getSpacingMargin,
    getSpacingHelperMargin,
    filterInnerStyle,
    filterOuterStyle,
    filterHelperStyle,
    getGridChildProps,
};

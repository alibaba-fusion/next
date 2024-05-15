import { filterUndefinedValue, stripObject } from './util';
import { env } from '../util';
import type { ResponsiveGridProps, Spacing, ObjectType } from './types';

const { ieVersion } = env;
const getPadding = (padding: Spacing) => {
    if (!Array.isArray(padding)) {
        return {
            padding,
        };
    }

    const attrs = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
    const paddings: { [key: string]: number | string } = {};
    let value;

    attrs.forEach((attr, index) => {
        switch (padding.length) {
            case 1:
                value = padding[0] || 0;
                break;
            case 2:
                value = padding[index] || padding[index - 2] || 0;
                break;
            case 3:
                value = index === 2 ? padding[2] : padding[index] || padding[index - 2] || 0;
                break;
            case 4:
            default:
                value = padding[index] || 0;
                break;
        }
        paddings[attr] = value;
    });

    return paddings;
};

const getMargin = (size: Spacing, { isNegative, half } = { isNegative: false, half: false }) => {
    if (!size) {
        return {};
    }
    const attrs = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'];
    const margins: { [key: string]: number | string } = {};
    const param = 1 * (isNegative ? -1 : 1) * (half ? 0.5 : 1);
    let value;

    attrs.forEach((attr, index) => {
        if (!Array.isArray(size)) {
            value = param * size;
        } else {
            switch (size.length) {
                case 1:
                    value = param * (size[0] || 0);
                    break;
                case 2:
                    value = param * (size[index] || size[index - 2] || 0);
                    break;
                case 3:
                    value = param * (index === 2 ? size[2] : size[index] || size[index - 2] || 0);
                    break;
                case 4:
                default:
                    value = param * (size[index] || 0);
                    break;
            }
        }

        margins[attr] = value;
    });

    return margins;
};

const getChildMargin = (spacing: Spacing) => {
    return getMargin(spacing, { isNegative: false, half: true });
};

const getSpacingMargin = (spacing: Spacing) => {
    return getMargin(spacing, { isNegative: false, half: true });
};

const getSpacingHelperMargin = (spacing: Spacing) => {
    return getMargin(spacing, { isNegative: true, half: true });
};

const getFlexs = (flex: ResponsiveGridProps['flex']) => {
    if (!Array.isArray(flex)) {
        return {
            flex,
        };
    }

    const attrs = ['flexGrow', 'flexShrink', 'flexBasis'];
    const flexs: { [key: string]: string | number } = {};

    flex.forEach((val, index) => {
        flexs[attrs[index]] = val;
    });

    return flexs;
};

const getGridGap = (gap: number | Array<number>) => {
    if (!Array.isArray(gap)) {
        return {
            gap,
        };
    }

    const attrs = ['rowGap', 'columnGap'];
    const gaps: { [key: string]: number } = {};

    gap.forEach((val, index) => {
        gaps[attrs[index]] = val;
    });

    return gaps;
};

const getTemplateCount = (counts: number | string) => {
    if (!isNaN(counts as number) || typeof counts === 'string') {
        return `repeat(${counts}, minmax(0,1fr))`;
    }

    return counts;
};

const helperProps = ['margin', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom'];

const innerProps = ['flexDirection', 'flexWrap', 'alignContent', 'alignItems', 'display'];

const filterOuterStyle = (style: ObjectType) => {
    const props: ObjectType = {};

    [...innerProps].forEach(key => {
        props[key] = style[key];
    });

    return filterUndefinedValue(stripObject(style, props));
};

const filterHelperStyle = (style: ObjectType) => {
    const props: ObjectType = {};
    helperProps.forEach(key => {
        props[key] = style[key];
    });

    return filterUndefinedValue({
        ...props,
        overflow: 'hidden',
    });
};

const filterInnerStyle = (style: ObjectType) => {
    const props: ObjectType = {};

    innerProps.forEach(key => {
        props[key] = style[key];
    });

    return filterUndefinedValue(props);
};

const getGridChildProps = (
    props: ResponsiveGridProps,
    device: ResponsiveGridProps['device'],
    gap?: ResponsiveGridProps['gap']
) => {
    const { row = 'initial', col = 'initial', rowSpan = 1, colSpan = 1 } = props;

    let totalSpan = 12;
    let newColSpan =
        typeof colSpan === 'object' && 'desktop' in colSpan ? colSpan.desktop : colSpan;
    ['tablet', 'phone'].forEach(deviceKey => {
        if (deviceKey === device) {
            if (typeof colSpan === 'object' && device in colSpan) {
                newColSpan = colSpan[device];
            } else {
                switch (deviceKey) {
                    case 'tablet':
                        totalSpan = 8;
                        newColSpan = (colSpan as number) > 5 ? 8 : (colSpan as number) > 2 ? 4 : 2;
                        break;
                    case 'phone':
                        totalSpan = 4;
                        newColSpan = (colSpan as number) > 2 ? 4 : 2;
                        break;
                }
            }
        }
    });

    let gapLeft = gap;
    if (Array.isArray(gap)) {
        gapLeft = gap[1];
    }

    const ieChildFix =
        ieVersion && !(rowSpan === 1 && colSpan === 1)
            ? {
                  display: 'inline-block',
                  width: gapLeft
                      ? `calc(${((newColSpan as number) / totalSpan) * 100}% - ${gapLeft}px)`
                      : `${((newColSpan as number) / totalSpan) * 100}%`,
              }
            : {};

    return filterUndefinedValue({
        gridRowStart: row,
        gridRowEnd: `span ${rowSpan}`,
        gridColumnStart: col,
        gridColumnEnd: `span ${newColSpan}`,
        ...ieChildFix,
    });
};

const getBoxChildProps = (props: ResponsiveGridProps) => {
    const { alignSelf, flex } = props;

    return filterUndefinedValue({
        alignSelf,
        ...getFlexs(flex),
    });
};

export default ({
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
}: ResponsiveGridProps) => {
    let style = {
        ...getPadding(padding!),
    };

    let deviceColumns: number | string = 'auto';

    switch (device) {
        case 'phone':
            deviceColumns = 4;
            break;
        case 'tablet':
            deviceColumns = 8;
            break;
        case 'desktop':
            deviceColumns = 12;
            break;
        default:
            break;
    }
    const newColumns =
        !isNaN(columns as number) || typeof columns === 'string' ? columns : deviceColumns;

    switch (display) {
        case 'grid':
            style = {
                ...getGridGap(gap!),
                gridTemplateRows: getTemplateCount(rows!),
                gridTemplateColumns: getTemplateCount(newColumns!),
                gridAutoFlow: `${direction || ''}${dense && ` dense`}`,
                ...getGridChildProps(
                    {
                        row,
                        rowSpan,
                        col,
                        colSpan,
                    },
                    device
                ),
                ...style,
            };
            break;
        case 'flex':
            style = {
                msFlexDirection: direction!,
                flexDirection: direction!,
                msFlexWrap: wrap ? 'wrap' : 'none',
                flexWrap: wrap ? 'wrap' : 'nowrap',
                msFlexPack: justify!,
                justifyContent: justify!,
                msFlexAlign: align!,
                alignItems: align!,
                ...getMargin(margin!),
                ...getBoxChildProps({
                    alignSelf,
                    flex,
                }),
                ...style,
            };
            break;
        default:
            break;
    }

    return filterUndefinedValue(style);
};

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

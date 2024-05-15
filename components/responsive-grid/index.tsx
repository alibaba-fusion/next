import React, {
    Component,
    type CSSProperties,
    type JSXElementConstructor,
    type ReactNodeArray,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Box from '../box';
import { obj, env } from '../util';
import createStyle, { getGridChildProps } from './create-style';
import Cell from './cell';
import type { ResponsiveGridProps, CellProps } from './types';

const { ieVersion } = env;
const { pickOthers, isReactFragmentElement } = obj;

type WithTypeMarkComponent = JSXElementConstructor<unknown> & { _typeMark: string };

const createChildren = (
    children: React.ReactNode,
    device: ResponsiveGridProps['device'],
    gap: ResponsiveGridProps['gap']
): ReactNodeArray | null => {
    const array = React.Children.toArray(children);
    if (!children) {
        return null;
    }

    return array.map(child => {
        if (isReactFragmentElement(child)) {
            return createChildren((child as React.ReactElement).props.children, device, gap);
        }

        if (
            React.isValidElement<{ style?: CSSProperties }>(child) &&
            ['function', 'object'].indexOf(typeof child.type) > -1 &&
            ['form_item', 'responsive_grid_cell'].indexOf(
                (child.type as WithTypeMarkComponent)._typeMark
            ) > -1
        ) {
            return React.cloneElement(child, {
                style: {
                    ...getGridChildProps(child.props, device, gap),
                    ...(child.props.style || {}),
                },
            });
        }

        return child;
    });
};

const getStyle = (style = {}, props: ResponsiveGridProps) => {
    return {
        ...createStyle({ display: 'grid', ...props }),
        ...style,
    };
};

/**
 * ResponsiveGrid
 */
class ResponsiveGrid extends Component<ResponsiveGridProps> {
    static _typeMark = 'responsive_grid';
    static Cell = Cell;
    static propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.any,
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        gap: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
        component: PropTypes.elementType,
        dense: PropTypes.bool,
        style: PropTypes.object,
    };

    static defaultProps = {
        prefix: 'next-',
        component: 'div',
        device: 'desktop',
        dense: false,
    };

    render() {
        const {
            prefix,
            style,
            className,
            children,
            device,
            rows,
            columns,
            gap,
            rowSpan,
            colSpan,
            component,
            dense,
        } = this.props;
        const styleProps = {
            rows,
            columns,
            gap,
            device,
            rowSpan,
            colSpan,
            component,
            dense,
        };
        const View = component!;

        const others = pickOthers(Object.keys(ResponsiveGrid.propTypes), this.props);

        const styleSheet = getStyle(style, styleProps);

        const cls = classNames(
            {
                [`${prefix}responsive-grid`]: true,
                [`${prefix}responsive-grid-ie`]: ieVersion,
            },
            className
        );

        return ieVersion ? (
            <Box
                {...this.props}
                direction="row"
                wrap
                spacing={gap}
                children={createChildren(children, device, gap)}
            />
        ) : (
            <View style={styleSheet} className={cls} {...others}>
                {createChildren(children, device, gap)}
            </View>
        );
    }
}

ResponsiveGrid.Cell = Cell;

export type { ResponsiveGridProps, CellProps };

export default ConfigProvider.config(ResponsiveGrid);

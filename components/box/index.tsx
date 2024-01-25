import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ConfigProvider from '../config-provider';
import { obj } from '../util';
import { BoxProps } from './types';
import createStyle, {
    getMargin,
    getChildMargin,
    getSpacingHelperMargin,
    filterInnerStyle,
    filterHelperStyle,
    filterOuterStyle,
} from '../responsive-grid/create-style';

const { pickOthers } = obj;

type ChildElement = React.ReactElement<
    BoxProps,
    (string | React.JSXElementConstructor<BoxProps>) & { _typeMark: string }
>;
const createChildren = (children: React.ReactNode, { spacing, direction, wrap }: BoxProps) => {
    const array = React.Children.toArray(children);
    if (!children) {
        return null;
    }

    return array.map((child, index) => {
        let spacingMargin: { [key: string]: string | number } = {};

        spacingMargin = getChildMargin(spacing);

        if (!wrap) {
            // 不折行
            const isNone = [index === 0, index === array.length - 1];
            const props =
                direction === 'row' ? ['marginLeft', 'marginRight'] : ['marginTop', 'marginBottom'];

            ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'].forEach(prop => {
                if (prop in spacingMargin && props.indexOf(prop) === -1) {
                    spacingMargin[prop] = 0;
                }

                props.forEach((key, i) => {
                    if (key in spacingMargin && isNone[i]) {
                        spacingMargin[key] = 0;
                    }
                });
            });
        }

        if (React.isValidElement(child)) {
            const { margin: propsMargin } = child.props;
            const childPropsMargin = getMargin(propsMargin);
            let gridProps = {};
            if (
                ['function', 'object'].indexOf(typeof child.type) > -1 &&
                (child as ChildElement).type._typeMark === 'responsive_grid'
            ) {
                gridProps = createStyle({ display: 'grid', ...child.props });
            }

            return React.cloneElement(child as React.ReactElement, {
                style: {
                    ...spacingMargin,
                    // ...getBoxChildProps(child.props),
                    ...childPropsMargin,
                    ...gridProps,
                    ...(child.props.style || {}),
                },
            });
        }

        return child;
    });
};

const getStyle = (style: React.CSSProperties | undefined, props: BoxProps) => {
    return {
        // @ts-expect-error fixme: wait responsive-grid refactor to ts
        ...createStyle({ display: 'flex', ...props }),
        ...style,
    };
};

const getOuterStyle: typeof getStyle = (style, styleProps) => {
    const sheet = getStyle(style, styleProps);

    return filterOuterStyle(sheet);
};

const getHelperStyle: typeof getStyle = (style, styleProps) => {
    const sheet = getStyle(style, styleProps);

    return filterHelperStyle({
        ...sheet,
        ...getSpacingHelperMargin(styleProps.spacing),
    });
};

const getInnerStyle: typeof getStyle = (style, styleProps) => {
    const sheet = getStyle(style, styleProps);

    return filterInnerStyle(sheet);
};

/**
 * Box
 */
class Box extends React.Component<BoxProps> {
    static propTypes = {
        prefix: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.any,
        /**
         * 布局属性
         */
        flex: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
            PropTypes.number,
        ]),
        /**
         * 布局方向，默认为 column ，一个元素占据一整行
         * @defaultValue column
         */
        direction: PropTypes.oneOf(['row', 'column', 'row-reverse']),
        /**
         * 是否折行 支持IE11+
         */
        wrap: PropTypes.bool,
        /**
         * 元素之间的间距 [bottom&top, right&left]
         */
        spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
        /**
         * 设置 margin [bottom&top, right&left]
         */
        margin: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
        /**
         * 设置 padding [bottom&top, right&left]
         */
        padding: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
        /**
         * 沿着主轴方向，子元素们的排布关系 （兼容性同 justify-content ）
         */
        justify: PropTypes.oneOf([
            'flex-start',
            'center',
            'flex-end',
            'space-between',
            'space-around',
        ]),
        /**
         * 垂直主轴方向，子元素们的排布关系 （兼容性同 align-items ）
         */
        align: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
        device: PropTypes.oneOf(['phone', 'tablet', 'desktop']),
        /**
         * 定制标签名， 例如section等
         */
        component: PropTypes.string,
    };
    static defaultProps = {
        prefix: 'next-',
        direction: 'column',
        wrap: false,
        component: 'div',
    };

    render() {
        const {
            prefix,
            direction,
            justify,
            align,
            wrap,
            flex,
            spacing,
            padding,
            margin,
            style,
            className,
            children,
            device,
            component,
        } = this.props;

        const styleProps = {
            direction,
            justify,
            align,
            wrap,
            flex,
            spacing,
            padding,
            margin,
        };
        const View = component!;

        const others = pickOthers(Object.keys(Box.propTypes), this.props);
        const styleSheet = getStyle(style, styleProps);

        const boxs = createChildren(children, {
            spacing,
            direction,
            wrap,
            device,
        });

        const cls = cx(
            {
                [`${prefix}box`]: true,
            },
            className
        );
        if (wrap && spacing) {
            const outerStyle = getOuterStyle(style, styleProps);
            const helperStyle = getHelperStyle(style, styleProps);
            const innerStyle = getInnerStyle(style, styleProps);

            return (
                <View style={outerStyle} className={cls} {...others}>
                    <div style={helperStyle}>
                        <div style={innerStyle} className={`${prefix}box`}>
                            {boxs}
                        </div>
                    </div>
                </View>
            );
        }

        return (
            <View style={styleSheet} className={cls} {...others}>
                {boxs}
            </View>
        );
    }
}
export type { BoxProps };
export default ConfigProvider.config(Box);

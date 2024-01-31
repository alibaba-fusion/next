import React, {
    Component,
    Children,
    cloneElement,
    ReactElement,
    type FunctionComponent,
    type ComponentClass,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { type RowProps, type TypeRecord } from './types';
import Col from './col';

type BooleanRecord = TypeRecord<boolean>;

/**
 * Grid.Row
 * @order 1
 */
export default class Row extends Component<RowProps> {
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        /**
         * 行内容
         */
        children: PropTypes.node,
        /**
         * 列间隔
         */
        gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 列在行中宽度溢出后是否换行
         */
        wrap: PropTypes.bool,
        /**
         * 行在某一断点下宽度是否保持不变（默认行宽度随视口变化而变化）
         */
        fixed: PropTypes.bool,

        fixedWidth: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl']),

        align: PropTypes.oneOf(['top', 'center', 'bottom', 'baseline', 'stretch']),

        justify: PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']),

        hidden: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.array]),

        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        fixed: false,
        gutter: 0,
        wrap: false,
        component: 'div',
    };

    render() {
        /* eslint-disable no-unused-vars */
        const {
            prefix,
            pure,
            wrap,
            fixed,
            gutter,
            fixedWidth,
            align,
            justify,
            hidden,
            className,
            component,
            children,
            rtl,
            ...others
        } = this.props;
        const Tag = component as
            | string
            | FunctionComponent<Record<string, unknown> & { className: string }>
            | ComponentClass<Record<string, unknown> & { className: string }>;

        let hiddenClassObj = {} as BooleanRecord;
        if (hidden === true) {
            hiddenClassObj = { [`${prefix}row-hidden`]: true };
        } else if (typeof hidden === 'string') {
            hiddenClassObj = { [`${prefix}row-${hidden}-hidden`]: !!hidden };
        } else if (Array.isArray(hidden)) {
            hiddenClassObj = hidden.reduce((ret, point) => {
                ret[`${prefix}row-${point}-hidden`] = !!point;
                return ret;
            }, {} as BooleanRecord);
        }

        const config = {
            [`${prefix}row`]: true,
            [`${prefix}row-wrap`]: wrap,
            [`${prefix}row-fixed`]: fixed,
            [`${prefix}row-fixed-${fixedWidth}`]: !!fixedWidth,
            [`${prefix}row-justify-${justify}`]: !!justify,
            [`${prefix}row-align-${align}`]: !!align,
            [className!]: !!className,
            ...hiddenClassObj,
        };
        const newClassName = cx(config);

        let newChildren = children;
        const gutterNumber = parseInt((gutter as string).toString(), 10);
        if (gutterNumber !== 0) {
            const halfGutterString = `${gutterNumber / 2}px`;
            others.style = {
                marginLeft: `-${halfGutterString}`,
                marginRight: `-${halfGutterString}`,
                ...(others.style || {}),
            };
            newChildren = Children.map(children, (child: ReactElement) => {
                if (
                    child &&
                    child.type &&
                    typeof child.type === 'function' &&
                    (child.type as unknown as typeof Col).isNextCol
                ) {
                    const newChild = cloneElement(child, {
                        style: {
                            paddingLeft: halfGutterString,
                            paddingRight: halfGutterString,
                            // @ts-expect-error 只有 dom 才有 style 属性
                            ...(child.style || {}),
                        },
                    });
                    return newChild;
                }

                return child;
            });
        }

        return (
            <Tag dir={rtl ? 'rtl' : 'ltr'} role="row" className={newClassName} {...others}>
                {newChildren}
            </Tag>
        );
    }
}

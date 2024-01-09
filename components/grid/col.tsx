import React, { Component, ComponentClass, FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { type ColProps, type BreakPoints, type PointProps, type TypeRecord } from './types';

const breakPoints: BreakPoints[] = ['xxs', 'xs', 's', 'm', 'l', 'xl'];

type BooleanRecord = TypeRecord<boolean>;
/**
 * Grid.Col
 * @order 2
 */
export default class Col extends Component<ColProps> {
    static isNextCol = true;

    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        /**
         * 列内容
         */
        children: PropTypes.node,
        /**
         * 列宽度<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
         */
        span: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 固定列宽度，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
         */
        fixedSpan: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * （不支持IE9浏览器）列偏移<br><br>**可选值**:<br>1, 2, 3, ..., 22, 23, 24
         */
        offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * （不支持IE9浏览器）固定列偏移，宽度值为20 * 栅格数<br><br>**可选值**:<br>1, 2, 3, ..., 28, 29, 30
         */
        fixedOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * （不支持IE9浏览器）多列垂直方向对齐方式，可覆盖Row的align属性
         */
        align: PropTypes.oneOf(['top', 'center', 'bottom', 'baseline', 'stretch']),
        /**
         * 列在不同断点下的显示与隐藏<br><br>**可选值**:<br>true(在所有断点下隐藏)<br>false(在所有断点下显示)<br>'xs'(在 xs 断点下隐藏）<br>['xxs', 'xs', 's', 'm', 'l', 'xl'](在 xxs, xs, s, m, l, xl 断点下隐藏）
         */
        hidden: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.array]),

        xxs: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),

        xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),

        s: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),

        m: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),

        l: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),

        xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),

        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        component: 'div',
    };

    render() {
        const {
            prefix,
            pure,
            span,
            offset,
            fixedSpan,
            fixedOffset,
            hidden,
            align,
            xxs,
            xs,
            s,
            m,
            l,
            xl,
            component,
            className,
            children,
            rtl,
            ...others
        } = this.props;
        const Tag = component as
            | string
            | FunctionComponent<Record<string, unknown> & { className: string }>
            | ComponentClass<Record<string, unknown> & { className: string }>;
        const pointClassObj = breakPoints.reduce((ret, point) => {
            let pointProps = {} as PointProps;
            const pointValue = this.props[point];
            if (typeof pointValue === 'object' && pointValue !== null) {
                pointProps = pointValue;
            } else {
                pointProps.span = pointValue;
            }

            ret[`${prefix}col-${point}-${pointProps.span}`] = !!pointProps.span;
            ret[`${prefix}col-${point}-offset-${pointProps.offset}`] = !!pointProps.offset;

            return ret;
        }, {} as BooleanRecord);

        let hiddenClassObj = {} as BooleanRecord;
        if (hidden === true) {
            hiddenClassObj = { [`${prefix}col-hidden`]: true };
        } else if (typeof hidden === 'string') {
            hiddenClassObj = { [`${prefix}col-${hidden}-hidden`]: !!hidden };
        } else if (Array.isArray(hidden)) {
            hiddenClassObj = hidden.reduce((ret, point) => {
                ret[`${prefix}col-${point}-hidden`] = !!point;
                return ret;
            }, {} as BooleanRecord);
        }

        const config = {
            [`${prefix}col`]: true,
            [`${prefix}col-${span}`]: !!span,
            [`${prefix}col-fixed-${fixedSpan}`]: !!fixedSpan,
            [`${prefix}col-offset-${offset}`]: !!offset,
            [`${prefix}col-offset-fixed-${fixedOffset}`]: !!fixedOffset,
            [`${prefix}col-${align}`]: !!align,
            [className!]: !!className,
            ...pointClassObj,
            ...hiddenClassObj,
        };
        const classes = cx(config);

        return (
            <Tag dir={rtl ? 'rtl' : 'ltr'} role="gridcell" className={classes} {...others}>
                {children}
            </Tag>
        );
    }
}

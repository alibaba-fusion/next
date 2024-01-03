import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as cx from 'classnames';
import { Component } from 'react';
import { obj } from '../util';
import type { IconProps } from './types';
import ConfigProvider from '../config-provider';
import createFromIconfontCN from './icon-font';

/**
 * Icon
 */
class Icon extends Component<IconProps> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        type: PropTypes.string,
        children: PropTypes.node,
        size: PropTypes.oneOfType([
            PropTypes.oneOf([
                'xxs',
                'xs',
                'small',
                'medium',
                'large',
                'xl',
                'xxl',
                'xxxl',
                'inherit',
            ]),
            PropTypes.number,
        ]),
        className: PropTypes.string,
        style: PropTypes.object,
    };

    static defaultProps = {
        prefix: 'next-',
        size: 'medium',
    };

    static _typeMark = 'icon';
    static createFromIconfontCN: typeof createFromIconfontCN;

    render() {
        const { prefix, type, size, className, rtl, style, children } = this.props;
        const others = obj.pickOthers(Object.assign({}, Icon.propTypes), this.props);

        const classes = cx({
            [`${prefix}icon`]: true,
            [`${prefix}icon-${type}`]: !!type,
            [`${prefix}${size}`]: !!size && typeof size === 'string',
            [className!]: !!className,
        });

        if (
            rtl &&
            type &&
            [
                'arrow-left',
                'arrow-right',
                'arrow-double-left',
                'arrow-double-right',
                'switch',
                'sorting',
                'descending',
                'ascending',
            ].indexOf(type) !== -1
        ) {
            others.dir = 'rtl';
        }

        const sizeStyle =
            typeof size === 'number'
                ? {
                      width: size,
                      height: size,
                      lineHeight: `${size}px`,
                      fontSize: size,
                  }
                : {};

        return (
            <i {...others} style={{ ...sizeStyle, ...style }} className={classes}>
                {children}
            </i>
        );
    }
}

export default Icon;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { obj } from '../util';
import type { DividerProps } from './types';
import ConfigProvider from '../config-provider';

/**
 * Divider
 */
class Divider extends Component<DividerProps> {
    static propTypes = {
        prefix: PropTypes.string,
        children: PropTypes.any,
        className: PropTypes.string,
        dashed: PropTypes.bool,
        direction: PropTypes.oneOf(['hoz', 'ver']),
        orientation: PropTypes.oneOf(['left', 'right', 'center']),
    };

    static defaultProps = {
        prefix: 'next-',
        direction: 'hoz',
        orientation: 'center',
        dashed: false,
    };

    render() {
        const { prefix, className, dashed, direction, orientation, children } = this.props;
        const others = obj.pickOthers(Divider.propTypes, this.props);

        const cls = classNames(
            {
                [`${prefix}divider`]: true,
                [`${prefix}divider-dashed`]: !!dashed,
                [`${prefix}divider-${direction}`]: !!direction,
                [`${prefix}divider-with-text-${orientation}`]: !!orientation && children,
            },
            className
        );

        return (
            <div role="separator" className={cls} {...others}>
                {children && <span className={`${prefix}divider-inner-text`}>{children}</span>}
            </div>
        );
    }
}

export type { DividerProps };
export default ConfigProvider.config(polyfill(Divider));

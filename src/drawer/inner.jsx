import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { obj } from '../util';

const { pickOthers } = obj;

export default class Inner extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        closeable: PropTypes.bool,
        role: PropTypes.string,
        placement: PropTypes.oneOfType(['top', 'right', 'bottom', 'left']),
        rtl: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        closeable: true,
        role: 'dialog',
    };

    render() {
        const {
            prefix,
            className,
            closeable,
            placement,
            children,
            role,
            rtl,
        } = this.props;

        const others = pickOthers(Object.keys(Inner.propTypes), this.props);
        const newClassName = cx({
            [`${prefix}drawer`]: true,
            [`${prefix}drawer-${placement}`]: true,
            [`${prefix}closeable`]: closeable,
            [className]: !!className,
        });

        const ariaProps = {
            role,
            'aria-modal': 'true',
        };

        return (
            <div
                {...ariaProps}
                className={newClassName}
                {...others}
                dir={rtl ? 'rtl' : undefined}
            >
                {children}
            </div>
        );
    }
}

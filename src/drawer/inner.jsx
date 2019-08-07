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

    getNode(name, ref) {
        this[name] = ref;
    }

    renderBody() {
        const { prefix, children } = this.props;
        if (children) {
            return (
                <div
                    className={`${prefix}drawer-body`}
                    ref={this.getNode.bind(this, 'bodyNode')}
                >
                    {children}
                </div>
            );
        }
        return null;
    }

    render() {
        const {
            prefix,
            className,
            closeable,
            placement,
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

        const body = this.renderBody();

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
                {body}
            </div>
        );
    }
}

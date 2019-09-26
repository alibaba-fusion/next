import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';
import zhCN from '../locale/zh-cn';
import { obj } from '../util';

const noop = () => {};
const { pickOthers } = obj;

export default class Inner extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        closeable: PropTypes.bool,
        role: PropTypes.string,
        title: PropTypes.string,
        placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        rtl: PropTypes.bool,
        onClose: PropTypes.func,
        locale: PropTypes.object,
        bodyStyle: PropTypes.object,
        afterClose: PropTypes.func,
        beforeOpen: PropTypes.func,
        beforeClose: PropTypes.func,
        cache: PropTypes.bool,
        shouldUpdatePosition: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        closeable: true,
        role: 'dialog',
        onClose: noop,
        locale: zhCN.Drawer,
    };

    renderHeader() {
        const { prefix, title } = this.props;
        if (title) {
            return (
                <div
                    className={`${prefix}drawer-header`}
                    role="heading"
                    aria-level="1"
                >
                    {title}
                </div>
            );
        }
        return null;
    }

    renderBody() {
        const { prefix, children, bodyStyle } = this.props;
        if (children) {
            return (
                <div className={`${prefix}drawer-body`} style={bodyStyle}>
                    {children}
                </div>
            );
        }
        return null;
    }

    renderCloseLink() {
        const { prefix, closeable, onClose, locale } = this.props;

        if (closeable) {
            return (
                <a
                    role="button"
                    aria-label={locale.close}
                    className={`${prefix}drawer-close`}
                    onClick={onClose}
                >
                    <Icon
                        className={`${prefix}drawer-close-icon`}
                        type="close"
                    />
                </a>
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

        const ariaProps = {
            role,
            'aria-modal': 'true',
        };

        const header = this.renderHeader();
        const body = this.renderBody();
        const closeLink = this.renderCloseLink();

        return (
            <div
                {...ariaProps}
                className={newClassName}
                {...others}
                dir={rtl ? 'rtl' : undefined}
            >
                {header}
                {body}
                {closeLink}
            </div>
        );
    }
}

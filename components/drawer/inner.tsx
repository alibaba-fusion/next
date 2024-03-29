import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';
import zhCN from '../locale/zh-cn';
import { obj } from '../util';
import type { InnerProps } from './types';

const noop = () => {};
const { pickOthers } = obj;

interface ariaRoleProps {
    role?: string;
    'aria-modal'?: boolean | 'true' | 'false';
    'aria-level'?: number;
    'aria-label'?: string;
}

export default class Inner extends Component<InnerProps> {
    static propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        closeable: PropTypes.bool,
        role: PropTypes.string,
        title: PropTypes.node,
        placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        rtl: PropTypes.bool,
        onClose: PropTypes.func,
        locale: PropTypes.object,
        headerStyle: PropTypes.object,
        bodyStyle: PropTypes.object,
        afterClose: PropTypes.func,
        beforeOpen: PropTypes.func,
        beforeClose: PropTypes.func,
        cache: PropTypes.bool,
        shouldUpdatePosition: PropTypes.bool,
        v2: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        closeable: true,
        role: 'dialog',
        onClose: noop,
        locale: zhCN.Drawer,
    };

    renderHeader() {
        const { prefix, title, headerStyle } = this.props;
        const closeLink = this.renderCloseLink();
        const headerCls = cx({
            [`${prefix}drawer-header`]: true,
            [`${prefix}drawer-no-title`]: !title,
        });
        const ariaProps: ariaRoleProps = {
            role: 'heading',
            'aria-level': 1,
        };

        return (
            <div {...ariaProps} className={headerCls} style={headerStyle}>
                {title}
                {closeLink}
            </div>
        );
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
        const ariaProps: ariaRoleProps = {
            role: 'button',
            'aria-label': locale?.close as string,
        };

        if (closeable) {
            return (
                <a {...ariaProps} className={`${prefix}drawer-close`} onClick={onClose}>
                    <Icon className={`${prefix}drawer-close-icon`} type="close" />
                </a>
            );
        }

        return null;
    }

    render() {
        const { prefix, className, closeable, placement, role, rtl, v2 } = this.props;

        const others = pickOthers(Object.keys(Inner.propTypes), this.props);
        const newClassName = cx({
            [`${prefix}drawer`]: true,
            [`${prefix}drawer-${placement}`]: !v2,
            [`${prefix}closeable`]: closeable,
            [className!]: !!className,
        });

        const ariaProps: ariaRoleProps = {
            role,
            'aria-modal': 'true',
        };

        const header = this.renderHeader();
        const body = this.renderBody();

        return (
            <div {...ariaProps} className={newClassName} {...others} dir={rtl ? 'rtl' : undefined}>
                {v2 ? (
                    <div className={`${prefix}drawer-content`}>
                        {header}
                        {body}
                    </div>
                ) : (
                    <div style={{ height: '100%', overflow: 'auto' }}>
                        {header}
                        {body}
                    </div>
                )}
            </div>
        );
    }
}

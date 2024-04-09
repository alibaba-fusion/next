import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from '../menu';
import Icon from '../icon';
import type { PopupItemProps } from './types';

/**
 * Nav.PopupItem
 * @remarks 继承自 `Menu.PopupItem` 的能力请查看 `Menu.PopupItem` 文档
 */
class PopupItem extends Component<PopupItemProps> {
    static menuChildType = 'submenu';

    static propTypes = {
        className: PropTypes.string,
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        label: PropTypes.node,
        children: PropTypes.node,
    };

    static contextTypes = {
        prefix: PropTypes.string,
        iconOnly: PropTypes.bool,
        iconOnlyWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        hasArrow: PropTypes.bool,
    };

    render() {
        const { prefix, iconOnly, iconOnlyWidth, hasArrow } = this.context;
        const { className, icon, label, children, ...others } = this.props;
        const cls = classNames({
            [`${prefix}nav-popup-item`]: true,
            [className!]: !!className,
        });

        let iconEl =
            typeof icon === 'string' ? <Icon className={`${prefix}nav-icon`} type={icon} /> : icon;
        if (iconOnly) {
            if (hasArrow) {
                iconEl = <Icon className={`${prefix}nav-icon-only-arrow`} type="arrow-right" />;
            }
        }
        const newLabel = [
            iconEl ? cloneElement(iconEl as React.ReactElement, { key: 'icon' }) : null,
        ];

        const showLabel = !iconOnly || (iconOnly && !iconOnlyWidth);

        if (showLabel) {
            newLabel.push(<span key="label">{label}</span>);
        }

        return (
            <Menu.PopupItem className={cls} label={newLabel} {...others}>
                {children}
            </Menu.PopupItem>
        );
    }
}

export default PopupItem;

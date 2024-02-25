import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from '../menu';
import Icon from '../icon';
import { SubNavProps } from './types';

/**
 * Nav.SubNav
 * @remarks 继承自 `Menu.SubMenu` 的能力请查看 `Menu.SubMenu` 文档
 */
class SubNav extends Component<SubNavProps> {
    static menuChildType = 'submenu';

    static propTypes = {
        className: PropTypes.string,
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        label: PropTypes.node,
        selectable: PropTypes.bool,
        children: PropTypes.node,
        noIcon: PropTypes.bool,
    };

    static defaultProps = {
        selectable: false,
    };

    static contextTypes = {
        prefix: PropTypes.string,
        mode: PropTypes.string,
        iconOnly: PropTypes.bool,
        iconOnlyWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        hasArrow: PropTypes.bool,
    };

    render() {
        const { prefix, iconOnly, iconOnlyWidth, hasArrow, noIcon, mode } = this.context;
        const { className, icon, label, children, level, ...others } = this.props;
        const cls = classNames({
            [`${prefix}nav-sub-nav-item`]: true,
            [`${prefix}nav-popup`]: mode === 'popup',
            [className as string]: !!className,
        });
        let iconEl =
            typeof icon === 'string' ? <Icon className={`${prefix}nav-icon`} type={icon} /> : icon;
        // 这里是为 iconOnly 模式下，添加默认的展开按钮
        // 只有在 inline 模式下 或 popup模式的第一层级，才需要添加默认的按钮
        if (iconOnly && hasArrow && (mode === 'inline' || (level === 1 && mode === 'popup'))) {
            iconEl = (
                <Icon
                    className={`${prefix}nav-icon-only-arrow`}
                    type={mode === 'popup' ? 'arrow-right' : 'arrow-down'}
                />
            );
        }

        const newLabel = [
            iconEl ? cloneElement(iconEl as React.ReactElement, { key: 'icon' }) : null,
        ];

        const showLabel = !iconOnly || (iconOnly && !iconOnlyWidth);

        if (showLabel) {
            newLabel.push(<span key="label">{label}</span>);
        }

        let title;

        if (typeof label === 'string') {
            title = label;
        }

        return (
            <Menu.SubMenu
                className={cls}
                label={newLabel}
                level={level}
                title={title}
                noIcon={noIcon}
                {...others}
            >
                {children}
            </Menu.SubMenu>
        );
    }
}

export default SubNav;

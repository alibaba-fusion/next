import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import Menu from '../menu';
import type { NavProps } from './types';

type MenuInstance = InstanceType<typeof Menu>;
type MenuProps = React.ComponentProps<typeof Menu>;

/**
 * Nav
 * @remarks 继承自 `Menu` 的能力请查看 `Menu` 文档
 */
class Nav extends Component<NavProps> {
    static propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        children: PropTypes.node,
        type: PropTypes.oneOf(['normal', 'primary', 'secondary', 'line']),
        direction: PropTypes.oneOf(['hoz', 'ver']),
        hozAlign: PropTypes.oneOf(['left', 'right']),
        activeDirection: PropTypes.oneOf([null, 'top', 'bottom', 'left', 'right']),
        mode: PropTypes.oneOf(['inline', 'popup']),
        triggerType: PropTypes.oneOf(['click', 'hover']),
        inlineIndent: PropTypes.number,
        defaultOpenAll: PropTypes.bool,
        openMode: PropTypes.oneOf(['single', 'multiple']),
        selectedKeys: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        defaultSelectedKeys: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        onSelect: PropTypes.func,
        popupAlign: PropTypes.oneOf(['follow', 'outside']),
        popupClassName: PropTypes.string,
        iconOnly: PropTypes.bool,
        iconOnlyWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        iconTextOnly: PropTypes.bool,
        hasArrow: PropTypes.bool,
        hasTooltip: PropTypes.bool,
        header: PropTypes.node,
        footer: PropTypes.node,
        embeddable: PropTypes.bool,
        popupProps: PropTypes.object,
    };

    static defaultProps = {
        prefix: 'next-',
        pure: false,
        type: 'normal',
        direction: 'ver',
        hozAlign: 'left',
        mode: 'inline',
        triggerType: 'click',
        inlineIndent: 20,
        defaultOpenAll: false,
        openMode: 'multiple',
        defaultSelectedKeys: [],
        popupAlign: 'follow',
        hasTooltip: false,
        embeddable: false,
        hasArrow: true,
        popupProps: {},
    };

    static childContextTypes = {
        prefix: PropTypes.string,
        mode: PropTypes.string,
        iconOnly: PropTypes.bool,
        iconOnlyWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        iconTextOnly: PropTypes.bool,
        hasTooltip: PropTypes.bool,
        hasArrow: PropTypes.bool,
    };

    static contextTypes = {
        isCollapse: PropTypes.bool,
    };

    menu: MenuInstance | null;

    getChildContext() {
        const {
            prefix,
            direction,
            mode,
            iconOnly,
            iconOnlyWidth,
            iconTextOnly,
            hasTooltip,
            hasArrow,
        } = this.props;

        const { isCollapse } = this.context;

        return {
            prefix,
            mode: direction === 'hoz' ? 'popup' : mode,
            iconOnly: 'iconOnly' in this.props ? iconOnly : isCollapse,
            iconOnlyWidth: 'iconOnlyWidth' in this.props ? iconOnlyWidth : undefined,
            iconTextOnly,
            hasTooltip,
            hasArrow,
        };
    }

    getMenuRef: React.LegacyRef<MenuInstance> = ref => {
        this.menu = ref;
    };

    render() {
        const {
            prefix,
            className,
            style,
            children,
            type,
            direction,
            activeDirection,
            mode,
            triggerType,
            inlineIndent,
            openMode,
            popupAlign,
            popupClassName,
            iconOnly,
            iconOnlyWidth,
            iconTextOnly,
            hasArrow,
            hasTooltip,
            embeddable,
            popupProps,
            rtl,
            ...others
        } = this.props;

        const { isCollapse } = this.context;

        const newIconOnly = 'iconOnly' in this.props ? iconOnly : isCollapse;

        let realActiveDirection = activeDirection;
        if (
            realActiveDirection &&
            ((direction === 'hoz' &&
                (realActiveDirection === 'left' || realActiveDirection === 'right')) ||
                (direction === 'ver' &&
                    (realActiveDirection === 'top' || realActiveDirection === 'bottom')))
        ) {
            realActiveDirection = null;
        }

        if (!newIconOnly && realActiveDirection === undefined) {
            realActiveDirection =
                direction === 'hoz' ? 'bottom' : type === 'line' ? 'right' : 'left';
        }

        const cls = classNames({
            [`${prefix}nav`]: true,
            [`${prefix}${type}`]: type,
            [`${prefix}active`]: realActiveDirection,
            [`${prefix}${realActiveDirection}`]: realActiveDirection,
            [`${prefix}icon-only`]: newIconOnly,
            [`${prefix}icon-only-text`]: newIconOnly && iconTextOnly,
            [`${prefix}custom-icon-only-width`]: newIconOnly && 'iconOnlyWidth' in this.props,
            [`${prefix}no-arrow`]: !hasArrow,
            [`${prefix}nav-embeddable`]: embeddable,
            [className!]: !!className,
        });
        const newStyle = newIconOnly ? { ...style, width: iconOnlyWidth || 58 } : style;

        const props: MenuProps & {
            itemClassName?: string;
        } = {
            prefix,
            direction,
            openMode,
            triggerType,
            mode: direction === 'hoz' ? 'popup' : mode,
            popupAlign: direction === 'hoz' ? 'follow' : popupAlign,
            inlineIndent: newIconOnly ? 0 : inlineIndent,
            hasSelectedIcon: false,
            popupAutoWidth: true,
            selectMode: 'single',
            itemClassName: `${prefix}nav-item`,
            popupClassName: classNames({
                [cls.replace(`${prefix}icon-only`, '').replace(`${prefix}nav-embeddable`, '')]:
                    mode === 'popup',
                [`${prefix}icon-only`]: newIconOnly && mode === 'inline',
                [popupClassName!]: !!popupClassName,
            }),
            popupProps: () => {
                return {
                    ...popupProps,
                };
            },
        };

        return (
            <Menu className={cls} style={newStyle} {...props} {...others} ref={this.getMenuRef}>
                {children}
            </Menu>
        );
    }
}

export default ConfigProvider.config(Nav);

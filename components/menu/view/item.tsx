import React, { Component, type MouseEvent, type KeyboardEvent, type ReactNode } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { func, obj, KEYCODE, type ClassPropsWithDefault } from '../../util';
import type { ChildItemPropsInMenu, ItemProps as NormalItemProps } from '../types';

const { bindCtx } = func;
const { pickOthers } = obj;

export type ItemProps = Omit<NormalItemProps, 'onSelect' | 'inlineIndent'>;
export type ItemWithDefaultsProps = ClassPropsWithDefault<ItemProps, typeof Item.defaultProps>;
export type ItemInMenuProps = ChildItemPropsInMenu<ItemWithDefaultsProps>;

export default class Item extends Component<ItemProps> {
    static propTypes = {
        _key: PropTypes.string,
        level: PropTypes.number,
        inlineLevel: PropTypes.number,
        groupIndent: PropTypes.number,
        root: PropTypes.object,
        menu: PropTypes.any,
        parent: PropTypes.object,
        parentMode: PropTypes.oneOf(['inline', 'popup']),
        type: PropTypes.oneOf(['submenu', 'item']),
        component: PropTypes.string,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        onClick: PropTypes.func,
        onKeyDown: PropTypes.func,
        needIndent: PropTypes.bool,
        replaceClassName: PropTypes.bool,
    };

    static defaultProps = {
        component: 'li',
        groupIndent: 0,
        replaceClassName: false,
        needIndent: true,
    };

    readonly props: ItemWithDefaultsProps;
    itemNode: HTMLElement;
    menuNode: HTMLElement | undefined | null;
    lastFocusedKey: string | undefined | null;

    constructor(props: ItemProps) {
        super(props);

        bindCtx(this, ['handleClick', 'handleKeyDown']);
    }

    componentDidMount() {
        this.itemNode = findDOMNode(this) as HTMLElement;

        const { parentMode, root, menu } = this.props as ItemInMenuProps;
        if (menu) {
            this.menuNode = findDOMNode(menu) as HTMLElement;
        } else if (parentMode === 'popup') {
            this.menuNode = this.itemNode.parentNode as HTMLElement;
        } else {
            this.menuNode = findDOMNode(root) as HTMLElement;
            const { prefix, header, footer } = root.props;
            if (header || footer) {
                this.menuNode = this.menuNode.querySelector<HTMLElement>(`.${prefix}menu-content`);
            }
        }

        this.setFocus();
    }
    componentDidUpdate() {
        const { root } = this.props as ItemInMenuProps;
        if (root.props.focusable && root.state.focusedKey !== this.lastFocusedKey) {
            this.setFocus();
        }
    }
    focusable() {
        const { root, type, disabled } = this.props as ItemInMenuProps;
        const { focusable } = root.props;
        return focusable && (type === 'submenu' || !disabled);
    }

    getFocused() {
        const { _key, root } = this.props as ItemInMenuProps;
        const { focusedKey } = root.state;
        return focusedKey === _key;
    }

    setFocus() {
        const focused = this.getFocused();
        this.lastFocusedKey = this.props.root!.state.focusedKey;
        if (focused) {
            if (this.focusable()) {
                this.itemNode.focus({ preventScroll: true });
            }
            if (this.menuNode && this.menuNode.scrollHeight > this.menuNode.clientHeight) {
                const scrollBottom = this.menuNode.clientHeight + this.menuNode.scrollTop;
                const itemBottom = this.itemNode.offsetTop + this.itemNode.offsetHeight;
                if (itemBottom > scrollBottom) {
                    this.menuNode.scrollTop = itemBottom - this.menuNode.clientHeight;
                } else if (this.itemNode.offsetTop < this.menuNode.scrollTop) {
                    this.menuNode.scrollTop = this.itemNode.offsetTop;
                }
            }
        }
    }

    handleClick(e: MouseEvent | KeyboardEvent) {
        e.stopPropagation();

        const { _key, root, disabled } = this.props as ItemInMenuProps;

        if (!disabled) {
            root.handleItemClick(_key, this, e);

            this.props.onClick && this.props.onClick(e);
        } else {
            e.preventDefault();
        }
    }

    handleKeyDown(e: KeyboardEvent) {
        const { _key, root, type } = this.props as ItemInMenuProps;

        if (this.focusable()) {
            root.handleItemKeyDown(_key, type, this, e);

            switch (e.keyCode) {
                case KEYCODE.ENTER: {
                    if (!(type === 'submenu')) {
                        this.handleClick(e);
                    }
                    break;
                }
            }
        }

        this.props.onKeyDown && this.props.onKeyDown(e);
    }

    getTitle(children: ReactNode) {
        if (typeof children === 'string') {
            return children;
        }
        return;
    }

    render() {
        const {
            inlineLevel,
            root,
            replaceClassName,
            groupIndent,
            component,
            disabled,
            className,
            children,
            needIndent,
            parentMode,
            _key,
        } = this.props as ItemInMenuProps;
        const others = pickOthers(Item.propTypes, this.props);

        const { prefix, focusable, inlineIndent, itemClassName, rtl } = root.props;
        const focused = this.getFocused();

        const newClassName = replaceClassName
            ? className
            : cx(
                  {
                      [`${prefix}menu-item`]: true,
                      [`${prefix}disabled`]: disabled,
                      [`${prefix}focused`]: !focusable && focused,
                  },
                  itemClassName,
                  className
              );
        if (disabled) {
            others['aria-disabled'] = true;
            others['aria-hidden'] = true;
        }

        others.tabIndex = root.state.tabbableKey === _key ? 0 : -1;

        if (parentMode === 'inline' && inlineLevel > 1 && inlineIndent > 0 && needIndent) {
            const paddingProp = rtl ? 'paddingRight' : 'paddingLeft';
            others.style = {
                ...(others.style || {}),
                [paddingProp]: `${
                    inlineLevel * inlineIndent - (groupIndent || 0) * 0.4 * inlineIndent
                }px`,
            };
        }
        const TagName = component;

        let role = 'menuitem';
        if ('selectMode' in root.props) {
            role = 'option';
        }

        return (
            <TagName
                role={role}
                title={this.getTitle(children)}
                {...others}
                className={newClassName}
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDown}
            >
                <div className={`${prefix}menu-item-inner`}>{children}</div>
            </TagName>
        );
    }
}

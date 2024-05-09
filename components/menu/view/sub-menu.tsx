import React, {
    Component,
    Children,
    cloneElement,
    type MouseEvent,
    type KeyboardEvent,
    type ReactNode,
    type HTMLAttributes,
} from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Animate from '../../animate';
import Icon, { type IconProps } from '../../icon';
import { func, obj, type ClassPropsWithDefault } from '../../util';
import Item from './item';
import SelectabelItem from './selectable-item';
import PopupItem from './popup-item';
import { getChildSelected } from './util';
import type { ChildPropsInMenu, ItemProps, SubMenuProps } from '../types';

const { Expand } = Animate;
const { bindCtx } = func;

export type SubMenuWithDefaultsProps = ClassPropsWithDefault<
    SubMenuProps,
    typeof SubMenu.defaultProps
>;

export type SubMenuInMenuProps = ChildPropsInMenu<SubMenuWithDefaultsProps>;

export default class SubMenu extends Component<SubMenuProps> {
    static menuChildType = 'submenu';

    static propTypes = {
        _key: PropTypes.string,
        root: PropTypes.object,
        level: PropTypes.number,
        inlineLevel: PropTypes.number,
        groupIndent: PropTypes.number,
        label: PropTypes.node,
        selectable: PropTypes.bool,
        mode: PropTypes.oneOf(['inline', 'popup']),
        noIcon: PropTypes.bool,
        children: PropTypes.node,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        subMenuContentClassName: PropTypes.string,
        triggerType: PropTypes.oneOf(['click', 'hover']),
        align: PropTypes.oneOf(['outside', 'follow']),
        parentMode: PropTypes.oneOf(['inline', 'popup']),
        parent: PropTypes.any,
    };

    static defaultProps = {
        groupIndent: 0,
        noIcon: false,
        selectable: false,
    };

    readonly props: SubMenuWithDefaultsProps;
    itemNode: HTMLElement;

    constructor(props: SubMenuProps) {
        super(props);

        bindCtx(this, [
            'handleMouseEnter',
            'handleMouseLeave',
            'handleClick',
            'handleOpen',
            'afterLeave',
        ]);
    }

    componentDidMount() {
        this.itemNode = findDOMNode(this) as HTMLElement;
    }

    afterLeave() {
        const { focused, root } = this.props as SubMenuInMenuProps;
        const { focusable } = root.props;
        if (focusable && focused) {
            this.itemNode.focus();
        }
    }

    getOpen() {
        const { _key, root } = this.props as SubMenuInMenuProps;
        const { openKeys } = root.state;

        return openKeys.indexOf(_key) > -1;
    }

    handleMouseEnter(e: MouseEvent) {
        this.handleOpen(true);

        this.props.onMouseEnter && this.props.onMouseEnter(e);
    }

    handleMouseLeave(e: MouseEvent) {
        this.handleOpen(false);

        this.props.onMouseLeave && this.props.onMouseLeave(e);
    }

    handleClick(e: MouseEvent | KeyboardEvent) {
        const { root, selectable } = this.props as SubMenuInMenuProps;
        const { selectMode } = root.props;
        if (selectMode && selectable) {
            e.stopPropagation();
        }

        const open = this.getOpen();
        this.handleOpen(!open);
    }

    handleOpen(open: boolean, triggerType?: string, e?: Event) {
        const { _key, root } = this.props as SubMenuInMenuProps;
        root.handleOpen(_key, open, triggerType, e);
    }

    passParentToChildren(children: ReactNode) {
        const { mode, root } = this.props as SubMenuInMenuProps;

        return Children.map(children, child => {
            // to fix https://github.com/alibaba-fusion/next/issues/952
            if (typeof child !== 'function' && typeof child !== 'object') {
                return child;
            }

            // @ts-expect-error FIXME: 上面的类型判断不正确，应该使用 React.isValidElement，这里先注释暴露问题
            return cloneElement(child, {
                parent: this,
                parentMode: mode || root.props.mode,
            });
        });
    }

    renderInline() {
        const {
            _key,
            level,
            inlineLevel,
            root,
            className,
            selectable: selectableFromProps,
            label,
            children,
            noIcon,
            subMenuContentClassName,
            triggerType: propsTriggerType,
            parentMode,
        } = this.props as SubMenuInMenuProps;
        const {
            prefix,
            selectMode,
            triggerType: rootTriggerType,
            inlineArrowDirection,
            expandAnimation,
            rtl,
        } = root.props;
        const triggerType = propsTriggerType || rootTriggerType;
        const open = this.getOpen();

        const { selectedKeys, _k2n } = root.state;
        const isChildSelected = getChildSelected({
            _key,
            _k2n,
            selectMode,
            selectedKeys,
        });

        const others = obj.pickOthers(SubMenu.propTypes, this.props);

        const liProps: HTMLAttributes<HTMLLIElement> = {
            className: cx(
                {
                    [`${prefix}menu-sub-menu-wrapper`]: true,
                },
                className
            ),
        };
        const itemProps: ItemProps = {
            'aria-expanded': open,
            _key,
            level,
            role: 'listitem',
            inlineLevel,
            root,
            type: 'submenu',
            component: 'div',
            parentMode,
            className: cx({
                [`${prefix}opened`]: open,
                [`${prefix}child-selected`]: isChildSelected,
            }),
        };

        if (typeof label === 'string') {
            itemProps.title = label;
        }

        const arrorProps: IconProps = {
            type: inlineArrowDirection === 'right' ? 'arrow-right' : 'arrow-down',
            className: cx({
                [`${prefix}menu-icon-arrow`]: true,
                [`${prefix}menu-icon-arrow-down`]: inlineArrowDirection === 'down',
                [`${prefix}menu-icon-arrow-right`]: inlineArrowDirection === 'right',
                [`${prefix}open`]: open,
            }),
        };

        const selectable = !!selectMode && selectableFromProps;
        const NewItem = (selectable ? SelectabelItem : Item) as typeof SelectabelItem;

        if (triggerType === 'hover') {
            liProps.onMouseEnter = this.handleMouseEnter;
            liProps.onMouseLeave = this.handleMouseLeave;
        } else if (selectable) {
            arrorProps.onClick = this.handleClick;
        } else {
            itemProps.onClick = this.handleClick;
        }

        const newSubMenuContentClassName = cx(
            {
                [`${prefix}menu-sub-menu`]: true,
            },
            subMenuContentClassName
        );

        let roleMenu = 'menu',
            roleItem = 'menuitem';
        if ('selectMode' in root.props) {
            roleMenu = 'listbox';
            roleItem = 'option';
        }

        const subMenu = open ? (
            <ul
                role={roleMenu}
                dir={rtl ? 'rtl' : undefined}
                className={newSubMenuContentClassName}
            >
                {this.passParentToChildren(children)}
            </ul>
        ) : null;

        return (
            // @ts-expect-error others.onSelect 签名不匹配
            <li role={roleItem} {...others} {...liProps}>
                <NewItem {...itemProps}>
                    <span className={`${prefix}menu-item-text`}>{label}</span>
                    {noIcon ? null : <Icon {...arrorProps} />}
                </NewItem>
                {expandAnimation ? (
                    <Expand animationAppear={false} afterLeave={this.afterLeave}>
                        {subMenu}
                    </Expand>
                ) : (
                    subMenu
                )}
            </li>
        );
    }

    renderPopup() {
        const { children, subMenuContentClassName, noIcon, ...others } = this
            .props as SubMenuInMenuProps;
        const root = this.props.root!;
        const { prefix, popupClassName, popupStyle, rtl } = root.props;

        const newClassName = cx(
            {
                [`${prefix}menu`]: true,
                [`${prefix}ver`]: true,
            },
            popupClassName,
            subMenuContentClassName
        );

        // @ts-expect-error FIXME: PopupItem 并没有使用 rtl 参数，这里可以移除
        others.rtl = rtl;

        return (
            <PopupItem {...others} noIcon={noIcon} hasSubMenu>
                <ul
                    role="menu"
                    dir={rtl ? 'rtl' : undefined}
                    className={newClassName}
                    style={popupStyle}
                >
                    {this.passParentToChildren(children)}
                </ul>
            </PopupItem>
        );
    }

    render() {
        const { mode, root } = this.props as SubMenuInMenuProps;
        const newMode = mode || root.props.mode;

        return newMode === 'popup' ? this.renderPopup() : this.renderInline();
    }
}

import React, {
    Component,
    type ComponentProps,
    type ComponentRef,
    type ReactElement,
    type ReactNode,
} from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../../icon';
import Overlay, { type PopupProps } from '../../overlay';
import { func, obj, dom, type ClassPropsWithDefault } from '../../util';
import Item from './item';
import SelectableItem from './selectable-item';
import { getChildSelected } from './util';
import type { ChildItemPropsInMenu, ItemProps, PopupItemProps } from '../types';

const { bindCtx } = func;
const { setStyle } = dom;
const Popup = Overlay.Popup;

export type PopupItemWithDefaultsProps = ClassPropsWithDefault<
    PopupItemProps,
    typeof PopupItem.defaultProps
>;
export type PopupItemInMenuProps = ChildItemPropsInMenu<PopupItemWithDefaultsProps>;

export default class PopupItem extends Component<PopupItemProps> {
    static menuChildType = 'submenu';

    static propTypes = {
        _key: PropTypes.string,
        root: PropTypes.object,
        level: PropTypes.number,
        hasSubMenu: PropTypes.bool,
        noIcon: PropTypes.bool,
        rtl: PropTypes.bool,
        selectable: PropTypes.bool,
        /**
         * 标签内容
         */
        label: PropTypes.node,
        /**
         * 自定义弹层内容
         */
        children: PropTypes.node,
        className: PropTypes.string,
        /**
         * 子菜单打开的触发行为
         */
        triggerType: PropTypes.oneOf(['click', 'hover']),
        align: PropTypes.oneOf(['outside', 'follow']),
        autoWidth: PropTypes.bool,
    };

    static defaultProps = {
        selectable: false,
        noIcon: false,
    };

    popup: ComponentRef<typeof Popup> | null;
    popupProps: PopupProps;
    popupNode: HTMLElement;
    readonly props: PopupItemWithDefaultsProps;

    constructor(props: PopupItemProps) {
        super(props);

        bindCtx(this, ['handleOpen', 'handlePopupOpen', 'handlePopupClose', 'getPopup']);
    }

    getPopup(ref: ComponentRef<typeof Popup> | null) {
        this.popup = ref;
    }

    getOpen() {
        const { _key, root } = this.props as PopupItemInMenuProps;
        const { openKeys } = root.state;

        return openKeys.indexOf(_key) > -1;
    }

    getPopupProps() {
        let { popupProps } = (this.props as PopupItemInMenuProps).root.props;
        if (typeof popupProps === 'function') {
            popupProps = popupProps(this.props);
        }
        return popupProps;
    }

    handleOpen: NonNullable<PopupProps['onVisibleChange']> = (open, triggerType, e) => {
        const { _key, root } = this.props as PopupItemInMenuProps;
        // @ts-expect-error FIXME: PopupProps 里 triggerType 不正确，待其修复后可删除该行
        root.handleOpen(_key, open, triggerType, e);

        const popupProps = this.popupProps;
        popupProps.onVisibleChange && popupProps.onVisibleChange(open, triggerType, e);
    };

    handlePopupOpen() {
        const { root, level, align, autoWidth } = this.props as PopupItemInMenuProps;
        const {
            popupAutoWidth: rootPopupAutoWidth,
            popupAlign: rootPopupAlign,
            direction,
        } = root.props;
        const popupAlign = align || rootPopupAlign;
        const popupAutoWidth = 'autoWidth' in this.props ? autoWidth : rootPopupAutoWidth;
        try {
            // avoid errors while dom removed and js executing
            const itemNode = findDOMNode(this) as HTMLElement;
            const menuNode = itemNode.parentNode as HTMLElement;
            // @ts-expect-error FIXME: popup 类型改造完成后可删除该行
            this.popupNode = this.popup!.getInstance().overlay.getInstance().getContentNode();
            root.popupNodes.push(this.popupNode);

            if (popupAutoWidth) {
                const targetNode = direction === 'hoz' && level === 1 ? itemNode : menuNode;

                if (targetNode.offsetWidth > this.popupNode.offsetWidth) {
                    setStyle(this.popupNode, 'width', `${targetNode.offsetWidth}px`);
                }
            }
            if (popupAlign === 'outside' && !(direction === 'hoz' && level === 1)) {
                setStyle(this.popupNode, 'height', `${menuNode.offsetHeight}px`);
                this.popupNode.firstElementChild &&
                    setStyle(this.popupNode.firstElementChild as HTMLElement, 'overflow-y', 'auto');
            }
            // removeClass(this.popupNode, `${prefix}hide`);

            const popupProps = this.popupProps;
            popupProps.onOpen && popupProps.onOpen();
        } catch (error) {
            return null;
        }
    }

    handlePopupClose() {
        const { root } = this.props as PopupItemInMenuProps;
        const popupNodes = root.popupNodes;
        const index = popupNodes.indexOf(this.popupNode);
        index > -1 && popupNodes.splice(index, 1);

        const popupProps = this.popupProps;
        popupProps.onClose && popupProps.onClose();
    }

    renderItem(selectable: boolean | undefined, children: ReactNode, others: ItemProps) {
        const { _key, root, level, inlineLevel, label, className } = this
            .props as PopupItemInMenuProps;
        const { prefix, selectMode } = root.props;
        const NewItem = (selectable ? SelectableItem : Item) as typeof SelectableItem;
        const open = this.getOpen();

        const { selectedKeys, _k2n } = root.state;
        const isChildSelected = getChildSelected({
            _key,
            _k2n,
            selectMode,
            selectedKeys,
        });

        const itemProps: ComponentProps<typeof NewItem> = {
            'aria-haspopup': true,
            'aria-expanded': open,
            _key,
            root,
            level,
            inlineLevel,
            type: 'submenu',
        };

        itemProps.className = cx(
            {
                [`${prefix}opened`]: open,
                [`${prefix}child-selected`]: isChildSelected,
            },
            className
        );

        return (
            <NewItem {...itemProps} {...others}>
                <span className={`${prefix}menu-item-text`}>{label}</span>
                {children}
            </NewItem>
        );
    }

    renderPopup(
        trigger: ReactElement,
        triggerType: PopupProps['triggerType'],
        positionProps: PopupProps,
        children: ReactNode
    ) {
        const { root, level, selectable, className: propCls } = this.props as PopupItemInMenuProps;
        const { direction } = root.props;
        this.popupProps = this.getPopupProps();
        const open = this.getOpen();

        if (direction === 'hoz' && level === 1 && selectable) {
            positionProps.target = () => findDOMNode(this);
        }

        const { className: posCls, ...otherPostion } = positionProps;
        const className = cx(propCls, posCls);

        return (
            <Popup
                ref={this.getPopup}
                {...otherPostion}
                {...this.popupProps}
                canCloseByEsc={false}
                trigger={trigger}
                triggerType={triggerType}
                visible={open}
                pinFollowBaseElementWhenFixed
                onVisibleChange={this.handleOpen}
                onOpen={this.handlePopupOpen}
                onClose={this.handlePopupClose}
            >
                <div className={className}>{children}</div>
            </Popup>
        );
    }

    render() {
        const {
            root,
            level,
            hasSubMenu,
            selectable: selectableFromProps,
            children,
            triggerType,
            align,
            noIcon,
        } = this.props as PopupItemInMenuProps;
        const others = obj.pickOthers(PopupItem.propTypes, this.props);
        const {
            prefix,
            selectMode,
            direction,
            popupAlign: rootPopupAlign,
            triggerType: rootTriggerType,
        } = root.props;
        const popupAlign = align || rootPopupAlign;
        const newTriggerType = triggerType || (hasSubMenu ? rootTriggerType : 'hover');
        const newChildren = Array.isArray(children) ? children[0] : children;
        // let newChildren = Array.isArray(children) ? children[0] : children;
        // newChildren = cloneElement(newChildren, {
        //     className: cx({
        //         [`${prefix}menu-popup-content`]: true,
        //         [newChildren.props.className]: !!newChildren.props.className,
        //         [`${prefix}hide`]: popupAutoWidth || popupAlign === 'outside'
        //     })
        // });
        const selectable = selectMode && selectableFromProps;
        const triggerIsIcon = selectable && newTriggerType === 'click';
        const open = this.getOpen();

        const positionProps: PopupProps = {};
        let arrowProps;

        if (direction === 'hoz' && level === 1) {
            positionProps.align = 'tl bl';
            positionProps.className = `${prefix}menu-spacing-tb`;

            arrowProps = {
                type: 'arrow-down',
                className: cx({
                    [`${prefix}menu-hoz-icon-arrow`]: true,
                    [`${prefix}open`]: open,
                }),
            };
        } else {
            if (popupAlign === 'outside') {
                positionProps.target = () => {
                    return findDOMNode(root);
                };
                positionProps.align = 'tl tr';

                positionProps.className = `${prefix}menu-spacing-lr ${prefix}menu-outside`;
            } else {
                if (triggerIsIcon) {
                    positionProps.target = () => {
                        return findDOMNode(this);
                    };
                }
                positionProps.align = 'tl tr';
                positionProps.className = `${prefix}menu-spacing-lr`;
            }

            arrowProps = {
                type: 'arrow-right',
                className: `${prefix}menu-icon-arrow ${prefix}menu-symbol-popupfold`,
            };
        }

        const arrow = <Icon {...arrowProps} />;
        const trigger = triggerIsIcon
            ? arrow
            : this.renderItem(selectable, noIcon ? null : arrow, others);
        const popup = this.renderPopup(trigger, newTriggerType, positionProps, newChildren);
        return triggerIsIcon ? this.renderItem(selectable, popup, others) : popup;
    }
}

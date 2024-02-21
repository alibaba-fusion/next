import React, {
    Component,
    type ReactNode,
    type LegacyRef,
    type ReactNodeArray,
    type ComponentElement,
} from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import Menu, { type MenuProps } from '../menu';
import VirtualList from '../virtual-list';
import type { CascaderMenuProps, ItemProps } from './types';
import CascaderMenuItem from './item';

export default class CascaderMenu extends Component<CascaderMenuProps> {
    static propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        useVirtual: PropTypes.bool,
        children: PropTypes.node,
    };
    virtualEl: VirtualList | null;
    menuEl: HTMLDivElement;

    componentDidMount() {
        this.scrollToSelectedItem();
    }

    scrollToSelectedItem() {
        const { prefix, useVirtual, children } = this.props;
        // FIXME 这里的判断很容易报错
        if (!children || (children as ReactNodeArray).length === 0) {
            return;
        }
        const selectedIndex = children.findIndex(
            item => !!item.props.checked || !!item.props.selected || !!item.props.expanded
        );

        if (selectedIndex === -1) {
            return;
        }

        if (useVirtual) {
            // @ts-expect-error VirtualList 尚未做优化，因此无法取得 getInstance
            const instance = this.virtualEl!.getInstance();
            setTimeout(() => instance.scrollTo(selectedIndex), 0);
        } else {
            const itemSelector = `.${prefix}menu-item`;
            const menu = findDOMNode(this.menuEl) as HTMLElement;
            const targetItem = menu.querySelectorAll(itemSelector)[selectedIndex] as HTMLElement;
            if (targetItem) {
                menu.scrollTop =
                    targetItem.offsetTop -
                    Math.floor((menu.clientHeight / targetItem.clientHeight - 1) / 2) *
                        targetItem.clientHeight;
            }
        }
    }

    renderMenu(items: ReactNodeArray, ref: LegacyRef<Menu> | undefined, props: MenuProps) {
        function isItem(node: ReactNode): node is ComponentElement<ItemProps, CascaderMenuItem> {
            // FIXME 这里的判断很容易报错，node.type 可以是 string 或者函数组件
            return (
                React.isValidElement(node) &&
                (node.type as typeof CascaderMenuItem).menuChildType === 'item'
            );
        }
        return (
            <Menu ref={ref} role="listbox" {...props}>
                {items.map(node => {
                    if (isItem(node)) {
                        return React.cloneElement(node, {
                            menu: this,
                        });
                    }

                    return node;
                })}
            </Menu>
        );
    }

    saveMenuRef = (ref: HTMLDivElement) => {
        this.menuEl = ref;
    };

    saveVirtualRef = (ref: VirtualList) => {
        this.virtualEl = ref;
    };

    render() {
        const { prefix, useVirtual, className, style, children, ...others } = this.props;
        const menuProps = {
            labelToggleChecked: false,
            className: `${prefix}cascader-menu`,
            ...others,
        };
        return (
            <div
                ref={this.saveMenuRef}
                className={`${prefix}cascader-menu-wrapper ${className ? className : ''}`}
                style={style}
            >
                {useVirtual ? (
                    <VirtualList
                        ref={this.saveVirtualRef}
                        itemsRenderer={(items, ref) => this.renderMenu(items, ref, menuProps)}
                    >
                        {children}
                    </VirtualList>
                ) : (
                    this.renderMenu(children as ReactNodeArray, undefined, menuProps)
                )}
            </div>
        );
    }
}

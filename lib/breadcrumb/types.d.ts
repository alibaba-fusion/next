import type React from 'react';
import type { DropdownProps } from '../dropdown';
import type { CommonProps } from '../util';
/**
 * @api Breadcrumb.Item
 */
export interface ItemProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 面包屑节点链接，如果设置这个属性，则该节点为`<a />`，否则是`<span />`
     * @en The breadcrumb item link, if this property is set, the node is `<a />`, otherwise it is `<span />`
     */
    link?: string;
    /**
     * 元素点击事件
     * @en Click event
     * @param e - Click Mouse Event
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * 是否激活
     * @en Is it activated
     * @skip
     */
    activated?: boolean;
    /**
     * 分隔符，可以是文本或 Icon
     * @en Separator, can be text or Icon
     * @skip
     */
    separator?: string | React.ReactNode;
}
/**
 * @api Breadcrumb
 */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 面包屑子节点，需传入 Breadcrumb.Item
     * @en Children components, should be an Breadcrumb.Item
     */
    children?: Array<React.ReactElement<ItemProps> | boolean | null> | React.ReactElement<ItemProps>;
    /**
     * 面包屑最多显示个数，超出部分会被隐藏
     * @en The maximum number of breadcrumbs is displayed and the excess is hidden, can set auto compute maximum number
     * @defaultValue 100
     */
    maxNode?: number | 'auto';
    /**
     * 当超过的项被隐藏时，是否可通过点击省略号展示菜单（包含被隐藏的项）
     * @en When the hidden items are exceeded, is it possible to click the ellipsis to display the menu (including hidden items)
     * @defaultValue false
     * @version 1.23
     */
    showHiddenItems?: boolean;
    /**
     * 弹层挂载的容器节点（在 showHiddenItems 为 true 时才有意义）
     * @en The container node that the popup mounts (meaningful only when showHiddenItems is true)
     * @version 1.23
     */
    popupContainer?: DropdownProps['container'];
    /**
     * 是否跟随 trigger 滚动（在 showHiddenItems 为 true 时才有意义）
     * @en Whether to scroll with the trigger (meaningful only when showHiddenItems is true)
     * @version 1.23
     */
    followTrigger?: boolean;
    /**
     * 添加到弹层上的属性（在 showHiddenItems 为 true 时才有意义）
     * @en The attributes added to the popup (meaningful only when showHiddenItems is true)
     * @version 1.23
     */
    popupProps?: Partial<DropdownProps>;
    /**
     * 分隔符，可以是文本或 Icon
     * @en Separator, can be text or Icon
     */
    separator?: string | React.ReactNode;
    /**
     * 设置标签类型
     * @en Set Element type
     * @defaultValue 'nav'
     */
    component?: React.ComponentType<BreadcrumbProps> | string;
}

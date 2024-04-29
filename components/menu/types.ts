import React from 'react';
import type { CommonProps } from '../util';
import type { OverlayProps, PopupProps } from '../overlay';
import type SelectableItem from './view/selectable-item';
import type MenuItem from './view/item';
import { type Menu } from './view/menu';
import type SubMenu from './view/sub-menu';

export type { SelectableItem, MenuItem };

/**
 * 子菜单打开的模式
 * @en open mode of submenu
 * @api
 */
export type Mode = 'inline' | 'popup';

export interface MenuItemData {
    key: string;
    pos: string;
    mode: Mode | undefined;
    type: string;
    disabled: boolean | undefined;
    label: React.ReactNode;
}

export type K2N = Record<string, MenuItemData>;

export type P2N = Record<string, MenuItemData>;

export interface MenuChildProps {
    root?: Menu;
    type?: string;
    mode?: Mode;
    parentMode?: Mode;
    disabled?: boolean;
    label?: React.ReactNode;
    groupIndent?: number;
    children?: React.ReactNode;
    level?: number;
    inlineLevel?: number;
    _key?: string;
}

export declare class MenuChild extends React.Component<MenuChildProps> {
    static menuChildType: string;
}

export type MenuChildElement = React.ReactElement<MenuChildProps, typeof MenuChild>;

/**
 * @api
 * @remarks
 * 触发菜单选中状态变化时的额外信息
 * -
 * The extra info when trigger select
 */
export interface SelectExtra {
    /**
     * 被选中菜单的 key
     * @en Key of menu item
     */
    key: string;
    /**
     * 是否选中状态
     * @en Is selected
     */
    select: boolean;
    /**
     * 菜单的标签
     * @en The label of menu item
     */
    label: React.ReactNode;
    /**
     * 被操作菜单项的 key 全路径
     * @en Full key paths of the operating menu item
     */
    keyPath: string[];
    /**
     * 被操作菜单项的 label 全路径
     * @en Full label paths of the operating menu item
     */
    labelPath: React.ReactNode[];
}

/**
 * 从 Menu 组件传递给后代组件的参数（传递给 item | submenu | group）
 * @remarks 内部属性，请勿手动传递
 */
export type ChildPropsFromMenu = {
    root: Menu;
    level: number;
    inlineLevel: number;
    _key: string;
    groupIndent: number;
};

/**
 * 从 SubMenu 组件传递给子组件的参数
 * @remarks 内部属性，请勿手动传递
 */
export type ChildPropsFromSubMenu = {
    parent: SubMenu;
    parentMode: Mode;
};

/**
 * 从 Group 组件传递给子组件的参数
 * @remarks 内部属性，请勿手动传递
 */
export type ChildPropsFromGroup = {
    parentMode: Mode;
    className: string;
};

export type ChildPropsInMenu<Props extends object> = Props & ChildPropsFromMenu;

export type ChildItemPropsInMenu<Props extends object> = Props &
    ChildPropsFromMenu &
    Partial<ChildPropsFromSubMenu & ChildPropsFromGroup>;

export type ItemPropsFromParent = Partial<
    ChildPropsFromMenu & ChildPropsFromSubMenu & ChildPropsFromGroup
>;

/**
 * Menu.Item
 * @order 0
 */
export interface ItemProps
    extends Omit<React.HTMLAttributes<Element>, 'onClick' | 'onChange' | 'onSelect' | 'type'>,
        ItemPropsFromParent {
    /**
     * 是否禁用
     * @en whether is disabled
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 帮助文本
     * @en helper text
     */
    helper?: React.ReactNode;

    /**
     * 菜单项标签内容
     * @en content of menu item
     */
    children?: React.ReactNode;
    /**
     * 是否选中
     * @en Whether is selected
     */
    selected?: boolean;

    /**
     * 菜单项选中回调函数
     * @en Callback when selected status changes
     * @param selected - 是否选中 - is selected
     * @param menuItem - 菜单项实例 - The menu item instance
     * @param event - 事件对象 - Event object
     */
    onSelect?: (
        selected: boolean,
        menuItem: SelectableItem,
        event: React.MouseEvent | React.KeyboardEvent
    ) => void;

    /**
     * 指定所属 menu 菜单实例
     * @skip
     */
    menu?: React.ReactInstance;

    /**
     * 是否需要缩进
     * @en Show indentation at the beginning
     * @defaultValue true
     */
    needIndent?: boolean;
    /**
     * 不使用内置的类名
     * @en Do not use built-in class names
     * @defaultValue false
     */
    replaceClassName?: boolean;
    /**
     * 指定渲染节点元素
     * @en Custom `TagName` to render
     * @defaultValue 'li'
     */
    component?: keyof React.JSX.IntrinsicElements;

    /**
     * 菜单项点击事件
     * @en Callback when it is clicked
     */
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;

    /**
     * Item 类型
     * @skip
     * @internal
     */
    type?: 'submenu' | 'item';

    /**
     * 缩进距离（px）, 如果设置会覆盖 Menu 上的同名属性
     * @en The size of indent（px）. It will override the property with the same name on Menu
     * @see MenuProps.inlineIndent
     */
    inlineIndent?: number;

    /**
     * 是否显示选中图标，如果设置为 false 需配合配置平台设置选中时的背景色以示区分，如果设置会覆盖 Menu 上的同名属性
     * @en whether to show the selected icon, if it is set to false, it needs to match the background color when the configuration platform setting is selected to distinguish between. It will override the property with the same name on Menu
     * @see MenuProps.hasSelectedIcon
     */
    hasSelectedIcon?: boolean;

    /**
     * 是否将选中图标居右，仅当 hasSelectedIcon 为 true 时生效。
     * @en whether to set the selected icon on right side of menu, this only works when hasSelectedIcon is true
     * @remarks
     * 注意：SubMenu 上的选中图标一直居左，不受此 API 控制
     * -
     * Attention：select icon on SubMenu always lie on left of menu
     * @see MenuProps.isSelectIconRight
     */
    isSelectIconRight?: boolean;
}

/**
 * @api Menu.SubMenu
 * @order 1
 */
export interface SubMenuProps extends PopupItemProps {
    /**
     * 标签内容
     * @en label of submenu
     */
    label?: React.ReactNode;

    /**
     * 是否可选，该属性仅在设置 Menu 组件 selectMode 属性后生效
     * @en whether is selectable, it only works when set selectMode of Menu
     * @defaultValue false
     */
    selectable?: boolean;

    /**
     * 子菜单打开方式，如果设置会覆盖 Menu 上的同名属性
     * @en open mode of submenu, it will override the property with the same name on Menu
     * @see MenuProps.mode
     */
    mode?: Mode;

    /**
     * 菜单项或下一级子菜单
     * @en menu item or submenu
     */
    children?: React.ReactNode;

    /**
     * 是否没有图标
     * @en No icon
     * @defaultValue false
     */
    noIcon?: boolean;

    /**
     * 子菜单内容节点的类名
     * @en ClassName of the content node
     */
    subMenuContentClassName?: string;

    /**
     * 子菜单是否聚焦
     * @skip
     */
    focused?: boolean;
}

/**
 * @api Menu.PopupItem
 * @order 2
 */
export interface PopupItemProps extends ItemProps {
    /**
     * 标签内容
     * @en label of the popup item
     */
    label?: React.ReactNode;
    /**
     * 自定义弹层内容
     * @en Popup content
     */
    children?: React.ReactNode;
    /**
     * 是否拥有子菜单
     * @internal
     */
    hasSubMenu?: boolean;
    /**
     * 子菜单打开的触发方式，如果设置会覆盖 Menu 上的同名属性
     * @en open trigger type of popup content
     * @see MenuProps.triggerType
     */
    triggerType?: 'click' | 'hover';
    /**
     * 弹层的对齐方式
     * @en alignment of the pop up submenu
     * @see MenuProps.popupAlign
     */
    align?: 'follow' | 'outside';
    /**
     * 是否可选，该属性仅在设置 Menu 组件 selectMode 属性后生效
     * @en whether is selectable, it only works when set selectMode of Menu
     * @defaultValue false
     */
    selectable?: boolean;
    /**
     * 是否自动让弹层的宽度和菜单项保持一致
     * @en whether the width of the pop up submenu is equal to the parent menu item.
     * @see MenuProps.popupAutoWidth
     */
    autoWidth?: boolean;
}

/**
 * @api Menu.CheckboxItem
 * @order 3
 * @remarks
 * 该子组件选中情况不受 defaultSelectedKeys/selectedKeys 控制，请自行控制选中逻辑
 * -
 * This subcomponent selection is not controlled by defaultSelectedKeys/selectedKeys. Please control the selected yourself.
 */
export interface CheckboxItemProps extends ItemProps {
    /**
     * 是否选中
     * @en whether is checked
     * @defaultValue false
     */
    checked?: boolean;

    /**
     * 是否半选中
     * @en whether is indeterminate
     * @defaultValue false
     */
    indeterminate?: boolean;

    /**
     * 是否禁用
     * @en whether is disabled
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 选中或取消选中触发的回调函数
     * @en callback function triggered when check or uncheck menu item
     * @param checked - 是否选中 - Is checked
     * @param event - 事件对象 - Event object
     */
    onChange?: (
        checked: boolean,
        event: React.MouseEvent | React.KeyboardEvent | React.ChangeEvent
    ) => void;

    /**
     * 帮助文本
     * @en help text
     */
    helper?: React.ReactNode;

    /**
     * 标签内容
     * @en content of menu check item
     */
    children?: React.ReactNode;

    /**
     * @skip
     * @internal
     */
    checkboxDisabled?: boolean;
}

export interface CheckableItemProps extends Omit<CheckboxItemProps, 'checkboxDisabled'> {
    checkType?: 'radio' | 'checkbox';
    checkDisabled?: boolean;
}

/**
 * @api Menu.RadioItem
 * @order 4
 * @remarks
 * 该子组件选中情况不受 defaultSelectedKeys/selectedKeys 控制，请自行控制选中逻辑
 * -
 * This subcomponent selection is not controlled by defaultSelectedKeys/selectedKeys. Please control the selected yourself.
 */
export interface RadioItemProps extends CheckableItemProps {
    /**
     * 是否选中
     * @en whether is checked
     * @defaultValue false
     */
    checked?: boolean;

    /**
     * 是否禁用
     * @en whether is disabled
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 选中或取消选中触发的回调函数
     * @en Callback function triggered when check or uncheck menu item
     * @param checked - 是否选中 - Is checked
     * @param event - 事件对象 - Event object
     */
    onChange?: (checked: boolean, event: React.MouseEvent | React.KeyboardEvent) => void;

    /**
     * 帮助文本
     * @en Help text
     */
    helper?: React.ReactNode;

    /**
     * 标签内容
     * @en Content of menu radio item
     */
    children?: React.ReactNode;
}

/**
 * @api Menu.Group
 * @order 5
 */
export interface GroupProps extends ItemProps {
    /**
     * 标签内容
     * @en label of group
     */
    label?: React.ReactNode;

    /**
     * 菜单项
     * @en menu items
     */
    children: React.ReactChild | React.ReactChild[];
}

/**
 * 分隔线
 * @en Split line
 * @api Menu.Divider
 * @order 6
 */
export interface DividerProps extends React.HTMLAttributes<HTMLLIElement> {}

/**
 * @api
 */
export interface MenuProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'>,
        CommonProps {
    /**
     * 菜单项和子菜单
     * @en submenu and menu item
     */
    children?: React.ReactNode;

    /**
     * 当前打开的子菜单的 key 值（受控）
     * @en keys of open submenu currently（controlled）
     */
    openKeys?: string | string[];

    /**
     * 初始打开的子菜单的 key 值（非受控）
     * @en keys of open submenu in default（uncontrolled）
     * @defaultValue []
     */
    defaultOpenKeys?: string | string[];

    /**
     * 初始展开所有的子菜单，只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效，优先级高于 defaultOpenKeys
     * @en open all submenus default, only when mode is set to 'inline' and openMode is set to 'multiple', priority is higher than defaultOpenKeys
     * @defaultValue false
     */
    defaultOpenAll?: boolean;

    /**
     * 打开或关闭子菜单触发的回调函数
     * @en callback function triggered when open or close the submenu
     * @param keys - 打开的所有子菜单的 key 值 - keys of open submenu
     * @param extra - 当前被操作子菜单的信息 - info of the operating submenu
     */
    onOpen?: (keys: string[], extra: { key: string; open: boolean }) => void;

    /**
     * 子菜单打开的模式
     * @en open mode of submenu
     * @defaultValue 'inline'
     */
    mode?: Mode;

    /**
     * 子菜单打开的触发行为
     * @en open trigger type of submenu
     * @defaultValue 'click'
     */
    triggerType?: 'click' | 'hover';

    /**
     * 展开内连子菜单的模式，同时可以展开一个子菜单还是多个子菜单，该属性仅在 mode 为 inline 时生效
     * @en expand mode of the inline submenu, expand a submenu or multiple submenus at the same time, it only works when mode is inline
     * @defaultValue 'multiple'
     */
    openMode?: 'single' | 'multiple';

    /**
     * 内连子菜单缩进距离
     * @en indent of inline submenu
     * @defaultValue 20
     */
    inlineIndent?: number;

    /**
     * @deprecated Use inlineIndent instead
     * @skip
     */
    indentSize?: number;

    /**
     * 是否自动让弹层的宽度和菜单项保持一致
     * @en whether the width of the pop up submenu is equal to the parent menu item.
     * @remarks
     * 如果弹层的宽度比菜单项小则和菜单项保持一致，如果宽度大于菜单项则不做处理
     * -
     * if the width of the pop up submenu is smaller than the parent menu item, it will be the same as the parent menu item, otherwise do nothing
     * @defaultValue false
     */
    popupAutoWidth?: boolean;

    /**
     * 弹层的对齐方式
     * @en alignment of the pop up submenu
     * @defaultValue 'follow'
     * @example
     * 1. **follow**: 跟随父级弹层
     * 2. **outside**: 外侧打开新面板
     */
    popupAlign?: 'follow' | 'outside';

    /**
     * 弹层自定义 props
     * @en properties of Popup
     */
    popupProps?: PopupProps | ((popupItemProps: PopupItemProps) => PopupProps);

    /**
     * 弹出子菜单自定义 className
     * @en className of the pop up submenu
     */
    popupClassName?: string;

    /**
     * 弹出子菜单自定义 style
     * @en style of the pop up submenu
     */
    popupStyle?: React.CSSProperties;

    /**
     * 当前选中菜单项的 key 值（受控）
     * @en keys of selected menu item currently（controlled）
     */
    selectedKeys?: string | string[];

    /**
     * 初始选中菜单项的 key 值（非受控）
     * @en keys of selected menu item in default（uncontrolled）
     */
    defaultSelectedKeys?: string | string[];

    /**
     * 选中或取消选中菜单项触发的回调函数
     * @en callback function triggered when select or unselect menu item
     * @param selectedKeys - 选中的所有菜单项的值 - keys of selected menu items
     * @param item - 选中或取消选中的菜单项 - current operation menu item
     * @param extra - 选中时的额外参数 - extra params
     */
    onSelect?: (selectedKeys: string[], item: SelectableItem, extra: SelectExtra) => void;

    /**
     * @deprecated Use onSelect instead
     * @skip
     */
    onDeselect?: (key: string) => void;

    /**
     * 选中模式，单选还是多选，默认无值，不可选
     * @en select mode, single or multiple, no value by default, not selectable
     */
    selectMode?: 'single' | 'multiple';

    /**
     * 是否只能选择第一层菜单项（不能选择子菜单中的菜单项）
     * @en whether you can only select the first level menu item (you cannot select the menu item in the submenu)
     * @defaultValue false
     */
    shallowSelect?: boolean;

    /**
     * 是否显示选中图标，如果设置为 false 需配合配置平台设置选中时的背景色以示区分
     * @en whether to show the selected icon, if it is set to false, it needs to match the background color when the configuration platform setting is selected to distinguish between
     * @defaultValue true
     */
    hasSelectedIcon?: boolean;

    /**
     * 是否将选中图标居右，仅当 hasSelectedIcon 为 true 时生效。
     * @en whether to set the selected icon on right side of menu, this only works when hasSelectedIcon is true
     * @remarks
     * 注意：SubMenu 上的选中图标一直居左，不受此 API 控制
     * -
     * Attention：select icon on SubMenu always lie on left of menu
     * @defaultValue false
     */
    isSelectIconRight?: boolean;

    /**
     * 菜单第一层展示方向
     * @en direction of the menu's first level
     * @defaultValue 'ver'
     */
    direction?: 'ver' | 'hoz';

    /**
     * 横向菜单条 item 和 footer 的对齐方向，在 direction 设置为 'hoz' 并且 header 存在时生效
     * @en alignment of items and footer in the horizontal menu bar, only works when direction is set to 'hoz' and the header exists
     * @defaultValue 'left'
     */
    hozAlign?: 'left' | 'right';

    /**
     * 自定义菜单头部
     * @en The header content of menu
     */
    header?: React.ReactNode;

    /**
     * 自定义菜单尾部
     * @en The footer content of menu
     */
    footer?: React.ReactNode;

    /**
     * 自定义菜单尾部容器的 className
     * @en ClassName of the footer wrapper dom
     */
    footerWrapperClassName?: string;

    /**
     * 是否自动获得焦点
     * @en whether to get focus automatically
     * @defaultValue false
     */
    autoFocus?: boolean;

    /**
     * 当前获得焦点的子菜单或菜单项 key 值
     * @en Key of the currently focused submenu or menu item
     */
    focusedKey?: string;
    /**
     * 是否可以获得焦点
     * @en Is focusable
     * @defaultValue true
     */
    focusable?: boolean;
    /**
     * 菜单项获得焦点时的回调函数
     * @en Callback when some menu item focused
     * @param key - 菜单项的 key - Key of the menu item
     * @param item - 菜单项组件实例 - Instance of menu item
     * @param event - 事件对象 - The event object
     */
    onItemFocus?: (
        key: string,
        item: MenuItem,
        event: React.MouseEvent | React.KeyboardEvent
    ) => void;

    /**
     * 点击菜单项触发的回调函数
     * @en Callback when menu item be clicked
     * @param key - 点击的菜单项的 key 值 - key of clicked menu item
     * @param item - 点击的菜单项对象 - clicked menu item instance
     * @param event - 事件对象 - Event object
     */
    onItemClick?: (
        key: string,
        item: MenuItem,
        event: React.MouseEvent | React.KeyboardEvent
    ) => void;

    /**
     * 菜单项触发键盘按下的回调函数
     * @en Callback when menu item focused and keyboard down
     * @param key - 菜单项的 key 值 - key of the menu item
     * @param item - 菜单项对象 - menu item instance
     * @param event - 事件对象 - Event object
     */
    onItemKeyDown?: (
        key: string | null | undefined,
        item: MenuItem,
        event: React.KeyboardEvent
    ) => void;

    /**
     * 是否开启嵌入式模式，开启后没有默认背景、外层 border、box-shadow
     * @en integrate with the background or not(which means no background/border/box-shadow etc.).
     * @remarks
     * 一般用于 Layout 的布局中，可以配合`<Menu style={{lineHeight: '100px'}}>` 自定义高度
     * -
     * Usually used with Layout. You can also custom its height like`<Menu style={{lineHeight: '100px'}}>`
     * @defaultValue false
     */
    embeddable?: boolean;

    /**
     * 自定义内部使用的图标
     * @en custom inner icons
     * @example
     * - **select**: 被选中时的图标
     * -
     * - **select**: icon of selected
     */
    icons?: {
        select?: React.ReactNode;
    };

    /**
     * 横向菜单模式下，是否维持在一行，即超出一行折叠成 SubMenu 显示
     * @en Force display in one row, over items will collapse in SubMenu
     * @remarks
     * 仅在 direction='hoz' mode='popup' 时生效
     * -
     * Only useful when direction='hoz' and mode='popup'
     */
    hozInLine?: boolean;

    /**
     * 自定义渲染超出一行的菜单项（hozInLine = true 时生效）
     * @en Custom render more items（Only for hozInLine = true）
     * @param items - 被折叠的菜单项 - The collapsed menu items
     * @returns 渲染内容 - More render content
     */
    renderMore?: (
        items?: React.ReactElement[]
    ) => React.ReactElement<{ className?: string; style?: React.CSSProperties }>;

    /**
     * 子菜单展开箭头的方向
     * @en Arrow direction of sub menu
     * @defaultValue 'down'
     */
    inlineArrowDirection?: 'down' | 'right';

    /**
     * 标签是否可触发 checked 状态变化
     * @en Can label trigger checked change
     * @defaultValue true
     */
    labelToggleChecked?: boolean;

    /**
     * 展开菜单时使用动画
     * @en Enable animation when menu is expanding
     * @defaultValue true
     */
    expandAnimation?: boolean;

    /**
     * 菜单项的类型
     * @en ClassName of menu items
     */
    itemClassName?: string;

    /**
     * 将菜单项 DOM 结构平铺在容器内
     * @en Flaten item doms inside the menu container
     */
    flatenContent?: boolean;
}

export interface CreateMenuProps
    extends Pick<OverlayProps, 'target' | 'align' | 'offset' | 'afterClose'>,
        MenuProps {
    overlayProps?: OverlayProps;
    className?: string;
    popupClassName?: string;
}

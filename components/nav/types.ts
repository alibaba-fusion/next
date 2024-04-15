import type { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
import type {
    GroupProps as MenuGroupProps,
    ItemProps as MenuItemProps,
    PopupItemProps as MenuPopupItemProps,
    SelectableItem,
    SelectExtra,
    MenuItem,
    SubMenuProps,
} from '../menu';

/**
 * @api Nav.Group
 * @order 2
 */
export interface GroupProps extends MenuGroupProps {
    /**
     * 标签内容
     * @en Content of label
     */
    label?: React.ReactNode;

    /**
     * 导航项和子导航
     * @en Navigation item and sub navigation
     */
    children: React.ReactChild | React.ReactChild[];
}

/**
 * @api Nav.Item
 * @order 3
 */
export interface ItemProps extends MenuItemProps {
    /**
     * 是否禁用
     * @en whether is disabled
     * @skip
     */
    disabled?: boolean;

    /**
     * 帮助文本
     * @en Help text
     * @skip
     */
    helper?: React.ReactNode;

    /**
     * 自定义图标
     * @en Custom icon, can use Icon's type or `<Icon type="your type" />`
     * @remarks 可以使用 Icon 的 type，也可以使用组件 `<Icon type="your type" />`
     */
    icon?: string | React.ReactNode;

    /**
     * 导航内容
     * @en Content of navigation check item
     */
    children?: React.ReactNode;

    /**
     * 导航项打开方式
     * @en Navigation item open mode
     * @skip
     */
    parentMode?: 'inline' | 'popup';
}

/**
 * @api Nav.PopupItem
 * @order 4
 */
export interface PopupItemProps extends MenuPopupItemProps {
    /**
     * 标签内容
     * @en Content of label
     */
    label?: React.ReactNode;

    /**
     * 弹出内容
     * @en Content of popup
     */
    children?: React.ReactNode;

    /**
     * 自定义图标
     * @en Custom icon, can use Icon's type or `<Icon type="your type" />`
     * @remarks 可以使用 Icon 的 type，也可以使用组件 `<Icon type="your type" />`
     */
    icon?: string | React.ReactNode;
}

/**
 * @api Nav.SubNav
 * @order 5
 */
export interface SubNavProps extends SubMenuProps {
    /**
     * 自定义图标
     * @en Custom icon, can use Icon's type or `<Icon type="your type" />`
     * @remarks 可以使用 Icon 的 type，也可以使用组件 `<Icon type="your type" />`
     */
    icon?: string | React.ReactNode;

    /**
     * 标签内容
     * @en Content of label
     */
    label?: React.ReactNode;

    /**
     * 是否可选
     * @en Whether is selectable
     * @defaultValue false
     */
    selectable?: boolean;

    /**
     * 导航项和子导航
     * @en Navigation item and sub navigation
     */
    children?: React.ReactNode;

    /**
     * 是否需要提示当前项可展开的 icon，默认是有的
     * @en Whether to show the icon of current item
     */
    noIcon?: boolean;

    /**
     * 导航层级
     * @skip
     */
    level?: number;
}

type HTMLAttributesWeak = Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'>;

export interface NavRef extends React.RefObject<NavProps> {}

/**
 * @api Nav
 * @order 1
 */
export interface NavProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 导航项和子导航
     * @en Navigation item and sub navigation
     */
    children?: React.ReactNode;

    /**
     * 点击菜单项触发的回调函数
     * @en Callback function when menu item is clicked
     * @param key - 点击的菜单项的 key 值 - Key value of clicked menu item
     * @param item - 点击的菜单项 - Clicked menu item
     * @param event - 点击事件 - Click event
     * @skip
     */
    onItemClick?: (key: string, item: MenuItem, event: React.MouseEvent) => void;

    /**
     * 当前展开的子菜单的 key 值
     * @en Current open sub navigation key
     * @skip
     */
    openKeys?: string | Array<string>;

    /**
     * 初始打开的子菜单的 key 值
     * @en Initial open sub navigation key
     * @skip
     */
    defaultOpenKeys?: string | Array<string>;

    /**
     * 初始展开所有的子导航
     * @en Open all subnavs default, only when mode is set to 'inline' and openMode is set to 'multiple'
     * @defaultValue false
     * @remarks 只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效
     */
    defaultOpenAll?: boolean;

    /**
     * 打开或关闭子菜单触发的回调函数
     * @en Callback function when submenu is opened or closed
     * @param key - 打开或关闭的子菜单的 key 值 - Key value of opened or closed submenu
     * @param extra - 扩展参数 - Extra parameters
     * @skip
     */
    onOpen?: (key: string[], extra: { key: string; open: boolean }) => void;

    /**
     * 子导航打开的模式
     * @en Sub navigation open mode (horizontal navigation only supports pop up)
     * @defaultValue 'inline'
     * @remarks 水平导航只支持弹出
     */
    mode?: 'inline' | 'popup';

    /**
     * 子导航打开的触发方式
     * @en Sub navigation open trigger
     * @defaultValue 'click'
     */
    triggerType?: 'click' | 'hover';

    /**
     * 内联子导航的展开模式，同时可以展开一个同级子导航还是多个同级子导航
     * @en The open mode of inline sub navigation, expand a peer navigation or multiple navigations at the same level at same time, it only works in inline mode
     * @defaultValue 'multiple'
     * @remarks 仅在 mode 为 inline 时生效
     */
    openMode?: 'single' | 'multiple';

    /**
     * 内联子导航缩进距离
     * @en Inline sub navigation indent distance
     * @defaultValue 20
     */
    inlineIndent?: number;

    /**
     * 是否自动让弹层的宽度和菜单项保持一致
     * @en Whether to keep the width of the popup consistent with the navigation item
     * @remarks 如果弹层的宽度比菜单项小则和菜单项保持一致，如果宽度大于菜单项则不做处理
     * @skip
     */
    popupAutoWidth?: boolean;

    /**
     * 弹出子导航的对齐方式
     * @en Pop up sub navigation alignment (horizontal navigation only supports follow)
     * @defaultValue 'follow'
     * @remarks 水平导航只支持 follow
     */
    popupAlign?: 'follow' | 'outside';

    /**
     * 弹层自定义 props
     * @en Pop up navigation custom props
     * @skip
     */
    popupProps?: PopupProps | (() => void);

    /**
     * 弹出子导航的自定义类名
     * @en Pop up navigation custom class name
     */
    popupClassName?: string;

    /**
     * 弹出子菜单自定义 style
     * @en Pop up navigation custom style
     * @skip
     */
    popupStyle?: React.CSSProperties;

    /**
     * 当前选中导航项的 key 值
     * @en Keys of selected nav item currently
     */
    selectedKeys?: string | Array<string>;

    /**
     * 初始选中导航项的 key 值
     * @en Keys of selected nav item in default
     * @defaultValue []
     */
    defaultSelectedKeys?: string | Array<string>;

    /**
     * 选中或取消选中导航项触发的回调函数
     * @en Callback function triggered when select or unselect nav item
     * @param selectedKeys - 选中的导航项的 key 值 - Keys of selected nav item
     * @param item - 选中的导航项 - Current operation nav item
     * @param extra - 扩展参数 - Extra parameters
     */
    onSelect?: (selectedKeys: string[], item: SelectableItem, extra: SelectExtra) => void;

    /**
     * 选中模式，单选还是多选，默认无值，不可选
     * @en Select mode, single or multiple, no value by default, not selectable
     * @skip
     */
    selectMode?: 'single' | 'multiple';

    /**
     * 是否只能选择第一层菜单项
     * @en Whether you can only select the first level menu item (you cannot select the menu item in the submenu)
     * @remarks 不能选择子菜单中的菜单项
     * @skip
     */
    shallowSelect?: boolean;

    /**
     * 是否显示选中图标
     * @en whether to show the selected icon, if it is set to false, it needs to match the background color when the configuration platform setting is selected to distinguish between
     * @remarks 如果设置为 false 需配合配置平台设置选中时的背景色以示区分
     * @skip
     */
    hasSelectedIcon?: boolean;

    /**
     * 是否将选中图标居右，仅当 hasSelectedIcon 为 true 时生效。
     * @en Whether to set the selected icon on right side of menu, this only works when hasSelectedIcon is true. Attention：select icon on SubMenu always lie on left of menu
     * @remarks 注意：SubMenu 上的选中图标一直居左，不受此 API 控制
     * @skip
     */
    isSelectIconRight?: boolean;

    /**
     * 导航布局
     * @en Layout of navigation
     * @defaultValue 'ver'
     */
    direction?: 'hoz' | 'ver';

    /**
     * 横向导航条 items 和 footer 的对齐方向
     * @en Alignment of items in the horizontal nav bar, only works when direction is set to 'hoz' and the header exists
     * @defaultValue 'left'
     * @remarks 在 direction 设置为 'hoz' 并且 header 存在时生效
     */
    hozAlign?: 'left' | 'right';

    /**
     * 自定义导航头部
     * @en Custom navigation head
     */
    header?: React.ReactNode;

    /**
     * 自定义导航尾部
     * @en Custom navigation footer
     */
    footer?: React.ReactNode;

    /**
     * 是否自动获得焦点
     * @en Whether to focus on the first element of popup on appearing
     * @skip
     */
    autoFocus?: boolean;

    /**
     * 当前获得焦点的子菜单或菜单项 key 值
     * @en Current focused submenu or menu item key
     * @skip
     */
    focusedKey?: string;

    /**
     * 是否开启嵌入式模式
     * @en Whether to enable embedded mode
     * @defaultValue false
     * @remarks 一般用于 Layout 的布局中，开启后没有默认背景、外层 border、box-shadow，可以配合`<Nav style={{lineHeight: '100px'}}>` 自定义高度
     * @version 1.18
     */
    embeddable?: boolean;

    /**
     * 导航类型
     * @en Type of navigation
     * @defaultValue 'normal'
     */
    type?: 'normal' | 'primary' | 'secondary' | 'line';

    /**
     * 设置组件选中状态的 active 边方向
     * @en The active border direction of the selected item
     * @remarks 当 direction 为 'hoz' 时，默认值为 'bottom'，当 direction 为 'ver' 时，默认值为 'left'
     */
    activeDirection?: null | 'top' | 'bottom' | 'left' | 'right';

    /**
     * 是否只显示图标
     * @en Whether to show only icons
     */
    iconOnly?: boolean;

    /**
     * iconOnly 模式下是否展示文字
     * @en Whether to show text in iconOnly mode (only works when iconOnly=true)
     * @remarks 仅在 iconOnly = true 时生效
     */
    iconTextOnly?: boolean;

    /**
     * iconOnly 模式下的宽度
     * @en iconOnly mode width (only works when iconOnly=true)
     * @remarks 仅在 iconOnly = true 时生效
     */
    iconOnlyWidth?: number | string;

    /**
     * 是否显示右侧的箭头
     * @en Whether to show arrow (only works when iconOnly=true)
     * @defaultValue true
     * @remarks 仅在 iconOnly = true 时生效
     */
    hasArrow?: boolean;

    /**
     * 是否有 ToolTips
     * @en Whether to show tooltip (only works when iconOnly=true)
     * @defaultValue false
     * @remarks 仅在 iconOnly = true 时生效
     */
    hasTooltip?: boolean;

    /**
     * 横向菜单模式下，是否维持在一行，即超出一行折叠成 SubMenu 显示
     * @en Whether to keep in one line
     * @skip
     */
    hozInLine?: boolean;

    /**
     * 是否开启 pure 模式
     * @skip
     */
    pure?: boolean;
}

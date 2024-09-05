/// <reference types="react" />
import PropTypes from 'prop-types';
import React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
}

/**
 * @api ItemProps
 */
export interface ItemProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 选项卡标题
     * @en Title of tab.
     */
    title?: React.ReactNode;

    /**
     * 单个选项卡是否可关闭
     * @en If tab is closeable.
     * @defaultValue false
     */
    closeable?: boolean;

    /**
     * 选项卡是否被禁用
     * @en If tab is disabled.
     * @defaultValue false
     */
    disabled?: boolean;
}

export class Item extends React.Component<ItemProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onClick?: any;
    onChange?: any;
}

/**
 * @api TabProps
 */
export interface TabProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 被激活的选项卡的 key, 赋值则tab为受控组件, 用户无法切换
     * @en Key of the current active tab. This prop will make tab a 'controlled component', end user will be unable to change tabs.
     */
    activeKey?: string;

    /**
     * 初始化时被激活的选项卡的 key
     * @en Key of default active tab.
     */
    defaultActiveKey?: string;

    /**
     * 外观形态
     * @en Shape of tab.
     * @defaultValue 'pure'
     */
    shape?: 'pure' | 'wrapped' | 'text' | 'capsule';

    /**
     * 是否开启动效
     * @en Enable animation.
     * @defaultValue true
     */
    animation?: boolean;

    /**
     * 选项卡过多时的滑动模式
     * @en Excess mode for extra tabs.
     * @defaultValue 'slide'
     */
    excessMode?: 'slide' | 'dropdown';

    /**
     * 导航选项卡的位置，只适用于包裹型（wrapped）选项卡
     * @en Position of tabs. Only effective when shape is 'wrapped'.
     * @defaultValue 'top'
     */
    tabPosition?: 'top' | 'bottom' | 'left' | 'right';

    /**
     * 尺寸
     * @en Size of the tabs
     * @defaultValue 'medium'
     */
    size?: 'small' | 'medium';

    /**
     * 激活选项卡的触发方式
     * @en Trigger type to change active tab.
     * @defaultValue 'click'
     */
    triggerType?: 'hover' | 'click';

    /**
     * 是否延迟加载 TabPane 的内容, 默认开启, 即不提前渲染
     * @en Lazy mount tabs.
     * @defaultValue true
     */
    lazyLoad?: boolean;

    /**
     * 是否自动卸载未处于激活状态的选项卡
     * @en Auto unmount inactive tabs
     * @defaultValue false
     */
    unmountInactiveTabs?: boolean;

    /**
     * 导航条的自定义样式
     * @en Custom style of navigation.
     */
    navStyle?: React.CSSProperties;

    /**
     * 导航条的自定义样式类
     * @en Custom className of navigation.
     */
    navClassName?: string;

    /**
     * 内容区容器的自定义样式
     * @en Custom style of content.
     */
    contentStyle?: React.CSSProperties;

    /**
     * 内容区容器的自定义样式类
     * @en Custom className of content.
     */
    contentClassName?: string;

    /**
     * 导航栏附加内容
     * @en Extra content of tab, ensure the item won't excess when using this.
     */
    extra?: React.ReactNode;

    /**
     * 禁用键盘事件
     * @en Set and you cant switch tabs via keyboard arrow keys.
     * @defaultValue false
     */
    disableKeyboard?: boolean;

    /**
     * 点击单个选项卡时触发的回调
     * @en Callback when active tab changes.
     */
    onClick?: (key: string) => void;

    /**
     * 选项卡发生切换时的事件回调
     * @en Callback triggered when a tab is changed.
     * @param key - 改变后的 key - the active key
     */
    onChange?: (key: string) => void;

    /**
     * 选项卡被关闭时的事件回调
     * @en Callback triggered when a tab is closed.
     * @param key - 关闭的选项卡的 key - the closed key
     */
    onClose?: (key: string) => void;

    /**
     * 自定义选项卡模板渲染函数
     * @en Custom template render for tab.
     * @param key - 当前 Tab.Item 的 key 值 - Key of TabItem
     * @param props - 传给 Tab.Item 的所有属性键值对返回值 - Props of TabItem
     * @returns - 返回自定义组件 - The rendered tab item.
     */
    tabRender?: (key: string, props: any) => React.ReactNode;

    /**
     * 弹层属性透传, 只有当 excessMode 为 dropdown 时生效
     * @en Properties pass down to Popup Menu in dropdown excess mode.
     */
    popupProps?: PopupProps;

    /**
     * 自定义 icon
     * @en Customize icons used in tab navigation.
     */
    icons?: {
        dropdown?: string | React.ReactNode;
        prev?: string | React.ReactNode;
        next?: string | React.ReactNode;
    };
    /**
     * 展示新增按钮
     * @en Show 'Add' button.
     */
    showAdd?: boolean;
    /**
     * 新增的事件回调
     * @en Callback triggered when clicking 'Add' button to add a new tab.
     */
    onAdd?: () => void;

    /**
     * 自定义添加按钮
     * @en Custom 'Add' button.
     */
    addIcon?: React.ReactNode;
}

export interface TabContentProps extends CommonProps {
    prefix?: string;
    activeKey?: string | number;
    lazyLoad?: boolean;
    className?: string;
    unmountInactiveTabs?: boolean;
}

export interface TabItemProps extends CommonProps, TabProps {
    active?: boolean;
    tabStyle?: React.CSSProperties;
    tab?: string;
    key?: number | string;
    content?: string;
    title?: PropTypes.ReactNodeLike;
}

export interface NavProps extends CommonProps, TabProps {
    tabs: React.ReactElement[];
    onTriggerEvent: (triggerType: string, key: string) => void; // TypeFunc could be defined
}
export default class Tab extends React.Component<TabProps, any> {
    static Item: typeof Item;
}

/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';

export interface GroupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 标签内容
     */
    label?: React.ReactNode;

    /**
     * 导航项和子导航
     */
    children?: React.ReactNode;

    /**
     * 自定义类名
     */
    className?: string;
}

export class Group extends React.Component<GroupProps, any> {}

export interface ItemProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 帮助文本
     */
    helper?: React.ReactNode;

    /**
     * 导航内容
     */
    children?: React.ReactNode;

    /**
     * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
     */
    icon?: string | React.ReactNode;
}

export class Item extends React.Component<ItemProps, any> {}

export interface PopupItemProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 标签内容
     */
    label?: React.ReactNode;

    /**
     * 弹出内容
     */
    children?: React.ReactNode;

    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 自定义图标，可以使用 Icon 的 type, 也可以使用组件 `<Icon type="icon type" />`
     */
    icon?: string | React.ReactNode;
}

export class PopupItem extends React.Component<PopupItemProps, any> {}

export interface SubNavProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="your type" />`
     */
    icon?: string | React.ReactNode;

    /**
     * 标签内容
     */
    label?: React.ReactNode;

    /**
     * 是否可选
     */
    selectable?: boolean;

    /**
     * 导航项和子导航
     */
    children?: React.ReactNode;
}

export class SubNav extends React.Component<SubNavProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onSelect?: any;
}

export interface NavProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 导航项和子导航
     */
    children?: React.ReactNode;

    /**
     * 点击菜单项触发的回调函数
     */
    onItemClick?: (key: string, item: {}, event: {}) => void;

    /**
     * 当前打开的子菜单的 key 值
     */
    openKeys?: string | Array<any>;

    /**
     * 初始打开的子菜单的 key 值
     */
    defaultOpenKeys?: string | Array<any>;

    /**
     * 初始展开所有的子导航，只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效
     */
    defaultOpenAll?: boolean;

    /**
     * 打开或关闭子菜单触发的回调函数
     */
    onOpen?: (key: string[], extra: { key: string; open: boolean }) => void;

    /**
     * 子导航打开的模式（水平导航只支持弹出）
     */
    mode?: 'inline' | 'popup';

    /**
     * 子导航打开的触发方式
     */
    triggerType?: 'click' | 'hover';

    /**
     * 内联子导航的展开模式，同时可以展开一个同级子导航还是多个同级子导航，该属性仅在 mode 为 inline 时生效
     */
    openMode?: 'single' | 'multiple';

    /**
     * 内联子导航缩进距离
     */
    inlineIndent?: number;

    /**
     * 是否自动让弹层的宽度和菜单项保持一致，如果弹层的宽度比菜单项小则和菜单项保持一致，如果宽度大于菜单项则不做处理
     */
    popupAutoWidth?: boolean;

    /**
     * 弹出子导航的对齐方式（水平导航只支持 follow ）
     */
    popupAlign?: 'follow' | 'outside';

    /**
     * 弹层自定义 props
     */
    popupProps?: PopupProps | (() => void);

    /**
     * 弹出子导航的自定义类名
     */
    popupClassName?: string;

    /**
     * 弹出子菜单自定义 style
     */
    popupStyle?: React.CSSProperties;

    /**
     * 当前选中导航项的 key 值
     */
    selectedKeys?: string | Array<any>;

    /**
     * 初始选中导航项的 key 值
     */
    defaultSelectedKeys?: string | Array<any>;

    /**
     * 选中或取消选中导航项触发的回调函数
     */
    onSelect?: (selectedKeys: Array<any>, item: {}, extra: {}) => void;

    /**
     * 选中模式，单选还是多选，默认无值，不可选
     */
    selectMode?: 'single' | 'multiple';

    /**
     * 是否只能选择第一层菜单项（不能选择子菜单中的菜单项）
     */
    shallowSelect?: boolean;

    /**
     * 是否显示选中图标，如果设置为 false 需配合配置平台设置选中时的背景色以示区分
     */
    hasSelectedIcon?: boolean;

    /**
     * 是否将选中图标居右，仅当 hasSelectedIcon 为true 时生效。
     * 注意：SubMenu 上的选中图标一直居左，不受此API控制
     */
    isSelectIconRight?: boolean;

    /**
     * 导航布局
     */
    direction?: 'hoz' | 'ver';

    /**
     * 横向导航条 items 和 footer 的对齐方向，在 direction 设置为 'hoz' 并且 header 存在时生效
     */
    hozAlign?: 'left' | 'right';

    /**
     * 自定义导航头部
     */
    header?: React.ReactNode;

    /**
     * 自定义导航尾部
     */
    footer?: React.ReactNode;

    /**
     * 是否自动获得焦点
     */
    autoFocus?: boolean;

    /**
     * 当前获得焦点的子菜单或菜单项 key 值
     */
    focusedKey?: string;

    /**
     * 是否开启嵌入式模式，一般用于Layout的布局中，开启后没有默认背景、外层border、box-shadow，可以配合`<Nav style={{lineHeight: '100px'}}>` 自定义高度
     */
    embeddable?: boolean;

    /**
     * 导航类型
     */
    type?: 'normal' | 'primary' | 'secondary' | 'line';

    /**
     * 设置组件选中状态的 active 边方向
     */
    activeDirection?: null | 'top' | 'bottom' | 'left' | 'right';

    /**
     * 是否只显示图标
     */
    iconOnly?: boolean;

    /**
     * iconOnly 模式下的宽度（仅在 iconOnly=true 时生效）
     */
    iconOnlyWidth?: number | string;

    /**
     * 是否显示右侧的箭头（仅在 iconOnly=true 时生效）
     */
    hasArrow?: boolean;

    /**
     * 是否有 ToolTips （仅在 iconOnly=true 时生效）
     */
    hasTooltip?: boolean;

    /**
     * 横向菜单模式下，是否维持在一行，即超出一行折叠成 SubMenu 显示
     */
    hozInLine?: boolean;
}

export default class Nav extends React.Component<NavProps, any> {
    static Group: typeof Group;
    static Item: typeof Item;
    static PopupItem: typeof PopupItem;
    static SubNav: typeof SubNav;
}

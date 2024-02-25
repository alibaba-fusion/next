/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';
import { PopupProps } from '../overlay';

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
     * 菜单项标签内容
     */
    children?: React.ReactNode;
    /**
     * 是否选中
     */
    selected?: boolean;
    menu?: any;
}

export class Item extends React.Component<ItemProps, any> {}

export interface SubMenuProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 标签内容
     */
    label?: React.ReactNode;

    /**
     * 是否可选，该属性仅在设置 Menu 组件 selectMode 属性后生效
     */
    selectable?: boolean;

    /**
     * 子菜单打开方式，如果设置会覆盖 Menu 上的同名属性
     */
    mode?: 'inline' | 'popup';

    /**
     * 菜单项或下一级子菜单
     */
    children?: React.ReactNode;

    /**
     * 菜单层级
     */
    level?: number;

    /**
     * 是否需要提示当前项可展开的 icon，默认是有的
     */
    noIcon?: boolean;
}

export class SubMenu extends React.Component<SubMenuProps, any> {}

export interface PopupItemProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 标签内容
     */
    label?: React.ReactNode;

    /**
     * 自定义弹层内容
     */
    children?: React.ReactNode;

    /**
     * 子菜单打开的触发行为
     */
    triggerType?: 'click' | 'hover';
}

export class PopupItem extends React.Component<PopupItemProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onChange?: any;
}

export interface CheckboxItemProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 是否选中
     */
    checked?: boolean;

    /**
     * 是否半选中
     */
    indeterminate?: boolean;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 选中或取消选中触发的回调函数
     */
    onChange?: (checked: boolean, event: React.MouseEvent<HTMLElement>) => void;

    /**
     * 帮助文本
     */
    helper?: React.ReactNode;

    /**
     * 标签内容
     */
    children?: React.ReactNode;
    checkboxDisabled?: boolean;
}

export class CheckboxItem extends React.Component<CheckboxItemProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onChange?: any;
}

export interface RadioItemProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 是否选中
     */
    checked?: boolean;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 选中或取消选中触发的回调函数
     */
    onChange?: (checked: boolean, event: {}) => void;

    /**
     * 帮助文本
     */
    helper?: React.ReactNode;

    /**
     * 标签内容
     */
    children?: React.ReactNode;
}

export class RadioItem extends React.Component<RadioItemProps, any> {}

export interface GroupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 标签内容
     */
    label?: React.ReactNode;

    /**
     * 菜单项
     */
    children?: React.ReactNode;
}

export class Group extends React.Component<GroupProps, any> {}

export interface DividerProps extends React.HTMLAttributes<HTMLElement>, CommonProps {}

export class Divider extends React.Component<DividerProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onSelect?: any;
}

export interface MenuProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 菜单项和子菜单
     */
    children?: React.ReactNode;

    /**
     * 点击菜单项触发的回调函数
     */
    onItemClick?: (key: string, item: any, event: React.MouseEvent) => void;

    /**
     * 当前打开的子菜单的 key 值
     */
    openKeys?: string | Array<any>;

    /**
     * 初始打开的子菜单的 key 值
     */
    defaultOpenKeys?: string | Array<any>;

    /**
     * 初始展开所有的子菜单，只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效，优先级高于 defaultOpenKeys
     */
    defaultOpenAll?: boolean;

    /**
     * 打开或关闭子菜单触发的回调函数
     */
    onOpen?: (key: string[], extra: { key: string; open: boolean }) => void;

    /**
     * 子菜单打开的模式
     */
    mode?: 'inline' | 'popup';

    /**
     * 子菜单打开的触发行为
     */
    triggerType?: 'click' | 'hover';

    /**
     * 展开内连子菜单的模式，同时可以展开一个子菜单还是多个子菜单，该属性仅在 mode 为 inline 时生效
     */
    openMode?: 'single' | 'multiple';

    /**
     * 内连子菜单缩进距离
     */
    inlineIndent?: number;

    /**
     * 是否自动让弹层的宽度和菜单项保持一致，如果弹层的宽度比菜单项小则和菜单项保持一致，如果宽度大于菜单项则不做处理
     */
    popupAutoWidth?: boolean;

    /**
     * 弹层的对齐方式
     */
    popupAlign?: 'follow' | 'outside';

    /**
     * 弹层自定义 props
     */
    popupProps?: PopupProps | (() => void);

    /**
     * 弹出子菜单自定义 className
     */
    popupClassName?: string;

    /**
     * 弹出子菜单自定义 style
     */
    popupStyle?: React.CSSProperties;

    /**
     * 当前选中菜单项的 key 值
     */
    selectedKeys?: string | Array<any>;

    /**
     * 初始选中菜单项的 key 值
     */
    defaultSelectedKeys?: string | Array<any>;

    /**
     * 选中或取消选中菜单项触发的回调函数
     */
    onSelect?: (
        selectedKeys: Array<any>,
        item: any,
        extra: { select: boolean; label: any; keyPath: any[]; key: string[] }
    ) => void;

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
     * 菜单第一层展示方向
     */
    direction?: 'ver' | 'hoz';

    /**
     * 横向菜单条 item 和 footer 的对齐方向，在 direction 设置为 'hoz' 并且 header 存在时生效
     */
    hozAlign?: 'left' | 'right';

    /**
     * 自定义菜单头部
     */
    header?: React.ReactNode;

    /**
     * 自定义菜单尾部
     */
    footer?: React.ReactNode;

    /**
     * 自定义菜单尾部容器的 className
     */
    footerWrapperClassName?: string;

    /**
     * 是否自动获得焦点
     */
    autoFocus?: boolean;

    /**
     * 当前获得焦点的子菜单或菜单项 key 值
     */
    focusedKey?: string;
    focusable?: boolean;
    onItemFocus?: (key: string, ...rest: any[]) => void;
    renderMore?: (items?: Array<any>) => React.ReactElement;

    /**
     * 是否开启嵌入式模式，一般用于Layout的布局中，开启后没有默认背景、外层border、box-shadow，可以配合`<Menu style={{lineHeight: '100px'}}>` 自定义高度
     */
    embeddable?: boolean;
    icons?: {
        select?: React.ReactNode;
    };

    /**
     * 横向菜单模式下，是否维持在一行，即超出一行折叠成 SubMenu 显示
     */
    hozInLine?: boolean;
}

export default class Menu extends React.Component<MenuProps, any> {
    static Item: typeof Item;
    static SubMenu: typeof SubMenu;
    static PopupItem: typeof PopupItem;
    static CheckboxItem: typeof CheckboxItem;
    static RadioItem: typeof RadioItem;
    static Group: typeof Group;
    static Divider: typeof Divider;
    static create(props: any): void;
}

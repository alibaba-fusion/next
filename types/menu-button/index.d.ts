/// <reference types="react" />

import * as React from 'react';
import { Item, Group, Divider } from '../menu';
import { ButtonProps } from '../button';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onSelect?: any;
}

export interface MenuButtonProps extends HTMLAttributesWeak, ButtonProps {
    /**
     * 按钮上的文本内容
     */
    label?: React.ReactNode;

    /**
     * 弹层是否与按钮宽度相同
     */
    autoWidth?: boolean;

    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层容器
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层展开状态
     */
    visible?: boolean;

    /**
     * 弹层默认是否展开
     */
    defaultVisible?: boolean;

    /**
     * 弹层在显示和隐藏触发的事件
     */
    onVisibleChange?: () => void;

    /**
     * 弹层自定义样式
     */
    popupStyle?: {};

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层属性透传
     */
    popupProps?: {};

    /**
     * 默认激活的菜单项（用法同 Menu 非受控）
     */
    defaultSelectedKeys?: Array<any>;

    /**
     * 激活的菜单项（用法同 Menu 受控）
     */
    selectedKeys?: Array<any>;

    /**
     * 菜单的选择模式，同 Menu
     */
    selectMode?: string;

    /**
     * 点击菜单项后的回调，同 Menu
     */
    onItemClick?: () => void;

    /**
     * 选择菜单后的回调，同 Menu
     */
    onSelect?: () => void;

    /**
     * 菜单属性透传
     */
    menuProps?: {};
}

export default class MenuButton extends React.Component<MenuButtonProps, any> {
    static Item: typeof Item;
    static Group: typeof Group;
    static Divider: typeof Divider;
}

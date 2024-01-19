/// <reference types="react" />

import React from 'react';
import { Item, Group, Divider, MenuProps } from '../menu';
import { CommonProps } from '../util';
import { ButtonProps } from '../button';
import { PopupProps } from '../overlay';

interface HTMLAttributesWeak extends ButtonProps {
    onSelect?: any;
}

export interface SplitButtonProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 按钮的类型
     */
    type?: 'normal' | 'primary' | 'secondary';

    /**
     * 按钮组的尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 主按钮的文案
     */
    label?: React.ReactNode;

    /**
     * 设置标签类型
     */
    component?: 'button' | 'a';

    /**
     * 是否为幽灵按钮
     */
    ghost?: 'light' | 'dark' | false | true;

    /**
     * 默认激活的菜单项（用法同 Menu 非受控）
     */
    defaultSelectedKeys?: string[];

    /**
     * 激活的菜单项（用法同 Menu 受控）
     */
    selectedKeys?: string[];

    /**
     * 菜单的选择模式
     */
    selectMode?: 'single' | 'multiple';

    /**
     * 触发按钮的属性（支持 Button 的所有属性透传）
     */
    triggerProps?: ButtonProps;

    /**
     * 弹层菜单的宽度是否与按钮组一致
     */
    autoWidth?: boolean;

    /**
     * 弹层是否显示
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示
     */
    defaultVisible?: boolean;

    /**
     * 弹层显示状态变化时的回调函数
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层的触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层对齐方式, 详情见Overlay align
     */
    popupAlign?: string;

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 透传给弹层的属性
     */
    popupProps?: PopupProps;

    /**
     * 点击菜单项后的回调，同 Menu
     */
    onItemClick?: (key: string, item: any, event: React.MouseEvent<HTMLElement>) => void;

    /**
     * 选择菜单后的回调，同 Menu
     */
    onSelect?: (selectedKeys: Array<any>, item: any, extra: any) => void;

    /**
     * 透传给 Menu 的属性
     */
    menuProps?: MenuProps;

    /**
     * 透传给 左侧按钮 的属性
     */
    leftButtonProps?: ButtonProps;

    /**
     * 是否跟随滚动
     */
    followTrigger?: boolean;
}

export default class SplitButton extends React.Component<SplitButtonProps, any> {
    static Item: typeof Item;
    static Group: typeof Group;
    static Divider: typeof Divider;
}

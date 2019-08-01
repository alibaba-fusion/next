/// <reference types="react" />

import * as React from 'react';
import { ButtonProps } from '../button';

interface HTMLAttributesWeak extends ButtonProps {
    onSelect?: any;
}

export interface SplitButtonProps extends HTMLAttributesWeak {
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
    defaultSelectedKeys?: Array<any>;

    /**
     * 激活的菜单项（用法同 Menu 受控）
     */
    selectedKeys?: Array<any>;

    /**
     * 菜单的选择模式
     */
    selectMode?: 'single' | 'multiple';

    /**
     * 选择菜单项时的回调，参考 Menu
     */
    onSelect?: () => void;

    /**
     * 点击菜单项时的回调，参考 Menu
     */
    onItemClick?: () => void;

    /**
     * 触发按钮的属性（支持 Button 的所有属性透传）
     */
    triggerProps?: {};

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
    popupStyle?: {};

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 透传给弹层的属性
     */
    popupProps?: {};

    /**
     * 透传给 Menu 的属性
     */
    menuProps?: {};

    /**
     * 透传给 左侧按钮 的属性
     */
    leftButtonProps?: {};
}

export default class SplitButton extends React.Component<
    SplitButtonProps,
    any
> {}

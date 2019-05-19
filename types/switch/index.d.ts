/// <reference types="react" />

import * as React from 'react';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onChange?: any;
    onClick?: any;
    onKeyDown?: any;
}

export interface SwitchProps extends HTMLAttributesWeak {
    /**
     * 自定义类名
     */
    className?: string;

    /**
     * 自定义内敛样式
     */
    style?: React.CSSProperties;

    /**
     * 打开时的内容
     */
    checkedChildren?: any;

    /**
     * 关闭时的内容
     */
    unCheckedChildren?: any;

    /**
     * 开关状态改变是触发此事件
     */
    onChange?: (checked: boolean, e: any) => void;

    /**
     * 开关当前的值(针对受控组件)
     */
    checked?: boolean;

    /**
     * 开关默认值 (针对非受控组件)
     */
    defaultChecked?: boolean;

    /**
     * 表示开关被禁用
     */
    disabled?: boolean;

    /**
     * switch的尺寸
     */
    size?: 'medium' | 'small';

    /**
     * 鼠标点击事件
     */
    onClick?: (e: any) => void;

    /**
     * 键盘按键事件
     */
    onKeyDown?: (e: any) => void;
}

export default class Switch extends React.Component<SwitchProps, any> {}

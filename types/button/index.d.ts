/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';

export interface GroupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 统一设置 Button 组件的按钮大小
     */
    size?: string;
}

export class Group extends React.Component<GroupProps, any> {}
interface HTMLAttributesWeak extends React.ButtonHTMLAttributes<HTMLElement> {
    type?: any;
    onClick?: any;
}

export interface ButtonProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 按钮的类型
     */
    type?: 'primary' | 'secondary' | 'normal';

    /**
     * 按钮的尺寸
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小
     */
    icons?: { loading?: React.ReactNode };
    /**
     * 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小
     */
    iconSize?:
        | number
        | 'xxs'
        | 'xs'
        | 'small'
        | 'medium'
        | 'large'
        | 'xl'
        | 'xxl'
        | 'xxxl'
        | 'inherit';

    /**
     * 当 component = 'button' 时，设置 button 标签的 type 值
     */
    htmlType?: 'submit' | 'reset' | 'button';

    /**
     * 设置标签类型
     */
    component?: 'button' | 'a';

    /**
     * 设置按钮的载入状态
     */
    loading?: boolean;

    /**
     * 是否为幽灵按钮
     */
    ghost?: true | false | 'light' | 'dark';

    /**
     * 是否为文本按钮
     */
    text?: boolean;

    /**
     * 是否为警告按钮
     */
    warning?: boolean;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 点击按钮的回调
     */
    onClick?: React.MouseEventHandler;

    /**
     * 在Button组件使用component属性值为a时有效，代表链接页面的URL
     */
    href?: string;

    /**
     * 在Button组件使用component属性值为a时有效，代表何处打开链接文档
     */
    target?: string;
}

export default class Button extends React.Component<ButtonProps, any> {
    static Group: typeof Group;
}

import * as React from 'react';
import { CommonProps } from '../util';

/**
 * 按钮类型
 * @api
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * @api Button.Group
 */
export interface GroupProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 统一设置 Button 组件的按钮大小
     */
    size?: ButtonSize;
}

type HTMLAttributesWeak = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type' | 'onClick'>;

/**
 * @api Button
 */
export interface ButtonProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 按钮的类型
     * @en Typeo of button
     * @defaultValue 'normal'
     */
    type?: 'primary' | 'secondary' | 'normal';

    /**
     * @deprecated use `warning` `text` `ghost` insteaded
     * @skip
     */
    shape?: 'warning' | 'text' | 'ghost';

    /**
     * 按钮的尺寸
     * @en Size of button
     * @defaultValue 'medium'
     */
    size?: ButtonSize;
    /**
     * 按钮中可配置的 Icon
     * @en Available icons in button
     * @example
     * \{ loading: <Icon type="loading"/> \}
     */
    icons?: { loading?: React.ReactNode };
    /**
     * 按钮中 Icon 的尺寸
     * @en Size of icon in button
     * @defaultValue 默认根据 size 自动映射，映射规则：
     * size:large -\> `small`
     * size:medium -\> `xs`
     * size:small -\> `xs`
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
     * button 标签的 type 值
     * @en Original html type for button element
     * @defaultValue 'button'
     * @remarks 仅当 component = 'button' 时使用
     */
    htmlType?: 'submit' | 'reset' | 'button';

    /**
     * 最终渲染的 jsx 标签标签类型
     * @en The jsx tag to be rendered
     * @remarks 直接去掉原先的 ReactNode 类型，因为即使传递了非法类型运行时也会报错，不如在类型提示阶段就将错误抛出
     */
    component?: 'button' | 'a' | React.ComponentType<unknown>;

    /**
     * 设置按钮的载入状态
     * @en Loading state of a button
     * @defaultValue false
     */
    loading?: boolean;

    /**
     * 是否为幽灵按钮
     * @en Setting ghost button
     * @defaultValue false
     */
    ghost?: true | false | 'light' | 'dark';

    /**
     * 是否为文本按钮
     * @en Is text button
     * @defaultValue false
     */
    text?: boolean;

    /**
     * 是否为警告按钮
     * @en Is warning button
     * @defaultValue false
     */
    warning?: boolean;

    /**
     * 是否禁用
     * @en Is disabled
     * @defaultValue false
     */
    disabled?: boolean;

    /**
     * 点击按钮的回调
     * @en Callback of click event
     */
    onClick?: React.MouseEventHandler;

    /**
     * 'a' 标签的 href 属性
     * @remarks 仅在 component = 'a' 时使用
     * @skip
     */
    href?: string;

    /**
     * 'a' 标签的 target 属性
     * @remarks 仅在 component = 'a' 时使用
     * @skip
     */
    target?: string;

    /**
     * 'ReactRouterLink' 组件的 to 属性
     * @remarks 仅在 component 支持 to 属性时使用
     * @skip
     */
    to?: string;
}

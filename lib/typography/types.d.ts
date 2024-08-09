import React, { Component, ReactElement } from 'react';
import { CommonProps } from '../util';
/**
 * @api Typography.Text
 * @order 3
 */
export interface TextProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 添加删除线样式
     * @en Add strikethrough style
     * @defaultValue false
     */
    delete?: boolean;
    /**
     * 添加标记样式
     * @en Add markup style
     * @defaultValue false
     */
    mark?: boolean;
    /**
     * 添加下划线样式
     * @en Add underline style
     * @defaultValue false
     */
    underline?: boolean;
    /**
     * 是否加粗
     * @en Bold or not
     * @defaultValue false
     */
    strong?: boolean;
    /**
     * 添加代码样式
     * @en Add Code Style
     * @defaultValue false
     */
    code?: boolean;
    /**
     * 设置标签类型
     * @en SetLabel Type
     * @defaultValue span
     */
    component?: string | React.JSX.IntrinsicElements;
    /**
     * 是否以 rtl 模式展示
     * @en Whether to display in rtl mode
     * @defaultValue false
     */
    rtl?: boolean;
}
/**
 * @api Typography.Title
 * @order 1
 * @remarks
 * 分为 H1, H2, H3, H4, H5, H6 不同的组件，表示不同层级，继承 Typography.Text API
 * -
 * t is divided into H1, H2, H3, H4, H5, H6 components, representing different levels of headings
 *
 * Inherit the Typography.Text API
 */
export interface TitleProps extends TextProps {
}
export declare class TitleClass extends Component<TitleProps> {
    static displayName: string;
    render(): ReactElement<TextProps>;
}
/**
 * @api Typography.Paragraph
 * @order 2
 * @remarks 继承 Typography.Text 的 API - Inherit the Typography.Text API
 */
export interface ParagraphProps extends TextProps {
    /**
     * 什么方式展示段落
     * @skip
     * @defaultValue 'long'
     */
    type?: 'long' | 'short';
    /**
     * 组件大小
     * @skip
     * @defaultValue 'medium'
     */
    size?: 'medium' | 'small';
    /**
     * 设置标签类型
     * @en Set Label Type
     * @defaultValue p
     */
    component?: string | React.JSX.IntrinsicElements;
}
/**
 * @api Typography
 * @order 0
 * @remarks 继承 Typography.Text API - Inherit the Typography.Text API
 */
export interface TypographyProps extends TextProps {
    /**
     * 设置标签类型
     * @en Set Label Type
     * @defaultValue article
     */
    component?: string | React.JSX.IntrinsicElements;
}

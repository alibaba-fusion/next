/// <reference types="react" />

import * as React from "react";

export interface GroupProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 统一设置 Button 组件的按钮大小
   */
  size?: string;
}

export class Group extends React.Component<GroupProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  onClick?: any;
}

export interface ButtonProps extends HTMLAttributesWeak {
  /**
   * 按钮的类型
   */
  type?: "primary" | "secondary" | "normal";

  /**
   * 按钮的尺寸
   */
  size?: "small" | "medium" | "large";

  /**
   * 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小
   */
  iconSize?:
    | "xxs"
    | "xs"
    | "small"
    | "medium"
    | "large"
    | "xl"
    | "xxl"
    | "xxxl";

  /**
   * 当 component = 'button' 时，设置 button 标签的 type 值
   */
  htmlType?: "submit" | "reset" | "button";

  /**
   * 设置标签类型
   */
  component?: "button" | "a";

  /**
   * 设置按钮的载入状态
   */
  loading?: boolean;

  /**
   * 是否为幽灵按钮
   */
  ghost?: true | false | "light" | "dark";

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
  onClick?: ((e: {}) => void);
}

export default class Button extends React.Component<ButtonProps, any> {
  static Group: typeof Group;
}

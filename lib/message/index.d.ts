/// <reference types="react" />

import * as React from "react";

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  title?: any;
}

export interface MessageProps extends HTMLAttributesWeak {
  /**
   * 反馈类型
   */
  type?: "success" | "warning" | "error" | "notice" | "help" | "loading";

  /**
   * 反馈外观
   */
  shape?: "inline" | "addon" | "toast";

  /**
   * 反馈大小
   */
  size?: "medium" | "large";

  /**
   * 标题
   */
  title?: React.ReactNode;

  /**
   * 内容
   */
  children?: React.ReactNode;

  /**
   * 默认是否显示
   */
  defaultVisible?: boolean;

  /**
   * 当前是否显示
   */
  visible?: boolean;

  /**
   * 显示的图标类型，会覆盖内部设置的IconType
   */
  iconType?: string;

  /**
   * 显示关闭按钮
   */
  closeable?: boolean;

  /**
   * 关闭按钮的回调
   */
  onClose?: (() => void);

  /**
   * 关闭之后调用的函数
   */
  afterClose?: (() => void);

  /**
   * 是否开启展开收起动画
   */
  animation?: boolean;
}

export default class Message extends React.Component<MessageProps, any> {
  static show(props: {}): void;
  static hide(): void;
  static success(props: {}): void;
  static warning(props: {}): void;
  static error(props: {}): void;
  static help(props: {}): void;
  static loading(props: {}): void;
  static notice(props: {}): void;
}

/// <reference types="react" />

import * as React from "react";

export interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 弹层内容
   */
  children?: React.ReactNode;

  /**
   * 弹层当前是否显示
   */
  visible?: boolean;

  /**
   * 弹层默认是否显示
   */
  defaultVisible?: boolean;

  /**
   * 弹层显示或隐藏时触发的回调函数
   */
  onVisibleChange?: ((visible: boolean, type: string, e: {}) => void);

  /**
   * 触发弹层显示或者隐藏的元素
   */
  trigger?: React.ReactNode;

  /**
   * 触发弹层显示或隐藏的操作类型
   */
  triggerType?: "hover" | "click" | "focus";

  /**
   * 设置此属性，弹层无法显示或隐藏
   */
  disabled?: boolean;

  /**
   * 弹层相对于触发元素的定位, 详见 Overlay 的定位部分
   */
  align?: string;

  /**
   * 弹层相对于触发元素定位的微调
   */
  offset?: Array<any>;

  /**
   * 弹层显示或隐藏的延时时间（以毫秒为单位），在 triggerType 被设置为 hover 时生效
   */
  delay?: number;

  /**
   * 弹层打开时是否让其中的元素自动获取焦点
   */
  autoFocus?: boolean;

  /**
   * 是否显示遮罩
   */
  hasMask?: boolean;

  /**
   * 隐藏时是否保留子节点
   */
  cache?: boolean;

  /**
   * 配置动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画
   */
  animation?: {} | boolean;
}

export default class Dropdown extends React.Component<DropdownProps, any> {}

/// <reference types="react" />

import * as React from "react";

export interface AnimateProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 动画 className
   */
  animation?: string | {};

  /**
   * 子元素第一次挂载时是否执行动画
   */
  animationAppear?: boolean;

  /**
   * 包裹子元素的标签
   */
  component?: any;

  /**
   * 是否只有单个子元素，如果有多个子元素，请设置为 false
   */
  singleMode?: boolean;

  /**
   * 子元素
   */
  children?: React.ReactElement<any> | Array<any>;

  /**
   * 执行第一次挂载动画前触发的回调函数
   */
  beforeAppear?: () => void;

  /**
   * 执行第一次挂载动画，添加 xxx-appear-active 类名后触发的回调函数
   */
  onAppear?: (node: React.ReactElement<any>) => void;

  /**
   * 执行完第一次挂载动画后触发的函数
   */
  afterAppear?: (node: React.ReactElement<any>) => void;

  /**
   * 执行进场动画前触发的回调函数
   */
  beforeEnter?: (node: React.ReactElement<any>) => void;

  /**
   * 执行进场动画，添加 xxx-enter-active 类名后触发的回调函数
   */
  onEnter?: (node: React.ReactElement<any>) => void;

  /**
   * 执行完进场动画后触发的回调函数
   */
  afterEnter?: (node: React.ReactElement<any>) => void;

  /**
   * 执行离场动画前触发的回调函数
   */
  beforeLeave?: (node: React.ReactElement<any>) => void;

  /**
   * 执行离场动画，添加 xxx-leave-active 类名后触发的回调函数
   */
  onLeave?: (node: React.ReactElement<any>) => void;

  /**
   * 执行完离场动画后触发的回调函数
   */
  afterLeave?: (node: React.ReactElement<any>) => void;
}

export default class Animate extends React.Component<AnimateProps, any> {}

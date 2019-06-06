/// <reference types="react" />

import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 徽章依托的内容
   */
  children?: React.ReactNode;

  /**
   * 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏
   */
  count?: number | string;

  /**
   * 自定义节点内容
   */
  content?: React.ReactNode;

  /**
   * 展示的封顶的数字
   */
  overflowCount?: number | string;

  /**
   * 不展示数字，只展示一个小红点
   */
  dot?: boolean;
}

export default class Badge extends React.Component<BadgeProps, any> {}

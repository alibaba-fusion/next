/// <reference types="react" />

import * as React from "react";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 指定显示哪种图标
   */
  type?: string;

  /**
   * 指定图标大小
   */
  size?: "xxs" | "xs" | "small" | "medium" | "large" | "xl" | "xxl" | "xxxl";
}

export default class Icon extends React.Component<IconProps, any> {}

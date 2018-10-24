/// <reference types="react" />

import * as React from "react";

export interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 形态
   */
  shape?: "circle" | "line";

  /**
   * 尺寸
   */
  size?: "small" | "medium" | "large";

  /**
   * 所占百分比
   */
  percent?: number;

  /**
   * 进度状态
   */
  state?: "normal" | "success" | "error";

  /**
   * 是否为色彩阶段变化模式
   */
  progressive?: boolean;

  /**
   * 是否添加 Border（只适用于 Line Progress)
   */
  hasBorder?: boolean;

  /**
   * 文本渲染函数
   */
  textRender?: ((percent: number) => React.ReactNode);
}

export default class Progress extends React.Component<ProgressProps, any> {}

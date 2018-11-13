/// <reference types="react" />

import * as React from "react";

export interface ParagraphProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 额外的样式名 会附加到 root dom 上
   */
  className?: string;

  /**
   * 什么方式展示段落
   */
  type?: "long" | "short";

  /**
   * 组件大小。
   */
  size?: "medium" | "small";
}

export default class Paragraph extends React.Component<ParagraphProps, any> {}

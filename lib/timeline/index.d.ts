/// <reference types="react" />

import * as React from "react";

export interface TimelineProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 样式的品牌前缀
   */
  prefix?: string;

  /**
   * 自定义折叠选项 示例`[{foldArea: [startIndex, endIndex], foldShow: boolean}]`
   */
  fold?: Array<any>;

  /**
   * 自定义类名
   */
  className?: string;
}

export default class Timeline extends React.Component<TimelineProps, any> {}

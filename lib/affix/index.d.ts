/// <reference types="react" />

import * as React from "react";

export interface AffixProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 设置 Affix 需要监听滚动事件的容器元素
   */
  container?: (() => React.ReactElement<any>);

  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop?: number;

  /**
   * 距离窗口底部达到制定偏移量后触发
   */
  offsetBottom?: number;

  /**
   * 当元素的样式发生固钉样式变化时触发的回调函数
   */
  onAffix?: ((元素是否被固钉: boolean) => void);

  /**
   * 是否启用绝对布局实现 affix
   */
  useAbsolute?: boolean;
}

export default class Affix extends React.Component<AffixProps, any> {}

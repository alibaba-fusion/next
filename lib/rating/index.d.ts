/// <reference types="react" />

import * as React from "react";

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  defaultValue?: any;
  onChange?: any;
}

export interface RatingProps extends HTMLAttributesWeak {
  /**
   * 默认值
   */
  defaultValue?: number;

  /**
   * 值
   */
  value?: number;

  /**
   * 评分的总数
   */
  count?: number;

  /**
   * 是否显示 grade
   */
  showGrade?: boolean;

  /**
   * 尺寸
   */
  size?: "small" | "medium" | "large";

  /**
   * 是否允许半星评分
   */
  allowHalf?: boolean;

  /**
   * 用户点击评分时触发的回调
   */
  onChange?: ((value: string) => void);

  /**
   * 用户hover评分时触发的回调
   */
  onHoverChange?: ((value: string) => void);

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 评分文案生成方法，传入id支持无障碍时，读屏软件可读
   */
  readAs?: (() => void);

  /**
   * 自定义国际化文案对象
   */
  locale?: {};
}

export default class Rating extends React.Component<RatingProps, any> {}

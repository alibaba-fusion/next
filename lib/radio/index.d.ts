/// <reference types="react" />

import * as React from "react";

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  defaultValue?: any;
  onChange?: any;
}

export interface GroupProps extends HTMLAttributesWeak {
  /**
   * 样式类名的品牌前缀
   */
  prefix?: string;

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 自定义内敛样式
   */
  style?: React.CSSProperties;

  /**
   * radio group的选中项的值
   */
  value?: string | number | boolean;

  /**
   * radio group的默认值
   */
  defaultValue?: string | number | boolean;

  /**
   * 选中值改变时的事件
   */
  onChange?: ((value: string, e: any) => void);

  /**
   * 表示radio被禁用
   */
  disabled?: boolean;

  /**
   * 可以设置成 button 展示形状
   */
  shape?: "button";

  /**
   * 与 `shape` 属性配套使用，shape设为button时有效
   */
  size?: "large" | "medium" | "small";

  /**
   * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']`
   */
  dataSource?: Array<any>;

  /**
   * 通过子元素方式设置内部radio
   */
  children?: Array<any> | React.ReactElement<any>;

  /**
   * 子项目的排列方式
   * - hoz: 水平排列 (default)
   * - ver: 垂直排列
   */
  itemDirection?: "hoz" | "ver";
}

export class Group extends React.Component<GroupProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  onChange?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

export interface RadioProps extends HTMLAttributesWeak {
  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 组件input的id
   */
  id?: string;

  /**
   * 自定义内敛样式
   */
  style?: React.CSSProperties;

  /**
   * 设置radio是否选中
   */
  checked?: boolean;

  /**
   * 设置radio是否默认选中
   */
  defaultChecked?: boolean;

  /**
   * 通过属性配置label
   */
  label?: React.ReactNode;

  /**
   * 状态变化时触发的事件
   */
  onChange?: ((checked: boolean, e: any) => void);

  /**
   * 鼠标进入enter事件
   */
  onMouseEnter?: ((e: any) => void);

  /**
   * 鼠标离开事件
   */
  onMouseLeave?: ((e: any) => void);

  /**
   * radio是否被禁用
   */
  disabled?: boolean;
}

export default class Radio extends React.Component<RadioProps, any> {
  static Group: typeof Group;
}

/// <reference types="react" />

import * as React from "react";

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  defaultValue?: any;
  onChange?: any;
}

export interface SearchProps extends HTMLAttributesWeak {
  /**
   * 样式前缀
   */
  prefix?: string;

  /**
   * 形状
   */
  shape?: "normal" | "simple";

  /**
   * 类型 shape=normal: primary/secondary; shape=simple: normal/dark;
   */
  type?: "primary" | "secondary" | "normal" | "dark";

  /**
   * 大小
   */
  size?: "large" | "medium";

  /**
   * 搜索框默认值
   */
  defaultValue?: string;

  /**
   * 搜索框数值
   */
  value?: string | number;

  /**
   * 输入关键字时的回掉
   */
  onChange?: ((输入值: {}) => void);

  /**
   * 点击搜索按钮触发的回调
   */
  onSearch?: ((输入值: {}) => void);

  /**
   * 选择器默认值
   */
  defaultFilterValue?: string;

  /**
   * 选择器
   */
  filter?: Array<any>;

  /**
   * 选择器值
   */
  filterValue?: string;

  /**
   * 选择器发生变化时回调
   */
  onFilterChange?: ((filter: {}) => void);

  /**
   * 搜索框下拉联想列表
   */
  dataSource?: Array<any>;

  /**
   * 默认提示
   */
  placeholder?: string;

  /**
   * button 的内容
   */
  searchText?: React.ReactNode;

  /**
   * 自定义样式
   */
  style?: React.CSSProperties;

  /**
   * 样式名称
   */
  className?: string;

  /**
   * 选择器的props
   */
  filterProps?: {};

  /**
   * 按钮的额外属性
   */
  buttonProps?: {};

  /**
   * 自定义渲染的的下拉框
   */
  popupContent?: React.ReactNode;

  /**
   * 自定义渲染的的下拉框
   */
  visible?: boolean;

  /**
   * 是否显示清除按钮
   */
  hasClear?: boolean;
}

export default class Search extends React.Component<SearchProps, any> {}

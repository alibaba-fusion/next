/// <reference types="react" />

import * as React from "react";

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  defaultValue?: any;
  onChange?: any;
}

export interface TransferProps extends HTMLAttributesWeak {
  /**
   * 移动选项模式
   */
  mode?: "normal" | "simple";

  /**
   * 数据源
   */
  dataSource?: Array<any>;

  /**
   * （用于受控）当前值
   */
  value?: Array<any>;

  /**
   * （用于非受控）初始值
   */
  defaultValue?: Array<any>;

  /**
   * 值发生改变的时候触发的回调函数
   */
  onChange?: (value: Array<any>, data: Array<any>, extra: {}) => void;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 是否禁用左侧面板
   */
  leftDisabled?: boolean;

  /**
   * 是否禁用右侧面板
   */
  rightDisabled?: boolean;

  /**
   * 列表项渲染函数
   */
  itemRender?: (data: {}) => React.ReactNode;

  /**
   * 是否显示搜索框
   */
  showSearch?: boolean;

  /**
   * 自定义搜索函数
   */
  filter?: (searchedValue: string, data: {}) => boolean;

  /**
   * 搜索框输入时触发的回调函数
   */
  onSearch?: (searchedValue: string, position: string) => void;

  /**
   * 搜索框占位符
   */
  searchPlaceholder?: string;

  /**
   * 列表为空显示内容
   */
  notFoundContent?: React.ReactNode;

  /**
   * 左右面板标题
   */
  titles?: Array<any>;

  /**
   * 向右向左移动按钮显示内容
   */
  operations?: Array<any>;

  /**
   * 左面板默认选中值
   */
  defaultLeftChecked?: Array<any>;

  /**
   * 右面板默认选中值
   */
  defaultRightChecked?: Array<any>;

  /**
   * 左右面板列表自定义样式类名
   */
  listClassName?: string;

  /**
   * 左右面板列表自定义样式对象
   */
  listStyle?: {};

  /**
   * 是否允许拖拽排序
   */
  sortable?: boolean;

  /**
   * 拖拽排序时触发的回调函数
   */
  onSort?: (value: Array<any>, position: string) => void;

  /**
   * 自定义国际化文案对象
   */
  locale?: {};
}

export default class Transfer extends React.Component<TransferProps, any> {}

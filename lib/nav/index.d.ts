/// <reference types="react" />

import * as React from "react";

export interface GroupProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 标签内容
   */
  label?: React.ReactNode;

  /**
   * 导航项和子导航
   */
  children?: React.ReactNode;
}

export class Group extends React.Component<GroupProps, any> {}

export interface ItemProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="icon type" />`
   */
  icon?: string | React.ReactNode;

  /**
   * 导航内容
   */
  children?: React.ReactNode;
}

export class Item extends React.Component<ItemProps, any> {}

export interface PopupItemProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 自定义图标，可以使用 Icon 的 type, 也可以使用组件 `<Icon type="icon type" />`
   */
  icon?: string | React.ReactNode;

  /**
   * 标签内容
   */
  label?: React.ReactNode;

  /**
   * 弹出内容
   */
  children?: React.ReactNode;
}

export class PopupItem extends React.Component<PopupItemProps, any> {}

export interface SubNavProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 自定义图标，可以使用 Icon 的 type，也可以使用组件 `<Icon type="your type" />`
   */
  icon?: string | React.ReactNode;

  /**
   * 标签内容
   */
  label?: React.ReactNode;

  /**
   * 是否可选
   */
  selectable?: boolean;

  /**
   * 导航项和子导航
   */
  children?: React.ReactNode;
}

export class SubNav extends React.Component<SubNavProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  onSelect?: any;
}

export interface NavProps extends HTMLAttributesWeak {
  /**
   * 导航项和子导航
   */
  children?: React.ReactNode;

  /**
   * 导航类型
   */
  type?: "normal" | "primary" | "secondary" | "line";

  /**
   * 导航布局
   */
  direction?: "hoz" | "ver";

  /**
   * 横向导航条 items 和 footer 的对齐方向，在 direction 设置为 'hoz' 并且 header 存在时生效
   */
  hozAlign?: "left" | "right";

  /**
   * 设置组件选中状态的 active 边方向
   */
  activeDirection?: null | "top" | "bottom" | "left" | "right";

  /**
   * 子导航打开的模式（水平导航只支持弹出）
   */
  mode?: "inline" | "popup";

  /**
   * 子导航打开的触发方式
   */
  triggerType?: "click" | "hover";

  /**
   * 内联子导航缩进距离
   */
  inlineIndent?: number;

  /**
   * 初始展开所有的子导航，只在 mode 设置为 'inline' 以及 openMode 设置为 'multiple' 下生效
   */
  defaultOpenAll?: boolean;

  /**
   * 内联子导航的展开模式，同时可以展开一个同级子导航还是多个同级子导航，该属性仅在 mode 为 inline 时生效
   */
  openMode?: "single" | "multiple";

  /**
   * 当前选中导航项的 key 值
   */
  selectedKeys?: string | Array<any>;

  /**
   * 初始选中导航项的 key 值
   */
  defaultSelectedKeys?: string | Array<any>;

  /**
   * 选中或取消选中导航项触发的回调函数
   */
  onSelect?: ((selectedKeys: Array<any>, item: {}, extra: {}) => void);

  /**
   * 弹出子导航的对齐方式（水平导航只支持 follow ）
   */
  popupAlign?: "follow" | "outside";

  /**
   * 弹出子导航的自定义类名
   */
  popupClassName?: string;

  /**
   * 是否只显示图标
   */
  iconOnly?: boolean;

  /**
   * 是否显示右侧的箭头（仅在 iconOnly=true 时生效）
   */
  hasArrow?: boolean;

  /**
   * 是否有 ToolTips （仅在 iconOnly=true 时生效）
   */
  hasTooltip?: boolean;

  /**
   * 自定义导航头部
   */
  header?: React.ReactNode;

  /**
   * 自定义导航尾部
   */
  footer?: React.ReactNode;
}

export default class Nav extends React.Component<NavProps, any> {
  static Group: typeof Group;
  static Item: typeof Item;
  static PopupItem: typeof PopupItem;
  static SubNav: typeof SubNav;
}

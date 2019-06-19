/// <reference types="react" />

import * as React from "react";

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  title?: any;
}

export interface ItemProps extends HTMLAttributesWeak {
  /**
   * 选项卡标题
   */
  title?: React.ReactNode;

  /**
   * 单个选项卡是否可关闭
   */
  closeable?: boolean;

  /**
   * 选项卡是否被禁用
   */
  disabled?: boolean;
}

export class Item extends React.Component<ItemProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  onClick?: any;
  onChange?: any;
}

export interface TabProps extends HTMLAttributesWeak {
  /**
   * 被激活的选项卡的 key, 赋值则tab为受控组件, 用户无法切换
   */
  activeKey?: number | string;

  /**
   * 初始化时被激活的选项卡的 key
   */
  defaultActiveKey?: number | string;

  /**
   * 外观形态
   */
  shape?: "pure" | "wrapped" | "text" | "capsule";

  /**
   * 是否开启动效
   */
  animation?: boolean;

  /**
   * 选项卡过多时的滑动模式
   */
  excessMode?: "slide" | "dropdown";

  /**
   * 导航选项卡的位置，只适用于包裹型（wrapped）选项卡
   */
  tabPosition?: "top" | "bottom" | "left" | "right";

  /**
   * 尺寸
   */
  size?: "small" | "medium";

  /**
   * 激活选项卡的触发方式
   */
  triggerType?: "hover" | "click";

  /**
   * 是否延迟加载 TabPane 的内容, 默认开启, 即不提前渲染
   */
  lazyLoad?: boolean;

  /**
   * 是否自动卸载未处于激活状态的选项卡
   */
  unmountInactiveTabs?: boolean;

  /**
   * 导航条的自定义样式
   */
  navStyle?: {};

  /**
   * 导航条的自定义样式类
   */
  navClassName?: string;

  /**
   * 内容区容器的自定义样式
   */
  contentStyle?: {};

  /**
   * 内容区容器的自定义样式类
   */
  contentClassName?: string;

  /**
   * 导航栏附加内容
   */
  extra?: React.ReactNode;

  /**
   * 点击单个选项卡时触发的回调
   */
  onClick?: () => void;

  /**
   * 选项卡发生切换时的事件回调
   */
  onChange?: (key: string | number) => void;

  /**
   * 选项卡被关闭时的事件回调
   */
  onClose?: (key: string | number) => void;

  /**
   * 自定义选项卡模板渲染函数
   */
  tabRender?: (key: string, props: {}) => React.ReactNode;

  /**
   * 弹层属性透传, 只有当 excessMode 为 dropdown 时生效
   */
  popupProps?: {};
}

export default class Tab extends React.Component<TabProps, any> {
  static Item: typeof Item;
}

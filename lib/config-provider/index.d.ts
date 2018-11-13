/// <reference types="react" />

import * as React from "react";

export interface ConfigProviderProps {
  /**
   * 样式类名的品牌前缀
   */
  prefix?: string;

  /**
   * 国际化文案对象，属性为组件的 displayName
   */
  locale?: {};

  /**
   * 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用
   */
  pure?: boolean;

  /**
   * 是否在开发模式下显示组件属性被废弃的 warning 提示
   */
  warning?: boolean;

  /**
   * 组件树
   */
  children?: React.ReactElement<any>;
}

export default class ConfigProvider extends React.Component<
  ConfigProviderProps,
  any
> {
  static config(Component: any, options: {}): any;
  static getContextProps(props: {}, displayName: string): {};
}

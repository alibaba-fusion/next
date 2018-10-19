/// <reference types="react" />

import * as React from "react";

export interface ItemProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 样式前缀
   */
  prefix?: string;

  /**
   * label 标签的文本
   */
  label?: React.ReactNode;

  /**
   * label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效
   */
  labelCol?: {};

  /**
   * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
   */
  wrapperCol?: {};

  /**
   * 自定义提示信息，如不设置，则会根据校验规则自动生成.
   */
  help?: React.ReactNode;

  /**
   * 校验状态，如不设置，则会根据校验规则自动生成
   */
  validateState?: "error" | "success" | "loading";

  /**
   * 配合 validateState 属性使用，是否展示 success/loading 的校验状态图标, 目前只有Input支持
   */
  hasFeedback?: boolean;

  /**
   * 自定义内联样式
   */
  style?: React.CSSProperties;

  /**
   * 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面
   */
  extra?: React.ReactNode;

  /**
   * 单个Item的size自定义，优先级高于Form的size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
   */
  size?: "large" | "small" | "medium";

  /**
   * 标签的位置
   */
  labelAlign?: "top" | "left" | "inset";

  /**
   * 标签的左右对齐方式
   */
  labelTextAlign?: "left" | "right";

  /**
   * 扩展class
   */
  className?: string;

  /**
   * [表单校验] 不能为空
   */
  required?: boolean;

  /**
   * required 的星号是否显示
   */
  asterisk?: boolean;

  /**
   * required 自定义错误信息
   */
  requiredMessage?: string;

  /**
   * required 自定义触发方式
   */
  requiredTrigger?: string | Array<any>;

  /**
   * [表单校验] 最小值
   */
  min?: number;

  /**
   * [表单校验] 最大值
   */
  max?: number;

  /**
   * min/max 自定义错误信息
   */
  minmaxMessage?: string;

  /**
   * min/max 自定义触发方式
   */
  minmaxTrigger?: string | Array<any>;

  /**
   * [表单校验] 字符串最小长度 / 数组最小个数
   */
  minLength?: number;

  /**
   * [表单校验] 字符串最大长度 / 数组最大个数
   */
  maxLength?: number;

  /**
   * minLength/maxLength 自定义错误信息
   */
  minmaxLengthMessage?: string;

  /**
   * minLength/maxLength 自定义触发方式
   */
  minmaxLengthTrigger?: string | Array<any>;

  /**
   * [表单校验] 字符串精确长度 / 数组精确个数
   */
  length?: number;

  /**
   * length 自定义错误信息
   */
  lengthMessage?: string;

  /**
   * length 自定义触发方式
   */
  lengthTrigger?: string | Array<any>;

  /**
   * 正则校验
   */
  pattern?: any;

  /**
   * [表单校验] 四种常用的 pattern
   */
  format?: "number" | "email" | "url" | "tel";

  /**
   * format 自定义错误信息
   */
  formatMessage?: string;

  /**
   * format 自定义触发方式
   */
  formatTrigger?: string | Array<any>;

  /**
   * [表单校验] 自定义校验函数
   */
  validator?: (() => void);
}

export class Item extends React.Component<ItemProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  onClick?: any;
}

export interface SubmitProps extends HTMLAttributesWeak {
  /**
   * 点击提交后触发
   */
  onClick?: ((value: {}, errors: {}, field: any) => void);

  /**
   * 是否校验/需要校验的 name 数组
   */
  validate?: boolean | Array<any>;

  /**
   * 自定义 field (在 Form 内不需要设置)
   */
  field?: {};
}

export class Submit extends React.Component<SubmitProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  onClick?: any;
}

export interface ResetProps extends HTMLAttributesWeak {
  /**
   * 自定义重置的字段
   */
  names?: Array<any>;

  /**
   * 点击提交后触发
   */
  onClick?: (() => void);

  /**
   * 返回默认值
   */
  toDefault?: boolean;

  /**
   * 自定义 field (在 Form 内不需要设置)
   */
  field?: {};
}

export class Reset extends React.Component<ResetProps, any> {}

export interface ErrorProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 表单名
   */
  name?: string | Array<any>;

  /**
   * 自定义 field (在 Form 内不需要设置)
   */
  field?: {};

  /**
   * 自定义错误渲染, 可以是 node 或者 function(errors, state)
   */
  children?: React.ReactNode | (() => void);
}

export class Error extends React.Component<ErrorProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  onChange?: any;
}

export interface FormProps extends HTMLAttributesWeak {
  /**
   * 样式前缀
   */
  prefix?: string;

  /**
   * 内联表单
   */
  inline?: boolean;

  /**
   * 单个Item的size自定义，优先级高于Form的size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。
   */
  size?: "large" | "medium" | "small";

  /**
   * 标签的位置
   */
  labelAlign?: "top" | "left" | "inset";

  /**
   * 标签的左右对齐方式
   */
  labelTextAlign?: "left" | "right";

  /**
   * 经 `new Field(this)` 初始化后，直接传给 Form 即可 用到表单校验则不可忽略此项
   */
  field?: any;

  /**
   * 保存 Form 自动生成的 field 对象
   */
  saveField?: (() => void);

  /**
   * 控制第一级 Item 的 labelCol
   */
  labelCol?: {};

  /**
   * 控制第一级 Item 的 wrapperCol
   */
  wrapperCol?: {};

  /**
   * form内有 `htmlType="submit"` 的元素的时候会触发
   */
  onSubmit?: (() => void);

  /**
   * 子元素
   */
  children?: any;

  /**
   * 扩展class
   */
  className?: string;

  /**
   * 自定义内联样式
   */
  style?: React.CSSProperties;

  /**
   * 表单数值
   */
  value?: {};

  /**
   * 表单变化回调
   */
  onChange?: (() => void);

  /**
   * 设置标签类型
   */
  component?: string;
}

export default class Form extends React.Component<FormProps, any> {
  static Item: typeof Item;
  static Submit: typeof Submit;
  static Reset: typeof Reset;
  static Error: typeof Error;
}

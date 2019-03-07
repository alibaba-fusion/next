/// <reference types="react" />

import * as React from "react";

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  onError?: any;
  onSelect?: any;
  defaultValue?: any;
  onChange?: any;
}

export interface CardProps extends HTMLAttributesWeak {
  /**
   * 样式前缀
   */
  prefix?: string;

  /**
   * 多语言
   */
  locale?: {};

  /**
   * 上传列表的样式
   */
  listType?: "text" | "image" | "card";

  /**
   * 文件列表
   */
  value?: Array<any>;

  /**
   * 点击移除的回调
   */
  onRemove?: (() => void);

  /**
   * 取消上传的回调
   */
  onCancel?: (() => void);

  /**
   * 头像加载出错回调
   */
  onImageError?: (() => void);

  /**
   * 点击图片回调
   */
  onPreview?: (() => void);

  /**
   * 自定义额外渲染
   */
  extraRender?: (() => void);

  /**
   * 透传给Progress props
   */
  progressProps?: {};

  /**
   * 子元素
   */
  children?: React.ReactNode;

  /**
   * 可选参数，是否本地预览
   */
  useDataURL?: boolean;

  /**
   * 上传的地址
   */
  action?: string;

  /**
   * 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
   */
  accept?: string;

  /**
   * 上传额外传参
   */
  data?: {} | (() => void);

  /**
   * 设置上传的请求头部
   */
  headers?: {};

  /**
   * 是否允许请求携带 cookie
   */
  withCredentials?: boolean;

  /**
   * 可选参数, 详见 [beforeUpload](#beforeUpload)
   */
  beforeUpload?: ((file: {}, options: {}) => boolean | {} | any);

  /**
   * 上传中
   */
  onProgress?: (() => void);

  /**
   * 可选参数，上传成功回调函数，参数为请求下响应信息以及文件
   */
  onSuccess?: ((file: {}, value: Array<any>) => void);

  /**
   * 可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件
   */
  onError?: ((file: {}, value: Array<any>) => void);

  /**
   * 设置上传超时,单位ms
   */
  timeout?: number;

  /**
   * 上传方法
   */
  method?: "post" | "put";

  /**
   * 自定义上传方法
   */
  request?: ((option: {}) => {});

  /**
   * 文件名字段
   */
  name?: string;

  /**
   * 选择文件回调
   */
  onSelect?: (() => void);

  /**
   * 放文件
   */
  onDrop?: (() => void);

  /**
   * 默认文件列表
   */
  defaultValue?: Array<any>;

  /**
   * 上传按钮形状
   */
  shape?: "card";

  /**
   * 数据格式化函数，配合自定义 action 使用，参数为服务器的响应数据，详见 [formatter](#formater)
   */
  formatter?: ((response: {}, file: any) => void);

  /**
   * 最大文件上传个数
   */
  limit?: number;

  /**
   * 可选参数，是否支持拖拽上传，`ie10+` 支持。
   */
  dragable?: boolean;

  /**
   * 可选参数，是否禁用上传功能
   */
  disabled?: boolean;

  /**
   * 改变时候的回调
   */
  onChange?: (() => void);

  /**
   * 可选参数, 用于校验文件,afterSelect仅在 autoUpload=false 的时候生效,autoUpload=true时,可以使用beforeUpload完全可以替代该功能.
   */
  afterSelect?: ((file: {}) => boolean);

  /**
   * 自定义class
   */
  className?: string;

  /**
   * 自定义内联样式
   */
  style?: React.CSSProperties;

  /**
   * 自动上传
   */
  autoUpload?: boolean;
}

export class Card extends React.Component<CardProps, any> {}

export interface DragerProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 样式前缀
   */
  prefix?: string;
}

export class Drager extends React.Component<DragerProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  onSelect?: any;
}

export interface SelecterProps extends HTMLAttributesWeak {
  /**
   * 是否禁用上传功能
   */
  disabled?: boolean;

  /**
   * 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件
   */
  multiple?: boolean;

  /**
   * 是否支持拖拽上传，`ie10+` 支持。
   */
  dragable?: boolean;

  /**
   * 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
   */
  accept?: string;

  /**
   * 文件选择回调
   */
  onSelect?: (() => void);

  /**
   * 拖拽经过回调
   */
  onDragOver?: (() => void);

  /**
   * 拖拽离开回调
   */
  onDragLeave?: (() => void);

  /**
   * 拖拽完成回调
   */
  onDrop?: (() => void);
}

export class Selecter extends React.Component<SelecterProps, any> {}
interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  onError?: any;
  onSelect?: any;
  defaultValue?: any;
  onChange?: any;
}

export interface UploadProps extends HTMLAttributesWeak {
  /**
   * 样式前缀
   */
  prefix?: string;

  /**
   * 多语言
   */
  locale?: {};

  /**
   * 上传列表的样式
   */
  listType?: "text" | "image" | "card";

  /**
   * 文件列表
   */
  value?: Array<any>;

  /**
   * 移除文件回调函数
   */
  onRemove?: ((file: {}) => boolean | any);

  /**
   * 取消上传回调(支持Promise)
   */
  onCancel?: (() => void);

  /**
   * 头像加载出错回调
   */
  onImageError?: (() => void);

  /**
   * listType=card时点击图片回调
   */
  onPreview?: (() => void);

  /**
   * 自定义额外渲染
   */
  extraRender?: (() => void);

  /**
   * 透传给Progress props
   */
  progressProps?: {};

  /**
   * 子元素
   */
  children?: React.ReactNode;

  /**
   * 可选参数，是否本地预览
   */
  useDataURL?: boolean;

  /**
   * 上传的地址
   */
  action?: string;

  /**
   * 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
   */
  accept?: string;

  /**
   * 上传额外传参
   */
  data?: {} | (() => void);

  /**
   * 设置上传的请求头部
   */
  headers?: {};

  /**
   * 是否允许请求携带 cookie
   */
  withCredentials?: boolean;

  /**
   * 可选参数, 详见 [beforeUpload](#beforeUpload)
   */
  beforeUpload?: ((file: {}, options: {}) => boolean | {} | any);

  /**
   * 上传中
   */
  onProgress?: (() => void);

  /**
   * 可选参数，上传成功回调函数，参数为请求下响应信息以及文件
   */
  onSuccess?: ((file: {}, value: Array<any>) => void);

  /**
   * 可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件
   */
  onError?: ((file: {}, value: Array<any>) => void);

  /**
   * 设置上传超时,单位ms
   */
  timeout?: number;

  /**
   * 上传方法
   */
  method?: "post" | "put";

  /**
   * 自定义上传方法
   */
  request?: ((option: {}) => {});

  /**
   * 文件名字段
   */
  name?: string;

  /**
   * 选择文件回调
   */
  onSelect?: (() => void);

  /**
   * 放文件
   */
  onDrop?: (() => void);

  /**
   * 默认文件列表
   */
  defaultValue?: Array<any>;

  /**
   * 上传按钮形状
   */
  shape?: "card";

  /**
   * 数据格式化函数，配合自定义 action 使用，参数为服务器的响应数据，详见 [formatter](#formater)
   */
  formatter?: ((response: {}, file: any) => void);

  /**
   * 最大文件上传个数
   */
  limit?: number;

  /**
   * 可选参数，是否支持拖拽上传，`ie10+` 支持。
   */
  dragable?: boolean;

  /**
   * 可选参数，是否禁用上传功能
   */
  disabled?: boolean;

  /**
   * 上传文件改变时的状态
   */
  onChange?: ((info: {}) => void);

  /**
   * 可选参数, 用于校验文件,afterSelect仅在 autoUpload=false 的时候生效,autoUpload=true时,可以使用beforeUpload完全可以替代该功能.
   */
  afterSelect?: ((file: {}) => boolean);

  /**
   * 自定义class
   */
  className?: string;

  /**
   * 自定义内联样式
   */
  style?: React.CSSProperties;

  /**
   * 自动上传
   */
  autoUpload?: boolean;
}

export default class Upload extends React.Component<UploadProps, any> {
  static Card: typeof Card;
  static Drager: typeof Drager;
  static Selecter: typeof Selecter;
}

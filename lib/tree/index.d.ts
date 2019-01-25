/// <reference types="react" />

import * as React from "react";

export interface NodeProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 树节点
   */
  children?: React.ReactNode;

  /**
   * 节点文本内容
   */
  label?: React.ReactNode;

  /**
   * 单独设置是否支持选中，覆盖 Tree 的 selectable
   */
  selectable?: boolean;

  /**
   * 单独设置是否出现复选框，覆盖 Tree 的 checkable
   */
  checkable?: boolean;

  /**
   * 单独设置是否支持编辑，覆盖 Tree 的 editable
   */
  editable?: boolean;

  /**
   * 单独设置是否支持拖拽，覆盖 Tree 的 draggable
   */
  draggable?: boolean;

  /**
   * 是否禁止节点响应
   */
  disabled?: boolean;

  /**
   * 是否禁止勾选节点复选框
   */
  checkboxDisabled?: boolean;

  /**
   * 是否是叶子节点，设置loadData时生效
   */
  isLeaf?: boolean;
}

export class Node extends React.Component<NodeProps, any> {}
export interface TreeProps extends React.HTMLAttributes<HTMLElement> {}

export default class Tree extends React.Component<TreeProps, any> {
  static Node: typeof Node;
}

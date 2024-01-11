/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    title?: any;
    onClick?: any;
}

export interface ItemProps extends Omit<HTMLAttributesWeak, 'content'>, CommonProps {
    /**
     * 步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`
     */
    status?: 'wait' | 'process' | 'finish';

    /**
     * 标题
     */
    title?: React.ReactNode;

    /**
     * 图标
     */
    icon?: string;

    /**
     * 内容，用于垂直状态下的内容填充
     */
    content?: React.ReactNode;

    /**
     * StepItem 的自定义渲染, 会覆盖父节点设置的itemRender
     */
    itemRender?: (index: number, status: string) => React.ReactNode;

    /**
     * 百分比
     */
    percent?: number;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 点击步骤时的回调
     */
    onClick?: (index: number) => void;

    /**
     * 自定义样式
     */
    className?: string;
}

export class Item extends React.Component<ItemProps, any> {}
export interface StepProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 当前步骤
     */
    current?: number;

    /**
     * 展示方向
     */
    direction?: 'hoz' | 'ver';
    /**
     * 宽度是否横向拉伸
     */
    stretch?: boolean;
    /**
     * 横向布局时的内容排列
     */
    labelPlacement?: 'hoz' | 'ver';

    /**
     * 类型
     */
    shape?: 'circle' | 'arrow' | 'dot';

    /**
     * 是否只读模式
     */
    readOnly?: boolean;

    /**
     * 是否开启动效
     */
    animation?: boolean;

    /**
     * 自定义样式名
     */
    className?: string;

    /**
     * StepItem 的自定义渲染
     */
    itemRender?: (index: number, status: string) => React.ReactNode;
}

export default class Step extends React.Component<StepProps, any> {
    static Item: typeof Item;
}

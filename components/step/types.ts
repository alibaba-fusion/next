import * as React from 'react';
import { CommonProps } from '../util';

type HTMLAttributesWeak<T> = Omit<React.HTMLAttributes<T>, 'content' | 'onClick' | 'title'>;

export interface ItemProps<T = HTMLElement> extends HTMLAttributesWeak<T>, CommonProps {
    /**
     * @deprecated index
     * @skip
     */
    index: number;
    /**
     * @deprecated shape
     * @skip
     */
    shape: 'circle' | 'arrow' | 'dot';
    /**
     * @deprecated total
     * @skip
     */
    total: number;
    /**
     * @deprecated direction
     * @skip
     */
    direction?: string;
    /**
     * @deprecated onResize
     * @skip
     */
    onResize?: () => void;
    /**
     * @deprecated stretch
     * @skip
     */
    stretch?: boolean;
    /**
     * @deprecated labelPlacement
     * @skip
     */
    labelPlacement?: string;
    /**
     * @deprecated readOnly
     * @skip
     */
    readOnly?: boolean;
    /**
     * @deprecated parentWidth
     * @skip
     */
    parentWidth?: number;
    /**
     * @deprecated parentHeight
     * @skip
     */
    parentHeight?: number;
    /**
     * @deprecated parentLeft
     * @skip
     */
    parentLeft?: number;
    /**
     * @deprecated parentTop
     * @skip
     */
    parentTop?: number;
    /**
     * @deprecated parentRight
     * @skip
     */
    parentRight?: number;
    /**
     * @deprecated parentBottom
     * @skip
     */
    parentBottom?: number;

    /**
     * 是否开启动效
     */
    animation?: boolean;
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
    itemRender?: (
        index: number,
        status: string,
        title?: React.ReactNode,
        content?: React.ReactNode
    ) => React.ReactNode;

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
    onClick?: (index: number) => unknown;

    /**
     * 自定义样式
     */
    className?: string;
}

// export class Item extends React.Component<ItemProps, unknown> {}
export interface StepProps extends Omit<React.HTMLAttributes<HTMLElement>, 'type'>, CommonProps {
    /**
     * 当前步骤
     */
    current?: number;

    /**
     * 展示方向
     */
    direction?: 'hoz' | 'ver' | string;
    /**
     * 宽度是否横向拉伸
     */
    stretch?: boolean;
    /**
     * 横向布局时的内容排列
     */
    labelPlacement?: 'hoz' | 'ver' | string;

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

    /**
     * @deprecated Use shape instead
     * @skip
     */
    type?: 'circle' | 'arrow' | 'dot';
}

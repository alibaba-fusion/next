import type React from 'react';
import type { CommonProps } from '../util';

type HTMLAttributesWeak<T> = Omit<
    React.HTMLAttributes<T>,
    'content' | 'onClick' | 'title' | 'direction'
>;

/**
 * @api
 */
export type StepDirection = 'hoz' | 'ver';
/**
 * @api
 */
export type StepStatus = 'wait' | 'process' | 'finish';
/**
 * @api
 */
export type StepShape = 'circle' | 'arrow' | 'dot';

/**
 * Step.Item 继承自 Step 的私有的属性
 */
export interface ItemPrivateProps {
    index?: number;
    shape?: StepShape;
    direction?: StepDirection;
    onResize?: () => void;
    stretch?: boolean;
    labelPlacement?: StepDirection;
    readOnly?: boolean;
    parentWidth?: number;
    parentHeight?: number;
    parentLeft?: number;
    parentTop?: number;
    parentRight?: number;
    parentBottom?: number;
    animation?: boolean;
    current?: number;
    total?: number;
}

/**
 * @api Step.Item
 */
export interface ItemProps<T = HTMLElement>
    extends HTMLAttributesWeak<T>,
        CommonProps,
        ItemPrivateProps {
    /**
     * 步骤的状态，如不传，会根据外层的 Step 的 current 属性生成
     * @en The status of a step, if not passed, is generated based on the current attribute of the outer Step
     */
    status?: StepStatus;

    /**
     * 标题
     * @en Title
     */
    title?: React.ReactNode;

    /**
     * 图标
     * @en Icon
     */
    icon?: string;

    /**
     * 内容填充，shape 为 arrow 时无效
     * @en Content for vertical content filling, invalid when shape is arrow
     */
    content?: React.ReactNode;

    /**
     * StepItem 的自定义渲染，会覆盖父节点设置的 itemRender
     * @en Custom node render function (it will overwirde Step's itemRender)
     * @param index - 节点索引 - node index
     * @param status - 节点状态 - node status
     * @param title - 节点标题，仅在 `shape='circle'` 时会传递 - node title（only for `shape='circle'`）
     * @param content - 节点内容，仅在 `shape='circle'` 时会传递 - node content（only for `shape='circle'`）
     * @returns 节点的渲染结果 - render content of the node
     */
    itemRender?: (
        index: number,
        status: StepStatus,
        title?: React.ReactNode,
        content?: React.ReactNode
    ) => React.ReactNode;

    /**
     * 百分比
     * @en Percent
     */
    percent?: number;

    /**
     * 是否禁用
     * @en disabled
     */
    disabled?: boolean;

    /**
     * 点击步骤时的回调
     * @en Callback when clicking on the step
     * @param index - 节点索引 - node index
     */
    onClick?: (index: number) => unknown;
}

/**
 * @api Step
 */
export interface StepProps
    extends Omit<React.HTMLAttributes<HTMLElement>, 'type' | 'direction'>,
        CommonProps {
    /**
     * 当前步骤
     * @en Current step
     * @defaultValue 0
     */
    current?: number;

    /**
     * 类型
     * @en Shape
     * @defaultValue 'circle'
     */
    shape?: StepShape;

    /**
     * 展示方向
     * @en Direction
     * @defaultValue 'hoz'
     */
    direction?: StepDirection;

    /**
     * 横向布局时的内容排列方式
     * @en Content arrangement in horizontal layout
     * @defaultValue 'ver'
     */
    labelPlacement?: StepDirection;

    /**
     * 是否只读模式
     * @en Read only mode
     */
    readOnly?: boolean;

    /**
     * 是否开启动效
     * @en Enable animation
     * @defaultValue true
     */
    animation?: boolean;

    /**
     * 自定义渲染节点
     * @en Custom node render function
     * @param index - 节点索引 - node index
     * @param status - 节点状态 - node status
     * @param title - 节点标题，仅在 `shape='circle'` 时会传递 - node title（only for `shape='circle'`）
     * @param content - 节点内容，仅在 `shape='circle'` 时会传递 - node content（only for `shape='circle'`）
     * @returns 节点的渲染结果 - render content of the node
     */
    itemRender?: (
        index: number,
        status: StepStatus,
        title?: React.ReactNode,
        content?: React.ReactNode
    ) => React.ReactNode;

    /**
     * 宽度是否横向拉伸
     * @en Stretch the width
     * @defaultValue false
     */
    stretch?: boolean;
}

export interface StepState {
    parentWidth: string | number;
    parentHeight: string | number;
    currentfocus: number;
}

export interface DeprecatedStepProps extends Omit<StepProps, 'direction' | 'labelPlacement'> {
    /**
     * @deprecated Use shape instead
     */
    type?: 'circle' | 'arrow' | 'dot';
    /**
     * @deprecated Available enums: 'hoz' | 'ver'
     */
    direction?: 'hoz' | 'ver' | 'horizontal' | 'vertical';
    /**
     * @deprecated Available enums: 'hoz' | 'ver'
     */
    labelPlacement?: 'hoz' | 'ver' | 'horizontal' | 'vertical';
}

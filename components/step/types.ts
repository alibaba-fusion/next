import React from 'react';
import { CommonProps } from '../util';

type HTMLAttributesWeak<T> = Omit<React.HTMLAttributes<T>, 'content' | 'onClick' | 'title'>;

/**
 * @api Step.Item
 */
export interface ItemProps<T = HTMLElement> extends HTMLAttributesWeak<T>, CommonProps {
    /**
     * @skip
     */
    index: number;
    /**
     * @skip
     */
    shape: 'circle' | 'arrow' | 'dot';
    /**
     * @skip
     */
    total: number;
    /**
     * 展示方向
     * @en direction
     * @skip extend form Step
     */

    direction?: string;
    /**
     * @skip
     */
    onResize?: () => void;

    /**
     * @skip
     */
    stretch?: boolean;

    /**
     * @skip
     */
    labelPlacement?: string;

    /**
     * @skip
     */
    readOnly?: boolean;

    /**
     * @skip
     */
    parentWidth?: number;

    /**
     * @skip
     */
    parentHeight?: number;

    /**
     * @skip
     */
    parentLeft?: number;

    /**
     * @skip
     */
    parentTop?: number;

    /**
     * @skip
     */
    parentRight?: number;
    /**
     * @skip
     */
    parentBottom?: number;

    /**
     * 是否开启动效
     * @skip extend for Step
     */
    animation?: boolean;

    /**
     * 步骤的状态，如不传，会根据外层的 Step 的 current 属性生成，可选值为 `wait`, `process`, `finish`
     * @en Status of the step, if not passed, it will be generated according to the current attribute of the outer Step, optional values are `wait`, `process`, `finish`
     */
    status?: 'wait' | 'process' | 'finish';

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
     * 内容填充, shape为 arrow 时无效
     * @en Content, invalid when shape is arrow
     */
    content?: React.ReactNode;

    /**
     * StepItem 的自定义渲染, 会覆盖父节点设置的itemRender
     * @en Custom node render function
     * @example Function(index: Number, status: String) =\> Node
     * @param index - \{Number\} 节点索引
     * @param status - \{String\} 节点状态
     * @returns  React.ReactNode  -\{Node\} 节点的渲染结果
     */
    itemRender?: (
        index: number,
        status?: 'wait' | 'process' | 'finish' | string,
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
     * @example Function(index: Number) =\> void
     * @param index -节点索引
     * @defaultValue 	() =\> \{\}
     */
    onClick?: (index: number) => unknown;

    /**
     * 自定义样式
     * @skip
     */
    className?: string;

    /**
     * @skip  extend form Step
     */
    current?: number;
}

/**
 * @api Step
 */
export interface StepProps extends Omit<React.HTMLAttributes<HTMLElement>, 'type'>, CommonProps {
    /**
     * 当前步骤
     * @en Current step
     * @defaultValue 0
     */
    current?: number;

    /**
     * 类型
     * @en Type
     * @defaultValue 'circle'
     */
    shape?: 'circle' | 'arrow' | 'dot';

    /**
     * 展示方向
     * @en Direction
     * @defaultValue 'ver'
     */
    direction?: 'hoz' | 'ver' | string;

    /**
     * 横向布局时( direction 为 hoz )的内容排列
     * @en Label placement
     * @defaultValue 'ver'
     */
    labelPlacement?: 'hoz' | 'ver' | string;

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
     * 自定义样式名
     * @en Custom class name
     * @skip
     */
    className?: string;

    /**
     * StepItem 的自定义渲染
     * @en Custom node render function
     * @example Function(index: Number, status: String) =\> Node
     * @param arg1 - 参数1 index: Number 节点索引
     * @param arg1 - 参数1 status: 'wait' | 'process' | 'finish' 节点状态
     * @returns : Node 节点的渲染结果
     */
    itemRender?: (index: number, status: 'wait' | 'process' | 'finish') => React.ReactNode;

    /**
     * @deprecated Use shape instead
     * @skip
     */
    type?: 'circle' | 'arrow' | 'dot';

    /**
     * 宽度是否横向拉伸
     * @en Stretch the width
     */
    stretch?: boolean;
}

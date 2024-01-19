import React from 'react';
import { CommonProps } from '../util';
import type { PopupProps } from '../overlay';

/**
 * @api Loading
 */
export interface LoadingProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 自定义内容，可以传入 string 或 reactElement
     * @en Tip content
     */
    tip?: React.ReactNode | string;

    /**
     * 自定义内容位置
     * @en Align of tip
     * @defaultValue 'bottom'
     */
    tipAlign?: 'right' | 'bottom';

    /**
     * loading 状态, 默认 true
     * @en Loading status, default to true
     * @defaultValue true
     */
    visible?: boolean;

    /**
     * 自定义class
     * @skip
     */
    className?: string;

    /**
     * 自定义内联样式
     * @skip
     */
    style?: React.CSSProperties;

    /**
     * 设置动画尺寸
     * @en Size of animation indicator
     * @defaultValue 'large'
     */
    size?: 'large' | 'medium';

    /**
     * 自定义动画
     * @en Custom animation indicator
     */
    indicator?: React.ReactNode;

    /**
     * 动画颜色
     * @en Color of animation indicator
     */
    color?: string;

    /**
     * 全屏展示
     * @en Full screen display
     */
    fullScreen?: boolean;

    /**
     * 当点击 document 的时候，如果包含该节点则不会关闭弹层，
     * 如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组
     * 是否禁用滚动，仅在 fullScreen 模式下生效
     * @en Is scrolling disabled, only effective in fullScreen mode
     * @defaultValue false
     */
    disableScroll?: boolean;

    /**
     * 子元素
     * @en Child elements
     */
    children?: React.ReactNode;

    /**
     * 全屏模式下，loading弹层请求关闭时触发的回调函数
     * @en The callback function triggered when the loading layer request is closed in full screen mode
     * @param type - 弹层关闭的来源 - The source of fan layer closure
     * @param e - DOM 事件 - DOM events
     */
    onVisibleChange?: (type: string, e: React.MouseEvent) => void;

    /**
     * 安全节点，仅在 fullScreen 时有效
     * @en Security node, only valid at fullScreen
     */
    safeNode?: PopupProps['safeNode'];

    /**
     * @deprecated should loader be displayed inline
     * @defaultValue true
     * @skip
     */
    inline?: boolean;
}

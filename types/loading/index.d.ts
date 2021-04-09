/// <reference types="react" />

import * as React from 'react';
import CommonProps from '../util';

export interface LoadingProps extends React.HTMLAttributes<HTMLElement>, CommonProps {
    /**
     * 样式前缀
     */
    prefix?: string;

    /**
     * 自定义内容
     */
    tip?: React.ReactNode;

    /**
     * 自定义内容位置
     */
    tipAlign?: 'right' | 'bottom';

    /**
     * loading 状态, 默认 true
     */
    visible?: boolean;

    /**
     * 自定义class
     */
    className?: string;

    /**
     * 自定义内联样式
     */
    style?: React.CSSProperties;

    /**
     * 设置动画尺寸
     */
    size?: 'large' | 'medium';

    /**
     * 自定义动画内容
     */
    indicator?: React.ReactNode;

    /**
     * 动画颜色
     */
    color?: string;

    /**
     * 全屏展示
     */
    fullScreen?: boolean;
    /**
     * 是否禁用滚动，仅在 fullScreen 模式下生效
     */
    disableScroll?: boolean;
    /**
     * 子元素
     */
    children?: React.ReactNode;

    /**
     * should loader be displayed inline
     */
    inline?: boolean;
}

export default class Loading extends React.Component<LoadingProps, any> {}

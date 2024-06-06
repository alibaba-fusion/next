/// <reference types="react" />

import React from 'react';
import { CommonProps } from '../util';

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
    onChange?: any;
}

export interface SliderProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 自定义传入的样式
     */
    className?: any;

    /**
     * 是否使用自适应高度
     */
    adaptiveHeight?: boolean;

    /**
     * 动效类型，默认是'slide'
     */
    animation?: string | boolean;

    /**
     * 是否显示箭头
     */
    arrows?: boolean;

    /**
     * 导航箭头大小 可选值: 'medium', 'large'
     */
    arrowSize?: 'medium' | 'large';

    /**
     * 导航箭头位置 可选值: 'inner', 'outer'
     */
    arrowPosition?: 'inner' | 'outer';

    /**
     * 导航箭头的方向 可选值: 'hoz', 'ver'
     */
    arrowDirection?: 'hoz' | 'ver';

    /**
     * 是否自动播放
     */
    autoplay?: boolean;

    /**
     * 自动播放的速度
     */
    autoplaySpeed?: number;

    /**
     * 向后箭头
     */
    nextArrow?: React.ReactElement<any>;

    /**
     * 向前箭头
     */
    prevArrow?: React.ReactElement<any>;

    /**
     * 是否启用居中模式
     */
    centerMode?: boolean;

    /**
     * 是否显示导航锚点
     */
    dots?: boolean;

    /**
     * 导航锚点的 CSS 类
     */
    dotsClass?: string;

    /**
     * 导航锚点位置
     */
    dotsDirection?: 'hoz' | 'ver';

    /**
     * 自定义导航锚点
     */
    dotsRender?: (index: number, current: number) => void;

    /**
     * 是否可拖拽
     */
    draggable?: boolean;

    /**
     * 是否使用无穷循环模式
     */
    infinite?: boolean;

    /**
     * 初始被激活的轮播图
     */
    defaultActiveIndex?: number;

    /**
     * 是否启用懒加载
     */
    lazyLoad?: boolean;

    /**
     * 轮播方向
     */
    slideDirection?: 'hoz' | 'ver';

    /**
     * 同时展示的图片数量
     */
    slidesToShow?: number;

    /**
     * 同时滑动的图片数量
     */
    slidesToScroll?: number;

    /**
     * 轮播速度
     */
    speed?: number;

    /**
     * 跳转到指定的轮播图（受控）
     */
    activeIndex?: number;

    /**
     * 锚点导航触发方式
     */
    triggerType?: 'click' | 'hover';

    /**
     * 轮播切换的回调函数
     */
    onChange?: (index: number) => void;

    /**
     * 自定义传入的class
     */
    style?: React.CSSProperties;

    /**
     * Side padding when in center mode (px or %); 展示部分为center，pading会产生前后预览
     */
    centerPadding?: string;

    /**
     * CSS3 Animation Easing,默认‘ease’
     */
    cssEase?: string;

    /**
     * 多图轮播时，点击选中后自动居中
     */
    focusOnSelect?: boolean;

    /**
     * 鼠标经过时停止播放
     */
    pauseOnHover?: boolean;
}

export default class Slider extends React.Component<SliderProps, any> {}

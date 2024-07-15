import type React from 'react';
import type { CommonProps } from '../util';
import type { Locale } from '../locale/types';

interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave'> {}

export interface OptionProps {
    message?: string;
    index?: number;
    currentSlide?: number;
    slidesToScroll?: number;
}

interface BasicSlideProps {
    centerMode?: SliderProps['centerMode'];
    infinite?: SliderProps['infinite'];
    slidesToShow?: SliderProps['slidesToShow'];
    slidesToScroll?: SliderProps['slidesToScroll'];
    slideCount?: number;
    currentSlide?: number;
}

export interface TrackProps extends CommonProps, BasicSlideProps {
    activeIndex?: SliderProps['activeIndex'];
    trackStyle?: React.CSSProperties;
    lazyLoad?: SliderProps['lazyLoad'];
    lazyLoadedList?: number[];
    animation?: SliderProps['animation'];
    variableWidth?: boolean;
    slideWidth?: number;
    slideHeight?: number;
    cssEase?: SliderProps['cssEase'];
    speed?: SliderProps['speed'];
    vertical?: boolean;
    children?: React.ReactNode;
    focusOnSelect?: (options: OptionProps) => void;
}

export interface DotsProps extends CommonProps, BasicSlideProps {
    dotsClass?: string;
    dotsDirection?: SliderProps['dotsDirection'];
    triggerType?: SliderProps['triggerType'];
    dotsRender?: SliderProps['dotsRender'];
    changeSlide?: (options: OptionProps) => void;
}

export interface ArrowProps
    extends HTMLAttributesWeak,
        CommonProps,
        Omit<BasicSlideProps, 'slidesToScroll'> {
    type?: 'prev' | 'next';
    arrowSize?: SliderProps['arrowSize'];
    arrowPosition?: SliderProps['arrowPosition'];
    arrowDirection?: SliderProps['arrowDirection'];
    children?: React.ReactElement;
    clickHandler?: (options: OptionProps, e: React.MouseEvent<HTMLElement>) => void;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}

export interface InnerSliderProps
    extends CommonProps,
        Omit<ArrowProps, 'onChange' | 'children'>,
        DotsProps,
        Omit<TrackProps, 'focusOnSelect' | 'children'>,
        Omit<HTMLAttributesWeak, 'onChange' | 'children'> {
    arrows?: SliderProps['arrows'];
    dots?: SliderProps['dots'];
    defaultActiveIndex?: SliderProps['defaultActiveIndex'];
    centerPadding?: SliderProps['centerPadding'];
    focusOnSelect?: SliderProps['focusOnSelect'];
    verticalSwiping?: boolean;
    adaptiveHeight?: SliderProps['adaptiveHeight'];
    onChange?: SliderProps['onChange'];
    onBeforeChange?: (index: number, currentIndex?: number) => void;
    children?: React.ReactNode;
    prevArrow?: SliderProps['prevArrow'];
    nextArrow?: SliderProps['nextArrow'];
}
export interface InnerSliderState {
    lazyLoadedList?: number[];
    slideCount?: number | null;
    currentSlide?: number;
    trackStyle?: React.CSSProperties;
    animating?: boolean;
    dragging?: boolean;
    autoPlayTimer?: NodeJS.Timeout | null;
    currentDirection?: number;
    currentLeft?: number | null;
    direction?: number;
    listWidth?: number | null;
    listHeight?: number | null;
    slideWidth?: number | null;
    slideHeight?: number | null;
    slideHeightList?: number[];
    swipeLeft?: number | null;
    touchObject?: {
        startX: number;
        startY: number;
        curX: number;
        curY: number;
    };
    initialized?: boolean;
    edgeDragged?: boolean;
    swiped?: boolean;
    trackWidth?: number;
    // children?: React.ReactElement[];
    children?: React.ReactNode;
}

/**
 * @api
 */
export interface SliderProps
    extends Omit<HTMLAttributesWeak, 'onChange' | 'draggable' | 'children'>,
        CommonProps,
        InnerSliderProps {
    /**
     * 各组件的国际化文案对象，属性为组件的 displayName
     * @en Locale object for components
     */
    locale?: Partial<Locale>;

    /**
     * 自定义传入的样式
     * @en Custom className
     */
    className?: string;
    /**
     * 是否使用自适应高度
     * @en Whether to use adaptive height
     */
    adaptiveHeight?: boolean;

    /**
     * 动效类型，默认是'slide'
     * @en Animation type, default value is 'slide'
     * @defaultValue 'slide'
     */
    animation?: string | boolean;

    /**
     * 是否显示箭头
     * @en Whether to display arrows
     */
    arrows?: boolean;

    /**
     * 导航箭头大小
     * @en Size of the arrow
     */
    arrowSize?: 'medium' | 'large';

    /**
     * 导航箭头位置
     * @en Position of the arrow
     */
    arrowPosition?: 'inner' | 'outer';

    /**
     * 导航箭头方向
     * @en Direction of the arrow
     */
    arrowDirection?: 'hoz' | 'ver';

    /**
     * 是否自动播放
     * @en Whether to play automatically
     */
    autoplay?: boolean;

    /**
     * 自动播放的速度
     * @en Autoplay speed
     */
    autoplaySpeed?: number;

    /**
     * 前向箭头节点
     * @en Prev arrow
     */
    prevArrow?: React.ReactElement;

    /**
     * 后向箭头节点
     * @en Next arrow
     */
    nextArrow?: React.ReactElement;

    /**
     * 是否启用居中模式
     * @en Whether to use center mode
     */
    centerMode?: boolean;

    /**
     * 是否显示导航锚点
     * @en Whether to display dots
     */
    dots?: boolean;

    /**
     * 导航锚点方向
     * @en Direction for navigation dots
     */
    dotsDirection?: 'hoz' | 'ver';

    /**
     * 自定义导航锚点
     * @en Render navigation dots
     * @param index - 锚点编号
     * @param current - 当前幻灯片编号
     */
    dotsRender?: (index: number, current: number) => void;

    /**
     * 是否可拖拽
     * @en Whether it can be dragged
     */
    draggable?: boolean;

    /**
     * 是否使用无穷循环模式
     * @en Whether to use infinite loop mode
     */
    infinite?: boolean;

    /**
     * 初始被激活的轮播图
     * @en The default activated slide index
     */
    defaultActiveIndex?: number;

    /**
     * 是否启用懒加载
     * @en Whether to enable lazy load
     */
    lazyLoad?: boolean;

    /**
     * 轮播方向
     * @en Slide direction
     */
    slideDirection?: 'hoz' | 'ver';

    /**
     * 同时展示的图片数量
     * @en Number of slides showed at the same time
     */
    slidesToShow?: number;

    /**
     * 同时滑动的图片数量
     * @en Number of slides scrolled at the same time
     */
    slidesToScroll?: number;

    /**
     * 轮播速度
     * @en Carousel speed
     */
    speed?: number;

    /**
     * 跳转到指定的轮播图（受控）
     * @en Jump to the specified carousel image (controlled)
     */
    activeIndex?: number;

    /**
     * 导航锚点触发方式
     * @en Triggering method for navigation dots
     */
    triggerType?: 'click' | 'hover';

    /**
     * 轮播切换的回调函数
     * @en Callback function for slides switching
     */
    onChange?: (index: number) => void;

    /**
     * center模式下的边缘padding值 (px or %);
     * @en Side padding when in center mode (px or %);
     */
    centerPadding?: string;

    /**
     * CSS3 Animation Easing,默认‘ease’
     * @en CSS3 Animation Easing, default value is 'ease'
     */
    cssEase?: string;

    /**
     * 多图轮播时，是否在点击选中后自动居中
     * @en When multiple slides are rotated, whether to be automatically centered after clicking to select them.
     */
    focusOnSelect?: boolean;

    /**
     * 自定义样式
     * @en Custom style
     */
    style?: React.CSSProperties;

    /**
     * 是否等待动画结束后再执行动作
     * @en Whether to wait for the animation to end before executing the action
     */
    waitForAnimate?: boolean;

    /**
     * @deprecated use arrowPosition instead
     * @skip
     */
    arrowPos?: string;

    /**
     * @deprecated use defaultActiveIndex instead
     * @skip
     */
    initialSlide?: number;

    /**
     * @deprecated use activeIndex instead
     * @skip
     */
    slickGoTo?: number;

    /**
     * @deprecated use onChange instead
     * @skip
     */
    afterChange?: (index: number) => void;

    /**
     * @deprecated use onBeforeChange instead
     * @skip
     */
    beforeChange?: (index: number) => void;
}

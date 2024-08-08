import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { obj } from '../util';
import InnerSlider, { type ThisType as InnerSliderType } from './slick/inner-slider';
import ConfigProvider from '../config-provider';
import type { SliderProps } from './types';

type CommonKeys = keyof SliderProps & keyof typeof ConfigProvider.propTypes;
type ObjWithCommonProps = Pick<SliderProps, CommonKeys>;

/**
 * Slider
 */
export default class Slider extends Component<SliderProps> {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        className: PropTypes.any,
        adaptiveHeight: PropTypes.bool,
        animation: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        arrows: PropTypes.bool,
        arrowSize: PropTypes.oneOf(['medium', 'large']),
        arrowPosition: PropTypes.oneOf(['inner', 'outer']),
        arrowDirection: PropTypes.oneOf(['hoz', 'ver']),
        autoplay: PropTypes.bool,
        autoplaySpeed: PropTypes.number,
        nextArrow: PropTypes.element,
        prevArrow: PropTypes.element,
        centerMode: PropTypes.bool,
        dots: PropTypes.bool,
        dotsDirection: PropTypes.oneOf(['hoz', 'ver']),
        dotsClass: PropTypes.string,
        dotsRender: PropTypes.func,
        draggable: PropTypes.bool,
        infinite: PropTypes.bool,
        defaultActiveIndex: PropTypes.number,
        lazyLoad: PropTypes.bool,
        slide: PropTypes.string,
        slideDirection: PropTypes.oneOf(['hoz', 'ver']),
        slidesToShow: PropTypes.number,
        slidesToScroll: PropTypes.number,
        speed: PropTypes.number,
        activeIndex: PropTypes.number,
        triggerType: PropTypes.oneOf(['click', 'hover']),
        onChange: PropTypes.func,
        onBeforeChange: PropTypes.func, // 兼容 0.x onBeforeChange
        children: PropTypes.any,
        style: PropTypes.object,
        centerPadding: PropTypes.string,
        cssEase: PropTypes.string, // used
        edgeFriction: PropTypes.number, // 非无限轮播滑动到边缘时的阻力
        focusOnSelect: PropTypes.bool,
        pauseOnHover: PropTypes.bool, // 鼠标经过时停止播放
        swipe: PropTypes.bool,
        swipeToSlide: PropTypes.bool,
        touchMove: PropTypes.bool,
        touchThreshold: PropTypes.number,
        useCSS: PropTypes.bool,
        variableWidth: PropTypes.bool, // used
        waitForAnimate: PropTypes.bool,
        edgeEvent: PropTypes.any,
        swipeEvent: PropTypes.any,
    };

    static defaultProps = {
        prefix: 'next-',
        animation: 'slide',
        arrowSize: 'medium',
        arrowPosition: 'inner',
        vertical: false,
        verticalSwiping: false,
        dots: true,
        dotsDirection: 'hoz',
        arrows: true,
        arrowDirection: 'hoz',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 600,
        adaptiveHeight: false,
        centerMode: false,
        centerPadding: '50px', // Side padding when in center mode (px or %); 展示部分为 center，pading 会产生前后预览
        cssEase: 'ease',
        draggable: true,
        edgeFriction: 0.35,
        focusOnSelect: false,
        defaultActiveIndex: 0,
        lazyLoad: false,
        pauseOnHover: false,
        rtl: false,
        slide: 'div',
        slideDirection: 'hoz',
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: false, // Allow users to drag or swipe directly to a slide irrespective of slidesToScroll
        touchMove: true, // 移动端 touch
        touchThreshold: 5,
        useCSS: true,
        variableWidth: false,
        waitForAnimate: true,
        onChange: () => {},
        onBeforeChange: () => {},
        edgeEvent: null,
        swipeEvent: null,
        nextArrow: null, // nextArrow, prevArrow are react components
        prevArrow: null,
        style: null,
        dotsRender: null,
        triggerType: 'click',
    };

    innerSlider: InnerSliderType | null;

    resize = () => {
        // export api
        this.innerSlider?.onWindowResized();
    };

    render() {
        const { prefix, arrowPosition, slideDirection, style, className, children } = this.props;

        const globalProps: ObjWithCommonProps = {};
        Object.keys(ConfigProvider.propTypes).forEach((key: CommonKeys) => {
            // @ts-expect-error 类型错误
            globalProps[key] = this.props[key];
        });

        const sliderProps = obj.pickOthers(['className', 'style', 'slideDirection'], this.props);
        const slideCount = React.Children.count(children);

        if (slideCount === 0) {
            // 没有 item 时不显示 slider
            return null;
        } else if (slideCount === 1) {
            // 单个 item 时不显示箭头和控制器
            sliderProps.arrows = false;
            sliderProps.autoplay = false;
            sliderProps.draggable = false;
        }

        const clazz = classNames(
            [
                `${prefix}slick`,
                `${prefix}slick-${arrowPosition}`,
                `${prefix}slick-${slideDirection}`,
            ],
            className
        );

        if (slideDirection === 'ver') {
            // 向下传递时使用 vertical 属性
            sliderProps.vertical = true;
            sliderProps.verticalSwiping = true;
        }

        return (
            <ConfigProvider {...globalProps} rtl={false}>
                <div
                    dir="ltr"
                    className={clazz}
                    style={style}
                    {...obj.pickOthers(
                        { ...Slider.propTypes, ...InnerSlider.propTypes },
                        sliderProps
                    )}
                >
                    <InnerSlider
                        ref={(InnerSlider: InnerSliderType | null) =>
                            (this.innerSlider = InnerSlider)
                        }
                        {...sliderProps}
                    />
                </div>
            </ConfigProvider>
        );
    }
}

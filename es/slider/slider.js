import { __assign, __extends, __read, __spreadArray } from "tslib";
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { obj } from '../util';
import InnerSlider from './slick/inner-slider';
import ConfigProvider from '../config-provider';
/**
 * Slider
 */
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.resize = function () {
            var _a;
            // export api
            (_a = _this.innerSlider) === null || _a === void 0 ? void 0 : _a.onWindowResized();
        };
        return _this;
    }
    Slider.prototype.render = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, arrowPosition = _a.arrowPosition, slideDirection = _a.slideDirection, style = _a.style, className = _a.className, children = _a.children;
        var globalProps = {};
        Object.keys(ConfigProvider.propTypes).forEach(function (key) {
            // @ts-expect-error 类型错误
            globalProps[key] = _this.props[key];
        });
        var sliderProps = obj.pickOthers(['className', 'style', 'slideDirection'], this.props);
        var slideCount = React.Children.count(children);
        if (slideCount === 0) {
            // 没有 item 时不显示 slider
            return null;
        }
        else if (slideCount === 1) {
            // 单个 item 时不显示箭头和控制器
            sliderProps.arrows = false;
            sliderProps.autoplay = false;
            sliderProps.draggable = false;
        }
        var clazz = classNames([
            "".concat(prefix, "slick"),
            "".concat(prefix, "slick-").concat(arrowPosition),
            "".concat(prefix, "slick-").concat(slideDirection),
        ], className);
        if (slideDirection === 'ver') {
            // 向下传递时使用 vertical 属性
            sliderProps.vertical = true;
            sliderProps.verticalSwiping = true;
        }
        return (React.createElement(ConfigProvider, __assign({}, globalProps, { rtl: false }),
            React.createElement("div", __assign({ dir: "ltr", className: clazz, style: style }, obj.pickOthers(__assign(__assign({}, Slider.propTypes), InnerSlider.propTypes), sliderProps)),
                React.createElement(InnerSlider, __assign({ ref: function (InnerSlider) {
                        return (_this.innerSlider = InnerSlider);
                    } }, sliderProps)))));
    };
    Slider.displayName = 'Slider';
    Slider.propTypes = {
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
    Slider.defaultProps = {
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
        onChange: function () { },
        onBeforeChange: function () { },
        edgeEvent: null,
        swipeEvent: null,
        nextArrow: null, // nextArrow, prevArrow are react components
        prevArrow: null,
        style: null,
        dotsRender: null,
        triggerType: 'click',
    };
    return Slider;
}(Component));
export default Slider;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var classnames_1 = require("classnames");
var prop_types_1 = require("prop-types");
var util_1 = require("../util");
var inner_slider_1 = require("./slick/inner-slider");
var config_provider_1 = require("../config-provider");
/**
 * Slider
 */
var Slider = /** @class */ (function (_super) {
    tslib_1.__extends(Slider, _super);
    function Slider() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.resize = function () {
            // export api
            _this.innerSlider.onWindowResized();
        };
        return _this;
    }
    Slider.prototype.render = function () {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, arrowPosition = _a.arrowPosition, slideDirection = _a.slideDirection, style = _a.style, className = _a.className, children = _a.children;
        var globalProps = {};
        Object.keys(config_provider_1.default.propTypes).forEach(function (key) {
            globalProps[key] = _this.props[key];
        });
        var sliderProps = util_1.obj.pickOthers(['className', 'style', 'slideDirection'], this.props);
        var slideCount = react_1.default.Children.count(children);
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
        var clazz = (0, classnames_1.default)(["".concat(prefix, "slick"), "".concat(prefix, "slick-").concat(arrowPosition), "".concat(prefix, "slick-").concat(slideDirection)], className);
        if (slideDirection === 'ver') {
            // 向下传递时使用 vertical 属性
            sliderProps.vertical = true;
            sliderProps.verticalSwiping = true;
        }
        return (react_1.default.createElement(config_provider_1.default, tslib_1.__assign({}, globalProps, { rtl: false }),
            react_1.default.createElement("div", tslib_1.__assign({ dir: "ltr", className: clazz, style: style }, util_1.obj.pickOthers(tslib_1.__assign(tslib_1.__assign({}, Slider.propTypes), inner_slider_1.default.propTypes), sliderProps)),
                react_1.default.createElement(inner_slider_1.default, tslib_1.__assign({ ref: function (InnerSlider) { return (_this.innerSlider = InnerSlider); } }, sliderProps)))));
    };
    Slider.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        /**
         * 自定义传入的样式
         */
        className: prop_types_1.default.any,
        /**
         * 是否使用自适应高度
         */
        adaptiveHeight: prop_types_1.default.bool,
        /**
         * 动效类型，默认是'slide'
         */
        animation: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
        /**
         * 是否显示箭头
         */
        arrows: prop_types_1.default.bool,
        /**
         * 导航箭头大小 可选值: 'medium', 'large'
         */
        arrowSize: prop_types_1.default.oneOf(['medium', 'large']),
        /**
         * 导航箭头位置 可选值: 'inner', 'outer'
         */
        arrowPosition: prop_types_1.default.oneOf(['inner', 'outer']),
        /**
         * 导航箭头的方向 可选值: 'hoz', 'ver'
         */
        arrowDirection: prop_types_1.default.oneOf(['hoz', 'ver']),
        /**
         * 是否自动播放
         */
        autoplay: prop_types_1.default.bool,
        /**
         * 自动播放的速度
         */
        autoplaySpeed: prop_types_1.default.number,
        /**
         * 向后箭头
         */
        nextArrow: prop_types_1.default.element,
        /**
         * 向前箭头
         */
        prevArrow: prop_types_1.default.element,
        /**
         * 是否启用居中模式
         */
        centerMode: prop_types_1.default.bool,
        /**
         * 是否显示导航锚点
         */
        dots: prop_types_1.default.bool,
        /**
         * 导航锚点位置
         */
        dotsDirection: prop_types_1.default.oneOf(['hoz', 'ver']),
        dotsClass: prop_types_1.default.string,
        /**
         * 自定义导航锚点
         */
        dotsRender: prop_types_1.default.func,
        /**
         * 是否可拖拽
         */
        draggable: prop_types_1.default.bool,
        /**
         * 是否使用无穷循环模式
         */
        infinite: prop_types_1.default.bool,
        /**
         * 初始被激活的轮播图
         */
        defaultActiveIndex: prop_types_1.default.number,
        /**
         * 是否启用懒加载
         */
        lazyLoad: prop_types_1.default.bool,
        slide: prop_types_1.default.string,
        /**
         * 轮播方向
         */
        slideDirection: prop_types_1.default.oneOf(['hoz', 'ver']),
        /**
         * 同时展示的图片数量
         */
        slidesToShow: prop_types_1.default.number,
        /**
         * 同时滑动的图片数量
         */
        slidesToScroll: prop_types_1.default.number,
        /**
         * 轮播速度
         */
        speed: prop_types_1.default.number,
        /**
         * 跳转到指定的轮播图（受控）
         */
        activeIndex: prop_types_1.default.number,
        /**
         * 锚点导航触发方式
         */
        triggerType: prop_types_1.default.oneOf(['click', 'hover']),
        /**
         * 轮播切换的回调函数
         * @param {Number} index 幻灯片的索引
         */
        onChange: prop_types_1.default.func,
        onBeforeChange: prop_types_1.default.func, // 兼容 0.x onBeforeChange
        children: prop_types_1.default.any,
        /**
         * 自定义传入的class
         */
        style: prop_types_1.default.object,
        /**
         * Side padding when in center mode (px or %); 展示部分为center，pading会产生前后预览
         */
        centerPadding: prop_types_1.default.string,
        /**
         * CSS3 Animation Easing,默认‘ease’
         */
        cssEase: prop_types_1.default.string, // used
        edgeFriction: prop_types_1.default.number, // 非无限轮播滑动到边缘时的阻力
        /**
         * 多图轮播时，点击选中后自动居中
         */
        focusOnSelect: prop_types_1.default.bool,
        pauseOnHover: prop_types_1.default.bool, // 鼠标经过时停止播放
        swipe: prop_types_1.default.bool,
        swipeToSlide: prop_types_1.default.bool,
        touchMove: prop_types_1.default.bool,
        touchThreshold: prop_types_1.default.number,
        useCSS: prop_types_1.default.bool,
        variableWidth: prop_types_1.default.bool, // used
        waitForAnimate: prop_types_1.default.bool,
        edgeEvent: prop_types_1.default.any,
        swipeEvent: prop_types_1.default.any,
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
        centerPadding: '50px', // Side padding when in center mode (px or %); 展示部分为center，pading会产生前后预览
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
        touchMove: true, // 移动端touch
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
}(react_1.Component));
exports.default = Slider;

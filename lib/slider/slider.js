"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var util_1 = require("../util");
var inner_slider_1 = tslib_1.__importDefault(require("./slick/inner-slider"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
/**
 * Slider
 */
var Slider = /** @class */ (function (_super) {
    tslib_1.__extends(Slider, _super);
    function Slider() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
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
        Object.keys(config_provider_1.default.propTypes).forEach(function (key) {
            // @ts-expect-error 类型错误
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
        var clazz = (0, classnames_1.default)([
            "".concat(prefix, "slick"),
            "".concat(prefix, "slick-").concat(arrowPosition),
            "".concat(prefix, "slick-").concat(slideDirection),
        ], className);
        if (slideDirection === 'ver') {
            // 向下传递时使用 vertical 属性
            sliderProps.vertical = true;
            sliderProps.verticalSwiping = true;
        }
        return (react_1.default.createElement(config_provider_1.default, tslib_1.__assign({}, globalProps, { rtl: false }),
            react_1.default.createElement("div", tslib_1.__assign({ dir: "ltr", className: clazz, style: style }, util_1.obj.pickOthers(tslib_1.__assign(tslib_1.__assign({}, Slider.propTypes), inner_slider_1.default.propTypes), sliderProps)),
                react_1.default.createElement(inner_slider_1.default, tslib_1.__assign({ ref: function (InnerSlider) {
                        return (_this.innerSlider = InnerSlider);
                    } }, sliderProps)))));
    };
    Slider.displayName = 'Slider';
    Slider.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        className: prop_types_1.default.any,
        adaptiveHeight: prop_types_1.default.bool,
        animation: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
        arrows: prop_types_1.default.bool,
        arrowSize: prop_types_1.default.oneOf(['medium', 'large']),
        arrowPosition: prop_types_1.default.oneOf(['inner', 'outer']),
        arrowDirection: prop_types_1.default.oneOf(['hoz', 'ver']),
        autoplay: prop_types_1.default.bool,
        autoplaySpeed: prop_types_1.default.number,
        nextArrow: prop_types_1.default.element,
        prevArrow: prop_types_1.default.element,
        centerMode: prop_types_1.default.bool,
        dots: prop_types_1.default.bool,
        dotsDirection: prop_types_1.default.oneOf(['hoz', 'ver']),
        dotsClass: prop_types_1.default.string,
        dotsRender: prop_types_1.default.func,
        draggable: prop_types_1.default.bool,
        infinite: prop_types_1.default.bool,
        defaultActiveIndex: prop_types_1.default.number,
        lazyLoad: prop_types_1.default.bool,
        slide: prop_types_1.default.string,
        slideDirection: prop_types_1.default.oneOf(['hoz', 'ver']),
        slidesToShow: prop_types_1.default.number,
        slidesToScroll: prop_types_1.default.number,
        speed: prop_types_1.default.number,
        activeIndex: prop_types_1.default.number,
        triggerType: prop_types_1.default.oneOf(['click', 'hover']),
        onChange: prop_types_1.default.func,
        onBeforeChange: prop_types_1.default.func, // 兼容 0.x onBeforeChange
        children: prop_types_1.default.any,
        style: prop_types_1.default.object,
        centerPadding: prop_types_1.default.string,
        cssEase: prop_types_1.default.string, // used
        edgeFriction: prop_types_1.default.number, // 非无限轮播滑动到边缘时的阻力
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
}(react_1.Component));
exports.default = Slider;

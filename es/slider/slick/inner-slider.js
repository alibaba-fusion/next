import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import { events, func, obj } from '../../util';
import EventHandlersMixin from './mixins/event-handlers';
import HelpersMixin from './mixins/helpers';
import Arrow from './arrow';
import Track from './track';
import Dots from './dots';
/**
 * Slider inner
 */
var noop = func.noop;
var InnerSlider = /** @class */ (function (_super) {
    __extends(InnerSlider, _super);
    function InnerSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.hasMounted = false;
        _this.state = {
            animating: false,
            dragging: false,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 'activeIndex' in props ? props.activeIndex : props.defaultActiveIndex,
            direction: 1,
            listWidth: null,
            listHeight: null,
            slideCount: null,
            slideWidth: null,
            slideHeight: null,
            slideHeightList: [],
            swipeLeft: null,
            touchObject: {
                startX: 0,
                startY: 0,
                curX: 0,
                curY: 0,
            },
            lazyLoadedList: [],
            // added for react
            initialized: false,
            edgeDragged: false,
            swiped: false, // used by swipeEvent. differentites between touch and swipe.
            trackStyle: {},
            trackWidth: 0,
        };
        func.bindCtx(_this, [
            'onWindowResized',
            'selectHandler',
            'changeSlide',
            'onInnerSliderEnter',
            'onInnerSliderLeave',
            'swipeStart',
            'swipeMove',
            'swipeEnd',
        ]);
        return _this;
    }
    InnerSlider.getDerivedStateFromProps = function (nextProps, prevState) {
        var state = {};
        var lazyLoad = nextProps.lazyLoad, children = nextProps.children, slidesToShow = nextProps.slidesToShow;
        var currentSlide = prevState.currentSlide;
        var lazyLoadedList = [];
        if (children !== prevState.children) {
            state.children = children;
            state.slideCount = React.Children.count(children);
        }
        if (lazyLoad) {
            for (var i = 0, j = React.Children.count(children); i < j; i++) {
                if (i >= currentSlide && i < currentSlide + slidesToShow) {
                    lazyLoadedList.push(i);
                    var pre = i - 1 < 0 ? j - 1 : i - 1;
                    var next = i + 1 >= j ? 0 : i + 1;
                    lazyLoadedList.push(pre);
                    lazyLoadedList.push(next);
                }
            }
            if (prevState.lazyLoadedList.length === 0) {
                state.lazyLoadedList = lazyLoadedList;
            }
        }
        return state;
    };
    InnerSlider.prototype.componentDidMount = function () {
        this.hasMounted = true;
        // TODO Hack for autoplay -- Inspect Later
        this.initialize(this.props);
        this.adaptHeight();
        if (this.props.activeIndex) {
            this.slickGoTo(this.props.activeIndex);
        }
        if (window) {
            // To support server-side rendering
            events.on(window, 'resize', this.onWindowResized);
        }
    };
    InnerSlider.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        if (prevProps.activeIndex !== this.props.activeIndex) {
            this.slickGoTo(this.props.activeIndex);
        }
        else if (prevState.currentSlide >= this.props.children.length) {
            this.update(this.props);
            this.changeSlide({
                message: 'index',
                index: this.props.children.length - this.props.slidesToShow,
                currentSlide: this.state.currentSlide,
            });
        }
        else {
            var diffKeys_1 = [];
            Object.keys(prevProps).forEach(function (key) {
                if (key in _this.props && prevProps[key] !== _this.props[key]) {
                    diffKeys_1.push(key);
                }
            });
            // children 每次都会不同，所以不需要检测
            if (diffKeys_1.every(function (key) {
                return key === 'children' || typeof _this.props[key] === 'function';
            })) {
                // do nothing;
            }
            else {
                var update = !obj.shallowEqual(prevProps, this.props);
                if (update) {
                    this.update(this.props);
                }
            }
        }
        this.adaptHeight();
    };
    InnerSlider.prototype.componentWillUnmount = function () {
        if (this.animationEndCallback) {
            clearTimeout(this.animationEndCallback);
        }
        events.off(window, 'resize', this.onWindowResized);
        if (this.state.autoPlayTimer) {
            clearInterval(this.state.autoPlayTimer);
        }
    };
    InnerSlider.prototype.onWindowResized = function () {
        this.update(this.props);
        // animating state should be cleared while resizing, otherwise autoplay stops working
        this.setState({ animating: false });
        clearTimeout(this.animationEndCallback);
        delete this.animationEndCallback;
    };
    InnerSlider.prototype.slickGoTo = function (slide) {
        typeof slide === 'number' &&
            this.changeSlide({
                message: 'index',
                index: slide,
                currentSlide: this.state.currentSlide,
            });
    };
    InnerSlider.prototype.onEnterArrow = function (msg) {
        this.arrowHoverHandler(msg);
    };
    InnerSlider.prototype.onLeaveArrow = function () {
        this.arrowHoverHandler();
    };
    InnerSlider.prototype._instanceRefHandler = function (attr, ref) {
        this[attr] = ref;
    };
    InnerSlider.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, animation = _a.animation, arrows = _a.arrows, arrowSize = _a.arrowSize, arrowPosition = _a.arrowPosition, arrowDirection = _a.arrowDirection, dots = _a.dots, dotsClass = _a.dotsClass, cssEase = _a.cssEase, speed = _a.speed, infinite = _a.infinite, centerMode = _a.centerMode, centerPadding = _a.centerPadding, lazyLoad = _a.lazyLoad, dotsDirection = _a.dotsDirection, rtl = _a.rtl, slidesToShow = _a.slidesToShow, slidesToScroll = _a.slidesToScroll, variableWidth = _a.variableWidth, vertical = _a.vertical, verticalSwiping = _a.verticalSwiping, focusOnSelect = _a.focusOnSelect, children = _a.children, dotsRender = _a.dotsRender, triggerType = _a.triggerType;
        var _b = this.state, currentSlide = _b.currentSlide, lazyLoadedList = _b.lazyLoadedList, slideCount = _b.slideCount, slideWidth = _b.slideWidth, slideHeight = _b.slideHeight, trackStyle = _b.trackStyle, listHeight = _b.listHeight, dragging = _b.dragging;
        // TODO 需要精简一下
        var trackProps = {
            prefix: prefix,
            animation: animation,
            cssEase: cssEase,
            speed: speed,
            infinite: infinite,
            centerMode: centerMode,
            focusOnSelect: focusOnSelect ? this.selectHandler : null,
            currentSlide: currentSlide,
            lazyLoad: lazyLoad,
            lazyLoadedList: lazyLoadedList,
            rtl: rtl,
            slideWidth: slideWidth,
            slideHeight: slideHeight,
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToScroll,
            slideCount: slideCount,
            trackStyle: trackStyle,
            variableWidth: variableWidth,
            vertical: vertical,
            verticalSwiping: verticalSwiping,
            triggerType: triggerType,
        };
        var dotsEle;
        if (dots === true && slideCount > slidesToShow) {
            var dotProps = {
                prefix: prefix,
                rtl: rtl,
                dotsClass: dotsClass,
                slideCount: slideCount,
                slidesToShow: slidesToShow,
                currentSlide: currentSlide,
                slidesToScroll: slidesToScroll,
                dotsDirection: dotsDirection,
                changeSlide: this.changeSlide,
                dotsRender: dotsRender,
                triggerType: triggerType,
            };
            dotsEle = React.createElement(Dots, __assign({}, dotProps));
        }
        var prevArrow, nextArrow;
        var arrowProps = {
            prefix: prefix,
            rtl: rtl,
            arrowSize: arrowSize,
            arrowPosition: arrowPosition,
            arrowDirection: arrowDirection,
            infinite: infinite,
            centerMode: centerMode,
            currentSlide: currentSlide,
            slideCount: slideCount,
            slidesToShow: slidesToShow,
            clickHandler: this.changeSlide,
        };
        if (arrows) {
            prevArrow = (React.createElement(Arrow, __assign({}, arrowProps, { type: "prev", "aria-label": "Previous", ref: this._instanceRefHandler.bind(this, 'pArrow'), onMouseEnter: animation ? this.onEnterArrow.bind(this, 'prev') : noop, onMouseLeave: animation ? this.onLeaveArrow.bind(this, 'prev') : noop }), this.props.prevArrow));
            nextArrow = (React.createElement(Arrow, __assign({}, arrowProps, { type: "next", "aria-label": "Next", ref: this._instanceRefHandler.bind(this, 'nArrow'), onMouseEnter: animation ? this.onEnterArrow.bind(this, 'next') : noop, onMouseLeave: animation ? this.onLeaveArrow.bind(this, 'next') : noop }), this.props.nextArrow));
        }
        var verticalHeightStyle = vertical
            ? {
                height: listHeight,
            }
            : null;
        var centerPaddingStyle;
        if (centerMode) {
            centerPaddingStyle = vertical
                ? { padding: "".concat(centerPadding, " 0px") }
                : { padding: "0px ".concat(centerPadding) };
        }
        return (React.createElement("div", { className: "".concat(prefix, "slick-container ").concat(prefix, "slick-initialized"), onMouseEnter: this.onInnerSliderEnter, onMouseLeave: this.onInnerSliderLeave },
            React.createElement("div", { ref: this._instanceRefHandler.bind(this, 'list'), className: "".concat(prefix, "slick-list"), style: __assign(__assign({}, verticalHeightStyle), centerPaddingStyle), onMouseDown: this.swipeStart, onMouseUp: this.swipeEnd, onTouchStart: this.swipeStart, onTouchEnd: this.swipeEnd, onMouseMove: dragging ? this.swipeMove : undefined, onMouseLeave: dragging ? this.swipeEnd : undefined, onTouchMove: dragging ? this.swipeMove : undefined, onTouchCancel: dragging ? this.swipeEnd : undefined },
                React.createElement(Track, __assign({ ref: this._instanceRefHandler.bind(this, 'track') }, trackProps), children)),
            prevArrow,
            nextArrow,
            dotsEle));
    };
    InnerSlider.propTypes = {
        prefix: PropTypes.string,
        animation: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        arrows: PropTypes.bool,
        arrowSize: PropTypes.oneOf(['medium', 'large']),
        arrowPosition: PropTypes.oneOf(['inner', 'outer']),
        arrowDirection: PropTypes.oneOf(['hoz', 'ver']),
        centerPadding: PropTypes.any,
        children: PropTypes.any,
        centerMode: PropTypes.bool,
        dots: PropTypes.bool,
        dotsDirection: PropTypes.oneOf(['hoz', 'ver']),
        dotsClass: PropTypes.string,
        focusOnSelect: PropTypes.bool,
        cssEase: PropTypes.string,
        speed: PropTypes.number,
        infinite: PropTypes.bool,
        defaultActiveIndex: PropTypes.number,
        rtl: PropTypes.bool,
        slidesToShow: PropTypes.number,
        lazyLoad: PropTypes.bool,
        activeIndex: PropTypes.number,
        slidesToScroll: PropTypes.number,
        variableWidth: PropTypes.bool,
        vertical: PropTypes.bool,
        verticalSwiping: PropTypes.bool,
        prevArrow: PropTypes.element,
        nextArrow: PropTypes.element,
        dotsRender: PropTypes.func,
        triggerType: PropTypes.string,
    };
    InnerSlider.defaultProps = {
        prefix: 'next-',
        arrowDirection: 'hoz',
        triggerType: 'click',
    };
    return InnerSlider;
}(Component));
// extend prototype
Object.assign(InnerSlider.prototype, HelpersMixin);
Object.assign(InnerSlider.prototype, EventHandlersMixin);
export default polyfill(InnerSlider);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var trackHelper_1 = require("./trackHelper");
var helpers = {
    initialize: function (props) {
        var e_1, _a;
        var _this = this;
        var slickList = react_dom_1.default.findDOMNode(this.list);
        var slideCount = react_1.default.Children.count(props.children);
        var listWidth = this.getWidth(slickList) || 0;
        var trackWidth = this.getWidth(react_dom_1.default.findDOMNode(this.track)) || 0;
        var slideWidth;
        if (!props.vertical) {
            var centerPaddingAdj = (props.centerMode &&
                parseInt(props.centerPadding) * 2);
            slideWidth = (listWidth - centerPaddingAdj) / props.slidesToShow;
        }
        else {
            slideWidth = listWidth;
        }
        var slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]')) || 0;
        var listHeight = slideHeight * props.slidesToShow;
        var slideHeightList = [];
        var newSlickList = Array.from(slickList.querySelectorAll(".".concat(props.prefix, "slick-slide")) || []);
        try {
            for (var newSlickList_1 = tslib_1.__values(newSlickList), newSlickList_1_1 = newSlickList_1.next(); !newSlickList_1_1.done; newSlickList_1_1 = newSlickList_1.next()) {
                var item = newSlickList_1_1.value;
                var height = this.getHeight(item);
                slideHeightList.push(height);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (newSlickList_1_1 && !newSlickList_1_1.done && (_a = newSlickList_1.return)) _a.call(newSlickList_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var slidesToShow = props.slidesToShow || 1;
        var activeIndex = 'activeIndex' in props ? props.activeIndex : props.defaultActiveIndex;
        var currentSlide = props.rtl
            ? slideCount - 1 - (slidesToShow - 1) - activeIndex
            : activeIndex;
        this.setState({
            slideCount: slideCount,
            slideWidth: slideWidth,
            listWidth: listWidth,
            trackWidth: trackWidth,
            currentSlide: currentSlide,
            slideHeight: slideHeight,
            listHeight: listHeight,
            slideHeightList: slideHeightList,
        }, function () {
            var targetLeft = (0, trackHelper_1.getTrackLeft)(tslib_1.__assign(tslib_1.__assign({ slideIndex: _this.state.currentSlide, trackRef: _this.track }, props), _this.state));
            // getCSS function needs previously set state
            var trackStyle = (0, trackHelper_1.getTrackCSS)(tslib_1.__assign(tslib_1.__assign({ left: targetLeft }, props), _this.state));
            _this.setState({ trackStyle: trackStyle });
            _this.autoPlay(); // once we're set up, trigger the initial autoplay.
        });
    },
    update: function (props) {
        this.initialize(props);
    },
    getWidth: function (elem) {
        if ('clientWidth' in elem) {
            return elem.clientWidth;
        }
        return elem && elem.getBoundingClientRect().width;
    },
    getHeight: function (elem) {
        if ('clientHeight' in elem) {
            return elem.clientHeight;
        }
        return elem && elem.getBoundingClientRect().height;
    },
    adaptHeight: function () {
        if (this.props.adaptiveHeight) {
            var selector = "[data-index=\"".concat(this.state.currentSlide, "\"]");
            if (this.list) {
                var slickList = react_dom_1.default.findDOMNode(this.list);
                var slickElement = slickList.querySelector(selector);
                var listHeight = slickElement.offsetHeight;
                slickList.style.height = "".concat(listHeight, "px");
            }
        }
    },
    canGoNext: function (opts) {
        var canGo = true;
        if (!opts.infinite) {
            if (opts.centerMode) {
                if (opts.currentSlide >= opts.slideCount - 1) {
                    canGo = false;
                }
            }
            else if (opts.slideCount <= opts.slidesToShow ||
                opts.currentSlide >= opts.slideCount - opts.slidesToShow) {
                // check if all slides are shown in slider
                canGo = false;
            }
        }
        return canGo;
    },
    slideHandler: function (index) {
        var _this = this;
        var rtl = this.props.rtl;
        // Functionality of animateSlide and postSlide is merged into this function
        var targetSlide, currentSlide;
        var callback;
        if (this.props.waitForAnimate && this.state.animating) {
            return;
        }
        if (this.props.animation === 'fade') {
            currentSlide = this.state.currentSlide;
            // don't change slide if it's not infinite and current slide is the first or last slide'
            if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount)) {
                return;
            }
            //  Shifting targetSlide back into the range
            if (index < 0) {
                targetSlide = index + this.state.slideCount;
            }
            else if (index >= this.state.slideCount) {
                targetSlide = index - this.state.slideCount;
            }
            else {
                targetSlide = index;
            }
            if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(targetSlide) < 0) {
                this.setState({
                    lazyLoadedList: this.state.lazyLoadedList.concat(targetSlide),
                });
            }
            callback = function () {
                _this.setState({
                    animating: false,
                });
                _this.props.onChange(targetSlide);
                delete _this.animationEndCallback;
            };
            this.props.onBeforeChange(this.state.currentSlide, targetSlide);
            this.setState({
                animating: true,
                currentSlide: targetSlide,
            }, function () {
                this.animationEndCallback = setTimeout(callback, this.props.speed + 20);
            });
            this.autoPlay();
            return;
        }
        targetSlide = index;
        if (rtl) {
            if (targetSlide < 0) {
                if (this.props.infinite === false) {
                    currentSlide = 0;
                }
                else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
                    if (targetSlide + this.props.slidesToScroll <= 0) {
                        currentSlide = this.state.slideCount + targetSlide;
                        targetSlide = this.state.slideCount - this.props.slidesToScroll;
                    }
                    else {
                        currentSlide = targetSlide = 0;
                    }
                }
                else {
                    currentSlide = this.state.slideCount + targetSlide;
                }
            }
            else if (targetSlide >= this.state.slideCount) {
                if (this.props.infinite === false) {
                    currentSlide = this.state.slideCount - this.props.slidesToShow;
                }
                else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
                    currentSlide = 0;
                }
                else {
                    currentSlide = targetSlide - this.state.slideCount;
                }
            }
            else {
                currentSlide = targetSlide;
            }
        }
        else if (targetSlide < 0) {
            if (this.props.infinite === false) {
                currentSlide = 0;
            }
            else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
                currentSlide =
                    this.state.slideCount - (this.state.slideCount % this.props.slidesToScroll);
            }
            else {
                currentSlide = this.state.slideCount + targetSlide;
            }
        }
        else if (targetSlide >= this.state.slideCount) {
            if (this.props.infinite === false) {
                currentSlide = this.state.slideCount - this.props.slidesToShow;
            }
            else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
                currentSlide = 0;
            }
            else {
                currentSlide = targetSlide - this.state.slideCount;
            }
        }
        else {
            currentSlide = targetSlide;
        }
        var targetLeft = (0, trackHelper_1.getTrackLeft)(tslib_1.__assign(tslib_1.__assign({ slideIndex: targetSlide, trackRef: this.track }, this.props), this.state));
        var currentLeft = (0, trackHelper_1.getTrackLeft)(tslib_1.__assign(tslib_1.__assign({ slideIndex: currentSlide, trackRef: this.track }, this.props), this.state));
        if (this.props.infinite === false) {
            targetLeft = currentLeft;
        }
        if (this.props.lazyLoad) {
            var loaded_1 = true;
            var slidesToLoad = [];
            var slidesLen = this.state.slideCount;
            var sliderIndex = targetSlide < 0 ? slidesLen + targetSlide : currentSlide;
            for (var i = sliderIndex; i < sliderIndex + this.props.slidesToShow; i++) {
                var k = i;
                if (rtl) {
                    k = i >= slidesLen ? slidesLen * 2 - i - 1 : slidesLen - i - 1;
                }
                var pre = k - 1 < 0 ? slidesLen - 1 : k - 1;
                var next = k + 1 >= slidesLen ? 0 : k + 1;
                this.state.lazyLoadedList.indexOf(k) < 0 && slidesToLoad.push(k);
                this.state.lazyLoadedList.indexOf(pre) < 0 && slidesToLoad.push(pre);
                this.state.lazyLoadedList.indexOf(next) < 0 && slidesToLoad.push(next);
            }
            slidesToLoad.forEach(function (i) {
                if (_this.state.lazyLoadedList.indexOf(i) < 0) {
                    loaded_1 = false;
                }
            });
            if (!loaded_1) {
                this.setState({
                    lazyLoadedList: this.state.lazyLoadedList.concat(slidesToLoad),
                });
            }
        }
        this.props.onBeforeChange(this.state.currentSlide, currentSlide);
        // Slide Transition happens here.
        // animated transition happens to target Slide and
        // non - animated transition happens to current Slide
        // If CSS transitions are false, directly go the current slide.
        if (this.props.useCSS === false) {
            this.setState({
                currentSlide: currentSlide,
                trackStyle: (0, trackHelper_1.getTrackCSS)(tslib_1.__assign(tslib_1.__assign({ left: currentLeft }, this.props), this.state)),
            }, function () {
                _this.props.onChange(currentSlide);
            });
        }
        else {
            var nextStateChanges_1 = {
                animating: false,
                currentSlide: currentSlide,
                trackStyle: (0, trackHelper_1.getTrackCSS)(tslib_1.__assign(tslib_1.__assign({ left: currentLeft }, this.props), this.state)),
                swipeLeft: null,
            };
            callback = function () {
                _this.setState(nextStateChanges_1);
                _this.props.onChange(currentSlide);
                delete _this.animationEndCallback;
            };
            this.setState({
                animating: true,
                currentSlide: currentSlide,
                trackStyle: (0, trackHelper_1.getTrackAnimateCSS)(tslib_1.__assign(tslib_1.__assign({ left: targetLeft }, this.props), this.state)),
            }, function () {
                this.animationEndCallback = setTimeout(callback, this.props.speed + 20);
            });
        }
        this.autoPlay();
    },
    // 鼠标悬浮在 arrow 上时作出动画反馈
    arrowHoverHandler: function (msg) {
        var offset = 30; // slide 的位置偏移量
        var targetLeft = (0, trackHelper_1.getTrackLeft)(tslib_1.__assign(tslib_1.__assign({ slideIndex: this.state.currentSlide, trackRef: this.track }, this.props), this.state));
        var left;
        /* istanbul ignore next */
        if (msg === 'next') {
            left = targetLeft - offset;
        }
        else if (msg === 'prev') {
            left = targetLeft + offset;
        }
        else {
            left = targetLeft;
        }
        this.setState({
            trackStyle: (0, trackHelper_1.getTrackAnimateCSS)(tslib_1.__assign(tslib_1.__assign({ left: left }, this.props), this.state)),
        });
    },
    swipeDirection: function (touchObject) {
        var swipeAngle;
        var xDist = touchObject.startX - touchObject.curX;
        var yDist = touchObject.startY - touchObject.curY;
        var r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round((r * 180) / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if ((swipeAngle <= 45 && swipeAngle >= 0) || (swipeAngle <= 360 && swipeAngle >= 315)) {
            return this.props.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return this.props.rtl === false ? 'right' : 'left';
        }
        if (this.props.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return 'down';
            }
            else {
                return 'up';
            }
        }
        return 'vertical';
    },
    play: function () {
        var nextIndex;
        if (!this.hasMounted) {
            return false;
        }
        if (this.props.rtl) {
            nextIndex = this.state.currentSlide - this.props.slidesToScroll;
        }
        else if (this.canGoNext(tslib_1.__assign(tslib_1.__assign({}, this.props), this.state))) {
            nextIndex = this.state.currentSlide + this.props.slidesToScroll;
        }
        else {
            return false;
        }
        this.slideHandler(nextIndex);
    },
    autoPlay: function () {
        if (this.state.autoPlayTimer) {
            clearTimeout(this.state.autoPlayTimer);
        }
        if (this.props.autoplay) {
            this.setState({
                autoPlayTimer: setTimeout(this.play.bind(this), this.props.autoplaySpeed),
            });
        }
    },
    pause: function () {
        if (this.state.autoPlayTimer) {
            clearTimeout(this.state.autoPlayTimer);
            this.setState({
                autoPlayTimer: null,
            });
        }
    },
};
exports.default = helpers;

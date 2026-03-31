"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = void 0;
var tslib_1 = require("tslib");
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var checkSpecKeys = function (spec, keysArray) {
    return keysArray.reduce(function (value, key) {
        return value && spec.hasOwnProperty(key);
    }, true)
        ? null
        : // eslint-disable-next-line no-console
            console.error('Keys Missing', spec);
};
var getTrackCSS = function (spec) {
    var trackWidth;
    var trackHeight;
    var trackChildren = spec.slideCount + 2 * spec.slidesToShow;
    if (!spec.vertical) {
        if (spec.variableWidth) {
            trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
        }
        else if (spec.centerMode) {
            trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
        }
        else {
            trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
        }
    }
    else {
        trackHeight = trackChildren * spec.slideHeight;
    }
    var style = {
        opacity: 1,
    };
    var transform = {
        WebkitTransform: !spec.vertical
            ? "translate3d(".concat(spec.left, "px, 0px, 0px)")
            : "translate3d(0px, ".concat(spec.left, "px, 0px)"),
        transform: !spec.vertical
            ? "translate3d(".concat(spec.left, "px, 0px, 0px)")
            : "translate3d(0px, ".concat(spec.left, "px, 0px)"),
        transition: '',
        WebkitTransition: '',
        msTransform: !spec.vertical ? "translateX(".concat(spec.left, "px)") : "translateY(".concat(spec.left, "px)"),
    };
    if (trackWidth) {
        style = tslib_1.__assign(tslib_1.__assign({}, style), { width: trackWidth });
    }
    if (trackHeight) {
        style = tslib_1.__assign(tslib_1.__assign({}, style), { height: trackHeight });
    }
    if (spec.animation !== 'fade') {
        style = tslib_1.__assign(tslib_1.__assign({}, style), transform);
    }
    return style;
};
exports.getTrackCSS = getTrackCSS;
var getTrackAnimateCSS = function (spec) {
    checkSpecKeys(spec, [
        'left',
        'variableWidth',
        'slideCount',
        'slidesToShow',
        'slideWidth',
        'speed',
        'cssEase',
    ]);
    var style = (0, exports.getTrackCSS)(spec);
    // useCSS is true by default so it can be undefined
    style.WebkitTransition = "-webkit-transform ".concat(spec.speed, "ms ").concat(spec.cssEase);
    style.transition = "transform ".concat(spec.speed, "ms ").concat(spec.cssEase);
    return style;
};
exports.getTrackAnimateCSS = getTrackAnimateCSS;
var getTrackLeft = function (spec) {
    checkSpecKeys(spec, [
        'slideIndex',
        'trackRef',
        'infinite',
        'centerMode',
        'slideCount',
        'slidesToShow',
        'slidesToScroll',
        'slideWidth',
        'listWidth',
        'variableWidth',
        'slideHeight',
    ]);
    var slideOffset = 0;
    var targetLeft;
    var targetSlide;
    var verticalOffset = 0;
    if (spec.animation === 'fade') {
        return 0;
    }
    if (spec.infinite) {
        if (spec.slideCount > spec.slidesToShow) {
            slideOffset = spec.slideWidth * spec.slidesToShow * -1;
            verticalOffset = spec.slideHeight * spec.slidesToShow * -1;
        }
        if (spec.slideCount % spec.slidesToScroll !== 0) {
            var condition = spec.slideIndex + spec.slidesToScroll > spec.slideCount &&
                spec.slideCount > spec.slidesToShow;
            if (spec.rtl) {
                var slideIndex = spec.slideIndex >= spec.slideCount
                    ? spec.slideCount - spec.slideIndex
                    : spec.slideIndex;
                condition =
                    slideIndex + spec.slidesToScroll > spec.slideCount &&
                        spec.slideCount > spec.slidesToShow;
            }
            if (condition) {
                if (spec.slideIndex > spec.slideCount) {
                    slideOffset =
                        (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) *
                            spec.slideWidth *
                            -1;
                    verticalOffset =
                        (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) *
                            spec.slideHeight *
                            -1;
                }
                else {
                    slideOffset = (spec.slideCount % spec.slidesToScroll) * spec.slideWidth * -1;
                    verticalOffset =
                        (spec.slideCount % spec.slidesToScroll) * spec.slideHeight * -1;
                }
            }
        }
    }
    else {
        /* eslint-disable no-lonely-if */
        if (spec.slideCount % spec.slidesToScroll !== 0) {
            if (spec.slideIndex + spec.slidesToScroll > spec.slideCount &&
                spec.slideCount > spec.slidesToShow) {
                var slidesToOffset = spec.slidesToShow - (spec.slideCount % spec.slidesToScroll);
                slideOffset = slidesToOffset * spec.slideWidth;
            }
        }
    }
    if (spec.centerMode) {
        if (spec.infinite) {
            slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
        }
        else {
            slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
        }
    }
    if (!spec.vertical) {
        targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;
    }
    else {
        targetLeft = spec.slideIndex * spec.slideHeight * -1 + verticalOffset;
        if (spec.adaptiveHeight) {
            var index = spec.infinite ? spec.slideIndex + 1 : spec.slideIndex;
            var newHeight = spec
                .slideHeightList.slice(0, index)
                .reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
            targetLeft = newHeight * -1;
        }
    }
    if (spec.variableWidth === true) {
        var targetSlideIndex = void 0;
        if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
            targetSlide = react_dom_1.default.findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
        }
        else {
            targetSlideIndex = spec.slideIndex + spec.slidesToShow;
            targetSlide = react_dom_1.default.findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
        }
        targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
        if (spec.centerMode === true) {
            if (spec.infinite === false) {
                targetSlide = react_dom_1.default.findDOMNode(spec.trackRef).children[spec.slideIndex];
            }
            else {
                targetSlide = react_dom_1.default.findDOMNode(spec.trackRef).children[spec.slideIndex + spec.slidesToShow + 1];
            }
            if (targetSlide) {
                targetLeft =
                    targetSlide.offsetLeft * -1 +
                        (spec.listWidth - targetSlide.offsetWidth) / 2;
            }
        }
    }
    return targetLeft;
};
exports.getTrackLeft = getTrackLeft;

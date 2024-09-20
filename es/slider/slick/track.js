import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { dom } from '../../util';
/**
 * Slider Track
 * 内容轨道
 */
var getSlideClasses = function (specProps) {
    var _a;
    var prefix = specProps.prefix;
    var slickActive, slickCenter;
    var centerOffset, index;
    if (specProps.rtl) {
        index = specProps.slideCount - 1 - specProps.activeIndex;
    }
    else {
        index = specProps.activeIndex;
    }
    var slickCloned = index < 0 || index >= specProps.slideCount;
    if (specProps.centerMode) {
        centerOffset = Math.floor(specProps.slidesToShow / 2);
        slickCenter = (index - specProps.currentSlide) % specProps.slideCount === 0;
        if (index > specProps.currentSlide - centerOffset - 1 &&
            index <= specProps.currentSlide + centerOffset) {
            slickActive = true;
        }
    }
    else {
        slickActive =
            specProps.currentSlide <= index &&
                index < specProps.currentSlide + specProps.slidesToShow;
    }
    return classNames("".concat(prefix, "slick-slide"), (_a = {},
        _a["".concat(prefix, "slick-active")] = slickActive,
        _a["".concat(prefix, "slick-center")] = slickCenter,
        _a["".concat(prefix, "slick-cloned")] = slickCloned,
        _a));
};
var getSlideStyle = function (specProps) {
    var style = {};
    if (specProps.variableWidth === undefined || specProps.variableWidth === false) {
        style.width = specProps.slideWidth;
    }
    if (specProps.animation === 'fade') {
        style.position = 'relative';
        style.opacity = specProps.currentSlide === specProps.activeIndex ? 1 : 0;
        style.visibility = 'visible';
        style.zIndex = specProps.currentSlide === specProps.activeIndex ? 1 : 0;
        style.transition = "opacity ".concat(specProps.speed, "ms ").concat(specProps.cssEase);
        style.WebkitTransition = "opacity ".concat(specProps.speed, "ms ").concat(specProps.cssEase);
        if (specProps.vertical) {
            style.top = -specProps.activeIndex * specProps.slideHeight;
        }
        else {
            style.left = -specProps.activeIndex * specProps.slideWidth;
        }
    }
    if (specProps.vertical) {
        style.width = '100%';
    }
    return style;
};
var getKey = function (child, fallbackKey) {
    // key could be a zero
    return child.key === null || child.key === undefined ? fallbackKey : child.key;
};
var renderSlides = function (specProps) {
    var key;
    var slides = [];
    var preCloneSlides = [];
    var postCloneSlides = [];
    var count = React.Children.count(specProps.children);
    var child;
    React.Children.forEach(specProps.children, function (elem, index) {
        var childOnClickOptions = {
            message: 'children',
            index: index,
            slidesToScroll: specProps.slidesToScroll,
            currentSlide: specProps.currentSlide,
        };
        if (!specProps.lazyLoad ||
            (specProps.lazyLoad && specProps.lazyLoadedList.indexOf(index) >= 0)) {
            child = elem;
        }
        else {
            child = elem.key ? React.createElement("div", { key: elem.key }) : React.createElement("div", null);
        }
        var childStyle = getSlideStyle(__assign(__assign({}, specProps), { activeIndex: index }));
        var slickClasses = getSlideClasses(__assign(__assign({}, specProps), { activeIndex: index }));
        var cssClasses;
        if (child.props.className) {
            cssClasses = classNames(slickClasses, child.props.className);
        }
        else {
            cssClasses = slickClasses;
        }
        var onClick = function (e) {
            // only child === elem, it will has .props.onClick;
            child.props && child.props.onClick && elem.props.onClick(e);
            if (specProps.focusOnSelect) {
                specProps.focusOnSelect(childOnClickOptions);
            }
        };
        slides.push(React.cloneElement(child, {
            key: "original".concat(getKey(child, index)),
            'data-index': index,
            className: cssClasses,
            tabIndex: '-1',
            'aria-posinset': index,
            'aria-setsize': count,
            role: 'listitem',
            dir: specProps.rtl ? 'rtl' : 'ltr',
            // server-side render depend on elements of their own style
            style: !dom.hasDOM
                ? __assign(__assign({ outline: 'none' }, childStyle), child.props.style) : __assign(__assign({ outline: 'none' }, child.props.style), childStyle),
            onClick: onClick,
        }));
        // variableWidth doesn't wrap properly.
        if (specProps.infinite && specProps.animation !== 'fade') {
            var infiniteCount = specProps.variableWidth
                ? specProps.slidesToShow + 1
                : specProps.slidesToShow;
            if (index >= count - infiniteCount) {
                key = -(count - index);
                preCloneSlides.push(React.cloneElement(child, {
                    key: "precloned".concat(getKey(child, key)),
                    'data-index': key,
                    className: cssClasses,
                    style: __assign(__assign({}, child.props.style), childStyle),
                }));
            }
            if (index < infiniteCount) {
                key = count + index;
                postCloneSlides.push(React.cloneElement(child, {
                    key: "postcloned".concat(getKey(child, key)),
                    'data-index': key,
                    className: cssClasses,
                    style: __assign(__assign({}, child.props.style), childStyle),
                }));
            }
        }
    });
    // To support server-side rendering
    if (!dom.hasDOM) {
        return slides.slice(specProps.currentSlide, specProps.currentSlide + specProps.slidesToShow);
    }
    if (specProps.rtl) {
        return preCloneSlides.concat(slides, postCloneSlides).reverse();
    }
    else {
        return preCloneSlides.concat(slides, postCloneSlides);
    }
};
var Track = /** @class */ (function (_super) {
    __extends(Track, _super);
    function Track() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Track.prototype.render = function () {
        var slides = renderSlides(this.props);
        return (React.createElement("div", { role: "list", className: "".concat(this.props.prefix, "slick-track"), style: this.props.trackStyle }, slides));
    };
    Track.propTypes = {
        prefix: PropTypes.string,
        trackStyle: PropTypes.object,
    };
    Track.defaultProps = {
        prefix: 'next-',
    };
    return Track;
}(Component));
export default Track;

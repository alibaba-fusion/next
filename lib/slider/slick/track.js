"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var util_1 = require("../../util");
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
    return (0, classnames_1.default)("".concat(prefix, "slick-slide"), (_a = {},
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
    var count = react_1.default.Children.count(specProps.children);
    var child;
    react_1.default.Children.forEach(specProps.children, function (elem, index) {
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
            child = elem.key ? react_1.default.createElement("div", { key: elem.key }) : react_1.default.createElement("div", null);
        }
        var childStyle = getSlideStyle(tslib_1.__assign(tslib_1.__assign({}, specProps), { activeIndex: index }));
        var slickClasses = getSlideClasses(tslib_1.__assign(tslib_1.__assign({}, specProps), { activeIndex: index }));
        var cssClasses;
        if (child.props.className) {
            cssClasses = (0, classnames_1.default)(slickClasses, child.props.className);
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
        slides.push(react_1.default.cloneElement(child, {
            key: "original".concat(getKey(child, index)),
            'data-index': index,
            className: cssClasses,
            tabIndex: '-1',
            'aria-posinset': index,
            'aria-setsize': count,
            role: 'listitem',
            dir: specProps.rtl ? 'rtl' : 'ltr',
            // server-side render depend on elements of their own style
            style: !util_1.dom.hasDOM
                ? tslib_1.__assign(tslib_1.__assign({ outline: 'none' }, childStyle), child.props.style) : tslib_1.__assign(tslib_1.__assign({ outline: 'none' }, child.props.style), childStyle),
            onClick: onClick,
        }));
        // variableWidth doesn't wrap properly.
        if (specProps.infinite && specProps.animation !== 'fade') {
            var infiniteCount = specProps.variableWidth
                ? specProps.slidesToShow + 1
                : specProps.slidesToShow;
            if (index >= count - infiniteCount) {
                key = -(count - index);
                preCloneSlides.push(react_1.default.cloneElement(child, {
                    key: "precloned".concat(getKey(child, key)),
                    'data-index': key,
                    className: cssClasses,
                    style: tslib_1.__assign(tslib_1.__assign({}, child.props.style), childStyle),
                }));
            }
            if (index < infiniteCount) {
                key = count + index;
                postCloneSlides.push(react_1.default.cloneElement(child, {
                    key: "postcloned".concat(getKey(child, key)),
                    'data-index': key,
                    className: cssClasses,
                    style: tslib_1.__assign(tslib_1.__assign({}, child.props.style), childStyle),
                }));
            }
        }
    });
    // To support server-side rendering
    if (!util_1.dom.hasDOM) {
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
    tslib_1.__extends(Track, _super);
    function Track() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Track.prototype.render = function () {
        var slides = renderSlides(this.props);
        return (react_1.default.createElement("div", { role: "list", className: "".concat(this.props.prefix, "slick-track"), style: this.props.trackStyle }, slides));
    };
    Track.propTypes = {
        prefix: prop_types_1.default.string,
        trackStyle: prop_types_1.default.object,
    };
    Track.defaultProps = {
        prefix: 'next-',
    };
    return Track;
}(react_1.Component));
exports.default = Track;

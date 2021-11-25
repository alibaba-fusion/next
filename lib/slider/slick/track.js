'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Slider Track
 * 内容轨道
 */

var getSlideClasses = function getSlideClasses(specProps) {
    var _classNames;

    var prefix = specProps.prefix;
    var slickActive = void 0,
        slickCenter = void 0;
    var centerOffset = void 0,
        index = void 0;

    if (specProps.rtl) {
        index = specProps.slideCount - 1 - specProps.activeIndex;
    } else {
        index = specProps.activeIndex;
    }

    var slickCloned = index < 0 || index >= specProps.slideCount;
    if (specProps.centerMode) {
        centerOffset = Math.floor(specProps.slidesToShow / 2);
        slickCenter = (index - specProps.currentSlide) % specProps.slideCount === 0;
        if (index > specProps.currentSlide - centerOffset - 1 && index <= specProps.currentSlide + centerOffset) {
            slickActive = true;
        }
    } else {
        slickActive = specProps.currentSlide <= index && index < specProps.currentSlide + specProps.slidesToShow;
    }

    return (0, _classnames2.default)(prefix + 'slick-slide', (_classNames = {}, _classNames[prefix + 'slick-active'] = slickActive, _classNames[prefix + 'slick-center'] = slickCenter, _classNames[prefix + 'slick-cloned'] = slickCloned, _classNames));
};

var getSlideStyle = function getSlideStyle(specProps) {
    var style = {};

    if (specProps.variableWidth === undefined || specProps.variableWidth === false) {
        style.width = specProps.slideWidth;
    }

    if (specProps.animation === 'fade') {
        style.position = 'relative';

        style.opacity = specProps.currentSlide === specProps.activeIndex ? 1 : 0;
        style.visibility = specProps.currentSlide >= specProps.activeIndex ? 'visible' : 'hidden';
        style.transition = 'opacity ' + specProps.speed + 'ms ' + specProps.cssEase;
        style.WebkitTransition = 'opacity ' + specProps.speed + 'ms ' + specProps.cssEase;

        if (specProps.vertical) {
            style.top = -specProps.activeIndex * specProps.slideHeight;
        } else {
            style.left = -specProps.activeIndex * specProps.slideWidth;
        }
    }

    if (specProps.vertical) {
        style.width = '100%';
    }

    return style;
};

var getKey = function getKey(child, fallbackKey) {
    // key could be a zero
    return child.key === null || child.key === undefined ? fallbackKey : child.key;
};

var renderSlides = function renderSlides(specProps) {
    var key = void 0;
    var slides = [];
    var preCloneSlides = [];
    var postCloneSlides = [];
    var count = _react2.default.Children.count(specProps.children);
    var child = void 0;

    _react2.default.Children.forEach(specProps.children, function (elem, index) {
        var childOnClickOptions = {
            message: 'children',
            index: index,
            slidesToScroll: specProps.slidesToScroll,
            currentSlide: specProps.currentSlide
        };

        if (!specProps.lazyLoad | (specProps.lazyLoad && specProps.lazyLoadedList.indexOf(index) >= 0)) {
            child = elem;
        } else {
            child = elem.key ? _react2.default.createElement('div', { key: elem.key }) : _react2.default.createElement('div', null);
        }
        var childStyle = getSlideStyle((0, _extends3.default)({}, specProps, { activeIndex: index }));
        var slickClasses = getSlideClasses((0, _extends3.default)({
            activeIndex: index
        }, specProps));
        var cssClasses = void 0;

        if (child.props.className) {
            cssClasses = (0, _classnames2.default)(slickClasses, child.props.className);
        } else {
            cssClasses = slickClasses;
        }

        var onClick = function onClick(e) {
            // only child === elem, it will has .props.onClick;
            child.props && child.props.onClick && elem.props.onClick(e);
            if (specProps.focusOnSelect) {
                specProps.focusOnSelect(childOnClickOptions);
            }
        };

        slides.push(_react2.default.cloneElement(child, {
            key: 'original' + getKey(child, index),
            'data-index': index,
            className: cssClasses,
            tabIndex: '-1',
            'aria-posinset': index,
            'aria-setsize': count,
            role: 'listitem',
            dir: specProps.rtl ? 'rtl' : 'ltr',
            // server-side render depend on elements of their own style
            style: !_util.dom.hasDOM ? (0, _extends3.default)({ outline: 'none' }, childStyle, child.props.style) : (0, _extends3.default)({ outline: 'none' }, child.props.style, childStyle),
            onClick: onClick
        }));

        // variableWidth doesn't wrap properly.
        if (specProps.infinite && specProps.animation !== 'fade') {
            var infiniteCount = specProps.variableWidth ? specProps.slidesToShow + 1 : specProps.slidesToShow;

            if (index >= count - infiniteCount) {
                key = -(count - index);
                preCloneSlides.push(_react2.default.cloneElement(child, {
                    key: 'precloned' + getKey(child, key),
                    'data-index': key,
                    className: cssClasses,
                    style: (0, _extends3.default)({}, child.props.style, childStyle)
                }));
            }

            if (index < infiniteCount) {
                key = count + index;
                postCloneSlides.push(_react2.default.cloneElement(child, {
                    key: 'postcloned' + getKey(child, key),
                    'data-index': key,
                    className: cssClasses,
                    style: (0, _extends3.default)({}, child.props.style, childStyle)
                }));
            }
        }
    });
    // To support server-side rendering
    if (!_util.dom.hasDOM) {
        return slides.slice(specProps.currentSlide, specProps.currentSlide + specProps.slidesToShow);
    }
    if (specProps.rtl) {
        return preCloneSlides.concat(slides, postCloneSlides).reverse();
    } else {
        return preCloneSlides.concat(slides, postCloneSlides);
    }
};

var Track = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Track, _Component);

    function Track() {
        (0, _classCallCheck3.default)(this, Track);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    Track.prototype.render = function render() {
        var slides = renderSlides(this.props);
        return _react2.default.createElement(
            'div',
            {
                role: 'list',
                className: this.props.prefix + 'slick-track',
                style: this.props.trackStyle
            },
            slides
        );
    };

    return Track;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    trackStyle: _propTypes2.default.object
}, _class.defaultProps = {
    prefix: 'next-'
}, _temp);
Track.displayName = 'Track';
exports.default = Track;
module.exports = exports['default'];
import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { func } from '../../util';
/**
 * slider dots
 * 导航锚点
 */
var noop = func.noop;
var Dots = /** @class */ (function (_super) {
    __extends(Dots, _super);
    function Dots() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dots.prototype.handleChangeSlide = function (options, e) {
        e.preventDefault();
        this.props.changeSlide(options);
    };
    Dots.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, slideCount = _b.slideCount, slidesToScroll = _b.slidesToScroll, currentSlide = _b.currentSlide, dotsClass = _b.dotsClass, dotsDirection = _b.dotsDirection, dotsRender = _b.dotsRender, triggerType = _b.triggerType, rtl = _b.rtl;
        var dotsClazz = classNames("".concat(prefix, "slick-dots"), dotsDirection, dotsClass);
        var dotCount = Math.ceil(slideCount / slidesToScroll);
        var children = [];
        for (var i = 0; i < dotCount; i++) {
            var leftBound = i * slidesToScroll;
            var rightBound = leftBound + slidesToScroll - 1;
            var itemClazz = classNames("".concat(prefix, "slick-dots-item"), {
                active: currentSlide >= leftBound && currentSlide <= rightBound,
            });
            var dotOptions = {
                message: 'dots',
                index: i,
                slidesToScroll: slidesToScroll,
                currentSlide: currentSlide,
            };
            var handleProp = (_a = {},
                _a[(triggerType === null || triggerType === void 0 ? void 0 : triggerType.toLowerCase()) === 'hover' ? 'onMouseEnter' : 'onClick'] = this.handleChangeSlide.bind(this, dotOptions),
                _a);
            var docIndex = i;
            var currentSlideIndex = currentSlide;
            if (rtl) {
                docIndex = dotCount - 1 - i;
                currentSlideIndex = dotCount - 1 - currentSlide;
            }
            children.push(React.createElement("li", __assign({ key: i, className: itemClazz }, handleProp), dotsRender instanceof Function ? (React.createElement("span", null, dotsRender(docIndex, currentSlideIndex))) : (
            // Slider is navigated by right and left arrow buttons so the dots are not required functionality
            React.createElement("button", { tabIndex: -1 }))));
        }
        return (React.createElement("ul", { className: dotsClazz, "aria-hidden": "true" }, children));
    };
    Dots.propTypes = {
        prefix: PropTypes.string,
        currentSlide: PropTypes.number,
        changeSlide: PropTypes.func,
        dotsClass: PropTypes.string,
        slideCount: PropTypes.number,
        slidesToScroll: PropTypes.number,
        dotsDirection: PropTypes.oneOf(['hoz', 'ver']),
        dotsRender: PropTypes.func,
        triggerType: PropTypes.string,
    };
    Dots.defaultProps = {
        changeSlide: noop,
    };
    return Dots;
}(Component));
export default Dots;

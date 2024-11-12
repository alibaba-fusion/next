"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var util_1 = require("../../util");
/**
 * slider dots
 * 导航锚点
 */
var noop = util_1.func.noop;
var Dots = /** @class */ (function (_super) {
    tslib_1.__extends(Dots, _super);
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
        var dotsClazz = (0, classnames_1.default)("".concat(prefix, "slick-dots"), dotsDirection, dotsClass);
        var dotCount = Math.ceil(slideCount / slidesToScroll);
        var children = [];
        for (var i = 0; i < dotCount; i++) {
            var leftBound = i * slidesToScroll;
            var rightBound = leftBound + slidesToScroll - 1;
            var itemClazz = (0, classnames_1.default)("".concat(prefix, "slick-dots-item"), {
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
            children.push(react_1.default.createElement("li", tslib_1.__assign({ key: i, className: itemClazz }, handleProp), dotsRender instanceof Function ? (react_1.default.createElement("span", null, dotsRender(docIndex, currentSlideIndex))) : (
            // Slider is navigated by right and left arrow buttons so the dots are not required functionality
            react_1.default.createElement("button", { tabIndex: -1 }))));
        }
        return (react_1.default.createElement("ul", { className: dotsClazz, "aria-hidden": "true" }, children));
    };
    Dots.propTypes = {
        prefix: prop_types_1.default.string,
        currentSlide: prop_types_1.default.number,
        changeSlide: prop_types_1.default.func,
        dotsClass: prop_types_1.default.string,
        slideCount: prop_types_1.default.number,
        slidesToScroll: prop_types_1.default.number,
        dotsDirection: prop_types_1.default.oneOf(['hoz', 'ver']),
        dotsRender: prop_types_1.default.func,
        triggerType: prop_types_1.default.string,
    };
    Dots.defaultProps = {
        changeSlide: noop,
    };
    return Dots;
}(react_1.Component));
exports.default = Dots;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var icon_1 = tslib_1.__importDefault(require("../../icon"));
var util_1 = require("../../util");
/**
 * slider arrow
 * 左右控制箭头
 */
var noop = util_1.func.noop;
var Arrow = /** @class */ (function (_super) {
    tslib_1.__extends(Arrow, _super);
    function Arrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arrow.isDisabled = function (props) {
        var infinite = props.infinite, type = props.type, centerMode = props.centerMode, currentSlide = props.currentSlide, slideCount = props.slideCount, slidesToShow = props.slidesToShow;
        if (infinite) {
            return false;
        }
        if (type === 'prev') {
            return currentSlide <= 0;
        }
        if (centerMode && currentSlide >= slideCount - 1) {
            return true;
        }
        else if (currentSlide >= slideCount - slidesToShow) {
            return true;
        }
        return false;
    };
    Arrow.prototype.handleClick = function (options, e) {
        e && e.preventDefault();
        if (options.message === 'prev') {
            options.message = 'previous';
        }
        this.props.clickHandler(options, e);
    };
    Arrow.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, type = _a.type, arrowSize = _a.arrowSize, arrowPosition = _a.arrowPosition, arrowDirection = _a.arrowDirection, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, children = _a.children;
        var others = util_1.obj.pickOthers(Arrow.propTypes, this.props);
        var iconType = Arrow.ARROW_ICON_TYPES[arrowDirection][type];
        var disabled = Arrow.isDisabled(this.props);
        var arrowClazz = (0, classnames_1.default)([
            "".concat(prefix, "slick-arrow"),
            "".concat(prefix, "slick-").concat(type),
            arrowPosition,
            arrowSize,
            arrowDirection,
        ], { disabled: disabled });
        var arrowProps = tslib_1.__assign(tslib_1.__assign({}, others), { key: type, 'data-role': 'none', className: arrowClazz, style: { display: 'block' }, onClick: disabled ? null : this.handleClick.bind(this, { message: type }), onMouseEnter: disabled ? undefined : onMouseEnter, onMouseLeave: disabled ? undefined : onMouseLeave });
        if (children) {
            return react_1.default.cloneElement(react_1.default.Children.only(children), arrowProps);
        }
        else {
            return (react_1.default.createElement("button", tslib_1.__assign({ type: "button", role: "button" }, arrowProps),
                react_1.default.createElement(icon_1.default, { type: iconType })));
        }
    };
    Arrow.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        type: prop_types_1.default.oneOf(['prev', 'next']).isRequired,
        centerMode: prop_types_1.default.bool,
        currentSlide: prop_types_1.default.number,
        infinite: prop_types_1.default.bool,
        clickHandler: prop_types_1.default.func,
        slideCount: prop_types_1.default.number,
        slidesToShow: prop_types_1.default.number,
        arrow: prop_types_1.default.element,
        arrowSize: prop_types_1.default.string,
        arrowPosition: prop_types_1.default.string,
        arrowDirection: prop_types_1.default.oneOf(['hoz', 'ver']),
        onMouseEnter: prop_types_1.default.func,
        onMouseLeave: prop_types_1.default.func,
        children: prop_types_1.default.node,
    };
    Arrow.defaultProps = {
        onMouseEnter: noop,
        onMouseLeave: noop,
    };
    Arrow.ARROW_ICON_TYPES = {
        hoz: { prev: 'arrow-left', next: 'arrow-right' },
        ver: { prev: 'arrow-up', next: 'arrow-down' },
    };
    return Arrow;
}(react_1.Component));
exports.default = Arrow;

import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../icon';
import { obj, func } from '../../util';
/**
 * slider arrow
 * 左右控制箭头
 */
var noop = func.noop;
var Arrow = /** @class */ (function (_super) {
    __extends(Arrow, _super);
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
        var others = obj.pickOthers(Arrow.propTypes, this.props);
        var iconType = Arrow.ARROW_ICON_TYPES[arrowDirection][type];
        var disabled = Arrow.isDisabled(this.props);
        var arrowClazz = classNames([
            "".concat(prefix, "slick-arrow"),
            "".concat(prefix, "slick-").concat(type),
            arrowPosition,
            arrowSize,
            arrowDirection,
        ], { disabled: disabled });
        var arrowProps = __assign(__assign({}, others), { key: type, 'data-role': 'none', className: arrowClazz, style: { display: 'block' }, onClick: disabled ? null : this.handleClick.bind(this, { message: type }), onMouseEnter: disabled ? undefined : onMouseEnter, onMouseLeave: disabled ? undefined : onMouseLeave });
        if (children) {
            return React.cloneElement(React.Children.only(children), arrowProps);
        }
        else {
            return (React.createElement("button", __assign({ type: "button", role: "button" }, arrowProps),
                React.createElement(Icon, { type: iconType })));
        }
    };
    Arrow.propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        type: PropTypes.oneOf(['prev', 'next']).isRequired,
        centerMode: PropTypes.bool,
        currentSlide: PropTypes.number,
        infinite: PropTypes.bool,
        clickHandler: PropTypes.func,
        slideCount: PropTypes.number,
        slidesToShow: PropTypes.number,
        arrow: PropTypes.element,
        arrowSize: PropTypes.string,
        arrowPosition: PropTypes.string,
        arrowDirection: PropTypes.oneOf(['hoz', 'ver']),
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        children: PropTypes.node,
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
}(Component));
export default Arrow;

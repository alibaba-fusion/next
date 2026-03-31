import { __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classNames from 'classnames';
import Animate from '../animate';
import { support, dom } from '../util';
/**
 * badge sup component
 */
// util::getDigitArray
var getDigitArray = function (num) {
    return num
        .toString()
        .split('')
        .reverse()
        .map(function (i) { return parseInt(i, 10); });
};
var Sup = /** @class */ (function (_super) {
    __extends(Sup, _super);
    function Sup(props) {
        var _this = _super.call(this, props) || this;
        _this.saveRef = function (ref) {
            _this.supEl = ref;
        };
        // render 时，上一次的渲染数字 和 当前渲染的数字
        _this.state = {
            lastCount: 0,
            currentCount: props.count,
        };
        return _this;
    }
    // 单排可滚动的数字列表
    Sup.renderDigit = function (prefix, digit, key) {
        var children = [];
        for (var i = 0; i < 30; i++) {
            children.push(React.createElement("span", { key: i }, i % 10));
        }
        return (React.createElement("span", { className: "".concat(prefix, "badge-scroll-number-only"), key: key }, children));
    };
    // 可滚动数字组
    Sup.renderNumber = function (prefix, count) {
        return getDigitArray(count)
            .map(function (digit, i) { return Sup.renderDigit(prefix, digit, i); })
            .reverse();
    };
    Sup.getDerivedStateFromProps = function (nextProps, prevState) {
        if ('count' in nextProps) {
            return {
                lastCount: prevState.currentCount,
                currentCount: nextProps.count,
            };
        }
        return null;
    };
    Sup.prototype.componentDidMount = function () {
        this.computeStyle(true);
    };
    Sup.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.count !== this.props.count) {
            this.computeStyle(false);
            // NOTE why called `computeStyle` again after 300ms ?
            setTimeout(function () {
                _this.computeStyle(true, true);
            }, 300);
        }
    };
    Sup.prototype.computeStyle = function (removeTransition, revert) {
        var _this = this;
        var _a = this.props, prefix = _a.prefix, count = _a.count, overflowCount = _a.overflowCount;
        var lastCount = this.state.lastCount;
        if (lastCount === undefined ||
            count === undefined ||
            overflowCount === undefined ||
            Number(count) < 0) {
            return;
        }
        var supNode = this.supEl;
        if (supNode && dom.hasClass(supNode, "".concat(prefix, "badge-count"))) {
            var scrollNums_1 = supNode.querySelectorAll(".".concat(prefix, "badge-scroll-number-only"));
            if (scrollNums_1.length) {
                var height_1 = window.getComputedStyle(supNode).height;
                scrollNums_1 = [].slice.call(scrollNums_1, 0).reverse();
                getDigitArray(count).forEach(function (digit, i) {
                    var position = _this.getPositionByDigit(digit, i, revert);
                    var transformTo = -position * parseFloat(height_1);
                    removeTransition =
                        removeTransition ||
                            typeof getDigitArray(lastCount)[i] === 'undefined' ||
                            lastCount > overflowCount ||
                            Number(lastCount) <= 0;
                    var scrollStyle = support.animation
                        ? {
                            transition: removeTransition
                                ? 'none'
                                : 'transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1)',
                            WebkitTransform: "translateY(".concat(transformTo, "px)"),
                            transform: "translateY(".concat(transformTo, "px)"),
                            height: height_1,
                            lineHeight: height_1,
                        }
                        : {
                            top: "".concat(transformTo, "px"),
                            height: height_1,
                            lineHeight: height_1,
                        };
                    Object.keys(scrollStyle).forEach(function (key) {
                        scrollNums_1[i].style.setProperty(key, scrollStyle[key]);
                    });
                });
            }
        }
    };
    Sup.prototype.getPositionByDigit = function (digit, i, revert) {
        var lastCount = this.state.lastCount;
        if (revert) {
            return 10 + digit;
        }
        var lastDigit = getDigitArray(lastCount)[i] || 0;
        if (this.props.count > lastCount) {
            return (digit >= lastDigit ? 10 : 20) + digit;
        }
        if (digit <= lastDigit) {
            return 10 + digit;
        }
        return digit;
    };
    Sup.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, count = _b.count, showZero = _b.showZero, _c = _b.overflowCount, overflowCount = _c === void 0 ? 99 : _c, dot = _b.dot, style = _b.style, content = _b.content;
        var supClasses = classNames("".concat(prefix, "badge-scroll-number"), (_a = {},
            _a["".concat(prefix, "badge-count")] = !!count || (count === 0 && showZero),
            _a["".concat(prefix, "badge-dot")] = dot,
            _a["".concat(prefix, "badge-custom")] = !!content,
            _a));
        var children = null;
        var show = dot || count > 0 || (count === 0 && showZero) || content;
        if (count > 0 || (count === 0 && showZero)) {
            var realCount = overflowCount > 0 && count > overflowCount
                ? "".concat(overflowCount, "+")
                : count;
            children = isNaN(realCount) ? realCount : Sup.renderNumber(prefix, count);
        }
        else if (content) {
            children = content;
        }
        var animation = {
            appear: 'zoomIn',
            enter: 'zoomIn',
            leave: 'zoomOut',
        };
        var wrapper = support.animation ? React.createElement(Animate, { animation: animation }) : React.createElement("span", null);
        var element = show ? (React.createElement("sup", { ref: this.saveRef, className: supClasses, style: style }, children)) : null;
        return React.cloneElement(wrapper, {}, element);
    };
    Sup.propTypes = {
        prefix: PropTypes.string,
        count: PropTypes.number,
        showZero: PropTypes.bool,
        overflowCount: PropTypes.number,
        content: PropTypes.node,
        dot: PropTypes.bool,
        style: PropTypes.object,
    };
    Sup.defaultProps = {
        prefix: 'next-',
        count: 0,
        showZero: false,
        overflowCount: 99,
        dot: false,
    };
    return Sup;
}(Component));
export default polyfill(Sup);

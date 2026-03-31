import { __assign, __extends, __read, __rest, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ConfigProvider from '../../config-provider';
import Animate from '../../animate';
import Icon from '../../icon';
import Button from '../../button';
import { obj } from '../../util';
var Expand = Animate.Expand;
/** Timeline.Item */
var TimelineItem = /** @class */ (function (_super) {
    __extends(TimelineItem, _super);
    function TimelineItem() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.beforeEnter = function () {
            _this['timeline-item'].style.setProperty('min-height', 'auto');
        };
        _this.beforeLeave = function () {
            _this['timeline-item'].style.setProperty('min-height', '48px'); // timeleft 节点最小高度
        };
        return _this;
    }
    TimelineItem.prototype.toggleFold = function (folderIndex) {
        this.props.toggleFold(folderIndex);
    };
    TimelineItem.prototype.render = function () {
        var _a, _b, _c, _d;
        var _this = this;
        var _e = this.props, prefix = _e.prefix, className = _e.className, state = _e.state, icon = _e.icon, dot = _e.dot, time = _e.time, title = _e.title, timeLeft = _e.timeLeft, content = _e.content, index = _e.index, total = _e.total, folderIndex = _e.folderIndex, foldShow = _e.foldShow, locale = _e.locale, animation = _e.animation, others = __rest(_e, ["prefix", "className", "state", "icon", "dot", "time", "title", "timeLeft", "content", "index", "total", "folderIndex", "foldShow", "locale", "animation"]);
        var finalItemNode = dot ? (dot) : icon ? (React.createElement("span", { className: "".concat(prefix, "timeline-item-icon") },
            React.createElement(Icon, { type: icon, size: "xs" }))) : (React.createElement("span", { className: "".concat(prefix, "timeline-item-dot") }));
        var itemCls = classNames((_a = {},
            _a["".concat(prefix, "timeline-item")] = true,
            _a["".concat(prefix, "timeline-item-first")] = index === 0,
            _a["".concat(prefix, "timeline-item-last")] = index === total - 1,
            _a["".concat(prefix, "timeline-item-").concat(state)] = state,
            _a["".concat(prefix, "timeline-item-folded")] = folderIndex,
            _a["".concat(prefix, "timeline-item-unfolded")] = foldShow,
            _a["".concat(prefix, "timeline-item-has-left-content")] = timeLeft,
            _a[className] = className,
            _a));
        var folderCls = classNames((_b = {},
            _b["".concat(prefix, "timeline-item-folder")] = true,
            _b["".concat(prefix, "timeline-item-has-left-content")] = timeLeft,
            _b));
        var itemNodeCls = classNames((_c = {},
            _c["".concat(prefix, "timeline-item-node")] = true,
            _c["".concat(prefix, "timeline-item-node-custom")] = dot,
            _c));
        var dotTailCls = classNames((_d = {},
            _d["".concat(prefix, "timeline-item-dot-tail")] = true,
            _d["".concat(prefix, "timeline-item-dot-tail-solid")] = foldShow,
            _d["".concat(prefix, "timeline-hide")] = index === total - 1 && foldShow,
            _d));
        var renderTimeLineItemContent = function (isLeft) {
            if (isLeft)
                return React.createElement("p", { className: "".concat(prefix, "timeline-item-body") }, timeLeft);
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "".concat(prefix, "timeline-item-title") }, title),
                React.createElement("div", { className: "".concat(prefix, "timeline-item-body") }, content),
                React.createElement("div", { className: "".concat(prefix, "timeline-item-time") }, time)));
        };
        var buttonProps = {
            text: true,
            size: 'small',
            type: 'primary',
            onClick: this.toggleFold.bind(this, folderIndex, total),
        };
        var timelineNode = (folderIndex && foldShow) || !folderIndex ? (React.createElement("div", __assign({}, obj.pickOthers(TimelineItem.propTypes, others), { className: itemCls, ref: function (e) {
                _this['timeline-item'] = e;
            } }),
            React.createElement("div", { className: "".concat(prefix, "timeline-item-left-content") }, renderTimeLineItemContent(className.includes("".concat(prefix, "timeline-item-left")))),
            React.createElement("div", { className: "".concat(prefix, "timeline-item-timeline") },
                React.createElement("div", { className: "".concat(prefix, "timeline-item-tail") },
                    React.createElement("i", null)),
                React.createElement("div", { className: itemNodeCls }, finalItemNode)),
            React.createElement("div", { className: "".concat(prefix, "timeline-item-content") }, renderTimeLineItemContent(!className.includes("".concat(prefix, "timeline-item-left")))))) : null;
        return (React.createElement("li", { tabIndex: 0 },
            animation && folderIndex ? (React.createElement(Expand, { animationAppear: false, beforeEnter: this.beforeEnter, beforeLeave: this.beforeEnter, afterEnter: this.beforeLeave }, timelineNode)) : (timelineNode),
            folderIndex === index ? (React.createElement("div", { className: folderCls },
                React.createElement("div", { className: dotTailCls }),
                foldShow ? (React.createElement(Button, __assign({}, buttonProps),
                    locale.fold,
                    React.createElement(Icon, { type: "arrow-up" }))) : (React.createElement(Button, __assign({}, buttonProps),
                    locale.expand,
                    React.createElement(Icon, { type: "arrow-down" }))))) : null));
    };
    TimelineItem.displayName = 'TimelineItem';
    TimelineItem.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, index: PropTypes.number, total: PropTypes.number, folderIndex: PropTypes.number, foldShow: PropTypes.bool, state: PropTypes.oneOf(['done', 'process', 'error', 'success']), icon: PropTypes.string, dot: PropTypes.node, time: PropTypes.node, title: PropTypes.node, timeLeft: PropTypes.node, content: PropTypes.node, toggleFold: PropTypes.func, className: PropTypes.string, locale: PropTypes.object, animation: PropTypes.bool });
    TimelineItem.defaultProps = {
        prefix: 'next-',
        state: 'done',
        toggleFold: function () { },
        animation: true,
    };
    return TimelineItem;
}(Component));
export default ConfigProvider.config(TimelineItem, {});

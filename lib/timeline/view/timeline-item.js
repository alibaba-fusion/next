"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../../config-provider"));
var animate_1 = tslib_1.__importDefault(require("../../animate"));
var icon_1 = tslib_1.__importDefault(require("../../icon"));
var button_1 = tslib_1.__importDefault(require("../../button"));
var util_1 = require("../../util");
var Expand = animate_1.default.Expand;
/** Timeline.Item */
var TimelineItem = /** @class */ (function (_super) {
    tslib_1.__extends(TimelineItem, _super);
    function TimelineItem() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
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
        var _e = this.props, prefix = _e.prefix, className = _e.className, state = _e.state, icon = _e.icon, dot = _e.dot, time = _e.time, title = _e.title, timeLeft = _e.timeLeft, content = _e.content, index = _e.index, total = _e.total, folderIndex = _e.folderIndex, foldShow = _e.foldShow, locale = _e.locale, animation = _e.animation, others = tslib_1.__rest(_e, ["prefix", "className", "state", "icon", "dot", "time", "title", "timeLeft", "content", "index", "total", "folderIndex", "foldShow", "locale", "animation"]);
        var finalItemNode = dot ? (dot) : icon ? (react_1.default.createElement("span", { className: "".concat(prefix, "timeline-item-icon") },
            react_1.default.createElement(icon_1.default, { type: icon, size: "xs" }))) : (react_1.default.createElement("span", { className: "".concat(prefix, "timeline-item-dot") }));
        var itemCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "timeline-item")] = true,
            _a["".concat(prefix, "timeline-item-first")] = index === 0,
            _a["".concat(prefix, "timeline-item-last")] = index === total - 1,
            _a["".concat(prefix, "timeline-item-").concat(state)] = state,
            _a["".concat(prefix, "timeline-item-folded")] = folderIndex,
            _a["".concat(prefix, "timeline-item-unfolded")] = foldShow,
            _a["".concat(prefix, "timeline-item-has-left-content")] = timeLeft,
            _a[className] = className,
            _a));
        var folderCls = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "timeline-item-folder")] = true,
            _b["".concat(prefix, "timeline-item-has-left-content")] = timeLeft,
            _b));
        var itemNodeCls = (0, classnames_1.default)((_c = {},
            _c["".concat(prefix, "timeline-item-node")] = true,
            _c["".concat(prefix, "timeline-item-node-custom")] = dot,
            _c));
        var dotTailCls = (0, classnames_1.default)((_d = {},
            _d["".concat(prefix, "timeline-item-dot-tail")] = true,
            _d["".concat(prefix, "timeline-item-dot-tail-solid")] = foldShow,
            _d["".concat(prefix, "timeline-hide")] = index === total - 1 && foldShow,
            _d));
        var renderTimeLineItemContent = function (isLeft) {
            if (isLeft)
                return react_1.default.createElement("p", { className: "".concat(prefix, "timeline-item-body") }, timeLeft);
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "".concat(prefix, "timeline-item-title") }, title),
                react_1.default.createElement("div", { className: "".concat(prefix, "timeline-item-body") }, content),
                react_1.default.createElement("div", { className: "".concat(prefix, "timeline-item-time") }, time)));
        };
        var buttonProps = {
            text: true,
            size: 'small',
            type: 'primary',
            onClick: this.toggleFold.bind(this, folderIndex, total),
        };
        var timelineNode = (folderIndex && foldShow) || !folderIndex ? (react_1.default.createElement("div", tslib_1.__assign({}, util_1.obj.pickOthers(TimelineItem.propTypes, others), { className: itemCls, ref: function (e) {
                _this['timeline-item'] = e;
            } }),
            react_1.default.createElement("div", { className: "".concat(prefix, "timeline-item-left-content") }, renderTimeLineItemContent(className.includes("".concat(prefix, "timeline-item-left")))),
            react_1.default.createElement("div", { className: "".concat(prefix, "timeline-item-timeline") },
                react_1.default.createElement("div", { className: "".concat(prefix, "timeline-item-tail") },
                    react_1.default.createElement("i", null)),
                react_1.default.createElement("div", { className: itemNodeCls }, finalItemNode)),
            react_1.default.createElement("div", { className: "".concat(prefix, "timeline-item-content") }, renderTimeLineItemContent(!className.includes("".concat(prefix, "timeline-item-left")))))) : null;
        return (react_1.default.createElement("li", { tabIndex: 0 },
            animation && folderIndex ? (react_1.default.createElement(Expand, { animationAppear: false, beforeEnter: this.beforeEnter, beforeLeave: this.beforeEnter, afterEnter: this.beforeLeave }, timelineNode)) : (timelineNode),
            folderIndex === index ? (react_1.default.createElement("div", { className: folderCls },
                react_1.default.createElement("div", { className: dotTailCls }),
                foldShow ? (react_1.default.createElement(button_1.default, tslib_1.__assign({}, buttonProps),
                    locale.fold,
                    react_1.default.createElement(icon_1.default, { type: "arrow-up" }))) : (react_1.default.createElement(button_1.default, tslib_1.__assign({}, buttonProps),
                    locale.expand,
                    react_1.default.createElement(icon_1.default, { type: "arrow-down" }))))) : null));
    };
    TimelineItem.displayName = 'TimelineItem';
    TimelineItem.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, index: prop_types_1.default.number, total: prop_types_1.default.number, folderIndex: prop_types_1.default.number, foldShow: prop_types_1.default.bool, state: prop_types_1.default.oneOf(['done', 'process', 'error', 'success']), icon: prop_types_1.default.string, dot: prop_types_1.default.node, time: prop_types_1.default.node, title: prop_types_1.default.node, timeLeft: prop_types_1.default.node, content: prop_types_1.default.node, toggleFold: prop_types_1.default.func, className: prop_types_1.default.string, locale: prop_types_1.default.object, animation: prop_types_1.default.bool });
    TimelineItem.defaultProps = {
        prefix: 'next-',
        state: 'done',
        toggleFold: function () { },
        animation: true,
    };
    return TimelineItem;
}(react_1.Component));
exports.default = config_provider_1.default.config(TimelineItem, {});

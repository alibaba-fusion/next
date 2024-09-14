"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var resize_observer_polyfill_1 = tslib_1.__importDefault(require("resize-observer-polyfill"));
var util_1 = require("../util");
var position_1 = tslib_1.__importDefault(require("./utils/position"));
var find_node_1 = tslib_1.__importDefault(require("./utils/find-node"));
var log_1 = require("../util/log");
var noop = util_1.func.noop, bindCtx = util_1.func.bindCtx;
var getStyle = util_1.dom.getStyle;
var place = position_1.default.place;
// Follow react NESTED_UPDATE_LIMIT = 50
var MAX_UPDATE_COUNT = 50;
var Position = /** @class */ (function (_super) {
    tslib_1.__extends(Position, _super);
    function Position(props) {
        var _this = _super.call(this, props) || this;
        _this.updateCount = 0;
        _this.observe = function () {
            var contentNode = _this.getContentNode();
            contentNode && _this.resizeObserver.observe(contentNode);
        };
        _this.unobserve = function () {
            _this.resizeObserver.disconnect();
        };
        _this.shouldIgnorePosition = function () {
            var node = _this.getContentNode();
            if (typeof window === 'undefined') {
                return true;
            }
            if (!node) {
                return true;
            }
            // 从文档中移除
            if (!node.parentNode) {
                return true;
            }
            // 元素隐藏
            var _a = getComputedStyle(node), position = _a.position, display = _a.display, visibility = _a.visibility;
            if (!node.offsetParent && position !== 'fixed') {
                return true;
            }
            // Firefox offsetParent 会返回 body，这里兼容处理
            if (display === 'none' || visibility === 'hidden') {
                return true;
            }
            // 兜底处理，同步进程里连续更新多次，强制中断
            _this.updateCount++;
            Promise.resolve().then(function () {
                _this.updateCount = 0;
            });
            if (_this.updateCount > MAX_UPDATE_COUNT - 10) {
                (0, log_1.warning)('Over maximum times to adjust position at one task, it is recommended to use v2.');
                return true;
            }
            return false;
        };
        bindCtx(_this, ['handleResize']);
        _this.resizeObserver = new resize_observer_polyfill_1.default(_this.handleResize);
        return _this;
    }
    Position.prototype.componentDidMount = function () {
        this.setPosition();
        if (this.props.needListenResize) {
            if (typeof window !== 'undefined') {
                util_1.events.on(window, 'resize', this.handleResize);
            }
            this.observe();
        }
    };
    Position.prototype.componentDidUpdate = function (prevProps) {
        var props = this.props;
        if (('align' in props && props.align !== prevProps.align) || props.shouldUpdatePosition) {
            this.shouldUpdatePosition = true;
        }
        if (this.shouldUpdatePosition) {
            clearTimeout(this.resizeTimeout);
            this.setPosition();
            this.shouldUpdatePosition = false;
        }
    };
    Position.prototype.componentWillUnmount = function () {
        if (this.props.needListenResize) {
            util_1.events.off(window, 'resize', this.handleResize);
            this.unobserve();
        }
        clearTimeout(this.resizeTimeout);
    };
    Position.prototype.setPosition = function () {
        var _a = this.props, align = _a.align, offset = _a.offset, beforePosition = _a.beforePosition, onPosition = _a.onPosition, needAdjust = _a.needAdjust, container = _a.container, rtl = _a.rtl, pinFollowBaseElementWhenFixed = _a.pinFollowBaseElementWhenFixed, autoFit = _a.autoFit;
        if (this.shouldIgnorePosition()) {
            return;
        }
        beforePosition();
        var contentNode = this.getContentNode();
        var targetNode = this.getTargetNode();
        if (contentNode && targetNode) {
            var resultAlign = place({
                pinElement: contentNode,
                baseElement: targetNode,
                pinFollowBaseElementWhenFixed: pinFollowBaseElementWhenFixed,
                align: align,
                offset: offset,
                autoFit: autoFit,
                container: container,
                needAdjust: needAdjust,
                isRtl: rtl,
            });
            var top_1 = getStyle(contentNode, 'top');
            var left = getStyle(contentNode, 'left');
            onPosition({
                align: resultAlign.split(' '),
                top: top_1,
                left: left,
            }, contentNode);
        }
    };
    Position.prototype.getContentNode = function () {
        try {
            return (0, react_dom_1.findDOMNode)(this);
        }
        catch (err) {
            return null;
        }
    };
    Position.prototype.getTargetNode = function () {
        var target = this.props.target;
        return target === position_1.default.VIEWPORT ? position_1.default.VIEWPORT : (0, find_node_1.default)(target, this.props);
    };
    Position.prototype.handleResize = function () {
        var _this = this;
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(function () {
            _this.setPosition();
        }, 200);
    };
    Position.prototype.render = function () {
        return react_1.Children.only(this.props.children);
    };
    Position.displayName = 'Position';
    Position.VIEWPORT = position_1.default.VIEWPORT;
    Position.propTypes = {
        children: prop_types_1.default.node,
        target: prop_types_1.default.any,
        container: prop_types_1.default.any,
        align: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
        offset: prop_types_1.default.array,
        beforePosition: prop_types_1.default.func,
        onPosition: prop_types_1.default.func,
        needAdjust: prop_types_1.default.bool,
        autoFit: prop_types_1.default.bool,
        needListenResize: prop_types_1.default.bool,
        shouldUpdatePosition: prop_types_1.default.bool,
        rtl: prop_types_1.default.bool,
        pinFollowBaseElementWhenFixed: prop_types_1.default.bool,
    };
    Position.defaultProps = {
        align: 'tl bl',
        offset: [0, 0],
        beforePosition: noop,
        onPosition: noop,
        needAdjust: true,
        autoFit: false,
        needListenResize: true,
        shouldUpdatePosition: false,
        rtl: false,
    };
    return Position;
}(react_1.Component));
exports.default = Position;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var resize_observer_polyfill_1 = tslib_1.__importDefault(require("resize-observer-polyfill"));
var icon_1 = tslib_1.__importDefault(require("../../icon"));
var progress_1 = tslib_1.__importDefault(require("../../progress"));
var config_provider_1 = tslib_1.__importDefault(require("../../config-provider"));
var util_1 = require("../../util");
var getWidth = function (el) { return util_1.dom.getStyle(el, 'width'); };
var getHeight = function (el) { return util_1.dom.getStyle(el, 'height'); };
/** Step.Item */
var StepItem = /** @class */ (function (_super) {
    tslib_1.__extends(StepItem, _super);
    function StepItem(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function () {
            var _a = _this.props, index = _a.index, disabled = _a.disabled, readOnly = _a.readOnly, animation = _a.animation;
            if (disabled || readOnly) {
                return false;
            }
            if (animation && _this.stepNode) {
                util_1.dom.hasClass(_this.stepNode, 'clicked')
                    ? util_1.dom.removeClass(_this.stepNode, 'clicked')
                    : util_1.dom.addClass(_this.stepNode, 'clicked');
            }
            _this.props.onClick(index);
        };
        _this.removeClickedCls = _this.removeClickedCls.bind(_this);
        _this._refHandlerCreator = _this._refHandlerCreator.bind(_this);
        _this.resize = _this.resize.bind(_this);
        _this.ro = new resize_observer_polyfill_1.default(function () {
            var _a = _this.props, shape = _a.shape, direction = _a.direction, onResize = _a.onResize;
            if (!_this.body || shape === 'arrow') {
                return;
            }
            if (direction === 'ver') {
                _this.resize();
            }
            else {
                onResize && onResize();
            }
        });
        return _this;
    }
    StepItem.prototype.componentDidMount = function () {
        var _a = this.props, shape = _a.shape, direction = _a.direction, labelPlacement = _a.labelPlacement, index = _a.index, total = _a.total, stretch = _a.stretch;
        this.body && this.ro.observe(react_dom_1.default.findDOMNode(this.body));
        if (shape === 'arrow') {
            return;
        }
        if (direction === 'ver') {
            this.resize();
            this.forceUpdate(); // 解决 Step 嵌套的情况下，嵌套节点宽度为 0 的问题
            this.eventHandler = util_1.events.on(window, 'resize', this.resize); // 调整垂直 Step
        }
        else if (direction === 'hoz' && labelPlacement === 'hoz' && index !== total - 1) {
            // 调整横向 Content
            this.adjustTail();
        }
        if (stretch && direction === 'hoz') {
            this.adjustItemWidth();
        }
    };
    StepItem.prototype.componentDidUpdate = function () {
        var _a;
        var _this = this;
        var _b = this.props, shape = _b.shape, direction = _b.direction, labelPlacement = _b.labelPlacement, index = _b.index, total = _b.total, rtl = _b.rtl, stretch = _b.stretch;
        if (shape === 'arrow') {
            return;
        }
        var resetTailStyle = function () {
            util_1.dom.setStyle(_this.tail, {
                width: '',
                top: '',
                height: '',
            });
        };
        if (direction === 'ver') {
            this.resize();
        }
        else if (direction === 'hoz') {
            var pos = rtl ? 'right' : 'left';
            util_1.dom.setStyle(this.body, (_a = {
                    width: ''
                },
                _a[pos] = '',
                _a));
            if (shape === 'circle' && labelPlacement === 'hoz' && index !== total - 1) {
                // 调整横向 Content
                this.adjustTail();
            }
            else {
                resetTailStyle();
            }
            if (stretch) {
                this.adjustItemWidth();
            }
        }
        else if (index !== total - 1) {
            resetTailStyle();
        }
    };
    StepItem.prototype.componentWillUnmount = function () {
        this.eventHandler && this.eventHandler.off();
    };
    StepItem.prototype.adjustItemWidth = function () {
        var _a = this.props, index = _a.index, total = _a.total, labelPlacement = _a.labelPlacement;
        var lastNodeWidth = labelPlacement === 'hoz'
            ? this.container.offsetWidth + this.body.offsetWidth
            : this.title.offsetWidth;
        var width = total - 1 !== index ? "calc((100% - ".concat(lastNodeWidth, "px)/").concat(total - 1, ")") : 'auto';
        util_1.dom.setStyle(this.step, {
            width: width,
        });
    };
    StepItem.prototype.adjustTail = function () {
        var width = this.container.offsetWidth + this.title.offsetWidth;
        util_1.dom.setStyle(this.tail, {
            width: "calc(100% - ".concat(width, "px)"),
            top: "".concat(getHeight(this.container) / 2, "px"),
        });
    };
    StepItem.prototype.resize = function () {
        var direction = this.props.direction;
        if (direction === 'ver') {
            var stepWidth = getWidth(this.step);
            var stepHozWhitespace = util_1.dom.getNodeHozWhitespace(this.step.parentNode);
            var stepBodyHozWhitespace = util_1.dom.getNodeHozWhitespace(this.body);
            var rtl = this.props.rtl;
            rtl
                ? (this.body.style.right = "".concat(stepWidth, "px"))
                : (this.body.style.left = "".concat(stepWidth, "px"));
            util_1.dom.setStyle(this.body, {
                width: getWidth(this.step.parentNode.parentNode) -
                    stepWidth -
                    stepHozWhitespace -
                    stepBodyHozWhitespace,
            });
            util_1.dom.setStyle(this.tail, 'height', getHeight(this.body) - getHeight(this.container));
        }
    };
    StepItem.prototype._getNode = function () {
        var _a = this.props, prefix = _a.prefix, index = _a.index, status = _a.status, icon = _a.icon, shape = _a.shape, percent = _a.percent, itemRender = _a.itemRender;
        var nodeElement = icon;
        if (shape === 'dot') {
            nodeElement = icon ? (react_1.default.createElement(icon_1.default, { type: icon })) : (react_1.default.createElement("div", { className: "".concat(prefix, "step-item-node-dot") }, " "));
        }
        else if (shape === 'circle' && percent) {
            nodeElement = (react_1.default.createElement(progress_1.default, { shape: "circle", percent: percent, className: "".concat(prefix, "step-item-progress") }));
        }
        else if (shape === 'circle' && !!itemRender && typeof itemRender === 'function') {
            nodeElement = null; // 如果是需要自定义节点，则不处理，返回空
        }
        else {
            nodeElement = (react_1.default.createElement("div", { className: "".concat(prefix, "step-item-node-circle") }, icon ? react_1.default.createElement(icon_1.default, { type: icon }) : this._itemRender(index, status)));
        }
        return nodeElement;
    };
    StepItem.prototype.getNode = function (args) {
        var _a = this.props, prefix = _a.prefix, itemRender = _a.itemRender, index = _a.index, status = _a.status, title = _a.title, content = _a.content, shape = _a.shape;
        var others = args.others, stepCls = args.stepCls, overlayCls = args.overlayCls;
        var nodeElement = this._getNode();
        var containerStyle = (shape === 'dot' && { fontSize: 'initial' }) || {};
        var finalNodeElement = (react_1.default.createElement("div", { className: "".concat(prefix, "step-item-container"), style: containerStyle, ref: this._refHandlerCreator('container') },
            react_1.default.createElement("div", { className: "".concat(prefix, "step-item-node-placeholder"), onClick: this.onClick },
                react_1.default.createElement("div", { className: "".concat(prefix, "step-item-node"), ref: this._refHandlerCreator('stepNode'), onTransitionEnd: this.removeClickedCls }, nodeElement))));
        if (!nodeElement) {
            // 需要自定义子节点
            finalNodeElement = (react_1.default.createElement("div", { className: "".concat(prefix, "step-item-container"), style: containerStyle, ref: this._refHandlerCreator('container') },
                react_1.default.createElement("div", { className: "".concat(prefix, "step-item-node-placeholder"), onClick: this.onClick }, itemRender(index, status, title, content))));
        }
        if (shape !== 'arrow') {
            delete others.tabIndex;
            delete others['aria-current'];
        }
        return (react_1.default.createElement("li", tslib_1.__assign({}, others, { style: this.getStyle(), className: stepCls, ref: this._refHandlerCreator('step') }),
            finalNodeElement,
            react_1.default.createElement("div", { className: "".concat(prefix, "step-item-body"), ref: this._refHandlerCreator('body'), tabIndex: this.props.tabIndex, "aria-current": this.props['aria-current'] },
                react_1.default.createElement("div", { className: "".concat(prefix, "step-item-title"), ref: this._refHandlerCreator('title') }, title),
                react_1.default.createElement("div", { className: "".concat(prefix, "step-item-content") }, content)),
            react_1.default.createElement("div", { className: "".concat(prefix, "step-item-tail"), ref: this._refHandlerCreator('tail') },
                react_1.default.createElement("div", { className: "".concat(prefix, "step-item-tail-underlay") },
                    react_1.default.createElement("div", { className: "".concat(prefix, "step-item-tail-overlay"), style: overlayCls })))));
    };
    StepItem.prototype.getStyle = function () {
        var _a = this.props, parentWidth = _a.parentWidth, parentHeight = _a.parentHeight, direction = _a.direction, total = _a.total, index = _a.index, shape = _a.shape;
        var width = 'auto';
        if (Number(parentWidth) && Number(parentHeight)) {
            if (!util_1.support.flex && shape === 'arrow') {
                width = Math.floor(parentWidth / total - parentHeight / 2 - parentHeight / 8);
            }
        }
        if (shape !== 'arrow' && direction === 'hoz') {
            width = total - 1 !== index ? "".concat(Math.floor(100 / total), "%") : 'auto';
        }
        return {
            width: width,
        };
    };
    StepItem.prototype.removeClickedCls = function () {
        var animation = this.props.animation;
        if (animation && this.stepNode && util_1.dom.hasClass(this.stepNode, 'clicked')) {
            util_1.dom.removeClass(this.stepNode, 'clicked');
        }
    };
    // 节点的渲染方法
    StepItem.prototype._itemRender = function (index, status) {
        var itemRender = this.props.itemRender;
        if (itemRender) {
            return itemRender(index, status);
        }
        return status === 'finish' ? react_1.default.createElement(icon_1.default, { type: "select" }) : index + 1;
    };
    StepItem.prototype._refHandlerCreator = function (refName) {
        var _this = this;
        return function (ref) {
            _this[refName] = ref;
        };
    };
    StepItem.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, status = _b.status, title = _b.title, index = _b.index, total = _b.total, shape = _b.shape, disabled = _b.disabled, readOnly = _b.readOnly;
        var others = util_1.obj.pickOthers(StepItem.propTypes, this.props);
        var stepCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "step-item")] = true,
            _a["".concat(prefix, "step-item-").concat(status)] = status,
            _a["".concat(prefix, "step-item-first")] = index === 0,
            _a["".concat(prefix, "step-item-last")] = index === total - 1,
            _a["".concat(prefix, "step-item-disabled")] = disabled,
            _a["".concat(prefix, "step-item-read-only")] = readOnly,
            _a[className] = className,
            _a));
        var overlayCls = status === 'finish' ? { width: '100%' } : null;
        var arrowElement = (react_1.default.createElement("li", tslib_1.__assign({}, others, { style: this.getStyle(), className: stepCls, onClick: this.onClick }),
            react_1.default.createElement("div", { className: "".concat(prefix, "step-item-container") },
                react_1.default.createElement("div", { className: "".concat(prefix, "step-item-title") }, title))));
        var otherElement = this.getNode({ others: others, stepCls: stepCls, overlayCls: overlayCls });
        return shape === 'arrow' ? arrowElement : otherElement;
    };
    StepItem.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, status: prop_types_1.default.oneOf(['wait', 'process', 'finish']), title: prop_types_1.default.node, direction: prop_types_1.default.oneOf(['hoz', 'ver']), labelPlacement: prop_types_1.default.oneOf(['hoz', 'ver']), shape: prop_types_1.default.oneOf(['circle', 'arrow', 'dot']), icon: prop_types_1.default.string, content: prop_types_1.default.node, itemRender: prop_types_1.default.func, percent: prop_types_1.default.number, index: prop_types_1.default.number, total: prop_types_1.default.number, animation: prop_types_1.default.bool, disabled: prop_types_1.default.bool, parentWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), parentHeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]), onClick: prop_types_1.default.func, className: prop_types_1.default.string, readOnly: prop_types_1.default.bool, onResize: prop_types_1.default.func, stretch: prop_types_1.default.bool });
    StepItem.defaultProps = {
        shape: 'circle',
        index: 0,
        total: 1,
        onClick: function () { },
        stretch: false,
    };
    return StepItem;
}(react_1.Component));
exports.default = config_provider_1.default.config(StepItem, {
    transform: function (props, deprecated) {
        var _a = props, direction = _a.direction, labelPlacement = _a.labelPlacement;
        if (direction === 'vertical') {
            deprecated('direction="vertical"', 'direction="ver"', 'Step.Item');
            props = tslib_1.__assign(tslib_1.__assign({}, props), { direction: 'ver' });
        }
        if (direction === 'horizontal') {
            deprecated('direction="horizontal"', 'direction="hoz"', 'Step.Item');
            props = tslib_1.__assign(tslib_1.__assign({}, props), { direction: 'hoz' });
        }
        if (labelPlacement === 'vertical') {
            deprecated('labelPlacement="vertical"', 'labelPlacement="ver"', 'Step.Item');
            props = tslib_1.__assign(tslib_1.__assign({}, props), { labelPlacement: 'ver' });
        }
        if (labelPlacement === 'horizontal') {
            deprecated('labelPlacement="horizontal"', 'labelPlacement="hoz"', 'Step.Item');
            props = tslib_1.__assign(tslib_1.__assign({}, props), { labelPlacement: 'hoz' });
        }
        return props;
    },
});

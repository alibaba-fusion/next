import { __assign, __extends } from "tslib";
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';
import Icon from '../../icon';
import Progress from '../../progress';
import ConfigProvider from '../../config-provider';
import { support, events, dom, obj } from '../../util';
var getWidth = function (el) { return dom.getStyle(el, 'width'); };
var getHeight = function (el) { return dom.getStyle(el, 'height'); };
/** Step.Item */
var StepItem = /** @class */ (function (_super) {
    __extends(StepItem, _super);
    function StepItem(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function () {
            var _a = _this.props, index = _a.index, disabled = _a.disabled, readOnly = _a.readOnly, animation = _a.animation;
            if (disabled || readOnly) {
                return false;
            }
            if (animation && _this.stepNode) {
                dom.hasClass(_this.stepNode, 'clicked')
                    ? dom.removeClass(_this.stepNode, 'clicked')
                    : dom.addClass(_this.stepNode, 'clicked');
            }
            _this.props.onClick(index);
        };
        _this.removeClickedCls = _this.removeClickedCls.bind(_this);
        _this._refHandlerCreator = _this._refHandlerCreator.bind(_this);
        _this.resize = _this.resize.bind(_this);
        _this.ro = new ResizeObserver(function () {
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
        this.body && this.ro.observe(ReactDOM.findDOMNode(this.body));
        if (shape === 'arrow') {
            return;
        }
        if (direction === 'ver') {
            this.resize();
            this.forceUpdate(); // 解决 Step 嵌套的情况下，嵌套节点宽度为 0 的问题
            this.eventHandler = events.on(window, 'resize', this.resize); // 调整垂直 Step
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
            dom.setStyle(_this.tail, {
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
            dom.setStyle(this.body, (_a = {
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
        dom.setStyle(this.step, {
            width: width,
        });
    };
    StepItem.prototype.adjustTail = function () {
        var width = this.container.offsetWidth + this.title.offsetWidth;
        dom.setStyle(this.tail, {
            width: "calc(100% - ".concat(width, "px)"),
            top: "".concat(getHeight(this.container) / 2, "px"),
        });
    };
    StepItem.prototype.resize = function () {
        var direction = this.props.direction;
        if (direction === 'ver') {
            var stepWidth = getWidth(this.step);
            var stepHozWhitespace = dom.getNodeHozWhitespace(this.step.parentNode);
            var stepBodyHozWhitespace = dom.getNodeHozWhitespace(this.body);
            var rtl = this.props.rtl;
            rtl
                ? (this.body.style.right = "".concat(stepWidth, "px"))
                : (this.body.style.left = "".concat(stepWidth, "px"));
            dom.setStyle(this.body, {
                width: getWidth(this.step.parentNode.parentNode) -
                    stepWidth -
                    stepHozWhitespace -
                    stepBodyHozWhitespace,
            });
            dom.setStyle(this.tail, 'height', getHeight(this.body) - getHeight(this.container));
        }
    };
    StepItem.prototype._getNode = function () {
        var _a = this.props, prefix = _a.prefix, index = _a.index, status = _a.status, icon = _a.icon, shape = _a.shape, percent = _a.percent, itemRender = _a.itemRender;
        var nodeElement = icon;
        if (shape === 'dot') {
            nodeElement = icon ? (React.createElement(Icon, { type: icon })) : (React.createElement("div", { className: "".concat(prefix, "step-item-node-dot") }, " "));
        }
        else if (shape === 'circle' && percent) {
            nodeElement = (React.createElement(Progress, { shape: "circle", percent: percent, className: "".concat(prefix, "step-item-progress") }));
        }
        else if (shape === 'circle' && !!itemRender && typeof itemRender === 'function') {
            nodeElement = null; // 如果是需要自定义节点，则不处理，返回空
        }
        else {
            nodeElement = (React.createElement("div", { className: "".concat(prefix, "step-item-node-circle") }, icon ? React.createElement(Icon, { type: icon }) : this._itemRender(index, status)));
        }
        return nodeElement;
    };
    StepItem.prototype.getNode = function (args) {
        var _a = this.props, prefix = _a.prefix, itemRender = _a.itemRender, index = _a.index, status = _a.status, title = _a.title, content = _a.content, shape = _a.shape;
        var others = args.others, stepCls = args.stepCls, overlayCls = args.overlayCls;
        var nodeElement = this._getNode();
        var containerStyle = (shape === 'dot' && { fontSize: 'initial' }) || {};
        var finalNodeElement = (React.createElement("div", { className: "".concat(prefix, "step-item-container"), style: containerStyle, ref: this._refHandlerCreator('container') },
            React.createElement("div", { className: "".concat(prefix, "step-item-node-placeholder"), onClick: this.onClick },
                React.createElement("div", { className: "".concat(prefix, "step-item-node"), ref: this._refHandlerCreator('stepNode'), onTransitionEnd: this.removeClickedCls }, nodeElement))));
        if (!nodeElement) {
            // 需要自定义子节点
            finalNodeElement = (React.createElement("div", { className: "".concat(prefix, "step-item-container"), style: containerStyle, ref: this._refHandlerCreator('container') },
                React.createElement("div", { className: "".concat(prefix, "step-item-node-placeholder"), onClick: this.onClick }, itemRender(index, status, title, content))));
        }
        if (shape !== 'arrow') {
            delete others.tabIndex;
            delete others['aria-current'];
        }
        return (React.createElement("li", __assign({}, others, { style: this.getStyle(), className: stepCls, ref: this._refHandlerCreator('step') }),
            finalNodeElement,
            React.createElement("div", { className: "".concat(prefix, "step-item-body"), ref: this._refHandlerCreator('body'), tabIndex: this.props.tabIndex, "aria-current": this.props['aria-current'] },
                React.createElement("div", { className: "".concat(prefix, "step-item-title"), ref: this._refHandlerCreator('title') }, title),
                React.createElement("div", { className: "".concat(prefix, "step-item-content") }, content)),
            React.createElement("div", { className: "".concat(prefix, "step-item-tail"), ref: this._refHandlerCreator('tail') },
                React.createElement("div", { className: "".concat(prefix, "step-item-tail-underlay") },
                    React.createElement("div", { className: "".concat(prefix, "step-item-tail-overlay"), style: overlayCls })))));
    };
    StepItem.prototype.getStyle = function () {
        var _a = this.props, parentWidth = _a.parentWidth, parentHeight = _a.parentHeight, direction = _a.direction, total = _a.total, index = _a.index, shape = _a.shape;
        var width = 'auto';
        if (Number(parentWidth) && Number(parentHeight)) {
            if (!support.flex && shape === 'arrow') {
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
        if (animation && this.stepNode && dom.hasClass(this.stepNode, 'clicked')) {
            dom.removeClass(this.stepNode, 'clicked');
        }
    };
    // 节点的渲染方法
    StepItem.prototype._itemRender = function (index, status) {
        var itemRender = this.props.itemRender;
        if (itemRender) {
            return itemRender(index, status);
        }
        return status === 'finish' ? React.createElement(Icon, { type: "select" }) : index + 1;
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
        var others = obj.pickOthers(StepItem.propTypes, this.props);
        var stepCls = classNames((_a = {},
            _a["".concat(prefix, "step-item")] = true,
            _a["".concat(prefix, "step-item-").concat(status)] = status,
            _a["".concat(prefix, "step-item-first")] = index === 0,
            _a["".concat(prefix, "step-item-last")] = index === total - 1,
            _a["".concat(prefix, "step-item-disabled")] = disabled,
            _a["".concat(prefix, "step-item-read-only")] = readOnly,
            _a[className] = className,
            _a));
        var overlayCls = status === 'finish' ? { width: '100%' } : null;
        var arrowElement = (React.createElement("li", __assign({}, others, { style: this.getStyle(), className: stepCls, onClick: this.onClick }),
            React.createElement("div", { className: "".concat(prefix, "step-item-container") },
                React.createElement("div", { className: "".concat(prefix, "step-item-title") }, title))));
        var otherElement = this.getNode({ others: others, stepCls: stepCls, overlayCls: overlayCls });
        return shape === 'arrow' ? arrowElement : otherElement;
    };
    StepItem.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, status: PropTypes.oneOf(['wait', 'process', 'finish']), title: PropTypes.node, direction: PropTypes.oneOf(['hoz', 'ver']), labelPlacement: PropTypes.oneOf(['hoz', 'ver']), shape: PropTypes.oneOf(['circle', 'arrow', 'dot']), icon: PropTypes.string, content: PropTypes.node, itemRender: PropTypes.func, percent: PropTypes.number, index: PropTypes.number, total: PropTypes.number, animation: PropTypes.bool, disabled: PropTypes.bool, parentWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), parentHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), onClick: PropTypes.func, className: PropTypes.string, readOnly: PropTypes.bool, onResize: PropTypes.func, stretch: PropTypes.bool });
    StepItem.defaultProps = {
        shape: 'circle',
        index: 0,
        total: 1,
        onClick: function () { },
        stretch: false,
    };
    return StepItem;
}(Component));
export default ConfigProvider.config(StepItem, {
    transform: function (props, deprecated) {
        var _a = props, direction = _a.direction, labelPlacement = _a.labelPlacement;
        if (direction === 'vertical') {
            deprecated('direction="vertical"', 'direction="ver"', 'Step.Item');
            props = __assign(__assign({}, props), { direction: 'ver' });
        }
        if (direction === 'horizontal') {
            deprecated('direction="horizontal"', 'direction="hoz"', 'Step.Item');
            props = __assign(__assign({}, props), { direction: 'hoz' });
        }
        if (labelPlacement === 'vertical') {
            deprecated('labelPlacement="vertical"', 'labelPlacement="ver"', 'Step.Item');
            props = __assign(__assign({}, props), { labelPlacement: 'ver' });
        }
        if (labelPlacement === 'horizontal') {
            deprecated('labelPlacement="horizontal"', 'labelPlacement="hoz"', 'Step.Item');
            props = __assign(__assign({}, props), { labelPlacement: 'hoz' });
        }
        return props;
    },
});

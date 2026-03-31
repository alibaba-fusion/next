import { __assign, __extends } from "tslib";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component, Children } from 'react';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../../config-provider';
import { support, events, dom, obj } from '../../util';
var getHeight = function (el) { return dom.getStyle(el, 'height'); };
var setHeight = function (el, height) { return dom.setStyle(el, 'height', height); };
/** Step */
var Step = /** @class */ (function (_super) {
    __extends(Step, _super);
    function Step(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.step = null;
        _this._stepRefHandler = function (ref) {
            _this.step = ref;
        };
        _this.state = {
            parentWidth: 'auto',
            parentHeight: 'auto',
            currentfocus: 0,
        };
        _this.resize = _this.resize.bind(_this);
        return _this;
    }
    Step.getDerivedStateFromProps = function (newProps) {
        if ('current' in newProps) {
            return {
                current: newProps.current,
            };
        }
        return null;
    };
    Step.prototype.componentDidMount = function () {
        if (!support.flex) {
            this.resize();
            events.on(window, 'resize', this.resize);
        }
        this.adjustHeight();
    };
    Step.prototype.componentDidUpdate = function () {
        this.adjustHeight();
    };
    Step.prototype.componentWillUnmount = function () {
        if (!support.flex) {
            events.off(window, 'resize', this.resize);
        }
    };
    Step.prototype.adjustHeight = function () {
        var _a = this.props, shape = _a.shape, direction = _a.direction, prefix = _a.prefix, labelPlacement = _a.labelPlacement;
        var step = ReactDOM.findDOMNode(this.step);
        if (shape !== 'arrow' && direction === 'hoz' && labelPlacement === 'ver') {
            var height = Array.prototype.slice.call(step.getElementsByClassName("".concat(prefix, "step-item"))).reduce(function (ret, re) {
                var itemHeight = getHeight(re.getElementsByClassName("".concat(prefix, "step-item-container"))[0]) +
                    getHeight(re.getElementsByClassName("".concat(prefix, "step-item-body"))[0]);
                return Math.max(itemHeight, ret);
            }, 0);
            setHeight(step, height);
        }
        else {
            setHeight(step, '');
        }
    };
    Step.prototype.resize = function () {
        if (this.step) {
            this.setState({
                parentWidth: this.step.offsetWidth || 0,
                parentHeight: this.step.offsetHeight || 0,
            });
        }
    };
    Step.prototype._getValidChildren = function (children) {
        var result = [];
        React.Children.forEach(children, function (child) {
            if (React.isValidElement(child)) {
                result.push(child);
            }
        });
        return result;
    };
    Step.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, className = _b.className, current = _b.current, labelPlacement = _b.labelPlacement, shape = _b.shape, readOnly = _b.readOnly, animation = _b.animation, itemRender = _b.itemRender, rtl = _b.rtl, stretch = _b.stretch;
        var others = obj.pickOthers(Step.propTypes, this.props);
        var _c = this.props, prefix = _c.prefix, direction = _c.direction;
        prefix = this.context.prefix || prefix;
        var _d = this.state, parentWidth = _d.parentWidth, parentHeight = _d.parentHeight;
        // type 不同对应的 direction 不同
        direction = shape === 'arrow' ? 'hoz' : direction;
        // children 去除 null
        var children = this._getValidChildren(this.props.children);
        // 修改子节点属性
        var cloneChildren = Children.map(children, function (child, index) {
            var status = index < current ? 'finish' : index === current ? 'process' : 'wait';
            return React.cloneElement(child, {
                prefix: prefix,
                key: index,
                index: index,
                total: children.length,
                status: child.props.status || status,
                shape: shape,
                direction: direction,
                labelPlacement: labelPlacement,
                parentWidth: parentWidth,
                parentHeight: parentHeight,
                readOnly: readOnly,
                animation: animation,
                tabIndex: 0,
                'aria-current': status === 'process' ? 'step' : null,
                itemRender: child.props.itemRender ? child.props.itemRender : itemRender, // 优先使用Item的itemRender
                onResize: function () {
                    _this.step && _this.adjustHeight();
                },
                stretch: stretch,
            });
        });
        var _direction = direction === 'ver' ? 'vertical' : 'horizontal';
        var _labelPlacement = labelPlacement === 'ver' ? 'vertical' : 'horizontal';
        var stepCls = classNames((_a = {},
            _a["".concat(prefix, "step")] = true,
            _a["".concat(prefix, "step-").concat(shape)] = shape,
            _a["".concat(prefix, "step-").concat(_direction)] = _direction,
            _a["".concat(prefix, "step-label-").concat(_labelPlacement)] = _labelPlacement,
            _a[className] = className,
            _a));
        if (rtl) {
            others.dir = 'rtl';
        }
        // others.onKeyDown = makeChain(this.handleKeyDown, others.onKeyDown);
        return (React.createElement("ol", __assign({}, others, { className: stepCls, ref: this._stepRefHandler }), cloneChildren));
    };
    Step.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, current: PropTypes.number, direction: PropTypes.oneOf(['hoz', 'ver']), labelPlacement: PropTypes.oneOf(['hoz', 'ver']), shape: PropTypes.oneOf(['circle', 'arrow', 'dot']), readOnly: PropTypes.bool, animation: PropTypes.bool, className: PropTypes.string, itemRender: PropTypes.func, stretch: PropTypes.bool });
    Step.defaultProps = {
        prefix: 'next-',
        current: 0,
        direction: 'hoz',
        labelPlacement: 'ver',
        shape: 'circle',
        animation: true,
        itemRender: null,
        stretch: false,
    };
    Step.contextTypes = {
        prefix: PropTypes.string,
    };
    return Step;
}(Component));
export default polyfill(Step);

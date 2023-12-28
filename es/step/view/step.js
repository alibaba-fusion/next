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
    };
    Step.prototype.componentDidMount = function () {
        /* istanbul ignore if */
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
        /* istanbul ignore if */
        if (!support.flex) {
            events.off(window, 'resize', this.resize);
        }
    };
    Step.prototype.adjustHeight = function () {
        var _a = this.props, shape = _a.shape, direction = _a.direction, prefix = _a.prefix, labelPlacement = _a.labelPlacement;
        var step = ReactDOM.findDOMNode(this.step);
        if (shape !== 'arrow' &&
            (direction === 'horizontal' || direction === 'hoz') &&
            (labelPlacement === 'vertical' || labelPlacement === 'ver')) {
            var height = Array.prototype.slice
                .call(step.getElementsByClassName("".concat(prefix, "step-item")))
                .reduce(function (ret, re) {
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
    // set dir key for aria handle
    // handleKeyDown = e => {
    //     const { shape, children } = this.props;
    //     const { length: max } = children;
    //     let { currentfocus } = this.state;
    //     const initPosition = currentfocus;
    //     switch (e.keyCode) {
    //         case KEYCODE.RIGHT:
    //         case KEYCODE.DOWN:
    //             currentfocus++;
    //             break;
    //         case KEYCODE.LEFT:
    //         case KEYCODE.UP:
    //             currentfocus--;
    //             break;
    //         default:
    //             break;
    //     }
    //     currentfocus =
    //         currentfocus >= max ? 0 : currentfocus < 0 ? max - 1 : currentfocus;
    //     this.setState({ currentfocus }, () => {
    //         const child = this.step.children[currentfocus];
    //         if (!child) return;
    //         const focusItem =
    //             shape === 'arrow'
    //                 ? child
    //                 : child.querySelector('.next-step-item-body');
    //         focusItem && focusItem.focus();
    //     });
    //     if (initPosition !== currentfocus) {
    //         e.preventDefault();
    //     }
    // };
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
        // eslint-disable-next-line
        var _b = this.props, className = _b.className, current = _b.current, labelPlacement = _b.labelPlacement, shape = _b.shape, readOnly = _b.readOnly, animation = _b.animation, itemRender = _b.itemRender, rtl = _b.rtl, stretch = _b.stretch;
        var others = obj.pickOthers(Step.propTypes, this.props);
        var _c = this.props, prefix = _c.prefix, direction = _c.direction, children = _c.children;
        prefix = this.context.prefix || prefix;
        var _d = this.state, parentWidth = _d.parentWidth, parentHeight = _d.parentHeight;
        // type不同对应的direction不同
        direction = shape === 'arrow' ? 'hoz' : direction;
        // children去除null
        children = this._getValidChildren(children);
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
                // tabIndex: this.state.currentfocus === index ? '0' : '-1',
                'aria-current': status === 'process' ? 'step' : null,
                itemRender: child.props.itemRender ? child.props.itemRender : itemRender, // 优先使用Item的itemRender
                onResize: function () {
                    _this.step && _this.adjustHeight();
                },
                stretch: stretch,
            });
        });
        var _direction = direction === 'ver' || direction === 'vertical' ? 'vertical' : 'horizontal';
        var _labelPlacement = labelPlacement === 'ver' || labelPlacement === 'vertical' ? 'vertical' : 'horizontal';
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
    Step.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, 
        /**
         * 当前步骤
         */
        current: PropTypes.number, 
        /**
         * 展示方向
         */
        direction: PropTypes.oneOf(['hoz', 'ver']), 
        /**
         * 横向布局时( direction 为 hoz )的内容排列
         */
        labelPlacement: PropTypes.oneOf(['hoz', 'ver']), 
        /**
         * 类型
         */
        shape: PropTypes.oneOf(['circle', 'arrow', 'dot']), 
        /**
         * 是否只读模式
         */
        readOnly: PropTypes.bool, 
        /**
         * 是否开启动效
         */
        animation: PropTypes.bool, 
        /**
         * 自定义样式名
         */
        className: PropTypes.string, 
        /**
         * StepItem 的自定义渲染
         * @param {Number} index   节点索引
         * @param {String} status  节点状态
         * @returns {Node} 节点的渲染结果
         */
        itemRender: PropTypes.func, 
        /**
         * 宽度横向拉伸
         */
        stretch: PropTypes.bool });
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

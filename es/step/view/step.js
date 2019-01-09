import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component, Children } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { support, events, dom } from '../../util';

var getHeight = function getHeight(el) {
    return dom.getStyle(el, 'height');
};
var setHeight = function setHeight(el, height) {
    return dom.setStyle(el, 'height', height);
};

/** Step */
var Step = (_temp = _class = function (_Component) {
    _inherits(Step, _Component);

    function Step(props, context) {
        _classCallCheck(this, Step);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this._stepRefHandler = function (ref) {
            _this.step = ref;
        };

        _this.state = {
            parentWidth: 'auto',
            parentHeight: 'auto'
        };
        _this.resize = _this.resize.bind(_this);
        return _this;
    }

    Step.prototype.componentDidMount = function componentDidMount() {
        /* istanbul ignore if */
        if (!support.flex) {
            this.resize();
            events.on(window, 'resize', this.resize);
        }
        this.adjustHeight();
    };

    Step.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
        if ('current' in newProps) {
            this.setState({
                current: newProps.current
            });
        }
    };

    Step.prototype.componentDidUpdate = function componentDidUpdate() {
        this.adjustHeight();
    };

    Step.prototype.componentWillUnmount = function componentWillUnmount() {
        /* istanbul ignore if */
        if (!support.flex) {
            events.off(window, 'resize', this.resize);
        }
    };

    Step.prototype.adjustHeight = function adjustHeight() {
        var _props = this.props,
            shape = _props.shape,
            direction = _props.direction,
            prefix = _props.prefix,
            labelPlacement = _props.labelPlacement;

        if (shape !== 'arrow' && direction === 'horizontal' && labelPlacement === 'vertical') {
            var step = ReactDOM.findDOMNode(this.step);
            var height = Array.prototype.slice.call(step.getElementsByClassName(prefix + 'step-item')).reduce(function (ret, re) {
                var itemHeight = getHeight(re) + getHeight(re.getElementsByClassName(prefix + 'step-item-body')[0]);
                return Math.max(itemHeight, ret);
            }, 0);
            setHeight(step, height);
        }
    };

    Step.prototype.resize = function resize() {
        if (this.step) {
            this.setState({
                parentWidth: this.step.offsetWidth || 0,
                parentHeight: this.step.offsetHeight || 0
            });
        }
    };

    Step.prototype._getValidChildren = function _getValidChildren(children) {
        var result = [];
        React.Children.forEach(children, function (child) {
            if (React.isValidElement(child)) {
                result.push(child);
            }
        });
        return result;
    };

    Step.prototype.render = function render() {
        var _classNames;

        // eslint-disable-next-line
        var _props2 = this.props,
            prefix = _props2.prefix,
            locale = _props2.locale,
            className = _props2.className,
            current = _props2.current,
            direction = _props2.direction,
            labelPlacement = _props2.labelPlacement,
            shape = _props2.shape,
            children = _props2.children,
            readOnly = _props2.readOnly,
            animation = _props2.animation,
            itemRender = _props2.itemRender,
            rtl = _props2.rtl,
            others = _objectWithoutProperties(_props2, ['prefix', 'locale', 'className', 'current', 'direction', 'labelPlacement', 'shape', 'children', 'readOnly', 'animation', 'itemRender', 'rtl']);

        prefix = this.context.prefix || prefix;
        var _state = this.state,
            parentWidth = _state.parentWidth,
            parentHeight = _state.parentHeight;

        // type不同对应的direction不同

        direction = shape === 'arrow' ? 'horizontal' : direction;

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
                itemRender: child.props.itemRender ? child.props.itemRender : itemRender // 优先使用Item的itemRender
            });
        });

        var stepCls = classNames((_classNames = {}, _classNames[prefix + 'step'] = true, _classNames[prefix + 'step-' + shape] = shape, _classNames[prefix + 'step-' + direction] = direction, _classNames[prefix + 'step-label-' + labelPlacement] = labelPlacement, _classNames[className] = className, _classNames));

        if (rtl) {
            others.dir = 'rtl';
        }

        return React.createElement(
            'div',
            _extends({}, others, { className: stepCls, ref: this._stepRefHandler }),
            cloneChildren
        );
    };

    return Step;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    rtl: PropTypes.bool,
    /**
     * 当前步骤
     */
    current: PropTypes.number,
    /**
     * 展示方向
     */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    /**
     * 横向布局时的内容排列
     */
    labelPlacement: PropTypes.oneOf(['horizontal', 'vertical']),
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
    itemRender: PropTypes.func
}, _class.defaultProps = {
    prefix: 'next-',
    current: 0,
    direction: 'horizontal',
    labelPlacement: 'vertical',
    shape: 'circle',
    animation: true,
    itemRender: null
}, _class.contextTypes = {
    prefix: PropTypes.string
}, _temp);
Step.displayName = 'Step';
export { Step as default };
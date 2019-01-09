import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import { func, obj } from '../util';

var noop = func.noop,
    bindCtx = func.bindCtx;

// 评分组件的大小与icon的大小映射关系

var ICON_SIZE_MAP = {
    small: 'xs',
    medium: 'small',
    large: 'medium'
};

/** Rating */
var Rating = (_temp = _class = function (_Component) {
    _inherits(Rating, _Component);

    function Rating(props) {
        _classCallCheck(this, Rating);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            value: 'value' in props ? props.value : props.defaultValue,
            hoverValue: 0,
            iconSpace: 0,
            iconSize: 0,
            clicked: false // 标记组件是否被点击过
        };
        _this.timer = null;

        bindCtx(_this, ['handleClick', 'handleHover', 'handleLeave']);
        return _this;
    }

    Rating.prototype.componentDidMount = function componentDidMount() {
        this.getRenderResult();
    };

    Rating.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value || 0
            });
        }
    };

    Rating.prototype.componentWillUnmount = function componentWillUnmount() {
        this.clearTimer();
    };

    // 清除延时


    Rating.prototype.clearTimer = function clearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };

    Rating.prototype.getRenderResult = function getRenderResult() {
        var count = this.props.count;
        var _state = this.state,
            iconSpace = _state.iconSpace,
            iconSize = _state.iconSize;

        var icon = this.refs['rating-icon-0'];

        if (icon && this.underlayNode) {
            var newIconSize = icon.offsetWidth;
            var newIconSpace = (this.underlayNode.offsetWidth - count * newIconSize) / (count + 1);

            if (newIconSize !== iconSize || newIconSpace !== iconSpace) {
                this.setState({
                    iconSpace: newIconSpace,
                    iconSize: newIconSize
                });
            }
        }
    };

    Rating.prototype.getValue = function getValue(e) {
        // 如定位不准，优先纠正定位
        this.getRenderResult();

        var _props = this.props,
            allowHalf = _props.allowHalf,
            count = _props.count;
        var _state2 = this.state,
            iconSpace = _state2.iconSpace,
            iconSize = _state2.iconSize;


        var pos = e.pageX - this.underlayNode.getBoundingClientRect().left;
        var fullNum = Math.floor(pos / (iconSpace + iconSize));
        var surplusNum = (pos - fullNum * (iconSpace + iconSize)) / iconSize;
        var value = Number(fullNum) + Number(surplusNum.toFixed(1));

        if (value >= count) {
            value = count;
        } else if (allowHalf) {
            var floorValue = Math.floor(value);
            value = value - 0.5 >= floorValue ? floorValue + 1 : floorValue + 0.5;
        } else {
            value = Math.floor(value) + 1;
        }

        return value;
    };

    Rating.prototype.handleHover = function handleHover(e) {
        var _this2 = this;

        var value = this.getValue(e);
        var onHoverChange = this.props.onHoverChange;

        if (value !== this.state.hoverValue) {

            this.clearTimer();

            this.timer = setTimeout(function () {
                _this2.setState({ hoverValue: value }, function () {
                    onHoverChange(value);
                });
            }, 0);
        }
    };

    Rating.prototype.handleLeave = function handleLeave() {

        this.clearTimer();

        this.setState({
            hoverValue: 0
        });
    };

    Rating.prototype.handleClick = function handleClick(e) {
        var _this3 = this;

        var value = this.getValue(e);

        if (!('value' in this.props)) {
            this.setState({ value: value, clicked: true });
        }

        this.props.onChange(value);

        setTimeout(function () {
            _this3.setState({ clicked: false });
        }, 100);
    };

    Rating.prototype.currentValue = function currentValue(min, max, hoverValue, stateValue) {
        var value = hoverValue ? hoverValue : stateValue;

        value = value >= max ? max : value;
        value = value <= min ? min : value;

        return value || 0;
    };

    Rating.prototype.getOverlayWidth = function getOverlayWidth() {
        var _state3 = this.state,
            hoverValue = _state3.hoverValue,
            iconSpace = _state3.iconSpace,
            iconSize = _state3.iconSize;


        if (!iconSpace || !iconSize) {
            return 'auto';
        }

        var value = this.currentValue(0, this.props.count, hoverValue, this.state.value);

        var floorValue = Math.floor(value);

        return iconSize * value + (floorValue + 1) * iconSpace;
    };

    Rating.prototype.getInfoLeft = function getInfoLeft() {
        var _state4 = this.state,
            value = _state4.value,
            hoverValue = _state4.hoverValue,
            iconSpace = _state4.iconSpace,
            iconSize = _state4.iconSize;

        var infoValue = hoverValue || value;
        var ceilValue = Math.ceil(infoValue);

        return iconSize * (ceilValue - 1) + ceilValue * iconSpace;
    };

    Rating.prototype.render = function render() {
        var _classNames,
            _classNames2,
            _this4 = this;

        var _props2 = this.props,
            prefix = _props2.prefix,
            className = _props2.className,
            showGrade = _props2.showGrade,
            count = _props2.count,
            size = _props2.size,
            iconType = _props2.iconType,
            strokeMode = _props2.strokeMode,
            disabled = _props2.disabled;

        var others = obj.pickOthers(Rating.propTypes, this.props);
        var _state5 = this.state,
            hoverValue = _state5.hoverValue,
            clicked = _state5.clicked;

        var underlay = [],
            overlay = [];

        // 获得Value
        var value = this.currentValue(0, count, hoverValue, this.state.value);

        // icon的sizeMap
        var sizeMap = ICON_SIZE_MAP[size];

        for (var i = 0; i < count; i++) {
            var isCurrent = Math.ceil(value - 1) === i;
            var iconCls = classNames({
                hover: hoverValue > 0 && isCurrent,
                clicked: clicked && isCurrent
            });
            var iconNode = React.createElement(Icon, { type: iconType, size: sizeMap, className: iconCls });

            underlay.push(React.createElement(
                'span',
                { ref: 'rating-icon-' + i, key: 'underlay-' + i, className: prefix + 'rating-icon' },
                iconNode
            ));
            overlay.push(React.createElement(
                'span',
                { key: 'overlay-' + i, className: prefix + 'rating-icon' },
                iconNode
            ));
        }

        var ratingCls = classNames([prefix + 'rating', prefix + 'rating-' + size], (_classNames = {}, _classNames[prefix + 'rating-grade-low'] = value <= count * 0.4, _classNames[prefix + 'rating-grade-high'] = value > count * 0.4, _classNames[prefix + 'rating-stroke-mode'] = strokeMode, _classNames.hover = hoverValue > 0, _classNames), className);

        var baseCls = classNames(prefix + 'rating-base', (_classNames2 = {}, _classNames2[prefix + 'rating-base-disabled'] = disabled, _classNames2));

        var overlayStyle = {
            width: this.getOverlayWidth()
        };
        var infoStyle = {
            left: this.getInfoLeft(),
            display: hoverValue ? 'block' : 'none'
        };

        var finalProps = disabled ? {} : {
            onClick: this.handleClick,
            onMouseOver: this.handleHover,
            onMouseMove: this.handleHover,
            onMouseLeave: this.handleLeave
        };

        return React.createElement(
            'div',
            _extends({}, others, { className: ratingCls }),
            React.createElement(
                'div',
                _extends({ className: baseCls }, finalProps),
                React.createElement(
                    'div',
                    { className: prefix + 'rating-underlay', ref: function ref(n) {
                            return _this4.underlayNode = n;
                        } },
                    underlay
                ),
                React.createElement(
                    'div',
                    { className: prefix + 'rating-overlay', style: overlayStyle },
                    overlay
                )
            ),
            showGrade ? React.createElement(
                'div',
                { className: prefix + 'rating-info', style: infoStyle },
                value
            ) : null
        );
    };

    return Rating;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    /**
     * 默认值
     */
    defaultValue: PropTypes.number,
    /**
     * 值
     */
    value: PropTypes.number,
    /**
     * 评分的总数
     */
    count: PropTypes.number,
    /**
     * 是否显示 grade
     */
    showGrade: PropTypes.bool,
    /**
     * 尺寸
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * 是否允许半星评分
     */
    allowHalf: PropTypes.bool,
    /**
     * 用户点击评分时触发的回调
     * @param {String} value 评分值
     */
    onChange: PropTypes.func,
    /**
     * 用户hover评分时触发的回调
     * @param {String} value 评分值
     */
    onHoverChange: PropTypes.func,
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,
    // 实验属性: 自定义评分icon
    iconType: PropTypes.string,
    // 实验属性: 开启 `-webkit-text-stroke` 显示边框颜色，在IE中无效
    strokeMode: PropTypes.bool,
    className: PropTypes.string
}, _class.defaultProps = {
    prefix: 'next-',
    size: 'medium',
    disabled: false,
    count: 5,
    showGrade: false,
    defaultValue: 0,
    allowHalf: false,
    iconType: 'favorites-filling',
    onChange: noop,
    onHoverChange: noop
}, _temp);
Rating.displayName = 'Rating';
export { Rating as default };
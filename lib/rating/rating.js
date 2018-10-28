'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = _util.func.noop,
    bindCtx = _util.func.bindCtx;

// 评分组件的大小与icon的大小映射关系

var ICON_SIZE_MAP = {
    small: 'xs',
    medium: 'small',
    large: 'medium'
};

/** Rating */
var Rating = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Rating, _Component);

    function Rating(props) {
        (0, _classCallCheck3.default)(this, Rating);

        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

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

        return value;
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

        var others = _util.obj.pickOthers(Rating.propTypes, this.props);
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
            var iconCls = (0, _classnames2.default)({
                hover: hoverValue > 0 && isCurrent,
                clicked: clicked && isCurrent
            });
            var iconNode = _react2.default.createElement(_icon2.default, { type: iconType, size: sizeMap, className: iconCls });

            underlay.push(_react2.default.createElement(
                'span',
                { ref: 'rating-icon-' + i, key: 'underlay-' + i, className: prefix + 'rating-icon' },
                iconNode
            ));
            overlay.push(_react2.default.createElement(
                'span',
                { key: 'overlay-' + i, className: prefix + 'rating-icon' },
                iconNode
            ));
        }

        var ratingCls = (0, _classnames2.default)([prefix + 'rating', prefix + 'rating-' + size], (_classNames = {}, _classNames[prefix + 'rating-grade-low'] = value <= count * 0.4, _classNames[prefix + 'rating-grade-high'] = value > count * 0.4, _classNames[prefix + 'rating-stroke-mode'] = strokeMode, _classNames.hover = hoverValue > 0, _classNames), className);

        var baseCls = (0, _classnames2.default)(prefix + 'rating-base', (_classNames2 = {}, _classNames2[prefix + 'rating-base-disabled'] = disabled, _classNames2));

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

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, others, { className: ratingCls }),
            _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: baseCls }, finalProps),
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'rating-underlay', ref: function ref(n) {
                            return _this4.underlayNode = n;
                        } },
                    underlay
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + 'rating-overlay', style: overlayStyle },
                    overlay
                )
            ),
            showGrade ? _react2.default.createElement(
                'div',
                { className: prefix + 'rating-info', style: infoStyle },
                value
            ) : null
        );
    };

    return Rating;
}(_react.Component), _class.propTypes = {
    prefix: _propTypes2.default.string,
    /**
     * 默认值
     */
    defaultValue: _propTypes2.default.number,
    /**
     * 值
     */
    value: _propTypes2.default.number,
    /**
     * 评分的总数
     */
    count: _propTypes2.default.number,
    /**
     * 是否显示 grade
     */
    showGrade: _propTypes2.default.bool,
    /**
     * 尺寸
     */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    /**
     * 是否允许半星评分
     */
    allowHalf: _propTypes2.default.bool,
    /**
     * 用户点击评分时触发的回调
     * @param {String} value 评分值
     */
    onChange: _propTypes2.default.func,
    /**
     * 用户hover评分时触发的回调
     * @param {String} value 评分值
     */
    onHoverChange: _propTypes2.default.func,
    /**
     * 是否禁用
     */
    disabled: _propTypes2.default.bool,
    // 实验属性: 自定义评分icon
    iconType: _propTypes2.default.string,
    // 实验属性: 开启 `-webkit-text-stroke` 显示边框颜色，在IE中无效
    strokeMode: _propTypes2.default.bool,
    className: _propTypes2.default.string
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
exports.default = Rating;
module.exports = exports['default'];
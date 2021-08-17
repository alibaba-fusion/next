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

var _util = require('../../util');

var _balloon = require('../../balloon');

var _balloon2 = _interopRequireDefault(_balloon);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = _balloon2.default.Tooltip;
var noop = _util.func.noop;


function _getStyle(min, max, value, rtl) {
    if (rtl) {
        return {
            left: (0, _utils.getPercent)(min, max, max + min - value[1]) + '%',
            right: (0, _utils.getPercent)(min, max, value[0]) + '%'
        };
    }
    return {
        left: (0, _utils.getPercent)(min, max, value[0]) + '%',
        right: 100 - (0, _utils.getPercent)(min, max, value[1]) + '%'
    };
}

function sliderFrag(props) {
    var prefix = props.prefix,
        min = props.min,
        max = props.max,
        value = props.value,
        disabled = props.disabled,
        onMouseEnter = props.onMouseEnter,
        onMouseLeave = props.onMouseLeave,
        onMouseDown = props.onMouseDown,
        rtl = props.rtl;


    var activeClass = !disabled && props.hasMovingClass ? prefix + 'range-active' : '';

    return _react2.default.createElement(
        'div',
        {
            className: prefix + 'range-frag ' + activeClass,
            style: _getStyle(min, max, value, rtl),
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onMouseDown: onMouseDown
        },
        _react2.default.createElement('div', { className: prefix + 'range-selected' }),
        _react2.default.createElement(
            'div',
            { className: prefix + 'range-slider' },
            _react2.default.createElement('div', { className: prefix + 'range-slider-inner' })
        ),
        _react2.default.createElement(
            'div',
            { className: prefix + 'range-slider' },
            _react2.default.createElement('div', { className: prefix + 'range-slider-inner' })
        )
    );
}

sliderFrag.propTypes = {
    prefix: _propTypes2.default.string,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    hasMovingClass: _propTypes2.default.bool,
    onMouseEnter: _propTypes2.default.func,
    onMouseLeave: _propTypes2.default.func,
    onMouseDown: _propTypes2.default.func,
    value: _propTypes2.default.arrayOf(_propTypes2.default.number),
    disabled: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool
};

var FixedSlider = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(FixedSlider, _React$Component);

    function FixedSlider(props) {
        (0, _classCallCheck3.default)(this, FixedSlider);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _this.state = {
            hasMovingClass: false,
            onTooltipVisibleChange: false,
            tooltipAnimation: true
        };
        return _this;
    }

    FixedSlider.prototype._onMouseEnter = function _onMouseEnter() {
        if (!(this.keyState === 'down')) {
            this.keyState = 'enter';
        }
        this.setState({
            hasMovingClass: true
        });
    };

    FixedSlider.prototype._onMouseLeave = function _onMouseLeave() {
        if (this.keyState === 'enter') {
            this.setState({
                hasMovingClass: false
            });
        }
    };

    FixedSlider.prototype._onMouseDown = function _onMouseDown() {
        this.keyState = 'down';
        this.setState({
            hasMovingClass: true
        });
        this._addDocumentEvents();
    };

    FixedSlider.prototype._onMouseUp = function _onMouseUp() {
        if (this.keyState === 'down') {
            this.keyState = '';
            this._removeDocumentEvents();
            this.setState({
                hasMovingClass: false
            });
        }
    };

    FixedSlider.prototype._addDocumentEvents = function _addDocumentEvents() {
        this._onMouseUpListener = _util.events.on(document, 'mouseup', this._onMouseUp.bind(this));
    };

    FixedSlider.prototype._removeDocumentEvents = function _removeDocumentEvents() {
        if (this._onMouseUpListener) {
            this._onMouseUpListener.off();
            this._onMouseUpListener = null;
        }
    };

    FixedSlider.prototype.render = function render() {
        var _props = this.props,
            hasTip = _props.hasTip,
            value = _props.value,
            tipRender = _props.tipRender,
            tooltipVisible = _props.tooltipVisible,
            hasMovingClass = _props.hasMovingClass;


        var addedProps = {
            hasMovingClass: hasMovingClass || this.state.hasMovingClass,
            onMouseEnter: this._onMouseEnter.bind(this),
            onMouseLeave: this._onMouseLeave.bind(this),
            onMouseDown: this._onMouseDown.bind(this)
        };

        return hasTip ? _react2.default.createElement(
            Tooltip,
            {
                popupContainer: function popupContainer(target) {
                    return target.parentNode;
                },
                popupProps: {
                    visible: tooltipVisible || hasMovingClass,
                    animation: this.state.tooltipAnimation ? { in: 'expandInUp', out: 'expandOutDown' } : false
                },
                trigger: sliderFrag((0, _extends3.default)({}, this.props, addedProps)),
                align: 't'
            },
            tipRender(value[0] + '-' + value[1])
        ) : sliderFrag((0, _extends3.default)({}, this.props, addedProps));
    };

    return FixedSlider;
}(_react2.default.Component), _class.propTypes = {
    hasTip: _propTypes2.default.bool,
    tooltipVisible: _propTypes2.default.bool,
    onTooltipVisibleChange: _propTypes2.default.func,
    tooltipAnimation: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
    tipRender: _propTypes2.default.func,
    disabled: _propTypes2.default.bool,
    hasMovingClass: _propTypes2.default.bool,
    rtl: _propTypes2.default.bool
}, _class.defaultProps = {
    disabled: false,
    hasTip: true,
    onChange: noop,
    onProcess: noop,
    tipRender: function tipRender(value) {
        return value;
    },
    reverse: false,
    rtl: false
}, _temp);
FixedSlider.displayName = 'FixedSlider';
exports.default = FixedSlider;
module.exports = exports['default'];
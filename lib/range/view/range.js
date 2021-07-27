'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _class, _temp;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _util = require('../../util');

var _balloon = require('../../balloon');

var _balloon2 = _interopRequireDefault(_balloon);

var _utils = require('../utils');

var _scale = require('./scale');

var _scale2 = _interopRequireDefault(_scale);

var _track = require('./track');

var _track2 = _interopRequireDefault(_track);

var _selected = require('./selected');

var _selected2 = _interopRequireDefault(_selected);

var _mark = require('./mark');

var _mark2 = _interopRequireDefault(_mark);

var _slider = require('./slider');

var _slider2 = _interopRequireDefault(_slider);

var _fixedSlider = require('./fixedSlider');

var _fixedSlider2 = _interopRequireDefault(_fixedSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = _balloon2.default.Tooltip;
var noop = _util.func.noop,
    bindCtx = _util.func.bindCtx;
var pickOthers = _util.obj.pickOthers;


function _isMultiple(slider, isFixedWidth) {
    return isFixedWidth || slider === 'double';
}

function LowerSlider(props) {
    var hasTip = props.hasTip,
        value = props.value,
        tipRender = props.tipRender,
        slider = props.slider,
        tooltipVisible = props.tooltipVisible,
        onTooltipVisibleChange = props.onTooltipVisibleChange,
        tooltipAnimation = props.tooltipAnimation;


    if (_isMultiple(slider)) {
        return hasTip ? _react2.default.createElement(
            Tooltip,
            {
                popupContainer: function popupContainer(target) {
                    return target.parentNode;
                },
                popupProps: {
                    visible: tooltipVisible,
                    onVisibleChange: onTooltipVisibleChange,
                    animation: tooltipAnimation,
                    needAdjust: false
                },
                trigger: (0, _slider2.default)((0, _extends3.default)({}, props, { value: value[0] })),
                align: 't'
            },
            tipRender('' + value[0])
        ) : (0, _slider2.default)((0, _extends3.default)({}, props, { value: value[0] }));
    }
    return null;
}

LowerSlider.propTypes = {
    hasTip: _propTypes2.default.bool,
    tooltipVisible: _propTypes2.default.bool,
    onTooltipVisibleChange: _propTypes2.default.func,
    tooltipAnimation: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
    tipRender: _propTypes2.default.func,
    slider: _propTypes2.default.oneOf(['single', 'double'])
};

function UpperSlider(props) {
    var newprop = (0, _extends3.default)({}, props);
    var hasTip = newprop.hasTip,
        value = newprop.value,
        tipRender = newprop.tipRender,
        slider = newprop.slider,
        tooltipVisible = newprop.tooltipVisible,
        onTooltipVisibleChange = newprop.onTooltipVisibleChange,
        tooltipAnimation = newprop.tooltipAnimation;

    if (_isMultiple(slider)) {
        delete newprop.onKeyDown;
        return hasTip ? _react2.default.createElement(
            Tooltip,
            {
                popupContainer: function popupContainer(target) {
                    return target.parentNode;
                },
                popupProps: {
                    visible: tooltipVisible,
                    onVisibleChange: onTooltipVisibleChange,
                    animation: tooltipAnimation,
                    needAdjust: false
                },
                trigger: (0, _slider2.default)((0, _extends3.default)({}, newprop, { value: value[1] })),
                align: 't'
            },
            tipRender(value[1])
        ) : (0, _slider2.default)((0, _extends3.default)({}, newprop, { value: value[1] }));
    }
    return hasTip ? _react2.default.createElement(
        Tooltip,
        {
            popupContainer: function popupContainer(target) {
                return target.parentNode;
            },
            popupProps: {
                visible: tooltipVisible,
                onVisibleChange: onTooltipVisibleChange,
                animation: tooltipAnimation,
                needAdjust: false
            },
            animation: {
                in: 'fadeInUp',
                out: 'fadeOutDown'
            },
            trigger: (0, _slider2.default)(newprop),
            align: 't'
        },
        tipRender(value)
    ) : (0, _slider2.default)(newprop);
}

UpperSlider.propTypes = {
    hasTip: _propTypes2.default.bool,
    tooltipVisible: _propTypes2.default.bool,
    onTooltipVisibleChange: _propTypes2.default.func,
    tooltipAnimation: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
    tipRender: _propTypes2.default.func,
    slider: _propTypes2.default.oneOf(['single', 'double'])
};

function pauseEvent(e) {
    e.stopPropagation();
    e.preventDefault();
}

/** Range */
var Range = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Range, _React$Component);

    function Range(props) {
        (0, _classCallCheck3.default)(this, Range);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        var min = props.min;

        var initialValue = _isMultiple(props.slider) ? [min, min] : min;
        var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
        var value = props.value !== undefined ? props.value : defaultValue;

        _this.state = {
            value: value,
            tempValue: value,
            hasMovingClass: false,
            lowerTooltipVisible: false,
            upperTooltipVisible: false,
            tooltipAnimation: true
        };

        bindCtx(_this, ['handleLowerTooltipVisibleChange', 'handleUpperTooltipVisibleChange', 'onKeyDown']);
        return _this;
    }

    Range.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        if ('value' in props) {
            var min = props.min,
                slider = props.slider,
                value = props.value;
            var hasMovingClass = state.hasMovingClass;

            var newState = {
                value: value
            };

            if (value === undefined) {
                newState.value = _isMultiple(slider) ? [min, min] : min;
            }

            if (!hasMovingClass) {
                newState.tempValue = newState.value;
            }

            return newState;
        }
        return null;
    };

    Range.prototype._marksToScales = function _marksToScales(marks) {
        var result = [];
        if (Object.prototype.toString.call(marks) === '[object Object]') {
            for (var key in marks) {
                if (Object.hasOwnProperty.call(marks, key)) {
                    result.push(parseInt(key));
                }
            }
        } else {
            result = marks;
        }
        return result;
    };

    Range.prototype._calcScales = function _calcScales() {
        var _props = this.props,
            min = _props.min,
            max = _props.max,
            marks = _props.marks;

        var scales = this._marksToScales(marks);

        if (scales !== false) {
            if (Array.isArray(scales)) {
                return scales;
            } else {
                var pace = (max - min) / scales;
                var result = [];

                result.push(min);
                for (var i = 1; i < scales; i++) {
                    result.push(min + i * pace);
                }
                result.push(max);
                return result;
            }
        } else {
            return [];
        }
    };

    Range.prototype._calcMarks = function _calcMarks() {
        var _props2 = this.props,
            min = _props2.min,
            max = _props2.max,
            marks = _props2.marks;


        var result = {};

        if (Array.isArray(marks)) {
            marks.forEach(function (m) {
                result[m] = m.toString();
            });
        } else if (typeof marks === 'number') {
            var pace = (max - min) / marks;

            result[min] = min;
            for (var i = 1; i < marks; i++) {
                var mark = min + i * pace;
                var precision = (0, _utils.getPrecision)(mark);
                if (precision > 2) {
                    precision = 2;
                }
                mark = mark.toFixed(precision);
                result[mark] = mark;
            }
            result[max] = max;
        } else {
            result = marks;
        }
        return result;
    };

    Range.prototype._onMouseDown = function _onMouseDown(e) {
        if (e.button === 0) {
            this._start(e.pageX);
            this._addDocumentMouseEvents();
            pauseEvent(e);
        }
    };

    Range.prototype._onTouchStart = function _onTouchStart(e) {
        this._start(e.targetTouches[0].pageX);
        this._addDocumentTouchEvents();
        e.stopPropagation(); // preventDefault() will be ignored: https://www.chromestatus.com/features/5093566007214080
    };

    Range.prototype.onKeyDown = function onKeyDown(e) {
        if (this.props.disabled) return;

        if (e.keyCode === _util.KEYCODE.LEFT_ARROW || e.keyCode === _util.KEYCODE.RIGHT_ARROW) {
            e.stopPropagation();
            e.preventDefault();
            var newValue = void 0;
            if (e.keyCode === _util.KEYCODE.LEFT_ARROW) {
                newValue = this.state.value - this.props.step;
            } else {
                newValue = this.state.value + this.props.step;
            }
            if (newValue > this.props.max) {
                newValue = this.props.max;
            }
            if (newValue < this.props.min) {
                newValue = this.props.min;
            }
            if (newValue !== this.state.value) {
                this.setState({
                    value: newValue
                });
                this.props.onChange(newValue);
            }
        }
    };

    Range.prototype._start = function _start(position) {
        this.setState({
            hasMovingClass: true
        });

        var tempValue = this.state.tempValue;

        var range = this.dom;
        var start = _util.dom.getOffset(range).left;
        // used in unit test
        var width = range.clientWidth;
        if (!width) {
            if (range.style.width) {
                var index = range.style.width.indexOf('px');
                if (index !== -1) {
                    width = Number(range.style.width.slice(0, index));
                }
            }
        }

        this._moving = {
            start: start,
            end: start + width,
            startValue: tempValue
        };

        // change on start
        this._onProcess(position, true);
    };

    Range.prototype._end = function _end() {
        var startValue = this._moving.startValue;
        var _state = this.state,
            tempValue = _state.tempValue,
            value = _state.value;

        this._moving = null;
        this._removeDocumentEvents();
        this.setState({
            hasMovingClass: false,
            lowerTooltipVisible: false,
            upperTooltipVisible: false,
            tooltipAnimation: true
        });

        if (!(0, _utils.isEqual)(tempValue, startValue)) {
            // Not Controlled
            if (!('value' in this.props)) {
                this.setState({
                    value: tempValue
                });
            } else {
                this.setState({
                    // tooltipVisible: false,
                    tempValue: value,
                    value: value
                });
            }
            this.props.onChange(tempValue);
        }
    };

    Range.prototype._move = function _move(e) {
        var position = e.type === 'mousemove' ? e.pageX : e.targetTouches[0].pageX;
        this._onProcess(position);
    };

    Range.prototype._onProcess = function _onProcess(position, start) {
        var tempValue = this.state.tempValue;

        var current = this._positionToCurrent(position); //current 为当前click的value

        if (this.isFixedWidth) {
            if (start) {
                this.lastPosition = current;
            }
        } else if (start) {
            this.lastPosition = current;
            if (_isMultiple(this.props.slider)) {
                this._moving.dragging = (0, _utils.getDragging)(current, tempValue);
            } else {
                this._moving.dragging = 'upper';
            }

            this.setState({
                lowerTooltipVisible: this._moving.dragging === 'lower',
                upperTooltipVisible: this._moving.dragging === 'upper',
                tooltipAnimation: false
            });
        } else if (this.oldDragging === 'lower' && this._moving.dragging === 'upper') {
            this.setState({
                upperTooltipVisible: true,
                lowerTooltipVisible: false
            });
        } else if (this.oldDragging === 'upper' && this._moving.dragging === 'lower') {
            this.setState({
                upperTooltipVisible: false,
                lowerTooltipVisible: true
            });
        }

        this.oldDragging = this._moving.dragging;

        var nextValue = this._currentToValue(current, tempValue, this.lastPosition, this.isFixedWidth); //计算range的新value,可能是数组,可能是单个值
        this.lastPosition = current;

        if (!(0, _utils.isEqual)(nextValue, tempValue)) {
            this.setState({
                tempValue: nextValue
            });
            this.props.onProcess(nextValue);
        }
    };

    Range.prototype._addDocumentMouseEvents = function _addDocumentMouseEvents() {
        this._onMouseMoveListener = _util.events.on(document, 'mousemove', this._move.bind(this));
        this._onMouseUpListener = _util.events.on(document, 'mouseup', this._end.bind(this));
    };

    Range.prototype._addDocumentTouchEvents = function _addDocumentTouchEvents() {
        this._onTouchMoveListener = _util.events.on(document, 'touchmove', this._move.bind(this));
        this._onTouchEndListener = _util.events.on(document, 'touchend', this._end.bind(this));
    };

    Range.prototype._removeDocumentEvents = function _removeDocumentEvents() {
        if (this._onMouseMoveListener) {
            this._onMouseMoveListener.off();
            this._onMouseMoveListener = null;
        }

        if (this._onMouseUpListener) {
            this._onMouseUpListener.off();
            this._onMouseUpListener = null;
        }

        if (this._onTouchMoveListener) {
            this._onTouchMoveListener.off();
            this._onTouchMoveListener = null;
        }

        if (this._onTouchEndListener) {
            this._onTouchEndListener.off();
            this._onTouchEndListener = null;
        }
    };

    // position => current (value type)


    Range.prototype._positionToCurrent = function _positionToCurrent(position) {
        var _moving = this._moving,
            start = _moving.start,
            end = _moving.end;
        var _props3 = this.props,
            step = _props3.step,
            min = _props3.min,
            max = _props3.max,
            rtl = _props3.rtl;


        if (position < start) {
            position = start;
        } else if (position > end) {
            position = end;
        }
        var percent = (0, _utils.getPercent)(start, end, position);
        percent = rtl ? 100 - percent : percent;
        // reset by step
        var newValue = parseFloat((Math.round(percent / 100 * (max - min) / step) * step).toFixed((0, _utils.getPrecision)(step)));

        return min + newValue;
    };

    Range.prototype._currentToValue = function _currentToValue(current, preValue, lastPosition, isFixedWidth) {
        var dragging = this._moving.dragging;
        var _props4 = this.props,
            min = _props4.min,
            max = _props4.max;


        if (!_isMultiple(this.props.slider, isFixedWidth)) {
            return current;
        } else {
            var result = void 0;

            var precision = (0, _utils.getPrecision)(this.props.step);
            var diff = current - lastPosition;
            var newLeft = +(+preValue[0] + diff).toFixed(precision);
            var newRight = +(+preValue[1] + diff).toFixed(precision);

            var newMaxLeft = +(max - preValue[1] + preValue[0]).toFixed(precision);
            var newMinRight = +(min + preValue[1] - preValue[0]).toFixed(precision);

            if (isFixedWidth) {
                if (newLeft < min) {
                    result = [min, newMinRight];
                } else if (newRight > max) {
                    result = [newMaxLeft, max];
                } else {
                    result = [newLeft, newRight];
                }
            } else if (dragging === 'lower') {
                if (current > preValue[1]) {
                    result = [preValue[1], current];
                    this._moving.dragging = 'upper';
                } else {
                    result = [current, preValue[1]];
                }
            } else if (dragging === 'upper') {
                if (current < preValue[0]) {
                    result = [current, preValue[0]];
                    this._moving.dragging = 'lower';
                } else {
                    result = [preValue[0], current];
                }
            }

            return result;
        }
    };

    Range.prototype.handleLowerTooltipVisibleChange = function handleLowerTooltipVisibleChange(visible) {
        if (this.state.hasMovingClass) {
            return;
        }
        this.setState({
            lowerTooltipVisible: visible
        });
    };

    Range.prototype.handleUpperTooltipVisibleChange = function handleUpperTooltipVisibleChange(visible) {
        if (this.state.hasMovingClass) {
            return;
        }
        this.setState({
            upperTooltipVisible: visible
        });
    };

    Range.prototype.render = function render() {
        var _classNames,
            _this2 = this;

        var value = this._moving ? this.state.tempValue : this.state.value;

        var _props5 = this.props,
            prefix = _props5.prefix,
            min = _props5.min,
            max = _props5.max,
            disabled = _props5.disabled,
            style = _props5.style,
            id = _props5.id,
            slider = _props5.slider,
            reverse = _props5.reverse,
            className = _props5.className,
            marks = _props5.marks,
            marksPosition = _props5.marksPosition,
            hasTip = _props5.hasTip,
            tipRender = _props5.tipRender,
            fixedWidth = _props5.fixedWidth,
            defaultValue = _props5.defaultValue,
            tooltipVisible = _props5.tooltipVisible,
            rtl = _props5.rtl,
            isPreview = _props5.isPreview,
            renderPreview = _props5.renderPreview;


        var others = pickOthers(Object.keys(Range.propTypes), this.props);

        var classes = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'range'] = true, _classNames.disabled = disabled, _classNames[className] = className, _classNames));

        if (Array.isArray(value)) {
            value.forEach(function (item, index) {
                if (item > max) {
                    value[index] = max;
                }
            });
        } else if (value > max) {
            value = max;
        }

        var commonProps = {
            prefix: prefix,
            min: min,
            max: max,
            value: value,
            reverse: reverse,
            slider: slider,
            hasTip: hasTip,
            tipRender: tipRender,
            marksPosition: marksPosition,
            tooltipVisible: tooltipVisible,
            hasMovingClass: this.state.hasMovingClass,
            disabled: disabled,
            rtl: rtl
        };

        this.isFixedWidth = fixedWidth && (value ? Array.isArray(value) : defaultValue ? Array.isArray(defaultValue) : false);

        if (isPreview) {
            var previewCls = (0, _classnames2.default)(className, prefix + 'form-preview');

            if ('renderPreview' in this.props) {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({
                        id: id,
                        dir: rtl ? 'rtl' : 'ltr'
                    }, others, {
                        className: previewCls
                    }),
                    renderPreview(value, this.props)
                );
            }

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({
                    id: id,
                    dir: rtl ? 'rtl' : 'ltr'
                }, others, {
                    className: previewCls
                }),
                Array.isArray(value) ? value.join('~') : value
            );
        }

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({
                ref: function ref(dom) {
                    _this2.dom = dom;
                }
            }, others, {
                style: style,
                className: classes,
                id: id,
                dir: rtl ? 'rtl' : 'ltr',
                onMouseDown: disabled ? noop : this._onMouseDown.bind(this),
                onTouchStart: disabled ? noop : this._onTouchStart.bind(this)
            }),
            marks !== false && marksPosition === 'above' ? _react2.default.createElement(_mark2.default, (0, _extends3.default)({}, commonProps, { marks: this._calcMarks() })) : null,
            _react2.default.createElement(
                'div',
                { className: prefix + 'range-inner' },
                _react2.default.createElement(_scale2.default, (0, _extends3.default)({}, commonProps, { scales: this._calcScales() })),
                _react2.default.createElement(_track2.default, commonProps),
                this.isFixedWidth ? _react2.default.createElement(_fixedSlider2.default, commonProps) : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_selected2.default, commonProps),
                    _react2.default.createElement(LowerSlider, (0, _extends3.default)({}, commonProps, {
                        hasMovingClass: this.state.hasMovingClass && this._moving && this._moving.dragging === 'lower',
                        tooltipVisible: tooltipVisible || this.state.lowerTooltipVisible,
                        onTooltipVisibleChange: this.handleLowerTooltipVisibleChange,
                        tooltipAnimation: this.state.tooltipAnimation ? {
                            in: 'expandInUp',
                            out: 'expandOutDown'
                        } : false
                    })),
                    _react2.default.createElement(UpperSlider, (0, _extends3.default)({}, commonProps, {
                        onKeyDown: this.onKeyDown,
                        hasMovingClass: this.state.hasMovingClass && this._moving && this._moving.dragging === 'upper',
                        tooltipVisible: tooltipVisible || this.state.upperTooltipVisible,
                        onTooltipVisibleChange: this.handleUpperTooltipVisibleChange,
                        tooltipAnimation: this.state.tooltipAnimation ? {
                            in: 'expandInUp',
                            out: 'expandOutDown'
                        } : false
                    }))
                )
            ),
            marks !== false && marksPosition === 'below' ? _react2.default.createElement(_mark2.default, (0, _extends3.default)({}, commonProps, { marks: this._calcMarks() })) : null
        );
    };

    return Range;
}(_react2.default.Component), _class.contextTypes = {
    prefix: _propTypes2.default.string
}, _class.propTypes = {
    /**
     * 样式类名的品牌前缀
     */
    prefix: _propTypes2.default.string,
    /**
     * 自定义类名
     */
    className: _propTypes2.default.string,
    /**
     * 自定义内敛样式
     */
    style: _propTypes2.default.object,
    /**
     * 滑块个数
     * @enumdesc 单个, 两个
     */
    slider: _propTypes2.default.oneOf(['single', 'double']),
    /**
     * 最小值
     */
    min: _propTypes2.default.number,
    /**
     * 最大值
     */
    max: _propTypes2.default.number,
    /**
     * 步长，取值必须大于 0，并且可被 (max - min) 整除。
     */
    step: _propTypes2.default.number,
    /**
     * 设置当前取值。当 `slider` 为 `single` 时，使用 `Number`，否则用 `[Number, Number]`
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
    tempValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
    /**
     * 设置初始取值。当 `slider` 为 `single` 时，使用 `Number`，否则用 `[Number, Number]`
     */
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
    /**
     * 刻度数值显示逻辑（false 代表不显示，array 枚举显示的值，number 代表按 number 平分，object 表示按 key 划分，value 值显示）
     */
    marks: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number), _propTypes2.default.object]),
    /**
     * marks显示在上方('above')or下方('below')
     */
    marksPosition: _propTypes2.default.oneOf(['above', 'below']),
    /**
     * 值为 `true` 时，滑块为禁用状态
     */
    disabled: _propTypes2.default.bool,
    /**
     * 当 Range 的值发生改变后，会触发 onChange 事件，并把改变后的值作为参数传入, 如果设置了value, 要配合此函数做受控使用
     * @param {String/number} value
     */
    onChange: _propTypes2.default.func,
    /**
     * 滑块拖动的时候触发的事件,不建议在这里setState, 一般情况下不需要用, 滑动时有特殊需求时使用
     * @param {String/number} value
     */
    onProcess: _propTypes2.default.func,
    /**
     * 是否显示 tip
     */
    hasTip: _propTypes2.default.bool,
    /**
     * 自定义 tip 显示内容
     * @param {Number|String} value 值
     * @return {ReactNode} 显示内容
     */
    tipRender: _propTypes2.default.func,
    id: _propTypes2.default.string,
    /**
     * 选中态反转
     */
    reverse: _propTypes2.default.bool,
    /**
     * 是否pure render
     */
    pure: _propTypes2.default.bool,
    /**
     * 是否为拖动线段类型,默认slider为double, defaultValue必传且指定区间
     */
    fixedWidth: _propTypes2.default.bool,
    /**
     * tooltip是否默认展示
     */
    tooltipVisible: _propTypes2.default.bool,
    /**
     * 是否已rtl模式展示
     */
    rtl: _propTypes2.default.bool,
    /**
     * 是否为预览态
     */
    isPreview: _propTypes2.default.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: _propTypes2.default.func
}, _class.defaultProps = {
    prefix: 'next-',
    slider: 'single',
    min: 0,
    max: 100,
    step: 1,
    marks: false,
    disabled: false,
    fixedWidth: false,
    tooltipVisible: false,
    hasTip: true,
    onChange: noop,
    onProcess: noop,
    tipRender: function tipRender(value) {
        return value;
    },
    reverse: false,
    pure: false,
    marksPosition: 'above',
    rtl: false,
    isPreview: false
}, _temp);
Range.displayName = 'Range';
exports.default = (0, _reactLifecyclesCompat.polyfill)(Range);
module.exports = exports['default'];
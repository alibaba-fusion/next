'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('../prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _util = require('../../util');

var _util2 = require('../util');

var _constant = require('../constant');

var _constant2 = require('../../calendar2/constant');

var _calendar = require('../../calendar2');

var _calendar2 = _interopRequireDefault(_calendar);

var _timePanel = require('./time-panel');

var _timePanel2 = _interopRequireDefault(_timePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATE = _constant2.DATE_PANEL_MODE.DATE,
    WEEK = _constant2.DATE_PANEL_MODE.WEEK,
    MONTH = _constant2.DATE_PANEL_MODE.MONTH,
    QUARTER = _constant2.DATE_PANEL_MODE.QUARTER,
    YEAR = _constant2.DATE_PANEL_MODE.YEAR;
var UN_SELECTED = _constant2.CALENDAR_CELL_STATE.UN_SELECTED,
    SELECTED = _constant2.CALENDAR_CELL_STATE.SELECTED,
    SELECTED_BEGIN = _constant2.CALENDAR_CELL_STATE.SELECTED_BEGIN,
    SELECTED_END = _constant2.CALENDAR_CELL_STATE.SELECTED_END;
var BEGIN = _constant.DATE_INPUT_TYPE.BEGIN,
    END = _constant.DATE_INPUT_TYPE.END;


var operate = function operate(mode, value, operator) {
    var newVal = value.clone();

    switch (mode) {
        case DATE:
        case WEEK:
            return newVal[operator](1, 'month');
        case QUARTER:
        case MONTH:
            return newVal[operator](1, 'year');
        case YEAR:
            return newVal[operator](10, 'year');
    }
};

var isSamePanel = function isSamePanel(a, b, mode) {
    switch (mode) {
        case DATE:
        case WEEK:
            return a.isSame(b, 'month');
        case QUARTER:
        case MONTH:
            return a.isSame(b, 'year');
        case YEAR:
            {
                var begin = a.year() - a.year() % 20;
                var byear = b.year();

                return byear >= begin && byear < begin + 20;
            }
    }
};

// 计算 面板日期
var getPanelValue = function getPanelValue(_ref, defaultValue) {
    var mode = _ref.mode,
        value = _ref.value,
        inputType = _ref.inputType,
        showTime = _ref.showTime;
    var begin = value[0],
        end = value[1];

    var otherType = inputType === BEGIN ? END : BEGIN;
    var _inputType = inputType;

    if (!value[inputType] && value[otherType]) {
        _inputType = otherType;
    }

    var panelValue = value[_inputType] || (0, _util.datejs)(defaultValue);

    // https://github.com/alibaba-fusion/next/issues/3186
    if (!showTime && _inputType === END && end && (begin && !isSamePanel(begin, end, mode) || !begin)) {
        panelValue = operate(mode, panelValue, 'subtract');
    }

    return panelValue && panelValue.isValid() ? panelValue : (0, _util.datejs)();
};

var RangePanel = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(RangePanel, _React$Component);

    function RangePanel(props) {
        (0, _classCallCheck3.default)(this, RangePanel);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        var mode = props.mode,
            defaultPanelValue = props.defaultPanelValue,
            _props$timePanelProps = props.timePanelProps,
            timePanelProps = _props$timePanelProps === undefined ? {} : _props$timePanelProps;

        // 默认时间

        var defaultTime = timePanelProps.defaultValue || [];
        if (!Array.isArray(defaultTime)) {
            defaultTime = [defaultTime, defaultTime];
        }
        defaultTime = defaultTime.map(function (t) {
            return (0, _util.datejs)(t, timePanelProps.format || 'HH:mm:ss');
        });

        _this.state = {
            mode: mode,
            panelValue: getPanelValue(props, defaultPanelValue),
            inputType: props.inputType,
            curHoverValue: null,
            defaultTime: defaultTime
        };
        return _this;
    }

    RangePanel.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        if (props.inputType !== state.inputType) {
            return {
                inputType: props.inputType,
                panelValue: getPanelValue(props, state.panelValue)
            };
        }
        return null;
    };

    RangePanel.prototype.componentWillUnmount = function componentWillUnmount() {
        this.currentRaf && window.cancelAnimationFrame(this.currentRaf);
    };

    // 日期面板显示的日期区间


    RangePanel.prototype.getRanges = function getRanges() {
        var mode = this.props.mode;
        var v = this.state.panelValue;


        var begin = v.clone();
        var end = operate(mode, v, 'add');

        return [begin, end];
    };

    // 日期cell状态
    RangePanel.prototype.handleCellState = function handleCellState(v, value) {
        var mode = this.props.mode;
        var begin = value[0],
            end = value[1];


        var unit = this.getUnitByMode(mode);

        return begin && begin.isSame(v, unit) ? SELECTED_BEGIN : end && end.isSame(v, unit) ? SELECTED_END : begin && end && v.isAfter(begin, unit) && v.isBefore(end, unit) ? SELECTED : UN_SELECTED;
    };

    RangePanel.prototype.getUnitByMode = function getUnitByMode(mode) {
        return mode === DATE ? 'day' : mode;
    };

    // 头部面板日期切换点击事件


    RangePanel.prototype.renderRange = function renderRange(sharedProps) {
        var _classnames;

        var handlePanelChange = this.handlePanelChange,
            handleCanlendarClick = this.handleCanlendarClick,
            hasModeChanged = this.hasModeChanged;
        var _props = this.props,
            value = _props.value,
            prefix = _props.prefix;

        var ranges = this.getRanges();

        var calendarProps = function calendarProps(idx) {
            return (0, _extends4.default)({}, sharedProps, {
                value: value[idx],
                panelValue: ranges[idx],
                onPanelChange: function onPanelChange(v, m) {
                    return handlePanelChange(v, m, idx);
                }
            });
        };

        var calendarNodes = [_react2.default.createElement(_calendar2.default, (0, _extends4.default)({}, calendarProps(0), { className: prefix + 'range-picker-left', key: 'range-panel-calendar-left' })), _react2.default.createElement(_calendar2.default, (0, _extends4.default)({}, calendarProps(1), {
            className: prefix + 'range-picker-right',
            key: 'range-panel-calendar-right',
            onNext: handleCanlendarClick,
            onSuperNext: handleCanlendarClick
        }))];

        var className = (0, _classnames4.default)(prefix + 'range-picker2-panel', (_classnames = {}, _classnames[prefix + 'range-picker2-panel-single'] = hasModeChanged, _classnames));

        return _react2.default.createElement(
            'div',
            { key: 'range-panel', className: className },
            !this.hasModeChanged ? calendarNodes : calendarNodes[this.state.calendarIdx]
        );
    };

    RangePanel.prototype.render = function render() {
        var handleSelect = this.handleSelect,
            getCellClassName = this.getCellClassName,
            handleMouseEnter = this.handleMouseEnter,
            handleMouseLeave = this.handleMouseLeave;
        var _props2 = this.props,
            mode = _props2.mode,
            justBeginInput = _props2.justBeginInput,
            dateCellRender = _props2.dateCellRender,
            restProps = (0, _objectWithoutProperties3.default)(_props2, ['mode', 'justBeginInput', 'dateCellRender']);

        // 切换面板mode

        this.hasModeChanged = this.state.mode !== this.props.mode;

        var sharedProps = (0, _extends4.default)({}, _util.obj.pickProps(_calendar2.default.propTypes, restProps), {
            shape: 'panel',
            panelMode: mode,
            dateCellRender: dateCellRender
        });

        sharedProps.disabledDate = justBeginInput ? this.props.disabledDate : this.disabledDate;

        // 日期面板固定列数 保证对齐
        if ([DATE, WEEK].includes(mode)) {
            sharedProps.colNum = 6;
        }

        if (!this.hasModeChanged) {
            sharedProps = (0, _extends4.default)({}, sharedProps, {
                onSelect: handleSelect,
                cellClassName: getCellClassName,
                cellProps: {
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave
                }
            });
        }

        return this.props.showTime ? this.renderRangeTime(sharedProps) : this.renderRange(sharedProps);
    };

    return RangePanel;
}(_react2.default.Component), _class.propTypes = {
    rtl: _propTypes2.default.bool,
    prefix: _propTypes2.default.string,
    locale: _propTypes2.default.object,
    mode: _propTypes4.default.mode,
    value: _propTypes2.default.arrayOf(_propTypes4.default.date),
    inputType: _propTypes4.default.inputType,
    handleCellState: _propTypes2.default.func,
    disabledDate: _propTypes2.default.func,
    justBeginInput: _propTypes2.default.bool,
    resetTime: _propTypes2.default.bool,
    showTime: _propTypes2.default.bool,
    timePanelProps: _propTypes2.default.object,
    disabledTime: _propTypes2.default.object,
    dateCellRender: _propTypes2.default.func,
    onCalendarChange: _propTypes2.default.func
}, _class.defaultProps = {
    disabledDate: function disabledDate() {
        return false;
    },
    justBeginInput: true
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.disabledDate = function (v) {
        var _props3 = _this2.props,
            inputType = _props3.inputType,
            disabledDate = _props3.disabledDate,
            _props3$value = _props3.value,
            begin = _props3$value[0],
            end = _props3$value[1];
        var mode = _this2.state.mode;


        var unit = (0, _util2.mode2unit)(mode);

        return disabledDate(v, mode) || inputType === END && begin && begin.isAfter(v, unit) || inputType === BEGIN && end && end.isBefore(v, unit);
    };

    this.onTimeSelect = function (v) {
        var _props4 = _this2.props,
            value = _props4.value,
            inputType = _props4.inputType;
        var begin = value[0],
            end = value[1];


        var curDateVal = value[inputType];
        if (!curDateVal) {
            curDateVal = inputType === BEGIN && end ? end : inputType === END && begin ? begin : (0, _util.datejs)();
        }
        curDateVal = (0, _util2.setTime)(curDateVal, v);

        _this2.handleSelect(curDateVal, true);
    };

    this.handleSelect = function (v, fromTimeChange) {
        var _props5 = _this2.props,
            value = _props5.value,
            inputType = _props5.inputType,
            resetTime = _props5.resetTime,
            onCalendarChange = _props5.onCalendarChange;

        var otherType = (0, _util2.switchInputType)(inputType);
        var newValue = [].concat(value);

        var defaultTime = _this2.state.defaultTime[inputType];
        var timeVal = null;

        // 如果不是选择时间面板触发的时间改变或不需要重置时间
        // 则需要设置时间值，优先级如下：
        // - 目前这个日期时间
        // - 默认时间
        // - 另一日期时间
        // - 当前时间
        if (!fromTimeChange && !resetTime) {
            timeVal = value[inputType] || defaultTime || value[otherType] || (0, _util.datejs)();
        }

        newValue[inputType === BEGIN ? 0 : 1] = (0, _util2.setTime)(v, timeVal);
        onCalendarChange(newValue);

        _util.func.invoke(_this2.props, 'onSelect', [newValue]);
    };

    this.handlePanelChange = function (v, mode, idx) {
        _this2.setState({
            mode: mode,
            panelValue: v,
            calendarIdx: idx
        });

        _util.func.invoke(_this2.props, 'onPanelChange', [v, mode]);
    };

    this.handleMouseEnter = function (value) {
        _this2.currentRaf && window.cancelAnimationFrame(_this2.currentRaf);
        _this2.currentRaf = window.requestAnimationFrame(function () {
            _this2.setState({
                curHoverValue: value
            });
        });
    };

    this.handleMouseLeave = function () {
        _this2.currentRaf && window.cancelAnimationFrame(_this2.currentRaf);
        _this2.setState({
            curHoverValue: null
        });
    };

    this.handleEdgeState = function (value, mode) {
        var unit = _this2.getUnitByMode(mode);

        switch (mode) {
            case DATE:
                {
                    var endDate = value.endOf('month');
                    var beginDate = value.startOf('month');
                    return beginDate.isSame(value, unit) ? 1 : endDate.isSame(value, unit) ? 2 : 0;
                }
            case YEAR:
                {
                    var year = value.year();

                    var beginYear = value.year() - value.year() % 10;
                    var endYear = beginYear + 9;
                    return year === beginYear ? 1 : year === endYear ? 2 : 0;
                }
            default:
                return 0;
        }
    };

    this.getCellClassName = function (value) {
        var _extends2;

        var _props6 = _this2.props,
            prefix = _props6.prefix,
            inputType = _props6.inputType,
            mode = _props6.mode;
        var curHoverValue = _this2.state.curHoverValue;
        var _props$value = _this2.props.value,
            begin = _props$value[0],
            end = _props$value[1];

        var unit = _this2.getUnitByMode(mode);

        var state = _this2.handleCellState(value, _this2.props.value);
        var prefixCls = prefix + 'calendar2-cell';

        var hoverClassName = void 0;
        if (curHoverValue) {
            var hoverValue = [].concat(_this2.props.value);
            hoverValue[inputType] = curHoverValue;
            var hoverBegin = hoverValue[0],
                hoverEnd = hoverValue[1];


            if (hoverBegin && hoverEnd && hoverBegin.isBefore(hoverEnd, unit)) {
                var _hoverClassName;

                var hoverState = _this2.handleCellState(value, hoverValue);

                hoverClassName = (_hoverClassName = {}, _hoverClassName[prefixCls + '-hover'] = hoverState >= SELECTED, _hoverClassName[prefixCls + '-hover-begin'] = hoverState === SELECTED_BEGIN, _hoverClassName[prefixCls + '-hover-end'] = hoverState === SELECTED_END, _hoverClassName[prefixCls + '-hover-end'] = hoverState === SELECTED_END, _hoverClassName);
            }
        }

        var rangeClassName = void 0;
        if (!_this2.hasModeChanged) {
            var _ref2, _ref3;

            var edgeState = _this2.handleEdgeState(value, mode);
            var isIllegal = end && begin && begin.isAfter(end);

            rangeClassName = mode === WEEK ? (_ref2 = {}, _ref2[prefixCls + '-week-range-begin'] = state === SELECTED_BEGIN, _ref2[prefixCls + '-week-range-end'] = state === SELECTED_END, _ref2) : (_ref3 = {}, _ref3[prefixCls + '-range-begin'] = state === SELECTED_BEGIN, _ref3[prefixCls + '-range-end'] = state === SELECTED_END, _ref3[prefixCls + '-range-begin-single'] = state >= SELECTED && (!end || end.isSame(begin, unit) || isIllegal), _ref3[prefixCls + '-range-end-single'] = state >= SELECTED && (!begin || begin.isSame(end, unit) || isIllegal), _ref3[prefixCls + '-edge-begin'] = edgeState === 1, _ref3[prefixCls + '-edge-end'] = edgeState === 2, _ref3);
        }

        return (0, _extends4.default)((_extends2 = {}, _extends2[prefixCls + '-selected'] = state >= SELECTED, _extends2), rangeClassName, hoverClassName);
    };

    this.handleCanlendarClick = function (_, _ref4) {
        var unit = _ref4.unit,
            num = _ref4.num;

        _this2.setState({
            panelValue: _this2.state.panelValue.clone().add(num, unit)
        });
    };

    this.renderRangeTime = function (sharedProps) {
        var _classnames2;

        var _props7 = _this2.props,
            value = _props7.value,
            prefix = _props7.prefix,
            showTime = _props7.showTime,
            inputType = _props7.inputType,
            _props7$timePanelProp = _props7.timePanelProps,
            timePanelProps = _props7$timePanelProp === undefined ? {} : _props7$timePanelProp,
            disabledTime = _props7.disabledTime;


        var className = (0, _classnames4.default)(prefix + 'range-picker2-panel', (_classnames2 = {}, _classnames2[prefix + 'range-picker2-panel-single'] = _this2.hasModeChanged, _classnames2));

        // 禁用时间
        var _disabledTime = void 0;
        if (showTime && !_this2.hasModeChanged && disabledTime) {
            _disabledTime = typeof disabledTime === 'function' ? disabledTime(value, inputType) : disabledTime;
        }

        return _react2.default.createElement(
            'div',
            { key: 'range-time-panel', className: className },
            _react2.default.createElement(_calendar2.default, (0, _extends4.default)({
                panelValue: _this2.state.panelValue
            }, sharedProps, {
                value: value[inputType],
                onPanelChange: _this2.handlePanelChange
            })),
            showTime && !_this2.hasModeChanged ? _react2.default.createElement(_timePanel2.default, {
                prefix: prefix,
                inputType: inputType,
                value: value[inputType] || _this2.state.defaultTime[inputType],
                onSelect: _this2.onTimeSelect,
                disabledTime: disabledTime,
                timePanelProps: (0, _extends4.default)({}, _disabledTime, timePanelProps)
            }) : null
        );
    };
}, _temp);
RangePanel.displayName = 'RangePanel';
exports.default = (0, _reactLifecyclesCompat.polyfill)(RangePanel);
module.exports = exports.default;
module.exports.default = exports.default;
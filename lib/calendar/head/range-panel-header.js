'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2; /* istanbul ignore file */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _dropdown = require('../../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
var RangePanelHeader = (_temp2 = _class = function (_React$PureComponent) {
    (0, _inherits3.default)(RangePanelHeader, _React$PureComponent);

    function RangePanelHeader() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RangePanelHeader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.selectContainerHandler = function (target) {
            return target.parentNode;
        }, _this.onYearChange = function (visibleMonth, year) {
            var changeVisibleMonth = _this.props.changeVisibleMonth;

            changeVisibleMonth(visibleMonth.clone().year(year), 'yearSelect');
        }, _this.changeVisibleMonth = function (visibleMonth, month) {
            var changeVisibleMonth = _this.props.changeVisibleMonth;

            changeVisibleMonth(visibleMonth.clone().month(month), 'monthSelect');
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    RangePanelHeader.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            prefix = _props.prefix,
            startVisibleMonth = _props.startVisibleMonth,
            endVisibleMonth = _props.endVisibleMonth,
            _props$yearRange = _props.yearRange,
            yearRange = _props$yearRange === undefined ? [] : _props$yearRange,
            yearRangeOffset = _props.yearRangeOffset,
            momentLocale = _props.momentLocale,
            locale = _props.locale,
            changeMode = _props.changeMode,
            goNextMonth = _props.goNextMonth,
            goNextYear = _props.goNextYear,
            goPrevMonth = _props.goPrevMonth,
            goPrevYear = _props.goPrevYear,
            disableChangeMode = _props.disableChangeMode;


        var localedMonths = momentLocale.months();
        var startMonthLabel = localedMonths[startVisibleMonth.month()];
        var endMonthLabel = localedMonths[endVisibleMonth.month()];
        var startYearLabel = startVisibleMonth.year();
        var endYearLabel = endVisibleMonth.year();
        var btnCls = prefix + 'calendar-btn';

        var months = (0, _utils.getMonths)(momentLocale);
        var startYears = (0, _utils.getYears)(yearRange, yearRangeOffset, startVisibleMonth.year());
        var endYears = (0, _utils.getYears)(yearRange, yearRangeOffset, endVisibleMonth.year());

        return _react2.default.createElement(
            'div',
            { className: prefix + 'calendar-panel-header' },
            _react2.default.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.prevYear,
                    className: btnCls + ' ' + btnCls + '-prev-year',
                    onClick: goPrevYear
                },
                _react2.default.createElement(_icon2.default, {
                    type: 'arrow-double-left',
                    className: [prefix + 'calendar-symbol-prev-super']
                })
            ),
            _react2.default.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.prevMonth,
                    className: btnCls + ' ' + btnCls + '-prev-month',
                    onClick: goPrevMonth
                },
                _react2.default.createElement(_icon2.default, {
                    type: 'arrow-left',
                    className: [prefix + 'calendar-symbol-prev']
                })
            ),
            _react2.default.createElement(
                'div',
                { className: prefix + 'calendar-panel-header-left' },
                disableChangeMode ? _react2.default.createElement(
                    _dropdown2.default,
                    {
                        align: 'tc bc',
                        container: this.selectContainerHandler,
                        trigger: _react2.default.createElement(
                            'button',
                            {
                                role: 'button',
                                className: btnCls,
                                title: startMonthLabel
                            },
                            startMonthLabel,
                            _react2.default.createElement(_icon2.default, { type: 'arrow-down' })
                        ),
                        triggerType: 'click'
                    },
                    _react2.default.createElement(_menu2.default, {
                        prefix: prefix,
                        value: startVisibleMonth.month(),
                        dataSource: months,
                        onChange: function onChange(value) {
                            return _this2.changeVisibleMonth(startVisibleMonth, value);
                        }
                    })
                ) : _react2.default.createElement(
                    'button',
                    {
                        role: 'button',
                        title: startMonthLabel,
                        className: btnCls,
                        onClick: function onClick() {
                            return changeMode('month', 'start');
                        }
                    },
                    startMonthLabel
                ),
                disableChangeMode ? _react2.default.createElement(
                    _dropdown2.default,
                    {
                        align: 'tc bc',
                        container: this.selectContainerHandler,
                        trigger: _react2.default.createElement(
                            'button',
                            {
                                role: 'button',
                                className: btnCls,
                                title: startYearLabel
                            },
                            startYearLabel,
                            _react2.default.createElement(_icon2.default, { type: 'arrow-down' })
                        ),
                        triggerType: 'click'
                    },
                    _react2.default.createElement(_menu2.default, {
                        prefix: prefix,
                        value: startVisibleMonth.year(),
                        dataSource: startYears,
                        onChange: function onChange(v) {
                            return _this2.onYearChange(startVisibleMonth, v);
                        }
                    })
                ) : _react2.default.createElement(
                    'button',
                    {
                        role: 'button',
                        title: startYearLabel,
                        className: btnCls,
                        onClick: function onClick() {
                            return changeMode('year', 'start');
                        }
                    },
                    startYearLabel
                )
            ),
            _react2.default.createElement(
                'div',
                { className: prefix + 'calendar-panel-header-right' },
                disableChangeMode ? _react2.default.createElement(
                    _dropdown2.default,
                    {
                        align: 'tc bc',
                        container: this.selectContainerHandler,
                        trigger: _react2.default.createElement(
                            'button',
                            {
                                role: 'button',
                                className: btnCls,
                                title: endMonthLabel
                            },
                            endMonthLabel,
                            _react2.default.createElement(_icon2.default, { type: 'arrow-down' })
                        ),
                        triggerType: 'click'
                    },
                    _react2.default.createElement(_menu2.default, {
                        prefix: prefix,
                        value: endVisibleMonth.month(),
                        dataSource: months,
                        onChange: function onChange(value) {
                            return _this2.changeVisibleMonth(endVisibleMonth, value);
                        }
                    })
                ) : _react2.default.createElement(
                    'button',
                    {
                        role: 'button',
                        title: endMonthLabel,
                        className: btnCls,
                        onClick: function onClick() {
                            return changeMode('month', 'end');
                        }
                    },
                    endMonthLabel
                ),
                disableChangeMode ? _react2.default.createElement(
                    _dropdown2.default,
                    {
                        align: 'tc bc',
                        container: this.selectContainerHandler,
                        trigger: _react2.default.createElement(
                            'button',
                            {
                                role: 'button',
                                className: btnCls,
                                title: endYearLabel
                            },
                            endYearLabel,
                            _react2.default.createElement(_icon2.default, { type: 'arrow-down' })
                        ),
                        triggerType: 'click'
                    },
                    _react2.default.createElement(_menu2.default, {
                        prefix: prefix,
                        value: endVisibleMonth.year(),
                        dataSource: endYears,
                        onChange: function onChange(v) {
                            return _this2.onYearChange(endVisibleMonth, v);
                        }
                    })
                ) : _react2.default.createElement(
                    'button',
                    {
                        role: 'button',
                        title: endYearLabel,
                        className: btnCls,
                        onClick: function onClick() {
                            return changeMode('year', 'end');
                        }
                    },
                    endYearLabel
                )
            ),
            _react2.default.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.nextMonth,
                    className: btnCls + ' ' + btnCls + '-next-month',
                    onClick: goNextMonth
                },
                _react2.default.createElement(_icon2.default, {
                    type: 'arrow-right',
                    className: [prefix + 'calendar-symbol-next']
                })
            ),
            _react2.default.createElement(
                'button',
                {
                    role: 'button',
                    title: locale.nextYear,
                    className: btnCls + ' ' + btnCls + '-next-year',
                    onClick: goNextYear
                },
                _react2.default.createElement(_icon2.default, {
                    type: 'arrow-double-right',
                    className: [prefix + 'calendar-symbol-next-super']
                })
            )
        );
    };

    return RangePanelHeader;
}(_react2.default.PureComponent), _class.defaultProps = {
    yearRangeOffset: 10
}, _temp2);
exports.default = RangePanelHeader;
module.exports = exports['default'];
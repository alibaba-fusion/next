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
var DatePanelHeader = (_temp2 = _class = function (_React$PureComponent) {
    (0, _inherits3.default)(DatePanelHeader, _React$PureComponent);

    function DatePanelHeader() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DatePanelHeader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.selectContainerHandler = function (target) {
            return target.parentNode;
        }, _this.onYearChange = function (year) {
            var _this$props = _this.props,
                visibleMonth = _this$props.visibleMonth,
                changeVisibleMonth = _this$props.changeVisibleMonth;

            changeVisibleMonth(visibleMonth.clone().year(year), 'yearSelect');
        }, _this.changeVisibleMonth = function (month) {
            var _this$props2 = _this.props,
                visibleMonth = _this$props2.visibleMonth,
                changeVisibleMonth = _this$props2.changeVisibleMonth;

            changeVisibleMonth(visibleMonth.clone().month(month), 'monthSelect');
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    DatePanelHeader.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            prefix = _props.prefix,
            visibleMonth = _props.visibleMonth,
            momentLocale = _props.momentLocale,
            locale = _props.locale,
            changeMode = _props.changeMode,
            goNextMonth = _props.goNextMonth,
            goNextYear = _props.goNextYear,
            goPrevMonth = _props.goPrevMonth,
            goPrevYear = _props.goPrevYear,
            disableChangeMode = _props.disableChangeMode,
            yearRangeOffset = _props.yearRangeOffset,
            _props$yearRange = _props.yearRange,
            yearRange = _props$yearRange === undefined ? [] : _props$yearRange;


        var localedMonths = momentLocale.months();
        var monthLabel = localedMonths[visibleMonth.month()];
        var yearLabel = visibleMonth.year();
        var btnCls = prefix + 'calendar-btn';

        var monthButton = _react2.default.createElement(
            'button',
            {
                role: 'button',
                className: btnCls,
                title: monthLabel,
                onClick: function onClick() {
                    return changeMode('month', 'start');
                }
            },
            monthLabel
        );

        var yearButton = _react2.default.createElement(
            'button',
            {
                role: 'button',
                className: btnCls,
                title: yearLabel,
                onClick: function onClick() {
                    return changeMode('year', 'start');
                }
            },
            yearLabel
        );

        if (disableChangeMode) {
            var months = (0, _utils.getMonths)(momentLocale);
            var years = (0, _utils.getYears)(yearRange, yearRangeOffset, visibleMonth.year());

            monthButton = _react2.default.createElement(
                _dropdown2.default,
                {
                    align: 'tc bc',
                    container: this.selectContainerHandler,
                    trigger: _react2.default.createElement(
                        'button',
                        {
                            role: 'button',
                            className: btnCls,
                            title: monthLabel
                        },
                        monthLabel,
                        _react2.default.createElement(_icon2.default, { type: 'arrow-down' })
                    ),
                    triggerType: 'click'
                },
                _react2.default.createElement(_menu2.default, {
                    prefix: prefix,
                    value: visibleMonth.month(),
                    dataSource: months,
                    onChange: function onChange(value) {
                        return _this2.changeVisibleMonth(value);
                    }
                })
            );

            yearButton = _react2.default.createElement(
                _dropdown2.default,
                {
                    align: 'tc bc',
                    container: this.selectContainerHandler,
                    trigger: _react2.default.createElement(
                        'button',
                        {
                            role: 'button',
                            className: btnCls,
                            title: yearLabel
                        },
                        yearLabel,
                        _react2.default.createElement(_icon2.default, { type: 'arrow-down' })
                    ),
                    triggerType: 'click'
                },
                _react2.default.createElement(_menu2.default, {
                    prefix: prefix,
                    value: visibleMonth.year(),
                    dataSource: years,
                    onChange: this.onYearChange
                })
            );
        }

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
                { className: prefix + 'calendar-panel-header-full' },
                monthButton,
                yearButton
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

    return DatePanelHeader;
}(_react2.default.PureComponent), _class.defaultProps = {
    yearRangeOffset: 10
}, _temp2);
exports.default = DatePanelHeader;
module.exports = exports['default'];
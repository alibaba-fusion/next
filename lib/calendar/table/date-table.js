'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _dateTableHead = require('./date-table-head');

var _dateTableHead2 = _interopRequireDefault(_dateTableHead);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isSameDay(a, b) {
    return a && b && a.isSame(b, 'day');
}

function isRangeDate(date, startDate, endDate) {
    return date.format('L') !== startDate.format('L') && date.format('L') !== endDate.format('L') && date.valueOf() > startDate.valueOf() && date.valueOf() < endDate.valueOf();
}

function isLastMonthDate(date, target) {
    if (date.year() < target.year()) {
        return 1;
    }
    return date.year() === target.year() && date.month() < target.month();
}

function isNextMonthDate(date, target) {
    if (date.year() > target.year()) {
        return 1;
    }
    return date.year() === target.year() && date.month() > target.month();
}

var DateTable = function (_PureComponent) {
    (0, _inherits3.default)(DateTable, _PureComponent);

    function DateTable() {
        (0, _classCallCheck3.default)(this, DateTable);
        return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));
    }

    DateTable.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            visibleMonth = _props.visibleMonth,
            showOtherMonth = _props.showOtherMonth,
            endValue = _props.endValue,
            format = _props.format,
            today = _props.today,
            momentLocale = _props.momentLocale,
            dateCellRender = _props.dateCellRender,
            disabledDate = _props.disabledDate,
            onSelectDate = _props.onSelectDate;

        var startValue = this.props.startValue || this.props.value;

        var firstDayOfMonth = visibleMonth.clone().startOf('month'); // 该月的 1 号
        var firstDayOfMonthInWeek = firstDayOfMonth.day(); // 星期几

        var firstDayOfWeek = momentLocale.firstDayOfWeek();

        var datesOfLastMonthCount = (firstDayOfMonthInWeek + _utils.DAYS_OF_WEEK - firstDayOfWeek) % _utils.DAYS_OF_WEEK;

        var lastMonthDate = firstDayOfMonth.clone();
        lastMonthDate.add(0 - datesOfLastMonthCount, 'days');

        var counter = 0;
        var currentDate = void 0;
        var dateList = [];
        for (var i = 0; i < _utils.CALENDAR_TABLE_ROW_COUNT; i++) {
            for (var j = 0; j < _utils.CALENDAR_TABLE_COL_COUNT; j++) {
                currentDate = lastMonthDate;
                if (counter) {
                    currentDate = currentDate.clone();
                    currentDate.add(counter, 'days');
                }
                dateList.push(currentDate);
                counter++;
            }
        }

        counter = 0; // reset counter
        var monthElements = [];
        for (var _i = 0; _i < _utils.CALENDAR_TABLE_ROW_COUNT; _i++) {
            var weekElements = [];
            for (var _j = 0; _j < _utils.CALENDAR_TABLE_COL_COUNT; _j++) {
                var _classNames;

                currentDate = dateList[counter];
                var isLastMonth = isLastMonthDate(currentDate, visibleMonth);
                var isNextMonth = isNextMonthDate(currentDate, visibleMonth);
                var isCurrentMonth = !isLastMonth && !isNextMonth;

                var isDisabled = (0, _utils.isDisabledDate)(currentDate, disabledDate, 'date');
                var isToday = !isDisabled && isSameDay(currentDate, today) && isCurrentMonth;
                var isSelected = !isDisabled && (isSameDay(currentDate, startValue) || isSameDay(currentDate, endValue)) && isCurrentMonth;
                var isInRange = !isDisabled && startValue && endValue && isRangeDate(currentDate, startValue, endValue) && isCurrentMonth;

                var cellContent = !showOtherMonth && !isCurrentMonth ? null : dateCellRender(currentDate);

                var elementCls = (0, _classnames2.default)((_classNames = {}, _classNames[prefix + 'calendar-cell'] = true, _classNames[prefix + 'calendar-cell-prev-month'] = isLastMonth, _classNames[prefix + 'calendar-cell-next-month'] = isNextMonth, _classNames[prefix + 'calendar-cell-current'] = isToday, _classNames[prefix + 'inrange'] = isInRange, _classNames[prefix + 'selected'] = isSelected, _classNames[prefix + 'disabled'] = cellContent && isDisabled, _classNames));

                weekElements.push(_react2.default.createElement(
                    'td',
                    {
                        key: counter,
                        title: currentDate.format(format),
                        onClick: isDisabled ? undefined : onSelectDate.bind(null, currentDate),
                        className: elementCls,
                        role: 'cell',
                        'aria-disabled': isDisabled ? 'true' : 'false',
                        'aria-selected': isSelected ? 'true' : 'false'
                    },
                    _react2.default.createElement(
                        'div',
                        { className: prefix + 'calendar-date' },
                        cellContent
                    )
                ));
                counter++;
            }
            monthElements.push(_react2.default.createElement(
                'tr',
                { key: _i, role: 'row' },
                weekElements
            ));
        }

        return _react2.default.createElement(
            'table',
            { className: prefix + 'calendar-table', role: 'grid' },
            _react2.default.createElement(_dateTableHead2.default, (0, _extends3.default)({}, this.props, { momentLocale: momentLocale })),
            _react2.default.createElement(
                'tbody',
                { className: prefix + 'calendar-tbody', role: 'rowgroup' },
                monthElements
            )
        );
    };

    return DateTable;
}(_react.PureComponent);

exports.default = DateTable;
module.exports = exports['default'];
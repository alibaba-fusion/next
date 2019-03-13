'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isSameMonth(currentDate, selectedDate) {
    return selectedDate && currentDate.year() === selectedDate.year() && currentDate.month() === selectedDate.month();
}

var MonthTable = function (_PureComponent) {
    (0, _inherits3.default)(MonthTable, _PureComponent);

    function MonthTable() {
        (0, _classCallCheck3.default)(this, MonthTable);
        return (0, _possibleConstructorReturn3.default)(this, _PureComponent.apply(this, arguments));
    }

    MonthTable.prototype.onMonthCellClick = function onMonthCellClick(date) {
        this.props.onSelectMonth(date, 'date');
    };

    MonthTable.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            value = _props.value,
            visibleMonth = _props.visibleMonth,
            disabledDate = _props.disabledDate,
            today = _props.today,
            momentLocale = _props.momentLocale,
            monthCellRender = _props.monthCellRender;


        var monthLocale = momentLocale.monthsShort();

        var counter = 0;
        var monthList = [];
        for (var i = 0; i < _utils.MONTH_TABLE_ROW_COUNT; i++) {
            var rowList = [];
            for (var j = 0; j < _utils.MONTH_TABLE_COL_COUNT; j++) {
                var _classnames;

                var monthDate = visibleMonth.clone().month(counter);
                var isDisabled = (0, _utils.isDisabledDate)(monthDate, disabledDate, 'month');
                var isSelected = isSameMonth(monthDate, value);
                var isThisMonth = isSameMonth(monthDate, today);
                var elementCls = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'calendar-cell'] = true, _classnames[prefix + 'calendar-cell-current'] = isThisMonth, _classnames[prefix + 'selected'] = isSelected, _classnames[prefix + 'disabled'] = isDisabled, _classnames));
                var localedMonth = monthLocale[counter];
                var monthCellContent = monthCellRender ? monthCellRender(monthDate) : localedMonth;
                rowList.push(_react2.default.createElement(
                    'td',
                    {
                        key: counter,
                        title: localedMonth,
                        onClick: isDisabled ? undefined : this.onMonthCellClick.bind(this, monthDate),
                        className: elementCls,
                        role: 'cell',
                        'aria-disabled': isDisabled ? 'true' : 'false',
                        'aria-selected': isSelected ? 'true' : 'false'
                    },
                    _react2.default.createElement(
                        'div',
                        { className: prefix + 'calendar-month' },
                        monthCellContent
                    )
                ));
                counter++;
            }
            monthList.push(_react2.default.createElement(
                'tr',
                { key: i, role: 'row' },
                rowList
            ));
        }

        return _react2.default.createElement(
            'table',
            { className: prefix + 'calendar-table', role: 'grid' },
            _react2.default.createElement(
                'tbody',
                { className: prefix + 'calendar-tbody', role: 'rowgroup' },
                monthList
            )
        );
    };

    return MonthTable;
}(_react.PureComponent);

exports.default = MonthTable;
module.exports = exports['default'];
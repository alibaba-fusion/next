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

var _icon = require('../../icon');

var _icon2 = _interopRequireDefault(_icon);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YearTable = function (_React$PureComponent) {
    (0, _inherits3.default)(YearTable, _React$PureComponent);

    function YearTable() {
        (0, _classCallCheck3.default)(this, YearTable);
        return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
    }

    YearTable.prototype.onYearCellClick = function onYearCellClick(date) {
        this.props.onSelectYear(date, 'month');
    };

    YearTable.prototype.render = function render() {
        var _props = this.props,
            prefix = _props.prefix,
            value = _props.value,
            today = _props.today,
            visibleMonth = _props.visibleMonth,
            locale = _props.locale,
            disabledDate = _props.disabledDate,
            goPrevDecade = _props.goPrevDecade,
            goNextDecade = _props.goNextDecade,
            yearCellRender = _props.yearCellRender;

        var currentYear = today.year();
        var selectedYear = value ? value.year() : null;
        var visibleYear = visibleMonth.year();
        var startYear = Math.floor(visibleYear / 10) * 10;

        var yearElements = [];
        var counter = 0;

        var lastRowIndex = _utils.YEAR_TABLE_ROW_COUNT - 1;
        var lastColIndex = _utils.YEAR_TABLE_COL_COUNT - 1;

        for (var i = 0; i < _utils.YEAR_TABLE_ROW_COUNT; i++) {
            var rowElements = [];
            for (var j = 0; j < _utils.YEAR_TABLE_COL_COUNT; j++) {
                var _classnames;

                var content = void 0;
                var year = void 0;
                var isDisabled = false;
                var onClick = void 0;
                var title = void 0;

                if (i === 0 && j === 0) {
                    title = locale.prevDecade;
                    onClick = goPrevDecade;
                    content = _react2.default.createElement(_icon2.default, { type: 'arrow-left', size: 'xs' });
                } else if (i === lastRowIndex && j === lastColIndex) {
                    title = locale.nextDecade;
                    onClick = goNextDecade;
                    content = _react2.default.createElement(_icon2.default, { type: 'arrow-right', size: 'xs' });
                } else {
                    year = startYear + counter++;
                    title = year;
                    var yearDate = visibleMonth.clone().year(year);
                    isDisabled = (0, _utils.isDisabledDate)(yearDate, disabledDate, 'year');

                    !isDisabled && (onClick = this.onYearCellClick.bind(this, yearDate));

                    content = yearCellRender ? yearCellRender(yearDate) : year;
                }

                var isSelected = year === selectedYear;

                var classNames = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'calendar-cell'] = true, _classnames[prefix + 'calendar-cell-current'] = year === currentYear, _classnames[prefix + 'selected'] = isSelected, _classnames[prefix + 'disabled'] = isDisabled, _classnames));

                rowElements.push(_react2.default.createElement(
                    'td',
                    { key: i + '-' + j, className: classNames, role: 'cell' },
                    _react2.default.createElement(
                        'div',
                        {
                            className: prefix + 'calendar-year',
                            onClick: onClick,
                            title: title,
                            'aria-disabled': isDisabled ? 'true' : 'false',
                            'aria-selected': isSelected ? 'true' : 'false'
                        },
                        content
                    )
                ));
            }
            yearElements.push(_react2.default.createElement(
                'tr',
                { key: i, role: 'row' },
                rowElements
            ));
        }
        return _react2.default.createElement(
            'table',
            { className: prefix + 'calendar-table', role: 'grid' },
            _react2.default.createElement(
                'tbody',
                { className: prefix + 'calendar-tbody', role: 'rowgroup' },
                yearElements
            )
        );
    };

    return YearTable;
}(_react2.default.PureComponent);

exports.default = YearTable;
module.exports = exports['default'];
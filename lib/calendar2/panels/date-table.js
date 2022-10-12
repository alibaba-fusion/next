'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _mode2Rows, _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = require('prop-types');

var PT = _interopRequireWildcard(_propTypes);

var _propTypes2 = require('../prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

var _constant = require('../constant');

var _util = require('../../util');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindCtx = _util.func.bindCtx,
    renderNode = _util.func.renderNode;
var DATE = _constant.DATE_PANEL_MODE.DATE,
    WEEK = _constant.DATE_PANEL_MODE.WEEK,
    MONTH = _constant.DATE_PANEL_MODE.MONTH,
    QUARTER = _constant.DATE_PANEL_MODE.QUARTER,
    YEAR = _constant.DATE_PANEL_MODE.YEAR,
    DECADE = _constant.DATE_PANEL_MODE.DECADE;

// 面板行数

var mode2Rows = (_mode2Rows = {}, _mode2Rows[DATE] = 7, _mode2Rows[WEEK] = 7, _mode2Rows[MONTH] = 4, _mode2Rows[QUARTER] = 4, _mode2Rows[YEAR] = 4, _mode2Rows[DECADE] = 3, _mode2Rows);

var DateTable = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(DateTable, _React$Component);

    function DateTable(props) {
        (0, _classCallCheck3.default)(this, DateTable);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _this.getCustomRender = function (mode) {
            var _mode2RenderName;

            var mode2RenderName = (_mode2RenderName = {}, _mode2RenderName[DATE] = 'dateCellRender', _mode2RenderName[QUARTER] = 'quarterCellRender', _mode2RenderName[MONTH] = 'monthCellRender', _mode2RenderName[YEAR] = 'yearCellRender', _mode2RenderName);

            return _this.props[mode2RenderName[mode]];
        };

        _this.prefixCls = props.prefix + 'calendar2';

        bindCtx(_this, ['getDateCellData', 'getMonthCellData', 'getQuarterCellData', 'getYearCellData', 'getDecadeData', 'handleKeyDown', 'handleSelect', 'handleMouseEnter', 'handleMouseLeave']);

        _this.state = {
            hoverValue: null
        };
        return _this;
    }

    DateTable.prototype.handleSelect = function handleSelect(v, e, args) {
        _util.func.invoke(this.props, 'onSelect', [v, e, args]);
    };

    DateTable.prototype.handleKeyDown = function handleKeyDown(v, e, args) {
        switch (e.keyCode) {
            case _util.KEYCODE.ENTER:
                this.handleSelect(v, e, args);
                break;
            case _util.KEYCODE.RIGHT:
                break;
        }
        // e.preventDefault();
    };

    DateTable.prototype.handleMouseEnter = function handleMouseEnter(v, e, args) {
        _util.func.invoke(this.props.cellProps, 'onMouseEnter', [v, e, args]);
    };

    DateTable.prototype.handleMouseLeave = function handleMouseLeave(v, e, args) {
        _util.func.invoke(this.props.cellProps, 'onMouseLeave', [v, e, args]);
    };

    DateTable.prototype.isSame = function isSame(curDate, date, mode) {
        switch (mode) {
            case DATE:
                return curDate.isSame(date, 'day');
            case WEEK:
                return curDate.isSame(date, 'week');
            case QUARTER:
                return curDate.isSame(date, 'quarter');
            case MONTH:
                return curDate.isSame(date, 'month');
            case YEAR:
                return curDate.isSame(date, 'year');
            case DECADE:
                {
                    var curYear = curDate.year();
                    var targetYear = date.year();
                    return curYear <= targetYear && targetYear < curYear + 10;
                }
        }
    };

    /**
     * 渲染日期面板
     * @param {Object[]} cellData - 单元格数据
     * @param {String}   cellData[].label - 单元格显示文本
     * @param {Object}   cellData[].value - 日期对象
     * @param {Boolean}  cellData[].isCurrent - 是否是当前面板时间范围内的值
     */
    DateTable.prototype.renderCellContent = function renderCellContent(cellData) {
        var _this2 = this;

        var props = this.props;
        var mode = props.mode,
            hoveredState = props.hoveredState,
            cellClassName = props.cellClassName;
        var hoverValue = this.state.hoverValue;


        var cellContent = [];
        var cellCls = this.prefixCls + '-cell';

        var now = (0, _util.datejs)();
        var rowLen = mode2Rows[mode];

        for (var i = 0; i < cellData.length;) {
            var children = [];

            var isCurrentWeek = void 0;

            var _loop = function _loop(j) {
                var _extends2;

                var _cellData = cellData[i++],
                    label = _cellData.label,
                    value = _cellData.value,
                    key = _cellData.key,
                    isCurrent = _cellData.isCurrent;

                var v = value.startOf(mode);

                var isDisabled = props.disabledDate && props.disabledDate(v, mode);
                var hoverState = hoverValue && hoveredState && hoveredState(hoverValue);
                var className = (0, _classnames3.default)(cellCls, (0, _extends4.default)((_extends2 = {}, _extends2[cellCls + '-current'] = isCurrent, _extends2[cellCls + '-today'] = mode === WEEK ? _this2.isSame(value, now, DATE) : _this2.isSame(v, now, mode), _extends2[cellCls + '-selected'] = _this2.isSame(v, props.value, mode), _extends2[cellCls + '-disabled'] = isDisabled, _extends2[cellCls + '-range-hover'] = hoverState, _extends2), cellClassName && cellClassName(v)));

                var onEvents = null;

                if (!isDisabled) {
                    onEvents = {
                        onClick: function onClick(e) {
                            return _this2.handleSelect(v, e, { isCurrent: isCurrent, label: label });
                        },
                        onKeyDown: function onKeyDown(e) {
                            return _this2.handleKeyDown(v, e, { isCurrent: isCurrent, label: label });
                        },
                        onMouseEnter: function onMouseEnter(e) {
                            return _this2.handleMouseEnter(v, e, { isCurrent: isCurrent, label: label });
                        },
                        onMouseLeave: function onMouseLeave(e) {
                            return _this2.handleMouseLeave(v, e, { isCurrent: isCurrent, label: label });
                        }
                    };
                }

                if (mode === WEEK && j === 0) {
                    var week = v.week();

                    children.push(_react2.default.createElement(
                        'td',
                        { key: 'w-' + week, className: '' + cellCls },
                        _react2.default.createElement(
                            'div',
                            { className: cellCls + '-inner' },
                            week
                        )
                    ));
                    isCurrentWeek = isCurrent;
                }

                var customRender = _this2.getCustomRender(mode);

                children.push(_react2.default.createElement(
                    'td',
                    (0, _extends4.default)({ key: key, title: key }, onEvents, { className: className }),
                    _react2.default.createElement(
                        'div',
                        { className: cellCls + '-inner' },
                        renderNode(customRender, _react2.default.createElement(
                            'div',
                            { className: cellCls + '-value' },
                            label
                        ), [v])
                    )
                ));
            };

            for (var j = 0; j < rowLen; j++) {
                _loop(j);
            }

            var className = void 0;
            if (mode === WEEK) {
                var _classnames;

                className = (0, _classnames3.default)(this.prefixCls + '-week', (_classnames = {}, _classnames[this.prefixCls + '-week-current'] = isCurrentWeek, _classnames));
            }

            cellContent.push(_react2.default.createElement(
                'tr',
                { key: i, className: className },
                children
            ));
        }

        return cellContent;
    };

    // 星期几


    DateTable.prototype.renderWeekdaysHead = function renderWeekdaysHead() {
        var weekdaysMin = _util.datejs.weekdaysMin();
        var firstDayOfWeek = _util.datejs.localeData().firstDayOfWeek();

        // 默认一周的第一天是周日，否则需要调整
        if (firstDayOfWeek !== 0) {
            weekdaysMin = weekdaysMin.slice(firstDayOfWeek).concat(weekdaysMin.slice(0, firstDayOfWeek));
        }

        return _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                this.props.mode === WEEK ? _react2.default.createElement('th', { className: this.prefixCls + '-cell-week' }) : null,
                weekdaysMin.map(function (d) {
                    return _react2.default.createElement(
                        'th',
                        { key: d },
                        d
                    );
                })
            )
        );
    };

    DateTable.prototype.getDateCellData = function getDateCellData() {
        var _props = this.props,
            panelValue = _props.panelValue,
            colNum = _props.colNum;


        var firstDayOfMonth = panelValue.clone().startOf('month');
        var weekOfFirstDay = firstDayOfMonth.day(); // 当月第一天星期几
        var daysOfCurMonth = panelValue.endOf('month').date(); // 当月天数
        var firstDayOfWeek = _util.datejs.localeData().firstDayOfWeek(); // 一周的第一天是星期几

        var cellData = [];
        var preDays = (weekOfFirstDay - firstDayOfWeek + 7) % 7;
        var nextDays = colNum ? colNum * mode2Rows[DATE] - preDays - daysOfCurMonth : (7 - (preDays + daysOfCurMonth) % 7) % 7;

        // 上个月日期
        for (var i = preDays; i > 0; i--) {
            cellData.push(firstDayOfMonth.clone().subtract(i, 'day'));
        }

        // 本月日期
        for (var _i = 0; _i < daysOfCurMonth; _i++) {
            cellData.push(firstDayOfMonth.clone().add(_i, 'day'));
        }

        // 下个月日期
        for (var _i2 = 0; _i2 < nextDays; _i2++) {
            cellData.push(firstDayOfMonth.clone().add(daysOfCurMonth + _i2, 'day'));
        }

        return cellData.map(function (value) {
            return {
                value: value,
                label: value.date(),
                isCurrent: value.isSame(firstDayOfMonth, 'month'),
                key: value.format('YYYY-MM-DD')
            };
        });
    };

    DateTable.prototype.getMonthCellData = function getMonthCellData() {
        var panelValue = this.props.panelValue;


        return _util.datejs.monthsShort().map(function (label, index) {
            var value = panelValue.clone().month(index);

            return {
                label: label,
                value: value,
                isCurrent: true,
                key: value.format('YYYY-MM')
            };
        });
    };

    DateTable.prototype.getQuarterCellData = function getQuarterCellData() {
        var panelValue = this.props.panelValue;


        return [1, 2, 3, 4].map(function (i) {
            return {
                label: 'Q' + i,
                value: panelValue.clone().quarter(i),
                isCurrent: true,
                key: 'Q' + i
            };
        });
    };

    DateTable.prototype.getYearCellData = function getYearCellData() {
        var panelValue = this.props.panelValue;

        var curYear = panelValue.year();
        var startYear = curYear - curYear % 10 - 1;
        var cellData = [];

        for (var i = 0; i < 12; i++) {
            var y = startYear + i;

            cellData.push({
                value: panelValue.clone().year(y),
                label: y,
                isCurrent: i > 0 && i < 11,
                key: y
            });
        }

        return cellData;
    };

    DateTable.prototype.getDecadeData = function getDecadeData() {
        var panelValue = this.props.panelValue;

        var curYear = panelValue.year();
        var startYear = curYear - curYear % 100 - 10;
        var cellData = [];

        for (var i = 0; i < 12; i++) {
            var y = startYear + i * 10;

            cellData.push({
                value: panelValue.clone().year(y),
                label: y + '-' + (y + 9),
                isCurrent: i > 0 && i < 11,
                key: y + '-' + (y + 9)
            });
        }

        return cellData;
    };

    DateTable.prototype.render = function render() {
        var _mode2Data;

        var mode = this.props.mode;

        var mode2Data = (_mode2Data = {}, _mode2Data[DATE] = this.getDateCellData, _mode2Data[WEEK] = this.getDateCellData, _mode2Data[MONTH] = this.getMonthCellData, _mode2Data[QUARTER] = this.getQuarterCellData, _mode2Data[YEAR] = this.getYearCellData, _mode2Data[DECADE] = this.getDecadeData, _mode2Data);

        return _react2.default.createElement(
            'table',
            { className: this.prefixCls + '-table ' + this.prefixCls + '-table-' + mode },
            [DATE, WEEK].includes(mode) ? this.renderWeekdaysHead() : null,
            _react2.default.createElement(
                'tbody',
                null,
                this.renderCellContent(mode2Data[mode]())
            )
        );
    };

    return DateTable;
}(_react2.default.Component), _class.propTypes = {
    mode: _propTypes3.default.panelMode,
    value: _propTypes3.default.date,
    panelValue: _propTypes3.default.date,
    dateCellRender: PT.func,
    quarterCellRender: PT.func,
    monthCellRender: PT.func,
    yearCellRender: PT.func,
    disabledDate: PT.func,
    selectedState: PT.func,
    hoveredState: PT.func,
    onSelect: PT.func,
    onDateSelect: PT.func,
    startOnSunday: PT.bool,
    cellClassName: PT.oneOfType([PT.func, PT.string]),
    colNum: PT.number,
    cellProps: PT.object
}, _temp);
DateTable.displayName = 'DateTable';
exports.default = (0, _reactLifecyclesCompat.polyfill)(DateTable);
module.exports = exports['default'];
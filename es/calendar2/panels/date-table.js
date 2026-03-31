var _a;
import { __assign, __extends } from "tslib";
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import PT from 'prop-types';
import SharedPT from '../prop-types';
import { DATE_PANEL_MODE } from '../constant';
import { func, datejs, KEYCODE } from '../../util';
var bindCtx = func.bindCtx, renderNode = func.renderNode;
var DATE = DATE_PANEL_MODE.DATE, WEEK = DATE_PANEL_MODE.WEEK, MONTH = DATE_PANEL_MODE.MONTH, QUARTER = DATE_PANEL_MODE.QUARTER, YEAR = DATE_PANEL_MODE.YEAR, DECADE = DATE_PANEL_MODE.DECADE;
// 面板行数
var mode2Rows = (_a = {},
    _a[DATE] = 7,
    _a[WEEK] = 7,
    _a[MONTH] = 4,
    _a[QUARTER] = 4,
    _a[YEAR] = 4,
    _a[DECADE] = 3,
    _a);
var DateTable = /** @class */ (function (_super) {
    __extends(DateTable, _super);
    function DateTable(props) {
        var _this = _super.call(this, props) || this;
        _this.getCustomRender = function (mode) {
            var _a;
            var mode2RenderName = (_a = {},
                _a[DATE] = 'dateCellRender',
                _a[QUARTER] = 'quarterCellRender',
                _a[MONTH] = 'monthCellRender',
                _a[YEAR] = 'yearCellRender',
                _a);
            return _this.props[mode2RenderName[mode]];
        };
        _this.prefixCls = "".concat(props.prefix, "calendar2");
        bindCtx(_this, [
            'getDateCellData',
            'getMonthCellData',
            'getQuarterCellData',
            'getYearCellData',
            'getDecadeData',
            'handleKeyDown',
            'handleSelect',
            'handleMouseEnter',
            'handleMouseLeave',
        ]);
        _this.state = {
            hoverValue: null,
        };
        return _this;
    }
    DateTable.prototype.handleSelect = function (v, e, args) {
        func.invoke(this.props, 'onSelect', [v, e, args]);
    };
    DateTable.prototype.handleKeyDown = function (v, e, args) {
        switch (e.keyCode) {
            case KEYCODE.ENTER:
                this.handleSelect(v, e, args);
                break;
            case KEYCODE.RIGHT:
                break;
        }
        // e.preventDefault();
    };
    DateTable.prototype.handleMouseEnter = function (v, e, args) {
        func.invoke(this.props.cellProps, 'onMouseEnter', [v, e, args]);
    };
    DateTable.prototype.handleMouseLeave = function (v, e, args) {
        func.invoke(this.props.cellProps, 'onMouseLeave', [v, e, args]);
    };
    DateTable.prototype.isSame = function (curDate, date, mode) {
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
            case DECADE: {
                var curYear = curDate.year();
                // @ts-expect-error mode 为 decade 时要求 date 为 dayjs
                var targetYear = date.year();
                return curYear <= targetYear && targetYear < curYear + 10;
            }
        }
    };
    /**
     * 渲染日期面板
     * @param cellData - 单元格数据
     */
    DateTable.prototype.renderCellContent = function (cellData) {
        var _a;
        var _this = this;
        var props = this.props;
        var mode = props.mode, hoveredState = props.hoveredState, cellClassName = props.cellClassName;
        var hoverValue = this.state.hoverValue;
        var cellContent = [];
        var cellCls = "".concat(this.prefixCls, "-cell");
        var now = datejs();
        var rowLen = mode2Rows[mode];
        for (var i = 0; i < cellData.length;) {
            var children = [];
            var isCurrentWeek = void 0;
            var _loop_1 = function (j) {
                var _b;
                var _c = cellData[i++], label = _c.label, value = _c.value, key = _c.key, isCurrent = _c.isCurrent;
                // @ts-expect-error decade/quarter 不能作为 startOf 的参数
                var v = value.startOf(mode);
                var isDisabled = props.disabledDate && props.disabledDate(v, mode);
                var hoverState = hoverValue && hoveredState && hoveredState(hoverValue);
                var className_1 = classnames(cellCls, __assign((_b = {}, _b["".concat(cellCls, "-current")] = isCurrent, _b["".concat(cellCls, "-today")] = mode === WEEK ? this_1.isSame(value, now, DATE) : this_1.isSame(v, now, mode), _b["".concat(cellCls, "-selected")] = this_1.isSame(v, props.value, mode), _b["".concat(cellCls, "-disabled")] = isDisabled, _b["".concat(cellCls, "-range-hover")] = hoverState, _b), (cellClassName && cellClassName(v))));
                var onEvents = null;
                if (!isDisabled) {
                    onEvents = {
                        onClick: function (e) {
                            return _this.handleSelect(v, e, { isCurrent: isCurrent, label: label });
                        },
                        onKeyDown: function (e) {
                            return _this.handleKeyDown(v, e, { isCurrent: isCurrent, label: label });
                        },
                        onMouseEnter: function (e) {
                            return _this.handleMouseEnter(v, e, { isCurrent: isCurrent, label: label });
                        },
                        onMouseLeave: function (e) {
                            return _this.handleMouseLeave(v, e, { isCurrent: isCurrent, label: label });
                        },
                    };
                }
                if (mode === WEEK && j === 0) {
                    var week = v.week();
                    children.push(React.createElement("td", { key: "w-".concat(week), className: "".concat(cellCls) },
                        React.createElement("div", { className: "".concat(cellCls, "-inner") }, week)));
                    isCurrentWeek = isCurrent;
                }
                var customRender = this_1.getCustomRender(mode);
                children.push(React.createElement("td", __assign({ key: key, title: key }, onEvents, { className: className_1 }),
                    React.createElement("div", { className: "".concat(cellCls, "-inner") }, renderNode(customRender, React.createElement("div", { className: "".concat(cellCls, "-value") }, label), [v]))));
            };
            var this_1 = this;
            for (var j = 0; j < rowLen; j++) {
                _loop_1(j);
            }
            var className = void 0;
            if (mode === WEEK) {
                className = classnames("".concat(this.prefixCls, "-week"), (_a = {},
                    _a["".concat(this.prefixCls, "-week-current")] = isCurrentWeek,
                    _a));
            }
            cellContent.push(React.createElement("tr", { key: i, className: className }, children));
        }
        return cellContent;
    };
    // 星期几
    DateTable.prototype.renderWeekdaysHead = function () {
        var weekdaysMin = datejs.weekdaysMin();
        var firstDayOfWeek = datejs.localeData().firstDayOfWeek();
        // 默认一周的第一天是周日，否则需要调整
        if (firstDayOfWeek !== 0) {
            weekdaysMin = weekdaysMin
                .slice(firstDayOfWeek)
                .concat(weekdaysMin.slice(0, firstDayOfWeek));
        }
        return (React.createElement("thead", null,
            React.createElement("tr", null,
                this.props.mode === WEEK ? (React.createElement("th", { className: "".concat(this.prefixCls, "-cell-week") })) : null,
                weekdaysMin.map(function (d) {
                    return React.createElement("th", { key: d }, d);
                }))));
    };
    DateTable.prototype.getDateCellData = function () {
        var _a = this.props, panelValue = _a.panelValue, colNum = _a.colNum;
        var firstDayOfMonth = panelValue.clone().startOf('month');
        var weekOfFirstDay = firstDayOfMonth.day(); // 当月第一天星期几
        var daysOfCurMonth = panelValue.endOf('month').date(); // 当月天数
        var firstDayOfWeek = datejs.localeData().firstDayOfWeek(); // 一周的第一天是星期几
        var cellData = [];
        var preDays = (weekOfFirstDay - firstDayOfWeek + 7) % 7;
        var nextDays = colNum
            ? colNum * mode2Rows[DATE] - preDays - daysOfCurMonth
            : (7 - ((preDays + daysOfCurMonth) % 7)) % 7;
        // 上个月日期
        for (var i = preDays; i > 0; i--) {
            cellData.push(firstDayOfMonth.clone().subtract(i, 'day'));
        }
        // 本月日期
        for (var i = 0; i < daysOfCurMonth; i++) {
            cellData.push(firstDayOfMonth.clone().add(i, 'day'));
        }
        // 下个月日期
        for (var i = 0; i < nextDays; i++) {
            cellData.push(firstDayOfMonth.clone().add(daysOfCurMonth + i, 'day'));
        }
        return cellData.map(function (value) {
            return {
                value: value,
                label: value.date(),
                isCurrent: value.isSame(firstDayOfMonth, 'month'),
                key: value.format('YYYY-MM-DD'),
            };
        });
    };
    DateTable.prototype.getMonthCellData = function () {
        var panelValue = this.props.panelValue;
        return datejs.monthsShort().map(function (label, index) {
            var value = panelValue.clone().month(index);
            return {
                label: label,
                value: value,
                isCurrent: true,
                key: value.format('YYYY-MM'),
            };
        });
    };
    DateTable.prototype.getQuarterCellData = function () {
        var panelValue = this.props.panelValue;
        return [1, 2, 3, 4].map(function (i) {
            return {
                label: "Q".concat(i),
                value: panelValue.clone().quarter(i),
                isCurrent: true,
                key: "Q".concat(i),
            };
        });
    };
    DateTable.prototype.getYearCellData = function () {
        var panelValue = this.props.panelValue;
        var curYear = panelValue.year();
        var startYear = curYear - (curYear % 10) - 1;
        var cellData = [];
        for (var i = 0; i < 12; i++) {
            var y = startYear + i;
            cellData.push({
                value: panelValue.clone().year(y),
                label: y,
                isCurrent: i > 0 && i < 11,
                key: y,
            });
        }
        return cellData;
    };
    DateTable.prototype.getDecadeData = function () {
        var panelValue = this.props.panelValue;
        var curYear = panelValue.year();
        var startYear = curYear - (curYear % 100) - 10;
        var cellData = [];
        for (var i = 0; i < 12; i++) {
            var y = startYear + i * 10;
            cellData.push({
                value: panelValue.clone().year(y),
                label: "".concat(y, "-").concat(y + 9),
                isCurrent: i > 0 && i < 11,
                key: "".concat(y, "-").concat(y + 9),
            });
        }
        return cellData;
    };
    DateTable.prototype.render = function () {
        var _a;
        var mode = this.props.mode;
        var mode2Data = (_a = {},
            _a[DATE] = this.getDateCellData,
            _a[WEEK] = this.getDateCellData,
            _a[MONTH] = this.getMonthCellData,
            _a[QUARTER] = this.getQuarterCellData,
            _a[YEAR] = this.getYearCellData,
            _a[DECADE] = this.getDecadeData,
            _a);
        return (React.createElement("table", { className: "".concat(this.prefixCls, "-table ").concat(this.prefixCls, "-table-").concat(mode) },
            [DATE, WEEK].includes(mode) ? this.renderWeekdaysHead() : null,
            React.createElement("tbody", null, this.renderCellContent(mode2Data[mode]()))));
    };
    DateTable.propTypes = {
        mode: SharedPT.panelMode,
        value: SharedPT.date,
        panelValue: SharedPT.date,
        dateCellRender: PT.func,
        quarterCellRender: PT.func,
        monthCellRender: PT.func,
        yearCellRender: PT.func,
        disabledDate: PT.func,
        hoveredState: PT.func,
        onSelect: PT.func,
        cellClassName: PT.oneOfType([PT.func, PT.string]),
        colNum: PT.number,
        cellProps: PT.object,
    };
    return DateTable;
}(React.Component));
export default polyfill(DateTable);

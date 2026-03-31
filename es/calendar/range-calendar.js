import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import moment from 'moment';
import ConfigProvider from '../config-provider';
import nextLocale from '../locale/zh-cn';
import { obj, func } from '../util';
import RangePanelHeader from './head/range-panel-header';
import MonthPanelHeader from './head/month-panel-header';
import YearPanelHeader from './head/year-panel-header';
import DateTable from './table/date-table';
import MonthTable from './table/month-table';
import YearTable from './table/year-table';
import { checkMomentObj, formatDateValue, getVisibleMonth, isSameYearMonth, CALENDAR_MODES, CALENDAR_MODE_DATE, CALENDAR_MODE_MONTH, CALENDAR_MODE_YEAR, getLocaleData, } from './utils';
var RangeCalendar = /** @class */ (function (_super) {
    __extends(RangeCalendar, _super);
    function RangeCalendar(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelectCell = function (date, nextMode) {
            if (_this.state.mode === CALENDAR_MODE_DATE) {
                _this.props.onSelect(date);
            }
            else {
                _this.changeVisibleMonth(date, 'cellClick');
            }
            _this.changeMode(nextMode);
        };
        _this.changeMode = function (mode, activePanel) {
            var _a = _this.state, lastMode = _a.lastMode, lastPanelType = _a.lastPanelType;
            var state = {
                lastMode: mode,
                // rangePicker 的 panel 下，选 year -> month，从当前函数的 activePanel 传来的数据已经拿不到 start end panel 的状态了，需要根据 lastMode 来判断
                lastPanelType: lastMode === 'year' ? lastPanelType : activePanel,
            };
            if (typeof mode === 'string' && mode !== _this.state.mode) {
                state.mode = mode;
            }
            if (activePanel && activePanel !== _this.state.activePanel) {
                state.activePanel = activePanel;
            }
            _this.setState(state);
        };
        _this.changeVisibleMonth = function (date, reason) {
            var lastPanelType = _this.state.lastPanelType;
            if (!isSameYearMonth(date, _this.state.startVisibleMonth)) {
                var startVisibleMonth = lastPanelType === 'end' ? date.clone().add(-1, 'month') : date;
                _this.setState({ startVisibleMonth: startVisibleMonth });
                _this.props.onVisibleMonthChange(startVisibleMonth, reason);
            }
        };
        /**
         * 根据日期偏移量设置当前展示的月份
         * @param offset - 日期偏移量
         * @param type - 日期偏移类型 days, months, years
         */
        _this.changeVisibleMonthByOffset = function (offset, type) {
            var offsetDate = _this.state.startVisibleMonth.clone().add(offset, type);
            _this.changeVisibleMonth(offsetDate, 'buttonClick');
        };
        _this.goPrevDecade = function () {
            _this.changeVisibleMonthByOffset(-10, 'years');
        };
        _this.goNextDecade = function () {
            _this.changeVisibleMonthByOffset(10, 'years');
        };
        _this.goPrevYear = function () {
            _this.changeVisibleMonthByOffset(-1, 'years');
        };
        _this.goNextYear = function () {
            _this.changeVisibleMonthByOffset(1, 'years');
        };
        _this.goPrevMonth = function () {
            _this.changeVisibleMonthByOffset(-1, 'months');
        };
        _this.goNextMonth = function () {
            _this.changeVisibleMonthByOffset(1, 'months');
        };
        var startValue = formatDateValue(props.startValue || props.defaultStartValue);
        var endValue = formatDateValue(props.endValue || props.defaultEndValue);
        var visibleMonth = getVisibleMonth(props.defaultVisibleMonth, startValue);
        _this.state = {
            startValue: startValue,
            endValue: endValue,
            mode: props.mode,
            prevMode: props.mode,
            startVisibleMonth: visibleMonth,
            activePanel: undefined,
            lastMode: undefined,
            lastPanelType: 'start', // enum, 包括 start end
        };
        _this.today = moment();
        return _this;
    }
    RangeCalendar.getDerivedStateFromProps = function (props, state) {
        var st = {};
        if ('startValue' in props) {
            var startValue = formatDateValue(props.startValue);
            st.startValue = startValue;
            if (startValue && !startValue.isSame(state.startValue, 'day')) {
                st.startVisibleMonth = startValue;
            }
        }
        if ('endValue' in props) {
            st.endValue = formatDateValue(props.endValue);
        }
        if ('mode' in props && state.prevMode !== props.mode) {
            st.prevMode = props.mode;
            st.mode = props.mode;
        }
        return st;
    };
    RangeCalendar.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, rtl = _b.rtl, dateCellRender = _b.dateCellRender, monthCellRender = _b.monthCellRender, yearCellRender = _b.yearCellRender, className = _b.className, format = _b.format, locale = _b.locale, showOtherMonth = _b.showOtherMonth, disabledDate = _b.disabledDate, disableChangeMode = _b.disableChangeMode, yearRange = _b.yearRange, others = __rest(_b, ["prefix", "rtl", "dateCellRender", "monthCellRender", "yearCellRender", "className", "format", "locale", "showOtherMonth", "disabledDate", "disableChangeMode", "yearRange"]);
        var _c = this.state, startValue = _c.startValue, endValue = _c.endValue, mode = _c.mode, startVisibleMonth = _c.startVisibleMonth, activePanel = _c.activePanel;
        // reset moment locale
        if (locale.momentLocale) {
            startValue && startValue.locale(locale.momentLocale);
            endValue && endValue.locale(locale.momentLocale);
            startVisibleMonth.locale(locale.momentLocale);
        }
        if (rtl) {
            others.dir = 'rtl';
        }
        var localeData = getLocaleData(locale.format || {}, startVisibleMonth.localeData());
        var endVisibleMonth = startVisibleMonth.clone().add(1, 'months');
        var headerProps = {
            prefix: prefix,
            rtl: rtl,
            mode: mode,
            locale: locale,
            momentLocale: localeData,
            startVisibleMonth: startVisibleMonth,
            endVisibleMonth: endVisibleMonth,
            changeVisibleMonth: this.changeVisibleMonth,
            changeMode: this.changeMode,
            yearRange: yearRange,
            disableChangeMode: disableChangeMode,
        };
        var tableProps = {
            prefix: prefix,
            value: startValue,
            startValue: startValue,
            endValue: endValue,
            mode: mode,
            locale: locale,
            momentLocale: localeData,
            showOtherMonth: showOtherMonth,
            today: this.today,
            disabledDate: disabledDate,
            dateCellRender: dateCellRender,
            monthCellRender: monthCellRender,
            yearCellRender: yearCellRender,
            changeMode: this.changeMode,
            changeVisibleMonth: this.changeVisibleMonth,
        };
        var visibleMonths = {
            start: startVisibleMonth,
            end: endVisibleMonth,
        };
        var visibleMonth = visibleMonths[activePanel];
        var header;
        var table;
        switch (mode) {
            case CALENDAR_MODE_DATE: {
                table = [
                    React.createElement("div", { className: "".concat(prefix, "calendar-body-left"), key: "left-panel" },
                        React.createElement(DateTable, __assign({ format: format }, tableProps, { visibleMonth: startVisibleMonth, onSelectDate: this.onSelectCell }))),
                    React.createElement("div", { className: "".concat(prefix, "calendar-body-right"), key: "right-panel" },
                        React.createElement(DateTable, __assign({ format: format }, tableProps, { visibleMonth: endVisibleMonth, onSelectDate: this.onSelectCell }))),
                ];
                header = (React.createElement(RangePanelHeader, __assign({}, headerProps, { goPrevYear: this.goPrevYear, goPrevMonth: this.goPrevMonth, goNextYear: this.goNextYear, goNextMonth: this.goNextMonth })));
                break;
            }
            case CALENDAR_MODE_MONTH: {
                table = (React.createElement(MonthTable, __assign({}, tableProps, { visibleMonth: visibleMonth, onSelectMonth: this.onSelectCell })));
                header = (React.createElement(MonthPanelHeader, __assign({}, headerProps, { visibleMonth: visibleMonth, goPrevYear: this.goPrevYear, goNextYear: this.goNextYear })));
                break;
            }
            case CALENDAR_MODE_YEAR: {
                table = (React.createElement(YearTable, __assign({}, tableProps, { rtl: rtl, visibleMonth: visibleMonth, onSelectYear: this.onSelectCell, goPrevDecade: this.goPrevDecade, goNextDecade: this.goNextDecade })));
                header = (React.createElement(YearPanelHeader, __assign({}, headerProps, { visibleMonth: visibleMonth, goPrevDecade: this.goPrevDecade, goNextDecade: this.goNextDecade })));
                break;
            }
        }
        var classNames = classnames((_a = {},
            _a["".concat(prefix, "calendar")] = true,
            _a["".concat(prefix, "calendar-range")] = true,
            _a), className);
        return (React.createElement("div", __assign({}, obj.pickOthers(RangeCalendar.propTypes, others), { className: classNames }),
            header,
            React.createElement("div", { className: "".concat(prefix, "calendar-body") }, table)));
    };
    RangeCalendar.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, defaultStartValue: checkMomentObj, defaultEndValue: checkMomentObj, startValue: checkMomentObj, endValue: checkMomentObj, mode: PropTypes.oneOf(CALENDAR_MODES), disableChangeMode: PropTypes.bool, format: PropTypes.string, yearRange: PropTypes.arrayOf(PropTypes.number), showOtherMonth: PropTypes.bool, defaultVisibleMonth: PropTypes.func, onVisibleMonthChange: PropTypes.func, disabledDate: PropTypes.func, onSelect: PropTypes.func, dateCellRender: PropTypes.func, monthCellRender: PropTypes.func, yearCellRender: PropTypes.func, locale: PropTypes.object, className: PropTypes.string });
    RangeCalendar.defaultProps = {
        prefix: 'next-',
        rtl: false,
        mode: CALENDAR_MODE_DATE,
        disableChangeMode: false,
        format: 'YYYY-MM-DD',
        dateCellRender: function (value) { return value.date(); },
        onSelect: func.noop,
        onVisibleMonthChange: func.noop,
        locale: nextLocale.Calendar,
        showOtherMonth: false,
    };
    return RangeCalendar;
}(React.Component));
export default ConfigProvider.config(polyfill(RangeCalendar), {
    componentName: 'Calendar',
});

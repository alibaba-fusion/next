import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import moment from 'moment';
import classnames from 'classnames';
import ConfigProvider from '../config-provider';
import nextLocale from '../locale/zh-cn';
import { func, obj } from '../util';
import CardHeader from './head/card-header';
import DatePanelHeader from './head/date-panel-header';
import MonthPanelHeader from './head/month-panel-header';
import YearPanelHeader from './head/year-panel-header';
import DateTable from './table/date-table';
import MonthTable from './table/month-table';
import YearTable from './table/year-table';
import { checkMomentObj, formatDateValue, getVisibleMonth, isSameYearMonth, CALENDAR_MODES, CALENDAR_MODE_DATE, CALENDAR_MODE_MONTH, CALENDAR_MODE_YEAR, getLocaleData, } from './utils';
var isValueChanged = function (value, oldVlaue) {
    if (value && oldVlaue) {
        if (!moment.isMoment(value)) {
            value = moment(value);
        }
        if (!moment.isMoment(oldVlaue)) {
            oldVlaue = moment(oldVlaue);
        }
        return value.valueOf() !== oldVlaue.valueOf();
    }
    else {
        return value !== oldVlaue;
    }
};
/** Calendar */
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.onSelectCell = function (date, nextMode) {
            var visibleMonth = _this.state.visibleMonth;
            var _a = _this.props, shape = _a.shape, showOtherMonth = _a.showOtherMonth;
            // 点击其他月份日期不生效
            if (!showOtherMonth && !isSameYearMonth(visibleMonth, date)) {
                return;
            }
            _this.changeVisibleMonth(date, 'cellClick');
            if (!('value' in _this.props)) {
                // 非受控模式，直接修改当前state
                _this.setState({
                    value: date,
                });
            }
            // 当用户所在的面板为初始化面板时，则选择动作为触发 onSelect 回调
            if (_this.state.mode === _this.MODES[0]) {
                _this.props.onSelect(date);
            }
            if (shape === 'panel') {
                _this.changeMode(nextMode);
            }
        };
        _this.changeMode = function (nextMode) {
            if (nextMode && _this.MODES.indexOf(nextMode) > -1 && nextMode !== _this.state.mode) {
                _this.setState({ mode: nextMode });
                _this.props.onModeChange(nextMode);
            }
        };
        _this.changeVisibleMonth = function (date, reason) {
            if (!isSameYearMonth(date, _this.state.visibleMonth)) {
                _this.setState({ visibleMonth: date });
                _this.props.onVisibleMonthChange(date, reason);
            }
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
        var value = formatDateValue(props.value || props.defaultValue);
        var visibleMonth = getVisibleMonth(props.defaultVisibleMonth, value);
        _this.MODES = props.modes;
        _this.today = moment();
        _this.state = {
            value: value,
            mode: props.mode || _this.MODES[0],
            MODES: _this.MODES,
            visibleMonth: visibleMonth,
        };
        return _this;
    }
    Calendar.getDerivedStateFromProps = function (props, state) {
        var st = {};
        if ('value' in props) {
            var value = formatDateValue(props.value);
            if (value && isValueChanged(props.value, state.value)) {
                st.visibleMonth = value;
            }
            st.value = value;
        }
        if (props.mode && state.MODES.indexOf(props.mode) > -1) {
            st.mode = props.mode;
        }
        return st;
    };
    /**
     * 根据日期偏移量设置当前展示的月份
     * @param {Number} offset 日期偏移的数量
     * @param {String} type 日期偏移的类型 days, months, years
     */
    Calendar.prototype.changeVisibleMonthByOffset = function (offset, type) {
        var cloneValue = this.state.visibleMonth.clone();
        cloneValue.add(offset, type);
        this.changeVisibleMonth(cloneValue, 'buttonClick');
    };
    Calendar.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, prefix = _d.prefix, rtl = _d.rtl, className = _d.className, shape = _d.shape, showOtherMonth = _d.showOtherMonth, format = _d.format, locale = _d.locale, dateCellRender = _d.dateCellRender, monthCellRender = _d.monthCellRender, yearCellRender = _d.yearCellRender, disabledDate = _d.disabledDate, yearRange = _d.yearRange, disableChangeMode = _d.disableChangeMode, others = __rest(_d, ["prefix", "rtl", "className", "shape", "showOtherMonth", "format", "locale", "dateCellRender", "monthCellRender", "yearCellRender", "disabledDate", "yearRange", "disableChangeMode"]);
        var state = this.state;
        var classNames = classnames((_a = {},
            _a["".concat(prefix, "calendar")] = true,
            _a["".concat(prefix, "calendar-").concat(shape)] = shape,
            _a), className);
        if (rtl) {
            others.dir = 'rtl';
        }
        var visibleMonth = state.visibleMonth;
        // reset moment locale
        if (locale.momentLocale) {
            state.value && state.value.locale(locale.momentLocale);
            visibleMonth.locale(locale.momentLocale);
        }
        var localeData = getLocaleData(locale.format || {}, visibleMonth.localeData());
        var headerProps = {
            prefix: prefix,
            value: state.value,
            mode: state.mode,
            disableChangeMode: disableChangeMode,
            yearRange: yearRange,
            locale: locale,
            rtl: rtl,
            visibleMonth: visibleMonth,
            momentLocale: localeData,
            changeMode: this.changeMode,
            changeVisibleMonth: this.changeVisibleMonth,
            goNextDecade: this.goNextDecade,
            goNextYear: this.goNextYear,
            goNextMonth: this.goNextMonth,
            goPrevDecade: this.goPrevDecade,
            goPrevYear: this.goPrevYear,
            goPrevMonth: this.goPrevMonth,
        };
        var tableProps = {
            prefix: prefix,
            visibleMonth: visibleMonth,
            showOtherMonth: showOtherMonth,
            value: state.value,
            mode: state.mode,
            locale: locale,
            dateCellRender: dateCellRender,
            monthCellRender: monthCellRender,
            yearCellRender: yearCellRender,
            disabledDate: disabledDate,
            momentLocale: localeData,
            today: this.today,
            goPrevDecade: this.goPrevDecade,
            goNextDecade: this.goNextDecade,
        };
        var tables = (_b = {},
            _b[CALENDAR_MODE_DATE] = React.createElement(DateTable, __assign({ format: format }, tableProps, { onSelectDate: this.onSelectCell })),
            _b[CALENDAR_MODE_MONTH] = React.createElement(MonthTable, __assign({}, tableProps, { onSelectMonth: this.onSelectCell })),
            _b[CALENDAR_MODE_YEAR] = React.createElement(YearTable, __assign({}, tableProps, { rtl: rtl, onSelectYear: this.onSelectCell })),
            _b);
        var panelHeaders = (_c = {},
            _c[CALENDAR_MODE_DATE] = React.createElement(DatePanelHeader, __assign({}, headerProps)),
            _c[CALENDAR_MODE_MONTH] = React.createElement(MonthPanelHeader, __assign({}, headerProps)),
            _c[CALENDAR_MODE_YEAR] = React.createElement(YearPanelHeader, __assign({}, headerProps)),
            _c);
        return (React.createElement("div", __assign({}, obj.pickOthers(Calendar.propTypes, others), { className: classNames }),
            shape === 'panel' ? panelHeaders[state.mode] : React.createElement(CardHeader, __assign({}, headerProps)),
            tables[state.mode]));
    };
    Calendar.propTypes = __assign(__assign({}, ConfigProvider.propTypes), { prefix: PropTypes.string, rtl: PropTypes.bool, 
        /**
         * 默认选中的日期（moment 对象）
         */
        defaultValue: checkMomentObj, 
        /**
         * 选中的日期值 (moment 对象)
         */
        value: checkMomentObj, 
        /**
         * 面板模式
         */
        mode: PropTypes.oneOf(CALENDAR_MODES), 
        // 面板可变化的模式列表，仅初始化时接收一次
        modes: PropTypes.array, 
        // 禁用更改面板模式，采用 dropdown 的方式切换显示日期 (暂不正式对外透出)
        disableChangeMode: PropTypes.bool, 
        // 日期值的格式（用于日期title显示的格式）
        format: PropTypes.string, 
        /**
         * 是否展示非本月的日期
         */
        showOtherMonth: PropTypes.bool, 
        /**
         * 默认展示的月份
         */
        defaultVisibleMonth: PropTypes.func, 
        /**
         * 展现形态
         */
        shape: PropTypes.oneOf(['card', 'fullscreen', 'panel']), 
        /**
         * 选择日期单元格时的回调
         * @param {Object} value 对应的日期值 (moment 对象)
         */
        onSelect: PropTypes.func, 
        /**
         * 面板模式变化时的回调
         * @param {String} mode 对应面板模式 date month year
         */
        onModeChange: PropTypes.func, 
        /**
         * 展现的月份变化时的回调
         * @param {Object} value 显示的月份 (moment 对象)
         * @param {String} reason 触发月份改变原因
         */
        onVisibleMonthChange: PropTypes.func, 
        /**
         * 自定义样式类
         */
        className: PropTypes.string, 
        /**
         * 自定义日期渲染函数
         * @param {Object} value 日期值（moment对象）
         * @returns {ReactNode}
         */
        dateCellRender: PropTypes.func, 
        /**
         * 自定义月份渲染函数
         * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
         * @returns {ReactNode}
         */
        monthCellRender: PropTypes.func, yearCellRender: PropTypes.func, 
        /**
         * 年份范围，[START_YEAR, END_YEAR] (只在shape 为 ‘card’, 'fullscreen' 下生效)
         */
        yearRange: PropTypes.arrayOf(PropTypes.number), 
        /**
         * 不可选择的日期
         * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
         * @param {String} view 当前视图类型，year: 年， month: 月, date: 日
         * @returns {Boolean}
         */
        disabledDate: PropTypes.func, 
        /**
         * 国际化配置
         */
        locale: PropTypes.object });
    Calendar.defaultProps = {
        prefix: 'next-',
        rtl: false,
        shape: 'fullscreen',
        modes: CALENDAR_MODES,
        disableChangeMode: false,
        format: 'YYYY-MM-DD',
        onSelect: func.noop,
        onVisibleMonthChange: func.noop,
        onModeChange: func.noop,
        dateCellRender: function (value) { return value.date(); },
        locale: nextLocale.Calendar,
        showOtherMonth: true,
    };
    return Calendar;
}(Component));
export default polyfill(Calendar);

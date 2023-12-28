"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = require("classnames");
var moment_1 = require("moment");
var config_provider_1 = require("../config-provider");
var zh_cn_1 = require("../locale/zh-cn");
var util_1 = require("../util");
var range_panel_header_1 = require("./head/range-panel-header");
var month_panel_header_1 = require("./head/month-panel-header");
var year_panel_header_1 = require("./head/year-panel-header");
var date_table_1 = require("./table/date-table");
var month_table_1 = require("./table/month-table");
var year_table_1 = require("./table/year-table");
var utils_1 = require("./utils");
var RangeCalendar = /** @class */ (function (_super) {
    tslib_1.__extends(RangeCalendar, _super);
    function RangeCalendar(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.onSelectCell = function (date, nextMode) {
            if (_this.state.mode === utils_1.CALENDAR_MODE_DATE) {
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
                // rangePicker的panel下，选 year -> month ，从当前函数的activePanel传来的数据已经拿不到 start end panel的状态了，需要根据 lastMode 来判断
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
            if (!(0, utils_1.isSameYearMonth)(date, _this.state.startVisibleMonth)) {
                var startVisibleMonth = lastPanelType === 'end' ? date.clone().add(-1, 'month') : date;
                _this.setState({ startVisibleMonth: startVisibleMonth });
                _this.props.onVisibleMonthChange(startVisibleMonth, reason);
            }
        };
        /**
         * 根据日期偏移量设置当前展示的月份
         * @param {Number} offset 日期偏移量
         * @param {String} type 日期偏移类型 days, months, years
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
        var startValue = (0, utils_1.formatDateValue)(props.startValue || props.defaultStartValue);
        var endValue = (0, utils_1.formatDateValue)(props.endValue || props.defaultEndValue);
        var visibleMonth = (0, utils_1.getVisibleMonth)(props.defaultVisibleMonth, startValue);
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
        _this.today = (0, moment_1.default)();
        return _this;
    }
    RangeCalendar.getDerivedStateFromProps = function (props, state) {
        var st = {};
        if ('startValue' in props) {
            var startValue = (0, utils_1.formatDateValue)(props.startValue);
            st.startValue = startValue;
            if (startValue && !startValue.isSame(state.startValue, 'day')) {
                st.startVisibleMonth = startValue;
            }
        }
        if ('endValue' in props) {
            st.endValue = (0, utils_1.formatDateValue)(props.endValue);
        }
        if ('mode' in props && state.prevMode !== props.mode) {
            st.prevMode = props.mode;
            st.mode = props.mode;
        }
        return st;
    };
    RangeCalendar.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, rtl = _b.rtl, dateCellRender = _b.dateCellRender, monthCellRender = _b.monthCellRender, yearCellRender = _b.yearCellRender, className = _b.className, format = _b.format, locale = _b.locale, showOtherMonth = _b.showOtherMonth, disabledDate = _b.disabledDate, disableChangeMode = _b.disableChangeMode, yearRange = _b.yearRange, others = tslib_1.__rest(_b, ["prefix", "rtl", "dateCellRender", "monthCellRender", "yearCellRender", "className", "format", "locale", "showOtherMonth", "disabledDate", "disableChangeMode", "yearRange"]);
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
        var localeData = (0, utils_1.getLocaleData)(locale.format || {}, startVisibleMonth.localeData());
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
            case utils_1.CALENDAR_MODE_DATE: {
                table = [
                    react_1.default.createElement("div", { className: "".concat(prefix, "calendar-body-left"), key: "left-panel" },
                        react_1.default.createElement(date_table_1.default, tslib_1.__assign({ format: format }, tableProps, { visibleMonth: startVisibleMonth, onSelectDate: this.onSelectCell }))),
                    react_1.default.createElement("div", { className: "".concat(prefix, "calendar-body-right"), key: "right-panel" },
                        react_1.default.createElement(date_table_1.default, tslib_1.__assign({ format: format }, tableProps, { visibleMonth: endVisibleMonth, onSelectDate: this.onSelectCell }))),
                ];
                header = (react_1.default.createElement(range_panel_header_1.default, tslib_1.__assign({}, headerProps, { goPrevYear: this.goPrevYear, goPrevMonth: this.goPrevMonth, goNextYear: this.goNextYear, goNextMonth: this.goNextMonth })));
                break;
            }
            case utils_1.CALENDAR_MODE_MONTH: {
                table = react_1.default.createElement(month_table_1.default, tslib_1.__assign({}, tableProps, { visibleMonth: visibleMonth, onSelectMonth: this.onSelectCell }));
                header = (react_1.default.createElement(month_panel_header_1.default, tslib_1.__assign({}, headerProps, { visibleMonth: visibleMonth, goPrevYear: this.goPrevYear, goNextYear: this.goNextYear })));
                break;
            }
            case utils_1.CALENDAR_MODE_YEAR: {
                table = (react_1.default.createElement(year_table_1.default, tslib_1.__assign({}, tableProps, { rtl: rtl, visibleMonth: visibleMonth, onSelectYear: this.onSelectCell, goPrevDecade: this.goPrevDecade, goNextDecade: this.goNextDecade })));
                header = (react_1.default.createElement(year_panel_header_1.default, tslib_1.__assign({}, headerProps, { visibleMonth: visibleMonth, goPrevDecade: this.goPrevDecade, goNextDecade: this.goNextDecade })));
                break;
            }
        }
        var classNames = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "calendar")] = true,
            _a["".concat(prefix, "calendar-range")] = true,
            _a), className);
        return (react_1.default.createElement("div", tslib_1.__assign({}, util_1.obj.pickOthers(RangeCalendar.propTypes, others), { className: classNames }),
            header,
            react_1.default.createElement("div", { className: "".concat(prefix, "calendar-body") }, table)));
    };
    RangeCalendar.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { 
        /**
         * 样式前缀
         */
        prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, 
        /**
         * 默认的开始日期
         */
        defaultStartValue: utils_1.checkMomentObj, 
        /**
         * 默认的结束日期
         */
        defaultEndValue: utils_1.checkMomentObj, 
        /**
         * 开始日期（moment 对象）
         */
        startValue: utils_1.checkMomentObj, 
        /**
         * 结束日期（moment 对象）
         */
        endValue: utils_1.checkMomentObj, 
        // 面板模式
        mode: prop_types_1.default.oneOf(utils_1.CALENDAR_MODES), 
        // 禁用更改面板模式，采用 dropdown 的方式切换显示日期 (暂不正式对外透出)
        disableChangeMode: prop_types_1.default.bool, 
        // 日期值的格式（用于日期title显示的格式）
        format: prop_types_1.default.string, yearRange: prop_types_1.default.arrayOf(prop_types_1.default.number), 
        /**
         * 是否显示非本月的日期
         */
        showOtherMonth: prop_types_1.default.bool, 
        /**
         * 模板展示的月份（起始月份）
         */
        defaultVisibleMonth: prop_types_1.default.func, 
        /**
         * 展现的月份变化时的回调
         * @param {Object} value 显示的月份 (moment 对象)
         * @param {String} reason 触发月份改变原因
         */
        onVisibleMonthChange: prop_types_1.default.func, 
        /**
         * 不可选择的日期
         * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
         * @param {String} view 当前视图类型，year: 年， month: 月, date: 日
         * @returns {Boolean}
         */
        disabledDate: prop_types_1.default.func, 
        /**
         * 选择日期单元格时的回调
         * @param {Object} value 对应的日期值 (moment 对象)
         */
        onSelect: prop_types_1.default.func, 
        /**
         * 自定义日期单元格渲染
         */
        dateCellRender: prop_types_1.default.func, 
        /**
         * 自定义月份渲染函数
         * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
         * @returns {ReactNode}
         */
        monthCellRender: prop_types_1.default.func, yearCellRender: prop_types_1.default.func, locale: prop_types_1.default.object, className: prop_types_1.default.string });
    RangeCalendar.defaultProps = {
        prefix: 'next-',
        rtl: false,
        mode: utils_1.CALENDAR_MODE_DATE,
        disableChangeMode: false,
        format: 'YYYY-MM-DD',
        dateCellRender: function (value) { return value.date(); },
        onSelect: util_1.func.noop,
        onVisibleMonthChange: util_1.func.noop,
        locale: zh_cn_1.default.Calendar,
        showOtherMonth: false,
    };
    return RangeCalendar;
}(react_1.default.Component));
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(RangeCalendar), {
    componentName: 'Calendar',
});

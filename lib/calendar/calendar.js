"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var moment_1 = tslib_1.__importDefault(require("moment"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var card_header_1 = tslib_1.__importDefault(require("./head/card-header"));
var date_panel_header_1 = tslib_1.__importDefault(require("./head/date-panel-header"));
var month_panel_header_1 = tslib_1.__importDefault(require("./head/month-panel-header"));
var year_panel_header_1 = tslib_1.__importDefault(require("./head/year-panel-header"));
var date_table_1 = tslib_1.__importDefault(require("./table/date-table"));
var month_table_1 = tslib_1.__importDefault(require("./table/month-table"));
var year_table_1 = tslib_1.__importDefault(require("./table/year-table"));
var utils_1 = require("./utils");
var isValueChanged = function (value, oldValue) {
    if (value && oldValue) {
        if (!moment_1.default.isMoment(value)) {
            value = (0, moment_1.default)(value);
        }
        if (!moment_1.default.isMoment(oldValue)) {
            oldValue = (0, moment_1.default)(oldValue);
        }
        return value.valueOf() !== oldValue.valueOf();
    }
    else {
        return value !== oldValue;
    }
};
/** Calendar */
var Calendar = /** @class */ (function (_super) {
    tslib_1.__extends(Calendar, _super);
    function Calendar(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelectCell = function (date, nextMode) {
            var visibleMonth = _this.state.visibleMonth;
            var _a = _this.props, shape = _a.shape, showOtherMonth = _a.showOtherMonth;
            // 点击其他月份日期不生效
            if (!showOtherMonth && !(0, utils_1.isSameYearMonth)(visibleMonth, date)) {
                return;
            }
            _this.changeVisibleMonth(date, 'cellClick');
            if (!('value' in _this.props)) {
                // 非受控模式，直接修改当前 state
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
            if (!(0, utils_1.isSameYearMonth)(date, _this.state.visibleMonth)) {
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
        var value = (0, utils_1.formatDateValue)(props.value || props.defaultValue);
        var visibleMonth = (0, utils_1.getVisibleMonth)(props.defaultVisibleMonth, value);
        _this.MODES = props.modes;
        _this.today = (0, moment_1.default)();
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
            var value = (0, utils_1.formatDateValue)(props.value);
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
     * @param offset - 日期偏移的数量
     * @param type - 日期偏移的类型 days, months, years
     */
    Calendar.prototype.changeVisibleMonthByOffset = function (offset, type) {
        var cloneValue = this.state.visibleMonth.clone();
        cloneValue.add(offset, type);
        this.changeVisibleMonth(cloneValue, 'buttonClick');
    };
    Calendar.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, prefix = _d.prefix, rtl = _d.rtl, className = _d.className, shape = _d.shape, showOtherMonth = _d.showOtherMonth, format = _d.format, locale = _d.locale, dateCellRender = _d.dateCellRender, monthCellRender = _d.monthCellRender, yearCellRender = _d.yearCellRender, disabledDate = _d.disabledDate, yearRange = _d.yearRange, disableChangeMode = _d.disableChangeMode, others = tslib_1.__rest(_d, ["prefix", "rtl", "className", "shape", "showOtherMonth", "format", "locale", "dateCellRender", "monthCellRender", "yearCellRender", "disabledDate", "yearRange", "disableChangeMode"]);
        var state = this.state;
        var classNames = (0, classnames_1.default)((_a = {},
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
        var localeData = (0, utils_1.getLocaleData)(locale.format || {}, visibleMonth.localeData());
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
            _b[utils_1.CALENDAR_MODE_DATE] = (react_1.default.createElement(date_table_1.default, tslib_1.__assign({ format: format }, tableProps, { onSelectDate: this.onSelectCell }))),
            _b[utils_1.CALENDAR_MODE_MONTH] = react_1.default.createElement(month_table_1.default, tslib_1.__assign({}, tableProps, { onSelectMonth: this.onSelectCell })),
            _b[utils_1.CALENDAR_MODE_YEAR] = (react_1.default.createElement(year_table_1.default, tslib_1.__assign({}, tableProps, { rtl: rtl, onSelectYear: this.onSelectCell }))),
            _b);
        var panelHeaders = (_c = {},
            _c[utils_1.CALENDAR_MODE_DATE] = (react_1.default.createElement(date_panel_header_1.default, tslib_1.__assign({}, headerProps, { showOtherMonth: showOtherMonth }))),
            _c[utils_1.CALENDAR_MODE_MONTH] = react_1.default.createElement(month_panel_header_1.default, tslib_1.__assign({}, headerProps)),
            _c[utils_1.CALENDAR_MODE_YEAR] = react_1.default.createElement(year_panel_header_1.default, tslib_1.__assign({}, headerProps)),
            _c);
        return (react_1.default.createElement("div", tslib_1.__assign({}, util_1.obj.pickOthers(Calendar.propTypes, others), { className: classNames }),
            shape === 'panel' ? (panelHeaders[state.mode]) : (react_1.default.createElement(card_header_1.default, tslib_1.__assign({}, headerProps, { showOtherMonth: showOtherMonth }))),
            tables[state.mode]));
    };
    Calendar.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, rtl: prop_types_1.default.bool, defaultValue: utils_1.checkMomentObj, value: utils_1.checkMomentObj, mode: prop_types_1.default.oneOf(utils_1.CALENDAR_MODES), modes: prop_types_1.default.array, disableChangeMode: prop_types_1.default.bool, format: prop_types_1.default.string, showOtherMonth: prop_types_1.default.bool, defaultVisibleMonth: prop_types_1.default.func, shape: prop_types_1.default.oneOf(['card', 'fullscreen', 'panel']), onSelect: prop_types_1.default.func, onModeChange: prop_types_1.default.func, onVisibleMonthChange: prop_types_1.default.func, className: prop_types_1.default.string, dateCellRender: prop_types_1.default.func, monthCellRender: prop_types_1.default.func, yearCellRender: prop_types_1.default.func, yearRange: prop_types_1.default.arrayOf(prop_types_1.default.number), disabledDate: prop_types_1.default.func, locale: prop_types_1.default.object, onChange: prop_types_1.default.func });
    Calendar.defaultProps = {
        prefix: 'next-',
        rtl: false,
        shape: 'fullscreen',
        modes: utils_1.CALENDAR_MODES,
        disableChangeMode: false,
        format: 'YYYY-MM-DD',
        onSelect: util_1.func.noop,
        onVisibleMonthChange: util_1.func.noop,
        onModeChange: util_1.func.noop,
        dateCellRender: function (value) { return value.date(); },
        locale: zh_cn_1.default.Calendar,
        showOtherMonth: true,
    };
    Calendar.displayName = 'Calendar';
    return Calendar;
}(react_1.Component));
exports.default = (0, react_lifecycles_compat_1.polyfill)(Calendar);

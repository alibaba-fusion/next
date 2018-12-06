import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp, _initialiseProps;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';
import locale from '../locale/zh-cn';
import { func, obj } from '../util';
import CardHeader from './head/card-header';
import DatePanelHeader from './head/date-panel-header';
import MonthPanelHeader from './head/month-panel-header';
import YearPanelHeader from './head/year-panel-header';
import DateTable from './table/date-table';
import MonthTable from './table/month-table';
import YearTable from './table/year-table';
import { checkMomentObj, formatDateValue, getVisibleMonth, isSameYearMonth, CALENDAR_MODES, CALENDAR_MODE_DATE, CALENDAR_MODE_MONTH, CALENDAR_MODE_YEAR } from './utils';

/** Calendar */
var Calendar = (_temp = _class = function (_Component) {
    _inherits(Calendar, _Component);

    function Calendar(props, context) {
        _classCallCheck(this, Calendar);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _initialiseProps.call(_this);

        var value = formatDateValue(props.value || props.defaultValue);
        var visibleMonth = getVisibleMonth(props.defaultVisibleMonth, value);

        _this.MODES = props.modes;
        _this.today = moment();
        _this.state = {
            value: value,
            mode: props.mode || _this.MODES[0],
            visibleMonth: visibleMonth
        };
        return _this;
    }

    Calendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            var value = formatDateValue(nextProps.value);
            this.setState({
                value: value
            });

            if (value) {
                this.setState({
                    visibleMonth: value
                });
            }
        }

        if (nextProps.mode && this.MODES.indexOf(nextProps.mode) > -1) {
            this.setState({
                mode: nextProps.mode
            });
        }
    };

    /**
     * 根据日期偏移量设置当前展示的月份
     * @param {Number} offset 日期偏移的数量
     * @param {String} type 日期偏移的类型 days, months, years
     */
    Calendar.prototype.changeVisibleMonthByOffset = function changeVisibleMonthByOffset(offset, type) {
        var cloneValue = this.state.visibleMonth.clone();
        cloneValue.add(offset, type);
        this.changeVisibleMonth(cloneValue, 'buttonClick');
    };

    Calendar.prototype.render = function render() {
        var _classnames, _tables, _panelHeaders;

        var _props = this.props,
            prefix = _props.prefix,
            rtl = _props.rtl,
            className = _props.className,
            shape = _props.shape,
            showOtherMonth = _props.showOtherMonth,
            format = _props.format,
            locale = _props.locale,
            dateCellRender = _props.dateCellRender,
            monthCellRender = _props.monthCellRender,
            disabledDate = _props.disabledDate,
            others = _objectWithoutProperties(_props, ['prefix', 'rtl', 'className', 'shape', 'showOtherMonth', 'format', 'locale', 'dateCellRender', 'monthCellRender', 'disabledDate']);

        var state = this.state;

        var classNames = classnames((_classnames = {}, _classnames[prefix + 'calendar'] = true, _classnames[prefix + 'calendar-' + shape] = shape, _classnames), className);

        if (rtl) {
            others.dir = 'rtl';
        }

        var visibleMonth = state.visibleMonth;

        // reset moment locale
        if (locale.momentLocale) {
            state.value && state.value.locale(locale.momentLocale);
            visibleMonth.locale(locale.momentLocale);
        }

        var localeData = visibleMonth.localeData();

        var headerProps = {
            prefix: prefix,
            value: state.value,
            mode: state.mode,
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
            goPrevMonth: this.goPrevMonth
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
            disabledDate: disabledDate,
            momentLocale: localeData,
            today: this.today,
            goPrevDecade: this.goPrevDecade,
            goNextDecade: this.goNextDecade
        };

        var tables = (_tables = {}, _tables[CALENDAR_MODE_DATE] = React.createElement(DateTable, _extends({ format: format }, tableProps, { onSelectDate: this.onSelectCell })), _tables[CALENDAR_MODE_MONTH] = React.createElement(MonthTable, _extends({}, tableProps, { onSelectMonth: this.onSelectCell })), _tables[CALENDAR_MODE_YEAR] = React.createElement(YearTable, _extends({}, tableProps, { rtl: rtl, onSelectYear: this.onSelectCell })), _tables);

        var panelHeaders = (_panelHeaders = {}, _panelHeaders[CALENDAR_MODE_DATE] = React.createElement(DatePanelHeader, headerProps), _panelHeaders[CALENDAR_MODE_MONTH] = React.createElement(MonthPanelHeader, headerProps), _panelHeaders[CALENDAR_MODE_YEAR] = React.createElement(YearPanelHeader, headerProps), _panelHeaders);

        return React.createElement(
            'div',
            _extends({}, obj.pickOthers(Calendar.propTypes, others), { className: classNames }),
            shape === 'panel' ? panelHeaders[state.mode] : React.createElement(CardHeader, headerProps),
            tables[state.mode]
        );
    };

    return Calendar;
}(Component), _class.propTypes = {
    prefix: PropTypes.string,
    rtl: PropTypes.bool,
    /**
     * 默认选中的日期（moment 对象）
     */
    defaultValue: checkMomentObj,
    /**
     * 选中的日期值 (moment 对象)
     */
    value: checkMomentObj,
    // 面板模式
    mode: PropTypes.oneOf(CALENDAR_MODES),
    // 面板可变化的模式列表，仅初始化时接收一次
    modes: PropTypes.array,
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
    monthCellRender: PropTypes.func,
    /**
     * 不可选择的日期
     * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
     * @returns {Boolean}
     */
    disabledDate: PropTypes.func,
    /**
     * 国际化配置
     */
    locale: PropTypes.object
}, _class.defaultProps = {
    prefix: 'next-',
    rtl: false,
    shape: 'fullscreen',
    modes: CALENDAR_MODES,
    format: 'YYYY-MM-DD',
    onSelect: func.noop,
    onVisibleMonthChange: func.noop,
    dateCellRender: function dateCellRender(value) {
        return value.date();
    },
    locale: locale.Calendar,
    showOtherMonth: true
}, _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onSelectCell = function (date, nextMode) {
        _this2.changeVisibleMonth(date, 'cellClick');

        // 当用户所在的面板为初始化面板时，则选择动作为触发 onSelect 回调
        if (_this2.state.mode === _this2.MODES[0]) {
            _this2.props.onSelect(date);
        }
        _this2.changeMode(nextMode);
    };

    this.changeMode = function (nextMode) {
        if (nextMode && _this2.MODES.indexOf(nextMode) > -1 && nextMode !== _this2.state.mode) {
            _this2.setState({ mode: nextMode });
        }
    };

    this.changeVisibleMonth = function (date, reason) {
        if (!isSameYearMonth(date, _this2.state.visibleMonth)) {
            _this2.setState({ visibleMonth: date });
            _this2.props.onVisibleMonthChange(date, reason);
        }
    };

    this.goPrevDecade = function () {
        _this2.changeVisibleMonthByOffset(-10, 'years');
    };

    this.goNextDecade = function () {
        _this2.changeVisibleMonthByOffset(10, 'years');
    };

    this.goPrevYear = function () {
        _this2.changeVisibleMonthByOffset(-1, 'years');
    };

    this.goNextYear = function () {
        _this2.changeVisibleMonthByOffset(1, 'years');
    };

    this.goPrevMonth = function () {
        _this2.changeVisibleMonthByOffset(-1, 'months');
    };

    this.goNextMonth = function () {
        _this2.changeVisibleMonthByOffset(1, 'months');
    };
}, _temp);
Calendar.displayName = 'Calendar';


export default Calendar;
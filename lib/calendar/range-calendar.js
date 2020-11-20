'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _zhCn = require('../locale/zh-cn');

var _zhCn2 = _interopRequireDefault(_zhCn);

var _util = require('../util');

var _rangePanelHeader = require('./head/range-panel-header');

var _rangePanelHeader2 = _interopRequireDefault(_rangePanelHeader);

var _monthPanelHeader = require('./head/month-panel-header');

var _monthPanelHeader2 = _interopRequireDefault(_monthPanelHeader);

var _yearPanelHeader = require('./head/year-panel-header');

var _yearPanelHeader2 = _interopRequireDefault(_yearPanelHeader);

var _dateTable = require('./table/date-table');

var _dateTable2 = _interopRequireDefault(_dateTable);

var _monthTable = require('./table/month-table');

var _monthTable2 = _interopRequireDefault(_monthTable);

var _yearTable = require('./table/year-table');

var _yearTable2 = _interopRequireDefault(_yearTable);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangeCalendar = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(RangeCalendar, _React$Component);

    function RangeCalendar(props, context) {
        (0, _classCallCheck3.default)(this, RangeCalendar);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props, context));

        _this.onSelectCell = function (date, nextMode) {
            if (_this.state.mode === _utils.CALENDAR_MODE_DATE) {
                _this.props.onSelect(date);
            } else {
                _this.changeVisibleMonth(date, 'cellClick');
            }

            _this.changeMode(nextMode);
        };

        _this.changeMode = function (mode, activePanel) {
            if (typeof mode === 'string' && mode !== _this.state.mode) {
                _this.setState({ mode: mode });
            }
            if (activePanel && activePanel !== _this.state.activePanel) {
                _this.setState({ activePanel: activePanel });
            }
        };

        _this.changeVisibleMonth = function (date, reason) {
            if (!(0, _utils.isSameYearMonth)(date, _this.state.startVisibleMonth)) {
                _this.setState({ startVisibleMonth: date });
                _this.props.onVisibleMonthChange(date, reason);
            }
        };

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

        var startValue = (0, _utils.formatDateValue)(props.startValue || props.defaultStartValue);
        var endValue = (0, _utils.formatDateValue)(props.endValue || props.defaultEndValue);
        var visibleMonth = (0, _utils.getVisibleMonth)(props.defaultVisibleMonth, startValue);

        _this.state = {
            startValue: startValue,
            endValue: endValue,
            mode: props.mode,
            prevMode: props.mode,
            startVisibleMonth: visibleMonth,
            activePanel: undefined
        };
        _this.today = (0, _moment2.default)();
        return _this;
    }

    RangeCalendar.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var st = {};
        if ('startValue' in props) {
            var startValue = (0, _utils.formatDateValue)(props.startValue);
            st.startValue = startValue;
            if (startValue && !startValue.isSame(state.startValue, 'day')) {
                st.startVisibleMonth = startValue;
            }
        }

        if ('endValue' in props) {
            st.endValue = (0, _utils.formatDateValue)(props.endValue);
        }

        if ('mode' in props && state.prevMode !== props.mode) {
            st.prevMode = props.mode;
            st.mode = props.mode;
        }

        return st;
    };

    /**
     * 根据日期偏移量设置当前展示的月份
     * @param {Number} offset 日期偏移量
     * @param {String} type 日期偏移类型 days, months, years
     */


    RangeCalendar.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            prefix = _props.prefix,
            rtl = _props.rtl,
            dateCellRender = _props.dateCellRender,
            monthCellRender = _props.monthCellRender,
            yearCellRender = _props.yearCellRender,
            className = _props.className,
            format = _props.format,
            locale = _props.locale,
            showOtherMonth = _props.showOtherMonth,
            disabledDate = _props.disabledDate,
            disableChangeMode = _props.disableChangeMode,
            yearRange = _props.yearRange,
            others = (0, _objectWithoutProperties3.default)(_props, ['prefix', 'rtl', 'dateCellRender', 'monthCellRender', 'yearCellRender', 'className', 'format', 'locale', 'showOtherMonth', 'disabledDate', 'disableChangeMode', 'yearRange']);
        var _state = this.state,
            startValue = _state.startValue,
            endValue = _state.endValue,
            mode = _state.mode,
            startVisibleMonth = _state.startVisibleMonth,
            activePanel = _state.activePanel;

        // reset moment locale

        if (locale.momentLocale) {
            startValue && startValue.locale(locale.momentLocale);
            endValue && endValue.locale(locale.momentLocale);
            startVisibleMonth.locale(locale.momentLocale);
        }

        if (rtl) {
            others.dir = 'rtl';
        }
        var localeData = (0, _utils.getLocaleData)(locale.format || {}, startVisibleMonth.localeData());

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
            disableChangeMode: disableChangeMode
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
            changeVisibleMonth: this.changeVisibleMonth
        };

        var visibleMonths = {
            start: startVisibleMonth,
            end: endVisibleMonth
        };

        var visibleMonth = visibleMonths[activePanel];

        var header = void 0;
        var table = void 0;

        switch (mode) {
            case _utils.CALENDAR_MODE_DATE:
                {
                    table = [_react2.default.createElement(
                        'div',
                        {
                            className: prefix + 'calendar-body-left',
                            key: 'left-panel'
                        },
                        _react2.default.createElement(_dateTable2.default, (0, _extends3.default)({
                            format: format
                        }, tableProps, {
                            visibleMonth: startVisibleMonth,
                            onSelectDate: this.onSelectCell
                        }))
                    ), _react2.default.createElement(
                        'div',
                        {
                            className: prefix + 'calendar-body-right',
                            key: 'right-panel'
                        },
                        _react2.default.createElement(_dateTable2.default, (0, _extends3.default)({
                            format: format
                        }, tableProps, {
                            visibleMonth: endVisibleMonth,
                            onSelectDate: this.onSelectCell
                        }))
                    )];
                    header = _react2.default.createElement(_rangePanelHeader2.default, (0, _extends3.default)({}, headerProps, {
                        goPrevYear: this.goPrevYear,
                        goPrevMonth: this.goPrevMonth,
                        goNextYear: this.goNextYear,
                        goNextMonth: this.goNextMonth
                    }));
                    break;
                }
            case _utils.CALENDAR_MODE_MONTH:
                {
                    table = _react2.default.createElement(_monthTable2.default, (0, _extends3.default)({}, tableProps, {
                        visibleMonth: visibleMonth,
                        onSelectMonth: this.onSelectCell
                    }));
                    header = _react2.default.createElement(_monthPanelHeader2.default, (0, _extends3.default)({}, headerProps, {
                        visibleMonth: visibleMonth,
                        goPrevYear: this.goPrevYear,
                        goNextYear: this.goNextYear
                    }));
                    break;
                }
            case _utils.CALENDAR_MODE_YEAR:
                {
                    table = _react2.default.createElement(_yearTable2.default, (0, _extends3.default)({}, tableProps, {
                        rtl: rtl,
                        visibleMonth: visibleMonth,
                        onSelectYear: this.onSelectCell,
                        goPrevDecade: this.goPrevDecade,
                        goNextDecade: this.goNextDecade
                    }));
                    header = _react2.default.createElement(_yearPanelHeader2.default, (0, _extends3.default)({}, headerProps, {
                        visibleMonth: visibleMonth,
                        goPrevDecade: this.goPrevDecade,
                        goNextDecade: this.goNextDecade
                    }));
                    break;
                }
        }

        var classNames = (0, _classnames3.default)((_classnames = {}, _classnames[prefix + 'calendar'] = true, _classnames[prefix + 'calendar-range'] = true, _classnames), className);

        return _react2.default.createElement(
            'div',
            (0, _extends3.default)({}, _util.obj.pickOthers(RangeCalendar.propTypes, others), {
                className: classNames
            }),
            header,
            _react2.default.createElement(
                'div',
                { className: prefix + 'calendar-body' },
                table
            )
        );
    };

    return RangeCalendar;
}(_react2.default.Component), _class.propTypes = (0, _extends3.default)({}, _configProvider2.default.propTypes, {
    /**
     * 样式前缀
     */
    prefix: _propTypes2.default.string,
    rtl: _propTypes2.default.bool,
    /**
     * 默认的开始日期
     */
    defaultStartValue: _utils.checkMomentObj,
    /**
     * 默认的结束日期
     */
    defaultEndValue: _utils.checkMomentObj,
    /**
     * 开始日期（moment 对象）
     */
    startValue: _utils.checkMomentObj,
    /**
     * 结束日期（moment 对象）
     */
    endValue: _utils.checkMomentObj,
    // 面板模式
    mode: _propTypes2.default.oneOf(_utils.CALENDAR_MODES),
    // 禁用更改面板模式，采用 dropdown 的方式切换显示日期 (暂不正式对外透出)
    disableChangeMode: _propTypes2.default.bool,
    // 日期值的格式（用于日期title显示的格式）
    format: _propTypes2.default.string,
    yearRange: _propTypes2.default.arrayOf(_propTypes2.default.number),
    /**
     * 是否显示非本月的日期
     */
    showOtherMonth: _propTypes2.default.bool,
    /**
     * 模板展示的月份（起始月份）
     */
    defaultVisibleMonth: _propTypes2.default.func,
    /**
     * 展现的月份变化时的回调
     * @param {Object} value 显示的月份 (moment 对象)
     * @param {String} reason 触发月份改变原因
     */
    onVisibleMonthChange: _propTypes2.default.func,
    /**
     * 不可选择的日期
     * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
     * @param {String} view 当前视图类型，year: 年， month: 月, date: 日
     * @returns {Boolean}
     */
    disabledDate: _propTypes2.default.func,
    /**
     * 选择日期单元格时的回调
     * @param {Object} value 对应的日期值 (moment 对象)
     */
    onSelect: _propTypes2.default.func,
    /**
     * 自定义日期单元格渲染
     */
    dateCellRender: _propTypes2.default.func,
    /**
     * 自定义月份渲染函数
     * @param {Object} calendarDate 对应 Calendar 返回的自定义日期对象
     * @returns {ReactNode}
     */
    monthCellRender: _propTypes2.default.func,
    yearCellRender: _propTypes2.default.func, // 兼容 0.x yearCellRender
    locale: _propTypes2.default.object,
    className: _propTypes2.default.string
}), _class.defaultProps = {
    prefix: 'next-',
    rtl: false,
    mode: _utils.CALENDAR_MODE_DATE,
    disableChangeMode: false,
    format: 'YYYY-MM-DD',
    dateCellRender: function dateCellRender(value) {
        return value.date();
    },
    onSelect: _util.func.noop,
    onVisibleMonthChange: _util.func.noop,
    locale: _zhCn2.default.Calendar,
    showOtherMonth: false
}, _temp);
RangeCalendar.displayName = 'RangeCalendar';
exports.default = _configProvider2.default.config((0, _reactLifecyclesCompat.polyfill)(RangeCalendar), {
    componentName: 'Calendar'
});
module.exports = exports['default'];
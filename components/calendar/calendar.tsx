import React, { Component, type MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import moment, { type MomentInput, type Moment } from 'moment';
import classnames from 'classnames';
import ConfigProvider from '../config-provider';
import nextLocale from '../locale/zh-cn';
import { type ClassPropsWithDefault, func, obj } from '../util';
import CardHeader from './head/card-header';
import DatePanelHeader from './head/date-panel-header';
import MonthPanelHeader from './head/month-panel-header';
import YearPanelHeader from './head/year-panel-header';
import DateTable from './table/date-table';
import MonthTable from './table/month-table';
import YearTable from './table/year-table';
import {
    checkMomentObj,
    formatDateValue,
    getVisibleMonth,
    isSameYearMonth,
    CALENDAR_MODES,
    CALENDAR_MODE_DATE,
    CALENDAR_MODE_MONTH,
    CALENDAR_MODE_YEAR,
    getLocaleData,
} from './utils';
import type { CalendarMode, CalendarProps, CalendarState, VisibleMonthChangeType } from './types';

const isValueChanged = (value: MomentInput, oldValue: MomentInput) => {
    if (value && oldValue) {
        if (!moment.isMoment(value)) {
            value = moment(value);
        }
        if (!moment.isMoment(oldValue)) {
            oldValue = moment(oldValue);
        }
        return value.valueOf() !== oldValue.valueOf();
    } else {
        return value !== oldValue;
    }
};

type InnerCalendarProps = ClassPropsWithDefault<CalendarProps, keyof typeof Calendar.defaultProps>;

/** Calendar */
class Calendar extends Component<CalendarProps, CalendarState> {
    static propTypes = {
        ...ConfigProvider.propTypes,
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
        /**
         * 面板模式
         */
        mode: PropTypes.oneOf(CALENDAR_MODES), // 生成 API 文档需要手动改回 ['date', 'month', 'year']
        // 面板可变化的模式列表，仅初始化时接收一次
        modes: PropTypes.array,
        // 禁用更改面板模式，采用 dropdown 的方式切换显示日期 (暂不正式对外透出)
        disableChangeMode: PropTypes.bool,
        // 日期值的格式（用于日期 title 显示的格式）
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
         * @param value - 对应的日期值 (moment 对象)
         */
        onSelect: PropTypes.func,
        /**
         * 面板模式变化时的回调
         * @param mode - 对应面板模式 date month year
         */
        onModeChange: PropTypes.func,
        /**
         * 展现的月份变化时的回调
         * @param value - 显示的月份 (moment 对象)
         * @param reason - 触发月份改变原因
         */
        onVisibleMonthChange: PropTypes.func,
        /**
         * 自定义样式类
         */
        className: PropTypes.string,
        /**
         * 自定义日期渲染函数
         * @param value - 日期值（moment 对象）
         */
        dateCellRender: PropTypes.func,
        /**
         * 自定义月份渲染函数
         * @param calendarDate - 对应 Calendar 返回的自定义日期对象
         */
        monthCellRender: PropTypes.func,
        yearCellRender: PropTypes.func, // 兼容 0.x yearCellRender
        /**
         * 年份范围，[START_YEAR, END_YEAR] (只在 shape 为‘card’, 'fullscreen' 下生效)
         */
        yearRange: PropTypes.arrayOf(PropTypes.number),
        /**
         * 不可选择的日期
         * @param calendarDate - 对应 Calendar 返回的自定义日期对象
         * @param view - 当前视图类型，year: 年，month: 月，date: 日
         */
        disabledDate: PropTypes.func,
        /**
         * 国际化配置
         */
        locale: PropTypes.object,
        onChange: PropTypes.func,
    };

    static defaultProps: CalendarProps = {
        prefix: 'next-',
        rtl: false,
        shape: 'fullscreen',
        modes: CALENDAR_MODES,
        disableChangeMode: false,
        format: 'YYYY-MM-DD',
        onSelect: func.noop,
        onVisibleMonthChange: func.noop,
        onModeChange: func.noop,
        dateCellRender: value => value.date(),
        locale: nextLocale.Calendar,
        showOtherMonth: true,
    };
    MODES: CalendarMode[];
    today: Moment;

    readonly props: InnerCalendarProps;

    constructor(props: CalendarProps) {
        super(props);
        const value = formatDateValue(props.value || props.defaultValue);
        const visibleMonth = getVisibleMonth(props.defaultVisibleMonth, value);

        this.MODES = props.modes!;
        this.today = moment();
        this.state = {
            value,
            mode: props.mode || this.MODES![0],
            MODES: this.MODES,
            visibleMonth,
        };
    }

    static getDerivedStateFromProps(props: CalendarProps, state: CalendarState) {
        const st: Partial<CalendarState> = {};
        if ('value' in props) {
            const value = formatDateValue(props.value);
            if (value && isValueChanged(props.value, state.value)) {
                st.visibleMonth = value;
            }
            st.value = value;
        }

        if (props.mode && state.MODES.indexOf(props.mode) > -1) {
            st.mode = props.mode;
        }

        return st;
    }

    onSelectCell = (date: Moment, nextMode: CalendarMode | MouseEvent<HTMLElement>) => {
        const { visibleMonth } = this.state;
        const { shape, showOtherMonth } = this.props;

        // 点击其他月份日期不生效
        if (!showOtherMonth && !isSameYearMonth(visibleMonth, date)) {
            return;
        }

        this.changeVisibleMonth(date, 'cellClick');

        if (!('value' in this.props)) {
            // 非受控模式，直接修改当前 state
            this.setState({
                value: date,
            });
        }

        // 当用户所在的面板为初始化面板时，则选择动作为触发 onSelect 回调
        if (this.state.mode === this.MODES[0]) {
            this.props.onSelect(date);
        }

        if (shape === 'panel') {
            this.changeMode(nextMode as CalendarMode);
        }
    };

    changeMode = (nextMode: CalendarMode) => {
        if (nextMode && this.MODES.indexOf(nextMode) > -1 && nextMode !== this.state.mode) {
            this.setState({ mode: nextMode });
            this.props.onModeChange(nextMode);
        }
    };

    changeVisibleMonth = (date: Moment, reason: VisibleMonthChangeType) => {
        if (!isSameYearMonth(date, this.state.visibleMonth)) {
            this.setState({ visibleMonth: date });
            this.props.onVisibleMonthChange(date, reason);
        }
    };

    /**
     * 根据日期偏移量设置当前展示的月份
     * @param offset - 日期偏移的数量
     * @param type - 日期偏移的类型 days, months, years
     */
    changeVisibleMonthByOffset(offset: number, type: 'days' | 'months' | 'years') {
        const cloneValue = this.state.visibleMonth.clone();
        cloneValue.add(offset, type);
        this.changeVisibleMonth(cloneValue, 'buttonClick');
    }

    goPrevDecade = () => {
        this.changeVisibleMonthByOffset(-10, 'years');
    };

    goNextDecade = () => {
        this.changeVisibleMonthByOffset(10, 'years');
    };

    goPrevYear = () => {
        this.changeVisibleMonthByOffset(-1, 'years');
    };

    goNextYear = () => {
        this.changeVisibleMonthByOffset(1, 'years');
    };

    goPrevMonth = () => {
        this.changeVisibleMonthByOffset(-1, 'months');
    };

    goNextMonth = () => {
        this.changeVisibleMonthByOffset(1, 'months');
    };

    render() {
        const {
            prefix,
            rtl,
            className,
            shape,
            showOtherMonth,
            format,
            locale,
            dateCellRender,
            monthCellRender,
            yearCellRender,
            disabledDate,
            yearRange,
            disableChangeMode,
            ...others
        } = this.props;
        const state = this.state;

        const classNames = classnames(
            {
                [`${prefix}calendar`]: true,
                [`${prefix}calendar-${shape}`]: shape,
            },
            className
        );

        if (rtl) {
            others.dir = 'rtl';
        }

        const visibleMonth = state.visibleMonth;

        // reset moment locale
        if (locale.momentLocale) {
            state.value && state.value.locale(locale.momentLocale);
            visibleMonth.locale(locale.momentLocale);
        }

        const localeData = getLocaleData(locale.format || {}, visibleMonth.localeData());

        const headerProps = {
            prefix,
            value: state.value,
            mode: state.mode,
            disableChangeMode,
            yearRange,
            locale,
            rtl,
            visibleMonth,
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

        const tableProps = {
            prefix,
            visibleMonth,
            showOtherMonth,
            value: state.value,
            mode: state.mode,
            locale,
            dateCellRender,
            monthCellRender,
            yearCellRender,
            disabledDate,
            momentLocale: localeData,
            today: this.today,
            goPrevDecade: this.goPrevDecade,
            goNextDecade: this.goNextDecade,
        };

        const tables = {
            [CALENDAR_MODE_DATE]: (
                <DateTable format={format} {...tableProps} onSelectDate={this.onSelectCell} />
            ),
            [CALENDAR_MODE_MONTH]: <MonthTable {...tableProps} onSelectMonth={this.onSelectCell} />,
            [CALENDAR_MODE_YEAR]: (
                <YearTable {...tableProps} rtl={rtl} onSelectYear={this.onSelectCell} />
            ),
        };

        const panelHeaders = {
            [CALENDAR_MODE_DATE]: <DatePanelHeader {...headerProps} />,
            [CALENDAR_MODE_MONTH]: <MonthPanelHeader {...headerProps} />,
            [CALENDAR_MODE_YEAR]: <YearPanelHeader {...headerProps} />,
        };

        return (
            <div {...obj.pickOthers(Calendar.propTypes, others)} className={classNames}>
                {shape === 'panel' ? panelHeaders[state.mode] : <CardHeader {...headerProps} />}
                {tables[state.mode]}
            </div>
        );
    }
}

export default polyfill(Calendar);

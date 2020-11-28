import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';
import SharedPT from '../prop-types';
import { DATE_PANEL_MODE } from '../constant';
import { func, obj, datejs, KEYCODE } from '../../util';

const { bindCtx, witchCustomRender } = func;
const { DATE, WEEK, MONTH, QUARTER, YEAR, DECADE } = DATE_PANEL_MODE;

class DatePanel extends React.Component {
    static propTypes = {
        mode: SharedPT.panelMode,
        value: SharedPT.date,
        panelValue: SharedPT.date,
        dateCellRender: PT.func,
        disabledDate: PT.func,
        selectedState: PT.func,
        hoveredState: PT.func,
        onSelect: PT.func,
        onDateSelect: PT.func,
        startOnSunday: PT.bool,
        dateCellClassName: PT.oneOfType([PT.func, PT.string]),
    };

    constructor(props) {
        super(props);

        this.prefixCls = `${props.prefix}calendar2`;

        bindCtx(this, [
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

        this.state = {
            hoverValue: null,
        };
    }

    handleSelect(v, e) {
        func.call(this.props, 'onSelect', [v, e]);
    }

    handleKeyDown(v, e) {
        switch (e.keyCode) {
            case KEYCODE.ENTER:
                this.handleSelect(v);
                break;
            case KEYCODE.RIGHT:
                break;
        }
        // e.preventDefault();
    }

    handleMouseEnter(v, e) {
        func.call(this.props.dateCellProps, 'onMouseEnter', [v, e]);
    }

    handleMouseLeave(v, e) {
        func.call(this.props.dateCellProps, 'onMouseLeave', [v, e]);
    }

    isSame(curDate, date, mode) {
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
                return curDate.isBefore(date) && curDate.isAfter(date.clone(1, 'year'));
            case DECADE:
                return curDate.isBefore(date) && curDate.isAfter(date.clone(10, 'year'));
        }
    }

    /**
     * 渲染日期面板
     * @param {Object[]} cellData - 单元格数据
     * @param {String}   cellData[].label - 单元格显示文本
     * @param {Object}   cellData[].value - 日期对象
     * @param {Boolean}  cellData[].isCurrent - 是否是当前面板时间范围内的值
     */
    renderCellContent(cellData) {
        const { props } = this;
        const { mode, hoveredState, dateCellClassName } = props;
        const { hoverValue } = this.state;

        const cellContent = [];
        const prefixCls = `${this.prefixCls}-cell`;

        // 面板行数
        const mode2Rows = {
            [DATE]: 7,
            [WEEK]: 7,
            [MONTH]: 3,
            [QUARTER]: 4,
            [YEAR]: 3,
            [DECADE]: 3,
        };
        const now = datejs();

        for (let i = 0; i < cellData.length; ) {
            const children = [];

            for (let j = 0; j < mode2Rows[mode]; j++) {
                const { label, value, key, isCurrent } = cellData[i++];

                const isDisabled = props.disabledDate && props.disabledDate(value);
                const hoverState = hoverValue && hoveredState && hoveredState(hoverValue);

                const className = classnames(`${prefixCls}-inner`, {
                    [`${prefixCls}-current`]: isCurrent, // 是否属于当前面板值
                    [`${prefixCls}-today`]: this.isSame(value, now, mode),
                    [`${prefixCls}-selected`]: this.isSame(value, props.value, mode),
                    [`${prefixCls}-disabled`]: isDisabled,
                    [`${prefixCls}-range-hover`]: hoverState,
                    ...(dateCellClassName && dateCellClassName(value)),
                });

                let onEvents = null;

                if (!isDisabled) {
                    onEvents = {
                        onClick: e => this.handleSelect(value, e),
                        onKeyDown: e => this.handleKeyDown(value, e),
                        onMouseEnter: e => this.handleMouseEnter(value, e),
                        onMouseLeave: e => this.handleMouseLeave(value, e),
                    };
                }

                children.push(
                    <td className={prefixCls} key={key} title={key} {...onEvents}>
                        <div role="cell" tabIndex="-1" className={className}>
                            {witchCustomRender(
                                'dateCellRender',
                                props,
                                value,
                                <div className={`${prefixCls}-value`}>{label}</div>
                            )}
                        </div>
                    </td>
                );
            }

            cellContent.push(
                <tr key={i} className="row">
                    {children}
                </tr>
            );
        }

        return cellContent;
    }

    // 星期几
    renderWeekdaysHead() {
        const weekdaysShort = datejs.weekdaysShort();
        const startOnSunday = obj.get('startOnSunday', this.props, this.props.locale.startOnSunday);

        if (!startOnSunday) {
            weekdaysShort.push(weekdaysShort.shift());
        }
        return (
            <thead>
                <tr>
                    {weekdaysShort.map(d => (
                        <th key={d}>{d}</th>
                    ))}
                </tr>
            </thead>
        );
    }

    getDateCellData() {
        const { panelValue: value, startOnSunday } = this.props;

        const firstDayOfMonth = value.clone().startOf('month');
        const weekOfFirstDay = firstDayOfMonth.day(); // 当月第一天星期几
        const daysOfTheMonth = value.endOf('month').date(); // 当月天数

        const cellData = [];
        const preDays = (weekOfFirstDay + (startOnSunday ? 0 : 6)) % 7;
        const nextDays = (7 - ((preDays + daysOfTheMonth) % 7)) % 7;

        // 上个月日期
        for (let i = preDays; i > 0; i--) {
            cellData.push(firstDayOfMonth.clone().subtract(i, 'day'));
        }

        // 本月日期
        for (let i = 0; i < daysOfTheMonth; i++) {
            cellData.push(firstDayOfMonth.clone().add(i, 'day'));
        }

        // 下个月日期
        for (let i = 0; i < nextDays; i++) {
            cellData.push(firstDayOfMonth.clone().add(daysOfTheMonth + i, 'day'));
        }

        return cellData.map(value => {
            return {
                value,
                label: value.date(),
                isCurrent: value.isSame(firstDayOfMonth, 'month'),
                key: value.format('YYYY-MM-DD'),
            };
        });
    }

    getMonthCellData() {
        const { panelValue } = this.props;

        return datejs.monthsShort().map((label, index) => {
            const value = panelValue.clone().month(index);

            return {
                label,
                value,
                isCurrent: true,
                key: value.format('YYYY-MM'),
            };
        });
    }

    getQuarterCellData() {
        const { panelValue } = this.props;

        return [1, 2, 3, 4].map(i => {
            return {
                label: `Q${i}`,
                value: panelValue.clone().quarter(i),
                isCurrent: true,
                key: `Q${i}`,
            };
        });
    }

    getYearCellData() {
        const { panelValue } = this.props;
        const curYear = panelValue.year();
        const startYear = curYear - (curYear % 10) - 1;
        const cellData = [];

        for (let i = 0; i < 12; i++) {
            const y = startYear + i;

            cellData.push({
                value: panelValue.clone().year(y),
                label: y,
                isCurrent: i > 0 && i < 11,
                key: y,
            });
        }

        return cellData;
    }

    getDecadeData() {
        const { panelValue } = this.props;
        const curYear = panelValue.year();
        const startYear = curYear - (curYear % 100) - 10;
        const cellData = [];

        for (let i = 0; i < 12; i++) {
            const y = startYear + i * 10;

            cellData.push({
                value: panelValue.clone().year(y),
                label: `${y}-${y + 9}`,
                isCurrent: i > 0 && i < 11,
                key: `${y}-${y + 9}`,
            });
        }

        return cellData;
    }

    render() {
        const { mode } = this.props;
        const mode2Data = {
            [DATE]: this.getDateCellData,
            [WEEK]: this.getDateCellData,
            [MONTH]: this.getMonthCellData,
            [QUARTER]: this.getQuarterCellData,
            [YEAR]: this.getYearCellData,
            [DECADE]: this.getDecadeData,
        };

        return (
            <table className={`${this.prefixCls}-table ${this.prefixCls}-table-${mode}`}>
                {mode === DATE ? this.renderWeekdaysHead() : null}
                <tbody>{this.renderCellContent(mode2Data[mode]())}</tbody>
            </table>
        );
    }
}

export default polyfill(DatePanel);

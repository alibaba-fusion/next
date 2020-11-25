import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import { CALENDAR_MODE } from '../constant';
import { func, datejs, KEYCODE } from '../../util';

const { bindCtx, witchCustomRender } = func;
const { DATE, WEEK, MONTH, QUARTER, YEAR, YEAR_RANGE } = CALENDAR_MODE;

function getCellKey(v, mode) {
    const mode2fmt = {
        [DATE]: 'YYYY-MM-DD',
        [MONTH]: 'YYYY-MM',
        [YEAR]: 'YYYY',
    };

    //  周&季度不直接支持格式化
    return mode === WEEK
        ? `${v.year()}-Q${v.week()}w`
        : mode === QUARTER
        ? `${v.year()}-Q${v.quarter()}`
        : v.format(mode2fmt[mode]);
}

class DateView extends React.Component {
    static propTypes = {
        mode: PT.any,
        value: PT.any,
        defaultValue: PT.any,
        cellRender: PT.any,
        startOnSunday: PT.bool,
        panelDate: PT.any,
        disabledDate: PT.func,
        selectedState: PT.func,
        hoveredState: PT.func,
        onSelect: PT.func,
        onModeChange: PT.func,
        onDateSelect: PT.func,
        cellClassName: PT.func,
    };

    static defaultProps = {
        mode: DATE,
        startOnSunday: false,
    };

    constructor(props) {
        super(props);

        bindCtx(this, [
            'getDateData',
            'getMonthData',
            'getYearData',
            'getYearRangeData',
            'handleKeyDown',
            'handleSelect',
        ]);

        this.state = {
            hoverValue: null,
        };
    }

    // ------> utils

    // ------> eventHandler

    handleSelect(v, e) {
        console.log('[DateView]');
        func.call(this.props, 'onSelect', [v, e]);
    }

    handleKeyDown(e, v) {
        console.log(e, v);
        switch (e.keyCode) {
            case KEYCODE.ENTER:
                this.handleSelect(v);
                break;
            case KEYCODE.RIGHT:
                console.log(v);
                break;
        }
        // e.preventDefault();
    }

    // ------> render

    /**
     * 渲染日期面板
     * @param {Object[]} cellData - 单元格数据
     * @param {String}   cellData[].label - 单元格显示文本
     * @param {Object}   cellData[].value - 日期对象
     * @param {Boolean}  cellData[].isCurrent - 是否是当前面板时间范围内的值
     */
    renderCellContent(cellData) {
        const { props } = this;
        const { mode, hoveredState, cellClassName } = props;
        const { hoverValue } = this.state;

        const cellContent = [];

        // 面板行数
        const mode2Rows = {
            [DATE]: 7,
            [WEEK]: 7,
            [MONTH]: 4,
            [QUARTER]: 1,
            [YEAR]: 3,
            [YEAR_RANGE]: 3,
        };
        const unit = mode === 'date' ? 'day' : mode;
        const now = datejs();

        for (let i = 0; i < cellData.length; ) {
            const children = [];

            for (let j = 0; j < mode2Rows[mode]; j++) {
                const { label, value, key, isCurrent } = cellData[i++];

                const isDisabled = props.disabledDate && props.disabledDate(value);
                const hoverState = hoverValue && hoveredState && hoveredState(hoverValue);

                const className = classnames('calendar-cell-inner', {
                    'calendar-cell-current': isCurrent, // 是否属于当前面板值
                    'calendar-cell-today': value.isSame(now, mode),
                    'calendar-cell-selected': value.isSame(props.value, unit),
                    'calendar-cell-disabled': isDisabled,
                    'calendar-cell-range-hover': hoverState,
                    ...(cellClassName && cellClassName(value)),
                });

                let onEvents = null;

                if (!isDisabled) {
                    onEvents = {
                        onClick: e => this.handleSelect(value, e),
                        onKeyDown: e => this.handleKeyDown(value, e),
                    };

                    // 为了处理hover逻辑
                    ['onMouseEnter', 'onMouseLeave'].forEach(eventName => {
                        if (eventName in props) {
                            onEvents[eventName] = e => props[eventName](value, e);
                        }
                    });
                }

                children.push(
                    <td className="calendar-cell" key={key} title={key}>
                        <div role="button" tabIndex="0" className={className} {...onEvents}>
                            {witchCustomRender('cellRender', props, [value, mode], label)}
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

    // label：星期几
    renderWeekdaysHead() {
        const weekdaysShort = datejs.weekdaysShort();

        if (!this.props.startOnSunday) {
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

    getDateData() {
        const { panelDate: value, startOnSunday, mode } = this.props;

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
                key: getCellKey(value, mode),
            };
        });
    }

    getMonthData() {
        const { panelDate, mode } = this.props;

        return datejs.monthsShort().map((label, index) => {
            const value = panelDate.clone().month(index);

            return {
                label,
                value,
                isCurrent: true,
                key: getCellKey(value, mode),
            };
        });
    }

    getYearData() {
        const { panelDate, mode } = this.props;
        const curYear = panelDate.year();
        const startYear = curYear - (curYear % 10) - 1;
        const cellData = [];

        for (let i = 0; i < 12; i++) {
            const y = startYear + i;
            const value = panelDate.clone().year(y);

            cellData.push({
                value,
                label: y,
                isCurrent: i !== 0 && i !== 11,
                key: getCellKey(value, mode),
            });
        }

        return cellData;
    }

    getYearRangeData() {
        const { panelDate, mode } = this.props;
        const curYear = panelDate.year();
        const startYear = curYear - (curYear % 100) - 10;
        const cellData = [];

        for (let i = 0; i < 12; i++) {
            const y = startYear + i * 10;
            const value = panelDate.clone().year(y);

            cellData.push({
                value,
                label: `${y}-${y + 9}`,
                isCurrent: i !== 0 && i !== 11,
                key: getCellKey(value, mode),
            });
        }

        return cellData;
    }

    render() {
        const { mode } = this.props;
        const mode2Data = {
            [DATE]: this.getDateData,
            // [WEEK]: this.renderDate,
            [MONTH]: this.getMonthData,
            // [QUARTER]: this.renderQuarter,
            [YEAR]: this.getYearData,
            [YEAR_RANGE]: this.getYearRangeData,
        };

        return (
            <table className="calendar-date">
                {mode === DATE ? this.renderWeekdaysHead() : null}
                <tbody>{this.renderCellContent(mode2Data[mode]())}</tbody>
            </table>
        );
    }
}

export default polyfill(DateView);

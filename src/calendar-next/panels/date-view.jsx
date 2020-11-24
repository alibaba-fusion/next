import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import { CALENDAR_MODE, CALENDAR_CELL_STATE } from '../constant';
import { func, datejs, KEYCODE, obj } from '../../util';

const { bindCtx, witchCustomRender } = func;
const { DATE, WEEK, MONTH, QUARTER, YEAR, YEAR_RANGE } = CALENDAR_MODE;

function getCellKey(v, mode) {
    const mode2fmt = {
        [DATE]: 'YYYY-MM-DD',
        [MONTH]: 'YYYY-MM',
        [YEAR]: 'YYYY',
    };

    //  周&季度不直接支持格式化
    if (mode === WEEK) {
        return `${v.year()}-Q${v.week()}w`;
    } else if (mode === QUARTER) {
        return `${v.year()}-Q${v.quarter()}`;
    } else {
        return v.format(mode2fmt[mode]);
    }
}

class DateView extends React.Component {
    static propTypes = {
        mode: PT.any,
        value: PT.any,
        defaultValue: PT.any,
        cellRender: PT.any,
        startOnSunday: PT.bool,
        visibleValue: PT.any,
        disabledDate: PT.func,
        selectedState: PT.func,
        onSelect: PT.func,
        onModeChange: PT.func,
        onDateSelect: PT.func,
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
            'handleMouseEnter',
            'handleMouseLeave',
        ]);

        this.state = {
            hoverKey: null,
        };
    }

    // ------> utils

    // ------> eventHandler

    handleSelect(v) {
        console.log('[DateView]');
        func.call(this.props, 'onSelect', [v]);
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

    handleMouseEnter(v) {
        this.setState({
            hoverKey: v,
        });
    }

    handleMouseLeave() {
        this.setState({
            hoverKey: null,
        });
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
        const { mode } = props;
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
        const selectedState = obj.get('selectedState', props, v => v.isSame(props.value, unit));
        const now = datejs();

        for (let i = 0; i < cellData.length; ) {
            const children = [];

            for (let j = 0; j < mode2Rows[mode]; j++) {
                const { label, value, key, isCurrent } = cellData[i++];

                const state = selectedState(value);
                const className = classnames({
                    'calendar-cell-inner': true,
                    'calendar-cell-current': isCurrent,
                    'calendar-cell-today': value.isSame(now, mode),
                    'calendar-cell-selected': state >= CALENDAR_CELL_STATE.SELECTED,
                    'calendar-cell-range-begin': state === CALENDAR_CELL_STATE.SELECTED_BEGIN,
                    'calendar-cell-range-end': state === CALENDAR_CELL_STATE.SELECTED_END,
                    'calendar-cell-disabled': props.disabledDate && props.disabledDate(value),
                });

                children.push(
                    <td className="calendar-cell" key={key} title={key}>
                        <div
                            role="button"
                            tabIndex="0"
                            className={className}
                            onClick={() => this.handleSelect(value)}
                            onKeyDown={e => this.handleKeyDown(e, value)}
                        >
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
        const { visibleValue: value, startOnSunday, mode } = this.props;

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
        const { visibleValue, mode } = this.props;

        return datejs.monthsShort().map((label, index) => {
            const value = visibleValue.clone().month(index);

            return {
                label,
                value,
                isCurrent: true,
                key: getCellKey(value, mode),
            };
        });
    }

    getYearData() {
        const { visibleValue, mode } = this.props;
        const curYear = visibleValue.year();
        const startYear = curYear - (curYear % 10) - 1;
        const cellData = [];

        for (let i = 0; i < 12; i++) {
            const y = startYear + i;
            const value = visibleValue.clone().year(y);

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
        const { visibleValue, mode } = this.props;
        const curYear = visibleValue.year();
        const startYear = curYear - (curYear % 100) - 10;
        const cellData = [];

        for (let i = 0; i < 12; i++) {
            const y = startYear + i * 10;
            const value = visibleValue.clone().year(y);

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

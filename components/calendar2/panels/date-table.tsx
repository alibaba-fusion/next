import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import PT from 'prop-types';
import SharedPT from '../prop-types';
import { DATE_PANEL_MODE } from '../constant';
import { func, datejs, KEYCODE } from '../../util';

const { bindCtx, renderNode } = func;
const { DATE, WEEK, MONTH, QUARTER, YEAR, DECADE } = DATE_PANEL_MODE;

// 面板行数
const mode2Rows = {
    [DATE]: 7,
    [WEEK]: 7,
    [MONTH]: 4,
    [QUARTER]: 4,
    [YEAR]: 4,
    [DECADE]: 3,
};

class DateTable extends React.Component {
    static propTypes = {
        mode: SharedPT.panelMode,
        value: SharedPT.date,
        panelValue: SharedPT.date,
        dateCellRender: PT.func,
        quarterCellRender: PT.func,
        monthCellRender: PT.func,
        yearCellRender: PT.func,
        disabledDate: PT.func,
        selectedState: PT.func,
        hoveredState: PT.func,
        onSelect: PT.func,
        onDateSelect: PT.func,
        startOnSunday: PT.bool,
        cellClassName: PT.oneOfType([PT.func, PT.string]),
        colNum: PT.number,
        cellProps: PT.object,
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

    handleSelect(v, e, args) {
        func.invoke(this.props, 'onSelect', [v, e, args]);
    }

    handleKeyDown(v, e, args) {
        switch (e.keyCode) {
            case KEYCODE.ENTER:
                this.handleSelect(v, e, args);
                break;
            case KEYCODE.RIGHT:
                break;
        }
        // e.preventDefault();
    }

    handleMouseEnter(v, e, args) {
        func.invoke(this.props.cellProps, 'onMouseEnter', [v, e, args]);
    }

    handleMouseLeave(v, e, args) {
        func.invoke(this.props.cellProps, 'onMouseLeave', [v, e, args]);
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
                return curDate.isSame(date, 'year');
            case DECADE: {
                const curYear = curDate.year();
                const targetYear = date.year();
                return curYear <= targetYear && targetYear < curYear + 10;
            }
        }
    }

    getCustomRender = mode => {
        const mode2RenderName = {
            [DATE]: 'dateCellRender',
            [QUARTER]: 'quarterCellRender',
            [MONTH]: 'monthCellRender',
            [YEAR]: 'yearCellRender',
        };

        return this.props[mode2RenderName[mode]];
    };

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
        const cellCls = `${this.prefixCls}-cell`;

        const now = datejs();
        const rowLen = mode2Rows[mode];

        for (let i = 0; i < cellData.length; ) {
            const children = [];

            let isCurrentWeek;
            for (let j = 0; j < rowLen; j++) {
                const { label, value, key, isCurrent } = cellData[i++];
                const v = value.startOf(mode);

                const isDisabled = props.disabledDate && props.disabledDate(v, mode);
                const hoverState = hoverValue && hoveredState && hoveredState(hoverValue);
                const className = classnames(cellCls, {
                    [`${cellCls}-current`]: isCurrent, // 是否属于当前面板值
                    [`${cellCls}-today`]:
                        mode === WEEK ? this.isSame(value, now, DATE) : this.isSame(v, now, mode),
                    [`${cellCls}-selected`]: this.isSame(v, props.value, mode),
                    [`${cellCls}-disabled`]: isDisabled,
                    [`${cellCls}-range-hover`]: hoverState,
                    ...(cellClassName && cellClassName(v)),
                });

                let onEvents = null;

                if (!isDisabled) {
                    onEvents = {
                        onClick: e => this.handleSelect(v, e, { isCurrent, label }),
                        onKeyDown: e => this.handleKeyDown(v, e, { isCurrent, label }),
                        onMouseEnter: e => this.handleMouseEnter(v, e, { isCurrent, label }),
                        onMouseLeave: e => this.handleMouseLeave(v, e, { isCurrent, label }),
                    };
                }

                if (mode === WEEK && j === 0) {
                    const week = v.week();

                    children.push(
                        <td key={`w-${week}`} className={`${cellCls}`}>
                            <div className={`${cellCls}-inner`}>{week}</div>
                        </td>
                    );
                    isCurrentWeek = isCurrent;
                }

                const customRender = this.getCustomRender(mode);

                children.push(
                    <td key={key} title={key} {...onEvents} className={className}>
                        <div className={`${cellCls}-inner`}>
                            {renderNode(
                                customRender,
                                <div className={`${cellCls}-value`}>{label}</div>,
                                [v]
                            )}
                        </div>
                    </td>
                );
            }

            let className;
            if (mode === WEEK) {
                className = classnames(`${this.prefixCls}-week`, {
                    [`${this.prefixCls}-week-current`]: isCurrentWeek,
                });
            }

            cellContent.push(
                <tr key={i} className={className}>
                    {children}
                </tr>
            );
        }

        return cellContent;
    }

    // 星期几
    renderWeekdaysHead() {
        let weekdaysMin = datejs.weekdaysMin();
        const firstDayOfWeek = datejs.localeData().firstDayOfWeek();

        // 默认一周的第一天是周日，否则需要调整
        if (firstDayOfWeek !== 0) {
            weekdaysMin = weekdaysMin
                .slice(firstDayOfWeek)
                .concat(weekdaysMin.slice(0, firstDayOfWeek));
        }

        return (
            <thead>
                <tr>
                    {/* 占位 */}
                    {this.props.mode === WEEK ? (
                        <th className={`${this.prefixCls}-cell-week`} />
                    ) : null}
                    {weekdaysMin.map(d => {
                        return <th key={d}>{d}</th>;
                    })}
                </tr>
            </thead>
        );
    }

    getDateCellData() {
        const { panelValue, colNum } = this.props;

        const firstDayOfMonth = panelValue.clone().startOf('month');
        const weekOfFirstDay = firstDayOfMonth.day(); // 当月第一天星期几
        const daysOfCurMonth = panelValue.endOf('month').date(); // 当月天数
        const firstDayOfWeek = datejs.localeData().firstDayOfWeek(); // 一周的第一天是星期几

        const cellData = [];
        const preDays = (weekOfFirstDay - firstDayOfWeek + 7) % 7;
        const nextDays = colNum
            ? colNum * mode2Rows[DATE] - preDays - daysOfCurMonth
            : (7 - ((preDays + daysOfCurMonth) % 7)) % 7;

        // 上个月日期
        for (let i = preDays; i > 0; i--) {
            cellData.push(firstDayOfMonth.clone().subtract(i, 'day'));
        }

        // 本月日期
        for (let i = 0; i < daysOfCurMonth; i++) {
            cellData.push(firstDayOfMonth.clone().add(i, 'day'));
        }

        // 下个月日期
        for (let i = 0; i < nextDays; i++) {
            cellData.push(firstDayOfMonth.clone().add(daysOfCurMonth + i, 'day'));
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
                {[DATE, WEEK].includes(mode) ? this.renderWeekdaysHead() : null}
                <tbody>{this.renderCellContent(mode2Data[mode]())}</tbody>
            </table>
        );
    }
}

export default polyfill(DateTable);

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import SharedPT from '../prop-types';

import { func, datejs } from '../../util';

import { DATE_INPUT_TYPE } from '../constant';
import { DATE_PANEL_MODE, CALENDAR_CELL_STATE } from '../../calendar-next/constant';
import Calendar from '../../calendar-next';

const { bindCtx } = func;

// 获取面板显示值
function getVisibleValue(value, mode) {
    if (value) {
        if (value[0]) {
            return datejs(value[0]);
        } else if (value[1]) {
            return datejs(value[1]).subtract(1, mode);
        }
    }
    return datejs();
}

class DatePanel extends React.Component {
    static propTypes = {
        mode: SharedPT.mode,
        value: PT.arrayOf(SharedPT.date),
        inputType: SharedPT.inputType,
        showTime: PT.bool,
        handleCellState: PT.func,
        disabledDate: PT.func,
    };
    static defaultProps = {
        showTime: false,
        disabledDate: () => false,
    };

    constructor(props) {
        super(props);

        const { mode, value } = props;

        this.state = {
            mode,
            panelValue: getVisibleValue(value, mode),
            curHoverValue: null,
        };

        bindCtx(this, [
            'handleCellState',
            'handlePanelValueChange',
            'handlePanelChange',
            'onChange',
            'disabledDate',
            'getCellClassName',
            'handleMouseEnter',
            'handleMouseLeave',
        ]);
    }

    // 日期面板显示的日期区间
    getRanges() {
        const { mode } = this.props;
        const { panelValue: v } = this.state;

        const begin = v.clone();
        let end;

        switch (mode) {
            case DATE_PANEL_MODE.DATE:
                end = v.clone().add(1, 'month');
                break;
            case DATE_PANEL_MODE.MONTH:
                end = v.clone().add(1, 'year');
                break;
        }

        return [begin, end];
    }

    disabledDate(v) {
        const {
            value: [begin, end],
        } = this.props;

        const { disabledDate, inputType } = this.props;
        const { BEGIN, END } = DATE_INPUT_TYPE;

        return (
            disabledDate(v) ||
            (inputType === END && begin && begin.isAfter(v)) ||
            (inputType === BEGIN && end && end.isBefore(v))
        );
    }

    onChange(v) {
        const value = [...this.props.value];
        value[this.props.inputType] = v;
        func.call(this.props, 'onChange', [value]);
    }

    handlePanelChange(value, mode, idx) {
        this.setState({
            panelValue: value,
            mode,
            calendarIdx: idx,
        });
    }

    handlePanelValueChange(v, calendarIdx) {
        const { DATE, WEEK, MONTH, QUARTER, YEAR, DECADE } = DATE_PANEL_MODE;

        v = v.clone();
        // 需要处理第二Calendar组件顶部的选择逻辑
        if (calendarIdx === 1) {
            switch (this.state.mode) {
                case DATE:
                case WEEK: {
                    v = v.subtract(1, 'month');
                    break;
                }
                case MONTH:
                case QUARTER: {
                    v = v.subtract(1, 'year');
                    break;
                }
                case YEAR: {
                    v = v.subtract(10, 'year');
                    break;
                }
                case DECADE: {
                    v = v.subtract(100, 'year');
                    break;
                }
            }
        }
        this.setState({
            panelValue: v,
        });
    }

    handleMouseEnter(value) {
        console.log(value);
        this.currentRaf && window.cancelAnimationFrame(this.currentRaf);
        this.currentRaf = window.requestAnimationFrame(() => {
            this.setState({
                curHoverValue: value,
            });
        });
    }

    handleMouseLeave() {
        this.setState({
            curHoverValue: null,
        });
    }

    // 日期cell状态
    handleCellState(v, hoverValue) {
        const { UN_SELECTED, SELECTED, SELECTED_BEGIN, SELECTED_END } = CALENDAR_CELL_STATE;
        const { mode } = this.props;
        const [begin, end] = hoverValue || this.props.value;

        // 相同日期对应的单位是day 其余单位同mode一致
        const unit = mode === 'date' ? 'day' : mode;

        return begin && begin.isSame(v, unit)
            ? SELECTED_BEGIN
            : end && end.isSame(v, unit)
            ? SELECTED_END
            : begin && end && v.isAfter(begin, unit) && v.isBefore(end, unit)
            ? SELECTED
            : UN_SELECTED;
    }

    getCellClassName(value) {
        const { SELECTED, SELECTED_BEGIN, SELECTED_END } = CALENDAR_CELL_STATE;
        const state = this.handleCellState(value);

        const hoverValue = [...this.props.value];
        hoverValue[this.props.inputType] = this.state.curHoverValue;

        const hoverState = this.handleCellState(value, hoverValue);

        return {
            'calendar-cell-selected': state >= SELECTED,
            'calendar-cell-range-begin': state === SELECTED_BEGIN,
            'calendar-cell-range-end': state === SELECTED_END,
            'calendar-cell-hover': hoverState >= SELECTED,
            'calendar-cell-hover-begin': hoverState === SELECTED_BEGIN,
            'calendar-cell-hover-end': hoverState === SELECTED_END,
        };
    }

    render() {
        const {
            onChange,
            handlePanelChange,
            getCellClassName,
            disabledDate,
            handleMouseEnter,
            handleMouseLeave,
        } = this;
        const { value, mode } = this.props;
        const ranges = this.getRanges();

        // 切换面板mode
        const hasModeChanged = this.state.mode !== this.props.mode;

        const calendarProps = idx => {
            let rangeProps;

            if (!hasModeChanged) {
                rangeProps = {
                    onChange,
                    dateCellClassName: getCellClassName,
                    dateCellProps: {
                        onMouseEnter: handleMouseEnter,
                        onMouseLeave: handleMouseLeave,
                    },
                };
            }

            return {
                panelMode: mode,
                shape: 'panel',
                value: value[idx],
                panelValue: ranges[idx],
                disabledDate,
                onPanelChange: (v, m) => handlePanelChange(v, m, idx),
                ...rangeProps,
            };
        };

        const calendarNodes = [
            'range-panel-calendar-left',
            'range-panel-calendar-right',
        ].map((key, idx) => <Calendar key={key} {...calendarProps(idx)} />);

        return (
            <div style={{ display: 'flex' }}>
                {this.state.mode === this.props.mode
                    ? calendarNodes
                    : calendarNodes[this.state.calendarIdx]}
            </div>
        );
    }
}

export default polyfill(DatePanel);

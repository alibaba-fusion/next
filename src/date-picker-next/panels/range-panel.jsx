import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import SharedPT from '../shared-prop-types';

import { func, datejs } from '../../util';

import { DATE_INPUT_TYPE } from '../constant';
import { CALENDAR_MODE, CALENDAR_CELL_STATE } from '../../calendar-next/constant';
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
        value: PT.arrayOf(SharedPT.date),
        inputType: SharedPT.inputType,
        showTime: PT.bool,
        mode: PT.any,
        selectedState: PT.func,
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
            visibleValue: getVisibleValue(value, mode),
        };

        bindCtx(this, [
            'selectedState',
            'handleVisibleValueChange',
            'handleModeChange',
            'onChange',
        ]);
    }

    // 日期面板显示的日期区间
    getRanges() {
        const { mode } = this.props;
        const { visibleValue: value } = this.state;

        const begin = value.clone();
        let end;

        switch (mode) {
            case CALENDAR_MODE.DATE:
                end = value.clone().add(1, 'month');
                break;
            case CALENDAR_MODE.MONTH:
                end = value.clone().add(1, 'year');
                break;
        }

        return [begin, end];
    }

    selectedState(v) {
        const { UN_SELECTED, SELECTED, SELECTED_BEGIN, SELECTED_END } = CALENDAR_CELL_STATE;
        const {
            value: [begin, end],
            mode,
        } = this.props;

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

    disabledDate(v) {
        const {
            value: [begin, end],
        } = this.props;

        const { disabledDate } = this.props;

        return disabledDate(v) || (begin && begin.isAfter(v)) || (end && end.isBefore(v));
    }

    onChange(v) {
        const value = [...this.props.value];
        value[this.props.inputType] = v;

        func.call(this.props, 'onChange', [value]);
    }

    handleModeChange(mode, idx) {
        this.setState({
            mode: mode,
            calendarIdx: idx,
        });
    }

    handleVisibleValueChange(v, calendarIdx) {
        const { DATE, WEEK, MONTH, QUARTER, YEAR, YEAR_RANGE } = CALENDAR_MODE;

        // 需要处理第二Calendar组件顶部的选择逻辑
        if (calendarIdx === 1) {
            switch (this.state.mode) {
                case DATE:
                case WEEK: {
                    v = v.clone().subtract(1, 'month');
                    break;
                }
                case MONTH:
                case QUARTER: {
                    v = v.clone().subtract(1, 'year');
                    break;
                }
                case YEAR: {
                    v = v.clone().subtract(10, 'year');
                    break;
                }
                case YEAR_RANGE: {
                    v = v.clone().subtract(100, 'year');
                    break;
                }
            }
        }

        this.setState({
            visibleValue: v,
        });
    }

    render() {
        const {
            onChange,
            handleModeChange,
            selectedState,
            disabledDate,
            handleVisibleValueChange,
        } = this;
        const { value, mode } = this.props;

        const ranges = this.getRanges();

        const calendarProps = idx => {
            return {
                mode,
                shape: 'panel',
                value: value[idx],
                visibleValue: ranges[idx],
                selectedState,
                disabledDate,
                onChange,
                onModeChange: v => handleModeChange(v, idx),
                onVisibleValueChange: v => handleVisibleValueChange(v, idx),
            };
        };

        const calendarNodes = [
            <Calendar key="range-panel-calendar-left" {...calendarProps(0)} />,
            <Calendar key="range-panel-calendar-right" {...calendarProps(1)} />,
        ];

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

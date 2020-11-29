import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import SharedPT from '../prop-types';

import { func, datejs } from '../../util';

import { DATE_INPUT_TYPE } from '../constant';
import { DATE_PANEL_MODE, CALENDAR_CELL_STATE } from '../../calendar-2/constant';
import Calendar from '../../calendar-2';
import TimePanel from './time-panel';

const { bindCtx } = func;
const { DATE, WEEK, MONTH, QUARTER, YEAR, DECADE } = DATE_PANEL_MODE;

// 获取面板显示值
function getPanelValue(value, mode) {
    if (value) {
        if (value[0]) {
            return datejs(value[0]);
        } else if (value[1]) {
            return datejs(value[1]).subtract(1, mode);
        }
    }
    return datejs();
}

class RangePanel extends React.Component {
    static propTypes = {
        mode: SharedPT.mode,
        value: PT.arrayOf(SharedPT.date),
        inputType: SharedPT.inputType,
        handleCellState: PT.func,
        disabledDate: PT.func,
        justBeginInput: PT.bool,
        showTime: PT.bool,
    };

    static defaultProps = {
        disabledDate: () => false,
        justBeginInput: true,
    };

    constructor(props) {
        super(props);

        const { mode, value } = props;

        this.state = {
            mode,
            panelValue: getPanelValue(value, mode),
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
            'handleCanlendarClick',
            'renderRangeTime',
            'renderRange',
        ]);
    }

    componentWillUnmount() {
        this.currentRaf && window.cancelAnimationFrame(this.currentRaf);
    }

    // 日期面板显示的日期区间
    getRanges() {
        const { mode } = this.props;
        const { panelValue: v } = this.state;

        const begin = v.clone();
        let end;

        switch (mode) {
            case DATE:
            case WEEK:
                end = v.clone().add(1, 'month');
                break;
            case QUARTER:
            case MONTH:
                end = v.clone().add(1, 'year');
                break;
            case YEAR:
                end = v.clone().add(20, 'year');
                break;
        }

        return [begin, end];
    }

    disabledDate(v) {
        const {
            value: [begin, end],
        } = this.props;
        const { mode } = this.props;

        // 相同日期对应的单位是day 其余单位同mode一致
        const unit = mode === 'date' ? 'day' : mode;

        const { disabledDate, inputType } = this.props;
        const { BEGIN, END } = DATE_INPUT_TYPE;

        return (
            disabledDate(v) ||
            (inputType === END && begin && begin.isAfter(v, unit)) ||
            (inputType === BEGIN && end && end.isBefore(v, unit))
        );
    }

    setTime(newVal, oldVal) {
        if (oldVal) {
            return newVal
                .hour(oldVal.hour())
                .minute(oldVal.minute())
                .second(oldVal.second())
                .millisecond(oldVal.millisecond());
        }
        return newVal;
    }

    onChange(v, resetTime = true) {
        const { value, inputType } = this.props;
        const { BEGIN, END } = DATE_INPUT_TYPE;
        let [begin, end] = value;

        if (inputType === BEGIN) {
            begin = resetTime ? this.setTime(v, begin) : v;

            if (end && end.isBefore(v)) {
                end = null;
            }
        } else if (inputType === END) {
            end = resetTime ? this.setTime(v, end) : v;

            if (begin && begin.isAfter(v)) {
                begin = null;
            }
        }
        func.call(this.props, 'onChange', [[begin, end]]);
    }

    handlePanelChange(v, mode, idx) {
        this.setState({
            mode,
            panelValue: v,
            calendarIdx: idx,
        });

        func.call(this.props, 'onPanelChange', [v, mode]);
    }

    handlePanelValueChange(v, calendarIdx) {
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
        const { prefix, inputType } = this.props;
        const { SELECTED, SELECTED_BEGIN, SELECTED_END } = CALENDAR_CELL_STATE;
        const state = this.handleCellState(value);

        const hoverValue = [...this.props.value];
        hoverValue[inputType] = this.state.curHoverValue;

        const hoverState = this.handleCellState(value, hoverValue);
        const prefixCls = `${prefix}calendar-cell`;

        return {
            [`${prefixCls}-selected`]: state >= SELECTED,
            [`${prefixCls}-range-begin`]: state === SELECTED_BEGIN,
            [`${prefixCls}-range-end`]: state === SELECTED_END,
            [`${prefixCls}-hover`]: hoverState >= SELECTED,
            [`${prefixCls}-hover-begin`]: hoverState === SELECTED_BEGIN,
            [`${prefixCls}-hover-end`]: hoverState === SELECTED_END,
        };
    }

    handleCanlendarClick(_, { unit, num }) {
        this.setState({
            panelValue: this.state.panelValue.clone().add(num, unit),
        });
    }

    renderRangeTime(sharedProps) {
        const { value, prefix, showTime, inputType } = this.props;

        return (
            <div className={`${prefix}range-picker-panel`}>
                <Calendar
                    {...sharedProps}
                    value={value[inputType]}
                    onPanelChange={this.handlePanelChange}
                />
                {showTime && !this.hasModeChanged ? (
                    <TimePanel
                        prefix={prefix}
                        value={value[inputType]}
                        onSelect={v => this.onChange(v, false)}
                    />
                ) : null}
            </div>
        );
    }

    renderRange(sharedProps) {
        const { handlePanelChange, handleCanlendarClick } = this;
        const { value, prefix, mode } = this.props;
        const ranges = this.getRanges();

        const calendarProps = idx => {
            sharedProps = {
                value: value[idx],
                panelValue: ranges[idx],
                onPanelChange: (v, m) => handlePanelChange(v, m, idx),
                ...sharedProps,
            };

            return sharedProps;
        };

        const calendarNodes = [
            <Calendar
                className={`${prefix}range-picker-left`}
                key="range-panel-calendar-left"
                {...calendarProps(0)}
            />,
            <Calendar
                className={`${prefix}range-picker-right`}
                key="range-panel-calendar-right"
                onNext={handleCanlendarClick}
                onSuperNext={handleCanlendarClick}
                {...calendarProps(1)}
            />,
        ];

        return (
            <div className={`${prefix}range-picker-panel`}>
                {!this.hasModeChanged ? calendarNodes : calendarNodes[this.state.calendarIdx]}
            </div>
        );
    }

    render() {
        const {
            onChange,
            getCellClassName,
            disabledDate,
            handleMouseEnter,
            handleMouseLeave,
        } = this;
        const { mode, justBeginInput, prefix } = this.props;

        // 切换面板mode
        this.hasModeChanged = this.state.mode !== this.props.mode;

        let sharedProps = {
            prefix,
            shape: 'panel',
            panelMode: mode,
        };

        if (!justBeginInput) {
            sharedProps.disabledDate = disabledDate;
        }

        if (mode === DATE) {
            sharedProps.colNum = 6;
        }

        if (!this.hasModeChanged) {
            sharedProps = {
                ...sharedProps,
                onChange,
                dateCellClassName: getCellClassName,
                dateCellProps: {
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                },
            };
        }

        return this.props.showTime
            ? this.renderRangeTime(sharedProps)
            : this.renderRange(sharedProps);
    }
}

export default polyfill(RangePanel);

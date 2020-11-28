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

    componentDidMount() {
        if (this.currentRaf) {
            window.cancelAnimationFrame(this.currentRaf);
        }
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

        const { disabledDate, inputType } = this.props;
        const { BEGIN, END } = DATE_INPUT_TYPE;

        return (
            disabledDate(v) ||
            (inputType === END && begin && begin.isAfter(v)) ||
            (inputType === BEGIN && end && end.isBefore(v))
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

    handlePanelChange(value, mode, idx) {
        this.setState({
            mode,
            panelValue: value,
            calendarIdx: idx,
        });
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
        const prefixCls = `${prefix}calendar2-cell`;

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

    renderRangeTime() {
        const { value, mode, justBeginInput, prefix, showTime, inputType } = this.props;
        const hasModeChanged = this.state.mode !== this.props.mode;

        const calendarProps = {
            value: value[inputType],
            shape: 'panel',
            panelMode: mode,
            onChange: this.onChange,
            onPanelChange: this.handlePanelChange,
        };
        if (!justBeginInput) {
            calendarProps.disabledDate = this.disabledDate;
        }
        let rangeProps;
        if (!hasModeChanged) {
            rangeProps = {
                dateCellClassName: this.getCellClassName,
                dateCellProps: {
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                },
            };
        }

        return (
            <div className={`${prefix}range-picker2-panel`}>
                <Calendar {...calendarProps} {...rangeProps} />
                {showTime && !hasModeChanged ? (
                    <TimePanel
                        prefix={prefix}
                        value={value[inputType]}
                        onSelect={v => this.onChange(v, false)}
                    />
                ) : null}
            </div>
        );
    }

    renderRange() {
        const {
            onChange,
            handlePanelChange,
            getCellClassName,
            disabledDate,
            handleMouseEnter,
            handleMouseLeave,
            handleCanlendarClick,
        } = this;
        const { value, mode, justBeginInput, prefix } = this.props;
        const ranges = this.getRanges();

        // 切换面板mode
        const hasModeChanged = this.state.mode !== this.props.mode;

        const calendarProps = idx => {
            const sharedProps = {
                shape: 'panel',
                panelMode: mode,
                value: value[idx],
                panelValue: ranges[idx],
                onPanelChange: (v, m) => handlePanelChange(v, m, idx),
            };

            if (!justBeginInput) {
                sharedProps.disabledDate = disabledDate;
            }

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
                ...sharedProps,
                ...rangeProps,
            };
        };

        const calendarNodes = [
            <Calendar
                className={`${prefix}range-picker2-left`}
                key="range-panel-calendar-left"
                {...calendarProps(0)}
            />,
            <Calendar
                className={`${prefix}range-picker2-right`}
                key="range-panel-calendar-right"
                onNext={handleCanlendarClick}
                onSuperNext={handleCanlendarClick}
                {...calendarProps(1)}
            />,
        ];

        return (
            <div className={`${prefix}range-picker2-panel`}>
                {!hasModeChanged ? calendarNodes : calendarNodes[this.state.calendarIdx]}
            </div>
        );
    }

    render() {
        return this.props.showTime ? this.renderRangeTime() : this.renderRange();
    }
}

export default polyfill(RangePanel);

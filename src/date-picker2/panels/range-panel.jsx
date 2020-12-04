import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from '../prop-types';
import { func, datejs } from '../../util';

import { DATE_INPUT_TYPE } from '../constant';
import { DATE_PANEL_MODE, CALENDAR_CELL_STATE } from '../../calendar2/constant';
import Calendar from '../../calendar2';
import TimePanel from './time-panel';

const { DATE, WEEK, MONTH, QUARTER, YEAR } = DATE_PANEL_MODE;
const { UN_SELECTED, SELECTED, SELECTED_BEGIN, SELECTED_END } = CALENDAR_CELL_STATE;
const { BEGIN, END } = DATE_INPUT_TYPE;

const operate = (mode, value, operator) => {
    switch (mode) {
        case DATE:
        case WEEK:
            return value.clone()[operator](1, 'month');

        case QUARTER:
        case MONTH:
            return value.clone()[operator](1, 'year');
        case YEAR:
            return value.clone()[operator](20, 'year');
    }
};

const getPanelValue = ({ mode, inputType, value, showTime }, oldPanelValue) => {
    let panelValue = oldPanelValue;
    const unit = mode;

    if (value && inputType !== null) {
        const v = value[inputType];

        if (
            v &&
            oldPanelValue &&
            (oldPanelValue.isAfter(v, unit) ||
                oldPanelValue
                    .clone()
                    .add(2, unit)
                    .isBefore(v, unit))
        ) {
            panelValue = datejs(v);

            if (inputType === END && !showTime) {
                panelValue = operate(mode, panelValue, 'subtract');
            }
        }
    }

    if (!(panelValue && panelValue.isValid())) {
        panelValue = datejs();
    }

    return panelValue;
};

class RangePanel extends React.Component {
    static propTypes = {
        mode: SharedPT.mode,
        value: PT.arrayOf(SharedPT.date),
        inputType: SharedPT.inputType,
        handleCellState: PT.func,
        disabledDate: PT.func,
        justBeginInput: PT.bool,
        showTime: PT.bool,
        timePanelProps: PT.object,
    };

    static defaultProps = {
        disabledDate: () => false,
        justBeginInput: true,
    };

    constructor(props) {
        super(props);

        const { mode } = props;

        this.state = {
            mode,
            panelValue: getPanelValue(props, null),
            inputType: props.inputType,
            curHoverValue: null,
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.inputType !== state.inputType) {
            return {
                inputType: props.inputType,
                panelValue: getPanelValue(props, state.panelValue),
            };
        }
        return null;
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

    disabledDate = v => {
        const {
            value: [begin, end],
        } = this.props;
        const { mode } = this.props;

        // 相同日期对应的单位是day 其余单位同mode一致
        const unit = mode === 'date' ? 'day' : mode;

        const { disabledDate, inputType } = this.props;

        return (
            disabledDate(v) ||
            (inputType === END && begin && begin.isAfter(v, unit)) ||
            (inputType === BEGIN && end && end.isBefore(v, unit))
        );
    };

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

    onChange = (v, resetTime = true) => {
        const { value, inputType } = this.props;
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
    };

    handlePanelChange = (v, mode, idx) => {
        this.setState({
            mode,
            panelValue: v,
            calendarIdx: idx,
        });
        func.call(this.props, 'onPanelChange', [v, mode]);
    };

    handleMouseEnter = value => {
        this.currentRaf && window.cancelAnimationFrame(this.currentRaf);
        this.currentRaf = window.requestAnimationFrame(() => {
            this.setState({
                curHoverValue: value,
            });
        });
    };

    handleMouseLeave = () => {
        this.currentRaf && window.cancelAnimationFrame(this.currentRaf);
        this.setState({
            curHoverValue: null,
        });
    };

    // 日期cell状态
    handleCellState(v, value) {
        const { mode } = this.props;
        const [begin, end] = value;

        const unit = this.getUnitByMode(mode);

        return begin && begin.isSame(v, unit)
            ? SELECTED_BEGIN
            : end && end.isSame(v, unit)
            ? SELECTED_END
            : begin && end && v.isAfter(begin, unit) && v.isBefore(end, unit)
            ? SELECTED
            : UN_SELECTED;
    }

    getUnitByMode(mode) {
        return mode === DATE ? 'day' : mode;
    }

    isEdge = (value, mode) => {
        const unit = this.getUnitByMode(mode);
        let endOfDate;
        let beginOfDate;

        switch (mode) {
            case DATE:
                endOfDate = value.endOf('month');
                beginOfDate = value.startOf('month');
                break;
            case YEAR:
                endOfDate = value.add(10, 'year');
                beginOfDate = value.subtract(10, 'year');
                break;
            default:
                return UN_SELECTED;
        }

        return endOfDate.isSame(value, unit)
            ? SELECTED_END
            : beginOfDate.isSame(value, unit)
            ? SELECTED_BEGIN
            : UN_SELECTED;
    };

    getCellClassName = value => {
        const { prefix, inputType, mode } = this.props;
        const { curHoverValue } = this.state;
        const [begin, end] = this.props.value;
        const unit = this.getUnitByMode(mode);

        const state = this.handleCellState(value, this.props.value);
        const prefixCls = `${prefix}calendar2-cell`;

        let hoverClassName;

        if (curHoverValue) {
            const hoverValue = [...this.props.value];
            const endOfDate = value.endOf('month');
            const startOfDate = value.startOf('month');

            hoverValue[inputType] = curHoverValue;
            const [hoverBegin, hoverEnd] = hoverValue;

            if (hoverBegin && hoverEnd && hoverBegin.isBefore(hoverEnd, unit)) {
                const hoverState = this.handleCellState(value, hoverValue);

                hoverClassName = {
                    [`${prefixCls}-hover`]: hoverState >= SELECTED,
                    [`${prefixCls}-hover-begin`]: hoverState === SELECTED_BEGIN,
                    [`${prefixCls}-hover-end`]: hoverState === SELECTED_END,
                    [`${prefixCls}-hover-end`]: hoverState === SELECTED_END,
                    [`${prefixCls}-hover-edge-begin`]: startOfDate.isSame(value, unit),
                    [`${prefixCls}-hover-edge-end`]: endOfDate.isSame(value, unit),
                };
            }
        }

        return {
            [`${prefixCls}-selected`]: state >= SELECTED,
            [`${prefixCls}-range-begin`]: state === SELECTED_BEGIN,
            [`${prefixCls}-range-end`]: state === SELECTED_END,
            [`${prefixCls}-range-begin-single`]: state >= SELECTED && (!end || end.isSame(begin, unit)),
            [`${prefixCls}-range-end-single`]: state >= SELECTED && (!begin || begin.isSame(end, unit)),
            ...hoverClassName,
        };
    };

    // 头部面板日期切换点击事件
    handleCanlendarClick = (_, { unit, num }) => {
        this.setState({
            panelValue: this.state.panelValue.clone().add(num, unit),
        });
    };

    renderRangeTime = sharedProps => {
        const { value, prefix, showTime, inputType, timePanelProps } = this.props;

        return (
            <div key="time-panel" className={`${prefix}range-picker2-panel`}>
                <Calendar
                    panelValue={this.state.panelValue}
                    {...sharedProps}
                    value={value[inputType]}
                    onPanelChange={this.handlePanelChange}
                />
                {showTime && !this.hasModeChanged ? (
                    <TimePanel
                        prefix={prefix}
                        value={value[inputType]}
                        onSelect={v => this.onChange(v, false)}
                        timePickerProps={timePanelProps}
                    />
                ) : null}
            </div>
        );
    };

    renderRange(sharedProps) {
        const { handlePanelChange, handleCanlendarClick, hasModeChanged } = this;
        const { value, prefix } = this.props;
        const ranges = this.getRanges();

        const calendarProps = idx => {
            return {
                ...sharedProps,
                value: value[idx],
                panelValue: ranges[idx],
                onPanelChange: (v, m) => handlePanelChange(v, m, idx),
            };
        };

        const calendarNodes = [
            <Calendar {...calendarProps(0)} className={`${prefix}range-picker-left`} key="range-panel-calendar-left" />,
            <Calendar
                {...calendarProps(1)}
                className={`${prefix}range-picker-right`}
                key="range-panel-calendar-right"
                onNext={handleCanlendarClick}
                onSuperNext={handleCanlendarClick}
            />,
        ];

        const classNames = classnames({
            [`${prefix}range-picker2-panel-double`]: !hasModeChanged,
        });

        return (
            <div className={classNames}>
                {!this.hasModeChanged ? calendarNodes : calendarNodes[this.state.calendarIdx]}
            </div>
        );
    }

    render() {
        const { onChange, getCellClassName, disabledDate, handleMouseEnter, handleMouseLeave } = this;
        const { mode, prefix, inputType, justBeginInput } = this.props;

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

        if ([DATE, WEEK].includes(mode)) {
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

        const left = inputType === END ? 140 : 0;

        return (
            <div className={`${prefix}range-picker2-panel`}>
                {this.props.showTime
                    ? [
                          <div key="arrow" className={`${prefix}range-picker2-arrow`} style={{ left }} />,
                          this.renderRangeTime(sharedProps),
                      ]
                    : this.renderRange(sharedProps)}
            </div>
        );
    }
}

export default polyfill(RangePanel);

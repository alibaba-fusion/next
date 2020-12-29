import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from '../prop-types';
import { func, datejs, obj } from '../../util';
import { setTime, switchInputType, mode2unit } from '../util';

import { DATE_INPUT_TYPE } from '../constant';
import { DATE_PANEL_MODE, CALENDAR_CELL_STATE } from '../../calendar2/constant';
import Calendar from '../../calendar2';
import TimePanel from './time-panel';

const { DATE, WEEK, MONTH, QUARTER, YEAR } = DATE_PANEL_MODE;
const { UN_SELECTED, SELECTED, SELECTED_BEGIN, SELECTED_END } = CALENDAR_CELL_STATE;
const { BEGIN, END } = DATE_INPUT_TYPE;

const operate = (mode, value, operator) => {
    const newVal = value.clone();

    switch (mode) {
        case DATE:
        case WEEK:
            return newVal[operator](1, 'month');
        case QUARTER:
        case MONTH:
            return newVal[operator](1, 'year');
        case YEAR:
            return newVal[operator](10, 'year');
    }
};

const isSamePanel = (a, b, mode) => {
    switch (mode) {
        case DATE:
        case WEEK:
            return a.isSame(b, 'month');
        case QUARTER:
        case MONTH:
            return a.isSame(b, 'year');
        case YEAR: {
            const begin = a.year() - (a.year() % 20);
            const byear = b.year();

            return byear >= begin && byear < begin + 20;
        }
    }
};

const getPanelValue = ({ mode, inputType, value, showTime }, oldPanelValue) => {
    let panelValue = datejs(oldPanelValue);

    if (value && inputType !== null && value[inputType]) {
        const [begin, end] = value;

        panelValue = value[inputType];

        if (!showTime) {
            if (begin && end && isSamePanel(begin, end, mode)) {
                panelValue = begin;
            } else if (inputType === END) {
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
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: SharedPT.mode,
        value: PT.arrayOf(SharedPT.date),
        inputType: SharedPT.inputType,
        handleCellState: PT.func,
        disabledDate: PT.func,
        justBeginInput: PT.bool,
        resetTime: PT.bool,
        showTime: PT.bool,
        timePanelProps: PT.object,
        disabledTime: PT.object,
        dateCellRender: PT.func,
    };

    static defaultProps = {
        disabledDate: () => false,
        justBeginInput: true,
    };

    constructor(props) {
        super(props);

        const { mode, value, timePanelProps = {} } = props;

        let timeValue = (value && [...value]) || timePanelProps.defaultValue || [];

        if (!Array.isArray(timeValue)) {
            timeValue = [timeValue.clone(), timeValue.clone()];
        }

        this.state = {
            mode,
            panelValue: getPanelValue(props, props.defaultPanelValue),
            inputType: props.inputType,
            curHoverValue: null,
            timeValue,
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
        const end = operate(mode, v, 'add');

        return [begin, end];
    }

    disabledDate = v => {
        const {
            mode,
            inputType,
            disabledDate,
            value: [begin, end],
        } = this.props;

        const unit = mode2unit(mode);

        return (
            disabledDate(v, mode) ||
            (inputType === END && begin && begin.isAfter(v, unit)) ||
            (inputType === BEGIN && end && end.isBefore(v, unit))
        );
    };

    onTimeSelect = v => {
        const { value, inputType } = this.props;
        const [begin, end] = value;

        let curDateVal = value[inputType];
        if (!curDateVal) {
            curDateVal =
                inputType === BEGIN && end
                    ? end.subtract(1, 'day')
                    : inputType === END && begin
                    ? begin.add(1, 'day')
                    : datejs();
        }
        curDateVal = setTime(curDateVal, v);

        this.handleSelect(curDateVal, true);
    };

    handleSelect = (v, fromTimeChange) => {
        const { value, inputType, resetTime } = this.props;
        const otherType = switchInputType(inputType);
        let [begin, end] = value;

        const timeVal = fromTimeChange || resetTime ? null : value[inputType] || value[otherType] || datejs();

        if (inputType === BEGIN) {
            begin = setTime(v, timeVal);
            if (end && end.isBefore(begin)) {
                end = null;
            }
        } else {
            end = setTime(v, timeVal);
            if (begin && begin.isAfter(end)) {
                begin = null;
            }
        }

        func.invoke(this.props, 'onSelect', [[begin, end]]);
    };

    handlePanelChange = (v, mode, idx) => {
        this.setState({
            mode,
            panelValue: v,
            calendarIdx: idx,
        });

        func.invoke(this.props, 'onPanelChange', [v, mode]);
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

    handleEdgeState = (value, mode) => {
        const unit = this.getUnitByMode(mode);

        switch (mode) {
            case DATE: {
                const endDate = value.endOf('month');
                const beginDate = value.startOf('month');
                return beginDate.isSame(value, unit) ? 1 : endDate.isSame(value, unit) ? 2 : 0;
            }
            case YEAR: {
                const year = value.year();

                const beginYear = value.year() - (value.year() % 10);
                const endYear = beginYear + 9;
                return year === beginYear ? 1 : year === endYear ? 2 : 0;
            }
            default:
                return 0;
        }
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
            hoverValue[inputType] = curHoverValue;
            const [hoverBegin, hoverEnd] = hoverValue;

            if (hoverBegin && hoverEnd && hoverBegin.isBefore(hoverEnd, unit)) {
                const hoverState = this.handleCellState(value, hoverValue);

                hoverClassName = {
                    [`${prefixCls}-hover`]: hoverState >= SELECTED,
                    [`${prefixCls}-hover-begin`]: hoverState === SELECTED_BEGIN,
                    [`${prefixCls}-hover-end`]: hoverState === SELECTED_END,
                    [`${prefixCls}-hover-end`]: hoverState === SELECTED_END,
                };
            }
        }

        let rangeClassName;
        if (!this.hasModeChanged) {
            const edgeState = this.handleEdgeState(value, mode);

            rangeClassName =
                mode === WEEK
                    ? {
                          [`${prefixCls}-week-range-begin`]: state === SELECTED_BEGIN,
                          [`${prefixCls}-week-range-end`]: state === SELECTED_END,
                      }
                    : {
                          [`${prefixCls}-range-begin`]: state === SELECTED_BEGIN,
                          [`${prefixCls}-range-end`]: state === SELECTED_END,
                          [`${prefixCls}-range-begin-single`]: state >= SELECTED && (!end || end.isSame(begin, unit)),
                          [`${prefixCls}-range-end-single`]: state >= SELECTED && (!begin || begin.isSame(end, unit)),
                          [`${prefixCls}-edge-begin`]: edgeState === 1,
                          [`${prefixCls}-edge-end`]: edgeState === 2,
                      };
        }

        return {
            [`${prefixCls}-selected`]: state >= SELECTED,
            ...rangeClassName,
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
        const { value, prefix, showTime, inputType, timePanelProps = {}, disabledTime } = this.props;

        const className = classnames(`${prefix}range-picker2-panel`, {
            [`${prefix}range-picker2-panel-single`]: this.hasModeChanged,
        });

        let _disabledTime;
        if (showTime && !this.hasModeChanged && disabledTime) {
            _disabledTime = typeof disabledTime === 'function' ? disabledTime(value, inputType) : disabledTime;
        }

        return (
            <div key="range-time-panel" className={className}>
                <Calendar
                    panelValue={this.state.panelValue}
                    {...sharedProps}
                    value={value[inputType]}
                    onPanelChange={this.handlePanelChange}
                />
                {showTime && !this.hasModeChanged ? (
                    <TimePanel
                        prefix={prefix}
                        inputType={inputType}
                        value={value[inputType]}
                        onSelect={this.onTimeSelect}
                        disabledTime={disabledTime}
                        timePanelProps={{ ..._disabledTime, ...timePanelProps }}
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

        const className = classnames(`${prefix}range-picker2-panel`, {
            [`${prefix}range-picker2-panel-single`]: hasModeChanged,
        });

        return (
            <div key="range-panel" className={className}>
                {!this.hasModeChanged ? calendarNodes : calendarNodes[this.state.calendarIdx]}
            </div>
        );
    }

    render() {
        const { handleSelect, getCellClassName, handleMouseEnter, handleMouseLeave } = this;
        const { mode, justBeginInput, dateCellRender, ...restProps } = this.props;

        // 切换面板mode
        this.hasModeChanged = this.state.mode !== this.props.mode;

        let sharedProps = {
            ...obj.pickProps(Calendar.propTypes, restProps),
            shape: 'panel',
            panelMode: mode,
            dateCellRender,
        };

        sharedProps.disabledDate = justBeginInput ? this.props.disabledDate : this.disabledDate;

        // 日期面板固定列数 保证对齐
        if ([DATE, WEEK].includes(mode)) {
            sharedProps.colNum = 6;
        }

        if (!this.hasModeChanged) {
            sharedProps = {
                ...sharedProps,
                onSelect: handleSelect,
                cellClassName: getCellClassName,
                cellProps: {
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                },
            };
        }

        return this.props.showTime ? this.renderRangeTime(sharedProps) : this.renderRange(sharedProps);
    }
}

export default polyfill(RangePanel);

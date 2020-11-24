import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import { func } from '../../util';
import { CALENDAR_MODE, CALENDAR_CELL_STATE } from '../constant';

import DateView from './date-view';

const { bindCtx } = func;

class RangeView extends React.Component {
    static propTypes = {
        mode: PT.any,
        value: PT.array,
        defaultValue: PT.any,
        cellRender: PT.any,
        startOnSunday: PT.bool,
        visibleValue: PT.any,
        onDateSelect: PT.func,
        disabledDate: PT.func,
    };

    static defaultProps = {};

    constructor(props) {
        super(props);

        bindCtx(this, ['handleDateSelect', 'getRanges', 'selectedState']);
    }

    // 日期面板显示的日期区间
    getRanges() {
        const { visibleValue, mode } = this.props;
        const begin = visibleValue.clone();
        let end;

        switch (mode) {
            case CALENDAR_MODE.DATE:
                end = visibleValue.clone().add(1, 'month');
                break;
            case CALENDAR_MODE.MONTH:
                end = visibleValue.clone().add(1, 'year');
                break;
        }

        return [begin, end];

        // const begin = visibleValue.clone();
        // const end = visibleValue.clone().subtract(1, mode);

        // console.log(visibleValue.format('l'), end.format('l'), mode);
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

    // ------> event handler
    handleDateSelect(v, index) {
        const value = [...this.props.value];
        value[index] = v;
        console.log(
            'handleDateSelect',
            index,
            value.map(v => v.format('l'))
        );
        // this.props.onDateSelect(value);
        func.call(this.props, 'onSelect', [value]);
    }

    render() {
        const ranges = this.getRanges();

        const sharedProps = idx => {
            return {
                value: this.props.value[idx],
                visibleValue: ranges[idx],
                onSelect: v => this.handleDateSelect(v, idx),
                // onChange: v => this.handleChange(v, idx),
                selectedState: this.selectedState,
            };
        };
        return (
            <div className="calendar-date-range" style={{ display: 'inline-flex' }}>
                <DateView {...sharedProps(0)} />
                <DateView {...sharedProps(1)} />
            </div>
        );
    }
}

export default polyfill(RangeView);

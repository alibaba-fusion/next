import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import PT from 'prop-types';
import { type Dayjs } from 'dayjs';

import SharedPT from '../prop-types';
import { func, obj, datejs } from '../../util';
import { setTime } from '../util';

import Calendar from '../../calendar2';
import TimePanel from './time-panel';
import type { DatePanelProps, DatePanelState } from '../types';

class DatePanel extends React.Component<DatePanelProps, DatePanelState> {
    static displayName = 'DatePanel';
    static propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: SharedPT.mode,
        panelMode: PT.any,
        value: SharedPT.date,
        disabledDate: PT.func,
        showTime: PT.bool,
        resetTime: PT.bool,
        timePanelProps: PT.object,
        disabledTime: SharedPT.disabledTime,
        dateCellRender: PT.func,
    };
    static defaultProps = {
        showTime: false,
        resetTime: false,
    };

    constructor(props: DatePanelProps) {
        super(props);

        // 默认时间
        const { timePanelProps = {} } = props;
        let defaultTime = timePanelProps.defaultValue;

        if (defaultTime) {
            // fix: https://github.com/alibaba-fusion/next/issues/3203
            defaultTime = datejs(
                defaultTime as Dayjs | string,
                typeof defaultTime === 'string'
                    ? (timePanelProps.format as string) || 'HH:mm:ss'
                    : undefined
            );
        }

        this.state = {
            defaultTime: defaultTime as Dayjs,
        };
    }

    onTimeSelect = (v: Dayjs) => {
        this.handleSelect(v, true);
    };

    handleSelect = (v: Dayjs, fromTimeChange: boolean | string) => {
        const { defaultTime } = this.state;

        let timeVal = null;

        if (!this.props.resetTime && !fromTimeChange) {
            timeVal = this.props.value || defaultTime || datejs();
        }

        v = setTime(v, timeVal!);

        func.invoke(this.props, 'onSelect', [v]);
    };

    handlePanelChange = (v: Dayjs, mode: string) => {
        func.invoke(this.props, 'onPanelChange', [v, mode]);
    };

    render() {
        const {
            mode,
            panelMode,
            prefix,
            showTime,
            value,
            disabledDate,
            disabledTime,
            timePanelProps,
            dateCellRender,
            ...restProps
        } = this.props;

        const className = classnames(`${prefix}date-picker2-panel`, {
            [`${prefix}date-time-picker2-panel`]: showTime,
        });

        // 禁用时间
        let _disabledTime;
        if (showTime && mode === panelMode && disabledTime) {
            _disabledTime =
                typeof disabledTime === 'function' ? disabledTime(value!) : disabledTime;
            if (typeof _disabledTime !== 'object') {
                _disabledTime = null;
            }
        }

        const calendarProps = obj.pickProps(Calendar.propTypes!, restProps);

        return (
            <div className={className}>
                <Calendar
                    {...(calendarProps as object)}
                    shape="panel"
                    value={value}
                    panelMode={mode}
                    colNum={showTime ? 6 : undefined}
                    onSelect={this.handleSelect}
                    onPanelChange={this.handlePanelChange}
                    disabledDate={disabledDate}
                    dateCellRender={dateCellRender}
                />
                {showTime && mode === panelMode ? (
                    <TimePanel
                        {...obj.pickProps(TimePanel.propTypes, restProps)}
                        prefix={prefix}
                        value={value || this.state.defaultTime}
                        onSelect={this.onTimeSelect}
                        disabledTime={disabledTime}
                        timePanelProps={{ ..._disabledTime, ...timePanelProps }}
                    />
                ) : null}
            </div>
        );
    }
}

export default polyfill(DatePanel);

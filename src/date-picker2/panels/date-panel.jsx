import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from '../prop-types';
import { func, obj, datejs } from '../../util';
import { setTime } from '../util';

import Calendar from '../../calendar2';
import TimePanel from './time-panel';

class DatePanel extends React.Component {
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

    constructor(props) {
        super(props);

        const { value, timePanelProps } = props;

        this.state = {
            timeValue: value || (timePanelProps && timePanelProps.defaultValue),
        };
    }

    onTimeChange = v => {
        const { value, timePanelProps } = this.props;

        if (timePanelProps && 'value' in timePanelProps) {
            return;
        }

        this.setState({ timeValue: v });

        value && func.call(this.props, 'onChange', [setTime(this.props.value, v)]);
    };

    getTimeValue = () => {
        const { timePanelProps } = this.props;
        let { timeValue } = this.state;

        if (timePanelProps && 'value' in timePanelProps) {
            timeValue = timePanelProps.value;
        }

        return timeValue;
    };

    handleChange = v => {
        if (this.props.resetTime) {
            this.setState({
                timeValue: datejs('00:00:00', 'HH:mm:ss'),
            });
        } else {
            v = setTime(v, this.getTimeValue());
        }

        func.call(this.props, 'onChange', [v]);
    };

    handlePanelChange = (v, mode) => {
        func.call(this.props, 'onPanelChange', [v, mode]);
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

        let { timeValue } = this.state;
        let _disabledTime;

        if (showTime && mode === panelMode) {
            if (value) {
                timeValue = value;
            } else if (timePanelProps && 'value' in timePanelProps) {
                timeValue = timePanelProps.value;
            }

            if (disabledTime) {
                _disabledTime = typeof disabledTime === 'function' ? disabledTime(value) : disabledTime;
            }
        }

        return (
            <div className={className}>
                <Calendar
                    {...obj.pickProps(restProps, Calendar)}
                    shape="panel"
                    value={value}
                    panelMode={mode}
                    colNum={showTime ? 6 : undefined}
                    onChange={this.handleChange}
                    onPanelChange={this.handlePanelChange}
                    disabledDate={disabledDate}
                    dateCellRender={dateCellRender}
                />
                {showTime && mode === panelMode ? (
                    <TimePanel
                        prefix={prefix}
                        value={timeValue}
                        onSelect={this.onTimeChange}
                        disabledTime={disabledTime}
                        timePanelProps={{ ..._disabledTime, ...timePanelProps }}
                    />
                ) : null}
            </div>
        );
    }
}

export default polyfill(DatePanel);

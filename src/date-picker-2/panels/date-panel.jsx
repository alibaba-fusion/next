import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';
import SharedPT from '../prop-types';

import { func } from '../../util';
import Calendar from '../../calendar-2';
import TimePanel from './time-panel';

const { bindCtx } = func;

class DatePanel extends React.Component {
    static propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: SharedPT.mode,
        value: SharedPT.date,
        panelValue: SharedPT.date,
        showTime: PT.bool,
    };
    static defaultProps = {
        showTime: false,
    };

    constructor(props) {
        super(props);

        this.state = {
            mode: props.mode,
            panelValue: props.value,
        };

        bindCtx(this, [
            'handleChange',
            'onChange',
            'renderTimePanel',
            'handlePanelChange',
            'handleTimeChange',
        ]);
    }

    onChange(v) {
        func.call(this.props, 'onChange', [v]);
    }

    setTime(newVal, oldVal) {
        if (oldVal) {
            newVal.hours(oldVal.hours());
            newVal.minutes(oldVal.minutes());
            newVal.seconds(oldVal.seconds());
            newVal.milliseconds(oldVal.milliseconds());
        }
        return newVal;
    }

    handleChange(v) {
        this.setTime(v, this.state.panelValue);

        this.setState({
            panelValue: v,
        });
        this.onChange(v);
    }

    handleTimeChange(v) {
        this.setState({
            panelValue: v,
        });
        this.onChange(v);
    }

    handlePanelChange(v, mode) {
        this.setTime(v, this.state.panelValue);

        this.setState({
            mode,
            panelValue: v,
        });
    }

    render() {
        const { value, mode, prefix, showTime } = this.props;

        // 切换面板mode
        const hasModeChanged = this.state.mode !== this.props.mode;

        const className = classnames(`${prefix}date-picker-panel`, {
            [`${prefix}date-time-picker-panel`]: showTime,
        });

        return (
            <div className={className}>
                <Calendar
                    shape="panel"
                    value={value}
                    panelMode={mode}
                    onChange={this.handleChange}
                    onPanelChange={this.handlePanelChange}
                />
                {showTime && !hasModeChanged ? (
                    <TimePanel prefix={prefix} value={value} onSelect={this.handleTimeChange} />
                ) : null}
            </div>
        );
    }
}

export default polyfill(DatePanel);

import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import classnames from 'classnames';
import * as PT from 'prop-types';

import SharedPT from '../prop-types';
import { func } from '../../util';

import Calendar from '../../calendar-2';
import TimePanel from './time-panel';

class DatePanel extends React.Component {
    static propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        mode: SharedPT.mode,
        panelMode: PT.any,
        value: SharedPT.date,
        showTime: SharedPT.showTime,
    };
    static defaultProps = {
        showTime: false,
    };

    setTime(newVal, oldVal) {
        if (oldVal && this.props.showTime) {
            return newVal
                .hour(oldVal.hour())
                .minute(oldVal.minute())
                .second(oldVal.second())
                .millisecond(oldVal.millisecond());
        }
        return newVal;
    }

    handleTimeChange = v => {
        func.call(this.props, 'onChange', [v]);
    };

    handleChange = v => {
        func.call(this.props, 'onChange', [this.setTime(v, this.props.value)]);
    };

    handlePanelChange = (v, mode) => {
        func.call(this.props, 'onPanelChange', [this.setTime(v, this.props.value), mode]);
    };

    render() {
        const { mode, panelMode, prefix, showTime, value } = this.props;

        const className = classnames(`${prefix}date-picker2-panel`, {
            [`${prefix}date-time-picker2-panel`]: showTime,
        });

        return (
            <div className={className}>
                <Calendar
                    shape="panel"
                    value={value}
                    panelMode={mode}
                    colNum={showTime ? 6 : undefined}
                    onChange={this.handleChange}
                    onPanelChange={this.handlePanelChange}
                />
                {showTime && mode === panelMode ? (
                    <TimePanel
                        prefix={prefix}
                        value={value}
                        onSelect={this.handleTimeChange}
                        timePickerProps={typeof showTime === 'object' ? showTime : null}
                    />
                ) : null}
            </div>
        );
    }
}

export default polyfill(DatePanel);

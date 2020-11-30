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
        showTime: PT.bool,
    };
    static defaultProps = {
        showTime: false,
    };

    constructor(props) {
        super(props);

        this.state = {
            mode: props.mode,
            value: props.value,
        };

        bindCtx(this, ['handleChange', 'handlePanelChange']);
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

    handleChange(v) {
        func.call(this.props, 'onChange', [this.setTime(v, this.state.value)]);
    }

    handlePanelChange(v, mode) {
        this.setState({
            mode,
        });
        func.call(this.props, 'onPanelChange', [this.setTime(v, this.state.value), mode]);
    }

    render() {
        const { mode, prefix, showTime, value } = this.props;

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
                {showTime && this.state.mode === mode ? (
                    <TimePanel prefix={prefix} value={value} onSelect={this.handleChange} />
                ) : null}
            </div>
        );
    }
}

export default polyfill(DatePanel);

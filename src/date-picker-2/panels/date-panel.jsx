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
        showTime: PT.bool,
        mode: SharedPT.mode,
        value: SharedPT.date,
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

        bindCtx(this, ['handleChange', 'onChange', 'handlePanelChange']);
    }

    onChange(value) {
        this.setState({
            value,
        });
        func.call(this.props, 'onChange', [value]);
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
        v = this.setTime(v, this.state.value);

        this.onChange(v);
    }

    handlePanelChange(v, mode) {
        this.setState({
            mode,
            value: this.setTime(v, this.state.value),
        });
    }

    render() {
        const { mode, prefix, showTime } = this.props;
        const { value } = this.state;

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
                    <TimePanel prefix={prefix} value={value} onSelect={this.onChange} />
                ) : null}
            </div>
        );
    }
}

export default polyfill(DatePanel);

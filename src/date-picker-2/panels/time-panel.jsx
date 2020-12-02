import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import TimePickerPanel from '../../time-picker-2/panel';
import SharedPT from '../prop-types';
import { func } from '../../util';

class TimePanel extends React.PureComponent {
    static propTypes = {
        prefix: PT.string,
        value: SharedPT.date,
        onSelect: PT.func,
        timePickerProps: PT.object,
    };

    static defaultProps = {
        timePickerProps: {},
    };

    formater = v => {
        const fmt = this.props.timePickerProps.format;
        return func.isFunction(fmt) ? fmt(v) : v.format(fmt);
    };

    render() {
        const { prefix, value, onSelect, timePickerProps } = this.props;
        const fmt = timePickerProps.format;

        const showHour = fmt.indexOf('H') > -1;
        const showSecond = fmt.indexOf('s') > -1;
        const showMinute = fmt.indexOf('m') > -1;

        return (
            <div className={`${prefix}calendar2-right ${prefix}calendar2-panel`}>
                <div className={`${prefix}calendar2-header`}>
                    <div className={`${prefix}calendar2-header-text-field`}>{value ? this.formater(value) : null}</div>
                </div>
                <div className={`${prefix}calendar2-body`}>
                    <TimePickerPanel
                        value={value}
                        onSelect={onSelect}
                        showHour={showHour}
                        showSecond={showSecond}
                        showMinute={showMinute}
                        {...timePickerProps}
                    />
                </div>
            </div>
        );
    }
}

export default polyfill(TimePanel);

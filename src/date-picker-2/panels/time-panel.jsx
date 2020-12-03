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
        timePanelProps: PT.object,
    };

    formater = v => {
        const { timePanelProps } = this.props;
        const fmt = (timePanelProps && timePanelProps.format) || 'HH:mm:ss';
        return func.isFunction(fmt) ? fmt(v) : v.format(fmt);
    };

    render() {
        const { prefix, value, onSelect } = this.props;
        const timePanelProps = this.props.timePanelProps || {};
        const fmt = timePanelProps.format || 'HH:mm:ss';

        const showHour = fmt.indexOf('H') > -1;
        const showSecond = fmt.indexOf('s') > -1;
        const showMinute = fmt.indexOf('m') > -1;

        return (
            <div className={`${prefix}calendar2-right ${prefix}calendar2-panel`}>
                <div className={`${prefix}calendar2-header`}>
                    <div className={`${prefix}calendar2-header-text-field`}>{value ? this.formater(value) : null}</div>
                </div>
                <TimePickerPanel
                    value={value}
                    onSelect={onSelect}
                    showHour={showHour}
                    showSecond={showSecond}
                    showMinute={showMinute}
                    {...timePanelProps}
                />
            </div>
        );
    }
}

export default polyfill(TimePanel);

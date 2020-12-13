import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import TimePickerPanel from '../../time-picker2/panel';
import SharedPT from '../prop-types';
import { obj } from '../../util';

const DECADE_TIME_FORMAT = 'HH:mm:ss';

class TimePanel extends React.PureComponent {
    static propTypes = {
        prefix: PT.string,
        value: SharedPT.date,
        onSelect: PT.func,
        timePanelProps: PT.object,
    };

    formater = v => {
        const { timePanelProps = {} } = this.props;
        const { showHour, showMinute, showSecond } = this.getShow();

        let fmt;
        if ('format' in timePanelProps) {
            fmt = timePanelProps.format;
        } else {
            const fmtArr = [];

            showHour && fmtArr.push('HH');
            showMinute && fmtArr.push('mm');
            showSecond && fmtArr.push('ss');

            fmt = fmtArr.join(':');
        }

        return typeof fmt === 'function' ? fmt(v) : v.format(fmt);
    };

    getShow = () => {
        const { timePanelProps: props = {} } = this.props;

        const fmt = props.format || DECADE_TIME_FORMAT;

        let showHour;
        let showMinute;
        let showSecond;

        if (typeof fmt === 'string') {
            showHour = fmt.indexOf('H') > -1;
            showSecond = fmt.indexOf('s') > -1;
            showMinute = fmt.indexOf('m') > -1;
        }

        return {
            showHour: obj.get('showHour', props, showHour),
            showMinute: obj.get('showMinute', props, showMinute),
            showSecond: obj.get('showSecond', props, showSecond),
        };
    };

    render() {
        const { prefix, value, onSelect, timePanelProps = {} } = this.props;
        const { showHour, showMinute, showSecond } = this.getShow();

        return (
            <div className={`${prefix}date-time-picker-wrapper ${prefix}calendar2-panel`}>
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

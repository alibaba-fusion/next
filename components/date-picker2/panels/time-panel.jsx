import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import TimePickerPanel from '../../time-picker2/panel';
import SharedPT from '../prop-types';
import { func } from '../../util';

const DECADE_TIME_FORMAT = 'HH:mm:ss';

class TimePanel extends React.PureComponent {
    static propTypes = {
        rtl: PT.bool,
        prefix: PT.string,
        locale: PT.object,
        value: SharedPT.date,
        timePanelProps: PT.object,
        onSelect: PT.func,
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
            showHour: 'showHour' in props ? props.showHour : showHour,
            showMinute: 'showMinute' in props ? props.showMinute : showMinute,
            showSecond: 'showSecond' in props ? props.showSecond : showSecond,
        };
    };

    onSelect = v => {
        func.invoke(this.props, 'onSelect', [v]);
    };

    render() {
        const { prefix, rtl, locale, timePanelProps = {}, value } = this.props;
        const { showHour, showMinute, showSecond } = this.getShow();

        return (
            <div dir={rtl ? 'rtl' : undefined} className={`${prefix}date-time-picker-wrapper ${prefix}calendar2-panel`}>
                <div className={`${prefix}calendar2-header`}>
                    <div className={`${prefix}calendar2-header-text-field`}>{value ? this.formater(value) : null}</div>
                </div>
                <TimePickerPanel
                    prefix={prefix}
                    locale={locale}
                    onSelect={this.onSelect}
                    showHour={showHour}
                    showSecond={showSecond}
                    showMinute={showMinute}
                    {...timePanelProps}
                    value={value}
                />
            </div>
        );
    }
}

export default polyfill(TimePanel);

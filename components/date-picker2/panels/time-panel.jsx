import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import TimePickerPanel from '../../time-picker2/panel';
import SharedPT from '../prop-types';
import { func } from '../../util';

const DECADE_TIME_FORMAT = 'HH:mm:ss';

const WithTimePanel = function (WrappedComponent) {
    return class extends React.Component {
        static propTypes = {
            ...WrappedComponent.propTypes,
            disabledDate: PT.func,
            panelMode: PT.string,
        };

        constructor(props) {
            super(props);

            let _disabledTime = false;
            if (typeof props.disabledDate === 'function' && !props.value) {
                _disabledTime = true;
            }

            this.state = {
                disabledTime: _disabledTime,
            };
        }

        getDisabledStatus = () => {
            const { value, timePanelProps } = this.props;
            let disabled = this.state.disabledTime;
            if (value) {
                disabled = timePanelProps.disabled ?? false;
            }

            return disabled;
        };

        disabledItems = list => index => {
            return list.indexOf(index) >= 0;
        };

        getDisabledTime = () => {
            const { timePanelProps, value, disabledDate, panelMode } = this.props;
            const { disabledHours, disabledMinutes, disabledSeconds } = timePanelProps;

            if (disabledHours || disabledMinutes || disabledSeconds) {
                return {
                    disabledHours,
                    disabledMinutes,
                    disabledSeconds,
                };
            }

            if (value && typeof disabledDate === 'function') {
                let newDate = value.clone();
                const hours = 24;
                const minutesAndSeconds = 60;
                const _disabledHours = [];
                const _disabledMinutes = [];
                const _disabledSeconds = [];
                let currentHour = value.get('hour');
                let currentMinute = value.get('minute');

                for (let i = 0; i < hours; i++) {
                    // console
                    //     .log(
                    //         '=====> ',
                    //         disabledDate(newDate.hour(i).minute(0).second(0), panelMode),
                    //         disabledDate(newDate.hour(i).minute(59).second(59), panelMode),
                    //         newDate.format('YYYY-MM-DD HH:mm:ss'),
                    //         newDate.hour(i).minute(0).second(0).format('YYYY-MM-DD HH:mm:ss'),
                    //         newDate.hour(i).minute(59).second(59).format('YYYY-MM-DD HH:mm:ss')
                    //     );
                        
                    // 禁用小时
                    if (
                        disabledDate(newDate.hour(i).minute(0).second(0), panelMode) &&
                        disabledDate(newDate.hour(i).minute(59).second(59), panelMode)
                    ) {
                        _disabledHours.push(i);
                    }
                }
                // console.log('=====> _disabledHours', _disabledHours);
                if (_disabledHours.length && _disabledHours.length < hours) {
                    // 边界处理
                    while (_disabledHours.indexOf(currentHour) > -1) {
                        currentHour = (currentHour + 1) % hours;
                    }
                    for (let i = 0; i < minutesAndSeconds; i++) {
                        // 从当前小时开始遍历
                        if (
                            disabledDate(
                                newDate.hour(currentHour).minute(i).second(0),
                                panelMode
                            ) &&
                            disabledDate(newDate.hour(currentHour).minute(i).second(59), panelMode)
                        ) {
                            _disabledMinutes.push(i);
                        }
                    }
                }
                // console.log('=====> _disabledMinutes', _disabledMinutes);
                if (_disabledMinutes.length && _disabledMinutes.length < minutesAndSeconds) {
                    // 边界处理
                    while (_disabledMinutes.indexOf(currentMinute) > -1) {
                        currentMinute = (currentMinute + 1) % minutesAndSeconds;
                    }
                    for (let i = 0; i < minutesAndSeconds; i++) {
                        // 从当前时分开始遍历
                        newDate = newDate.hour(currentHour).minute(currentMinute).second(i);
                        if (disabledDate(newDate, panelMode)) {
                            _disabledSeconds.push(i);
                        }
                    }
                }

                // 当前选中时间落在禁用区
                if (disabledDate(value, panelMode)) {
                    // 边界处理
                    let currentSecond = value.get('second');
                    while (_disabledSeconds.indexOf(currentSecond) > -1) {
                        currentSecond = (currentSecond + 1) % minutesAndSeconds;
                    }
                    newDate = newDate.hour(currentHour).minute(currentMinute).second(currentSecond);
                    func.invoke(this.props, 'onSelect', [newDate]);
                }

                return {
                    disabledHours: this.disabledItems(_disabledHours),
                    disabledMinutes: this.disabledItems(_disabledMinutes),
                    disabledSeconds: this.disabledItems(_disabledSeconds),
                };
            }

            return null;
        };

        render() {
            const { timePanelProps, ...rest } = this.props;

            // 开启 disabledDate 属性时，需要提前禁用时分秒
            // 如果“今天”是属于禁用时间的话，先选时分秒可能导致回填数据与预期不符合
            const disabled = this.getDisabledStatus();
            const disabledTime = this.getDisabledTime();

            return (
                <WrappedComponent
                    {...rest}
                    timePanelProps={{ ...timePanelProps, disabled, ...disabledTime }}
                />
            );
        }
    };
};

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
            <div
                dir={rtl ? 'rtl' : undefined}
                className={`${prefix}date-time-picker-wrapper ${prefix}calendar2-panel`}
            >
                <div className={`${prefix}calendar2-header`}>
                    <div className={`${prefix}calendar2-header-text-field`}>
                        {value ? this.formater(value) : null}
                    </div>
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

export default polyfill(WithTimePanel(TimePanel));

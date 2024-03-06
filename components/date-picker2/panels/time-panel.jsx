import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import PT from 'prop-types';
import TimePickerPanel from '../../time-picker2/panel';
import SharedPT from '../prop-types';
import { func } from '../../util';
import { getDisabledTime } from '../util'

const DECADE_TIME_FORMAT = 'HH:mm:ss';

const WithTimePanel = function (WrappedComponent) {
    return class extends React.Component {
        static propTypes = {
            ...WrappedComponent.propTypes,
            disabledDate: PT.func,
            panelMode: PT.string,
        };

        getDisabledStatus = () => {
            const { value, timePanelProps, disabledDate } = this.props;

            // 直接禁用时间选择，权重最高
            if (timePanelProps.disabled) {
                return true;
            }

            // 开启自定义禁用日期
            if (typeof disabledDate === 'function') {
                // 如果“今天”是属于禁用时间的话，先选时分秒可能导致回填数据与预期不符合，所以未选择值时，提前警用时间选择
                return !value;
            }

            return false;
        }

        render() {
            const { timePanelProps, ...rest } = this.props;

            // 开启 disabledDate 属性时，需要提前禁用时分秒
            // 如果“今天”是属于禁用时间的话，先选时分秒可能导致回填数据与预期不符合
            const disabled = this.getDisabledStatus();
            const disabledTime = getDisabledTime(this.props);

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

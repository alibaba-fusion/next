import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import nextLocale from '../locale/zh-cn';
import { func } from '../util';
import TimeMenu from './module/time-menu';
import { checkMomentObj } from './utils';

const { noop } = func;

class TimePickerPanel extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 时间值（moment 对象）
         */
        value: checkMomentObj,
        /**
         * 是否显示小时
         */
        showHour: PropTypes.bool,
        /**
         * 是否显示秒
         */
        showSecond: PropTypes.bool,
        /**
         * 小时选项步长
         */
        hourStep: PropTypes.number,
        /**
         * 分钟选项步长
         */
        minuteStep: PropTypes.number,
        /**
         * 秒钟选项步长
         */
        secondStep: PropTypes.number,
        /**
         * 禁用小时函数
         * @param {Number} index 时 0 - 23
         * @return {Boolean} 是否禁用
         */
        disabledHours: PropTypes.func,
        /**
         * 禁用分钟函数
         * @param {Number} index 分 0 - 59
         * @return {Boolean} 是否禁用
         */
        disabledMinutes: PropTypes.func,
        /**
         * 禁用秒函数
         * @param {Number} index 秒 0 - 59
         * @return {Boolean} 是否禁用
         */
        disabledSeconds: PropTypes.func,
        /**
         * 选择某个日期值时的回调
         * @param {Object} 选中后的日期值
         */
        onSelect: PropTypes.func,
        locale: PropTypes.object,
        disabled: PropTypes.bool,
        className: PropTypes.string,
    };

    static defaultProps = {
        prefix: 'next-',
        showHour: true,
        showSecond: true,
        disabledHours: noop,
        disabledMinutes: noop,
        disabledSeconds: noop,
        onSelect: noop,
        disabled: false,
        locale: nextLocale.TimePicker,
    };

    onSelectMenuItem = (index, type) => {
        const { value } = this.props;
        const clonedValue = value
            ? value.clone()
            : moment('00:00:00', 'HH:mm:ss', true);
        switch (type) {
            case 'hour':
                clonedValue.hour(index);
                break;
            case 'minute':
                clonedValue.minute(index);
                break;
            case 'second':
                clonedValue.second(index);
                break;
        }
        this.props.onSelect(clonedValue);
    };

    render() {
        const {
            prefix,
            value,
            locale,
            className,
            disabled,
            showHour,
            showSecond,
            hourStep,
            minuteStep,
            secondStep,
            disabledHours,
            disabledMinutes,
            disabledSeconds,
            ...others
        } = this.props;

        const classNames = classnames(
            {
                [`${prefix}time-picker-panel`]: true,
                [`${prefix}time-picker-panel-col-3`]: showHour && showSecond,
                [`${prefix}time-picker-panel-col-2`]: !showHour || !showSecond,
            },
            className
        );

        const commonProps = {
            prefix,
            disabled,
            onSelect: this.onSelectMenuItem,
        };

        let activeHour;
        let activeMinute;
        let activeSecond;

        if (value && moment.isMoment(value)) {
            activeHour = value.hour();
            activeMinute = value.minute();
            activeSecond = value.second();
        }

        return (
            <div {...others} className={classNames}>
                {showHour ? (
                    <TimeMenu
                        {...commonProps}
                        activeIndex={activeHour}
                        title={locale.hour}
                        mode="hour"
                        step={hourStep}
                        disabledItems={disabledHours}
                    />
                ) : null}
                <TimeMenu
                    {...commonProps}
                    activeIndex={activeMinute}
                    title={locale.minute}
                    mode="minute"
                    step={minuteStep}
                    disabledItems={disabledMinutes}
                />
                {showSecond ? (
                    <TimeMenu
                        {...commonProps}
                        activeIndex={activeSecond}
                        title={locale.second}
                        step={secondStep}
                        mode="second"
                        disabledItems={disabledSeconds}
                    />
                ) : null}
            </div>
        );
    }
}

export default TimePickerPanel;

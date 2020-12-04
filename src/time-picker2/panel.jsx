import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import nextLocale from '../locale/zh-cn';
import { func, datejs } from '../util';
import TimeMenu from './module/time-menu';
import { checkDayjsObj } from './utils';

const { noop } = func;

class TimePickerPanel extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 时间值（dayjs 对象）
         */
        value: checkDayjsObj,
        /**
         * 是否显示小时
         */
        showHour: PropTypes.bool,
        /**
         * 是否显示分钟
         */
        showMinute: PropTypes.bool,
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
         * 渲染的可选择时间列表
         * [{
         *  label: '01',
         *  value: 1
         * }]
         * @param {Array} list 默认渲染的列表
         * @param {String} mode 渲染的菜单 hour, minute, second
         * @param {dayjs} value 当前时间，可能为 null
         * @return {Array} 返回需要渲染的数据
         */
        renderTimeMenuItems: PropTypes.func,
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
        showMinute: true,
        disabledHours: noop,
        disabledMinutes: noop,
        disabledSeconds: noop,
        onSelect: noop,
        disabled: false,
        locale: nextLocale.TimePicker,
    };

    prefixCls = `${this.props.prefix}time-picker2`;

    onSelectMenuItem = (index, type) => {
        const { value } = this.props;
        const clonedValue = value ? value.clone() : datejs('00:00:00', 'HH:mm:ss', true);
        let newValue;
        switch (type) {
            case 'hour':
                newValue = clonedValue.hour(index);
                break;
            case 'minute':
                newValue = clonedValue.minute(index);
                break;
            case 'second':
                newValue = clonedValue.second(index);
                break;
        }
        this.props.onSelect(newValue);
    };

    render() {
        const {
            prefix,
            value,
            locale,
            className,
            disabled,
            showHour,
            showMinute,
            showSecond,
            hourStep,
            minuteStep,
            secondStep,
            disabledHours,
            disabledMinutes,
            disabledSeconds,
            renderTimeMenuItems,
            ...others
        } = this.props;

        const colLen = [showHour, showMinute, showSecond].filter(v => v).length;
        const classNames = classnames(`${this.prefixCls}-panel`, `${this.prefixCls}-panel-col-${colLen}`, className);

        const commonProps = {
            prefix,
            disabled,
            onSelect: this.onSelectMenuItem,
            renderTimeMenuItems,
            value,
        };

        let activeHour;
        let activeMinute;
        let activeSecond;

        if (value && datejs.isSelf(value)) {
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
                {showMinute ? (
                    <TimeMenu
                        {...commonProps}
                        activeIndex={activeMinute}
                        title={locale.minute}
                        mode="minute"
                        step={minuteStep}
                        disabledItems={disabledMinutes}
                    />
                ) : null}
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

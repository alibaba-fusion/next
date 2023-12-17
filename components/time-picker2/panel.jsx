import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import nextLocale from '../locale/zh-cn';
import { func, datejs, pickAttrs } from '../util';
import TimeMenu from './module/time-menu';
import SharedPT from './prop-types';

const { noop } = func;

class TimePickerPanel extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        /**
         * 时间值（dayjs 对象）
         */
        value: SharedPT.value,
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
        isRange: PropTypes.bool,
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
        isRange: false,
        locale: nextLocale.TimePicker,
    };

    prefixCls = `${this.props.prefix}time-picker2`;

    /**
     *
     * @param {enum} panelType 'start' | 'end' | 'panel'
     * @param {*} index
     * @param {*} type 'hour' | 'minute' | 'second'
     */
    onSelectMenuItem = (panelType, index, type) => {
        const { value, isRange } = this.props;
        const valueArr = Array.isArray(value) ? value : [value];
        const val = panelType === 'end' ? valueArr[1] : valueArr[0];

        const clonedValue = val ? val.clone() : datejs('00:00:00', 'HH:mm:ss', true);
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

        if (isRange) {
            const nextValueArray = [];
            if (panelType === 'start') {
                nextValueArray[0] = newValue;
                nextValueArray[1] = value[1];
            } else if (panelType === 'end') {
                nextValueArray[0] = value[0];
                nextValueArray[1] = newValue;
            }

            this.props.onSelect(nextValueArray, panelType);
        } else {
            this.props.onSelect(newValue, 'panel');
        }
    };

    getDisabledItems = () => {
        const { disabledHours, disabledMinutes, disabledSeconds, value, isRange } = this.props;

        const disableds = {
            newDisabledHours: [disabledHours],
            newDisabledMinutes: [disabledMinutes],
            newDisabledSeconds: [disabledSeconds],
        };
        if (!isRange) {
            return disableds;
        }

        const dHours = disabledHours() || [];
        const dMinutes = disabledMinutes() || [];
        const dSeconds = disabledSeconds() || [];

        const v0 = value[0];
        const v1 = value[1];

        const hoursEqual = () => v0 && v1 && v0.hour() === v1.hour();
        const minutesEqual = () => v0 && v1 && v0.hour() === v1.hour() && v0.minute() === v1.minute();

        disableds.newDisabledHours[0] = h => (v1 && h > v1.hour()) || dHours.indexOf(h) > -1;
        disableds.newDisabledMinutes[0] = m => (v1 && (hoursEqual() && m > v1.minute())) || dMinutes.indexOf(m) > -1;
        disableds.newDisabledSeconds[0] = s => (v1 && (minutesEqual() && s > v1.second())) || dSeconds.indexOf(s) > -1;

        disableds.newDisabledHours[1] = h => (v0 && h < v0.hour()) || dHours.indexOf(h) > -1;
        disableds.newDisabledMinutes[1] = m => (v0 && m < (hoursEqual() && v0.minute())) || dMinutes.indexOf(m) > -1;
        disableds.newDisabledSeconds[1] = s => (v0 && (minutesEqual() && s < v0.second())) || dSeconds.indexOf(s) > -1;

        return disableds;
    };

    render() {
        const {
            prefix,
            value,
            isRange,
            locale,
            className,
            disabled,
            showHour,
            showMinute,
            showSecond,
            hourStep,
            minuteStep,
            secondStep,
            renderTimeMenuItems,
            ...others
        } = this.props;

        const colLen = [showHour, showMinute, showSecond].filter(v => v).length;
        const classNames = classnames(
            `${this.prefixCls}-panel`,
            {
                [`${this.prefixCls}-panel-col-${colLen}`]: !isRange,
                [`${this.prefixCls}-panel-range`]: isRange,
            },
            className
        );

        const activeHour = [];
        const activeMinute = [];
        const activeSecond = [];

        const valueArr = Array.isArray(value) ? value : [value];
        valueArr.forEach((val, i) => {
            if (val && datejs.isSelf(val)) {
                activeHour[i] = val.hour();
                activeMinute[i] = val.minute();
                activeSecond[i] = val.second();
            }
        });

        const commonProps = {
            prefix,
            disabled,
            renderTimeMenuItems,
        };

        const { newDisabledHours, newDisabledMinutes, newDisabledSeconds } = this.getDisabledItems();

        const generatePanel = index => (
            <React.Fragment>
                {showHour ? (
                    <TimeMenu
                        {...commonProps}
                        value={valueArr[index]}
                        activeIndex={activeHour[index]}
                        title={locale.hour}
                        mode="hour"
                        step={hourStep}
                        onSelect={this.onSelectMenuItem.bind(this, `${index === 0 ? 'start' : 'end'}`)}
                        disabledItems={newDisabledHours[index]}
                    />
                ) : null}
                {showMinute ? (
                    <TimeMenu
                        {...commonProps}
                        value={valueArr[index]}
                        activeIndex={activeMinute[index]}
                        title={locale.minute}
                        mode="minute"
                        step={minuteStep}
                        onSelect={this.onSelectMenuItem.bind(this, `${index === 0 ? 'start' : 'end'}`)}
                        disabledItems={newDisabledMinutes[index]}
                    />
                ) : null}
                {showSecond ? (
                    <TimeMenu
                        {...commonProps}
                        value={valueArr[index]}
                        activeIndex={activeSecond[index]}
                        title={locale.second}
                        step={secondStep}
                        mode="second"
                        onSelect={this.onSelectMenuItem.bind(this, `${index === 0 ? 'start' : 'end'}`)}
                        disabledItems={newDisabledSeconds[index]}
                    />
                ) : null}
            </React.Fragment>
        );

        const singlePanel = generatePanel(0);

        const panelClassNames = classnames(`${this.prefixCls}-panel-col-${colLen}`, `${this.prefixCls}-panel-list`);

        const doublePanel = (
            <React.Fragment>
                <div className={panelClassNames}>{generatePanel(0)}</div>
                <div className={panelClassNames}>{generatePanel(1)}</div>
            </React.Fragment>
        );

        return (
            <div {...pickAttrs(others)} className={classNames}>
                {isRange ? doublePanel : singlePanel}
            </div>
        );
    }
}

export default TimePickerPanel;

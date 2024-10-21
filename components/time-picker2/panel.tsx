import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import type { Dayjs } from 'dayjs';

import nextLocale from '../locale/zh-cn';
import { func, datejs, pickAttrs } from '../util';
import TimeMenu from './module/time-menu';
import SharedPT from './prop-types';
import type { PannelType, PanelProps, DisabledItems } from './types';

const { noop } = func;

class TimePickerPanel extends Component<PanelProps> {
    static propTypes = {
        prefix: PropTypes.string,
        value: SharedPT.value,
        showHour: PropTypes.bool,
        showMinute: PropTypes.bool,
        showSecond: PropTypes.bool,
        hourStep: PropTypes.number,
        minuteStep: PropTypes.number,
        secondStep: PropTypes.number,
        disabledHours: PropTypes.func,
        disabledMinutes: PropTypes.func,
        disabledSeconds: PropTypes.func,
        renderTimeMenuItems: PropTypes.func,
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
     * @param panelType - 'start' | 'end' | 'panel'
     * @param index - number
     * @param type - 'hour' | 'minute' | 'second'
     */
    onSelectMenuItem = (
        panelType: PannelType,
        index: number,
        type: 'hour' | 'minute' | 'second'
    ) => {
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
                nextValueArray[1] = (value as Dayjs[])[1];
            } else if (panelType === 'end') {
                nextValueArray[0] = (value as Dayjs[])[0];
                nextValueArray[1] = newValue;
            }

            this.props.onSelect(nextValueArray, panelType);
        } else {
            this.props.onSelect(newValue, 'panel');
        }
    };

    getDisabledItems: () => DisabledItems = () => {
        const { disabledHours, disabledMinutes, disabledSeconds, value, isRange } = this.props;

        const disableds = {
            newDisabledHours: [disabledHours],
            newDisabledMinutes: [disabledMinutes],
            newDisabledSeconds: [disabledSeconds],
        };
        if (!isRange) {
            return disableds as DisabledItems;
        }

        const dHours = (disabledHours!() || []) as number[];
        const dMinutes = (disabledMinutes!() || []) as number[];
        const dSeconds = (disabledSeconds!() || []) as number[];

        // fixme: value 可以换为 valueArr
        const v0 = (value as Dayjs[])[0];
        const v1 = (value as Dayjs[])[1];

        const hoursEqual = () => v0 && v1 && v0.hour() === v1.hour();
        const minutesEqual = () =>
            v0 && v1 && v0.hour() === v1.hour() && v0.minute() === v1.minute();

        disableds.newDisabledHours[0] = (h: number) =>
            (v1 && h > v1.hour()) || dHours.indexOf(h) > -1;
        disableds.newDisabledMinutes[0] = (m: number) =>
            (v1 && hoursEqual() && m > v1.minute()) || dMinutes.indexOf(m) > -1;
        disableds.newDisabledSeconds[0] = (s: number) =>
            (v1 && minutesEqual() && s > v1.second()) || dSeconds.indexOf(s) > -1;

        disableds.newDisabledHours[1] = (h: number) =>
            (v0 && h < v0.hour()) || dHours.indexOf(h) > -1;
        disableds.newDisabledMinutes[1] = (m: number) =>
            (v0 && m < ((hoursEqual() && v0.minute()) as number)) || dMinutes.indexOf(m) > -1;
        disableds.newDisabledSeconds[1] = (s: number) =>
            (v0 && minutesEqual() && s < v0.second()) || dSeconds.indexOf(s) > -1;

        return disableds as DisabledItems;
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

        const activeHour: number[] = [];
        const activeMinute: number[] = [];
        const activeSecond: number[] = [];

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

        const { newDisabledHours, newDisabledMinutes, newDisabledSeconds } =
            this.getDisabledItems();

        const generatePanel = (index: number) => (
            <React.Fragment>
                {showHour ? (
                    <TimeMenu
                        {...commonProps}
                        value={valueArr[index]}
                        activeIndex={activeHour[index]}
                        title={locale!.hour}
                        mode="hour"
                        step={hourStep}
                        onSelect={this.onSelectMenuItem.bind(
                            this,
                            `${index === 0 ? 'start' : 'end'}`
                        )}
                        disabledItems={newDisabledHours[index]}
                    />
                ) : null}
                {showMinute ? (
                    <TimeMenu
                        {...commonProps}
                        value={valueArr[index]}
                        activeIndex={activeMinute[index]}
                        title={locale!.minute}
                        mode="minute"
                        step={minuteStep}
                        onSelect={this.onSelectMenuItem.bind(
                            this,
                            `${index === 0 ? 'start' : 'end'}`
                        )}
                        disabledItems={newDisabledMinutes[index]}
                    />
                ) : null}
                {showSecond ? (
                    <TimeMenu
                        {...commonProps}
                        value={valueArr[index]}
                        activeIndex={activeSecond[index]}
                        title={locale!.second}
                        step={secondStep}
                        mode="second"
                        onSelect={this.onSelectMenuItem.bind(
                            this,
                            `${index === 0 ? 'start' : 'end'}`
                        )}
                        disabledItems={newDisabledSeconds[index]}
                    />
                ) : null}
            </React.Fragment>
        );

        const singlePanel = generatePanel(0);

        const panelClassNames = classnames(
            `${this.prefixCls}-panel-col-${colLen}`,
            `${this.prefixCls}-panel-list`
        );

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

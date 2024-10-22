import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { checkMomentObj } from './utils';
import type { TimePickerPanelProps } from './types';
declare class TimePickerPanel extends Component<TimePickerPanelProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        /**
         * 时间值（moment 对象）
         */
        value: typeof checkMomentObj;
        /**
         * 是否显示小时
         */
        showHour: PropTypes.Requireable<boolean>;
        /**
         * 是否显示分钟
         */
        showMinute: PropTypes.Requireable<boolean>;
        /**
         * 是否显示秒
         */
        showSecond: PropTypes.Requireable<boolean>;
        /**
         * 小时选项步长
         */
        hourStep: PropTypes.Requireable<number>;
        /**
         * 分钟选项步长
         */
        minuteStep: PropTypes.Requireable<number>;
        /**
         * 秒钟选项步长
         */
        secondStep: PropTypes.Requireable<number>;
        /**
         * 禁用小时函数
         * @param index - 时 0 - 23
         * @returns 是否禁用
         */
        disabledHours: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 禁用分钟函数
         * @param index - 分 0 - 59
         * @returns 是否禁用
         */
        disabledMinutes: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 禁用秒函数
         * @param index - 秒 0 - 59
         * @returns 是否禁用
         */
        disabledSeconds: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 渲染的可选择时间列表
         * [\{
         *  label: '01',
         *  value: 1
         * \}]
         * @param list - 默认渲染的列表
         * @param mode - 渲染的菜单 hour, minute, second
         * @param value - 当前时间，可能为 null
         * @returns 返回需要渲染的数据
         */
        renderTimeMenuItems: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * 选择某个日期值时的回调
         * @param value - 选中后的日期值
         */
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
        disabled: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        showHour: boolean;
        showSecond: boolean;
        showMinute: boolean;
        disabledHours: () => void;
        disabledMinutes: () => void;
        disabledSeconds: () => void;
        onSelect: () => void;
        disabled: boolean;
        locale: Partial<{
            placeholder: string;
            clear: string;
            hour: string;
            minute: string;
            second: string;
            ok: string;
        }> & {
            momentLocale?: string | undefined;
        };
    };
    onSelectMenuItem: (index: number, type: 'hour' | 'minute' | 'second') => void;
    render(): React.JSX.Element;
}
export default TimePickerPanel;

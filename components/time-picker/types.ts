import type React from 'react';
import type { Moment } from 'moment';
import type { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
import type { InputProps } from '../input';
import type { Locale } from '../locale/types';

interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'> {}

export interface TimePickerProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 按钮的文案
     */
    label?: React.ReactNode;
    name?: string;

    /**
     * 输入框状态
     */
    state?: 'error' | 'success';

    /**
     * 输入框提示
     */
    placeholder?: string;

    /**
     * 时间值（moment 对象或时间字符串，受控状态使用）
     */
    value?: string | Moment | null;

    /**
     * 时间初值（moment 对象或时间字符串，非受控状态使用）
     */
    defaultValue?: string | Moment;

    /**
     * 时间选择框的尺寸
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否允许清空时间
     */
    hasClear?: boolean;

    /**
     * 时间的格式
     * https://momentjs.com/docs/#/parsing/string-format/
     */
    format?: string;

    /**
     * 小时选项步长
     */
    hourStep?: number;

    /**
     * 分钟选项步长
     */
    minuteStep?: number;

    /**
     * 秒钟选项步长
     */
    secondStep?: number;

    /**
     * 禁用小时函数
     */
    disabledHours?: (index: number) => boolean;

    /**
     * 禁用分钟函数
     */
    disabledMinutes?: (index: number) => boolean;

    /**
     * 禁用秒钟函数
     */
    disabledSeconds?: (index: number) => boolean;

    /**
     * 弹层是否显示（受控）
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示（非受控）
     */
    defaultVisible?: boolean;

    /**
     * 弹层容器
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层对齐方式，详情见 Overlay 文档
     */
    popupAlign?: string;

    /**
     * 弹层触发方式
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层展示状态变化时的回调
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层自定义样式
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     */
    popupClassName?: string;

    /**
     * 弹层属性
     */
    popupProps?: PopupProps;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否为预览态
     */
    isPreview?: boolean;

    /**
     * 预览态模式下渲染的内容
     */
    renderPreview?: (value: Moment | null, props: TimePickerProps) => React.ReactNode;

    /**
     * 时间值改变时的回调
     */
    onChange?: (value: Moment | string | null) => void;
    renderTimeMenuItems?: (
        list: Array<TimeMenuListItem>,
        mode: TimeMenuProps['mode'],
        value: TimeMenuProps['value']
    ) => Array<TimeMenuListItem>;
    inputProps?: InputProps;
    locale?: Locale['TimePicker'];
    popupComponent?: React.JSXElementConstructor<PopupProps>;
    popupContent?: React.ReactNode;
    followTrigger?: boolean;
    /**
     * @deprecated use `defaultVisible` instead
     * @skip
     */
    defaultOpen?: TimePickerProps['defaultVisible'];
    /**
     * @deprecated use `visible` instead
     * @skip
     */
    open?: TimePickerProps['visible'];
    /**
     * @deprecated use `onVisibleChange` instead
     * @skip
     */
    onOpenChange?: TimePickerProps['onVisibleChange'];
}

export interface TimePickerPanelProps
    extends Omit<CommonProps, 'locale'>,
        Pick<
            TimePickerProps,
            | 'prefix'
            | 'locale'
            | 'disabled'
            | 'hourStep'
            | 'minuteStep'
            | 'secondStep'
            | 'disabledHours'
            | 'disabledMinutes'
            | 'disabledSeconds'
            | 'renderTimeMenuItems'
            | 'locale'
        > {
    showHour: boolean;
    showSecond: boolean;
    showMinute: boolean;
    value: Moment | null;
    onSelect: (value: Moment) => void;
    className?: string;
}

export interface TimeMenuListItem {
    label: React.ReactNode;
    value: number;
}

export interface TimeMenuProps
    extends Omit<CommonProps, 'locale'>,
        Pick<TimePickerPanelProps, 'disabled' | 'value' | 'renderTimeMenuItems'> {
    activeIndex?: number;
    step?: number;
    mode?: 'hour' | 'minute' | 'second';
    disabledItems?: (index: number) => boolean;
    onSelect?: (value: TimeMenuListItem['value'], mode: TimeMenuProps['mode']) => void;
    title?: string;
}

export interface TimePickerState {
    value: Moment | null;
    visible: boolean | undefined;
    inputStr: string;
    inputing: boolean;
}

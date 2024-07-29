import type React from 'react';
import type { Moment } from 'moment';
import type { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
import type { InputProps } from '../input';
import type { Locale } from '../locale/types';

interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue'> {}

/**
 * @api TimePicker
 */
export interface TimePickerProps extends HTMLAttributesWeak, CommonProps {
    /**
     * 按钮的文案
     * @en Button text
     */
    label?: React.ReactNode;
    /**
     * @deprecated use Form.Item name instead
     * @skip
     */
    name?: string;
    /**
     * 输入框状态
     * @en input state
     */
    state?: 'error' | 'success';

    /**
     * 输入框提示
     * @en input hint
     */
    placeholder?: string;

    /**
     * 时间值（moment 对象或时间字符串，受控状态使用）
     * @en time value (moment object or time string, controlled state use)
     */
    value?: string | Moment | null;

    /**
     * 时间初值（moment 对象或时间字符串，非受控状态使用）
     * @en time init value (moment object or time string, uncontrolled state use)
     */
    defaultValue?: string | Moment;

    /**
     * 时间选择框的尺寸
     * @en size of time picker
     */
    size?: 'small' | 'medium' | 'large';

    /**
     * 是否允许清空时间
     * @en whether to allow clearing time
     */
    hasClear?: boolean;

    /**
     * 时间的格式
     * @en time format
     * @remarks see https://momentjs.com/docs/#/parsing/string-format/
     */
    format?: string;

    /**
     * 小时选项步长
     * @en hour option step
     */
    hourStep?: number;

    /**
     * 分钟选项步长
     * @en minute option step
     */
    minuteStep?: number;

    /**
     * 秒钟选项步长
     * @en second option step
     */
    secondStep?: number;

    /**
     * 禁用小时的函数
     * @en disable hour function
     */
    disabledHours?: (index: number) => boolean;

    /**
     * 禁用分钟函数
     * @en disable minute function
     */
    disabledMinutes?: (index: number) => boolean;

    /**
     * 禁用秒钟函数
     * @en disable second function
     */
    disabledSeconds?: (index: number) => boolean;

    /**
     * 弹层是否显示（受控）
     * @en popup layer display status (controlled)
     */
    visible?: boolean;

    /**
     * 弹层默认是否显示（非受控）
     * @en popup layer default display status (uncontrolled)
     */
    defaultVisible?: boolean;

    /**
     * 弹层容器
     * @en popup layer container
     */
    popupContainer?: string | HTMLElement | ((target: HTMLElement) => HTMLElement);

    /**
     * 弹层对齐方式，详情见 Overlay 文档
     * @en popup layer alignment, see Overlay documentation
     */
    popupAlign?: string;

    /**
     * 弹层触发方式
     * @en popup layer trigger type
     */
    popupTriggerType?: 'click' | 'hover';

    /**
     * 弹层展示状态变化时的回调
     * @en callback when the popup layer display status changes
     */
    onVisibleChange?: (visible: boolean, reason: string) => void;

    /**
     * 弹层自定义样式
     * @en popup layer custom style
     */
    popupStyle?: React.CSSProperties;

    /**
     * 弹层自定义样式类
     * @en popup layer custom style class
     */
    popupClassName?: string;

    /**
     * 弹层属性
     * @en popup layer property
     */
    popupProps?: PopupProps;

    /**
     * 是否禁用
     * @en disabled
     */
    disabled?: boolean;

    /**
     * 是否为预览态
     * @en is preview
     */
    isPreview?: boolean;

    /**
     * 预览态模式下渲染的内容
     * @en content of preview mode
     */
    renderPreview?: (value: Moment | null, props: TimePickerProps) => React.ReactNode;

    /**
     * 时间值改变时的回调
     * @en callback when the time value changes
     */
    onChange?: (value: Moment | string | null) => void;
    /**
     * 渲染的可选择时间列表
     * @en render the selectable time list
     * @param list - 默认渲染的列表
     * @param mode - 渲染的菜单 hour, minute, second
     * @param value - 当前时间，可能为 null
     * @returns 返回需要渲染的数据
     */
    renderTimeMenuItems?: (
        list: Array<TimeMenuListItem>,
        mode: TimeMenuProps['mode'],
        value: TimeMenuProps['value']
    ) => Array<TimeMenuListItem>;
    /**
     * 自定义输入框属性
     * @en custom input property
     */
    inputProps?: InputProps;
    /**
     * 国际化
     * @en internationalization
     * @skip
     */
    locale?: Locale['TimePicker'];
    /**
     * 弹层组件
     * @en popup component
     * @skip
     */
    popupComponent?: React.JSXElementConstructor<PopupProps>;
    /**
     * 弹层内容
     * @en popup content
     */
    popupContent?: React.ReactNode;
    /**
     * 跟随触发元素
     * @en follow trigger element
     */
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

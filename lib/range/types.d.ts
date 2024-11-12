/// <reference types="react" />
import type { CommonProps } from '../util';
import type { PopupProps } from '../overlay';
interface HTMLAttributesWeak extends Omit<React.HTMLAttributes<HTMLElement>, 'defaultValue' | 'onChange'> {
}
/**
 * @api RangeValueType
 * @order 1
 */
export type RangeValueType = number | [number, number];
export interface RangeState {
    value: RangeValueType | undefined;
    tempValue: RangeValueType | undefined;
    hasMovingClass: boolean;
    lowerTooltipVisible: boolean;
    upperTooltipVisible: boolean;
    tooltipAnimation: boolean;
}
/**
 * @api Range
 * @order 0
 */
export interface RangeProps extends HTMLAttributesWeak, CommonProps {
    /**
     * @deprecated use Form.Item name instead
     * @en Form item name
     * @skip
     */
    name?: string;
    /**
     * 自定义类名
     * @en className
     * @skip
     */
    className?: string;
    /**
     * 自定义内敛样式
     * @en style
     * @skip
     */
    style?: React.CSSProperties;
    /**
     * 滑块个数<br/><br/>**可选值**:<br/>'single'(单个)<br/>'double'(两个)
     * @en number of sliders<br><br>**option**:<br>'single'<br>'double'
     * @defaultValue 'single'
     */
    slider?: 'single' | 'double';
    /**
     * 最小值
     * @en minimal value
     * @defaultValue 0
     */
    min?: number;
    /**
     * 最大值
     * @en maximal value
     * @defaultValue 100
     */
    max?: number;
    /**
     * 步长，取值必须大于 0，并且可被 (max - min) 整除
     * @en step of the range, which is positive integer and (max \- min) can be divided by it
     * @defaultValue 1
     */
    step?: number;
    /**
     * 设置当前取值。当 `slider` 为 `single` 时，使用 `Number`，否则用 `[Number, Number]`
     * @en current value. It's in the form of `Number` when `slider` is `single` otherwise `[Number, Number]`
     */
    value?: RangeValueType;
    /**
     * 设置初始取值。当 `slider` 为 `single` 时，使用 `Number`，否则用 `[Number, Number]`
     * @en default value. It's in the form of `Number` when `slider` is `single` otherwise `[Number, Number]`
     */
    defaultValue?: RangeValueType;
    /**
     * 刻度数值显示逻辑（false 代表不显示，array 枚举显示的值，number 代表按 number 平分，object 表示按 key 划分，value 值显示）
     * @en way to show the scale. (`false` means nothing, `array` means enum, `number` means equal division, and `object` means `key` as the mark with `value` as the value)
     * @defaultValue false
     */
    marks?: false | number | Array<number> | Record<number, string>;
    /**
     * marks显示在上方('above')or下方('below')<br/><br/>**可选值**:<br/>'above', 'below'
     * @en position for the scale<br><br>**option**:<br>'above', 'below'
     * @defaultValue 'above'
     */
    marksPosition?: 'above' | 'below';
    /**
     * 值为 `true` 时，滑块为禁用状态
     * @en disabled
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * 当 Range 的值发生改变后，会触发 onChange 事件，并把改变后的值作为参数传入, 如果设置了value, 要配合此函数做受控使用
     * @en callback triggered when value changes
     * @param value - 改变后的值 - the changed value
     * @defaultValue () =\> void
     */
    onChange?: (value: RangeValueType) => void;
    /**
     * 滑块拖动的时候触发的事件,不建议在这里setState, 一般情况下不需要用, 滑动时有特殊需求时使用
     * @en callback triggered when slider being dragged, and used only for special need
     * @param value - 改变后的值 - the changed value
     * @defaultValue () =\> void
     */
    onProcess?: (value: RangeValueType) => void;
    /**
     * 是否显示 tip
     * @en whether to show tip
     * @defaultValue true
     */
    hasTip?: boolean;
    /**
     * 是否显示 tip
     * @en whether to show tip
     * @deprecated use hasTip
     * @skip
     */
    hasTips?: boolean;
    /**
     * 自定义 tip 显示内容
     * @en custom tip content
     * @param value - 改变后的值 - the changed value
     * @returns React.ReactNode - React.ReactNode
     * @defaultValue (value) =\> value
     */
    tipRender?: (value: number | string) => React.ReactNode;
    /**
     * 自定义 tip 显示内容
     * @deprecated use tipRender
     * @skip
     */
    tipFormatter?: (value: number | string) => string;
    /**
     * 选中态反转
     * @en reverse the selected part
     * @defaultValue false
     */
    reverse?: boolean;
    /**
     * 是否pure render
     * @en pure render or not
     * @defaultValue false
     */
    pure?: boolean;
    /**
     * 是否为拖动线段类型，默认slider为double, defaultValue必传且指定区间
     * @en drag a line with fixed width. It considers `slider` as `double`, and `defaultValue` must be a interval.
     * @defaultValue false
     */
    fixedWidth?: boolean;
    /**
     * tooltip是否默认展示
     * @en tooltip always be visible or not
     * @defaultValue false
     */
    tooltipVisible?: boolean;
    /**
     * 是否已rtl模式展示
     * @en Whether to enable rtl
     * @defaultValue false
     */
    rtl?: boolean;
    /**
     * 是否为预览态
     * @en is preview or not
     * @defaultValue false
     */
    isPreview?: boolean;
    /**
     * 预览态模式下渲染的内容
     * @en custom preview content
     * @param value - 改变后的值 - the changed value
     * @param props - RangeProps - RangeProps
     * @returns React.ReactNode - React.ReactNode
     */
    renderPreview?: (value: RangeValueType | undefined, props: RangeProps) => React.ReactNode;
}
export interface RangeMarkProps extends Pick<Required<RangeProps>, 'min' | 'max' | 'prefix' | 'marksPosition' | 'rtl'> {
    value: RangeValueType;
    marks: Record<number, string>;
}
export interface RangeSliderProps extends Pick<Required<RangeProps>, 'prefix' | 'hasTip' | 'slider' | 'tipRender' | 'min' | 'max' | 'tooltipVisible' | 'rtl'> {
    value: number;
    hasMovingClass: RangeState['hasMovingClass'] | null;
    tooltipAnimation?: PopupProps['animation'];
    onTooltipVisibleChange?: PopupProps['onVisibleChange'];
    onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}
export interface RangeScaleProps extends Pick<Required<RangeProps>, 'min' | 'max' | 'prefix' | 'rtl'> {
    value: RangeValueType;
    scales: number[];
}
export interface RangeSelectedProps extends Pick<Required<RangeProps>, 'min' | 'max' | 'prefix' | 'slider' | 'reverse' | 'rtl'> {
    value: RangeValueType;
}
export interface RangeFixedSliderProps extends Pick<Required<RangeProps>, 'min' | 'max' | 'prefix' | 'hasTip' | 'tooltipVisible' | 'tipRender' | 'disabled' | 'rtl'> {
    value: [number, number];
    hasMovingClass: RangeState['hasMovingClass'];
    tooltipAnimation?: PopupProps['animation'];
    onTooltipVisibleChange?: PopupProps['onVisibleChange'];
}
export interface RangeFixedSliderState {
    hasMovingClass: boolean;
    onTooltipVisibleChange: boolean;
    tooltipAnimation: boolean;
}
export {};

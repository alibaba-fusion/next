import type React from 'react';
import type { Dayjs, ConfigType, ManipulateType } from 'dayjs';
import type { CommonProps } from '../util';
import type { Locale } from '../locale/types';

interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue' | 'onSelect'> {}

/**
 * @api
 */
export interface CalendarProps extends HTMLAttributesWeak, Omit<CommonProps, 'locale'> {
    /**
     * @skip
     * @remarks 这个属性貌似没有什么用处，先保留
     */
    name?: string;
    /**
     * 默认选中的日期（dayjs 对象）
     * @en Default selected date (dayjs object)
     */
    defaultValue?: ConfigType;

    /**
     * 选中的日期值 (dayjs 对象)
     * @en Selected date value (dayjs object)
     */
    value?: ConfigType;

    /**
     * 面板默认显示的日期
     * @en Default displayed date
     */
    defaultPanelValue?: ConfigType;

    /**
     * 面板显示的日期（受控）
     * @en Displayed date
     */
    panelValue?: ConfigType;

    /**
     * 展现形态
     * @en Display shape
     * @defaultValue 'fullscreen'
     */
    shape?: 'card' | 'fullscreen' | 'panel';

    /**
     * 日期模式
     * @en Date mode
     * @defaultValue 'month'
     */
    mode?: CalendarMode;

    /**
     * 面板模式，未指定时会根据 mode 自动推断
     * @en Panel mode, will be inferred automatically if not specified
     */
    panelMode?: CalendarPanelMode;

    /**
     * 选择日期单元格时的回调
     * @en Callback when selecting a date cell
     */
    onSelect?: (value: Dayjs, strVal: string) => void;

    /**
     * 值改变时的回调
     * @en Callback when value changes
     */
    onChange?: (value: Dayjs, strVal: string) => void;

    /**
     * 日期面板变化回调
     * @en Callback when date panel changes
     */
    onPanelChange?: (value: Dayjs, mode: string, reason?: string) => void;

    /**
     * 自定义样式类
     * @en Custom style class
     */
    className?: string;

    /**
     * 自定义日期渲染
     * @en Custom date rendering
     */
    dateCellRender?: CustomCellRender;

    /**
     * 自定义月份渲染函数
     * @en Custom month rendering function
     */
    monthCellRender?: CustomCellRender;

    /**
     * 自定义年份渲染函数
     * @en Custom year rendering function
     */
    yearCellRender?: CustomCellRender;
    /**
     * 自定义季度渲染函数
     * @en Custom quarter rendering function
     */
    quarterCellRender?: CustomCellRender;
    /**
     * 不可选择的日期
     * @en Disabled date
     */
    disabledDate?: (value: Dayjs, mode: CalendarPanelMode) => boolean;
    /**
     * @skip
     */
    locale?: Locale['Calendar'];
    /**
     * 点击头部左单箭头时触发的回调
     * @en Callback when clicking the left single arrow
     */
    onPrev?: OnPrevOrNext;
    /**
     * 点击头部右单箭头时触发的回调
     * @en Callback when clicking the right single arrow
     */
    onNext?: OnPrevOrNext;
    /**
     * 点击头部左双箭头时触发的回调
     * @en callback when clicking the left double arrow
     */
    onSuperPrev?: OnPrevOrNext;
    /**
     * 点击头部右双箭头时触发的回调
     * @en callback when clicking the right double arrow
     */
    onSuperNext?: OnPrevOrNext;
    /**
     * 头部自定义渲染
     * @en Header custom rendering
     */
    headerRender?: (props: HeaderPanelProps) => React.ReactNode;
    /**
     * 可选择的年份的有效区间
     * @en Valid year range
     */
    validValue?: [Dayjs, Dayjs];
    /**
     * 渲染头部额外内容
     * @en Render header extra content
     */
    renderHeaderExtra?: (props: HeaderPanelProps) => React.ReactNode;
    /**
     * 渲染头部标题，仅当 showTitle 为 true 时生效
     * @en Render header title
     * @skip
     */
    titleRender?: (value: ConfigType) => React.ReactNode;
    /**
     * 显示头部标题
     * @en Show header title
     * @skip
     * @remarks 实现有问题暂不开放
     */
    showTitle?: boolean;
    /**
     * 展示的总行数
     * @en Total rows
     * @skip
     * @remarks 命名有些问题，感觉应该叫 rowNum
     */
    colNum?: number;
    /**
     * @skip
     * @deprecated not implemented
     */
    hoveredState?: (value: unknown) => boolean;
    /**
     * 单元格自定义样式
     * @en Cell custom style
     */
    cellClassName?: (value: Dayjs) => Record<string, boolean> | undefined | null;
    /**
     * 单元格自定义属性
     * @en Cell custom property
     */
    cellProps?: {
        onMouseEnter?: (
            v: Dayjs,
            e: React.MouseEvent<HTMLElement>,
            args: Pick<CellData, 'isCurrent' | 'label'>
        ) => void;
        onMouseLeave?: (
            v: Dayjs,
            e: React.MouseEvent<HTMLElement>,
            args: Pick<CellData, 'isCurrent' | 'label'>
        ) => void;
    };
}

/**
 * @api
 */
export type OnPrevOrNext = (value: Dayjs, options: { unit: ManipulateType; num: number }) => void;

/**
 * @api
 */
export type CalendarMode = 'month' | 'year';

/**
 * @api
 */
export type CalendarPanelMode = 'date' | 'week' | 'month' | 'quarter' | 'year' | 'decade';

export interface CalendarState {
    value: CalendarProps['value'];
    mode: CalendarMode;
    panelMode: CalendarPanelMode;
    panelValue: Dayjs;
}

export interface HeaderPanelProps extends Omit<CommonProps, 'locale'> {
    panelValue: Dayjs;
    locale: Locale['Calendar'];
    onPanelValueChange: (value: Dayjs, type?: 'PANEL') => void;
    onPrev?: OnPrevOrNext;
    onNext?: OnPrevOrNext;
    onSuperPrev?: OnPrevOrNext;
    onSuperNext?: OnPrevOrNext;
    mode: CalendarMode;
    onModeChange: (mode: CalendarMode) => void;
    validValue?: CalendarProps['validValue'];
    panelMode: CalendarPanelMode;
    onPanelModeChange: (mode: CalendarPanelMode) => void;
    shape: CalendarProps['shape'];
    showTitle: boolean;
    value?: CalendarState['value'];
    showModeSwitch: boolean;
    renderHeaderExtra?: CalendarProps['renderHeaderExtra'];
    headerRender?: CalendarProps['headerRender'];
    titleRender?: CalendarProps['titleRender'];
}

/**
 * @api
 */
export type CustomCellRender = (value: Dayjs) => React.ReactNode;

export interface DateTableProps extends Omit<CommonProps, 'locale'> {
    mode: CalendarPanelMode;
    panelValue: Dayjs;
    colNum?: number;
    hoveredState?: CalendarProps['hoveredState'];
    cellClassName?: CalendarProps['cellClassName'];
    dateCellRender?: CustomCellRender;
    quarterCellRender?: CustomCellRender;
    monthCellRender?: CustomCellRender;
    yearCellRender?: CustomCellRender;
    cellProps?: CalendarProps['cellProps'];
    disabledDate?: CalendarProps['disabledDate'];
    onSelect?: (
        v: Dayjs,
        e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
        args: Pick<CellData, 'isCurrent' | 'label'>
    ) => void;
    value: ConfigType;
}

export interface DateTableState {
    hoverValue: unknown;
}

/**
 * @api
 */
export interface CellData {
    value: Dayjs;
    label: number | string;
    isCurrent: boolean;
    key: string | number;
}

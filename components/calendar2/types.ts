import type React from 'react';
import type { Dayjs, ConfigType, ManipulateType } from 'dayjs';
import type { CommonProps } from '../util';
import type { Locale } from '../locale/types';

interface HTMLAttributesWeak
    extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange' | 'defaultValue' | 'onSelect'> {}

export interface CalendarProps extends HTMLAttributesWeak, Omit<CommonProps, 'locale'> {
    name?: string;
    /**
     * 默认选中的日期（dayjs 对象）
     */
    defaultValue?: ConfigType;

    /**
     * 选中的日期值 (dayjs 对象)
     */
    value?: ConfigType;

    /**
     * 面板默认显示的日期
     */
    defaultPanelValue?: ConfigType;

    panelValue?: ConfigType;

    panelMode?: CalendarPanelMode;

    /**
     * 展现形态
     */
    shape?: 'card' | 'fullscreen' | 'panel';

    /**
     * 选择日期单元格时的回调
     */
    onSelect?: (value: Dayjs, strVal: string) => void;

    /**
     * 值改变时的回调
     */
    onChange?: (value: Dayjs, strVal: string) => void;

    /**
     * 日期面板变化回调
     */
    onPanelChange?: (value: Dayjs, mode: string, reason?: string) => void;

    /**
     * 自定义样式类
     */
    className?: string;

    /**
     * 自定义日期渲染
     */
    dateCellRender?: CustomCellRender;

    /**
     * 自定义月份渲染函数
     */
    monthCellRender?: CustomCellRender;

    /**
     * 自定义年份渲染函数
     */
    yearCellRender?: CustomCellRender;

    quarterCellRender?: CustomCellRender;
    /**
     * 不可选择的日期
     */
    disabledDate?: (value: Dayjs, mode: CalendarPanelMode) => boolean;
    /**
     * @skip
     */
    locale?: Locale['Calendar'];
    mode?: CalendarMode;
    onPrev?: OnPrevOrNext;
    onNext?: OnPrevOrNext;
    onSuperPrev?: OnPrevOrNext;
    onSuperNext?: OnPrevOrNext;
    headerRender?: (props: HeaderPanelProps) => React.ReactNode;
    validValue?: [Dayjs, Dayjs];
    renderHeaderExtra?: (props: HeaderPanelProps) => React.ReactNode;
    titleRender?: (value: ConfigType) => React.ReactNode;
    showTitle?: boolean;
    colNum?: number;
    hoveredState?: (value: unknown) => boolean;
    cellClassName?: (value: Dayjs) => Record<string, boolean> | undefined | null;
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

export type OnPrevOrNext = (value: Dayjs, options: { unit: ManipulateType; num: number }) => void;

export type CalendarMode = 'month' | 'year';

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

export interface CellData {
    value: Dayjs;
    label: number | string;
    isCurrent: boolean;
    key: string | number;
}

import React, { type KeyboardEvent, type MouseEvent } from 'react';
import PT from 'prop-types';
import { type Dayjs, type ConfigType } from 'dayjs';
import type { CalendarPanelMode, CellData, DateTableProps, DateTableState } from '../types';
declare class DateTable extends React.Component<DateTableProps, DateTableState> {
    static propTypes: {
        mode: PT.Requireable<CalendarPanelMode>;
        value: (
            props: Record<string, unknown>,
            propName: string,
            componentName: string
        ) => Error | null;
        panelValue: (
            props: Record<string, unknown>,
            propName: string,
            componentName: string
        ) => Error | null;
        dateCellRender: PT.Requireable<(...args: any[]) => any>;
        quarterCellRender: PT.Requireable<(...args: any[]) => any>;
        monthCellRender: PT.Requireable<(...args: any[]) => any>;
        yearCellRender: PT.Requireable<(...args: any[]) => any>;
        disabledDate: PT.Requireable<(...args: any[]) => any>;
        hoveredState: PT.Requireable<(...args: any[]) => any>;
        onSelect: PT.Requireable<(...args: any[]) => any>;
        cellClassName: PT.Requireable<
            NonNullable<string | ((...args: any[]) => any) | null | undefined>
        >;
        colNum: PT.Requireable<number>;
        cellProps: PT.Requireable<object>;
    };
    prefixCls: string;
    constructor(props: DateTableProps);
    handleSelect(
        v: Dayjs,
        e: KeyboardEvent<HTMLElement> | MouseEvent<HTMLElement>,
        args: Pick<CellData, 'isCurrent' | 'label'>
    ): void;
    handleKeyDown(
        v: Dayjs,
        e: KeyboardEvent<HTMLElement>,
        args: Pick<CellData, 'isCurrent' | 'label'>
    ): void;
    handleMouseEnter(
        v: Dayjs,
        e: MouseEvent<HTMLElement>,
        args: Pick<CellData, 'isCurrent' | 'label'>
    ): void;
    handleMouseLeave(
        v: Dayjs,
        e: MouseEvent<HTMLElement>,
        args: Pick<CellData, 'isCurrent' | 'label'>
    ): void;
    isSame(curDate: Dayjs, date: ConfigType, mode: CalendarPanelMode): boolean | undefined;
    getCustomRender: (mode: CalendarPanelMode) => import('../types').CustomCellRender | undefined;
    /**
     * 渲染日期面板
     * @param cellData - 单元格数据
     */
    renderCellContent(cellData: CellData[]): React.JSX.Element[];
    renderWeekdaysHead(): React.JSX.Element;
    getDateCellData(): {
        value: Dayjs;
        label: number;
        isCurrent: boolean;
        key: string;
    }[];
    getMonthCellData(): {
        label: string;
        value: Dayjs;
        isCurrent: boolean;
        key: string;
    }[];
    getQuarterCellData(): {
        label: string;
        value: Dayjs;
        isCurrent: boolean;
        key: string;
    }[];
    getYearCellData(): {
        value: Dayjs;
        label: number;
        isCurrent: boolean;
        key: number;
    }[];
    getDecadeData(): {
        value: Dayjs;
        label: string;
        isCurrent: boolean;
        key: string;
    }[];
    render(): React.JSX.Element;
}
declare const _default: typeof DateTable;
export default _default;

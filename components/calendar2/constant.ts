import type { CalendarPanelMode } from './types';

// 日历 shape
export const CALENDAR_SHAPE = {
    FULLSCREEN: 'fullscreen',
    CARD: 'card',
    PANEL: 'panel',
};

// 日历模式
export const CALENDAR_MODE = {
    MONTH: 'month',
    YEAR: 'year',
};

// 日期面板的模式
export const DATE_PANEL_MODE: Record<string, CalendarPanelMode> = {
    DATE: 'date',
    WEEK: 'week',
    MONTH: 'month',
    QUARTER: 'quarter',
    YEAR: 'year',
    DECADE: 'decade',
};

// 单元格选中状态
export const CALENDAR_CELL_STATE = {
    UN_SELECTED: 0,
    SELECTED: 1,
    SELECTED_BEGIN: 2,
    SELECTED_END: 3,
};

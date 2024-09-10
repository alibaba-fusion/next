import type { CalendarPanelMode } from './types';
export declare const CALENDAR_SHAPE: {
    FULLSCREEN: string;
    CARD: string;
    PANEL: string;
};
export declare const CALENDAR_MODE: {
    MONTH: string;
    YEAR: string;
};
export declare const DATE_PANEL_MODE: Record<string, CalendarPanelMode>;
export declare const CALENDAR_CELL_STATE: {
    UN_SELECTED: number;
    SELECTED: number;
    SELECTED_BEGIN: number;
    SELECTED_END: number;
};

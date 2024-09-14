"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CALENDAR_CELL_STATE = exports.DATE_PANEL_MODE = exports.CALENDAR_MODE = exports.CALENDAR_SHAPE = void 0;
// 日历 shape
exports.CALENDAR_SHAPE = {
    FULLSCREEN: 'fullscreen',
    CARD: 'card',
    PANEL: 'panel',
};
// 日历模式
exports.CALENDAR_MODE = {
    MONTH: 'month',
    YEAR: 'year',
};
// 日期面板的模式
exports.DATE_PANEL_MODE = {
    DATE: 'date',
    WEEK: 'week',
    MONTH: 'month',
    QUARTER: 'quarter',
    YEAR: 'year',
    DECADE: 'decade',
};
// 单元格选中状态
exports.CALENDAR_CELL_STATE = {
    UN_SELECTED: 0,
    SELECTED: 1,
    SELECTED_BEGIN: 2,
    SELECTED_END: 3,
};

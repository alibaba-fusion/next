'use strict';

exports.__esModule = true;
// 日历shape
var CALENDAR_SHAPE = exports.CALENDAR_SHAPE = {
    FULLSCREEN: 'fullscreen',
    CARD: 'card',
    PANEL: 'panel'
};

// 日历模式
var CALENDAR_MODE = exports.CALENDAR_MODE = {
    MONTH: 'month',
    YEAR: 'year'
};

// 日期面板的模式
var DATE_PANEL_MODE = exports.DATE_PANEL_MODE = {
    DATE: 'date',
    WEEK: 'week',
    MONTH: 'month',
    QUARTER: 'quarter',
    YEAR: 'year',
    DECADE: 'decade'
};

// 单元格选中状态
var CALENDAR_CELL_STATE = exports.CALENDAR_CELL_STATE = {
    UN_SELECTED: 0,
    SELECTED: 1,
    SELECTED_BEGIN: 2,
    SELECTED_END: 3
};
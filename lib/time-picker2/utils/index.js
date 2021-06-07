'use strict';

exports.__esModule = true;
exports.checkDayjsObj = checkDayjsObj;
exports.checkDateValue = checkDateValue;
exports.checkRangeDateValue = checkRangeDateValue;
exports.formatDateValue = formatDateValue;

var _util = require('../../util');

// 检查传入值是否为 dayjs 对象
function checkDayjsObj(props, propName, componentName) {
    if (props[propName] && !_util.datejs.isSelf(props[propName])) {
        return new Error('Invalid prop ' + propName + ' supplied to ' + componentName + '. Required a dayjs object.');
    }
}

// 检查传入值是否为 dayjs 对象
function checkDateValue(props, propName, componentName) {
    if (props[propName] && !_util.datejs.isSelf(props[propName]) && typeof props[propName] !== 'string') {
        return new Error('Invalid prop ' + propName + ' supplied to ' + componentName + '. Required a dayjs object or format date string.');
    }
}

function checkRangeDateValue(props, propName, componentName) {
    if (props[propName] && (!Array.isArray(props[propName]) || props[propName].every(function (item) {
        return _util.datejs.isSelf(props[propName]) || typeof props[propName] === 'string';
    }))) {
        return new Error('Invalid prop ' + propName + ' supplied to ' + componentName + '. Required a dayjs object or format date string.');
    }
}

function formatDateValue(value, format) {
    var val = typeof value === 'string' ? (0, _util.datejs)(value, format, true) : value;
    if (val && _util.datejs.isSelf(val) && val.isValid()) {
        return val;
    }
    return null;
}
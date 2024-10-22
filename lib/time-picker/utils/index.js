"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateValue = exports.checkDateValue = exports.checkMomentObj = void 0;
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("moment"));
// 检查传入值是否为 moment 对象
function checkMomentObj(props, propName, componentName) {
    if (props[propName] && !moment_1.default.isMoment(props[propName])) {
        return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". Required a moment object"));
    }
}
exports.checkMomentObj = checkMomentObj;
// 检查传入值是否为 moment 对象或时间字符串，字符串不检测是否为日期字符串
function checkDateValue(props, propName, componentName) {
    if (props[propName] &&
        !moment_1.default.isMoment(props[propName]) &&
        typeof props[propName] !== 'string') {
        return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". Required a moment object or format date string!"));
    }
}
exports.checkDateValue = checkDateValue;
function formatDateValue(value, format) {
    var val = typeof value === 'string' ? (0, moment_1.default)(value, format, true) : value;
    if (val && moment_1.default.isMoment(val) && val.isValid()) {
        return val;
    }
    return null;
}
exports.formatDateValue = formatDateValue;

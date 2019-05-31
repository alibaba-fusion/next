'use strict';

exports.__esModule = true;
exports.checkMomentObj = checkMomentObj;
exports.checkDateValue = checkDateValue;
exports.formatDateValue = formatDateValue;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 检查传入值是否为 moment 对象
function checkMomentObj(props, propName, componentName) {
    if (props[propName] && !_moment2.default.isMoment(props[propName])) {
        return new Error('Invalid prop ' + propName + ' supplied to ' + componentName + '. Required a moment object');
    }
}

// 检查传入值是否为 moment 对象或时间字符串，字符串不检测是否为日期字符串
function checkDateValue(props, propName, componentName) {
    if (props[propName] && !_moment2.default.isMoment(props[propName]) && typeof props[propName] !== 'string') {
        return new Error('Invalid prop ' + propName + ' supplied to ' + componentName + '. Required a moment object or format date string!');
    }
}

function formatDateValue(value, format) {
    var val = typeof value === 'string' ? (0, _moment2.default)(value, format, true) : value;
    if (val && _moment2.default.isMoment(val) && val.isValid()) {
        return val;
    }
    return null;
}
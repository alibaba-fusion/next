'use strict';

exports.__esModule = true;
exports.checkDayjsObj = checkDayjsObj;
exports.checkDateValue = checkDateValue;
exports.onTimeKeydown = onTimeKeydown;

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

/**
 * 监听键盘事件，操作时间
 * @param {KeyboardEvent} e
 * @param {Object} param1
 * @param {String} type second hour minute
 */
function onTimeKeydown(e, _ref, type) {
    var format = _ref.format,
        timeInputStr = _ref.timeInputStr,
        steps = _ref.steps,
        value = _ref.value;

    if ([_util.KEYCODE.UP, _util.KEYCODE.DOWN, _util.KEYCODE.PAGE_UP, _util.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1) return;
    if (e.altKey && [_util.KEYCODE.PAGE_UP, _util.KEYCODE.PAGE_DOWN].indexOf(e.keyCode) === -1 || e.controlKey || e.shiftKey) return;

    var time = (0, _util.datejs)(timeInputStr, format, true);

    if (time.isValid()) {
        var stepUnit = e.altKey ? 'hour' : 'minute';
        switch (e.keyCode) {
            case _util.KEYCODE.UP:
                time = time.subtract(steps[type], type);
                break;
            case _util.KEYCODE.DOWN:
                time = time.add(steps[type], type);
                break;
            case _util.KEYCODE.PAGE_UP:
                time = time.subtract(steps[stepUnit], stepUnit);
                break;
            case _util.KEYCODE.PAGE_DOWN:
                time = time.add(steps[stepUnit], stepUnit);
                break;
        }
    } else if (value) {
        time = value.clone();
    } else {
        time = (0, _util.datejs)();
        time = time.hour(0).minute(0).second(0);
    }

    e.preventDefault();
    return time.format(format);
}
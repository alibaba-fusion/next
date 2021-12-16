'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var PT = _interopRequireWildcard(_propTypes);

var _constant = require('./constant');

var _util = require('../util');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var error = function error(propName, ComponentName) {
    return new Error('Invalid prop ' + propName + ' supplied to ' + ComponentName + '. Validation failed.');
};

var SharedPT = {
    shape: PT.oneOf(Object.values(_constant.CALENDAR_SHAPE)),
    mode: PT.oneOf(Object.values(_constant.CALENDAR_MODE)),
    panelMode: PT.oneOf(Object.values(_constant.DATE_PANEL_MODE)),
    // 日期类型：
    //  @string: 2020-11-11
    //  @date: 日期对象
    //  @moment: moment对象
    //  @dayjs: dayjs对象
    date: function date(props, propName, componentName) {
        if (propName in props && !(0, _util.datejs)(props.propName).isValid()) {
            throw error(propName, componentName);
        }
    }
};

exports.default = SharedPT;
module.exports = exports['default'];
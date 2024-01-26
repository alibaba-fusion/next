'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constant = require('./constant');

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var error = function error(propName, ComponentName) {
    return new Error('Invalid prop ' + propName + ' supplied to ' + ComponentName + '. Validation failed.');
};

var SharedPT = {
    shape: _propTypes2.default.oneOf(Object.values(_constant.CALENDAR_SHAPE)),
    mode: _propTypes2.default.oneOf(Object.values(_constant.CALENDAR_MODE)),
    panelMode: _propTypes2.default.oneOf(Object.values(_constant.DATE_PANEL_MODE)),
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
module.exports = exports.default;
module.exports.default = exports.default;
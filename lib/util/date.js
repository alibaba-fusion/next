'use strict';

exports.__esModule = true;

var _dayjs = require('dayjs');

var _dayjs2 = _interopRequireDefault(_dayjs);

var _customParseFormat = require('dayjs/plugin/customParseFormat');

var _customParseFormat2 = _interopRequireDefault(_customParseFormat);

var _updateLocale = require('dayjs/plugin/updateLocale');

var _updateLocale2 = _interopRequireDefault(_updateLocale);

var _localeData = require('dayjs/plugin/localeData');

var _localeData2 = _interopRequireDefault(_localeData);

var _quarterOfYear = require('dayjs/plugin/quarterOfYear');

var _quarterOfYear2 = _interopRequireDefault(_quarterOfYear);

var _advancedFormat = require('dayjs/plugin/advancedFormat');

var _advancedFormat2 = _interopRequireDefault(_advancedFormat);

var _weekOfYear = require('dayjs/plugin/weekOfYear');

var _weekOfYear2 = _interopRequireDefault(_weekOfYear);

require('dayjs/locale/zh-cn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dayjs2.default.extend(_advancedFormat2.default);
_dayjs2.default.extend(_quarterOfYear2.default);
_dayjs2.default.extend(_customParseFormat2.default);
_dayjs2.default.extend(_updateLocale2.default);
_dayjs2.default.extend(_localeData2.default);
_dayjs2.default.extend(_weekOfYear2.default);
_dayjs2.default.locale('zh-cn');

var datejs = _dayjs2.default;
datejs.isSelf = _dayjs2.default.isDayjs;

_dayjs2.default.localeData();

exports.default = datejs;
module.exports = exports['default'];
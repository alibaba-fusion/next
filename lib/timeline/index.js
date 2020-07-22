'use strict';

exports.__esModule = true;

var _timeline = require('./view/timeline');

var _timeline2 = _interopRequireDefault(_timeline);

var _timelineItem = require('./view/timeline-item');

var _timelineItem2 = _interopRequireDefault(_timelineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_timeline2.default.Item = _timelineItem2.default;

exports.default = _timeline2.default;
module.exports = exports['default'];
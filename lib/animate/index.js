'use strict';

exports.__esModule = true;

var _animate = require('./animate');

var _animate2 = _interopRequireDefault(_animate);

var _expand = require('./expand');

var _expand2 = _interopRequireDefault(_expand);

var _overlayAnimate = require('./overlay-animate');

var _overlayAnimate2 = _interopRequireDefault(_overlayAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_animate2.default.Expand = _expand2.default;
_animate2.default.OverlayAnimate = _overlayAnimate2.default;

exports.default = _animate2.default;
module.exports = exports['default'];
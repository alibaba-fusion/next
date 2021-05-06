'use strict';

exports.__esModule = true;

var _typography = require('./typography');

var _typography2 = _interopRequireDefault(_typography);

var _paragraph = require('./paragraph');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _title = require('./title');

var _title2 = _interopRequireDefault(_title);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_typography2.default.Paragraph = _paragraph2.default;
_typography2.default.H1 = (0, _title2.default)('h1');
_typography2.default.H2 = (0, _title2.default)('h2');
_typography2.default.H3 = (0, _title2.default)('h3');
_typography2.default.H4 = (0, _title2.default)('h4');
_typography2.default.H5 = (0, _title2.default)('h5');
_typography2.default.H6 = (0, _title2.default)('h6');
_typography2.default.Text = _text2.default;

exports.default = _typography2.default;
module.exports = exports['default'];
'use strict';

exports.__esModule = true;

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _tagGroup = require('./tag-group');

var _tagGroup2 = _interopRequireDefault(_tagGroup);

var _selectable = require('./selectable');

var _selectable2 = _interopRequireDefault(_selectable);

var _closeable = require('./closeable');

var _closeable2 = _interopRequireDefault(_closeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfigTag = _configProvider2.default.config(_tag2.default, {
    transfrom: /* istanbul ignore next */function transfrom(props, deprecated) {
        var shape = props.shape,
            type = props.type;

        if (shape === 'selectable') {
            deprecated('shape=selectable', 'Tag.Selectable', 'Tag');
        }

        if (shape === 'deletable') {
            deprecated('shape=deletable', 'Tag.Closeable', 'Tag');
        }

        if (shape === 'link') {
            deprecated('shape=link', '<Tag><a href="x">x</a></Tag>', 'Tag');
        }

        if (shape === 'readonly' || shape === 'interactive') {
            _util.log.warning('Warning: [ shape=' + shape + ' ] is deprecated at [ Tag ]');
        }

        if (type === 'secondary') {
            _util.log.warning('Warning: [ type=secondary ] is deprecated at [ Tag ]');
        }

        ['count', 'marked', 'value', 'onChange'].forEach(function (key) {
            if (key in props) {
                _util.log.warning('Warning: [ ' + key + ' ] is deprecated at [ Tag ]');
            }
        });

        if ('selected' in props || 'defaultSelected' in props) {
            _util.log.warning('Warning: [ selected|defaultSelected  ] is deprecated at [ Tag ], use [ checked|defaultChecked ] at [ Tag.Selectable ] instead of it');
        }

        if ('closed' in props) {
            _util.log.warning('Warning: [ closed  ] is deprecated at [ Tag ], use [ onClose ] at [ Tag.Closeable ] instead of it');
        }

        if ('onSelect' in props) {
            deprecated('onSelect', '<Tag.Selectable onChange/>', 'Tag');
        }

        if ('afterClose' in props) {
            _util.log.warning('Warning: [ afterClose  ] is deprecated at [ Tag ], use [ afterClose ] at [ Tag.Closeable ] instead of it');
        }

        return props;
    }
});

ConfigTag.Group = _configProvider2.default.config(_tagGroup2.default);

ConfigTag.Selectable = _configProvider2.default.config(_selectable2.default);

// 有的地方叫做 Closeable 有的地方用Closeable, 为了保持兼容 文档类出现 Closeable, Closeable可以继续用
ConfigTag.Closable = _configProvider2.default.config(_closeable2.default);
ConfigTag.Closeable = ConfigTag.Closable;

exports.default = ConfigTag;
module.exports = exports['default'];
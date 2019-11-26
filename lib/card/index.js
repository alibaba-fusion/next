'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _bulletHeader = require('./bullet-header');

var _bulletHeader2 = _interopRequireDefault(_bulletHeader);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

var _divider = require('./divider');

var _divider2 = _interopRequireDefault(_divider);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _collapseContent = require('./collapse-content');

var _collapseContent2 = _interopRequireDefault(_collapseContent);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_card2.default.Header = _header2.default;
_card2.default.Media = _media2.default;
_card2.default.Divider = _divider2.default;
_card2.default.Content = _content2.default;
_card2.default.Actions = _actions2.default;
_card2.default.BulletHeader = _bulletHeader2.default;
_card2.default.CollaspeContent = _collapseContent2.default;

exports.default = _configProvider2.default.config(_card2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('titlePrefixLine' in props) {
            deprecated('titlePrefixLine', 'showTitleBullet', 'Card');
            var _props = props,
                titlePrefixLine = _props.titlePrefixLine,
                others = (0, _objectWithoutProperties3.default)(_props, ['titlePrefixLine']);

            props = (0, _extends3.default)({ showTitleBullet: titlePrefixLine }, others);
        }
        if ('titleBottomLine' in props) {
            deprecated('titleBottomLine', 'showHeadDivider', 'Card');

            var _props2 = props,
                titleBottomLine = _props2.titleBottomLine,
                _others = (0, _objectWithoutProperties3.default)(_props2, ['titleBottomLine']);

            props = (0, _extends3.default)({ showHeadDivider: titleBottomLine }, _others);
        }
        if ('bodyHeight' in props) {
            deprecated('bodyHeight', 'contentHeight', 'Card');

            var _props3 = props,
                bodyHeight = _props3.bodyHeight,
                _others2 = (0, _objectWithoutProperties3.default)(_props3, ['bodyHeight']);

            props = (0, _extends3.default)({ contentHeight: bodyHeight }, _others2);
        }

        return props;
    }
});
module.exports = exports['default'];
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _range = require('./view/range');

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_range2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('hasTips' in props) {
            deprecated('hasTips', 'hasTip', 'Range');

            var _props = props,
                hasTips = _props.hasTips,
                others = (0, _objectWithoutProperties3.default)(_props, ['hasTips']);

            props = (0, _extends3.default)({ hasTip: hasTips }, others);
        }

        if ('tipFormatter' in props) {
            deprecated('tipFormatter', 'tipRender', 'Range');

            var _props2 = props,
                tipFormatter = _props2.tipFormatter,
                _others = (0, _objectWithoutProperties3.default)(_props2, ['tipFormatter']);

            props = (0, _extends3.default)({ tipRender: tipFormatter }, _others);
        }

        return props;
    }
});
module.exports = exports['default'];
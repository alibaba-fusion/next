'use strict';

exports.__esModule = true;

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _numberPicker = require('./number-picker');

var _numberPicker2 = _interopRequireDefault(_numberPicker);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_numberPicker2.default, {
    transform: /* istanbul ignore next */function transform(props) {
        if ('onDisabled' in props && typeof props.onDisabled === 'function') {
            _util.log.warning('[NumberPicker]: onDisabled is deleted!');
        }

        return props;
    }
});
module.exports = exports['default'];
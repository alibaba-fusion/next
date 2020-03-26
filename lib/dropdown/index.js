'use strict';

exports.__esModule = true;

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_dropdown2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('triggerType' in props) {
            var triggerType = Array.isArray(props.triggerType) ? [].concat(props.triggerType) : [props.triggerType];

            if (triggerType.indexOf('focus') > -1) {
                deprecated('triggerType[focus]', 'triggerType[hover, click]', 'Balloon');
            }
        }

        return props;
    }
});
module.exports = exports['default'];
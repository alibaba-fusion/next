'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _step = require('./view/step');

var _step2 = _interopRequireDefault(_step);

var _stepItem = require('./view/step-item');

var _stepItem2 = _interopRequireDefault(_stepItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_step2.default.Item = _stepItem2.default;

exports.default = _configProvider2.default.config(_step2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'shape', 'Step');

            var _props = props,
                type = _props.type,
                direction = _props.direction,
                labelPlacement = _props.labelPlacement,
                others = (0, _objectWithoutProperties3.default)(_props, ['type', 'direction', 'labelPlacement']);

            direction = direction === 'vertical' ? 'ver' : direction === 'horizontal' ? 'hoz' : direction;
            labelPlacement = labelPlacement === 'vertical' ? 'ver' : labelPlacement === 'horizontal' ? 'hoz' : labelPlacement;
            props = (0, _extends3.default)({ shape: type, direction: direction, labelPlacement: labelPlacement }, others);
        }

        return props;
    }
});
module.exports = exports['default'];
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxGroup = require('./checkbox-group');

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_checkbox2.default.Group = _configProvider2.default.config(_checkboxGroup2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('itemDirection' in props) {
            deprecated('itemDirection', 'direction', 'Checkbox');
            var _props = props,
                itemDirection = _props.itemDirection,
                others = (0, _objectWithoutProperties3.default)(_props, ['itemDirection']);


            props = (0, _extends3.default)({ direction: itemDirection }, others);
        }

        return props;
    }
});

exports.default = _checkbox2.default;
module.exports = exports['default'];
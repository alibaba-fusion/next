'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _rating = require('./rating');

var _rating2 = _interopRequireDefault(_rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_rating2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'showGrade', 'Rating');

            var _props = props,
                type = _props.type,
                others = (0, _objectWithoutProperties3.default)(_props, ['type']);

            props = (0, _extends3.default)({ showGrade: type === 'grade' }, others);
        }

        var _props2 = props,
            disabled = _props2.disabled,
            readOnly = _props2.readOnly;

        props.disabled = disabled || readOnly;

        return props;
    }
});
module.exports = exports['default'];
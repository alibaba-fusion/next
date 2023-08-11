'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _submit = require('./submit');

var _submit2 = _interopRequireDefault(_submit);

var _reset = require('./reset');

var _reset2 = _interopRequireDefault(_reset);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_form2.default.Item = _configProvider2.default.config(_item2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('validateStatus' in props) {
            deprecated('validateStatus', 'validateState', 'Form.Item');

            var _props = props,
                validateStatus = _props.validateStatus,
                others = (0, _objectWithoutProperties3.default)(_props, ['validateStatus']);

            props = (0, _extends3.default)({ validateState: validateStatus }, others);
        }

        return props;
    }
});
_form2.default.Submit = _submit2.default;
_form2.default.Reset = _reset2.default;
_form2.default.Error = _error2.default;

exports.default = _configProvider2.default.config(_form2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('direction' in props) {
            deprecated('direction', 'inline', 'Form');
            var _props2 = props,
                direction = _props2.direction,
                others = (0, _objectWithoutProperties3.default)(_props2, ['direction']);

            if (direction === 'hoz') {
                props = (0, _extends3.default)({ inline: true }, others);
            }
        }

        return props;
    }
});
module.exports = exports['default'];
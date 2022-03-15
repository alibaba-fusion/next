'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _timePicker = require('./time-picker');

var _timePicker2 = _interopRequireDefault(_timePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_timePicker2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('defaultOpen' in props) {
            deprecated('defaultOpen', 'defaultVisible', 'TimePicker');
            var _props = props,
                defaultOpen = _props.defaultOpen,
                others = (0, _objectWithoutProperties3.default)(_props, ['defaultOpen']);

            props = (0, _extends3.default)({ defaultVisible: defaultOpen }, others);
        }
        if ('open' in props) {
            deprecated('open', 'visible', 'TimePicker');

            var _props2 = props,
                open = _props2.open,
                _others = (0, _objectWithoutProperties3.default)(_props2, ['open']);

            props = (0, _extends3.default)({ visible: open }, _others);
        }
        if ('onOpenChange' in props) {
            deprecated('onOpenChange', 'onVisibleChange', 'TimePicker');

            var _props3 = props,
                onOpenChange = _props3.onOpenChange,
                _others2 = (0, _objectWithoutProperties3.default)(_props3, ['onOpenChange']);

            props = (0, _extends3.default)({ onVisibleChange: onOpenChange }, _others2);
        }

        return props;
    }
});
module.exports = exports['default'];
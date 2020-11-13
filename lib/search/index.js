'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_Search2.default, {
    transfrom: /* istanbul ignore next */function transfrom(props, deprecated) {
        var onInputFocus = props.onInputFocus,
            overlayVisible = props.overlayVisible,
            combox = props.combox,
            others = (0, _objectWithoutProperties3.default)(props, ['onInputFocus', 'overlayVisible', 'combox']);


        var newprops = others;

        if (onInputFocus) {
            deprecated('onInputFocus', 'onFocus', 'Search');
            newprops.onFocus = onInputFocus;
        }
        if ('overlayVisible' in props) {
            deprecated('overlayVisible', 'visible', 'Search');
            newprops.visible = overlayVisible;
        }
        if (combox) {
            deprecated('combox', 'popupContent', 'Search');
            newprops.popupContent = combox;
        }

        return newprops;
    }
});
module.exports = exports['default'];
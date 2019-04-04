'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _button = require('./view/button');

var _button2 = _interopRequireDefault(_button);

var _group = require('./view/group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_button2.default.Group = _group2.default;

exports.default = _configProvider2.default.config(_button2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'text | warning | ghost', 'Button');

            var _props = props,
                shape = _props.shape,
                type = _props.type,
                others = (0, _objectWithoutProperties3.default)(_props, ['shape', 'type']);


            var newType = type;
            if (type === 'light' || type === 'dark' || type === 'secondary' && shape === 'warning') {
                newType = 'normal';
            }

            var ghost = void 0;
            if (shape === 'ghost') {
                ghost = {
                    primary: 'dark',
                    secondary: 'dark',
                    normal: 'light',
                    dark: 'dark',
                    light: 'light'
                }[type || _button2.default.defaultProps.type];
            }

            var text = shape === 'text';
            var warning = shape === 'warning';

            props = (0, _extends3.default)({ type: newType, ghost: ghost, text: text, warning: warning }, others);
        }

        return props;
    }
});
module.exports = exports['default'];
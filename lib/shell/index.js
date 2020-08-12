'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _shell = require('./shell');

var _shell2 = _interopRequireDefault(_shell);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Shell = (0, _shell2.default)({
    componentName: 'Shell'
});

['Branding', 'Navigation', 'Action', 'MultiTask', 'LocalNavigation', 'AppBar', 'Content', 'Footer', 'Ancillary', 'ToolDock', 'ToolDockItem'].forEach(function (key) {
    Shell[key] = (0, _base2.default)({
        componentName: key
    });
});

Shell.Page = _configProvider2.default.config((0, _shell2.default)({
    componentName: 'Page'
}));

exports.default = _configProvider2.default.config(Shell, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('Component' in props) {
            deprecated('Component', 'component', 'Shell');
            var _props = props,
                Component = _props.Component,
                component = _props.component,
                others = (0, _objectWithoutProperties3.default)(_props, ['Component', 'component']);

            if ('component' in props) {
                props = (0, _extends3.default)({ component: component }, others);
            } else {
                props = (0, _extends3.default)({ component: Component }, others);
            }
        }
        return props;
    }
});
module.exports = exports['default'];
'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _cascader = require('./cascader');

var _cascader2 = _interopRequireDefault(_cascader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_cascader2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('expandTrigger' in props) {
            deprecated('expandTrigger', 'expandTriggerType', 'Cascader');
            var _props = props,
                expandTrigger = _props.expandTrigger,
                others = (0, _objectWithoutProperties3.default)(_props, ['expandTrigger']);

            props = (0, _extends3.default)({ expandTriggerType: expandTrigger }, others);
        }

        if ('showItemCount' in props) {
            deprecated('showItemCount', 'listStyle | listClassName', 'Cascader');
        }
        if ('labelWidth' in props) {
            deprecated('labelWidth', 'listStyle | listClassName', 'Cascader');
        }

        return props;
    },
    exportNames: ['setFocusValue']
});
module.exports = exports['default'];
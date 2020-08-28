'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

var _tabItem = require('./tabs/tab-item');

var _tabItem2 = _interopRequireDefault(_tabItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tab2.default.Item = _tabItem2.default;

_tab2.default.TabPane = _configProvider2.default.config(_tabItem2.default, {
    transform: function transform(props, deprecated) {
        deprecated('Tab.TabPane', 'Tab.Item', 'Tab');
        return props;
    }
});

exports.default = _configProvider2.default.config(_tab2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'shape', 'Tab');
            var _props = props,
                type = _props.type,
                others = (0, _objectWithoutProperties3.default)(_props, ['type']);

            props = (0, _extends3.default)({ shape: type }, others);
        }
        if ('resDirection' in props) {
            var _props2 = props,
                resDirection = _props2.resDirection,
                _others = (0, _objectWithoutProperties3.default)(_props2, ['resDirection']);

            var excessMode = void 0;
            if (resDirection === 'horizontal') {
                deprecated('resDirection=horizontal', 'excessMode=slide', 'Tab');

                excessMode = 'slide';
            } else if (resDirection === 'vertical') {
                deprecated('resDirection=vertical', 'excessMode=dropdown', 'Tab');

                excessMode = 'dropdown';
            }
            props = (0, _extends3.default)({ excessMode: excessMode }, _others);
        }
        if ('tabBarExtraContent' in props) {
            deprecated('tabBarExtraContent', 'extra', 'Tab');

            var _props3 = props,
                tabBarExtraContent = _props3.tabBarExtraContent,
                _others2 = (0, _objectWithoutProperties3.default)(_props3, ['tabBarExtraContent']);

            props = (0, _extends3.default)({ extra: tabBarExtraContent }, _others2);
        }

        return props;
    }
});
module.exports = exports['default'];
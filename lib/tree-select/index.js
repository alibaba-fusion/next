'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _treeSelect = require('./tree-select');

var _treeSelect2 = _interopRequireDefault(_treeSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_treeSelect2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('shape' in props) {
            deprecated('shape', 'hasBorder', 'TreeSelect');
            var _props = props,
                shape = _props.shape,
                others = (0, _objectWithoutProperties3.default)(_props, ['shape']);

            props = (0, _extends3.default)({ hasBorder: shape !== 'arrow-only' }, others);
        }

        if ('container' in props) {
            deprecated('container', 'popupContainer', 'TreeSelect');

            var _props2 = props,
                container = _props2.container,
                _others = (0, _objectWithoutProperties3.default)(_props2, ['container']);

            props = (0, _extends3.default)({ popupContainer: container }, _others);
        }

        return props;
    }
});
module.exports = exports['default'];
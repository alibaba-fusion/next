'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _balloon = require('./balloon');

var _balloon2 = _interopRequireDefault(_balloon);

var _tooltip = require('./tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _inner = require('./inner');

var _inner2 = _interopRequireDefault(_inner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_balloon2.default.Tooltip = _configProvider2.default.config(_tooltip2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('text' in props) {
            deprecated('text', 'children', 'Tooltip');
            var _props = props,
                text = _props.text,
                others = (0, _objectWithoutProperties3.default)(_props, ['text']);

            props = (0, _extends3.default)({ children: text }, others);
        }

        return props;
    }
});
_balloon2.default.Inner = _inner2.default;

exports.default = _configProvider2.default.config(_balloon2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if (props.alignment) {
            deprecated('alignment', 'alignEdge', 'Balloon');
            var _props2 = props,
                alignment = _props2.alignment,
                others = (0, _objectWithoutProperties3.default)(_props2, ['alignment']);

            props = (0, _extends3.default)({ alignEdge: alignment === 'edge' }, others);
        }
        if (props.onCloseClick) {
            deprecated('onCloseClick', 'onVisibleChange(visible, [type = "closeClick"])', 'Balloon');

            var _props3 = props,
                onCloseClick = _props3.onCloseClick,
                onVisibleChange = _props3.onVisibleChange,
                _others = (0, _objectWithoutProperties3.default)(_props3, ['onCloseClick', 'onVisibleChange']);

            var newOnVisibleChange = function newOnVisibleChange(visible, type) {
                if (type === 'closeClick') {
                    onCloseClick();
                }
                if (onVisibleChange) {
                    onVisibleChange(visible, type);
                }
            };
            props = (0, _extends3.default)({ onVisibleChange: newOnVisibleChange }, _others);
        }

        return props;
    }
});
module.exports = exports['default'];
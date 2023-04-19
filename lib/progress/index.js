'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _progress = require('./view/progress');

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _configProvider2.default.config(_progress2.default, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        if ('type' in props) {
            deprecated('type', 'progressive', 'Progress');

            var _props = props,
                type = _props.type,
                others = (0, _objectWithoutProperties3.default)(_props, ['type']);

            props = (0, _extends3.default)({ progressive: type === 'progressive' }, others);
        }

        if ('showInfo' in props) {
            deprecated('showInfo', 'textRender', 'Progress');

            var _props2 = props,
                showInfo = _props2.showInfo,
                _others = (0, _objectWithoutProperties3.default)(_props2, ['showInfo']);

            if (showInfo) {
                props = _others;
            } else {
                props = (0, _extends3.default)({ textRender: function textRender() {
                        return false;
                    } }, _others);
            }
        }

        if ('suffix' in props) {
            deprecated('suffix', 'textRender', 'Progress');

            var _props3 = props,
                suffix = _props3.suffix,
                _others2 = (0, _objectWithoutProperties3.default)(_props3, ['suffix']);

            props = (0, _extends3.default)({ textRender: function textRender() {
                    return suffix;
                } }, _others2);
        }

        return props;
    }
});
module.exports = exports['default'];
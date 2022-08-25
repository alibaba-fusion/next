'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _col = require('./col');

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = {
    Row: _configProvider2.default.config(_row2.default, {
        transform: /* istanbul ignore next */function transform(props, deprecated) {
            if ('type' in props) {
                deprecated('type', 'fixed | wrap | gutter', 'Row');

                var _props = props,
                    type = _props.type,
                    others = (0, _objectWithoutProperties3.default)(_props, ['type']);

                var types = Array.isArray(type) ? type : [type];
                var fixed = void 0;
                if (types.indexOf('fixed') > -1) {
                    fixed = true;
                }
                var wrap = void 0;
                if (types.indexOf('wrap') > -1) {
                    wrap = true;
                }
                props = (0, _extends3.default)({ fixed: fixed, wrap: wrap }, others);
            }

            return props;
        }
    }),
    Col: _configProvider2.default.config(_col2.default)
};

exports.default = Grid;
module.exports = exports['default'];
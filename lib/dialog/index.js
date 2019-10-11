'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _inner = require('./inner');

var _inner2 = _interopRequireDefault(_inner);

var _show = require('./show');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dialog2.default.Inner = _inner2.default;
_dialog2.default.show = function (config) {
    var _ConfigProvider$getCo = _configProvider2.default.getContextProps(config, 'Dialog'),
        warning = _ConfigProvider$getCo.warning;

    if (warning !== false) {
        config = processProps(config, _util.log.deprecated);
    }
    return (0, _show.show)(config);
};
_dialog2.default.alert = function (config) {
    var _ConfigProvider$getCo2 = _configProvider2.default.getContextProps(config, 'Dialog'),
        warning = _ConfigProvider$getCo2.warning;

    if (warning !== false) {
        config = processProps(config, _util.log.deprecated);
    }
    return (0, _show.alert)(config);
};
_dialog2.default.confirm = function (config) {
    var _ConfigProvider$getCo3 = _configProvider2.default.getContextProps(config, 'Dialog'),
        warning = _ConfigProvider$getCo3.warning;

    if (warning !== false) {
        config = processProps(config, _util.log.deprecated);
    }
    return (0, _show.confirm)(config);
};

/* istanbul ignore next */
function processProps(props, deprecated) {
    if ('closable' in props) {
        deprecated('closable', 'closeable', 'Dialog');
        var _props = props,
            closable = _props.closable,
            others = (0, _objectWithoutProperties3.default)(_props, ['closable']);

        props = (0, _extends4.default)({ closeable: closable }, others);
    }

    var overlayPropNames = ['target', 'offset', 'beforeOpen', 'onOpen', 'afterOpen', 'beforePosition', 'onPosition', 'cache', 'safeNode', 'wrapperClassName', 'container'];
    overlayPropNames.forEach(function (name) {
        if (name in props) {
            var _extends2;

            deprecated(name, 'overlayProps.' + name, 'Dialog');

            var _props2 = props,
                overlayProps = _props2.overlayProps,
                _others = (0, _objectWithoutProperties3.default)(_props2, ['overlayProps']);

            var newOverlayProps = (0, _extends4.default)((_extends2 = {}, _extends2[name] = props[name], _extends2), overlayProps || {});
            delete _others[name];
            props = (0, _extends4.default)({ overlayProps: newOverlayProps }, _others);
        }
    });

    return props;
}

exports.default = _configProvider2.default.config(_dialog2.default, {
    transform: function transform(props, deprecated) {
        return processProps(props, deprecated);
    }
});
module.exports = exports['default'];
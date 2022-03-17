'use strict';

exports.__esModule = true;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _configProvider = require('../config-provider');

var _configProvider2 = _interopRequireDefault(_configProvider);

var _util = require('../util');

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _dialogV = require('./dialog-v2');

var _dialogV2 = _interopRequireDefault(_dialogV);

var _inner = require('./inner');

var _inner2 = _interopRequireDefault(_inner);

var _show = require('./show');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = function (_React$Component) {
    (0, _inherits3.default)(Dialog, _React$Component);

    function Dialog() {
        (0, _classCallCheck3.default)(this, Dialog);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
    }

    Dialog.prototype.render = function render() {
        var _props = this.props,
            v2 = _props.v2,
            others = (0, _objectWithoutProperties3.default)(_props, ['v2']);

        if (v2) {
            return _react2.default.createElement(_dialogV2.default, others);
        } else {
            return _react2.default.createElement(_dialog2.default, others);
        }
    };

    return Dialog;
}(_react2.default.Component);

Dialog.displayName = 'Dialog';


Dialog.Inner = _inner2.default;
Dialog.show = function (config) {
    var _ConfigProvider$getCo = _configProvider2.default.getContextProps(config, 'Dialog'),
        warning = _ConfigProvider$getCo.warning;

    if (warning !== false) {
        config = processProps(config, _util.log.deprecated);
    }
    return (0, _show.show)(config);
};
Dialog.alert = function (config) {
    var _ConfigProvider$getCo2 = _configProvider2.default.getContextProps(config, 'Dialog'),
        warning = _ConfigProvider$getCo2.warning;

    if (warning !== false) {
        config = processProps(config, _util.log.deprecated);
    }
    return (0, _show.alert)(config);
};
Dialog.confirm = function (config) {
    var _ConfigProvider$getCo3 = _configProvider2.default.getContextProps(config, 'Dialog'),
        warning = _ConfigProvider$getCo3.warning;

    if (warning !== false) {
        config = processProps(config, _util.log.deprecated);
    }
    return (0, _show.confirm)(config);
};
Dialog.success = function (config) {
    return (0, _show.success)(config);
};
Dialog.error = function (config) {
    return (0, _show.error)(config);
};
Dialog.notice = function (config) {
    return (0, _show.notice)(config);
};
Dialog.warning = function (config) {
    return (0, _show.warning)(config);
};
Dialog.help = function (config) {
    return (0, _show.help)(config);
};

Dialog.withContext = _show.withContext;

/* istanbul ignore next */
function processProps(props, deprecated) {
    if ('closable' in props) {
        deprecated('closable', 'closeable', 'Dialog');
        var _props2 = props,
            closable = _props2.closable,
            others = (0, _objectWithoutProperties3.default)(_props2, ['closable']);

        props = (0, _extends4.default)({ closeable: closable }, others);
    }

    if ('v2' in props) {
        var nProps = (0, _extends4.default)({}, props);
        if ('align' in props) {
            delete nProps.align;
            deprecated('align', 'centered', '<Dialog v2 />');
        }
        if ('shouldUpdatePosition' in props) {
            delete nProps.shouldUpdatePosition;
            _util.log.warning('Warning: [ shouldUpdatePosition ] is deprecated at [ <Dialog v2 /> ]');
        }
        if ('minMargin' in props) {
            // delete nProps.minMargin;
            deprecated('minMargin', 'top/bottom', '<Dialog v2 />');
        }
        if ('isFullScreen' in props) {
            props.overFlowScroll = !props.isFullScreen;
            delete nProps.isFullScreen;
            deprecated('isFullScreen', 'overFlowScroll', '<Dialog v2 />');
        }

        return nProps;
    }

    var overlayPropNames = ['target', 'offset', 'beforeOpen', 'onOpen', 'afterOpen', 'beforePosition', 'onPosition', 'cache', 'safeNode', 'wrapperClassName', 'container'];
    overlayPropNames.forEach(function (name) {
        if (name in props) {
            var _extends2;

            deprecated(name, 'overlayProps.' + name, 'Dialog');

            var _props3 = props,
                overlayProps = _props3.overlayProps,
                _others = (0, _objectWithoutProperties3.default)(_props3, ['overlayProps']);

            var newOverlayProps = (0, _extends4.default)((_extends2 = {}, _extends2[name] = props[name], _extends2), overlayProps || {});
            delete _others[name];
            props = (0, _extends4.default)({ overlayProps: newOverlayProps }, _others);
        }
    });

    return props;
}

exports.default = _configProvider2.default.config(Dialog, {
    transform: function transform(props, deprecated) {
        return processProps(props, deprecated);
    }
});
module.exports = exports['default'];
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import ConfigProvider from '../config-provider';
import { log } from '../util';
import Dialog1 from './dialog';
import Dialog2 from './dialog-v2';

import Inner from './inner';
import { show, alert, confirm, withContext, success, error, notice, warning, help } from './show';

var Dialog = function (_React$Component) {
    _inherits(Dialog, _React$Component);

    function Dialog() {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Dialog.prototype.render = function render() {
        var _props = this.props,
            v2 = _props.v2,
            others = _objectWithoutProperties(_props, ['v2']);

        if (v2) {
            return React.createElement(Dialog2, others);
        } else {
            return React.createElement(Dialog1, others);
        }
    };

    return Dialog;
}(React.Component);

Dialog.displayName = 'Dialog';


Dialog.Inner = Inner;
Dialog.show = function (config) {
    var _ConfigProvider$getCo = ConfigProvider.getContextProps(config, 'Dialog'),
        warning = _ConfigProvider$getCo.warning;

    if (warning !== false) {
        config = processProps(config, log.deprecated);
    }
    return show(config);
};
Dialog.alert = function (config) {
    var _ConfigProvider$getCo2 = ConfigProvider.getContextProps(config, 'Dialog'),
        warning = _ConfigProvider$getCo2.warning;

    if (warning !== false) {
        config = processProps(config, log.deprecated);
    }
    return alert(config);
};
Dialog.confirm = function (config) {
    var _ConfigProvider$getCo3 = ConfigProvider.getContextProps(config, 'Dialog'),
        warning = _ConfigProvider$getCo3.warning;

    if (warning !== false) {
        config = processProps(config, log.deprecated);
    }
    return confirm(config);
};
Dialog.success = function (config) {
    return success(config);
};
Dialog.error = function (config) {
    return error(config);
};
Dialog.notice = function (config) {
    return notice(config);
};
Dialog.warning = function (config) {
    return warning(config);
};
Dialog.help = function (config) {
    return help(config);
};

Dialog.withContext = withContext;

/* istanbul ignore next */
function processProps(props, deprecated) {
    if ('closable' in props) {
        deprecated('closable', 'closeable', 'Dialog');

        var _props2 = props,
            closable = _props2.closable,
            others = _objectWithoutProperties(_props2, ['closable']);

        props = _extends({ closeable: closable }, others);
    }

    if ('v2' in props) {
        var nProps = _extends({}, props);
        if ('align' in props) {
            delete nProps.align;
            deprecated('align', 'centered', '<Dialog v2 />');
        }
        if ('shouldUpdatePosition' in props) {
            delete nProps.shouldUpdatePosition;
            log.warning('Warning: [ shouldUpdatePosition ] is deprecated at [ <Dialog v2 /> ]');
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
                _others = _objectWithoutProperties(_props3, ['overlayProps']);

            var newOverlayProps = _extends((_extends2 = {}, _extends2[name] = props[name], _extends2), overlayProps || {});
            delete _others[name];
            props = _extends({ overlayProps: newOverlayProps }, _others);
        }
    });

    return props;
}

export default ConfigProvider.config(Dialog, {
    transform: function transform(props, deprecated) {
        return processProps(props, deprecated);
    }
});
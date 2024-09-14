import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import ConfigProvider from '../config-provider';
import { log } from '../util';
import Dialog1 from './dialog';
import Dialog2 from './dialog-v2';
import Inner from './inner';
import { show, alert, confirm, withContext, success, error, notice, warning, help } from './show';
function processProps(props, deprecated) {
    if ('closable' in props) {
        deprecated('closable', 'closeable', 'Dialog');
        var closable = props.closable, others = __rest(props, ["closable"]);
        props = __assign({ closeable: closable }, others);
    }
    if ('v2' in props) {
        var nProps = __assign({}, props);
        if ('align' in props) {
            delete nProps.align;
            deprecated('align', 'centered', '<Dialog v2 />');
        }
        if ('shouldUpdatePosition' in props) {
            delete nProps.shouldUpdatePosition;
            log.warning("Warning: [ shouldUpdatePosition ] is deprecated at [ <Dialog v2 /> ]");
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
    var overlayPropNames = [
        'target',
        'offset',
        'beforeOpen',
        'onOpen',
        'afterOpen',
        'beforePosition',
        'onPosition',
        'cache',
        'safeNode',
        'wrapperClassName',
        'container',
    ];
    overlayPropNames.forEach(function (name) {
        var _a;
        if (name in props) {
            deprecated(name, "overlayProps.".concat(name), 'Dialog');
            var overlayProps = props.overlayProps, others = __rest(props, ["overlayProps"]);
            var newOverlayProps = __assign((_a = {}, _a[name] = props[name], _a), (overlayProps || {}));
            delete others[name];
            props = __assign({ overlayProps: newOverlayProps }, others);
        }
    });
    return props;
}
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialog.prototype.render = function () {
        var _a = this.props, v2 = _a.v2, others = __rest(_a, ["v2"]);
        if (v2) {
            return React.createElement(Dialog2, __assign({}, others));
        }
        else {
            return React.createElement(Dialog1, __assign({}, others));
        }
    };
    Dialog.displayName = 'Dialog';
    Dialog.Inner = Inner;
    Dialog.withContext = withContext;
    Dialog.show = function (config) {
        var warning = ConfigProvider.getContextProps(config, 'Dialog').warning;
        if (warning !== false) {
            config = processProps(config, log.deprecated);
        }
        return show(config);
    };
    Dialog.alert = function (config) {
        var warning = ConfigProvider.getContextProps(config, 'Dialog').warning;
        if (warning !== false) {
            config = processProps(config, log.deprecated);
        }
        return alert(config);
    };
    Dialog.confirm = function (config) {
        var warning = ConfigProvider.getContextProps(config, 'Dialog').warning;
        if (warning !== false) {
            config = processProps(config, log.deprecated);
        }
        return confirm(config);
    };
    Dialog.success = function (config) { return success(config); };
    Dialog.error = function (config) { return error(config); };
    Dialog.notice = function (config) { return notice(config); };
    Dialog.warning = function (config) { return warning(config); };
    Dialog.help = function (config) { return help(config); };
    return Dialog;
}(React.Component));
export default ConfigProvider.config(Dialog, {
    transform: function (props, deprecated) {
        return processProps(props, deprecated);
    },
});

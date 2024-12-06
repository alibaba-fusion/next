"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
var dialog_1 = tslib_1.__importDefault(require("./dialog"));
var dialog_v2_1 = tslib_1.__importDefault(require("./dialog-v2"));
var inner_1 = tslib_1.__importDefault(require("./inner"));
var show_1 = require("./show");
function processProps(props, deprecated) {
    if ('closable' in props) {
        deprecated('closable', 'closeable', 'Dialog');
        var closable = props.closable, others = tslib_1.__rest(props, ["closable"]);
        props = tslib_1.__assign({ closeable: closable }, others);
    }
    if ('v2' in props) {
        var nProps = tslib_1.__assign({}, props);
        if ('align' in props) {
            delete nProps.align;
            deprecated('align', 'centered', '<Dialog v2 />');
        }
        if ('shouldUpdatePosition' in props) {
            delete nProps.shouldUpdatePosition;
            util_1.log.warning("Warning: [ shouldUpdatePosition ] is deprecated at [ <Dialog v2 /> ]");
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
            var overlayProps = props.overlayProps, others = tslib_1.__rest(props, ["overlayProps"]);
            var newOverlayProps = tslib_1.__assign((_a = {}, _a[name] = props[name], _a), (overlayProps || {}));
            delete others[name];
            props = tslib_1.__assign({ overlayProps: newOverlayProps }, others);
        }
    });
    return props;
}
var Dialog = /** @class */ (function (_super) {
    tslib_1.__extends(Dialog, _super);
    function Dialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialog.prototype.render = function () {
        var _a = this.props, v2 = _a.v2, others = tslib_1.__rest(_a, ["v2"]);
        if (v2) {
            return react_1.default.createElement(dialog_v2_1.default, tslib_1.__assign({}, others));
        }
        else {
            return react_1.default.createElement(dialog_1.default, tslib_1.__assign({}, others));
        }
    };
    Dialog.displayName = 'Dialog';
    Dialog.Inner = inner_1.default;
    Dialog.withContext = show_1.withContext;
    Dialog.show = function (config) {
        var warning = config_provider_1.default.getContextProps(config, 'Dialog').warning;
        if (warning !== false) {
            config = processProps(config, util_1.log.deprecated);
        }
        return (0, show_1.show)(config);
    };
    Dialog.alert = function (config) {
        var warning = config_provider_1.default.getContextProps(config, 'Dialog').warning;
        if (warning !== false) {
            config = processProps(config, util_1.log.deprecated);
        }
        return (0, show_1.alert)(config);
    };
    Dialog.confirm = function (config) {
        var warning = config_provider_1.default.getContextProps(config, 'Dialog').warning;
        if (warning !== false) {
            config = processProps(config, util_1.log.deprecated);
        }
        return (0, show_1.confirm)(config);
    };
    Dialog.success = function (config) { return (0, show_1.success)(config); };
    Dialog.error = function (config) { return (0, show_1.error)(config); };
    Dialog.notice = function (config) { return (0, show_1.notice)(config); };
    Dialog.warning = function (config) { return (0, show_1.warning)(config); };
    Dialog.help = function (config) { return (0, show_1.help)(config); };
    return Dialog;
}(react_1.default.Component));
exports.default = config_provider_1.default.config(Dialog, {
    transform: function (props, deprecated) {
        return processProps(props, deprecated);
    },
});

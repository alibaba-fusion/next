"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var animate_1 = tslib_1.__importDefault(require("../animate"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
var noop = function () { };
/**
 * Message
 */
var Message = /** @class */ (function (_super) {
    tslib_1.__extends(Message, _super);
    function Message() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.state = {
            visible: typeof _this.props.visible === 'undefined'
                ? _this.props.defaultVisible
                : _this.props.visible,
        };
        _this.onClose = function () {
            if (!('visible' in _this.props)) {
                _this.setState({
                    visible: false,
                });
            }
            _this.props.onClose();
        };
        return _this;
    }
    Message.getDerivedStateFromProps = function (props) {
        if ('visible' in props) {
            return {
                visible: props.visible,
            };
        }
        return {};
    };
    Message.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, style = _b.style, type = _b.type, shape = _b.shape, size = _b.size, title = _b.title, children = _b.children, icon = _b.iconType, closeable = _b.closeable, afterClose = _b.afterClose, animation = _b.animation, rtl = _b.rtl, locale = _b.locale;
        var others = tslib_1.__assign({}, util_1.obj.pickOthers(Object.keys(Message.propTypes), this.props));
        var visible = this.state.visible;
        var messagePrefix = "".concat(prefix, "message");
        var classes = (0, classnames_1.default)((_a = {},
            _a[messagePrefix] = true,
            _a["".concat(prefix, "message-").concat(type)] = type,
            _a["".concat(prefix).concat(shape)] = shape,
            _a["".concat(prefix).concat(size)] = size,
            _a["".concat(prefix, "title-content")] = !!title,
            _a["".concat(prefix, "only-content")] = !title && !!children,
            _a[className] = className,
            _a));
        var newChildren = visible ? (react_1.default.createElement("div", tslib_1.__assign({ role: "alert", style: style }, others, { className: classes, dir: rtl ? 'rtl' : undefined }),
            closeable ? (react_1.default.createElement("a", { role: "button", "aria-label": locale.closeAriaLabel, className: "".concat(messagePrefix, "-close"), onClick: this.onClose },
                react_1.default.createElement(icon_1.default, { type: "close" }))) : null,
            icon !== false ? (react_1.default.createElement(icon_1.default, { className: "".concat(messagePrefix, "-symbol ").concat(!icon && "".concat(messagePrefix, "-symbol-icon")), type: icon })) : null,
            title ? react_1.default.createElement("div", { className: "".concat(messagePrefix, "-title") }, title) : null,
            children ? react_1.default.createElement("div", { className: "".concat(messagePrefix, "-content") }, children) : null)) : null;
        if (animation) {
            return (react_1.default.createElement(animate_1.default.Expand, { animationAppear: false, afterLeave: afterClose }, newChildren));
        }
        return newChildren;
    };
    Message.propTypes = {
        prefix: prop_types_1.default.string,
        pure: prop_types_1.default.bool,
        className: prop_types_1.default.string,
        style: prop_types_1.default.object,
        type: prop_types_1.default.oneOf(['success', 'warning', 'error', 'notice', 'help', 'loading']),
        shape: prop_types_1.default.oneOf(['inline', 'addon', 'toast']),
        size: prop_types_1.default.oneOf(['medium', 'large']),
        title: prop_types_1.default.node,
        children: prop_types_1.default.node,
        defaultVisible: prop_types_1.default.bool,
        visible: prop_types_1.default.bool,
        iconType: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
        closeable: prop_types_1.default.bool,
        onClose: prop_types_1.default.func,
        afterClose: prop_types_1.default.func,
        animation: prop_types_1.default.bool,
        locale: prop_types_1.default.object,
        rtl: prop_types_1.default.bool,
    };
    Message.displayName = 'Message';
    Message.defaultProps = {
        prefix: 'next-',
        pure: false,
        type: 'success',
        shape: 'inline',
        size: 'medium',
        defaultVisible: true,
        closeable: false,
        onClose: noop,
        afterClose: noop,
        animation: true,
        locale: zh_cn_1.default.Message,
    };
    return Message;
}(react_1.Component));
exports.default = config_provider_1.default.config((0, react_lifecycles_compat_1.polyfill)(Message));

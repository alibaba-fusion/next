import { __assign, __extends, __read, __spreadArray } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classNames from 'classnames';
import nextLocale from '../locale/zh-cn';
import Icon from '../icon';
import Animate from '../animate';
import ConfigProvider from '../config-provider';
import { obj } from '../util';
var noop = function () { };
/**
 * Message
 */
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
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
        var others = __assign({}, obj.pickOthers(Object.keys(Message.propTypes), this.props));
        var visible = this.state.visible;
        var messagePrefix = "".concat(prefix, "message");
        var classes = classNames((_a = {},
            _a[messagePrefix] = true,
            _a["".concat(prefix, "message-").concat(type)] = type,
            _a["".concat(prefix).concat(shape)] = shape,
            _a["".concat(prefix).concat(size)] = size,
            _a["".concat(prefix, "title-content")] = !!title,
            _a["".concat(prefix, "only-content")] = !title && !!children,
            _a[className] = className,
            _a));
        var newChildren = visible ? (React.createElement("div", __assign({ role: "alert", style: style }, others, { className: classes, dir: rtl ? 'rtl' : undefined }),
            closeable ? (React.createElement("a", { role: "button", "aria-label": locale.closeAriaLabel, className: "".concat(messagePrefix, "-close"), onClick: this.onClose },
                React.createElement(Icon, { type: "close" }))) : null,
            icon !== false ? (React.createElement(Icon, { className: "".concat(messagePrefix, "-symbol ").concat(!icon && "".concat(messagePrefix, "-symbol-icon")), type: icon })) : null,
            title ? React.createElement("div", { className: "".concat(messagePrefix, "-title") }, title) : null,
            children ? React.createElement("div", { className: "".concat(messagePrefix, "-content") }, children) : null)) : null;
        if (animation) {
            return (React.createElement(Animate.Expand, { animationAppear: false, afterLeave: afterClose }, newChildren));
        }
        return newChildren;
    };
    Message.propTypes = {
        prefix: PropTypes.string,
        pure: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        type: PropTypes.oneOf(['success', 'warning', 'error', 'notice', 'help', 'loading']),
        shape: PropTypes.oneOf(['inline', 'addon', 'toast']),
        size: PropTypes.oneOf(['medium', 'large']),
        title: PropTypes.node,
        children: PropTypes.node,
        defaultVisible: PropTypes.bool,
        visible: PropTypes.bool,
        iconType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        closeable: PropTypes.bool,
        onClose: PropTypes.func,
        afterClose: PropTypes.func,
        animation: PropTypes.bool,
        locale: PropTypes.object,
        rtl: PropTypes.bool,
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
        locale: nextLocale.Message,
    };
    return Message;
}(Component));
export default ConfigProvider.config(polyfill(Message));

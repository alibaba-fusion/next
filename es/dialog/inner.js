import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../button';
import Icon from '../icon';
import zhCN from '../locale/zh-cn';
import { func, obj, guid, dom } from '../util';
var makeChain = func.makeChain;
var pickOthers = obj.pickOthers;
var noop = function () { };
var Inner = /** @class */ (function (_super) {
    __extends(Inner, _super);
    function Inner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inner.prototype.componentDidUpdate = function () {
        // style 作为第一优先级
        var _a = this.props, pheight = _a.height, style = _a.style, v2 = _a.v2;
        var _b = style, maxHeight = _b.maxHeight, _c = _b.height, sheight = _c === void 0 ? maxHeight || pheight : _c;
        if (this.bodyNode && v2 && sheight && sheight !== 'auto') {
            var style_1 = {};
            var headerHeight = 0, footerHeight = 0;
            if (this.headerNode) {
                headerHeight = this.headerNode.getBoundingClientRect().height;
            }
            if (this.footerNode) {
                footerHeight = this.footerNode.getBoundingClientRect().height;
            }
            var minHeight = headerHeight + footerHeight;
            var height = sheight;
            if (sheight && typeof sheight === 'string') {
                if (height.match(/calc|vh/)) {
                    style_1.maxHeight = "calc(".concat(sheight, " - ").concat(minHeight, "px)");
                    style_1.overflowY = 'auto';
                }
                else {
                    height = parseInt(sheight);
                }
            }
            if (typeof height === 'number' && height > minHeight) {
                style_1.maxHeight = height - minHeight;
                style_1.overflowY = 'auto';
            }
            dom.setStyle(this.bodyNode, style_1);
        }
    };
    Inner.prototype.getNode = function (name, ref) {
        this[name] = ref;
    };
    Inner.prototype.renderHeader = function () {
        var _a = this.props, prefix = _a.prefix, title = _a.title;
        if (title) {
            this.titleId = guid('dialog-title-');
            return (React.createElement("div", { className: "".concat(prefix, "dialog-header"), id: this.titleId, ref: this.getNode.bind(this, 'headerNode'), role: "heading", "aria-level": 1 }, title));
        }
        return null;
    };
    Inner.prototype.renderBody = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, children = _b.children, footer = _b.footer, noPadding = _b.noPadding;
        if (children) {
            return (React.createElement("div", { className: cx("".concat(prefix, "dialog-body"), (_a = {},
                    _a["".concat(prefix, "dialog-body-no-footer")] = footer === false,
                    _a["".concat(prefix, "dialog-body-no-padding")] = noPadding === true,
                    _a)), ref: this.getNode.bind(this, 'bodyNode') }, children));
        }
        return null;
    };
    Inner.prototype.renderFooter = function () {
        var _a;
        var _this = this;
        var _b = this.props, prefix = _b.prefix, footer = _b.footer, footerAlign = _b.footerAlign, footerActions = _b.footerActions, locale = _b.locale, height = _b.height;
        if (footer === false) {
            return null;
        }
        var newClassName = cx((_a = {},
            _a["".concat(prefix, "dialog-footer")] = true,
            _a["".concat(prefix, "align-").concat(footerAlign)] = true,
            _a["".concat(prefix, "dialog-footer-fixed-height")] = !!height,
            _a));
        var footerContent = footer === true || !footer
            ? footerActions.map(function (action) {
                var btnProps = _this.props["".concat(action, "Props")];
                var newBtnProps = __assign(__assign({}, btnProps), { prefix: prefix, className: cx("".concat(prefix, "dialog-btn"), btnProps.className), onClick: makeChain(_this.props["on".concat(action[0].toUpperCase() + action.slice(1))], btnProps.onClick), children: btnProps.children || locale[action] });
                if (action === 'ok') {
                    newBtnProps.type = 'primary';
                }
                return React.createElement(Button, __assign({ key: action }, newBtnProps));
            })
            : footer;
        return (React.createElement("div", { className: newClassName, ref: this.getNode.bind(this, 'footerNode') }, footerContent));
    };
    Inner.prototype.renderCloseLink = function () {
        var _a = this.props, prefix = _a.prefix, closeable = _a.closeable, onClose = _a.onClose, locale = _a.locale, closeIcon = _a.closeIcon;
        if (closeable) {
            return (React.createElement("a", { role: "button", "aria-label": locale.close, className: "".concat(prefix, "dialog-close"), onClick: onClose }, closeIcon ? (closeIcon) : (React.createElement(Icon, { className: "".concat(prefix, "dialog-close-icon"), type: "close" }))));
        }
        return null;
    };
    Inner.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, closeable = _b.closeable, title = _b.title, role = _b.role, rtl = _b.rtl;
        var others = pickOthers(Inner.propTypes, this.props);
        var newClassName = cx((_a = {},
            _a["".concat(prefix, "dialog")] = true,
            _a["".concat(prefix, "closeable")] = closeable,
            _a[className] = !!className,
            _a));
        var header = this.renderHeader();
        var body = this.renderBody();
        var footer = this.renderFooter();
        var closeLink = this.renderCloseLink();
        var ariaProps = {
            role: role,
            'aria-modal': 'true',
        };
        if (title) {
            ariaProps['aria-labelledby'] = this.titleId;
        }
        others.style = Object.assign({}, obj.pickProps(['height', 'maxHeight', 'width'], this.props), others.style);
        return (React.createElement("div", __assign({}, ariaProps, { className: newClassName }, others, { dir: rtl ? 'rtl' : undefined }),
            header,
            body,
            footer,
            closeLink));
    };
    Inner.propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        title: PropTypes.node,
        children: PropTypes.node,
        footer: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
        footerAlign: PropTypes.oneOf(['left', 'center', 'right']),
        footerActions: PropTypes.array,
        onOk: PropTypes.func,
        onCancel: PropTypes.func,
        okProps: PropTypes.object,
        cancelProps: PropTypes.object,
        closeable: PropTypes.bool,
        onClose: PropTypes.func,
        locale: PropTypes.object,
        role: PropTypes.string,
        rtl: PropTypes.bool,
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        // set value for a fixed height dialog. Passing a value will absolutely position the footer to the bottom.
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        v2: PropTypes.bool,
        closeIcon: PropTypes.node,
        pure: PropTypes.bool,
        noPadding: PropTypes.bool,
    };
    Inner.defaultProps = {
        prefix: 'next-',
        footerAlign: 'right',
        footerActions: ['ok', 'cancel'],
        onOk: noop,
        onCancel: noop,
        okProps: {},
        cancelProps: {},
        closeable: true,
        onClose: noop,
        locale: zhCN.Dialog,
        role: 'dialog',
    };
    return Inner;
}(Component));
export default Inner;

import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';
import zhCN from '../locale/zh-cn';
import { obj } from '../util';
var noop = function () { };
var pickOthers = obj.pickOthers;
var Inner = /** @class */ (function (_super) {
    __extends(Inner, _super);
    function Inner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inner.prototype.renderHeader = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, title = _b.title, headerStyle = _b.headerStyle;
        var closeLink = this.renderCloseLink();
        var headerCls = cx((_a = {},
            _a["".concat(prefix, "drawer-header")] = true,
            _a["".concat(prefix, "drawer-no-title")] = !title,
            _a));
        var ariaProps = {
            role: 'heading',
            'aria-level': 1,
        };
        return (React.createElement("div", __assign({}, ariaProps, { className: headerCls, style: headerStyle }),
            title,
            closeLink));
    };
    Inner.prototype.renderBody = function () {
        var _a = this.props, prefix = _a.prefix, children = _a.children, bodyStyle = _a.bodyStyle;
        if (children) {
            return (React.createElement("div", { className: "".concat(prefix, "drawer-body"), style: bodyStyle }, children));
        }
        return null;
    };
    Inner.prototype.renderCloseLink = function () {
        var _a = this.props, prefix = _a.prefix, closeable = _a.closeable, onClose = _a.onClose, locale = _a.locale;
        var ariaProps = {
            role: 'button',
            'aria-label': locale === null || locale === void 0 ? void 0 : locale.close,
        };
        if (closeable) {
            return (React.createElement("a", __assign({}, ariaProps, { className: "".concat(prefix, "drawer-close"), onClick: onClose }),
                React.createElement(Icon, { className: "".concat(prefix, "drawer-close-icon"), type: "close" })));
        }
        return null;
    };
    Inner.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, closeable = _b.closeable, placement = _b.placement, role = _b.role, rtl = _b.rtl, v2 = _b.v2;
        var others = pickOthers(Object.keys(Inner.propTypes), this.props);
        var newClassName = cx((_a = {},
            _a["".concat(prefix, "drawer")] = true,
            _a["".concat(prefix, "drawer-").concat(placement)] = !v2,
            _a["".concat(prefix, "closeable")] = closeable,
            _a[className] = !!className,
            _a));
        var ariaProps = {
            role: role,
            'aria-modal': 'true',
        };
        var header = this.renderHeader();
        var body = this.renderBody();
        return (React.createElement("div", __assign({}, ariaProps, { className: newClassName }, others, { dir: rtl ? 'rtl' : undefined }), v2 ? (React.createElement("div", { className: "".concat(prefix, "drawer-content") },
            header,
            body)) : (React.createElement("div", { style: { height: '100%', overflow: 'auto' } },
            header,
            body))));
    };
    Inner.propTypes = {
        prefix: PropTypes.string,
        className: PropTypes.string,
        closeable: PropTypes.bool,
        role: PropTypes.string,
        title: PropTypes.node,
        placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        rtl: PropTypes.bool,
        onClose: PropTypes.func,
        locale: PropTypes.object,
        headerStyle: PropTypes.object,
        bodyStyle: PropTypes.object,
        afterClose: PropTypes.func,
        beforeOpen: PropTypes.func,
        beforeClose: PropTypes.func,
        cache: PropTypes.bool,
        shouldUpdatePosition: PropTypes.bool,
        v2: PropTypes.bool,
    };
    Inner.defaultProps = {
        prefix: 'next-',
        closeable: true,
        role: 'dialog',
        onClose: noop,
        locale: zhCN.Drawer,
    };
    return Inner;
}(Component));
export default Inner;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var noop = function () { };
var pickOthers = util_1.obj.pickOthers;
var Inner = /** @class */ (function (_super) {
    tslib_1.__extends(Inner, _super);
    function Inner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inner.prototype.renderHeader = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, title = _b.title, headerStyle = _b.headerStyle;
        var closeLink = this.renderCloseLink();
        var headerCls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "drawer-header")] = true,
            _a["".concat(prefix, "drawer-no-title")] = !title,
            _a));
        var ariaProps = {
            role: 'heading',
            'aria-level': 1,
        };
        return (react_1.default.createElement("div", tslib_1.__assign({}, ariaProps, { className: headerCls, style: headerStyle }),
            title,
            closeLink));
    };
    Inner.prototype.renderBody = function () {
        var _a = this.props, prefix = _a.prefix, children = _a.children, bodyStyle = _a.bodyStyle;
        if (children) {
            return (react_1.default.createElement("div", { className: "".concat(prefix, "drawer-body"), style: bodyStyle }, children));
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
            return (react_1.default.createElement("a", tslib_1.__assign({}, ariaProps, { className: "".concat(prefix, "drawer-close"), onClick: onClose }),
                react_1.default.createElement(icon_1.default, { className: "".concat(prefix, "drawer-close-icon"), type: "close" })));
        }
        return null;
    };
    Inner.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, closeable = _b.closeable, placement = _b.placement, role = _b.role, rtl = _b.rtl, v2 = _b.v2;
        var others = pickOthers(Object.keys(Inner.propTypes), this.props);
        var newClassName = (0, classnames_1.default)((_a = {},
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
        return (react_1.default.createElement("div", tslib_1.__assign({}, ariaProps, { className: newClassName }, others, { dir: rtl ? 'rtl' : undefined }), v2 ? (react_1.default.createElement("div", { className: "".concat(prefix, "drawer-content") },
            header,
            body)) : (react_1.default.createElement("div", { style: { height: '100%', overflow: 'auto' } },
            header,
            body))));
    };
    Inner.propTypes = {
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.string,
        closeable: prop_types_1.default.bool,
        role: prop_types_1.default.string,
        title: prop_types_1.default.node,
        placement: prop_types_1.default.oneOf(['top', 'right', 'bottom', 'left']),
        rtl: prop_types_1.default.bool,
        onClose: prop_types_1.default.func,
        locale: prop_types_1.default.object,
        headerStyle: prop_types_1.default.object,
        bodyStyle: prop_types_1.default.object,
        afterClose: prop_types_1.default.func,
        beforeOpen: prop_types_1.default.func,
        beforeClose: prop_types_1.default.func,
        cache: prop_types_1.default.bool,
        shouldUpdatePosition: prop_types_1.default.bool,
        v2: prop_types_1.default.bool,
    };
    Inner.defaultProps = {
        prefix: 'next-',
        closeable: true,
        role: 'dialog',
        onClose: noop,
        locale: zh_cn_1.default.Drawer,
    };
    return Inner;
}(react_1.Component));
exports.default = Inner;

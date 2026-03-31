"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var button_1 = tslib_1.__importDefault(require("../button"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var util_1 = require("../util");
var makeChain = util_1.func.makeChain;
var pickOthers = util_1.obj.pickOthers;
var noop = function () { };
var Inner = /** @class */ (function (_super) {
    tslib_1.__extends(Inner, _super);
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
            util_1.dom.setStyle(this.bodyNode, style_1);
        }
    };
    Inner.prototype.getNode = function (name, ref) {
        this[name] = ref;
    };
    Inner.prototype.renderHeader = function () {
        var _a = this.props, prefix = _a.prefix, title = _a.title;
        if (title) {
            this.titleId = (0, util_1.guid)('dialog-title-');
            return (react_1.default.createElement("div", { className: "".concat(prefix, "dialog-header"), id: this.titleId, ref: this.getNode.bind(this, 'headerNode'), role: "heading", "aria-level": 1 }, title));
        }
        return null;
    };
    Inner.prototype.renderBody = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, children = _b.children, footer = _b.footer, noPadding = _b.noPadding;
        if (children) {
            return (react_1.default.createElement("div", { className: (0, classnames_1.default)("".concat(prefix, "dialog-body"), (_a = {},
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
        var newClassName = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "dialog-footer")] = true,
            _a["".concat(prefix, "align-").concat(footerAlign)] = true,
            _a["".concat(prefix, "dialog-footer-fixed-height")] = !!height,
            _a));
        var footerContent = footer === true || !footer
            ? footerActions.map(function (action) {
                var btnProps = _this.props["".concat(action, "Props")];
                var newBtnProps = tslib_1.__assign(tslib_1.__assign({}, btnProps), { prefix: prefix, className: (0, classnames_1.default)("".concat(prefix, "dialog-btn"), btnProps.className), onClick: makeChain(_this.props["on".concat(action[0].toUpperCase() + action.slice(1))], btnProps.onClick), children: btnProps.children || locale[action] });
                if (action === 'ok') {
                    newBtnProps.type = 'primary';
                }
                return react_1.default.createElement(button_1.default, tslib_1.__assign({ key: action }, newBtnProps));
            })
            : footer;
        return (react_1.default.createElement("div", { className: newClassName, ref: this.getNode.bind(this, 'footerNode') }, footerContent));
    };
    Inner.prototype.renderCloseLink = function () {
        var _a = this.props, prefix = _a.prefix, closeable = _a.closeable, onClose = _a.onClose, locale = _a.locale, closeIcon = _a.closeIcon;
        if (closeable) {
            return (react_1.default.createElement("a", { role: "button", "aria-label": locale.close, className: "".concat(prefix, "dialog-close"), onClick: onClose }, closeIcon ? (closeIcon) : (react_1.default.createElement(icon_1.default, { className: "".concat(prefix, "dialog-close-icon"), type: "close" }))));
        }
        return null;
    };
    Inner.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, closeable = _b.closeable, title = _b.title, role = _b.role, rtl = _b.rtl;
        var others = pickOthers(Inner.propTypes, this.props);
        var newClassName = (0, classnames_1.default)((_a = {},
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
        others.style = Object.assign({}, util_1.obj.pickProps(['height', 'maxHeight', 'width'], this.props), others.style);
        return (react_1.default.createElement("div", tslib_1.__assign({}, ariaProps, { className: newClassName }, others, { dir: rtl ? 'rtl' : undefined }),
            header,
            body,
            footer,
            closeLink));
    };
    Inner.propTypes = {
        prefix: prop_types_1.default.string,
        className: prop_types_1.default.string,
        title: prop_types_1.default.node,
        children: prop_types_1.default.node,
        footer: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.node]),
        footerAlign: prop_types_1.default.oneOf(['left', 'center', 'right']),
        footerActions: prop_types_1.default.array,
        onOk: prop_types_1.default.func,
        onCancel: prop_types_1.default.func,
        okProps: prop_types_1.default.object,
        cancelProps: prop_types_1.default.object,
        closeable: prop_types_1.default.bool,
        onClose: prop_types_1.default.func,
        locale: prop_types_1.default.object,
        role: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        width: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        // set value for a fixed height dialog. Passing a value will absolutely position the footer to the bottom.
        height: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        maxHeight: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
        v2: prop_types_1.default.bool,
        closeIcon: prop_types_1.default.node,
        pure: prop_types_1.default.bool,
        noPadding: prop_types_1.default.bool,
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
        locale: zh_cn_1.default.Dialog,
        role: 'dialog',
    };
    return Inner;
}(react_1.Component));
exports.default = Inner;

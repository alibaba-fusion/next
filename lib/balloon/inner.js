"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var util_1 = require("../util");
var icon_1 = tslib_1.__importDefault(require("../icon"));
var zh_cn_1 = tslib_1.__importDefault(require("../locale/zh-cn"));
var alignMap_1 = require("./alignMap");
/**
 * Created by xiachi on 17/2/10.
 */
var noop = util_1.func.noop;
var BalloonInner = /** @class */ (function (_super) {
    tslib_1.__extends(BalloonInner, _super);
    function BalloonInner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BalloonInner.prototype.render = function () {
        var _a, _b;
        var _c = this.props, prefix = _c.prefix, closable = _c.closable, className = _c.className, style = _c.style, isTooltip = _c.isTooltip, align = _c.align, title = _c.title, type = _c.type, onClose = _c.onClose, alignEdge = _c.alignEdge, v2 = _c.v2, children = _c.children, rtl = _c.rtl, locale = _c.locale, others = tslib_1.__rest(_c, ["prefix", "closable", "className", "style", "isTooltip", "align", "title", "type", "onClose", "alignEdge", "v2", "children", "rtl", "locale"]);
        var alignMap = alignEdge || v2 ? alignMap_1.edgeMap : alignMap_1.normalMap;
        var _prefix = prefix;
        if (isTooltip) {
            _prefix = "".concat(_prefix, "balloon-tooltip");
        }
        else {
            _prefix = "".concat(_prefix, "balloon");
        }
        var closableInTitle = closable && title !== undefined;
        var closableInContent = closable && title === undefined;
        var classes = (0, classnames_1.default)((_a = {},
            _a["".concat(_prefix)] = true,
            _a["".concat(_prefix, "-").concat(type)] = type,
            _a["".concat(_prefix, "-medium")] = true,
            _a["".concat(_prefix, "-").concat(alignMap[align].arrow)] = alignMap[align],
            _a["".concat(_prefix, "-closable")] = closableInContent,
            _a[className] = className,
            _a["".concat(_prefix, "-v2")] = v2,
            _a));
        var titleCls = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "balloon-title")] = true,
            _b["".concat(_prefix, "-closable")] = closableInTitle,
            _b));
        var closeIcon = (react_1.default.createElement("a", { role: "button", "aria-label": locale.close, tabIndex: 0, className: "".concat(_prefix, "-close"), onClick: onClose },
            react_1.default.createElement(icon_1.default, { type: "close", size: "small" })));
        return (react_1.default.createElement("div", tslib_1.__assign({ role: "tooltip", "aria-live": "polite", dir: rtl ? 'rtl' : undefined, className: classes, style: style }, util_1.obj.pickOthers(Object.keys(BalloonInner.propTypes), others)),
            react_1.default.createElement("div", { className: "".concat(prefix, "balloon-arrow") },
                react_1.default.createElement("div", { className: "".concat(prefix, "balloon-arrow-content") })),
            title && (react_1.default.createElement("div", { className: titleCls },
                title,
                closableInTitle && closeIcon)),
            react_1.default.createElement("div", { className: "".concat(prefix, "balloon-content") }, children),
            closableInContent && closeIcon));
    };
    BalloonInner.contextTypes = {
        prefix: prop_types_1.default.string,
    };
    BalloonInner.propTypes = {
        prefix: prop_types_1.default.string,
        rtl: prop_types_1.default.bool,
        closable: prop_types_1.default.bool,
        children: prop_types_1.default.any,
        title: prop_types_1.default.node,
        className: prop_types_1.default.string,
        alignEdge: prop_types_1.default.bool,
        onClose: prop_types_1.default.func,
        style: prop_types_1.default.any,
        align: prop_types_1.default.string,
        type: prop_types_1.default.string,
        isTooltip: prop_types_1.default.bool,
        locale: prop_types_1.default.object,
        pure: prop_types_1.default.bool,
        v2: prop_types_1.default.bool,
    };
    BalloonInner.defaultProps = {
        prefix: 'next-',
        closable: true,
        onClose: noop,
        locale: zh_cn_1.default.Balloon,
        align: 'b',
        type: 'normal',
        alignEdge: false,
        pure: false,
    };
    return BalloonInner;
}(react_1.default.Component));
exports.default = BalloonInner;

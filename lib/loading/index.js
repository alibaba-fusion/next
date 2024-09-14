"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var overlay_1 = tslib_1.__importDefault(require("../overlay"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var util_1 = require("../util");
/** Loading */
var Loading = /** @class */ (function (_super) {
    tslib_1.__extends(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.render = function () {
        var _a, _b, _c, _d;
        var _e = this.props, tip = _e.tip, visible = _e.visible, children = _e.children, className = _e.className, style = _e.style, indicator = _e.indicator, color = _e.color, prefix = _e.prefix, fullScreen = _e.fullScreen, disableScroll = _e.disableScroll, onVisibleChange = _e.onVisibleChange, tipAlign = _e.tipAlign, size = _e.size, inline = _e.inline, rtl = _e.rtl, safeNode = _e.safeNode;
        var indicatorDom = null;
        var dotCls = "".concat(prefix, "loading-dot");
        if (indicator) {
            indicatorDom = indicator;
        }
        else {
            var backgroundColor = color;
            var fusionReactorCls = (0, classnames_1.default)((_a = {},
                _a["".concat(prefix, "loading-fusion-reactor")] = true,
                _a["".concat(prefix, "loading-medium-fusion-reactor")] = size === 'medium',
                _a));
            indicatorDom = (react_1.default.createElement("div", { className: fusionReactorCls, dir: rtl ? 'rtl' : undefined },
                react_1.default.createElement("span", { className: dotCls, style: { backgroundColor: backgroundColor } }),
                react_1.default.createElement("span", { className: dotCls, style: { backgroundColor: backgroundColor } }),
                react_1.default.createElement("span", { className: dotCls, style: { backgroundColor: backgroundColor } }),
                react_1.default.createElement("span", { className: dotCls, style: { backgroundColor: backgroundColor } })));
        }
        var loadingCls = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "loading")] = true,
            _b["".concat(prefix, "open")] = visible,
            _b["".concat(prefix, "loading-inline")] = inline,
            _b[className] = className,
            _b));
        var tipCls = (0, classnames_1.default)((_c = {},
            _c["".concat(prefix, "loading-tip")] = true,
            _c["".concat(prefix, "loading-tip-fullscreen")] = fullScreen,
            // 默认非 right就是 bottom
            _c["".concat(prefix, "loading-right-tip")] = tipAlign === 'right',
            _c));
        var others = util_1.obj.pickOthers(Loading.propTypes, this.props);
        var contentCls = (0, classnames_1.default)((_d = {},
            _d["".concat(prefix, "loading-component")] = visible,
            _d["".concat(prefix, "loading-wrap")] = true,
            _d));
        return fullScreen ? ([
            children,
            react_1.default.createElement(overlay_1.default, tslib_1.__assign({ key: "overlay", hasMask: true, align: "cc cc", safeNode: safeNode, disableScroll: disableScroll }, others, { className: className, style: style, visible: visible, onRequestClose: onVisibleChange }),
                react_1.default.createElement("div", { className: tipCls },
                    react_1.default.createElement("div", { className: "".concat(prefix, "loading-indicator") }, indicatorDom),
                    react_1.default.createElement("div", { className: "".concat(prefix, "loading-tip-content") }, tip),
                    react_1.default.createElement("div", { className: "".concat(prefix, "loading-tip-placeholder") }, tip))),
        ]) : (react_1.default.createElement("div", tslib_1.__assign({ className: loadingCls, style: style }, others),
            visible ? (react_1.default.createElement("div", { className: tipCls },
                react_1.default.createElement("div", { className: "".concat(prefix, "loading-indicator") }, indicatorDom),
                react_1.default.createElement("div", { className: "".concat(prefix, "loading-tip-content") }, tip),
                react_1.default.createElement("div", { className: "".concat(prefix, "loading-tip-placeholder") }, tip))) : null,
            react_1.default.createElement("div", { className: contentCls },
                visible ? react_1.default.createElement("div", { className: "".concat(prefix, "loading-masker") }) : null,
                children)));
    };
    Loading.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: prop_types_1.default.string, tip: prop_types_1.default.any, tipAlign: prop_types_1.default.oneOf(['right', 'bottom']), visible: prop_types_1.default.bool, onVisibleChange: prop_types_1.default.func, className: prop_types_1.default.string, style: prop_types_1.default.object, size: prop_types_1.default.oneOf(['large', 'medium']), indicator: prop_types_1.default.any, color: prop_types_1.default.string, fullScreen: prop_types_1.default.bool, disableScroll: prop_types_1.default.bool, safeNode: prop_types_1.default.any, children: prop_types_1.default.any, inline: prop_types_1.default.bool, rtl: prop_types_1.default.bool });
    Loading.defaultProps = {
        prefix: 'next-',
        visible: true,
        onVisibleChange: util_1.func.noop,
        animate: null,
        tipAlign: 'bottom',
        size: 'large',
        inline: true,
        disableScroll: false,
    };
    return Loading;
}(react_1.default.Component));
exports.default = config_provider_1.default.config(Loading);

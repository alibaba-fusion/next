"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var PropTypes = require("prop-types");
var classNames = require("classnames");
var overlay_1 = require("../overlay");
var config_provider_1 = require("../config-provider");
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
            var fusionReactorCls = classNames((_a = {},
                _a["".concat(prefix, "loading-fusion-reactor")] = true,
                _a["".concat(prefix, "loading-medium-fusion-reactor")] = size === 'medium',
                _a));
            indicatorDom = (React.createElement("div", { className: fusionReactorCls, dir: rtl ? 'rtl' : undefined },
                React.createElement("span", { className: dotCls, style: { backgroundColor: backgroundColor } }),
                React.createElement("span", { className: dotCls, style: { backgroundColor: backgroundColor } }),
                React.createElement("span", { className: dotCls, style: { backgroundColor: backgroundColor } }),
                React.createElement("span", { className: dotCls, style: { backgroundColor: backgroundColor } })));
        }
        var loadingCls = classNames((_b = {},
            _b["".concat(prefix, "loading")] = true,
            _b["".concat(prefix, "open")] = visible,
            _b["".concat(prefix, "loading-inline")] = inline,
            _b[className] = className,
            _b));
        var tipCls = classNames((_c = {},
            _c["".concat(prefix, "loading-tip")] = true,
            _c["".concat(prefix, "loading-tip-fullscreen")] = fullScreen,
            // 默认非 right就是 bottom
            _c["".concat(prefix, "loading-right-tip")] = tipAlign === 'right',
            _c));
        var others = util_1.obj.pickOthers(Loading.propTypes, this.props);
        var contentCls = classNames((_d = {},
            _d["".concat(prefix, "loading-component")] = visible,
            _d["".concat(prefix, "loading-wrap")] = true,
            _d));
        return fullScreen ? ([
            children,
            React.createElement(overlay_1.default, tslib_1.__assign({ key: "overlay", hasMask: true, align: "cc cc", safeNode: safeNode, disableScroll: disableScroll }, others, { className: className, style: style, visible: visible, onRequestClose: onVisibleChange }),
                React.createElement("div", { className: tipCls },
                    React.createElement("div", { className: "".concat(prefix, "loading-indicator") }, indicatorDom),
                    React.createElement("div", { className: "".concat(prefix, "loading-tip-content") }, tip),
                    React.createElement("div", { className: "".concat(prefix, "loading-tip-placeholder") }, tip))),
        ]) : (React.createElement("div", tslib_1.__assign({ className: loadingCls, style: style }, others),
            visible ? (React.createElement("div", { className: tipCls },
                React.createElement("div", { className: "".concat(prefix, "loading-indicator") }, indicatorDom),
                React.createElement("div", { className: "".concat(prefix, "loading-tip-content") }, tip),
                React.createElement("div", { className: "".concat(prefix, "loading-tip-placeholder") }, tip))) : null,
            React.createElement("div", { className: contentCls },
                visible ? React.createElement("div", { className: "".concat(prefix, "loading-masker") }) : null,
                children)));
    };
    Loading.propTypes = tslib_1.__assign(tslib_1.__assign({}, config_provider_1.default.propTypes), { prefix: PropTypes.string, tip: PropTypes.any, tipAlign: PropTypes.oneOf(['right', 'bottom']), visible: PropTypes.bool, onVisibleChange: PropTypes.func, className: PropTypes.string, style: PropTypes.object, size: PropTypes.oneOf(['large', 'medium']), indicator: PropTypes.any, color: PropTypes.string, fullScreen: PropTypes.bool, disableScroll: PropTypes.bool, safeNode: PropTypes.any, children: PropTypes.any, inline: PropTypes.bool, rtl: PropTypes.bool });
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
}(React.Component));
exports.default = config_provider_1.default.config(Loading);

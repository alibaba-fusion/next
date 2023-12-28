"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var PT = require("prop-types");
var classnames_1 = require("classnames");
var prop_types_1 = require("../prop-types");
var util_1 = require("../../util");
var zh_cn_1 = require("../../locale/zh-cn");
var button_1 = require("../../button");
var renderNode = util_1.func.renderNode;
function normalizePreset(preset) {
    if (Array.isArray(preset)) {
        return preset;
    }
    else {
        return Object.keys(preset).map(function (key) {
            return {
                label: key,
                value: preset[key],
            };
        });
    }
}
var FooterPanel = /** @class */ (function (_super) {
    tslib_1.__extends(FooterPanel, _super);
    function FooterPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.renderRanges = function () {
            if (!_this.props.preset) {
                return null;
            }
            var preset = normalizePreset(_this.props.preset);
            return preset.map(function (_a, index) {
                var label = _a.label, value = _a.value, restProps = tslib_1.__rest(_a, ["label", "value"]);
                var buttonProps = util_1.obj.pickProps(button_1.default.propTypes, restProps);
                var handleClick = function () {
                    var date = typeof value === 'function' ? value() : value;
                    _this.props.onChange(date, 'CLICK_PRESET');
                };
                return (react_1.default.createElement(button_1.default, tslib_1.__assign({ text: preset.length === 1, size: "small", type: preset.length === 1 ? 'primary' : 'secondary', key: "".concat(label, "-").concat(index), 
                    // onClick={() =>
                    //     func.invoke(this.props, 'onChange', [
                    //         typeof value === 'function' ? value() : value,
                    //         'CLICK_PRESET',
                    //     ])
                    // }
                    onClick: handleClick }, buttonProps), label));
            });
        };
        _this.prefixCls = "".concat(props.prefix, "date-picker2-footer");
        return _this;
    }
    FooterPanel.prototype.render = function () {
        var _a, _b;
        var prefixCls = this.prefixCls;
        var _c = this.props, showOk = _c.showOk, locale = _c.locale, onOk = _c.onOk, oKable = _c.oKable, extraRender = _c.extraRender, className = _c.className;
        var classNames = (0, classnames_1.default)(prefixCls, className, (_a = {},
            _a["".concat(prefixCls, "-with-actions")] = showOk,
            _a));
        var extraNode = renderNode(extraRender);
        var rangeNode = this.renderRanges();
        var actionsNode = (react_1.default.createElement(button_1.default, { size: "small", disabled: !oKable, onClick: onOk, className: "".concat(prefixCls, "-ok"), type: "primary" }, locale.ok));
        var showFooter = showOk || extraNode || rangeNode;
        var rangesCls = (0, classnames_1.default)("".concat(prefixCls, "-preset"), (_b = {},
            _b["".concat(prefixCls, "-preset-only")] = !showOk && !extraNode,
            _b));
        return showFooter ? (react_1.default.createElement("div", { className: classNames },
            extraNode ? react_1.default.createElement("div", { className: "".concat(prefixCls, "-extra") }, extraNode) : null,
            rangeNode ? react_1.default.createElement("div", { className: rangesCls }, rangeNode) : null,
            showOk ? react_1.default.createElement("div", { className: "".concat(prefixCls, "-actions") }, actionsNode) : null)) : null;
    };
    FooterPanel.propTypes = {
        rtl: PT.bool,
        className: PT.string,
        prefix: PT.string,
        locale: PT.object,
        showOk: PT.bool,
        preset: PT.oneOfType([PT.array, PT.object]),
        onOk: PT.func,
        oKable: PT.bool,
        extraRender: prop_types_1.default.render,
    };
    FooterPanel.defaultProps = {
        locale: zh_cn_1.default.DatePicker,
    };
    return FooterPanel;
}(react_1.default.PureComponent));
exports.default = (0, react_lifecycles_compat_1.polyfill)(FooterPanel);

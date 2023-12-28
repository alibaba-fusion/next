import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import * as PT from 'prop-types';
import classnames from 'classnames';
import SharedPT from '../prop-types';
import { func, obj } from '../../util';
import defaultLocale from '../../locale/zh-cn';
import Button from '../../button';
var renderNode = func.renderNode;
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
    __extends(FooterPanel, _super);
    function FooterPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.renderRanges = function () {
            if (!_this.props.preset) {
                return null;
            }
            var preset = normalizePreset(_this.props.preset);
            return preset.map(function (_a, index) {
                var label = _a.label, value = _a.value, restProps = __rest(_a, ["label", "value"]);
                var buttonProps = obj.pickProps(Button.propTypes, restProps);
                var handleClick = function () {
                    var date = typeof value === 'function' ? value() : value;
                    _this.props.onChange(date, 'CLICK_PRESET');
                };
                return (React.createElement(Button, __assign({ text: preset.length === 1, size: "small", type: preset.length === 1 ? 'primary' : 'secondary', key: "".concat(label, "-").concat(index), 
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
        var classNames = classnames(prefixCls, className, (_a = {},
            _a["".concat(prefixCls, "-with-actions")] = showOk,
            _a));
        var extraNode = renderNode(extraRender);
        var rangeNode = this.renderRanges();
        var actionsNode = (React.createElement(Button, { size: "small", disabled: !oKable, onClick: onOk, className: "".concat(prefixCls, "-ok"), type: "primary" }, locale.ok));
        var showFooter = showOk || extraNode || rangeNode;
        var rangesCls = classnames("".concat(prefixCls, "-preset"), (_b = {},
            _b["".concat(prefixCls, "-preset-only")] = !showOk && !extraNode,
            _b));
        return showFooter ? (React.createElement("div", { className: classNames },
            extraNode ? React.createElement("div", { className: "".concat(prefixCls, "-extra") }, extraNode) : null,
            rangeNode ? React.createElement("div", { className: rangesCls }, rangeNode) : null,
            showOk ? React.createElement("div", { className: "".concat(prefixCls, "-actions") }, actionsNode) : null)) : null;
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
        extraRender: SharedPT.render,
    };
    FooterPanel.defaultProps = {
        locale: defaultLocale.DatePicker,
    };
    return FooterPanel;
}(React.PureComponent));
export default polyfill(FooterPanel);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var icon_1 = tslib_1.__importDefault(require("../icon"));
var util_1 = require("../util");
/** Collapse.Panel */
var Panel = /** @class */ (function (_super) {
    tslib_1.__extends(Panel, _super);
    function Panel() {
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(arguments), false)) || this;
        _this.onKeyDown = function (e) {
            var keyCode = e.keyCode;
            if (keyCode === util_1.KEYCODE.SPACE) {
                var onClick = _this.props.onClick;
                e.preventDefault();
                onClick && onClick(e);
            }
        };
        return _this;
    }
    Panel.prototype.render = function () {
        var _a, _b;
        var _c = this.props, title = _c.title, children = _c.children, className = _c.className, isExpanded = _c.isExpanded, disabled = _c.disabled, style = _c.style, prefix = _c.prefix, onClick = _c.onClick, id = _c.id, others = tslib_1.__rest(_c, ["title", "children", "className", "isExpanded", "disabled", "style", "prefix", "onClick", "id"]);
        var cls = (0, classnames_1.default)((_a = {},
            _a["".concat(prefix, "collapse-panel")] = true,
            _a["".concat(prefix, "collapse-panel-hidden")] = !isExpanded,
            _a["".concat(prefix, "collapse-panel-expanded")] = isExpanded,
            _a["".concat(prefix, "collapse-panel-disabled")] = disabled,
            _a[className] = className,
            _a));
        var iconCls = (0, classnames_1.default)((_b = {},
            _b["".concat(prefix, "collapse-panel-icon")] = true,
            _b["".concat(prefix, "collapse-panel-icon-expanded")] = isExpanded,
            _b));
        // 为了无障碍 需要添加两个 id
        var headingId = id ? "".concat(id, "-heading") : undefined;
        var regionId = id ? "".concat(id, "-region") : undefined;
        return (react_1.default.createElement("div", tslib_1.__assign({ className: cls, style: style, id: id }, others),
            react_1.default.createElement("div", { id: headingId, className: "".concat(prefix, "collapse-panel-title"), onClick: onClick, onKeyDown: this.onKeyDown, tabIndex: 0, "aria-disabled": disabled, "aria-expanded": isExpanded, "aria-controls": regionId, role: "button" },
                react_1.default.createElement(icon_1.default, { type: "arrow-right", className: iconCls, "aria-hidden": "true" }),
                title),
            react_1.default.createElement("div", { className: "".concat(prefix, "collapse-panel-content"), role: "region", id: regionId }, children)));
    };
    Panel.propTypes = {
        /**
         * 样式类名的品牌前缀
         */
        prefix: prop_types_1.default.string,
        /**
         * 子组件接受行内样式
         */
        style: prop_types_1.default.object,
        children: prop_types_1.default.any,
        isExpanded: prop_types_1.default.bool,
        /**
         * 是否禁止用户操作
         */
        disabled: prop_types_1.default.bool,
        /**
         * 标题
         */
        title: prop_types_1.default.node,
        /**
         * 扩展 class
         */
        className: prop_types_1.default.string,
        onClick: prop_types_1.default.func,
        id: prop_types_1.default.string,
    };
    Panel.defaultProps = {
        prefix: 'next-',
        isExpanded: false,
        onClick: util_1.func.noop,
    };
    Panel.isNextPanel = true;
    return Panel;
}(react_1.default.Component));
exports.default = config_provider_1.default.config(Panel);

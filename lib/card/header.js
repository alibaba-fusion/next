"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var CardHeader = /** @class */ (function (_super) {
    tslib_1.__extends(CardHeader, _super);
    function CardHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeader.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, title = _a.title, subTitle = _a.subTitle, extra = _a.extra, className = _a.className, component = _a.component, others = tslib_1.__rest(_a, ["prefix", "title", "subTitle", "extra", "className", "component"]);
        var Component = component;
        return (react_1.default.createElement(Component, tslib_1.__assign({}, others, { className: (0, classnames_1.default)("".concat(prefix, "card-header"), className) }),
            extra && react_1.default.createElement("div", { className: "".concat(prefix, "card-header-extra") }, extra),
            react_1.default.createElement("div", { className: "".concat(prefix, "card-header-titles") },
                title && react_1.default.createElement("div", { className: "".concat(prefix, "card-header-title") }, title),
                subTitle && react_1.default.createElement("div", { className: "".concat(prefix, "card-header-subtitle") }, subTitle))));
    };
    CardHeader.displayName = 'CardHeader';
    CardHeader.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 卡片的标题
         */
        title: prop_types_1.default.node,
        /**
         * 卡片的副标题
         */
        subTitle: prop_types_1.default.node,
        /**
         * 标题区域的用户自定义内容
         */
        extra: prop_types_1.default.node,
        /**
         * 设置标签类型
         */
        component: prop_types_1.default.elementType,
        className: prop_types_1.default.string,
    };
    CardHeader.defaultProps = {
        prefix: 'next-',
        component: 'div',
    };
    return CardHeader;
}(react_1.Component));
exports.default = config_provider_1.default.config(CardHeader);

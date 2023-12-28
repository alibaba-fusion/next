"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var config_provider_1 = require("../config-provider");
/**
 * Card.Content
 * @order 3
 */
var CardContent = /** @class */ (function (_super) {
    tslib_1.__extends(CardContent, _super);
    function CardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardContent.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, Component = _a.component, others = tslib_1.__rest(_a, ["prefix", "className", "component"]);
        return react_1.default.createElement(Component, tslib_1.__assign({}, others, { className: (0, classnames_1.default)("".concat(prefix, "card-content-container"), className) }));
    };
    CardContent.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 设置标签类型
         */
        component: prop_types_1.default.elementType,
        className: prop_types_1.default.string,
    };
    CardContent.defaultProps = {
        prefix: 'next-',
        component: 'div',
    };
    return CardContent;
}(react_1.Component));
exports.default = config_provider_1.default.config(CardContent);

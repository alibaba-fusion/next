"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var CardContent = /** @class */ (function (_super) {
    tslib_1.__extends(CardContent, _super);
    function CardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardContent.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, component = _a.component, others = tslib_1.__rest(_a, ["prefix", "className", "component"]);
        var Component = component;
        return (react_1.default.createElement(Component, tslib_1.__assign({}, others, { className: (0, classnames_1.default)("".concat(prefix, "card-content-container"), className) })));
    };
    CardContent.displayName = 'CardContent';
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

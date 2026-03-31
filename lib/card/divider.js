"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var CardDivider = /** @class */ (function (_super) {
    tslib_1.__extends(CardDivider, _super);
    function CardDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardDivider.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, component = _b.component, inset = _b.inset, className = _b.className, others = tslib_1.__rest(_b, ["prefix", "component", "inset", "className"]);
        var Component = component;
        var dividerClassName = (0, classnames_1.default)("".concat(prefix, "card-divider"), (_a = {},
            _a["".concat(prefix, "card-divider--inset")] = inset,
            _a), className);
        return react_1.default.createElement(Component, tslib_1.__assign({}, others, { className: dividerClassName }));
    };
    CardDivider.displayName = 'CardDivider';
    CardDivider.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 设置标签类型
         */
        component: prop_types_1.default.elementType,
        /**
         * 分割线是否向内缩进
         */
        inset: prop_types_1.default.bool,
        className: prop_types_1.default.string,
    };
    CardDivider.defaultProps = {
        prefix: 'next-',
        component: 'hr',
    };
    return CardDivider;
}(react_1.Component));
exports.default = config_provider_1.default.config(CardDivider);

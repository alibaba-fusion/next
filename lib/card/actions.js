"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var classnames_1 = require("classnames");
var config_provider_1 = require("../config-provider");
/**
 * Card.Actions
 * @order 5
 */
var CardActions = /** @class */ (function (_super) {
    tslib_1.__extends(CardActions, _super);
    function CardActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActions.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, Component = _a.component, className = _a.className, others = tslib_1.__rest(_a, ["prefix", "component", "className"]);
        return react_1.default.createElement(Component, tslib_1.__assign({}, others, { className: (0, classnames_1.default)("".concat(prefix, "card-actions"), className) }));
    };
    CardActions.propTypes = {
        prefix: prop_types_1.default.string,
        /**
         * 设置标签类型
         */
        component: prop_types_1.default.elementType,
        className: prop_types_1.default.string,
    };
    CardActions.defaultProps = {
        prefix: 'next-',
        component: 'div',
    };
    return CardActions;
}(react_1.Component));
exports.default = config_provider_1.default.config(CardActions);

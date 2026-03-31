"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var CardActions = /** @class */ (function (_super) {
    tslib_1.__extends(CardActions, _super);
    function CardActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardActions.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, component = _a.component, className = _a.className, others = tslib_1.__rest(_a, ["prefix", "component", "className"]);
        var Component = component;
        return react_1.default.createElement(Component, tslib_1.__assign({}, others, { className: (0, classnames_1.default)("".concat(prefix, "card-actions"), className) }));
    };
    CardActions.displayName = 'CardActions';
    CardActions.propTypes = {
        prefix: prop_types_1.default.string,
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var text_1 = tslib_1.__importDefault(require("./text"));
/**
 * Typography
 */
var Typography = /** @class */ (function (_super) {
    tslib_1.__extends(Typography, _super);
    function Typography() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Typography.prototype.render = function () {
        return react_1.default.createElement(text_1.default, tslib_1.__assign({}, this.props));
    };
    Typography.propTypes = {
        component: prop_types_1.default.elementType,
    };
    Typography.defaultProps = {
        component: 'article',
    };
    return Typography;
}(react_1.default.Component));
exports.default = Typography;

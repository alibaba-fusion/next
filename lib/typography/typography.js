"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var PropTypes = require("prop-types");
var text_1 = require("./text");
/**
 * Typography
 */
var Typography = /** @class */ (function (_super) {
    tslib_1.__extends(Typography, _super);
    function Typography() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Typography.prototype.render = function () {
        return React.createElement(text_1.default, tslib_1.__assign({}, this.props));
    };
    Typography.propTypes = {
        component: PropTypes.elementType,
    };
    Typography.defaultProps = {
        component: 'article',
    };
    return Typography;
}(React.Component));
exports.default = Typography;

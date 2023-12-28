"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var PropTypes = require("prop-types");
var classNames = require("classnames");
var config_provider_1 = require("../config-provider");
var text_1 = require("./text");
/**
 * Typography.Paragraph
 */
var Paragraph = /** @class */ (function (_super) {
    tslib_1.__extends(Paragraph, _super);
    function Paragraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Paragraph.prototype.render = function () {
        var _a = this.props, prefix = _a.prefix, className = _a.className, component = _a.component, others = tslib_1.__rest(_a, ["prefix", "className", "component"]);
        var cls = classNames("".concat(prefix, "typography-paragraph"), className);
        return React.createElement(text_1.default, tslib_1.__assign({}, others, { className: cls, component: component }));
    };
    Paragraph.propTypes = {
        prefix: PropTypes.string,
        component: PropTypes.elementType,
    };
    Paragraph.defaultProps = {
        prefix: 'next-',
        type: 'long',
        size: 'medium',
        component: 'p',
    };
    return Paragraph;
}(React.Component));
exports.default = config_provider_1.default.config(Paragraph);

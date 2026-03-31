"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var text_1 = tslib_1.__importDefault(require("./text"));
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
        var cls = (0, classnames_1.default)("".concat(prefix, "typography-paragraph"), className);
        return react_1.default.createElement(text_1.default, tslib_1.__assign({}, others, { className: cls, component: component }));
    };
    Paragraph.propTypes = {
        prefix: prop_types_1.default.string,
        component: prop_types_1.default.elementType,
    };
    Paragraph.defaultProps = {
        prefix: 'next-',
        type: 'long',
        size: 'medium',
        component: 'p',
    };
    return Paragraph;
}(react_1.default.Component));
exports.default = config_provider_1.default.config(Paragraph);

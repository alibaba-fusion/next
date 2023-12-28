"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
/* istanbul ignore file */
/**
 * Select.Option
 */
var Option = /** @class */ (function (_super) {
    tslib_1.__extends(Option, _super);
    function Option() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Option.prototype.render = function () {
        return this.props.children;
    };
    Option.propTypes = {
        /**
         * 选项值
         */
        value: prop_types_1.default.any.isRequired,
        /**
         * 是否禁用
         */
        disabled: prop_types_1.default.bool,
        children: prop_types_1.default.any,
    };
    Option._typeMark = 'next_select_option';
    return Option;
}(react_1.default.Component));
exports.default = Option;

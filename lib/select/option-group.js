"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
/* istanbul ignore file */
/**
 * Select.OptionGroup
 */
var OptionGroup = /** @class */ (function (_super) {
    tslib_1.__extends(OptionGroup, _super);
    function OptionGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionGroup.prototype.render = function () {
        return this.props.children;
    };
    OptionGroup.propTypes = {
        /**
         * 设置分组的文案
         */
        label: prop_types_1.default.node,
        children: prop_types_1.default.any,
    };
    OptionGroup._typeMark = 'next_select_option_group';
    return OptionGroup;
}(react_1.default.Component));
exports.default = OptionGroup;

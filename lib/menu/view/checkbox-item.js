"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var checkable_item_1 = tslib_1.__importDefault(require("./checkable-item"));
var CheckboxItem = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxItem, _super);
    function CheckboxItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxItem.prototype.render = function () {
        var _a = this.props, checkboxDisabled = _a.checkboxDisabled, others = tslib_1.__rest(_a, ["checkboxDisabled"]);
        return (react_1.default.createElement(checkable_item_1.default, tslib_1.__assign({ role: "menuitemcheckbox", checkType: "checkbox", checkDisabled: checkboxDisabled }, others)));
    };
    CheckboxItem.menuChildType = 'item';
    CheckboxItem.propTypes = {
        checked: prop_types_1.default.bool,
        indeterminate: prop_types_1.default.bool,
        disabled: prop_types_1.default.bool,
        onChange: prop_types_1.default.func,
        helper: prop_types_1.default.node,
        children: prop_types_1.default.node,
        checkboxDisabled: prop_types_1.default.bool,
    };
    CheckboxItem.defaultProps = {
        checked: false,
        indeterminate: false,
        disabled: false,
        onChange: function () { },
        checkboxDisabled: false,
    };
    return CheckboxItem;
}(react_1.Component));
exports.default = CheckboxItem;

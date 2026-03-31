"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var checkable_item_1 = tslib_1.__importDefault(require("./checkable-item"));
var RadioItem = /** @class */ (function (_super) {
    tslib_1.__extends(RadioItem, _super);
    function RadioItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioItem.prototype.render = function () {
        return react_1.default.createElement(checkable_item_1.default, tslib_1.__assign({ role: "menuitemradio", checkType: "radio" }, this.props));
    };
    RadioItem.menuChildType = 'item';
    RadioItem.propTypes = {
        checked: prop_types_1.default.bool,
        disabled: prop_types_1.default.bool,
        onChange: prop_types_1.default.func,
        helper: prop_types_1.default.node,
        children: prop_types_1.default.node,
    };
    RadioItem.defaultProps = {
        checked: false,
        disabled: false,
        onChange: function () { },
    };
    return RadioItem;
}(react_1.Component));
exports.default = RadioItem;

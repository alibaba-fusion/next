import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckableItem from './checkable-item';
var CheckboxItem = /** @class */ (function (_super) {
    __extends(CheckboxItem, _super);
    function CheckboxItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxItem.prototype.render = function () {
        var _a = this.props, checkboxDisabled = _a.checkboxDisabled, others = __rest(_a, ["checkboxDisabled"]);
        return (React.createElement(CheckableItem, __assign({ role: "menuitemcheckbox", checkType: "checkbox", checkDisabled: checkboxDisabled }, others)));
    };
    CheckboxItem.menuChildType = 'item';
    CheckboxItem.propTypes = {
        checked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        helper: PropTypes.node,
        children: PropTypes.node,
        checkboxDisabled: PropTypes.bool,
    };
    CheckboxItem.defaultProps = {
        checked: false,
        indeterminate: false,
        disabled: false,
        onChange: function () { },
        checkboxDisabled: false,
    };
    return CheckboxItem;
}(Component));
export default CheckboxItem;

import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckableItem from './checkable-item';
var RadioItem = /** @class */ (function (_super) {
    __extends(RadioItem, _super);
    function RadioItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioItem.prototype.render = function () {
        return React.createElement(CheckableItem, __assign({ role: "menuitemradio", checkType: "radio" }, this.props));
    };
    RadioItem.menuChildType = 'item';
    RadioItem.propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        helper: PropTypes.node,
        children: PropTypes.node,
    };
    RadioItem.defaultProps = {
        checked: false,
        disabled: false,
        onChange: function () { },
    };
    return RadioItem;
}(Component));
export default RadioItem;

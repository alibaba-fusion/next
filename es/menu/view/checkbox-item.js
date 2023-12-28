import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckableItem from './checkable-item';
/**
 * Menu.CheckboxItem
 * @order 3
 * @description 该子组件选中情况不受 defaultSelectedKeys/selectedKeys 控制，请自行控制选中逻辑
 */
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
        /**
         * 是否选中
         */
        checked: PropTypes.bool,
        /**
         * 是否半选中
         */
        indeterminate: PropTypes.bool,
        /**
         * 是否禁用
         */
        disabled: PropTypes.bool,
        /**
         * 选中或取消选中触发的回调函数
         * @param {Boolean} checked 是否选中
         * @param {Object} event 选中事件对象
         */
        onChange: PropTypes.func,
        /**
         * 帮助文本
         */
        helper: PropTypes.node,
        /**
         * 标签内容
         */
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

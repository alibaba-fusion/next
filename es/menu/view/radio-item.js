import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckableItem from './checkable-item';
/**
 * Menu.RadioItem
 * @order 4
 * @description 该子组件选中情况不受 defaultSelectedKeys/selectedKeys 控制，请自行控制选中逻辑
 */
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
        /**
         * 是否选中
         */
        checked: PropTypes.bool,
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
    };
    RadioItem.defaultProps = {
        checked: false,
        disabled: false,
        onChange: function () { },
    };
    return RadioItem;
}(Component));
export default RadioItem;

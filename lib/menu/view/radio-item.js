"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var checkable_item_1 = require("./checkable-item");
/**
 * Menu.RadioItem
 * @order 4
 * @description 该子组件选中情况不受 defaultSelectedKeys/selectedKeys 控制，请自行控制选中逻辑
 */
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
        /**
         * 是否选中
         */
        checked: prop_types_1.default.bool,
        /**
         * 是否禁用
         */
        disabled: prop_types_1.default.bool,
        /**
         * 选中或取消选中触发的回调函数
         * @param {Boolean} checked 是否选中
         * @param {Object} event 选中事件对象
         */
        onChange: prop_types_1.default.func,
        /**
         * 帮助文本
         */
        helper: prop_types_1.default.node,
        /**
         * 标签内容
         */
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

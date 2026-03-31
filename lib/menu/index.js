"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_provider_1 = tslib_1.__importDefault(require("../config-provider"));
var menu_1 = tslib_1.__importDefault(require("./view/menu"));
var sub_menu_1 = tslib_1.__importDefault(require("./view/sub-menu"));
var selectable_item_1 = tslib_1.__importDefault(require("./view/selectable-item"));
var checkbox_item_1 = tslib_1.__importDefault(require("./view/checkbox-item"));
var radio_item_1 = tslib_1.__importDefault(require("./view/radio-item"));
var popup_item_1 = tslib_1.__importDefault(require("./view/popup-item"));
var group_1 = tslib_1.__importDefault(require("./view/group"));
var divider_1 = tslib_1.__importDefault(require("./view/divider"));
var create_1 = tslib_1.__importDefault(require("./view/create"));
var component_1 = require("../util/component");
var MenuWithSub = (0, component_1.assignSubComponent)(menu_1.default, {
    SubMenu: sub_menu_1.default,
    Item: selectable_item_1.default,
    CheckboxItem: checkbox_item_1.default,
    RadioItem: radio_item_1.default,
    PopupItem: popup_item_1.default,
    Group: group_1.default,
    Divider: divider_1.default,
    create: create_1.default,
});
exports.default = config_provider_1.default.config(MenuWithSub, {
    transform: function (props, deprecated) {
        if ('indentSize' in props) {
            deprecated('indentSize', 'inlineIndent', 'Menu');
            var indentSize = props.indentSize, others = tslib_1.__rest(props, ["indentSize"]);
            props = tslib_1.__assign({ inlineIndent: indentSize }, others);
        }
        if ('onDeselect' in props) {
            deprecated('onDeselect', 'onSelect', 'Menu');
            if (props.onDeselect) {
                var onDeselect_1 = props.onDeselect, onSelect_1 = props.onSelect, others = tslib_1.__rest(props, ["onDeselect", "onSelect"]);
                var newOnSelect = function (selectedKeys, item, extra) {
                    if (!extra.select) {
                        onDeselect_1(extra.key);
                    }
                    if (onSelect_1) {
                        onSelect_1(selectedKeys, item, extra);
                    }
                };
                props = tslib_1.__assign({ onSelect: newOnSelect }, others);
            }
        }
        return props;
    },
});

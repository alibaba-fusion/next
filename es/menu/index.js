import { __assign, __rest } from "tslib";
import ConfigProvider from '../config-provider';
import Menu from './view/menu';
import SubMenu from './view/sub-menu';
import SelectableItem from './view/selectable-item';
import CheckboxItem from './view/checkbox-item';
import RadioItem from './view/radio-item';
import PopupItem from './view/popup-item';
import Group from './view/group';
import Divider from './view/divider';
import create from './view/create';
import { assignSubComponent } from '../util/component';
var MenuWithSub = assignSubComponent(Menu, {
    SubMenu: SubMenu,
    Item: SelectableItem,
    CheckboxItem: CheckboxItem,
    RadioItem: RadioItem,
    PopupItem: PopupItem,
    Group: Group,
    Divider: Divider,
    create: create,
});
export default ConfigProvider.config(MenuWithSub, {
    transform: function (props, deprecated) {
        if ('indentSize' in props) {
            deprecated('indentSize', 'inlineIndent', 'Menu');
            var indentSize = props.indentSize, others = __rest(props, ["indentSize"]);
            props = __assign({ inlineIndent: indentSize }, others);
        }
        if ('onDeselect' in props) {
            deprecated('onDeselect', 'onSelect', 'Menu');
            if (props.onDeselect) {
                var onDeselect_1 = props.onDeselect, onSelect_1 = props.onSelect, others = __rest(props, ["onDeselect", "onSelect"]);
                var newOnSelect = function (selectedKeys, item, extra) {
                    if (!extra.select) {
                        onDeselect_1(extra.key);
                    }
                    if (onSelect_1) {
                        onSelect_1(selectedKeys, item, extra);
                    }
                };
                props = __assign({ onSelect: newOnSelect }, others);
            }
        }
        return props;
    },
});

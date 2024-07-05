import SubMenu from './view/sub-menu';
import SelectableItem from './view/selectable-item';
import CheckboxItem from './view/checkbox-item';
import RadioItem from './view/radio-item';
import PopupItem from './view/popup-item';
import Group from './view/group';
import Divider from './view/divider';
import create from './view/create';
import type { MenuProps } from './types';
export type {
    MenuProps,
    SubMenuProps,
    ItemProps,
    CheckboxItemProps,
    RadioItemProps,
    PopupItemProps,
    GroupProps,
    DividerProps,
    SelectExtra,
    SelectableItem,
    MenuItem,
} from './types';
declare const _default: import('../config-provider/types').ConfiguredComponentClass<
    MenuProps & import('../config-provider/types').ComponentCommonProps,
    import('./view/menu').Menu,
    {}
> & {
    Group: typeof Group;
    isNextMenu: boolean;
    SubMenu: typeof SubMenu;
    Item: typeof SelectableItem;
    CheckboxItem: typeof CheckboxItem;
    RadioItem: typeof RadioItem;
    PopupItem: typeof PopupItem;
    Divider: typeof Divider;
    create: typeof create;
};
export default _default;

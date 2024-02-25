import Menu from '../menu';
import InternalNav from './nav';
import Item from './item';
import Group from './group';
import SubNav from './sub-nav';
import PopupItem from './popup-item';
import { NavProps, SubNavProps, PopupItemProps, ItemProps, GroupProps, NavRef } from './types';

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<NavProps & React.RefAttributes<NavRef>> {
    Item: typeof Item;
    Group: typeof Group;
    SubNav: typeof SubNav;
    PopupItem: typeof PopupItem;
    Divider: typeof Menu.Divider;
}

const Nav = InternalNav as unknown as CompoundedComponent;

Nav.Item = Item;
Nav.Group = Group;
Nav.SubNav = SubNav;
Nav.PopupItem = PopupItem;
Nav.Divider = Menu.Divider;

export type { NavProps, SubNavProps, PopupItemProps, ItemProps, GroupProps };

export default Nav;

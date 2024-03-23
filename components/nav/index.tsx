import { assignSubComponent } from '../util/component';
import Menu from '../menu';
import Item from './item';
import Group from './group';
import SubNav from './sub-nav';
import PopupItem from './popup-item';
import Nav from './nav';
import type { NavProps, SubNavProps, PopupItemProps, ItemProps, GroupProps } from './types';

const Divider = Menu.Divider;
const NavWithSubComponent = assignSubComponent(Nav, { Item, Group, SubNav, PopupItem, Divider });

export type { NavProps, SubNavProps, PopupItemProps, ItemProps, GroupProps };

export default NavWithSubComponent;

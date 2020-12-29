import { Menu as MeetMenu } from '@alifd/meet-react';
import NextMenu from '../index';

const Menu = MeetMenu ? MeetMenu : NextMenu;

export default Menu;

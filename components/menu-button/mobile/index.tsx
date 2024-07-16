import { MenuButton as MeetMenuButton } from '@alifd/meet-react';
import NextMenuButton from '../index';

const MenuButton = MeetMenuButton ? MeetMenuButton : NextMenuButton;

export default MenuButton;

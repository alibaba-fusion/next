// @ts-expect-error meet 中没有 MenuButton
import { MenuButton as MeetMenuButton } from '@alifd/meet-react';
import NextMenuButton from '../index';
var MenuButton = MeetMenuButton ? MeetMenuButton : NextMenuButton;
export default MenuButton;

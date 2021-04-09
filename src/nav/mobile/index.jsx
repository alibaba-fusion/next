import { Nav as MeetNav } from '@alifd/meet-react';
import NextNav from '../index';

const Nav = MeetNav ? MeetNav : NextNav;

export default Nav;

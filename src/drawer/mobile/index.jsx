import { Drawer as MeetDrawer } from '@alifd/meet-react';
import NextDrawer from '../index';

const Drawer = MeetDrawer ? MeetDrawer : NextDrawer;

export default Drawer;

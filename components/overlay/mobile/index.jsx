import { Overlay as MeetOverlay } from '@alifd/meet-react';
import NextOverlay from '../index';

const Overlay = MeetOverlay ? MeetOverlay : NextOverlay;

export default Overlay;

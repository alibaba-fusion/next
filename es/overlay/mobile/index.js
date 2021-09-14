import { Overlay as MeetOverlay } from '@alifd/meet-react';
import NextOverlay from '../index';

var Overlay = MeetOverlay ? MeetOverlay : NextOverlay;

export default Overlay;
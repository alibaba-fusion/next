// @ts-expect-error meet-react does not export Overlay
import { Overlay as MeetOverlay } from '@alifd/meet-react';
import NextOverlay from '../index';
var Overlay = MeetOverlay ? MeetOverlay : NextOverlay;
export default Overlay;

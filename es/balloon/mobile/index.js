import { Balloon as MeetBalloon } from '@alifd/meet-react';
import NextBalloon from '../index';

var Balloon = MeetBalloon ? MeetBalloon : NextBalloon;

export default Balloon;
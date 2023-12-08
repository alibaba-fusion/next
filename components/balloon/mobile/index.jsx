import { Balloon as MeetBalloon } from '@alifd/meet-react';
import NextBalloon from '../index';

const Balloon = MeetBalloon ? MeetBalloon : NextBalloon;

export default Balloon;

import { Animate as MeetAnimate } from '@alifd/meet-react';
import NextAnimate from '../index';

const Animate = MeetAnimate ? MeetAnimate : NextAnimate;

export default Animate;

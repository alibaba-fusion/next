// @ts-expect-error Animate 在 meet-react 中没有导出
import { Animate as MeetAnimate } from '@alifd/meet-react';
import NextAnimate from '../index';

const Animate = MeetAnimate ? MeetAnimate : NextAnimate;

export default Animate;

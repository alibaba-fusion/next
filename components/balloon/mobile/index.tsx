// @ts-expect-error 此处报错没有找到组件
import { Balloon as MeetBalloon } from '@alifd/meet-react';
import NextBalloon from '../index';

const Balloon = MeetBalloon ? MeetBalloon : NextBalloon;

export default Balloon;

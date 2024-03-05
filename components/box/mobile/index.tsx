// @ts-expect-error meet-react does not export Box
import { Box as MeetBox } from '@alifd/meet-react';
import NextBox from '../index';

const Box = MeetBox ? MeetBox : NextBox;

export default Box;

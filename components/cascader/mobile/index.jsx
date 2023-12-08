import { Cascader as MeetCascader } from '@alifd/meet-react';
import NextCascader from '../index';

const Cascader = MeetCascader ? MeetCascader : NextCascader;

export default Cascader;

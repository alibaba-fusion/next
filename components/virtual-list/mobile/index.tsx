// @ts-expect-error meet-react does not export VirtualList
import { VirtualList as MeetVirtualList } from '@alifd/meet-react';
import NextVirtualList from '../index';

const VirtualList = MeetVirtualList ? MeetVirtualList : NextVirtualList;

export default VirtualList;

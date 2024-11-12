// @ts-expect-error meet-react does not export VirtualList
import { VirtualList as MeetVirtualList } from '@alifd/meet-react';
import NextVirtualList from '../index';
var VirtualList = MeetVirtualList ? MeetVirtualList : NextVirtualList;
export default VirtualList;

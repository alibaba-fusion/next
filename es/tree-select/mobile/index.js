// @ts-expect-error meet-react does not export TreeSelect
import { TreeSelect as MeetTreeSelect } from '@alifd/meet-react';
import NextTreeSelect from '../index';
var TreeSelect = MeetTreeSelect ? MeetTreeSelect : NextTreeSelect;
export default TreeSelect;

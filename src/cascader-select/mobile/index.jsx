import { CascaderSelect as MeetCascaderSelect } from '@alifd/meet-react';
import NextCascaderSelect from '../index';

const CascaderSelect = MeetCascaderSelect ? MeetCascaderSelect : NextCascaderSelect;

export default CascaderSelect;

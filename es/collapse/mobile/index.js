import { Collapse as MeetCollapse } from '@alifd/meet-react';
import NextCollapse from '../index';

var Collapse = MeetCollapse ? MeetCollapse : NextCollapse;

export default Collapse;
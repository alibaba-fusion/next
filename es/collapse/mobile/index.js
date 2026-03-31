// @ts-expect-error FIXME: Module '"@alifd/meet-react"' has no exported member 'Collapse'.
import { Collapse as MeetCollapse } from '@alifd/meet-react';
import NextCollapse from '../index';
var Collapse = MeetCollapse ? MeetCollapse : NextCollapse;
export default Collapse;

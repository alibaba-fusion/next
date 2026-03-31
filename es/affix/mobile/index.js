// @ts-expect-error meet-react does not export Affix
import { Affix as MeetAffix } from '@alifd/meet-react';
import NextAffix from '../index';
var Affix = MeetAffix ? MeetAffix : NextAffix;
export default Affix;

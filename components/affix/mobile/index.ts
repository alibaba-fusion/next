// @ts-expect-error meet-react does not export Affix
import { Affix as MeetAffix } from '@alifd/meet-react';
import NextAffix from '../index';

const Affix = MeetAffix ? MeetAffix : NextAffix;

export default Affix;

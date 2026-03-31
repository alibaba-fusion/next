// @ts-expect-error meet-react does not export SplitButton
import { SplitButton as MeetSplitButton } from '@alifd/meet-react';
import NextSplitButton from '../index';
var SplitButton = MeetSplitButton ? MeetSplitButton : NextSplitButton;
export default SplitButton;

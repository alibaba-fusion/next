import { SplitButton as MeetSplitButton } from '@alifd/meet-react';
import NextSplitButton from '../index';

const SplitButton = MeetSplitButton ? MeetSplitButton : NextSplitButton;

export default SplitButton;

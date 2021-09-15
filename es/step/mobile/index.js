import { Step as MeetStep } from '@alifd/meet-react';
import NextStep from '../index';

var Step = MeetStep ? MeetStep : NextStep;

export default Step;
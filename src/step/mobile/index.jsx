import { Step as MeetStep } from '@alifd/meet-react';
import NextStep from '../index';

const Step = MeetStep ? MeetStep : NextStep;

export default Step;

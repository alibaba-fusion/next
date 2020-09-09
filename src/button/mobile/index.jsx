import { Button as MeetButton } from '@alifd/meet-react';
import NextButton from '../index';

const Button = MeetButton ? MeetButton : NextButton;

export default Button;

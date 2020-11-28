import { Input as MeetInput } from '@alifd/meet-react';
import NextInput from '../index';

const Input = MeetInput ? MeetInput : NextInput;

export default Input;

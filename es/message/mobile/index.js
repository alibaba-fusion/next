import { Message as MeetMessage } from '@alifd/meet-react';
import NextMessage from '../index';

var Message = MeetMessage ? MeetMessage : NextMessage;

export default Message;
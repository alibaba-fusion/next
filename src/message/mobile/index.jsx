import { Message as MeetMessage } from '@alifd/meet-react';
import NextMessage from '../index';

const Message = MeetMessage ? MeetMessage : NextMessage;

export default Message;

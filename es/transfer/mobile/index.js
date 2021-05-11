import { Transfer as MeetTransfer } from '@alifd/meet-react';
import NextTransfer from '../index';

var Transfer = MeetTransfer ? MeetTransfer : NextTransfer;

export default Transfer;
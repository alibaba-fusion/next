import { Transfer as MeetTransfer } from '@alifd/meet-react';
import NextTransfer from '../index';

const Transfer = MeetTransfer ? MeetTransfer : NextTransfer;

export default Transfer;

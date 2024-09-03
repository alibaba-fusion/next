import { Shell as MeetShell } from '@alifd/meet-react';
import NextShell from '../index';

const Shell = MeetShell ? MeetShell : NextShell;

export default Shell;

// @ts-expect-error meet-react 未导出Shell组件
import { Shell as MeetShell } from '@alifd/meet-react';
import NextShell from '../index';
var Shell = MeetShell ? MeetShell : NextShell;
export default Shell;

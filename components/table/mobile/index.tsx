// @ts-expect-error meet 中没有导出 Table
import { Table as MeetTable } from '@alifd/meet-react';
import NextTable from '../index';

const Table = MeetTable ? MeetTable : NextTable;

export default Table;

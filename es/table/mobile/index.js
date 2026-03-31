import { Table as MeetTable } from '@alifd/meet-react';
import NextTable from '../index';

var Table = MeetTable ? MeetTable : NextTable;

export default Table;
import { Pagination as MeetPagination } from '@alifd/meet-react';
import NextPagination from '../index';

var Pagination = MeetPagination ? MeetPagination : NextPagination;

export default Pagination;
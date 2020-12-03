import { Pagination as MeetPagination } from '@alifd/meet-react';
import NextPagination from '../index';

const Pagination = MeetPagination ? MeetPagination : NextPagination;

export default Pagination;

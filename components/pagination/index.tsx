import Pagination from './pagination';
import ConfigProvider from '../config-provider';
import type { PaginationProps } from './types';

export default ConfigProvider.config(Pagination);

export type { PaginationProps };

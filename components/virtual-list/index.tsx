import ConfigProvider from '../config-provider';
import { type VirtualListProps } from './types';
import VirtualList from './virtual-list';

export type { VirtualListProps };

export default ConfigProvider.config(VirtualList);

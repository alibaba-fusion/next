import { type ReactNode } from 'react';
import type { DataSourceItem, DataStoreOptions, NormalizedObjectItem, ObjectItem } from './types';
/**
 * manage dataSource for menu list
 */
declare class DataStore {
    options: DataStoreOptions;
    dataSource: NormalizedObjectItem[];
    menuDataSource: NormalizedObjectItem[];
    flattenDataSource: NormalizedObjectItem[];
    mapDataSource: Record<string, ObjectItem>;
    enabledDataSource: NormalizedObjectItem[];
    constructor(options: DataStoreOptions);
    setOptions(options: DataStoreOptions): void;
    updateByDS(dataSource: ReactNode | DataSourceItem[], isChildren?: boolean): NormalizedObjectItem[];
    updateByKey(key?: string | number | null): NormalizedObjectItem[];
    getOriginDS(): NormalizedObjectItem[];
    getMenuDS(): NormalizedObjectItem[];
    getFlattenDS(): NormalizedObjectItem[];
    getEnableDS(): NormalizedObjectItem[];
    getMapDS(): Record<string, ObjectItem>;
    updateAll(): NormalizedObjectItem[];
}
export default DataStore;

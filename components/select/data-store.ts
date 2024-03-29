import { type ReactNode } from 'react';
import type { DataSourceItem, DataStoreOptions, NormalizedObjectItem, ObjectItem } from './types';
import {
    filter,
    parseDataSourceFromChildren,
    normalizeDataSource,
    flattingDataSource,
    filterDataSource,
} from './util';

/**
 * manage dataSource for menu list
 */
class DataStore {
    options: DataStoreOptions;
    dataSource: NormalizedObjectItem[];
    menuDataSource: NormalizedObjectItem[];
    flattenDataSource: NormalizedObjectItem[];
    mapDataSource: Record<string, ObjectItem>;
    enabledDataSource: NormalizedObjectItem[];
    constructor(options: DataStoreOptions) {
        this.options = {
            filter,
            key: undefined,
            addonKey: false,
            filterLocal: true,
            showDataSourceChildren: true,
            ...options,
        };

        // origin data
        this.dataSource = [];
        // current data for menu display
        this.menuDataSource = [];
        // key=>value map for menuDataSource
        this.mapDataSource = {};
        // current data can be select (not disabled) on menu
        this.enabledDataSource = [];
        this.flattenDataSource = [];
    }

    setOptions(options: DataStoreOptions) {
        Object.assign(this.options, options);
    }

    updateByDS(dataSource: ReactNode | DataSourceItem[], isChildren = false) {
        this.dataSource = isChildren
            ? parseDataSourceFromChildren(dataSource as ReactNode)
            : normalizeDataSource(
                  dataSource as DataSourceItem[],
                  0,
                  this.options.showDataSourceChildren
              );
        return this.updateAll();
    }

    updateByKey(key: string) {
        if (key === this.options.key) {
            return this.getMenuDS();
        }

        this.options.key = key;
        return this.updateAll();
    }

    getOriginDS() {
        return this.dataSource;
    }

    getMenuDS() {
        return this.menuDataSource;
    }

    getFlattenDS() {
        return this.flattenDataSource;
    }

    getEnableDS() {
        return this.enabledDataSource;
    }

    getMapDS() {
        return this.mapDataSource;
    }

    updateAll() {
        const { key, filter, filterLocal, showDataSourceChildren } = this.options;
        this.menuDataSource = filterDataSource(
            this.dataSource,
            filterLocal ? key : '',
            filter!,
            this.options.addonKey
        );

        this.flattenDataSource = showDataSourceChildren
            ? flattingDataSource(this.menuDataSource)
            : this.menuDataSource;

        this.mapDataSource = {};
        this.flattenDataSource.forEach(item => {
            this.mapDataSource[`${item.value}`] = item;
        });

        this.enabledDataSource = this.flattenDataSource.filter(item => !item.disabled);

        return this.menuDataSource;
    }
}

export default DataStore;

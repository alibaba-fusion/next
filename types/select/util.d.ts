import { type ReactNode } from 'react';
import type { BaseProps, DataSourceItem, NormalizedObjectItem, ObjectItem } from './types';
/**
 * util module
 */
/**
 * 是否是单选模式
 * @param mode - 模式
 * @returns is single mode
 */
export declare function isSingle(mode?: string | null): boolean;
/**
 * 在 Select 中，认为 null 和 undefined 都是空值
 * @param n - any object
 * @returns n is null or undefined
 */
export declare function isNull(n?: unknown): n is null | undefined;
/**
 * 将字符串中的正则表达式关键字符添加转义
 * @param str - 字符串
 * @returns
 */
export declare function escapeForReg(str: string): string;
/**
 * filter by key
 * @param key - filter key
 * @param item - item object
 * @returns it's filtered
 */
export declare function filter(key: string | number, item: ObjectItem): boolean;
/**
 * loop map
 * @param dataSource - 数据源
 * @param callback - 回调
 */
export declare function loopMap(
    dataSource: NormalizedObjectItem[],
    callback: (option: NormalizedObjectItem) => NormalizedObjectItem | undefined | null | false
): NormalizedObjectItem[];
/**
 * Parse dataSource from MenuItem
 * @param children - children
 * @param deep - recursion deep level
 */
export declare function parseDataSourceFromChildren(
    children: ReactNode,
    deep?: number
): NormalizedObjectItem[];
export declare function isObjectDataSourceItem(item: DataSourceItem): item is ObjectItem;
/**
 * Normalize dataSource
 * @param dataSource - dataSource
 * @param deep -  recursion deep level
 * ----
 * value priority: value \> 'index'
 * label priority: label \> 'value' \> 'index'
 * disabled: disabled === true
 */
export declare function normalizeDataSource(
    dataSource: DataSourceItem[],
    deep?: number,
    showDataSourceChildren?: boolean
): NormalizedObjectItem[];
/**
 * Get flatten dataSource
 * @param dataSource - structured dataSource
 */
export declare function flattingDataSource(
    dataSource: NormalizedObjectItem[]
): NormalizedObjectItem[];
export declare function filterDataSource(
    dataSource: NormalizedObjectItem[] | undefined,
    key: string | number | undefined | null,
    filter: (key: string | number, item: NormalizedObjectItem) => boolean,
    addonKey?: boolean
): NormalizedObjectItem[];
/**
 * compute valueDataSource by new value
 * @param value - 数据
 * @param mapValueDS - 上个 value 的缓存数据 value =\> \{value,label\} 的映射关系表
 * @param mapMenuDS - 通过 dataSource 建立 value =\> \{value,label\} 的映射关系表
 * @returns value: [value]; valueDS: [\{value,label\}]; mapValueDS: \{value: \{value,label\}\}
 */
export declare function getValueDataSource(
    value: BaseProps['value'],
    mapValueDS?: Record<string, ObjectItem>,
    mapMenuDS?: Record<string, ObjectItem>
): {
    value?: ObjectItem['value'][] | ObjectItem['value'];
    valueDS?: ObjectItem | ObjectItem[];
    mapValueDS?: Record<string, ObjectItem>;
};
/**
 * Get Selected key from value
 * @param value - structured dataSource
 * @returns
 */
export declare function valueToSelectKey(value: DataSourceItem): ObjectItem['value'];

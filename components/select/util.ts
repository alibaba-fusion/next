import { Children } from 'react';
import type {
    BaseProps,
    DataSourceItem,
    NormalizedObjectItem,
    ObjectItem,
    ReactElementWithTypeMark,
} from './types';

/**
 * util module
 */

/**
 * 是否是单选模式
 * @param mode - 模式
 * @returns is single mode
 */
export function isSingle(mode?: string | null) {
    return !mode || mode === 'single';
}

/**
 * 在 Select 中，认为 null 和 undefined 都是空值
 * @param n - any object
 * @returns n is null or undefined
 */
export function isNull(n: unknown): n is null | undefined {
    return n === null || n === undefined;
}

/**
 * 将字符串中的正则表达式关键字符添加转义
 * @param str - 字符串
 * @returns
 */
export function escapeForReg(str: string) {
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * filter by key
 * @param key - filter key
 * @param item - item object
 * @returns it's filtered
 */
export function filter(key: string | number, item: ObjectItem) {
    const _key = escapeForReg(`${key}`);
    const regExp = new RegExp(`(${_key})`, 'ig');

    return regExp.test(`${item.value}`) || regExp.test(`${item.label}`);
}

/**
 * loop map
 * @param dataSource - 数据源
 * @param callback - 回调
 */
export function loopMap(
    dataSource: NormalizedObjectItem[],
    callback: (option: NormalizedObjectItem) => NormalizedObjectItem | undefined | null | false
) {
    const result: NormalizedObjectItem[] = [];
    dataSource.forEach(option => {
        if (option.children) {
            const children = loopMap(option.children, callback);
            result.push({
                ...option,
                children,
            });
        } else {
            const tmp = callback(option);
            tmp && result.push(tmp);
        }
    });
    return result;
}

/**
 * Parse dataSource from MenuItem
 * @param children - children
 * @param deep - recursion deep level
 */
export function parseDataSourceFromChildren(
    children: ReactElementWithTypeMark | ReactElementWithTypeMark[],
    deep = 0
): NormalizedObjectItem[] {
    const source: NormalizedObjectItem[] = [];

    Children.forEach(children, (child, index) => {
        if (!child) {
            return;
        }
        const { type, props: childProps } = child;
        const item2: NormalizedObjectItem & { deep: number } = { deep };

        let isOption = false;
        let isOptionGroup = false;

        if (
            (typeof type === 'function' && type._typeMark === 'next_select_option') ||
            type === 'option'
        ) {
            isOption = true;
        }
        if (
            (typeof type === 'function' && type._typeMark === 'next_select_option_group') ||
            type === 'optgroup'
        ) {
            isOptionGroup = true;
        }

        if (!isOption && !isOptionGroup) {
            return;
        }

        if (isOption) {
            // option
            // If children is a string, it can be used as value
            const isStrChild = typeof childProps.children === 'string';
            // value > key > string children > index
            item2.value =
                'value' in childProps
                    ? childProps.value
                    : 'key' in childProps
                      ? childProps.key
                      : isStrChild
                        ? childProps.children
                        : `${index}`;

            item2.label = childProps.label || childProps.children || `${item2.value}`;
            if ('title' in childProps) {
                item2.title = childProps.title;
            }
            childProps.disabled === true && (item2.disabled = true);
            // You can put your extra data here, and use it in `itemRender` or `labelRender`
            Object.assign(item2, childProps['data-extra'] || {});
        } else if (isOptionGroup && deep < 1) {
            // option group
            item2.label = childProps.label || 'Group';
            // parse children nodes
            item2.children = parseDataSourceFromChildren(childProps.children, deep + 1);
        }

        source.push(item2);
    });

    return source;
}

export function isObjectDataSourceItem(item: DataSourceItem): item is ObjectItem {
    return !(/string|boolean|number/.test(typeof item) || item === null || item === undefined);
}

/**
 * Normalize dataSource
 * @param dataSource - dataSource
 * @param deep -  recursion deep level
 * ----
 * value priority: value \> 'index'
 * label priority: label \> 'value' \> 'index'
 * disabled: disabled === true
 */
export function normalizeDataSource(
    dataSource: DataSourceItem[],
    deep = 0,
    showDataSourceChildren = true
) {
    const source: NormalizedObjectItem[] = [];

    dataSource.forEach((item, index) => {
        // enable array of basic type
        if (!isObjectDataSourceItem(item)) {
            item = { label: `${item}`, value: item };
        }

        // filter off addon item
        if (item && item.__isAddon) {
            return;
        }

        const item2: NormalizedObjectItem & { deep: number } = { deep };
        // deep < 1: only 2 level allowed
        if (Array.isArray(item.children) && deep < 1 && showDataSourceChildren) {
            // handle group
            item2.label = item.label || item.value || `Group ${index}`;
            // parse children
            item2.children = normalizeDataSource(item.children, deep + 1);
        } else {
            const { value, label, disabled, title, ...others } = item;
            // undefined 认为是没传取 index 值替代
            item2.value = typeof value !== 'undefined' ? value : `${index}`;
            item2.label = label || `${item2.value}`;
            if ('title' in item) {
                item2.title = title;
            }
            disabled === true && (item2.disabled = true);

            Object.assign(item2, others);
        }

        source.push(item2);
    });

    return source;
}

/**
 * Get flatten dataSource
 * @param dataSource - structured dataSource
 */
export function flattingDataSource(dataSource: NormalizedObjectItem[]) {
    const source: NormalizedObjectItem[] = [];

    dataSource.forEach(item => {
        if (Array.isArray(item.children)) {
            source.push(...flattingDataSource(item.children));
        } else {
            source.push(item);
        }
    });

    return source;
}

export function filterDataSource(
    dataSource: NormalizedObjectItem[] | undefined,
    key: string | number | undefined | null,
    filter: (key: string | number, item: NormalizedObjectItem) => boolean,
    addonKey?: boolean
) {
    if (!Array.isArray(dataSource)) {
        return [];
    }
    if (typeof key === 'undefined' || key === null) {
        return ([] as NormalizedObjectItem[]).concat(dataSource);
    }

    let addKey = true;
    const menuDataSource = loopMap(dataSource, option => {
        if (key === `${option.value}`) {
            addKey = false;
        }
        return filter(key, option) && !option.__isAddon && option;
    });

    // if key not in menuDataSource, add key to dataSource
    if (addonKey && key && addKey) {
        menuDataSource.unshift({
            value: key,
            label: key,
            __isAddon: true,
        });
    }

    return menuDataSource;
}

function getKeyItemByValue(value: DataSourceItem, valueMap: Record<string, ObjectItem>) {
    let item;

    if (typeof value === 'object') {
        if (value!.hasOwnProperty('value')) {
            item = value;
        } else {
            item = {
                value: '',
                ...value,
            };
        }
    } else {
        item = valueMap[`${value}`] || {
            value,
            label: value,
        };
    }

    return item as ObjectItem;
}

/**
 * compute valueDataSource by new value
 * @param value - 数据
 * @param mapValueDS - 上个 value 的缓存数据 value =\> \{value,label\} 的映射关系表
 * @param mapMenuDS - 通过 dataSource 建立 value =\> \{value,label\} 的映射关系表
 * @returns value: [value]; valueDS: [\{value,label\}]; mapValueDS: \{value: \{value,label\}\}
 */
export function getValueDataSource(
    value: BaseProps['value'],
    mapValueDS: Record<string, ObjectItem>,
    mapMenuDS: Record<string, ObjectItem>
): {
    value?: ObjectItem['value'][] | ObjectItem['value'];
    valueDS?: ObjectItem | ObjectItem[];
    mapValueDS?: Record<string, ObjectItem>;
} {
    if (isNull(value)) {
        return {};
    }

    const newValue: ObjectItem['value'][] = [];
    const newValueDS: ObjectItem[] = [];
    const newMapValueDS: Record<string, ObjectItem> = {};
    const _newMapDS = Object.assign({}, mapValueDS, mapMenuDS);

    if (Array.isArray(value)) {
        value.forEach(v => {
            const item = getKeyItemByValue(v, _newMapDS);

            newValueDS.push(item);
            newMapValueDS[`${item.value}`] = item;
            newValue.push(item.value);
        });

        return {
            value: newValue, // [value]
            valueDS: newValueDS, // [{value,label}]
            mapValueDS: newMapValueDS, // {value: {value,label}}
        };
    } else {
        const item = getKeyItemByValue(value, _newMapDS);

        return {
            value: item.value,
            valueDS: item,
            mapValueDS: {
                [`${item.value}`]: item,
            },
        };
    }
}

/**
 * Get Selected key from value
 * @param value - structured dataSource
 * @returns
 */
export function valueToSelectKey(value: DataSourceItem): ObjectItem['value'] {
    let val;
    if (typeof value === 'object' && value!.hasOwnProperty('value')) {
        val = value!.value;
    } else {
        val = value;
    }
    return `${val}`;
}

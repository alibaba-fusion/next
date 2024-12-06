"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueToSelectKey = exports.getValueDataSource = exports.filterDataSource = exports.flattingDataSource = exports.normalizeDataSource = exports.isObjectDataSourceItem = exports.parseDataSourceFromChildren = exports.loopMap = exports.filter = exports.escapeForReg = exports.isNull = exports.isSingle = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
/**
 * util module
 */
/**
 * 是否是单选模式
 * @param mode - 模式
 * @returns is single mode
 */
function isSingle(mode) {
    return !mode || mode === 'single';
}
exports.isSingle = isSingle;
/**
 * 在 Select 中，认为 null 和 undefined 都是空值
 * @param n - any object
 * @returns n is null or undefined
 */
function isNull(n) {
    return n === null || n === undefined;
}
exports.isNull = isNull;
/**
 * 将字符串中的正则表达式关键字符添加转义
 * @param str - 字符串
 * @returns
 */
function escapeForReg(str) {
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
exports.escapeForReg = escapeForReg;
/**
 * filter by key
 * @param key - filter key
 * @param item - item object
 * @returns it's filtered
 */
function filter(key, item) {
    var _key = escapeForReg("".concat(key));
    var regExp = new RegExp("(".concat(_key, ")"), 'ig');
    return regExp.test("".concat(item.value)) || regExp.test("".concat(item.label));
}
exports.filter = filter;
/**
 * loop map
 * @param dataSource - 数据源
 * @param callback - 回调
 */
function loopMap(dataSource, callback) {
    var result = [];
    dataSource.forEach(function (option) {
        if (option.children) {
            var children = loopMap(option.children, callback);
            result.push(tslib_1.__assign(tslib_1.__assign({}, option), { children: children }));
        }
        else {
            var tmp = callback(option);
            tmp && result.push(tmp);
        }
    });
    return result;
}
exports.loopMap = loopMap;
/**
 * Parse dataSource from MenuItem
 * @param children - children
 * @param deep - recursion deep level
 */
function parseDataSourceFromChildren(children, deep) {
    if (deep === void 0) { deep = 0; }
    var source = [];
    react_1.Children.forEach(children, function (child, index) {
        if (!child) {
            return;
        }
        var _a = child, type = _a.type, childProps = _a.props;
        var item2 = { deep: deep };
        var isOption = false;
        var isOptionGroup = false;
        if ((typeof type === 'function' && type._typeMark === 'next_select_option') ||
            type === 'option') {
            isOption = true;
        }
        if ((typeof type === 'function' && type._typeMark === 'next_select_option_group') ||
            type === 'optgroup') {
            isOptionGroup = true;
        }
        if (!isOption && !isOptionGroup) {
            return;
        }
        if (isOption) {
            // option
            // If children is a string, it can be used as value
            var optionTypeChildProps = childProps;
            var isStrChild = typeof optionTypeChildProps.children === 'string';
            // value > key > string children > index
            item2.value =
                'value' in optionTypeChildProps
                    ? optionTypeChildProps.value
                    : 'key' in optionTypeChildProps
                        ? optionTypeChildProps.key
                        : isStrChild
                            ? optionTypeChildProps.children
                            : "".concat(index);
            item2.label =
                optionTypeChildProps.label || optionTypeChildProps.children || "".concat(item2.value);
            if ('title' in optionTypeChildProps) {
                item2.title = optionTypeChildProps.title;
            }
            optionTypeChildProps.disabled === true && (item2.disabled = true);
            // You can put your extra data here, and use it in `itemRender` or `labelRender`
            Object.assign(item2, optionTypeChildProps['data-extra'] || {});
        }
        else if (isOptionGroup && deep < 1) {
            // option group
            item2.label = childProps.label || 'Group';
            // parse children nodes
            item2.children = parseDataSourceFromChildren(childProps.children, deep + 1);
        }
        source.push(item2);
    });
    return source;
}
exports.parseDataSourceFromChildren = parseDataSourceFromChildren;
function isObjectDataSourceItem(item) {
    return !(/string|boolean|number/.test(typeof item) || item === null || item === undefined);
}
exports.isObjectDataSourceItem = isObjectDataSourceItem;
/**
 * Normalize dataSource
 * @param dataSource - dataSource
 * @param deep -  recursion deep level
 * ----
 * value priority: value \> 'index'
 * label priority: label \> 'value' \> 'index'
 * disabled: disabled === true
 */
function normalizeDataSource(dataSource, deep, showDataSourceChildren) {
    if (deep === void 0) { deep = 0; }
    if (showDataSourceChildren === void 0) { showDataSourceChildren = true; }
    var source = [];
    dataSource.forEach(function (item, index) {
        // enable array of basic type
        if (!isObjectDataSourceItem(item)) {
            item = { label: "".concat(item), value: item };
        }
        // filter off addon item
        if (item && item.__isAddon) {
            return;
        }
        var item2 = { deep: deep };
        // deep < 1: only 2 level allowed
        if (Array.isArray(item.children) && deep < 1 && showDataSourceChildren) {
            // handle group
            item2.label = item.label || item.value || "Group ".concat(index);
            // parse children
            item2.children = normalizeDataSource(item.children, deep + 1);
        }
        else {
            var value = item.value, label = item.label, disabled = item.disabled, title = item.title, others = tslib_1.__rest(item, ["value", "label", "disabled", "title"]);
            // undefined 认为是没传取 index 值替代
            item2.value = typeof value !== 'undefined' ? value : "".concat(index);
            item2.label = label || "".concat(item2.value);
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
exports.normalizeDataSource = normalizeDataSource;
/**
 * Get flatten dataSource
 * @param dataSource - structured dataSource
 */
function flattingDataSource(dataSource) {
    var source = [];
    dataSource.forEach(function (item) {
        if (Array.isArray(item.children)) {
            source.push.apply(source, tslib_1.__spreadArray([], tslib_1.__read(flattingDataSource(item.children)), false));
        }
        else {
            source.push(item);
        }
    });
    return source;
}
exports.flattingDataSource = flattingDataSource;
function filterDataSource(dataSource, key, filter, addonKey) {
    if (!Array.isArray(dataSource)) {
        return [];
    }
    if (typeof key === 'undefined' || key === null) {
        return [].concat(dataSource);
    }
    var addKey = true;
    var menuDataSource = loopMap(dataSource, function (option) {
        if (key === "".concat(option.value)) {
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
exports.filterDataSource = filterDataSource;
function getKeyItemByValue(value, valueMap) {
    var item;
    if (typeof value === 'object') {
        if (value.hasOwnProperty('value')) {
            item = value;
        }
        else {
            item = tslib_1.__assign({ value: '' }, value);
        }
    }
    else {
        item = valueMap["".concat(value)] || {
            value: value,
            label: value,
        };
    }
    return item;
}
/**
 * compute valueDataSource by new value
 * @param value - 数据
 * @param mapValueDS - 上个 value 的缓存数据 value =\> \{value,label\} 的映射关系表
 * @param mapMenuDS - 通过 dataSource 建立 value =\> \{value,label\} 的映射关系表
 * @returns value: [value]; valueDS: [\{value,label\}]; mapValueDS: \{value: \{value,label\}\}
 */
function getValueDataSource(value, mapValueDS, mapMenuDS) {
    var _a;
    if (isNull(value)) {
        return {};
    }
    var newValue = [];
    var newValueDS = [];
    var newMapValueDS = {};
    var _newMapDS = Object.assign({}, mapValueDS, mapMenuDS);
    if (Array.isArray(value)) {
        value.forEach(function (v) {
            var item = getKeyItemByValue(v, _newMapDS);
            newValueDS.push(item);
            newMapValueDS["".concat(item.value)] = item;
            newValue.push(item.value);
        });
        return {
            value: newValue, // [value]
            valueDS: newValueDS, // [{value,label}]
            mapValueDS: newMapValueDS, // {value: {value,label}}
        };
    }
    else {
        var item = getKeyItemByValue(value, _newMapDS);
        return {
            value: item.value,
            valueDS: item,
            mapValueDS: (_a = {},
                _a["".concat(item.value)] = item,
                _a),
        };
    }
}
exports.getValueDataSource = getValueDataSource;
/**
 * Get Selected key from value
 * @param value - structured dataSource
 * @returns
 */
function valueToSelectKey(value) {
    var val;
    if (typeof value === 'object' && value.hasOwnProperty('value')) {
        val = value.value;
    }
    else {
        val = value;
    }
    return "".concat(val);
}
exports.valueToSelectKey = valueToSelectKey;
